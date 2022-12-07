"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[924],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),l=a(7294),o=a(6010),i=a(2389),r=a(7392),p=a(7094),m=a(2466);const s="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:a,block:i,defaultValue:u,values:c,groupId:k,className:g}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,r.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const I=null===u?u:u??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==I&&!b.some((e=>e.value===I)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${I}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:h}=(0,p.U)(),[x,T]=(0,l.useState)(I),y=[],{blockElementScrollPositionUntilNextRender:A}=(0,m.o5)();if(null!=k){const e=f[k];null!=e&&e!==x&&b.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=y.indexOf(t),n=b[a].value;n!==x&&(A(t),T(n),null!=k&&h(k,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;a=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;a=y[t]??y[y.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>y.push(e),onKeyDown:E,onClick:C},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,l.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function c(e){const t=(0,i.Z)();return l.createElement(u,(0,n.Z)({key:String(t)},e))}},975:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>m,toc:()=>d});var n=a(7462),l=(a(7294),a(3905)),o=(a(8209),a(5488)),i=a(5162);const r={sidebar_position:10,title:"\u6807\u51c6\u6d88\u606f",tags:["\u6d88\u606f"]},p=void 0,m={unversionedId:"definition/message-overview/standard-message",id:"definition/message-overview/standard-message",title:"\u6807\u51c6\u6d88\u606f",description:"\u9488\u5bf9\u4e00\u4e9b\u5341\u5206\u5e38\u89c1\u7684\u6d88\u606f\u7c7b\u578b\uff0csimbot-api \u63d0\u4f9b\u4e86\u4e00\u4e9b\u6807\u51c6\u5b9a\u4e49\u6216\u5b9e\u73b0\u3002",source:"@site/docs/definition/message-overview/standard-message.md",sourceDirName:"definition/message-overview",slug:"/definition/message-overview/standard-message",permalink:"/docs/definition/message-overview/standard-message",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/definition/message-overview/standard-message.md",tags:[{label:"\u6d88\u606f",permalink:"/docs/tags/\u6d88\u606f"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1670424607,formattedLastUpdatedAt:"Dec 7, 2022",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u6807\u51c6\u6d88\u606f",tags:["\u6d88\u606f"]},sidebar:"docs",previous:{title:"\u6d88\u606f\u6982\u8ff0",permalink:"/docs/definition/message-overview/"},next:{title:"\u5e8f\u5217\u5316",permalink:"/docs/definition/message-overview/message-serialization"}},s={},d=[{value:"PlainText",id:"plaintext",level:2},{value:"Text",id:"text",level:2},{value:"At",id:"at",level:2},{value:"AtAll",id:"atall",level:2},{value:"Image",id:"image",level:2},{value:"\u8d44\u6e90\u56fe\u7247",id:"\u8d44\u6e90\u56fe\u7247",level:3},{value:"ID\u56fe\u7247",id:"id\u56fe\u7247",level:3},{value:"Emoji",id:"emoji",level:2},{value:"Face",id:"face",level:2}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u9488\u5bf9\u4e00\u4e9b\u5341\u5206\u5e38\u89c1\u7684\u6d88\u606f\u7c7b\u578b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"simbot-api")," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u6807\u51c6\u5b9a\u4e49\u6216\u5b9e\u73b0\u3002"),(0,l.kt)("h2",{id:"plaintext"},"PlainText"),(0,l.kt)("p",null,"\u6587\u672c\u662f\u6700\u5e38\u89c1\u7684\u6d88\u606f\u7c7b\u578b\u3002PlainText\u662f\u9488\u5bf9\u4e8e\u7eaf\u6587\u672c\u6d88\u606f\u6240\u63d0\u4f9b\u7684\u62bd\u8c61\u7c7b\u578b\u3002\u6838\u5fc3\u63d0\u4f9b\u4e86\u5b83\u6700\u57fa\u7840\u7684\u5b9e\u73b0\uff1a",(0,l.kt)("a",{parentName:"p",href:"#text"},"Text"),"\u3002"),(0,l.kt)("h2",{id:"text"},"Text"),(0,l.kt)("p",null,"plainText\u7684\u57fa\u7840\u5b9e\u73b0\uff0c\u7528\u6765\u63cf\u8ff0\u4e00\u4e2a\u6700\u57fa\u7840\u7684\u7eaf\u6587\u672c\u6d88\u606f\u3002"),(0,l.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val text1: Text = "Hello".toText()\nval text2: Text = Text { "World" }\nval emptyText: Text = Text()\n'))),(0,l.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final Text text = Text.of("Hello");\nfinal Text emptyText = Text.getEmptyText();\n')))),(0,l.kt)("h2",{id:"at"},"At"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AT"),"\uff08\u6216\u8005\u79f0\u4e4b\u4e3a ",(0,l.kt)("em",{parentName:"p"},"\u827e\u7279"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"@")," \uff09\u662f\u804a\u5929\u793e\u4ea4\u8f6f\u4ef6\u5e73\u53f0\u5341\u5206\u5e38\u89c1\u7684\u4e00\u79cd\u6d88\u606f\u7c7b\u578b\uff0c\u5176\u4ee3\u8868\u5bf9\u67d0\u4eba\u67d0\u4e8b\u8fdb\u884c\u9488\u5bf9\u6027\u7684",(0,l.kt)("strong",{parentName:"p"},"\u63d0\u9192/\u901a\u77e5"),"\u6d88\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"At")," \u7531\u6838\u5fc3\u63d0\u4f9b\u4e86\u57fa\u7840\u7684\u6570\u636e\u7c7b\uff08 ",(0,l.kt)("inlineCode",{parentName:"p"},"data class")," \uff09\u5b9e\u73b0\uff0c\u57fa\u672c\u53ef\u4ee5\u6ee1\u8db3\u9700\u8981\u3002\n\u5982\u679c\u67d0\u7ec4\u4ef6\u5b58\u5728\u8f83\u4e3a\u590d\u6742\u3001\u65e0\u6cd5\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"At")," \u6ee1\u8db3\u7684\u901a\u77e5\u6d88\u606f\u7c7b\u578b\uff0c\u5219\u9700\u8981\u7531\u5bf9\u5e94\u7ec4\u4ef6\u81ea\u884c\u5b9e\u73b0\u53e6\u5916\u7684\u6d88\u606f\uff0c\u5e76\u5c3d\u53ef\u80fd\u63d0\u4f9b\u9488\u5bf9\u4e8e\u89e3\u6790 ",(0,l.kt)("inlineCode",{parentName:"p"},"At")," \u7684\u517c\u5bb9\u3002"),(0,l.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val at: At = At(123.ID)\nval atMember: At = At(event.author().id)\n"))),(0,l.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final At at = new At(Identifies.ID(123));\nfinal At atMember = new At(event.getAuthor().getId());\n")))),(0,l.kt)("h2",{id:"atall"},"AtAll"),(0,l.kt)("p",null,"\u4e66\u63a5\u4e0a\u6587\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"At"),"\uff0c\u5bf9\u4e8e\u5927\u591a\u6570\u804a\u5929\u793e\u4ea4\u8f6f\u4ef6\u6765\u8bb2\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"AtAll")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"At")," \u540c\u6837\u5e38\u89c1\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"AtAll")," \u7684\u542b\u4e49\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"At")," \u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"At")," \u662f\u9488\u5bf9\u4e00\u4e2a\u4eba/\u4e8b\u7269\uff0c\u4f46\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"AtAll")," \u662f\u9488\u5bf9\u6240\u6709\u3002\n\u6838\u5fc3\u63d0\u4f9b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"AtAll")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," \u7c7b\u578b\u7684\u5355\u4f8b\u3002\n\u5047\u5982\u67d0\u7ec4\u4ef6\u5b58\u5728\u66f4\u4e3a\u7ec6\u7c92\u5ea6\u7684\u201c\u590d\u6570At\u201d\uff0c\u90a3\u4e48\u9700\u8981\u63d0\u4f9b\u989d\u5916\u7684\u5b9e\u73b0\u7c7b\u578b\uff0c\u5e76\u5c3d\u53ef\u80fd\u63d0\u4f9b\u9488\u5bf9\u4e8e\u89e3\u6790 ",(0,l.kt)("inlineCode",{parentName:"p"},"AtAll")," \u7684\u517c\u5bb9\u3002"),(0,l.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val atAll: AtAll = AtAll\n"))),(0,l.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final AtAll atAll = AtAll.INSTANCE;\n")))),(0,l.kt)("h2",{id:"image"},"Image"),(0,l.kt)("p",null,"\u56fe\u7247\u7c7b\u578b\u4e5f\u662f\u975e\u5e38\u5e38\u89c1\u7684\u7c7b\u578b\u4e4b\u4e00\uff0c\u4ee3\u8868\u4e00\u4e2a\u4efb\u610f\u7684\u56fe\u7247\u6d88\u606f\u3002\u6838\u5fc3\u6240\u63d0\u4f9b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," \u7c7b\u578b\u4e3a\u62bd\u8c61\u7c7b\u578b\uff0c\u65e0\u6cd5\u76f4\u63a5\u6784\u5efa\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u56fe\u7247\u6765\u8bb2\uff0c\u4ed6\u4eec\u901a\u5e38\u90fd\u9700\u8981\u63d0\u4f9b\u8d44\u6e90\uff08\u4f8b\u5982\u7f51\u7edc\u8d44\u6e90\u3001\u672c\u5730\u6587\u4ef6\u8d44\u6e90\uff09\u540e\u4e0a\u4f20\u7684\u76ee\u6807\u670d\u52a1\u5668\uff0c\n\u53c8\u6216\u662f\u6307\u5b9a\u901a\u8fc7\u4e00\u4e2a\u6765\u81ea\u670d\u52a1\u5668\u7684\u6307\u5b9aID\uff0c\u8fdb\u800c\u518d\u53d1\u9001\u3002"),(0,l.kt)("h3",{id:"\u8d44\u6e90\u56fe\u7247"},"\u8d44\u6e90\u56fe\u7247"),(0,l.kt)("p",null,"\u6838\u5fc3\u5e93\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," \u7684\u6807\u51c6\u5b9e\u73b0\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"ResourceImage"),"\uff0c\u7528\u4e8e\u63d0\u4f9b\u4e00\u4e2a\u8d44\u6e90\u5bf9\u8c61\u5e76\u4f5c\u4e3a\u4f60\u60f3\u8981\u53d1\u9001\u7684\u56fe\u7247\u8d44\u6e90\u3002"),(0,l.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val image = Path("xxx/image.jpg").toResource().toImage()\n'))),(0,l.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Path path = Paths.get("xxx/image.jpg");\nPathResource resource = Resource.of(path);\nResourceImage image = Image.of(resource);\n')))),(0,l.kt)("admonition",{title:"\u5c0f\u5fc3",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ResourceImage")," \u4f5c\u4e3a\u53d1\u9001\u7528\u7684\u56fe\u7247\u5bf9\u8c61\u65f6\uff0c\u4f60\u9700\u8981\u6ce8\u610f\uff1a\u6b64\u56fe\u7247\u5bf9\u8c61\u4f1a\u5728",(0,l.kt)("strong",{parentName:"p"},"\u6bcf\u6b21"),"\u88ab\u53d1\u9001\u65f6\u53d1\u751f\u4e00\u6b21\u8d44\u6e90\u8bfb\u53d6\u3002\n\u56e0\u6b64\u5982\u679c\u8fd9\u4e2a\u56fe\u7247\u8d44\u6e90\u4f1a\u88ab",(0,l.kt)("strong",{parentName:"p"},"\u9891\u7e41"),"\u4f7f\u7528\u7684\u8bdd\uff0c\u4f60\u9700\u8981\u8003\u8651\u6587\u4ef6IO\u4e0e\u6027\u80fd\u95ee\u9898\u3002")),(0,l.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u9891\u7e41\u7684IO\u64cd\u4f5c\uff0c\u6216\u8bb8\u4f60\u53ef\u4ee5\u63d0\u524d\u5c06\u56fe\u7247\u6587\u4ef6\u8bfb\u53d6\u4e3a\u5b57\u8282\u6570\u7ec4\u3002"),(0,l.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val image = Path("xxx/image.jpg").let {\n    it.readBytes().toResource(it.name).toImage()\n}\n'))),(0,l.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Path path = Paths.get("xxx/image.jpg");\nbyte[] bytes = Files.readAllBytes(path);\nByteArrayResource resource = Resource.of(bytes, path.toString());\nResourceImage image = Image.of(resource);\n')))),(0,l.kt)("admonition",{title:"\u4e00\u6ce2\u672a\u5e73",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u6837\u7684\u786e\u4f1a\u907f\u514d\u66f4\u591a\u7684IO\u64cd\u4f5c\uff0c\u4f46\u662f\u6211\u60f3\u4f60\u5e94\u5f53\u660e\u767d\uff1a\u8fd9\u4f1a\u5360\u7528\u5927\u91cf\u7684\u5185\u5b58\u8d44\u6e90\u3002")),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u5404\u65b9\u6848\u4e2d\u51fa\u73b0\u7684\u95ee\u9898\uff0c\u6700\u597d\u7684\u89e3\u51b3\u529e\u6cd5\u5373\u4e3a\u5148\u5c06\u56fe\u7247\u4e0a\u4f20\u5230\u670d\u52a1\u5668\uff0c\u7136\u540e\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u5df2\u7ecf\u4e0a\u4f20\u7684\u56fe\u7247\u8d44\u6e90\u5bf9\u8c61\u3002\n\u90a3\u4e48\u5982\u4f55\u4e0a\u4f20\u56fe\u7247\u5230\u670d\u52a1\u5668\u5462\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u9645\u4e0a\uff0c\u6838\u5fc3\u6a21\u5757\u5e76\u6ca1\u6709\u4e3a\u8fd9\u4e2a\u884c\u4e3a\u63d0\u4f9b\u89c4\u8303\u64cd\u4f5c"),'\u3002"\u5c06\u56fe\u7247\u4e0a\u4f20\u5230\u670d\u52a1\u5668"\uff08\u6216\u8005\u8bf4"\u5f97\u5230\u4e00\u4e2a\u53ef\u590d\u7528\u7684\u9ad8\u7ea7\u56fe\u7247\u5bf9\u8c61"\uff09\u7684\u65b9\u5f0f\u4e0e\u5f62\u5f0f\u5b8c\u5168',(0,l.kt)("strong",{parentName:"p"},"\u7531\u7ec4\u4ef6\u81ea\u884c\u51b3\u5b9a"),"\u3002"),(0,l.kt)("p",null,"\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-component-mirai"},"mirai\u7ec4\u4ef6")," \u4e3a\u4f8b\uff0c\n\u5728mirai\u4e2d\u4e0a\u4f20\u56fe\u7247\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u5177\u4f53\u7684\u76ee\u6807\u5bf9\u8c61\uff08\u4f8b\u5982\u7fa4\u5bf9\u8c61\u3001\u597d\u53cb\u5bf9\u8c61\u7b49\uff09\uff0c\u56e0\u6b64\n\u5c06\u56fe\u7247\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u65b9\u5f0f\u662f\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"MiraiSendOnlyImage.upload")," \u5b9e\u73b0\u7684\uff1a"),(0,l.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Listener\nsuspend fun onEvent(event: MiraiGroupMessageEvent) {\n    val sendOnlyImage = MiraiSendOnlyImage.of(Path("xxx/image.jpg").toResource())\n    val uploadedImage = sendOnlyImage.upload(event.group());\n}\n'))),(0,l.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Listener\npublic void onEvent(MiraiGroupMessageEvent event) {\n    Path path = Paths.get("xxx/image.jpg");\n    MiraiSendOnlyImage sendOnlyImage = MiraiSendOnlyImage.of(Resource.of(path));\n    sendOnlyImage.uploadBlocking(event.getGroup());\n}\n')))),(0,l.kt)("p",null,"\u800c\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-component-kook"},"Kook\u7ec4\u4ef6")," \u4e3a\u4f8b\uff0c\n\u5728 Kook \u4e2d\u56fe\u7247\u8d44\u6e90\u9700\u8981\u63d0\u524d\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.kookapp.cn/doc/http/asset"},"\u5a92\u4f53\u6a21\u5757"),"\n\u4e0a\u4f20\u4e3a\u5a92\u4f53\u8d44\u6e90\uff0c\u7136\u540e\u518d\u4ee5\u4e0a\u4f20\u540e\u7684\u94fe\u63a5\u5730\u5740\u4e3aID\u8fdb\u884c\u53d1\u9001\u3002\u8fd9\u4e00\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"KookComponentBot.uploadAssetImage"),"\n\u6765\u5b8c\u6210\uff1a"),(0,l.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Listener\nsuspend fun onEvent(event: KookMessageEvent.Channel) {\n    val image = event.bot.uploadAssetImage(Path("xxx/image.jpg").toResource())\n}\n'))),(0,l.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Listener\npublic void onEvent(KookMessageEvent.Channel event) {\n    Path path = Paths.get("xxx/image.jpg");\n    event.getBot().uploadAssetImageBlocking(Resource.of(path));\n}\n')))),(0,l.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0\uff0c\u4e0a\u8ff0\u5404\u7ec4\u4ef6\u793a\u4f8b\u4e2d\u76d1\u542c\u7684\u4e8b\u4ef6\u7c7b\u578b\u90fd\u662f\u4e00\u4e9b\u7ec4\u4ef6\u4e2d\u63d0\u4f9b\u7684",(0,l.kt)("strong",{parentName:"p"},"\u4e13\u5c5e\u7c7b\u578b"),"\uff08\u6bd4\u5982mirai\u7ec4\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"MiraiGroupMessageEvent")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"KookMessageEvent.Channel")," \u7b49\uff09\uff0c\n\u56e0\u4e3a\u8fd9\u4e9bAPI\u90fd\u662f\u7531\u7ec4\u4ef6\u6240\u63d0\u4f9b\u7684\u989d\u5916API\u3002\u5982\u679c\u4f60\u7684\u4e8b\u4ef6\u76d1\u542c\u4f7f\u7528\u7684\u662f\u6807\u51c6API\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u9700\u8981\u591a\u4e00\u6b65\u7c7b\u578b\u5224\u65ad\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("admonition",{title:"\u66f4\u591a\u7684\u6807\u51c6API",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u6ca1\u8bf4\u5e76\u4e0d\u662f\u4ee3\u8868\u4f7f\u7528\u6807\u51c6API\u4e0d\u597d\uff0c\u76f8\u53cd\u5730\uff0c\u6211\u4eec\u4e00\u76f4\u5efa\u8bae\u5f00\u53d1\u8005\u5c3d\u53ef\u80fd\u5730\u53bb\u4f7f\u7528\u6807\u51c6API\uff08\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"GroupMessageEvent"),"\uff09\uff0c\u5e76\u53ea\u5728\u8f83\u5c0f\u8303\u56f4\u5185\n\u4f7f\u7528\u9488\u5bf9\u7ec4\u4ef6\u7684\u989d\u5916API\u3002\u66f4\u591a\u7684\u4f7f\u7528\u6807\u51c6API\u53ef\u4ee5\u8ba9\u4f60\u7684\u6574\u4f53\u4ee3\u7801\u62e5\u6709\u66f4\u9ad8\u7684\u517c\u5bb9\u6027\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5f53\u4f60\u9700\u8981\u589e\u52a0\u4e00\u4e2a\u534f\u540c\u7684\u7ec4\u4ef6\u6216\u8fc1\u79fb\u5f53\u524d\u7a0b\u5e8f\u5230\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u4e0a\u65f6\uff0c\u66f4\u591a\u7684\u4f7f\u7528\u6807\u51c6API\u4f1a\u8ba9\u8fd9\u4e2a\u8fc7\u7a0b\u7684\u6210\u672c\u5927\u5927\u964d\u4f4e\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5f53\u7136\uff0c\u51e1\u4e8b\u90fd\u8981\u8fa9\u8bc1\u7684\u53bb\u770b\u5f85\u3002\u5982\u679c\u4f60\u5f88\u660e\u786e\u4f60\u7684\u7ec4\u4ef6\u4f7f\u7528\u5e76\u4e14\u4e0d\u4f1a\u51fa\u73b0\u4e0a\u8ff0\u90a3\u4e9b\u53ef\u80fd\uff0c\u653e\u624b\u53bb\u505a\u4e5f\u4e0d\u4f1a\u6709\u4ec0\u4e48\u5927\u95ee\u9898\u3002")),(0,l.kt)("p",null,"\u603b\u800c\u8a00\u4e4b\uff0c\u4e0d\u540c\u7684\u7ec4\u4ef6\u4e2d\u5bf9\u4e8e\u4e00\u4e2a\u5177\u4f53\u7684\u3001\u53ef\u590d\u7528\u7684\u56fe\u7247\u5bf9\u8c61\u7684\u5b9a\u4e49\u4e0e\u83b7\u53d6\u65b9\u5f0f\u90fd\u662f\u4e0d\u540c\u7684\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u6839\u636e\u4f60\u6240\u4f7f\u7528\u7684\u5177\u4f53\u7ec4\u4ef6\u6765\u9009\u62e9\u6700\u4e3a\u5408\u9002\u7684\u65b9\u6848\u3002"),(0,l.kt)("admonition",{title:"\u6216\u8bb8\u80fd\u66f4\u597d?",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u672a\u6765\u53ef\u80fd\u4f1a\u7ee7\u7eed\u8c03\u6574\u3001\u4f18\u5316\u76f8\u5173\u7684API\uff0c\u8bf4\u4e0d\u5b9a\u672a\u6765\u7684\u7248\u672c\u4f1a\u6709\u65e2\u80fd\u591f\u5728\u7ec4\u4ef6\u95f4\u901a\u7528\u53c8\u4e0d\u4f1a\u6709\u8fc7\u591a\u635f\u8017\u7684\u6807\u51c6API\u8bde\u751f\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6709\u597d\u7684\u60f3\u6cd5\u6216\u8005\u601d\u8def\uff0c\u975e\u5e38\u6b22\u8fce\u6765",(0,l.kt)("a",{parentName:"p",href:"https://github.com/orgs/simple-robot/discussions"},"\u793e\u533a"),"\u70b9\u9192\u6211\u4eec\uff01")),(0,l.kt)("h3",{id:"id\u56fe\u7247"},"ID\u56fe\u7247"),(0,l.kt)("p",null,"\u4e0a\u6587\u4e2d\u4ecb\u7ecd\u7684\u662f\u901a\u8fc7\u4e00\u4e2a\u8d44\u6e90\u53d1\u9001\u56fe\u7247\uff0c\u800c\u5728\u8fd9\u91cc\u5219\u4f1a\u7b80\u5355\u8bb2\u8ff0\u5982\u4f55\u76f4\u63a5\u901a\u8fc7\u4e00\u4e2a\u5177\u4f53\u7684ID\u6784\u5efa\u56fe\u7247\u6d88\u606f\u3002"),(0,l.kt)("p",null,"\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u5177\u4f53\u7684\u56fe\u7247\u5bf9\u8c61\uff08\u4e00\u822c\u6307\u4ece\u670d\u52a1\u5668\u63a5\u6536\u5230\u7684\u56fe\u7247\u3001\u5df2\u7ecf\u4e0a\u4f20\u8fc7\u7684\u56fe\u7247\u7b49\uff09\u5e94\u5f53\u62e5\u6709\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u552f\u4e00\u6807\u8bc6"),"\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2aID\u3002\n\u867d\u7136\u6838\u5fc3\u5e93\u4e2d\u6ca1\u6709\u5b9a\u4e49\u5bf9\u56fe\u7247\u4e0a\u4f20\u7684API\uff0c\u4f46\u662f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Bot")," \u5b9a\u4e49\u4e86\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u89e3\u6790\u5e76\u6784\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," \u7684API\uff1a"),(0,l.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bot: Bot = ...\nval image = bot.resolveImage("xxxx".ID)\n'))),(0,l.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Bot bot = ...;\nID id = Identifies.ID("xxxxx");\nImage<?> image = bot.resolveImageBlocking(id);\n')))),(0,l.kt)("p",null,"\u90a3\u4e48\u4f60\u53ef\u80fd\u5c31\u4f1a\u6709\u4e00\u4e2a\u7591\u95ee\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u56fe\u7247ID\u4ece\u4f55\u800c\u6765\uff1f"),"\n\u8fd9\u4e2a\u95ee\u9898\u7684\u7b54\u6848\u5f88\u7b80\u5355\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u786e\u5b9a"),"\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u56fe\u7247\u7684ID\u901a\u5e38\u4ee3\u8868\u4e3a\u5b83\u5728\u670d\u52a1\u5668\u4e0a\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u90a3\u4e48\u80fd\u591f\u51b3\u5b9a\u5b83\u7684\u53ea\u6709\u670d\u52a1\u5668\u3002\u4e0d\u540c\u7684\u7ec4\u4ef6\u5bf9\u63a5\u4e0d\u540c\u7684\u5e73\u53f0\uff0c\n\u56e0\u6b64\u6bcf\u4e2a\u7ec4\u4ef6\u4e0b\u5bf9\u4e8e\u56fe\u7247ID\u7684\u683c\u5f0f\u3001\u83b7\u53d6\u65b9\u5f0f\u7b49\u90fd\u4f1a\u6709\u6240\u4e0d\u540c\uff0c\u751a\u81f3\u6709\u53ef\u80fd\u4f1a\u6709\u4e0d\u652f\u6301ID\u56fe\u7247\u7684\u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,"\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-component-mirai"},"mirai\u7ec4\u4ef6")," \u4e3a\u4f8b\uff0c\u5176\u652f\u6301\u7684\u56fe\u7247ID\u662f\u7531mirai\u6846\u67b6\u5185\u8fdb\u884c\u5904\u7406\u7684\u3002\n\u800c\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-component-kook"},"Kook\u7ec4\u4ef6")," \u4e3a\u4f8b\u7684\u8bdd\uff0c\u56fe\u7247\u7684ID\u5219\u662f\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.kookapp.cn/doc/http/asset"},"\u5a92\u4f53\u6a21\u5757"),"\n\u4e0a\u4f20\u540e\u7684\u94fe\u63a5\u5730\u5740\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\u9700\u8981\u6839\u636e\u6240\u4f7f\u7528\u7684\u5177\u4f53\u7ec4\u4ef6\u5e76\u7ed3\u5408\u76f8\u5173\u7684\u6587\u6863\u6ce8\u91ca\u8bf4\u660e\u6765\u4f7f\u7528\u3002\u4e0d\u8fc7\u76f4\u63a5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Bot.resolveImage(ID)")," \u6765\u6784\u5efa\u56fe\u7247\u5bf9\u8c61\u7684\u60c5\u51b5\u5e76\u4e0d\u662f\u5f88\u5e38\u89c1\u3002"),(0,l.kt)("h2",{id:"emoji"},"Emoji"),(0,l.kt)("p",null,"Emoji\u662f\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"\u4fdd\u7559\u7c7b\u578b")," \uff0c\u5b83\u7c7b\u4f3c\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"#face"},"Face"),"\uff0c\u7528\u6765\u8868\u793a\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"emoji"),"\u3002\u4f46\u662f\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u5e76\u4e0d\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Emoji")," \u6765\u53d1\u9001 ",(0,l.kt)("inlineCode",{parentName:"p"},"emoji"),"\uff0c\n\u56e0\u4e3a\u4ece2010\u5e74\u5f00\u59cb ",(0,l.kt)("inlineCode",{parentName:"p"},"Unicode")," \u4fbf\u5f00\u59cb\u6536\u5f55emoji\u7f16\u7801\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"emoji")," \u8868\u60c5\u4f5c\u4e3a\u5b57\u7b26\u4e32\u53d1\u9001\u3002"),(0,l.kt)("p",null,"\u90a3\u4e48 ",(0,l.kt)("inlineCode",{parentName:"p"},"Emoji")," \u73b0\u5728\u66f4\u591a\u7684\u7528\u4e8e\u8868\u793a\u4e00\u4e9b\u5e73\u53f0\u4e0b\u7684\u7279\u6b8a\u8868\u60c5\uff0c\u4f8b\u5982\u53ea\u80fd\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u4f7f\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"emoji"),"\uff0c\u6bd4\u5982 ",(0,l.kt)("a",{parentName:"p",href:"../../component-overview/tencent-guild"},"\u817e\u8baf\u9891\u9053\u7ec4\u4ef6")," \u4e2d\u7528\u4e8ereaction\u6d88\u606f\u7684\u8868\u60c5\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u4e0d\u4f1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Emoji")," \u6d88\u606f\u7c7b\u578b\u3002")),(0,l.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val emoji: Emoji = Emoji(123.ID)\n"))),(0,l.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final Emoji emoji = new Emoji(Identifies.ID(123));\n")))),(0,l.kt)("h2",{id:"face"},"Face"),(0,l.kt)("p",null,"\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u8868\u60c5"),"\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Face")," \u6240\u4ee3\u8868\u7684\u901a\u5e38\u4e3a\u4e00\u4e9b\u5bf9\u5e94\u7ec4\u4ef6\u5e73\u53f0\u4e0b\u6240\u5c5e\u7684\u8868\u60c5\u3002\u8fd9\u4e9b\u8868\u60c5\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u90fd\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u6765\u8fdb\u884c\u8868\u793a\u4e0e\u5b9a\u4f4d\u3002\n\u5047\u5982\u5e73\u53f0\u7684\u8868\u60c5\u8f83\u4e3a\u590d\u6742\uff0c\u6216\u8005\u5b58\u5728\u5f88\u591a\u4e0d\u540c\u79cd\u7c7b\u7684\u8868\u60c5\u6d88\u606f\uff0c\u5219\u9700\u8981\u7531\u7ec4\u4ef6\u63d0\u4f9b\u5176\u4ed6\u989d\u5916\u7684\u5b9e\u73b0\uff0c\u5e76\u5c3d\u53ef\u80fd\u63d0\u4f9b\u9488\u5bf9\u4e8e\u89e3\u6790 ",(0,l.kt)("inlineCode",{parentName:"p"},"Face")," \u7684\u517c\u5bb9\u3002"),(0,l.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val face: Face = Face(123.ID)\n"))),(0,l.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final Face face = new Face(Identifies.ID(123));\n")))))}c.isMDXComponent=!0},8209:(e,t,a)=>{a.d(t,{G:()=>i});var n=a(7294),l=a(7273);const o="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[r,p]=(0,n.useState)(!1),m=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??o;a!==o&&"dark"!==a&&(a=o);const n=a===o?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(i,a)),[a,r]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){p((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?l.Z.initialize({startOnLoad:!0,...a.mermaid,theme:m}):l.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),l.Z.contentLoaded())}),[a,m]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(l.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);