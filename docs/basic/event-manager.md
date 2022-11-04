---
sidebar_position: 40
title: 事件处理器
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger TODO

内容待更新

:::

事件管理器，也称为监听函数管理器（`EventListenerManager`），是最为基础也是最为核心的内容之一，应当是你在基础核心模块中最先应构建的内容。

`EventListenerManager` 是事件注册的入口，也应当是所有Bot管理器 `BotManager` 的所需内容。

有关事件管理器的概述，你可以参考 [定义概述: 事件管理器](../defition/event-manager) 。


你可以通过如下方式构建一个基础核心模块所提供的实现：

<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin
val listenerManager = coreListenerManager {
    // some config
}
```

</TabItem>
<TabItem value="Java">

```java
// 准备配置类
final CoreListenerManagerConfiguration config = new CoreListenerManagerConfiguration();
// config.. 

final CoreListenerManager listenerManager = CoreListenerManager.newInstance(config);
```

</TabItem>
</Tabs>


## 配置
可以看到，不论是通过 `Kotlin DSL` 的形式，还是在Java中以配置类实例的形式，`coreListenerManager` 都允许进行一定程度的自定义配置。
在 `CoreListenerManagerConfiguration` 中提供的可配置项有：
- 全局**监听事件**拦截器
- 全局**监听函数**拦截器
- 事件流程上下文处理器
- 监听函数 (正在计划添加)



### 全局监听事件拦截器
即注册一个或多个针对一次事件处理流程的拦截器。监听事件拦截器会对一次事件的整个处理流程的前后进行拦截。有关拦截器的概述你可以参考 定义概述: 拦截器(TODO) 。

<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin
val listenerManager = coreListenerManager {
    // 拦截器相关
    interceptors {
        // (事件)处理拦截器, 即所述的 "监听事件拦截器". 
        processingIntercept(1.ID) {
            println("Processing Intercept 1 start")
            it.proceed().also {
                println("Processing Intercept 1 end")
            }
        }
        processingIntercept(2.ID) {
            println("Processing Intercept 2 start")
            it.proceed().also {
                println("Processing Intercept 2 end")
            }
        }
    }
}
```

</TabItem>
<TabItem value="Java">

:::caution TODO

待补充

:::

</TabItem>
</Tabs>


### 全局监听函数拦截器
相对于监听事件拦截器，监听函数拦截器则会对每一个被执行的监听函数前后都进行拦截。有关拦截器的概述你可以参考 定义概述: 拦截器(TODO)。

<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin
val listenerManager = coreListenerManager {
    interceptors {
		// 监听函数拦截
        listenerIntercept(666.ID) {
            println("Listener Intercept A start")
            it.proceed().also {
                println("Listener Intercept A end")
            }
        }
        listenerIntercept(999.ID) {
            println("Listener Intercept B start")
            it.proceed().also {
                println("Listener Intercept B end")
            }
        }
    }
}

```

</TabItem>
<TabItem value="Java">

```java
final CoreListenerManagerConfiguration config = new CoreListenerManagerConfiguration();

// 准备拦截器实例 by CoreInterceptUtil
final EventListenerInterceptor interceptor = CoreInterceptUtil.coreListenerIntercept(context -> {
    System.out.println("拦截之前");
    final EventResult result = context.proceedBlocking();
    System.out.println("拦截之后");
    return result;
});

// 添加拦截器
config.addListenerInterceptors(Collections.singleton(interceptor));


