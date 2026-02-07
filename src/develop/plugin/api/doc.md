# NapCat 插件开发 API 参考文档

## NapCatPluginContext

插件的核心上下文对象，包含了几乎所有你需要的功能。在所有生命周期函数中作为第一个参数传入。

### 属性一览

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `core` | `NapCatCore` | NapCat 底层核心实例 |
| `oneBot` | `NapCatOneBot11Adapter` | OneBot11 协议适配器 |
| `actions` | `ActionMap` | OneBot11 Action 调用器 |
| `pluginName` | `string` | 当前插件名称 |
| `pluginPath` | `string` | 插件所在目录 |
| `configPath` | `string` | 插件配置文件路径 |
| `dataPath` | `string` | 插件数据存储目录 |
| `NapCatConfig` | `NapCatConfigClass` | 配置构建工具类 |
| `adapterName` | `string` | 适配器名称 |
| `pluginManager` | `IPluginManager` | 插件管理器 |
| `logger` | `PluginLogger` | 日志记录器 |
| `router` | `PluginRouterRegistry` | 路由注册器 |
| `getPluginExports` | `<T>(pluginId: string) => T \| undefined` | 获取其他插件的导出 |

### `ctx.actions`

OneBot11 Action 调用器。

**调用签名**:

```typescript
ctx.actions.call(actionName, params, ctx.adapterName, ctx.pluginManager.config)
```

- `actionName`: Action 名称（字符串）
- `params`: 请求参数（不同 action 参数不同，无参数时传 `void 0`）
- `adapter`: 适配器名称，使用 `ctx.adapterName`
- `config`: 网络配置，使用 `ctx.pluginManager.config`

**常用 Action 示例**:

```typescript
// 通用发送消息 (推荐用法)
const params: OB11PostSendMsg = {
    message: 'Hello',
    message_type: 'group',
    group_id: '123456',
};
await ctx.actions.call('send_msg', params, ctx.adapterName, ctx.pluginManager.config);

// 获取登录信息
const info = await ctx.actions.call('get_login_info', void 0, ctx.adapterName, ctx.pluginManager.config);

// 获取群列表
const groups = await ctx.actions.call('get_group_list', void 0, ctx.adapterName, ctx.pluginManager.config);

// 获取版本信息
const version = await ctx.actions.call('get_version_info', void 0, ctx.adapterName, ctx.pluginManager.config);

// 撤回消息
await ctx.actions.call('delete_msg', { message_id }, ctx.adapterName, ctx.pluginManager.config);
```

### `ctx.logger`

带有插件名称前缀的日志记录器，实现 `PluginLogger` 接口。

| 方法 | 说明 |
| --- | --- |
| `log(...)` | 输出普通日志 |
| `debug(...)` | 输出调试日志（仅 debug 模式可见） |
| `info(...)` | 输出信息日志 |
| `warn(...)` | 输出警告日志 |
| `error(...)` | 输出错误日志 |

### `ctx.pluginManager`

插件管理器接口 (`IPluginManager`)，提供对其他插件的管理能力。

| 方法 | 返回值 | 说明 |
| --- | --- | --- |
| `getPluginPath()` | `string` | 获取插件根目录 |
| `getPluginConfig()` | `PluginStatusConfig` | 获取插件启用状态配置 |
| `getAllPlugins()` | `PluginEntry[]` | 获取所有已扫描的插件列表 |
| `getLoadedPlugins()` | `PluginEntry[]` | 获取所有已加载的插件列表 |
| `getPluginInfo(pluginId)` | `PluginEntry \| undefined` | 获取指定插件信息 |
| `setPluginStatus(pluginId, enable)` | `Promise<void>` | 启用/禁用插件 |
| `loadPluginById(pluginId)` | `Promise<boolean>` | 加载指定插件 |
| `unregisterPlugin(pluginId)` | `Promise<void>` | 注销插件 |
| `uninstallPlugin(pluginId, cleanData?)` | `Promise<void>` | 卸载并删除插件 |
| `reloadPlugin(pluginId)` | `Promise<boolean>` | 重新加载插件 |
| `loadDirectoryPlugin(dirname)` | `Promise<void>` | 从目录加载插件 |
| `getPluginDataPath(pluginId)` | `string` | 获取插件数据目录 |
| `getPluginConfigPath(pluginId)` | `string` | 获取插件配置目录 |

