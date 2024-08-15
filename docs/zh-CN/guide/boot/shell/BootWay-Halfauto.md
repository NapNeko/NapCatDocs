### 本教程仅针对Linux系统
<br/>手动安装linuxqq 
<br/>用你的包管理器安装以下包：zip unzip jq curl xvfb screen
<br/>下载最新napcat release的NapCat.shell.zip到用户目录某处,然后复制以下内容，粘贴到终端里（建议先切换到bash或者zsh（不知道这是什么的就不用管了）），然后按下enter执行：
```
mkdir ./NapCat/
mkdir ./tmp/
unzip -q -o -d ./tmp NapCat.shell.zip
target_folder="/opt/QQ/resources/app/app_launcher"
default_file="NapCat.shell.zip"
sudo cp -r -f ./tmp/NapCat.shell.x64/* "$target_folder/napcat/"
sudo chmod -R 777 "$target_folder/napcat/"
sudo mv -f "$target_folder/index.js" "$target_folder/index.js.bak"
output_index_js=$(echo -e "const path = require('path');\nconst CurrentPath = path.dirname(__filename)\nconst hasNapcatParam = process.argv.includes('--no-sandbox');\nif (hasNapcatParam) {\n    (async () => {\n        await import(\\\"file://\\\" + path.join(CurrentPath, './napcat/napcat.mjs'));\n    })();\n} else {\n    require('./launcher.node').load('external_index', module);\n}")
```
安装部分到此结束，然后使用
```
xvfb-run -a qq --no-sandbox -q
```
或者
```
xvfb-run -a linuxqq --no-sandbox -q
```
来启动napcat

接下来请参考文档其他部分配置端口和协议
