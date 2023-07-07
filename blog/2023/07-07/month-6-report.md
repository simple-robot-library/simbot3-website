---
authors: forliy
title: 2023年6月月报
tags: [ 2023月报,月报 ]
---

大概是2023年6月的月报喵。

<!--truncate-->

## 组件更新

### 核心库

[核心库](https://github.com/simple-robot/simpler-robot) 截至目前（23/7/7）已经发布至
[v3.2.0](https://github.com/simple-robot/simpler-robot/releases/v3.2.0) 了。

期间修复了一些或大或小的bug，并添加了一些或实或虚的特性。如果你有兴趣，可以前往 [Releases](https://github.com/simple-robot/simpler-robot/releases)
查看它们。

### mirai组件

[mirai](https://github.com/mamoe/mirai) 的更新速度一如既往（的慢），
因此 [**mirai组件**](https://github.com/simple-robot/simbot-component-mirai) 实际上也没有什么重大更新。

硬要说的话，就是更新了几个基于 mirai **非稳定版本**的临时版本来 *一定程度* 上的缓解无法登陆的问题。
之所以是缓解，是因为这些更新并没有什么根除，或者说"临时根除"的方案。

[v3.1.0.0-M8](https://github.com/simple-robot/simbot-component-mirai/releases/tag/v3.1.0.0-M8) 就是目前最新的一个 **非稳定版本** 。
如果你感兴趣，可以前往查看它（以及之前版本）的更新说明。

至于版本号，既然我们之前已经决定在 mirai 下一个稳定版发布的时候跟随第一个组件的正式版本，那现在的情况来看也就只能...一直往后堆 `M` 的数字啦。

### QQ频道组件

[QQ频道组件][QG-C]
有一些问题修复，不过**暂时**还没有发布下一个版本，目前它们的更新都在下一个快照版本中。


### KOOK组件

[KOOK组件][KK-C] 还是一如既往的处于[**重构**](https://github.com/simple-robot/simbot-component-kook/issues/82) 了一般的 *半成品* 状态，
总之，如果我们有精力，还是会继续这个任务的。

只不过最近这些时间精力有些不够用了。

[QG-C]: https://github.com/simple-robot/simbot-component-qq-guild

[KK-C]: https://github.com/simple-robot/simbot-component-kook


### Kotlin Suspend Transform Compiler Plugin

虽然这跟 simbot 无关，但是还是要分享一下，毕竟这个项目在一个[官方反馈](https://youtrack.jetbrains.com/issue/KT-53993)中被一个老哥夸夸了，
尽管我对 Kotlin 编译器插件也是半知零解的状态，但是我还是很开心的。

