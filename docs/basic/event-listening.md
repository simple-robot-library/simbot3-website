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

在了解事件监听之前，你应当已经了解过了 [监听函数](event-listener)。

:::

:::danger TODO

施工中

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
            generator.listen(Event.Root, listenerBuilder -> {
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




## BOOT监听


## 事件处理上下文