final CoreListenerManager manager = CoreListenerManager.newInstance(config);
```

</TabItem>
</Tabs>


### 事件流程上下文处理器
事件流程上下文，指的就是一次事件从开始到处理完成这个过程，由始传递至结束的上下文对象 **`EventProcessingContext`** 。
此类型将会在开始时由事件流程上下文处理器 `EventProcessingContextResolver<C>` 进行初始化与创建，
并在每个监听函数执行后得到其结果并处理追加至自己创建的这个Context中。

核心提供了默认的上下文处理器实现，并使其拥有管理作用域、持续会话等预期内的功能。
如果你想要自定义实现一个 `EventProcessingContextResolver<C>` ，那么请注意各项预期功能是否按照约定实现。


## 事件监听
当你得到 `EventListenerManager` 实例之后，便可以通过此实例来注册各种监听函数来监听事件了。有关事件相关的细节，你可以参考 [事件概述](../defition/event-overview)。

:::caution

核心事件管理器与事件的注册流程正在准备发生变更。
你可以参考 [Simple Robot讨论💬 #235](https://github.com/simple-robot/simpler-robot/discussions/235)
来了解详情，并可以在讨论结束之前积极参与到讨论中来。

:::

<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin
// 方式1
val listener = listenerManager.listen(
        eventKey = GroupMessageEvent, // 实际上为伴生对象 GroupMessageEvent.Key
        // id = UUID.randomUUID().ID, // 可省略参数：唯一ID
        // blockNext = false, // 可省略参数：是否阻断下一个函数的执行
        // isAsync = false, // 可省略参数：是否异步执行
    ) { context: EventListenerProcessingContext, event: GroupMessageEvent ->

        println(context)

        // 尝试回复消息
        event.replyIfSupport( At(123.ID) + Text { "你好！" } ) // 假如事件实现 ReplyMessageSupport, 则可以直接使用 event.reply(...)

        // 获取一些信息
        // event.group.members()
        event.group().members().collect { // 函数式为挂起，属性式为非挂起
            println("Member: $it")
        }

        // do something?

        
        "abc" // return something?
    }




    // 方式2：直接通过 register 注册一个实例
    val listener2 = coreListener(GroupMessageEvent) { context: EventListenerProcessingContext, event: GroupMessageEvent ->
        // do some
    }
    // 注册
    listenerManager.register(listener2)
```

</TabItem>
<TabItem value="Java">

```java
// 构建监听函数实例
final EventListener listener = CoreListenerUtil.newCoreListener(
        GroupMessageEvent.Key,      // 需要监听的事件类型（的伴生Key）
        Identifies.ID(123),         // 可选重载参数，ID, 默认UUID
        false,                      // 可选重载参数，blockNext, 默认false
        false,                      // 可选重载参数，isAsync, 默认false
        (context, event) -> {

            System.out.println(event);

            final Group group = event.getGroup();

            // 发送消息
            group.sendBlocking(Text.getText("hello").plus(" World"));

            // 如果可以直接回复消息，回复
            if (event instanceof MessageReplySupport) {
                // 构建消息（链）
                Message message = Messages.getMessages(
                        Text.getText("你好"),
                        new At(Identifies.ID(123456)),
                        new At(event.getAuthor().getId()) // at发消息的人
                );
                ((MessageReplySupport) event).replyBlocking(message);
            }


            // 返回点儿什么, 或者直接null
            return null;
        });

// 注册监听函数
manager.register(listener);
```

</TabItem>
</Tabs>


## 事件推送
实际上，大多数情况下是不需要由开发者去推送事件的，这工作应当由组件来完成。但是假若你真的想要知道如何推送事件，可以参考如下示例：



<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin
// 方式1
val event: Event = TODO("假如得到了一个Event")

// 推送并挂起，直到事件处理完成后恢复
val result: EventProcessingResult = listenerManager.push(event)

// 处理返回值..

//////////// 

// 提前检测事件能否被监听/是否存在任意监听函数
// 推荐此方法，可以更多的避免不必要的事件对象产生。
val result: EventProcessingResult? = listenerManager.pushIfProcessable(GroupEvent) { /* 计算获取事件实例 */ }
```

</TabItem>
<TabItem value="Java">

```java
GroupMessageEvent event = null; // 假如你有一个事件。实际上这里并不能是null

// 阻塞的处理事件。不太推荐
final EventProcessingResult result = manager.pushBlocking(event);

// 异步的进行事件处理。Java中更推荐这种推送方式
final CompletableFuture<EventProcessingResult> resultFuture = manager.pushAsync(event);

// 推荐的组合方式：先检测是否可处理，再推送事件并异步处理
if (manager.isProcessable(GroupMessageEvent.Key)) {
    manager.pushAsync(event);
}
```

</TabItem>
</Tabs>





