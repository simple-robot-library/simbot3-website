---
sidebar_position: 15
title: 事件监听
toc_max_heading_level: 4
---

import Label from '@site/src/components/Label'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


事件监听可能是你最需要了解的功能。本章将会为你介绍如何去监听一个事件。换言之，即如何写一个监听函数。


:::danger TODO

施工中

:::


## 监听函数

### 定义

在讲解事件如何监听之前，让我们先来了解一下什么是**监听函数**。下面是监听函数的基本定义(有所简化)：

```kotlin
public interface EventListener : ... {
    /** 检测某事件类型是否为当前事件所需要的类型 */
    public fun isTarget(event: Event.Key<*>): Boolean
    
    /** 对事件进行匹配 */
    public suspend fun match(context: EventListenerProcessingContext): Boolean

    /** 如果 [match] 匹配成功，处理此事件并得到一个结果 */
    public suspend fun invoke(context: EventListenerProcessingContext): EventResult
    
    // 其他...
}
```

可以看得出来，对于一个监听函数，其主要存在两个基本功能，就是对事件的匹配和事件的处理。
这其中，“事件的匹配”被分为了两个步骤。

如果用代码来表示一次事件的处理，那么它大概是如下的效果：

```kotlin
val eventContext = ...

val listener = ...

if (listener.isTarget(eventContext.event.key) && listener.match(eventContext)) {
    return listener.invoke(eventContext)
} else {
    return EventResult.invalid()
}
```

### 实现

既然知道了监听函数的定义，那么我们便可以通过任意一个自定义类型来实现它。

我们以监听**好友消息事件**为例，创建一个当好友发送"在吗"时回复"在的"的监听函数。

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
class MyListener : EventListener {
    override fun <T : Any> getAttribute(attribute: Attribute<T>): T? = null
    
    /**
     * 事件类型匹配
     */
    override fun isTarget(eventType: Event.Key<*>): Boolean = eventType isSub FriendMessageEvent
    
    /**
     * 事件匹配
     */
    override suspend fun match(context: EventListenerProcessingContext): Boolean {
        return "在吗" == context.textContent?.trim()
    }
    
    /**
     * 事件处理
     */
    override suspend fun invoke(context: EventListenerProcessingContext): EventResult {
        (context.event as FriendMessageEvent).reply("在的")
        return EventResult.defaults()
    }
}
```

</TabItem>
<TabItem value="Java">

:::caution 挂起与阻塞

当通过Java实现 `suspend` 函数的时候，函数参数中会多一个 `Continuation<? super xxx> $completion` 参数。
**理论上**来讲，你可以考虑无视它，并直接开始你的阻塞式逻辑。这理论上是可行的，
这会使得这个函数本质上仍旧是阻塞函数。

不过需要注意，这时候函数的返回值会变成 `Object`. 但是你实际返回的内容仍然要与正确的函数定义相吻合。

:::

```java
public class MyListener implements EventListener {

    @Nullable
    @Override
    public <T> T getAttribute(@NotNull Attribute<T> attribute) {
        return null;
    }

    /**
     * 事件类型匹配
     */
    @Override
    public boolean isTarget(@NotNull Event.Key<?> eventType) {
        // 判断目标是否为 '好友消息事件'
        return Event.Key.isSub(eventType, FriendMessageEvent.Key);
    }

    /**
     * 事件匹配
     */
    @Nullable
    @Override
    public Object match(@NotNull EventListenerProcessingContext context, @NotNull Continuation<? super Boolean> $completion) {
        final String textContent = context.getTextContent();
        if (textContent == null) {
            return false;
        }

        return textContent.trim().equals("在吗");
        // return type: boolean, non-null
    }

