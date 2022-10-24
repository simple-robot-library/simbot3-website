---
sidebar_position: 15
title: 监听函数
toc_max_heading_level: 4
---

import Label from '@site/src/components/Label'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

监听函数，用于承载对事件的处理逻辑。

:::danger TODO

施工中

:::

## 监听函数

### 定义

让我们来了解一下什么是**监听函数**。下面是监听函数（有所简化）的基本定义：

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
**理论上**来讲，你可以考虑无视它，并直接开始你的阻塞式逻辑。这大概是可行的，
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
**理论上**来讲，你可以考虑无视它，并直接开始你的阻塞式逻辑。这大概是可行的，
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
那么在可能会在通过 `isTarget` 和 `match` 进行内部优化的时候破坏整个缓存体系，
使其丧失优化空间。

不仅如此，在Java或其他不支持挂起函数的语言中想要实现 `EventListener` 也会有很大的难度和较高的出错率。

因此，实际上绝大多数情况下我们不应该自己实现 `EventListener`。
核心库中向使用者提供了一些用于快速构建 `EventListener` 实例的辅助构造方法。

### 构造

核心库提供了一种最基本的实现：<code><b>Simple</b>Listener</code> 。

:::info 障眼法?

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

在 `SimpleListenerBuilder` 中，`process` 或 `handle` 二者之一必须有且只被配置一次。
换言之，你必须配置当前监听函数的**处理逻辑**。

下面示例中的内容将**不能**成功构建 `EventListener`, 因为它们没有提供具体的事件处理逻辑，或者配置了多次处理逻辑：

<Tabs groupId="code">
<TabItem value="Kotlin">

_没有配置逻辑:_

```kotlin
val listener = buildSimpleListener(FriendMessageEvent) {
    match { textContent?.trim() == "在吗" }
    // error-start
    // 没有配置事件处理逻辑
    // error-end
}
```

_重复配置逻辑:_

```kotlin
val listener = buildSimpleListener(FriendMessageEvent) {
    match { textContent?.trim() == "在吗" }
    // error-start
    // 重复配置事件处理逻辑
    process { event.reply("在的") }
    process { event.reply("在的!!!") }
    // error-end
}
```

</TabItem>
<TabItem value="Java">

_没有配置逻辑:_

```java
final SimpleListenerBuilder<FriendMessageEvent> builder = new SimpleListenerBuilder<>(FriendMessageEvent.Key);

builder.match((context, event) -> "在吗".equals(context.getTextContent()));
// error-start
// 没有配置事件处理逻辑
// error-end

final EventListener listener = builder.build();
```

_重复配置逻辑:_

```java
final SimpleListenerBuilder<FriendMessageEvent> builder = new SimpleListenerBuilder<>(FriendMessageEvent.Key);

builder.match((context, event) -> "在吗".equals(context.getTextContent()));
// error-start
// 重复配置事件处理逻辑
builder.process((context, event) -> event.replyBlocking("在的"));
builder.process((context, event) -> event.replyAsync("在的!!!"));
// error-end

final EventListener listener = builder.build();
```

</TabItem>
</Tabs>

虽然事件处理逻辑能且必须配置一次，但是对于事件**匹配逻辑**来讲，就没有这么严格了。

<Tabs groupId="code">
<TabItem value="Kotlin">

_配置一次匹配逻辑:_

```kotlin
val listener = buildSimpleListener(FriendMessageEvent) {
    // success-start
    match { textContent?.trim() == "在吗" }
    // success-end
    process { /* ... */ }
}
```

_配置多次匹配逻辑:_

```kotlin
val listener = buildSimpleListener(FriendMessageEvent) {
    // success-start
    match { textContent != null }
    match { textContent!!.trim() == "在吗" }
    // success-end
    process { /* ... */ }
}
```

_不配置匹配逻辑:_

```kotlin
val listener = buildSimpleListener(FriendMessageEvent) {
    // success-start
    // 事件匹配可以忽略
    // success-end
    process { /* ... */ }
}
```

</TabItem>
<TabItem value="Java">

_配置一次匹配逻辑:_

```java
final SimpleListenerBuilder<FriendMessageEvent> builder = new SimpleListenerBuilder<>(FriendMessageEvent.Key);

// success-start
builder.match((context, event) -> "在吗".equals(context.getTextContent()));
// success-end

builder.process(() -> { /* ... */ });

final EventListener listener = builder.build();
```

_配置多次匹配逻辑:_

