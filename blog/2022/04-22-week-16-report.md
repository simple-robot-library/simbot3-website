---
authors: forliy
title: 2022年第16周周报
tags: [2022周报,周报]
---

2022年第16周周报喵。

<!--truncate-->

## 🚀 版本发布
在第16周内，我们发布了如下的版本：
- **开黑啦组件** [v3.0.0.0.preview.1.2](https://github.com/simple-robot/simbot-component-kaiheila/releases/tag/v3.0.0.0.preview.1.2)


并计划在本周范围内再发布一个与 [Simple Robot核心](https://github.com/simple-robot/simpler-robot) 
相关的新版本 `v3.0.0.preview.8.0`, 此版本预计的更新内容有：
- 调整部分 `BotManager` 相关的API
- 重写优化 `BotVerifyInfo` 的实现，并为未来支持多种配置文件格式做基础
- 重新定义部分事件（主要是去除多余泛型）

由于涉及到api变动，会存在不兼容变更，还请注意喔～ 此版本发布的时候各组件也会跟随更新。


## 👻 奇奇怪怪
一些上周周报提到的神秘的东西正在慢条斯理的进行设计与开发。不过它是否公开、是否开源和开源形式还会待议。
> <small><i>也许这会成为法欧莉的小秘密被深深的藏起来呢？</i></small>



## 🏗 重构
细心的小伙伴可能已经发现了，最近有关于 [在 v3.0.0.preview.10.x 时进行重构](https://github.com/simple-robot/simpler-robot/issues/246)
的任务提上了日程。

有关这次的重构内容，issue的描述是：
> 重构api与核心模块下的使用方式，简化并提供更加一目了然的api；<br />
> 尝试提供更明确的应用入口，尝试收拾过度设计的遗留问题；

也许你可能看不太懂什么意思，但是没关系，让我来尝试着简单的解释解释。

实际上v3 版本预览直至目前已经暴露出了很多问题，其中就包括当初一些过度设计所导致的问题，比如一些几乎不可能用到的api或者使用/实现上存在明显缺陷的内容。
当然了，虽然说也不能保证这一次的重构能够完美的解决问题，不过... 多少起点儿作用吧!

目前是 `preview` 阶段，这个阶段频繁重构不是很正常的事情嘛！（暴论）<br /> 
总而言之，这总比到了 `beta` 甚至 `release` 阶段再去改要好多了吧。

首先，这次的重构任务**主要**是针对api与核心模块的。不过这也肯定会影响到组件实现，比如需要针对新的定义进行重新实现等。
并且，api与核心的重构必然导致boot模块下内部的结构变化，但是这可能不会过多的影响到使用体感。

目前版本在核心中进行使用的方式大概为如下形式：
```kotlin
// 先准备一个 eventListenerManager..
val listenerManager = coreListenerManager {
    listeners {
        // ...
    }
    
    interceptors {
        // ...
    }
    
    // 安装下述botManager涉及到的组件
    install(TencentGuildComponent)
    install(KaiheilaComponent)
    
}

// 再准备一些botManager...
val tencentGuildBotManager = tencentGuildBotManager(listenerManager) {
    // ...
} 


val kaiheilaBotmanager = kaiheilaBotManager(listenerManager) {
    // ...
}


// 再注册一些bot...
val tencentGuildBot = tencentGuildBotManager.register(clientId, token) { /* config... */ } 

val kaiheilaBot = kaiheilaBotManager.register(clientId, token) { /* config... */ }

tencentGuildBot.start()
kaiheilaBot.start()

// ...
```

嗯...怎么说呢, 这样看来它们总是缺乏一种... 整体性? 主题? 无论如何，他们总是零零散散的。虽然在重构后也许会依旧支持这种写法，
但是本次重构会为上述内容提供一个更加具有**整体性**的构建方式, 类似于：
```kotlin
val application = simbotApplication(Simple) {
    // manager..
    listenerManager {
        listeners {
            // ...
        }
        interceptors {
            // ...
        }
    }
    
    // 腾讯频道组件的组件对象和botManager
    install(TencentGuildComponent)
    install(TencentGuildBotManager) {
        // ... config
        
        register(clientId, token) {
            // bot config...
        }
    }
    
    // 开黑啦组件相关的组件对象和botManager
    install(KaiheilaComponent)
    install(KaiheilaBotManager){
        // config...
        register(clientId, token) {
            // bot config...
        }
    }
}

// join and suspend.
application.join()
// or application.shutdown
```

同时，也提供更简化的写法：
```kotlin
val application = simpleApplication {
        // manager 相关的部分配置...
    listeners {
        // ...
    }
    interceptors {
        // ...
    }
    
    // 腾讯频道组件提供的实现
    useTencentGuild {
        // config...
        configA = ...
        
        register(clientId, token) {
            // bot config...
        }
    }
    
    // 开黑啦组件提供的实现
    useKaiheila {
        // config...
        configB = ...
        
        register(clientId, token) {
            // bot config...   
        }
    }
} 

// join and suspend.
application.join()
// or application.shutdown
```

不过你可能也发现了，重构后的风格更倾向于一个 **Kotlin** 的库而并非 Java 友好的。事实上，确实。
核心模块的使用将会更加倾向于服务Kotlin，因为核心模块的特性，即便是旧版也无法完全使得Java用户能有很好的体验。

而且，通过Java使用核心模块也得不到什么实质性的提升——除了"灵活度"以外毫无亮点，而这种所谓的"灵活度"对于Java而言没有什么本质上的作用。

因此，对于Java用户，更建议直接通过 boot 模块进行上手，或者像大多数人一样，直接选择使用 Spring Boot Starter 作为开端。
 


## 🪀 其他小件儿
这段时间里，除了进行上述内容的更新，也简单捣鼓了点儿其他小玩意儿，比如提提pr，或者做了一个简易的 [ktor for nacos](https://github.com/ForteScarlet/nacos4k) 插件库。如果你有需要，可以简单看看。
