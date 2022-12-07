---
sidebar_position: 15
title: 事件监听
toc_max_heading_level: 4
---

import Label from '@site/src/components/Label'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

事件监听可能是你最需要了解的功能。本章将会为你介绍如何去监听一个事件。换言之，即如何写一个监听函数。

:::info 监听函数

在了解事件监听之前，你应当已经了解过了 [监听函数](event-listener)
和 [事件处理上下文](../definition/event-overview/event-processing-context)。

:::


## 基础监听

对事件的监听是对于事件调度的基础。首先，我们在 `Simple Application` 下来聊聊事件监听的注册。

### 预注册

在 `Simple Application` 的构建阶段，其提供了 `eventProcessor` 作用域来为**事件处理器**
（或者说**事件调度器**）来提供配置，而对事件的预注册便可以在这其中完成：

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
simbotApplication(Simple) { 
    eventProcessor { 
        listeners {
            // 监听函数作用域  
            
            // 方式1
            listen(FooEvent) {
                match { true }
                process { 
                    // 事件处理逻辑...
                }
            }
            
            // 方式2
            FooEvent {
                // 事件处理逻辑...
            } onMatch { 
                true
            }
            
            // 通过运算符直接添加listener
            val listener: EventListener = ...
        
            +listener   
            +listener.toRegistrationDescription { 
                // ...
            }
        }
        
        // 直接添加listener
        addListener(...)
        addListenerRegistrationDescription(...)
    }
}
```

上述的 `eventProcessor { listeners { } }` 可以被简化，而省略掉外层的
`eventProcessor`：

```kotlin
simbotApplication(Simple) { 
    listeners {
        // ...
    }
}
```

</TabItem>
<TabItem value="Java">

```java
Applications.simbotApplication(
Simple.INSTANCE,
(configuration) -> Unit.INSTANCE,
Lambdas.suspendConsumer((builder, configuration) -> {
    builder.eventProcessor((eventProcessorConfiguration, environment) -> {
        // 直接添加监听函数
        eventProcessorConfiguration.addListener(...);
        eventProcessorConfiguration.addListenerRegistrationDescription(...);

        // 通过 listeners 作用域
        eventProcessorConfiguration.listeners((generator) -> {
            // 构建监听函数
            generator.listen(FooEvent.Key, listenerBuilder -> {
                // 匹配逻辑
                listenerBuilder.match((context, event) -> true);
                // 处理逻辑
                listenerBuilder.process((context, event) -> {
                    // 事件处理逻辑

                });
            });

            return Unit.INSTANCE;
        });
        // ...

        return Unit.INSTANCE;
    });
}));
```

</TabItem>
</Tabs>

#### 直接注册

在这其中，通过 `eventProcessor` 的 `addListener` 可能是最直观的监听函数注册方式了。
就如同你猜的那样，此方法直接提供一个监听函数实例，并注册。

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
simbotApplication(Simple) { 
    eventProcessor { 
    
        // 直接添加listener
        addListener(...)
        addListenerRegistrationDescription(...)
    }
}
```

</TabItem>
<TabItem value="Java">

```java
Applications.simbotApplication(
Simple.INSTANCE,
(configuration) -> Unit.INSTANCE,
Lambdas.suspendConsumer((builder, configuration) -> {
    builder.eventProcessor((eventProcessorConfiguration, environment) -> {
        // 直接添加监听函数
        eventProcessorConfiguration.addListener(...);
        eventProcessorConfiguration.addListenerRegistrationDescription(...);
        
        return Unit.INSTANCE;
    });
}));
```

</TabItem>
</Tabs>

#### listeners

另外一种方式便是在 `listeners { }` 作用域中进行监听函数的构建了。

<Tabs groupId="code">
<TabItem value="Kotlin">

`listeners` 作用域中的实际接收者类型为 `EventListenerRegistrationDescriptionsGenerator`，
代表用于生成 `EventListenerRegistrationDescription` 的生成器。

使用它主要有两种方法.

**方式1:**

```kotlin
simbotApplication(Simple) {
    listeners {
        listen(FooEvent) {
            match { ... }
            process { ... }
            // or handle { ... }
        }
    }
}
```

通过 `listen(...)` 指定一个事件类型，并通过Builder来进行配置。
由于这个生成器可以生成 `EventListenerRegistrationDescription`, 所以它也能配置一些额外属性：

