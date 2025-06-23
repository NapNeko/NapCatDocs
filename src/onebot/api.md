# NapCatQQ API 接口文档

以下仅仅是 API 接口列表 一览

详细 NapCatQQ All API 用例参考 <https://napcat.apifox.cn>

## 账号相关

| 接口字符串 | 功能 | 参数 |
|-------|------|------|
| `get_login_info` | 获取登录信息 | 无参数 |
| `get_status` | 获取在线状态 | 无参数 |
| `get_version_info` | 获取版本信息 | 无参数 |
| `bot_exit` | 退出机器人 | 无参数 |
| `clean_cache` | 清除缓存 | 无参数 |
| `set_self_longnick` | 设置个性签名 | `longNick: string` |
| `set_input_status` | 设置输入状态 | `user_id: number/string`, `event_type: number` |
| `set_diy_online_status` | 设置自定义在线状态 | `face_id: number/string`, `face_type: number/string`, `wording: string` |
| `set_online_status` | 设置在线状态 | 根据状态码设置不同的在线状态 |
| `set_qq_profile` | 设置 QQ 资料 | 个人资料相关参数 |
| `set_qq_avatar` | 设置 QQ 头像 | 头像相关参数 |
| `get_clientkey` | 获取客户端密钥 | 无参数 |

## 好友相关

| 接口字符串 | 功能 | 参数 |
|-------|------|------|
| `get_friend_list` | 获取好友列表 | 可选 `no_cache: boolean/string` |
| `get_friends_with_category` | 获取分类好友列表 | 无参数 |
| `send_private_msg` | 发送私聊消息 | `user_id: number/string`, `message: string/array`, 其他可选参数 |
| `delete_msg` | 撤回消息 | `message_id: number/string` |
| `get_msg` | 获取消息 | `message_id: number/string` |
| `send_like` | 发送好友点赞 | `user_id: number/string`, `times: number/string` |
| `set_friend_add_request` | 处理好友添加请求 | `flag: string/number`, `approve: boolean/string`, `remark: string` |
| `set_friend_remark` | 设置好友备注 | `user_id: number/string`, `remark: string` |
| `delete_friend` | 删除好友 | `user_id: number/string` |
| `get_unidirectional_friend_list` | 获取单向好友列表 | 无参数 |
| `friend_poke` | 好友戳一戳 | `user_id: number/string` |
| `mark_private_msg_as_read` | 标记私聊消息为已读 | `user_id: number/string`, `time: number` |
| `get_friend_msg_history` | 获取私聊消息历史 | `user_id: number/string`, `count: number` |
| `forward_friend_single_msg` | 转发单条好友消息 | `user_id: number/string`, `message_id: string` |
| `get_profile_like` | 获取个人资料点赞信息 | 无参数 |
| `fetch_emoji_like` | 获取表情点赞信息 | 无参数 |
| `nc_get_user_status` | 获取用户状态 | `user_id: number/string` |

## 群相关

