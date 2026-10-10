# Linux 开机启动

适用于 systemd。先确认前台启动成功；Termux 使用其[启动命令](./Shell.md#termux)。

创建 `/etc/systemd/system/napcat.service`，将 `alice` 和路径替换为实际值：

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

按安装方式调整 `ExecStart`：

| 安装方式 | 命令示例 |
| --- | --- |
| 手动安装 | `/usr/bin/xvfb-run -a /opt/QQ/qq --no-sandbox` |
| 非侵入式启动器 | `/usr/bin/bash /home/alice/napcat/launcher.sh` |
| AppImage | `/home/alice/napcat/NapCat.AppImage` |

使用绝对路径，含空格的参数加双引号。运行用户需能写入配置目录；AppImage 的 `WorkingDirectory` 应固定。快速登录添加 `-q 123456789`。

启用并查看日志：

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now napcat.service
journalctl -u napcat.service -b -f
```

重启或停止：`sudo systemctl restart napcat`、`sudo systemctl stop napcat`。

服务不继承终端环境变量。需要代理时在 `[Service]` 中配置 `EnvironmentFile=/etc/napcat-network.env`，将所需的[代理和证书变量](./Shell.md#复杂网络环境)写入该文件。
