"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[924],{3864:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var t=a(85893),l=a(11151),s=a(74866),i=a(85162);const r={sidebar_position:10,title:"\u6807\u51c6\u6d88\u606f",tags:["\u6d88\u606f"]},o=void 0,c={id:"definition/message-overview/standard-message",title:"\u6807\u51c6\u6d88\u606f",description:"\u9488\u5bf9\u4e00\u4e9b\u5341\u5206\u5e38\u89c1\u7684\u6d88\u606f\u7c7b\u578b\uff0csimbot-api \u63d0\u4f9b\u4e86\u4e00\u4e9b\u6807\u51c6\u5b9a\u4e49\u6216\u5b9e\u73b0\u3002",source:"@site/docs/definition/message-overview/standard-message.md",sourceDirName:"definition/message-overview",slug:"/definition/message-overview/standard-message",permalink:"/docs/definition/message-overview/standard-message",draft:!1,unlisted:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/definition/message-overview/standard-message.md",tags:[{label:"\u6d88\u606f",permalink:"/docs/tags/\u6d88\u606f"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1703923363,formattedLastUpdatedAt:"2023\u5e7412\u670830\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u6807\u51c6\u6d88\u606f",tags:["\u6d88\u606f"]},sidebar:"docs",previous:{title:"\u6d88\u606f\u6982\u8ff0",permalink:"/docs/definition/message-overview/"},next:{title:"\u5e8f\u5217\u5316",permalink:"/docs/definition/message-overview/message-serialization"}},d={},u=[{value:"PlainText",id:"plaintext",level:2},{value:"Text",id:"text",level:2},{value:"At",id:"at",level:2},{value:"AtAll",id:"atall",level:2},{value:"Image",id:"image",level:2},{value:"\u8d44\u6e90\u56fe\u7247",id:"\u8d44\u6e90\u56fe\u7247",level:3},{value:"ID\u56fe\u7247",id:"id\u56fe\u7247",level:3},{value:"Emoji",id:"emoji",level:2},{value:"Face",id:"face",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u9488\u5bf9\u4e00\u4e9b\u5341\u5206\u5e38\u89c1\u7684\u6d88\u606f\u7c7b\u578b\uff0c",(0,t.jsx)(n.code,{children:"simbot-api"})," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u6807\u51c6\u5b9a\u4e49\u6216\u5b9e\u73b0\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"plaintext",children:"PlainText"}),"\n",(0,t.jsxs)(n.p,{children:["\u6587\u672c\u662f\u6700\u5e38\u89c1\u7684\u6d88\u606f\u7c7b\u578b\u3002PlainText\u662f\u9488\u5bf9\u4e8e\u7eaf\u6587\u672c\u6d88\u606f\u6240\u63d0\u4f9b\u7684\u62bd\u8c61\u7c7b\u578b\u3002\u6838\u5fc3\u63d0\u4f9b\u4e86\u5b83\u6700\u57fa\u7840\u7684\u5b9e\u73b0\uff1a",(0,t.jsx)(n.a,{href:"#text",children:"Text"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"text",children:"Text"}),"\n",(0,t.jsx)(n.p,{children:"plainText\u7684\u57fa\u7840\u5b9e\u73b0\uff0c\u7528\u6765\u63cf\u8ff0\u4e00\u4e2a\u6700\u57fa\u7840\u7684\u7eaf\u6587\u672c\u6d88\u606f\u3002"}),"\n",(0,t.jsxs)(s.Z,{groupId:"code",children:[(0,t.jsx)(i.Z,{value:"Kotlin",default:!0,attributes:{"data-value":"Kotlin"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val text1: Text = "Hello".toText()\nval text2: Text = Text { "World" }\nval emptyText: Text = Text()\n'})})}),(0,t.jsx)(i.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'final Text text = Text.of("Hello");\nfinal Text emptyText = Text.getEmptyText();\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"at",children:"At"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AT"}),"\uff08\u6216\u8005\u79f0\u4e4b\u4e3a ",(0,t.jsx)(n.em,{children:"\u827e\u7279"}),"\u3001",(0,t.jsx)(n.code,{children:"@"})," \uff09\u662f\u804a\u5929\u793e\u4ea4\u8f6f\u4ef6\u5e73\u53f0\u5341\u5206\u5e38\u89c1\u7684\u4e00\u79cd\u6d88\u606f\u7c7b\u578b\uff0c\u5176\u4ee3\u8868\u5bf9\u67d0\u4eba\u67d0\u4e8b\u8fdb\u884c\u9488\u5bf9\u6027\u7684",(0,t.jsx)(n.strong,{children:"\u63d0\u9192/\u901a\u77e5"}),"\u6d88\u606f\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"At"})," \u7531\u6838\u5fc3\u63d0\u4f9b\u4e86\u57fa\u7840\u7684\u6570\u636e\u7c7b\uff08 ",(0,t.jsx)(n.code,{children:"data class"})," \uff09\u5b9e\u73b0\uff0c\u57fa\u672c\u53ef\u4ee5\u6ee1\u8db3\u9700\u8981\u3002\n\u5982\u679c\u67d0\u7ec4\u4ef6\u5b58\u5728\u8f83\u4e3a\u590d\u6742\u3001\u65e0\u6cd5\u7531 ",(0,t.jsx)(n.code,{children:"At"})," \u6ee1\u8db3\u7684\u901a\u77e5\u6d88\u606f\u7c7b\u578b\uff0c\u5219\u9700\u8981\u7531\u5bf9\u5e94\u7ec4\u4ef6\u81ea\u884c\u5b9e\u73b0\u53e6\u5916\u7684\u6d88\u606f\uff0c\u5e76\u5c3d\u53ef\u80fd\u63d0\u4f9b\u9488\u5bf9\u4e8e\u89e3\u6790 ",(0,t.jsx)(n.code,{children:"At"})," \u7684\u517c\u5bb9\u3002"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"code",children:[(0,t.jsx)(i.Z,{value:"Kotlin",default:!0,attributes:{"data-value":"Kotlin"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val at: At = At(123.ID)\nval atMember: At = At(event.author().id)\n"})})}),(0,t.jsx)(i.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"final At at = new At(Identifies.ID(123));\nfinal At atMember = new At(event.getAuthor().getId());\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"atall",children:"AtAll"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e66\u63a5\u4e0a\u6587\u7684 ",(0,t.jsx)(n.code,{children:"At"}),"\uff0c\u5bf9\u4e8e\u5927\u591a\u6570\u804a\u5929\u793e\u4ea4\u8f6f\u4ef6\u6765\u8bb2\uff0c",(0,t.jsx)(n.code,{children:"AtAll"})," \u4e0e ",(0,t.jsx)(n.code,{children:"At"})," \u540c\u6837\u5e38\u89c1\u3002",(0,t.jsx)(n.code,{children:"AtAll"})," \u7684\u542b\u4e49\u4e0e ",(0,t.jsx)(n.code,{children:"At"})," \u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7 ",(0,t.jsx)(n.code,{children:"At"})," \u662f\u9488\u5bf9\u4e00\u4e2a\u4eba/\u4e8b\u7269\uff0c\u4f46\u662f ",(0,t.jsx)(n.code,{children:"AtAll"})," \u662f\u9488\u5bf9\u6240\u6709\u3002\n\u6838\u5fc3\u63d0\u4f9b\u7684 ",(0,t.jsx)(n.code,{children:"AtAll"})," \u662f ",(0,t.jsx)(n.code,{children:"object"})," \u7c7b\u578b\u7684\u5355\u4f8b\u3002\n\u5047\u5982\u67d0\u7ec4\u4ef6\u5b58\u5728\u66f4\u4e3a\u7ec6\u7c92\u5ea6\u7684\u201c\u590d\u6570At\u201d\uff0c\u90a3\u4e48\u9700\u8981\u63d0\u4f9b\u989d\u5916\u7684\u5b9e\u73b0\u7c7b\u578b\uff0c\u5e76\u5c3d\u53ef\u80fd\u63d0\u4f9b\u9488\u5bf9\u4e8e\u89e3\u6790 ",(0,t.jsx)(n.code,{children:"AtAll"})," \u7684\u517c\u5bb9\u3002"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"code",children:[(0,t.jsx)(i.Z,{value:"Kotlin",default:!0,attributes:{"data-value":"Kotlin"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val atAll: AtAll = AtAll\n"})})}),(0,t.jsx)(i.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"final AtAll atAll = AtAll.INSTANCE;\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"image",children:"Image"}),"\n",(0,t.jsxs)(n.p,{children:["\u56fe\u7247\u7c7b\u578b\u4e5f\u662f\u975e\u5e38\u5e38\u89c1\u7684\u7c7b\u578b\u4e4b\u4e00\uff0c\u4ee3\u8868\u4e00\u4e2a\u4efb\u610f\u7684\u56fe\u7247\u6d88\u606f\u3002\u6838\u5fc3\u6240\u63d0\u4f9b\u7684 ",(0,t.jsx)(n.code,{children:"Image"})," \u7c7b\u578b\u4e3a\u62bd\u8c61\u7c7b\u578b\uff0c\u65e0\u6cd5\u76f4\u63a5\u6784\u5efa\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u56fe\u7247\u6765\u8bb2\uff0c\u4ed6\u4eec\u901a\u5e38\u90fd\u9700\u8981\u63d0\u4f9b\u8d44\u6e90\uff08\u4f8b\u5982\u7f51\u7edc\u8d44\u6e90\u3001\u672c\u5730\u6587\u4ef6\u8d44\u6e90\uff09\u540e\u4e0a\u4f20\u7684\u76ee\u6807\u670d\u52a1\u5668\uff0c\n\u53c8\u6216\u662f\u6307\u5b9a\u901a\u8fc7\u4e00\u4e2a\u6765\u81ea\u670d\u52a1\u5668\u7684\u6307\u5b9aID\uff0c\u8fdb\u800c\u518d\u53d1\u9001\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u8d44\u6e90\u56fe\u7247",children:"\u8d44\u6e90\u56fe\u7247"}),"\n",(0,t.jsxs)(n.p,{children:["\u6838\u5fc3\u5e93\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"Image"})," \u7684\u6807\u51c6\u5b9e\u73b0\u7c7b\u578b\uff1a",(0,t.jsx)(n.code,{children:"ResourceImage"}),"\uff0c\u7528\u4e8e\u63d0\u4f9b\u4e00\u4e2a\u8d44\u6e90\u5bf9\u8c61\u5e76\u4f5c\u4e3a\u4f60\u60f3\u8981\u53d1\u9001\u7684\u56fe\u7247\u8d44\u6e90\u3002"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"code",children:[(0,t.jsx)(i.Z,{value:"Kotlin",default:!0,attributes:{"data-value":"Kotlin"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val image = Path("xxx/image.jpg").toResource().toImage()\n'})})}),(0,t.jsx)(i.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Path path = Paths.get("xxx/image.jpg");\nPathResource resource = Resource.of(path);\nResourceImage image = Image.of(resource);\n'})})})]}),"\n",(0,t.jsx)(n.admonition,{title:"\u5c0f\u5fc3",type:"caution",children:(0,t.jsxs)(n.p,{children:["\u76f4\u63a5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"ResourceImage"})," \u4f5c\u4e3a\u53d1\u9001\u7528\u7684\u56fe\u7247\u5bf9\u8c61\u65f6\uff0c\u4f60\u9700\u8981\u6ce8\u610f\uff1a\u6b64\u56fe\u7247\u5bf9\u8c61\u4f1a\u5728",(0,t.jsx)(n.strong,{children:"\u6bcf\u6b21"}),"\u88ab\u53d1\u9001\u65f6\u53d1\u751f\u4e00\u6b21\u8d44\u6e90\u8bfb\u53d6\u3002\n\u56e0\u6b64\u5982\u679c\u8fd9\u4e2a\u56fe\u7247\u8d44\u6e90\u4f1a\u88ab",(0,t.jsx)(n.strong,{children:"\u9891\u7e41"}),"\u4f7f\u7528\u7684\u8bdd\uff0c\u4f60\u9700\u8981\u8003\u8651\u6587\u4ef6IO\u4e0e\u6027\u80fd\u95ee\u9898\u3002"]})}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u4e86\u907f\u514d\u9891\u7e41\u7684IO\u64cd\u4f5c\uff0c\u6216\u8bb8\u4f60\u53ef\u4ee5\u63d0\u524d\u5c06\u56fe\u7247\u6587\u4ef6\u8bfb\u53d6\u4e3a\u5b57\u8282\u6570\u7ec4\u3002"}),"\n",(0,t.jsxs)(s.Z,{groupId:"code",children:[(0,t.jsx)(i.Z,{value:"Kotlin",default:!0,attributes:{"data-value":"Kotlin"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val image = Path("xxx/image.jpg").let {\n    it.readBytes().toResource(it.name).toImage()\n}\n'})})}),(0,t.jsx)(i.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Path path = Paths.get("xxx/image.jpg");\nbyte[] bytes = Files.readAllBytes(path);\nByteArrayResource resource = Resource.of(bytes, path.toString());\nResourceImage image = Image.of(resource);\n'})})})]}),"\n",(0,t.jsx)(n.admonition,{title:"\u4e00\u6ce2\u672a\u5e73",type:"caution",children:(0,t.jsx)(n.p,{children:"\u8fd9\u6837\u7684\u786e\u4f1a\u907f\u514d\u66f4\u591a\u7684IO\u64cd\u4f5c\uff0c\u4f46\u662f\u6211\u60f3\u4f60\u5e94\u5f53\u660e\u767d\uff1a\u8fd9\u4f1a\u5360\u7528\u5927\u91cf\u7684\u5185\u5b58\u8d44\u6e90\u3002"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u5404\u65b9\u6848\u4e2d\u51fa\u73b0\u7684\u95ee\u9898\uff0c\u6700\u597d\u7684\u89e3\u51b3\u529e\u6cd5\u5373\u4e3a\u5148\u5c06\u56fe\u7247\u4e0a\u4f20\u5230\u670d\u52a1\u5668\uff0c\u7136\u540e\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u5df2\u7ecf\u4e0a\u4f20\u7684\u56fe\u7247\u8d44\u6e90\u5bf9\u8c61\u3002\n\u90a3\u4e48\u5982\u4f55\u4e0a\u4f20\u56fe\u7247\u5230\u670d\u52a1\u5668\u5462\uff1f"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u5b9e\u9645\u4e0a\uff0c\u6838\u5fc3\u6a21\u5757\u5e76\u6ca1\u6709\u4e3a\u8fd9\u4e2a\u884c\u4e3a\u63d0\u4f9b\u89c4\u8303\u64cd\u4f5c"}),'\u3002"\u5c06\u56fe\u7247\u4e0a\u4f20\u5230\u670d\u52a1\u5668"\uff08\u6216\u8005\u8bf4"\u5f97\u5230\u4e00\u4e2a\u53ef\u590d\u7528\u7684\u9ad8\u7ea7\u56fe\u7247\u5bf9\u8c61"\uff09\u7684\u65b9\u5f0f\u4e0e\u5f62\u5f0f\u5b8c\u5168',(0,t.jsx)(n.strong,{children:"\u7531\u7ec4\u4ef6\u81ea\u884c\u51b3\u5b9a"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5 ",(0,t.jsx)(n.a,{href:"https://github.com/simple-robot/simbot-component-mirai",children:"mirai\u7ec4\u4ef6"})," \u4e3a\u4f8b\uff0c\n\u5728mirai\u4e2d\u4e0a\u4f20\u56fe\u7247\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u5177\u4f53\u7684\u76ee\u6807\u5bf9\u8c61\uff08\u4f8b\u5982\u7fa4\u5bf9\u8c61\u3001\u597d\u53cb\u5bf9\u8c61\u7b49\uff09\uff0c\u56e0\u6b64\n\u5c06\u56fe\u7247\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u65b9\u5f0f\u662f\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"MiraiSendOnlyImage.upload"})," \u5b9e\u73b0\u7684\uff1a"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"code",children:[(0,t.jsx)(i.Z,{value:"Kotlin",default:!0,attributes:{"data-value":"Kotlin"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@Listener\nsuspend fun onEvent(event: MiraiGroupMessageEvent) {\n    val sendOnlyImage = MiraiSendOnlyImage.of(Path("xxx/image.jpg").toResource())\n    val uploadedImage = sendOnlyImage.upload(event.group())\n}\n'})})}),(0,t.jsx)(i.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Listener\npublic void onEvent(MiraiGroupMessageEvent event) {\n    Path path = Paths.get("xxx/image.jpg");\n    MiraiSendOnlyImage sendOnlyImage = MiraiSendOnlyImage.of(Resource.of(path));\n    sendOnlyImage.uploadBlocking(event.getGroup());\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u800c\u4ee5 ",(0,t.jsx)(n.a,{href:"https://github.com/simple-robot/simbot-component-kook",children:"Kook\u7ec4\u4ef6"})," \u4e3a\u4f8b\uff0c\n\u5728 Kook \u4e2d\u56fe\u7247\u8d44\u6e90\u9700\u8981\u63d0\u524d\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"https://developer.kookapp.cn/doc/http/asset",children:"\u5a92\u4f53\u6a21\u5757"}),"\n\u4e0a\u4f20\u4e3a\u5a92\u4f53\u8d44\u6e90\uff0c\u7136\u540e\u518d\u4ee5\u4e0a\u4f20\u540e\u7684\u94fe\u63a5\u5730\u5740\u4e3aID\u8fdb\u884c\u53d1\u9001\u3002\u8fd9\u4e00\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"KookComponentBot.uploadAssetImage"}),"\n\u6765\u5b8c\u6210\uff1a"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"code",children:[(0,t.jsx)(i.Z,{value:"Kotlin",default:!0,attributes:{"data-value":"Kotlin"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@Listener\nsuspend fun onEvent(event: KookMessageEvent.Channel) {\n    val image = event.bot.uploadAssetImage(Path("xxx/image.jpg").toResource())\n}\n'})})}),(0,t.jsx)(i.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Listener\npublic void onEvent(KookMessageEvent.Channel event) {\n    Path path = Paths.get("xxx/image.jpg");\n    event.getBot().uploadAssetImageBlocking(Resource.of(path));\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u53d1\u73b0\uff0c\u4e0a\u8ff0\u5404\u7ec4\u4ef6\u793a\u4f8b\u4e2d\u76d1\u542c\u7684\u4e8b\u4ef6\u7c7b\u578b\u90fd\u662f\u4e00\u4e9b\u7ec4\u4ef6\u4e2d\u63d0\u4f9b\u7684",(0,t.jsx)(n.strong,{children:"\u4e13\u5c5e\u7c7b\u578b"}),"\uff08\u6bd4\u5982mirai\u7ec4\u4ef6\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"MiraiGroupMessageEvent"})," \u6216 ",(0,t.jsx)(n.code,{children:"KookMessageEvent.Channel"})," \u7b49\uff09\uff0c\n\u56e0\u4e3a\u8fd9\u4e9bAPI\u90fd\u662f\u7531\u7ec4\u4ef6\u6240\u63d0\u4f9b\u7684\u989d\u5916API\u3002\u5982\u679c\u4f60\u7684\u4e8b\u4ef6\u76d1\u542c\u4f7f\u7528\u7684\u662f\u6807\u51c6API\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u9700\u8981\u591a\u4e00\u6b65\u7c7b\u578b\u5224\u65ad\u7684\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsxs)(n.admonition,{title:"\u66f4\u591a\u7684\u6807\u51c6API",type:"info",children:[(0,t.jsxs)(n.p,{children:["\u8fd9\u6ca1\u8bf4\u5e76\u4e0d\u662f\u4ee3\u8868\u4f7f\u7528\u6807\u51c6API\u4e0d\u597d\uff0c\u76f8\u53cd\u5730\uff0c\u6211\u4eec\u4e00\u76f4\u5efa\u8bae\u5f00\u53d1\u8005\u5c3d\u53ef\u80fd\u5730\u53bb\u4f7f\u7528\u6807\u51c6API\uff08\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"GroupMessageEvent"}),"\uff09\uff0c\u5e76\u53ea\u5728\u8f83\u5c0f\u8303\u56f4\u5185\n\u4f7f\u7528\u9488\u5bf9\u7ec4\u4ef6\u7684\u989d\u5916API\u3002\u66f4\u591a\u7684\u4f7f\u7528\u6807\u51c6API\u53ef\u4ee5\u8ba9\u4f60\u7684\u6574\u4f53\u4ee3\u7801\u62e5\u6709\u66f4\u9ad8\u7684\u517c\u5bb9\u6027\u3002"]}),(0,t.jsx)(n.p,{children:"\u5f53\u4f60\u9700\u8981\u589e\u52a0\u4e00\u4e2a\u534f\u540c\u7684\u7ec4\u4ef6\u6216\u8fc1\u79fb\u5f53\u524d\u7a0b\u5e8f\u5230\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u4e0a\u65f6\uff0c\u66f4\u591a\u7684\u4f7f\u7528\u6807\u51c6API\u4f1a\u8ba9\u8fd9\u4e2a\u8fc7\u7a0b\u7684\u6210\u672c\u5927\u5927\u964d\u4f4e\u3002"}),(0,t.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u51e1\u4e8b\u90fd\u8981\u8fa9\u8bc1\u7684\u53bb\u770b\u5f85\u3002\u5982\u679c\u4f60\u5f88\u660e\u786e\u4f60\u7684\u7ec4\u4ef6\u4f7f\u7528\u5e76\u4e14\u4e0d\u4f1a\u51fa\u73b0\u4e0a\u8ff0\u90a3\u4e9b\u53ef\u80fd\uff0c\u653e\u624b\u53bb\u505a\u4e5f\u4e0d\u4f1a\u6709\u4ec0\u4e48\u5927\u95ee\u9898\u3002"})]}),"\n",(0,t.jsx)(n.p,{children:"\u603b\u800c\u8a00\u4e4b\uff0c\u4e0d\u540c\u7684\u7ec4\u4ef6\u4e2d\u5bf9\u4e8e\u4e00\u4e2a\u5177\u4f53\u7684\u3001\u53ef\u590d\u7528\u7684\u56fe\u7247\u5bf9\u8c61\u7684\u5b9a\u4e49\u4e0e\u83b7\u53d6\u65b9\u5f0f\u90fd\u662f\u4e0d\u540c\u7684\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u6839\u636e\u4f60\u6240\u4f7f\u7528\u7684\u5177\u4f53\u7ec4\u4ef6\u6765\u9009\u62e9\u6700\u4e3a\u5408\u9002\u7684\u65b9\u6848\u3002"}),"\n",(0,t.jsxs)(n.admonition,{title:"\u6216\u8bb8\u80fd\u66f4\u597d?",type:"note",children:[(0,t.jsx)(n.p,{children:"\u6211\u4eec\u672a\u6765\u53ef\u80fd\u4f1a\u7ee7\u7eed\u8c03\u6574\u3001\u4f18\u5316\u76f8\u5173\u7684API\uff0c\u8bf4\u4e0d\u5b9a\u672a\u6765\u7684\u7248\u672c\u4f1a\u6709\u65e2\u80fd\u591f\u5728\u7ec4\u4ef6\u95f4\u901a\u7528\u53c8\u4e0d\u4f1a\u6709\u8fc7\u591a\u635f\u8017\u7684\u6807\u51c6API\u8bde\u751f\u3002"}),(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u6709\u597d\u7684\u60f3\u6cd5\u6216\u8005\u601d\u8def\uff0c\u975e\u5e38\u6b22\u8fce\u6765",(0,t.jsx)(n.a,{href:"https://github.com/orgs/simple-robot/discussions",children:"\u793e\u533a"}),"\u70b9\u9192\u6211\u4eec\uff01"]})]}),"\n",(0,t.jsx)(n.h3,{id:"id\u56fe\u7247",children:"ID\u56fe\u7247"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u6587\u4e2d\u4ecb\u7ecd\u7684\u662f\u901a\u8fc7\u4e00\u4e2a\u8d44\u6e90\u53d1\u9001\u56fe\u7247\uff0c\u800c\u5728\u8fd9\u91cc\u5219\u4f1a\u7b80\u5355\u8bb2\u8ff0\u5982\u4f55\u76f4\u63a5\u901a\u8fc7\u4e00\u4e2a\u5177\u4f53\u7684ID\u6784\u5efa\u56fe\u7247\u6d88\u606f\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u5177\u4f53\u7684\u56fe\u7247\u5bf9\u8c61\uff08\u4e00\u822c\u6307\u4ece\u670d\u52a1\u5668\u63a5\u6536\u5230\u7684\u56fe\u7247\u3001\u5df2\u7ecf\u4e0a\u4f20\u8fc7\u7684\u56fe\u7247\u7b49\uff09\u5e94\u5f53\u62e5\u6709\u4e00\u4e2a",(0,t.jsx)(n.strong,{children:"\u552f\u4e00\u6807\u8bc6"}),"\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2aID\u3002\n\u867d\u7136\u6838\u5fc3\u5e93\u4e2d\u6ca1\u6709\u5b9a\u4e49\u5bf9\u56fe\u7247\u4e0a\u4f20\u7684API\uff0c\u4f46\u662f\u4e3a ",(0,t.jsx)(n.code,{children:"Bot"})," \u5b9a\u4e49\u4e86\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"ID"})," \u89e3\u6790\u5e76\u6784\u5efa\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"Image"})," \u7684API\uff1a"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"code",children:[(0,t.jsx)(i.Z,{value:"Kotlin",default:!0,attributes:{"data-value":"Kotlin"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val bot: Bot = ...\nval image = bot.resolveImage("xxxx".ID)\n'})})}),(0,t.jsx)(i.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Bot bot = ...;\nID id = Identifies.ID("xxxxx");\nImage<?> image = bot.resolveImageBlocking(id);\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u90a3\u4e48\u4f60\u53ef\u80fd\u5c31\u4f1a\u6709\u4e00\u4e2a\u7591\u95ee\uff1a",(0,t.jsx)(n.strong,{children:"\u56fe\u7247ID\u4ece\u4f55\u800c\u6765\uff1f"}),"\n\u8fd9\u4e2a\u95ee\u9898\u7684\u7b54\u6848\u5f88\u7b80\u5355\uff1a",(0,t.jsx)(n.strong,{children:"\u4e0d\u786e\u5b9a"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u4e2a\u56fe\u7247\u7684ID\u901a\u5e38\u4ee3\u8868\u4e3a\u5b83\u5728\u670d\u52a1\u5668\u4e0a\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u90a3\u4e48\u80fd\u591f\u51b3\u5b9a\u5b83\u7684\u53ea\u6709\u670d\u52a1\u5668\u3002\u4e0d\u540c\u7684\u7ec4\u4ef6\u5bf9\u63a5\u4e0d\u540c\u7684\u5e73\u53f0\uff0c\n\u56e0\u6b64\u6bcf\u4e2a\u7ec4\u4ef6\u4e0b\u5bf9\u4e8e\u56fe\u7247ID\u7684\u683c\u5f0f\u3001\u83b7\u53d6\u65b9\u5f0f\u7b49\u90fd\u4f1a\u6709\u6240\u4e0d\u540c\uff0c\u751a\u81f3\u6709\u53ef\u80fd\u4f1a\u6709\u4e0d\u652f\u6301ID\u56fe\u7247\u7684\u7ec4\u4ef6\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5 ",(0,t.jsx)(n.a,{href:"https://github.com/simple-robot/simbot-component-mirai",children:"mirai\u7ec4\u4ef6"})," \u4e3a\u4f8b\uff0c\u5176\u652f\u6301\u7684\u56fe\u7247ID\u662f\u7531mirai\u6846\u67b6\u5185\u8fdb\u884c\u5904\u7406\u7684\u3002\n\u800c\u4ee5 ",(0,t.jsx)(n.a,{href:"https://github.com/simple-robot/simbot-component-kook",children:"Kook\u7ec4\u4ef6"})," \u4e3a\u4f8b\u7684\u8bdd\uff0c\u56fe\u7247\u7684ID\u5219\u662f\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"https://developer.kookapp.cn/doc/http/asset",children:"\u5a92\u4f53\u6a21\u5757"}),"\n\u4e0a\u4f20\u540e\u7684\u94fe\u63a5\u5730\u5740\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u6b64\u9700\u8981\u6839\u636e\u6240\u4f7f\u7528\u7684\u5177\u4f53\u7ec4\u4ef6\u5e76\u7ed3\u5408\u76f8\u5173\u7684\u6587\u6863\u6ce8\u91ca\u8bf4\u660e\u6765\u4f7f\u7528\u3002\u4e0d\u8fc7\u76f4\u63a5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"Bot.resolveImage(ID)"})," \u6765\u6784\u5efa\u56fe\u7247\u5bf9\u8c61\u7684\u60c5\u51b5\u5e76\u4e0d\u662f\u5f88\u5e38\u89c1\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"emoji",children:"Emoji"}),"\n",(0,t.jsxs)(n.p,{children:["Emoji\u662f\u4e00\u4e2a ",(0,t.jsx)(n.em,{children:"\u4fdd\u7559\u7c7b\u578b"})," \uff0c\u5b83\u7c7b\u4f3c\u4e8e ",(0,t.jsx)(n.a,{href:"#face",children:"Face"}),"\uff0c\u7528\u6765\u8868\u793a\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"emoji"}),"\u3002\u4f46\u662f\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u5e76\u4e0d\u9700\u8981\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Emoji"})," \u6765\u53d1\u9001 ",(0,t.jsx)(n.code,{children:"emoji"}),"\uff0c\n\u56e0\u4e3a\u4ece2010\u5e74\u5f00\u59cb ",(0,t.jsx)(n.code,{children:"Unicode"})," \u4fbf\u5f00\u59cb\u6536\u5f55emoji\u7f16\u7801\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5c06 ",(0,t.jsx)(n.code,{children:"emoji"})," \u8868\u60c5\u4f5c\u4e3a\u5b57\u7b26\u4e32\u53d1\u9001\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u90a3\u4e48 ",(0,t.jsx)(n.code,{children:"Emoji"})," \u73b0\u5728\u66f4\u591a\u7684\u7528\u4e8e\u8868\u793a\u4e00\u4e9b\u5e73\u53f0\u4e0b\u7684\u7279\u6b8a\u8868\u60c5\uff0c\u4f8b\u5982\u53ea\u80fd\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u4f7f\u7528\u7684 ",(0,t.jsx)(n.code,{children:"emoji"}),"\uff0c\u6bd4\u5982 ",(0,t.jsx)(n.a,{href:"../../component-overview/qq-guild",children:"\u817e\u8baf\u9891\u9053\u7ec4\u4ef6"})," \u4e2d\u7528\u4e8ereaction\u6d88\u606f\u7684\u8868\u60c5\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u4e0d\u4f1a\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Emoji"})," \u6d88\u606f\u7c7b\u578b\u3002"]})}),"\n",(0,t.jsxs)(s.Z,{groupId:"code",children:[(0,t.jsx)(i.Z,{value:"Kotlin",default:!0,attributes:{"data-value":"Kotlin"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val emoji: Emoji = Emoji(123.ID)\n"})})}),(0,t.jsx)(i.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"final Emoji emoji = new Emoji(Identifies.ID(123));\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"face",children:"Face"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u4e2a",(0,t.jsx)(n.strong,{children:"\u8868\u60c5"}),"\u3002",(0,t.jsx)(n.code,{children:"Face"})," \u6240\u4ee3\u8868\u7684\u901a\u5e38\u4e3a\u4e00\u4e9b\u5bf9\u5e94\u7ec4\u4ef6\u5e73\u53f0\u4e0b\u6240\u5c5e\u7684\u8868\u60c5\u3002\u8fd9\u4e9b\u8868\u60c5\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u90fd\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"ID"})," \u6765\u8fdb\u884c\u8868\u793a\u4e0e\u5b9a\u4f4d\u3002\n\u5047\u5982\u5e73\u53f0\u7684\u8868\u60c5\u8f83\u4e3a\u590d\u6742\uff0c\u6216\u8005\u5b58\u5728\u5f88\u591a\u4e0d\u540c\u79cd\u7c7b\u7684\u8868\u60c5\u6d88\u606f\uff0c\u5219\u9700\u8981\u7531\u7ec4\u4ef6\u63d0\u4f9b\u5176\u4ed6\u989d\u5916\u7684\u5b9e\u73b0\uff0c\u5e76\u5c3d\u53ef\u80fd\u63d0\u4f9b\u9488\u5bf9\u4e8e\u89e3\u6790 ",(0,t.jsx)(n.code,{children:"Face"})," \u7684\u517c\u5bb9\u3002"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"code",children:[(0,t.jsx)(i.Z,{value:"Kotlin",default:!0,attributes:{"data-value":"Kotlin"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val face: Face = Face(123.ID)\n"})})}),(0,t.jsx)(i.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"final Face face = new Face(Identifies.ID(123));\n"})})})]})]})}function x(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>i});a(67294);var t=a(90512);const l={tabItem:"tabItem_Ymn6"};var s=a(85893);function i(e){let{children:n,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(l.tabItem,i),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>A});var t=a(67294),l=a(90512),s=a(12466),i=a(16550),r=a(20469),o=a(91980),c=a(67392),d=a(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:l}}=e;return{value:n,label:a,attributes:t,default:l}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function x(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:a}=e;const l=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:l}=e,s=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=j({queryString:a,groupId:l}),[m,p]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,d.Nk)(a);return[l,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:l}),v=(()=>{const e=c??m;return x({value:e,tabValues:s})?e:null})();(0,r.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var p=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function f(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,a=o.indexOf(n),l=r[a].value;l!==t&&(c(n),i(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},n),children:r.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,l.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:l}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function I(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,l.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(f,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function A(e){const n=(0,p.Z)();return(0,g.jsx)(I,{...e,children:u(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>i});var t=a(67294);const l={},s=t.createContext(l);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);