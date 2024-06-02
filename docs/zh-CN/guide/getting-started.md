# NapCatQQ

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

:::

## 安装 QQ

NapCatQQ v1.4.7：

[Windows 9.9.10-24108](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.10_240523_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb)

Linux 无需桌面安装 NTQQ，具体命令如下：

```shell
sudo apt install libgbm1 libasound2
sudo apt install ./qq.deb
```

更多版本请查看[版本更新记录](./version.md)。

## 下载 NapCatQQ

下载地址: <https://github.com/NapNeko/NapCatQQ/releases>

## 配置

为了避免二次启动，可以事先配置好 NapCat 的基础设置，见 [配置 NapCat](./config.md)。

## 启动

::: details Windows

我们安装好对应版本 QQ 后，大多数情况下，只需要解压 NapCat，并将其放到你想的的任何地方。但注意，路径不能包含空格。然后，双击 `napcat.bat` 就可以运行啦！

等等! 如果你出现乱码可以尝试双击 `napcat-utf8.bat` 启动。

如果上面的方法还是不行，可以尝试用 Powershell 启动：

启动 PowerShell，运行 `powershell ./napcat.ps1` 或者 `napcat.bat`，如果出现乱码，可以尝试运行 `napcat-utf8.ps1` 或 `napcat-utf8.bat`。

如果运行不了，可以尝试 `powershell.exe -ExecutionPolicy Bypass -File ".\napcat.ps1"`。

**推荐直接点击 bat 运行，因为 PowerShell 自身会占用 20 MB 左右的内存。**

:::

::: details Linux一键脚本
墙裂推荐！

`curl -o napcat.sh https://fastly.jsdelivr.net/gh/NapNeko/NapCat-Installer@master/script/install.sh && sudo bash napcat.sh`

:::

::: details [Linux Docker](https://github.com/NapNeko/NapCat-Docker)
:::

::: details Linux 非 Docker

终端运行
```shell
chmod u+x ./napcat.sh
./napcat.sh
```

请勿用`sh napcat.sh`启动，可能会出现路径问题而无法启动。

:::

::: details 快速登录（无需扫码）

如果你已经成功登录过官方 QQ 或者 NapCatQQ，可以加参数` -q <你的QQ>` 进行快速登录而无需扫码，如 `napcat.bat -q 1234567` 或者  `napcat.sh -q 1234567`。

:::

### 启动之后

恭喜你，如果看到这里，你已经成功启动了 NapCat，可以尝试阅读下面的进阶说明！

[如何进行 NapCat 的基础设置](/zh-CN/guide/config.md)

[如何配置 NapCat 的语音发送](/zh-CN/guide/faq.md) 参考 `语音、视频发送失败` 发生失败条目

[遇到 NapCat 崩溃问题如何解决](/zh-CN/guide/faq.md)