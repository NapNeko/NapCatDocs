# NapCat 插件开发概览

NapCat 提供了一套灵活的插件系统，支持开发者扩展 Bot 的功能。本文档介绍 NapCat 插件的开发流程。

::: tip 前置知识
如果你还不了解 NapCat 插件系统的工作原理，建议先阅读 [插件机制原理](./mechanism.md)。
:::

::: tip 说明
推荐使用 [napcat-plugin-template](https://github.com/NapNeko/napcat-plugin-template) 模板仓库快速开始开发。
:::

## 开发前准备

在开始开发之前，你需要了解以下资源：

- **[napcat-plugin-template](https://github.com/NapNeko/napcat-plugin-template)**: 官方提供的插件开发模板，内置了构建流程和 CI/CD，推荐使用。
- **[napcat-plugin-index](https://github.com/NapNeko/napcat-plugin-index)**: 插件索引仓库，发布后的插件会收录在这里。


## 快速开始

### 1. 使用模板创建项目

最简单的方式是直接通过 [napcat-plugin-template](https://github.com/NapNeko/napcat-plugin-template) 创建你的 GitHub 仓库。该模板提供了完整的开发环境配置，包括 TypeScript 支持、构建脚本以及 CI/CD 流程。

### 2. 项目结构说明

一个标准的 NapCat 插件项目结构如下 (以模板为例)：

```
napcat-plugin-template/
├── src/
│   ├── index.ts              # 插件主入口，负责导出生命周期函数
│   ├── config.ts             # 配置文件定义及 WebUI Schema
│   ├── types.ts              # TypeScript 类型定义
│   ├── core/
│   │   └── state.ts          # 全局状态管理
│   ├── handlers/             # 业务逻辑处理模块
│   │   └── message-handler.ts # 示例：消息处理器
│   ├── services/             # 服务层，API 路由等
│   └── webui/                # (可选) 插件的 WebUI 前端代码
├── package.json              # 项目依赖及元数据
└── tsconfig.json             # TypeScript 配置
```

## 编写核心逻辑

在 `src/index.ts` 中，你需要导出插件的生命周期函数。这是插件被 NapCat 加载时执行的入口点。请务必遵循 NapCat 的生命周期。

### 插件入口 (`src/index.ts`)

插件需要导出 `PluginModule` 接口中定义的生命周期函数。其中 `plugin_init` 是唯一必选的函数。

```typescript
import type { PluginModule, OB11Message, OB11PostSendMsg } from "napcat-types";
import { EventType } from "napcat-types";

// 1. 插件初始化（必选）
// 插件加载时调用，用于初始化资源、注册路由等
export const plugin_init: PluginModule['plugin_init'] = async (ctx) => {
    ctx.logger.log('My Plugin has been initialized!');
    
    // 初始化时可以做一些准备工作
};

// 2. 消息处理（可选）
// 收到事件时调用，需要通过 post_type 判断是否为消息事件
export const plugin_onmessage: PluginModule['plugin_onmessage'] = async (ctx, event) => {
    // 过滤非消息事件
    if (event.post_type !== EventType.MESSAGE) return;

    // 简单的 Ping-Pong 示例
    if (event.raw_message === 'ping') {
        ctx.logger.log(`收到来自 ${event.user_id} 的 ping`);

        // 构造发送消息的参数
        const params: OB11PostSendMsg = {
            message: 'pong',
            message_type: event.message_type,
            ...(event.message_type === 'group' && event.group_id
                ? { group_id: String(event.group_id) }
                : {}),
            ...(event.message_type === 'private' && event.user_id
                ? { user_id: String(event.user_id) }
                : {}),
        };
        // 通过 actions 调用 OneBot11 Action (需传入 adapter 和 config)
        await ctx.actions.call('send_msg', params, ctx.adapterName, ctx.pluginManager.config);
    }
};

// 3. 事件处理（可选）
// 处理所有 OneBot 事件（包括通知、请求等）
export const plugin_onevent: PluginModule['plugin_onevent'] = async (ctx, event) => {
    ctx.logger.log('收到事件:', event);
};

// 4. 插件卸载（可选）
// 插件重载或卸载时调用，必须清理定时器、关闭连接等
export const plugin_cleanup: PluginModule['plugin_cleanup'] = (ctx) => {
    ctx.logger.log('My Plugin is cleaning up...');
    // 清理资源
};
```

::: tip 关于 actions.call 调用
`ctx.actions.call(actionName, params, adapter, config)` 需要 4 个参数：
- `actionName`: OneBot11 Action 名称（如 `'send_msg'`、`'get_login_info'` 等）
- `params`: 请求参数
- `adapter`: 适配器名称，使用 `ctx.adapterName`
- `config`: 网络配置，使用 `ctx.pluginManager.config`
:::

### 生命周期函数一览

| 函数名 | 是否必选 | 说明 |
| --- | --- | --- |
| `plugin_init` | 必选 | 插件加载时调用，用于初始化 |
| `plugin_onmessage` | 可选 | 收到事件时调用（需通过 `post_type` 判断事件类型） |
| `plugin_onevent` | 可选 | 收到所有 OneBot 事件时调用 |
| `plugin_cleanup` | 可选 | 插件卸载/重载时调用 |
| `plugin_config_schema` | 可选 | 导出配置 Schema（同 `plugin_config_ui`） |
| `plugin_config_ui` | 可选 | 导出配置 Schema，用于在 WebUI 生成配置面板 |
| `plugin_get_config` | 可选 | 获取插件配置的自定义实现 |
| `plugin_set_config` | 可选 | 保存插件配置的自定义实现 |
| `plugin_config_controller` | 可选 | 配置 UI 控制器，用于动态控制配置界面 |
| `plugin_on_config_change` | 可选 | 配置变更时触发的回调 |

### 消息处理的最佳实践

为了保持代码整洁，建议将复杂的业务逻辑分离到 `src/handlers` 目录下的独立文件中，而不是全部写在 `plugin_onmessage` 里。

例如创建 `src/handlers/message.ts`：

```typescript
import type { NapCatPluginContext, OB11Message, OB11PostSendMsg } from "napcat-types";

export async function handleGroupMessage(ctx: NapCatPluginContext, message: OB11Message) {
  const { raw_message, group_id } = message;

  // 封装发送群消息的辅助函数
  async function sendGroupMsg(text: string) {
    const params: OB11PostSendMsg = {
      message: text,
      message_type: 'group',
      group_id: String(group_id),
    };
    await ctx.actions.call('send_msg', params, ctx.adapterName, ctx.pluginManager.config);
  }

  // 示例：简单的关键词回复
  if (raw_message.includes("喵")) {
    await sendGroupMsg("喵喵喵？");
  }

  // 示例：调用 OneBot 11 Action
  if (raw_message === "#info") {
       const loginInfo = await ctx.actions.call(
       'get_login_info', void 0, ctx.adapterName, ctx.pluginManager.config
     );
     await sendGroupMsg(`当前登录账号: ${loginInfo.nickname} (${loginInfo.user_id})`);
  }
}
```

然后在 `index.ts` 中引入使用：

```typescript
import type { PluginModule } from "napcat-types";
import { EventType } from "napcat-types";
import { handleGroupMessage } from "./handlers/message";

export const plugin_onmessage: PluginModule['plugin_onmessage'] = async (ctx, event) => {
    if (event.post_type !== EventType.MESSAGE) return;
    if (event.message_type === "group") {
        await handleGroupMessage(ctx, event);
    }
};
```

### NapCatPluginContext 核心属性

`NapCatPluginContext` 是插件开发中最重要的上下文对象，包含以下属性：

- **`ctx.core`**: `NapCatCore` 实例，底层核心。
- **`ctx.oneBot`**: `NapCatOneBot11Adapter` 实例，OneBot11 适配器。
- **`ctx.actions`**: `ActionMap` 对象，通过 `ctx.actions.call(actionName, params, ctx.adapterName, ctx.pluginManager.config)` 调用 OneBot11 Action。
- **`ctx.pluginName`**: 当前插件名称。
- **`ctx.pluginPath`**: 插件所在目录路径。
- **`ctx.configPath`**: 插件配置文件路径。
- **`ctx.dataPath`**: 插件数据存储目录路径。
- **`ctx.NapCatConfig`**: 配置构建工具类，提供 `text`/`number`/`boolean`/`select` 等静态方法。
- **`ctx.adapterName`**: 适配器名称。
- **`ctx.pluginManager`**: 插件管理器，支持查询/启停其他插件。
- **`ctx.logger`**: 使用 NapCat 内置的日志系统，保持日志格式统一。
- **`ctx.router`**: 路由注册器，用于注册 API 路由、页面和静态文件。
- **`ctx.getPluginExports(pluginId)`**: 获取其他已加载插件的导出对象。


## 配置文件

NapCat 插件支持通过导出 `plugin_config_ui` 或 `plugin_config_schema` 来定义配置项。这允许用户在 WebUI 中修改插件的设置。

```typescript
import { PluginConfigSchema } from 'napcat-types';

export const plugin_config_ui: PluginConfigSchema = [
  {
    key: 'enable',
    label: '启用插件',
    type: 'boolean',
    default: true,
    description: '是否启用本插件的核心功能'
  },
  {
    key: 'prefix',
    label: '命令前缀',
    type: 'string',
    default: '/',
    placeholder: '请输入命令前缀，例如 / 或 #',
    description: '触发命令的前缀符号'
  }
];
```

## WebUI 开发 (可选)

如果插件需要提供图形化界面，可以在 `src/webui` 目录下进行 React 开发。模板中已经配置好了 Vite 构建脚本，运行 `npm run build` 时，构建后的静态资源会被自动打包进插件中，用户可以通过 NapCat 的管理界面访问。

## 发布插件

### 发布插件流程

1. **配置 `package.json`**: 确保你的 `package.json` 包含正确的插件元数据：
   ```json
   {
     "name": "napcat-plugin-your-plugin",
     "plugin": "我的插件",
     "version": "1.0.0",
     "main": "index.mjs",
     "description": "这是我的 NapCat 插件",
     "author": "YourName",
     "napcat": {
       "tags": ["工具", "娱乐"], 
       "minVersion": "4.14.0",
       "homepage": "https://github.com/yourname/napcat-plugin-your-plugin" 
     }
   }
   ```
2. **发布版本**: 推送 `v*` 格式的 Git Tag (例如 `v1.0.0`) 到你的远程仓库。
3. **CI/CD 自动发布**: 如果你基于模板开发并配置了 Secret，GitHub Actions 会自动构建并发布 Release。
4. **提交索引**: 同时 CI 会自动向 [napcat-plugin-index](https://github.com/NapNeko/napcat-plugin-index) 提交 PR。等待维护者审核合并后，你的插件就会出现在 NapCat 的插件市场中供用户下载。

## 自动化发布 (CI/CD)

NapCat 插件模板内置了 GitHub Actions 工作流，可自动完成构建、发布 Release 以及提交到插件市场的全过程。

### 工作流介绍

模板仓库包含两个主要的工作流文件：

1. **`release.yml`**: 负责插件的构建和 Release 发布。
    - **触发条件**: 当你推送 `v*` 格式的 tag (如 `v1.0.0`) 时自动触发。
    - **主要任务**:
        - 安装依赖 (`pnpm install`)
        - 构建插件 (`npm run build`)
        - 打包构建产物为 `.zip` 文件
        - 创建 GitHub Release 并上传 `.zip` 包

2. **`update-index.yml`**: 负责将发布后的插件自动提交到 [NapCat 插件索引仓库](https://github.com/NapNeko/napcat-plugin-index)。
    - **触发条件**: 当 `release.yml` 成功发布 Release 后触发。
    - **主要任务**:
        - 抓取 `package.json` 中的插件元数据 (版本、描述、作者等)
        - 向 NapCat 插件索引仓库提交 Pull Request (PR)
        - 等待仓库维护者审核合并

### 配置步骤

为了让自动提交索引的功能正常工作，你需要进行少量的配置：

#### 1. 设置 Repository Secret

由于 GitHub Actions 默认权限无法跨仓库提交 PR，你需要提供一个具有权限的 Token。

1. **生成 Token**:
    - 访问 [GitHub Developer Settings](https://github.com/settings/tokens)
    - 生成一个新的 **Personal Access Token (Classic)**
    - 勾选 `public_repo` (对于公开仓库) 权限
    - 复制生成的 Token

2. **配置 Secret**:
    - 进入你的插件仓库 -> `Settings` -> `Secrets and variables` -> `Actions`
    - 点击 `New repository secret`
    - Name: `INDEX_PAT` (必须完全一致)
    - Value: 粘贴刚才复制的 Token
    - 点击 `Add secret` 保存

#### 2. 完善 `package.json`

自动化脚本会从 `package.json` 读取插件信息，请务必完整填写：

```json
{
  "name": "napcat-plugin-demo",       // 插件ID (必须以 napcat-plugin- 开头)
  "plugin": "插件显示名称",           // 插件在 WebUI 中的显示名称
  "version": "1.0.0",                 // 版本号
  "main": "index.mjs",                // 入口文件
  "description": "这是插件描述",        // 插件描述
  "author": "YourName",               // 作者
  "napcat": {
    "tags": ["工具", "娱乐"],          // 插件标签
    "minVersion": "4.14.0",           // 最低支持的 NapCat 版本
    "homepage": "https://..."         // 项目主页
  }
}
```

### 完整的发布操作

配置完成后，发布新版本的流程如下：

1. **修改版本号**: 更新 `package.json` 中的 `version` 字段 (例如 `1.0.1`)。
2. **提交代码**: 将修改推送到 GitHub。
3. **打标签**:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```
4. **等待执行**:
    - GitHub Actions 会自动运行 `release.yml` 构建并发布 Release。
    - 随后触发 `update-index.yml`，自动向官方索引仓库提交 PR。
5. **完成**: 等待 PR 被合并后，插件将收录至 NapCat 插件市场。


## 另请参阅

- [热重载开发](./hot-reload.md) — 使用调试服务实现改代码即时生效，无需重启 NapCat
- [NapCat 插件模板](https://github.com/NapNeko/napcat-plugin-template)
- [NapCat 插件索引](https://github.com/NapNeko/napcat-plugin-index)

