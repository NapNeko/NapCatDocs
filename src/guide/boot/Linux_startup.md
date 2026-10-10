# Linux 开机启动

本页适用于使用 systemd 的 Linux。先以前台方式启动成功，再配置服务。Termux / PRoot 不运行 systemd，请使用 [Termux 启动方式](./Shell.md#termux)。

## 创建服务

以下示例假设安装用户为 `alice`，一键 Shell 安装位置为 `/home/alice/Napcat`。请替换成真实用户名和绝对路径，并确保该用户可以写入 NapCat 配置目录。

```bash
sudo nano /etc/systemd/system/napcat.service
```

写入：

```ini
[Unit]
Description=NapCat Shell
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
User=alice
WorkingDirectory=/home/alice
ExecStart=/usr/bin/xvfb-run -a /home/alice/Napcat/opt/QQ/qq --no-sandbox
Restart=on-failure
RestartSec=5
TimeoutStopSec=20
LimitCORE=0

[Install]
WantedBy=multi-user.target
```

根据安装方式修改 `ExecStart`：

| 安装方式 | 前台启动命令示例 |
| --- | --- |
| 一键 Shell | `/usr/bin/xvfb-run -a /home/alice/Napcat/opt/QQ/qq --no-sandbox` |
| 半自动修改系统 QQ | `/usr/bin/xvfb-run -a /opt/QQ/qq --no-sandbox` |
| 非侵入式启动器 | `/usr/bin/bash /home/alice/napcat/launcher.sh` |
| AppImage | `/home/alice/napcat/QQ-53644_NapCat-v4.18.37-amd64.AppImage` |

路径包含空格时，分别用双引号包住对应参数。`ExecStart` 不经过交互式 Shell，不会展开 `~`、`$HOME`、重定向或 `&&`。AppImage 的数据位置取决于 `WorkingDirectory`，应保持固定。

需要快速登录时，在启动命令末尾添加 `-q 123456789`。不要使用 `screen -dmS`、后台 `&` 或 `Type=oneshot`，让 systemd 跟踪实际运行的进程。

## 启用、停止与检查

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now napcat.service
systemctl status napcat.service
journalctl -u napcat.service -b -f
```

`-b` 表示当前这次开机，`-f` 持续查看新日志。修改配置后重启或停止：

```bash
sudo systemctl restart napcat.service
sudo systemctl stop napcat.service
```

服务不会继承登录终端的代理变量。确有代理需求时，用 `sudo systemctl edit napcat.service` 在 `[Service]` 段配置 `EnvironmentFile=/etc/napcat-network.env`，在该文件中填写 `HTTPS_PROXY=...`、`NO_PROXY=...` 等实际需要的变量，并限制文件读取权限。代理与证书配置见 [复杂网络环境](./Shell.md#复杂网络环境)。
