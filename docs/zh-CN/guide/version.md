# 版本更新记录
## V1.4.7
基于版本: [Windows 9.9.10-24108](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.10_240523_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

修复与优化
临时扩展 Api: GoCQHTTPUploadGroupFile folder_id字段 用于选择文件夹

## V1.4.6
基于版本: [Windows 9.9.10-24108](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.10_240523_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
1. 优化整体稳定性
:::

## V1.4.5
基于版本: [Windows 9.9.10-24108](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.10_240523_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
1. 紧急修复二维扫码问题
2. 修复部分OB11字段
3. 提高OB11API参数兼容性
:::

## V1.4.4
基于版本: [Windows 9.9.10-24108](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.10_240523_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
![](../../asset/img/logo.png)
:::

## V1.4.3
基于版本: [Windows 9.9.10-24108](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.10_240523_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
1. 修复名片通知
:::

## V1.4.2
基于版本: [Windows 9.9.10-24108](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.10_240523_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
1. 修复获取群文件列表Api
2. 修复退群通知问题
:::

## V1.4.1
基于版本: [Windows 9.9.10-24108](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.10_240523_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
1. 提高部分Api兼容性
2. 优化日志膨胀问题
3. 在线状态刷新问题修复
4. 支持非管理群 本地记录时间数据 (建议 备份配置 清空配置 重新配置)
5. 新增英译中接口 Api: /translate_en2zh
6. 新增群文件管理相关扩展接口 Api: /get_group_file_count /get_group_file_list /set_group_file_folder /del_group_file /del_group_file_folder
:::

## V1.4.0
基于版本: [Windows 9.9.10-24108](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.10_240523_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
1. 支持空间Cookies获取
2. 支持获取在线设备 API /get_online_clients
3. 支持图片OCR API： /.ocr_image /ocr_image
:::

## V1.3.9
基于版本: [Windows 9.9.10-23873](https://dldir1.qq.com/qqfile/qq/QQNT/13353519/QQ9.9.10.23873_x64.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
1. 修复QQ等级获取兼容性问题
:::

## V1.3.8
基于版本: [Windows 9.9.10-23873](https://dldir1.qq.com/qqfile/qq/QQNT/13353519/QQ9.9.10.23873_x64.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
修复与优化
1. 优化打包后体积问题
2. 修复QQ等级获取
3. 兼容 9.7.x 版本换行符 统一为 \n
4. 修复处理加群请求 字段异常情况
5. 修复退群通知问题
:::

## V1.3.6
基于版本: [Windows 9.9.9-23424](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.9_240507_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
1. 修复戳一戳多次上报问题
:::

## V1.3.5
基于版本: [Windows 9.9.9-23424](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.9_240507_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
1. 修复与优化
2. 优化启动脚本
3. 修复非管理时群成员减少事件上报 无法获取操作者与操作类型
4. 修复快速重启进程清理问题
5. 优化配置文件格式 支持自动更新配置 但仍然建议 备份配置
6. 修复正向反向ws多个客户端周期多次心跳问题
7. 支持戳一戳
8. 支持WebUi热重载
9. 新增启动输出WEBUI秘钥
10. 新增群荣誉信息 /get_group_honor_info
11. 支持获取群系统消息 /get_group_system_msg
:::

## V1.3.3
基于版本: [Windows 9.9.9-23424](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.9_240507_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
1. 尝试修复多开崩溃问题
2. 修复群列表更新问题
3. 修复兼容性问题支持Win7
4. 修复下载 http 资源缺少UA
5. 优化少量消息合并转发速度
6. 修复加载群通知时出现 getUserDetailInfo timeout 导致程序崩溃
7. 新增重启实现 包括重启快速登录/普通重启 副作用: 原进程 无法清理
:::

## V1.3.2
基于版本: [Windows 9.9.9-23424](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.9_240507_x64_01.exe) | [Linux 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
1. 再一次修复图片URL,重置Rkey获取机制,使用接口分发Rkey
2. 尝试修复启动时消息处理需要等待过长时间
3. 修复多图情况为同一张图片的问题
4. 新增扩展获取好友分类列表 Api： /get_friends_with_category
:::

## V1.3.0
基于版本: [Windows 9.9.9-23424](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.9_240507_x64_01.exe) | [Linux QQ 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
1. 修复了一个导致每个图片都自动下载的 bug
2. 再一次修复图片URL,支持 Win/Linux X64 获取Rkey，暂时不支持arm64
3. 修复了设置消息群聊与私聊已读接口
4. 修复无法获取进群申请人员信息
5. 再一次对获取Cookies与获取群成员优化，分别添加30/60/120分钟缓存
6. 新增 WebUi 支持远程配置设置 详细参考官方教程
7. 新增二维码过期自动刷新功能
:::

## V1.2.0
基于版本: [Windows QQ 9.9.9-23361](https://dldir1.qq.com/qqfile/qq/QQNT/5e09ff15/QQ9.9.9.23361_x64.exe) | [Linux QQ 3.2.7-23361](https://dldir1.qq.com/qqfile/qq/QQNT/8b4fdf81/linuxqq_3.2.7-23361_amd64.deb) 开发

::: details 更新日志
支持架构: x64 (完整支持) / arm64 (缺失图片Rkey功能)
1. 修复图片URL,支持 Win/Linux X64 获取Rkey - 新增 Module: Moehoo
2. 重构了商城表情URL拼接 - 重构 API/Event
3. 重构了Core服务调用部分 - 重构 SYS: Core
4. 适配最新版 Windows 9.9.9-23361 / Linux 3.2.7-23361 提升了兼容性 - 修复 SYS: Listener Proxy
5. 修复群成员加入时间 上次活跃 活跃等级字段 - 影响 API: /get_group_member_info /get_group_member_list
6. 修复视频所需的 ffmpeg 路径不正确导致视频封面和时长获取失败 - 影响 Event/API
7. 优化数据库对消息储存，消耗储存减少 - 影响 Sys: OneBot
8. 支持获取与设置群公告 - 新增 API： /_send_group_notice /_get_group_notice
9. 支持获取群精华消息 - 新增 API： /get_essence_msg_list
10. 支持了设置已读群/私聊消息接口 - 新增 API: /mark_private_msg_as_read /mark_group_msg_as_read
11. 支持了好友添加上报事件 - 新增 Event: AddFriend
12. 支持音乐卡片，需要配置签名服务器地址, `config/onebot11_<qq>.json`的`musicSignUrl`字段 - 新增 Feat: Sign Music
13. 支持wsHost和httpHost配置 - 新增 Config: New
14. 支持获取官方Bot账号范围 - 新增 API: /get_robot_uin_range
15. 支持设置自身在线状态 - 新增 API： /set_online_status
16. 支持表情回应api和上报 - 新增 Event/API
17. 支持获取Cookies 实现更加稳定 且支持Skey缓存3600S Pskey每次刷新 - 新增 API: /get_cookies
18. 支持 服务端踢下线 / 其它设备上线 / 重复登录 日志 - 新增 Sys: Log
:::

## V1.1.0
基于版本: [Windows QQ 9.9.9-22741](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.9_240403_x64_01.exe) | [Linux QQ 3.2.7-22741](https://dldir1.qq.com/qqfile/qq/QQNT/Linux/QQ_3.2.7_240403_amd64_01.deb)开发

::: details 更新日志
1. 正向 ws token 不生效
2. 检查更新失败导致程序崩溃
:::