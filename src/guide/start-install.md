# 开始安装
## 快速了解
<!-- ![Napcat](/assets/boot/BootWay01/napcat.png) -->

<!-- 从左至右依次是 正常运行版本 / 启动 NapCat.FrameWork / 启动 NapCat.Shell -->

![NCD](/assets/boot/BootWay01/ncd.png)

<!-- 此图为NapCat Shell Window可视化版本

可以了解到框架与别的框架不同点有
1. NapCat 能够 保证你的正常QQ的使用 也可以提供注入QQ本体 也可以独立运行命令行 除此外还能同时运行任意模式.
2. NapCat 不会污染你的QQ环境 更新不会让QQ异常 也不会需要重新配置NapCat.
3. NapCat 是非常容易使用的 并且带有可选的图形化界面与远程配置 -->

前往 [NapCatQQ 的 release 页面](https://github.com/NapNeko/NapCatQQ/releases)，各位可以看到有两种压缩包，
文件名后缀分别为 `Shell` 和 `Framework`，应当如何选择呢？

## 了解 Release文件

使用前请务必了解

[点我了解](./boot/release.md)

## Shell 版本

此方法为 `无头启动`

### 优点

- 无需图形化界面
- 节省内存

### 教程

- 适用教程 [方法2 - 使用命令行启动](./boot/Shell.md) <- 推荐
- 适用教程 [方法2 - Arch手动配置](./boot/Shell-Linux-SemiAuto.md) <-Arch

## Framework 版本

此方法为 `有头启动`

### 优点

- "人机合一"

### 教程

- 适用教程 [方法1 - 作为 LiteLoader 插件启动](./boot/Framework.md) <- 推荐
- 适用教程 `方法3 - 原生使用 NapCatQQ 启动` <- 由于启动方式变更,暂不提供教程
