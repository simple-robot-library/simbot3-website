---
authors: forliy
title: 2023年4月月报
tags: [2023月报,月报]
---

大概是2023年4月的月报喵。

<!--truncate-->

祝各位五一劳动节快乐，不快乐也没关系，随便你，毕竟节日已经结束了。

## 组件更新

### 核心库

[核心库](https://github.com/simple-robot/simpler-robot) 已经滞留于版本 [v3.0.0-RC.3](https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0-RC.3)
有一段时间了，那么为什么不更新呢？

实际上，我们在等待 [Kotlin coroutines](https://github.com/Kotlin/kotlinx.coroutines) 的下一个版本 (`v1.7.0`) 的正式发布。
届时其会提供更加稳定和明确的 [多平台目标](https://kotlinlang.org/docs/native-target-support.html) 、更好的性能以及一些其他有用的特性。

尽管v3的核心库中主要的部分都并不是多平台的，但是很多其他模块却需要这方面的特性，也会有利于其他组件和编译器插件的跟进于维护。

总而言之，我们目前打算 `simbot v3.0.0` 始于 `Kotlin coroutines v1.7.0`。因此，稍微再等等吧。 

### KOOK组件

[QQ频道组件][QG-C] 的更新进入尾声之后，
从中总结的部分经验也可以应用于 [KOOK组件][KK-C]。

因此，QQ频道组件之后的另一个（其实也就是最后一个）需要重构的便是 [KOOK组件][KK-C] 了。

有关KOOK组件的重构，如果你有什么好建议，也可以前往 [KOOK#82](https://github.com/simple-robot/simbot-component-kook/issues/82) 
分享你的看法。

:::note 有一说一

_跟QQ频道的API比起来，KOOK API 的设计实在是有些...一言难尽。_

:::

## 文档更新

### QQ频道组件手册

我们为 [QQ频道组件][QG-C] 发布了 [**在线手册**](https://simple-robot.github.io/simbot-component-qq-guild/)，
并会在其中陆续填充各类说明与文档（例如**快速开始**、**配置说明**等）。

### KOOK组件手册

我们为 [KOOK组件][KK-C] 发布了 [**在线手册**](https://simple-robot.github.io/simbot-component-kook/)
并会在其中陆续填充各类说明与文档（例如**快速开始**、**配置说明**等）。


:::tip 域名?

因为 [QQ频道组件][QG-C] 和 [KOOK组件][KK-C] 的版本都尚处于 `alpha` 阶段，因此暂时还没有为他们的手册分配对应的域名。
至少等到 `beta` 阶段时才会开始考虑手册域名的问题。

:::


[QG-C]: https://github.com/simple-robot/simbot-component-qq-guild
[KK-C]: https://github.com/simple-robot/simbot-component-kook
