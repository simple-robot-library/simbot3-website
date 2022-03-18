---
title: 事件概述
tags: [事件]
---

事件是simbot的核心之一。

## Event
从simbot3版本开始，事件的根接口不再保留遗留命名为 `MsgGet`，而是直接命名为常见的 `Event`。

一个 `Event` 的基础定义如下（略有简化）：

:::caution 注意

当下述描述与实际代码产生出入时，以**实际代码**表现为准。

:::

```kotlin
public interface Event : BotContainer, IDContainer, ComponentContainer {

    /**
     * 事件的唯一标识。
     */
    override val id: ID

    /**
     * 与这个事件有关系的 [Bot].
     */
    override val bot: Bot

    /**
     * 一个事件所属的组件。
     * 通常与 [bot] 的组件所属一致。
     */
    override val component: Component

    /**
     * 此时间发生的时间戳。
     *
     * 如果平台API支持，则为对应时间，如果不支持则一般为构建时的瞬时时间戳。
     */
    public val timestamp: Timestamp

    /**
     * 这个事件客观上的 [可见范围][VisibleScope]。
     */
    public val visibleScope: VisibleScope


    /**
     * 得到当前事件所对应的类型key。
     */
    public val key: Key<out Event>

    /** 所有事件的根类型。 */
    public companion object Root : Key<Event> {
    
        /** Event根节点的唯一ID常量。 */
        public const val ID_VALUE: String = "api.root"

        /** Event根节点的唯一ID。 */
        override val id: CharSequenceID = ID_VALUE.ID

        /** Event是所有事件的根，不可能是其他事件的子项。 */
        override val parents: Set<Key<*>> get() = emptySet()
        
        // ...
    }
    
    // 其他定义, 下文将会提到
    
    public interface Key { /* ... */ }
    public interface Key { /* ... */ }
    
}
```

其中，一个 `Event` 应该有它属于的组件。通过 `bot.component` 来决定一个事件的所属组件。


## Event.Key

对于一个事件和对其事件类型的判断，不再直接使用其类型 ( `Class` ) 进行直接判断，而是使用约定中的 `Event.Key` 作为事件类型的判断依据。

`Event.Key` 是 `Event` 的内部接口，其定义如下：

```kotlin
public interface Event /* : ... */ {
    
    // ...

    public interface Key<E : Event> {

        /**
         * 此事件的ID，需要是唯一的。假若在事件注册时出现了ID相同但不是同一个Key的情况将会导致异常。
         */
        public val id: CharSequenceID

        /**
         * 此事件所继承的所有父事件。
         * 此属性应当是不可变的，不应在运行期内发生变更。
         */
        public val parents: Set<Key<*>>

        /**
         * 将一个提供的类型转化为当前的目标事件。
         * 如果得到null，则说明无法被转化。
         */
        public fun safeCast(value: Any): E?


        public companion object {
            // ... 
        }
    }
    
    // ...

}
```

`Event.Key` 目前被约定为必须**尽可能地**通过伴生对象实现，且其泛型类型标记为当前被监听的事件。
其中，为了达成事件继承关系，提供 `parents` 标记当前事件所继承的父类事件。


## Event.VisibleScope
此类型为枚举类型，代表一个事件在客观上的可见范围。
:::caution 注意

以目前的实际情况来看，此类型存在的意义不大。它更像是一个过度设计的产物，未来可能考虑废弃、重做或移除。

:::

```kotlin
public interface Event /* : ... */ {

    // ...

    /**
     * 消息事件的可见范围类型。
     */
    public enum class VisibleScope {

        /**
         * 公共的可见范围, 代表这个事件是可能在当前环境下（例如一个组织中）所有人都可见的事件，
         * 不仅是当前bot，可能同样会被其他任何人看到。
         *
         * 此类型的表现形式可以参考例如群聊、公开频道等。
         *
         */
        PUBLIC,

        /**
         * 内部的可见范围，代表这个事件是可能在当前环境下（例如一个组织中）所有**相关内部人员**都可见的事件。
         * 所谓的相关内部人员，可能指的是有一定特殊条件的人员范围、一定权限的人员范围等。
         *
         * 这样的范围划分有可能是事件提供者所决定的，也有可能是由当前的事件环境所决定的。
         * 不一定必须要在事件环境（例如一个群消息）范围下的部分人可见才能作为内部消息，其从客观角度如果可以理解为 “内部”，那么也可以作为内部消息。
         *
         * 此类型的表现形式可以参考例如一个服务器中的某个只有管理员的频道、只有管理员能够看得到的申请等等。
         *
         */
        INTERNAL,

        /**
         * 私有的可见范围，代表这个事件理论上来讲，应当只有bot自身和事件来源者能够了解到。
         *
         * 常见表现形式为例如私聊性质的消息事件、好友申请事件等。
         */
        PRIVATE

    }
    
    // ...
        
}
```
