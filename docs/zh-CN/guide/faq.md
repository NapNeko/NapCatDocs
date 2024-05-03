# FAQ
## 常见问题


::: details 调用接口报404
目前没有支持全部的onebot规范接口，请检查是否调用了不支持的接口
::: 

::: details 如何使用CQ码
将消息上报类型格式更改从消息段为CQ码即可
::: 

::: details 二维码无法扫描

NapCat 会自动保存二维码到目录，可以手动打开图片扫描

如果没有条件访问本地目录，可以将二维码解析的 url 复制到二维码生成网站上生成二维码，然后手机QQ扫描
:::

::: details 语音、视频发送失败

需要 配置 ffmpeg 路径, [ffmpeg 下载地址](/zh-CN/guide/ffmpeg)

将 ffmpeg 目录加入环境变量，如果仍未生效，可以修改 napcat 启动脚本加入 FFMPEG_PATH 变量指定到 ffmpeg程序的完整路径

如 Windows 上修改 napcat.ps1，在第一行加入

```powershell
$env:FFMPEG_PATH="d:\ffmpeg\bin\ffmpeg.exe"
```
:::

::: details Windows系统出现QQ本体界面?
尝试管理员启动NapCat即可，如果失败请反馈NapCat开发群
:::


::: details  出现 error code v2:-1 之类的提示

不用管，这是正常现象，是因为 QQ 本身的问题，不影响使用

:::

::: details 登录提示出现网络环境不稳定不在同一网络

如果在服务器扫码登录提示出现网络环境不稳定不在同一网络，可以尝试在本地登录后，将 QQ 的文档传到服务器相同目录覆盖，Linux 目录位于 `~/.config/QQ`, Windows 一般是 **文档下的QQ文件夹**，具体可以打开 `QQ的设置->存储管理` 查看

或者手机使用 VPN 等方式连接到服务器网络使其和服务器在同一网络

:::

::: details Windows 运行出现 sqlite3 不是 win32 程序

运行时出现`node_sqlite3.node is not a valid Win32 application`

检查下载的是否是 Windows 版本的 NapCatQQ

检查是否是安装的 64 位版本的 QQ
:::

::: details 如果出现崩溃

由于新版本使用了 Native Hook，如果你的 NapCatQQ 崩溃了，尝试删除 `MoeHoo-xxxx.node`

:::
