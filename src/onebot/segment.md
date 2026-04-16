# OneBot 11 消息段类型详解文档

## 概述

OneBot 11 协议定义了多种消息段类型，用于表示不同类型的消息内容。本文档详细介绍这些消息段的类型、数据结构及其用途，帮助开发者更好地理解和使用 OneBot 11 消息格式。

## 基本结构

每个 OneBot 11 消息段都遵循以下基本结构：

```typescript
interface OB11MessageData {
  type: OB11MessageDataType; // 消息段类型
  data: any;                // 根据类型不同，包含不同的数据字段
}
```

---

## 文本类消息段

### 1. 文本消息 (text)

用于发送纯文本内容。

**发送时字段**:
- `text`: 要发送的文本内容

**接收时字段**:
- `text`: 接收到的文本内容

```typescript
{
  type: "text",
  data: {
    text: string
  }
}
```

### 2. @提及 (at)

用于在消息中 @ 特定用户或全体成员。

**发送时字段**:
- `qq`: 要 @ 的 QQ 号，使用 "all" 表示 @全体成员

**接收时字段**:
- `qq`: 被 @ 的 QQ 号或 "all"

```typescript
{
  type: "at",
  data: {
    qq: string
  }
}
```

### 3. 回复 (reply)

用于回复特定消息。

**发送时字段**:
- `id`: 被回复消息的唯一 ID

**接收时字段**:
- `id`: 被回复消息的唯一 ID

```typescript
{
  type: "reply",
  data: {
    id: string
  }
}
```

---

## 表情类消息段

### 1. QQ 表情 (face)

用于发送QQ内置表情。

**发送时字段**:
- `id`: 表情 ID

**接收时字段**:
- `id`: 表情 ID
- `raw`: 表情原始数据
- `resultId`: 骰子或石头剪刀布结果 ID
- `chainCount`: 连续发送次数

```typescript
{
  type: "face",
  data: {
    id: string,
    raw?: any,
    resultId?: string,
    chainCount?: number
  }
}
```

### 2. 商城表情 (mface)

用于发送QQ商城表情。

**发送时字段**:
- `emoji_id`: 表情 ID
- `emoji_package_id`: 表情包 ID
- `key`: 表情 key
- `summary`: 表情名称

**接收时字段**:
- 通常转换为image类型，包含额外字段:
  - `key`: 表情 key
  - `emoji_id`: 表情 ID
  - `emoji_package_id`: 表情包 ID

```typescript
{
  type: "mface",
  data: {
    emoji_id: string,
    emoji_package_id: string,
    key?: string,
    summary?: string
  }
}
```

### 3. 骰子 (dice)

用于发送骰子表情。

**发送时字段**:
- 无需特定字段，系统会随机生成结果

**接收时字段**:
- `result`: 骰子点数结果(1-6)

```typescript
{
  type: "dice",
  data: {
    result: string
  }
}
```

### 4. 石头剪刀布 (rps)

用于发送石头剪刀布表情。

**发送时字段**:
- 无需特定字段，系统会随机生成结果

**接收时字段**:
- `result`: 石头剪刀布结果(1-3，分别代表石头、剪刀、布)

```typescript
{
  type: "rps",
  data: {
    result: string
  }
}
```

### 5. 戳一戳 (poke)

用于发送戳一戳消息。

**发送时字段**:
- `type`: 戳一戳类型
- `id`: 戳一戳 ID

**接收时字段**:
- `type`: 戳一戳类型
- `id`: 戳一戳 ID

```typescript
{
  type: "poke",
  data: {
    type: string,
    id: string
  }
}
```

---

## 多媒体类消息段

### 1. 图片消息 (image)

用于发送图片。

**发送时字段**:
- `file`: 图片文件路径、URL 或 Base64 编码
- `url`: 图片 URL(可选)
- `summary`: 图片描述(可选)
- `sub_type`: 图片子类型(可选)

**接收时字段**:
- `file`: 图片文件名
- `url`: 图片在线 URL
- `summary`: 图片描述
- `sub_type`: 图片子类型
- `file_size`: 文件大小(字节)
- 如果是商城表情转换而来，还会包含：
  - `key`: 表情 key
  - `emoji_id`: 表情 ID
  - `emoji_package_id`: 表情包 ID

```typescript
{
  type: "image",
  data: {
    file: string,
    url?: string,
    summary?: string,
    sub_type?: number,
    file_size?: number,
    key?: string,
    emoji_id?: string,
    emoji_package_id?: string
  }
}
```

### 2. 语音 (record)

用于发送语音消息。

**发送时字段**:
- `file`: 语音文件路径、URL 或 Base64 编码

**接收时字段**:
- `file`: 语音文件标识
- `file_size`: 文件大小(字节)
- `path`: 文件路径

```typescript
{
  type: "record",
  data: {
    file: string,
    file_size?: number,
    path?: string
  }
}
```

### 3. 视频 (video)

用于发送视频。

**发送时字段**:
- `file`: 视频文件路径、URL 或 Base64 编码
- `thumb`: 视频缩略图(可选)

**接收时字段**:
- `file`: 视频文件标识
- `url`: 视频在线 URL
- `file_size`: 文件大小(字节)

```typescript
{
  type: "video",
  data: {
    file: string,
    url?: string,
    file_size?: number,
    thumb?: string
  }
}
```

### 4. 文件 (file)

用于发送文件。

**发送时字段**:
- `file`: 文件路径、URL 或 Base64 编码
- `name`: 文件名(可选)

**接收时字段**:
- `file`: 文件名
- `file_id`: 文件 ID
- `file_size`: 文件大小(字节)

```typescript
{
  type: "file",
  data: {
    file: string,
    file_id?: string,
    file_size?: number
  }
}
```

---

## 富媒体类消息段

### 1. JSON消息 (json)

用于发送JSON格式的卡片消息。

**发送时字段**:
- `data`: JSON 字符串或对象

**接收时字段**:
- `data`: JSON 数据

```typescript
{
  type: "json",
  data: {
    data: string | object
  }
}
```

### 2. 音乐分享 (music)

用于分享音乐，**仅支持发送，接收时会转换为 json 类型**。

**发送时字段**:
- `type`: 音乐平台(`qq`、`163`、`kugou`、`kuwo`、`migu`、`custom`)
- `id`: 音乐 ID(平台非 custom 时必填)
- `url`: 音乐链接(custom 时必填)
- `image`: 封面图片(custom 时必填)
- `singer`: 歌手(可选)
- `title`: 标题(可选)
- `content`: 内容描述(可选)

```typescript
{
  type: "music",
  data: {
    type: string,
    id?: string,
    url?: string,
    image?: string,
    singer?: string,
    title?: string,
    content?: string
  }
}
```

### 3. 转发消息 (forward)

用于发送合并转发消息。

**发送时字段**:
- `id`: 转发消息ID

**接收时字段**:
- `id`: 转发消息 ID
- `content`: 转发的消息内容列表(仅当解析转发内容时)

```typescript
{
  type: "forward",
  data: {
    id: string,
    content?: OB11Message[]
  }
}
```

---

## 消息段组合演示

多个消息段可以组合成一个完整的消息，按顺序依次发送。例如：

```typescript
const message: OB11MessageData[] = [
  {
    type: "at",
    data: { qq: "12345678" }
  },
  {
    type: "text",
    data: { text: "你好，这是一条带图片和语音的消息。" }
  },
  {
    type: "image",
    data: { file: "https://example.com/image.jpg", summary: "示例图片" }
  }
];
```

每个元素为一个消息段，最终会被依次拼接发送，效果为：@某人 + 文本 + 图片 + 语音。

---