```kotlin
listeners {
    listen(FooEvent) {
        isAsync = true
        priority = PriorityConstant.FIRST
        
        match { ... }
        process { ... }
        // or handle { ... }
    }
}
```

:::note 都是一家人

这其中的规则与在[监听函数](event-listener)中描述的一样，`match` 可以配置多次，而 `process` 或 `handle` 则必须且**只能**
配置一次。

:::

**方式2:**

```kotlin
simbotApplication(Simple) {
    listeners {
        FooEvent { event ->
            // 事件处理逻辑
        } onMatch { event ->
            // 事件匹配逻辑
        }
    }
}
```

这实际上可以算是上述方式1的一种...简写或扩展。上面这实例实质上是这个样子的：

```kotlin
simbotApplication(Simple) {
    listeners {
        FooEvent.invoke { event ->
            // 事件处理逻辑
        }.onMatch { event ->
            // 事件匹配逻辑
        }
    }
}
```

而 `invoke` 通常会被省略，因此可以简化为

```kotlin
FooEvent { /* 事件处理逻辑 */ } /*  onMatch { 事件匹配逻辑 } */
```

上述示例中，我们没有在事件处理逻辑的结尾提供 `EventResult` 结果，因此它实际上是相当于使用了 `process`。
如果你希望通过这种方法的时候指定事件处理结果，你可以这样：

```kotlin
FooEvent.handle { event ->
    // ...
    EventResult.of(...)
} onMatch { 
    // 事件匹配逻辑
}
```

不使用 `invoke` 或者 `process` 而是使用 **`handle`** 扩展函数。

与方式1一样，`onMatch` 也支持配置多次：

```kotlin
FooEvent.handle { event ->
    // ...
    EventResult.of(...)
} onMatch { 
    // 事件匹配逻辑
} onMatch { 
    // 事件匹配逻辑
}
```

而至于事件处理逻辑...你或许不用担心了。

</TabItem>
<TabItem value="Java">

`listeners` 作用域中主要提供了一个 `EventListenerRegistrationDescriptionsGenerator`，
它是用于生成 `EventListenerRegistrationDescription` 的生成器。

你可以通过它的 `listen` 函数来声明一个事件的监听:

```java
Applications.simbotApplication(
        Simple.INSTANCE,
        (configuration) -> Unit.INSTANCE,
        Lambdas.suspendConsumer((builder, configuration) -> {
            builder.eventProcessor((eventProcessorConfiguration, environment) -> {
                // 通过 listeners 作用域
                eventProcessorConfiguration.listeners((generator) -> {
                    // 构建监听函数
                    generator.listen(FooEvent.Key, listenerBuilder -> {
                        // 匹配逻辑
                        listenerBuilder.match((context, event) -> true);
                        // 处理逻辑
                        listenerBuilder.process((context, event) -> {
                            // 事件处理逻辑
                        });
                    });

                    return Unit.INSTANCE;
                });
                return Unit.INSTANCE;
            });
        }));
```

</TabItem>
</Tabs>

### 动态注册

除了我们前文一直在讲的“预注册”，在application启动后也支持**动态注册**监听函数。

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
val launcher = simbotApplication(Simple) { 
  // ...
}

val application = launcher.launch()

// 注册监听函数
val handle = application.eventListenerManager.listeners {
    // 方式1
    listen(FooEvent) {
        match { true }
        process { 
            // 事件处理逻辑...
        }
    }
    
    // 方式2
    FooEvent {
        // 事件处理逻辑...
    } onMatch { 
        true
    }
    
    // 通过运算符直接添加listener
    val listener: EventListener = ...
    
    +listener   
    +listener.toRegistrationDescription { 
        // ...
    }
        
    // 直接添加listener
    listener(listener)
    listener(listener.toRegistrationDescription { 
        // ...
    })
}
```

:::tip 差不多

在 `eventListenerManager.listeners` 作用域中的API基本与 `application.eventProcessor.listeners` 中的API一致。

:::

</TabItem>
<TabItem value="Java">

```java
ApplicationLauncher<SimpleApplication> launcher = Applications.simbotApplication(Simple.INSTANCE);
SimpleApplication application = launcher.launchBlocking();
SimpleEventListenerManager manager = application.getEventListenerManager();

