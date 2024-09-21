# BootWay03 (半自动) 教程

手动安装 Linux QQ，并用你的包管理器安装以下包：`zip unzip jq curl xvfb screen`。

下载[最新 NapCat Release](https://github.com/NapNeko/NapCatQQ/releases) 中的 `NapCat.Shell.zip` 到用户目录某处（建议先切换到 `bash`，不知道这是什么的就不用管了），然后复制以下内容，粘贴到终端里，然后按下 Enter 执行：

``` bash
install_napcat() {
    echo "安装NapCatQQ..."
    
    # 网络测试    
    network_test "Github"

    default_file="NapCat.Shell.zip"
    echo "NapCatQQ下载链接：$napcat_download_url"
    sudo curl -L "$napcat_download_url" -o "$default_file"
    if [ $? -ne 0 ]; then
        echo "文件下载失败，请检查错误。"
        exit 1
    fi

    # 解压与清理
    mkdir ./NapCat/
    mkdir ./tmp/

    if [ -f "$default_file" ]; then
        echo "$default_file 成功下载。"
    else
        ext_file=$(basename "$napcat_download_url")
        if [ -f "$ext_file" ]; then
            mv "$ext_file" "$default_file"
            if [ $? -ne 0 ]; then
                echo "$default_file 成功下载。"
            else
                echo "文件更名失败，请检查错误。"
                clean
                exit 1
            fi
        else
            echo "文件下载失败，请检查错误。"
            clean
            exit 1
        fi
    fi

    echo "正在验证 $default_file..."
    unzip -t "$default_file" > /dev/null 2>&1
    if [ $? -ne 0 ]; then
        echo "文件验证失败，请检查错误。"
        clean
        exit 1
    fi

    echo "正在解压 $default_file..."
    unzip -q -o -d ./tmp/NapCat.Shell NapCat.Shell.zip
    if [ $? -ne 0 ]; then
        echo "文件解压失败，请检查错误。"
        clean
        exit 1
    fi
    
    if [ ! -d "$target_folder/napcat" ]; then
        sudo mkdir "$target_folder/napcat/"
    fi

    echo "正在移动文件..."
    sudo cp -r -f ./tmp/NapCat.Shell/* "$target_folder/napcat/"
    if [ $? -ne 0 -a $? -ne 1 ]; then
        echo "文件移动失败，请以root身份运行。"
        clean
        exit 1
    fi

    sudo chmod -R 777 "$target_folder/napcat/"
    echo "正在修补文件..."
    sudo echo "(async () => {await import('file:///$target_folder/napcat/napcat.mjs');})();" > /opt/QQ/resources/app/loadNapCat.js
    if [ $? -ne 0 ]; then
        echo "loadNapCat.js文件写入失败，请以root身份运行。"
        clean
    fi
    clean
}
napcat_version=$(curl "https://nclatest.znin.net/" | jq -r '.tag_name')
network_test() {
    local parm1=$1
    local found=0
    target_proxy=""
    proxy_num=${proxy_num:-9}

    if [ "$parm1" == "Github" ]; then
        proxy_arr=("https://github.moeyy.xyz" "https://mirror.ghproxy.com" "https://gh-proxy.com" "https://x.haod.me")
        check_url="https://raw.githubusercontent.com/NapNeko/NapCatQQ/main/package.json"
    else
        proxy_arr=("docker.1panel.dev" "dockerpull.com" "dockerproxy.cn" "docker.agsvpt.work" "docker.agsv.top" "docker.registry.cyou")
        check_url=""
    fi

    if [ ! -z "$proxy_num" ] && [ "$proxy_num" -ge 1 ] && [ "$proxy_num" -le ${#proxy_arr[@]} ]; then
        echo "手动指定代理：${proxy_arr[$proxy_num-1]}"
        target_proxy="${proxy_arr[$proxy_num-1]}"
    else
        if [ "$proxy_num" -ne 0 ]; then
            echo "proxy 未指定或超出范围，正在检查${parm1}代理可用性..."
            for proxy in "${proxy_arr[@]}"; do
                status=$(curl -o /dev/null -s -w "%{http_code}" "$proxy/$check_url")
                if [ "$parm1" == "Github" ] && [ $status -eq 200 ]; then
                    found=1
                    target_proxy="$proxy"
                    echo "将使用${parm1}代理：$proxy"
                    break
                elif [ "$parm1" == "Docker" ] && ([ $status -eq 200 ] || [ $status -eq 301 ]); then
                    found=1
                    target_proxy="$proxy"
                    echo "将使用${parm1}代理：$proxy"
                    break
                fi
            done

            if [ $found -eq 0 ]; then
                echo "无法连接到${parm1}，请检查网络。"
            fi
        else
            echo "代理已关闭，将直接连接${parm1}..."
        fi
    fi
    napcat_download_url="${target_proxy:+${target_proxy}/}https://github.com/NapNeko/NapCatQQ/releases/download/$napcat_version/NapCat.Shell.zip"
}
clean() {
    rm -rf ./NapCat/
    rm -rf ./tmp/
    if [ $? -ne 0 ]; then
        echo "临时文件删除失败，请手动删除 $default_file。"
    fi
    rm -rf ./NapCat.Shell.zip
    if [ $? -ne 0 ]; then
        echo "NapCatQQ压缩包删除失败，请手动删除 $default_file。"
    fi
}
update_linuxqq_config() {
    echo "正在更新QQ配置..."
    # 查找用户的QQ配置文件
    confs=$(sudo find /home -name "config.json" -path "*/.config/QQ/versions/*" 2>/dev/null)
    if [ -f /root/.config/QQ/versions/config.json ]; then
        confs="/root/.config/QQ/versions/config.json $confs"
    fi
    # 遍历配置文件并进行修改
    for conf in $confs; do
        echo "正在修改 $conf..."
        sudo jq --arg targetVer "$package_targetVer" --arg buildId "$target_build" \
        '.baseVersion = $targetVer | .curVersion = $targetVer | .buildId = $buildId' "$conf" > "$conf.tmp" && \
        sudo mv "$conf.tmp" "$conf" || { echo "QQ配置更新失败！"; exit 1; }
    done

    # 修改QQ Package配置
    index_path="./loadNapCat.js"
    tmp_path="/tmp/package.json.tmp"
    package_path="/opt/QQ/resources/app/package.json"
    echo "正在修改 $package_path..."
    sudo jq --arg jsPath "$index_path" \
    '.main = $jsPath' "$package_path" > "$tmp_path" && \
    sudo mv "$tmp_path" "$package_path" || { echo "QQ Package配置更新失败！"; exit 1; }
}
install_napcat
```

然后使用

``` bash
xvfb-run -a qq --no-sandbox -q
```

或者

``` bash
xvfb-run -a linuxqq --no-sandbox -q
```

来启动 NapCat。
