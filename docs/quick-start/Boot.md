---
sidebar_position: 2
tags: [快速开始]
---

此章节示例使用基础的 `Boot` 模块。有关相关模块的说明，可以参考 [Boot模块概述](../overviews/module-overview/boot)

:::note 此非彼

注意，此 `Boot` 并不是指 `SpringBoot` 喔。

:::

:::note 假设

下文将会 **假设** 你想要使用 [**开黑啦组件**](../component-overview/kaiheila) 和 [**mirai组件**](../component-overview/mirai)。

:::

:::caution 兼容问题

实际上 [**开黑啦组件**](../component-overview/kaiheila) 和 [**mirai组件**](../component-overview/mirai) 并不兼容。说具体点，**mirai组件**
可能暂时无法与其他大部分组件兼容：因为 **mirai** 使用的 [**Ktor**](https://ktor.io/) 版本为 `v1.x`, 而其他大部分组件使用的为 `v2.x`。

因此下文中的组合使用仅为理想状态并仅做示例用。

:::


# 使用依赖

import version from './dpVersion.json';
import QuickStartBootCodes from './QuickStartBootCodes';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<QuickStartBootCodes version={version} />



# 开始

:::caution 包路径

⚠️ 注意：在使用Boot模块的时候，你的启动类至少需要有**一层以上**的包路径结构。

:::


<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin 基础" default>

## 使用Application

`Application` 是simbot应用程序的门户。在Boot模块中提供了一个其工厂的最基础实现：`Boot`。

:::info application

有关 `Application` 的各种使用方式请参考 [**快速开始-Core**](./Core) ，此处不再过多重复。

:::

```kotlin title="example/BootApp.kt"
package example

import love.forte.simboot.core.application.*
import love.forte.simbot.application.*

/** main入口。 */
suspend fun main() {
    val launcher: ApplicationLauncher<BootApplication> = simbotApplication(Boot) {
        // config
    }
    val application: BootApplication = launcher.launch()
    application.join()
}
```

`Boot` 提供了简化的扩展函数：

```kotlin title="example/BootApp.kt"
package example

import love.forte.simboot.core.application.*

/** main入口。 */
suspend fun main() {
    createBootApplication { 
        // config..
    }.join()
}
```


## 组件安装


### 安装组件标识

构建 `Application` 并不能让你直接使用任何组件。你需要手动安装你所需要的**组件标识**（ `Component` ），这里以mirai组件和开黑啦组件为例：


```kotlin title='example/BootApp.kt'
import love.forte.simbot.component.kaiheila.*
import love.forte.simbot.component.mirai.*
import love.forte.simboot.core.application.*

suspend fun main() {
    createBootApplication {
        useMiraiComponent()
        useKaiheilaComponent()
    }.join()
}
```

### 安装BotManager

**组件标识** 通常为作为组件自己的标识以及特殊配置而存在（甚至很多都不需要配置）。 除了组件以外，`Application` 中还需要安装的一种东西为 `EventProvider`。
开黑啦组件和mirai组件作为与bot相关的组件，通常会提供各自的 `BotManager` 实现，而 `BotManager` 也是 `EventProvider` 的一种。

```kotlin title='example/BootApp.kt'
import love.forte.simbot.component.kaiheila.*
import love.forte.simbot.component.mirai.*
import love.forte.simboot.core.application.*

suspend fun main() {
    createBootApplication {
        useMiraiComponent()
        useKaiheilaComponent()
        
        useMiraiBotManager()
        useKaiheilaBotManager()
    }.join()
}
```

合并组件标识和botManager的配置后：

```kotlin title='example/BootApp.kt'
import love.forte.simbot.component.kaiheila.*
import love.forte.simbot.component.mirai.*
import love.forte.simboot.core.application.*

suspend fun main() {
    createBootApplication {
        useMirai()
        useKaiheila()
    }.join()
}
```



### 自动安装
当你不关心具体组件，而只希望加载当前环境内所有支持的组件的时候，你可以使用由核心提供的扩展函数来尝试加载当前环境下所有支持自动加载的组件信息：

```kotlin
import love.forte.simbot.application.*
import love.forte.simbot.core.application.*
import love.forte.simbot.installAll
import love.forte.simbot.installAllComponents

suspend fun main() {
    createSimpleApplication {
        installAllComponents(/* classLoader = ... */)
        installAllEventProviders(/* classLoader = ... */)
        
        // 同时使用上述两个方法
        installAll(/* classLoader = ... */)
    }.join()
}
```

## 依赖管理
相比于 `Simple` ( `Core` 模块所提供的 ) , `Boot` 模块下提供的 `Application` 支持自动扫描并加载依赖，提供依赖管理的功能：

```kotlin
package example

import love.forte.simboot.core.application.createBootApplication

/** main入口。 */
suspend fun main() {
    createBootApplication(configurator = {
        // 配置依赖扫描的包路径列表
        classesScanPackage = listOf("example.foo", "example.tar")
    }) {
        
        // 在上述 classesScanPackage 配置扫描的范围 **之外**
        // 提供 **额外** 需要管理的bean实例。
        beans {
            // 注册一个唯一标识为 'foo' 的 Foo() 实例
            bean("foo", Foo())
            
            // 注册一个唯一标识为 'tar' 的 Tar 工厂
            bean("tar", Tar::class) { Tar() }
        }
        
        
    }.join()
}

class Foo
class Tar
```

不过，通常情况下你也许不需要使用 `beans { ... }` 配置。





</TabItem>



<TabItem value="Kotlin App">

TODO()



</TabItem>


<TabItem value="Java" label="Java App">

TODO()



</TabItem>
</Tabs>



## Bot配置

参考 [BOT配置](../basic/bot-config)

## 启动
执行你的main函数，并根据日志进行相关操作。


## 打包
参考文档  [打包](../basic/package)
