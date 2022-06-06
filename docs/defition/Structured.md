---
sidebar_position: 20
title: 结构体
---

:::danger 弃用

**将被弃用的类型。**

:::

结构化接口 `Structured` 是一个通用的底层接口，其代表一个类型是一种类似于*树*的结构化、有层次的对象。

当然，通常情况下你可能根本不会直接使用到此类型， 它通常由一些高层次的类型所继承或实现，例如 [组织](base-objective/Organization.md)。

## 接口定义
```kotlin
public interface Structured<P, N> {

    /** 上一级的内容。 */
    public suspend fun previous(): P

    /** 下一级的内容(子级)。*/
    public suspend fun children(grouping: Grouping): N
}
```

一个结构化的东西，都有可能存在上级和下级。对于结构化对象较为常见的内容比如文件树、频道服务器与其内部的频道等。