// 注册监听函数
EventListenerHandle handle = manager.register(SimpleListeners.listener(FriendMessageEvent.Key, (context, event) -> {
     // ...
}));
```

</TabItem>
</Tabs>


## 注解监听

看到这里，你可能会想：“这跟宣传的不一样啊！不是加个 `@Listener` 注解就能用了吗？”
或者 “这在Java中也太麻烦了吧！” 之类的想法。同样也是为了解决这个问题，我们提供了一个叫做 `BOOT` 的模块，
它将会拥有**轻量级**的依赖注入以及监听函数扫描的能力。

:::tip Spring Boot?

本节所述中绝大多数内容**通用**于普通的boot模块和Spring Boot Starter模块。
但是boot模块的实际意义与命名等内容在我们团队中尚存在争议，未来可能会有所调整。

:::

首先，Boot监听需要使用 `Boot Application`。

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
suspend fun main() {
    simbotApplication(Boot) {
        beans {
            scan("love.forte.example.listeners")
        }
    }.launch().join()
}

@Beans
class MyListenerContainer {
    @Listener
    suspend fun onEvent(event: FooEvent) {
        // ...
    }
}
```

</TabItem>
<TabItem value="Java">

```java
Applications.simbotApplication(Boot.INSTANCE, (configuration) -> Unit.INSTANCE, Lambdas.suspendConsumer((builder, configuration) -> {
            builder.beans((beansBuilder) -> {
                beansBuilder.scan("love.forte.example.listeners");
                return Unit.INSTANCE;
            });
        }));
        
//// MyListenerContainer.java
@Beans
class MyListenerContainer {

    @Listener
    public void onEvent(FooEvent event) {
        // ...
    }
}
```

</TabItem>
</Tabs>

:::info 可能更简单

在 Spring Boot Starter 中你可能不需要使用 `Boot Application`, 而是只是仅仅标记一个 `@EnableSimbot` 注解就好了：

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
@EnableSimbot
@SpringBootApplication
class MyApplication

fun main(args: Array<String>) {
    runApplication<MyApplication>(args = args)
}

@Component
class MyListenerContainer {
    @Listener
    suspend fun onEvent(event: FooEvent) {
        // ...
    }
}
```

</TabItem>
<TabItem value="Java">

```java
@EnableSimbot
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
        
//// MyListenerContainer.java

@Component
class MyListenerContainer {

    @Listener
    public void onEvent(FooEvent event) {
        // ...
    }
}
```

不过需要注意，在 Spring Boot 环境下，最好使用 `@Component` 或其他相关注解来代替 `@Beans`。

</TabItem>
</Tabs>

我们不会在本章节讨论 `Spring Boot` 环境下的应用。这会在 [**单独的章节**](spring-boot) 中讨论。

:::

正如你所见，在 `Boot Application` 下，你可以通过 `beans { }` 作用域中的 `scan(...)` 来进行 **包扫描**。

最终 `Boot Application` 会扫描所有包路径下标记了 `@Beans` 的类型，并将它们作为依赖统一管理，
然后解析所有标记了 `@Listener` 的方法，并尝试将它们解析为**监听函数**，然后注册。

### 监听函数

刚刚我们提到，通过标记 `@Listener` 将一个方法标记为需要解析的**监听函数**，那么对于这样的函数，它肯定会有一些更多的要求。

#### 可见性

被标记为监听函数的方法的访问级别必须是**公开的**，也就是必须是 `public` 的。

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
@Listener
suspend fun onEvent(event: FooEvent) {
    // ...
}
```

:::tip

宽松模式下，Kotlin默认的访问级别就是public。

:::

</TabItem>
<TabItem value="Java">

```java
@Listener
public void onEvent(FooEvent event) {
    // ...
}
```

</TabItem>
</Tabs>

#### 监听类型

一个被标记的监听函数需要有0~1个需要监听的目标事件类型，比如好友事件、群消息事件之类的。
你所需要监听的事件类型直接体现在参数上即可。

<Tabs groupId="code">
<TabItem value="Kotlin">

**监听FooEvent**

```kotlin
@Listener
suspend fun onEvent(event: FooEvent) {
    // ...
}
```

或

```kotlin
@Listener
suspend fun FooEvent.onEvent() {
    // ...
}
```

**监听所有类型事件**

> `Event` 是所有事件类型的父类。

```kotlin
@Listener
suspend fun onEvent(event: Event) {
    // ...
}
```

或

