# BootWay03 (半自动) 教程

## 安装教程

### 1.安装QQ

你需要安装28060+版本的 QQ

### 2.挂载启动

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
        global.launcher.installPathPkgJson.main = "./application/app_launcher/index.js";
    }, 0);
}' > /opt/QQ/resources/app/loadNapCat.js
```

如果你使用 LiteloaderQQNT ，那么执行：

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
    require(String.raw`/opt/LiteLoaderQQNT`);  //引号中写入你的liteloaderqqnt路径
}' > /opt/QQ/resources/app/loadNapCat.js
```

### 3.安装napcat

安装 napcat.shell 到 `/opt/QQ/resources/app/napcat` 确保 `/opt/QQ/resources/app/napcat/napcat.js` 存在

### 4.修补 package.json

修改 `/opt/QQ/resources/app/package.json` 的main属性从`./application/app_launcher/index.js` 改为`./loadNapCat.js`

这步也可以使用下面替代

``` bash
chmod +777 /opt/QQ
sed -i 's/"main": ".\/application\/app_launcher\/index.js"/"main": ".\/loadNapCat.js"/' /opt/QQ/resources/app/package.json
```

### 5.启动

``` bash
xvfb-run -a qq --no-sandbox
```
