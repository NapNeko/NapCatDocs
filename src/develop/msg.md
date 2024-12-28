# 消息格式兼容情况 <Badge type="tip" text="V4" />

## 消息列表

支持使用 `CQ码` 发送

标有 `<JSON>` 的表示 收到的时候的消息类型是 `json`
<!-- | `anonymous`        | 匿名发消息   |   ❌   |   ❌   |                       无法支持                       | -->
<!-- | `redbag`           | 红包         |   ❌   |   ❌   |                       不会支持                       |
| `gift`             | 礼物         |   ❌   |   ❌   |                       不会支持                       |
| `cardimage`        | 卡片图片     |   ❌   |   ❌   |                                                      |
| `tts`              | 文本转语音   |   ❌   |   ❌   |                                                      | -->
<!-- | `xml`              | `xml` 信息   |   ❌   |   ❌   |                                                      | -->

| 消息格式           | 介绍         |  收   |  发   |                         备注                         |
| ------------------ | ------------ | :---: | :---: | :--------------------------------------------------: |
| `text`             | 纯文本       |   ✅   |   ✅   |                                                      |
| `face`             | `qq` 表情    |   ✅   |   ✅   |                                                      |
| `image`            | 图片         |   ✅   |   ✅   |                                                      |
| `record`           | 语音         |   ✅   |   ✅   |                                                      |
| `video`            | 视频         |   ✅   |   ✅   |                                                      |
| `at`               | @某人        |   ✅   |   ✅   |                                                      |
| `rps`              | 猜拳魔法表情 |   ✅   |   ✅   |                                                      |
| `dice`             | 骰子         |   ✅   |   ✅   |                                                      |
| `shake`            | 私聊窗口抖动 |   ❌   |   ❌   |                                                      |
| `poke`             | 群聊戳一戳   |   ✅   |   ✅   |        事件上报与接口调用 不通过消息                    |
| `share` \<JSON>    | 链接分享     |   ✅   |   ❌   |                                                      |
| `contact` \<JSON>  | 推荐好友/群  |   ✅   |   ✅   |                                                      |
| `location` \<JSON> | 位置         |   ✅   |   ❌   |                                                      |
| `music` \<JSON>    | 音乐分享     |   ✅   |   ✅   |                                                      |
| `reply`            | 回复消息     |   ✅   |   ✅   |                                                      |
| `forward`          | 转发消息     |   ✅   |   ✅   |                                                      |
| `node`             | 转发消息节点 |   ✅   |   ✅   |                                                      |
| `json`             | `json` 信息  |   ✅   |   ✅   |                                                      |
| `mface`            | `qq` 表情包  |   ✅   |   ✅   |  以image消息段上报(子类型区分) 支持mface/image消息段发送 |
| `file`             | 文件         |   ✅   |   ✅   |                                                      |
| `markdown`         | `markdown`   |   ❌   |   ✅   |         发是在双层合并转发内 无法直接发送              |
| `lightapp`\<JSON>  | `小程序卡片`  |   ✅   |   ✅   |         发是调用扩展接口`get_mini_app_ark`             |

## 提示

标有 **[收]** 仅限收到

标有 **[发]** 仅限发送

标有 **[选]** 发送可选

## text

``` json
{
  "type": "text",
  "data": {
    "text": "文本"
  }
}
```

## face

``` json
{
  "type": "face",
  "data": {
    "id": "123"
  }
}
```

## image

### 普通图片

``` json
{
  "type": "image",
  "data": {
    "name": "", // [发] [选]
    "summary": "", // [选]
    "file": "",
    "sub_type": "", // [选]
    "file_id": "", // [收]
    "url": "", // [收]
    "path": "", // [收]
    "file_size": "", // [收]
    "file_unique": "", // [收]
  }
}
```

### 商城表情

``` json
{
  "type": "image",
  "data": {
    "name": "", // [发] [选]
    "summary": "", // [选]
    "file": "marketface",
    "file_id": "", // [收]
    "url": "", // [收]
    "path": "", // [收]
    "file_unique": "", // [收]
  }
}
```

## record

``` json
{
  "type": "record",
  "data": {
    "file": "",
    "name": "", // [发] [选]
    "url": "", // [收]
    "path": "", // [收]
    "file_id": "", // [收]
    "file_size": "", // [收]
    "file_unique": "", // [收]
  }
}
```

## video

``` json
{
  "type": "video",
  "data": {
    "file": "",
    "name": "", // [发] [选]
    "thumb": "", // [发] [选]
    "url": "", // [收]
    "path": "", // [收]
    "file_id": "", // [收]
    "file_size": "", // [收]
    "file_unique": "", // [收]
  }
}
```

## at

``` json
{
  "type": "at",
  "data": {
    "qq": "10001",
    "qq": "all" // @全体
  }
}
```

## rps

``` json
{
  "type": "rps",
  "data": {
    "result": "" // [收]
  }
}
```

## dice

``` json
{
  "type": "dice",
  "data": {
    "result": "" // [收]
  }
}
```

## contact

``` json
{
  "type": "contact",
  "data": {
    "type": "qq", // [发] 推荐好友
    "type": "group", // [发] 推荐群聊
    "id": "10001" // [发] QQ号或群号
  }
}
```

## music

### 现有音源

``` json
{
  "type": "music",
  "data": {
    "type": "qq", // [发]
    "type": "163", // [发]
    "type": "kugou", // [发]
    "type": "migu", // [发]
    "type": "kuwo", // [发]
    "id": "" // [发]
  }
}
```

### 自定义音源

``` json
{
  "type": "music",
  "data": {
    "type": "custom", // [发]
    "url": "", // [发] 点击后跳转目标 URL
    "audio": "", // [发] 音乐 URL
    "title": "", // [发]
    "image": "kuwo", // [发] [选]
    "singer": "kuwo", // [发] [选]
  }
}
```

## reply

``` json
{
  "type": "reply",
  "data": {
    "id": ""
  }
}
```

## forward

``` json
{
  "type": "forward",
  "data": {
    "id": "",
    "content": [] // [收]
  }
}
```

## node

::: tip
`id` 和 `content` 二选一
:::

### 现有信息

``` json
{
  "type": "node",
  "data": {
    "id": "", // [发]
    "content": [] // [发]
  }
}
```

### 伪造信息

``` json
{
  "type": "node",
  "data": {
    "user_id": "10001", // [发]
    "nickname": "雪雪看不见我", // [发]
    "id": "", // [发]
    "content": [] // [发]
  }
}
```

## json

``` json
{
  "type": "json",
  "data": {
    "data": ""
  }
}
```

## mface

``` json
{
  "type": "mface",
  "data": {
    "emoji_id": "", // [发]
    "emoji_package_id": "", // [发]
    "key": "", // [发]
    "summary": "" // [选]
  }
}
```

## file

``` json
{
  "type": "file",
  "data": {
    "name": "", // [发] [选]
    "file": "empty",
    "path": "empty", // [收]
    "url": "empty", // [收]
    "file_id": "empty", // [收]
    "file_size": "empty", // [收]
    "file_unique": "empty" // [收]
  }
}
```
