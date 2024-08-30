# 扩展 API

[完整参考文档](./NapCat.md)

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

发送图片时支持参数 `summary` 用于自定义显示的文件名

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

::: details `/set_qq_avatar` 设置头像

```json5
{
  "file": "file://D:/1.jpg"  // 支持 http, base64
}
```

:::

::: details `/get_group_system_msg` 获取群系统通知（包括邀请加群、已过滤的加群请求）

```json5
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "InvitedRequest": [ // 入群邀请
      {
        request_id: "some ID",
        invitor_uin: 123456,
        invitor_nick: "some nickname",
        group_id: 12345678,
        group_name: "some group name",
        checked: true, // boolean
        actor: 0, // if checked (handled) -> the QQ number of handler; not checked -> 0
      }, //...
    ],
    "join_requests": [ // 被过滤的加群申请
      {
        request_id: "some ID",
        requester_uin: 123456,
        requester_nick: "some nickname",
        group_id: 12345678,
        group_name: "some group name",
        checked: true, // boolean
        actor: 0, // if checked (handled) -> the QQ number of handler; not checked -> 0
      }
    ]
  },
  "message": "",
  "wording": "",
}
```

两者加起来最多返回 10 条.

:::

::: details `message_sent` 事件的 `target_id`
相比于 go-cqhttp 增加字段 `target_id`, 表示发送的目标 QQ 号或者群号
:::

::: details `/get_file` 下载收到的群文件或私聊文件

```json5
{
  "file_id": "/xxxxx-xxxxx"
}
```

return:

```json5
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "file": "D:/path/to/file",  // 文件的绝对路径
    "file_name": "文件名",
    "file_size": 123123,
    "base64": "/9j/4AAQSkZJRgABAQEASxxxx", // 文件的 base64 编码, 需要在 LLOneBot 的配置文件中开启 base64
  },
  "message": "",
  "wording": "",
}
```

:::

::: details `/download_file` 下载文件

与 gocq 用法一样，但是支持 base64 参数用于直接下载 base64 编码的文件

::: tip 此 api 不适用于下载群文件或者私聊文件
:::

::: details `/forward_friend_single_msg` 转发单条消息到好友

```json5
{
  "user_id": 123456,
  "message_id": 123456
}
```

:::

::: details `/forward_group_single_msg` 转发单条消息到群

```json5
{
  "group_id": 123456,
  "message_id": 123456
}
```

:::

::: details `/set_msg_emoji_like` 发送表情回应

```json5
{
    "message_id": "-2147480026",
    "emoji_id": "32"
}
```

emoji_id 参考 <https://bot.q.qq.com/wiki/develop/api-v2/openapi/emoji/model.html#EmojiType>

:::

::: details `/mark_private_msg_as_read` 设置私聊消息已读

```json5
{
  "user_id": 123456
}

```

:::

::: details `/mark_group_msg_as_read` 设置群聊消息已读

```json5
{
  "group_id": 123456
}
```

:::

::: details `/get_robot_uin_range` 获取官方bot QQ号范围

无需参数

:::

::: details `/set_online_status` 设置自身在线状态

[当前可设置状态](./status_list.md)

:::

::: details `/get_friends_with_category` 获取好友分类列表

无需参数

:::

::: details 群文件相关接口

``` text
/get_group_file_count {group_id} 获取群文件数量
/get_group_file_list {group_id, start_index, file_count, folder_id(可选)} 获取群文件列表
/set_group_file_folder {group_id, folder_name} 创建群文件夹
/del_group_file {group_id, file_id} 删除群文件
/del_group_file_folder {group_id, folder_id} 删除群文件夹
```

:::

::: details `/translate_en2zh` 英译中接口

```json
{
  "words": "hello"
}
```

:::
