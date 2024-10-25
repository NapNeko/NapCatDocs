# API 文档

此处仅包含 NapCatQQ 中的扩展接口

- [onebot11接口文档](https://github.com/botuniverse/onebot-11/blob/master/api/public.md)
- [gocqhttp接口文档](https://docs.go-cqhttp.org/api)

## set_group_sign - 群签到

### 参数

| 字段名           | 数据类型 | 默认值 | 说明        |
| ---------------- | -------- | ------ | ----------- |
| `group_id`       | string   | -      | 群号        |

### 响应数据

无

## group_poke - 群聊戳一戳

### 参数

| 字段名           | 数据类型 | 默认值 | 说明        |
| ---------------- | -------- | ------ | ----------- |
| `group_id`       | number   | -      | 群号        |
| `user_id`        | number   | -      | 对方 QQ 号  |

### 响应数据

无

## friend_poke - 私聊戳一戳

### 参数

| 字段名           | 数据类型 | 默认值 | 说明        |
| ---------------- | -------- | ------ | ----------- |
| `user_id`        | number   | -      | 对方 QQ 号  |

### 响应数据

无

## ArkSharePeer - 获取推荐好友/群聊卡片

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

## ArkShareGroup - 获取推荐群聊卡片

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | string   | -      | 群号 |

### 响应数据

| 字段名 | 数据类型 | 说明     |
| ------ | -------- | -------- |
| `无`   | string   | 卡片JSON |

## get_robot_uin_range - 获取机器人账号范围

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

## set_online_status - 设置在线状态

### 参数

| 字段名           | 数据类型 | 默认值 | 说明                               |
| ---------------- | -------- | ------ | ---------------------------------- |
| `status`         | number   | -      | 参考[状态列表](./type.md#状态列表) |
| `ext_status`     | number   | -      | 参考[状态列表](./type.md#状态列表) |
| `battery_status` | number   | -      | 电量                               |

### 响应数据

无

## get_friends_with_category - 获取分类的好友列表

### 参数

无

### 响应数据

| 字段名 | 数据类型 | 默认值 | 说明     |
| ------ | -------- | ------ | -------- |
| `无`   | list[]   | -      | 好友列表 |

#### list

| 字段名            | 数据类型 | 说明             |
| ----------------- | -------- | ---------------- |
| `categoryId`      | number   | 分类ID           |
| `categorySortId`  | number   | 分类排序ID       |
| `categoryName`    | string   | 分类名称         |
| `categoryMbCount` | number   | 分类内好友总数量 |
| `onlineCount`     | number   | 在线数量         |
| `buddyList`       | buddy[]  | 好友列表         |

#### buddy

| 字段名           | 数据类型                  | 说明     |
| ---------------- | ------------------------- | -------- |
| `qid`            | string                    | QQID     |
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
| `uid`            | string                    | QQ号     |
| `uin`            | string                    | QQ号     |
| `nick`           | string                    | 昵称     |
| `remark`         | string                    | 备注     |
| `user_id`        | number                    | QQ号     |
| `nickname`       | string                    | 昵称     |
| `level`          | number                    | QQ等级   |

## set_qq_avatar - 设置QQ头像

### 参数

| 字段名 | 数据类型 | 默认值 | 说明           |
| ------ | -------- | ------ | -------------- |
| `file` | string   | -      | 图片路径或链接 |

### 响应数据

无

## get_file - 获取文件信息

### 参数

| 字段名    | 数据类型 | 默认值 | 说明   |
| --------- | -------- | ------ | ------ |
| `file_id` | string   | -      | 文件ID |

### 响应数据

| 字段名      | 数据类型 | 说明       |
| ----------- | -------- | ---------- |
| `file`      | string   | 路径或链接 |
| `url`       | string   | 路径或链接 |
| `file_size` | string   | 文件大小   |
| `file_name` | string   | 文件名     |
| `base64`    | string   | base64     |

## forward_friend_single_msg - 转发到私聊

### 参数

| 字段名       | 数据类型 | 默认值 | 说明   |
| ------------ | -------- | ------ | ------ |
| `message_id` | number   | -      | 消息ID |
| `user_id`    | number   | -      | QQ号   |

### 响应数据

无

## forward_group_single_msg - 转发到群聊

### 参数

| 字段名       | 数据类型 | 默认值 | 说明   |
| ------------ | -------- | ------ | ------ |
| `message_id` | number   | -      | 消息ID |
| `group_id`   | number   | -      | 群号   |

### 响应数据

无

## translate_en2zh - 英译中

### 参数

| 字段名  | 数据类型 | 默认值 | 说明     |
| ------- | -------- | ------ | -------- |
| `words` | string[] | -      | 英文数组 |

### 响应数据

| 字段名 | 数据类型 | 说明     |
| ------ | -------- | -------- |
| `无`   | string[] | 中文数组 |

## set_msg_emoji_like - 设置表情回复

### 参数

| 字段名       | 数据类型 | 默认值 | 说明   |
| ------------ | -------- | ------ | ------ |
| `message_id` | number   | -      | 消息ID |
| `emoji_id`   | string   | -      | 表情ID |

### 响应数据

无

## send_forward_msg - 发送合并转发

### 参数

| 字段名         | 数据类型 | 默认值 | 说明                                                                                        |
| -------------- | -------- | ------ | ------------------------------------------------------------------------------------------- |
| `message_type` | string   | -      | 消息类型，支持 `private`、`group`，分别对应私聊、群组，如不传入，则根据传入的 *_id 参数判断 |
| `user_id`      | number   | -      | QQ号                                                                                        |
| `group_id`     | number   | -      | 群号                                                                                        |
| `message`      | node[]   | -      | 消息,需要是 node, 详见 [node](../msg.md#node)                                               |

### 响应数据

| 字段名       | 数据类型 | 说明   |
| ------------ | -------- | ------ |
| `message_id` | number   | 消息ID |
| `res_id`     | string   | resid  |

## mark_private_msg_as_read - 设置私聊已读

### 参数

| 字段名    | 数据类型 | 默认值 | 说明 |
| --------- | -------- | ------ | ---- |
| `user_id` | number   | -      | QQ号 |

### 响应数据

无

## mark_group_msg_as_read - 设置群聊已读

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | number   | -      | 群号 |

### 响应数据

无

## get_friend_msg_history - 获取私聊历史记录

### 参数

| 字段名         | 数据类型 | 默认值 | 说明     |
| -------------- | -------- | ------ | -------- |
| `user_id`      | string   | -      | QQ号     |
| `message_seq`  | string   | '0'    | 起始信息 |
| `count`        | number   | 20     | 数量     |
| `reverseOrder` | boolean  | false  | 倒序     |

### 响应数据

| 字段名     | 数据类型  | 说明                                                                                                                                      |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `messages` | message[] | 消息数组,参考 [onebot11](https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_msg-%E8%8E%B7%E5%8F%96%E6%B6%88%E6%81%AF) |

## create_collection - 创建收藏

## get_collection_list - 获取收藏

## set_self_longnick - 设置签名

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

## get_recent_contact - 获取私聊历史记录

### 参数

| 字段名  | 数据类型 | 默认值 | 说明 |
| ------- | -------- | ------ | ---- |
| `count` | number   | 10     | 数量 |

### 响应数据

| 字段名           | 数据类型 | 说明                                                                                                                                      |
| ---------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `lastestMsg`     | message  | 消息数组,参考 [onebot11](https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_msg-%E8%8E%B7%E5%8F%96%E6%B6%88%E6%81%AF) |
| `peerUin`        | number   | QQ号                                                                                                                                      |
| `remark`         | string   | QQ备注                                                                                                                                    |
| `msgTime`        | string   | 消息时间                                                                                                                                  |
| `chatType`       | number   | 聊天类型                                                                                                                                  |
| `msgId`          | string   | 消息ID                                                                                                                                    |
| `sendNickName`   | string   | QQ昵称                                                                                                                                    |
| `sendMemberName` | string   | 群昵称                                                                                                                                    |
| `peerName`       | string   | QQ昵称                                                                                                                                    |

## _mark_all_as_read - 标记所有已读

### 参数

无

### 响应数据

无

## get_profile_like - 获取资料

### 参数

无

### 响应数据

| 字段名 | 数据类型 | 说明     |
| ------ | -------- | -------- |
| `无`   | list[]   | 错误信息 |

#### list

| 字段名           | 数据类型 | 说明     |
| ---------------- | -------- | -------- |
| `uid`            | string   | QQ号     |
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

## fetch_custom_face - 获取自定义表情

### 参数

| 字段名  | 数据类型 | 默认值 | 说明 |
| ------- | -------- | ------ | ---- |
| `count` | number   | 48     | 数量 |

### 响应数据

| 字段名 | 数据类型 | 说明     |
| ------ | -------- | -------- |
| `无`   | string[] | 表情列表 |