| 接口字符串 | 功能 | 参数 |
|-------|------|------|
| `get_group_list` | 获取群列表 | 可选 `no_cache: boolean/string` |
| `get_group_info` | 获取群信息 | `group_id: number/string`, 可选 `no_cache: boolean/string` |
| `get_group_info_ex` | 获取群扩展信息 | `group_id: number/string` |
| `send_group_msg` | 发送群消息 | `group_id: number/string`, `message: string/array`, 其他可选参数 |
| `set_group_add_request` | 处理群添加请求 | `flag: string/number`, `approve: boolean/string`, `reason: string` |
| `set_group_kick` | 踢出群成员 | `group_id: number/string`, `user_id: number/string`, `reject_add_request: boolean/string` |
| `set_group_ban` | 设置群禁言 | `group_id: number/string`, `user_id: number/string`, `duration: number/string` |
| `set_group_whole_ban` | 设置全员禁言 | `group_id: number/string`, `enable: boolean/string` |
| `set_group_admin` | 设置群管理员 | `group_id: number/string`, `user_id: number/string`, `enable: boolean/string` |
| `set_group_card` | 设置群名片 | `group_id: number/string`, `user_id: number/string`, `card: string` |
| `set_group_name` | 设置群名称 | `group_id: number/string`, `group_name: string` |
| `set_group_leave` | 退出群聊 | `group_id: number/string`, `is_dismiss: boolean/string`(仅群主可用) |
| `set_group_special_title` | 设置专属头衔 | `group_id: number/string`, `user_id: number/string`, `special_title: string` |
| `get_group_member_info` | 获取群成员信息 | `group_id: number/string`, `user_id: number/string`, 可选 `no_cache: boolean/string` |
| `get_group_member_list` | 获取群成员列表 | `group_id: number/string`, 可选 `no_cache: boolean/string` |
| `get_group_honor_info` | 获取群荣誉信息 | `group_id: number/string`, 可选 `type: string` |
| `get_essence_msg_list` | 获取精华消息 | `group_id: number/string` |
| `set_essence_msg` | 设置精华消息 | `message_id: number/string` |
| `delete_essence_msg` | 删除精华消息 | `message_id: number/string` |
| `group_poke` | 群内戳一戳 | `group_id: number/string`, `user_id: number/string` |
| `mark_group_msg_as_read` | 标记群消息已读 | `group_id: number/string`, `time: number` |
| `forward_group_single_msg` | 转发单条群消息 | `group_id: number/string`, `message_id: string` |
| `set_group_portrait` | 设置群头像 | `group_id: number/string`, `file: string`, `cache: number` |
| `_send_group_notice` | 发送群公告 | `group_id: number/string`, `content: string`, 其他可选参数 |
| `_get_group_notice` | 获取群公告 | `group_id: number/string` |
| `_del_group_notice` | 删除群公告 | `group_id: number/string`, `notice_id: string` |
| `get_group_at_all_remain` | 获取@全体成员剩余次数 | `group_id: number/string` |
| `get_group_ignore_add_request` | 获取群添加请求忽略列表 | 无参数 |
| `get_group_ignored_notifies` | 获取群通知忽略列表 | 无参数 |
| `get_group_system_msg` | 获取群系统消息 | 无参数 |
| `get_group_shut_list` | 获取群禁言列表 | `group_id: number/string` |
| `set_group_remark` | 设置群备注 | `group_id: number/string`, `remark: string` |
| `set_group_sign` | 设置群签到 | `group_id: number/string` |
| `send_group_sign` | 发送群签到 | `group_id: number/string` |

## 消息相关

| 接口字符串 | 功能 | 参数 |
|-------|------|------|
| `send_msg` | 发送消息 | `message_type: string`, `user_id/group_id: number/string`, `message: string/array` |
| `get_record` | 获取语音 | `file: string`, 可选 `out_format: string` |
| `get_image` | 获取图片 | `file: string` |
| `can_send_image` | 检查是否能发送图片 | 无参数 |
| `can_send_record` | 检查是否能发送语音 | 无参数 |
| `get_file` | 获取文件 | `file: string`, `type: string` |
| `_mark_all_as_read` | 标记所有消息为已读 | 无参数 |
| `ocr_image` | 图片 OCR 识别(标准) | `image: string` |
| `.ocr_image` | 图片 OCR 识别(增强) | `image: string` |
| `get_recent_contact` | 获取最近联系人 | `count: number/string` |
| `send_poke` | 发送戳一戳 | 根据不同上下文需要不同参数 |
| `get_forward_msg` | 获取合并转发消息 | `message_id: string` |
| `mark_msg_as_read` | 标记消息已读 | 消息相关参数 |

## 文件相关

