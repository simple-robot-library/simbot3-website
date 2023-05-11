---
title: 基础核心模块
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

核心模块 (`core`) 是对 [`api` 模块](../api.md) 的基本完整实现模块。

## 概述

`core` 模块的全名是 `simbot-core`。

`core` 模块可能是最具“功能”的模块了。他是 `api` 模块的完整实现，为simbot3提供了实际的能力表现。
它依赖 `api` 模块（和 `logger` 模块），大多数情况下你可以直接使用 `core` 模块而不需要再关系 `api` 模块。

当然，你也可以引入 `api` 模块的同时，将 `core` 模块作为 **仅运行时** (`runtimeOnly`) 来引用。

## 依赖参考

<Tabs groupId="use-dependency">
<TabItem value="Gradle Kotlin DSL" attributes={{'data-value': `Kts`}}>

```kotlin
implementation("love.forte.simbot:simbot-core:$VERSION")
```

</TabItem>
<TabItem value="Gradle Groovy" attributes={{'data-value': `Gradle`}}>

```gradle
implementation 'love.forte.simbot:simbot-core:$VERSION'
```

</TabItem>
<TabItem value="Maven" attributes={{'data-value': `Maven`}}>

```xml
<dependency>
  <groupId>love.forte.simbot</groupId>
  <artifactId>simbot-core</artifactId>
  <version>${VERSION}</version>
</dependency>
```

</TabItem>
</Tabs>

