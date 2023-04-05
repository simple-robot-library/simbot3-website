---
authors: forliy
title: 2023年3月月报
tags: [2023月报,月报]
---

大概是2023年3月的月报喵。

<!--truncate-->

~~一不小心就差点儿忘了月报了。~~

## 组件更新

### QQ频道组件

自从我们将中心倾斜到 [QQ频道组件](https://github.com/simple-robot/simbot-component-qq-guild) 之后，在3月中我们完成了对它的深度重构，
并且发布了重构后的部分版本。(参考 [Releases](https://github.com/simple-robot/simbot-component-qq-guild/releases) )

:::tip 哦?

而且你可能发现了，我们顺便将QQ频道组件的仓库和发布地址做了一次**重命名**。

- `simbot-component-tencent-guild` 👉 `simbot-component-qq-guild`

:::

在重构过程中，我们不仅仅变更了原本的实现逻辑，也为 **API模块** 和 **标准库模块** 完成了基于 **Kotlin多平台** 的实现。
现在，如果选择使用不依赖simbot的 **API模块** 或 **标准库模块**，那么你可以有更多选择而不仅局限于JVM平台了。

目前QQ频道组件已经比以前更简单、也更容易维护了。如果你想要寻找一个通过 `simbot-qq-guild` 构建而得的作品，
欢迎添加我们亲爱的 [**法欧莉斯卡雷特**](https://qun.qq.com/qunpro/robot/share?robot_appid=101986850) 到你的频道体验并观察。

### mirai组件

mirai组件截止到此段文字被写下为止，版本已经到了 [`v3.0.0.0-RC.2`](https://github.com/simple-robot/simbot-component-mirai/releases/tag/v3.0.0.0-RC.2)。
毕竟mirai的封装比较简单，因此进入 `RC` 阶段也是完全没有问题的。

而至于正式版，需要等待核心库的正式版先一步发布后才会跟进。

## 文档更新

### API引导站

简单的优化了 [API引导站](https://docs.simbot.forte.love/) 的效果，比如主题切换有了记忆功能，之类的。

### API文档

现在核心库和各组件会陆续开始向API文档仓库中发布配套的 **快照版本** 的KDoc了。
