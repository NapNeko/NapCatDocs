# Advanced Configuration Guide

## Enabling HTTPS

NapCat does not directly provide HTTPS services, but you can achieve HTTPS functionality indirectly through other web software, such as using Nginx's reverse proxy feature.

::: details Enable HTTPS for WebUI and Onebot11 using Nginx

> [!NOTE]
> First, we assume you have already completed the steps of domain binding, SSL certificate application, and installation of Nginx and NapCat, as well as the basic configuration of NapCat.

Open the `./config/webui.json` file:
- Change `host` to `127.0.0.1`.
- Change `prefix` to a string that conforms to URL encoding rules, such as `/napcat`.
  - The `prefix` field requires the string to start with `/` but not end with `/`. Any string that does not comply with this rule will be corrected to conform.
  - For example, `/napcat`, `napcat`, `napcat/`, and `/napcat/` will all be corrected to `/napcat`.

```json5
// Configuration unrelated to this example is not shown here
{
    "host": "127.0.0.1",
    "port": 6099,
    "prefix": "/napcat",
}
```

Open the `./config/onebot11_xxxx.json` file, where `xxxx` is your bot's QQ number.

```json5
// Configuration unrelated to this example is not shown here
{
  "http": {
    "enable": true,
    "host": "127.0.0.1", // Change to 127.0.0.1
    "port": 3000, // Arbitrary
  },
  "ws": {
    "enable": true,
    "host": "127.0.0.1", // Change to 127.0.0.1
    "port": 3000, // The host and port for http and ws should be the same
  },
}
```

Open the `/etc/nginx/sites-enabled/default` file and replace its content with the following. The default is `default`, but you can choose based on your actual situation.

```nginx
server {
    listen 80;
    return 301 https://$http_host$request_uri; # Force redirect http to https
}

map $http_upgrade $connection_upgrade {
    default     keep-alive;
    'websocket' upgrade;
}

server {
    listen 443 ssl;
    server_name default; # You can change this to your domain, or leave it as is
    ssl_certificate /path/to/public_key; # Path to SSL public key, fill in according to your actual situation
    ssl_certificate_key /path/to/private_key; # Path to SSL private key, fill in according to your actual situation
    ssl_session_cache shared:SSL:5m;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4:@SECLEVEL=1;
    # TLSv1 and TLSv1.1 are actually insecure and not recommended, but some language HTTPS/WSS libraries are still stuck in the TLSv1 era, so they have to be retained for now
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    location / {
        # This retains the default static page access of nginx, you can return 404 if not needed
        # return 404;
        root /var/www/html;
        index index.html;
        try_files $uri $uri/ =404;
    }

    location /napcat/ { # This should be the prefix in webui.json, but with a trailing /
        proxy_http_version 1.1;
        proxy_set_header Host $host:$server_port;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_buffering off;
        proxy_request_buffering off;
        proxy_pass http://127.0.0.1:6099; # This should be the host and port in webui.json, note that there should be no trailing /
    }

    location /onebot/ { # This can be any value, just start and end with /
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host $host:$server_port;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_buffering off;
        proxy_request_buffering off;
        proxy_pass http://127.0.0.1:3000/; # This should be the host and port in onebot11_xxxx.json, note the trailing /
    }
}
```

After completing the configuration, use `./napcat.sh -q` to start NapCat and `nginx -s reload` to reload nginx.

If everything goes smoothly, you should be able to access NapCat's WebUI at `https://your-domain/napcat/webui` and connect the bot to `https://your-domain/onebot/` and `wss://your-domain/onebot/`.

> [!WARNING]
> Do not write comments into the configuration file, otherwise, it will fail to parse.

:::
