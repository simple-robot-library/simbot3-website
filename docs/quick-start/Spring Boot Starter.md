---
sidebar_position: 3
---

此章节示例整合 `Spring Boot`。有关相关模块的说明，可以参考 [Simple Robot Spring Boot Starter模块概述](../overviews/module-overview/spring-boot-starter)

:::note

下文将会**假设**你想要使用 [**腾讯频道组件**](../component-overview/tencent-guild) 和 [**mirai组件**](../component-overview/mirai) 。

:::


:::caution 版本要求

simbot 的 `Spring Boot Starter` 对 `Spring Boot` 或者说对 `Spring Framework` 版本存在一定要求。

详细信息请查看 [**simbot 中的 Spring Boot 版本要求**](../overviews/module-overview/spring-boot-starter/version-requirements.md) 。

:::


## 使用依赖

import version from './dpVersion.json'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs groupId="use-dependency">
<TabItem value="Maven" label="Maven" default>
<CodeBlock language="xml">
{`<!-- simbot核心标准库 -->
<dependency>
    <groupId>love.forte.simbot.boot</groupId>
    <artifactId>simboot-core-spring-boot-starter</artifactId>
    <version>${version.simbot.version}</version>
</dependency>\n
<!-- 腾讯频道组件 -->
<dependency>
    <groupId>love.forte.simbot.component</groupId>
    <artifactId>simbot-component-tencent-guild-boot</artifactId>
    <version>${version.simbot.component.tcg}</version>
</dependency>\n
<!-- mirai组件 -->
<dependency>
    <groupId>love.forte.simbot.component</groupId>
    <artifactId>simbot-component-mirai-boot</artifactId>
    <version>${version.simbot.component.mirai}</version>
</dependency>`}
</CodeBlock>
</TabItem>

<TabItem value="Gradle Kotlin DSL" label="Gradle Kotlin DSL">
<CodeBlock language="Kotlin">
{`// 3.x中，大部分组件的版本维护独立于标准库。
// simbot核心标准库
implementation("love.forte.simbot.boot:simboot-core-spring-boot-starter:${version.simbot.version}")\n
// 腾讯频道组件
implementation("love.forte.simbot.component:simbot-component-tencent-guild-boot:${version.simbot.component.tcg}")\n
// mirai组件
implementation("love.forte.simbot.component:simbot-component-mirai-boot:${version.simbot.component.mirai}")`}
</CodeBlock>
</TabItem>

<TabItem value="Gradle Groovy" label="Gradle Groovy">
<CodeBlock language="Groovy">
{`// 3.x中，大部分组件的版本维护独立于标准库。
// simbot核心标准库
implementation 'love.forte.simbot.boot:simboot-core-spring-boot-starter:${version.simbot.version}'\n
// 腾讯频道组件
implementation 'love.forte.simbot.component:simbot-component-tencent-guild-boot:${version.simbot.component.tcg}'\n
// mirai组件
implementation 'love.forte.simbot.component:simbot-component-mirai-boot:${version.simbot.component.mirai}'`}
</CodeBlock>
</TabItem>
</Tabs>

:::note

可以注意到，simbot 的 `Spring Boot Starter` 除了核心依赖的坐标不同以外，组件的依赖配置与 [Boot](Boot.md) 模块的配置基本一致。

:::

## 使用
### 启动类
首先，编写一个Spring Boot项目的入口类，也就是启动类。在Spring Boot中，我们通过标记一个注解 @EnableSimbot 来开启simbot的使用。


<Tabs>
<TabItem value="Kotlin">

```kotlin title='Main.kt'
@EnableSimbot
@SpringBootApplication
class Main

fun main(args: Array<String>) {
    runApplication<Main>(*args)
}
```

</TabItem>
<TabItem value="Java">

```java title='Main.java'
@EnableSimbot
@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
```

</TabItem>

</Tabs>

:::caution 注意

需要注意的是，如果你的项目中没有什么能够保持项目持续运行的组件的话（比如 `spring-web` ）， 那么项目会在启动后停止。
如果想要避免这种情况，你可以从 `SpringContext` 中得到 `SimbootContext` 并执行他们的 `join` 相关方法。
有关于 `SimbootContext`，你可以参考 [**快速开始 - Boot**](Boot.md#启动类) 中有关 `启动类` 的相关内容。

:::


### 监听函数
在 `Boot` 模块下，所有的监听函数都需要标记 `@Listener` 。而这在 `Spring Boot Starter` 模块下依旧适用。
而至于你想要监听的事件，将其作为参数即可，不再需要额外的标记。
下面将会以 监听 `FriendMessageEvent(好友消息事件)` 作为示例。 


<Tabs>
<TabItem value="Kotlin">

```kotlin title='MyListener.kt'
@Component
class MyListener {
    
    @Listener
    suspend fun FriendMessageEvent.onEvent() {
        // do..
    }
}
```

</TabItem>
<TabItem value="Java">

```java title='MyListener.java'
@Component
public class MyListener {

    @Listener
    public void onEvent(FriendMessageEvent event) {
        // do...
    }
}
```

</TabItem>

</Tabs>

在 `Spring Boot` 中，有关于依赖注入等相关内容，就像普通的 `Spring Boot` 项目那样就好。
举个其他例子，你可以与一个 `Controller` 配合使用：



<Tabs>
<TabItem value="Kotlin">

```kotlin title='BarController.kt'
@RestController
class BarController {
    
    @GetMapping("/hello")
    fun hello() = "Hello Simbot"
    
    
    @Listener
    suspend fun FriendMessageEvent.onEvent() {
        // do..
    }
}
```

</TabItem>
<TabItem value="Java">

```java title='BarController.java'
@RestController
public class BarController {
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello Simbot"
    }

    @Listener
    public void onEvent(FriendMessageEvent event) {
        // do...
    }
}
```

</TabItem>

</Tabs>


## BOT配置

参考章节 [BOT配置](../basic/bot-config.md)


## 打包
参考章节 打包(TODO)
