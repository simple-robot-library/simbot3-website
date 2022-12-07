---
sidebar_position: 20
title: BOT配置文件
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## BOT文件

在simbot3中，所有的配置文件都交由 `*.bot*` 文件进行定义，例如：`forliy.bot` 、 `forliy.bot.json` 、 `forliy.bot.yaml` 等。


在 simbot 中，这些文件最终都会被封装为 `BotVerifyInfo` 对象提供给组件进行解析。

<details>
<summary>格式高亮</summary>

在默认情况下， `.bot` 文件等同于 `.json`。因此如果你想使用 `.bot` 格式文件的同时能够拥有IDE的格式高亮，你可以配置你的IDE。
以IDEA举例，你可以通过 `settings -> File Types` 中左侧搜索 `JSON`，并在右边添加 pattern: `*.bot`，如下图这样：

![](@site/static/img/bot_config/idea-json-file-config.png)


对于其他IDE，请尝试着寻找类似的功能。

</details>

## 类型支持

虽然上文讲到，bot文件配置支持多种格式的文件，例如 `*.bot`、`*.bot.json`、`*.bot.yaml`、`*.bot.properties` 等，
但是并不是所有的格式支持都是**默认集成**的。

对于一些不是默认集成使用的文件类型支持，你需要在你的项目环境中添加额外的依赖。

### JSON

**JSON** 文件格式的配置文件默认情况下可以直接使用，即 `*.bot` 和 `*.bot.json` 格式的文件。


### YAML

