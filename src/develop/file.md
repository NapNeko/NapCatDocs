# NapCat对于文件的处理和上游限制

## Docker与框架分离部署方案注意事项
文件系统存在隔离，需要对部分需要读取本地文件系统的方式进行支持性优化。

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
    file_id     字符串   可选 file_id 或 file 任意一个用于标记文件获取
    file        字符串   可选 file_id 或 file 任意一个用于标记唯一文件获取
    ```

## File: 音频文件的处理

### 重点问题
在接收音频时，NapCat 通常需要将音视频文件以本地文件的形式传递，无法直接提供 URL。这是因为：

- NTQQ 内部只能调用下载接口到本地，不能获取 URL（NapCat 虽然有能力获取，但存在新问题）。
- 腾讯的音频文件为 silk 格式，必须使用 silk 和本地 ffmpeg 转码才能通用。
- 在发送时也需要 silk 进行编码。

### NapCat设计
- **接收时**：接口请求后，NapCat 下载到本地，可选内置 silk/ffmpeg 进行转码，提供给外部 mp3 等通用格式。
- **发送时**：接口请求后，NapCat 下载到本地，内置 silk/ffmpeg 进行转码 silk 后并进行发送。

### 如何获取音频文件
通过以下端点获取音频文件：

- **音频文件获取**：`/get_record`
  - 参数：
    ```
    file_id     字符串   可选 file_id 或 file 任意一个用于标记文件获取
    file        字符串   可选 file_id 或 file 任意一个用于标记唯一文件获取
    out_format  字符串   可选 mp3, amr, wma, m4a, spx, ogg, wav, flac
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