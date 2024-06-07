# 基础配置介绍

::: details 用 WebUI 配置

如果你已经启动了 NapCat，并且有多于 1 个开放端口，则可以通过 WebUI 进行配置。

默认端口为 `6099`。当端口被占用时，会自动对端口 +1，直到找到可用端口，端口号会在启动时显示。

启动后打开 `./config/webui.json` 文件，token 密码可在其中找到。

```json5
{
    "port": 6099, // WebUI 端口
    "token": "xxxx", //登录密钥，默认是自动生成的随机登录密码
    "loginRate": 3, //每分钟登录次数限制
}
```

访问 `http://IP:端口/webui/login.html`，然后进行以下操作：

1. 进入 QQ 登录，点击 `QRCode` 进行二维码登录。

2. 登录成功后，即可修改配置。

3. 配置完成后，点击保存，重启即可生效。

:::

::: details 用文件配置 OneBot11 设置

和上面一样，**重启登录后配置才能生效**。

打开 NapCat 的 `config` 目录，找到名为 `onebot11_<你的QQ号>.json` 的文件，如 `onebot11_1234567.json`；如果没有此文件可以复制 `onebot11.json` 重命名为 `onebot11_<你的QQ号>.json`。

下面是配置内容参数解释：

```json5
{
  "http": {
    // 是否启用http服务, true为启动，false为禁用
    "enable": false,
    // HTTP服务监听的 ip 地址，为空则监听所有地址
    "host": "",
    // http服务端口
    "port": 3000,
    // http上报密钥，可为空
    "secret": "",
    // 是否启用http心跳
    "enableHeart": false,
    // 是否启用http上报服务
    "enablePost": false,
    // http上报地址, 如["http://127.0.0.1:8080/onebot/v11/http"]
    "postUrls": []
  },
  "ws": {
    // 是否启用正向websocket服务
    "enable": false,
    // 正向websocket服务监听的 ip 地址，为空则监听所有地址
    "host": "",
    // 正向websocket服务端口
    "port": 3001
  },
  "reverseWs": {
    // 是否启用反向websocket服务
    "enable": false,
    // 反向websocket对接的地址, 如["ws://127.0.0.1:8080/onebot/v11/ws"]
    "urls": []
  },
  "GroupLocalTime": {
    "Record": false,//是否开启本地群聊时间记录
    "RecordList": []//开启全部群 ["-1"]  单个群配置 ["11111"] 多个群 ["1","2","3"]
  },
  // 是否开启调试模式，开启后上报消息会携带一个raw字段，为原始消息内容
  "debug": false,
  // ws心跳间隔，单位毫秒
  "heartInterval": 30000,
  // 消息上报格式，array为消息组，string为cq码字符串
  "messagePostFormat": "array",
  // 是否将本地文件转换为URL，如果获取不到url则使用base64字段返回文件内容
  "enableLocalFile2Url": true,
  // 音乐签名URL，用于处理音乐相关请求
  "musicSignUrl": "",
  // 是否上报自己发送的消息
  "reportSelfMessage": false,
  // access_token，可以为空
  "token": ""
}

```

:::warning

请勿将注释内容写入配置文件，否则会导致配置文件解析失败。

:::

::: details 配置 NapCat 其它设置（如果不懂干嘛，不用看啦）

启动登录 NapCat 后，打开NapCat的 `config` 目录，找到名为 `napcat_<你的QQ号>.json` 的文件，如 `napcat_1234567.json`。

配置内容参数解释：

```json5
{
  // 是否开启文件日志
  "fileLog": true,
  // 是否开启控制台日志
  "consoleLog": true,
  // 日志等级, 可选值: debug, info, error
  "fileLogLevel": "debug",
  "consoleLogLevel": "info"
}
```

:::warning

请勿将注释内容写入配置文件，否则会导致配置文件解析失败。

:::
