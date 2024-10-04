# BootWay03 (半自动) 教程
## 安装教程
1. 你需要安装28060+版本的 QQ

2. 然后在创建 /opt/QQ/resources/app/loadNapCat.js 文件并写入
```javascript
const fs = require("fs");
const path = require("path");
const package_path = path.join(process.resourcesPath, "app/package.json");
const hasNapcatParam = process.argv.includes('--no-sandbox');
if (hasNapcatParam) {
    (async () => {
        await import("file://" + path.join(CurrentPath, './napcat/napcat.mjs'));
    })();
} else {
    const package = require(package_path);
    package.main = "./application/app_launcher/index.js";
    fs.writeFileSync(package_path, JSON.stringify(package, null, 4), "utf-8");
    require('./application/app_launcher/index.js');
    setTimeout(() => {
        package.main = "./LoadNapCat.js";
        fs.writeFileSync(package_path, JSON.stringify(package, null, 4), "utf-8");
    }, 0);
}
```
3. 安装napcat shell 到 /opt/QQ/resources/app/napcat 确保 /opt/QQ/resources/app/napcat/napcat.js存在

4. 修改/opt/QQ/resources/app/package.json的main属性从`./application/app_launcher/index.js` 改为`./LoadNapCat.js`

5. 在你想要的位置创建 ./startnc.sh

```bash
chmod +777 /opt/QQ
sed -i 's/"main": ".\/application\/app_launcher\/index.js"/"main": ".\/loadNapCat.js"/' /opt/QQ/resources/app/package.json
xvfb-run -a qq --no-sandbox
```

5. 启动./startnc.sh
## 注意事项
### 如果你无法正常启动GUI
修改/opt/QQ/resources/app/package.json的main属性从`./application/app_launcher/index.js` 改为`./LoadNapCat.js`