# Linux Shell 手动安装

本页修改 QQ 入口；其他方式见 [Shell 安装](./Shell.md)。

## 安装 QQ 和依赖

安装对应 CPU 架构的 QQ，最低构建号为 **40768**，Linux 推荐 **3.2.34-53644**。下文假设安装路径为 `/opt/QQ`。

无桌面环境需安装 Xvfb、xauth 和 jq：

| 系统 | 命令 |
| --- | --- |
| Debian / Ubuntu | `sudo apt install xvfb xauth jq` |
| Fedora | `sudo dnf install xorg-x11-server-Xvfb xorg-x11-xauth jq` |
| openSUSE | `sudo zypper install xvfb-run xauth jq` |
| Arch | `sudo pacman -S xorg-server-xvfb xorg-xauth jq` |

系统仓库没有 Xvfb 时使用 [Docker](./Shell.md#docker)。

## 安装 NapCat 和加载器

将 [NapCat.Shell.zip](https://github.com/NapNeko/NapCatQQ/releases/latest) 解压到 `/opt/QQ/resources/app/napcat`。更新时保留 `config` 和 `plugins`。

首次修改前备份原始入口。QQ 更新后用新版本的原始文件重新操作，避免覆盖备份：

```bash
sudo cp -a /opt/QQ/resources/app/package.json /opt/QQ/resources/app/package.napcat-original.json
sudo tee /opt/QQ/resources/app/loadNapCat.cjs >/dev/null <<'EOF'
const path = require('node:path');
const { pathToFileURL } = require('node:url');
if (process.argv.includes('--no-sandbox')) {
    import(pathToFileURL(path.join(__dirname, 'napcat/napcat.mjs')).href);
} else {
    const original = require('./package.napcat-original.json');
    require(path.resolve(__dirname, original.main));
    setTimeout(() => {
        global.launcher.installPathPkgJson.main = original.main;
    }, 0);
}
EOF
```

修改 `package.json` 的入口：

```bash
sudo bash <<'EOF'
set -e
package=/opt/QQ/resources/app/package.json
jq '.main = "./loadNapCat.cjs"' "$package" > "$package.napcat-new"
chmod --reference="$package" "$package.napcat-new"
chown --reference="$package" "$package.napcat-new"
mv -- "$package.napcat-new" "$package"
EOF
```

## 启动

使用有权写入配置目录的普通用户运行：

```bash
xvfb-run -a /opt/QQ/qq --no-sandbox
```

快速登录添加 `-q 123456789`。开机启动见 [systemd 配置](./Linux_startup.md)。
