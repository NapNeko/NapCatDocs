# 进阶功能开发

本章节将介绍 NapCat 插件的高级功能，包括高级 API 路由使用、数据持久化存储以及与其他插件的交互。

## 1. 高级路由与网络服务

`NapCatPluginContext` 提供了强大的路由注册能力，支持 GET/POST/PUT/DELETE 等多种 HTTP 方法，并自动处理插件路径前缀。

### 路由注册 API 概览

所有的路由注册方法都在 `ctx.router` 对象下，分为三类：

#### 需要鉴权的路由

路径前缀：`/api/Plugin/ext/<plugin-id>/`

| 方法 | 签名 | 说明 |
| --- | --- | --- |
| `get` | `(path, handler)` | 注册 GET 接口 |
| `post` | `(path, handler)` | 注册 POST 接口 |
| `put` | `(path, handler)` | 注册 PUT 接口 |
| `delete` | `(path, handler)` | 注册 DELETE 接口 |
| `api` | `(method, path, handler)` | 通用方法，`method` 支持 `'get' \| 'post' \| 'put' \| 'delete' \| 'patch' \| 'all'` |

#### 无需鉴权的路由

路径前缀：`/plugin/<plugin-id>/api/`

| 方法 | 签名 | 说明 |
| --- | --- | --- |
| `getNoAuth` | `(path, handler)` | 注册 GET 开放接口 |
| `postNoAuth` | `(path, handler)` | 注册 POST 开放接口 |
| `putNoAuth` | `(path, handler)` | 注册 PUT 开放接口 |
| `deleteNoAuth` | `(path, handler)` | 注册 DELETE 开放接口 |
| `apiNoAuth` | `(method, path, handler)` | 通用方法 |

#### 静态文件与页面

| 方法 | 签名 | 路径前缀 | 说明 |
| --- | --- | --- | --- |
| `static` | `(urlPath, localPath)` | `/plugin/<plugin-id>/files/<urlPath>/` | 注册本地静态文件服务 |
| `staticOnMem` | `(urlPath, files)` | `/plugin/<plugin-id>/mem/<urlPath>/` | 注册内存静态文件服务 |
| `page` | `(pageDefinition)` | `/plugin/<plugin-id>/page/<path>` | 注册单个页面 |
| `pages` | `(pageDefinitions)` | 同上 | 批量注册页面 |

### 请求/响应对象

路由处理器接收包装后的请求和响应对象：

```typescript
// 请求对象 PluginHttpRequest
interface PluginHttpRequest {
    path: string;                                        // 请求路径
    method: string;                                      // 请求方法
    query: Record<string, string | string[] | undefined>; // 查询参数
    body: unknown;                                       // 请求体
    headers: Record<string, string | string[] | undefined>; // 请求头
    params: Record<string, string>;                      // 路由参数
    raw: unknown;                                        // 原始请求对象
}

// 响应对象 PluginHttpResponse
interface PluginHttpResponse {
    status(code: number): PluginHttpResponse; // 设置状态码
    json(data: unknown): void;                // 发送 JSON 响应
    send(data: string | Buffer): void;        // 发送文本响应
    setHeader(name: string, value: string): PluginHttpResponse; // 设置响应头
    sendFile(filePath: string): void;         // 发送文件
    redirect(url: string): void;              // 重定向
    raw: unknown;                             // 原始响应对象
}
```

### 示例：实现一个 Webhook 接收器

假设你需要接收 GitHub Webhook 推送通知到 QQ 群：

```typescript
// src/services/webhook.ts
import type { NapCatPluginContext, OB11PostSendMsg } from "napcat-types";

export function registerWebhook(ctx: NapCatPluginContext) {
    // 注册无需鉴权的 POST 接口
    // 外部访问地址: http://napcat-ip:port/plugin/<your-plugin-id>/api/webhook/github
    ctx.router.postNoAuth('/webhook/github', async (req, res) => {
        const event = req.headers['x-github-event'];
        const payload = req.body as any;
        
        ctx.logger.info(`收到 GitHub 事件: ${event}`);
        
        if (event === 'push') {
            const repo = payload.repository.full_name;
            const pusher = payload.pusher.name;
            const msg = `项目 ${repo} 收到来自 ${pusher} 的新提交`;
            
            // 通过 actions 发送消息到群 (建议从配置读取群号)
            const params: OB11PostSendMsg = {
                message: msg,
                message_type: 'group',
                group_id: '123456',
            };
            await ctx.actions.call('send_msg', params, ctx.adapterName, ctx.pluginManager.config);
        }
        
        res.json({ status: 'ok' });
    });
}
```

## 2. 数据持久化

插件通常需要保存运行时数据（如签到记录、积分等），NapCat 提供了数据目录供插件使用。

### 获取数据目录

使用 `ctx.dataPath` 获取分配给当前插件的专属数据目录。也可以通过 `ctx.pluginManager.getPluginDataPath(pluginId)` 获取。

