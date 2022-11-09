"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[326],{1697:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>m,metadata:()=>d,toc:()=>s});var n=a(7462),l=(a(7294),a(3905)),i=(a(8209),a(5488)),o=a(5162);const m={sidebar_position:10,title:"\u6807\u51c6\u6d88\u606f",tags:["\u6d88\u606f"]},r=void 0,d={unversionedId:"defition/message-overview/standard-message",id:"defition/message-overview/standard-message",title:"\u6807\u51c6\u6d88\u606f",description:"\u9488\u5bf9\u4e00\u4e9b\u5341\u5206\u5e38\u89c1\u7684\u6d88\u606f\u7c7b\u578b\uff0csimbot-api \u63d0\u4f9b\u4e86\u4e00\u4e9b\u6807\u51c6\u5b9a\u4e49\u6216\u5b9e\u73b0\u3002",source:"@site/docs/defition/message-overview/standard-message.md",sourceDirName:"defition/message-overview",slug:"/defition/message-overview/standard-message",permalink:"/docs/defition/message-overview/standard-message",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/defition/message-overview/standard-message.md",tags:[{label:"\u6d88\u606f",permalink:"/docs/tags/\u6d88\u606f"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1667987660,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u6807\u51c6\u6d88\u606f",tags:["\u6d88\u606f"]},sidebar:"docs",previous:{title:"\u6d88\u606f\u6982\u8ff0",permalink:"/docs/defition/message-overview/"},next:{title:"\u5e8f\u5217\u5316",permalink:"/docs/defition/message-overview/message-serialization"}},p={},s=[{value:"PlainText",id:"plaintext",level:2},{value:"Text",id:"text",level:2},{value:"At",id:"at",level:2},{value:"AtAll",id:"atall",level:2},{value:"Image",id:"image",level:2},{value:"Emoji",id:"emoji",level:2},{value:"Face",id:"face",level:2}],k={toc:s};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u9488\u5bf9\u4e00\u4e9b\u5341\u5206\u5e38\u89c1\u7684\u6d88\u606f\u7c7b\u578b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"simbot-api")," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u6807\u51c6\u5b9a\u4e49\u6216\u5b9e\u73b0\u3002"),(0,l.kt)("h2",{id:"plaintext"},"PlainText"),(0,l.kt)("p",null,"\u6587\u672c\u662f\u6700\u5e38\u89c1\u7684\u6d88\u606f\u7c7b\u578b\u3002PlainText\u662f\u9488\u5bf9\u4e8e\u7eaf\u6587\u672c\u6d88\u606f\u6240\u63d0\u4f9b\u7684\u62bd\u8c61\u7c7b\u578b\u3002\u6838\u5fc3\u63d0\u4f9b\u4e86\u5b83\u6700\u57fa\u7840\u7684\u5b9e\u73b0\uff1a",(0,l.kt)("a",{parentName:"p",href:"#text"},"Text"),"\u3002"),(0,l.kt)("h2",{id:"text"},"Text"),(0,l.kt)("p",null,"plainText\u7684\u57fa\u7840\u5b9e\u73b0\uff0c\u7528\u6765\u63cf\u8ff0\u4e00\u4e2a\u6700\u57fa\u7840\u7684\u7eaf\u6587\u672c\u6d88\u606f\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val text1: Text = "Hello".toText()\nval text2: Text = Text { "World" }\nval emptyText: Text = Text()\n'))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final Text text = Text.of("Hello");\nfinal Text emptyText = Text.getEmptyText();\n')))),(0,l.kt)("h2",{id:"at"},"At"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AT"),"\uff08\u6216\u8005\u79f0\u4e4b\u4e3a ",(0,l.kt)("em",{parentName:"p"},"\u827e\u7279"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"@")," \uff09\u662f\u804a\u5929\u793e\u4ea4\u8f6f\u4ef6\u5e73\u53f0\u5341\u5206\u5e38\u89c1\u7684\u4e00\u79cd\u6d88\u606f\u7c7b\u578b\uff0c\u5176\u4ee3\u8868\u5bf9\u67d0\u4eba\u67d0\u4e8b\u8fdb\u884c\u9488\u5bf9\u6027\u7684",(0,l.kt)("strong",{parentName:"p"},"\u63d0\u9192/\u901a\u77e5"),"\u6d88\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"At")," \u7531\u6838\u5fc3\u63d0\u4f9b\u4e86\u57fa\u7840\u7684\u6570\u636e\u7c7b\uff08 ",(0,l.kt)("inlineCode",{parentName:"p"},"data class")," \uff09\u5b9e\u73b0\uff0c\u57fa\u672c\u53ef\u4ee5\u6ee1\u8db3\u9700\u8981\u3002\n\u5982\u679c\u67d0\u7ec4\u4ef6\u5b58\u5728\u8f83\u4e3a\u590d\u6742\u3001\u65e0\u6cd5\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"At")," \u6ee1\u8db3\u7684\u901a\u77e5\u6d88\u606f\u7c7b\u578b\uff0c\u5219\u9700\u8981\u7531\u5bf9\u5e94\u7ec4\u4ef6\u81ea\u884c\u5b9e\u73b0\u53e6\u5916\u7684\u6d88\u606f\uff0c\u5e76\u5c3d\u53ef\u80fd\u63d0\u4f9b\u9488\u5bf9\u4e8e\u89e3\u6790 ",(0,l.kt)("inlineCode",{parentName:"p"},"At")," \u7684\u517c\u5bb9\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val at: At = At(123.ID)\nval atMember: At = At(event.author().id)\n"))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final At at = new At(Identifies.ID(123));\nfinal At atMember = new At(event.getAuthor().getId());\n")))),(0,l.kt)("h2",{id:"atall"},"AtAll"),(0,l.kt)("p",null,"\u4e66\u63a5\u4e0a\u6587\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"At"),"\uff0c\u5bf9\u4e8e\u5927\u591a\u6570\u804a\u5929\u793e\u4ea4\u8f6f\u4ef6\u6765\u8bb2\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"AtAll")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"At")," \u540c\u6837\u5e38\u89c1\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"AtAll")," \u7684\u542b\u4e49\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"At")," \u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"At")," \u662f\u9488\u5bf9\u4e00\u4e2a\u4eba/\u4e8b\u7269\uff0c\u4f46\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"AtAll")," \u662f\u9488\u5bf9\u6240\u6709\u3002\n\u6838\u5fc3\u63d0\u4f9b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"AtAll")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," \u7c7b\u578b\u7684\u5355\u4f8b\u3002\n\u5047\u5982\u67d0\u7ec4\u4ef6\u5b58\u5728\u66f4\u4e3a\u7ec6\u7c92\u5ea6\u7684\u201c\u590d\u6570At\u201d\uff0c\u90a3\u4e48\u9700\u8981\u63d0\u4f9b\u989d\u5916\u7684\u5b9e\u73b0\u7c7b\u578b\uff0c\u5e76\u5c3d\u53ef\u80fd\u63d0\u4f9b\u9488\u5bf9\u4e8e\u89e3\u6790 ",(0,l.kt)("inlineCode",{parentName:"p"},"AtAll")," \u7684\u517c\u5bb9\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val atAll: AtAll = AtAll\n"))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final AtAll atAll = AtAll.INSTANCE;\n")))),(0,l.kt)("h2",{id:"image"},"Image"),(0,l.kt)("p",null,"\u56fe\u7247\u7c7b\u578b\u4e5f\u662f\u975e\u5e38\u5e38\u89c1\u7684\u7c7b\u578b\u4e4b\u4e00\uff0c\u4ee3\u8868\u4e00\u4e2a\u4efb\u610f\u7684\u56fe\u7247\u6d88\u606f\u3002\u6838\u5fc3\u6240\u63d0\u4f9b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," \u7c7b\u578b\u4e3a\u62bd\u8c61\u7c7b\u578b\uff0c\u65e0\u6cd5\u76f4\u63a5\u6784\u5efa\u3002",(0,l.kt)("br",null),"\n\u56e0\u4e3a\u5bf9\u4e8e\u56fe\u7247\u6765\u8bb2\uff0c\u4ed6\u4eec\u901a\u5e38\u90fd\u9700\u8981\u63d0\u4f9b\u8d44\u6e90\uff08\u4f8b\u5982\u7f51\u7edc\u8d44\u6e90\u3001\u672c\u5730\u6587\u4ef6\u8d44\u6e90\uff09\u540e\u4e0a\u4f20\u7684\u76ee\u6807\u670d\u52a1\u5668\uff0c\u8fdb\u800c\u518d\u53d1\u9001\u3002\n\u56e0\u6b64\u60f3\u8981\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," \u5bf9\u8c61\u5b9e\u4f8b\uff0c\u4f60\u9700\u8981\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Bot.uploadImage")," \u4e0a\u4f20\u4e00\u4e2a\u8d44\u6e90\u5e76\u6362\u53d6\u56fe\u7247\u7ed3\u679c\uff0c\u6216\u8005\u5c1d\u8bd5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Bot.resolveImage")," \u89e3\u6790\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u5e76\u5f97\u5230\u4e00\u4e2a\u56fe\u7247\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," \u7684\u5b9e\u73b0\u4e0e\u7ec4\u4ef6\u4e4b\u95f4\u6709\u7740\u5f88\u5f3a\u7684\u5173\u8054\uff0c\u56e0\u6b64\u4f60\u5f88\u96be\u5728\u8131\u79bb\u4e86\u7ec4\u4ef6\uff08\u6216\u8005\u8bf4\u8131\u79bb\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Bot")," \uff09\u7684\u60c5\u51b5\u4e0b\u53bb\u6784\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Image"),"\u3002\u800c\u4e14\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4e0d\u540c\u7ec4\u4ef6\u800c\u5f97\u5230\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," \u4e0d\u80fd\u4ea4\u53c9\u4f7f\u7528\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val image: Image<*> = bot.uploadImage(Resource.of(...))\nval imageById: Image<*> = bot.resolveImage(123.ID)\n"))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final Image<?> image = bot.uploadImageBlocking(Resource.of(...));\nfinal Image<?> imageById = bot.resolveImageBlocking(Identifies.ID(123));\n")))),(0,l.kt)("h2",{id:"emoji"},"Emoji"),(0,l.kt)("p",null,"Emoji\u662f\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"\u4fdd\u7559\u7c7b\u578b")," \uff0c\u5b83\u7c7b\u4f3c\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"#face"},"Face"),"\uff0c\u7528\u6765\u8868\u793a\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"emoji"),"\u3002\u4f46\u662f\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u5e76\u4e0d\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Emoji")," \u6765\u53d1\u9001 ",(0,l.kt)("inlineCode",{parentName:"p"},"emoji"),"\uff0c\n\u56e0\u4e3a\u4ece2010\u5e74\u5f00\u59cb ",(0,l.kt)("inlineCode",{parentName:"p"},"Unicode")," \u4fbf\u5f00\u59cb\u6536\u5f55emoji\u7f16\u7801\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"emoji")," \u8868\u60c5\u4f5c\u4e3a\u5b57\u7b26\u4e32\u53d1\u9001\u3002"),(0,l.kt)("p",null,"\u90a3\u4e48 ",(0,l.kt)("inlineCode",{parentName:"p"},"Emoji")," \u73b0\u5728\u66f4\u591a\u7684\u7528\u4e8e\u8868\u793a\u4e00\u4e9b\u5e73\u53f0\u4e0b\u7684\u7279\u6b8a\u8868\u60c5\uff0c\u4f8b\u5982\u53ea\u80fd\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u4f7f\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"emoji"),"\uff0c\u6bd4\u5982 ",(0,l.kt)("a",{parentName:"p",href:"../../component-overview/tencent-guild"},"\u817e\u8baf\u9891\u9053\u7ec4\u4ef6")," \u4e2d\u7528\u4e8ereaction\u6d88\u606f\u7684\u8868\u60c5\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u4e0d\u4f1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Emoji")," \u6d88\u606f\u7c7b\u578b\u3002")),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val emoji: Emoji = Emoji(123.ID)\n"))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final Emoji emoji = new Emoji(Identifies.ID(123));\n")))),(0,l.kt)("h2",{id:"face"},"Face"),(0,l.kt)("p",null,"\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u8868\u60c5"),"\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Face")," \u6240\u4ee3\u8868\u7684\u901a\u5e38\u4e3a\u4e00\u4e9b\u5bf9\u5e94\u7ec4\u4ef6\u5e73\u53f0\u4e0b\u6240\u5c5e\u7684\u8868\u60c5\u3002\u8fd9\u4e9b\u8868\u60c5\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u90fd\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u6765\u8fdb\u884c\u8868\u793a\u4e0e\u5b9a\u4f4d\u3002\n\u5047\u5982\u5e73\u53f0\u7684\u8868\u60c5\u8f83\u4e3a\u590d\u6742\uff0c\u6216\u8005\u5b58\u5728\u5f88\u591a\u4e0d\u540c\u79cd\u7c7b\u7684\u8868\u60c5\u6d88\u606f\uff0c\u5219\u9700\u8981\u7531\u7ec4\u4ef6\u63d0\u4f9b\u5176\u4ed6\u989d\u5916\u7684\u5b9e\u73b0\uff0c\u5e76\u5c3d\u53ef\u80fd\u63d0\u4f9b\u9488\u5bf9\u4e8e\u89e3\u6790 ",(0,l.kt)("inlineCode",{parentName:"p"},"Face")," \u7684\u517c\u5bb9\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val face: Face = Face(123.ID)\n"))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final Face face = new Face(Identifies.ID(123));\n")))))}u.isMDXComponent=!0},8209:(e,t,a)=>{a.d(t,{G:()=>o});var n=a(7294),l=a(7273);const i="light";const o=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),o=document.querySelector("html"),[m,r]=(0,n.useState)(!1),d=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??i;a!==i&&"dark"!==a&&(a=i);const n=a===i?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(o,a)),[a,m]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){r((e=>!e));break}}));return e.observe(o,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?l.Z.initialize({startOnLoad:!0,...a.mermaid,theme:d}):l.Z.initialize({startOnLoad:!0,theme:d}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),l.Z.contentLoaded())}),[a,d]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(l.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);