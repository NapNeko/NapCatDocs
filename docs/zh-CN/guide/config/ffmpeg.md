# 配置 FFmpeg

## FFmpeg 是什么？

[FFmpeg](https://ffmpeg.org/) 是知名的开源音视频处理库，被用于许多音视频编解码相关的项目中。

## 为什么要使用 FFmpeg？

本项目使用 FFmpeg 是为了编解码语音和视频，以使 NapCat 以 QQ 支持的格式处理语音和视频文件。

如果你的 Bot 没有处理语音和视频的需求，可以选择不安装 FFmpeg。

## 安装 FFmpeg

### Windows 系统

1. 在 [此处](https://www.gyan.dev/ffmpeg/builds/packages/ffmpeg-2024-02-15-git-a2cfd6062c-full_build.7z) 下载官方许可的 FFmpeg；
2. 将其中的文件夹解压至一个你知道的地方（例如 `C:\Program Files`），然后重命名为 `ffmpeg`；
3. 你的 `ffmpeg` 文件夹的结构看起来应该是这样的：

    ``` text
    ffmpeg
    |___bin
    |___|___ffmpeg.exe
    |___|___ffplay.exe
    |___\___ffprobe.exe
    |___doc
    |___\ ...
    |___LICENSE
    \___README.txt
    ```

    ::: danger 注意
    **请一定要保证 `bin` 文件夹内同时包含 `ffmpeg.exe`、`ffplay.exe` 以及 `ffprobe.exe`！** 否则会产生意想不到的错误。
    :::
4. 启动 QQNT，前往 LLOneBot 设置页，选择 FFmpeg 为刚才解压的 `ffmpeg.exe`（在本例中，FFmpeg 主程序位于 `C:\Program Files\ffmpeg\bin\ffmpeg.exe`）， 然后点击「保存」按钮；
5. 如果没有任何错误出现，说明 FFmpeg 已经配置成功了。恭喜你！

::: tip 如果有其他程序也需要使用 FFmpeg
如果其他程序支持手动选择 FFmpeg 位置，只需配置为 NapCat 所使用的 FFmpeg 即可。

如果其他程序不支持手动选择 FFmpeg 位置，只需将 FFmpeg 的 `bin` 目录注册到系统的 `PATH` 变量中（可参考 [此教程](https://zhuanlan.zhihu.com/p/595750538#:~:text=Step%203%3A%20%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%20Path%20%E7%9A%84%E6%B7%BB%E5%8A%A0)）即可。

如果你将 FFmpeg 安装到了系统变量中，那么无论有没有在 NapCat 中配置 FFmpeg 路径也可以正常使用 FFmpeg。
:::

### Linux 系统

请使用你所使用的系统的包管理器直接安装 `ffmpeg` 即可正常使用。

### macOS 系统

你可以使用 [Homebrew](https://brew.sh/) 安装 FFmpeg，也可以 [在此处](https://evermeet.cx/ffmpeg/) 手动下载二进制文件安装。

注意如果你选择手动安装，请确保你下载并安装了 [FFmpeg](https://evermeet.cx/ffmpeg/#:~:text=static%20%2D%2Ddisable%2Dffplay-,FFmpeg,-ffmpeg%2D114296%2Dg5ff0eb34d2)、[FFprobe](https://evermeet.cx/ffmpeg/#:~:text=external%20ffmpeg%20libraries-,FFprobe,-ffprobe%2D114296%2Dg5ff0eb34d2) 以及 [FFplay](https://evermeet.cx/ffmpeg/#:~:text=external%20ffprobe%20libraries-,FFplay,-ffplay%2D113169%2Dge1c1dc8347) 三个库，否则可能会产生意想不到的错误。

## 配置环境变量

将 ffmpeg 目录加入环境变量，如果仍未生效，可以修改 NapCat 启动脚本加入 FFMPEG_PATH 变量，指定到 ffmpeg 程序的完整路径。例如，Windows 上，可以修改 napcat.ps1，在第一行前加入

```powershell
$env:FFMPEG_PATH="d:\ffmpeg\bin\ffmpeg.exe"
```
