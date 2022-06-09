---
sidebar_position: 25
title: 时间戳
---

**`Timestamp`**，顾名思义，这是一个**时间戳**类型。

在组件中，"时间戳"的非常常见的一个概念。比如 `Event.timestamp` 即代表获取此事件发生的时间。

通常情况下，时间戳都是一个**长整型**数值，一般代表为 **毫秒时间戳** 或 **秒时间戳**。
（当然了，也有小概率出现那种用分钟时间戳的怪胎，尽管目前我从未见过）
但是对于不同的组件实现进行协作时，不同组件中时间戳单位不一致的问题很可能会是一种隐患。


因此simbot提供了 `Timestamp` 作为面向使用者的统一时间戳类型来取代不同时间单位的时间戳。

## 定义
如下为 `Timestamp` 的基本定义（简化版）：
```kotlin
public sealed class Timestamp : Comparable<Timestamp> {

    /**
     * 秒值。
     */
    public abstract val second: Long

    /**
     * 毫秒值。
     */
    public abstract val millisecond: Long

    /**
     * 此时间戳是否是一个被支持的真实时间戳。
     * 如果得到false，则代表此时间戳本质上不存在，且上述秒值和毫秒值最终结果应为-1。
     */
    public abstract fun isSupport(): Boolean


    public object NotSupport : Timestamp() {
       // 细节省略...
    }
}
```


:::caution TODO

TODO

:::
