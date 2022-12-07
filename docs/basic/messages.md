---
sidebar_position: 17
title: 消息
---

import Label from '@site/src/components/Label'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


:::danger TODO

施工中

:::

:::info

在阅读本章节之前，你应当已经了解过了 [**消息的定义**](../definition/message-overview)。

:::

消息是在事件处理过程中你可能会频繁接触的东西。

## 消息对象

消息对象是指 `Message` 类型的对象，它们是消息元素 (`Message.Element`) 有一个或多个**不可变的**消息集。

### 构建消息对象

对一个消息对象的构建方式取决于消息类型本身。举几个例子，[标准消息类型](../definition/message-overview/standard-message)
中的 [文本消息](../definition/message-overview/standard-message#text) 
的构建方式是使用其静态工厂方法 `Text.of` 或 `Text.getEmptyText()`：

<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
val text1: Text = "Hello".toText()
val text2: Text = Text { "World" }
val emptyText: Text = Text()
```

</TabItem>
<TabItem value="Java" label="Java">

```java
final Text text = Text.of("Hello");
final Text emptyText = Text.getEmptyText();
```

</TabItem>
</Tabs>

而 [AT](../definition/message-overview/standard-message#at) 则直接创建一个新实例即可：


<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
val at: At = At(123.ID)
val atMember: At = At(event.author().id)
```

</TabItem>
<TabItem value="Java" label="Java">

```java
final At at = new At(Identifies.ID(123));
final At atMember = new At(event.getAuthor().getId());
```

</TabItem>
</Tabs>

对于 [AT所有](../definition/message-overview/standard-message#atall)，其作为一个 `object` 则可以直接使用：


<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
val atAll: AtAll = AtAll
```

</TabItem>
<TabItem value="Java" label="Java">

```java
final AtAll atAll = AtAll.INSTANCE;
```

</TabItem>
</Tabs>

因此，具体问题具体分析，不管是[标准消息类型](../definition/message-overview/standard-message)还是由组件或第三方提供的额外消息类型，
阅读其相关文档或注释来了解如果构建它们。

### 构建消息链

上述我们讲的是一个独立消息元素（`Message.Element`）的构建方式。将多个消息元素“组合”起来，便形成了**消息链**（`Messages`）。

<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

在Kotlin中，合并消息元素为一个消息链的最基本方式便是使用 `plus` 操作符直接进行拼接。不过需要注意，前文我们提到过消息是**不可变**的，消息链也是，
因此通过操作符合并后将会得到一个**新的消息（链）**。

以一个普通的 `文字 + AT` 为例：

```kotlin
val messages = "文字".toText() + At(123.ID)
```

当然，你也可以将一个包含了多个消息元素的集合转化为一个消息链：

```kotlin
val messages = listOf("文字".toText(), At(123.ID), AtAll).toMessages()
```

</TabItem>
<TabItem value="Java" label="Java">

在Java中，你可以通过 `Messages.toMessages(...)` 将多条消息元素合并为一个消息链。

以一个普通的 `文字 + AT` 为例：

```java
final Messages messages = Messages.toMessages(Text.of("文字"), new At(Identifies.ID(123)));
```

</TabItem>
</Tabs>

除了直接转化，核心库也提供了一个用于构建消息链的构建器 `MessageBuilder`。

<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

在Kotlin中，直接使用 `buildMessages` 来通过构建器构建你的消息链：

```kotlin
val messages = buildMessages {
    // 提供与标准消息类型中对应的API
    at(123.ID)
    atAll()
    text("文本")
    
    // 通过 `unaryPlus` 操作符直接添加一个任意的 `Message.Element` 实例或纯文本
    +"还是文本"
    +At(456.ID)
    
    // 或者使用传统的 append. 效果与 `unaryPlus` 操作符一致。
    append(AtAll)
}
```


</TabItem>
<TabItem value="Java" label="Java">

在Java中，你可以直接构建它并使用：

```java
final MessagesBuilder messagesBuilder = new MessagesBuilder();

final Messages messages = messagesBuilder
        // 提供与标准消息类型中对应的API
        .at(Identifies.ID(123))
        .atAll()
        .text("文本")
        // 通过append追加任意 Message.Element 实例或纯文本
        .append("还是文本")
        .append(new At(Identifies.ID(456)))
        .append(AtAll.INSTANCE, new Face(Identifies.ID(114)))
        // 构建结果
        .build();
```

</TabItem>
</Tabs>

## 消息链使用

你已经了解了消息链如何被构建出来，那么接下来你可能需要了解如何使用这个消息链。

### 遍历消息链

消息链 `Messages` 实现了 `List` 接口，因此你可以将其视为一个普通的**不可变**列表使用。

:::caution 更高的...

`Messages` 未来有可能会通过实现一个**类似于** `List` 的不可变视图类型来代替 `List` 的实现，因此尽可能避免直接将 `Messages` 作为 `List` 使用。
尽量仅且少量地使用 `get(int)` 、`iterator()` 等基础API，避免未来可能出现的不兼容维护问题。

:::

<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
val messages: Messages = ...

for (element in messages) {
    // 遍历消息链
}

// 索引访问
val secondMessage: Message.Element<*> = messages[1]

// 消息类型访问
val ats: List<At> = messages[At]
```


</TabItem>
<TabItem value="Java" label="Java">

```java
final Messages messages = ...;

for (Message.Element<?> element : messages) {
    // 遍历消息链
}

// 索引访问
final Message.Element<?> secondElement = messages.get(1);

// 消息类型访问
final List<At> ats = messages.get(At.Key);
```

</TabItem>
</Tabs>

### "追加"元素

上文提到过，消息是**不可变**的，因此如果你想要向一个消息链中_**"追加"**_一个消息，其实你需要的是得到一个增加了目标消息元素的新消息链。

<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
val messages: Messages = ...

// 使用 plus 操作符追加并得到一个新的消息链。
val newMessages: Messages = messages + AtAll
```


</TabItem>
<TabItem value="Java" label="Java">

:::caution 真的不可变

在 Java 中你需要格外注意，虽然消息链实现了 `List` 接口，但是它本质上是不可变的，
因此使用任何修改API（例如 `add`、`remove` 等）都会引发异常。

这也是为什么上文我们提到会考虑改变实现的类型，就是为了降低误引发此问题的可能。

:::

```java
final Messages messages = Messages.messages();

// 使用 plus 追加并得到一个新的消息链。
// 注意：不要使用 .add(...)，这将会引发异常。
final Messages newMessages = messages.plus(AtAll.INSTANCE);
```

</TabItem>
</Tabs>


## 消息发送

大部分消息的发送能力由 [SendSupport](../definition/ability-support#sendsupport) 或 [ReplySupport](../definition/ability-support#replysupport) 提供。

TODO

## 消息回执

TODO

## 序列化

TODO


