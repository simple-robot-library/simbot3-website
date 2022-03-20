---
sidebar_position: 10
title: 监听概览
---


import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';


## 消息发送
<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin title="ExampleListener.kt"
@Listener // if use simboot
suspend fun GroupMessageEvent.listener() {
    group().send("Hello Simbot")
}
```

</TabItem>
<TabItem value="Java" label="Java">

```java title="ExampleListener.java"
@Listener // if use simboot
public void listener(GroupMessageEvent event) {
 	   event.getGroup().sendBlocking("Hello Simbot")
}
```

</TabItem>
</Tabs>

## 消息回复
<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin title="ExampleListener.kt"
@Listener
suspend fun FriendMessageEvent.listener() {
    replyIfSupport("Hello Simbot")
}
```

</TabItem>
<TabItem value="Java" label="Java">

```java title="ExampleListener.java"
@Listener
public void listener(FriendMessageEvent event) {
    if (event instanceof ReplySupport) {
        ((ReplySupport) event).replyBlocking("Hello Simbot");
    }
}
```

</TabItem>
</Tabs>


## 成员获取
<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin title="ExampleListener.kt"
@Listener
suspend fun GroupMessageEvent.listener() {
    group().members().collect {
        println("Member: $it")
    }
}
```

</TabItem>
<TabItem value="Java" label="Java">

```java title="ExampleListener.java"
@Listener
public void listener(GroupMessageEvent event) {
    event.getGroup().getMembers().forEach(member -> System.out.println("Member: " + member));
}
```

</TabItem>
</Tabs>

