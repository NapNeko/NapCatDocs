# NapCatQQ
## V2 Is Coming

NapCatQQ V2 正式开始测试，在使用请你需要了解一些小知识哦。

### 猫猫框架能够做些什么？
::: details 点我查看
猫猫框架 通过魔法的手段获得了QQ的发送消息 接收消息的接口，为了大家能够自由使用这些接口，

猫猫框架 将通过一种名为OneBot的约定将你的Http/Ws请求按照规范读取，再去调用猫猫框架所获得的QQ发送接口之类的接口。
:::

### 了解猫猫框架的撸法

::: details 点我查看
[前往下载NapCat](https://github.com/NapNeko/NapCatQQ/releases) 

可能各位已经看见了有两个压缩包 我应当如何选择呢 下列的方式一和三选择 NapCat.Framwork.zip 而方式二则下载 NapCat.Shell.zip

1. [LiteLoader](https://liteloaderqqnt.github.io/) 插件运行模式 能够人机合一 使用教程参考下图LiteLoader启动

2. Shell 运行模式 当你不需要图形化界面或者内存紧张可以使用此方法

3. Only Gui 运行模式 当你不想使用LiteLoader插件时，却又想人机合一，又想折腾时可以考虑此方法。
:::

### LiteLoader模式手动撸猫

::: details 点我查看
1. 安装LiteLoader 如果已安装则跳过

[点我前往](https://liteloaderqqnt.github.io/) 

2. 在这里将NapCat.Framwork.zip导入进去即可

![在这里](../../asset/img/getting-started/ll01.png)
:::

### LiteLoader模式一键撸猫
::: details 点我查看
很抱歉哦 正在开发中
:::
### Shell模式一键撸猫
::: details 前置说明
此方案暂未适配V2哦
:::

::: details Linux一键脚本
`curl -o napcat.sh https://fastly.jsdelivr.net/gh/NapNeko/NapCat-Installer@master/script/install.sh && sudo bash napcat.sh`
:::

::: details [Linux Docker](https://github.com/NapNeko/NapCat-Docker)
[点击前往](https://github.com/NapNeko/NapCat-Docker)
:::
### Shell模式手动撸猫

::: details Win 64系统手动配置
[前往了解BootWay5手动配置方案](/zh-CN/guide/BootWay05.md)
:::

::: details 不想使用方便的方式? 想手动配置
Way3支持任意系统
[前往了解BootWay3手动配置方案](/zh-CN/guide/BootWay03.md)
:::

### Only Gui模式的一键撸猫

暂未适配哦

### Only Gui模式的手动撸猫
::: details 点我查看
Way3支持任意系统
[前往了解BootWay3手动配置方案](/zh-CN/guide/BootWay03-nogui.md)
:::
### 如何调教猫猫

[配置 NapCat](./config.md)。

## 启动之后

恭喜你，如果看到这里，你已经成功启动了它，可以尝试阅读下面的进阶说明！

[如何进行 NapCat 的基础设置](/zh-CN/guide/config.md)

[如何配置 NapCat 的语音发送](/zh-CN/guide/faq.md) 参考 `语音、视频发送失败` 发生失败条目

[遇到 NapCat 崩溃问题如何解决](/zh-CN/guide/faq.md)
