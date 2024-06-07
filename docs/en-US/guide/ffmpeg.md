# Configure FFmpeg

## What is FFmpeg?

[FFmpeg](https://ffmpeg.org/) is a well-known open-source audio and video processing library used in many audio and video encoding and decoding projects.

## Why use FFmpeg?

This project uses FFmpeg to encode and decode audio and video, allowing NapCat to handle audio and video files in formats supported by QQ.

If your Bot does not need to handle audio and video, you can choose not to install FFmpeg.

## Install FFmpeg

### Windows

1. Download the official licensed FFmpeg from [here](https://www.gyan.dev/ffmpeg/builds/packages/ffmpeg-2024-02-15-git-a2cfd6062c-full_build.7z);
2. Extract the folder to a known location (e.g., `C:\Program Files`) and rename it to `ffmpeg`;
3. Your `ffmpeg` folder structure should look like this:

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

    ::: danger Note
    **Make sure that the `bin` folder contains `ffmpeg.exe`, `ffplay.exe`, and `ffprobe.exe`!** Otherwise, unexpected errors may occur.
    :::
4. Start QQNT, go to the LLOneBot settings page, select FFmpeg as the previously extracted `ffmpeg.exe` (in this example, the main FFmpeg program is located at `C:\Program Files\ffmpeg\bin\ffmpeg.exe`), and then click the "Save" button;
5. If no errors occur, FFmpeg is successfully configured. Congratulations!

::: tip If other programs also need to use FFmpeg
If other programs support manually selecting the FFmpeg location, simply configure it to use the FFmpeg used by NapCat.

If other programs do not support manually selecting the FFmpeg location, simply register the `bin` directory of FFmpeg to the system `PATH` variable (refer to [this tutorial](https://zhuanlan.zhihu.com/p/595750538#:~:text=Step%203%3A%20%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%20Path%20%E7%9A%84%E6%B7%BB%E5%8A%A0)) .

If you have installed FFmpeg in the system variable, you can use FFmpeg normally whether or not you have configured the FFmpeg path in NapCat.
:::

### Linux

Use the package manager of your system to install `ffmpeg` directly.

### macOS

You can install FFmpeg using [Homebrew](https://brew.sh/), or you can manually download the binary files from [here](https://evermeet.cx/ffmpeg/) and install them.

Note that if you choose to install manually, make sure you download and install [FFmpeg](https://evermeet.cx/ffmpeg/#:~:text=static%20%2D%2Ddisable%2Dffplay-,FFmpeg,-ffmpeg%2D114296%2Dg5ff0eb34d2), [FFprobe](https://evermeet.cx/ffmpeg/#:~:text=external%20ffmpeg%20libraries-,FFprobe,-ffprobe%2D114296%2Dg5ff0eb34d2), and [FFplay](https://evermeet.cx/ffmpeg/#:~:text=external%20ffprobe%20libraries-,FFplay,-ffplay%2D113169%2Dge1c1dc8347), otherwise unexpected errors may occur.
