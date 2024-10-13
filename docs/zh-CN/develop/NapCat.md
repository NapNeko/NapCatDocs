---
title: NapCat
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.23"

---

# NapCat

Base URLs:

# Authentication

# 消息类接口

## POST 发送群聊消息

POST /send_group_msg

> Body 请求参数

```json
{
  "group_id": 2,
  "message": [
    {
      "data": {
        "text": "occaecat sunt nisi aute"
      },
      "type": "text"
    }
  ]
}
```

### 请求参数

| 名称       | 位置 | 类型     | 必选 | 说明 |
| ---------- | ---- | -------- | ---- | ---- |
| body       | body | object   | 否   | none |
| » group_id | body | integer  | 是   | none |
| » message  | body | [object] | 是   | none |
| »» data    | body | object   | 是   | none |
| »»» text   | body | string   | 是   | none |
| »» type    | body | string   | 是   | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 发送私聊消息

POST /send_private_msg

> Body 请求参数

```json
{
  "user_id": 74,
  "message": [
    {
      "data": {
        "text": "occaecat cupidatat"
      },
      "type": "cupidatat ipsum"
    },
    {
      "data": {
        "text": "sint in"
      },
      "type": "quis ullamco ex consectetur"
    }
  ]
}
```

### 请求参数

| 名称      | 位置 | 类型     | 必选 | 说明 |
| --------- | ---- | -------- | ---- | ---- |
| body      | body | object   | 否   | none |
| » user_id | body | integer  | 是   | none |
| » message | body | [object] | 是   | none |
| »» data   | body | object   | 是   | none |
| »»» text  | body | string   | 是   | none |
| »» type   | body | string   | 是   | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 群历史消息

POST /get_group_msg_history

> Body 请求参数

```json
{
  "group_id": 46,
  "count": 10
}
```

### 请求参数

| 名称       | 位置 | 类型    | 必选 | 说明 |
| ---------- | ---- | ------- | ---- | ---- |
| body       | body | object  | 否   | none |
| » group_id | body | integer | 是   | none |
| » count    | body | integer | 是   | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

# 扩展接口

## POST 获取Bot号段范围

POST /get_robot_uin_range

> Body 请求参数

```json
{}
```

### 请求参数

| 名称 | 位置 | 类型   | 必选 | 说明 |
| ---- | ---- | ------ | ---- | ---- |
| body | body | object | 否   | none |

> 返回示例

> 成功

