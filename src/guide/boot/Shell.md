# Shell

## Windows 手动安装 {#windows}

1. 安装 QQ，下载并解压 [NapCat.Shell.zip](https://github.com/NapNeko/NapCatQQ/releases/latest)。
2. 双击 `launcher.bat`；Windows 10 使用 `launcher-win10.bat`。
3. 按控制台提示登录 QQ、打开 WebUI。

快速登录可传入 QQ 号：`launcher.bat 123456789`。

## Windows 一键安装 {#windows-onekey}

适用于 Windows amd64，无需预先安装 QQ。

1. 下载并解压 [NapCat.Shell.Windows.OneKey.zip](https://github.com/NapNeko/NapCatQQ/releases/latest)。
2. 运行 `NapCatInstaller.exe`，完成后进入 `NapCat.XXXX.Shell` 目录。
3. 双击 `napcat.bat` 启动。

## NapCat.Windows 可视化管理工具
- [x] **安装简单**: 单 EXE 文件，无需安装任何依赖  
- [x] **界面美观**: 使用 Fluent Design System 设计  
- [x] **功能丰富**: 支持创建配置文件、管理配置文件、一键启动/停止/重启  
- [x] **自动更新**: 支持自动检查 NapCatQQ 更新，一键更新  
- [x] **多账户管理**: 支持同时登录和管理多个 QQ 账号，轻松切换不同账户  
- [x] **后台托管**: 可最小化到系统托盘运行，不占用任务栏空间，支持后台静默运行  
- [x] **引导安装**: 提供 QQ 和 NapCatQQ 的安装引导，自动检测并指导完成必要环境配置

<details>
  <summary>软件截图</summary>
  
  ![ncd_01.png](/assets/boot/ncd/ncd_01.png)

  ![ncd_02.png](/assets/boot/ncd/ncd_02.png)

  ![ncd_03.png](/assets/boot/ncd/ncd_03.png)

  ![ncd_04.jpg](/assets/boot/ncd/ncd_04.jpg)

  ![ncd_05.jpg](/assets/boot/ncd/ncd_05.jpg)

  ![ncd_06.png](/assets/boot/ncd/ncd_06.png)

  ![ncd_07.png](/assets/boot/ncd/ncd_07.png)

  ![ncd_08.png](/assets/boot/ncd/ncd_08.png)

</details>

[NapCatQQ-Desktop](https://github.com/NapNeko/NapCatQQ-Desktop)

## NapCat.Installer - Linux 一键安装 <Badge type="tip" text="recommend" /> {#linux}

支持使用 apt / dnf 的 amd64、arm64 系统，安装到当前用户的 `~/Napcat`。

```bash
curl -fL --connect-timeout 20 --max-time 1800 \
  -o napcat.sh https://raw.githubusercontent.com/NapNeko/NapCat-Installer/main/script/install.sh &&
bash napcat.sh --docker n --cli y --github-proxy 0
```

安装后运行 `napcat` 管理服务。只安装 Shell 时使用 `--cli n`，交互安装使用 `--tui`。更新时由同一用户执行安装命令并加上 `--force`；配置和插件会保留。完整参数见 `bash napcat.sh --help`。

系统仓库未提供 Xvfb 时使用 [Docker](#docker)。另见 [手动安装](./Shell-Linux-SemiAuto.md)和 [systemd 开机启动](./Linux_startup.md)。

### 离线安装

先安装系统依赖，再将脚本目标版本、对应架构的 `QQ.deb` / `QQ.rpm` 和 `NapCat.Shell.zip` 放在当前目录：

```bash
bash napcat.sh --docker n --cli n --github-proxy 0 --skip-deps
```

### 网络设置 {#复杂网络环境}

GitHub 加速：为下载 URL 添加所选加速站前缀，并向脚本传入 `--github-proxy https://加速地址`；直连使用 `--github-proxy 0`。

HTTP / SOCKS 代理和证书通过环境变量配置。按需 `export` 后再执行安装命令：

| 用途 | 环境变量示例 |
| --- | --- |
| HTTP 代理 | `https_proxy=http://127.0.0.1:7890`、`http_proxy=http://127.0.0.1:7890` |
| SOCKS 代理及远端 DNS | `ALL_PROXY=socks5h://127.0.0.1:1080` |
| 绕过代理 | `NO_PROXY=localhost,127.0.0.1,::1,.example.internal` |
| 自定义 CA | `CURL_CA_BUNDLE=/path/to/ca.pem`、`SSL_CERT_FILE=/path/to/ca.pem` |
| 下载超时（秒） | `NAPCAT_CONNECT_TIMEOUT=30`、`NAPCAT_DOWNLOAD_TIMEOUT=3600` |

HTTP 与 SOCKS 配置选一种，清除不用的代理变量。认证信息可写入代理 URL，特殊字符需 URL 编码。CA 文件须包含所需信任链。

Docker 镜像拉取需单独配置 Docker daemon 的代理；GitHub 加速地址不适用于镜像仓库或 QQ 下载站。

## Linux 非侵入式启动器 {#linux-launcher}

适用于 apt / dnf / zypper 系统，保留 QQ 原入口文件。

```bash
curl -fL -o napcat-linux.sh https://raw.githubusercontent.com/NapNeko/napcat-linux-installer/main/install.sh &&
sudo bash napcat-linux.sh --github-proxy 0
bash ./launcher.sh
```

在固定目录安装和运行，以保留配置、插件。参数见[安装器仓库](https://github.com/NapNeko/napcat-linux-installer)。

## AppImage {#appimage}

安装 `xvfb-run`、`xauth`，从 [Releases](https://github.com/NapNeko/NapCatAppImageBuild/releases/latest) 下载对应架构的文件，保存为 `NapCat.AppImage`。包内包含 QQ 和 NapCat。

```bash
chmod +x NapCat.AppImage
./NapCat.AppImage
```

没有 FUSE 时添加 `--appimage-extract-and-run`。快速登录添加 `-q 123456789`。保持启动目录固定，更新时保留其中的数据。

## Docker <Badge type="tip" text="recommend" /> {#docker}

支持 amd64 / arm64。将以下内容保存为 `compose.yaml`，修改 `WEBUI_TOKEN`：

```yaml
services:
  napcat:
    image: mlikiowa/napcat-docker:latest
    restart: unless-stopped
    environment:
      MODE: ws
      WEBUI_TOKEN: replace-with-your-own-token
    ports:
      - "127.0.0.1:6099:6099"
      - "127.0.0.1:3001:3001"
    volumes:
      - ./data/qq:/app/.config/QQ
      - ./data/config:/app/napcat/config
      - ./data/plugins:/app/napcat/plugins
```

```bash
docker compose up -d
docker compose logs -f napcat
```

示例启用正向 WebSocket，端口仅供本机访问；远程访问需调整绑定地址或使用 SSH 转发。已有部署的 Token 和 OneBot 设置在 WebUI 中修改。反向连接参数见 [NapCat-Docker](https://github.com/NapNeko/NapCat-Docker)。

更新运行 `docker compose pull && docker compose up -d`，保留数据卷。需要固定版本时将 `latest` 替换为发布标签。宝塔、1Panel 等面板也可使用此 Compose；群晖需为数据目录配置对应用户的读写 ACL。

## macOS {#macos}

支持 macOS 12+、Intel 和 Apple Silicon。

1. 安装 QQ 到 `/Applications/QQ.app`。
2. 下载并打开 [NapCat-Mac-Installer](https://github.com/NapNeko/NapCat-Mac-Installer/releases/latest)，选择下载方式并安装。
3. 按提示授权修改 QQ 入口，切换到 NapCat 后启动。

安装器更新时保留配置和插件；FFmpeg 已随 NapCat 提供，无需另装。

## Termux {#termux}

在 Termux 中执行：

```bash
curl -fL -o napcat.termux.sh https://raw.githubusercontent.com/NapNeko/NapCat-Installer/main/script/install.termux.sh &&
bash napcat.termux.sh
```

安装后启动：

```bash
proot-distro login napcat -- bash -c 'xvfb-run -a /root/Napcat/opt/QQ/qq --no-sandbox'
```

使用其他 Debian OCI 镜像或本地 rootfs 时传入 `--image 镜像地址或归档路径`；安装中断后使用 `--resume` 继续。代理与证书见[网络设置](#复杂网络环境)，OCI 镜像下载需同时满足 registry 的网络和认证要求。

配置位于容器内 `/root/Napcat/opt/QQ/resources/app/app_launcher/napcat/config`。后台运行时允许 Termux 后台活动，并按需使用 `screen`。
