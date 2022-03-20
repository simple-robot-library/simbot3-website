---
sidebar_position: 20
title: core概览
---

核心模块下所支持的更贴近原生的使用方式。


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution 注意

下文中有关于监听函数注册的内容并非目前的最推荐方式。

:::


<Tabs groupId="code">
<TabItem value="Kotlin" label="Kotlin" default>

```kotlin
// listener manager
val listenerManager = coreListenerManager { /* config... */  }

// bot manager
val botManager = xxxBotManager(listenerManager) { /* config... */ }

// register bot
val bot = botManager.register(id, key, token, orAnyOther) { /* config... */ }

// listen event.
listenerManager.listen(ChannelMessageEvent) { context, event ->
	println(context)
    
    event.replyIfSupport(Text { "Hello World" } + At(event.author.id))
	
    val guild = event.channel().guild()
    
    guild.children().forEach { ch -> println("Channel ${ch.name} in guild ${guild.name}") } 
    
    // result value.
    null
}

bot.start()
bot.join()

```

</TabItem>
<TabItem value="Java" label="Java">

```java
// listener manager
final CoreListenerManagerConfiguration listenerManagerConfiguration = new CoreListenerManagerConfiguration();
final CoreListenerManager listenerManager = CoreListenerManager.newInstance(listenerManagerConfiguration);

final BotManager<?> botManager = xxxBotManager(listenerManager, (config) -> { /* ... */ });

final Bot register = botManager.register(id, key, token, orAnyOther, (config) -> { /* ... */ });


final EventListener listener = CoreListenerUtil.newCoreListener(
        ChannelMessageEvent.Key,
        (context, event) -> {
            System.out.println(context);

            if (event instanceof MessageReplySupport) {
                final Messages messages = Messages.getMessages(
                        Text.getText("Hello World"),
                        new At(event.getAuthor().getId())
                );

                ((MessageReplySupport) event).replyBlocking(messages);
            }

            final Guild guild = event.getChannel().getGuild();

            guild.getChildren(null, Limiter.ZERO)
                    .forEach(ch -> System.out.println("Channel " + ch.getName() + "in guild " + guild.getName()));


            return null;
        }
);

// register listener
listenerManager.register(listener);


register.startBlocking();
register.joinBlocking();
```

</TabItem>
</Tabs>
