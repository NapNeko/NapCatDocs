# Framework
## 使用前警告
自 QQ 9.9.19 后 LiteLoaderQQNT 维护欠缺，NapCatQQ 鼓励用户迁移到 Shell 版本，其官方的修补方式与安装方式不再推荐。

## NapCat.Framerwork.Windows.Once <Badge type="tip" text="recommend" />
Win 一键启动（内置 LiteLoader）

<mark>请注意使用此方法使用 等于或高于 9.9.15-29271 的 QQ</mark>
1. 前往 [NapCatQQ 的 Releases 页面](https://github.com/NapNeko/NapCatQQ/releases)
2. 选择 NapCat.Framerwork.Windows.Once.zip 下载
3. 找到目录下的 exe 启动 (注意不要解压到带有空格或者中文的目录)

## NapCat.Win.一键版本 <Badge type="tip" text="recommend" />
特殊说明: 一键版仅适用 ```Windows.AMD64``` 无需安装 QQ 和 NapCat 已内置

1. 前往 [NapCatQQ 的 Releases 页面](https://github.com/NapNeko/NapCatQQ/releases) 下载 NapCat.Shell.Windows.Framework.zip 有头绿色版本解压
2. 点击 NapCatInstaller.exe 等待自动化配置
3. 进去 NapCat.XXXX.Framework 目录
4. 启动 NapCatWinBootMain.exe
5. 如果频繁提示 QQ 出现损坏请安装一个插件 [LiteLoaderQQNT-Kill-Update](https://github.com/xh321/LiteLoaderQQNT-Kill-Update)

## NapCat.Framework - 通用性手动教程  <Badge type="tip" text="recommend" />

1. 按照 [LiteLoaderQQNT 官网](https://liteloaderqqnt.github.io/) 的指导安装 LiteLoaderQQNT 框架。
2. 在 LiteLoaderQQNT 的设置页面（如下图）将 `NapCat.Framework.zip` 导入即可。
![ll01.png](/assets/boot/BootWay01/ll01.png)

<mark>
强烈不推荐 LL 官方的修补方案，其方案将导致 NapCat 扩展 API 失效的。
同时污染 QQ 本身环境，添加环境变量，清理 LL 需要一定计算机基础。
包括需要调试 QQ 的用户，强烈推荐 once 或者绿色版本。</mark>

## NapCat.Docker.Framework - Linux 容器化部署 <Badge type="tip" text="recommend" />

仓库地址: [NapCat.Docker.Framework](https://github.com/NapNeko/NapCat.Docker.Framework)

## NapCat.Installer - Linux 一键部署脚本 <Badge type="tip" text="recommend" />

::: code-group

```bash [NapCat]
curl -o napcat.sh https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.framework.sh && sudo bash napcat.sh
```

:::
## NapCat.Framework.Installer - Win平台一键安装工具  <Badge type="warning" text="dont use" />
<mark>请注意使用此方法使用 等于或高于 9.9.15-29271 的 QQ</mark>

此为 社区作品 可能会遇到一些问题，欢迎反馈

仓库地址: [NapCat.Framework.installer](https://github.com/NapNeko/NapCat-Installer)