| 接口字符串 | 功能 | 参数 |
|-------|------|------|
| `upload_group_file` | 上传群文件 | `group_id: number/string`, `file: string`, `name: string`, 可选 `folder: string` |
| `delete_group_file` | 删除群文件 | `group_id: number/string`, `file_id: string`, `busid: number` |
| `create_group_file_folder` | 创建群文件文件夹 | `group_id: number/string`, `name: string` |
| `delete_group_folder` | 删除群文件文件夹 | `group_id: number/string`, `folder_id: string` |
| `get_group_file_system_info` | 获取群文件系统信息 | `group_id: number/string` |
| `get_group_root_files` | 获取群根目录文件列表 | `group_id: number/string` |
| `get_group_files_by_folder` | 获取群子目录文件列表 | `group_id: number/string`, `folder_id: string` |
| `get_group_file_url` | 获取群文件链接 | `group_id: number/string`, `file_id: string`, `busid: number` |
| `move_group_file` | 移动群文件 | `group_id: number/string`, `file_id: string`, `target_dir: string` |
| `trans_group_file` | 转发群文件 | `group_id: number/string`, `file_id: string`, `target_group_id: number/string` |
| `rename_group_file` | 重命名群文件 | `group_id: number/string`, `file_id: string`, `current_parent_directory: string`, `new_name: string` |
| `upload_private_file` | 上传私聊文件 | `user_id: number/string`, `file: string`, `name: string` |
| `get_private_file_url` | 获取私聊文件 URL | 文件相关参数 |
| `download_file` | 下载文件 | `url: string`, `thread_count: number`, `headers: string[]` |

## AI 相关

| 接口字符串 | 功能 | 参数 |
|-------|------|------|
| `get_ai_characters` | 获取 AI 角色列表 | 无参数 |
| `get_ai_record` | 获取 AI 语音 | `character: string`, `group_id: number/string`, `text: string` |
| `send_group_ai_record` | 发送群 AI 语音 | `character: string`, `group_id: number/string`, `text: string` |

## 转发与分享

| 接口字符串 | 功能 | 参数 |
|-------|------|------|
| `send_group_forward_msg` | 发送合并转发(群) | `group_id: number/string`, `messages: array` |
| `send_private_forward_msg` | 发送合并转发(私聊) | `user_id: number/string`, `messages: array` |
| `send_forward_msg` | 发送合并转发 | `messages: array` |
| `ArkSharePeer` | 分享联系人 | 用户相关参数 |
| `ArkShareGroup` | 分享群 | 群相关参数 |
| `get_mini_app_ark` | 获取小程序卡片 | 小程序相关参数 |

## 其他功能

| 接口字符串 | 功能 | 参数 |
|-------|------|------|
| `get_cookies` | 获取 Cookies | 可选 `domain: string` |
| `get_csrf_token` | 获取 CSRF Token | 无参数 |
| `get_credentials` | 获取凭证信息 | 可选 `domain: string` |
| `get_doubt_friends_add_request` | 获取可疑好友添加请求 | 无参数 |
| `set_doubt_friends_add_request` | 设置可疑好友添加请求 | 请求相关参数 |
| `get_stranger_info` | 获取陌生人信息 | `user_id: number/string`, 可选 `no_cache: boolean` |
| `get_rkey` | 获取 Rkey | 无参数 |
| `click_inline_keyboard_button` | 点击内联键盘按钮 | `group_id: number/string`, `bot_appid: string`, `button_id: string`, `callback_data: string`, `msg_seq: string` |
| `translate_en2zh` | 英文翻译成中文 | `text: string` |
| `create_collection` | 创建收藏 | 收藏相关参数 |
| `get_collection_list` | 获取收藏列表 | 无参数 |
| `fetch_custom_face` | 获取自定义表情 | 表情相关参数 |
| `nc_get_packet_status` | 获取数据包状态 | 无参数 |
| `get_robot_uin_range` | 获取机器人 UIN 范围 | 无参数 |
| `get_guild_list` | 获取频道列表 | 无参数 |
| `get_guild_service_profile` | 获取频道资料 | 无参数 |
| `_get_model_show` | 获取模型展示 | 无参数 |
| `_set_model_show` | 设置模型展示 | 无参数 |
| `get_group_msg_history` | 获取群消息历史 | `group_id: number/string`, `count: number` |
| `check_url_safely` | 检查 URL 安全性 | `url: string` |
| `.get_word_slices` | 获取词语切片 | `content: string` |
| `.handle_quick_operation` | 处理快速操作 | `context: object`, `operation: object` |
| `send_packet` | 发送数据包 | 数据包相关参数 |
| `set_msg_emoji_like` | 设置消息表情点赞 | 消息和表情相关参数 |
| `get_online_clients` | 获取在线客户端列表 | 无参数 |
| `unknown` | 未知操作 | 未知参数 |