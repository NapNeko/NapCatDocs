# OneBot 11 事件基础结构与消息结构

---

## 1. 事件基础字段

所有事件都包含以下基础字段：

| 字段名    | 类型    | 说明                     |
| --------- | ------- | ------------------------ |
| time      | number  | 事件发生的时间戳（秒）   |
| post_type | string  | 事件类型                 |
| self_id   | number  | 收到事件的机器人 QQ 号   |

**示例：**
```json
{
  "time": 1718000000,
  "post_type": "message",
  "self_id": 123456789
}
```

---

## 2. 消息事件结构

消息事件是最常见的事件类型，分为私聊消息和群消息。

### 2.1 私聊消息（OB11PrivateMessage）

| 字段名      | 类型                | 说明                       |
| ----------- | -------------------| -------------------------- |
| time        | number             | 事件发生时间戳             |
| post_type   | 'message' \| 'message_sent' | 事件类型         |
| message_type| 'private'          | 消息类型：私聊             |
| sub_type    | 'friend'           | 子类型：好友               |
| message_id  | number             | 消息 ID                    |
| user_id     | number             | 发送者 QQ 号               |
| message     | OB11Segment[]      | 消息段数组                 |
| raw_message | string             | 原始消息内容               |
| font        | number             | 字体                       |
| target_id?  | number             | 临时会话目标 QQ 号（可选） |
| temp_source?| number             | 临时会话来源（可选）       |
| sender      | FriendSender       | 发送者信息                 |
| self_id     | number             | 机器人 QQ 号               |

**私聊消息示例：**
```json
{
  "time": 1718000000,
  "post_type": "message",
  "message_type": "private",
  "sub_type": "friend",
  "message_id": 1001,
  "user_id": 234567890,
  "message": [
    { "type": "text", "data": { "text": "你好" } }
  ],
  "raw_message": "你好",
  "font": 0,
  "sender": {
    "user_id": 234567890,
    "nickname": "小明",
    "sex": "male",
    "age": 18
  },
  "self_id": 123456789
}
```

**临时会话私聊消息示例：**
```json
{
  "time": 1718000002,
  "post_type": "message",
  "message_type": "private",
  "sub_type": "group",
  "message_id": 1002,
  "user_id": 234567891,
  "target_id": 987654321,
  "temp_source": 0,
  "message": [
    { "type": "text", "data": { "text": "临时会话消息" } }
  ],
  "raw_message": "临时会话消息",
  "font": 0,
  "sender": {
    "user_id": 234567891,
    "nickname": "小红",
    "sex": "female"
  },
  "self_id": 123456789
}
```

---

### 2.2 群消息（OB11GroupMessage）

| 字段名      | 类型                | 说明                       |
| ----------- | -------------------| -------------------------- |
| time        | number             | 事件发生时间戳             |
| post_type   | 'message' \| 'message_sent' | 事件类型         |
| message_type| 'group'            | 消息类型：群聊             |
| sub_type    | 'normal' \| 'anonymous' \| 'notice' | 子类型 |
| message_id  | number             | 消息 ID                    |
| user_id     | number             | 发送者 QQ 号               |
| group_id    | number             | 群号                       |
| message     | OB11Segment[]      | 消息段数组                 |
| raw_message | string             | 原始消息内容               |
| font        | number             | 字体                       |
| sender      | GroupSender        | 发送者信息                 |
| self_id     | number             | 机器人 QQ 号               |

**普通群消息示例：**
```json
{
  "time": 1718000001,
  "post_type": "message",
  "message_type": "group",
  "sub_type": "normal",
  "message_id": 2002,
  "user_id": 345678901,
  "group_id": 987654321,
  "message": [
    { "type": "at", "data": { "qq": 123456789 } },
    { "type": "text", "data": { "text": "大家好！" } }
  ],
  "raw_message": "[CQ:at,qq=123456789]大家好！",
  "font": 0,
  "sender": {
    "user_id": 345678901,
    "nickname": "群友A",
    "sex": "female",
    "card": "管理员",
    "role": "admin"
  },
  "self_id": 123456789
}
```
---

## 3. 通知事件结构（Notice Event）

通知事件用于描述平台自动推送的各种状态变更、操作通知，如群成员变动、消息撤回、禁言等。

| 字段名      | 类型      | 说明                       |
| ----------- | --------- | -------------------------- |
| time        | number    | 事件发生时间戳             |
| post_type   | 'notice'  | 事件类型                   |
| self_id     | number    | 收到事件的机器人 QQ 号     |
| notice_type | string    | 通知类型（见下表）         |

常见通知类型及主要字段：

