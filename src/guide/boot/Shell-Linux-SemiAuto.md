# BootWay03 (半自动) 教程

:::warning
此启动方式不保证可用，linux建议使用docker启动或一键启动脚本
不回复关于这个启动方式造成的任何问题，若动手能力极强可以一试
:::

## 安装教程

### 1.依赖

你需要安装较新版本（至少大于所使用NapCat版本推荐ntQQ版本）的 QQ

### 2.挂载

执行命令

``` bash（需要root权限，请自行sudo或su root
mount --make-private /opt/QQ/resources/app/package.json /opt/QQ/resources/app/package.json
mount --bind /opt/QQ/ path/to/napcat/QQ/
mount --bind path/to/napcat/qqnt.json path/to/napcat/QQ/resources/app/package.json
```

若需要持久化，可以向 /etc/fstab 加入

:::warning
括号及括号内注释不能写入/etc/fstab
:::

```
/opt/QQ/resources/app/package.json /opt/QQ/resources/app/package.json none  bind,private,defaults(defaults可改动，具体看个人设置)  0 0

/opt/QQ/         path/to/napcat/QQ/ none    bind,defaults(defaults可改动，具体看个人设置) 0 0

path/to/napcat/qqnt.json path/to/napcat/QQ/resources/app/package.json none bind,defaults(defaults可改动，具体看个人设置) 0 0
```

### 3.安装

解压 napcat.shell 到 `path/to/napcat/`，保证 `path/to/napcat/qqnt.json`存在

### 4.启动

``` bash
xvfb-run -a path/to/napcat/QQ/qq --no-sandbox [-q <快速登录的qq号>]
```
