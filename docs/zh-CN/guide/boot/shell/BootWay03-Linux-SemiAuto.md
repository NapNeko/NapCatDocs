# BootWay03 (半自动) 教程

手动安装 Linux QQ，并用你的包管理器安装以下包：`zip unzip jq curl xvfb screen`。

下载[最新 NapCat Release](https://github.com/NapNeko/NapCatQQ/releases) 中的 `NapCat.Shell.zip` 到用户目录某处（建议先切换到 `bash` 或者 `zsh`，不知道这是什么的就不用管了），然后复制以下内容，粘贴到终端里，然后按下 Enter 执行：
```
mkdir ./NapCat/
mkdir ./tmp/
unzip -q -o -d ./tmp NapCat.Shell.zip
target_folder="/opt/QQ/resources/app/app_launcher"
default_file="NapCat.shell.zip"
sudo cp -r -f ./tmp/*  "$target_folder/napcat/"
sudo chmod -R 777 "$target_folder/napcat/"
sudo mv -f "$target_folder/index.js" "$target_folder/index.js.bak"
output_index_js=$(echo -e "const path = require('path');\nconst CurrentPath = path.dirname(__filename)\nconst hasNapcatParam = process.argv.includes('--no-sandbox');\nif (hasNapcatParam) {\n    (async () => {\n        await import(\\\"file://\\\" + path.join(CurrentPath, './napcat/napcat.mjs'));\n    })();\n} else {\n    require('./launcher.node').load('external_index', module);\n}")
sudo bash -c "echo \"$output_index_js\" > \"$target_folder/index.js\""
```

然后使用

```
xvfb-run -a qq --no-sandbox -q
```

或者

```
xvfb-run -a linuxqq --no-sandbox -q
```

来启动 NapCat。