    /**
     * 事件处理
     */
    @Override
    public Object invoke(EventListenerProcessingContext context, Continuation<? super EventResult> continuation) {
        ((FriendMessageEvent) context.getEvent()).replyBlocking("在的");
        return EventResult.defaults();
        // return type: EventResult, non-null
    }
}
```

</TabItem>
</Tabs>


当然，在这过程中，你可能会发现一些问题，比如匹配完成后还需要在 `invoke` 中进行类型转化等，
这显然并不是一个很好的类型安全方案。但是当然，解决这个问题最快的办法就是将所有的逻辑都放到 `invoke` 中，
一气呵成：

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
class MyListener : EventListener {
    override fun <T : Any> getAttribute(attribute: Attribute<T>): T? = null
    
    /** 事件类型匹配，无逻辑，直接得到true */
    override fun isTarget(eventType: Event.Key<*>): Boolean = true // eventType isSub FriendMessageEvent
    
    /** 事件匹配，无逻辑，直接得到true */
    override suspend fun match(context: EventListenerProcessingContext): Boolean = true
    
    /** 事件处理 */
    override suspend fun invoke(context: EventListenerProcessingContext): EventResult {
        context.event.let { event ->
            if (event is FriendMessageEvent && "在吗" == context.textContent?.trim()) {
                event.reply("在的")
                return EventResult.defaults()
            }
        }
        
        // 没有匹配成功
        return EventResult.invalid()
    }
}
```

</TabItem>
<TabItem value="Java">

:::caution 挂起与阻塞

当通过Java实现 `suspend` 函数的时候，函数参数中会多一个 `Continuation<? super xxx> $completion` 参数。
**理论上**来讲，你可以考虑无视它，并直接开始你的阻塞式逻辑。这理论上是可行的，
这会使得这个函数本质上仍旧是阻塞函数。

不过需要注意，这时候函数的返回值会变成 `Object`. 但是你实际返回的内容仍然要与正确的函数定义相吻合。

:::

```java
public class MyListener implements EventListener {

    @Nullable
    @Override
    public <T> T getAttribute(@NotNull Attribute<T> attribute) {
        return null;
    }

    /**
     * 事件类型匹配，无逻辑，直接得到true
     */
    @Override
    public boolean isTarget(@NotNull Event.Key<?> eventType) {
        return true;
        // return Event.Key.isSub(eventType, FriendMessageEvent.Key);
    }

    /**
     * 事件匹配，无逻辑，直接得到true
     */
    @Nullable
    @Override
    public Object match(@NotNull EventListenerProcessingContext context, @NotNull Continuation<? super Boolean> $completion) {
        return true;
    }

    /**
     * 事件处理
     */
    @Override
    public Object invoke(EventListenerProcessingContext context, Continuation<? super EventResult> continuation) {
        final Event event = context.getEvent();
        if (event instanceof FriendMessageEvent
            && "在吗".equals(trim(context.getTextContent()))) {

            ((FriendMessageEvent) event).replyBlocking("在的");
            return EventResult.defaults();
        }


        return EventResult.invalid();
        // return type: EventResult, non-null
    }

    private static String trim(String nullableValue) {
        return nullableValue == null ? null : nullableValue.trim();
    }
}
```

</TabItem>
</Tabs>

情况比之前好一些了，不是吗？但还是不那么令人满意。将所有的逻辑都堆到 `invoke` 中，
那么在可能会通过 `isTarget` 和 `match` 进行内部优化时，这种实现方式便可能会破坏整个缓存体系，
使其丧失优化空间。

不仅如此，在Java或其他不支持挂起函数的语言中想要实现此类型也会有很大的难度和更高的出错率。

因此实际上，绝大多数情况下，我们不需要自己实现 `EventListener`, 
核心库中向使用者提供了一些用于快速构建 `EventListener` 实例的辅助构造方法。


### 构造

核心库提供了一种最基本地实现_"命名"_：`SimpleListener`。

:::tip 障眼法

通过各种形如 `simpleListener(...)` 之类的函数构造而来的结果并不一定是类型 `SimpleListener`。

:::

#### 直接构造

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
val listener = simpleListener(FriendMessageEvent, matcher = { 
    // it: FriendMessageEvent
    // this: EventListenerProcessingContext
    textContent == "在吗"
}) { event: FriendMessageEvent -> 
    // this: EventListenerProcessingContext
    event.reply("在的")
    EventResult.defaults()
}
```

或者选择只通过 `invoke` 处理事件，不提供 `matcher` 匹配函数：


```kotlin
val listener = simpleListener(FriendMessageEvent) { event: FriendMessageEvent -> 
    // this: EventListenerProcessingContext
    if (this.textContent == "在吗") {
        event.reply("在的")
        EventResult.defaults()
    } else {
        EventResult.invalid()
    }
}
```

</TabItem>
<TabItem value="Java">

```java
SimpleListeners.listener(
        /* target =  */ FriendMessageEvent.Key,

        /* matcher = */ (context, event) -> "在吗".equals(trim(context.getTextContent())),
        /* invoker = */ (context, event) -> {
            event.replyBlocking("在的");
            return EventResult.defaults();
            // 返回值可选, 如果不提供默认值则视为 EventResult.invalid() .
        }
);

