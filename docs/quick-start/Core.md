---
sidebar_position: 1
title: Core
description: 使用核心库进行开发。
tags: [快速开始]
---

此章节示例使用基础的核心模块。有关相关模块的说明，可以参考 [核心模块概述](../overviews/module-overview/core)

:::note 假设

下述示例内容建立在你想要使用 [**开黑啦组件**](../component-overview/kaiheila) 和 [**mirai组件**](../component-overview/mirai) 的 **假设** 之上。

:::

:::caution 兼容问题

实际上 [**腾讯频道组件**](../component-overview/tencent-guild) 和 [**mirai组件**](../component-overview/mirai) 并不兼容。说具体点，**mirai组件**
可能暂时无法与其他大部分组件兼容：因为 **mirai组件** 使用的 `Ktor` 版本为 `v1.x`, 而其他大部分组件使用的为 `v2.x`。

因此下文中的组合使用仅为理想状态并仅做示例用。

:::


核心库没有什么注解、扫描，是更贴近于原生使用习惯的库，也许你需要写的代码会多一点儿，但是也能够让你可以更好的控制你所编写的一切。


:::info 注解?

如果你希望使用类似于simbot2中以注解作为主要开发风格的库，或者希望能拥有简单依赖注入功能和扫描功能的库以便于规模化开发的话，你可以参考 [**快速开始 - Boot**](Boot.md)。

:::

:::info Java?

需要注意的是，Core模块不提供Java相关的兼容API。

:::

# 使用依赖

import version from './dpVersion.json'
import QuickStartCoreCodes from './QuickStartCoreCodes';
import QuickStartCoreSnapshotCodes from './QuickStartCoreSnapshotCodes';
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





# 开始
## 使用Application

`Application` 是simbot应用程序的门户。在核心模块 `Core` 中提供了一个其工厂的最基础实现：`Simple`。

```kotlin title='SimpleApp.kt'
import love.forte.simbot.application.*
import love.forte.simbot.core.application.*

suspend fun main() {
    val launcher: ApplicationLauncher<SimpleApplication> = simbotApplication(Simple) {
        // ...
    }
    
    val application: SimpleApplication = launcher.launch()
    application.join()
}
```

这是一个最基础的写法。你需要从 `simbotApplication` 下的代码块中进行一系列的操作，并得到一个 `ApplicationLauncher<SimpleApplication>`。

然后，启动这个 `launcher`, 得到一个 `Application` 的 `Simple` 实现：`SimpleApplication`。最后，挂起并直到它被终止。

当然，你也可以一步到位，直接构建一个 `Application`。`Simple` 提供了几个额外的扩展函数以供使用，我们择其一作为示例：

```kotlin title='SimpleApp.kt'
import love.forte.simbot.core.application.*

suspend fun main() {
    val application: SimpleApplication = createSimpleApplication {
    
    }
    application.join()
}
```

## 组件安装

### 安装组件标识

构建 `Application` 并不能让你直接使用任何组件。你需要手动安装你所需要的**组件标识**（ `Component` ），这里以mirai组件和开黑啦组件为例：


```kotlin title='SimpleApp.kt'
import love.forte.simbot.component.kaiheila.*
import love.forte.simbot.component.mirai.*
import love.forte.simbot.core.application.*

suspend fun main() {
    createSimpleApplication {
        install(MiraiComponent)
        install(KaiheilaComponent)
    }.join()
}
```

通常情况下，每个组件实现都会提供一些扩展函数:

```kotlin title='SimpleApp.kt'
import love.forte.simbot.component.kaiheila.*
import love.forte.simbot.component.mirai.*
import love.forte.simbot.core.application.*

suspend fun main() {
    createSimpleApplication {
        useMiraiComponent()
        useKaiheilaComponent()
    }.join()
}
```

### 安装BotManager

**组件标识** 通常为作为组件自己的标识以及特殊配置而存在（甚至很多都不需要配置）。 除了组件以外，`Application` 中还需要安装的一种东西为 `EventProvider`。
开黑啦组件和mirai组件作为与bot相关的组件，通常会提供各自的 `BotManager` 实现，而 `BotManager` 也是 `EventProvider` 的一种。

```kotlin title='SimpleApp.kt'
import love.forte.simbot.component.kaiheila.*
import love.forte.simbot.component.mirai.*
import love.forte.simbot.core.application.*

suspend fun main() {
    createSimpleApplication {
        useMiraiComponent()
        useKaiheilaComponent()
        
        install(MiraiBotManager)
        install(KaiheilaBotManager)
    }.join()
}
```

同样的，大多数组件也会为这个行为提供进行简化扩展：
```kotlin title='SimpleApp.kt'
import love.forte.simbot.component.kaiheila.*
import love.forte.simbot.component.mirai.*
import love.forte.simbot.core.application.*

suspend fun main() {
    createSimpleApplication {
        useMiraiComponent()
        useKaiheilaComponent()
        
        useMiraiBotManager()
        useKaiheilaBotManager()
    }.join()
}
```

