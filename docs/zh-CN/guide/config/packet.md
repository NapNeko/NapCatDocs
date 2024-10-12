# Packet配置连接
你需要先行下载PacketServer的软件 该软件当前支持Linux x64/arm64 和Win32 先行启动后 会再当前目录生成config.json 可以设置端口 再次重启生效

再打开 NapCat 的 `config` 目录，找名为 `napcat_<你的QQ号>.json` 的文件，如 `napcat_1234567.json`,如果没有复制名为`napcat.json`默认文件,修改为`napcat_<你的QQ号>.json` 

打开后如下 
```json5
{
  "fileLog": true,
  "consoleLog": true,
  "fileLogLevel": "debug",
  "consoleLogLevel": "info",
  "packetServer":"127.0.0.1:8086"
}
```
packetServer 填写 `127.0.0.1:8086`(具体可见PacketServer显示的地址 IP:端口)

填写后 **确保napcat在PacketServer启动后再启动** 登录 输入账号即可

## 非常需要注意的
该技术受到版本严重影响 且需要先启动**PacketServer** 然后启动napcat 顺序注意

其次多开 需要使用不同端口避开

## 当前支持版本
- [x] Windows 28418
- [x] Windows 28498
- [x] Linux 28498

## 扩展进度
- [x] 设置群头衔
- [x] 发送群poke
- [x] 独立rkey获取
- [x] 陌生人状态获取
- [ ] 伪造合并转发
- [ ] 文件直链获取
- [ ] markdown
