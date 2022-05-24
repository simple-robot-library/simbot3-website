---
sidebar_position: 10
title: Bot配置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

有关bot的配置相关内容，请先阅读 [BOT配置](../../basic/bot-config) 。

## 最简配置
### 明文密码

```json title="my-bot.bot"
{
"component": "simbot.mirai",
"code": 123456789,
"password": "你的密码"
}
```
其中，code 为账号，password为此账号的密码。
### MD5密码
```json title="my-bot.bot"
{
"component": "simbot.mirai",
"code": 123456789,
"passwordMD5": "e807f1fcf82d132f9bb018ca6738a19f"
}
```
其中，code 为账号，password为此账号的密码。

## 参考
<details>
<summary>完整配置参考</summary>

:::note

仅供参考，以具体代码效果为准。

:::

```json title="my-bot.bot"
{
  "component": "simbot.mirai",
  "code": 123,
  "password": "密码, 跟下面的passwordMD5(字符串)二选一使用",
  "passwordMD5": null,
  "config": {
      "deviceInfoSeed": 1,
      "workingDir": ".",
      "heartbeatPeriodMillis": 60000,
      "statHeartbeatPeriodMillis": 300000,
      "heartbeatTimeoutMillis": 5000,
      "heartbeatStrategy": "STAT_HB",
      "reconnectionRetryTimes": 2147483647,
      "autoReconnectOnForceOffline": false,
      "protocol": "ANDROID_PHONE",
      "highwayUploadCoroutineCount": 16,
      "deviceInfo": {
        "display": [77, 73, 82, 65, 73, 45, 83, 73, 77, 66, 79, 84, 46, 50, 48, 48, 49, 50, 50, 46, 48, 48, 49],
        "product": [109, 105, 114, 97, 105, 45, 115, 105, 109, 98, 111, 116],
        "device": [109, 105, 114, 97, 105, 45, 115, 105, 109, 98, 111, 116],
        "board": [109, 105, 114, 97, 105, 45, 115, 105, 109, 98, 111, 116],
        "brand": [102, 111, 114, 116, 101],
        "model": [109, 105, 114, 97, 105, 45, 115, 105, 109, 98, 111, 116],
        "bootloader": [117, 110, 107, 110, 111, 119, 110],
        "fingerprint": [109, 97, 109, 111, 101, 47, 109, 105, 114, 97, 105, 47, 109, 105, 114, 97, 105, 58, 49, 48, 47, 77, 73, 82, 65, 73, 46, 50, 48, 48, 49, 50, 50, 46, 48, 48, 49, 47, 54, 53, 56, 51, 55, 54, 48, 58, 117, 115, 101, 114, 47, 114, 101, 108, 101, 97, 115, 101, 45, 107, 101, 121, 115],
        "bootId": [-44, 29, -116, -39, -113, 0, -78, 4, -23, -128, 9, -104, -20, -8, 66, 126],
        "procVersion": [76, 105, 110, 117, 120, 32, 118, 101, 114, 115, 105, 111, 110, 32, 51, 46, 48, 46, 51, 49, 45, 50, 71, 54, 57, 72, 122, 115, 105, 32, 40, 97, 110, 100, 114, 111, 105, 100, 45, 98, 117, 105, 108, 100, 64, 120, 120, 120, 46, 120, 120, 120, 46, 120, 120, 120, 46, 120, 120, 120, 46, 99, 111, 109, 41],
        "baseBand": [],
        "version": {
          "incremental": [53, 56, 57, 49, 57, 51, 56],
          "release": [49, 48],
          "codename": [82, 69, 76],
          "sdk": 29
        },
        "simInfo": [84, 45, 77, 111, 98, 105, 108, 101],
        "osType": [97, 110, 100, 114, 111, 105, 100],
        "macAddress": [48, 50, 58, 48, 48, 58, 48, 48, 58, 48, 48, 58, 48, 48, 58, 48, 48],
        "wifiBSSID": [48, 50, 58, 48, 48, 58, 48, 48, 58, 48, 48, 58, 48, 48, 58, 48, 48],
        "wifiSSID": [60, 117, 110, 107, 110, 111, 119, 110, 32, 115, 115, 105, 100, 62],
        "imsiMd5": [-44, 29, -116, -39, -113, 0, -78, 4, -23, -128, 9, -104, -20, -8, 66, 126],
        "imei": "899752952597699",
        "apn": [119, 105, 102, 105]
      },
      "simpleDeviceInfo": null,
      "deviceInfoFile": null,
      "noNetworkLog": false,
      "noBotLog": false,
      "isShowingVerboseEventLog": false,
      "cacheDir": "cache",
      "contactListCache": {
        "saveIntervalMillis": 60000,
        "friendListCacheEnabled": false,
        "groupMemberListCacheEnabled": false
      },
      "loginCacheEnabled": true,
      "convertLineSeparator": true
  }
}
```

