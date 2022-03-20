---
sidebar_position: 40
title: 万花丛中
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 从事件中获取对象
### 好友

<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
@Listener
suspend fun FriendEvent.event() {
	val friend = friend()
}
```

</TabItem>
<TabItem value="Java" label="Java">

```java
@Listener
public void event(FriendEvent event) {
    Friend friend = event.getFriend();
}
```

</TabItem>
</Tabs>



### 群
<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
@Listener
suspend fun GroupEvent.event() {
 	val group = group()   
}
```

</TabItem>
<TabItem value="Java" label="Java">

```java
@Listener
public void event(GroupEvent event) {
    Group group = event.getGroup();
}
```

</TabItem>
</Tabs>


### 频道与子频道
<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
@Listener 
suspend fun GuildEvent.event() {
	val guild = guild()
    val channels = gulid.channels() // Flow<Channel>
}
```

</TabItem>
<TabItem value="Java" label="Java">

```java
@Listener
public void event(GuildEvent event) {
    Guild guild = event.getGuild();
    Stream<? extends Channel> channels = guild.getChannels();
} 
```

</TabItem>
</Tabs>


## 从对象中获取属性
### 好友属性
<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
val id = friend.id
val username = friend.username
val remark = friend.remark
val avatar = friend.avatar
```

</TabItem>
<TabItem value="Java" label="Java">

```java
ID id = friend.getId();
String username = friend.getUsername();
String remark = friend.getRemark();
String avatar = friend.getAvatar();
```

</TabItem>
</Tabs>



## 延时发送&动态参数
<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
@Filter("我叫{{name}}")
@Listener
suspend fun FriendMessageEvent.listen(@FilterValue("name") name: String) {
    val friend = friend()
    bot.launch {
        delay(3000)
        friend.send("Hello, $name")
    }
}
```

</TabItem>
<TabItem value="Java" label="Java">

:::caution 注意

java中不建议使用 `Thread.sleep(...)` 来达成延迟效果。

:::

```java
@Filter("我叫{{name}}")
@Listener
public void listen(FriendMessageEvent event, @FilterValue("name") String name) throws Exception {
    Friend friend = event.getFriend();
    Thread.sleep(3000);
    friend.sendBlocking("Hello, " + name);
}
```

</TabItem>
</Tabs>




## 特殊消息
### 上传并发送图片
<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
@Listener
suspend fun FriendMessageEvent.listen() {
    val img = Path("img/example.png")
    val imgResource = Resource.of(img)

    val imgForSend = bot.uploadImage(imgResource)

    // send img to friend
    friend().send(imgForSend)
}
```

</TabItem>
<TabItem value="Java" label="Java">

```java
@Listener
public void listen(FriendMessageEvent event) {
    Path img = Paths.get("img/example.png");
    Resource imgResource = Resource.of(img);
    
    Image<?> imgForSend = bot.uploadImageBlocking(imgResource);
    
    event.getFriend().sendBlocking(imgForSend);
}
```

</TabItem>
</Tabs>



### 群里at + 文本
<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
@Listener
suspend fun GroupMessageEvent.listen() {
    val authorId = author().id
    val at = At(authorId)
    
    group().send(at + "你好?".toText())
}
```

</TabItem>
<TabItem value="Java" label="Java">

```java
@Listener
public void listen(GroupMessageEvent event) {
    ID authorId = event.getAuthor().getId();
    At at = new At(authorId);
    
    Messages messages = Messages.getMessages(at, Text.of(" 你好?"))
    
    event.getGroup().sendBlocking(messages);
}
```

</TabItem>
</Tabs>






