---
authors: forliy
title: 2023年9月月报
tags: [ 2023月报,月报 ]
---

大概是2023年9月的月报喵。

<!--truncate-->

## 组件更新

### 核心库

#### 虚拟线程

[核心库](https://github.com/simple-robot/simpler-robot) 发布了一个测试版本：[v3.3.0-beta1](https://github.com/simple-robot/simpler-robot/releases/tag/v3.3.0-beta1) 。
在这个版本中最主要的内容便是提供了对JDK21虚拟线程的支持，以及配套的一些内部实现逻辑的修改。

如果你使用Java开发，并希望将调度事件的线程与执行阻塞API的线程（例如 `sendBlocking`）切换到虚拟线程中，
那么首先，你需要添加JVM参数：

```
-Dsimbot.runInBlocking.dispatcher=virtual
```

_(或者在程序一开始添加到 `System.properties` 中)_

此时，你便将所有阻塞API（例如 `sendBlocking`）的 **内部调度逻辑** 切换到了虚拟线程中（如果存在线程切换的话）。

不过注意，这里说的是内部调度逻辑，而直接调用阻塞API的线程通常情况下由调度事件的线程决定（除了一些主动调用的地方，例如某个定时任务），
那么你还需要将simbot调度事件时用的线程池也切换到虚拟线程中。

在普通的core模块应用中，你可以通过 `ApplicationConfiguration` 或 `SimpleListenerManagerConfiguration` 的中的 `coroutineContext` 来定制事件调度器。

在 Spring Starter 中，向程序中注入一个 `CoroutineDispatcherContainer` 的实例并使其携带一个虚拟线程的线程池。

例如Java中：

```java
@Bean
public CoroutineDispatcherContainer virtualCoroutineDispatcherContainer() {
   return new CoroutineDispatcherContainer(ExecutorsKt.from(Executors.newVirtualThreadPerTaskExecutor()));
}
```

:::tip

详细说明参考 [**#744**](https://github.com/simple-robot/simpler-robot/pull/744)

:::

:::caution

对虚拟线程的支持和对阻塞API逻辑的调整仍处于**实验观察阶段**，请积极回报这其中出现的错误或任何不符合预期的现象，感谢您的支持！

:::

### mirai组件

前段时间听闻 mirai 的新版本支持了**短视频消息**，但是去看了发现其版本仍处于 `RC` 阶段。一般来讲对于非正式版本是不会考虑积极对接的，
因此对短视频消息的支持工作 _尚未开始_ 。再观察一段时间吧，如果下一个版本迟迟不来，那么或许会考虑一下提前的非正式版。

### 米游社大别野组件

米游社大别野也有机器人了，因此我们挖了一个[米游社大别野组件](https://github.com/simple-robot/simbot-component-miyoushe)的新坑。

不过米游社bot的API（截至我所知的最后信息）尚不支持ws _（后续官方有支持的计划）_ 而暂时仅支持 HTTP 回调，调试起来相对困难，而且API并不是非常的全面，因此组件的实现工作可能会暂时停滞一段时间。

:::tip 欢迎协助

当然，此组件目前尚处于 "仅仅是有这么一个啥也没有的仓库" 阶段，如果你有兴趣，欢迎协助我们进行开发。您可以通过此仓库的issues或前往 [组织库首页](https://github.com/simple-robot)
寻找QQ群号或QQ频道链接与我们取得联系，感谢您的协助！

:::


[QG]: https://github.com/simple-robot/simbot-component-qq-guild

[M]: https://github.com/simple-robot/simbot-component-mirai

[KK]: https://github.com/simple-robot/simbot-component-kook

