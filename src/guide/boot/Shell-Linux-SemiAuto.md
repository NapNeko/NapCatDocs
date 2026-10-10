# Linux Shell 半自动安装

本页用于手动修改 QQ 入口。希望保留 QQ 原文件时，可选择 [非侵入式启动器或 AppImage](./Shell.md)。

## 1. 安装 QQ 和依赖

当前 NapCat 的 QQ 兼容范围从构建号 **40768** 起；不同平台的构建并不完全相同。Linux 推荐 **3.2.34-53644**，不要继续使用旧教程中的 28060。安装与 CPU 架构一致的 QQ，并通过发行版包管理器安装其运行库。

无桌面环境还需要 `xvfb-run` 和 `xauth`：

- Debian / Ubuntu：`sudo apt install xvfb xauth jq`
- Fedora：`sudo dnf install xorg-x11-server-Xvfb xorg-x11-xauth jq`
- openSUSE：`sudo zypper install xvfb-run xauth jq`
- Arch：`sudo pacman -S xorg-server-xvfb xorg-xauth jq`

RHEL / CentOS Stream 10 的仓库已移除 X11 服务端，不能直接照搬 Fedora 的包名。可选择带完整运行环境的容器；请先确认宿主平台和镜像架构相符。

下面使用 `/opt/QQ` 作为 QQ 安装位置；实际路径不同时应同时调整命令和服务配置。

## 2. 安装 NapCat

从 [Releases](https://github.com/NapNeko/NapCatQQ/releases) 下载 `NapCat.Shell.zip`，解压到 `/opt/QQ/resources/app/napcat`，确认其中存在 `napcat.mjs`。更新时保留自己的 `config` 和 `plugins` 目录。

## 3. 备份原入口并编写加载器

首次修改前备份原始 `package.json`。QQ 更新后，应使用新版本的原文件重新执行这一步；不要把已经打过补丁的文件当作原文件备份。

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

`pathToFileURL` 可以正确处理路径中的空格、中文和 `#`。普通 QQ 启动使用备份中记录的入口，避免把 `application.asar` 写成 `application`。

如果同时使用 LiteLoaderQQNT，将加载器 `else` 分支替换为自己的 LiteLoader 入口，例如 `require('/opt/LiteLoaderQQNT')`。

## 4. 修改 package.json

先验证 JSON，再替换文件；无需开放整个 QQ 目录的写入权限。

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

## 5. 启动

```bash
xvfb-run -a /opt/QQ/qq --no-sandbox
```

需要快速登录时：

```bash
xvfb-run -a /opt/QQ/qq --no-sandbox -q 123456789
```

使用有权写入配置目录的普通用户运行。未配置快速登录或快速登录失败时，仍需要扫码。

## 6. 设置开机启动

按 [Linux 开机启动](./Linux_startup.md) 配置前台运行的 systemd 服务，将 `ExecStart` 中的 QQ 路径设为 `/opt/QQ/qq`，并设置实际运行用户和工作目录。
