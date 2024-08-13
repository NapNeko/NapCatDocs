# 快速开始

NapCatQQ V2 正式开始测试，欢迎来到 NapCatQQ (aka 猫猫框架) 的使用文档！

## 开始之前

在开始使用之前，你需要了解以下内容。

::: details 猫猫框架的原理是什么，能够做些什么？

猫猫框架通过魔法的手段获得了 QQ 的发送消息、接收消息等接口，为了方便使用，猫猫框架将通过一种名为 [OneBot](https://11.onebot.dev) 的约定将你的 HTTP / WebSocket 请求按照规范读取，再去调用猫猫框架所获得的QQ发送接口之类的接口。

:::

现在，前往 [NapCatQQ 的 release 页面](https://github.com/NapNeko/NapCatQQ/releases)，各位可以看到有两个压缩包，文件名后缀分别为 `Shell` 和 `Framework`，应当如何选择呢？这就需要了解猫猫框架的启动方式了。

1. 作为 [LiteLoaderQQNT](https://liteloaderqqnt.github.io/) 插件运行，类似 [LLOneBot](https://llonebot.github.io)，可以实现“人机合一”。

2. 通过命令行启动，当你不需要或没有图形化界面，或者内存紧张，可以使用此方法。

3. “Only GUI” 模式，当你不想使用 LiteLoader 插件时，却又想人机合一，又想折腾时，可以考虑此方法。

方法 1 和 3 都是“有头启动”，应当使用 Framework 版本；方法 2 是无头启动，应当使用 Shell 版本。我们目前对方法 1 和 2 有较为完整的文档支持，方法 3 还请自行探索。

## 作为 LiteLoader 插件启动

1. 按照 [LiteLoaderQQNT 官网](https://liteloaderqqnt.github.io/)的指导安装 LiteLoaderQQNT 框架。

2. 在 LiteLoaderQQNT 的设置页面（如下图）将 `NapCat.Framework.zip` 导入即可。
![在这里](../../asset/img/getting-started/ll01.png)

## 通过命令行启动

### 一键撸猫

此方案暂未适配 V2，仅供参考。

::: details Linux 一键脚本
`curl -o napcat.sh https://fastly.jsdelivr.net/gh/NapNeko/NapCat-Installer@master/script/install.sh && sudo bash napcat.sh`
:::

::: details [Linux Docker](https://github.com/NapNeko/NapCat-Docker)
[使用 NapCat-Docker](https://github.com/NapNeko/NapCat-Docker)
:::

### 手动撸猫

目前已经研究完成并公布的启动方式有 BootWay03 和 05。

[前往了解 BootWay05](/zh-CN/guide/BootWay05.md)（仅支持 Windows x64）

[前往了解 BootWay03](/zh-CN/guide/BootWay03.md)（支持 Windows 和 Linux）

## Only GUI

目前该方案没有完整支持，仅有[手动方案](/zh-CN/guide/BootWay03-nogui.md)，与上面的 BootWay03 类似。

## 启动之后

恭喜你，如果看到这里，你已经成功启动了它，可以尝试阅读下面的进阶说明！

[如何进行 NapCat 的基础设置](/zh-CN/guide/config.md)

[如何配置 NapCat 的语音发送](/zh-CN/guide/faq.md) 参考 `语音、视频发送失败` 发生失败条目

[遇到 NapCat 崩溃问题如何解决](/zh-CN/guide/faq.md)
