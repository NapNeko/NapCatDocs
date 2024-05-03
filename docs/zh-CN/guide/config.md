## 基础配置介绍

**重启登录后配置才能生效哦**

::: details 配置 OneBot11 设置
打开 NapCat 的`config`目录，找到名为 `onebot11_<你的QQ号>.json`的文件，如`onebot11_1234567.json`

如果没有此文件可以复制`onebot11.json`重命名为`onebot11_<你的QQ号>.json`

下面是配置内容参数解释：

**注意：请勿将注释内容写入配置文件，否则会导致配置文件解析失败**

```json5
{
  // HTTP服务监听的 ip 地址，为空则监听所有地址
  "httpHost": "",
  // 是否启用http服务, true为启动，false为禁用，如果启用，可以通过http接口发送消息
  "enableHttp": false,
  // http服务端口
  "httpPort": 3000,
  // 正向 ws 服务监听的 ip 地址，为空则监听所有地址
  "wsHost": "",
  // 是否启用正向websocket服务
  "enableWs": false,
  // 正向websocket服务端口
  "wsPort": 3001,
  // 是否启用反向websocket服务
  "enableWsReverse": false,
  // 反向websocket对接的地址, 如["ws://127.0.0.1:8080/onebot/v11/ws"]
  "wsReverseUrls": [],
  // 是否启用http上报服务
  "enableHttpPost": false,
  // http上报地址, 如["http://127.0.0.1:8080/onebot/v11/http"]
  "httpPostUrls": [],
  // 是否启用http心跳
  "enableHttpHeart": false,
  // http上报密钥，可为空
  "httpSecret": "",
  // 消息上报格式，array为消息组，string为cq码字符串
  "messagePostFormat": "array",
  // 是否上报自己发送的消息
  "reportSelfMessage": false,
  // 是否开启调试模式，开启后上报消息会携带一个raw字段，为原始消息内容
  "debug": false,
  // 调用get_file接口时如果获取不到url则使用base64字段返回文件内容
  "enableLocalFile2Url": true,
  // ws心跳间隔，单位毫秒
  "heartInterval": 30000,
  // access_token，可以为空
  "token": ""
}

```
```
:::

::: details 配置NapCat其它设置（如果不懂干嘛，不用看啦）

启动登录NapCat后 打开NapCat的`config`目录，找到名为 `napcat_<你的QQ号>.json`的文件，如`napcat_1234567.json`

配置内容参数解释：

**注意：请勿将注释内容写入配置文件，否则会导致配置文件解析失败**

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
:::