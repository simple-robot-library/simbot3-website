---
sidebar_position: 30
title: 持续会话
---

当你需要在一个监听函数中，持续的处理连续或多个事件的时候，或许**持续会话**可以为你提供一些微不足道的帮助。

本章节将会试着想你介绍如何使用 **持续会话上下文(`ContinuousSessionContext`)** 来在一个监听函数中等待并处理其他事件。

持续会话由 **核心模块**( `simbot-core` ) 中的 **作用域**( `SimpleScope` ) 提供，不属于标准API的一部分。

因此通常情况下，持续会话仅支持 **核心模块** 及其衍生模块（包括 **Boot核心模块** ( `simboot-core` )
和 **Spring Boot启动器** ( `simbot-spring-boot-starter` )）。

:::caution 实验性

**持续会话**相关api尚处于**实验阶段**，可能会存在各种问题并且可能会随时变更API。

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note 前情提要

下文介绍中出现的代码示例如非特殊说明则将会有所简化。

<Tabs groupId="code">
<TabItem value='Kotlin'>

在 **Kotlin** 中，将会以相同风格的代码来 **核心模块** 和 **Boot模块** 下的监听函数。

例如下述代码：

```kotlin
suspend fun EventProcessingContext.onEvent(event: FooEvent) {
      // Here ...
}
```

将可以代表为下列情况：

<Tabs groupId="Kotlin-Module">
<TabItem label="核心模块" value='Core'>

```kotlin
suspend fun main() {
    createSimpleApplication {
        listeners {
            listen(FooEvent) {
               // highlight-start
                process { event -> // this: EventListenerProcessingContext
                    // Here ...
                }
                // highlight-end
            }
        }
    }.join()
}
```

_或其他类似的事件监听形式_


</TabItem>
<TabItem label="Boot模块"  value='Boot'>

```kotlin
@Listener
suspend fun EventProcessingContext.onEvent(event: FooEvent) {
      // Here ...
}
```

</TabItem>
</Tabs>



</TabItem>
<TabItem value='Java'>

在 **Java** 中，通常使用的为 **Boot模块** 或 **Spring Boot启动器**。
因此示例代码会以Boot模块下的风格进行展示，例如：

```java
@Listener
public void onEvent(ContinuousSessionContext sessionContext, FooEvent event) {
    // Here ...
}
```

</TabItem>
</Tabs>

:::

## 获取

### 通过 `SimpleScope` 获取

使用之前，最重要的事情就是需要获取它。开篇我们提到，`ContinuousSessionContext` 是由核心模块中的 `SimpleScope` 所提供的，
因此获取持续会话最基本的方式便是通过 **事件处理上下文**( `EventProcessingContext` 或 `EventListenerProcessingContext` )
和 `SimpleScope` 来获取它。

<Tabs groupId='code'>
<TabItem value='Kotlin'>

```kotlin
suspend fun EventProcessingContext.onEvent(event: FooEvent) {
    val sessionContext: ContinuousSessionContext? = this[SimpleScope.ContinuousSession]
    // ...
}
```

:::tip null?

上述代码中可以看到，通过 `context[...]` 得到的结果是**可能为空**的。当你使用的是第三方提供的实现或者非核心模块或其衍生模块的话，
你可能无法得到所需的结果。

文章的后续我们将会默认将当前环境视为处于**核心模块或其衍生模块**中，并**假定**获取的结果不会为null。
但在正常使用的时候，还是应当多加留意。

:::

</TabItem>
<TabItem value='Java'>

```java
@Listener
public void onEvent(EventProcessingContext context, FriendEvent event) {
    final ContinuousSessionContext sessionContext = context.get(SimpleScope.ContinuousSession);
}
```

:::tip null?

上述代码中，通过 `context.get(...)` 得到的结果是**可能为空**的。当你使用的是第三方提供的实现或者非核心模块或其衍生模块的话，
你可能无法得到所需的结果。

文章的后续我们将会默认将当前环境视为处于**核心模块或其衍生模块**中，并**假定**获取的结果不会为null。
但在正常使用的时候，还是应当多加留意。

:::

</TabItem>
</Tabs>

### 通过扩展属性获取

核心模块通过 `SimpleScope` 提供了一系列用于简化获取其内属性的**扩展属性**，其中也包括针对于从 `EventProcessingContext`
或 `EventListenerProcessingContext`
中获取 `ContinuousSessionContext` 的属性。