////////////

private static String trim(String nullableValue) {
    return nullableValue == null ? null : nullableValue.trim();
}
```

或者选择只通过 `invoke` 处理事件，不提供 `matcher` 匹配函数：

```java
SimpleListeners.listener(
        /* target =  */ FriendMessageEvent.Key,

        /* invoker = */ (context, event) -> {
            if ("在吗".equals(trim(context.getTextContent()))) {
                event.replyBlocking("在的");
                return EventResult.defaults();
            } else {
                return EventResult.invalid();
            }
            // return EventResult.invalid();
            // 返回值可选, 如果不提供默认值则视为 EventResult.invalid() .
        }
);

////////////

private static String trim(String nullableValue) {
    return nullableValue == null ? null : nullableValue.trim();
}
```

</TabItem>
</Tabs>

#### 构造器

除了直接通过 `simpleListener` 构建最终实例，也可以通过 `Builder` 来分步操作。

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
val listener = buildSimpleListener(FriendMessageEvent) {
    match { textContent?.trim() == "在吗" }
    process { event -> event.reply("在的") }
}
```

也许你发现了，在上述的 `process { ... }` 并没有返回 `EventResult` 类型的结果。
实际上，上述这段代码的真正样貌应该是这样的：

```kotlin
val listener = buildSimpleListener(FriendMessageEvent) {
    match { textContent?.trim() == "在吗" }
    handle { event ->
        event.reply("在的")
        EventResult.invalid()
    }
}
```

此时可以注意到，这次使用的是 `handle { ... }` 而并非 `process`。
`process` 即代表一个返回默认的 `EventResult.invalid` 的事件处理函数体，
如果你不关心当前事件返回什么，那么你可以将其 **无效化**，即返回 `EventResult.invalid`。

不过相应的，后续其他监听函数也将无法得到此监听函数的执行结果。

</TabItem>
<TabItem value="Java">

```java
final SimpleListenerBuilder<FriendMessageEvent> builder = new SimpleListenerBuilder<>(FriendMessageEvent.Key);

builder.match((context, event) -> "在吗".equals(trim(context.getTextContent())));
builder.process((context, event) -> event.replyBlocking("在的"));

final EventListener listener = builder.build();

/////

private static String trim(String nullableValue) {
    return nullableValue == null ? null : nullableValue.trim();
}
```

可以注意到，这里使用 `process { ... }` 并未需要返回一个 `EventResult`。
`process` 即代表一个返回默认的 `EventResult.invalid` 的事件处理函数体，
如果你不关心当前事件返回什么，那么你可以将其 **无效化**，即返回 `EventResult.invalid`。

不过相应的，后续其他监听函数也将无法得到此监听函数的执行结果。

下面示例中展示通过 `handle { ... }` 自定义响应值的方式：

```java
final SimpleListenerBuilder<FriendMessageEvent> builder = new SimpleListenerBuilder<>(FriendMessageEvent.Key);

builder.match((context, event) -> "在吗".equals(trim(context.getTextContent())));
builder.handle((context, event) -> {
    event.replyBlocking("在的");
    return EventResult.defaults();
});

final EventListener listener = builder.build();

/////

private static String trim(String nullableValue) {
    return nullableValue == null ? null : nullableValue.trim();
}
```


</TabItem>
</Tabs>

:::tip 事件处理结果

有关 `EventResult` 的描述会在本章[稍后](#eventresult)介绍。

:::

:::info 不可或缺

在 `SimpleListenerBuilder` 中，`process` 或 `handle` 二者之一必须有且只被配置一次。
换言之，你必须配置当前监听函数的**处理逻辑**。

:::

## 基础监听




## BOOT监听




## EventResult
