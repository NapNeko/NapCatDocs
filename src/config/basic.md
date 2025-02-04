# 基础配置

<!-- NapCat 的目录保存了配置文件、日志和缓存等信息。 -->

:::warning
低于 4.4.7 请勿将注释内容写入配置文件，否则会导致配置文件解析失败，新版本不受限制。
:::

## 配置网络类型 <Badge type="danger" text="必备知识" />

| 类型               | 描述                                                                 |
|--------------------|----------------------------------------------------------------------|
| HTTP服务端         | NapCat作为Http请求接受方 接收对应接口调用并回应 的单工模型          |
| HTTP客户端         | NapCat作为Http请求发起方 将事件推送至插件/应用框架 的单工模型       |
| WebSocket服务端    | 通常指正向WS 既能主动推送事件也能接收请求 的双工模型                |
| WebSocket客户端    | 通常指反向WS 既能主动推送事件也能接收请求 的双工模型                |

## 通过 WebUI 配置OneBot服务  <Badge type="tip" text="Shell Vesion" />

如果你已经启动了 NapCat，并且有多于 1 个开放端口，则可以通过 WebUI 进行配置。

默认地址为 `0.0.0.0`，即监听所有地址。当配置了不可用的地址时 WebUI 将被禁用。

默认端口为 `6099`。

当端口被设置为 `0` 时将禁用 WebUI。

当端口被占用时，会自动对端口 +1，直到找到可用端口（最多尝试100次，失败则会禁用 WebUI），端口号会在启动日志中显示。

启动后可在启动日志中看到形如 `[WebUi] WebUi Local Panel Url: http://127.0.0.1:6099/webui?token=xxxx` 的token信息。

也可打开 `webui.json` 文件，在其中找到token。
::: code-group
```json5 [webui.json]
{
    "host": "0.0.0.0", // WebUI 监听地址
    "port": 6099, // WebUI 端口
    "token": "xxxx", //登录密钥，默认是自动生成的随机登录密码
    "loginRate": 3, //每分钟登录次数限制
}
```
:::
访问 `http://ip:port/webui/`，然后进行以下操作：

1. 进入 QQ 登录，点击 `QRCode` 进行二维码登录。

2. 登录成功后，即可进入网络配置。

3. 配置完成后，点击保存，重启即可生效。

> 注：WebUI 自 v4.4 版本后不支持 `prefix` 配置。

## 通过 WebUI 配置OneBot服务  <Badge type="tip" text="Framework Vesion" />
1. 登录后打开QQ设置进入NapCat选择夹
2. 点击进入WebUi进行查看
3. 启动与配置需要的网络服务以完成对接

## 通过 文件 配置OneBot服务 <Badge type="tip" text="Any Vesion" />

**非常不推荐 除非你非常熟悉**

<mark>v4.5.3 后支持载入 ./config/onebot11.json 作为默认配置</mark>

该配置文件名为 ``` ./config/onebot11_xxxx.json ``` 其中xxxx为对应QQ账户

::: code-group

```json5 [HTTP服务端]
{
  "network": {
    // Http服务器组 可以配置多个 这里演示为一个
    "httpServers": [
      {
        "name": "httpServer",// 名字不能重复 唯一标识
        "enable": false,//启用状态
        "port": 3000,// 监听端口
        "host": "0.0.0.0",// 监听主机
        "enableCors": true,// 暂时没有作用
        "enableWebsocket": true,// 暂时没有作用
        "messagePostFormat": "array",// 消息上报格式 string/array
        "token": "",// 鉴权密钥
        "debug": false,// raw数据上报
      }
    ],
    "httpClients": [],
    "websocketServers": [],
    "websocketClients": []
  },
  "musicSignUrl": "",
  "enableLocalFile2Url": false,
  "parseMultMsg": false
}
```

```json5 [HTTP客户端]
{
  "network": {
    "httpServers": [],
    // Http客户端组 可以配置多个 这里演示为一个
    "httpClients": [
       {
        "name": "httpClient",// 名字不能重复 唯一标识
        "enable": false,//启用状态
        "url": "http://localhost:8080",// 上报地址
        "messagePostFormat": "array",// 消息上报格式 string/array
        "reportSelfMessage": false,// 是否上报自身消息
        "token": "",// 鉴权密钥
        "debug": false,// raw数据上报
      }
    ],
    "websocketServers": [],
    "websocketClients": []
  },
  "musicSignUrl": "",
  "enableLocalFile2Url": false,
  "parseMultMsg": false
}
```

```json5 [WS服务端]
{
  "network": {
    "httpServers": [],
    "httpClients": [],
    // WS服务端组/正向WS  可以配置多个 这里演示为一个
    "websocketServers": [
      {
        "name": "WsServer",// 名字不能重复 唯一标识
        "enable": false,//启用状态
        "host": "0.0.0.0",// 监听主机
        "port": 3001,// 监听端口
        "messagePostFormat": "array",// 消息上报格式 string/array
        "reportSelfMessage": false,// 是否上报自身消息
        "token": "",// 鉴权密钥
        "enableForcePushEvent": true,// 暂时没有作用
        "debug": false,// raw数据上报
        "heartInterval": 30000,// 心跳周期
      }
    ],
    "websocketClients": []
  },
  "musicSignUrl": "",
  "enableLocalFile2Url": false,
  "parseMultMsg": false
}
```
```json5 [WS客户端]
{
  "network": {
    "httpServers": [],
    "httpClients": [],
    "websocketServers": [],
    // WS客户端组/反向WS 可以配置多个 这里演示为一个
    "websocketClients": [
      {
        "name": "WsClient",// 名字不能重复 唯一标识
        "enable": false,//启用状态
        "url": "ws://localhost:8082",// 上报地址
        "messagePostFormat": "array",// 消息上报格式 string/array
        "reportSelfMessage": false,// 是否上报自身消息
        "reconnectInterval": 5000,// 重连间隔
        "token": "",// 鉴权密钥
        "debug": false,// raw数据上报
        "heartInterval": 30000,// 心跳周期
      }
    ]
  },
  "musicSignUrl": "",
  "enableLocalFile2Url": false,
  "parseMultMsg": false
}
```
:::
## 配置 NapCat 其它设置

**如果不懂干嘛，不用看啦** 在这里你可以修改日志等基础设置

<mark>v4.5.3 后支持载入 ./config/napcat.json作为默认配置</mark>

启动登录 NapCat 后，打开 NapCat 的 `config` 目录，找到名为 `napcat_<你的QQ号>.json` 的文件，如 `napcat_1234567.json`。

配置内容参数解释：

::: code-group
```json5 [napcat_xxxx.json]
{
  // 是否开启文件日志
  "fileLog": true,
  // 是否开启控制台日志
  "consoleLog": true,
  // 日志等级, 可选值: debug, info, error
  "fileLogLevel": "debug",
  "consoleLogLevel": "info",
  "packetServer":""
}
```

:::
