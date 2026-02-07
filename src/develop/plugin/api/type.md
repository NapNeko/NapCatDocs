# NapCat Types 定义参考

> 本文档列出了开发插件时最常用的类型定义。完整的类型定义请参考 napcat-types 源码。

::: warning 注意
随着 napcat-types 的更新，部分内容可能已过时，本文仅供参考。请以 napcat-types 最新源码为准。
:::

## 插件上下文

```typescript
export interface NapCatPluginContext {
    core: NapCatCore;
    oneBot: NapCatOneBot11Adapter;
    actions: ActionMap;
    pluginName: string;
    pluginPath: string;
    configPath: string;
    dataPath: string;
    NapCatConfig: NapCatConfigClass;
    adapterName: string;
    pluginManager: IPluginManager;
    logger: PluginLogger;
    router: PluginRouterRegistry;
    getPluginExports: <T = PluginModule>(pluginId: string) => T | undefined;
}
```

## 插件模块定义

```typescript
export interface PluginModule<T extends OB11EmitEventContent = OB11EmitEventContent, C = unknown> {
    // 必选：插件初始化
    plugin_init: (ctx: NapCatPluginContext) => void | Promise<void>;
    // 可选：消息/事件处理（需通过 event.post_type 判断事件类型）
    plugin_onmessage?: (ctx: NapCatPluginContext, event: OB11Message) => void | Promise<void>;
    // 可选：事件处理（非消息类 OneBot 事件）
    plugin_onevent?: (ctx: NapCatPluginContext, event: T) => void | Promise<void>;
    // 可选：插件卸载/清理
    plugin_cleanup?: (ctx: NapCatPluginContext) => void | Promise<void>;
    // 可选：配置 Schema（用于 WebUI 自动生成配置面板）
    plugin_config_schema?: PluginConfigSchema;
    // 可选：配置 UI（同 plugin_config_schema）
    plugin_config_ui?: PluginConfigSchema;
    // 可选：自定义配置读取
    plugin_get_config?: (ctx: NapCatPluginContext) => C | Promise<C>;
    // 可选：自定义配置保存
    plugin_set_config?: (ctx: NapCatPluginContext, config: C) => void | Promise<void>;
    // 可选：配置 UI 控制器（运行时动态控制配置界面）
    plugin_config_controller?: (
        ctx: NapCatPluginContext,
        ui: PluginConfigUIController,
        initialConfig: Record<string, unknown>
    ) => void | (() => void) | Promise<void | (() => void)>;
    // 可选：配置变更回调
    plugin_on_config_change?: (
        ctx: NapCatPluginContext,
        ui: PluginConfigUIController,
        key: string,
        value: unknown,
        currentConfig: Record<string, unknown>
    ) => void | Promise<void>;
}
```

## 配置 UI 定义

```typescript
export type PluginConfigSchema = PluginConfigItem[];

export interface PluginConfigItem {
    key: string;
    type: 'string' | 'number' | 'boolean' | 'select' | 'multi-select' | 'html' | 'text';
    label: string;
    description?: string;
    default?: unknown;
    options?: { label: string; value: string | number }[];
    placeholder?: string;
    /** 标记此字段为响应式：值变化时触发 schema 刷新 */
    reactive?: boolean;
    /** 是否隐藏此字段 */
    hidden?: boolean;
}
```

## 配置 UI 控制器

```typescript
export interface PluginConfigUIController {
    updateSchema: (schema: PluginConfigSchema) => void;
    updateField: (key: string, field: Partial<PluginConfigItem>) => void;
    removeField: (key: string) => void;
    addField: (field: PluginConfigItem, afterKey?: string) => void;
    showField: (key: string) => void;
    hideField: (key: string) => void;
    getCurrentConfig: () => Record<string, unknown>;
}
```

## 日志接口

```typescript
export interface PluginLogger {
    log(...args: unknown[]): void;
    debug(...args: unknown[]): void;
    info(...args: unknown[]): void;
    warn(...args: unknown[]): void;
    error(...args: unknown[]): void;
}
```

## 路由相关类型