### `ctx.router`

WebUI 和 API 路由注册器 (`PluginRouterRegistry`)。

#### 需要鉴权的路由

路径前缀：`/api/Plugin/ext/<plugin-id>/`

| 方法 | 签名 | 说明 |
| --- | --- | --- |
| `api` | `(method, path, handler)` | 注册指定 HTTP 方法的 API |
| `get` | `(path, handler)` | 注册 GET API |
| `post` | `(path, handler)` | 注册 POST API |
| `put` | `(path, handler)` | 注册 PUT API |
| `delete` | `(path, handler)` | 注册 DELETE API |

#### 无需鉴权的路由

路径前缀：`/plugin/<plugin-id>/api/`

| 方法 | 签名 | 说明 |
| --- | --- | --- |
| `apiNoAuth` | `(method, path, handler)` | 注册指定 HTTP 方法的开放 API |
| `getNoAuth` | `(path, handler)` | 注册 GET 开放 API |
| `postNoAuth` | `(path, handler)` | 注册 POST 开放 API |
| `putNoAuth` | `(path, handler)` | 注册 PUT 开放 API |
| `deleteNoAuth` | `(path, handler)` | 注册 DELETE 开放 API |

#### 页面与静态文件

| 方法 | 签名 | 路径前缀 | 说明 |
| --- | --- | --- | --- |
| `page` | `(pageDefinition)` | `/plugin/<plugin-id>/page/<path>` | 注册页面 |
| `pages` | `(pageDefinitions)` | 同上 | 批量注册页面 |
| `static` | `(urlPath, localPath)` | `/plugin/<plugin-id>/files/<urlPath>/` | 注册本地静态文件服务 |
| `staticOnMem` | `(urlPath, files)` | `/plugin/<plugin-id>/mem/<urlPath>/` | 注册内存静态文件服务 |

### `ctx.NapCatConfig`

配置构建工具类，提供便捷的静态方法生成 `PluginConfigItem`：

| 方法 | 签名 | 说明 |
| --- | --- | --- |
| `text` | `(key, label, defaultValue?, description?, reactive?)` | 文本输入 |
| `number` | `(key, label, defaultValue?, description?, reactive?)` | 数字输入 |
| `boolean` | `(key, label, defaultValue?, description?, reactive?)` | 布尔开关 |
| `select` | `(key, label, options, defaultValue?, description?, reactive?)` | 下拉单选 |
| `multiSelect` | `(key, label, options, defaultValue?, description?, reactive?)` | 下拉多选 |
| `html` | `(content)` | HTML 展示 |
| `plainText` | `(content)` | 纯文本展示 |
| `combine` | `(...items)` | 合并多个配置项为 Schema |

### `ctx.getPluginExports`

```typescript
getPluginExports<T = PluginModule>(pluginId: string): T | undefined
```

获取其他已加载插件的导出模块对象。支持泛型参数以获得类型提示。

## OB11Message 消息对象

当收到 `plugin_onmessage` 事件时，传递的消息对象。

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `message_id` | `number` | 消息 ID |
| `user_id` | `number` | 发送者 QQ |
| `group_id` | `number` | 群号（私聊时为 0） |
| `message_type` | `'private' \| 'group'` | 消息类型 |
| `raw_message` | `string` | 原始消息文本 |
| `message` | `MessageSegment[]` | 消息段数组 |
| `sender` | `OB11Sender` | 发送者信息 |
| `time` | `number` | 时间戳 |

---

更多详细类型定义请参考 TypeScript 提示或查阅 `napcat-types` 包。
