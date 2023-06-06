---
sidebar_position: 10
title: 唯一标识 ID
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';
import Label from '@site/src/components/Label';

ID，用于代表一个目标的唯一标识。ID一个大家都熟悉的内容，它常常表现为一串数字，或者一串字符。

为了统一在各个环境下可能存在的ID类型差异，在 `simbot3` 中提供了一套针对ID的类型。

## ID

ID 是一个通用的唯一标识定义，其定义如下：

```kotlin
sealed class ID : Comparable<ID> {
  // 得到字符串类型字面值
	fun toString(): String
  
  // 比较
  fun compareTo(other: ID): Int
}
```

一个 `ID` 有两层含义：这个唯一标识的类型，以及它具体的值。
不同类型的 `ID` 的值类型可能不同，但是你都可以直接通过 `toString` 来得到它们的字符串字面值。

## 类型
`ID` 总共有3个大类型，其中 `NumericalID` (尤其 `IntID` 和 `LongID` ) 和 `CharSequenceID` 理论上可以满足绝大多数需求。

### NumericalID
此类型代表一个 **数字形式** 的ID。其定义如下：

```kotlin
sealed class NumericalID<N : Number> : ID() {
  // 得到字面值
  fun getValue(): N
  
  
  // 一些类似于 Number中的方法
  
  fun toByte(): Byte
  fun toShort(): Short
  fun toInt(): Int
  fun toLong(): Long
  fun toDouble(): Double
  fun toFloat(): Float
  fun toChar(): Char
}
```

`NumericalID`提供了很多基本的类型实现，但是实际上只有整型类型才是最常用的类型。

- `IntID`
- `LongID`
- `UIntID` <Label>3.1.0</Label>
- `ULongID` <Label>3.1.0</Label>

:::tip future

在未来，也可能在 simbot 4.0，ID类型会进一步被简化。

:::


简单的使用示例：

<!-- 展示类型 -->
<Tabs groupId="code">
<TabItem value="Kotlin" attributes={{'data-value': `Kotlin`}}>

[//]: # ( attributes={{'data-value': 'Kotlin'}})

<!-- id类型 -->
<Tabs groupId="id-type">
<TabItem value="Int">

```kotlin
val intId = 123.ID
```

</TabItem>
<TabItem value="Long">

```kotlin
val longId = 123456L.ID
```

</TabItem>
<TabItem value="UInt">

> <Label>3.1.0</Label>

```kotlin
val longId = 123456u.ID
```

</TabItem>
<TabItem value="ULong">

> <Label>3.1.0</Label>

```kotlin
val ul: ULong = 123456u
val longId = ul.ID
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Java" attributes={{'data-value': `Java`}}>

<!-- id类型 -->
<Tabs groupId="id-type">
<TabItem value="Int">

```java
final IntID intId = Identifies.ID(123);
```

</TabItem>
<TabItem value="Long">

```java
final LongID longId = Identifies.ID(123456L);
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>



### CharSequenceID 
除了数字ID，最常见的就是字符序列ID了，比如一串UUID。`CharSequenceID` 是一个独立实现，表示一个最基础的字符串ID。

<Tabs groupId="code">
<TabItem value="Kotlin" default attributes={{'data-value': `Kotlin`}}>

```kotlin
val id: CharSequenceID = "HelloWorld".ID

val anyId: CharSequenceID = 123.ID.toCharSequenceID() // 所有ID理论上都可以作为字符序列ID
```

</TabItem>
<TabItem value="Java" attributes={{'data-value': `Java`}}>

```java
final CharSequenceID helloId = Identifies.ID("HelloWorld");

final CharSequenceID strId = Identifies.toCharSequenceID(Identifies.ID(123));
```

</TabItem>
</Tabs>


## 简单类型包装

`ID` 是一种对简单类型的包装，因此它们很可能是**即用即造**的。因此在有需要的情况下（例如服务器资源十分紧缺）考虑通过变量在上下文中保存而不是始终通过属性获取。

<Tabs groupId="code">
<TabItem value="Kotlin" attributes={{'data-value': `Kotlin`}}>

**Not so good**🤔:

```kotlin
val someContainer = ...

// via property (getter)
useId(someContainer.id)
useId(someContainer.id)
useId(someContainer.id)
```

**Not bad**👍:

```kotlin
val someContainer = ...

val id = someContainer.id

// via local variables
useId(id)
useId(id)
useId(id)
```

</TabItem>
<TabItem value="Java" attributes={{'data-value': `Java`}}>

**Not so good**🤔:

```java
var someContainer = ...;

// via property (getter)
useId(someContainer.getId());
useId(someContainer.getId());
useId(someContainer.getId());
```

**Not bad**👍:

```java
var someContainer = ...;

var id = someContainer.getId();

// via local variables
useId(id);
useId(id);
useId(id);
```

</TabItem>
</Tabs>
