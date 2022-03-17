---
title: 版本要求
sidebar_location: 10

---

simbot3对SpringBoot要求最低版本至少为 [v2.6.4](https://github.com/spring-projects/spring-boot/releases/tag/v2.6.4), 
或保证内置的 `Spring Framework` 版本必须高于等于 [v5.3.16](https://github.com/spring-projects/spring-framework/releases/tag/v5.3.16) 。

:::info
你可以查看 [Spring Framework#28012](https://github.com/spring-projects/spring-framework/issues/28012) 来了解原因。
:::

如果你不保证内置的 `Spring Framework` 版本 `>= 5.3.16`，那么你将无法使用 `@Filter` 注解。

但是很不幸的是，对于 `2.6.3` 版本的 `SpringBoot` 来讲，其内置的 `Spring Framework` 版本是 `5.3.15` 。
因此如果你使用的 `Spring Boot` 版本小于 `2.6.4` , 那么你需要一些额外的操作来调整 `Spring Framework` 的版本：


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


<Tabs groupId="use-dependency">
<TabItem value="Maven" default>

```kotlin title="pom.xml"
<properties>
  <!-- 或更高 -->
  <spring-framework.version>5.3.16</spring-framework.version>
</properties>	
```

</TabItem>
<TabItem value="Gradle Kotlin DSL">

```kotlin title="build.gradle.kts"
ext["spring-framework.version"] = "5.3.16" // 或更高
```

</TabItem>
<TabItem value="Gradle Groovy">

```groovy title="build.gradle"
ext['spring-framework.version'] = '5.3.16' // 或更高
```

</TabItem>
</Tabs>