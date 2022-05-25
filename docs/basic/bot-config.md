---
sidebar_position: 10
title: BOT配置
---


## BOT文件

在simbot3中，所有的配置文件都交由 `*.bot*` 文件进行定义，例如：`forliy.bot` 、 `forliy.bot.json` 、 `forliy.bot.yaml` 等。


在 simbot 中，这些文件最终都会被封装为 `BotVerifyInfo` 对象提供给组件进行解析。

<details>
<summary>格式高亮</summary>

在默认情况下， `.bot` 文件等同于 `.json`。因此如果你想使用 `.bot` 格式文件的同时能够拥有IDE的格式高亮，你可以配置你的IDE。
以IDEA举例，你可以通过 `settings -> File Types` 中左侧搜索 `JSON`，并在右边添加 pattern: `*.bot`，如下图这样：

![](@site/static/img/bot_config/idea-json-file-config.png)



</details>


## 配置项
对于一个bot配置文件，其可能存在的属性在每个不同的组件下都是不同的，但是有一个属性必定存在，即 component:
```json title='my-bot.bot'
{
  "component": "simbot.mirai"
}
```

`component` 属性用来阐明此配置文件是为了哪个组件所服务的，它的值为对应组件的ID值。例如上述示例中的 `simbot.mirai`，
则代表此配置文件为 [mirai组件](../component-overview/mirai) 所使用的配置。

而对于一个mirai组件，能够进行登陆的最简配置**之一**如下：

```json title='my-bot.bot'
{
  "component": "simbot.mirai",
  "code": 123456789,
  "password": "你的密码"
}
```

一个 bot 配置文件代表了一个组件下某个bot的特定配置。
而除了所有配置文件内都应存在的配置项 `component` 以外，其他的所有内容都是组件实现所**定制**的，你需要参考相关组件的说明文档来进行进一步的配置。

## 解析

:::note 虽然...

绝大多数情况下，你都不需要自行解析 bot 配置文件。

:::

:::info

`BotVerifyInfo` 借助 [`kotlinx-serialization`](https://github.com/Kotlin/kotlinx.serialization) 实现反序列化，因此你需要使用Kotlin来完成配置文件的解析。

:::


你可以通过构建 `BotVerifyInfo` 来自定义解析一个 bot 配置文件。
假设一个配置文件如下：
```json title='custom.bot'
{
   "component": "example.foo",
   "age": 14,
   "name": "forliy"
}
```

那么参考如下解析逻辑：
```kotlin title='Example.kt'
/**
 * 用来映射反序列化结果的配置信息实体类。
 */
@Serializable
data class CustomConfig(val age: Int, val name: String)

fun main() {
    // 得到配置文件的 resource
    val configResource = Path("custom.bot").toResource()
    
    // 提供一个配置信息解码器并构建为 BotVerifyInfo
    // 这里选择的是通过 标准解码器工厂 中的 Json 格式的解码器工厂来构建一个Json格式的配置文件解码器。
    val botVerifyInfo = configResource.toBotVerifyInfo(
        StandardBotVerifyInfoDecoderFactory.Json.create {
            isLenient = true
            ignoreUnknownKeys = true
        }
    )
    
    val config = botVerifyInfo.decode(CustomConfig.serializer())
}
```

