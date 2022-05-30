---
title: 消息事件
tags: [标准事件]
---

一些与 **消息** 相关的事件类型。

消息事件通常会配合着 [对象事件](../objective-event) 进行实现。

import Label from '@site/src/components/Label'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

## MessageEvent
> <Label>api.message</Label>
> <Label type='success'>RemoteMessageContainer</Label>
> <Label type='success'>ReplySupport</Label>

`MessageEvent` 是所有 **消息事件** 的基础父类型。

### 属性

`MessageEvent` 提供了获取下述属性的能力:

| 属性               | 类型                     | 描述            |
|------------------|------------------------|---------------|
| `source`         | `Objectives`           | 本次消息事件发生的主要源。 |
| `messageContent` | `RemoteMessageContent` | 本次消息事件所收到的消息。 |

:::tip 省略

如果上述属性定义在后续事件中没有发生变化，则将不再赘述。

:::

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
val source: Objectives = event.source()
val messageContent: ReceivedMessageContent = event.messageContent
```

</TabItem>
<TabItem value="Java">

```java
Objectives source = event.getSource();
ReceivedMessageContent messageContent = event.getMessageContent();
```

</TabItem>
</Tabs>

`source` 的值可能会随着当前事件的具体含义范围而变化。具体细节可参考后续的其他事件。

### ReplySupport
`MessageEvent` 继承 `ReplySupport`，对于消息事件来讲它总是 _期望_ 实现者拥有 **消息回复(`reply`)** 的能力。

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
val message: Message = ...
val receipt: MessageReceipt = event.reply(message)
```

</TabItem>
<TabItem value="Java">

```java
Message message = ...;
MessageReceipt receipt = event.replyBlocking(message);
```

</TabItem>
</Tabs>


## ContactMessageEvent
> <Label>api.contact_message</Label>
> <Label href='#messageevent' type='success'>MessageEvent</Label>
> <Label href='../objective-event/#userevent' type='success'>UserEvent</Label>

在 `ContactMessageEvent` 中，属性 `user` 与 `source` 返回类型一致，为 `User` 类型。

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
val user: User = event.user()
// same as
val source: User = event.source()
```

</TabItem>
<TabItem value="Java">

```java
User user = event.getUser();
// same as
User source = event.getSource();
```

</TabItem>
</Tabs>

## FriendMessageEvent
> <Label>api.friend_message</Label>
> <Label href='#contactmessageevent' type='success'>ContactMessageEvent</Label>
> <Label href='../objective-event/#friendevent' type='success'>FriendEvent</Label>

| 属性       | 类型       | 描述               |
|----------|----------|------------------|
| `friend` | `Friend` | 本次消息事件中消息的发送者对象。 |
| `user`   | 同上       | 同上               |
| `source` | 同上       | 同上               |


<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
val friend: Friend = event.friend()
val user: Friend = event.user()
val source: Friend = event.source()
```

</TabItem>
<TabItem value="Java">

```java
Friend friend = event.getFriend();
Friend user = event.getUser();
Friend source = event.getSource();
```

</TabItem>
</Tabs>


## ChatRoomMessageEvent
> <Label>api.chat_room_message</Label>
> <Label href='#messageevent' type='success'>MessageEvent</Label>
> <Label href='#organizationevent' type='success'>OrganizationEvent</Label>
> <Label type='success'>DeleteSupport</Label>
> <Label type='success'>RemoteMessageContainer</Label>

在 `ChatRoomMessageEvent` 中，属性 `source` 为 `ChatRoom` 类型。

| 属性               | 类型                       | 描述               |
|------------------|--------------------------|------------------|
| `author`         | `Member`                 | 本次消息事件中消息的发送者对象。 |
| `source`         | `ChatRoom`               | 本次消息事件发生所在的聊天室。  |
| `organization`   | 同上                       | 同上               |


### DeleteSupport

`ChatRoomMessageEvent` 继承 `DeleteSupport`，因此在预期内，在权限允许的情况下能够对本次事件的消息进行 **删除** 。
通常这种行为可以理解为 **撤回**。

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
val author: Member = event.author()
val source: ChatRoom = event.source()
val messageContent: RemoteMessageContent = event.messageContent

val isDeleted: Boolean = event.delete()
```

在 Kotlin 中，`ChatRoomMessageEvent` 为属性 `author` 提供了 `in/use` 扩展函数：

```kotlin
event.inAuthor { // this: Author
   // ...
}
event.useAuthor { author: Author ->
   // ...
}
```

</TabItem>
<TabItem value="Java">

```java
Member author = event.getAuthor();
ChatRoom source = event.getSource();
RemoteMessageContent messageContent = event.getMessageContent();

boolean isDeleted = event.deleteBlocking();
```

</TabItem>
</Tabs>


## GroupMessageEvent
> <Label>api.group_message</Label>
> <Label href='#chatroommessageevent' type='success'>ChatRoomMessageEvent</Label>
> <Label href='../objective-event/#groupevent' type='success'>GroupEvent</Label>


一个来自于 **群** 的消息事件。

| 属性       | 类型      | 描述        |
|----------|---------|-----------|
| `source` | `Group` | 此事件所来源的群。 |
| `group`  | 同上      | 同上        |

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
val source: Group = event.source()
val group: Group = event.group()
```

</TabItem>
<TabItem value="Java">

```java
Group source = event.getSource();
Group group = event.getGroup();
```

</TabItem>
</Tabs>


## ChannelMessageEvent
> <Label>api.channel_message</Label>
> <Label href='#chatroommessageevent' type='success'>ChatRoomMessageEvent</Label>
> <Label href='../objective-event/#channelevent' type='success'>ChannelEvent</Label>

| 属性        | 类型        | 描述          |
|-----------|-----------|-------------|
| `source`  | `Channel` | 此事件所来源的子频道。 |
| `channel` | 同上        | 同上          |

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
val source: Channel = event.source()
val channel: Channel = event.channel()
```

</TabItem>
<TabItem value="Java">

```java
Channel source = event.getSource();
Channel channel = event.getChannel();
```

</TabItem>
</Tabs>

