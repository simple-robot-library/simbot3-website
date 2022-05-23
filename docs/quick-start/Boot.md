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

import version from './dpVersion.json';
import QuickStartBootCodes from './QuickStartBootCodes';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<QuickStartBootCodes version={version} />



## 使用
### 启动类

:::caution

⚠️ 注意：在使用Boot模块的时候，你的启动类至少需要有**一层以上**的包路径结构。

:::


<Tabs groupId="code">
<TabItem value="Kotlin" default>

```kotlin title="Application.kt"
package com.example


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
package com.example;

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
package com.example.listener


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
package com.example.listener;


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

参考 [BOT配置](../basic/bot-config)

## 启动
执行你的main函数，并根据日志进行相关操作。


## 打包
参考文档  [打包](../basic/package)
