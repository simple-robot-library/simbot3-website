---
sidebar_position: 2
tags: [快速开始]
---

此章节示例使用基础的 `Boot` 模块。有关相关模块的说明，可以参考 [Boot模块概述](../overviews/module-overview/boot)


:::note

下文将会假设你想要使用 [**腾讯频道组件**](../component-overview/tencent-guild) 和 [**mirai组件**](../component-overview/mirai)。

:::


:::info

注意，此 `Boot` 并不是指 `SpringBoot` 喔。

:::


## 使用依赖

import version from './dpVersion.json'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


<Tabs groupId="use-dependency">
<TabItem value="Maven" label="Maven" default>
<CodeBlock language="xml">
{`<!-- simbot核心标准库 -->
<dependency>
    <groupId>love.forte.simbot.boot</groupId>
    <artifactId>simboot-core</artifactId>
    <version>${version.simbot.version}</version>
</dependency>\n
<!-- 腾讯频道组件 -->
<dependency>
    <groupId>love.forte.simbot.component</groupId>
    <artifactId>simbot-component-tencent-guild-boot</artifactId>
    <version>${version.simbot.component.tcg}</version>
</dependency>\n
<!-- mirai组件 -->
<dependency>
    <groupId>love.forte.simbot.component</groupId>
    <artifactId>simbot-component-mirai-boot</artifactId>
    <version>${version.simbot.component.mirai}</version>
</dependency>`}
</CodeBlock>
</TabItem>

<TabItem value="Gradle Kotlin DSL" label="Gradle Kotlin DSL">
<CodeBlock language="kotlin">
{`// 3.x中，大部分组件的版本维护独立于标准库。
// simbot核心标准库
implementation("love.forte.simbot.boot:simboot-core:${version.simbot.version}")\n
// 腾讯频道组件
implementation("love.forte.simbot.component:simbot-component-tencent-guild-boot:${version.simbot.component.tcg}")\n
// mirai组件
implementation("love.forte.simbot.component:simbot-component-mirai-boot:${version.simbot.component.mirai}")`}
</CodeBlock>
</TabItem>

<TabItem value="Gradle Groovy" label="Gradle Groovy">
<CodeBlock language="groovy">
{`// 3.x中，大部分组件的版本维护独立于标准库。
// simbot核心标准库
implementation 'love.forte.simbot.boot:simboot-core:${version.simbot.version}'\n
// 腾讯频道组件
implementation 'love.forte.simbot.component:simbot-component-tencent-guild-boot:${version.simbot.component.tcg}'\n
// mirai组件
implementation 'love.forte.simbot.component:simbot-component-mirai-boot:${version.simbot.component.mirai}'`}
</CodeBlock>
</TabItem>
</Tabs>


## 使用
### 启动类

:::caution

⚠️ 注意：在使用Boot模块的时候，你的启动类至少需要有**一层以上**的包路径结构。

:::


<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin title="Application.kt"
@SimbootApplication 
class Application

suspend fun main(args: Array<String>) {
    val context = SimbootApp.run(Main::class, *args)
    context.join()
}
```

</TabItem>
<TabItem value="Java">

```java title="Application.java"
@SimbootApplication
public class Application {
    public static void main(String[] args) throws SimbootApplicationException {
        final SimbootContext context = SimbootApp.run(Application.class, args);
        context.joinBlocking();
    }
}
```

</TabItem>
</Tabs>


### 监听函数
在Boot模块下，所有的监听函数都需要标记 `@Listener` 。而至于你想要监听的事件，将其作为参数即可，不再需要额外的标记。
下面将会以 监听 `FriendMessageEvent(好友消息事件)` 作为示例。 


<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin title="Bar.kt"
@Beans
class Bar {
    
    @Listener
    suspend fun FriendMessageEvent.onEvent() {
        // do..
    }
}
```

</TabItem>
<TabItem value="Java">

```java title="Bar.java"
@Beans
public class Bar {

    @Listener
    public void onEvent(FriendMessageEvent event) {
        // do...
    }
}
```

</TabItem>

</Tabs>


## Bot配置
TODO

## 启动
执行你的main函数，并根据日志进行相关操作。


## 打包
参考文档  打包(TODO)