(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[7200],{1541:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=a(7462),i=(a(7294),a(3905));a(8209);const n={title:"Maven & Java",sidebar_position:1},o=void 0,s={unversionedId:"quick-start-faster/maven-java",id:"quick-start-faster/maven-java",title:"Maven & Java",description:"\u672c\u7ae0\u8282\u4ecb\u7ecd\u901a\u8fc7 simple-robot/simbot-archetypes \u5feb\u901f\u642d\u5efa\u57fa\u4e8eMaven\u7684Java\u6837\u677f\u9879\u76ee\u3002",source:"@site/docs/quick-start-faster/maven-java.md",sourceDirName:"quick-start-faster",slug:"/quick-start-faster/maven-java",permalink:"/docs/quick-start-faster/maven-java",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/quick-start-faster/maven-java.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1683786312,formattedLastUpdatedAt:"2023\u5e745\u670811\u65e5",sidebarPosition:1,frontMatter:{title:"Maven & Java",sidebar_position:1},sidebar:"docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/quick-start-faster/"},next:{title:"Maven & SpringBoot",permalink:"/docs/quick-start-faster/maven-java-spring-boot"}},m={},d=[{value:"\u73af\u5883",id:"\u73af\u5883",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:3},{value:"\u8865\u5145\u4fe1\u606f",id:"\u8865\u5145\u4fe1\u606f",level:3},{value:"\u521b\u5efa\u5b8c\u6210",id:"\u521b\u5efa\u5b8c\u6210",level:3}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u7ae0\u8282\u4ecb\u7ecd\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-archetypes"},"simple-robot/simbot-archetypes")," \u5feb\u901f\u642d\u5efa\u57fa\u4e8eMaven\u7684Java\u6837\u677f\u9879\u76ee\u3002"),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u6587\u6863\u5185\u5bb9\u5f88\u53ef\u80fd\u8fdc\u4e0d\u53ca\u4ed3\u5e93\u5185\u5bb9\u66f4\u65b0\u53ca\u65f6\u3002\u6700\u597d\u7684\u9009\u62e9\uff0c\u524d\u5f80",(0,i.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-archetypes"},(0,i.kt)("strong",{parentName:"a"},"\u539f\u4ed3\u5e93")),"\u9605\u8bfb\u5176\u8bf4\u660e\u5e76\u4f7f\u7528\uff0c\n\u672c\u7ae0\u8282\u4ec5\u4f5c\u629b\u7816\u5f15\u7389\u4e4b\u610f\u3002")),(0,i.kt)("h2",{id:"\u73af\u5883"},"\u73af\u5883"),(0,i.kt)("p",null,"\u786e\u4fdd\u5f53\u524d\u7cfb\u7edf\u73af\u5883\u4e2d\u5b58\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Maven")," \u4e0eJava\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,i.kt)("h3",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,i.kt)("p",null,"\u9009\u62e9\u4e00\u4e2a\u4f60\u60f3\u8981\u521b\u5efa\u9879\u76ee\u7684\u76ee\u5f55\uff0c\u5e76\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u6267\u884c\u4e0b\u8ff0\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'mvn archetype:generate \\\n  -DarchetypeGroupId="love.forte.simbot.archetypes" \\\n  -DarchetypeArtifactId="simbot-maven-java-archetype" \\\n  -DarchetypeVersion="<version>" \\\n  -DgroupId=<my.groupid> \\\n  -DartifactId=<my-artifactId>\n')),(0,i.kt)("p",null,"\u66ff\u6362\u4e0a\u8ff0\u5c5e\u6027 ",(0,i.kt)("inlineCode",{parentName:"p"},"<version>"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"<my.groupId>"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"<my-artifactId>")," \u5c5e\u6027\u4e3a\u4f60\u65b0\u5efa\u9879\u76ee\u7684\u6240\u9700\u5c5e\u6027\u3002"),(0,i.kt)("admonition",{title:"\u7248\u672c?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"version")," \u4fe1\u606f\u53ef\u524d\u5f80",(0,i.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-archetypes"},(0,i.kt)("strong",{parentName:"a"},"\u539f\u4ed3\u5e93")),"\u67e5\u770b\u3002")),(0,i.kt)("h3",{id:"\u8865\u5145\u4fe1\u606f"},"\u8865\u5145\u4fe1\u606f"),(0,i.kt)("p",null,"maven\u53ef\u80fd\u4f1a\u5728\u540e\u7eed\u7ee7\u7eed\u8be2\u95ee\u3001\u8865\u5145\u90e8\u5206\u5185\u5bb9\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4e00\u8def ",(0,i.kt)("kbd",null,"enter")," \u8fc7\u53bb\uff0c\u6216\u8005\u7a0d\u5fae\u586b\u5199\u4e00\u4e0b\u3002"),(0,i.kt)("h3",{id:"\u521b\u5efa\u5b8c\u6210"},"\u521b\u5efa\u5b8c\u6210"),(0,i.kt)("p",null,"\u7b49\u5f85maven\u521d\u59cb\u5316\u9879\u76ee\u5b8c\u6210\uff0c\u7136\u540e\u5373\u53ef\u5c06\u6b64\u9879\u76ee\u5bfc\u5165\u5230IDE\u4e2d\uff0c\u6839\u636e\u793a\u4f8b\u4ee3\u7801\u4e2d\u7684\u8bf4\u660e\u5f00\u59cb\u4e0a\u624b\u3002"))}p.isMDXComponent=!0},1748:(e,t,a)=>{var r={"./locale":9234,"./locale.js":9234};function i(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=n,e.exports=i,i.id=1748},8209:(e,t,a)=>{"use strict";a.d(t,{G:()=>o});var r=a(7294),i=a(1304);const n="light";const o=({chart:e,config:t})=>{if("undefined"==typeof window)return r.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,r.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),o=document.querySelector("html"),[s,m]=(0,r.useState)(!1),d=(0,r.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??n;a!==n&&"dark"!==a&&(a=n);const r=a===n?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??r}(o,a)),[a,s]);return(0,r.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){m((e=>!e));break}}));return e.observe(o,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,r.useEffect)((()=>{a&&(a.mermaid?i.Z.initialize({startOnLoad:!0,...a.mermaid,theme:d}):i.Z.initialize({startOnLoad:!0,theme:d}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),i.Z.contentLoaded())}),[a,d]),(0,r.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(i.Z.contentLoaded,0)}),[e]),r.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);