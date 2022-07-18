---
sidebar_position: 30
title: 持续会话
---

在simbot3中优化了在simbot2中的持续会话作用域，并使用了更为直观的方式来提供会话的使用。


:::info 注

下述中出现的 `@Listener` 、`@Listen` 等诸如此类的注解是由 `boot` 模块所提供的。假如你只是用了基础的核心模块，可能会与下述示例存在一定出入，但是对于 `ContinuousSessionContext` 在监听函数中的使用是相同的。

:::

:::caution 实验性

持续会话相关api尚处于**实验阶段**，可能会存在各种问题并且可能会随时变成API。

:::


## 描述

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

首先，你需要在你的监听函数内取得一个 `持续会话作用域 (ContinuousSessionContext)` 来作为进行函数内部会话的入口。
1. 使用context获取：
   `ContinuousSessionContext` 本质是 `EventProcessingContext中` `作用域 (Scope)` 的一种，你可以通过 `ContinuousSessionContext.getAttribute(...)` 进行获取，例如：

<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin
@Listener
suspend fun listener(context: EventProcessingContext) {
    val sessionContext = context.getAttribute(EventProcessingContext.Scope.ContinuousSession)
    // ..
}
```

</TabItem>
<TabItem value="Java">

```java
@Beans
public class MyListener {
    @Listener
    public void listener(EventProcessingContext context) {
        final ContinuousSessionContext sessionContext = context.getAttribute(EventProcessingContext.Scope.ContinuousSession);
        // ...
    }
}
```

</TabItem>
</Tabs>

2. 通过参数获取：
   在simbot3 中，`监听函数(@Listener)` 的参数由 `Binder` 负责进行解析与预处理。默认的Binder中会提供针对 `EventProcessingContext.Scope` 中元素的处理，因此你可以直接在一个监听函数的参数中使用 `ContinuousSessionContext` 来得到它：


<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin
@Listener
suspend fun listener(sessionContext: ContinuousSessionContext) {
    // ..
}
```

</TabItem>
<TabItem value="Java">

```java
@Beans
public class MyListener {
    @Listener
    public void listener(ContinuousSessionContext sessionContext) {
        // ...
    }
}
```

</TabItem>
</Tabs>


## 示例
:::danger TODO

`v3.0.0.preview.10+` 持续会话API经历一次重构，下文示例已经过时。 

:::


<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin
@Listener
@ContentTrim // 使事件过滤中的目标字符串前后去空
@Filter("记录", matchType = MatchType.TEXT_EQUALS)
suspend fun ChannelMessageEvent.listen(session: ContinuousSessionContext): EventResult {
    
    val userId = author.id
    val channelId = channel().id
    
    channel().send("请输入你的名称")
    
    // session.waitingFor 会挂起，直到超时，或者监听函数内调用了 provider.push / provider.pushException
    
    val name: String = session.waitingFor(id = randomID(), timeout = 1.minutes) { event: ChannelMessageEvent, context, provider ->
        
        // session构建的临时监听器暂时无法整合例如 @Filter 等便捷过滤的方法，你需要手动匹配事件是否是你所需要的
        if (channel().id == channelId && author.id == userId) {
            val value = event.messageContent.plainText.trim()
            provider.push(value) // 当得到的需要的值，推送结果以结束外层挂起
        }
    }
    
    channel().send("你的名称：$name")
}
```

</TabItem>
<TabItem value="Java">

```java
@Beans
public class DemoListener {

    
    @Listener
    @ContentTrim // 使事件过滤中的目标字符串前后去空
    @Filter(value = "记录", matchType = MatchType.TEXT_EQUALS)
    public void listen(GroupMessageEvent event, ContinuousSessionContext sessionContext) throws ExecutionException, InterruptedException {
        final ID authorId = event.getAuthor().getId();
        final ID groupId = event.getGroup().getId();

        replyIfSupport(event, () -> "请输入你的名称");


        // 得到一个String类型的接收器
        final ContinuousSessionReceiver<String> receiver = sessionContext.waiting(GroupMessageEvent.Key, (e, context, provider) -> {

            // session构建的临时监听器暂时无法整合例如 @Filter 等便捷过滤的方法，你需要手动匹配事件是否是你所需要的
            if (e.getGroup().getId().equals(groupId) && e.getAuthor().getId().equals(authorId)) {
                String value = e.getMessageContent().getPlainText().trim();
                provider.push(value); // 当得到的需要的值，推送结果以结束外层future的等待
            }

        });

        // 转化为 future 后进行等待。
        final String name = receiver.asFuture().get();

        replyIfSupport(event, () -> "你的名称：" + name));
    }

    /** 简化 Java 中事件进行 'reply' 的函数。 */
    private void replyIfSupport(Event event, Supplier<String> messageSupplier) {
        if (!(event instanceof MessageReplySupport)) {
            throw new IllegalStateException("事件不支持消息回复");
        }

        ((MessageReplySupport) event).replyBlocking(messageSupplier.get());
    }
}

```

</TabItem>
</Tabs>