<Tabs groupId='code'>
<TabItem value='Kotlin'>

**`continuousSession`**

获取 `EventProcessingContext` 中的 `ContinuousSessionContext`。当无法获取、不存在或不支持时将会**抛出异常**。

```kotlin
suspend fun EventProcessingContext.onEvent(event: FooEvent) {
    val sessionContext: ContinuousSessionContext = this.continuousSession
}
```

**`continuousSessionOrNull`**

获取 `EventProcessingContext` 中的 `ContinuousSessionContext`。当无法获取、不存在或不支持时将会得到null。

```kotlin
suspend fun EventProcessingContext.onEvent(event: FooEvent) {
    val sessionContext: ContinuousSessionContext? = this.continuousSessionOrNull
}
```

</TabItem>
<TabItem value='Java'>

**`SimpleScope.getContinuousSession`**

获取 `EventProcessingContext` 中的 `ContinuousSessionContext`。当无法获取、不存在或不支持时将会**抛出异常**。

```java
@Listener
public void onEvent(EventProcessingContext context, FooEvent event) {
    final ContinuousSessionContext continuousSession = SimpleScope.getContinuousSession(context);
}
```

**`SimpleScope.getContinuousSessionOrNull`**

获取 `EventProcessingContext` 中的 `ContinuousSessionContext`。当无法获取、不存在或不支持时将会得到null。

```java
@Listener
public void onEvent(EventProcessingContext context, FooEvent event) {
    final ContinuousSessionContext continuousSession = SimpleScope.getContinuousSessionOrNull(context);
}
```

</TabItem>
</Tabs>

### 通过参数注入获取

除了手动获取，你也可以直接将 `ContinuousSessionContext` 作为监听函数参数来自动注入。

:::info 有效范围

参数注入仅在**Boot相关模块**下有效。

:::

<Tabs groupId='code'>
<TabItem value='Kotlin'>

```kotlin
@Listener
suspend fun onEvent(sessionContext: ContinuousSessionContext, event: FooEvent) {
    // Here ...
}
```

:::note 示例前提

后续如果没有特殊说明，将会以 **通过参数注入获取** 的方式来作为其他示例的基础前提。

但是代码示例中将不会体现 `@Listener` 注解。 

:::

</TabItem>
<TabItem value='Java'>

```java
@Listener
public void onEvent(ContinuousSessionContext sessionContext, FooEvent event) {
    // Here ...
}
```

:::info

后续如果没有特殊说明，将会以 **通过参数注入获取** 的方式来作为其他示例的基础前提。

:::

</TabItem>
</Tabs>



## 基本使用

了解了如何获取 `ContinuousSessionContext`，接下来便是如果去**使用**。

### `waiting`

`ContinuousSessionContext` 中的API分为几种类型，其中 `waiting` 是最基本的一种API。
此API代表：等待并获取下一个**结果**。

#### 等待并选择

你可以将 `waiting` 的**回调函数**视为一种内置的、小型的监听函数。
当你使用 `watiing` 的时候，它会监听后续所有推送而来的其他事件，直到你选择出你所需要的内容。

:::note 无条件的

这种等待**不自动区分**任何诸如 `Bot`、组件等属性。

:::

<Tabs groupId='code'>
<TabItem value='Kotlin'>

```kotlin
suspend fun onEvent(sessionContext: ContinuousSessionContext, FooEvent event) {
    val value: Int = sessionContext.waiting { provider -> // this: EventProcessingContext
        provider.push(1)
    }
}
```

在 `waiting` 的参数函数体中，存在两个参数：`this: EventProcessingContext` 和 `provider: ContinuousSessionProvider<T>`。
其中，`this` 即为触发此回调函数时的事件处理上下文。

```kotlin
suspend fun onEvent(sessionContext: ContinuousSessionContext, FooEvent fooEvent) {
    val event: Event = sessionContext.waiting { provider -> // this: EventProcessingContext
        // 当前事件
        val currentEvent: Event = this.event
        provider.push(currentEvent)
    }
}
```

上述示例中，`waiting` 在回调函数中得到了下一个事件处理上下文中的 **事件对象**，并通过 `provider` 推送给了等待处。
也由此可见，`provider` 的作用为向调用 `waiting` 的等待处推送一个 **结果**。