</details>

## 参数释义

<table>
    <thead><tr><th>参数</th><th>含义</th></tr></thead>
<tbody>
    <tr><td><b>code</b></td><td>账号。</td></tr>
    <tr><td><b>password</b></td><td>明文密码，与下面的 passwordMD5二选一。</td></tr>
    <tr><td><b>passwordMD5</b></td><td>MD5加密后的密码，与上面的 password 二选一。</td></tr>
    <tr><td>config.<b>deviceInfoSeed</b></td><td>mirai配置自定义deviceInfoSeed的时候使用的随机种子。默认为1。</td></tr>
    <tr><td>config.<b>workingDir</b></td><td>同原生mirai配置，mirai的工作目录。默认为 <code>.</code> 。</td></tr>
    <tr><td>config.<b>heartbeatPeriodMillis</b></td><td>同原生mirai配置，连接心跳包周期。</td></tr>
    <tr><td>config.<b>statHeartbeatPeriodMillis</b></td><td>同原生mirai配置，状态心跳包周期。</td></tr>
    <tr><td>config.<b>heartbeatTimeoutMillis</b></td><td>同原生mirai配置，每次心跳时等待结果的时间。</td></tr>
    <tr>
        <td>config.<b>heartbeatStrategy</b></td>
        <td>
        <p>同原生mirai配置，枚举类型。心跳策略。可选元素：</p>
        <li>STAT_HB</li> 
        <li>REGISTER</li> 
        <li>NONE</li> 
        </td>
</tr>
    <tr><td>config.<b>reconnectionRetryTimes</b></td><td>同原生mirai配置，最多尝试多少次重连。</td></tr>
    <tr><td>config.<b>autoReconnectOnForceOffline</b></td><td>同原生mirai配置，Boolean类型。在被挤下线时 (BotOfflineEvent.Force) 自动重连。</td></tr>
    <tr>
        <td>config.<b>protocol</b></td>
        <td>
           同原生mirai配置，枚举类型。使用协议类型。可选元素： 
            <li>ANDROID_PHONE</li>
            <li>ANDROID_PAD</li>
            <li>ANDROID_WATCH</li>
            <li>IPAD</li>
            <li>MACOS</li>  
        </td>
    </tr>
    <tr><td>config.<b>highwayUploadCoroutineCount</b></td><td>同原生mirai配置，Highway 通道上传图片, 语音, 文件等资源时的协程数量。</td></tr>
    <tr><td>config.<b>deviceInfo</b></td><td>使用的自定义设备信息。详见下文。</td></tr>
    <tr><td>config.<b>simpleDeviceInfo</b></td><td>使用的自定义设备信息的简化可读版。详见下文。</td></tr>
    <tr><td>config.<b>deviceInfoFile</b></td><td>指定设备信息文件。详见下文。</td></tr>
    <tr><td>config.<b>noNetworkLog</b></td><td>不展示mirai网络日志。默认false</td></tr>
    <tr><td>config.<b>noBotLog</b></td><td>不展示mirai Bot日志。默认false</td></tr>
    <tr><td>config.<b>isShowingVerboseEventLog</b></td><td>同原生mirai配置，是否显示过于冗长的事件日志。默认false。</td></tr>
    <tr><td>config.<b>cacheDir</b></td><td>同原生mirai配置，缓存数据目录, 相对于 <code>workingDir</code> 。</td></tr>
    <tr><td>config.<b>contactListCache</b></td><td>同原生mirai配置，Json Object 格式。详见下文。</td></tr>
    <tr>
        <td>config.<b>loginCacheEnabled</b></td>
        <td>同原生mirai配置，登录缓存。开启后在密码登录成功时会保存秘钥等信息, 在下次启动时通过这些信息登录, 而不提交密码。可以减少验证码出现的频率。<br />
    秘钥信息会由密码加密保存. 如果秘钥过期, 则会进行普通密码登录。默认为true。</td>
    </tr>
    <tr>
        <td>config.<b>convertLineSeparator</b></td>
        <td>
            同原生mirai配置，是否处理接受到的特殊换行符, 默认为 true。
            <li>若为 true, 会将收到的 CRLF(\r\n) 和 CR(\r) 替换为 LF(\n)</li>
            <li>若为 false, 则不做处理</li>
        </td>
    </tr>

