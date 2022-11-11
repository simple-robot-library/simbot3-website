"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[4970],{9818:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>v,frontMatter:()=>s,metadata:()=>m,toc:()=>l});var r=o(7462),a=(o(7294),o(3905)),i=(o(8209),o(5488)),n=o(5162);o(814);const s={title:"boot \u6838\u5fc3\u6a21\u5757",sidebar_location:10},d=void 0,m={unversionedId:"overviews/module-overview/boot/boot-core",id:"overviews/module-overview/boot/boot-core",title:"boot \u6838\u5fc3\u6a21\u5757",description:"\u4e0e \u57fa\u7840\u6838\u5fc3\u6a21\u5757 \u7c7b\u4f3c\uff0cboot\u6838\u5fc3\u6a21\u5757\u662f\u9488\u5bf9\u4e8e boot \u6a21\u5757\u7684\u57fa\u7840\u5b8c\u6574\u5b9e\u73b0\u6a21\u5757\u3002",source:"@site/docs/overviews/module-overview/boot/boot-core.md",sourceDirName:"overviews/module-overview/boot",slug:"/overviews/module-overview/boot/boot-core",permalink:"/docs/overviews/module-overview/boot/boot-core",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/overviews/module-overview/boot/boot-core.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1668179087,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"boot \u6838\u5fc3\u6a21\u5757",sidebar_location:10},sidebar:"docs",previous:{title:"boot\u6a21\u5757",permalink:"/docs/overviews/module-overview/boot/"},next:{title:"Spring Boot Starter",permalink:"/docs/overviews/module-overview/spring-boot-starter/"}},c={},l=[{value:"\u542f\u52a8\u7c7b",id:"\u542f\u52a8\u7c7b",level:3}],u={toc:l};function v(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0e ",(0,a.kt)("a",{parentName:"p",href:"../core"},"\u57fa\u7840\u6838\u5fc3\u6a21\u5757")," \u7c7b\u4f3c\uff0cboot\u6838\u5fc3\u6a21\u5757\u662f\u9488\u5bf9\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"/docs/"},"boot")," \u6a21\u5757\u7684\u57fa\u7840\u5b8c\u6574\u5b9e\u73b0\u6a21\u5757\u3002"),(0,a.kt)("h3",{id:"\u542f\u52a8\u7c7b"},"\u542f\u52a8\u7c7b"),(0,a.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(n.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MyApp.kt"',title:'"MyApp.kt"'},"suspend fun main(vararg args: String) {\n    val context = Simboot.run(MyApp::class, *args)\n    context.join()\n}\n"))),(0,a.kt)(n.Z,{value:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MyApp.java"',title:'"MyApp.java"'},"public static void main(String[] args) {\n    SimbootContext context = Simboot.run(MyApp.class, args)\n    context.joinBlocking();\n}\n")))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"TODO")))}v.isMDXComponent=!0},8209:(e,t,o)=>{o.d(t,{G:()=>n});var r=o(7294),a=o(7273);const i="light";const n=({chart:e,config:t})=>{if("undefined"==typeof window)return r.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const o=(0,r.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),n=document.querySelector("html"),[s,d]=(0,r.useState)(!1),m=(0,r.useMemo)((()=>function(e,t){let o=e.getAttribute("data-theme")??i;o!==i&&"dark"!==o&&(o=i);const r=o===i?"default":"dark";return t?.theme?.[o]??t?.mermaid?.theme??r}(n,o)),[o,s]);return(0,r.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){d((e=>!e));break}}));return e.observe(n,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,r.useEffect)((()=>{o&&(o.mermaid?a.Z.initialize({startOnLoad:!0,...o.mermaid,theme:m}):a.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),a.Z.contentLoaded())}),[o,m]),(0,r.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(a.Z.contentLoaded,0)}),[e]),r.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);