其中，`provider` 推送的类型应当与外部的接收类型一致。

你可以有条件的/选择性的推送：

```kotlin
suspend fun onEvent(sessionContext: ContinuousSessionContext, FooEvent event) {
    val value: String = sessionContext.waiting { provider -> // this: EventProcessingContext
        // 当前事件
        val currentEvent: Event = this.event
        if (currentEvent.component.id == "foo") {
            // 如果此事件的所属组件id为'foo', 推送字符串 "Yes"
            provider.push("Yes")
        }
    }
}
```

或者推送一个异常：

```kotlin
suspend fun onEvent(sessionContext: ContinuousSessionContext, FooEvent event) {
    val event: Event = sessionContext.waiting { provider -> // this: EventProcessingContext
        // 当前事件
        val currentEvent: Event = this.event
        if (currentEvent.component.id == "foo") {
            // 如果此事件的所属组件id为'foo', 推送异常 IllegalStateException("No")
            provider.pushException(IllegalStateException("No"))
        }
    }
}
```

</TabItem>
<TabItem value='Java'>

:::caution 阻塞

对**Java**来讲，`ContinuousSessionContext` 中的所有API都是 **阻塞** 的。因此在Java中使用时需要更多的考虑一下性能或一个监听函数的长时间阻塞问题。

在有必要时合理的为监听函数提供异步能力，防止影响到其他监听函数。

:::

```java
@Listener
public void onEvent(ContinuousSessionContext sessionContext, FooEvent event) {
    final Integer next = sessionContext.waiting((c, provider) -> {
         provider.push(1);
    });
}
```

在 `waiting` 的参数函数体中，存在两个参数：`EventProcessingContext c` 和 `ContinuousSessionProvider<T> provider`。
其中，`c` 即为触发此回调函数时的事件处理上下文。

```java
@Listener
public void onEvent(ContinuousSessionContext sessionContext, FooEvent event) {
    final Event received = sessionContext.waiting((c, provider) -> {
        final Event currentEvent = c.getEvent();
        provider.push(currentEvent);
    });
}
```

上述示例中，`waiting` 在回调函数中得到了下一个事件处理上下文中的 **事件对象**，并通过 `provider` 推送给了等待处。
也由此可见，`provider` 的作用为向调用 `waiting` 的等待处推送一个 **结果**。

其中，`provider` 推送的类型应当与外部的接收类型一致。

你可以有条件的/选择性的推送：

```java
@Listener
public void onEvent(sessionContext: ContinuousSessionContext, FooEvent event) {
    final String received = sessionContext.waiting((c, provider) -> {
        final Event currentEvent = c.getEvent();
        if ("foo".equals(currentEvent.getComponent().getId())) {
            provider.push("Yes");
        }
    });
}
```

或者推送一个异常：

```java
@Listener
public void onEvent(sessionContext: ContinuousSessionContext, FooEvent event) {
    final String received = sessionContext.waiting((c, provider) -> {
        final Event currentEvent = c.getEvent();
        if ("foo".equals(currentEvent.getComponent().getId())) {
            provider.pushException(new IllegalStateException("No"));
        }
    });
}
```

</TabItem>
</Tabs>


上述代码中，`sessionContext.waiting` 会一直挂起/阻塞，并直到参数中的函数体中使用 `provider` 推送了一个结果。
而函数体会在每一次出现其他事件推送时被触发。

:::note Provider?

有关 `provider` 的内容会在后续讲到。

:::

:::caution 注意!

需要注意，当一个 `ContinuousSessionContext` **已经取用**一个事件时，
这个事件将**不会**参与到正常的事件调度流程中。也因此，通过 `ContinuousSessionContext` 的任何API
**取用** 的事件，将无法触发任何其他的监听函数、拦截器或过滤器等正常监听流程中的内容。

<hr />

同样需要注意的是，上述这种 **取用** 行为，是建立在等待函数体内的 `provider.push` 不是异步发生的前提下。
除了一些你认为必要的场景，你**不应该**在 `ContinuousSessionContext` 的回调函数中通过异步执行 `provider.push`
来推送结果 ———— 这可能会导致事件的调度判定出现混乱。

:::

### `waitingForNext`

