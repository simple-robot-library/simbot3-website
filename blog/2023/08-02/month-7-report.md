---
authors: forliy
title: 2023年7月月报
tags: [ 2023月报,月报 ]
---

大概是2023年7月的月报喵。

<!--truncate-->

## 组件更新

### 核心库

[核心库](https://github.com/simple-robot/simpler-robot) 目前没有什么很大的问题，也没有什么可更新的。硬要说的话，也许会在某个时间点考虑将
Kotlin 更新到 1.9 。不过这并不迫切，也不必须，总而言之7月的核心库没有什么更新。

### mirai组件

[mirai](https://github.com/mamoe/mirai) 终于是更新了 v2.15 版本，并且支持了对第三方签名服务器以及手表的扫描登录的支持。
当然，[mirai组件][M] 也随之更新了 [`v3.2.0.0`](https://github.com/simple-robot/simbot-component-mirai/releases/tag/v3.2.0.0)。

签名服务器的对接能力实际上由mirai-core本身通过 SPI 加载支持，理论上并不需要simbot组件来做编码层面的“适配”。
因此对于签名服务器，实际上可以说与simbot并没什么关系。如果有需要，自行前往参考mirai与之相关的说明并进行配置即可。

### QQ频道组件

[QQ频道组件][QG] 本月也更新了一个小版本 [`v3.2.0.0-alpha.10`](https://github.com/simple-robot/simbot-component-qq-guild/releases/tag/v3.2.0.0-alpha.10)，
主要修复了一些问题。

QQ频道组件在重构之后，目前来看可能不会有什么**大型**的API变动了，也许...该考虑将版本更新到 beta 阶段了？

### KOOK组件

[KOOK组件][KK] 也同样有 [`v3.0.0.0-alpha.7`](https://github.com/simple-robot/simbot-component-kook/releases/tag/v3.0.0.0-alpha.7) 的小版本更新，
也同样是修复了一些问题。

不过KOOK组件的 [重构计划]() 仍在执行，但是进度缓慢。
至于为什么缓慢，当有了工作而且有很多任务的时候就会这样。在这种状况下回到家后，打开电脑，你更可能会打开 Steam 而不是 IDEA。

### Projects

本月某天，我们简单的装修了一下 [GitHub Projects](https://github.com/orgs/simple-robot/projects)，
后续可能会有意无意的将一些相关的 issues 与之关联。如果你对其中的相关信息感兴趣，可以看看。

[QG]: https://github.com/simple-robot/simbot-component-qq-guild

[M]: https://github.com/simple-robot/simbot-component-mirai

[KK]: https://github.com/simple-robot/simbot-component-kook

### 以及一个好日子

8月。有值得纪念的一天，也希望今年能够美满。
