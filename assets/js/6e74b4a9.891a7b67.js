"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[4286],{6022:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),i=(a(8209),a(5488)),l=a(5162);const o={sidebar_position:10,title:"\u76d1\u542c\u6982\u89c8"},s=void 0,m={unversionedId:"take-a-look/listen-overview",id:"take-a-look/listen-overview",title:"\u76d1\u542c\u6982\u89c8",description:"\u6d88\u606f\u53d1\u9001",source:"@site/docs/take-a-look/listen-overview.md",sourceDirName:"take-a-look",slug:"/take-a-look/listen-overview",permalink:"/docs/take-a-look/listen-overview",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/take-a-look/listen-overview.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1668179087,formattedLastUpdatedAt:"Nov 11, 2022",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u76d1\u542c\u6982\u89c8"},sidebar:"docs",previous:{title:"\u5f00\u9ed1\u5566\u7ec4\u4ef6",permalink:"/docs/component-overview/kaiheila/"},next:{title:"core\u6982\u89c8",permalink:"/docs/take-a-look/code-overview"}},d={},p=[{value:"\u6d88\u606f\u53d1\u9001",id:"\u6d88\u606f\u53d1\u9001",level:2},{value:"\u6d88\u606f\u56de\u590d",id:"\u6d88\u606f\u56de\u590d",level:2},{value:"\u6210\u5458\u83b7\u53d6",id:"\u6210\u5458\u83b7\u53d6",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6d88\u606f\u53d1\u9001"},"\u6d88\u606f\u53d1\u9001"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="ExampleListener.kt"',title:'"ExampleListener.kt"'},'@Listener // if use simboot\nsuspend fun GroupMessageEvent.listener() {\n    group().send("Hello Simbot")\n}\n'))),(0,r.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ExampleListener.java"',title:'"ExampleListener.java"'},'@Listener // if use simboot\npublic void listener(GroupMessageEvent event) {\n       event.getGroup().sendBlocking("Hello Simbot")\n}\n')))),(0,r.kt)("h2",{id:"\u6d88\u606f\u56de\u590d"},"\u6d88\u606f\u56de\u590d"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="ExampleListener.kt"',title:'"ExampleListener.kt"'},'@Listener\nsuspend fun FriendMessageEvent.listener() {\n    replyIfSupport("Hello Simbot")\n}\n'))),(0,r.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ExampleListener.java"',title:'"ExampleListener.java"'},'@Listener\npublic void listener(FriendMessageEvent event) {\n    if (event instanceof ReplySupport) {\n        ((ReplySupport) event).replyBlocking("Hello Simbot");\n    }\n}\n')))),(0,r.kt)("h2",{id:"\u6210\u5458\u83b7\u53d6"},"\u6210\u5458\u83b7\u53d6"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="ExampleListener.kt"',title:'"ExampleListener.kt"'},'@Listener\nsuspend fun GroupMessageEvent.listener() {\n    group().members().collect {\n        println("Member: $it")\n    }\n}\n'))),(0,r.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ExampleListener.java"',title:'"ExampleListener.java"'},'@Listener\npublic void listener(GroupMessageEvent event) {\n    event.getGroup().getMembers().forEach(member -> System.out.println("Member: " + member));\n}\n')))))}c.isMDXComponent=!0},8209:(e,t,a)=>{a.d(t,{G:()=>l});var n=a(7294),r=a(7273);const i="light";const l=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),l=document.querySelector("html"),[o,s]=(0,n.useState)(!1),m=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??i;a!==i&&"dark"!==a&&(a=i);const n=a===i?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(l,a)),[a,o]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){s((e=>!e));break}}));return e.observe(l,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?r.Z.initialize({startOnLoad:!0,...a.mermaid,theme:m}):r.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[a,m]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);