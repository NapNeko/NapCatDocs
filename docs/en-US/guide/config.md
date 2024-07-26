# Basic Configuration Introduction

::: details Configure with WebUI

If you have started NapCat and have more than one open port, you can configure it via WebUI.

The default address is `0.0.0.0`, which means it listens on all addresses. If an unavailable address is configured, the WebUI will be disabled.

The default port is `6099`. If the port is set to `0`, the WebUI will be disabled. If the port is occupied, it will automatically increment the port by 1 until it finds an available port (up to 100 attempts, after which the WebUI will be disabled). The port number will be displayed in the startup logs.

After starting, you can find the token information in the startup logs in the format `[WebUi] Login Token is xxxx`, or you can open the `./config/webui.json` file to find the token.

```json5
{
    "host": "0.0.0.0", // WebUI addr
    "port": 6099, // WebUI port
    "prefix": "", // WebUI URL prefix
    "token": "xxxx", // Login key, a randomly generated password by default
    "loginRate": 3, // Login rate limit per minute
}
```

Access `http://$host:$port$prefix/webui/login.html`, and then perform the following operations:

1. Enter QQ login, and click `QRCode` for QR code login.

2. After successful login, you can modify the configuration.

3. After the configuration is complete, click save, and restart to take effect.

:::

::: details Configure OneBot11 Settings with Files

Like the above, **the configuration will only take effect after restarting and logging in**.

Open the `config` directory of NapCat and find a file named `onebot11_<yourQQnumber>.json`, such as `onebot11_1234567.json`. If there is no such file, you can copy `onebot11.json` and rename it to `onebot11_<yourQQnumber>.json`.

Below is an explanation of the configuration parameters:

```json5
{
  "http": {
    // Whether to enable the HTTP service, true to start, false to disable
    "enable": false,
    // IP address for the HTTP service to listen on, empty means listen on all addresses
    "host": "",
    // HTTP service port
    "port": 3000,
    // HTTP reporting secret, can be empty
    "secret": "",
    // Whether to enable HTTP heartbeat
    "enableHeart": false,
    // Whether to enable HTTP reporting service
    "enablePost": false,
    // HTTP reporting addresses, e.g., ["http://127.0.0.1:8080/onebot/v11/http"]
    "postUrls": []
  },
  "ws": {
    // Whether to enable forward websocket service
    "enable": false,
    // IP address for the forward websocket service to listen on, empty means listen on all addresses
    "host": "",
    // Forward websocket service port
    // When the port is the same as the HTTP service port, the host must also be consistent with the HTTP service host. Otherwise, this may cause startup failures.
    "port": 3001
  },
  "reverseWs": {
    // Whether to enable reverse websocket service
    "enable": false,
    // Reverse websocket connection addresses, e.g., ["ws://127.0.0.1:8080/onebot/v11/ws"]
    "urls": []
  },
  "GroupLocalTime": {
    "Record": false, // Whether to enable local group chat time recording
    "RecordList": [] // Enable for all groups ["-1"], single group configuration ["11111"], multiple groups ["1","2","3"]
  },
  // Whether to enable debug mode, enabling will include a raw field with the original message content in reported messages
  "debug": false,
  // WS heartbeat interval in milliseconds
  "heartInterval": 30000,
  // Message reporting format, "array" for message groups, "string" for CQ code strings
  "messagePostFormat": "array",
  // Whether to convert local files to URL, if URL cannot be obtained, the file content is returned using base64
  "enableLocalFile2Url": true,
  // Music signature URL for handling music-related requests
  "musicSignUrl": "",
  // Whether to report messages sent by oneself
  "reportSelfMessage": false,
  // Access token, can be empty
  "token": ""
}
```

:::warning

Do not write comments into the configuration file, otherwise, it will fail to parse.

:::

::: details Configure Other NapCat Settings (if you don't know what it is, you can skip it)

After starting and logging into NapCat, open the `config` directory of NapCat and find a file named `napcat_<yourQQnumber>.json`, such as `napcat_1234567.json`.

Below is an explanation of the configuration parameters:

```json5
{
  // Whether to enable file logging
  "fileLog": true,
  // Whether to enable console logging
  "consoleLog": true,
  // Log level, optional values: debug, info, error
  "fileLogLevel": "debug",
  "consoleLogLevel": "info"
}
```

:::warning

Do not write comments into the configuration file, otherwise, it will fail to parse.

:::
