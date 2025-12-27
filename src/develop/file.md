# NapCat 文件处理框架指南

> **重要提示：** 从 v4.8.115+ 开始，NapCat 引入了新的 Stream API 方案，推荐用于大文件传输和跨设备部署。

## 🚀 Stream API (推荐方案)

**适用版本：** v4.8.115+

### 核心概念

Stream API 提供了三种类型的接口，专门用于处理大文件传输和跨设备部署场景：

| API 类型 | 描述 | 使用场景 |
|---------|------|---------|
| **Normal** | 普通接口，兼容 OneBot 标准 | 日常操作，无切片传输 |
| **Download** | 下载流接口 | 大文件下载，流式传输 |
| **Upload** | 上传流接口 | 大文件上传，流式传输 |

### API 列表

#### Normal 类型
- `clean_stream_temp_file` - 清理临时文件

#### Download 类型
- `test_download_stream` - 测试下载流
- `download_file_stream` - 文件下载流

#### Upload 类型
- `upload_file_stream` - 文件上传流

> ⚠️ **注意：** Upload/Download 组 API 的 action name 必须以 `stream` 结尾

#### 示例代码
```python
# Python 调用 upload_file_stream 示例
# 详见：https://github.com/NapNeko/NapCatQQ/blob/main/packages/napcat-onebot/action/stream/test_upload_stream.py
```
[upload_file_stream](https://github.com/NapNeko/NapCatQQ/blob/main/packages/napcat-onebot/action/stream/test_upload_stream.py)


### 响应格式

Stream API 使用特殊的响应格式来处理流式传输：

#### 流传输状态标识

| 状态 | type 字段 | 描述 |
|------|-----------|------|
| 传输中 | `stream` | 数据块传输 |
| 传输完成 | `response`  | 流传输成功结束 |
| 传输失败 | `error`  | 流传输异常结束 |

| 状态 | stream 字段 | 描述 |
|------|-----------|------|
| 普通接口 | `normal-action` | 标准OneBot接口 |
| 流式接口 | `stream-action`  | 新的流式传输接口 |

#### 响应示例

**数据传输中：**
```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "type": "stream",
    "data": "Index-> 1",
    "data_type": "data_chunk"
  },
  "message": "",
  "wording": "",
  "echo": "c5dc7stum6g",
  "stream": "stream-action"
}
```

**传输完成：**
```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "type": "response",
    "data_type": "data_complete",
    "data": "Stream transmission complete"
  },
  "message": "",
  "wording": "",
  "echo": "c5dc7stum6g",
  "stream": "stream-action"
}
```

**传输失败：**
```json
{
  "status": "failed",
  "retcode": 200,
  "data": {
    "type": "error",
    "data_type": "error"
  },
  "message": "This is a test error",
  "wording": "This is a test error",
  "echo": "ei2vqkdb6cb",
  "stream": "stream-action"
}
```

### 优势与适用场景

- **大文件传输**：适用于需要传输大于 100MB 的文件，避免内存溢出。
- **跨设备部署**：适用于 NapCat 与 QQ 客户端不在同一台机器的场景。
---

## 旧文档
### 发送文件：
至少启动一个 HTTP 端口（可以和 WebSocket 服务端复用端口），并采用此端口在需要文件时通过 URL 传递文件。

### 接收文件：
- 大部分文件提供了 URL 上报
- 没有 URL 时应该通过 get_file 获取本地文件
- 注意：音频给出的 URL 是 raw silk 格式未处理
- 非视频 图片 音频的普通文件的链接下载次数影响，可通过下面接口再次获取直链

## 通常方法获取直链和文件下载

### 获取文件直链 (Raw)
通过以下端点获取文件直链：

- **群聊文件**：`/get_group_file_url`
  - 参数：
    ```
    file_id     字符串   必须
    group       字符串   必须
    ```

- **私聊文件**：`/get_private_file_url`
  - 参数：
    ```
    file_id     字符串   必须
    ```

### 下载到本地或者输出base64 (Raw)
通过以下端点获取文件：

- **文件下载**：`/get_file`
  - 参数：
    ```
    file_id     字符串   可选（file_id 或 file 任意一个用于标记文件获取）
    file        字符串   可选（file_id 或 file 任意一个用于标记唯一文件获取）
    ```

## File: 音频文件的处理

### 重点问题
在接收音频时，NapCat 通常需要将音视频文件以本地文件的形式传递，无法直接提供 URL。这是因为：

- NTQQ 内部只能调用下载接口到本地，不能获取 URL（NapCat 虽然有能力获取，但存在新问题）
- 腾讯的音频文件为 silk 格式，必须使用 silk 和本地 ffmpeg 转码才能通用
- 在发送时也需要 silk 进行编码

### NapCat设计
- **接收时**：接口请求后，NapCat 下载到本地，可选内置 silk/ffmpeg 进行转码，提供给外部 mp3 等通用格式
- **发送时**：接口请求后，NapCat 下载到本地，内置 silk/ffmpeg 进行转码 silk 后并进行发送

### 如何获取音频文件
通过以下端点获取音频文件：

- **音频文件获取**：`/get_record`
  - 参数：
    ```
    file_id     字符串   可选（file_id 或 file 任意一个用于标记文件获取）
    file        字符串   可选（file_id 或 file 任意一个用于标记唯一文件获取）
    out_format  字符串   可选（mp3, amr, wma, m4a, spx, ogg, wav, flac）
    ```

### 如何发送音频文件
通过通常的方法发送音频文件，无需特别注意。

## File: 视频文件的处理

### 提示
视频文件最大 100MB，超过此大小请通过群文件方式发送。

## File: 图片文件的处理

### 提示
图片的链接具有约 2 小时的过期时间，当过期后会提示 `url expired`。

此时可以调用 `nc_get_rkey` 获取新 rkey 替换 rkey 使用，或者通过 `get_image`、`get_file`、`get_msg` 刷新获取新的 URL。
