# NapCat 资源与消息 ID 设计说明

NapCat 由于无数据库设计，采用了 LRU（最近最少使用）缓存机制来管理消息和文件资源。消息的 ID 并非连续数字，而是基于哈希算法生成的完全正整数。每条消息的 ID 都是唯一的，且在大约 5000 条消息后会因 LRU 策略而过期并被清理。文件（file）标识的生成同样受 LRU 缓存机制管理。

> ⚠️ 由于 NapCat 不存储历史数据，**已撤回的消息无法被再次获取或恢复**，请注意消息的时效性。

## NapCat 资源 URL 参数类型

NapCat 支持多种资源 URL 规范，便于灵活引用和传递文件资源。主要支持以下几种格式：

- **base64**
  以 `base64://` 协议开头，内容为 base64 编码的文件数据。  
  例如：  
  `base64://iVBORw0KGgoAAAANSUhEUgAA...`

- **path**  
  本地文件路径，适用于本地资源访问。  
  例如：  
  `C:/Users/xxx/Pictures/image.png`

- **fileurl**  
  NapCat 规范的文件 URL，通常用于内部文件标识。  
  例如：  
  `file://1234567890`  
  其中 `1234567890` 为 NapCat 生成的文件哈希 ID。

- **http/https**  
  标准的网络资源 URL。  
  例如：  
  `https://example.com/image.png`

- **dataurl-base64**  
  以 `data:` 协议开头，内容为 base64 编码的文件数据。  
  例如：  
  `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...`

---

通过上述设计，NapCat 能够高效地管理消息和文件资源，既保证了唯一性和安全性，又兼顾了资源的灵活访问与过期清理。