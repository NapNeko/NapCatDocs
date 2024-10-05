# BootWay03 (半自动) 教程
## 安装教程
1. 你需要安装28060+版本的 QQ

2. 然后执行:
```javascript
echo 'const fs = require("fs");
const path = require("path");
const hasNapcatParam = process.argv.includes('--no-sandbox');
if (hasNapcatParam) {
    (async () => {
        await import("file://" + path.join(CurrentPath, './napcat/napcat.mjs'));
    })();
} else {
    require('./application/app_launcher/index.js');
    setTimeout(() => {
        global.launcher.installPathPkgJson.main = "./application/app_launcher/index.js";
    }, 0);
}' > /opt/QQ/resources/app/loadNapCat.js
```
3. 安装napcat shell 到 /opt/QQ/resources/app/napcat 确保 /opt/QQ/resources/app/napcat/napcat.js存在

4. 修改/opt/QQ/resources/app/package.json的main属性从`./application/app_launcher/index.js` 改为`./LoadNapCat.js`
这步也可以使用下面替代
```
chmod +777 /opt/QQ
sed -i 's/"main": ".\/application\/app_launcher\/index.js"/"main": ".\/loadNapCat.js"/' /opt/QQ/resources/app/package.json
```

5. 启动xvfb-run -a qq --no-sandbox
```