```kotlin
@Listener
suspend fun Event.onEvent() {
    // ...
}
```

不提供事件类型的参数也将视为监听所有事件。

```kotlin
@Listener
suspend fun onEvent() {
    // ...
}
```

</TabItem>
<TabItem value="Java">

**监听FooEvent**

```java
@Listener
public void onEvent(FooEvent event) {
    // ...
}
```

**监听所有类型事件**

> `Event` 是所有事件类型的父类。

```java
@Listener
public void onEvent(Event event) {
    // ...
}
```

不提供事件类型的参数也将视为监听所有事件。

```java
@Listener
public void onEvent() {
    // ...
}
```

</TabItem>
</Tabs>

:::info 以一为准

不建议一个监听函数的参数中出现多于一个的事件类型参数，如果出现了这种情况，
你应当考虑监听它们共同的某一个父类，或者拆分为多个监听函数来使用。

:::

#### 异步性与返回值

<Tabs groupId="code">
<TabItem value="Kotlin">

simbot绝大多是API都是**可挂起的**，因此在Kotlin中，我们也建议你的监听函数是 `suspend`。
不过比起函数的 `suspend` 修饰，我们最主要的目的是提醒你尽可能不要使用**阻塞API**。

```kotlin
@Listener
suspend fun onEvent(event: FooEvent) {
    // ...
}
```

</TabItem>
<TabItem value="Java">