```typescript
export type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'all';

export interface PluginRouterRegistry {
    // 需要鉴权
    api(method: HttpMethod, path: string, handler: PluginRequestHandler): void;
    get(path: string, handler: PluginRequestHandler): void;
    post(path: string, handler: PluginRequestHandler): void;
    put(path: string, handler: PluginRequestHandler): void;
    delete(path: string, handler: PluginRequestHandler): void;
    // 无需鉴权
    apiNoAuth(method: HttpMethod, path: string, handler: PluginRequestHandler): void;
    getNoAuth(path: string, handler: PluginRequestHandler): void;
    postNoAuth(path: string, handler: PluginRequestHandler): void;
    putNoAuth(path: string, handler: PluginRequestHandler): void;
    deleteNoAuth(path: string, handler: PluginRequestHandler): void;
    // 页面
    page(page: PluginPageDefinition): void;
    pages(pages: PluginPageDefinition[]): void;
    // 静态文件
    static(urlPath: string, localPath: string): void;
    staticOnMem(urlPath: string, files: MemoryStaticFile[]): void;
}

export interface PluginHttpRequest {
    path: string;
    method: string;
    query: Record<string, string | string[] | undefined>;
    body: unknown;
    headers: Record<string, string | string[] | undefined>;
    params: Record<string, string>;
    raw: unknown;
}

export interface PluginHttpResponse {
    status(code: number): PluginHttpResponse;
    json(data: unknown): void;
    send(data: string | Buffer): void;
    setHeader(name: string, value: string): PluginHttpResponse;
    sendFile(filePath: string): void;
    redirect(url: string): void;
    raw: unknown;
}

export type PluginNextFunction = (err?: unknown) => void;
export type PluginRequestHandler = (
    req: PluginHttpRequest,
    res: PluginHttpResponse,
    next: PluginNextFunction
) => void | Promise<void>;

export interface PluginPageDefinition {
    path: string;        // 页面路径
    title: string;       // 页面标题
    icon?: string;       // 页面图标
    htmlFile: string;    // HTML 文件路径（相对于插件目录）
    description?: string; // 页面描述
}

export type MemoryFileGenerator = () => string | Buffer | Promise<string | Buffer>;

export interface MemoryStaticFile {
    path: string;                                    // 文件路径
    content: string | Buffer | MemoryFileGenerator;  // 文件内容或生成器
    contentType?: string;                            // MIME 类型
}
```

## 插件管理器接口

```typescript
export interface IPluginManager {
    readonly config: NetworkAdapterConfig;
    getPluginPath(): string;
    getPluginConfig(): PluginStatusConfig;
    getAllPlugins(): PluginEntry[];
    getLoadedPlugins(): PluginEntry[];
    getPluginInfo(pluginId: string): PluginEntry | undefined;
    setPluginStatus(pluginId: string, enable: boolean): Promise<void>;
    loadPluginById(pluginId: string): Promise<boolean>;
    unregisterPlugin(pluginId: string): Promise<void>;
    uninstallPlugin(pluginId: string, cleanData?: boolean): Promise<void>;
    reloadPlugin(pluginId: string): Promise<boolean>;
    loadDirectoryPlugin(dirname: string): Promise<void>;
    getPluginDataPath(pluginId: string): string;
    getPluginConfigPath(pluginId: string): string;
}

export interface PluginEntry {
    id: string;
    fileId: string;
    name?: string;
    version?: string;
    description?: string;
    author?: string;
    pluginPath: string;
    entryPath?: string;
    packageJson?: PluginPackageJson;
    enable: boolean;
    loaded: boolean;
    runtime: PluginRuntime;
}

export type PluginRuntimeStatus = 'loaded' | 'error' | 'unloaded';

export interface PluginRuntime {
    status: PluginRuntimeStatus;
    error?: string;
    module?: PluginModule;
    context?: NapCatPluginContext;
}
```

## NapCatConfig 构建器

```typescript
export interface INapCatConfigStatic {
    text(key: string, label: string, defaultValue?: string, description?: string, reactive?: boolean): PluginConfigItem;
    number(key: string, label: string, defaultValue?: number, description?: string, reactive?: boolean): PluginConfigItem;
    boolean(key: string, label: string, defaultValue?: boolean, description?: string, reactive?: boolean): PluginConfigItem;
    select(key: string, label: string, options: { label: string; value: string | number }[],
        defaultValue?: string | number, description?: string, reactive?: boolean): PluginConfigItem;
    multiSelect(key: string, label: string, options: { label: string; value: string | number }[],
        defaultValue?: (string | number)[], description?: string, reactive?: boolean): PluginConfigItem;
    html(content: string): PluginConfigItem;
    plainText(content: string): PluginConfigItem;
    combine(...items: PluginConfigItem[]): PluginConfigSchema;
}
```

## 事件类型枚举

```typescript
export enum EventType {
    META = "meta_event",
    REQUEST = "request",
    NOTICE = "notice",
    MESSAGE = "message",
    MESSAGE_SENT = "message_sent"
}
```

在 `plugin_onmessage` 中需要通过 `event.post_type` 判断事件类型：

```typescript
if (event.post_type !== EventType.MESSAGE) return;
```

## ActionMap

`ActionMap` 提供 `call` 方法调用 OneBot11 Action：

```typescript
// call 方法签名
actions.call(
    actionName: string,     // Action 名称
    params: unknown,        // 请求参数，无参数时传 void 0
    adapter: string,        // 适配器名称，使用 ctx.adapterName
    config: NetworkAdapterConfig  // 网络配置，使用 ctx.pluginManager.config
): Promise<any>
```

## 消息发送参数

```typescript
export interface OB11PostSendMsg {
    message_type?: "private" | "group";  // 消息类型
    user_id?: string;                    // 用户 QQ 号（私聊时）
    group_id?: string;                   // 群号（群聊时）
    message: string | MessageSegment[];  // 消息内容
    auto_escape?: boolean | string;      // 是否作为纯文本发送
}
```
