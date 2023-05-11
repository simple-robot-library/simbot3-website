---
title: Spring Boot
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DataValues from '@site/src/components/TabItemDataValues';

## 描述

`Spring Boot` 模块的全名为 `simboot-core-spring-boot-starter`，并且位于 `love.forte.simbot.boot` 包下。

提到 Java 开发，很多人第一时间会想到 `Spring`。simbot3作为一个JVM平台 Java 友好的框架，
自然不会放过它。

`Spring Boot` 模块基于 `core` 模块、实现 `api` 模块 (与基础 `boot` 模块) 提供在 `Spring Boot` 环境下的快速开发能力。
就像大多数同样支持 `Spring Boot` 的框架一样，编辑完配置后，只需要添加一个注解，即可开启simbot3之旅。


<Tabs groupId="code">
<TabItem value="Kotlin" attributes={{'data-value': `Kotlin`}}>

```kotlin
@SpringBootApplication
// highlight-next-line
@EnableSimbot // 启用
open class App

fun main(args: Array<String>) {
    runApplication<App>(args = args)
}
```

</TabItem>
<TabItem value="Java" attributes={{'data-value': `Java`}}>

```java
@SpringBootApplication
// highlight-next-line
@EnableSimbot // 启用
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
```

</TabItem>
</Tabs>


## 依赖参考

<Tabs groupId="use-dependency">
<TabItem value='Gradle Kotlin DSL' attributes={{'data-value':`Kts`}}>

```kotlin
implementation("love.forte.simbot.boot:simboot-core-spring-boot-starter:$VERSION")
```

</TabItem>
<TabItem value="Gradle Groovy" attributes={{'data-value': `Gradle`}}>

```gradle
implementation 'love.forte.simbot.boot:simboot-core-spring-boot-starter:$VERSION'
```

</TabItem>
<TabItem value="Maven" attributes={{'data-value': `Maven`}}>

```xml
<dependency>
  <groupId>love.forte.simbot.boot</groupId>
  <artifactId>simboot-core-spring-boot-starter</artifactId>
  <version>${VERSION}</version>
</dependency>
```

</TabItem>
</Tabs>
