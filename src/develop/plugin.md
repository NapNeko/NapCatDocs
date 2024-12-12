# 二次开发 - 基于NapCat定制化开发方案
## 环境配置
1. 拉取NapCat仓库后 在命令行执行 `npm run dev:depend` 按照NapCat本体和WebUi依赖
2. 初次构建NapCat 运行 `npm run build:shell` 或者 `npm run build:framework` 此次构建将会初始化WebUi打包文件和NapCat
3. 启动NetWork/Plugin适配器 `/src/onebot/index.ts NapCatOneBot11Adapter->InitOneBot方法内 解除相关注释代码` 即可注册Plugin适配器
4. 打开 `/src/onebot/network/plugin.ts` Plugin适配器代码 你可以修改这几项配置

```typescript
messagePostFormat: 'array',// array为消息段 string为CQ码
reportSelfMessage: false,// 上报自身消息
enable: true,// 启用适配器
debug: false,// 调试模式
```

5. 再次构建可选择  `npm run dev:shell` 或者 `npm run dev:framework` 跳过重复构建WebUi过程

## 开始开发
恭喜你完成了基础配置 现在打开 `/src/plugin/index.ts plugin_onmessage方法` 在此方法监听消息并处理

当你需要调用NTQQ Api 可以通过很多方法调用下面为例子

```typescript
core.apis.GroupApi.banMember()
// 调用NapCat Core Api 用于禁言成员成员

new SendGroupMsg(obCore, core)
    .handle({ group_id: message.group_id, message: '正在设置头衔...', auto_escape: false }, adapter);
// 调用NapCat OneBot Action用于发送消息接口 adapter固定(此值固定为plugin 用于标记适配器)

obCore.apis.MsgApi.createSendElements()
// 调用NapCat OneBot Api用于创建消息
```

前两种比较常用 `obCore.apis`主要用于OB->NT消息内容转换实际内容不多

