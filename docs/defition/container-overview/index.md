---
title: 容器概述
---


import Label from '@site/src/components/Label'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

容器 `Container` 类型是一个基础性的接口，用于代表为某个或某系列属性的"容器"。

## Container

**`Container`** 接口应当是所有（或者说大部分）容器接口的父接口。`Container` 接口的定义如下：

```kotlin
public interface Container
```

可以看到，`Container` 接口中不存在任何约束，仅仅用作为标记。


## 标准属性容器

实际上，容器类型更多的是在内部使用的。因此大部分情况下你不需要关心容器类型，更没有必要去实现它。
simbot在核心库中提供了部分内部常用一些容器类型，并由部分内部类型实现（例如一些事件或者对象）。

此章节会简单介绍这些标准容器类型(中提供的属性)，仅做了解即可。

<details>
<summary>文档展现</summary>

在下文中，你可能会遇到类似于如下的文档展现形式：

> ### FooContainer
| 属性                           | 类型    | 描述                      |
|------------------------------|-------|-------------------------|
| `bar`                        | `Bar` | property: bar           |
| `foo` <Label>suspend</Label> | `Foo` | suspend 'property': foo |

在这其中，`bar` 属性代表为一个普通的属性，其获取方式通常如下所示：

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
val bar: Bar = container.bar
```

</TabItem>
<TabItem value="Java">

```java
Bar bar = container.getBar();
```

</TabItem>
</Tabs>

但是对于 `foo` 属性，它标记了一个 <Label>suspend</Label> ，因此它代表一个 **可挂起的** _属性_。
当然，这可能不是严格意义上的"属性"，但这无伤大雅。对于这种属性，它的获取方式通常如下所示：

<Tabs groupId="code">
<TabItem value="Kotlin">

```kotlin
val foo: Foo = container.foo() // suspend
```

</TabItem>
<TabItem value="Java">

```java
Foo foo = container.getFoo(); // blocking
```

</TabItem>
</Tabs>


</details>

### IDContainer

代表可用于获取 [**ID**](../ID) 的容器。

| 属性   | 类型              | 描述   |
|------|-----------------|------|
| `id` | [**ID**](../ID) | 唯一标识 |


### BotContainer

用于获取 `Bot` 实例的容器。

| 属性    | 类型    | 描述   |
|-------|-------|------|
| `bot` | `Bot` | 唯一标识 |

### ChannelInfoContainer

用于获取 `ChannelInfo` 实例的容器。

| 属性                               | 类型            | 描述     |
|----------------------------------|---------------|--------|
| `channel` <Label>suspend</Label> | `ChannelInfo` | 子频道信息  |


### GuildInfoContainer

用于获取 `GuildInfo` 实例的容器。

| 属性                             | 类型          | 描述      |
|--------------------------------|-------------|---------|
| `guild` <Label>suspend</Label> | `GuildInfo` | 频道服务器信息 |


### GroupInfoContainer

用于获取 `GroupInfo` 实例的容器。

| 属性                             | 类型          | 描述  |
|--------------------------------|-------------|-----|
| `group` <Label>suspend</Label> | `GroupInfo` | 群信息 |


### UserInfoContainer

用于获取 `UserInfo` 实例的容器。

| 属性                            | 类型         | 描述   |
|-------------------------------|------------|------|
| `user` <Label>suspend</Label> | `UserInfo` | 用户信息 |

### MemberInfoContainer

用于获取 `MemberInfo` 实例的容器。

| 属性                              | 类型           | 描述     |
|---------------------------------|--------------|--------|
| `member` <Label>suspend</Label> | `MemberInfo` | 组织成员信息 |


### FriendInfoContainer

用于获取 `FirendInfo` 实例的容器

| 属性                              | 类型           | 描述   |
|---------------------------------|--------------|------|
| `friend` <Label>suspend</Label> | `FriendInfo` | 好友信息 |

### ResourceContainer

用于获取 `Resource` 实例的容器。

| 属性                                | 类型         | 描述  |
|-----------------------------------|------------|-----|
| `resource` <Label>suspend</Label> | `Resource` | 资源  |


## BotSocialRelationsContainer
`BotSocialRelationsContainer` 相比较于上述的 [标准属性容器](#标准属性容器) 来讲，稍微有些特殊。
此容器代表为 _"`Bot`社交关系容器"_ ，主要由 `Bot` 进行实现，并提供部分"社交信息"的获取API。
因此此容器下的类型提供的大多是 _`API`_ 性质的内容。

### FriendsContainer


<Tabs groupId="code">
<TabItem value="Kotlin">

| API                                                 | 返回值            | 描述           |
|-----------------------------------------------------|----------------|--------------|
| `friends(Grouping, Limiter)` <Label>suspend</Label> | `Flow<Friend>` | 获取bot的好友列表   |
| `friend(ID)` <Label>suspend</Label>                 | `Friend?`      | 获取bot指定ID的好友 |

```kotlin
val friends: Flow<Friend> = container.friends(...)

