# API 文档 <Badge type="tip" text="V4" />

此处仅包含 NapCatQQ 中的扩展接口

- [onebot11 接口文档](https://github.com/botuniverse/onebot-11/blob/master/api/public.md)
- [gocqhttp 接口文档](https://docs.go-cqhttp.org/api)
- [Apifox 接口文档](https://napcat.apifox.cn)

## set_group_sign - 群签到 <Badge type="info" text="native" />

### 参数

| 字段名           | 数据类型 | 默认值 | 说明        |
| ---------------- | -------- | ------ | ----------- |
| `group_id`       | string   | -      | 群号        |

### 响应数据

无

## group_poke - 群聊戳一戳 <Badge type="info" text="native" />

### 参数

| 字段名           | 数据类型 | 默认值 | 说明        |
| ---------------- | -------- | ------ | ----------- |
| `group_id`       | number   | -      | 群号        |
| `user_id`        | number   | -      | 对方 QQ 号  |

### 响应数据

无

## friend_poke - 私聊戳一戳 <Badge type="info" text="native" />

### 参数

| 字段名           | 数据类型 | 默认值 | 说明        |
| ---------------- | -------- | ------ | ----------- |
| `user_id`        | number   | -      | 对方 QQ 号  |

### 响应数据

无

## ArkSharePeer - 获取推荐好友/群聊卡片  <Badge type="info" text="normal" />

### 参数

好友和群聊二选一

| 字段名        | 数据类型 | 默认值 | 说明        |
| ------------- | -------- | ------ | ----------- |
| `user_id`     | string   | -      | 对方 QQ 号  |
| `phoneNumber` | string   | `""`   | 对方 手机号 |
| `group_id`    | string   | -      | 群号        |

### 响应数据

| 字段名    | 数据类型 | 说明     |
| --------- | -------- | -------- |
| `errCode` | number   | 错误信息 |
| `errMsg`  | string   | 错误信息 |
| `arkJson` | string   | 卡片JSON |

## ArkShareGroup - 获取推荐群聊卡片 <Badge type="info" text="normal" />

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | string   | -      | 群号 |

### 响应数据

| 字段名 | 数据类型 | 说明     |
| ------ | -------- | -------- |
| `无`   | string   | 卡片JSON |

## get_robot_uin_range - 获取机器人账号范围 <Badge type="info" text="normal" />

### 参数

无

### 响应数据

| 字段名 | 数据类型 | 默认值 | 说明         |
| ------ | -------- | ------ | ------------ |
| `无`   | list[]   | -      | 账号范围列表 |

#### list

| 字段名   | 数据类型 | 说明 |
| -------- | -------- | ---- |
| `minUin` | number   | 最小 |
| `maxUin` | number   | 最大 |

## set_online_status - 设置在线状态 <Badge type="info" text="normal" />

### 参数

| 字段名           | 数据类型 | 默认值 | 说明                               |
| ---------------- | -------- | ------ | ---------------------------------- |
| `status`         | number   | -      | 参考[状态列表](./type.md#状态列表) |
| `ext_status`     | number   | -      | 参考[状态列表](./type.md#状态列表) |
| `battery_status` | number   | -      | 电量                               |

### 响应数据

无

## get_friends_with_category - 获取分类的好友列表 <Badge type="info" text="normal" />

### 参数

无

### 响应数据

| 字段名 | 数据类型 | 默认值 | 说明     |
| ------ | -------- | ------ | -------- |
| `无`   | list[]   | -      | 好友列表 |

#### list

| 字段名            | 数据类型 | 说明             |
| ----------------- | -------- | ---------------- |
| `categoryId`      | number   | 分类 ID           |
| `categorySortId`  | number   | 分类排序 ID       |
| `categoryName`    | string   | 分类名称         |
| `categoryMbCount` | number   | 分类内好友总数量 |
| `onlineCount`     | number   | 在线数量         |
| `buddyList`       | buddy[]  | 好友列表         |

#### buddy

| 字段名           | 数据类型                  | 说明     |
| ---------------- | ------------------------- | -------- |
| `qid`            | string                    | QQ ID     |
| `longNick`       | string                    | 签名     |
| `birthday_year`  | number                    | 生日     |
| `birthday_month` | number                    | 生日     |
| `birthday_day`   | number                    | 生日     |
| `age`            | number                    | 年龄     |
| `sex`            | string                    | 性别     |
| `eMail`          | string                    | 电子邮箱 |
| `phoneNum`       | string                    | 电话号码 |
| `categoryId`     | number                    | 分类     |
| `richTime`       | number                    |          |
| `richBuffer`     | `{[key: string]: number}` |          |
| `uid`            | string                    | QQ 号     |
| `uin`            | string                    | QQ 号     |
| `nick`           | string                    | 昵称     |
| `remark`         | string                    | 备注     |
| `user_id`        | number                    | QQ 号     |
| `nickname`       | string                    | 昵称     |
| `level`          | number                    | QQ等级   |

## set_qq_avatar - 设置QQ头像 <Badge type="info" text="normal" />

### 参数

| 字段名 | 数据类型 | 默认值 | 说明           |
| ------ | -------- | ------ | -------------- |
| `file` | string   | -      | 图片路径或链接 |

### 响应数据

无

## get_file - 获取文件信息 <Badge type="info" text="normal" />

### 参数

| 字段名    | 数据类型 | 默认值 | 说明   |
| --------- | -------- | ------ | ------ |
| `file_id` | string   | -      | 文件 ID |

### 响应数据

| 字段名      | 数据类型 | 说明       |
| ----------- | -------- | ---------- |
| `file`      | string   | 路径或链接 |
| `url`       | string   | 路径或链接 |
| `file_size` | string   | 文件大小   |
| `file_name` | string   | 文件名     |
| `base64`    | string   | base64     |

## forward_friend_single_msg - 转发到私聊 <Badge type="info" text="normal" />

### 参数

| 字段名       | 数据类型 | 默认值 | 说明   |
| ------------ | -------- | ------ | ------ |
| `message_id` | number   | -      | 消息 ID |
| `user_id`    | number   | -      | QQ 号   |

### 响应数据

无

## forward_group_single_msg - 转发到群聊 <Badge type="info" text="normal" />

### 参数

| 字段名       | 数据类型 | 默认值 | 说明   |
| ------------ | -------- | ------ | ------ |
| `message_id` | number   | -      | 消息 ID |
| `group_id`   | number   | -      | 群号   |

### 响应数据

无

## translate_en2zh - 英译中 <Badge type="info" text="normal" />

### 参数

| 字段名  | 数据类型 | 默认值 | 说明     |
| ------- | -------- | ------ | -------- |
| `words` | string[] | -      | 英文数组 |

### 响应数据

| 字段名 | 数据类型 | 说明     |
| ------ | -------- | -------- |
| `无`   | string[] | 中文数组 |

## set_msg_emoji_like - 设置表情回复 <Badge type="info" text="normal" />

### 参数

| 字段名       | 数据类型 | 默认值 | 说明   |
| ------------ | -------- | ------ | ------ |
| `message_id` | number   | -      | 消息 ID |
| `emoji_id`   | string   | -      | 表情 ID |

### 响应数据

无

## send_forward_msg - 发送合并转发 <Badge type="info" text="normal+native" />

### 参数

| 字段名         | 数据类型 | 默认值 | 说明                                                                                        |
| -------------- | -------- | ------ | ------------------------------------------------------------------------------------------- |
| `message_type` | string   | -      | 消息类型，支持 `private`、`group`，分别对应私聊、群组，如不传入，则根据传入的 *_id 参数判断 |
| `user_id`      | number   | -      | QQ 号                                                                                        |
| `group_id`     | number   | -      | 群号                                                                                        |
| `messages`      | node[]   | -      | 消息,需要是 node, 详见 [node](../msg.md#node)                                               |

### 响应数据

| 字段名       | 数据类型 | 说明   |
| ------------ | -------- | ------ |
| `message_id` | number   | 消息 ID |
| `res_id`     | string   | resid  |

## mark_private_msg_as_read - 设置私聊已读 <Badge type="info" text="normal" />

### 参数

| 字段名    | 数据类型 | 默认值 | 说明 |
| --------- | -------- | ------ | ---- |
| `user_id` | number   | -      | QQ 号 |

### 响应数据

无

## mark_group_msg_as_read - 设置群聊已读 <Badge type="info" text="normal" />

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | number   | -      | 群号 |

### 响应数据

无

## get_friend_msg_history - 获取私聊历史记录 <Badge type="info" text="normal" />

### 参数

| 字段名         | 数据类型 | 默认值 | 说明     |
| -------------- | -------- | ------ | -------- |
| `user_id`      | string   | -      | QQ 号     |
| `message_seq`  | string   | '0'    | 起始信息 |
| `count`        | number   | 20     | 数量     |
| `reverseOrder` | boolean  | false  | 倒序     |

### 响应数据

| 字段名     | 数据类型  | 说明                                                                                                                                      |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `messages` | message[] | 消息数组,参考 [onebot11](https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_msg-%E8%8E%B7%E5%8F%96%E6%B6%88%E6%81%AF) |

## create_collection - 创建收藏 <Badge type="info" text="normal" />

## get_collection_list - 获取收藏 <Badge type="info" text="normal" />

## set_self_longnick - 设置签名 <Badge type="info" text="normal" />

### 参数

好友和群聊二选一

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `longNick` | string   | -      | 签名 |

### 响应数据

| 字段名   | 数据类型 | 说明     |
| -------- | -------- | -------- |
| `result` | number   | 错误信息 |
| `errMsg` | string   | 错误信息 |

## get_recent_contact - 获取私聊历史记录 <Badge type="info" text="normal" />

### 参数

| 字段名  | 数据类型 | 默认值 | 说明 |
| ------- | -------- | ------ | ---- |
| `count` | number   | 10     | 数量 |

### 响应数据

| 字段名           | 数据类型 | 说明                                                                                                                                      |
| ---------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `lastestMsg`     | message  | 消息数组，参考 [onebot11](https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_msg-%E8%8E%B7%E5%8F%96%E6%B6%88%E6%81%AF) |
| `peerUin`        | number   | QQ 号                                                                                                                                      |
| `remark`         | string   | QQ备注                                                                                                                                    |
| `msgTime`        | string   | 消息时间                                                                                                                                  |
| `chatType`       | number   | 聊天类型                                                                                                                                  |
| `msgId`          | string   | 消息 ID                                                                                                                                    |
| `sendNickName`   | string   | QQ昵称                                                                                                                                    |
| `sendMemberName` | string   | 群昵称                                                                                                                                    |
| `peerName`       | string   | QQ昵称                                                                                                                                    |

## _mark_all_as_read - 标记所有已读 <Badge type="info" text="normal" />

### 参数

无

### 响应数据

无

## get_profile_like - 获取自身点赞列表  <Badge type="info" text="normal" />

### 参数

无

### 响应数据

| 字段名              | 数据类型 | 说明     |
| ------------------ | -------- | -------- |
| `total_count`      | number   | 总点赞数  |
| `new_count`        | number   | 新点赞数  |
| `new_nearby_count` | number   |          |
| `last_visit_time`  | number   |          |
| `userInfos`        | list[]   |          |

#### list

| 字段名           | 数据类型 | 说明     |
| ---------------- | -------- | -------- |
| `uid`            | string   | QQ 号     |
| `src`            | number   | 来源     |
| `latestTime`     | number   |          |
| `count`          | number   |          |
| `giftCount`      | number   |          |
| `customId`       | number   |          |
| `lastCharged`    | number   |          |
| `bAvailableCnt`  | number   |          |
| `bTodayVotedCnt` | number   |          |
| `nick`           | string   | 昵称     |
| `gender`         | number   | 性别     |
| `age`            | number   | 年龄     |
| `isFriend`       | boolean  |          |
| `isvip`          | boolean  | 会员     |
| `isSvip`         | boolean  | 超级会员 |
| `uin`            | number   |          |

## fetch_custom_face - 获取自定义表情  <Badge type="info" text="normal" />

### 参数

| 字段名  | 数据类型 | 默认值 | 说明 |
| ------- | -------- | ------ | ---- |
| `count` | number   | 48     | 数量 |

### 响应数据

| 字段名 | 数据类型 | 说明     |
| ------ | -------- | -------- |
| `无`   | string[] | 表情列表 |

## get_ai_record - AI文字转语音  <Badge type="info" text="native" />

### 参数

| 字段名 | 数据类型 | 说明 |
| ------ | ------ | ------ |
| `character` | string | AI 角色编号，必填 |
| `group_id` | number | 群号，必填 |
| `text` | string | 需要转成语音的文字，必填 |

### 响应数据

| 字段名 | 数据类型 |说明 |
| ------ | ------ |------ |
| `data` | string | 转换出的语音链接 |

## get_ai_characters - 获取AI语音角色列表  <Badge type="info" text="native" />

### 参数

| 字段名 | 数据类型| 说明 |
| ------ | ------ | ------ |
| `group_id` | number | 群号,必填|
| `chat_type`| number | |

### 响应数据

| 字段名 | 数据类型 | 说明 |
|------------|--------|-----------|
| `type` | string | AI 分类，有'推荐','古风','现代' |
|`characters`| list[] | AI 角色数据 |

#### character[]

| 字段名 | 数据类型 | 说明 |
|------|------|------|
|`character_id` | string | AI 角色编号 |
|`character_name`| string | AI 角色名称 |
|`preview_url` | string | AI 角色声音预览url|

## send_group_ai_record - 群聊发送AI语音  <Badge type="info" text="native" />

### 参数

| 字段名 | 数据类型 | 说明 |
| ------ | ------ | ------ |
| `character` | string | AI 角色编号，必填 |
| `group_id` | number | 群号，必填 |
| `text` | string | 需要转成语音的文字，必填 |

### 响应数据

| 字段名 | 数据类型 | 说明 |
| ------ | ------ | ------ |
|`message_id`| string |所发出消息的id |

## send_poke - 群聊/私聊戳一戳  <Badge type="info" text="native" />

### 参数

| 字段名           | 数据类型 | 默认值 | 说明                                                      |
| ---------------- | -------- | ------ | ------------------------------------------------------- |
| `group_id`       | number   | -      | 传入此参数按`group_poke`发送,否则按`friend_poke`发送      |
| `user_id`        | number   | -      | 对方 QQ 号                                               |

### 响应数据

无