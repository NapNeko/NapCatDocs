# BootWay03 (半自动) 教程

## 安装教程

### 1. 安装 QQ 和其他依赖

你需要安装 28060+ 版本的 QQ 和`xvfb`以及`xauth`，后两者安装方法为

- Debian 系（Debian、Ubuntu 等）： `sudo apt install xvfb xauth`
- Redhat 系（Fedora、CentOS Stream 等）： `sudo dnf install xorg-x11-server-Xvfb xorg-x11-xauth`
- Arch 系： `sudo pacman -S xorg-server-xvfb`

<details>
    <summary>Redhat系的备注</summary>
    <p>对于RHEL 10+、CentOS Stream 10+以及其他基于此的发行版，X11服务器在这些系统中已经被<b>完全移除</b>，在这种情况下无法通过xvfb实现无头运行。目前没有其他已知方案。</p>
    <p>AlmaLinux10是一个例外。如果你真的很想使用类CentOS发行版，请考虑AlmaLinux。</p>
</details>

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

### 6.（可选）自动启动

在安装后，可以使用systemd等工具自动启动napcat。下面是一个systemd服务的示例。

```service
[Unit]
Description=Napcat QQ Server
Documentation=https://napneko.github.io/guide
After=network.target

[Service]
User=<要使用的用户>
Restart=on-failure
WorkingDirectory=<建议使用该用户的home目录位置>
ExecStart=/usr/bin/xvfb-run -a qq --no-sandbox <-q [快速登录的qq号]>

[Install]
WantedBy=multi-user.target
```

将上面的内容写入`/etc/systemd/system/napcat.service`，然后使用`sudo systemctl enable napcat.service --now`命令即可启动并配置服务自启。

**请注意：即使配置了系统服务，在未配置快速登录或快速登录失败时一样要手动扫码。**