```java
final SimpleListenerBuilder<FriendMessageEvent> builder = new SimpleListenerBuilder<>(FriendMessageEvent.Key);

// success-start
builder.match((context, event) -> context.getTextContent() != null);
builder.match((context, event) -> "在吗".equals(context.getTextContent()));
// success-end

builder.process(() -> { /* ... */ });

final EventListener listener = builder.build();
```

_不配置匹配逻辑:_

```java
final SimpleListenerBuilder<FriendMessageEvent> builder = new SimpleListenerBuilder<>(FriendMessageEvent.Key);

// success-start
// 不配置匹配逻辑
// success-end

builder.process(() -> { /* ... */ });

final EventListener listener = builder.build();
```

</TabItem>
</Tabs>

:::info 多次时..

当配置了多个事件匹配逻辑时，多次匹配结果之间是 **与(&&)** 关系连接的。形如 `match1(...) && match2(...)`。

:::

## 监听函数注册器

在核心库中，`EventListenerRegistrar` 便是监听函数的主要去向。`EventListenerRegistrar` 代表**监听函数注册器**，
它通常由 `EventListenerManager` 也就是监听函数管理器（或者称之为事件调度器）实现，承载着注册监听函数的职责。

### 定义

按照惯例，我们先来看看 `EventListenerRegistrar`（有所简化）的基本定义：

```kotlin
public interface EventListenerRegistrar {
    /**
     * 注册一个监听函数。对于注册的其他附加属性均采用默认值.
     */
    public fun register(listener: EventListener): EventListenerHandle
    
    /**
     * 注册一个监听函数。
     */
    public fun register(registrationDescription: EventListenerRegistrationDescription): EventListenerHandle
}
```

可以看出，`EventListenerRegistrar` 的作用就是注册一个监听函数，并得到这个监听函数的[句柄](#eventlistenerhandle)。

### EventListenerRegistrationDescription

你也许注意到了，在 `EventListenerRegistrar.register(...)` 中，除了可以使用 `EventListener` 作为参数，
还出现了一个新的类型：`EventListenerRegistrationDescription`。它的意思是**监听函数注册描述**，
用来描述一个监听函数被注册后的基本属性。

我们首先来看看它的定义：

```kotlin
public abstract class EventListenerRegistrationDescription {
    
    /**
     * 注册信息中的监听函数.
     */
    public abstract val listener: EventListener
    
    /**
     * 此监听函数的优先级. 默认为 [DEFAULT_PRIORITY].
     *
     * @see PriorityConstant
     */
    public open var priority: Int = DEFAULT_PRIORITY
    
    /**
     * 当前的监听函数是否要异步地使用. 默认为 [DEFAULT_ASYNC].
     */
    public open var isAsync: Boolean = DEFAULT_ASYNC
    
    //// ...
}
```

他是一个抽象类，用来包装一个监听函数，并为其提供更多的额外属性。
这些属性对于一个监听函数本身来讲并不重要， 但是却可以使用在 `EventListenerManager` 中，
因此我们将这二者拆分，通过 `EventListener` 描述事件处理的逻辑，而在注册时可以通过
`EventListenerRegistrationDescription` 提供更多可用的属性。

这也使得 `EventListener` 的重用成为可能。

将一个 `EventListener` 转变为 `EventListenerRegistrationDescription` 的方式并不唯一，
比如你可以自己实现一个 `EventListenerRegistrationDescription` 类型并使用它。
不过核心库已经为你提供好了简单的实现，你可以通过 `EventListenerRegistrationDescription`
自身提供的构造方法来得到它们。

<Tabs groupId="code">
<TabItem value="Kotlin">

通过 `EventListener.toRegistrationDescription` 扩展函数将一个 `EventListener` 进行包装。

```kotlin
val listener: EventListener = ...
val registrationDescription = listener.toRegistrationDescription(priority = 1, isAsync = true)
```

或通过简易DSL的方式：

```kotlin
val listener: EventListener = ...
val registrationDescription = listener.toRegistrationDescription {
    priority = 1
    isAsync = true
}
```

</TabItem>
<TabItem value="Java">

_配置一次匹配逻辑:_

```java
EventListener listener = ...

// 如果在这里没有找到 EventListenerRegistrationDescription.of(...) 这个静态方法，
// 那么尝试通过 EventListenerRegistrationDescription.Companion.of(...)
EventListenerRegistrationDescription description = EventListenerRegistrationDescription.Companion.of(listener);
description.setAsync(true);
description.setPriority(PriorityConstant.FIRST);
```

</TabItem>
</Tabs>

### EventListenerHandle

## 监听函数的注册

## EventResult