`waitingForNext` 是 [waiting](#waiting) 的衍生API。此API代表：等待并获取下一个符合条件的**事件对象**。

#### 等待任何事件

<Tabs groupId='code'>
<TabItem value='Kotlin'>

```kotlin
suspend fun EventProcessingContext.onEvent(sessionContext: ContinuousSessionContext, event: FooEvent) {
    val event: Event = sessionContext.waitingForNext()
}
```

</TabItem>
<TabItem value='Java'>

```java
@Listener
public void onEvent(ContinuousSessionContext sessionContext, FooEvent event) {
    final Event next = sessionContext.waitingForNext();
}
```

</TabItem>
</Tabs>

上述代码中，`sessionContext.waitingForNext()` 代表为等待下一个函数的到来，并得到它。

:::note 无条件的

与 [**`waiting`**](#waiting) 类似的，这种等待**不自动区分**任何诸如 `Bot`、组件等属性。

:::

:::tip 衍生

前文说过，`waitingForNext` 是 `waiting` 的衍生API。实际上，上述示例相似于：

<Tabs groupId='code'>
<TabItem value='Kotlin'>

```kotlin
suspend fun onEvent(sessionContext: ContinuousSessionContext, event: FooEvent) {
    val next: Event = sessionContext.waiting { provider -> // this: EventProcessingContext
        provider.push(this.event)
    }
}
```

</TabItem>
<TabItem value='Java'>

```java
@Listener
public void onEvent(ContinuousSessionContext sessionContext, FooEvent event) {
    final Event received = sessionContext.waiting((c, provider) -> {
        provider.push(c.getEvent());
    });
}
```

</TabItem>
</Tabs>

:::

#### 明确类型的等待事件

通常情况下，你至少也需要一个明确的监听类型作为你的下一个目标。


<Tabs groupId='code'>
<TabItem value='Kotlin'>

```kotlin
import love.forte.simbot.event.waitingForNext

suspend fun onEvent(sessionContext: ContinuousSessionContext, event: FooEvent) {
    val event: BarEvent = sessionContext.waitingForNext(BarEvent)
}
```

或者显式的指定事件类型的参数名：

```kotlin
suspend fun onEvent(sessionContext: ContinuousSessionContext, event: FooEvent) {
    val event: BarEvent = sessionContext.waitingForNext(key = BarEvent)
}
```

</TabItem>
<TabItem value='Java'>

```java
@Listener
public void onEvent(ContinuousSessionContext sessionContext, FooEvent event) {
    final BarEvent next = sessionContext.waitingForNext(BarEvent.Key);
}
```

</TabItem>
</Tabs>

你可以通过提供一个事件的 **事件类型** ( `Event.Key` ) 来指定一个具体的事件类型。

:::info 明确的类型!

需要注意，你应当自始至终都使用一个 **明确的** 事件类型，例如：

<Tabs groupId='code'>
<TabItem value='Kotlin'>

```kotlin
suspend fun onEvent(sessionContext: ContinuousSessionContext, event: FooEvent) {
    // success-start
    val event: BarEvent = sessionContext.waitingForNext(key = BarEvent)
    // success-end
}
```

</TabItem>
<TabItem value='Java'>

```java
@Listener
public void onEvent(ContinuousSessionContext sessionContext, FooEvent event) {
    // success-start
    final BarEvent next = sessionContext.waitingForNext(BarEvent.Key);
    // success-end
}
```

</TabItem>
</Tabs>

而不是：

<Tabs groupId='code'>
<TabItem value='Kotlin'>

```kotlin
suspend fun onEvent(sessionContext: ContinuousSessionContext, event: FooEvent) {
    // error-start
    val event: Event = sessionContext.waitingForNext(key = event.key)
    // error-end
}
```

</TabItem>
<TabItem value='Java'>

```java
@Listener
public void onEvent(ContinuousSessionContext sessionContext, FooEvent event) {
    // error-start
    final Event next = sessionContext.waitingForNext(event.getKey());
    // error-end
}
```

</TabItem>
</Tabs>

**为什么?**

一个从监听函数中得到的事件对象可能仅仅只是当前事件类型的**某个子类型**，因此通过 `getKey`
得到的事件类型标识也只是一个类型的**子集**，
并且你无法掌控这些可能存在任何不对外公开内容的类型标识。

例如一个事件 `FooEvent`, 假设它存在两个不对外公开的实现：`AImpl` 和 `BImpl`。

当一次事件触发时，你所得到的 `FooEvent` 只可能是上述两个类型的**其中一个**，而当你使用 `getKey` 时，你是无法明确得知是这两个类型中的具体哪一个的。

因此，`Event.Key` 应当是**绝对明确**的，才能保证你所得到的内容是你预期的结果。

:::

#### 有条件的等待任何事件

当你需要一个事件的时候，通常都是**有条件**的。而上述的几种示例中，你似乎并没有在 `ContinuousSessionContext`
取用一个事件的时候为此行为提供 **条件**。

当你需要提供一个对后续事件的取用条件时：

<Tabs groupId='code'>
<TabItem value='Kotlin'>

```kotlin
suspend fun onEvent(sessionContext: ContinuousSessionContext, fooEvent: FooEvent) {
    val next: Event = sessionContext.waitingForNext { event -> // this: EventProcessingContext
        // match ...
        true
    }
}
```

</TabItem>
<TabItem value='Java'>

```java
@Listener
public void onEvent(ContinuousSessionContext sessionContext, FooEvent fooEvent) {
    final Event next = sessionContext.waitingForNext((context, event) -> {
        // match ...
        return true;
    });
}
```

</TabItem>
</Tabs>

你可以为 `waitingForNext` 提供一个 **匹配函数**，通过提供的 `EventProcessingContext` 和事件本体，
并根据你的匹配结果来决定是否要**取用**此事件。

当得到过一次 `true` 时，`waitingForNext` 的等待便会结束。

#### 有条件的等待明确类型的事件


当然，你也可以在存在匹配条件的时候明确一个所需的事件类型：

<Tabs groupId='code'>
<TabItem value='Kotlin'>

```kotlin
suspend fun onEvent(sessionContext: ContinuousSessionContext, fooEvent: FooEvent) {
    val next: FooEvent = sessionContext.waitingForNext(FooEvent) { event -> // this: EventProcessingContext
        // match ...
        true
    }
}
```

</TabItem>
<TabItem value='Java'>

```java
@Listener
public void onEvent(ContinuousSessionContext sessionContext, FooEvent fooEvent) {
    final FooEvent next = sessionContext.waitingForNext(FooEvent.Key, (context, event) -> {
        // match ...
        return true;
    });
}
```

</TabItem>
</Tabs>

### `waitingForNextMessage`

`waitingForNextMessage` 是 [`waitingForNext`](#waitingfornext) 的衍生API。此API代表：等待并获取下一个符合条件的**消息事件的消息**。

与 `waitingForNext` 十分类似，只不过 `waitingForNextMessage` 的目标更为具体：一个**消息事件**，且返回值始终为 **MessageContent** 类型。

:::note 无条件

与 [**`waitingForNext`**](#waitingfornext) 类似，这种等待**不自动区分**任何诸如 `Bot`、组件等属性。

:::

#### 等待任何消息

你可以通过 `waitingForNextMessage` 等待下一个最快出现的消息事件。

<Tabs groupId='code'>
<TabItem value='Kotlin'>

```kotlin
suspend fun onEvent(sessionContext: ContinuousSessionContext, event: FooEvent) {
    val message: MessageContent = sessionContext.waitingForNextMessage()
}
```

</TabItem>
<TabItem value='Java'>

```java
@Listener
public void onEvent(ContinuousSessionContext sessionContext, FooEvent fooEvent) {
    final MessageContent message = sessionContext.waitingForNextMessage();
}
```

</TabItem>
</Tabs>


#### 等待指定类型的任何消息

与 [**`waitingForNext`**](#waitingfornext) 类似，你可以指定一个具体的消息事件类型来等待。

<Tabs groupId='code'>
<TabItem value='Kotlin'>

```kotlin
suspend fun onEvent(sessionContext: ContinuousSessionContext, event: FooEvent) {
    val message: MessageContent = sessionContext.waitingForNextMessage(FooMessageEvent)
}
```

</TabItem>
<TabItem value='Java'>

```java
@Listener
public void onEvent(ContinuousSessionContext sessionContext, FooEvent fooEvent) {
    final MessageContent message = sessionContext.waitingForNextMessage(FooMessageEvent);
}
```

</TabItem>
</Tabs>



TODO

### `next`

### `nextMessage`


## 超时处理

## Provider

## Receiver

<br />
<br />
<br />
<br />
<br />

:::danger TODO

**尚在施工中..**

:::






