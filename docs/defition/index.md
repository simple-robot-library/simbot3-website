---
title: 标准定义
---

本章节下介绍 `simbot3` 中的部分定义介绍，例如一些通用的定义及其解释等。

## 前情提要
### 全异步
值得注意的是，simbot3 的api标准设计全部是预定为 **异步** 的，也就是几乎所有API都是 `suspend fun`。
尽管并非所有api都有可能为真正的“挂起函数”，并可能会在内部存在诸多优化，但是这并不会影响到api的定义。

后续代码中会尽可能的提供与Java调用友好且尽可能保留性能的方案，但是对于文档中的描述，依旧会尽量以原本的状态为准。

## 章节列表

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
