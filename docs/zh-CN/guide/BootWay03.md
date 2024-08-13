# BootWay03 撸猫教程

首先，安装 QQ，确保你知道 QQ 的目录。Linux 一般在 `/opt/QQ`；Windows 一般在系统盘下 `Program Files\Tencent\QQNT`，具体定位方法可以参考 [BootWay05 教程](./BootWay05.md)的手动安装部分。 

## 预处理

**Linux 平台**需要安装 `xvfb`，参考 [NapCat-Installer 的安装脚本](https://github.com/NapNeko/NapCat-Installer/blob/main/script/install.sh)。

**Windows 平台**需要修补 QQ.exe，正如[安装 LiteLoaderQQNT](https://liteloaderqqnt.github.io/guide/install.html#%E4%BF%AE%E8%A1%A5) 时需要做的一样。请参考 LLQQNT 的教程修补 QQ，当然，如果安装过 LiteLoaderQQNT，这一步可以跳过。

## 准备文件

![way0301](../../asset/img/getting-started/install.way03.01.png)

将 `NapCat.Shell.zip` 解压到 `${QQ 安装目录}/resource/app/app_launcher/napcat`，如上图。确保 `app_launcher/napcat/napcat.mjs` 存在！

## 写入启动代码

将上图中 QQ 目录的 index.js 修改为以下的内容并保存。请注意，此时可能需要获取管理员权限。

### Windows

```js
const path = require('path');
const CurrentPath = path.dirname(__filename)
const hasNapcatParam = process.argv.includes('--enable-logging');
if (hasNapcatParam) {
    (async () => {
        await import("file://" + path.join(CurrentPath, './napcat/napcat.mjs'));
    })();
} else {
    require('./launcher.node').load('external_index', module);
}
```

### Linux

```js
const path = require('path');
const CurrentPath = path.dirname(__filename)
const hasNapcatParam = process.argv.includes('--no-sandbox');
if (hasNapcatParam) {
    (async () => {
        await import("file://" + path.join(CurrentPath, './napcat/napcat.mjs'));
    })();
} else {
    require('./launcher.node').load('external_index', module);
}
```

## 启动

<!--
打开NTQQ目录
![way0302](../../asset/img/getting-started/install.way03.02.png)

### Win 一键启动脚本
 [参考脚本](https://github.com/NapNeko/NapCatQQ/blob/main/script/NapCat.164.bat) 

napcat-9912 为新的启动脚本，复制到任意位置双击打开即可快速启动

脚本尚未修复
-->

### Windows

在终端中启动 QQ，增加 `--enable-logging` 的 flag。

具体来说，可以启动一个工作目录在 NTQQ 的终端（参考 [BootWay05 教程](./BootWay05.md)的手动安装部分），输入以下内容并回车：
```bash
.\QQ.exe --enable-logging
```

### Linux

Linux QQ 在安装时即被加入 `PATH`，可以通过以下命令运行：
```bash
xvfb-run qq --no-sanbox
``` 