而对于安装**组件标识**和安装**BotManager**的操作，各组件又通常会提供整合扩展。因此上述流程可以简化为：

```kotlin title='SimpleApp.kt'
import love.forte.simbot.component.kaiheila.*
import love.forte.simbot.component.mirai.*
import love.forte.simbot.core.application.*

suspend fun main() {
    createSimpleApplication {
        // 安装mirai组件标识，安装miraiBotManager
        useMirai()
    
        // 安装kaiheila组件标识，安装kaiheilaBotManager
        useKaiheila()
    }.join()
}
```

如果想要对各自组件下的部分进行配置，可以：

```kotlin title='SimpleApp.kt'
import love.forte.simbot.component.kaiheila.*
import love.forte.simbot.component.mirai.*
import love.forte.simbot.core.application.*

suspend fun main() {
    createSimpleApplication {
        // 安装mirai组件标识，安装miraiBotManager
        useMirai {
            component { /* mirai 组件标识配置 */ }
            botManager { /* mirai botManager配置 */ }
        }
    
        // 安装kaiheila组件标识，安装kaiheilaBotManager
        useKaiheila {
            component { /* kaiheila 组件标识配置 */ }
            botManager { /* kaiheila botManager配置 */ }
        }
    }.join()
}
```

### 特定Bot注册

既然安装了 `BotManager`, 通常情况下组件实现中会提供对bot的预注册api：
```kotlin title='SimpleApp.kt'
import love.forte.simbot.component.kaiheila.*
import love.forte.simbot.component.mirai.*
import love.forte.simbot.core.application.*

suspend fun main() {
    createSimpleApplication {
        // 安装mirai组件标识，安装miraiBotManager
        useMirai {
            botManager {
                register(code = 123456L, password = "PASSWORD") { bot ->
                    // 当 application启动完成后，启动bot
                    it.onCompletion {
                        bot.start()
                    }
                }
            }
        }
        
        // 安装kaiheila组件标识，安装kaiheilaBotManager
        useKaiheila {
            botManager {
                botManager {
                    register(clientId = "CLIENT_ID", token = "TOKEN") { bot ->
                        // 当 application启动完成后，启动bot
                        it.onCompletion {
                            bot.start()
                        }
                    }
                }
            }
        }
    }.join()
}
```

### 通用Bot注册
除了针对于指定的组件进行特定的预注册以外，`Application` 也提供了全局通用的注册函数 `bots { ... }`：

```kotlin title='SimpleApp.kt'
import love.forte.simbot.component.kaiheila.*
import love.forte.simbot.component.mirai.*
import love.forte.simbot.core.application.*

suspend fun main() {
    createSimpleApplication {
        useMirai()
        useKaiheila()
        
        bots {
            val botVerifyInfo = File("fooBot.bot").toResource().toBotVerifyInfo(StandardBotVerifyInfoDecoderFactory.Json.create())
            register(botVerifyInfo)
        }
    }
}
```

但是在 `Core` 中并不非常建议这种方式，因为这不如直接使用特定组件下的注册函数来的"精确"。因此此方式不进行过多介绍与解释。


## 监听函数
上面是安装组件、注册bot的流程，接下来是基础的监听函数注册流程。

> 下文中将会适当省略上述部分内容

监听函数的注册不是 `Application` 所强制要求的功能，但是 `Simple` 提供了它的基础实现。
接下来的代码示例展示通过几种不同的方式实现：当一个好友发送消息 `"喵"` 的时候，bot回复：`"喵喵喵"`

```kotlin
import love.forte.simbot.core.application.*
import love.forte.simbot.core.event.*
import love.forte.simbot.event.*

suspend fun main() {
    createSimpleApplication {
        eventProcessor {
            listeners {
                // 方式二
                listen(FriendMessageEvent) {
                    // 匹配函数
                    match { event -> "喵" in event.messageContent.plainText.trim() }
                    // 处理函数
                    handle { event ->
                        event.friend().send("喵喵喵")
                        EventResult.defaults()
                    }
                }
                // 方式二
                // 这种方式更建议使用在不需要 match 的情况。
                FriendMessageEvent { event ->
                    if ("喵" in event.messageContent.plainText.trim()) {
                        event.friend().send("喵喵喵")
                    }
                    
                    EventResult.defaults()
                }
                
                // 方式三
                // 直接提供一个 EventListener 对象，不通过builder
                // 这里借助 simpleListener 函数构建对象
                listener(simpleListener(FriendMessageEvent, matcher = { event ->
                    "喵" in event.messageContent.plainText.trim()
                }) { event ->
                    event.friend().send("喵喵喵")
                    EventResult.defaults()
                })
            }
        }
    }
}
```