如果你希望增加对 `*.bot.yml` 或 `*.bot.yaml` 格式文件的支持，请添加 [`com.charleskorn.kaml:kaml`](https://github.com/charleskorn/kaml) 依赖。


<Tabs groupId="use-dependency">
<TabItem value="Maven" default>

```xml title=pom.xml
<dependencies>
    <!-- https://mvnrepository.com/artifact/com.charleskorn.kaml/kaml -->
    <dependency>
        <groupId>com.charleskorn.kaml</groupId>
        <artifactId>kaml</artifactId>
        <!-- 参考 https://github.com/charleskorn/kaml -->
        <version>${kaml-version}</version>
    </dependency>
</dependencies>
```

</TabItem>
<TabItem value="Gradle Kotlin DSL">

```kotlin title=gradle.build.kts
dependencies {
    // 参考 https://github.com/charleskorn/kaml
    implementation("com.charleskorn.kaml:kaml:$kaml_version")
}
```

</TabItem>
<TabItem value="Gradle Groovy">

```groovy title=gradle.build
dependencies {
    // 参考 https://github.com/charleskorn/kaml
    implementation 'com.charleskorn.kaml:kaml:$kaml_version'
}
```

</TabItem>
</Tabs>


:::note 日志

如果无法在你的运行时环境中找到此依赖，那么你有可能会在控制台中发现类似于如下内容的警告日志：
```log
[WARN] Unable to find the com.charleskorn.kaml:kaml in current classpath, the bot configuration parser in *.bot.yaml format will not be available.
```
假如你没有使用 **YAML** 格式文件的计划，那么大可以无视此警告。

:::

### Properties

如果你希望增加对 `*.bot.properties` 格式文件的支持，请添加 [`kotlinx-serialization-properties`](https://github.com/Kotlin/kotlinx.serialization/tree/master/formats#properties) 依赖。

<Tabs groupId="use-dependency">
<TabItem value="Maven" default>

```xml title=pom.xml
<dependencies>
    <!-- https://mvnrepository.com/artifact/com.charleskorn.kaml/kaml -->
    <dependency>
        <groupId>org.jetbrains.kotlinx</groupId>
        <artifactId>kotlinx-serialization-properties</artifactId>
        <!-- 参考 https://github.com/Kotlin/kotlinx.serialization -->
        <version>${ktx-serialization-properties-version}</version>
    </dependency>
</dependencies>
```

</TabItem>
<TabItem value="Gradle Kotlin DSL">

```kotlin title=gradle.build.kts
dependencies {
    // 参考 https://github.com/Kotlin/kotlinx.serialization
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-properties:$ktx_serialization_properties_version")
}
```

</TabItem>
<TabItem value="Gradle Groovy">

```groovy title=gradle.build
dependencies {
    // 参考 https://github.com/Kotlin/kotlinx.serialization
    implementation 'org.jetbrains.kotlinx:kotlinx-serialization-properties:$ktx_serialization_properties_version'
}
```

</TabItem>
</Tabs>


:::note 日志

如果无法在你的运行时环境中找到此依赖，那么你有可能会在控制台中发现类似于如下内容的警告日志：

```log
[WARN] Unable to find the kotlinx-serialization-properties in current classpath, the bot configuration parser in *.bot.properties format will not be available.
```

假如你没有使用 **Properties** 格式文件的计划，那么大可以无视此警告。

:::

## 配置项
对于一个bot配置文件，其可能存在的属性在每个不同的组件下都是不同的，但是有一个属性必定存在，即 `component`:

<Tabs groupId="bot-config">
<TabItem value="json">

```json title='my-bot.bot'
{
  "component": "simbot.xxxx"
}
```

</TabItem>
<TabItem value="YAML">

```yaml title='my-bot.bot.yaml'
component: 'simbot.xxxx'
```

</TabItem>
<TabItem value="properties">

```properties title='my-bot.properties'
component=simbot.xxxx
```

</TabItem>
</Tabs>


`component` 属性用来阐明此配置文件是为了哪个组件所服务的，它的值为对应组件的ID值。
例如 `simbot.mirai`，则代表此配置文件为 [mirai组件](../component-overview/mirai) 所使用的配置。

一个配置文件代表了一个组件下某个bot的特定配置。
而除了所有配置文件内都应存在的配置项 `component` 以外，其他的所有内容都是组件实现所**定制**的，你需要参考相关组件的说明文档来进行进一步的配置。


<Tabs groupId="bot-config">
<TabItem value="JSON">

```json title='my-bot.bot.json'
{
  "component": "simbot.xxx",
  "code": 123456,
  "password": "password",
  "config": {
    "type": "normal",
    "duration": 60000
  }
}
```

</TabItem>
<TabItem value="YAML">

```yaml title='my-bot.bot.yml'
component: 'simbot.xxx'
code: 123456
password: 'password'
config:
  cache: !<normal>
  duration: 60000
```

</TabItem>
<TabItem value="Properties">

```properties title='my-bot.properties'
component=simbot.xxx
code=123456
password=password
config.cache.type=normal
config.cache.value.duration=60000
```

</TabItem>
</Tabs>

## 解析

:::note 虽然...

绝大多数情况下，你都不需要自行解析 bot 配置文件。

:::

:::info

`BotVerifyInfo` 通过 [`kotlinx-serialization`](https://github.com/Kotlin/kotlinx.serialization) 实现反序列化，因此你需要使用 [Kotlin](https://kotlinlang.org/) 来完成配置文件的解析。

:::


你可以通过构建 `BotVerifyInfo` 来自定义解析一个 bot 配置文件。

<Tabs groupId="bot-config">
<TabItem value="JSON">

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
    // 这里选择的是通过 标准解码器工厂 中的 Json 格式的解码器工厂来构建一个 Json 格式的配置文件解码器。
    val botVerifyInfo = configResource.toBotVerifyInfo(
        StandardBotVerifyInfoDecoderFactory.Json.create {
            // config...
            isLenient = true
            ignoreUnknownKeys = true
        }
    )
    
    val config = botVerifyInfo.decode(CustomConfig.serializer())
}
```

</TabItem>
<TabItem value="YAML">

假设一个配置文件如下：

```yaml title='custom.bot.yaml'
component: 'example.foo'
age: 14
name: 'forliy'
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
    val configResource = Path("custom.bot.yaml").toResource()
    
    // 提供一个配置信息解码器并构建为 BotVerifyInfo
    // 这里选择的是通过 标准解码器工厂 中的 Yaml 格式的解码器工厂来构建一个 Yaml 格式的配置文件解码器。
    val botVerifyInfo = configResource.toBotVerifyInfo(
        StandardBotVerifyInfoDecoderFactory.Yaml.create {
            // config...
        }
    )
    
    val config = botVerifyInfo.decode(CustomConfig.serializer())
}
```

</TabItem>
<TabItem value="Properties">

假设一个配置文件如下：

```properties title='custom.bot.properties'
component=example.foo
age=14
name=forliy
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
    val configResource = Path("custom.bot.properties").toResource()
    
    // 提供一个配置信息解码器并构建为 BotVerifyInfo
    // 这里选择的是通过 标准解码器工厂 中的 Properties 格式的解码器工厂来构建一个 Properties 格式的配置文件解码器。
    val botVerifyInfo = configResource.toBotVerifyInfo(
        StandardBotVerifyInfoDecoderFactory.Properties.create {
            // config...
        }
    )
    
    val config = botVerifyInfo.decode(CustomConfig.serializer())
}
```

</TabItem>
</Tabs>



