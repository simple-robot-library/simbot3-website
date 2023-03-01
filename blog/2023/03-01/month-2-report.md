---
authors: forliy
title: 2023年2月月报
tags: [2023月报,月报]
---

大概是2023年2月的月报喵。

<!--truncate-->

<small><i>2月过的很快。一转眼，它就消失不见。</i></small>

简单回顾一下2月到底干了什么吧。

## 文档相关

### API文档引导站

也许你已经发现了，也许没有。我们为核心库和各个组件整理并开放了一个 [文档引导站点](https://docs.simbot.forte.love/)（你也可以在左上角看到链接）。

这个站点汇总了核心库与组件库各自的 `KDoc` 、仓库地址和使用手册（如果有的话），并且它们的 `KDoc` 都统一部署在这同一个站点中。

> 链接：https://docs.simbot.forte.love/

### mirai组件使用手册

在上述的站点中，你可能会发现[mirai组件使用手册](https://component-mirai.simbot.forte.love/)。这这里会陆续提供mirai组件下的一些内容，
目前所提供的主要内容便是有关于bot文件的配置以及一些简单的使用样例。

其他组件其实也有计划，但是至少...也要等到它们趋于稳定。

## 版本发布

2月里，我们似乎又为 [核心库](https://github.com/simple-robot/simpler-robot) 和 [mirai组件库](https://github.com/simple-robot/simbot-component-mirai)
发布了几个版本。

对于核心库来说，其实基本上已经没什么大的更新了，这次更新的 `v3.0.0-RC.3` 主要是处理文档相关的内容以及一部分模块的迁移，没有实质上功能的调整。
至于为什么核心库还不发布稳定版...反正先别急。

本来呢是打算发布之前整理整理文档，但是也许某一天突然懒得写文档了，就直接把正式版发了。

而mirai组件的更新 [`v3.0.0.0-M5`](https://github.com/simple-robot/simbot-component-mirai/releases/tag/v3.0.0.0-M5) 
中主要添加了部分针对mirai的特性封装，以及版本升级、内容修复等。

不过值得一提的是，`v3.0.0.0-M5` 是一个 **不兼容更新**，因为它改变了缓存文件目录（`cache`）的默认行为，可能会对使用之前版本的时候有些影响，还请注意。

:::tip 具体的

具体内容参考 [simbot-component-mirai#120](https://github.com/simple-robot/simbot-component-mirai/pull/120)

:::

其实mirai组件跟核心库一样，目前没什么可以继续作为 `Mx` 版本下去的必要了，但是总归组件还是需要等着核心库先稳定的，mirai组件的后续版本大概也还是会先从 `RC` 开始吧。

至于其他组件，讲道理我如果没猜错可能一个用的都没有。这两天可能有在陆陆续续的开始 **重构** QQ频道组件，但是反正也没有使用者，慢慢来吧。

:::让我们知道

如果你期待着/正在使用mirai组件以外的组件（QQ频道组件、KOOK组件等）请务必让我们知道，也非常欢迎你们的反馈与贡献。

虽然说忙不忙的过来是一回事儿，但是有没有动力则是另外一回事儿了。

:::


## 许可证更新

其实这也不算“2月”的内容了，因为这是今天（3.1）做的事情，不过还是一起说了吧，留到月末我肯定早就忘了。

### mirai组件（simbot-component-mirai）开源许可证变更

其实这是早就有所计划且**必然地**变更。目前的simbot3以 [`LGPLv3` 许可证](https://www.gnu.org/licenses/lgpl-3.0.html) 开源，
而 [simbot-component-mirai](https://github.com/simple-robot/simbot-component-mirai/) 也 **暂时地** 沿用了此许可。

但是 `simbot-component-mirai` 依赖/引用了开源软件 [mirai](https://github.com/mamoe/mirai)，
而 `mirai` 使用 [`AGPLv3` 许可证](https://www.gnu.org/licenses/agpl-3.0.html) ，其要求任何衍生应用/软件也必须使用 `AGPLv3` 进行开源。

原本是打算等mirai组件版本稳定后一起把许可证修改为 `AGPLv3` 的，不过今天闲来无事，就一起修改了。
修改后所发布的版本将会使用新的 `AGPLv3` 许可证。

### 其他许可证相关

接着调整mirai组件许可证的功夫，我顺手也简单调整/优化了一下mirai组件和核心库的版权声明，包括文件内的和README的。当然，其他组件日后也会有所优化。


## 闲言碎语

接下来就是其他不相干的内容了。如果你没什么兴趣，可以就此结束了。

### 装修首个人资料

工作找了又找，找了又不想找，反正就这么到了3月。至于到底还找不找，找哪儿的，找什么样的，还码不码代码，不码能去干什么，谁也不知道。这也正是我最想知道的。

趁着这段时间，前阵子简单装修了一下[我的GitHub个人资料](https://github.com/ForteScarlet)，让它的内容变得更加充实了 ~~（加载时间也更长了）~~，你如果喜欢，不妨多看两眼。

