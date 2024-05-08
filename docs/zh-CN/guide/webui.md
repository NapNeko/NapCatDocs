# WebUI
默认端口为6099,当端口被占用时，会自动对端口+1，直到找到可用端口。

启动后打开`./config/napcat.json`文件，token密码可在其中找到

::: details 配置介绍
```json5
{
    "port": 6099,//默认起始端口
    "token": "random",//登录密钥
    "loginRate": 3//每分钟登录次数限制
    
}
```
:::

访问 http://IP:端口/webui/ 即可

1. *token密钥* 在`./config/napcat.json`文件找到 首先登录WebUi

2. 进入QQ登录 点击Qrcode 进行二维码登录

3. 登录成功后，即可修改配置

4. 配置完成后，点击保存,重启即可生效