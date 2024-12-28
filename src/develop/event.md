# 上报事件兼容情况 <Badge type="tip" text="V4" />

## meta_event 事件

| 事件名                         | 说明                          | 可用  | 备注 |
| ------------------------------ | ----------------------------- | :---: | ---- |
| `meta_event.lifecycle`         | 生命周期                      |   ✅   |      |
| `meta_event.lifecycle.enable`  | 生命周期 - OneBot 启用        |   ❌   |      |
| `meta_event.lifecycle.disable` | 生命周期 - OneBot 停用        |   ❌   |      |
| `meta_event.lifecycle.connect` | 生命周期 - WebSocket 连接成功 |   ✅   |      |
| `meta_event.heartbeat`         | 心跳                          |   ✅   |      |

## message 事件

| 事件名                       | 说明                    | 可用  | 备注 |
| ---------------------------- | ----------------------- | :---: | ---- |
| `message.private`            | 私聊消息                |   ✅   |      |
| `message.private.friend`     | 私聊消息 - 好友         |   ✅   |      |
| `message.private.group`      | 私聊消息 - 群临时       |   ✅   |      |
| `message.private.group_self` | 私聊消息 - 群中自身发送 |   ❌   |      |
| `message.private.other`      | 私聊消息 - 其他         |   ❌   |      |
| `message.group`              | 群聊消息                |   ✅   |      |
| `message.group.normal`       | 群聊消息 - 普通         |   ✅   |      |
| `message.group.anonymous`    | 群聊消息 - 匿名消息     |   ❌   |      |
| `message.group.notice`       | 群聊消息 - 系统提示     |   ❌   |      |

## message_sent 事件

| 事件名                            | 说明                    | 可用  | 备注 |
| --------------------------------- | ----------------------- | :---: | ---- |
| `message_sent.private`            | 私聊消息                |   ✅   |      |
| `message_sent.private.friend`     | 私聊消息 - 好友         |   ✅   |      |
| `message_sent.private.group`      | 私聊消息 - 群临时       |   ✅   |      |
| `message_sent.private.group_self` | 私聊消息 - 群中自身发送 |   ❌   |      |
| `message_sent.private.other`      | 私聊消息 - 其他         |   ❌   |      |
| `message_sent.group`              | 群聊消息                |   ✅   |      |
| `message_sent.group.normal`       | 群聊消息 - 普通         |   ✅   |      |
| `message_sent.group.anonymous`    | 群聊消息 - 匿名消息     |   ❌   |      |
| `message_sent.group.notice`       | 群聊消息 - 系统提示     |   ❌   |      |

## request 事件

| 事件名                 | 说明           | 可用  | 备注           |
| ---------------------- | -------------- | :---: | -------------- |
| `request.friend`       | 加好友请求     |   ✅   |                |
| `request.group.add`    | 加群请求       |   ✅   | 需要管理员权限 |
| `request.group.invite` | 邀请登录号入群 |   ✅   |                |

## notice 事件

| 事件名                          | 说明                            | 可用  | 备注                    |
| ------------------------------- | ------------------------------- | :---: | ----------------------- |
| `notice.friend_add`             | 好友添加                        |   ✅   |                         |
| `notice.friend_recall`          | 私聊消息撤回                    |   ✅   |                         |
| `notice.offline_file`           | 接收到离线文件                  |   ❌   |                         |
| `notice.client_status`          | 其他客户端在线状态变更          |   ❌   |                         |
| `notice.group_admin`            | 群聊管理员变动                  |   ✅   |                         |
| `notice.group_admin.set`        | 群聊管理员变动 - 增加           |   ✅   |                         |
| `notice.group_admin.unset`      | 群聊管理员变动 - 减少           |   ✅   |                         |
| `notice.group_ban`              | 群聊禁言                        |   ✅   |                         |
| `notice.group_ban.ban`          | 群聊禁言 - 禁言                 |   ✅   |                         |
| `notice.group_ban.lift_ban`     | 群聊禁言 - 取消禁言             |   ✅   |                         |
| `notice.group_card`             | 群成员名片更新                  |   ✅   |                         |
| `notice.group_decrease`         | 群聊成员减少                    |   ✅   |                         |
| `notice.group_decrease.leave`   | 群聊成员减少 - 主动退群         |   ✅   |                         |
| `notice.group_decrease.kick`    | 群聊成员减少 - 成员被踢         |   ✅   |                         |
| `notice.group_decrease.kick_me` | 群聊成员减少 - 登录号被踢       |   ✅   |                         |
| `notice.group_increase`         | 群聊成员增加                    |   ✅   |                         |
| `notice.group_increase.approve` | 群聊成员增加 - 管理员已同意入群 |   ✅   |                         |
| `notice.group_increase.invite`  | 群聊成员增加 - 管理员邀请入群   |   ✅   |                         |
| `notice.group_recall`           | 群聊消息撤回                    |   ✅   |                         |
| `notice.group_upload`           | 群聊文件上传                    |   ✅   |                         |
| `notice.group_msg_emoji_like`   | 群聊表情回应                    |   ⏹   | 仅收自己的 其余扩展接口拉取 |
| `notice.essence`                | 群聊设精                        |   ✅   |                         |
| `notice.essence.add`            | 群聊设精 - 增加                 |   ✅   |                         |
| `notice.essence.delete`         | 群聊设精 - 取消                 |   ❌   |                         |
| `notice.notify.poke`            | 戳一戳                          |   ✅   |                         |
| `notice.notify.lucky_king`      | 群红包运气王                    |   ❌   |                         |
| `notice.notify.honor`           | 群成员荣誉变更                  |   ❌   |                         |
| `notice.notify.honor.talkative` | 群成员荣誉变更 - 龙王           |   ❌   |                         |
| `notice.notify.honor.performer` | 群成员荣誉变更 - 群聊之火       |   ❌   |                         |
| `notice.notify.honor.emotion`   | 群成员荣誉变更 - 快乐源泉       |   ❌   |                         |
| `notice.notify.input_status`    | 输入状态更新                    |   ✅   |                         |
| `notice.notify.title`           | 群成员头衔变更                  |   ❌   |                         |
| `notice.notify.profile_like`    | 点赞                            |   ✅   |                         |
