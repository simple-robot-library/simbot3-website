---
title: 命名概述
---

对版本、坐标等内容的命名规则的阐述。

:::info

规则版本：`v6`

更新时间：`2022/03/09`

:::

## 模块命名
基本上，主要相关仓库的坐标命名都应符合如下规则：
### 基础库相关
group：`love.forte.simbot` <br />
id：`simbot-xxx` <br />
例如： <br />
基础api模块：`love.forte.simbot:simbot-api`

### boot模块相关
group：`love.forte.simbot.boot` <br />
id：`simboot-xxx` <br />
例如： <br />
boot核心模块：`love.forte.simbot.boot:simboot-core`

<small><i>仔细看喔，后面的是 <code>simboot</code> 而不是 <code>simbot</code>。</i></small>

### 组件模块
group：`love.forte.simbot.component` <br />
id：`simbot-component-xxx` <br />
例如： <br />
腾讯频道组件模块：`love.forte.simbot.component:simbot-component-tencent-guild-core`


## 版本命名
版本将会使用最常见的 MAJOR.MINOR.PATCH[.STATUS][-SNAPSHOT]规则，并规定：
- MAJOR、MINOR、PATCH 为非负整数，例如 3.0.0。
- STATUS为可选的状态版本，常见状态有 preview、alpha、beta等。状态字符串后面可以在跟随子版本 MINOR.PATCH。 当状态版本存在的时候，通常此版本不视为release版本。例如：3.0.0.preview.2.0、3.0.0.beta.5.1。
- SNAPSHOT为可选标记，标记于版本最后，代表为一个快照版本。

<details>
<summary>后续的计划</summary>

版本的同步更新将会以仓库为标准。由于大部分组件将会使用独立仓库进行版本控制，因此可能存在以下情况： <br />
假如存在使用同一个版本的 simbot-api v3.0.0进行实现的三个组件库 `component-A`、`component-B`、`component-C`，他们的版本分别为：`3.6.1`、`3.0.0.beta.0.1`、`3.1.1`。

所有由 `simbot` 进行管理的组件，其 `MAJOR` 会保持一致，均使用 `3` ，但是其他版本标签将会独立维护。
因此，当选择组件使用的时候，请注意观察它们内部的 `simbot` 版本（通常都会在readme或者相关release中进行说明）以避免版本冲突。
</details>


## 组件模块

:::info

所有需要对接第三方平台/API的组件，均有可能需要独自进行版本控制。

:::

如果组件核心的命名规则为 `x.y.z` ，例如 `3.0.0` ，
那么对于一个组件的命名规则考虑为 `x.y.z-[t.]a.b`，其中，`x.y.z` 保持与对应的simbot版本号保持一致，而后面的 `[t.]a.b` 则参考对接API的版本号来进行决定。

其中，`a.b` 中，`a` 代表可能存在的不兼容更新或较主要的新API增量更新，而 `b` 代表基本兼容的修复、小型增量更新，也或许可以称之为 `patch` 号。
最后，开头的 `t.` 则可能存在也可能不存在，如果此组件依赖于第三方的其他API版本，那么这个 `t` 则一般代表这个API的版本号。

不一定所有的组件都需要第三方或独立更新的API，例，假如存在一个用于远程通讯的 `component-server/component-client`，
其为simbot核心本身所提供的组件，则它将会伴随着核心一起更新，不会存在独立版本号。

规则： <br />
`love.forte.simbot.component:simbot-component-${component-module}:${component-version}`


### 示例
#### tencent-guild组件 
`love.forte.simbot.component:simbot-component-tencent-guild-api:3.0.0-0.1` <br />
`love.forte.simbot.component:simbot-component-tencent-guild-stdlib:3.0.0-0.1` <br />
`love.forte.simbot.component:simbot-component-tencent-guild-core:3.0.0-0.1` <br />

#### mirai组件 
`love.forte.simbot.component:simbot-component-mirai:3.0.0-21000.1.2` <br />



:::info

这个版本号 `3.0.0-21000.1.2` 中，`3.0.0` 代表对应的 `simbot` 的版本，`21000` 代表对应的mirai版本：`2.10.0`，但是其中的后两位版本号将至少保持有2位的长度。
比如 `3.0.0-20909.0.1` 中所代表的mirai版本即为 `2.9.9`, 如果是 `21510` 则代表 `2.15.10`, 如果是 `21501` 则代表了 `2.15.1`。
这种命名方式一定程度上避免了当出现诸如 `2.1.10` 和 `2.11.0` 版本时引发的歧义。如果是 `2.1.10`，则对应值为 `20110`，如果是 `2.11.0` 则对应值为 `21100`。

`1.2` 中第一个1代表可能不兼容或新功能追加的版本递增，第二个2代表修复、优化等相关的兼容版本更新。

:::
:::caution

但是很明显，这种方式的命名很可能会导致版本号变得冗长、晦涩，是无法长久的权宜之计。

:::

## 快照版本
在上述 模块与版本 中描述的基础上，当版本为 快照版本 的时候，版本号应当有且仅有结尾处存在 `-SNAPSHOT` 标记。
在组件版本中，同样只保留结尾处的快照标记，其余标记将会被清除。

举个例子，假如某核心快照版本为 `3.2.1-SNAPSHOT`，则某个组件的快照版本可能为 `3.2.1-5.0-SNAPSHOT`，其中，对于核心的快照标记被清除了。