我们在 [监听函数](event-listener) 中的 [可响应式的处理结果](event-listener#可响应式的处理结果) 一节中提到过，
你可以通过 reactive api 或者 `CompletableFuture` 来通过异步编程来增加异步API的优势，增大资源的利用率。

监听函数的返回值最终会被包装到 `EventResult.of(...)` 中，因此你可以返回一个异步结果并让函数执行结束后挂起等待：

```java
@Listener
public CompletableFuture<ID> onEvent(FriendMessageEvent event) {
    // 收到好友的消息，则对好友发送'你好'，
    // 然后向后续监听函数传递消息发送回执中的 ID 。
    return event.getFriendAsync()
            .thenCompose(friend -> friend.sendAsync("你好"))
            .thenApply(receipt -> receipt.getId());
    // ...
}
```

:::info 更坚决的异步

如果你决定使用异步API，那么你就要坚决一些，尽可能的全部使用异步API，而避免使用 `CompletableFuture.get()` 之类的方法破坏你的异步性。
比如：

```java
@Listener
public String onEvent(FriendMessageEvent event) {
    // 收到好友的消息，则对好友发送'你好'，
    // 然后向后续监听函数传递消息发送回执中的 ID 。
    CompletableFuture<ID> idFuture = event.getFriendAsync()
            .thenCompose(friend -> friend.sendAsync("你好"))
            .thenApply(receipt -> receipt.getId());
    // error-start
    return idFuture.get().toString();
    // error-end
}
```

这时候，你还是通过 `CompletableFuture.get()` 阻塞了当前的线程。

又比如：

```java
@Listener
public CompletableFuture<ID> onEvent(FriendMessageEvent event) {
    // 收到好友的消息，则对好友发送'你好'，
    // 然后向后续监听函数传递消息发送回执中的 ID 。
    return event.getFriendAsync()
            // error-start
            .thenApply(friend -> friend.sendBlocking("你好"))
            // error-end
            .thenApply(receipt -> receipt.getId());
}
```

虽然返回了 `CompletableFuture`，但是在异步中依旧使用了阻塞API。

:::

</TabItem>
</Tabs>

虽然监听函数的返回值会被包装到 `EventResult.of(...)` 中或者在没有返回值的情况下得到 `EventResult.Invalid`，
但是假如函数返回的类型本身就是 `EventResult` 类型，则不会再被包装，而是直接使用。

因此如果你希望返回一个自定义的 `EventResult`，直接返回就完事儿了。

### 事件过滤

#### 消息过滤

在注解监听的世界里，事件的**过滤**行为也会像 `@Listener` 那样有所简化：`@Filter`。

`@Filter` 注解是一个可以提供部分参数来快速过滤消息内容的注解，他需要配合 `@Listener` 使用，并标记在方法上：

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
@Filter("你好")
@Listener
suspend fun onEvent(event: FooEvent) {
    // ...
}
```

</TabItem>
<TabItem value="Java">

```java
@Filter("你好")
@Listener
public void onEvent(FooEvent event) {
    // ...
}
```

</TabItem>
</Tabs>

上述示例中，即代表事件的 `EventListenerProcessingContext.textContext == "你好"` 的时候才会触发事件，相当于：

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
@Listener
suspend fun onEvent(context: EventListenerProcessingContext, event: FooEvent) {
    if (context.textContent == "你好") {
        // 符合条件，执行逻辑
    }
    // 不符合条件，不执行逻辑
}
```

</TabItem>
<TabItem value="Java">

```java
@Listener
public void onEvent(EventListenerProcessingContext context, FooEvent event) {
    if ("你好".equals(context.getTextContent())) { // textContent is nullable
        // 符合条件，执行逻辑
    }
    // 不符合条件，不执行逻辑
}
```

</TabItem>
</Tabs>

也许你会注意到，`textContent` 是**可能为null**的。默认情况下，只有当监听函数的类型为 `MessageEvent（消息事件）` 的时候
`textContent` 才不为null。那么 `@Filter("xx")` 遇到非消息事件的时候的行为是怎样的呢？

默认情况下，如果 `textContent` 为null则过滤结果为 `false`，也就是不符合条件。但是假如你希望当监听到的事件不是消息事件的时候视为通过匹配，
那么可以配置属性 `@Filter(value = "xx", ifNullPass = true)`

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
@Filter(value = "你好", ifNullPass = true)
@Listener
suspend fun onEvent(event: FooEvent) {
    // ...
}
```

</TabItem>
<TabItem value="Java">

```java
@Filter(value = "你好", ifNullPass = true)
@Listener
public void onEvent(FooEvent event) {
    // ...
}
```

</TabItem>
</Tabs>

除了直接匹配文字之外，`@Filter` 还提供了其他的匹配策略：`@Filter(matcher = ...)`

`matcher` 属性是一个 `MatchType` 枚举类型，其元素与描述如下：

| 元素                                | 描述                                                    |
|-----------------------------------|-------------------------------------------------------|
| `TEXT_EQUALS`                     | 字符串全等匹配。相当于 `text.equals(otherText)`                  |
| `TEXT_EQUALS_IGNORE_CASE`         | 字符串全等匹配（忽略大小写）。相当于 `text.equalsIgnoreCase(otherText)` |
| `TEXT_STARTS_WITH`                | 字符串首匹配。相当于 `text.startsWith(otherText)`               |
| `TEXT_ENDS_WITH`                  | 字符串尾匹配。相当于 `text.endsWith(otherText)`                 |
| `TEXT_CONTAINS`                   | 字符串包含匹配。相当于 `text.contains(otherText)`                |
| `REGEX_MATCHES` <Label>默认</Label> | 正则匹配。相当于 `regex.matcher(otherText).matches()`。        |
| `REGEX_CONTAINS`                  | 正则匹配。 相当于 `regex.matcher(otherText).find()`。          |

由上可见，之前示例中的 `Filter("你好")` 实际上是通过**正则匹配**完成的。下面的示例中，我们将改为直接使用字符串全等匹配来实现：

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
@Filter(value = "你好", matcher = MatchType.TEXT_EQUALS)
@Listener
suspend fun onEvent(event: FooEvent) {
    // ...
}
```

</TabItem>
<TabItem value="Java">

```java
@Filter(value = "你好", matcher = MatchType.TEXT_EQUALS)
@Listener
public void onEvent(FooEvent event) {
    // ...
}
```

</TabItem>
</Tabs>

#### 目标过滤

如果你希望对触发此事件的**对象目标**
做过滤（例如只能由指定的人或群或bot触发），那么你可以使用 `@Filter(targets = @Filter.Targets(...))` 。

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
@Filter(targets = @Filter.Targets(bots = ["123", "456"]))
@Listener
suspend fun onEvent(event: FooEvent) {
    // ...
}
```

</TabItem>
<TabItem value="Java">

```java
@Filter(targets = @Filter.Targets(bots = {"123", "456"}))
@Listener
public void onEvent(FooEvent event) {
    // ...
}
```

</TabItem>
</Tabs>

上述示例代表其标记的监听函数只会被ID为 `123` 和 `456` 的BOT触发。
当然，除了 `bots`，还有一些其他属性可以使用：

| 属性           | 类型         | 描述                              |
|--------------|------------|---------------------------------|
| `components` | `String[]` | 当前事件的所属组件ID                     |
| `bots`       | `String[]` | 当前事件中的BOT ID                    |
| `authors`    | `String[]` | 当前事件（如果是消息事件的话）的发送者ID           |
| `groups`     | `String[]` | 当前事件（如果是群事件的话）的群ID              |
| `channels`   | `String[]` | 当前事件（如果是子频道事件的话）的子频道ID          |
| `guilds`     | `String[]` | 当前事件（如果是频道服务器事件的话）的频道服务器ID      |
| `atBot`      | `boolean`  | 当前事件（如果是消息事件的话）是否存在at当前事件BOT的消息 |

上述属性中，那些括号中的副条件 _如果是xxx事件的话_ 如果不满足，则其对应的条件匹配将不会生效。
例如一个**好友消息**，它不属于**群消息**，因此就算配置了 `groups` 也等于没配置。

上述属性中，`atBot` 只会在当前事件类型为 `ChatroomMessageEvent` 的时候生效。

:::note 只是常量

你我都清楚，注解的属性只允许**常量值**。什么是常量？这不重要，重要的是常量**不可修改**。
换言之，`@Filter.Targets` 中的属性都是**不可变的**。如果你需要更复杂的事件匹配逻辑（例如动态的黑名单），
那么你就不能太过于依赖 `@Filter`。

:::

#### 多条件过滤

如果你想要为一个监听函数提供多个过滤条件，那么多写两次就好了：

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
@Filter(value = "你", matchType = MatchType.TEXT_STARTS_WITH)
@Filter(value = "好", matchType = MatchType.TEXT_ENDS_WITH)
@Listener
suspend fun onEvent(event: FooEvent) {
    // ...
}
```

</TabItem>
<TabItem value="Java">

```java
@Filter(value = "你", matchType = MatchType.TEXT_STARTS_WITH)
@Filter(value = "好", matchType = MatchType.TEXT_ENDS_WITH)
@Listener
public void onEvent(FooEvent event) {
    // ...
}
```

</TabItem>
</Tabs>

`@Filter` 是一个可重复注解。默认情况下，当标记了多个 `@Filter` 时，当其**任一生效**的时候，事件就会触发。

但是如果你希望多个条件必须**全部满足**，或者**全不满足**时该怎么做呢？此时你需要使用 `@Filters`：

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
@Filters(value = [
        Filter(value = "你", matchType = MatchType.TEXT_STARTS_WITH),
        Filter(value = "好", matchType = MatchType.TEXT_ENDS_WITH)
    ],
    multiMatchType = MultiFilterMatchType.ALL
)
@Listener
suspend fun onEvent(event: FooEvent) {
    // ...
}
```

</TabItem>
<TabItem value="Java">

```java
@Filters(value = {
    @Filter(value = "你", matchType = MatchType.TEXT_STARTS_WITH),
    @Filter(value = "好", matchType = MatchType.TEXT_ENDS_WITH)
}, multiMatchType = MultiFilterMatchType.ALL)
@Listener
public void onEvent(FooEvent event) {
    // ...
}
```

</TabItem>
</Tabs>


`@Filters` 的 `multiMatchType` 属性为 `MultiFilterMatchType` 类型的枚举，其元素与描述如下：

| 元素                      | 描述    |
|-------------------------|-------|
| `ANY` <Label>默认</Label> | 任意匹配。 |
| `ALL`                   | 全部匹配。 |
| `NONE`                  | 无匹配。  |

#### 动态参数

也许你会有一个苦恼：我要如何将一个事件中文本消息内容中的一部分提取出来呢？这种场景很常见，
尤其是在一些具有目的性、参数化的监听中。

举个例子，假设你希望用户输入一个 `.h{n}`，而你根据数字 `n` 来发送一个对应编号的帮助信息。
这种情况下，以目前的情报来说能够实施解决方案大概有如下这些：

> 我们假设在 `GroupMessageEvent` 事件中

<Tabs groupId="code">
<TabItem value="Kotlin">

**通过字符串截取并转化**:

```kotlin
private val helps = mutableMapOf(
    1 to "帮助1",
    2 to "帮助2",
    10 to "帮助10"
)

@Filter(value = ".h\\d+")
@Listener
suspend fun EventListenerProcessingContext.onEvent(event: GroupMessageEvent) {
    // 尝试通过字符串截取获取数字编号
    // tips: textContent 在 **消息类型事件** 中中基本不会为null，除非有拦截器对其进行了额外操作。
    //  此处保险起见，假若 textContent 为null则使用 event.messageContent.plainText
    val numberValue = (textContent ?: event.messageContent.plainText).substring(2)
    
    val number = numberValue.toInt()
    
    event.reply(helps[number] ?: "没有找到编号[$number]的帮助")
}
```

**通过正则提取**:

```kotlin
private val helps = mutableMapOf(
    1 to "帮助1",
    2 to "帮助2",
    10 to "帮助10"
)

private const val REGEX_VALUE = ".h(?<number>\\d+)"
private val regex = Regex(REGEX_VALUE)

@Filter(value = REGEX_VALUE)
@Listener
suspend fun EventListenerProcessingContext.onEvent(event: GroupMessageEvent) {
    val numberValue = regex.matchEntire(textContent ?: event.messageContent.plainText)?.groups?.get("number")?.value
    if (numberValue == null) {
        event.reply("没有找到编号")
        return
    }

    val number = numberValue.toInt()

    event.reply(helps[number] ?: "没有找到编号[$number]的帮助")
}
```

或许这种割裂的方式你不喜欢，那么就不再使用 `@Filter` 了:

```kotlin
private val helps = mutableMapOf(
    1 to "帮助1",
    2 to "帮助2",
    10 to "帮助10"
)

private val regex = Regex(".h(?<number>\\d+)")

@Listener
suspend fun EventListenerProcessingContext.onEvent(event: GroupMessageEvent) {
    val text = textContent ?: event.messageContent.plainText
    // 自行逻辑匹配，不再借助 @Filter
    val matchResult = regex.matchEntire(text) ?: return

    val numberValue = matchResult.groups["number"]?.value
    if (numberValue == null) {
        event.reply("没有找到编号")
        return
    }

    val number = numberValue.toInt()

    event.reply(helps[number] ?: "没有找到编号[$number]的帮助")
}
```


</TabItem>
<TabItem value="Java">

**通过字符串截取并转化**:

```java
// class ...

private static final Map<Integer, String> helps;
static {
    helps = new HashMap<>(8);
    helps.put(1, "帮助1");
    helps.put(2, "帮助2");
    helps.put(10, "帮助10");
}

@Listener
@Filter(value = ".h\\d+")
public void onEvent(EventListenerProcessingContext context, GroupMessageEvent event) {
    // 尝试通过字符串截取获取数字编号
    // tips: textContent 在 **消息类型事件** 中中基本不会为null，除非有拦截器对其进行了额外操作。
    // 此处保险起见，假若 textContent 为null则使用 event.messageContent.plainText
    String numberValue = getText(context, event).substring(2);

    int number = Integer.parseInt(numberValue);

    event.replyBlocking(helps.getOrDefault(number, "没有找到编号["+ number +"]的帮助"));
}

private static String getText(EventListenerProcessingContext context, GroupMessageEvent event) {
    String textContent = context.getTextContent();
    if (textContent != null) {
        return textContent;
    }

    return event.getMessageContent().getPlainText();
}
```

**通过正则提取**:

```java
// class ...

private static final Map<Integer, String> helps;
static {
    helps = new HashMap<>(8);
    helps.put(1, "帮助1");
    helps.put(2, "帮助2");
    helps.put(10, "帮助10");
}

private static final String REGEX_VALUE = ".h(?<number>\\d+)";
private static final Pattern regex = Pattern.compile(REGEX_VALUE);

@Listener
@Filter(value = REGEX_VALUE)
public void onEvent(EventListenerProcessingContext context, GroupMessageEvent event) {
    Matcher matcher = regex.matcher(getText(context, event));
    if (!matcher.matches()) {
        event.replyBlocking("没有找到编号");
        return;
    }

    String numberValue = matcher.group("number");
    if (numberValue == null) {
        event.replyBlocking("没有找到编号");
        return;
    }

    int number = Integer.parseInt(numberValue);

    event.replyBlocking(helps.getOrDefault(number, "没有找到编号["+ number +"]的帮助"));
}

private static String getText(EventListenerProcessingContext context, GroupMessageEvent event) {
    String textContent = context.getTextContent();
    if (textContent != null) {
        return textContent;
    }

    return event.getMessageContent().getPlainText();
}
```

或许这种割裂的方式你不喜欢，那么就不再使用 `@Filter` 了:

```java
// class ...

private static final Map<Integer, String> helps;
static {
    helps = new HashMap<>(8);
    helps.put(1, "帮助1");
    helps.put(2, "帮助2");
    helps.put(10, "帮助10");
}

private static final Pattern regex = Pattern.compile(".h(?<number>\\d+)");

@Listener
public void onEvent(EventListenerProcessingContext context, GroupMessageEvent event) {
    Matcher matcher = regex.matcher(getText(context, event));
    if (!matcher.matches()) {
        event.replyBlocking("没有找到编号");
        return;
    }

    String numberValue = matcher.group("number");
    if (numberValue == null) {
        event.replyBlocking("没有找到编号");
        return;
    }

    int number = Integer.parseInt(numberValue);

    event.replyBlocking(helps.getOrDefault(number, "没有找到编号["+ number +"]的帮助"));
}

private static String getText(EventListenerProcessingContext context, GroupMessageEvent event) {
    String textContent = context.getTextContent();
    if (textContent != null) {
        return textContent;
    }

    return event.getMessageContent().getPlainText();
}
```

</TabItem>
</Tabs>

但是总而言之，都会多多少少有些...麻烦。因此，boot模块为开发者提供了一个或许比较有用的注解 `@FilterValue`。
让我们如下示例：


<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
private val helps = mutableMapOf(
    1 to "帮助1",
    2 to "帮助2",
    10 to "帮助10"
)

@Filter(value = ".h(?<number>\\d+)")
@Listener
suspend fun onEvent(event: GroupMessageEvent, @FilterValue("number") number: Int) {
     event.reply(helps[number] ?: "没有找到编号[$number]的帮助")
}
```

</TabItem>
<TabItem value="Java">

```java
// class ...

private static final Map<Integer, String> helps;
static {
    helps = new HashMap<>(8);
    helps.put(1, "帮助1");
    helps.put(2, "帮助2");
    helps.put(10, "帮助10");
}

@Filter(value = ".h(?<number>\\d+)")
@Listener
public void onEvent(GroupMessageEvent event, @FilterValue("number") int number) {
    event.replyBlocking(helps.getOrDefault(int, "没有找到编号["+ number +"]的帮助"))
}
```

</TabItem>
</Tabs>


可以看到，当通过**正则**匹配文本内容时，`@FilterValue` 可以通过指定一个 group name 来获取此正则匹配的对应结果。
通过这种方式便可以在一定程度上简化样板代码。

当然，除了 `(?<NAME>REGEX)` 这种形式以外，还有一个较为简化的写法：


<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
private val helps = mutableMapOf(
    1 to "帮助1",
    2 to "帮助2",
    10 to "帮助10"
)

@Filter(value = ".h{{number,\\d+}}")
@Listener
suspend fun onEvent(event: GroupMessageEvent, @FilterValue("number") number: Int) {
     event.reply(helps[number] ?: "没有找到编号[$number]的帮助")
}
```

</TabItem>
<TabItem value="Java">

```java
// class ...

private static final Map<Integer, String> helps;
static {
    helps = new HashMap<>(8);
    helps.put(1, "帮助1");
    helps.put(2, "帮助2");
    helps.put(10, "帮助10");
}

@Filter(value = ".h{{number,\\d+}}")
@Listener
public void onEvent(GroupMessageEvent event, @FilterValue("number") int number) {
    event.replyBlocking(helps.getOrDefault(int, "没有找到编号["+ number +"]的帮助"))
}
```

</TabItem>
</Tabs>

通过使用 `{{` 和 `}}` 进行包裹，并指定名称与其对应的表达式，也可以达到与正则相同结果。

- `{{hello,\\d+}}` 和 `(?<hello>\\d+)` 的效果是一样的。
- `{{hello}}` 和 `(?<hello>.+)` 的效果是一样的。

使用正则原生的能力还是通过 `{{...}}` 进行一层转化，完全就看你的心情了。如果你对正则比较熟悉，那不妨直接使用 `(?<NAME>REGEX)` 吧。

:::tip 正则限定

`@FilterValue` 仅支持匹配默认为 **正则** 相关的类型，例如 `REGEX_MATCHES` 或 `REGEX_CONTAINS`。

:::


### 参数绑定

:::danger TODO

TODO

:::

