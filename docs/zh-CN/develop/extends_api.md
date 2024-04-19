
### 扩展api

::: details 发送文件名自定义
发送文件时支持参数 `name` 用于自定义显示的文件名
```json
{
    "type": "file",
    "data": {
        "file": "file:///D:/1.txt",
        "name": "自定义显示的文件名.txt"
    }
}
```
:::

::: details 发送图片支持自定义图片预览文字
`/send_group_msg`

```json5
{
  "group_id": 123456,
  "message": [
    {
      "type": "image",
      "data": {
        "file": "file://D:/1.jpg",
        "summary": "喵喵喵"  // LLOneBot的扩展字段：图片预览文字
      }
    }
  ]
}
```
:::

::: details 设置头像api

**暂不支持**

`/set_qq_avatar`
```json5
{
  "file": "file://D:/1.jpg"  // 支持http://, base64://
}
```
:::

::: details 获取已过滤的加群通知

**暂不支持**

`/get_group_ignore_add_request`

return

```json5
{
  "status": "ok",
  "retcode": 0,
  "data": [
    {
      "group_id": 123122,
      "user_id": 123123,
      "flag": "1710117534729787"
    }
  ],
  "message": "",
  "wording": "",
}
```
:::

::: details message_sent 事件的 target_id
相比于 go-cq 多了个 `target_id` 字段表示发送的目标QQ号或者群号
:::

::: details 下载收到的群文件或私聊文件

`/get_file`

```json5
{
  "file_id": "/xxxxx-xxxxx"
}
```

return

```json5
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "file": "d:/xxxx",  // 文件的绝对路径
    "file_name": "文件名",
    "file_size": 123123,
    "base64": "/9j/4AAQSkZJRgABAQEASxxxx", // 文件的 base64 编码, 需要在 LLOneBot 的配置文件中开启 base64
  },
  "message": "",
  "wording": "",
}
```
:::

::: details /download_file
与 gocq 用法一样，但是支持 base64 参数用于直接下载 base64 编码的文件

::: tip 此 api 不适用于下载群文件或者私聊文件
:::
