# 常见问题

::: details 调用接口报 404

目前没有支持全部的 OneBot 规范接口，请检查是否调用了不支持的接口。

:::

::: details 如何使用 CQ 码？

将消息上报类型格式从消息段更改为 CQ 码即可。

:::

::: details 二维码无法扫描

NapCat 会自动保存二维码到目录，可以手动打开图片扫描。

如果无法访问本地目录（例如，纯命令行页面），可以将二维码解析的 URL 复制到二维码生成网站上重新生成二维码，然后再用手机 QQ 扫描。

注意动作要快，因为二维码是会过期的！

:::

::: details 语音、视频发送失败

这种情况需要你手动配置 ffmpeg 路径。ffmpeg 可以点击[这里](/zh-CN/guide/ffmpeg)下载。

将 ffmpeg 目录加入环境变量，如果仍未生效，可以修改 NapCat 启动脚本加入 FFMPEG_PATH 变量，指定到 ffmpeg 程序的完整路径。例如，Windows 上，可以修改 napcat.ps1，在第一行前加入

```powershell
$env:FFMPEG_PATH="d:\ffmpeg\bin\ffmpeg.exe"
```

:::

::: details Windows 系统启动，出现 QQ 本体界面

尝试管理员启动 NapCat。如果仍然失败，请反馈 NapCat 开发群。

:::

::: details 出现 `error code v2:-1` 之类的提示

QQ 本身问题，正常现象，不影响使用。

:::

::: details 登录提示出现“网络环境不稳定”“不在同一网络”

如果在服务器扫码登录提示出现网络环境不稳定/不在同一网络，可以尝试在本地登录后，将 QQ 本身的配置传到服务器相同目录覆盖。

Linux 下 QQ 配置的目录位于 `~/.config/QQ`；Windows 下一般是**文档下的 QQ 文件夹**（默认情况是 `<系统盘>:\Users (用户)\Documents\Tencent Files`），具体可以打开 QQ 设置，进入“存储管理”一栏查看。

或者，手机使用 VPN 等方式连接到服务器网络，使手机和服务器在同一网络，也可解决此问题。

:::

::: details Windows 运行出现 “sqlite3 不是 win32 程序”

运行时，若出现 `node_sqlite3.node is not a valid Win32 application`，请检查下载的是否是 Windows 版本的 NapCatQQ，检查是否是安装的 64 位版本的 QQ。

:::

::: details 原因未知的崩溃

由于新版本使用了 Native Hook，如果你的 NapCatQQ 崩溃了，尝试删除 `MoeHoo-xxxx.node`。

:::

::: details “ MH Hook Hk sub XXXX Error ” 崩溃报错

如果你的此前使用LLOneBot，且使用过Liteloader某某一键包、或者使用了验证跳过的dll。

出现此错误，应该删除一键包和相关dll或完全清除重装QQNT。

:::
