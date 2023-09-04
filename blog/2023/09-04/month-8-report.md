---
authors: forliy
title: 2023年8月月报
tags: [ 2023月报,月报 ]
---

大概是2023年8月的月报喵。

<!--truncate-->

## 组件更新

### 核心库

[核心库](https://github.com/simple-robot/simpler-robot) 依旧没有什么很大的问题，也没有什么可更新的。

### KOOK组件

[KOOK组件][KK] 的 [重构计划](https://github.com/simple-robot/simbot-component-kook/issues/82) 已经进入到了新的阶段，并且也发布了几个重构后的版本（例如 [`v3.2.0.0-alpha.8-dev.3`](https://github.com/simple-robot/simbot-component-kook/releases/tag/v3.2.0.0-alpha.8-dev.3)）

重构后，KOOK组件除了core模块以外，也同 [QQ频道组件][QG]一样被重构为 `KMP` (`Kotlin Multiplatform`) 模块并支持多平台（JVM、JS、Native），
并且我们优化改善了KOOK内部的诸多机制，使得它更易维护，也更稳定。

目前发布的与重构相关的 `-dev.x` 版本更新说明里都会追加一些警告和对重构版本内容的部分说明，有兴趣的话可以参考一下～

[QG]: https://github.com/simple-robot/simbot-component-qq-guild

[M]: https://github.com/simple-robot/simbot-component-mirai

[KK]: https://github.com/simple-robot/simbot-component-kook

