import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

function mavenCode(version) {
    return `
<dependencies>
    <!-- simbot Boot -->
    <dependency>
        <groupId>love.forte.simbot.boot</groupId>
        <artifactId>simboot-core</artifactId>
        <version>${version.simbot.version}</version>
    </dependency>
    <!-- 腾讯频道组件 -->
    <dependency>
        <groupId>love.forte.simbot.component</groupId>
        <artifactId>simbot-component-tencent-guild-boot</artifactId>
        <version>${version.simbot.component.tcg}</version>
    </dependency>
    <!-- mirai组件 -->
    <dependency>
        <groupId>love.forte.simbot.component</groupId>
        <artifactId>simbot-component-mirai-boot</artifactId>
        <version>${version.simbot.component.mirai}</version>
    </dependency>
    
    <!-- 或许还需要其他依赖...? -->

</dependencies>

`
}

function gradleKts(version) {
    return `plugins {
  \`java\`  // or kotlin
}

group = "..."
version = "..."

repositories {
  mavenCentral()
}

// simbot Boot
implementation("love.forte.simbot.boot:simboot-core:${version.simbot.version}on")

// 腾讯频道组件
implementation("love.forte.simbot.component:simbot-component-tencent-guild-boot:${version.simbot.component.tcg}")

// mirai组件
implementation("love.forte.simbot.component:simbot-component-mirai-boot:${version.simbot.component.mirai}")`
}

function gradleGroovy(version) {
    return `plugins {
  id 'java' // or kotlin
}

group = '...'
version = '...'

repositories {
  mavenCentral()
}

// simbot Boot
implementation 'love.forte.simbot.boot:simboot-core:${version.simbot.version}'

// 腾讯频道组件
implementation 'love.forte.simbot.component:simbot-component-tencent-guild-boot:${version.simbot.component.tcg}'

// mirai组件
implementation 'love.forte.simbot.component:simbot-component-mirai-boot:${version.simbot.component.mirai}'`
}

export default function QuickStartBootCodes({version}) {
    return <Tabs groupId="use-dependency">
        <TabItem value="Maven" label="Maven" default>
            <CodeBlock language="xml">
                { mavenCode(version) }
            </CodeBlock>
        </TabItem>

        <TabItem value="Gradle Kotlin DSL" label="Gradle Kotlin DSL">
            <CodeBlock language="kotlin">
                { gradleKts(version) }
            </CodeBlock>
        </TabItem>

        <TabItem value="Gradle Groovy" label="Gradle Groovy">
            <CodeBlock language="groovy">
                { gradleGroovy(version) }
            </CodeBlock>
        </TabItem>
    </Tabs>

}