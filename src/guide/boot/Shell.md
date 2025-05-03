# Shell

## NapCat.Shell - Win手动启动教程 <Badge type="tip" text="recommend" />

1. 前往 [NapCatQQ 的 release 页面](https://github.com/NapNeko/NapCatQQ/releases) 下载NapCat.Shell.zip解压
2. 确保QQ版本安装且最新
3. 双击目录下launcher.bat即可启动 如果是win10 则使用launcher-win10.bat

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
特殊说明: 一键版仅适用 ```Windows.AMD64``` 无需安装QQ和NapCat 已内置

1. 前往 [NapCatQQ 的 release 页面](https://github.com/NapNeko/NapCatQQ/releases) 下载无头绿色版本解压
2. 启动对应BAT即可

由于上面的包巨大且可能并不适合下载 特此为Win64无头 提供轻量化一键部署方案

对应的NapCat.Shell.Windows.OneKey.zip启动后 自动化部署一键包(此包仅适用Windows)

<mark>如果需要快速启动 新建Bat文件写入如下例子</mark>

::: code-group
```bash [quick.bat]
NapCatWinBootMain.exe 10001
```
:::

## NapCat.Windows 可视化管理工具
可后台托盘 多账户配置

[NapCatQQ-Desktop](https://github.com/NapNeko/NapCatQQ-Desktop)

## NapCat.Win.Installer - Win下载与一键安装器 <Badge type="tip" text="normal" />

<mark>如果有bug请使用上面方案</mark>

[启动器下载地址](https://github.com/NapNeko/NapCat-Win-Installer/releases)

安装成功后需要快速登陆同 [NapCat.shell](#napcatshell---win手动启动教程) 方法一 一样

## NapCat.Installer - Linux一键使用脚本(支持Ubuntu 20+/Debian 10+/Centos9)    <Badge type="tip" text="recommend" /> 

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
```bash [Docker安装]
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

```bash [Shell强制重装]
curl -o \
napcat.sh \
https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh \
&& sudo bash napcat.sh \
--docker n \
--cli n \
--proxy 0 \
--force
```

```bash [TUI-CLI安装]
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

  3. `--proxy` [0-6]: 指定下载时使用的代理服务器序号, Docker安装可选0-7, shell安装可选0-5

  4. `--force` 传入则执行shell强制重装

</details>

仓库地址: [NapCat.installer](https://github.com/NapNeko/NapCat-Installer)

## NapCat.Docker - Linux容器化部署 <Badge type="tip" text="recommend" />

仓库地址: [NapCat.Docker](https://github.com/NapNeko/NapCat-Docker)

除了常规的docker run 样式的安装方法,此方法支持compose一键模板部署 astrbot,koishi,nonebot 详细参考Readme处 `一键模板化配置` 部分

## NapCat.Docker.Installer - Linux容器 第三方 <Badge type="tip" text="recommend" />
<mark>此为 社区作品 可能会遇到一些问题，欢迎反馈。</mark>

仓库地址: [NapCat.Docker.Installer](https://github.com/Fahaxikiii/napcat-scripts)

## NapCat.MacOs - MacOs安装工具 <Badge type="tip" text="recommend" />

[前往下载](https://github.com/NapNeko/NapCat-Mac-Installer/releases/)

需要 macOS 12.0 或以上系统，支持下载和更新 NapCatQQ

由于权限问题，补丁过程需要手动替换 package.json，请注意备份原文件～

## NapCat.Termux - 安卓Termux部署 <Badge type="tip" text="recommend" />
::: code-group

```bash [Termux]
curl -o napcat.termux.sh https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.termux.sh && bash napcat.termux.sh
```

::: 
仓库地址: [NapCat.installer](https://github.com/NapNeko/NapCat-Installer)

## NapCat.1Panel - 1Panel插件部署 <Badge type="tip" text="community" />

<mark>此为 社区作品 可能会遇到一些问题，欢迎反馈。</mark>

仓库地址: [NapCat.1Panel](https://github.com/Fahaxikiii/napcat-1panel)

## NapCat.Railway - Railway部署 <Badge type="tip" text="community" />

<mark>此为 社区作品 可能会遇到一些问题，欢迎反馈。</mark>

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/aRUNRZ?referralCode=Ns2Kracy)

## NapCat.Nix - Nix部署 <Badge type="tip" text="community" />

<mark>此为 社区作品 可能会遇到一些问题，欢迎反馈。</mark>

仓库地址: [NapCat.Nix](https://github.com/initialencounter/napcat.nix)