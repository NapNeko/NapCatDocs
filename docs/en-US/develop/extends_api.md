# Extended API

::: details Customizing File Name When Sending Files

Supports parameter `name` when sending files to customize the displayed file name.

```json
{
    "type": "file",
    "data": {
        "file": "file:///D:/1.txt",
        "name": "Custom_Displayed_File_Name.txt"
    }
}
```

:::

::: details Customizing Image Preview Text When Sending Images

Supports parameter `summary` when sending images to customize the displayed preview text.

```json
{
  "group_id": 123456,
  "message": [
    {
      "type": "image",
      "data": {
        "file": "file://D:/1.jpg",
        "summary": "Meow Meow Meow"
      }
    }
  ]
}
```

:::

::: details /set_qq_avatar Set Avatar

Not supported at the moment.

```json
{
  "file": "file://D:/1.jpg"
}
```

:::

::: details /get_ignored_group_joining_request Get Filtered Group Joining Requests

Not supported at the moment.

```json
{
  "status": "ok",
  "retcode": 0,
  "data": [
    {
      "group_id": 123122,
      "user_id": 123123,
      "flag": "1710117534729787"
    }
  ],
  "message": "",
  "wording": ""
}
```

:::

::: details message_sent Event's target_id

In addition to go-cq, there is an extra field `target_id` indicating the target QQ number or group number for sending.

:::

::: details /get_file Download Received Group or Private Chat Files

Returns file details including absolute path, file name, file size, and base64 encoding.

```json
{
  "file_id": "/xxxxx-xxxxx"
}
```

:::

::: details /download_file Download File

Same usage as gocq, but supports `base64` parameter for directly downloading base64 encoded files.

::: tip This API is not suitable for downloading group or private chat files.
:::

::: details /forward_friend_single_msg Forward a Single Message to a Friend

```json
{
  "user_id": 123456,
  "message_id": 123456
}
```

:::

::: details /forward_group_single_msg Forward a Single Message to a Group

```json
{
  "group_id": 123456,
  "message_id": 123456
}
```

:::

::: details /set_msg_emoji_like Send Reaction

Refer to EmojiType for emoji_id reference.

```json
{
    "message_id": "-2147480026",
    "emoji_id": "32"
}
```

:::

::: details /mark_private_msg_as_read Mark Private Chat Messages as Read

```json
{
  "user_id": 123456
}
```

:::

::: details /mark_group_msg_as_read Mark Group Chat Messages as Read

```json
{
  "group_id": 123456
}
```

:::

::: details /get_robot_uin_range Get Official Bot QQ Number Range

No parameters required.

:::

::: details set_online_status Set Own Online Status

[Currently available statuses](./status_list.md)

:::

::: details get_friends_with_category Get Friend Category List

No parameters required.

:::

::: details Group File Related APIs

``` text
get_group_file_count {group_id}
get_group_file_list {group_id}
set_group_file_folder {group_id}
del_group_file {group_id,file_id}
del_group_file_folder {group_id,folder_id}
```

:::

::: details translate_en2zh English to Chinese Translation Interface

```json
{
  "words": "hello"
}
```
