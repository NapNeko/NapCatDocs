# 接入框架

## [NoneBot](https://nonebot.dev/docs/)

1. 配置 NoneBot

    这里假设你已经安装了 OneBot 适配器

    默认情况下，NoneBot 是启用了反向 WS 的，如果出现 403，可能是默认配置问题，需要配置 `token` 才能正常连接。

    具体方法为：修改 NoneBot 配置文件 `.env`，添加 `ONEBOT_ACCESS_TOKEN=你在 NapCat 中配置的 token`。

    然后，启动 NoneBot，可以看到 NoneBot 输出的端口号，如 `8080`。

2. 配置 NapCat

    在 NapCat 配置添加反向 WS 地址，地址为 `ws://127.0.0.1:8080/onebot/v11/ws`, 这里的 `8080` 是 NoneBot 输出的端口号，`/onebot/v11/ws` 是 NoneBot onebot 适配器默认的路径。

## [Koishi](https://koishi.chat)

1. 在 Koishi 插件市场搜索 `onebot` 并安装 `adapter-onebot`，如下图：

    ![koishi-install-onebot](/assets/use/koishi-install-onebot.png)

2. 安装完之后，点击修改 → 配置

    ![koishi-onebot-go-setting](/assets/use/koishi-onebot-go-setting.png)

3. 配置 OneBot

    这里以 WS 反向连接为例：
   - `selfId` 为你的机器人的 QQ 号
   - `token` 需和 NapCat 配置的 `token` 一致，当然，如果没有配置 token，则留空。
   - `protocol` 选择 ws-reverse

    其他配置保持默认即可，点击保存，然后启用插件。

    ![koishi-onebot-setting](/assets/use/koishi-onebot-setting.png)

    配置完成后，在 NapCat 的配置中添加 WS 反向地址。Koishi OneBot 的 WS 反向地址为 `ws://127.0.0.1:5140/onebot`。添加完成后，点击保存即可。

## [AstrBot](https://astrbot.app/)

1. 配置 AstrBot

    选择 配置 → 消息平台 → 消息平台适配器 → aiocqhttp(qq)，默认即可，可根据需要更改。

   ![AstrBot-onebot-1](/assets/use/Astrbot-onebot-1.png)

2. 配置 OneBot

    在 NapCat WebUI 页面选择 网络配置 → 新建 → WebSocket 客户端，URL 填入`ws://127.0.0.1:6199/ws`，添加完成后，点击保存即可。
    ![AstrBot-onebot-2](/assets/use/Astrbot-onebot-2.png)

## OlivOS

支持正向和反向 WS 以及 http 详见 [文档](https://doc.olivos.wiki/)

## [onebotv11_rs](https://github.com/canxin121/onebotv11_rs)

支持正向和反向 WS 以及 http

## [node-napcat-ts](https://github.com/huankong233/node-napcat-ts)

1. 配置 NapCat

    在 NapCat 配置启用正向 WS

2. 配置 node-napcat-ts

    [详见 node-napcat-ts 文档](https://node-napcat-ts.huankong.top/guide/getting-started)

    如果出现连接失败，可能是配置问题，需要配置 token 才能正常连接。

## [Minato](https://github.com/huankong233/Minato)

基于 `node-napcat-ts` 实现的，所以需要的配置类似

只需要配置几个插件 `/src/plugins` 即可运行，配置方法: 复制 `config.default.ts` 文件到 `config.ts` 并配置其中配置项即可运行

## [Kovi](https://github.com/ThriceCola/Kovi)

Rust Onebot V11 插件框架。

将 NapCat 配置启用正向 WS。

编写插件或使用社区插件，编译启动即可。（[文档](https://thricecola.github.io/kovi-doc)里面非常详细哦）

编写插件可使用 [NapCat Api 拓展](https://crates.io/crates/kovi-plugin-expand-napcat) 。

## [Mirai](https://github.com/mamoe/mirai)

可通过 [Overflow](https://github.com/MrXiaoM/Overflow) 对接 Mirai 框架，以快速方便的实现 Mirai 插件从 MCL 启动方式无缝切换到 NapCat 继续使用。

1. 配置 NapCat

    按照 NapCat 相关文档下载并部署 NapCat，启动 NapCat (推荐使用控制台启动)并扫码登录 Bot，打开控制台输出的 WebUI 网址，使用默认 token 登录 WebUI 并配置和启用 WS（推荐将 NapCat 作为服务器端）。

2. 配置 Overflow

    [详见 Overflow 文档](https://mirai.mrxiaom.top/)

    根据文档指引安装 Overflow，将在 NapCat 的 WebUI 中配置的 WS 相关信息填写到 overflow.json 中（推荐使用正向 WS，将 Overflow 当作是客户端），注意信息填写一致。

3. 移动 Mirai 相关文件

    将原先 MCL 中的插件（plugins）、数据（data）和配置（config）文件夹下相关文件移动至 Overflow 对应文件夹下。

    由于登录将由 NapCat 负责，与登录相关的文件无需移动，例如：AutoLogin.yml、mirai-device-generator.jar、fix-protocol-version.jar等。

4. 都配置并移动好后，启动 NapCat 登录 Bot，再启动 Overflow，即可恢复 Mirai 插件的运行，替代原来 MCL + 签名服务的方式。

## [NcatBot](https://github.com/liyihao1110/ncatbot/)

基于 NapCat 的 QQ 机器人 Python SDK，快速开发，轻松部署。

使用 Python 编程，对新手十分友好，对老手十分高效。

已完全对接 NapCat，提供一键安装并配置 NapCat 功能（Windows、Linux）

项目发布至 PyPI，可通过 `pip install ncatbot` 直接安装。

请参考使用文档 [NcatBotDocs](https://docs.ncatbot.xyz/)
