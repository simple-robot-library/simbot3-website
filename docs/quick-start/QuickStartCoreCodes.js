import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

function mavenCode(version) {
    return `
<dependencies>
    <!-- simbot core -->
    <dependency>
        <groupId>love.forte.simbot</groupId>
        <artifactId>simbot-core</artifactId>
        <version>${version}</version>
    </dependency>
    <!-- 给其他组件预留一个座位... -->
    <!-- ... -->  
      
</dependencies>

`.trim()}

function gradleKts(version) {
    return `plugins {
  \`kotlin\` // or \`java\`
}

group = "..."
version = "..."

repositories {
  mavenCentral()
}

// simbot核心标准库
implementation("love.forte.simbot:simbot-core:${version}")

// 给其他组件预留一个座位...
// ...
`.trim()}

function gradleGroovy(version) {
    return `plugins {
  id 'kotlin' // or 'java'
}

group = '...'
version = '...'

repositories {
  mavenCentral()
}

// simbot核心标准库
implementation 'love.forte.simbot:simbot-core:${version}'

// 给其他组件预留一个座位...
// ...
`.trim()}

export default function QuickStartCoreCodes({version}) {
    return <Tabs groupId="use-dependency">
        <TabItem value="Gradle Kotlin DSL" label="Gradle Kotlin DSL" default>
            <CodeBlock language="kotlin">
                { gradleKts(version) }
            </CodeBlock>
        </TabItem>

        <TabItem value="Gradle Groovy" label="Gradle Groovy">
            <CodeBlock language="groovy">
                { gradleGroovy(version) }
            </CodeBlock>
        </TabItem>
        <TabItem value="Maven" label="Maven">
        <CodeBlock language="xml">
            { mavenCode(version) }
        </CodeBlock>
    </TabItem>


    </Tabs>

}
