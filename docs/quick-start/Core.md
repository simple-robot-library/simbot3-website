---
sidebar_position: 1
title: Core
description: 使用核心库进行开发。
tags: [快速开始]
---

此章节示例使用基础的核心模块。有关相关模块的说明，可以参考 [核心模块概述](../overviews/module-overview/core)

:::note

下述示例内容建立在你想要使用 [**腾讯频道组件**](../component-overview/tencent-guild) 和 [**mirai组件**](../component-overview/mirai) 的 **假设** 之上。

:::

核心库没有什么注解、扫描，是更贴近于原生使用习惯的库，也许你需要写的代码会多一点儿，但是也能够让你可以更好的控制你所编写的一切。


:::info

如果你希望使用类似于simbot2中以注解作为主要开发风格的库，或者希望能拥有简单依赖注入功能和扫描功能的库以便于规模化开发的话，你可以参考 [快速开始 - Boot](Boot.md)。

:::

## 使用依赖

import version from './dpVersion.json'
import QuickStartCoreCodes from '@site/src/components/QuickStartCoreCodes';
import QuickStartCoreSnapshotCodes from '@site/src/components/QuickStartCoreSnapshotCodes';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<QuickStartCoreCodes version={version} />


<details>
<summary>使用快照版本</summary>

:::note

除了使用release版本，你也可以使用快照版本。simbot 的快照版本可以前往 <a href="https://oss.sonatype.org/content/repositories/snapshots/love/forte/simbot/simbot-api/">https://oss.sonatype.org/content/repositories/snapshots/love/forte/simbot/simbot-api/</a> 查询。

:::

<QuickStartCoreSnapshotCodes version={version} />

</details>





## 开始
### 构建事件管理器

事件管理器应当是你第一个所需的东西。

<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin
val eventManager = coreListenerManager {
    // 各种配置，比如拦截器
}
```

</TabItem>
<TabItem value="Java">

```java
// 配置类
final CoreListenerManagerConfiguration configuration = new CoreListenerManagerConfiguration();

final CoreListenerManager eventManager = CoreListenerManager.newInstance(configuration);
```

</TabItem>
</Tabs>

### 构建bot管理器
因为我假设你同时使用了两个组件，因此你要构建两个管理器。

<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin
// 腾讯频道bot管理器
val tcgBotManager = tencentGuildBotManager(eventManager) {
        // 各种配置。这里我们假设默认情况下，所有注册的bot都只监听AT_MESSAGE事件
        botConfigure = { _, _, _ ->
        intentsForShardFactory = { EventSignals.AtMessages.intents }
    }
}
// mirai bot管理器
val miraiBotManager = miraiBotManager(eventManager)
```

</TabItem>
<TabItem value="Java">

```java
// 腾讯频道bot管理器配置类
final TencentGuildBotManagerConfiguration tencentGuildBotManagerConfiguration = new TencentGuildBotManagerConfiguration(eventManager);
// 假设在默认情况下，所有的bot都只监听AT_MESSAGE事件
tencentGuildBotManagerConfiguration.setBotConfigure((botConfiguration, appId, appKey, token) -> {
    botConfiguration.intentsForShardFactoryAsInt(share -> EventSignals.AtMessages.getIntentsValue());
    return Unit.INSTANCE; // kotlin lambda函数导致的问题
});

final TencentGuildBotManager tcgBotManager = TencentGuildBotManager.newInstance(tencentGuildBotManagerConfiguration);

// mirai bot管理器
final MiraiBotManager miraiBotManager = MiraiBotManager.newInstance(eventManager);
```

</TabItem>
</Tabs>


### 注册监听函数
回到上面我们一开始构建好的 eventManager来，向其中注册监听函数。


:::caution 注意

下文中有关于监听函数注册的内容并非目前的最推荐方式。

:::


<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin
// 注册方式很多，这里仅提供几个示例
// 假设监听 腾讯频道中的 TcgChannelAtMessageEvent
eventManager.listen { _, event: TcgChannelAtMessageEvent ->
    val author = event.author()
    event.reply("发消息的是: ${author.username}")
}

// 假设监听 mirai组件中的 MiraiGroupMessageEvent
eventManager.listen { _, event: MiraiGroupMessageEvent ->
    val author = event.author()
    event.reply("发消息的是: ${author.username}")
}

// 假设监听 simbot标准api中的 MessageEvent, 所有MessageEvent下的子类型事件都会被触发
eventManager.listen { _, event: MessageEvent ->
    val bot = event.bot
    println("收到消息的bot: ${bot.username}")
    println("事件所属组件：${bot.component}")
    // 如果支持回复，则回复
    event.replyIfSupport("Hello Simbot")
}
```

</TabItem>
<TabItem value="Java">

```java
// 注册方式很多，这里仅提供几个示例
// 假设监听 腾讯频道中的 TcgChannelAtMessageEvent
eventManager.register(CoreListenerUtil.newCoreListener(
        TcgChannelAtMessageEvent.Key,
        // context: 事件处理上下文
        // event: 你要监听的事件类型
        (context, event) -> {
            final TencentMember author = event.getAuthor();
            event.replyBlocking("发消息的是: " + author.getUsername());
        }
));

// 假设监听 mirai组件中的 MiraiGroupMessageEvent
eventManager.register(CoreListenerUtil.newCoreListener(
        MiraiGroupMessageEvent.Key,
        (context, event) -> {
            final MiraiMember author = event.getAuthor();
            event.replyBlocking("发消息的是: " + author.getUsername());
        }
));

// 假设监听 simbot标准api中的 MessageEvent, 所有MessageEvent下的子类型事件都会被触发
eventManager.register(CoreListenerUtil.newCoreListener(
        MessageEvent.Key,
        (context, event) -> {
            final Bot bot = event.getBot();
            System.out.println("收到消息的bot: " + bot.getUsername());
            System.out.println("事件所属组件：" + bot.getComponent());
            // 如果支持回复，则回复
            if (event instanceof ReplySupport) {
                ((ReplySupport) event).replyBlocking("Hello Simbot");
            }
        }
));
```

</TabItem>
</Tabs>

### 注册BOT
事件注册完成之后，你可能发现了，我们还没有注册任何的bot。

<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
// TODO
```

</TabItem>
<TabItem value="Java" label="Java">

```java
// TODO
```

</TabItem>
</Tabs>




