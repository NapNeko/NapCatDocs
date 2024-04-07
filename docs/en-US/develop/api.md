# Api List

## 总览-支持的API

目前支持的协议
- [x] http调用api
- [x] http事件上报
- [x] 正向websocket
- [x] 反向websocket

主要功能:
- [x] 发送好友消息
- [x] 发送群消息
- [x] 获取好友列表
- [x] 获取群列表
- [x] 获取群成员列表
- [x] 撤回消息
- [x] 处理添加好友请求
- [x] 处理加群请求
- [x] 退群
- [x] 上报好友消息
- [x] 上报添加好友请求
- [x] 上报群消息
- [x] 上报好友、群消息撤回
- [x] 上报加群请求
- [x] 上报群员人数变动（尚不支持识别群员人数变动原因）
- [x] 设置群管理员
- [x] 群禁言/全体禁言
- [x] 群踢人
- [x] 群改群成员名片
- [x] 修改群名

消息格式支持:
- [x] cq码
- [x] 文字
- [x] 表情
- [x] 图片
- [x] 引用消息
- [x] @群成员
- [x] 语音(支持mp3、wav等多种音频格式直接发送)
- [x] json消息(只上报)
- [x] 转发消息记录(目前只能发不能收)
- [x] 视频(上报时暂时只有个空的file)
- [x] 文件(上报时暂时只有个空的file), type为file, data为{file: uri}, 发送时uri支持http://, file://, base64://
    ```
    {
        "type": "file",
        "data": {
            "file": "file:///D:/1.txt"
        }
    }
    ```
- [ ] 发送音乐卡片
- [ ] 红包（没有计划支持）
- [ ] xml (没有计划支持)
## Support onebot v11 api

- [x] get_login_info
- [x] send_msg
- [x] send_group_msg
- [x] send_private_msg
- [x] delete_msg
- [x] get_group_list
- [x] get_group_info
- [x] get_group_member_list
- [x] get_group_member_info
- [x] get_friend_list
- [x] set_friend_add_request
- [x] get_msg
- [x] send_like
- [x] set_group_add_request
- [x] set_group_leave
- [x] set_group_kick
- [x] set_group_ban
- [x] set_group_whole_ban
- [x] set_group_kick
- [x] set_group_admin
- [x] set_group_card
- [x] set_group_name
- [x] get_version_info
- [x] get_status
- [x] can_send_image
- [x] can_send_record
- [x] get_image
- [x] get_record

### Support go-cqhtp api

- [x] send_private_forward_msg
- [x] send_group_forward_msg
- [x] get_stranger_info