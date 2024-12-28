# 本体开发 - 基于 NapCat 定制化开发方案 <Badge type="tip" text="V4" />
该方案可以与NapCat本体代码进行捆绑 也可以使用各种内部接口 自由度大 简单代码实现方便

## 环境配置

1. 拉取 NapCat 仓库后，在命令行执行 `npm run dev:depend` 安装 NapCat 本体和 WebUi 依赖。
2. 初次构建 NapCat，运行 `npm run build:shell` 或者 `npm run build:framework`，此次构建将会初始化 WebUi 打包文件和 NapCat。
3. 启动 NetWork/Plugin 适配器，在 `/src/onebot/index.ts` 文件中，找到 `NapCatOneBot11Adapter->InitOneBot` 方法，解除相关注释代码，即可注册 Plugin 适配器。
4. 打开 `/src/onebot/network/plugin.ts` 文件，可以修改 Plugin 适配器的以下配置：

    ```typescript
    messagePostFormat: 'array', // array 为消息段，string 为 CQ 码
    reportSelfMessage: false,   // 上报自身消息
    enable: true,               // 启用适配器
    debug: false,               // 调试模式
    ```

5. 再次构建时可选择 `npm run dev:shell` 或者 `npm run dev:framework`，跳过重复构建 WebUi 过程。

## 开始开发

恭喜你完成了基础配置。现在打开 `/src/plugin/index.ts` 文件中的 `plugin_onmessage` 方法，在此方法中监听消息并处理。

当你需要调用 NTQQ Api 时，可以通过多种方法调用，下面为例子：

```typescript
core.apis.GroupApi.banMember()
// 调用 NapCat Core Api 用于禁言成员

await action.get('send_group_msg')?.handle({ group_id: String(message.group_id), message: 'pong' }, adapter);
// 调用 NapCat OneBot Action 用于发送消息接口，adapter 固定（此值固定为 plugin 用于标记适配器） 功能与下面的几乎无差异

new SendGroupMsg(obCore, core)
    .handle({ group_id: message.group_id, message: '正在设置头衔...', auto_escape: false }, adapter);
// 创建并调用 NapCat OneBot Action 用于发送消息接口，adapter 固定（此值固定为 plugin 用于标记适配器）

obCore.apis.MsgApi.createSendElements()
// 调用 NapCat OneBot Api 用于创建消息 从OneBot构建QQNT内部消息
```

前两种方法比较常用，obCore.apis 主要用于 OB->NT 消息内容转换，实际内容不多。 

下面为 发送ping 回应ping 的群消息示例 `/src/plugin/index.ts` 
```typescript
import { NapCatOneBot11Adapter, OB11Message } from "@/onebot";
import { NapCatCore } from "../core";
import { ActionMap } from "@/onebot/action";

export const plugin_onmessage = async (adapter: string, core: NapCatCore, obCore: NapCatOneBot11Adapter, message: OB11Message, action: ActionMap) => {
    if (message.raw_message === 'ping') {
        const ret = await action.get('send_group_msg')?.handle({ group_id: String(message.group_id), message: 'pong' }, adapter);
        console.log(ret);
    }
}

```