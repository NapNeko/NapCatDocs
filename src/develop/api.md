# 请求接口兼容情况 <Badge type="tip" text="V4" />

NapCatQQ 实现了 [OneBot 11](https://11.onebot.dev/) 以及 [go-cqhttp](https://docs.go-cqhttp.org/api) 的大部分 API，对于 API 的详细说明请自行点击相关链接查看。

详细 NapCatQQ All API 用例参考 <https://napcat.apifox.cn>

## 连接方式

| 连接方式           | 可用  |
| ------------------ | :---: |
| HTTP 接口调用      |   ✅   |
| HTTP POST 事件上报 |   ✅   |
| HTTP POST 快速操作 |   ✅   |
| 正向 WS 连接       |   ✅   |
| 反向 WS 连接       |   ✅   |

## OneBot 11 API

<!-- | `set_group_anonymous`     | 群组匿名             |   ❌   | 不会支持 | -->
<!-- | `set_group_anonymous_ban` | 群组匿名用户禁言     |   ❌   | 不会支持 | -->
<!-- | `set_restart`             | 重启 OneBot 实现     |   ❌   |          | -->

<!-- | `qidian_get_account_info`        | 获取企点账号信息                |   ❌   | 不会支持 | -->
<!-- | `delete_unidirectional_friend`   | 删除单向好友                    |   ❌   |          | -->
<!-- | `get_unidirectional_friend_list` | 获取单向好友列表                |   ❌   |          | -->
<!-- | `.get_word_slices`               | 获取中文分词 ( 隐藏 API )       |   ❌   |          | -->
<!-- | `reload_event_filter`            | 重载事件过滤器                  |   ❌   | 不会支持 | -->

| Api                       | 介绍                 | 可用  | 备注     |
| ------------------------- | -------------------- | :---: | -------- |
| `send_private_msg`        | 发送私聊消息         |   ✅   |          |
| `send_group_msg`          | 发送群消息           |   ✅   |          |
| `send_msg`                | 发送消息             |   ✅   |          |
| `delete_msg`              | 撤回消息             |   ✅   |          |
| `get_msg`                 | 获取消息             |   ✅   |          |
| `get_forward_msg`         | 获取合并转发消息     |   ✅   |          |
| `send_like`               | 发送好友赞           |   ✅   |   推荐每次请求间隔3s，否则会被吞   |
| `set_group_kick`          | 群组踢人             |   ✅   |          |
| `set_group_ban`           | 群组单人禁言         |   ✅   |          |
| `set_group_whole_ban`     | 群组全员禁言         |   ✅   |          |
| `set_group_admin`         | 群组设置管理员       |   ✅   |          |
| `set_group_card`          | 设置群名片（群备注） |   ✅   |          |
| `set_group_name`          | 设置群名             |   ✅   |          |
| `set_group_leave`         | 退出群组             |   ✅   |          |
| `set_group_special_title` | 设置群组专属头衔     |   ✅   |          |
| `set_friend_add_request`  | 处理加好友请求       |   ✅   |          |
| `set_group_add_request`   | 处理加群请求／邀请   |   ✅   |          |
| `get_login_info`          | 获取登录号信息       |   ✅   |          |
| `get_stranger_info`       | 获取陌生人信息       |   ✅   |          |
| `get_friend_list`         | 获取好友列表         |   ✅   |          |
| `get_group_info`          | 获取群信息           |   ✅   |          |
| `get_group_list`          | 获取群列表           |   ✅   |          |
| `get_group_member_info`   | 获取群成员信息       |   ✅   |          |
| `get_group_member_list`   | 获取群成员列表       |   ✅   |          |
| `get_group_honor_info`    | 获取群荣誉信息       |   ✅   |          |
| `get_cookies`             | 获取 Cookies         |   ✅   |          |
| `get_csrf_token`          | 获取 CSRF Token      |   ✅   |          |
| `get_credentials`         | 获取 QQ 相关接口凭证 |   ✅   |          |
| `get_record`              | 获取语音             |   ✅   |          |
| `get_image`               | 获取图片             |   ✅   |          |
| `can_send_image`          | 检查是否可以发送图片 |   ✅   |          |
| `can_send_record`         | 检查是否可以发送语音 |   ✅   |          |
| `get_status`              | 获取运行状态         |   ✅   |          |
| `get_version_info`        | 获取版本信息         |   ✅   |          |
| `clean_cache`             | 清理缓存             |   ✅   |          |

## go-cqhttp API

| Api                              | 介绍                            | 可用  | 备注     |
| -------------------------------- | ------------------------------- | :---: | -------- |
| `set_qq_profile`                 | 设置登录号资料                  |   ✅   |          |
| `_get_model_show`                | 获取在线机型                    |   ✅   |      仅为兼容性    |
| `_set_model_show`                | 设置在线机型                    |   ✅   |      仅为兼容性    |
| `get_online_clients`             | 获取当前账号在线客户端列表      |   ✅   |          |
| `delete_friend`                  | 删除好友                        |   ✅   |          |
| `mark_msg_as_read`               | 标记消息已读                    |   ✅   |          |
| `send_group_forward_msg`         | 发送合并转发 ( 群聊 )           |   ✅   |          |
| `send_private_forward_msg`       | 发送合并转发 ( 好友 )           |   ✅   |          |
| `get_group_msg_history`          | 获取群消息历史记录              |   ✅   |          |
| `ocr_image`                      | 图片 OCR                        |   ✅   |          |
| `.ocr_image`                     | 图片 OCR                        |   ✅   |          |
| `get_group_system_msg`           | 获取群系统消息                  |   ✅   |          |
| `get_essence_msg_list`           | 获取精华消息列表                |   ✅   |          |
| `get_group_at_all_remain`        | 获取群 @全体成员 剩余次数       |   ✅   |          |
| `set_group_portrait`             | 设置群头像                      |   ✅   |          |
| `set_essence_msg`                | 设置精华消息                    |   ✅   |          |
| `delete_essence_msg`             | 移出精华消息                    |   ✅   |          |
| `send_group_sign`                | 群打卡                          |   ✅   |          |
| `_send_group_notice`             | 发送群公告                      |   ✅   |          |
| `_get_group_notice`              | 获取群公告                      |   ✅   |          |
| `upload_group_file`              | 上传群文件                      |   ✅   |          |
| `delete_group_file`              | 删除群文件                      |   ✅   |          |
| `create_group_file_folder`       | 创建群文件文件夹                |   ✅   |          |
| `delete_group_folder`            | 删除群文件文件夹                |   ✅   |          |
| `get_group_file_system_info`     | 获取群文件系统信息              |   ✅   |          |
| `get_group_root_files`           | 获取群根目录文件列表            |   ✅   |          |
| `get_group_files_by_folder`      | 获取群子目录文件列表            |   ✅   |          |
| `get_group_file_url`             | 获取群文件资源链接              |   ✅   |          |
| `upload_private_file`            | 上传私聊文件                    |   ✅   |          |
| `download_file`                  | 下载文件到缓存目录              |   ✅   |          |
| `check_url_safely`               | 检查链接安全性                  |   ✅   |          |
| `.handle_quick_operation`        | 对事件执行快速操作 ( 隐藏 API ) |   ✅   |          |

## napcat API

| Api                            | 介绍                 | 可用  | 备注    |
| ------------------------------ | -------------------- | :---: | ------- |
| `set_group_sign`               | 群签到               |   ✅   |        |
| `ArkSharePeer`                 | 推荐联系人/群聊      |   ✅   |         |
| `ArkShareGroup`                | 推荐群聊             |   ✅   |         |
| `get_robot_uin_range`          | 获取机器人QQ号区间   |   ✅   |         |
| `set_online_status`            | 设置在线状态         |   ✅   |         |
| `get_friends_with_category`    | 获取好友分类列表     |   ✅   |         |
| `set_qq_avatar`                | 设置头像             |   ✅   |         |
| `get_file`                     | 获取文件信息         |   ✅   |         |
| `forward_friend_single_msg`    | 转发单条信息到私聊   |   ✅   |         |
| `forward_group_single_msg`     | 转发单条信息到群聊   |   ✅   |         |
| `translate_en2zh`              | 英译中翻译           |   ✅   |         |
| `set_msg_emoji_like`           | 设置消息的表情回复   |   ✅   |         |
| `send_forward_msg`             | 发送合并转发         |   ✅   |         |
| `mark_private_msg_as_read`     | 标记私聊信息已读     |   ✅   |         |
| `mark_group_msg_as_read`       | 标记群聊信息已读     |   ✅   |         |
| `get_friend_msg_history`       | 获取私聊记录         |   ✅   |         |
| `create_collection`            | 创建文本收藏         |   ✅   |         |
| `get_collection_list`          | 获取收藏列表         |   ✅   |         |
| `set_self_longnick`            | 设置个人签名         |   ✅   |         |
| `get_recent_contact`           | 获取最近的聊天记录   |   ✅   |         |
| `_mark_all_as_read`            | 标记所有为已读       |   ✅   |         |
| `get_profile_like`             | 获取自身点赞列表     |   ✅   |         |
| `fetch_custom_face`            | 获取收藏表情         |   ✅   |         |
| `fetch_emoji_like`             | 拉取表情回应列表     |   ✅   |         |
| `set_input_status`             | 设置输入状态         |   ✅   |         |
| `get_group_info_ex`            | 获取群组额外信息     |   ✅   |         |
| `get_group_ignore_add_request` | 获取群组忽略的通知   |   ✅   |         |
| `_del_group_notice`            | 删除群聊公告         |   ✅   |         |
| `fetch_user_profile_like`      | 获取用户个人资料页   |   ✅   |         |
| `friend_poke`                  | 私聊戳一戳           |   ✅   |         |
| `group_poke`                   | 群聊戳一戳           |   ✅   |         |
| `nc_get_packet_status`         | 获取PacketServer状态 |   ✅   |         |
| `nc_get_user_status`           | 获取陌生人在线状态   |   ✅   |         |
| `nc_get_rkey`                  | 获取Rkey             |   ✅   |         |
| `get_group_shut_list`          | 获取群聊被禁言用户   |   ✅   |           |
| `get_mini_app_ark`             | 签名小程序卡片        |   ✅   |  如B站分享卡片   |
| `get_ai_record`                | AI文字转语音         |   ✅    |         |
| `get_ai_characters`            | 获取AI语音角色列表   |   ✅    |         |
| `send_group_ai_record`         | 群聊发送AI语音      |   ✅    |         |
| `send_poke`                    | 群聊/私聊戳一戳      |   ✅    |         |