import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

function mavenCode(version) {
    return `
<!-- 配置快照仓库 -->
<repositories>
    <repository>
        <id>sonatype-snapshot</id>
        <name>Sonatype Snapshots Repository</name>
        <url>https://oss.sonatype.org/content/repositories/snapshots/</url>
        <snapshots>
            <enabled>true</enabled>
        </snapshots>
    </repository>
</repositories>
    
<dependencies>
    <!-- simbot Core -->
    <dependency>
        <groupId>love.forte.simbot</groupId>
        <artifactId>simbot-core</artifactId>
        <version>${version.simbot.version}</version>
    </dependency>
    <!-- 开黑啦组件 -->
    <dependency>
        <groupId>love.forte.simbot.component</groupId>
        <artifactId>simbot-component-tencent-guild-core</artifactId>
        <version>${version.simbot.component.tcg}</version>
    </dependency>
    <!-- mirai组件 -->
    <dependency>
        <groupId>love.forte.simbot.component</groupId>
        <artifactId>simbot-component-mirai-core</artifactId>
        <version>${version.simbot.component.mirai}</version>
    </dependency>
    
    <!-- 或许还需要其他依赖...? -->

</dependencies>

`
}

function gradleKts(version) {
    return `plugins {
  \`kotlin\`
}

group = "..."
version = "..."

repositories {
    mavenCentral()
    // 快照仓库
    maven {
        url = uri("https://oss.sonatype.org/content/repositories/snapshots/")
        mavenContent {
            snapshotsOnly()
        }
    }
}

// simbot核心标准库
implementation("love.forte.simbot:simbot-core:${version.simbot.version}")

// 开黑啦组件
implementation("love.forte.simbot.component:simbot-component-kaiheila-core:${version.simbot.component.khl}")

// mirai组件
implementation("love.forte.simbot.component:simbot-component-mirai-core:${version.simbot.component.mirai}")`
}

function gradleGroovy(version) {
    return `plugins {
  id 'kotlin'
}

group = '...'
version = '...'

repositories {
    mavenCentral()
    // 快照仓库
    maven { 
        url 'https://oss.sonatype.org/content/repositories/snapshots/'
        mavenContent {
            snapshotsOnly()
        }
     }
}

// simbot核心标准库
implementation 'love.forte.simbot:simbot-core:${version.simbot.version}'

// 开黑啦组件
implementation 'love.forte.simbot.component:simbot-component-kaiheila-core:${version.simbot.component.khl}'

// mirai组件
implementation 'love.forte.simbot.component:simbot-component-mirai-core:${version.simbot.component.mirai}'`
}

export default function QuickStartCoreSnapshotCodes({version}) {
    return <Tabs groupId="use-dependency">
        <TabItem value="Maven" label="Maven" default>
            <CodeBlock language="xml">
                {mavenCode(version)}
            </CodeBlock>
        </TabItem>

        <TabItem value="Gradle Kotlin DSL" label="Gradle Kotlin DSL">
            <CodeBlock language="kotlin">
                {gradleKts(version)}
            </CodeBlock>
        </TabItem>

        <TabItem value="Gradle Groovy" label="Gradle Groovy">
            <CodeBlock language="groovy">
                {gradleGroovy(version)}
            </CodeBlock>
        </TabItem>
    </Tabs>

}