</tbody>
</table>

### deviceInfo
使用的自定义设备信息。例如：
```json title="my-bot.bot"
{
    "config": {
      "deviceInfoJson": {
        "display": [77, 73, 82, 65, 73, 45, 83, 73, 77, 66, 79, 84, 46, 50, 48, 48, 49, 50, 50, 46, 48, 48, 49],
        "product": [109, 105, 114, 97, 105, 45, 115, 105, 109, 98, 111, 116],
        "device": [109, 105, 114, 97, 105, 45, 115, 105, 109, 98, 111, 116],
        "board": [109, 105, 114, 97, 105, 45, 115, 105, 109, 98, 111, 116],
        "brand": [102, 111, 114, 116, 101],
        "model": [109, 105, 114, 97, 105, 45, 115, 105, 109, 98, 111, 116],
        "bootloader": [117, 110, 107, 110, 111, 119, 110],
        "fingerprint": [109, 97, 109, 111, 101, 47, 109, 105, 114, 97, 105, 47, 109, 105, 114, 97, 105, 58, 49, 48, 47, 77, 73, 82, 65, 73, 46, 50, 48, 48, 49, 50, 50, 46, 48, 48, 49, 47, 54, 53, 56, 51, 55, 54, 48, 58, 117, 115, 101, 114, 47, 114, 101, 108, 101, 97, 115, 101, 45, 107, 101, 121, 115],
        "bootId": [-44, 29, -116, -39, -113, 0, -78, 4, -23, -128, 9, -104, -20, -8, 66, 126],
        "procVersion": [76, 105, 110, 117, 120, 32, 118, 101, 114, 115, 105, 111, 110, 32, 51, 46, 48, 46, 51, 49, 45, 50, 71, 54, 57, 72, 122, 115, 105, 32, 40, 97, 110, 100, 114, 111, 105, 100, 45, 98, 117, 105, 108, 100, 64, 120, 120, 120, 46, 120, 120, 120, 46, 120, 120, 120, 46, 120, 120, 120, 46, 99, 111, 109, 41],
        "baseBand": [],
        "version": {
          "incremental": [53, 56, 57, 49, 57, 51, 56],
          "release": [49, 48],
          "codename": [82, 69, 76],
          "sdk": 29
        },
        "simInfo": [84, 45, 77, 111, 98, 105, 108, 101],
        "osType": [97, 110, 100, 114, 111, 105, 100],
        "macAddress": [48, 50, 58, 48, 48, 58, 48, 48, 58, 48, 48, 58, 48, 48, 58, 48, 48],
        "wifiBSSID": [48, 50, 58, 48, 48, 58, 48, 48, 58, 48, 48, 58, 48, 48, 58, 48, 48],
        "wifiSSID": [60, 117, 110, 107, 110, 111, 119, 110, 32, 115, 115, 105, 100, 62],
        "imsiMd5": [-44, 29, -116, -39, -113, 0, -78, 4, -23, -128, 9, -104, -20, -8, 66, 126],
        "imei": "899752952597699",
        "apn": [119, 105, 102, 105]
      }
    }
}
```