val id: ID = ...
val friend: Friend = container.friend(id)
```

</TabItem>
<TabItem value="Java">

| API                             | 返回值              | 描述           |
|---------------------------------|------------------|--------------|
| `getFriends(Grouping, Limiter)` | `Stream<Friend>` | 获取bot的好友列表   |
| `getFriends(Limiter)`           | `Stream<Friend>` | 获取bot的好友列表   |
| `getFriends(Grouping)`          | `Stream<Friend>` | 获取bot的好友列表   |
| `getFriends()`                  | `Stream<Friend>` | 获取bot的好友列表   |
| `getFriend(ID)`                 | `Friend?`        | 获取bot指定ID的好友 |

```java
Stream<Friend> friends = container.getFriends(...);

ID id = ...;
Friend friend = container.getFriend(id);
```

</TabItem>
</Tabs>


### GroupsContainer


<Tabs groupId="code">
<TabItem value="Kotlin">

| API                                                | 返回值           | 描述          |
|----------------------------------------------------|---------------|-------------|
| `groups(Grouping, Limiter)` <Label>suspend</Label> | `Flow<Group>` | 获取bot的群列表   |
| `group(ID)` <Label>suspend</Label>                 | `Group?`      | 获取bot指定ID的群 |


```kotlin
val groups: Flow<Group> = container.groups(...)

val id: ID = ...
val group: Group = container.group(id)
```

</TabItem>
<TabItem value="Java">

| API                            | 返回值             | 描述          |
|--------------------------------|-----------------|-------------|
| `getGroups(Grouping, Limiter)` | `Stream<Group>` | 获取bot的群列表   |
| `getGroups(Limiter)`           | `Stream<Group>` | 获取bot的群列表   |
| `getGroups(Grouping)`          | `Stream<Group>` | 获取bot的群列表   |
| `getGroups()`                  | `Stream<Group>` | 获取bot的群列表   |
| `getGroup(ID)`                 | `Group?`        | 获取bot指定ID的群 |


```java
Stream<Group> groups = container.getGroups(...);

ID id = ...;
Group group = container.getGroup(id);
```

</TabItem>
</Tabs>

### GuildsContainer

<Tabs groupId="code">
<TabItem value="Kotlin">


| API                                                | 返回值           | 描述              |
|----------------------------------------------------|---------------|-----------------|
| `guilds(Grouping, Limiter)` <Label>suspend</Label> | `Flow<Guild>` | 获取bot的频道服务器列表   |
| `guild(ID)` <Label>suspend</Label>                 | `Guild?`      | 获取bot指定ID的频道服务器 |


```kotlin
val guilds: Flow<Guild> = container.guilds(...)

val id: ID = ...
val guild: Guild = container.guild(id)
```

</TabItem>
<TabItem value="Java">


| API                            | 返回值             | 描述              |
|--------------------------------|-----------------|-----------------|
| `getGuilds(Grouping, Limiter)` | `Stream<Guild>` | 获取bot的频道服务器列表   |
| `getGuilds(Limiter)`           | `Stream<Guild>` | 获取bot的频道服务器列表   |
| `getGuilds(Grouping)`          | `Stream<Guild>` | 获取bot的频道服务器列表   |
| `getGuilds()`                  | `Stream<Guild>` | 获取bot的频道服务器列表   |
| `getGuild(ID)`                 | `Guild?`        | 获取bot指定ID的频道服务器 |


```java
Stream<Guild> guilds = container.getGuilds(...);

ID id = ...;
Guild guild = container.getGuild(id);
```

</TabItem>
</Tabs>

