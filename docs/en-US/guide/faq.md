# Frequently Asked Questions

::: details 404 Error When Calling API

Currently, not all OneBot standard APIs are supported. Please check if you have called an unsupported API.

:::

::: details How to Use CQ Code?

Change the message reporting format from message segments to CQ code.

:::

::: details QR Code Cannot Be Scanned

NapCat will automatically save the QR code to the directory, you can manually open the image to scan.

If you cannot access the local directory (e.g., purely command-line interface), you can copy the URL of the parsed QR code to a QR code generation website to regenerate the QR code, and then scan it with the QQ app on your phone.

Act quickly, as the QR code will expire!

:::

::: details Voice/Video Sending Failed

In this case, you need to manually configure the ffmpeg path. You can download ffmpeg [here](/zh-CN/guide/ffmpeg).

Add the ffmpeg directory to the environment variable. If it still does not work, you can modify the NapCat startup script to add the FFMPEG_PATH variable, specifying the full path to the ffmpeg program. For example, on Windows, you can modify napcat.ps1, and add the following before the first line:

```powershell
$env:FFMPEG_PATH="d:\ffmpeg\bin\ffmpeg.exe"
```

:::

::: details QQ Main Interface Appears on Windows Startup

Try to start NapCat as an administrator. If it still fails, please report to the NapCat development group.

:::

::: details Error Code v2:-1 and Similar Prompts

This is a QQ issue and is normal, it does not affect usage.

:::

::: details Login Prompt Shows "Network Environment Unstable" or "Not on the Same Network"

If you encounter a network environment unstable/not on the same network prompt when scanning the code on the server, you can try logging in locally and then transferring the QQ configuration to the server's corresponding directory to overwrite it.

On Linux, the QQ configuration directory is located at `~/.config/QQ`; on Windows, it is generally in the **QQ folder under Documents** (by default, `<system drive>:\Users (user)\Documents\Tencent Files`). You can check the specific location by opening QQ settings and going to the "Storage Management" section.

Alternatively, use a VPN on your phone to connect to the server network so that your phone and the server are on the same network, which can also resolve this issue.

:::

::: details "sqlite3 is not a win32 application" Error on Windows

When running, if you encounter `node_sqlite3.node is not a valid Win32 application`, please check whether you have downloaded the Windows version of NapCatQQ and whether you have installed the 64-bit version of QQ.

:::

::: details Unknown Crash

Due to the use of Native Hook in the new version, if your NapCatQQ crashes, try deleting `MoeHoo-xxxx.node`.

:::

::: details "MH Hook Hk sub XXXX Error" Crash Error

If you have previously used LLOneBot and used Liteloader's one-click package or a DLL to skip verification, you should delete the one-click package and related DLLs, or completely clean and reinstall QQNT.

:::
