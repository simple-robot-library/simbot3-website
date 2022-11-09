"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3528],{5552:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=(a(8209),a(5488)),o=a(5162);const d={title:"\u6253\u5305"},l=void 0,s={unversionedId:"basic/package/index",id:"basic/package/index",title:"\u6253\u5305",description:"Fat Jar",source:"@site/docs/basic/package/index.md",sourceDirName:"basic/package",slug:"/basic/package/",permalink:"/docs/basic/package/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/basic/package/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1667987660,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{title:"\u6253\u5305"},sidebar:"docs",previous:{title:"Spring Boot",permalink:"/docs/basic/spring-boot"},next:{title:"\u7ec4\u4ef6\u6982\u89c8",permalink:"/docs/component-overview/"}},p={},c=[{value:"Fat Jar",id:"fat-jar",level:2},{value:"Application",id:"application",level:2}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"fat-jar"},"Fat Jar"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Maven")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"Gradle")," \u4e0b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://spring.io/guides/gs/spring-boot/"},"Spring Boot \u6784\u5efa\u5e94\u7528(\u6253\u5305)")," \u7684\u65b9\u5f0f\u5c06\u4f60\u7684\u7a0b\u5e8f\u6253\u5305\u4e3a\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Fat Jar")," \u5e76\u90e8\u7f72\u5230\u4f60\u5e0c\u671b\u7684\u5730\u65b9\u3002"),(0,i.kt)("admonition",{title:"Fat Jar? NO!",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5c3d\u91cf\u4e0d\u8981\u7528IDEA\u81ea\u5e26\u7684\u6253\u5305\u529f\u80fd\u6253\u5305\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Fat Jar")," \uff0c\u9664\u975e\u4f60\u77e5\u9053\u81ea\u5df1\u5728\u505a\u4ec0\u4e48\u3002")),(0,i.kt)(r.Z,{groupId:"build-tool",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Maven",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=pom.xml",title:"pom.xml"},"<build>\n  <plugins>\n    <plugin>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-maven-plugin</artifactId>\n        \x3c!-- \u4e5f\u8bb8\u9700\u8981\u6307\u5b9a\u7248\u672c\u53f7  --\x3e\n        <configuration>\n            <addResources>true</addResources>\n        </configuration>\n        <executions>\n            <execution>\n                <goals>\n                    <goal>repackage</goal>\n                </goals>\n            </execution>\n        </executions>\n    </plugin>\n  </plugins>\n</build>\n")),(0,i.kt)("p",null,"\u7136\u540e\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn package")," \u3002")),(0,i.kt)(o.Z,{value:"Gradle Kotlin DSL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=gradle.build.kts",title:"gradle.build.kts"},'plugins {\n    // ...\n    id("org.springframework.boot")\n}\n')),(0,i.kt)("p",null,"\u7136\u540e\u6267\u884c Task: ",(0,i.kt)("inlineCode",{parentName:"p"},"bootJar"),"\u3002")),(0,i.kt)(o.Z,{value:"Gradle Groovy",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy",metastring:"title=gradle.build",title:"gradle.build"},"plugins {\n    // ...\n    id 'org.springframework.boot'\n}\n")),(0,i.kt)("p",null,"\u7136\u540e\u6267\u884c Task: ",(0,i.kt)("inlineCode",{parentName:"p"},"bootJar"),"\u3002"))),(0,i.kt)("h2",{id:"application"},"Application"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Gradle")," \u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"application")," \u63d2\u4ef6\u8fdb\u884c\u6253\u5305\uff08\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/application_plugin.html#header"},"gradle-plugin: application"),"\uff09"),(0,i.kt)("p",null,"\u5728Maven\u6216\u8005IDEA\u81ea\u5e26\u6253\u5305\u5de5\u5177\u4e2d\uff0c\u5e94\u8be5\u4e5f\u6709\u7c7b\u4f3c\u7684\u529f\u80fd\uff0c\u4f46\u662f\u6211\u5b9e\u9645\u6ca1\u4e0a\u624b\u8fc7\u6240\u4ee5\u8fd9\u90e8\u5206\u5404\u4f4d\u5c31\u5148\u81ea\u884c\u63a2\u7d22\u7f62\u3002"))}u.isMDXComponent=!0},8209:(e,t,a)=>{a.d(t,{G:()=>o});var n=a(7294),i=a(7273);const r="light";const o=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),o=document.querySelector("html"),[d,l]=(0,n.useState)(!1),s=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??r;a!==r&&"dark"!==a&&(a=r);const n=a===r?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(o,a)),[a,d]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){l((e=>!e));break}}));return e.observe(o,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?i.Z.initialize({startOnLoad:!0,...a.mermaid,theme:s}):i.Z.initialize({startOnLoad:!0,theme:s}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),i.Z.contentLoaded())}),[a,s]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(i.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);