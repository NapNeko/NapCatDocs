# NapCatQQ
NapCatQQ 是基于 PC NTQQ 客户端本体实现的 QQ Bot 框架，稳定安全，快速部署。

## 启动前需要了解的三两事
**（!你给我好好读三遍）**

1. NapCat 是基于NT QQ 客户端本体实现的QQ Bot框架，所以说需要提前安装好和 **NapCatQQ 对应的 QQ 版本**才能运行 NapCat 哦

2. NapCat 在线时，你不能使用 PC QQ 客户端实现人鸡合一，但是可以选择同步登录移动客户端，如果想要在 PC 上人机合一请使用[LLOneBot](https://github.com/LLOneBot/LLOneBot)

3. NapCat 不同于协议实现，是基于 QQ 客户端，QQ 客户端上干不了的事，NapCat >_< 当然也是不行的!


## 安装 QQ

NapCatQQ v1.2.0(beta) -- [Windows QQ 9.9.9-23361](https://dldir1.qq.com/qqfile/qq/QQNT/5e09ff15/QQ9.9.9.23361_x64.exe) | [Linux QQ 2.3.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/Linux/QQ_3.2.7_240428_amd64_01.deb)

NapCatQQ v1.1.0 -- [Windows QQ 9.9.9-22741](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.9_240403_x64_01.exe) | [Linux QQ 2.3.7-22741](https://dldir1.qq.com/qqfile/qq/QQNT/Linux/QQ_3.2.7_240403_amd64_01.deb)

Linux 无需桌面安装 NTQQ:

```shell
sudo apt install libgbm1 libasound2
sudo apt install ./qq.deb
```

更多版本请查看[版本更新记录](./version.md)

## 配置

为了避免二次启动，可以事先配置好 NapCat 的基础设置，见 [如何配置NapCat](./config.md)

## 启动

::: details Windows
安装好对应版本 QQ 后 我们大多数情况只需要解压 NapCat 放到你想的的任何地方，但是路径不能包含空格

双击 `napcat.bat` 就可以运行啦

等等! 如果你出现乱码可以尝试双击 `napcat-utf8.bat`启动

除了上面的方法你还可以使用 powershell 启动 NapCat（如果启动好了，就不用看下面的这种启动方式了）

启动powershell运行`powershell ./napcat.ps1`, 或者 `napcat.bat`，如果出现乱码，可以尝试运行`napcat-utf8.ps1` 或 `napcat-utf8.bat`

*如果出现 powershell 运行不了，可以尝试 `powershell.exe -ExecutionPolicy Bypass -File ".\napcat.ps1"`*

**推荐使用 bat 运行，powershell 会自身占用 20MB 左右的内存**

:::

::: details Linux Docker
[详细教程](https://github.com/NapNeko/NapCat-Docker)
:::

::: details Linux 非 Docker
运行`napcat.sh`
:::

::: details 无需扫码快速登录
如果你已经成功登录过官方 QQ 或者 NapCatQQ，可以加参数` -q <你的QQ>` 进行快速登录而无需扫码，如`napcat.bat -q 1234567` 或者 `napcat.sh -q 1234567`
:::

### 启动之后
恭喜你，如果看到这里，你可能已经启动或者尝试启动了 NapCat

[如何配置NapCat的基础设置](/zh-CN/guide/config.md)

[如何配置NapCat的语音发送](/zh-CN/guide/faq.md) 参考 `语音、视频发送失败` 发生失败条目

[遇到NapCat崩溃问题如何解决](/zh-CN/guide/faq.md)