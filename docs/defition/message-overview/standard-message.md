---
sidebar_location: 10
title: 标准消息
tags: [消息]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

针对一些十分常见的消息类型，`simbot-api` 提供了一些标准定义或实现。


## PlainText
文本是最常见的消息类型。PlainText是针对于纯文本消息所提供的抽象类型。核心提供了它最基础的实现：[Text](#text)。

## Text
plainText的基础实现，用来描述一个最基础的纯文本消息。

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

## At
`AT`（或者称之为 *艾特*、`@` ）是聊天社交软件平台十分常见的一种消息类型，其代表对某人某事进行针对性的**提醒/通知**消息。

`At` 由核心提供了基础的数据类（ `data class` ）实现，基本可以满足需要。
如果某组件存在较为复杂、无法由 `At` 满足的通知消息类型，则需要由对应组件自行实现另外的消息，并尽可能提供针对于解析 `At` 的兼容。

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


## AtAll
书接上文的 `At`，对于大多数聊天社交软件来讲，`AtAll` 与 `At` 同样常见。`AtAll` 的含义与 `At` 类似，只不过 `At` 是针对一个人/事物，但是 `AtAll` 是针对所有。
核心提供的 `AtAll` 是 `object` 类型的单例。
假如某组件存在更为细粒度的“复数At”，那么需要提供额外的实现类型，并尽可能提供针对于解析 `AtAll` 的兼容。

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


## Image

图片类型也是非常常见的类型之一，代表一个任意的图片消息。核心所提供的 `Image` 类型为抽象类型，无法直接构建。<br />
因为对于图片来讲，他们通常都需要提供资源（例如网络资源、本地文件资源）后上传的目标服务器，进而再发送。
因此想要获取 `Image` 对象实例，你需要通过 `Bot.uploadImage` 上传一个资源并换取图片结果，或者尝试通过 `Bot.resolveImage` 解析一个 `ID` 并得到一个图片。

对于 `Image` 的实现与组件之间有着很强的关联，因此你很难在脱离了组件（或者说脱离了 `Bot` ）的情况下去构建一个 `Image`。而且大多数情况下，不同组件而得到的 `Image` 不能交叉使用。

<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
val image: Image<*> = bot.uploadImage(Resource.of(...))
val imageById: Image<*> = bot.resolveImage(123.ID)
```

</TabItem>
<TabItem value="Java" label="Java">

```java
final Image<?> image = bot.uploadImageBlocking(Resource.of(...));
final Image<?> imageById = bot.resolveImageBlocking(Identifies.ID(123));
```

</TabItem>
</Tabs>

## Emoji
Emoji是一个 _保留类型_，它类似于 [Face](#face)，用来表示一个 `emoji`。但是通常情况下，你并不需要使用 `Emoji` 来发送 `emoji`，
因为从2010年开始 `Unicode` 便开始收录emoji编码，你可以直接将 `emoji` 表情作为字符串发送。

那么 `Emoji` 现在更多的用于表示一些平台下的特殊表情，例如只能在一定范围内使用的 `emoji`，比如 腾讯频道组件(TODO) 中用于reaction消息的表情。

:::note

大多数情况下，你可能不会使用 `Emoji` 消息类型。

:::


<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
val emoji: Emoji = Emoji(123.ID)
```

</TabItem>
<TabItem value="Java" label="Java">

```java
final Emoji emoji = new Emoji(Identifies.ID(123));
```

</TabItem>
</Tabs>

## Face
一个**表情**。`Face` 所代表的通常为一些对应组件平台下所属的表情。这些表情大多数情况下都可以直接使用 `ID` 来进行表示与定位。
假如平台的表情较为复杂，或者存在很多不同种类的表情消息，则需要由组件提供其他额外的实现，并尽可能提供针对于解析 `Face` 的兼容。

<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
val face: Face = Face(123.ID)
```

</TabItem>
<TabItem value="Java" label="Java">

```java
final Face face = new Face(Identifies.ID(123));
```

</TabItem>
</Tabs>



