# Framework Integration

## Integrating with Open Source Frameworks

Using Koishi and NoneBot as examples.

::: details Configuring Koishi

1. Search for `onebot` in the Koishi plugin market and install `adapter-onebot` as shown below:

    ![koishi-install-onebot](../../asset/img/configuration/koishi-install-onebot.png)

2. After installation, click on modify → configuration

    ![koishi-onebot-go-setting](../../asset/img/configuration/koishi-onebot-go-setting.png)

3. Configure OneBot

    Here's an example using WS reverse connection:
   - `selfId` is your bot's QQ number
   - `token` should match the token configured in NapCat. If no token is configured, leave it blank.
   - Select protocol as ws-reverse

    Leave other configurations as default, click save, and then enable the plugin.

    ![koishi-onebot-setting](../../asset/img/configuration/koishi-onebot-setting.png)

    After configuration, add the WS reverse address in NapCat's settings. The WS reverse address for Koishi OneBot is `ws://127.0.0.1:5140/onebot`. Once added, click save.

:::

::: details Configuring NoneBot

1. Configure NoneBot

    Assuming you have installed the OneBot adapter.

    By default, NoneBot enables reverse ws. If you encounter a 403 error, it may be due to default configuration issues and requires configuring a `token` for a normal connection. The specific method is to modify the NoneBot configuration file `.env` and add `ONEBOT_ACCESS_TOKEN=your_token_configured_in_NapCat`.

    Then, start NoneBot and you will see the port number output by NoneBot, such as `8080`.

2. Configure NapCat

    Add the reverse ws address in NapCat settings, the address is `ws://127.0.0.1:8080/onebot/v11/ws`, where `8080` is the port number output by NoneBot, and `/onebot/v11/ws` is the default path for NoneBot onebot adapter.

    ::: tip
    Always remember: the `token` configured in NapCat must match the one configured in NoneBot!

:::

## Configuring HTTP Service

Configuring the HTTP service involves two main aspects: one is the HTTP listening port (to be called by your application), and the other is the HTTP reporting address (to be called by NapCat).

::: details HTTP Listening Port

For example, if the configured port number is `3000`, the API address would be `http://localhost:3000`.

:::

::: details HTTP Reporting Address

When NapCat receives messages or other events, it reports them to this address via a `POST` request.

::: tip

The reporting address must start with `http://`

:::

## Configuring WebSocket Service

In the OneBot 11 standard, the definitions of "forward WS" and "reverse WS" are somewhat ambiguous. Here's a clear distinction: forward refers to **accepting** WS connections from the application side, while reverse refers to NapCat actively connecting to the reverse WS address listened by the application side.

::: details Forward WS Configuration

For example, if the configured port number is `3001`, then the WS address configured on the application side should be `ws://localhost:3001`.

:::

::: details Reverse WS Configuration

For example, if NoneBot2 is configured with a OneBot port of `8080` and a path of `/onebot/v11/ws`, then the configured reverse WS address is `ws://localhost:8080/onebot/v11/ws`.

:::
