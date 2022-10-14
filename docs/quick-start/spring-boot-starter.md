---
sidebar_position: 3
tags: [快速开始]
title: Spring Boot Starter
---

此章节演示simbot以 `Spring Boot Starter` 的形式整合 [`spring`](http://spring.io/)
。有关相关模块的说明，可以参考 [Simple Robot: Spring Boot Starter 模块概述](../overviews/module-overview/spring-boot-starter)

:::note 假设

下文将会 **假设** 你想要使用 [**mirai组件**](../component-overview/mirai)。

:::

# 使用依赖

import version from './dpVersion.json';
import QuickStartSpringBootStarterCodes from './QuickStartSpringBootStarterCodes';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<QuickStartSpringBootStarterCodes version={version} />

:::note 引用Spring Boot

simbot的 `Spring Boot Starter` 模块不会主动传递任何与 spring 相关的依赖，因此你必须主动额外的引入其他任意你所需的 spring 依赖, 例如 `spring-web`。
:::

:::note

可以注意到，simbot 的 `Spring Boot Starter` 除了核心依赖的坐标不同以外，组件的依赖配置与 [**Boot**](Boot) 模块的配置基本一致。

:::

# 使用

## 启动类

首先，编写一个 Spring Boot 项目的入口类。在 Spring Boot 中，我们通过标记一个注解 **`@EnableSimbot`** 来开启simbot的使用。

:::note

注意使用的注解与 [**Boot**](Boot) 模块中的差异。

:::


<Tabs>
<TabItem value="Kotlin">

```kotlin title='example/Main.kt'
@EnableSimbot
@SpringBootApplication
class Main

fun main(args: Array<String>) {
    runApplication<Main>(*args)
}
```

</TabItem>
<TabItem value="Java">

```java title='example/Main.java'
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
如果想要避免这种情况，你可以从 `SpringContext` 中得到 `Application` 并执行它的 `join` 相关方法。

:::

## 依赖注入

在 `Spring Boot Starter` 模块下，依赖注入功能直接依赖与spring自身。因此，你应当直接使用spring的相关注解。

<Tabs>
<TabItem value="Kotlin">

```kotlin title='example/listener/BarListener.kt'
@Component
open class Foo

@Service
open class BarListener(val foo: Foo) {
   
   @Listener
   suspend fun EventProcessingContext.listen(event: TarEvent) {
      // ...
   }
}
```

</TabItem>
<TabItem value="Java">

```java title='example/listener/Foo.java'
@Component
public class Foo {
    // ...
}
```

```java title='example/listener/BarListener.java'
@Service
public class BarListener {
  private final Foo foo;
   
  public BarListener(Foo foo) {
      this.foo = foo;
  }
  
  @Listener
  public void listen(EventProcessingContext context, TarEvent event) {
      // ...
  }
}
```

</TabItem>
</Tabs>

## 监听函数

在 `Boot` 模块下，所有的监听函数都需要标记 `@Listener` 。这在 `Spring Boot Starter` 模块下依旧适用。
至于你想要监听的事件，将其作为参数即可，不再需要额外的标记。
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

## 配置

`Spring Boot Starter` 中实际上也存在相关的 `Application` 信息，只不过这次不再需要你来处理这些内容了。而对于一些可配置内容，
你可以使用spring的配置文件进行提供：

<Tabs>
<TabItem value="YAML">

```yaml
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
  top-level-binder-scan-package:
    - 'example.binder.foo'
    - 'example.binder.bar'

  # 如果需要，此处配置扫描顶层函数形式的监听函数。
  # 默认不扫描    
  top-level-listener-scan-package:
    - 'example.listener.foo'
    - 'example.listener.bar'

```

</TabItem>

<TabItem value="properties">

```properties
# 如果需要，此处配置扫描顶层函数形式的监听函数。
# 默认不扫描
simbot.top-level-listener-scan-package[0]=example.listener.foo
simbot.top-level-listener-scan-package[1]=example.listener.bar

# 如果需要，此处配置扫描顶层函数形式的 Binder Factory。
# 默认不扫描
simbot.top-level-binder-scan-package[0]=example.binder.foo
simbot.top-level-binder-scan-package[1]=example.binder.bar

# 是否在bot注册完成后自动启动他们。
# 默认为true
simbot.auto-start-bots=true

# 自定义配置bot资源文件的扫描路径。
# 默认为 classpath:simbot-bots/*.bot*
simbot.bot-configuration-resources[0]=classpath:simbot-bots/*.bot*
```

</TabItem>
</Tabs>

## 其他..?

`Spring Boot Starter` 内的绝大多数内容与 [Boot](Boot) 内容类似，你可以参考 Boot 中的内容进行使用。

## BOT配置

参考章节 [BOT配置](../basic/bot-config)

## 打包

参考章节 [打包](../basic/package)
