"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[1972],{2618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var o=n(7462),a=(n(7294),n(3905)),s=(n(8209),n(5488)),r=n(5162);const i={sidebar_position:30,title:"boot\u6982\u89c8"},l=void 0,d={unversionedId:"take-a-look/boot-overview",id:"take-a-look/boot-overview",title:"boot\u6982\u89c8",description:"boot-core \u6a21\u5757\u4e0b\u652f\u6301\u76f8\u5bf9\u66f4\u52a0\u5de5\u7a0b\u5316\u7684\u4f7f\u7528\u65b9\u5f0f",source:"@site/docs/take-a-look/boot-overview.md",sourceDirName:"take-a-look",slug:"/take-a-look/boot-overview",permalink:"/docs/take-a-look/boot-overview",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/take-a-look/boot-overview.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1668179087,formattedLastUpdatedAt:"Nov 11, 2022",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"boot\u6982\u89c8"},sidebar:"docs",previous:{title:"core\u6982\u89c8",permalink:"/docs/take-a-look/code-overview"},next:{title:"\u4e07\u82b1\u4e1b\u4e2d",permalink:"/docs/take-a-look/something-else"}},c={},m=[],p={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boot-core")," \u6a21\u5757\u4e0b\u652f\u6301\u76f8\u5bf9\u66f4\u52a0\u5de5\u7a0b\u5316\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="ExampleListener.kt"',title:'"ExampleListener.kt"'},'// \u76d1\u542c\u51fd\u6570\n@Listener\nsuspend fun ChannelMessageEvent.myListener1(): Unit {\n    replyIfSupport(AtAll + "Hello World".toText())\n\n}\n\n// \u6709\u6807\u51c6\u8fc7\u6ee4\u5668\u7684\u76d1\u542c\u51fd\u6570\n@Filter(value = ".*Hi", \n        matchType = MatchType.REGEX_CONTAINS, \n        conponent = "simbot.tencentguild")\n@Listener\nsuspend fun GroupMessageEvent.myListener2(): Unit {\n    \n    group().send("I Love You.".toText() + At(author.id) )\n\n}\n\n\n// \u62e6\u622a\u5668\u3002\u6b64\u5904\u4e3a\u76d1\u542c\u51fd\u6570\u62e6\u622a\u5668\n@Interceptor\nsuspend fun myInterceptor() = listenerInterceptor("abc".ID) { context ->\n    println("Interceptor $context")\n    context.proceed() // pass\n}\n'))),(0,a.kt)(r.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ExampleListener.java"',title:'"ExampleListener.java"'},'@Beans\npublic class ExampleListener {\n    \n    // \u76d1\u542c\u51fd\u6570\n    @Listener\n    public void myListener1(ChannelMessageEvent event) {\n        // reply if support\n        if (event instanceof MessageReplySupport) {\n            final Messages messages = Messages.getMessages(\n                    AtAll.INSTANCE,\n                    Text.getText("Hello World")\n            );\n\n            ((MessageReplySupport) event).replyBlocking(messages);\n        }\n    }\n    \n   \n    @Listener\n    public void myListener2(TcgChannelMessageEvent event) {\n     \n        // ...\n    }\n    \n    \n    // \u6709\u6807\u51c6\u8fc7\u6ee4\u5668\u7684\u76d1\u542c\u51fd\u6570\n    @Listener \n    @Filter(value = ".*Hi", matchType = MatchType.REGEX_MATCHES, conponent = "simbot.tencentguild")\n    public void myListener3(GroupMessageEvent event) {\n        final Messages messages = Messages.getMessages(\n                Text.of("I Love You."),\n                new At(event.getAuthor().getId())\n        );\n\n        // send to group\n        event.getGroup().sendBlocking(messages);\n\n    }\n}\n')))))}u.isMDXComponent=!0},8209:(e,t,n)=>{n.d(t,{G:()=>r});var o=n(7294),a=n(7273);const s="light";const r=({chart:e,config:t})=>{if("undefined"==typeof window)return o.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const n=(0,o.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),r=document.querySelector("html"),[i,l]=(0,o.useState)(!1),d=(0,o.useMemo)((()=>function(e,t){let n=e.getAttribute("data-theme")??s;n!==s&&"dark"!==n&&(n=s);const o=n===s?"default":"dark";return t?.theme?.[n]??t?.mermaid?.theme??o}(r,n)),[n,i]);return(0,o.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){l((e=>!e));break}}));return e.observe(r,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,o.useEffect)((()=>{n&&(n.mermaid?a.Z.initialize({startOnLoad:!0,...n.mermaid,theme:d}):a.Z.initialize({startOnLoad:!0,theme:d}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),a.Z.contentLoaded())}),[n,d]),(0,o.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(a.Z.contentLoaded,0)}),[e]),o.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);