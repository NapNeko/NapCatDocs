# API List

NapCatQQ implements most of the [OneBot 11](https://11.onebot.dev/) and [go-cqhttp](https://docs.go-cqhttp.org/api) APIs. For detailed API explanations, please refer to the respective links.

## Connection Support

| Connection Method      | Available |
| ---------------------- | :-------: |
| HTTP Interface Call    |     ✔     |
| HTTP POST Event Push   |     ✔     |
| HTTP POST Quick Action |     ✔     |
| Forward WS Connection  |     ✔     |
| Reverse WS Connection  |     ✔     |

## API Support

::: details OneBot 11 API

| Function                       | API                     | Available | Remarks                        |
| ------------------------------ | ----------------------- | :-------: | ------------------------------ |
| Get bot account info           | get_login_info          |     ✔     |                                |
| Send message                   | send_msg                |     ✔     |                                |
| Send group message             | send_group_msg          |     ✔     |                                |
| Send private message           | send_private_msg        |     ✔     | Does not support temp messages |
| Get message details            | get_msg                 |     ✔     |                                |
| Recall message                 | delete_msg              |     ✔     |                                |
| Like                           | send_like               |     ✔     | Supports liking group members  |
| Get friend list                | get_friend_list         |     ✔     |                                |
| Handle friend requests         | set_friend_add_request  |     ✔     |                                |
| Get group list                 | get_group_list          |     ✔     |                                |
| Get group info                 | get_group_info          |     ✔     |                                |
| Get group member list          | get_group_member_list   |     ✔     |                                |
| Get group member info          | get_group_member_info   |     ✔     |                                |
| Get group honor info           | get_group_honor_info    |     ✔     |                                |
| Set group exclusive title      | set_group_special_title |     ❌     |                                |
| Group anonymous ban            | set_group_anonymous_ban |     ❌     |                                |
| Toggle group anonymity         | set_group_anonymous     |     ❌     |                                |
| Handle group join requests     | set_group_add_request   |     ✔     |                                |
| Leave group                    | set_group_leave         |     ✔     |                                |
| Kick group members             | set_group_kick          |     ✔     |                                |
| Group mute                     | set_group_ban           |     ✔     |                                |
| Group mute all                 | set_group_whole_ban     |     ✔     |                                |
| Set administrator              | set_group_admin         |     ✔     |                                |
| Set group card                 | set_group_card          |     ✔     |                                |
| Set group name                 | set_group_name          |     ✔     |                                |
| Get stranger info              | get_stranger_info       |     ✔     | Can only get group member info |
| Get version info               | get_version_info        |     ✔     |                                |
| Get status                     | get_status              |     ✔     |                                |
| Check if can send image        | can_send_image          |     ✔     |                                |
| Check if can send record       | can_send_record         |     ✔     |                                |
| Get image details              | get_image               |     ✔     |                                |
| Get record file                | get_record              |     ✔     |                                |
| Get file details               | get_file                |     ✔     |                                |
| Get Cookies                    | get_cookies             |     ✔     |                                |
| Get CSRF Token                 | get_csrf_token          |     ❌     |                                |
| Get QQ-related API credentials | get_credentials         |     ❌     |                                |
| Restart OneBot implementation  | set_restart             |     ✔     |                                |
| Clean cache                    | clean_cache             |     ✔     |                                |

:::

::: details go-cqhttp API

| API                      | Available |
| ------------------------ | :-------: |
| send_forward_msg         |     ✔     |
| send_private_forward_msg |     ✔     |
| send_group_forward_msg   |     ✔     |
| get_forward_msg          |     ✔     |
| upload_group_file        |     ✔     |
| download_file            |     ✔     |
| _get_group_notice        |     ✔     |
| get_essence_msg_list     |     ✔     |
| _send_group_notice       |     ✔     |
| _get_group_notice        |     ✔     |
| get_group_system_msg     |     ✔     |
| ocr_image                |     ✔     |
| get_online_clients       |     ✔     |

:::
