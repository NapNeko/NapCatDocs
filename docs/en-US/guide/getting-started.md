# NapCatQQ

NapCatQQ is a QQ Bot framework based on the PC NTQQ client body, which is stable, secure, and quickly deployable.

## Advantages of NapCatQQ

- No need for a graphical environment, performs well on Linux, and has a fundamental difference from existing Hook frameworks, far superior in performance and memory usage.

- Simple configuration, supports remote browser access for configuration, easy and simple to complete.

- Rapid adaptation to NTQQ functions, continuous updates to follow the latest version of QQ.

## Things to Know Before Starting (Read Three Times!)

:::warning

- NapCat is a QQ Bot framework based on the PC NTQQ client body, so you need to install the **QQ version corresponding to NapCatQQ** in advance to run NapCat.

- When NapCat is online, you cannot achieve human-computer unity using the PC QQ client, but you can choose to log in synchronously on the mobile client. If you want human-computer unity on PC, please use [LLOneBot](https://github.com/LLOneBot/LLOneBot).

- NapCat is different from protocol implementation; it is based on the QQ client. Things that cannot be done on the QQ client, NapCat >_< can't do it either!

:::

## Install QQ

NapCatQQ v1.4.7:

[Windows 9.9.10-24108](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.10_240523_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb)

Linux does not need a desktop to install NTQQ. The specific command is as follows:

```shell
sudo apt install libgbm1 libasound2
sudo apt install ./qq.deb
```

For more versions, please refer to [Version Update Log](./version.md).

## Download NapCatQQ

Download link: <https://github.com/NapNeko/NapCatQQ/releases>

## Configuration

To avoid secondary startup, you can pre-configure the basic settings of NapCat, see [Configure NapCat](./config.md).

## Startup

::: details Windows

After installing the corresponding version of QQ, in most cases, you only need to unzip NapCat and place it anywhere you want. But be careful, the path cannot contain spaces. Then, double-click `napcat.bat` to run!

Wait! If you encounter garbled characters, you can try double-clicking `napcat-utf8.bat` to start.

If the above method still does not work, you can try to start with PowerShell:

Start PowerShell, run `powershell ./napcat.ps1` or `napcat.bat`, if garbled characters appear, you can try to run `napcat-utf8.ps1` or `napcat-utf8.bat`.

If it still doesn't work, you can try `powershell.exe -ExecutionPolicy Bypass -File ".\napcat.ps1"`.

**It is recommended to directly click the bat to run, because PowerShell itself will occupy about 20 MB of memory.**

:::

::: details Linux One-Click Script
Highly recommended!

`curl -o napcat.sh https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh && sudo bash napcat.sh`

:::

::: details [Linux Docker](https://github.com/NapNeko/NapCat-Docker)
:::

::: details Linux Non-Docker

Run in the terminal

```shell
chmod u+x ./napcat.sh
./napcat.sh
```

Do not start with `sh napcat.sh`, as it may cause path problems and fail to start.

:::

::: details [Android Termux](https://github.com/NapNeko/NapCat-Termux)
:::

::: details Quick Login (No Need to Scan)

If you have successfully logged in to the official QQ or NapCatQQ, you can add the parameter `-q <Your QQ>` for quick login without scanning. For example, `napcat.bat -q 1234567` or `napcat.sh -q 1234567`.

:::

::: details Nix Setup

If you would like to install NapCat using Nix，please refer[initialencounter/napcat.nix](https://github.com/initialencounter/napcat.nix)

:::warning

- Please note that this installation method is unofficially maintained and may encounter some issues; your feedback is welcome.

:::

:::
### After Startup

Congratulations, if you see this, you have successfully started NapCat, you can try reading the advanced instructions below!

[How to Configure NapCat's Basic Settings](config.md)

[How to Configure NapCat's Voice Sending](faq.md) Refer to the entry `Voice/Video Sending Failed`

[How to Solve NapCat Crash Issues](faq.md)
