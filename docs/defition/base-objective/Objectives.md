---
sidebar_position: 20
title: 目标对象
---

目标对象 `Objectives` 是 simbot 中的基础定义类型之一。
`Objectives` 是对与 `Bot` 相关联的对象 （例如一个 _组织_ 或一个具体的 _用户_ ）的统称。

`Objectives` 的大致定义如下：
```kotlin
public interface Objectives : BotContainer, IDContainer {
    // ...
}
```

在定义中可以看出，`Objectives` 继承了 [BotContainer](../container-overview#botcontainer) 和 [IDContainer](../container-overview#idcontainer) ，
提供了获取 [ID](ID) 和 `Bot` 的能力。


核心库提供了 `Objectives` 标准类型实现，其大致结构如下：

[![](@site/static/img/uml/Objectives.png)](@site/static/img/uml/Objectives.png)

可以看到，`User` 和 `Organization` 是 `Objectives` 的主要分支，分别代表了 **用户** 与 **组织** 。

## Organization

**组织**，是以人为中心的实体，常见为一个群聊、一个频道、一个服务器等。有关**组织**的简要介绍，参考 [**组织**](Organization.md)。

可以在上面示例图中看出，**组织** 的主要实体类型有 `Guild`、`Group` 和 `Channel`。



### Guild

**Guild** 即 **频道服务器**，常见于一些支持频道相关的组件，例如 _**开黑啦**_ 或者 _**QQ频道**_ 。
`Guild` 所代表的为频道结构中的 _**频道服务器**_，一个频道服务器中通常包含了多名成员和多个子频道（ [`Channel`](#channel) ）。



### ChatRoom


### Channel


### Group
 
