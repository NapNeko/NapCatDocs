# 快速开始

## QQ 版本

LLOneBot 支持到最新版本的 QQ

不推荐太老的版本，9.9.7(21804) 之前的版本都没有经过仔细测试，可能会有一些问题.

## Windows 用户一键安装方案

<https://github.com/super1207/install_llob/releases>下载exe，双击运行即可，之后打开QQ的设置，看到了 `LLOneBot` 就代表安装成功了.

## 通用安装方法

::: details 安装 LiteLoaderQQNT
**注意在安装之前请先关闭 QQ ！**

推荐使用 [一键安装脚本](https://github.com/Mzdyl/LiteLoaderQQNT_Install/releases)，支持 Windows、Linux、MacOS

安装成功后打开QQ的设置，看到了 `LiteLoaderQQNT` 就代表安装成功了.

![](../../asset/img/getting-started/llqqnt-install-success.png)

::: tip
手动安装见 [LiteLoaderQQNT文档](https://liteloaderqqnt.github.io/guide/install.html)
:::

::: details 安装 LLOneBot

下载 [LLOneBot](https://github.com/LLOneBot/LLOneBot/releases) 最新版本 解压放到 `plugins` 目录下，然后重启 QQ 即可.

::: tip
plugins 目录可以在 LiteLoaderQQNT 的页面找到并一键打开.
![](../../asset/img/getting-started/open-plugins-dir.png)

目录结构如下:
```
├── plugins
│   ├── LLOneBot
│   │   └── main/main.cjs
│   │   └── preload/preload.cjs
│   │   └── renderer/index.js
│   │   └── manifest.json
│   │   └── node_modules/...
```
:::

::: details 检查是否安装成功

**重启 QQ 后，打开设置，看到 `LLOneBot` ，代表安装成功.**

![](../../asset/img/getting-started/llonebot-install-success.png)
:::

## Linux docker 快速安装

具体问题参考: [LLOneBot-Docker](https://github.com/MliKiowa/llonebot-docker)

::: code-group

```sh [Curl]
bash <(curl -s -L https://cdn.jsdelivr.net/gh/MliKiowa/llonebot-docker/fastboot.sh)
```
等docker启动完毕后

浏览器访问 `http://你的docker-ip:6099/api/panel/getQQLoginQRcode` 扫码登录

登录之后访问 `http://你的docker-ip:6099/plugin/LLOneBot/iframe.html` 进行 llonebot 的配置

::: 

## 使用termux安装

具体问题参考: [LLOneBot-Termux](https://github.com/LLOneBot/llonebot-termux)

::: code-group

```sh [Curl]
bash -c "$(curl -L https://github.com/LLOneBot/llonebot-termux/raw/main/onekey.sh)"
```
登录方法与上方 Linux docker 登录一致

::: 


