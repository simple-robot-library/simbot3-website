---
sidebar_position: 10
title: BOT配置
---

:::info 注意

BOT配置只在 [**boot**](../overviews/module-overview/boot) 模块或者 [**Spring Boot Starter**](../overviews/module-overview/spring-boot-starter) 模块下有效/有意义。

:::

## BOT文件

在simbot3中，所有的配置文件都交由 `*.bot` 文件进行定义，例如一个 `forliy.bot`。
这些文件需要放置于你的项目资源目录（举个例子，对于一个IDEA默认的Maven项目来讲，其目录为 `项目目录/src/main/resources` ）下的 `simbot-bots` 目录中。
而对于 `*.bot` 文件，其格式与 `JSON` 一致（且不允许出现注释），你可以通过IDE来设置对于 `.bot` 文件的类型设置。

:::caution 更多支持

在未来，可能会考虑提供更多类型的bot文件的支持。<br />
例如通过 `*.bot.yml` 或 `*.bot.yaml` 来支持 [**`YAML`**](https://yaml.org/) 格式的配置文件，<br />
或是通过 `*.bot.properties` 来支持 **`properties`** 格式的配置文件。

同样的，考虑在未来支持 `*.bot.json` 的形式来直接使用 **`JSON`** 扩展名。

:::

以IDEA举例，你可以通过 `settings -> File Types` 中左侧搜索 `JSON`，并在右边添加 pattern: `*.bot`，如下图这样：

![](@site/static/img/bot_config/idea-json-file-config.png)



## 配置项
对于一个bot配置文件，其可能存在的属性在每个不同的组件下都是不同的，但是有一个属性必定存在，即 component:
```json title='my-bot.bot'
{
  "component": "simbot.mirai"
}
```

`component` 属性用来阐明此配置文件是为了哪个组件所服务的，它的值为对应组件的ID值。例如上述示例中的 `simbot.mirai`，
则代表此配置文件为 [mirai组件](../component-overview/mirai) 所使用的配置。

而对于一个mirai组件，能够进行登陆的最简配置**之一**如下：

```json title='my-bot.bot'
{
  "component": "simbot.mirai",
  "code": 123456789,
  "password": "你的密码"
}
```

## 结语

总而言之，一个 `*.bot` 文件其本质就是一个 `JSON` 文件，代表了一个组件下某个bot的特定配置。
而除了所有配置文件内都应存在的配置项以外，其他的所有内容都是组件实现所**定制**的，你需要参考相关组件的说明文档来进行进一步的配置。
