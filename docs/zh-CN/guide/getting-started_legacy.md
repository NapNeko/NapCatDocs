# 快速开始 (V1)

NapCatQQ 是基于 PC NTQQ 客户端本体实现的 QQ Bot 框架，稳定安全，快速部署。

## NapCatQQ 的优势

- 不需要图形环境，Linux表现优异，与现有Hook框架有着本质区别，在性能与内存占用方面远远优于基于Hook的框架。

- 配置简单，支持浏览器远程进入进行配置，简单轻松即可完成配置。

- NTQQ功能适配快速，更新持续跟进QQ最新版。

## 启动前需要了解的三两事 (！你给我好好读三遍)

:::warning

- NapCat 是基于 PC NTQQ 客户端本体实现的 QQ Bot 框架，所以说需要提前安装好和 **NapCatQQ 对应的 QQ 版本**才能运行 NapCat。

- NapCat 在线时，你不能使用 PC QQ 客户端实现人机合一，但是可以选择同步登录移动客户端，如果想要在 PC 上人机合一请使用 [LLOneBot](https://github.com/LLOneBot/LLOneBot)

- NapCat 不同于协议实现，是基于 QQ 客户端，QQ 客户端上干不了的事，NapCat >_< 当然也是不行的!
## 一键安装

::: details Linux一键脚本
`curl -o napcat.sh https://fastly.jsdelivr.net/gh/NapNeko/NapCat-Installer@master/script/install.sh && sudo bash napcat.sh`
:::

::: details [Linux Docker](https://github.com/NapNeko/NapCat-Docker)
[点击前往](https://github.com/NapNeko/NapCat-Docker)
:::

## 手动安装

### 安装 QQ

在页面[版本更新记录](./version.md)查看可用的LinuxQQ版本并下载安装

下载之后开始安装

```
sudo apt install libgbm1 libasound2 # 安装必要依赖
sudo apt install ./linuxqq_3.2.7-23361_amd64.deb -y  ＃这里以3.2.7版本为例，且系统是ubuntu系统
```

### 下载 NapCatQQ

下载地址: <https://github.com/NapNeko/NapCatQQ/releases>

更多版本更新日志请查看[版本更新记录](./version.md)。

### 配置NapCatQQ

为了避免二次启动，可以事先配置好 NapCat 的基础设置，见 [配置 NapCat](./config.md)。

### 启动NapCatQQ

::: details Win 64系统手动配置
Way5仅支持WinX64
[前往了解BootWay5手动配置方案](/zh-CN/guide/BootWay05.md)
:::

::: details 不想使用方便的方式? 想手动配置
Way5仅支持WinX64
[前往了解BootWay5手动配置方案](/zh-CN/guide/BootWay05.md)
Way3支持任意系统
[前往了解BootWay3手动配置方案](/zh-CN/guide/BootWay03.md)

:::

### 启动之后

恭喜你，如果看到这里，你已经成功启动了 NapCat，可以尝试阅读下面的进阶说明！

[如何进行 NapCat 的基础设置](/zh-CN/guide/config.md)

[如何配置 NapCat 的语音发送](/zh-CN/guide/faq.md) 参考 `语音、视频发送失败` 发生失败条目

[遇到 NapCat 崩溃问题如何解决](/zh-CN/guide/faq.md)
