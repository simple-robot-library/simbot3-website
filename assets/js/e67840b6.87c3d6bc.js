"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[7529],{1610:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);const s="label_Yf5u";function l(e){let{type:t,href:a,children:l}=e;t=t||"primary";const i=n.createElement("span",{className:s},n.createElement("span",{className:`badge badge--${t}`},l));return null!=a&&a.length>0?n.createElement("a",{href:a},i):i}},9564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>m,toc:()=>d});var n=a(7462),s=(a(7294),a(3905)),l=(a(8209),a(1610),a(5488)),i=a(5162);a(814);const r={sidebar_position:17,title:"\u6d88\u606f"},p=void 0,m={unversionedId:"basic/messages",id:"basic/messages",title:"\u6d88\u606f",description:"\u65bd\u5de5\u4e2d",source:"@site/docs/basic/messages.md",sourceDirName:"basic",slug:"/basic/messages",permalink:"/docs/basic/messages",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/basic/messages.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1668179087,formattedLastUpdatedAt:"Nov 11, 2022",sidebarPosition:17,frontMatter:{sidebar_position:17,title:"\u6d88\u606f"},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u62e6\u622a",permalink:"/docs/basic/event-interception"},next:{title:"BOT\u914d\u7f6e\u6587\u4ef6",permalink:"/docs/basic/bot-config"}},o={},d=[{value:"\u6d88\u606f\u5bf9\u8c61",id:"\u6d88\u606f\u5bf9\u8c61",level:2},{value:"\u6784\u5efa\u6d88\u606f\u5bf9\u8c61",id:"\u6784\u5efa\u6d88\u606f\u5bf9\u8c61",level:3},{value:"\u6784\u5efa\u6d88\u606f\u94fe",id:"\u6784\u5efa\u6d88\u606f\u94fe",level:3},{value:"\u6d88\u606f\u94fe\u4f7f\u7528",id:"\u6d88\u606f\u94fe\u4f7f\u7528",level:2},{value:"\u904d\u5386\u6d88\u606f\u94fe",id:"\u904d\u5386\u6d88\u606f\u94fe",level:3},{value:"&quot;\u8ffd\u52a0&quot;\u5143\u7d20",id:"\u8ffd\u52a0\u5143\u7d20",level:3},{value:"\u6d88\u606f\u53d1\u9001",id:"\u6d88\u606f\u53d1\u9001",level:2},{value:"\u6d88\u606f\u56de\u6267",id:"\u6d88\u606f\u56de\u6267",level:2},{value:"\u5e8f\u5217\u5316",id:"\u5e8f\u5217\u5316",level:2}],u={toc:d};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"TODO",type:"danger"},(0,s.kt)("p",{parentName:"admonition"},"\u65bd\u5de5\u4e2d")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\u5728\u9605\u8bfb\u672c\u7ae0\u8282\u4e4b\u524d\uff0c\u4f60\u5e94\u5f53\u5df2\u7ecf\u4e86\u89e3\u8fc7\u4e86 ",(0,s.kt)("a",{parentName:"p",href:"../defition/message-overview"},(0,s.kt)("strong",{parentName:"a"},"\u6d88\u606f\u7684\u5b9a\u4e49")),"\u3002")),(0,s.kt)("p",null,"\u6d88\u606f\u662f\u5728\u4e8b\u4ef6\u5904\u7406\u8fc7\u7a0b\u4e2d\u4f60\u53ef\u80fd\u4f1a\u9891\u7e41\u63a5\u89e6\u7684\u4e1c\u897f\u3002"),(0,s.kt)("h2",{id:"\u6d88\u606f\u5bf9\u8c61"},"\u6d88\u606f\u5bf9\u8c61"),(0,s.kt)("p",null,"\u6d88\u606f\u5bf9\u8c61\u662f\u6307 ",(0,s.kt)("inlineCode",{parentName:"p"},"Message")," \u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u5b83\u4eec\u662f\u6d88\u606f\u5143\u7d20 (",(0,s.kt)("inlineCode",{parentName:"p"},"Message.Element"),") \u6709\u4e00\u4e2a\u6216\u591a\u4e2a",(0,s.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u53d8\u7684"),"\u6d88\u606f\u96c6\u3002"),(0,s.kt)("h3",{id:"\u6784\u5efa\u6d88\u606f\u5bf9\u8c61"},"\u6784\u5efa\u6d88\u606f\u5bf9\u8c61"),(0,s.kt)("p",null,"\u5bf9\u4e00\u4e2a\u6d88\u606f\u5bf9\u8c61\u7684\u6784\u5efa\u65b9\u5f0f\u53d6\u51b3\u4e8e\u6d88\u606f\u7c7b\u578b\u672c\u8eab\u3002\u4e3e\u51e0\u4e2a\u4f8b\u5b50\uff0c",(0,s.kt)("a",{parentName:"p",href:"../defition/message-overview/standard-message"},"\u6807\u51c6\u6d88\u606f\u7c7b\u578b"),"\n\u4e2d\u7684 ",(0,s.kt)("a",{parentName:"p",href:"../defition/message-overview/standard-message#text"},"\u6587\u672c\u6d88\u606f"),"\n\u7684\u6784\u5efa\u65b9\u5f0f\u662f\u4f7f\u7528\u5176\u9759\u6001\u5de5\u5382\u65b9\u6cd5 ",(0,s.kt)("inlineCode",{parentName:"p"},"Text.of")," \u6216 ",(0,s.kt)("inlineCode",{parentName:"p"},"Text.getEmptyText()"),"\uff1a"),(0,s.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'val text1: Text = "Hello".toText()\nval text2: Text = Text { "World" }\nval emptyText: Text = Text()\n'))),(0,s.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'final Text text = Text.of("Hello");\nfinal Text emptyText = Text.getEmptyText();\n')))),(0,s.kt)("p",null,"\u800c ",(0,s.kt)("a",{parentName:"p",href:"../defition/message-overview/standard-message#at"},"AT")," \u5219\u76f4\u63a5\u521b\u5efa\u4e00\u4e2a\u65b0\u5b9e\u4f8b\u5373\u53ef\uff1a"),(0,s.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"val at: At = At(123.ID)\nval atMember: At = At(event.author().id)\n"))),(0,s.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"final At at = new At(Identifies.ID(123));\nfinal At atMember = new At(event.getAuthor().getId());\n")))),(0,s.kt)("p",null,"\u5bf9\u4e8e ",(0,s.kt)("a",{parentName:"p",href:"../defition/message-overview/standard-message#atall"},"AT\u6240\u6709"),"\uff0c\u5176\u4f5c\u4e3a\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"object")," \u5219\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff1a"),(0,s.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"val atAll: AtAll = AtAll\n"))),(0,s.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"final AtAll atAll = AtAll.INSTANCE;\n")))),(0,s.kt)("p",null,"\u56e0\u6b64\uff0c\u5177\u4f53\u95ee\u9898\u5177\u4f53\u5206\u6790\uff0c\u4e0d\u7ba1\u662f",(0,s.kt)("a",{parentName:"p",href:"../defition/message-overview/standard-message"},"\u6807\u51c6\u6d88\u606f\u7c7b\u578b"),"\u8fd8\u662f\u7531\u7ec4\u4ef6\u6216\u7b2c\u4e09\u65b9\u63d0\u4f9b\u7684\u989d\u5916\u6d88\u606f\u7c7b\u578b\uff0c\n\u9605\u8bfb\u5176\u76f8\u5173\u6587\u6863\u6216\u6ce8\u91ca\u6765\u4e86\u89e3\u5982\u679c\u6784\u5efa\u5b83\u4eec\u3002"),(0,s.kt)("h3",{id:"\u6784\u5efa\u6d88\u606f\u94fe"},"\u6784\u5efa\u6d88\u606f\u94fe"),(0,s.kt)("p",null,"\u4e0a\u8ff0\u6211\u4eec\u8bb2\u7684\u662f\u4e00\u4e2a\u72ec\u7acb\u6d88\u606f\u5143\u7d20\uff08",(0,s.kt)("inlineCode",{parentName:"p"},"Message.Element"),"\uff09\u7684\u6784\u5efa\u65b9\u5f0f\u3002\u5c06\u591a\u4e2a\u6d88\u606f\u5143\u7d20\u201c\u7ec4\u5408\u201d\u8d77\u6765\uff0c\u4fbf\u5f62\u6210\u4e86",(0,s.kt)("strong",{parentName:"p"},"\u6d88\u606f\u94fe"),"\uff08",(0,s.kt)("inlineCode",{parentName:"p"},"Messages"),"\uff09\u3002"),(0,s.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"\u5728Kotlin\u4e2d\uff0c\u5408\u5e76\u6d88\u606f\u5143\u7d20\u4e3a\u4e00\u4e2a\u6d88\u606f\u94fe\u7684\u6700\u57fa\u672c\u65b9\u5f0f\u4fbf\u662f\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"plus")," \u64cd\u4f5c\u7b26\u76f4\u63a5\u8fdb\u884c\u62fc\u63a5\u3002\u4e0d\u8fc7\u9700\u8981\u6ce8\u610f\uff0c\u524d\u6587\u6211\u4eec\u63d0\u5230\u8fc7\u6d88\u606f\u662f",(0,s.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u53d8"),"\u7684\uff0c\u6d88\u606f\u94fe\u4e5f\u662f\uff0c\n\u56e0\u6b64\u901a\u8fc7\u64cd\u4f5c\u7b26\u5408\u5e76\u540e\u5c06\u4f1a\u5f97\u5230\u4e00\u4e2a",(0,s.kt)("strong",{parentName:"p"},"\u65b0\u7684\u6d88\u606f\uff08\u94fe\uff09"),"\u3002"),(0,s.kt)("p",null,"\u4ee5\u4e00\u4e2a\u666e\u901a\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"\u6587\u5b57 + AT")," \u4e3a\u4f8b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'val messages = "\u6587\u5b57".toText() + At(123.ID)\n')),(0,s.kt)("p",null,"\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c06\u4e00\u4e2a\u5305\u542b\u4e86\u591a\u4e2a\u6d88\u606f\u5143\u7d20\u7684\u96c6\u5408\u8f6c\u5316\u4e3a\u4e00\u4e2a\u6d88\u606f\u94fe\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'val messages = listOf("\u6587\u5b57".toText(), At(123.ID), AtAll).toMessages()\n'))),(0,s.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,s.kt)("p",null,"\u5728Java\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"Messages.toMessages(...)")," \u5c06\u591a\u6761\u6d88\u606f\u5143\u7d20\u5408\u5e76\u4e3a\u4e00\u4e2a\u6d88\u606f\u94fe\u3002"),(0,s.kt)("p",null,"\u4ee5\u4e00\u4e2a\u666e\u901a\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"\u6587\u5b57 + AT")," \u4e3a\u4f8b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'final Messages messages = Messages.toMessages(Text.of("\u6587\u5b57"), new At(Identifies.ID(123)));\n')))),(0,s.kt)("p",null,"\u9664\u4e86\u76f4\u63a5\u8f6c\u5316\uff0c\u6838\u5fc3\u5e93\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7528\u4e8e\u6784\u5efa\u6d88\u606f\u94fe\u7684\u6784\u5efa\u5668 ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageBuilder"),"\u3002"),(0,s.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"\u5728Kotlin\u4e2d\uff0c\u76f4\u63a5\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"buildMessages")," \u6765\u901a\u8fc7\u6784\u5efa\u5668\u6784\u5efa\u4f60\u7684\u6d88\u606f\u94fe\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'val messages = buildMessages {\n    // \u63d0\u4f9b\u4e0e\u6807\u51c6\u6d88\u606f\u7c7b\u578b\u4e2d\u5bf9\u5e94\u7684API\n    at(123.ID)\n    atAll()\n    text("\u6587\u672c")\n    \n    // \u901a\u8fc7 `unaryPlus` \u64cd\u4f5c\u7b26\u76f4\u63a5\u6dfb\u52a0\u4e00\u4e2a\u4efb\u610f\u7684 `Message.Element` \u5b9e\u4f8b\u6216\u7eaf\u6587\u672c\n    +"\u8fd8\u662f\u6587\u672c"\n    +At(456.ID)\n    \n    // \u6216\u8005\u4f7f\u7528\u4f20\u7edf\u7684 append. \u6548\u679c\u4e0e `unaryPlus` \u64cd\u4f5c\u7b26\u4e00\u81f4\u3002\n    append(AtAll)\n}\n'))),(0,s.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,s.kt)("p",null,"\u5728Java\u4e2d\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u6784\u5efa\u5b83\u5e76\u4f7f\u7528\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'final MessagesBuilder messagesBuilder = new MessagesBuilder();\n\nfinal Messages messages = messagesBuilder\n        // \u63d0\u4f9b\u4e0e\u6807\u51c6\u6d88\u606f\u7c7b\u578b\u4e2d\u5bf9\u5e94\u7684API\n        .at(Identifies.ID(123))\n        .atAll()\n        .text("\u6587\u672c")\n        // \u901a\u8fc7append\u8ffd\u52a0\u4efb\u610f Message.Element \u5b9e\u4f8b\u6216\u7eaf\u6587\u672c\n        .append("\u8fd8\u662f\u6587\u672c")\n        .append(new At(Identifies.ID(456)))\n        .append(AtAll.INSTANCE, new Face(Identifies.ID(114)))\n        // \u6784\u5efa\u7ed3\u679c\n        .build();\n')))),(0,s.kt)("h2",{id:"\u6d88\u606f\u94fe\u4f7f\u7528"},"\u6d88\u606f\u94fe\u4f7f\u7528"),(0,s.kt)("p",null,"\u4f60\u5df2\u7ecf\u4e86\u89e3\u4e86\u6d88\u606f\u94fe\u5982\u4f55\u88ab\u6784\u5efa\u51fa\u6765\uff0c\u90a3\u4e48\u63a5\u4e0b\u6765\u4f60\u53ef\u80fd\u9700\u8981\u4e86\u89e3\u5982\u4f55\u4f7f\u7528\u8fd9\u4e2a\u6d88\u606f\u94fe\u3002"),(0,s.kt)("h3",{id:"\u904d\u5386\u6d88\u606f\u94fe"},"\u904d\u5386\u6d88\u606f\u94fe"),(0,s.kt)("p",null,"\u6d88\u606f\u94fe ",(0,s.kt)("inlineCode",{parentName:"p"},"Messages")," \u5b9e\u73b0\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"List")," \u63a5\u53e3\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u5c06\u5176\u89c6\u4e3a\u4e00\u4e2a\u666e\u901a\u7684",(0,s.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u53d8"),"\u5217\u8868\u4f7f\u7528\u3002"),(0,s.kt)("admonition",{title:"\u66f4\u9ad8\u7684...",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"Messages")," \u672a\u6765\u6709\u53ef\u80fd\u4f1a\u901a\u8fc7\u5b9e\u73b0\u4e00\u4e2a",(0,s.kt)("strong",{parentName:"p"},"\u7c7b\u4f3c\u4e8e")," ",(0,s.kt)("inlineCode",{parentName:"p"},"List")," \u7684\u4e0d\u53ef\u53d8\u89c6\u56fe\u7c7b\u578b\u6765\u4ee3\u66ff ",(0,s.kt)("inlineCode",{parentName:"p"},"List")," \u7684\u5b9e\u73b0\uff0c\u56e0\u6b64\u5c3d\u53ef\u80fd\u907f\u514d\u76f4\u63a5\u5c06 ",(0,s.kt)("inlineCode",{parentName:"p"},"Messages")," \u4f5c\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"List")," \u4f7f\u7528\u3002\n\u5c3d\u91cf\u4ec5\u4e14\u5c11\u91cf\u5730\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"get(int)")," \u3001",(0,s.kt)("inlineCode",{parentName:"p"},"iterator()")," \u7b49\u57fa\u7840API\uff0c\u907f\u514d\u672a\u6765\u53ef\u80fd\u51fa\u73b0\u7684\u4e0d\u517c\u5bb9\u7ef4\u62a4\u95ee\u9898\u3002")),(0,s.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"val messages: Messages = ...\n\nfor (element in messages) {\n    // \u904d\u5386\u6d88\u606f\u94fe\n}\n\n// \u7d22\u5f15\u8bbf\u95ee\nval secondMessage: Message.Element<*> = messages[1]\n\n// \u6d88\u606f\u7c7b\u578b\u8bbf\u95ee\nval ats: List<At> = messages[At]\n"))),(0,s.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"final Messages messages = ...;\n\nfor (Message.Element<?> element : messages) {\n    // \u904d\u5386\u6d88\u606f\u94fe\n}\n\n// \u7d22\u5f15\u8bbf\u95ee\nfinal Message.Element<?> secondElement = messages.get(1);\n\n// \u6d88\u606f\u7c7b\u578b\u8bbf\u95ee\nfinal List<At> ats = messages.get(At.Key);\n")))),(0,s.kt)("h3",{id:"\u8ffd\u52a0\u5143\u7d20"},'"\u8ffd\u52a0"\u5143\u7d20'),(0,s.kt)("p",null,"\u4e0a\u6587\u63d0\u5230\u8fc7\uff0c\u6d88\u606f\u662f",(0,s.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u53d8"),"\u7684\uff0c\u56e0\u6b64\u5982\u679c\u4f60\u60f3\u8981\u5411\u4e00\u4e2a\u6d88\u606f\u94fe\u4e2d",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},'"\u8ffd\u52a0"')),"\u4e00\u4e2a\u6d88\u606f\uff0c\u5176\u5b9e\u4f60\u9700\u8981\u7684\u662f\u5f97\u5230\u4e00\u4e2a\u589e\u52a0\u4e86\u76ee\u6807\u6d88\u606f\u5143\u7d20\u7684\u65b0\u6d88\u606f\u94fe\u3002"),(0,s.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"val messages: Messages = ...\n\n// \u4f7f\u7528 plus \u64cd\u4f5c\u7b26\u8ffd\u52a0\u5e76\u5f97\u5230\u4e00\u4e2a\u65b0\u7684\u6d88\u606f\u94fe\u3002\nval newMessages: Messages = messages + AtAll\n"))),(0,s.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,s.kt)("admonition",{title:"\u771f\u7684\u4e0d\u53ef\u53d8",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"\u5728 Java \u4e2d\u4f60\u9700\u8981\u683c\u5916\u6ce8\u610f\uff0c\u867d\u7136\u6d88\u606f\u94fe\u5b9e\u73b0\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"List")," \u63a5\u53e3\uff0c\u4f46\u662f\u5b83\u672c\u8d28\u4e0a\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\n\u56e0\u6b64\u4f7f\u7528\u4efb\u4f55\u4fee\u6539API\uff08\u4f8b\u5982 ",(0,s.kt)("inlineCode",{parentName:"p"},"add"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"remove")," \u7b49\uff09\u90fd\u4f1a\u5f15\u53d1\u5f02\u5e38\u3002"),(0,s.kt)("p",{parentName:"admonition"},"\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u4e0a\u6587\u6211\u4eec\u63d0\u5230\u4f1a\u8003\u8651\u6539\u53d8\u5b9e\u73b0\u7684\u7c7b\u578b\uff0c\u5c31\u662f\u4e3a\u4e86\u964d\u4f4e\u8bef\u5f15\u53d1\u6b64\u95ee\u9898\u7684\u53ef\u80fd\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"final Messages messages = Messages.messages();\n\n// \u4f7f\u7528 plus \u8ffd\u52a0\u5e76\u5f97\u5230\u4e00\u4e2a\u65b0\u7684\u6d88\u606f\u94fe\u3002\n// \u6ce8\u610f\uff1a\u4e0d\u8981\u4f7f\u7528 .add(...)\uff0c\u8fd9\u5c06\u4f1a\u5f15\u53d1\u5f02\u5e38\u3002\nfinal Messages newMessages = messages.plus(AtAll.INSTANCE);\n")))),(0,s.kt)("h2",{id:"\u6d88\u606f\u53d1\u9001"},"\u6d88\u606f\u53d1\u9001"),(0,s.kt)("p",null,"\u5927\u90e8\u5206\u6d88\u606f\u7684\u53d1\u9001\u80fd\u529b\u7531 ",(0,s.kt)("a",{parentName:"p",href:"../defition/ability-support#sendsupport"},"SendSupport")," \u6216 ",(0,s.kt)("a",{parentName:"p",href:"../defition/ability-support#replysupport"},"ReplySupport")," \u63d0\u4f9b\u3002"),(0,s.kt)("p",null,"TODO"),(0,s.kt)("h2",{id:"\u6d88\u606f\u56de\u6267"},"\u6d88\u606f\u56de\u6267"),(0,s.kt)("p",null,"TODO"),(0,s.kt)("h2",{id:"\u5e8f\u5217\u5316"},"\u5e8f\u5217\u5316"),(0,s.kt)("p",null,"TODO"))}k.isMDXComponent=!0},8209:(e,t,a)=>{a.d(t,{G:()=>i});var n=a(7294),s=a(7273);const l="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[r,p]=(0,n.useState)(!1),m=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??l;a!==l&&"dark"!==a&&(a=l);const n=a===l?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(i,a)),[a,r]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){p((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?s.Z.initialize({startOnLoad:!0,...a.mermaid,theme:m}):s.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),s.Z.contentLoaded())}),[a,m]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(s.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);