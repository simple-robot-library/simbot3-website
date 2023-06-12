---
title: SpringBoot
draft: true
---

TODO!

simbot 提供了 starter 来支持快速与SpringBoot相结合。

### 使用

首先引入依赖，如果你使用了 `simbot-core` 或 `simboot-core` ，**替换** 即可，
starter 中包含了对 `simbot-core` 的引用。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {version} from '@site/static/version.json';
import CodeBlock from '@theme/CodeBlock';

<Tabs groupId="use-dependency">
<TabItem value="Maven" attributes={{'data-value': `Maven`}}>

<CodeBlock language="xml">{`
<dependency>
<groupId>love.forte.simbot.boot</groupId>
<artifactId>simboot-core-spring-boot-starter</artifactId>
<version>${version}</version>
</dependency>
`.trim()}</CodeBlock>


</TabItem>
<TabItem value="Gradle Kotlin DSL" attributes={{'data-value': `Kts`}}>

<CodeBlock language="kotlin">{`
implementation("love.forte.simbot.boot:simboot-core-spring-boot-starter:${version}")
`.trim()}</CodeBlock>

</TabItem>
<TabItem value="Gradle Groovy" attributes={{'data-value': `Gradle`}}>

<CodeBlock language="groovy">{`
implementation 'love.forte.simbot.boot:simboot-core-spring-boot-starter:${version}'
`.trim()}</CodeBlock>

</TabItem>
</Tabs>

然后书写一个标准的 Spring Boot 应用入口，并添加启动注解 `@EnableSimbot`:

<Tabs groupId="code">
<TabItem value="Kotlin" attributes={{'data-value': `Kotlin`}}>

```kotlin title='example/Main.kt'
// highlight-next-line
@EnableSimbot // 👈
@SpringBootApplication
open class Main

fun main(args: Array<String>) {
    runApplication<Main>(*args)
}
```

</TabItem>
<TabItem value="Java" attributes={{'data-value': `Java`}}>

```java title='example/Main.java'
// highlight-next-line
@EnableSimbot // 👈
@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
```

</TabItem>
</Tabs>

### 配置

starter 中提供了一些可用的 Spring Boot 配置项:

<Tabs groupId="spring-config">
<TabItem value="YAML">

```yaml title='application.yml'
simbot:
  # 是否在bot注册完成后自动启动他们。
  # 默认为 true
  auto-start-bots: true

  # 自定义配置bot资源文件的扫描路径。
  # 默认为 'classpath:simbot-bots/*.bot*'
  bot-configuration-resources:
    - 'classpath:simbot-bots/*.bot*'

  # 如果需要，此处配置扫描顶层函数形式的 Binder Factory。
  # 默认不扫描    
  # top-level-binder-scan-package:
  #   - 'example.binder.foo'
  #   - 'example.binder.bar'

  # 如果需要，此处配置扫描顶层函数形式的监听函数。
  # 默认不扫描    
  # top-level-listener-scan-package:
  #   - 'example.listener.foo'
  #   - 'example.listener.bar'
```

</TabItem>
<TabItem value="properties">

```properties title='application.properties'
# 是否在bot注册完成后自动启动他们。
# 默认为true
simbot.auto-start-bots=true

# 自定义配置bot资源文件的扫描路径。
# 默认为 classpath:simbot-bots/*.bot*
simbot.bot-configuration-resources[0]=classpath:simbot-bots/*.bot*

# 如果需要，此处配置扫描顶层函数形式的监听函数。
# 默认不扫描
# simbot.top-level-listener-scan-package[0]=example.listener.foo
# simbot.top-level-listener-scan-package[1]=example.listener.bar

# 如果需要，此处配置扫描顶层函数形式的 Binder Factory。
# 默认不扫描
# simbot.top-level-binder-scan-package[0]=example.binder.foo
# simbot.top-level-binder-scan-package[1]=example.binder.bar
```

</TabItem>
</Tabs>

### BOT配置

通常情况下 bot 信息的配置也是通过配置文件完成的。
以上述配置或默认配置为例，bot 配置文件应当在资源目录中的 `simbot-bots/*.bot*` 下。

不同的组件所需要的配置文件内容是不同的，这里给出各组件针对配置文件的说明：

| 组件          | 相关文档链接                                                                                  |
|-------------|-----------------------------------------------------------------------------------------|
| **QQ频道组件**  | [手册：BOT配置文件](https://simple-robot.github.io/simbot-component-qq-guild/docs/bot-config/) |
| **KOOK组件**  | [手册：BOT配置文件](https://simple-robot.github.io/simbot-component-kook/docs/bot-config/)     |
| **mirai组件** | [手册：BOT配置文件](https://component-mirai.simbot.forte.love/docs/bot-config)                 |

### 事件监听

在 boot 模块或本章所述的 starter 模块下，在一个被 Spring 所管理的 bean 中使用 `@Listener` 注解来监听一个事件，例如：

<Tabs groupId="code">
<TabItem value="Kotlin" attributes={{'data-value': `Kotlin`}}>

```kotlin title='MyListener.kt'
@Component
class MyListener {
    // highlight-next-line
    @Listener
    suspend fun onEvent(event: FriendMessageEvent) {
        // 处理事件...
    }
}
```

</TabItem>
<TabItem value="Java" attributes={{'data-value': `Java`}}>

```java title='MyListener.java'
@Component
public class MyListener {
    // highlight-next-line
    @Listener
    public void onEvent(FriendMessageEvent event) {
        // 处理事件...
    }
}
```

</TabItem>
</Tabs>

:::tip 更详细

有关注解事件监听的更多信息可参考文档章节 [事件监听](../../docs/basic/event-listening#注解监听) 
中有关 **注解监听** 的相关内容。

:::

### 获取Application

在使用 starter 时，会有一些可能对你有用的类型被注入到依赖中：

- `love.forte.simbot.application.Application`
- `love.forte.simbot.event.application.Application.Environment` (衍生自 `Application` )
- `love.forte.simbot.event.EventListenerManager` (衍生自 `Application` )
- `love.forte.simbot.application.BotManagers` (衍生自 `Application` )

你可以配合这些类型来实现一些比较特殊的功能，例如获取当前所有的bot、动态注册bot、动态注册监听函数等。

以"动态注册bot"为例：

:::danger TODO

TODO

:::

<Tabs groupId="code">
<TabItem value="Kotlin" attributes={{'data-value': `Kotlin`}}>

```kotlin title='RegisterSomeBot.kt'
@Component
class RegisterSomeBot(
    // highlight-next-line
    val application: Application
    // 也可以直接注入 BotManagers
) {
    
    /**
     * 一些逻辑，比如用来注册bot
     */
    fun register() {
        val bot = application.botManagers.register(...)
        // 或精准注册
        val bot = application.botManagers.firstInstance<MiraiBotManager>().register(...)
        
        application.launch { bot.start() }
    }
}
```

</TabItem>
<TabItem value="Java" attributes={{'data-value': `Java`}}>

```java title='MyListener.java'
@Component
public class RegisterSomeBot {
    private final Application application;

    public RegisterSomeBot(Application application) {
        // highlight-next-line
        this.application = application;
        // 也可以直接注入 BotManagers
    }

    public void run() {
        
    }
}
```

</TabItem>
</Tabs>
