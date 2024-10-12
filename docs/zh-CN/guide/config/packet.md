# Packet配置连接
你需要先行下载PacketServer的软件 该软件当前仅在Win32支持 先行启动后 

再打开 NapCat 的 `config` 目录，找名为 `napcat_<你的QQ号>.json` 的文件，如 `napcat_1234567.json`,如果没有复制名为`napcat.json`默认文件,修改为`napcat_<你的QQ号>.json` 

打开后如下 
```json5
{
  // 是否开启文件日志
  "fileLog": true,
  // 是否开启控制台日志
  "consoleLog": true,
  // 日志等级, 可选值: debug, info, error
  "fileLogLevel": "debug",
  "consoleLogLevel": "info",
  "packetServer":"127.0.0.1:8086"
}
```

## 非常需要注意的
该技术受到版本严重影响 且需要先启动**PacketServer** 然后启动napcat 顺序注意

其次多开 需要使用不同端口避开