# Shell

## NapCat.Shell - Win 手动启动教程 <Badge type="tip" text="recommend" />

1. 前往 [NapCatQQ 的 Releases 页面](https://github.com/NapNeko/NapCatQQ/releases) 下载 NapCat.Shell.zip 并解压
2. 确保 QQ 版本安装且最新
3. 双击目录下 launcher.bat 即可启动 如果是 Win10 则使用 launcher-win10.bat

<mark>如果需要快速登录 将 QQ 号传入参数即可</mark>

::: code-group
```bash [Windows11.bat]
launcher.bat 123456
```
```bash [Windows10.bat]
launcher-win10.bat 123456
```
:::



## NapCat.Win.一键版本 <Badge type="tip" text="recommend" />
特殊说明: 一键版仅适用 ```Windows.AMD64``` 无需安装 QQ 和 NapCat 已内置

1. 前往 [NapCatQQ 的 Releases 页面](https://github.com/NapNeko/NapCatQQ/releases) 下载 NapCat.Shell.Windows.OneKey.zip 无头绿色版本解压
2. 点击 NapCatInstaller.exe 等待自动化配置
3. 进去 NapCat.XXXX.Shell 目录
4. 启动 napcat.bat

由于上面的包巨大且可能并不适合下载 特此为 Win64 无头 提供轻量化一键部署方案

对应的 NapCat.Shell.Windows.OneKey.zip 启动后 自动化部署一键包(此包仅适用 Windows)

<mark>如果需要快速启动 新建 Bat 文件写入如下例子 将10001替换为你的QQ号</mark>

::: code-group
```bash [quick.bat]
NapCatWinBootMain.exe 10001
```
:::

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

## NapCat.Installer - Linux 一键安装 <Badge type="tip" text="recommend" />

支持 amd64 / arm64，使用 apt-get 或 dnf 安装依赖。Shell 安装目录为当前用户的 `$HOME/Napcat`；安装依赖和 TUI-CLI 时才需要提权。Debian 12、Fedora 44 已做真实无登录启动验证。RHEL / CentOS Stream 10 缺少 Xvfb，应选择容器等具备完整运行环境的方案。

先选择一条可用的 GitHub 下载路线。以下两种方式任选其一，后续下载使用同一设置：

::: code-group
```bash [GitHub 直连]
curl -fL --connect-timeout 20 --max-time 1800 \
  --proto '=http,https' --proto-redir '=http,https' \
  -o napcat.sh.part https://raw.githubusercontent.com/NapNeko/NapCat-Installer/main/script/install.sh &&
bash -n napcat.sh.part && mv -- napcat.sh.part napcat.sh &&
bash napcat.sh --github-proxy 0
```

```bash [自选 GitHub 加速地址]
GITHUB_MIRROR='https://ghfast.top'
curl -fL --connect-timeout 20 --max-time 1800 \
  --proto '=http,https' --proto-redir '=http,https' \
  -o napcat.sh.part "$GITHUB_MIRROR/https://raw.githubusercontent.com/NapNeko/NapCat-Installer/main/script/install.sh" &&
bash -n napcat.sh.part && mv -- napcat.sh.part napcat.sh &&
bash napcat.sh --github-proxy "$GITHUB_MIRROR"
```
:::

加速服务是独立的第三方站点，请选择自己信任且可访问的地址。显式指定路线后，下载失败会报告错误；需要换路线时重新指定参数。

已下载脚本后，可以直接选择安装方式：

::: code-group
```bash [Shell]
bash napcat.sh --docker n --cli n --github-proxy 0
```

```bash [Shell 和 TUI-CLI]
bash napcat.sh --docker n --cli y --github-proxy 0
```

```bash [可视化交互]
bash napcat.sh --tui --github-proxy 0
```

```bash [强制更新 Shell]
bash napcat.sh --docker n --cli n --github-proxy 0 --force
```

```bash [Docker]
bash napcat.sh --docker y --qq 123456789 --mode ws \
  --docker-image mlikiowa/napcat-docker:v4.18.37 --confirm
```
:::

| 参数 | 用途 |
| --- | --- |
| `--docker y/n` | Docker 或本地 Shell 安装 |
| `--cli y/n` | 是否安装 / 更新 TUI-CLI |
| `--github-proxy 0` | GitHub 直连；仍使用 curl 的标准代理环境变量 |
| `--github-proxy https://地址` | 明确选择 GitHub URL 加速前缀 |
| `--proxy auto` | 有限时间探测可用路线，并验证返回内容；省略路线时也使用自动探测 |
| `--proxy 0` | 直连；旧的数字选项以当前脚本帮助为准 |
| `--docker-image 仓库:标签` | 使用指定的完整镜像名，可指向自己的镜像仓库 |
| `--mode ws/reverse_ws/reverse_http` | Docker 的 OneBot 连接方式 |
| `--url 完整URL` | 反向连接目标，例如 `ws://bot:8080/onebot/v11/ws` |
| `--force` | 强制更新 Shell；保留原有配置和插件 |
| `--skip-deps` | 系统依赖已经装好时跳过包管理器 |

TUI-CLI 保存所选 GitHub 路线到 `${XDG_CONFIG_HOME:-$HOME/.config}/napcat/github-proxy`，供后续更新使用。可用 `NAPCAT_GITHUB_PROXY=0` 或完整加速 URL 覆盖它。使用最初安装 NapCat 的用户执行更新，避免把安装位置切换到 root 的主目录。

### 离线安装

提前准备好系统依赖，并把同一平台、同一架构的官方 QQ 包和 `NapCat.Shell.zip` 放在当前目录。QQ 包命名为 `QQ.deb`（Debian / Ubuntu）或 `QQ.rpm`（Fedora / EL），然后运行：

```bash
bash napcat.sh --docker n --cli n --github-proxy 0 --skip-deps
```

当前安装器以 QQ `3.2.34-53644` 为目标版本。离线包与目标版本应一致。安装器先解包并检查文件，失败时保留现有安装。依赖完整时，此流程可由没有 sudo 的普通用户运行。

### 复杂网络环境

GitHub 加速地址与 HTTP / SOCKS 代理是两种配置。`--github-proxy` 修改下载 URL 前缀；curl 的代理通过环境变量设置：

::: code-group
```bash [HTTP 代理与认证]
export HTTPS_PROXY='http://proxy.example.com:8080'
export HTTP_PROXY="$HTTPS_PROXY"
export NO_PROXY='localhost,127.0.0.1,::1,.example.internal'
bash napcat.sh --docker n --cli n --github-proxy 0
```

```bash [SOCKS 与远端 DNS]
export ALL_PROXY='socks5h://127.0.0.1:1080'
export NO_PROXY='localhost,127.0.0.1,::1'
bash napcat.sh --docker n --cli n --github-proxy 0
```

```bash [企业 CA 和慢速链路]
export CURL_CA_BUNDLE='/path/to/company-and-public-ca.pem'
export SSL_CERT_FILE="$CURL_CA_BUNDLE"
export NAPCAT_CONNECT_TIMEOUT=30
export NAPCAT_DOWNLOAD_TIMEOUT=3600
bash napcat.sh --docker n --cli n --github-proxy 0
```
:::

需要代理认证时，代理 URL 可使用 `http://用户名:密码@代理地址:端口`，特殊字符应进行 URL 编码。不要把含凭据的命令写入公开日志。`socks5h` 由代理解析目标域名；`socks5` 使用本机 DNS。设置一种实际需要的代理，并清除当前 Shell 中不再使用的同类变量，避免大小写变量或 `HTTPS_PROXY` 覆盖 `ALL_PROXY`。

CA 文件应包含连接所需的信任链，系统信任库也可以正常使用。脚本保留 TLS 验证，不需要 `curl -k`。普通用户安装器在调用 sudo 时会传递代理和 CA 变量；直接使用 `sudo bash` 运行其他脚本时，需要通过 sudo 的允许列表显式保留这些变量。

安装脚本下载有连接和整体超时，HTTP 错误、断流和内容校验失败会明确退出。安装器的临时下载只有成功后才替换目标文件。可重新执行相同命令，不必删除原配置或不断切换下载站点。

`docker pull` 由 Docker daemon 联网，不继承运行安装器的终端代理。请按 Docker 的代理配置设置 daemon，或使用 `--docker-image` 指定可用的完整镜像地址。GitHub 加速前缀不适用于 OCI 认证服务、Docker Hub 或腾讯 QQ 下载站。QQ 运行期间的网络还取决于设备的路由和代理方案，安装下载成功不代表所有 QQ 网络请求均走代理。

仓库：[NapCat-Installer](https://github.com/NapNeko/NapCat-Installer)、[NapCat-TUI-CLI](https://github.com/NapNeko/NapCat-TUI-CLI)。

## NapCat.Linux.Launcher - 非侵入式启动器

使用预加载库读取 QQ 入口，NapCat 和配置位于运行目录。当前安装器支持 apt-get、dnf 和 zypper；Fedora 44 与 openSUSE Leap 15.6 已通过真实无登录启动验证。

```bash
curl -fL --connect-timeout 20 --max-time 1800 \
  -o napcat-linux.sh https://raw.githubusercontent.com/NapNeko/napcat-linux-installer/main/install.sh &&
sudo bash napcat-linux.sh --github-proxy 0
bash ./launcher.sh
```

使用加速地址时，同时更换首个下载 URL 和 `--github-proxy` 参数。脚本也支持 `--launcher-source /path/to/launcher.cpp` 使用本地源码，`--skip-deps` 使用现有依赖。完全离线时还需在当前目录准备 `NapCat.Shell.zip` 和 `QQ.deb` / `QQ.rpm`。

openSUSE 使用 zypper 安装本发行版的库，将官方 QQ 解包到 `/opt/napcat-qq`，避免把 Fedora 风格的 RPM 依赖名称直接交给 zypper。启动器会使用实际 QQ 路径。普通路径与含空格、中文、`#` 的路径均可使用生成的 `launcher.sh` 启动。

仓库：[安装器](https://github.com/NapNeko/napcat-linux-installer)、[启动库源码](https://github.com/NapNeko/napcat-linux-launcher)。

## NapCat.AppImage

从 [Releases](https://github.com/NapNeko/NapCatAppImageBuild/releases) 下载对应架构的 AppImage。当前提供 QQ **53644** 与 NapCat **v4.18.37** 的 amd64 / arm64 版本，双架构均做过真实无登录启动检查。

先通过系统包管理器安装 `xvfb-run`、`xauth`。AppImage 已包含 QQ、NapCat 和主要运行库。保持工作目录固定，用于保存运行数据：

```bash
chmod +x QQ-53644_NapCat-v4.18.37-amd64.AppImage
./QQ-53644_NapCat-v4.18.37-amd64.AppImage
```

需要快速登录时在末尾加 `-q 123456789`。系统支持 FUSE 时可以直接运行；没有 FUSE 的容器或服务器可显式解包：

```bash
./QQ-53644_NapCat-v4.18.37-amd64.AppImage --appimage-extract
./squashfs-root/AppRun
```

arm64 设备将文件名中的 `amd64` 改为 `arm64`。更新程序文件时保留原工作目录中的配置和插件。

## NapCat.Docker - Linux 容器部署 <Badge type="tip" text="recommend" />

官方镜像支持 amd64 / arm64。下面的 Compose 启用正向 WebSocket，并持久化 QQ、NapCat 配置和插件：

```yaml
services:
  napcat:
    image: mlikiowa/napcat-docker:v4.18.37
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

示例仅映射本机端口；远程访问时可使用 SSH 转发，或按实际网络配置监听地址和反向代理。`WEBUI_TOKEN`、`MODE` 只初始化缺失的配置文件，修改已有部署请使用 WebUI 或编辑持久化配置。反向模式使用 `MODE=reverse_ws` / `reverse_http`，并设置完整的 `ONEBOT_URL`。

更新时修改镜像标签，然后执行 `docker compose pull && docker compose up -d`，保留数据卷。镜像默认使用打包的 Native FFmpeg；只有明确配置 `FFMPEG_PATH` 或 `FFPROBE_PATH` 才使用外部程序。

群晖 DSM 的 bind mount 还受共享文件夹 ACL 约束。请给实际运行 UID / GID 对应的用户或组授予数据目录读写权限，并按需设置 `NAPCAT_UID` / `NAPCAT_GID`；单纯修改 Unix mode 无法代替 DSM 的 ACL 授权。

其他机器人框架的 Compose 见 [NapCat-Docker](https://github.com/NapNeko/NapCat-Docker)。

## NapCat.MacOs - macOS 安装工具 <Badge type="tip" text="recommend" />

[下载安装器 v1.7](https://github.com/NapNeko/NapCat-Mac-Installer/releases/tag/v1.7)。支持 macOS 12.0 及以上、Intel 和 Apple Silicon，可下载与更新 NapCat，并保留配置和插件。按安装器提示备份、替换 QQ 的 `package.json`。

QQ **7.0.2-53644** 的原始签名启用了 Hardened Runtime，同时包含 `com.apple.security.cs.disable-library-validation=true`。已在两种架构上保留原 Mach-O 签名，验证 QQ 加载外部原生模块、Packet Hook、Napi 和 Native FFmpeg，并持续运行超过 35 秒；此结论针对该测试版本。

其他 QQ 版本若被系统终止，请先检查其原始签名、entitlements 和 macOS 崩溃记录，区分签名限制、架构错误和模块初始化错误。已验证版本可以使用现有签名加载打包模块，无需将重签 QQ 或关闭系统保护作为安装步骤。

NapCat 默认使用随包提供的 FFmpeg addon。设置 `FFMPEG_PATH` / `FFPROBE_PATH` 会显式切换到外部程序；外部方案的 SILK 转码要求 `ntsilk_s16le` 编码器，普通 Homebrew FFmpeg 通常不包含它。模块加载失败时会报告原始错误，应核对架构和依赖。

## NapCat.Termux - 安卓 Termux 部署 <Badge type="tip" text="recommend" /> {#termux}

在更新过软件源的 Termux 中运行：

```bash
curl -fL --connect-timeout 20 --max-time 1800 \
  -o napcat.termux.sh https://raw.githubusercontent.com/NapNeko/NapCat-Installer/main/script/install.termux.sh &&
bash napcat.termux.sh
```

proot-distro 5 使用 OCI 镜像，默认安装 `debian:bookworm-slim`。访问 Docker Hub 认证或 registry 超时，与 GitHub 下载是不同问题。可明确选择可访问的 Debian OCI 镜像，或提供适用于本机架构的 rootfs 归档：

```bash
bash napcat.termux.sh --image registry.example.com/library/debian:bookworm-slim
bash napcat.termux.sh --image /data/data/com.termux/files/home/debian-rootfs.tar
```

`--github-proxy https://加速地址` 仅改变 NapCat 下载来源。HTTP / SOCKS 代理和 CA 设置见 [复杂网络环境](#复杂网络环境)；脚本会向 PRoot 容器传递代理、超时变量，并绑定 `CURL_CA_BUNDLE` / `SSL_CERT_FILE` 指定的证书文件。OCI 仓库还需满足所用 proot-distro 版本的代理、认证和证书要求。

容器创建后初始化失败会保留数据。处理网络或依赖问题后继续：

```bash
bash napcat.termux.sh --resume
proot-distro login napcat -- bash -c 'xvfb-run -a /root/Napcat/opt/QQ/qq --no-sandbox'
```

配置目录在容器内的 `/root/Napcat/opt/QQ/resources/app/app_launcher/napcat/config`。后台运行可使用 `screen`，并按设备需要关闭 Termux 的电池优化、保持唤醒。已验证 proot-distro 5.1.7 的真实 PRoot、OCI 与本地归档流程；Android 的进程回收策略仍取决于实际设备。

## NapCat.Docker.Baota - 宝塔面板 <Badge type="tip" text="community" />

[社区模板](https://github.com/makotowu/NapCat-Docker.Baota) 的旧配置映射了 3001，却没有启用 WebSocket preset；修复见 [PR #1](https://github.com/makotowu/NapCat-Docker.Baota/pull/1)。使用旧模板时，在环境变量中补充 `MODE=ws`；已有 OneBot 配置需另外确认 WebSocket 已启用。QQ、config、plugins 三个目录都应持久化。

## NapCat.1Panel - 1Panel 插件 <Badge type="tip" text="community" />

[原社区仓库](https://github.com/Fahaxikiii/napcat-1panel) 已归档，模板停止维护。新部署建议在 1Panel 中使用上方官方镜像和 Compose 配置，按需设置端口、数据目录与运行 UID / GID。

## NapCat.Railway - Railway 部署 <Badge type="tip" text="community" />

原社区按钮仍固定旧镜像 `v4.7.76`。新部署可使用 `mlikiowa/napcat-docker:v4.18.37` 或自己选定的发布标签。部署前需落实 `/app/.config/QQ`、`/app/napcat/config`、`/app/napcat/plugins` 的持久化；平台限制卷数量时，需要使用已经调整数据目录的自建镜像或支持这些挂载的部署方式。直接将空卷挂载到 `/app` 会遮住启动文件。

为 WebUI 的 6099 端口配置平台路由；OneBot 根据正向端口或反向 URL 单独配置。使用支持持久运行的实例。本次核验了公开模板配置，未创建收费云实例进行登录测试。

## NapCat.Zeabur - Zeabur 部署 <Badge type="tip" text="community" />

[社区模板 JGR8CQ](https://zeabur.com/templates/JGR8CQ) 的公开配置使用官方 `latest` 镜像。部署时检查选定版本、6099 路由、OneBot 模式以及 QQ / config / plugins 的持久化设置；可改用明确标签固定版本。公开页面信息不足以验证所有卷和运行参数，本次未做云实例实测。

## NapCat.Nix - Nix 部署 <Badge type="tip" text="community" />

[社区仓库](https://github.com/initialencounter/napcat.nix) 的修复见 [PR #3](https://github.com/initialencounter/napcat.nix/pull/3)：移除 lock 中的本机路径，更新到 QQ 53644 / NapCat v4.18.37，补齐双架构、参数引用、代理证书和插件持久化。x86_64-linux / aarch64-linux 均通过完整构建、真实无登录启动和重启保数据检查。

PR 合入前，可使用该 PR 的固定提交：

```bash
nix run --extra-experimental-features 'nix-command flakes' \
  github:MliKiowa/napcat.nix/566c5dbd70d13f3fa6e91e7b0b0d22d931a6e758
```

默认数据目录为当前目录下的 `data/qq`、`data/napcat/config`、`data/napcat/plugins`。Bubblewrap 需要内核允许用户命名空间；在容器中运行还受宿主的 namespace / AppArmor 策略约束。Nix 下载器自身的代理和 CA 配置，与启动后传给 QQ 沙箱的环境变量分别生效。
