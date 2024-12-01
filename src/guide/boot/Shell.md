# Shell

## NapCat.Win.绿色版本
特殊说明: 绿色版仅适用 ```Windows.AMD64``` 无需安装QQ 已内置

前往Release 下载无头绿色版本 然后启动Bat 即可

如果需要快速启动 编辑bat  ```NapCatWinBootMain.exe 10001```

## NapCat.Shell - Win手动启动教程

1. 前往 [NapCatQQ 的 release 页面](https://github.com/NapNeko/NapCatQQ/releases)
2. 下载NapCat.Shell.zip解压
3. 安装完成 双击目录下launcher.bat即可启动 如果是win10 则使用launcher-win10.bat

注意 如果需要快速登录 将 `QQ` 号传入第二个参数即可

Win11: `launcher.bat 123456`
Win10: `launcher-win10.bat 123456`

<!-- ## NapCat.Desktop - Win可视化管理工具

**内置Packet DLC 无需配置**
仓库地址: [仓库地址](https://github.com/NapNeko/NapCatQQ-Desktop) -->

## NapCat.Installer - Linux一键使用脚本(支持Ubuntu 20+/Debian 10+/Centos9)

```bash
curl -o napcat.sh https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh && sudo bash napcat.sh
```
<details>
  <summary>命令选项(高级用法)</summary>

  0. --tui: 使用tui可视化交互安装

  1. --docker [y/n]: --docker y 为使用docker安装反之为shell安装

  2. --qq \"123456789\": 传入docker安装时的QQ号

  3. --mode [ws|reverse_ws|reverse_http]: 传入docker安装时的运行模式

  4. --confirm: 传入docker安装时的是否确认执行安装

  5. --proxy [0|1|2|3|4|5|6]: 传入代理, 0为不使用代理, 1为使用内置的第一个,不支持自定义, docker安装可选0-7, shell安装可选0-5

  6. --cli [y/n]: shell安装时是否安装cli

  7. --force: 传入则执行shell强制重装

  **使用示例:**
  1. 使用tui可视化交互安装:
      ```bash
      curl -o napcat.sh https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh && sudo bash napcat.sh --tui
      ```

  2. 运行docker安装并传入 qq\"123456789\" 模式ws 使用第一个代理 直接安装:
      ```bash
      curl -o napcat.sh https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh && sudo bash napcat.sh --docker y --qq \"123456789\" --mode ws --proxy 1 --confirm
      ```

  3. 运行shell安装并传入 不安装cli 不使用代理 强制重装:
      ```bash
      curl -o napcat.sh https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh && sudo bash napcat.sh --docker n --cli n --proxy 0 --force
      ```

</details>

仓库地址: [NapCat.installer](https://github.com/NapNeko/NapCat-Installer)

## NapCat.Docker - Linux容器化部署

仓库地址: [NapCat.Docker](https://github.com/NapNeko/NapCat-Docker)

## NapCat.Docker.Installer - Linux容器 第三方

此为 **社区作品** 可能会遇到一些问题，欢迎反馈。

仓库地址: [NapCat.Docker.Installer](https://github.com/Fahaxikiii/napcat-scripts)

## NapCat.MacOs - MacOs安装工具

[前往下载](https://github.com/NapNeko/NapCat-Mac-Installer/releases/)

需要 macOS 12.0 或以上系统，支持下载和更新 NapCatQQ

由于权限问题，补丁过程需要手动替换 package.json，请注意备份原文件～

## NapCat.Termux - 安卓Termux部署

```bash
curl -o napcat.termux.sh https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.termux.sh && bash napcat.termux.sh
```

仓库地址: [NapCat.installer](https://github.com/NapNeko/NapCat-Installer)

## NapCat.Win.Installer - Win专用安装器

**不要用某人懒了没更新**

仓库地址: [仓库地址](https://github.com/NapNeko/NapCat-Win-Installer)

安装成功后需要快速登陆同 [NapCat.shell](#napcatshell---win手动启动教程) 方法一 一样

## NapCat.Railway - Railway部署

此为 **社区作品** 可能会遇到一些问题，欢迎反馈。

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/aRUNRZ?referralCode=Ns2Kracy)

## NapCat.1Panel - 1Panel插件部署

此为 **社区作品** 可能会遇到一些问题，欢迎反馈。

仓库地址: [NapCat.1Panel](https://github.com/Fahaxikiii/napcat-1panel)

## NapCat.Nix - Nix部署

此为 **社区作品** 可能会遇到一些问题，欢迎反馈。

仓库地址: [NapCat.Nix](https://github.com/initialencounter/napcat.nix)
