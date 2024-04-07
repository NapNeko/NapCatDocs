# FAQ
## 常见问题
::: details 下载了插件但是没有看到在NTQQ中生效
检查是否下载的是插件release的版本，如果是源码的话需要自行编译。
依然不生效请查阅LiteLoaderQQNT的文档
::: 

::: details 调用接口报404
目前没有支持全部的onebot规范接口，请检查是否调用了不支持的接口
::: 

::: details 发送不了图片和语音
检查当前操作用户是否有LiteLoaderQQNT/data/LLOneBot的写入权限，
如Windows把QQ上安装到C盘有可能会出现无权限导致发送失败
::: 

::: details QQ变得很卡
这是你的群特别多导致的，因为启动后会批量获取群成员列表，获取完之后就正常了
::: 

::: details 如何使用CQ码
前往配置界面将消息上报类型格式更改从消息段为CQ码即可
::: 

::: details 无法发送语音或视频
需要在 LLOneBot 配置 ffmpeg 路径, [ffmpeg 下载地址](/zh-CN/guide/ffmpeg)
::: 