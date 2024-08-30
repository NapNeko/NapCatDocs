# Event Reporting Support

| Event Type                   | Available |                  Note                  |
| ---------------------------- | :-------: | :------------------------------------: |
| Message                      |     ✅     |                                        |
| Reaction                     |     ✅     |                                        |
| Friend Message Recall        |     ✅     |                                        |
| Group Message Recall         |     ✅     |                                        |
| Friend Request               |     ✅     |                                        |
| Group Invite Request         |     ✅     |                                        |
| Group Join Request           |     ✅     |       Requires admin permissions       |
| Management Change            |     ✅     |       Requires admin permissions       |
| Group Member Addition        |     ✅     |                                        |
| Group Member Removal         |     ✅     |                                        |
| Group File Upload            |     ✅     |                                        |
| Group Mute                   |     ✅     |                                        |
| Group Member Nickname Change |     ✅     |                                        |
| Group Member Title Change    |     ✅     |                                        |
| Poke in Group                |     ✅     | ID not available will be reported as 0 |
| Poke a Friend                |     ✅     |                                        |
| Group Red Packet Luck King   |     ❌     |                                        |
| Group Member Honor Change    |     ❌     |                                        |
| Lifecycle                    |     ✅     |  Currently only ws connect available   |
| ws Heartbeat                 |     ✅     |                                        |

## Reaction Reporting

```json5
{
    "time": 1714491493,
    "self_id": 123456,
    "post_type": "notice",
    "group_id": 12312312,
    "user_id": 1231312,
    "notice_type": "group_msg_emoji_like",
    "message_id": -2147476175,
    "likes": [
        {
            "emoji_id": "76",
            "count": 1
        }
    ]
}
```

Refer to [EmojiType](https://bot.q.qq.com/wiki/develop/api-v2/openapi/emoji/model.html#EmojiType) for emoji_id reference.

## Reaction Sending

Refer to [Extended API](./extends_api.md)
