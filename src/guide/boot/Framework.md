# Framework
## NapCat.Framerwork.Windows.Once <Badge type="tip" text="recommend" />
Win一键启动（内置LiteLoader）

<mark>请注意使用此方法使用 等于或高于9.9.15-29271的QQ</mark>
1. 前往 [NapCatQQ 的 release 页面](https://github.com/NapNeko/NapCatQQ/releases)
2. 选择 NapCat.Framerwork.Windows.Once.zip 下载
3. 找到目录下的exe启动 (注意不要解压到带有空格或者中文的目录)

## NapCat.Win.绿色版本 <Badge type="tip" text="recommend" />
特殊说明: 绿色版仅适用 ```Windows.AMD64``` 无需安装QQ 已内置

前往Release 下载有头绿色版本 然后双击`NapCatWinBootMain.exe` 进入设置即可


## NapCat.Framework - 通用性手动教程  <Badge type="tip" text="recommend" />

1. 按照 [LiteLoaderQQNT 官网](https://liteloaderqqnt.github.io/) 的指导安装 LiteLoaderQQNT 框架。
2. 在 LiteLoaderQQNT 的设置页面（如下图）将 `NapCat.Framework.zip` 导入即可。
![ll01.png](/assets/boot/BootWay01/ll01.png)

<mark>
强烈不推荐LL官方的修补方案,其方案将导致NapCat扩展Api失效的.
同时污染QQ本身环境,添加环境变量,清理LL需要一定计算机基础.
包括需要调试QQ的用户,强烈推荐once或者绿色版本.</mark>

## NapCat.Docker.Framework - Linux容器化部署 <Badge type="tip" text="recommend" />

仓库地址: [NapCat.Docker.Framework](https://github.com/NapNeko/NapCat.Docker.Framework)

## NapCat.Installer - Linux一键部署脚本 <Badge type="tip" text="recommend" />

::: code-group

```bash [NapCat]
curl -o napcat.sh https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.framework.sh && sudo bash napcat.sh
```

::: 
## NapCat.Framework.Installer - Win平台一键安装工具  <Badge type="warning" text="dont use" />
<mark>请注意使用此方法使用 等于或高于9.9.15-29271的QQ</mark>

此为 社区作品 可能会遇到一些问题，欢迎反馈

仓库地址: [NapCat.Framework.installer](https://github.com/NapNeko/NapCat-Installer)