```typescript
import fs from 'fs';
import path from 'path';
import { NapCatPluginContext } from "napcat-types";

// 保存数据
function saveData(ctx: NapCatPluginContext, data: any) {
    const filePath = path.join(ctx.dataPath, 'data.json');
    // 确保目录存在（NapCat 通常会自动创建 dataPath，但为了保险）
    if (!fs.existsSync(ctx.dataPath)) {
        fs.mkdirSync(ctx.dataPath, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// 读取数据
function loadData(ctx: NapCatPluginContext) {
    const filePath = path.join(ctx.dataPath, 'data.json');
    if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    return {};
}
```

### 推荐：使用轻量级数据库

对于复杂数据，建议使用 `sqlite3` 或 `leveldb` (如 `keyv`)。

## 3. 插件间通信

有时候一个插件需要调用另一个插件的功能（例如积分插件调用经济插件的接口）。

### 使用 `ctx.getPluginExports`

NapCat 提供了 `ctx.getPluginExports<T>(pluginId)` 方法来获取其他已加载插件的导出对象（即该插件的 `PluginModule`）。

**插件 A (Provider)**:
```typescript
// src/index.ts
import { NapCatPluginContext } from "napcat-types";

export const plugin_init = (ctx: NapCatPluginContext) => {
    ctx.logger.log('Plugin A initialized');
};

// 导出公共方法供其他插件调用
export const somePublicMethod = () => {
    return "Hello from Plugin A";
}
```

**插件 B (Consumer)**:
```typescript
// src/index.ts
import { NapCatPluginContext, PluginModule } from "napcat-types";

// 定义 Plugin A 的导出类型（可选，用于类型安全）
interface PluginAExports extends PluginModule {
    somePublicMethod: () => string;
}

export const plugin_init = (ctx: NapCatPluginContext) => {
    // 获取插件 A 的导出，泛型参数用于类型提示
    const pluginA = ctx.getPluginExports<PluginAExports>('plugin-a-id');
    if (pluginA && pluginA.somePublicMethod) {
        console.log(pluginA.somePublicMethod()); // "Hello from Plugin A"
    }
}
```

## 4. 调试与日志

使用 `ctx.logger` 输出日志，日志会自动带上插件名称前缀，方便排查问题。

`ctx.logger` 实现了 `PluginLogger` 接口，提供以下方法：

```typescript
ctx.logger.log("普通日志");     // 通用日志输出
ctx.logger.debug("调试信息");   // 仅在 debug 模式显示
ctx.logger.info("普通信息");    // 信息级别
ctx.logger.warn("警告信息");    // 警告级别
ctx.logger.error("错误信息", new Error("oops")); // 错误级别
```

在开发过程中，建议开启 `debug: true` 配置以便通过控制台查看详细的调试日志。

::: tip 提示
NapCat 插件模板中，配置更新通常通过 WebUI 触发。插件可以通过 `plugin_on_config_change` 钩子实时感知配置变更，实现无需重启的热重载。
:::

## 5. 定时任务 (Cron Job)

如果你的插件需要定时执行任务（如每天早上发送早报），可以使用 `node-schedule` 或 `cron` 库。

**注意**: 在插件卸载 (`plugin_cleanup`) 时，**务必取消**所有定时任务，否则会导致内存泄漏或重复执行。

```typescript
// src/services/cron-service.ts
import cron from "node-cron";

let task: cron.ScheduledTask;

export function startDailyReport() {
    // 每天 8:00 执行
    task = cron.schedule("0 8 * * *", () => {
        console.log("发送早报...");
        // sendReport();
    });
}

export function stopDailyReport() {
    if (task) task.stop();
}
```

在 `src/index.ts` 中：

```typescript
import { NapCatPluginContext } from "napcat-types";
import { startDailyReport, stopDailyReport } from "./services/cron-service";

export const plugin_init = (ctx: NapCatPluginContext) => {
    startDailyReport();
};

export const plugin_cleanup = (ctx: NapCatPluginContext) => {
    stopDailyReport();
};
```

## 6. 插件管理器 API

通过 `ctx.pluginManager` 可以管理其他插件。`IPluginManager` 接口提供以下方法：

| 方法 | 说明 |
| --- | --- |
| `getPluginPath()` | 获取插件根目录 |
| `getPluginConfig()` | 获取插件启用状态配置 |
| `getAllPlugins()` | 获取所有已扫描的插件列表 |
| `getLoadedPlugins()` | 获取所有已加载的插件列表 |
| `getPluginInfo(pluginId)` | 获取指定插件信息 |
| `setPluginStatus(pluginId, enable)` | 启用/禁用插件 |
| `loadPluginById(pluginId)` | 加载指定插件 |
| `unregisterPlugin(pluginId)` | 注销插件 |
| `uninstallPlugin(pluginId, cleanData?)` | 卸载并删除插件 |
| `reloadPlugin(pluginId)` | 重新加载插件 |
| `loadDirectoryPlugin(dirname)` | 从目录加载插件 |
| `getPluginDataPath(pluginId)` | 获取插件数据目录 |
| `getPluginConfigPath(pluginId)` | 获取插件配置目录 |
