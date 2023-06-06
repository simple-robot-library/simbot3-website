---
authors: forliy
title: 2023年5月月报
tags: [ 2023月报,月报 ]
---

大概是2023年5月的月报喵。

<!--truncate-->

## 组件更新

### 核心库

[核心库](https://github.com/simple-robot/simpler-robot) 已经迎来了它伟大的
[v3.0.0](https://github.com/simple-robot/simpler-robot/releases/v3.0.0) 更新，
并且现在已经到了 [v3.1.0](https://github.com/simple-robot/simpler-robot/releases/v3.1.0) 。

#### **v3.0.0**

`v3.0.0` 主要是作为一个稳定的 `v3`
版本发布，并且各依赖的版本也进行了一波更新，包括 `Kotlin Coroutines` 、`Kotlin Serialization` 等。

`v3.1.0` 则提供了一些更多的新特性和一些小问题/隐患的修复。

### mirai组件

[mirai](https://github.com/mamoe/mirai) 目前的更新处于停滞状态，
因此 [**mirai组件**](https://github.com/simple-robot/simbot-component-mirai) 也没什么机会去更新。

我们仍旧在等待 mirai 发布后续更新，不过也有可能会临时破例更新一个针对 mirai 的 `v2.15.0-M1` 版本的临时版本。

### QQ频道组件

[QQ频道组件][QG-C] 已经大体“稳定”，并且目前来看已经可以长期运营了（可参考亲爱的 [法欧莉](https://qun.qq.com/qunpro/robot/share?robot_appid=101986850)）。
不过可能仍有一些细节需要完善，比如发送主动消息时会产生的**主动消息审核**的问题。

### KOOK组件

QQ频道之后便是 [KOOK组件][KK-C] 了，但是由于时间上的问题最近一直没有很多时间去继续这个工作。
KOOK组件目前仍处于 [**重构**](https://github.com/simple-robot/simbot-component-kook/issues/82) 阶段。

[QG-C]: https://github.com/simple-robot/simbot-component-qq-guild

[KK-C]: https://github.com/simple-robot/simbot-component-kook
