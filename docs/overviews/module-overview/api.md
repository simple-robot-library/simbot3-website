---
title: api模块
sidebar_position: 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`api` 模块是simbot3中最基础的模块，用于提供对simbot3中各种功能API的定义。

## 描述

`api` 模块的全名为 `simbot-api`。

它是simbot3核心能力的主要组成部分，比如 `simbot-core` 便依赖并实现了 `api` 模块中提供的大多数能力与接口。
在文档中你能看到的大多数基础内容介绍中出现的东西（比如 `ID`、`Event` 等）也都是由 `api` 模块定义并提供的。

## 依赖参考

<Tabs groupId="use-dependency">
<TabItem value="Gradle Kotlin DSL" attributes={{'data-value': `Kts`}}>

```kotlin
implementation("love.forte.simbot:simbot-api:$VERSION")
```

</TabItem>
<TabItem value="Gradle Groovy" attributes={{'data-value': `Gradle`}}>

```gradle
implementation 'love.forte.simbot:simbot-api:$VERSION'
```

</TabItem>
<TabItem value="Maven" attributes={{'data-value': `Maven`}}>

```xml
<dependency>
  <groupId>love.forte.simbot</groupId>
  <artifactId>simbot-api</artifactId>
  <version>${VERSION}</version>
</dependency>
```

</TabItem>
</Tabs>
