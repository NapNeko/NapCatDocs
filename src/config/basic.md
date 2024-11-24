# 基础配置

NapCat 的目录保存了配置文件、日志和缓存等信息。

:::warning
请勿将注释内容写入配置文件，否则会导致配置文件解析失败。
:::

## 用 WebUI 配置

如果你已经启动了 NapCat，并且有多于 1 个开放端口，则可以通过 WebUI 进行配置。

默认地址为 `0.0.0.0`，即监听所有地址。当配置了不可用的地址时 WebUI 将被禁用。

默认端口为 `6099`。

当端口被设置为 `0` 时将禁用 WebUI。

当端口被占用时，会自动对端口 +1，直到找到可用端口（最多尝试100次，失败则会禁用 WebUI），端口号会在启动日志中显示。

启动后可在启动日志中看到形如 `[WebUi] Login Token is xxxx` 的token信息。

也可打开 `webui.json` 文件，在其中找到token。

```json5
{
    "host": "0.0.0.0", // WebUI 监听地址
    "port": 6099, // WebUI 端口
    "prefix": "", // WebUI 工作前缀，此项功能将在进阶配置中解释
    "token": "xxxx", //登录密钥，默认是自动生成的随机登录密码
    "loginRate": 3, //每分钟登录次数限制
}
```

访问 `http://ip:port/webui/`，然后进行以下操作：

1. 进入 QQ 登录，点击 `QRCode` 进行二维码登录。

2. 登录成功后，即可进入网络配置。

3. 配置完成后，点击保存，重启即可生效。

### 进入 网络配置 添加配置
此时需要理解

```
HTTP服务端      --->> NapCat作为Http请求接受方 接收对应接口调用并回应 的单工模型
HTTP客户端      --->> NapCat作为Http请求发起方 将事件推送至插件/应用框架 的单工模型
WebSocket服务端 --->> 通常指正向WS 既能主动推送事件也能接收请求 的双工模型
WebSocket客户端 --->> 通常指反向WS 既能主动推送事件也能接收请求 的双工模型
```

## 配置 NapCat 其它设置（如果不懂干嘛，不用看啦）

启动登录 NapCat 后，打开 NapCat 的 `config` 目录，找到名为 `napcat_<你的QQ号>.json` 的文件，如 `napcat_1234567.json`。

PacketServer 配置详见 [高级配置](./advanced.md#配置-pakcetserver)

配置内容参数解释：

```json5
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
