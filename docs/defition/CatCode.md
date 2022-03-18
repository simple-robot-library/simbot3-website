---
sidebar_position: 60
title: 猫猫码
---

猫猫码( `CatCode` )是一个具有特殊格式的字符串，是CQ码的精神延续。


`CatCode` 2.x会重构为基于 [kotlinx.serialization](https://github.com/Kotlin/kotlinx.serialization) 的多平台序列化库。

其实不难发现，猫猫码的最终数据形式，十分类似于一个存在额外参数 `code_type` 的 `properties` 。
所以我计划参考着 [kotlinx.serialization-properties](https://github.com/Kotlin/kotlinx.serialization/blob/master/docs/formats.md#properties-experimental) 
实现猫猫码的多平台序列化库，并保留核心库及其中的高性能字符串解析器。

simbot3中的消息实体将会基于 [kotlinx.serialization](https://github.com/Kotlin/kotlinx.serialization) 实现序列化，
此时你想要将消息序列化为 `CatCode`、`JSON`、`properties` 或者 `ProtoBuf` , 那就可以完全看你自己的心情了。

:::note 序列化途径

猫猫码不再是simbot3中序列化消息的途径，它将会仅仅作为一个普通的序列化库发布（而且不知道会鸽多久）。

想要在simbot3中实现消息序列化，只需要在注意消息实体是否支持序列化的前提下直接通过 [kotlinx.serialization](https://github.com/Kotlin/kotlinx.serialization)
完成。

:::



但是实际上，simbot3中，所有的消息均以实体形式出现，猫猫码不再必要。有关消息相关的内容，你可以参考 [消息概述](message-overview) 。