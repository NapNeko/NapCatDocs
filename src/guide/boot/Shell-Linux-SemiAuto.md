# BootWay03 (半自动) 教程

## 安装教程

### 1. 安装 QQ 和其他依赖

你需要安装 28060+ 版本的 QQ 和 xvfb，后者安装方法为

- Debian 系（Debian、Ubuntu 等）： `sudo apt install xvfb`
- Arch 系： `sudo pacman -S xorg-server-xvfb`

其他发行版可以参考[这个页面](https://pkgs.org/search/?q=xvfb)自行选择合适的包安装，确保安装后 `xvfb-run` 命令存在

### 2. 挂载启动

执行命令

``` bash
echo 'const fs = require("fs");
const path = require("path");
const CurrentPath = path.dirname(__filename);
const hasNapcatParam = process.argv.includes("--no-sandbox");
if (hasNapcatParam) {
    (async () => {
        await import("file://" + path.join(CurrentPath, "./napcat/napcat.mjs"));
        // await import("file://" + "/path/to/napcat/napcat.mjs");
        // 需要修改napcat的用户，在"/path/to/napcat"段写自己的napcat文件夹位置，并注释path.join所在行
    })();
} else {
    require("./application/app_launcher/index.js");
    setTimeout(() => {
        global.launcher.installPathPkgJson.main = "./application.asar/app_launcher/index.js";
    }, 0);
}' > /opt/QQ/resources/app/loadNapCat.cjs
```

如果你使用 LiteloaderQQNT，那么执行：

``` bash
echo 'const fs = require("fs");
const path = require("path");
const CurrentPath = path.dirname(__filename);
const hasNapcatParam = process.argv.includes("--no-sandbox");
if (hasNapcatParam) {
    (async () => {
        await import("file://" + path.join(CurrentPath, "./napcat/napcat.mjs"));
        // await import("file:///path/to/napcat/napcat.mjs");
        // 需要修改napcat的用户，在"/path/to/napcat"段写自己的napcat文件夹位置，并注释path.join所在行
    })();
} else {
    require(String.raw`/opt/LiteLoaderQQNT`);  //引号中写入你的liteloaderqqnt路径
}' > /opt/QQ/resources/app/loadNapCat.cjs
```

### 3. 安装 napcat

安装 napcat.shell 到 `/opt/QQ/resources/app/napcat` 确保 `/opt/QQ/resources/app/napcat/napcat.mjs` 存在

### 4. 修补 package.json

修改 `/opt/QQ/resources/app/package.json` 的 `main` 属性从 `./application/app_launcher/index.js` 改为 `./loadNapCat.cjs`（注意：自 QQ 29927 版本左右起 main 属性内容有所变化，找到相似 main 属性直接改即可）

这步也可以使用下面替代

``` bash
chmod +777 /opt/QQ
sed -i 's/"main": ".*\/index.js"/"main": ".\/loadNapCat.cjs"/' /opt/QQ/resources/app/package.json
```

### 5.启动

``` bash
xvfb-run -a qq --no-sandbox <-q [快速登录的qq号]>
```
