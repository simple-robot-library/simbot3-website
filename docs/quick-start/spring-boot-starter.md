---
sidebar_position: 3
tags: [快速开始]
title: 使用SpringBoot
---

此章节演示simbot以 `Spring Boot Starter` 的形式整合 [`spring`](http://spring.io/)
。有关相关模块的说明，可以参考 [Simple Robot: Spring Boot Starter 模块概述](../overviews/module-overview/spring-boot-starter)

:::info 别忘了组件

simbot核心库本身没有任何平台功能。当你阅读完本章节后，你需要在核心库依赖之外添加一个你所需要的组件。

你可以前往[**《组件》**](../component-overview)章节了解各个由simbot团队提供的组件实现，
比如对接QQ机器人的[**mirai组件**](../component-overview/mirai)。

对于组件的引用来说，不管是使用核心库还是使用SpringBoot都没有区别。

:::



# 安装

import version from './dpVersion.json';
import QuickStartSpringBootStarterCodes from './QuickStartSpringBootStarterCodes';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<QuickStartSpringBootStarterCodes version={version} />

:::note 引用SpringBoot

`Spring Boot Starter` 不会主动传递任何与 spring 相关的依赖，因此你必须主动额外的引入其他任意你所需的 spring 依赖, 例如 `spring-web`。
:::


# 使用

## 启动类

首先，编写一个 Spring Boot 项目的入口类。在 Spring Boot 中，我们通过标记一个注解 [`@EnableSimbot`](https://docs.simbot.forte.love/main/simboot-core-spring-boot-starter/love.forte.simboot.spring.autoconfigure/-enable-simbot)
来开启simbot的使用。



<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin title='example/Main.kt'
@EnableSimbot // 👈
@SpringBootApplication
class Main

fun main(args: Array<String>) {
    runApplication<Main>(*args)
}
```

</TabItem>
<TabItem value="Java">

```java title='example/Main.java'
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

:::caution 要坚持

需要注意的是，如果你的项目中没有什么能够保持项目持续运行的组件的话（比如 `spring-web` ）， 那么项目会在启动后停止。
如果想要避免这种情况，你可以从 `SpringContext` 中得到 `Application` 并执行它的 `join` 相关方法。

:::

## 监听函数

在 `Spring Boot Starter` 模块下，所有的监听函数都需要标记 [`@Listener`][anno-listener]，
至于你想要监听的事件，将其作为参数即可，不再需要额外的标记。

被标记了 [`@Listener`][anno-listener] 的函数所处的类必须被Spring所管理，简单来说你需要在类上标记 `@Component` 或其衍生注解。

下面将会以 监听 `FriendMessageEvent(好友消息事件)` 作为示例。

[anno-listener]: https://docs.simbot.forte.love/main/simboot-core-annotation/love.forte.simboot.annotation/-listener/

<Tabs groupId="code">
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


## 配置

`Spring Boot Starter` 中实际上也存在对应的 `Application` 类型，只不过这次不再需要你来处理这些内容了。而对于一些可配置内容，
你可以使用spring的配置文件进行提供：

<Tabs groupId="spring-config">
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

```properties
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



## BOT配置

参考章节 [BOT配置](../basic/bot-config)

## 打包

参考章节 [打包](../basic/package)
