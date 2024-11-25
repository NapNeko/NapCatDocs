# 接入框架

## [NoneBot](https://nonebot.dev/docs/)

1. 配置 NoneBot

    这里假设你已经安装了 OneBot 适配器

    默认情况下，NoneBot 是启用了反向 ws 的，如果出现 403，可能是默认配置问题，需要配置 `token` 才能正常连接。

    具体方法为：修改 NoneBot 配置文件 `.env`，添加 `ONEBOT_ACCESS_TOKEN=你在 NapCat 中配置的 token`。

    然后，启动 NoneBot，可以看到 NoneBot 输出的端口号，如 `8080`。

2. 配置 NapCat

    在 NapCat 配置添加反向 ws 地址，地址为 `ws://127.0.0.1:8080/onebot/v11/ws`, 这里的 `8080` 是 NoneBot 输出的端口号，`/onebot/v11/ws` 是 NoneBot onebot 适配器默认的路径

## [Koishi](https://koishi.chat)

1. 在 Koishi 插件市场搜索 `onebot` 并安装 `adapter-onebot`，如下图：

    ![koishi-install-onebot](/assets/use/koishi-install-onebot.png)

2. 安装完之后，点击修改→配置

    ![koishi-onebot-go-setting](/assets/use/koishi-onebot-go-setting.png)

3. 配置 OneBot

    这里以 WS 反向连接为例：
   - `selfId` 为你的机器人的 QQ 号
   - `token` 需和 NapCat 配置的 `token` 一致，当然，如果没有配置 token，则留空。
   - `protocol` 选择 ws-reverse

    其他配置保持默认即可，点击保存，然后启用插件。

    ![koishi-onebot-setting](/assets/use/koishi-onebot-setting.png)

    配置完成后，在 NapCat 的配置中添加 WS 反向地址。Koishi OneBot 的 ws 反向地址为 `ws://127.0.0.1:5140/onebot`。添加完成后，点击保存即可。

## OlivOS

支持正向和反向ws以及http详见 [文档](https://doc.olivos.wiki/)

## [onebotv11_rs](https://github.com/canxin121/onebotv11_rs)

支持正向和反向ws以及http

## [node-napcat-ts](https://github.com/huankong233/node-napcat-ts)

1. 配置 NapCat

    在 NapCat 配置启用正向 ws

2. 配置 node-napcat-ts

    [详见 node-napcat-ts 文档](https://node-napcat-ts.huankong.top/guide/getting-started)

    如果出现连接失败，可能是配置问题，需要配置 token 才能正常连接。

## [Minato](https://github.com/huankong233/Minato)

基于 `node-napcat-ts` 实现的，所以需要的配置类似

只需要配置几个插件 `/src/plugins` 即可运行, 配置方法: 复制 `config.default.ts` 文件到 `config.ts` 并配置其中配置项即可运行

## [Kovi](https://github.com/Threkork/Kovi)

Rust Onebot V11 插件框架。

将 NapCat 配置启用正向ws。

编写插件或使用社区插件，编译启动即可。（[文档](https://threkork.github.io/kovi-doc)里面非常详细哦）

编写插件可使用 [NapCat Api 拓展](https://crates.io/crates/kovi-plugin-expand-napcat) 。