| notice_type           | 说明           | 主要字段补充说明 |
|-----------------------|----------------|-----------------|
| group_upload          | 群文件上传     | group_id, user_id, file（id, name, size, busid） |
| group_admin           | 群管理员变动   | sub_type: 'set'/'unset', group_id, user_id |
| group_decrease        | 群成员减少     | sub_type: 'leave'/'kick'/'kick_me', group_id, operator_id, user_id |
| group_increase        | 群成员增加     | sub_type: 'approve'/'invite', group_id, operator_id, user_id |
| group_ban             | 群禁言         | sub_type: 'ban'/'lift_ban', group_id, operator_id, user_id, duration |
| friend_add            | 新添加好友     | user_id |
| group_recall          | 群消息撤回     | group_id, user_id, operator_id, message_id |
| friend_recall         | 好友消息撤回   | user_id, message_id |
| poke                  | 戳一戳         | sub_type: 'poke', group_id?, user_id, target_id |
| lucky_king            | 运气王         | sub_type: 'lucky_king', group_id, user_id, target_id |
| honor                 | 荣誉变更       | sub_type: 'honor', group_id, honor_type, user_id |
| group_msg_emoji_like  | 群表情回应     | group_id, user_id/operator_id, message_id, likes/code, count |
| essence               | 群精华         | sub_type: 'add'/'delete', group_id, message_id, sender_id, operator_id |
| group_card            | 群名片变更     | group_id, user_id, card_new, card_old |

**群成员增加通知示例：**
```json
{
  "time": 1718000010,
  "post_type": "notice",
  "notice_type": "group_increase",
  "group_id": 987654321,
  "operator_id": 123456789,
  "user_id": 345678902,
  "sub_type": "invite",
  "self_id": 123456789
}
```

**群禁言通知示例：**
```json
{
  "time": 1718000011,
  "post_type": "notice",
  "notice_type": "group_ban",
  "group_id": 987654321,
  "operator_id": 123456789,
  "user_id": 345678903,
  "duration": 600,
  "sub_type": "ban",
  "self_id": 123456789
}
```

---

## 4. 请求事件结构（Request Event）

请求事件用于描述需要机器人处理的请求，如加好友、加群等。

| 字段名      | 类型                | 说明                   |
| ----------- | ------------------- | ---------------------- |
| time        | number              | 事件发生时间戳         |
| post_type   | 'request'           | 事件类型               |
| self_id     | number              | 收到事件的机器人 QQ 号 |
| request_type| 'friend'/'group'    | 请求类型               |
| flag        | string              | 请求 flag              |
| user_id     | number              | 发送请求的 QQ 号       |
| comment     | string              | 验证信息               |

不同请求类型的补充字段：

| request_type | 说明         | 主要字段补充说明 |
|--------------|--------------|-----------------|
| friend       | 好友请求     | 无              |
| group        | 群请求       | sub_type: 'add'（加群申请）/'invite'（被邀请入群），group_id |

**加好友请求示例：**
```json
{
  "time": 1718000020,
  "post_type": "request",
  "request_type": "friend",
  "flag": "request_flag_1",
  "user_id": 456789012,
  "comment": "我是机器人粉丝",
  "self_id": 123456789
}
```

**加群申请请求示例：**
```json
{
  "time": 1718000021,
  "post_type": "request",
  "request_type": "group",
  "sub_type": "add",
  "group_id": 987654321,
  "flag": "request_flag_2",
  "user_id": 456789013,
  "comment": "想加入群聊",
  "self_id": 123456789
}
```

---

## 5. 消息段结构（OB11Segment）

每条消息由若干消息段（Segment）组成，每个消息段包含类型和对应数据。

| 字段名 | 类型   | 说明                   |
| ------ | ------ | ---------------------- |
| type   | string | 段落类型（如 'text'）  |
| data   | object | 各类型对应的数据内容    |

常见 type 及 data 字段说明：

- `text`：`{ text: string }` —— 纯文本内容
- `image`：`{ file: string, url?: string, ... }` —— 图片
- `at`：`{ qq: number }` —— @某人
- `face`：`{ id: number }` —— QQ 表情
- `reply`：`{ id: number }` —— 回复消息

**消息段示例：**
```json
[
  { "type": "text", "data": { "text": "你好" } },
  { "type": "image", "data": { "file": "abc.jpg", "url": "http://..." } },
  { "type": "at", "data": { "qq": 123456789 } },
  { "type": "face", "data": { "id": 123 } },
  { "type": "reply", "data": { "id": 1001 } }
]
```

---

## 6. 发送者信息结构

### 6.1 FriendSender（私聊发送者）

| 字段名   | 类型    | 说明               |
| -------- | ------- | ------------------ |
| user_id  | number  | 发送者 QQ 号       |
| nickname | string  | 昵称               |
| sex      | 'male' / 'female' / 'unknown' | 性别 |
| group_id | number? | 群临时会话群号（可选） |

**私聊发送者示例：**
```json
{
  "user_id": 234567890,
  "nickname": "小明",
  "sex": "male"
}
```

### 6.2 GroupSender（群聊发送者）

| 字段名   | 类型    | 说明               |
| -------- | ------- | ------------------ |
| user_id  | number  | 发送者 QQ 号       |
| nickname | string  | 昵称               |
| sex      | 'male' / 'female' / 'unknown' | 性别 |
| card     | string? | 群名片/备注（可选）|
| role     | 'owner' / 'admin' / 'member' | 角色 |

**群聊发送者示例：**
```json
{
  "user_id": 345678901,
  "nickname": "群友A",
  "sex": "female",
  "card": "管理员",
  "role": "admin"
}
```

---

> **说明**：
> - 字段后带 `?` 表示该字段为可选项。
> - 消息段（OB11Segment）可包含多种类型，具体内容以实际消息为准。
> - 发送者信息结构根据消息类型（私聊/群聊）有所不同。