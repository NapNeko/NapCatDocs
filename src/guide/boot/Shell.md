# Shell

## NapCat.Shell - Win 手动启动教程 <Badge type="tip" text="recommend" />

1. 前往 [NapCatQQ 的 Releases 页面](https://github.com/NapNeko/NapCatQQ/releases) 下载 NapCat.Shell.zip 并解压
2. 确保 QQ 版本安装且最新
3. 双击目录下 launcher.bat 即可启动 如果是 Win10 则使用 launcher-win10.bat

<mark>如果需要快速登录 将 QQ 号传入参数即可</mark>

::: code-group
```bash [Windows11.bat]
launcher.bat 123456
```
```bash [Windows10.bat]
launcher-win10.bat 123456
```
:::



## NapCat.Win.一键版本 <Badge type="tip" text="recommend" />
特殊说明: 一键版仅适用 ```Windows.AMD64``` 无需安装 QQ 和 NapCat 已内置

1. 前往 [NapCatQQ 的 Releases 页面](https://github.com/NapNeko/NapCatQQ/releases) 下载 NapCat.Shell.Windows.OneKey.zip 无头绿色版本解压
2. 点击 NapCatInstaller.exe 等待自动化配置
3. 进去 NapCat.XXXX.Shell 目录
4. 启动 napcat.bat

由于上面的包巨大且可能并不适合下载 特此为 Win64 无头 提供轻量化一键部署方案

对应的 NapCat.Shell.Windows.OneKey.zip 启动后 自动化部署一键包(此包仅适用 Windows)

<mark>如果需要快速启动 新建 Bat 文件写入如下例子</mark>

::: code-group
```bash [quick.bat]
NapCatWinBootMain.exe 10001
```
:::

## NapCat.Windows 可视化管理工具
- [x] **安装简单**: 单 EXE 文件，无需安装任何依赖  
- [x] **界面美观**: 使用 Fluent Design System 设计  
- [x] **功能丰富**: 支持创建配置文件、管理配置文件、一键启动/停止/重启  
- [x] **自动更新**: 支持自动检查 NapCatQQ 更新，一键更新  
- [x] **多账户管理**: 支持同时登录和管理多个 QQ 账号，轻松切换不同账户  
- [x] **后台托管**: 可最小化到系统托盘运行，不占用任务栏空间，支持后台静默运行  
- [x] **引导安装**: 提供 QQ 和 NapCatQQ 的安装引导，自动检测并指导完成必要环境配置

<details>
  <summary>软件截图</summary>
  
  ![ncd_01.png](/assets/boot/ncd/ncd_01.png)

  ![ncd_02.png](/assets/boot/ncd/ncd_02.png)

  ![ncd_03.png](/assets/boot/ncd/ncd_03.png)

  ![ncd_04.jpg](/assets/boot/ncd/ncd_04.jpg)

  ![ncd_05.jpg](/assets/boot/ncd/ncd_05.jpg)

  ![ncd_06.png](/assets/boot/ncd/ncd_06.png)

  ![ncd_07.png](/assets/boot/ncd/ncd_07.png)

  ![ncd_08.png](/assets/boot/ncd/ncd_08.png)

</details>

[NapCatQQ-Desktop](https://github.com/NapNeko/NapCatQQ-Desktop)

## NapCat.Win.Installer - Win 下载与一键安装器 <Badge type="tip" text="normal" />

<mark>如果有 bug 请使用上面方案</mark>

[启动器下载地址](https://github.com/NapNeko/NapCat-Win-Installer/releases)

安装成功后需要快速登录同 [NapCat.shell](#napcatshell---win手动启动教程) 方法一 一样

## NapCat.Installer - Linux 一键使用脚本(支持Ubuntu 20+/Debian 10+/Centos9)    <Badge type="tip" text="recommend" /> 
docker 安装卡住的请使用下方项目并自行换源

::: code-group
```bash [通用安装]
curl -o \
napcat.sh \
https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh \
&& sudo bash napcat.sh
```
```bash [可视化安装]
curl -o \
napcat.sh \
https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh \
&& sudo bash napcat.sh \
--tui
```
```bash [Docker 安装]
curl -o \
napcat.sh \
https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh \
&& sudo bash napcat.sh \
--docker y \
--qq "123456789" \
--mode ws \
--proxy 1 \
--confirm
```

```bash [Shell 强制重装]
curl -o \
napcat.sh \
https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh \
&& sudo bash napcat.sh \
--docker n \
--cli n \
--proxy 0 \
--force
```

```bash [TUI-CLI 安装]
curl -o \
napcat.sh \
https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh \
&& sudo bash napcat.sh \
--docker n \
--cli y 
```
:::

<details>
  <summary>命令选项(高级用法)</summary>

  0. `--tui` 使用`tui`可视化交互安装
   
  1. `--docker` [y/n]: 使用 Docker 进行安装 (y) 或使用 Shell 直接安装 (n)
      - Docker 安装: 将 NapCat 运行在隔离的容器环境中，方便管理和迁移，但需要先安装 Docker
      - Shell 安装: 直接在当前系统环境中安装 NapCat 及其依赖
      - `--qq`, `--mode`, `--confirm`: Docker 安装时使用的参数

  2. `--cli` [y/n]: 是否安装 NapCat TUI-CLI  (命令行UI工具) 
      - `NapCat TUI-CLI` : 允许你在 ssh、没有桌面、WebUI 难以使用的情况下可视化交互配置 Napcat

  3. `--proxy` [0-6]: 指定下载时使用的代理服务器序号, Docker 安装可选 0-7, shell 安装可选 0-5

  4. `--force` 传入则执行 shell 强制重装

</details>

仓库地址: [NapCat.installer](https://github.com/NapNeko/NapCat-Installer)

## NapCat.Linux.Launcher - 新式非入侵式启动器
1. 不破坏 NT 自身文件
2. 缓存与 NapCat 位于当前工作目录
3. 简单方便
4. 更新 QQ 不会干扰 NapCat 安装
5. 可重复运行

```bash
curl -o napcat.sh https://github.moeyy.xyz/https://raw.githubusercontent.com/NapNeko/napcat-linux-installer/refs/heads/main/install.sh && sudo bash napcat.sh
```

```bash
curl -o napcat.sh https://raw.githubusercontent.com/NapNeko/napcat-linux-installer/refs/heads/main/install.sh && sudo bash napcat.sh
```

[NapCat.Linux.Launcher](https://github.com/NapNeko/napcat-linux-installer)

## NapCat.Docker - Linux容器化部署 <Badge type="tip" text="recommend" />

仓库地址: [NapCat.Docker](https://github.com/NapNeko/NapCat-Docker)

除了常规的 docker run 样式的安装方法,此方法支持 compose 一键模板部署 astrbot, koishi, nonebot 详细参考 Readme 处 `一键模板化配置` 部分

## NapCat.MacOs - MacOs安装工具 <Badge type="tip" text="recommend" />

[前往下载](https://github.com/NapNeko/NapCat-Mac-Installer/releases/)

需要 MacOS 12.0 或以上系统，支持下载和更新 NapCatQQ

由于权限问题，补丁过程需要手动替换 package.json，请注意备份原文件～

## NapCat.Termux - 安卓 Termux 部署 <Badge type="tip" text="recommend" />
::: code-group

```bash [Termux]
curl -o napcat.termux.sh https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.termux.sh && bash napcat.termux.sh
```

::: 
仓库地址: [NapCat.installer](https://github.com/NapNeko/NapCat-Installer)

## NapCat.1Panel - 1Panel插件部署 <Badge type="tip" text="community" />

<mark>此为 社区作品 可能会遇到一些问题，欢迎反馈。</mark>

仓库地址: [NapCat.1Panel](https://github.com/Fahaxikiii/napcat-1panel)

## NapCat.Railway - Railway 部署 <Badge type="tip" text="community" />

<mark>此为 社区作品 可能会遇到一些问题，欢迎反馈。</mark>

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/aRUNRZ?referralCode=Ns2Kracy)

## NapCat.Nix - Nix 部署 <Badge type="tip" text="community" />

<mark>此为 社区作品 可能会遇到一些问题，欢迎反馈。</mark>

仓库地址: [NapCat.Nix](https://github.com/initialencounter/napcat.nix)