```json
{
  "status": "ok",
  "retcode": 0,
  "data": [
    {
      "minUin": "3328144510",
      "maxUin": "3328144510"
    },
    {
      "minUin": "2854196301",
      "maxUin": "2854216399"
    },
    {
      "minUin": "66600000",
      "maxUin": "66600000"
    },
    {
      "minUin": "3889000000",
      "maxUin": "3889999999"
    },
    {
      "minUin": "4010000000",
      "maxUin": "4019999999"
    }
  ],
  "message": "",
  "wording": "",
  "echo": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型     | 必选 | 约束 | 中文名 | 说明 |
| --------- | -------- | ---- | ---- | ------ | ---- |
| » status  | string   | true | none |        | none |
| » retcode | integer  | true | none |        | none |
| » data    | [object] | true | none |        | none |
| »» minUin | string   | true | none |        | none |
| »» maxUin | string   | true | none |        | none |
| » message | string   | true | none |        | none |
| » wording | string   | true | none |        | none |
| » echo    | null     | true | none |        | none |

## POST 好友列表与分类获取

POST /get_friends_with_category

> Body 请求参数

```json
{
  "no_cache": true
}
```

### 请求参数

| 名称       | 位置 | 类型    | 必选 | 说明 |
| ---------- | ---- | ------- | ---- | ---- |
| body       | body | object  | 否   | none |
| » no_cache | body | boolean | 是   | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 拉取表情回应列表

POST /fetch_emoji_like

> Body 请求参数

```json
{
  "message_id": 1972285709,
  "emojiType": "1",
  "emojiId": "76"
}
```

### 请求参数

| 名称         | 位置 | 类型    | 必选 | 说明 |
| ------------ | ---- | ------- | ---- | ---- |
| body         | body | object  | 否   | none |
| » message_id | body | integer | 是   | none |
| » emojiType  | body | integer | 是   | none |
| » emojiId    | body | integer | 是   | none |

> 返回示例

> 成功

```json
{
  "status": "failed",
  "retcode": 200,
  "data": null,
  "message": "Error: 消息不存在",
  "wording": "Error: 消息不存在",
  "echo": null
}
```

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "result": 0,
    "errMsg": "",
    "emojiLikesList": [
      {
        "tinyId": "1627126029",
        "nickName": "",
        "headUrl": ""
      }
    ],
    "cookie": "",
    "isLastPage": true,
    "isFirstPage": true
  },
  "message": "",
  "wording": "",
  "echo": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称              | 类型     | 必选  | 约束 | 中文名 | 说明 |
| ----------------- | -------- | ----- | ---- | ------ | ---- |
| » status          | string   | true  | none |        | none |
| » retcode         | integer  | true  | none |        | none |
| » data            | object   | true  | none |        | none |
| »» result         | integer  | true  | none |        | none |
| »» errMsg         | string   | true  | none |        | none |
| »» emojiLikesList | [object] | true  | none |        | none |
| »»» tinyId        | string   | false | none |        | none |
| »»» nickName      | string   | false | none |        | none |
| »»» headUrl       | string   | false | none |        | none |
| »» cookie         | string   | true  | none |        | none |
| »» isLastPage     | boolean  | true  | none |        | none |
| »» isFirstPage    | boolean  | true  | none |        | none |
| » message         | string   | true  | none |        | none |
| » wording         | string   | true  | none |        | none |
| » echo            | null     | true  | none |        | none |

## POST 获取最近联系人

POST /get_recent_contact

> Body 请求参数

```json
{
  "count": 10
}
```

### 请求参数

| 名称    | 位置 | 类型   | 必选 | 说明 |
| ------- | ---- | ------ | ---- | ---- |
| body    | body | object | 否   | none |
| » count | body | number | 是   | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 获取收藏表情

POST /fetch_custom_face

> Body 请求参数

```json
{
  "count": 10
}
```

### 请求参数

| 名称    | 位置 | 类型   | 必选 | 说明 |
| ------- | ---- | ------ | ---- | ---- |
| body    | body | object | 否   | none |
| » count | body | number | 是   | none |

> 返回示例

> 200 Response

```json
{
  "status": "string",
  "retcode": 0,
  "data": [
    "string"
  ],
  "message": "string",
  "wording": "string",
  "echo": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型     | 必选 | 约束 | 中文名 | 说明 |
| --------- | -------- | ---- | ---- | ------ | ---- |
| » status  | string   | true | none |        | none |
| » retcode | integer  | true | none |        | none |
| » data    | [string] | true | none |        | none |
| » message | string   | true | none |        | none |
| » wording | string   | true | none |        | none |
| » echo    | null     | true | none |        | none |

## POST 创建文本收藏

POST /create_collection

> Body 请求参数

```json
{
  "rawData": "string",
  "brief": "string"
}
```

### 请求参数

| 名称      | 位置 | 类型   | 必选 | 说明 |
| --------- | ---- | ------ | ---- | ---- |
| body      | body | object | 否   | none |
| » rawData | body | string | 是   | none |
| » brief   | body | string | 是   | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 获取收藏列表

POST /get_collection_list

> Body 请求参数

```json
{
  "category": 0,
  "count": 0
}
```

### 请求参数

| 名称       | 位置 | 类型   | 必选 | 说明 |
| ---------- | ---- | ------ | ---- | ---- |
| body       | body | object | 否   | none |
| » category | body | number | 是   | none |
| » count    | body | number | 是   | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 获取自身点赞列表

POST /get_profile_like

> Body 请求参数

```json
{}
```

### 请求参数

| 名称 | 位置 | 类型   | 必选 | 说明 |
| ---- | ---- | ------ | ---- | ---- |
| body | body | object | 否   | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST OCR接口

POST /ocr_image

> Body 请求参数

```json
{
  "image": "http://dummyimage.com/400x400"
}
```

### 请求参数

| 名称    | 位置 | 类型   | 必选 | 中文名 | 说明     |
| ------- | ---- | ------ | ---- | ------ | -------- |
| body    | body | object | 否   |        | none     |
| » image | body | string | 是   | 图片   | 图片路径 |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 设置群头像

POST /set_group_head

> Body 请求参数

```json
{
  "groupCode": "25",
  "file": "https://iAKPgKOrdKPIclYVhL.naxaUQIfQriKumoYCVe4DFRZjmVvefvk2C4EwfPowcp"
}
```

### 请求参数

| 名称        | 位置 | 类型        | 必选 | 中文名 | 说明               |
| ----------- | ---- | ----------- | ---- | ------ | ------------------ |
| body        | body | object      | 否   |        | none               |
| » file      | body | string(uri) | 是   | 头像   | 群头像链接或者路径 |
| » groupCode | body | string      | 是   | 群号   | 需要有管理员权限   |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 设置个性签名

POST /set_self_longnick

> Body 请求参数

```json
{
  "longNick": "朱刚"
}
```

### 请求参数

| 名称       | 位置 | 类型   | 必选 | 中文名   | 说明 |
| ---------- | ---- | ------ | ---- | -------- | ---- |
| body       | body | object | 否   |          | none |
| » longNick | body | string | 是   | 个性签名 | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 设置在线状态

POST /set_online_status

> Body 请求参数

```json
{
  "status": 50,
  "extStatus": 96,
  "batteryStatus": 75
}
```

### 请求参数

| 名称            | 位置 | 类型    | 必选 | 中文名 | 说明 |
| --------------- | ---- | ------- | ---- | ------ | ---- |
| body            | body | object  | 否   |        | none |
| » status        | body | integer | 是   |        | none |
| » extStatus     | body | integer | 是   |        | none |
| » batteryStatus | body | integer | 是   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 设置个人信息

POST /set_self_profile

> Body 请求参数

```json
{
  "nick": "string",
  "longNick": "string",
  "sex": "string"
}
```

### 请求参数

| 名称       | 位置 | 类型   | 必选 | 中文名 | 说明 |
| ---------- | ---- | ------ | ---- | ------ | ---- |
| body       | body | object | 否   |        | none |
| » nick     | body | string | 是   |        | none |
| » longNick | body | string | 是   |        | none |
| » sex      | body | string | 是   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 分享联系人卡片

POST /ArkSharePeer

> Body 请求参数

```json
{
  "user_id": "43",
  "group_id": "26",
  "phoneNumber": "18"
}
```

### 请求参数

| 名称          | 位置 | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ---- | ------ | ---- | ------ | ---- |
| body          | body | object | 否   |        | none |
| » user_id     | body | string | 否   |        | none |
| » group_id    | body | string | 否   |        | none |
| » phoneNumber | body | string | 否   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 分享加群卡片

POST /ArkShareGroupEx

> Body 请求参数

```json
{
  "group_id": "string"
}
```

### 请求参数

| 名称       | 位置 | 类型   | 必选 | 中文名 | 说明 |
| ---------- | ---- | ------ | ---- | ------ | ---- |
| body       | body | object | 否   |        | none |
| » group_id | body | string | 是   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 设置群消息已读

POST /mark_group_msg_as_read

> Body 请求参数

```json
{
  "group_id": "100"
}
```

### 请求参数

| 名称       | 位置 | 类型   | 必选 | 中文名 | 说明 |
| ---------- | ---- | ------ | ---- | ------ | ---- |
| body       | body | object | 否   |        | none |
| » group_id | body | string | 是   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 设置私聊消息已读

POST /mark_private_msg_as_read

> Body 请求参数

```json
{
  "group_id": "18"
}
```

### 请求参数

| 名称       | 位置 | 类型   | 必选 | 中文名 | 说明 |
| ---------- | ---- | ------ | ---- | ------ | ---- |
| body       | body | object | 否   |        | none |
| » group_id | body | string | 是   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 英译中

POST /translate_en2zh

> Body 请求参数

```json
{
  "words": [
    "non sed minim aute",
    "nulla nisi",
    "commodo exercitation",
    "dolore Excepteur veniam elit dolor",
    "pariatur dolore exercitation sunt"
  ]
}
```

### 请求参数

| 名称    | 位置 | 类型     | 必选 | 中文名 | 说明 |
| ------- | ---- | -------- | ---- | ------ | ---- |
| body    | body | object   | 否   |        | none |
| » words | body | [string] | 是   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

# 用户接口

## POST 获取好友列表

POST /get_friend_list

> Body 请求参数

```json
{
  "no_cache": true
}
```

### 请求参数

| 名称 | 位置 | 类型   | 必选 | 中文名 | 说明 |
| ---- | ---- | ------ | ---- | ------ | ---- |
| body | body | object | 否   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 陌生人信息

POST /get_stranger_info

> Body 请求参数

```json
{
  "user_id": 1627126029
}
```

### 请求参数

| 名称 | 位置 | 类型   | 必选 | 中文名 | 说明 |
| ---- | ---- | ------ | ---- | ------ | ---- |
| body | body | object | 否   |        | none |

> 返回示例

> 200 Response

```json
{
  "user_id": "string"
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型   | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------ | ---- | ---- | ------ | ---- |
| » user_id | string | true | none |        | none |

# 群组接口

## POST 获取群成员信息

POST /get_group_member_info

> Body 请求参数

```json
{
  "no_cache": false,
  "group_id": "87",
  "user_id": "10"
}
```

### 请求参数

| 名称       | 位置 | 类型    | 必选 | 中文名 | 说明 |
| ---------- | ---- | ------- | ---- | ------ | ---- |
| body       | body | object  | 否   |        | none |
| » no_cache | body | boolean | 是   |        | none |
| » group_id | body | string  | 是   |        | none |
| » user_id  | body | string  | 是   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 获取群成员列表

POST /get_group_member_list

> Body 请求参数

```json
{
  "no_cache": false,
  "group_id": "84"
}
```

### 请求参数

| 名称       | 位置 | 类型    | 必选 | 中文名 | 说明 |
| ---------- | ---- | ------- | ---- | ------ | ---- |
| body       | body | object  | 否   |        | none |
| » no_cache | body | boolean | 是   |        | none |
| » group_id | body | string  | 是   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构


# 群文件接口  
## POST 获取群文件数量

POST /get_group_file_count
> Body 请求参数

```json
{
  "group_id": "84"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» group_id|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
    "status": "ok",
    "retcode": 0,
    "data": {
        "count": 6
    },
    "message": "",
    "wording": "",
    "echo": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

## POST 获取群文件列表

POST /get_group_file_list
> Body 请求参数

```json
{
  "group_id": "84",
  "start_index": 0,
  "file_count": 100,
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» group_id|body|string| 是 ||none|
|» start_index|body|number| 是 |起始索引|none|
|» file_count|body|number| 是 |文件数量|none|
|» folder_id|body|string| 否 |文件夹编号|none|


> 返回示例

> 200 Response

```json
{
    "status": "ok",
    "retcode": 0,
    "data": {
        "FileList": [
            {
                "peerId": "84",
                "type": 1,
                "folderInfo": null,
                "fileInfo": {
                    "fileModelId": "7408820325581462555",
                    "fileId": "NapCatOneBot-ModeldFile-2-1149228175-7408820325581462555",
                    "fileName": "1145.mp4",
                    "fileSize": "3506681",
                    "busId": 102,
                    "uploadedSize": "1719850005",
                    "uploadTime": 0,
                    "deadTime": 0,
                    "modifyTime": 1719850009,
                    "downloadTimes": 2,
                    "sha":"Y+dv����4�|��h�Õ",
                    "sha3": "",
                    "md5":"f���8�R� ��x��",
                    "uploaderLocalPath": "",
                    "uploaderName": "老王",
                    "uploaderUin": "7745",
                    "parentFolderId": "/",
                    "localPath": "",
                    "transStatus": 0,
                    "transType": 0,
                    "elementId": "0",
                    "isFolder": false
                }
            },
        ]
    },
    "message": "",
    "wording": "",
    "echo": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

## POST 创建群文件夹

POST /set_group_file_folder
> Body 请求参数

```json
{
  "group_id": "84",
  "folder_name": "神奇文件夹"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» group_id|body|string| 是 ||none|
|» folder_name|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
    "status": "ok",
    "retcode": 0,
    "data": {
        "result": {
            "retCode": 0,
            "retMsg": "ok",
            "clientWording": ""
        },
        "groupItem": {
            "peerId": "84",
            "type": 2,
            "folderInfo": {
                "folderId": "/b740a69b-9579-418f-b410-78a798110e21",
                "parentFolderId": "/",
                "folderName": "神奇文件夹",
                "createTime": 1725000773,
                "modifyTime": 1725000773,
                "createUin": "55248",
                "creatorName": "NapCat",
                "totalFileCount": 0,
                "modifyUin": "55248",
                "modifyName": "NapCat",
                "usedSpace": "0"
            },
            "fileInfo": null
        }
    },
    "message": "",
    "wording": "",
    "echo": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

## POST 删除群文件

POST /del_group_file
> Body 请求参数

```json
{
  "group_id": "84",
  "file_id": "NapCatOneBot-ModeldFile-2-729622539-7408822825986028310"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» group_id|body|string| 是 ||none|
|» file_id|body|string| 是 ||none|

> 返回示例

> 200 Response

```json

```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

## POST 删除群文件夹

POST /del_group_file_folder
> Body 请求参数

```json
{
  "group_id": "84",
  "folder_id": "/b740a69b-9579-418f-b410-78a798110e21"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» group_id|body|string| 是 ||none|
|» folder_id|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
    "status": "ok",
    "retcode": 0,
    "data": {
        "retCode": 0,
        "retMsg": "ok",
        "clientWording": ""
    },
    "message": "",
    "wording": "",
    "echo": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

# 弃用与未完成接口

## POST TestPoke

POST /group_poke

> Body 请求参数

```json
{
  "group_id": 809079648,
  "user_id": 1627126029
}
```

### 请求参数

| 名称 | 位置 | 类型   | 必选 | 中文名 | 说明 |
| ---- | ---- | ------ | ---- | ------ | ---- |
| body | body | object | 否   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

# 数据模型

 -->