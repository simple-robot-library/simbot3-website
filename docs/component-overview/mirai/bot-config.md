---
sidebar_position: 10
title: Bot配置文件
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Label from '@site/src/components/Label'

有关bot的配置文件相关内容，请先阅读 [BOT配置](../../basic/bot-config) 。

## 架构

mirai组件为其下的BOT配置文件提供了 [`json-schema`](http://json-schema.org/) 。

> 当前 `schema` 版本：[<Label>0.0.1</Label>](/schema/component/mirai/bot/0.0.1/bot.config.json)

### 架构资源

你可以通过 [此处](/schema/component/mirai/bot/0.0.1/bot.config.json) 下载 `bot.config.json` 文件，
或者使用远程资源路径：

**`$host/schema/component/mirai/bot/0.0.1/bot.config.json`**

:::note

远程资源路径的 `$host` 即为当前站点，例如：

<https://simbot.forte.love/schema/component/mirai/bot/0.0.1/bot.config.json>

:::

### 如何使用

以 [IntelliJ IDEA](https://www.jetbrains.com/?from=simpler-robot) 为例，
对一个 `JSON` 文件使用架构可以参考其 [官方文档](https://www.jetbrains.com/help/idea/json.html#ws_json_using_schemas)。

## 最简配置

### 明文密码

```json title="my-bot.bot.json"
{
    "component": "simbot.mirai",
    "code": 123456789,
    "passwordInfo": {
        "type": "text",
        "text": "你的密码"
    }
}
```

### MD5密码

```json title="my-bot.bot.json"
{
    "component": "simbot.mirai",
    "code": 123456789,
    "passwordInfo": {
        "type": "md5_text",
        "md5": "e807f1fcf82d132f9bb018ca6738a19f"
    }
}
```

<details>
<summary>完整配置参考</summary>

> 仅供参考，以具体代码效果为准。


配置属性 `config` 下的几乎所有属性都是可选的（甚至包括 `config` 属性自己），因此你没有必要书写过于完整的配置文件。

下述的完整配置参考中，`config.deviceInfo` 将会被**省略**。

> 下述部分属性不会提供所有的可能（例如 `passwordInfo`），对所有属性的完整解释参见后续说明。

```json title="my-bot.bot.json"
{
  "component": "simbot.mirai",
  "code": 123,
  "passwordInfo": {
     "type": "text",
     "text": "明文密码"
  },
  "config": {
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
         "type": "auto"
      },
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
      "convertLineSeparator": true,
      "recallMessageCacheStrategy": "INVALID"
  }
}
```

</details>

## 参数释义

<table>
    <thead><tr><th>参数</th><th>类型</th><th>含义</th></tr></thead>
<tbody>
    <tr>
        <td><b>component</b> <Label>必须</Label> </td>
        <td><Label>const</Label></td>
        <td>固定值：<code>simbot.mirai</code>，代表当前配置文件是针对mirai组件的</td>
    </tr>
    <tr>
        <td><b>code</b> <Label>必须</Label> </td>
        <td><Label>integer</Label></td>
        <td>账号。</td>
    </tr>
    <tr>
        <td><s><b>password</b></s></td>
        <td><Label>string</Label></td>
        <td> <b>已弃用</b> <s>明文密码，与下面的 passwordMD5二选一。</s></td>
    </tr>
    <tr>
        <td><s><b>passwordMD5</b></s></td>
        <td><Label>string</Label></td>
        <td> <b>已弃用</b> <s>MD5加密后的密码，与上面的 password 二选一。</s></td>
    </tr>
    <tr>
        <td><b>passwordInfo</b> <Label>必须</Label> </td>
        <td><a href="#passwordinfoconfiguration"><Label>PasswordInfoConfiguration</Label></a></td>
        <td>密码配置。后续会提供详细解释。</td>
    </tr>
    <tr>
        <td><b>config</b></td>
        <td><Label>Config</Label></td>
        <td>其他详细配置</td>
    </tr>
    <tr>
        <td><s>config.<b>deviceInfoSeed</b></s></td>
        <td><Label>integer</Label></td>
        <td> <b>已弃用</b> <s>mirai配置自定义deviceInfoSeed的时候使用的随机种子。默认为1。</s></td>
    </tr>
    <tr>
        <td>config.<b>workingDir</b></td>
        <td><Label>string</Label></td>
        <td>同原生mirai配置，mirai的工作目录。默认为 <code>"."</code> 。</td>
    </tr>
    <tr>
        <td>config.<b>heartbeatPeriodMillis</b></td>
        <td><Label>integer</Label></td>
        <td>同原生mirai配置，连接心跳包周期。</td>
    </tr>
    <tr>
        <td>config.<b>statHeartbeatPeriodMillis</b></td>
        <td><Label>integer</Label></td>
        <td>同原生mirai配置，状态心跳包周期。</td>
    </tr>
    <tr>
        <td>config.<b>heartbeatTimeoutMillis</b></td>
        <td><Label>integer</Label></td>
        <td>同原生mirai配置，每次心跳时等待结果的时间。</td>
    </tr>
    <tr>
        <td>config.<b>heartbeatStrategy</b></td>
        <td><Label>enum</Label></td>
        <td>
        <p>同原生mirai配置，枚举类型。心跳策略。可选元素：</p>
        <li><code>STAT_HB</code></li> 
        <li><code>REGISTER</code></li> 
        <li><code>NONE</code></li> 
        </td>
</tr>
    <tr>
        <td>config.<b>reconnectionRetryTimes</b></td>
        <td><Label>integer</Label></td>
        <td>同原生mirai配置，最多尝试多少次重连。</td>
    </tr>
    <tr>
        <td>config.<b>autoReconnectOnForceOffline</b></td>
        <td><Label>boolean</Label></td>
        <td>同原生mirai配置，Boolean类型。在被挤下线时 (`BotOfflineEvent.Force`) 自动重连。</td>
    </tr>
    <tr>
        <td>config.<b>protocol</b></td>
        <td><Label>enum</Label></td>
        <td>
           同原生mirai配置，枚举类型。使用协议类型。可选元素： 
            <li><code>ANDROID_PHONE</code></li>
            <li><code>ANDROID_PAD</code></li>
            <li><code>ANDROID_WATCH</code></li>
            <li><code>IPAD</code></li>
            <li><code>MACOS</code></li>  
        </td>
    </tr>
    <tr>
        <td>config.<b>highwayUploadCoroutineCount</b></td>
        <td><Label>integer</Label></td>
        <td>同原生mirai配置，Highway 通道上传图片, 语音, 文件等资源时的协程数量。</td>
    </tr>
    <tr>
        <td>config.<b>deviceInfo</b></td>
        <td><Label>DeviceInfoConfiguration</Label></td>
        <td>使用的自定义设备信息配置，详见下文。</td>
    </tr>
    <tr>
        <td><s>config.<b>simpleDeviceInfo</b></s></td>
        <td><Label>object</Label></td>
        <td> <b>已弃用</b> <s>使用的自定义设备信息的简化可读版。</s></td>
    </tr>
    <tr>
        <td><s>config.<b>deviceInfoFile</b></s></td>
        <td><Label>string</Label></td>
        <td> <b>已弃用</b> <s>指定设备信息文件。</s></td>
    </tr>
    <tr>
        <td>config.<b>noNetworkLog</b></td>
        <td><Label>boolean</Label></td>
        <td>不展示mirai网络日志。默认false</td>
    </tr>
    <tr>
        <td>config.<b>noBotLog</b></td>
        <td><Label>boolean</Label></td>
        <td>不展示mirai Bot日志。默认false</td>
    </tr>
    <tr>
        <td>config.<b>isShowingVerboseEventLog</b></td>
        <td><Label>boolean</Label></td>
        <td>同原生mirai配置，是否显示过于冗长的事件日志。默认false。</td>
    </tr>
    <tr>
        <td>config.<b>cacheDir</b></td>
        <td><Label>string</Label></td>
        <td>同原生mirai配置，缓存数据目录, 相对于 <code>workingDir</code> 。</td>
    </tr>
    <tr>
        <td>config.<b>contactListCache</b></td>
        <td><Label>ContactListCacheConfiguration</Label></td>
        <td>同原生mirai配置，详见下文。</td>
    </tr>
    <tr>
        <td>config.<b>loginCacheEnabled</b></td>
        <td><Label>boolean</Label></td>
        <td>同原生mirai配置，登录缓存。开启后在密码登录成功时会保存秘钥等信息, 在下次启动时通过这些信息登录, 而不提交密码。可以减少验证码出现的频率。<br />
    秘钥信息会由密码加密保存. 如果秘钥过期, 则会进行普通密码登录。默认为true。</td>
    </tr>
    <tr>
        <td>config.<b>convertLineSeparator</b></td>
        <td><Label>boolean</Label></td>
        <td>
            同原生mirai配置，是否处理接受到的特殊换行符, 默认为 true。
            <li>若为 true, 会将收到的 CRLF(\r\n) 和 CR(\r) 替换为 LF(\n)</li>
            <li>若为 false, 则不做处理</li>
        </td>
    </tr>
    <tr>
        <td>config.<b>recallMessageCacheStrategy</b></td>
        <td><Label>enum</Label></td>
        <td>
            用于 <b>消息撤回事件(<code>MiraiMessageRecallEvent</code>)</b> 的消息缓存策略。
            可选值为枚举类型 <code>MiraiBotVerifyInfoConfiguration.RecallMessageCacheStrategyType</code> 中的可选元素：
            <table>
                <thead>
                    <tr><th>元素名</th><th>释义</th></tr>
                </thead>
                <tbody>
                    <tr><td><code>INVALID</code></td><td>无效的缓存策略，即<b>不进行缓存。</b></td></tr>
                    <tr><td><code>MEMORY_LRU</code></td><td>基于内存的 LRU 缓存策略</td></tr>
                </tbody>
            </table>
        </td>
    </tr>

</tbody>
</table>

### PasswordInfoConfiguration

`PasswordInfoConfiguration` 是用于配置账号密码的配置类型。其大致结构如下：

```json
{
  "passwordInfo": {
    "type": "password_type",
    "paramA": "valueA",
    "paramB": "valueB"
  }
}
```

上述示例中可见，`passwordInfo` 一定存在一个 `type` 属性来标记当前配置的类型。`type` 是一个具有固定可选范围的字符串值，并且 `type` 的选择会决定其他的可用属性。
下面会分别介绍所有的type以及它们对应的具体结构。

#### text {#pwd-text}

当 `type` 值为 `text` 时，代表所配置的内容为 **明文密码**。 

```json
{
  "passwordInfo": {
    "type": "text",
    "text": "password"
  }
}
```

#### md5_text {#pwd-md5-text}

与 [`type=text`](#pwd-text) 时类似，当 `type` 值为 `md5_text` 时，代表所配置的内容为 **MD5密码(字符串)**。

```json
{
  "passwordInfo": {
    "type": "md5_text",
    "md5": "e807f1fcf84d112f3bb018ca6738a19f"
  }
}
```

#### md5_bytes

与 [`type=md5_text`](#pwd-md5-text) 时类似，当 `type` 值为 `md5_text` 时，代表所配置的内容为 **MD5密码(字节组)**。

```json
{
  "passwordInfo": {
    "type": "md5_bytes",
    "md5": [-24, 7, -15, -4, -14, 45, 18, 47, -101, -80, 24, -54, 102, 56, -95, -97]
  }
}
```


#### env {#pwd-env}

下文几个以 `env_` 开头的配置类型代表那些直接通过虚拟机参数或者环境变量来进行动态配置的方式。
这类配置方式暂且称其为**环境变量类**的配置。

在环境变量配置中，会存在两个属性：`prop` 和 `env`。比如如下**示例**：

```json
{
  "code": 123456,
  "passwordInfo": {
    "type": "env_xxx",
    "prop": "mirai.$CODE$.password",
    "env": "mirai.$CODE$.password"
  }
}
```

上述配置代表，当前配置的bot的密码，会先通过虚拟机参数，也就是 `System.getProperty("simbot.mirai.123456.password")` 获取。
如果无法获取，则会尝试通过环境变量，也就是 `System.getenv("simbot.mirai.123456.password")` 获取。

带入上述示例，你可以通过如下启动命令来动态提供账号 `123456` 的密码信息。

```shell
java -jar -Dsimbot.mirai.123456.password=myPassword myBot.jar
```

注意，`prop` 是优先于 `env` 进行获取的。

:::tip 占位符? 

也许你发现了，上述配置中存在一串占位符 `$CODE$`。占位符会在 [后续](#mark) 进行简单介绍。

:::

`prop` 和 `env` 本质上都是 **可选** 属性，但是它们二者必须至少 **存在一个** 。

因此下述配置将会引发运行时异常：

:::danger 缺少属性

```json
{
  "passwordInfo": {
    "type": "env_xxx"
  }
}
```

:::

#### env_text

通过[环境变量属性](#pwd-env)配置 **明文密码**。

```json
{
  "passwordInfo": {
    "type": "env_text",
    "prop": "xxx",
    "env": "xxx"
  }
}
```

#### env_md5_text

通过[环境变量属性](#pwd-env)配置 **md5密码(字符串)**。

```json
{
  "passwordInfo": {
    "type": "env_md5_text",
    "prop": "xxx",
    "env": "xxx"
  }
}
```


### DeviceInfoConfiguration

`DeviceInfoConfiguration` 是用来配置当前账号所使用的**设备信息(`DeviceInfo`)**的配置类型。其大致结构如下：

```json
{
  "config": {
    "deviceInfo": {
      "type": "xxx",
      "paramA": "valueA",
      "paramB": "valueB"
    }
  }
}
```

上述示例中可见，`deviceInfo` 一定存在一个 `type` 属性来标记当前配置的类型。`type` 是一个具有固定可选范围的字符串值，并且 `type` 的选择会决定其他的可用属性。 
下面会分别介绍所有的 `type` 可选项以及它们对应的具体结构。

:::info 简化示例

后续相关示例代码会将上述结构中的 `config` 省略，而使用如下结构：

```json
{
   "deviceInfo": {
     "type": "xxx",
     "paramA": "valueA",
     "paramB": "valueB"
   }
}
```

:::

#### random

`random` 代表使用mirai所提供的随机设备信息API来生成并使用一个随机的设备信息实例。

```json
{
  "deviceInfo": {
    "type": "random",
    "seed": null
  }
}
```

属性 `seed` 是一个 **可选项**，且 **可为空**，默认值为 `null`。其代表进行随机时所需要使用的随机种子。

#### simbot_random

`simbot_random` 代表使用simbot组件所提供的**随机设备信息**。simbot组件所提供的随机设备信息相比较于mirai原生的随机设备信息而言，
其中替换了部分属性内容，使得设备信息中留下了一些 simbot 的痕迹。

```json
{
  "deviceInfo": {
    "type": "simbot_random",
    "seed": 1
  }
}
```

属性 `seed` 是一个 **可选项**，默认值为 `1`。其代表进行随机时所需要使用的随机种子。

#### resource

`resource` 代表寻找并读取一个本地或资源目录中的配置文件。

```json
{
  "deviceInfo": {
    "type": "resource",
    "paths": ["foo/bar/device.json"]
  }
}
```

属性 `path` 是 **必选项**，且元素数量应当 **至少为1**。`path` 代表了需要按照顺序寻找的资源文件列表，因此 `path` 所指向的路径都应当为一个**具体的文件**，而不是目录。

**`path` 是支持 [占位符](#mark) 的**。

下述配置为例：

```json
{
  "deviceInfo": {
    "type": "resource",
    "paths": ["foo/bar/device-$CODE$.json"]
  }
}
```

假设当前bot账号为 `123456`，则上述中配置的路径最终结果为 `"foo/bar/device-123456.json"` 。


`path` 在解析时，会首先尝试寻找本地目录，而后寻找资源目录。例如下述配置中：

```json
{
  "deviceInfo": {
    "type": "resource",
    "paths": ["foo/device.json"]
  }
}
```

解析器首先会去寻找本地目录 `foo/device.json`，也就是项目根目录下 `foo` 目录下的 `device.json` 文件。
假如未寻得，则会通过类加载器尝试加载当前资源目录下的 `foo/device.json` 结果。如果上述过程结束且 `paths` 所有内容都无命中结果，
将会抛出异常。

如果你希望指定具体地寻找范围，比如仅寻找本地路径、仅寻找资源路径或者深层寻找资源路径，你可以通过为元素标记**前缀**来完成：

```json
{
  "deviceInfo": {
    "type": "resource",
    "paths": [
      "file:device-local.json",
      "classpath:device-resource.json",
      "classpath*:device-any.json"
    ]
  }
}
```

当使用前缀 `file:` 时，指定其后的路径为本地文件。

当使用前缀 `classpath:` 时，指定其后的路径为资源路径。

当使用前缀 `classpath*:` 时，指定其后的路径为资源路径，但是会获取可能得到的**所有**资源并取首个结果。


#### object

`object` 代表直接使用最原本的 `DeviceInfo` 序列化结果对象来作为属性值。

```json
{
  "deviceInfo": {
    "type": "object",
    "object": {}
  }
}
```

<details>
<summary>完整属性示例</summary>

:::note 仅供参考

下述示例仅为参考，不建议直接使用。属性具体含义请参考mirai `DeviceInfo` 类说明。

:::

```json
{
    "deviceInfo": {
      "type": "object",
      "object": {
        "display": [76, 73, 82, 65, 73, 45, 83, 73, 77, 66, 79, 84, 46, 50, 48, 48, 49, 50, 50, 46, 48, 48, 49],
        "product": [108, 105, 114, 97, 105, 45, 115, 105, 109, 98, 111, 116],
        "device": [108, 105, 114, 97, 105, 45, 115, 105, 109, 98, 111, 116],
        "board": [108, 105, 114, 97, 105, 45, 115, 105, 109, 98, 111, 116],
        "brand": [101, 111, 114, 116, 101],
        "model": [108, 105, 114, 97, 105, 45, 115, 105, 109, 98, 111, 116],
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

</details>


#### simple_object

`simple_object` 与上文中的 `object` 很类似，只不过 `simple_object` 代表使用simbot所提供的 `SimpleDeviceInfo` 序列化结果对象来作为属性值。

`SimpleDeviceInfo` 属性名与 `DeviceInfo` 基本一致，只不过将 `DeviceInfo` 中所有原本为字节数组的属性变更为了字符串，使得其属性可以相对表现得更直观。

```json
{
  "deviceInfo": {
    "type": "simple_object",
    "object": {}
  }
}
```
<details>
<summary>完整属性示例</summary>

:::note 仅供参考

下述示例仅为参考，不建议直接使用。属性具体含义请参考mirai `DeviceInfo` 类说明（ `SimpleDeviceInfo` 字段含义于其一致）。

:::

```json
{
    "deviceInfo": {
      "type": "object",
      "object": {
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

</details>

:::caution 兼容性

需要注意的是，`SimpleDeviceInfo` 是 simbot 通过对照 `DeviceInfo` 类的结构而手动构造出来的类型，因此其无法保证与 `DeviceInfo` 之间能够保持长久的兼容对照。
假若 `DeviceInfo` 在后续版本产生变更， `SimpleDeviceInfo` 是无法保证能够适配兼容的。因此请**谨慎**使用 `SimpleDeviceInfo`。

:::


#### auto <Label>默认</Label>

`auto` 是在未配置的情况下**默认使用**的类型，其代表会尝试自动寻找配置文件，如果找不到则会使用 [`simbot_random`](#simbot_random) 作为生成策略。

```json
{
  "deviceInfo": {
    "type": "auto",
    "baseDir": null
  }
}
```

`baseDir` 是一个**可选的**，且**可为null**。其代表在自动搜寻配置文件时的基础目录。当为 `null` 的时候将**不会搜寻**配置文件。

当 `baseDir` 不为 `null` 时，解析器首先会按照顺序尝试搜寻如下目录：

1. 本地文件: `$baseDir/device-$CODE$.json` 
2. 资源文件: `$baseDir/device-$CODE$.json`
3. 本地文件: `$baseDir/device.json`
4. 资源文件: `$baseDir/device.json`

如下示例中，

```json
{
  "deviceInfo": {
     "type": "auto",
     "baseDir": "devices"
  }
}
```

假设当前 `code` 为 `123456`，则最终寻找的目标路径为：

- `devices/device-123456.json`
- `devices/device.json`


`baseDir` 支持 [占位符](#mark) 。

例如：

```json
{
  "deviceInfo": {
     "type": "auto",
     "baseDir": "devices-$CODE$"
  }
}
```

假设当前 `code` 为 `123456`, 则上述配置中的的 `baseDir` 最终会被替换为 `devices-123456`，并最终会去寻找如下目标：

- `devices-123456/device-123456.json`
- `devices-123456/device.json`


### ContactListCacheConfiguration

类型结构同原生mirai配置字段 `contactListCache`，其属性如下：

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



## 占位符替换 {#mark}

在上述详细释义中，你可能会发现有些配置中（尤其是存在 `type` 的多选择配置）会出现占位符 `$CODE$`。其实这个占位符很简单，它会在这个配置进行处理前，将 `$CODE$` 替换为当前bot的`code`信息。

例如你所配置的 `code` 值为 `123456`，那么 `$CODE$` 最终就会被替换为 `123456`。

需要注意的是，并非所有配置都允许这个占位符。如果某个配置项支持，那么在说明中（也包括源码中的文档注释）将会有所体现。