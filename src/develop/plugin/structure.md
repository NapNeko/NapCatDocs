# 项目结构与最佳实践

NapCat 插件模板（`napcat-plugin-template`）提供了一套经过生产验证的项目结构。理解该结构有助于编写更易维护和扩展的插件。

## 目录结构详解

以下是一个标准的插件项目的目录树：

```
src/
├── index.ts              # [入口] 插件的主入口文件
├── config.ts             # [配置] 定义插件配置结构及默认值
├── types.ts              # [类型] 定义插件内部使用的 TypeScript 类型
├── core/
│   └── state.ts          # [状态] 全局状态管理单例
├── handlers/             # [逻辑] 具体的业务逻辑处理
│   └── message-handler.ts
├── services/             # [服务] 外部服务接口或复杂功能封装
│   └── api-service.ts
└── webui/                # [前端] 插件的 WebUI 界面代码
```

### 1. `index.ts` - 插件入口

这是插件被 NapCat 加载的地方。它的主要职责是：
- 导出插件的生命周期函数（实现 `PluginModule` 接口）。
- 在 `plugin_init` 中初始化全局状态、注册路由等。
- 在 `plugin_onmessage` 中处理消息。
- 在 `plugin_cleanup` 中清理资源。

**最佳实践**：不要在 `index.ts` 中编写具体的业务逻辑。应该将逻辑委托给 `handlers/` 中的函数。

### 2. `core/state.ts` - 全局状态管理

插件通常需要维护一些全局状态，例如：
- NapCat 的上下文对象 (`NapCatPluginContext`)
- 当前的配置信息 (`config`)
- 插件的元数据（名称、路径等）

模板中使用了一个单例模式的 `PluginState` 类来管理这些信息。这种方式允许在项目的任意位置（包括深层嵌套的函数中）直接访问 `ctx` 或 `config`，无需逐层传递参数。

```typescript
// 使用示例
import { pluginState } from "../core/state";

export function doSomething() {
    // 直接获取 logger
    pluginState.logger.info("Doing something...");
    
    // 直接获取配置
    if (pluginState.config.enableFeatureA) {
        // ...
    }
}
```

### 3. `handlers/` - 业务逻辑

这里存放具体的事件处理函数。
- `message-handler.ts`: 处理群消息、私聊消息。
- `request-handler.ts`: 处理加群请求、好友请求。
- `notice-handler.ts`: 处理群通知（如成员变动）。

建议将不同类型的逻辑拆分到不同的文件中。

### 4. `services/` - 服务层

如果你的插件需要调用外部 API（如查询天气、获取游戏数据），或者包含复杂的独立功能模块（如定时任务管理器），建议放在 `services/` 目录下。

### 5. `webui/` - 前端界面

NapCat 插件支持通过 WebUI 提供图形化配置或展示界面。模板中预置了基于 React + Vite 的前端项目结构。
- 构建脚本会自动将 `webui/` 下的代码打包，并嵌入到插件发布包中。
- 在 `plugin_init` 中通过 `ctx.router.static` 将 WebUI 静态资源暴露给用户访问。

## 常用开发模式

### 依赖注入 vs 全局单例

虽然依赖注入（Dependency Injection）在大型应用中很常见，但在插件开发中，使用 **全局单例** (`pluginState`) 通常更简洁高效。它避免了在每个函数调用中透传 `ctx` 对象。

### 错误处理

在 `handlers` 中捕获错误非常重要，防止一个未捕获的异常导致整个插件甚至 Bot 崩溃。

```typescript
try {
    // 你的逻辑
} catch (e) {
    pluginState.logger.error("处理消息时发生错误", e);
}
```

### 配置热重载

NapCat 支持配置的热重载。当用户在 WebUI 中修改配置后，插件可以通过 `plugin_on_config_change` 钩子感知变化：

```typescript
import type { PluginModule } from "napcat-types";

export const plugin_on_config_change: PluginModule['plugin_on_config_change'] = async (_ctx, ui, key, value, _currentConfig) => {
    _ctx.logger.info(`配置项 ${key} 已变更为:`, value);
    // 根据变更更新内存中的状态
};
```

或者通过 `plugin_config_controller` 获得更完整的 UI 控制能力。
