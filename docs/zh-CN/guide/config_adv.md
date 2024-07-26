# 进阶配置介绍

## 启用HTTPS

NapCat 本身并不直接提供HTTPS服务，但是你可通过其他WEB软件例如`nginx`的反向代理功能间接实现HTTPS效果。

::: details 使用nginx为WebUI和Onebot11启用HTTPS

::: tip
首先我们假设你已经完成了域名绑定和SSL证书申请的步骤。

打开`./config/webui.json`文件：
- 将`host`修改为`127.0.0.1`。
- 将`prefix`修改为你喜好的符合URL编码规范的字符串，例如`/napcat`。
  - `prefix`字段要求字符串以`/`开头但不以`/`结尾，所有不符合此规则的字符串都将被修正为符合规则的状态。
  - 例如`/napcat`、`napcat`、`napcat/`、`/napcat/`都会被修正为`/napcat`。

```json5
// 与本例无关配置将不在此处展示
{
    "host": "127.0.0.1",
    "port": 6099,
    "prefix": "/napcat",
}
```

打开`./config/onebot11_xxxx.json`，其中`xxxx`为你的机器人qq号。

```json5
// 与本例无关配置将不在此处展示
{
  "http": {
    "enable": true,
    "host": "127.0.0.1", // 修改为127.0.0.1
    "port": 3000, // 随意
  },
  "ws": {
    "enable": true,
    "host": "127.0.0.1",
    "port": 3000, // 这里 http 与 ws 填写相同的 host 和 port
  },
}
```

打开`/etc/nginx/sites-enabled/default`文件，将如下内容覆盖进去，默认是`default`可以根据自己实际情况进行选择。

```nginx
server {
    listen 80;
    return 301 https://$http_host$request_uri; # 强制将http重定向到https
}

map $http_upgrade $connection_upgrade {
    default     keep-alive;
    'websocket' upgrade;
}

server {
    listen 443 ssl;
    server_name default; # 这里可以改成你的域名，也可以不改
    ssl_certificate /path/to/public_key; # 这里是SSL公钥路径，需根据实际情况填写
    ssl_certificate_key /path/to/private_key; # 这里是SSL私钥路径，需根据实际情况填写
    ssl_session_cache shared:SSL:5m;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4:@SECLEVEL=1;
    # TLSv1和TLSv1.1其实已经不安全不推荐使用了，但是有些语言的HTTPS/WSS库模块还停留在TLSv1时代，所以只能暂且保留了
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    location / {
        # 这里保持了nginx默认的静态页访问，不需要的话可以直接404掉
        # return 404;
        root /var/www/html;
        index index.html;
        try_files $uri $uri/ =404;
    }

    location /napcat/ { # 这里填的就是 webui.json 中的 prefix，但是你得在结尾补个 /
        proxy_set_header Host $host:$server_port;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_buffering off;
        proxy_request_buffering off;
        proxy_pass http://127.0.0.1:6099; # 这里填的就是 webui.json 中的 host 和 port，注意结尾不能有 /
    }

    location /onebot/ { # 这里可以随意填写，同时以 / 开头和结尾即可
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host $host:$server_port;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_buffering off;
        proxy_request_buffering off;
        proxy_pass http://127.0.0.1:3000/; # 这里填的就是 onebot11_xxxx.json 中的 host 和 port，注意结尾有 /
    }
}
```

配置完成后使用`./napcat.sh -q`启动 NapCat，使用`nginx -s reload`重启 nginx。

如果顺利你就能在`https://你的域名/napcat/webui`上访问到 NapCat 的 WebUI，并且将机器人连接到`https://你的域名/onebot/`和`wss://你的域名/onebot/`了。

:::warning

请勿将注释内容写入配置文件，否则会导致配置文件解析失败。

:::
