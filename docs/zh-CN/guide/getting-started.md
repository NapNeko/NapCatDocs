## 启动前需要了解的三两事（!你给我好好读三遍）
1. NapCat 是基于NT QQ 客户端本体实现的QQ Bot框架，所以说需要**提前安装好QQ**才能运行NapCat哦 
2. NapCat 在线时，你不能使用PC QQ客户端实现人鸡合一，但是可以选择同步登录移动客户端
3. NapCat 每个版本基于**不同版本 QQ**开发，下载QQ时，你选择可以到侧边栏**版本日志**查看对应的QQ版本的
4. NapCat 不同于协议实现，基于QQ客户端当然QQ客户端上干不了的事，NapCat >_< 当然也是不行的!

## 启动 - 快快端上来吧

### 如果你是 Windows 用户
::: details 启动教程
安装好对应版本QQ后 我们大多数情况只需要解压NapCat放到你想的的任何地方，双击 `napcat.bat` 就可以运行啦

等等! 如果你出现乱码可以尝试双击 `napcat-utf8.bat`启动

除了上面的方法你还可以使用powershell启动NapCat（如果启动好了，就不用看下面的这种启动方式了）

启动powershell运行`powershell ./napcat.ps1`, 或者 `napcat.bat`，如果出现乱码，可以尝试运行`napcat-utf8.ps1` 或 `napcat-utf8.bat`

*如果出现 powershell 运行不了，可以尝试 `powershell.exe -ExecutionPolicy Bypass -File ".\napcat.ps1"`*

**推荐使用 bat 运行，powershell 会自身占用 20MB 左右的内存**
:::
### 如果你是 Linux Docker用户请看
::: details 启动教程
[详细教程](https://github.com/NapNeko/NapCat-Docker)
:::
### 如果你是 Linux 不想用 Docker
::: details 启动教程
运行`napcat.sh`
:::

### 启动之后
恭喜你，如果看到这里，你可能已经启动或者尝试启动了NapCat，你是否遇到崩溃与配置问题

[如何配置NapCat的基础设置](/zh-CN/guide/config.md)

[如何配置NapCat的语音发送](/zh-CN/guide/ffmpeg.md)

[遇到NapCat崩溃问题如何解决](/zh-CN/guide/faq.md)