此数据内容完全对应 Mirai 原生的 `DeviceInfo` 类，会将其直接解析为 `DeviceInfo` 实例进行使用。

至于其中各属性内容，完全对应 Mirai 原生的 `DeviceInfo` 类，请自行参考其源码。

### simpleDeviceInfo
如上一个属性 `deviceInfo` 所示， 其绝大部分属性都是 `ByteArray` 类型的，因此实际上的可读性比较差。

因此 simbot 提供了一个 `simpleDeviceInfo` 属性来使得所有的 `ByteArray` 类型的属性都作为 **字符串** 来使用。

例如：
```json title="my-bot.bot"
{
    "config": {
       "simpleDeviceInfo": {
            "display": "MIRAI.496596.001",
            "product": "mirai",
            "device": "mirai",
            "board": "mirai",
            "brand": "mamoe",
            "model": "mirai",
            "bootloader": "unknown",
            "fingerprint": "mamoe/mirai/mirai:10/MIRAI.200122.001/7041834:user/release-keys",
            "bootId": "8B176CE7-2C0D-554E-440D-1D6FC8F53AD1",
            "procVersion": "Linux version 3.0.31-o66PpLqf (android-build@xxx.xxx.xxx.xxx.com)",
            "baseBand": "",
            "version": {
                "incremental": "5891938",
                "release": "10",
                "codename": "REL",
                "sdk": 29
            },
            "simInfo": "T-Mobile",
            "osType": "android",
            "macAddress": "02:00:00:00:00:00",
            "wifiBSSID": "02:00:00:00:00:00",
            "wifiSSID": "<unknown ssid>",
            "imsiMd5": "5df6e66cc541fe594f228c889cd7828b",
            "imei": "078869213288891",
            "apn": "wifi"
          }
    }
}
```

此配置会在使用的时候转化为 Mirai 的 `DeviceInfo` 类型并使用。

当 `deviceInfo` 属性存在的时候，优先使用 `deviceInfo` 。

:::caution

需要注意的是，这代表此属性 **有可能** 会因为未来某天 `DeviceInfo` 类型发生了变化而无法使用，因此需要 **谨慎使用**。

:::


### deviceInfoFile
除了通过上述 `deviceInfo` 或者 `simpleDeviceInfo` 配置设备信息以外，也可以通过 `deviceInfoFile` 属性来指定一个外部json文件。
```json title="my-bot.bot"
{
  "config": {
     "deviceInfoFile": ".config/yourDeviceInfo.json"
  }
}
```

值为一个文件路径，代表设备信息json文件的路径。

当 `deviceInfo` 属性存在的时候，优先使用 `deviceInfo` 。


### contactListCache
同原生mirai配置字段 `contactListCache` ，Json Object 格式。其属性如下：

#### saveIntervalMillis
同原生mirai配置，在有修改时自动保存间隔. 默认 `60` 秒. 在每次登录完成后有修改时都会立即保存一次.

#### friendListCacheEnabled
同原生mirai配置，开启好友列表缓存.

#### groupMemberListCacheEnabled
同原生mirai配置，开启群成员列表缓存.

#### 参考配置
```json title="my-bot.bot"
{
   "config": {
      "contactListCache": {
        "saveIntervalMillis": 60000,
        "friendListCacheEnabled": true,
        "groupMemberListCacheEnabled": true
   }
   }
}
```
