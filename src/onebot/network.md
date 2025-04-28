# OneBot 网络基础

本章节介绍 NapCatQQ 与 OneBot 11 进行 HTTP 和 WebSocket 通信的基本方式。请根据 NapCatQQ 的实际部署角色选择合适的通信模式。

## 1. HTTP 通信

OneBot 11 的 HTTP 通信分为两种角色：

- **HTTP 客户端**：NapCatQQ 作为客户端，向 OneBot 11 的 HTTP API 主动发送请求（如发送消息）。
- **HTTP 服务器**：NapCatQQ 作为服务器，接收 OneBot 11 推送的事件（event push）。

### 1.1 NapCatQQ 作为 HTTP 客户端发送请求

NapCatQQ 可以通过 HTTP POST 请求向 OneBot 11 的 API 地址发送指令。

**示例：发送私聊消息**

````http
POST http://<host>:<port>/send_private_msg
Content-Type: application/json

{
  "user_id": 123456789,
  "message": "你好，NapCatQQ！"
}
````

**返回示例：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "message_id": 1234
  }
}
```

**代码演示：Python HTTP 客户端发送 API 请求**

```python
import requests

url = "http://<host>:<port>/send_private_msg"
payload = {
    "user_id": 123456789,
    "message": "你好，NapCatQQ！"
}
resp = requests.post(url, json=payload)
print(resp.json())
```
> 🐱‍💻 小贴士：别忘了替换 `<host>:<port>` 为实际的 OneBot 11 地址哦！如果遇到连接失败，记得检查防火墙和 API 是否开启。

---

### 1.2 NapCatQQ 作为 HTTP 服务器接收事件

要接收事件，需要配置 OneBot 11 的 HTTP 上报（event push），即让 OneBot 11 向 NapCatQQ 指定的 HTTP 服务器推送事件数据。NapCatQQ 需要实现一个 HTTP 服务器，监听 POST 请求，解析收到的 JSON 数据。

**事件推送示例：**

```json
{
  "post_type": "message",
  "message_type": "private",
  "user_id": 123456789,
  "message": "你好"
}
```

**代码演示：Python HTTP 服务器接收事件**

```python
from flask import Flask, request

app = Flask(__name__)

@app.route("/", methods=["POST"])
def receive_event():
    event = request.json
    print("收到事件：", event)
    return "OK"

if __name__ == "__main__":
    app.run(port=8080)
```
> 🐱‍👓 小提醒：Flask 默认监听 127.0.0.1，如需外部访问请加 `host="0.0.0.0"`。别忘了安装 Flask：`pip install flask`！

---

## 2. WebSocket 通信

WebSocket 通信同样分为两种角色：

- **WebSocket 客户端**：NapCatQQ 作为客户端，主动连接 OneBot 11 的 WebSocket 服务端，进行双向通信。
- **WebSocket 服务器**：NapCatQQ 作为服务器，OneBot 11 作为客户端主动连接 NapCatQQ 的 WebSocket 服务端，推送事件和处理请求。

### 2.1 NapCatQQ 作为 WebSocket 客户端

NapCatQQ 通过 WebSocket 连接到 OneBot 11 的 ws 或 wss 地址。连接建立后，发送 JSON 格式的事件和处理请求。

**发送群消息示例：**

```json
{
  "action": "send_group_msg",
  "params": {
    "group_id": 123456,
    "message": "大家好！"
  },
  "echo": "自定义标识"
}
```

**响应示例：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "message_id": 5678
  },
  "echo": "自定义标识"
}
```

**事件推送示例：**

```json
{
  "post_type": "message",
  "message_type": "group",
  "group_id": 123456,
  "user_id": 654321,
  "message": "你好"
}
```

**代码演示：Python WebSocket 客户端接收事件**

```python
import asyncio
import websockets
import json

async def main():
    uri = "ws://<host>:<port>/"
    async with websockets.connect(uri) as ws:
        # 发送请求
        req = {
            "action": "send_group_msg",
            "params": {"group_id": 123456, "message": "大家好！"},
            "echo": "test"
        }
        await ws.send(json.dumps(req))
        # 接收响应或事件
        while True:
            msg = await ws.recv()
            print("收到消息：", msg)

asyncio.run(main())
```
> 🐱‍🚀 温馨提示：记得安装 websockets 库：`pip install websockets`。WebSocket 地址要写对，wss 代表加密连接哦！

---

### 2.2 NapCatQQ 作为 WebSocket 服务器接收事件和请求

NapCatQQ 也可以实现 WebSocket 服务器，让 OneBot 11 作为客户端主动连接 NapCatQQ 的服务器。连接建立后，OneBot 11 会通过该连接推送事件和接收 NapCatQQ 的请求。NapCatQQ 需要处理来自 OneBot 11 的消息，并根据需要发送请求。

**代码演示：Python WebSocket 服务器接收事件和请求**

```python
import asyncio
import websockets

async def handler(websocket, path):
    async for message in websocket:
        print("收到消息：", message)
        # 可根据需要回复消息
        # await websocket.send(...)

start_server = websockets.serve(handler, "0.0.0.0", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
```
> 🐱‍🏍 小技巧：服务器监听 `0.0.0.0` 可让外部设备访问。别忘了端口不要被占用，否则会启动失败！

---

## 总结

- HTTP 支持 NapCatQQ 作为客户端（主动请求）和服务器（被动接收事件）两种模式。
- WebSocket 支持 NapCatQQ 作为客户端（主动连接 OneBot 11）和服务器（被动接收 OneBot 11 连接）两种模式，推荐优先使用 WebSocket，实时性更好。

> 🐾 最后提醒：接口字段、端口、地址等都要和实际环境对应，小粗心是不行的！
