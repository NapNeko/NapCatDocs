# 高级配置

## 配置 FFmpeg

### FFmpeg 是什么？

[FFmpeg](https://ffmpeg.org/) 是知名的开源音视频处理库，被用于许多音视频编解码相关的项目中。

### 为什么要使用 FFmpeg？

本项目使用 FFmpeg 是为了编解码语音和视频，以使 NapCat 以 QQ 支持的格式处理语音和视频文件。

如果你的 Bot 没有处理语音和视频的需求，可以选择不安装 FFmpeg。

### 安装 FFmpeg

#### Windows 系统

1. 在 [此处](https://github.com/BtbN/FFmpeg-Builds/releases) 下载ffmpeg-master-latest-win64-gpl.zip
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
4. 添加bin目录到系统环境变量 不会可以搜索系统设置环境变量
5. 注意安装完成后可能需要<mark>重启</mark>

::: tip 如果有其他程序也需要使用 FFmpeg
如果其他程序支持手动选择 FFmpeg 位置，只需配置为 NapCat 所使用的 FFmpeg 即可。

如果其他程序不支持手动选择 FFmpeg 位置，只需将 FFmpeg 的 `bin` 目录注册到系统的 `PATH` 变量中（可参考 [此教程](https://zhuanlan.zhihu.com/p/595750538#:~:text=Step%203%3A%20%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%20Path%20%E7%9A%84%E6%B7%BB%E5%8A%A0)）即可。

如果你将 FFmpeg 安装到了系统变量中，那么无论有没有在 NapCat 中配置 FFmpeg 路径也可以正常使用 FFmpeg。
:::

#### Linux 系统

请使用你所使用的系统的包管理器直接安装 `ffmpeg` 即可正常使用。

#### macOS 系统

由于系统存在沙盒机制，无法运行外部程序，因此暂不支持。

## 配置 PacketBackend

### 这是干什么的?

这是用来提供NTQQ本身没有的功能的DLC，以下配置方式二选一即可

#### 配置 PacketBackend (Native)

:::tip 
NapCat 3.6.0及以后的版本在Linux平台 (amd64, arm64), MacOS平台(amd64, arm64)，Windows平台 (amd64) **已内置 PacketBackend 实现** ，您**无需进行额外的配置**即可享受DLC的欢乐 (/≧▽≦)/
:::

### 当前支持版本

| 平台版本                   | Native |
|---------------------------|----------|
| Windows Amd64 28418-30899 | ✅      |
| Linux   Amd64 28498-30899 | ✅      |
| Linux   Arm64 28498-30899 | ✅      |
| MacOS   Arm64 29456-30899 | ✅      |
| MacOS   Amd64 29456-30899 | ✅      |


### 扩展进度

| 支持 | 功能       |
|:--:|----------|
| ✅  | 设置群头衔    |
| ✅  | 发送poke   |
| ✅  | 独立Rkey获取 |
| ✅  | 陌生人状态获取  |
| ✅  | 伪造合并转发   |
| ✅  | 文件直链获取   |
| ✅  | MarkDown |
| ✅  | 群签到      |
| ✅  | 小程序卡片分享  |
| ✅  | AI 声聊    |
