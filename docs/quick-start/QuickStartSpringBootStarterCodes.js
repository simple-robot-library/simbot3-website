import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

function mavenCode(version) {
    return `<!-- Spring Boot 相关。此处选择使用parent对Spring进行版本控制 -->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <!-- Spring Boot 版本 -->
    <version>2.6.6</version>
    <relativePath/> <!-- lookup parent from repository -->
  </parent>

<dependencies>
    <!-- 引入你所需要的Spring Boot依赖。这里假设你需要使用 web 相关功能 -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <!-- simbot Spring Boot Starter -->
    <dependency>
        <groupId>love.forte.simbot.boot</groupId>
        <artifactId>simboot-core-spring-boot-starter</artifactId>
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
  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>`
}

function gradleKts(version) {
    return `plugins {
  id("org.springframework.boot") version "2.6.6" // Spring Boot
  id("io.spring.dependency-management") version "1.0.11.RELEASE"
  \`java\`
}

group = "..."
version = "..."

repositories {
  mavenCentral()
}

// 使用你所需要的Spring Boot依赖。这里假设你需要使用web相关内容。
implementation("org.springframework.boot:spring-boot-starter-web")

// simbot Spring Boot Starter
implementation("love.forte.simbot.boot:simboot-core-spring-boot-starter:${version.simbot.version}")

// 腾讯频道组件
implementation("love.forte.simbot.component:simbot-component-tencent-guild-boot:${version.simbot.component.tcg}")

// mirai组件
implementation("love.forte.simbot.component:simbot-component-mirai-boot:${version.simbot.component.mirai}")`
}

function gradleGroovy(version) {
    return `plugins {
  id 'org.springframework.boot' version '2.6.6' // Spring Boot
  id 'io.spring.dependency-management' version '1.0.11.RELEASE'
  id 'java'
}

group = '...'
version = '...'

repositories {
  mavenCentral()
}

// 使用你所需要的Spring Boot依赖。这里假设你需要使用web相关内容。
implementation 'org.springframework.boot:spring-boot-starter-web'

// simbot Spring Boot Starter
implementation 'love.forte.simbot.boot:simboot-core-spring-boot-starter:${version.simbot.version}'

// 腾讯频道组件
implementation 'love.forte.simbot.component:simbot-component-tencent-guild-boot:${version.simbot.component.tcg}'

// mirai组件
implementation 'love.forte.simbot.component:simbot-component-mirai-boot:${version.simbot.component.mirai}'`
}

export default function QuickStartSpringBootStarterCodes({version}) {
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