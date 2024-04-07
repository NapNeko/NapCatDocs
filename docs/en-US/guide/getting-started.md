# Quick Start

## Linux Docker Quick Installation
Execute any of the following scripts, follow the prompts to set the NoVnc password, and you can run it. For script issues and exceptions, refer [llonebot-docker](https://github.com/MliKiowa/llonebot-docker) project.

 ```bash
curl https://cdn.jsdelivr.net/gh/MliKiowa/llonebot-docker/fastboot.sh -o fastboot.sh & chmod +x fastboot.sh & sudo sh fastboot.sh
 ```
 ```bash
wget -O fastboot.sh https://cdn.jsdelivr.net/gh/MliKiowa/llonebot-docker/fastboot.sh & chmod +x fastboot.sh & sudo sh fastboot.sh
 ```

## General Manual Installation

Install the plugin for this project, OneBotApi. Note that versions of this plugin below 2.0 do not support LiteLoader 1.0.0 and above.
Regarding the installation method for the plugin: After downloading, unzip and copy it to the plugin directory.


1.Install[LiteLoaderQQNT](https://liteloaderqqnt.github.io/guide/install.html)

2.Install the plugin for project [OneBotApi](https://github.com/linyuchen/LiteLoaderQQNT-OneBotApi/releases/)OneBotApi. Note that versions of this plugin below 2.0 do not support LiteLoader 1.0.0 and above.

*Regarding the installation method for the plugin: After downloading, unzip and copy it to the plugin directory.*

*Plugin directory::`LiteLoaderQQNT/plugins`*

The post-installation directory structure will look like this:
```
├── plugins
│   ├── LLOneBot
│   │   └── main.js
│   │   └── preload.js
│   │   └── renderer.js
│   │   └── manifest.json
│   │   └── node_modules/...
```

## Installation Using Termux

见<https://github.com/LLOneBot/llonebot-termux>
