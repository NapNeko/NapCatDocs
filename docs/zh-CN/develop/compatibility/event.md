# 上报事件兼容情况

## meta_event 事件

| 事件名                 | 说明     | 可用  | 备注 |
| ---------------------- | -------- | :---: | ---- |
| `meta_event.lifecycle` | 生命周期 |   ✅   |      |
| `meta_event.heartbeat` | 心跳     |   ✅   |      |

### message 事件

| 事件名            | 说明     | 可用  | 备注 |
| ----------------- | -------- | :---: | ---- |
| `message.private` | 私聊消息 |   ✅   |      |
| `message.group`   | 群聊消息 |   ✅   |      |

### message_sent 事件

| 事件名                 | 说明     | 可用  | 备注 |
| ---------------------- | -------- | :---: | ---- |
| `message_sent.private` | 私聊消息 |   ✅   |      |
| `message_sent.group`   | 群聊消息 |   ✅   |      |

### request 事件

| 事件名                 | 说明           | 可用  | 备注           |
| ---------------------- | -------------- | :---: | -------------- |
| `request.friend`       | 加好友请求     |   ✅   |                |
| `request.group.add`    | 加群请求       |   ✅   | 需要管理员权限 |
| `request.group.invite` | 邀请登录号入群 |   ✅   |                |

### notice 事件

| 事件名                        | 说明                   | 可用  | 备注                    |
| ----------------------------- | ---------------------- | :---: | ----------------------- |
| `notice.friend_recall`        | 私聊消息撤回           |   ✅   |                         |
| `notice.group_recall`         | 群聊消息撤回           |   ✅   |                         |
| `notice.group_increase`       | 群聊成员增加           |   ✅   |                         |
| `notice.group_decrease`       | 群聊成员减少           |   ✅   |                         |
| `notice.group_admin`          | 群聊管理员变动         |   ❌   | 需要管理员权限          |
| `notice.group_upload`         | 群聊文件上传           |   ✅   |                         |
| `notice.group_ban`            | 群聊禁言               |   ✅   |                         |
| `notice.friend_add`           | 好友添加               |   ✅   |                         |
| `notice.notify.poke`          | 戳一戳                 |   ✅   | 无法获取操作ID将上报为0 |
| `notice.notify.lucky_king`    | 群红包运气王提示       |   ❌   |                         |
| `notice.notify.honor`         | 群成员荣誉变更         |   ❌   |                         |
| `notice.notify.title`         | 群成员头衔变更         |   ❌   |                         |
| `notice.notify.input_status`  | 输入状态更新           |   ✅   |                         |
| `notice.group_card`           | 群成员名片更新         |   ❌   |                         |
| `notice.offline_file`         | 接收到离线文件         |   ❌   |                         |
| `notice.client_status`        | 其他客户端在线状态变更 |   ❌   |                         |
| `notice.essence`              | 群聊设精(设置精华)     |   ⏹   | 可以收到添加收不到取消  |
| `notice.group_msg_emoji_like` | 群聊表情回应           |   ✅   |                         |
