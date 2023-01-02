"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[7529],{5162:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),l=a(6010);const s="tabItem_Ymn6";function p(e){let{children:t,hidden:a,className:p}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,p),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7462),l=a(7294),s=a(6010),p=a(2389),r=a(7392),i=a(7094),o=a(2466);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:a,block:p,defaultValue:u,values:g,groupId:c,className:k}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=g??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,r.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===u?u:u??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:M}=(0,i.U)(),[y,h]=(0,l.useState)(f),A=[],{blockElementScrollPositionUntilNextRender:C}=(0,o.o5)();if(null!=c){const e=T[c];null!=e&&e!==y&&N.some((t=>t.value===e))&&h(e)}const x=e=>{const t=e.currentTarget,a=A.indexOf(t),n=N[a].value;n!==y&&(C(t),h(n),null!=c&&M(c,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=A.indexOf(e.currentTarget)+1;a=A[t]??A[0];break}case"ArrowLeft":{const t=A.indexOf(e.currentTarget)-1;a=A[t]??A[A.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},k)},N.map((e=>{let{value:t,label:a,attributes:p}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>A.push(e),onKeyDown:I,onClick:x},p,{className:(0,s.Z)("tabs__item",m,null==p?void 0:p.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,l.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function g(e){const t=(0,p.Z)();return l.createElement(u,(0,n.Z)({key:String(t)},e))}},1610:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294);const l="label_Yf5u";function s(e){let{type:t,href:a,children:s}=e;t=t||"primary";const p=n.createElement("span",{className:l},n.createElement("span",{className:`badge badge--${t}`},s));return null!=a&&a.length>0?n.createElement("a",{href:a},p):p}},9564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),s=(a(8209),a(1610),a(5488)),p=a(5162);a(814);const r={sidebar_position:17,title:"\u6d88\u606f"},i=void 0,o={unversionedId:"basic/messages",id:"basic/messages",title:"\u6d88\u606f",description:"\u65bd\u5de5\u4e2d",source:"@site/docs/basic/messages.md",sourceDirName:"basic",slug:"/basic/messages",permalink:"/docs/basic/messages",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/basic/messages.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1672651725,formattedLastUpdatedAt:"Jan 2, 2023",sidebarPosition:17,frontMatter:{sidebar_position:17,title:"\u6d88\u606f"},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u62e6\u622a",permalink:"/docs/basic/event-interception"},next:{title:"BOT\u914d\u7f6e\u6587\u4ef6",permalink:"/docs/basic/bot-config"}},d={},m=[{value:"\u6d88\u606f\u5bf9\u8c61",id:"\u6d88\u606f\u5bf9\u8c61",level:2},{value:"\u6784\u5efa\u6d88\u606f\u5bf9\u8c61",id:"\u6784\u5efa\u6d88\u606f\u5bf9\u8c61",level:3},{value:"\u6784\u5efa\u6d88\u606f\u94fe",id:"\u6784\u5efa\u6d88\u606f\u94fe",level:3},{value:"\u6d88\u606f\u94fe\u4f7f\u7528",id:"\u6d88\u606f\u94fe\u4f7f\u7528",level:2},{value:"\u904d\u5386\u6d88\u606f\u94fe",id:"\u904d\u5386\u6d88\u606f\u94fe",level:3},{value:"&quot;\u8ffd\u52a0&quot;\u5143\u7d20",id:"\u8ffd\u52a0\u5143\u7d20",level:3},{value:"\u6d88\u606f\u53d1\u9001",id:"\u6d88\u606f\u53d1\u9001",level:2},{value:"SendSupport",id:"sendsupport",level:3},{value:"ReplySupport",id:"replysupport",level:3},{value:"\u6d88\u606f\u56de\u6267",id:"\u6d88\u606f\u56de\u6267",level:2},{value:"DeleteSupport",id:"deletesupport",level:3},{value:"\u72ec\u7acb\u4e0e\u805a\u5408",id:"\u72ec\u7acb\u4e0e\u805a\u5408",level:3},{value:"SingleMessageReceipt",id:"singlemessagereceipt",level:4},{value:"AggregatedMessageReceipt",id:"aggregatedmessagereceipt",level:4}],u={toc:m};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"TODO",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"\u65bd\u5de5\u4e2d")),(0,l.kt)("admonition",{title:"\u5b9a\u4e49\u4e3a\u5148",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u9605\u8bfb\u672c\u7ae0\u8282\u4e4b\u524d\uff0c\u4f60\u5e94\u5f53\u5df2\u7ecf\u4e86\u89e3\u8fc7\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"../definition/message-overview"},(0,l.kt)("strong",{parentName:"a"},"\u6d88\u606f\u7684\u5b9a\u4e49"))," \u7684\u76f8\u5173\u5185\u5bb9\u3002")),(0,l.kt)("p",null,"\u6d88\u606f\u662f\u5728\u4e8b\u4ef6\u5904\u7406\u8fc7\u7a0b\u4e2d\u4f60\u53ef\u80fd\u4f1a\u9891\u7e41\u63a5\u89e6\u7684\u4e1c\u897f\u3002"),(0,l.kt)("h2",{id:"\u6d88\u606f\u5bf9\u8c61"},"\u6d88\u606f\u5bf9\u8c61"),(0,l.kt)("p",null,"\u6d88\u606f\u5bf9\u8c61\u662f\u6307 ",(0,l.kt)("inlineCode",{parentName:"p"},"Message")," \u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u5b83\u4eec\u662f\u6d88\u606f\u5143\u7d20 (",(0,l.kt)("inlineCode",{parentName:"p"},"Message.Element"),") \u6709\u4e00\u4e2a\u6216\u591a\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u53d8\u7684"),"\u6d88\u606f\u96c6\u3002"),(0,l.kt)("h3",{id:"\u6784\u5efa\u6d88\u606f\u5bf9\u8c61"},"\u6784\u5efa\u6d88\u606f\u5bf9\u8c61"),(0,l.kt)("p",null,"\u5bf9\u4e00\u4e2a\u6d88\u606f\u5bf9\u8c61\u7684\u6784\u5efa\u65b9\u5f0f\u53d6\u51b3\u4e8e\u6d88\u606f\u7c7b\u578b\u672c\u8eab\u3002\u4e3e\u51e0\u4e2a\u4f8b\u5b50\uff0c",(0,l.kt)("a",{parentName:"p",href:"../definition/message-overview/standard-message"},"\u6807\u51c6\u6d88\u606f\u7c7b\u578b"),"\n\u4e2d\u7684 ",(0,l.kt)("a",{parentName:"p",href:"../definition/message-overview/standard-message#text"},"\u6587\u672c\u6d88\u606f"),"\n\u7684\u6784\u5efa\u65b9\u5f0f\u662f\u4f7f\u7528\u5176\u9759\u6001\u5de5\u5382\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"Text.of")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"Text.getEmptyText()"),"\uff1a"),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val text1: Text = "Hello".toText()\nval text2: Text = Text { "World" }\nval emptyText: Text = Text()\n'))),(0,l.kt)(p.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final Text text = Text.of("Hello");\nfinal Text emptyText = Text.getEmptyText();\n')))),(0,l.kt)("p",null,"\u800c ",(0,l.kt)("a",{parentName:"p",href:"../definition/message-overview/standard-message#at"},"AT")," \u5219\u76f4\u63a5\u521b\u5efa\u4e00\u4e2a\u65b0\u5b9e\u4f8b\u5373\u53ef\uff1a"),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val at: At = At(123.ID)\nval atMember: At = At(event.author().id)\n"))),(0,l.kt)(p.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final At at = new At(Identifies.ID(123));\nfinal At atMember = new At(event.getAuthor().getId());\n")))),(0,l.kt)("p",null,"\u5bf9\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"../definition/message-overview/standard-message#atall"},"AT\u6240\u6709"),"\uff0c\u5176\u4f5c\u4e3a\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," \u5219\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff1a"),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val atAll: AtAll = AtAll\n"))),(0,l.kt)(p.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final AtAll atAll = AtAll.INSTANCE;\n")))),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u5177\u4f53\u95ee\u9898\u5177\u4f53\u5206\u6790\uff0c\u4e0d\u7ba1\u662f",(0,l.kt)("a",{parentName:"p",href:"../definition/message-overview/standard-message"},"\u6807\u51c6\u6d88\u606f\u7c7b\u578b"),"\u8fd8\u662f\u7531\u7ec4\u4ef6\u6216\u7b2c\u4e09\u65b9\u63d0\u4f9b\u7684\u989d\u5916\u6d88\u606f\u7c7b\u578b\uff0c\n\u9605\u8bfb\u5176\u76f8\u5173\u6587\u6863\u6216\u6ce8\u91ca\u6765\u4e86\u89e3\u5982\u679c\u6784\u5efa\u5b83\u4eec\u3002"),(0,l.kt)("h3",{id:"\u6784\u5efa\u6d88\u606f\u94fe"},"\u6784\u5efa\u6d88\u606f\u94fe"),(0,l.kt)("p",null,"\u4e0a\u8ff0\u6211\u4eec\u8bb2\u7684\u662f\u4e00\u4e2a\u72ec\u7acb\u6d88\u606f\u5143\u7d20\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"Message.Element"),"\uff09\u7684\u6784\u5efa\u65b9\u5f0f\u3002\u5c06\u591a\u4e2a\u6d88\u606f\u5143\u7d20\u201c\u7ec4\u5408\u201d\u8d77\u6765\uff0c\u4fbf\u5f62\u6210\u4e86",(0,l.kt)("strong",{parentName:"p"},"\u6d88\u606f\u94fe"),"\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"Messages"),"\uff09\u3002"),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u5728Kotlin\u4e2d\uff0c\u5408\u5e76\u6d88\u606f\u5143\u7d20\u4e3a\u4e00\u4e2a\u6d88\u606f\u94fe\u7684\u6700\u57fa\u672c\u65b9\u5f0f\u4fbf\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"plus")," \u64cd\u4f5c\u7b26\u76f4\u63a5\u8fdb\u884c\u62fc\u63a5\u3002\u4e0d\u8fc7\u9700\u8981\u6ce8\u610f\uff0c\u524d\u6587\u6211\u4eec\u63d0\u5230\u8fc7\u6d88\u606f\u662f",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u53d8"),"\u7684\uff0c\u6d88\u606f\u94fe\u4e5f\u662f\uff0c\n\u56e0\u6b64\u901a\u8fc7\u64cd\u4f5c\u7b26\u5408\u5e76\u540e\u5c06\u4f1a\u5f97\u5230\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u7684\u6d88\u606f\uff08\u94fe\uff09"),"\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e00\u4e2a\u666e\u901a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6587\u5b57 + AT")," \u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val messages = "\u6587\u5b57".toText() + At(123.ID)\n')),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c06\u4e00\u4e2a\u5305\u542b\u4e86\u591a\u4e2a\u6d88\u606f\u5143\u7d20\u7684\u96c6\u5408\u8f6c\u5316\u4e3a\u4e00\u4e2a\u6d88\u606f\u94fe\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val messages = listOf("\u6587\u5b57".toText(), At(123.ID), AtAll).toMessages()\n'))),(0,l.kt)(p.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("p",null,"\u5728Java\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Messages.toMessages(...)")," \u5c06\u591a\u6761\u6d88\u606f\u5143\u7d20\u5408\u5e76\u4e3a\u4e00\u4e2a\u6d88\u606f\u94fe\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e00\u4e2a\u666e\u901a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6587\u5b57 + AT")," \u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final Messages messages = Messages.toMessages(Text.of("\u6587\u5b57"), new At(Identifies.ID(123)));\n')))),(0,l.kt)("p",null,"\u9664\u4e86\u76f4\u63a5\u8f6c\u5316\uff0c\u6838\u5fc3\u5e93\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7528\u4e8e\u6784\u5efa\u6d88\u606f\u94fe\u7684\u6784\u5efa\u5668 ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageBuilder"),"\u3002"),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u5728Kotlin\u4e2d\uff0c\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"buildMessages")," \u6765\u901a\u8fc7\u6784\u5efa\u5668\u6784\u5efa\u4f60\u7684\u6d88\u606f\u94fe\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val messages = buildMessages {\n    // \u63d0\u4f9b\u4e0e\u6807\u51c6\u6d88\u606f\u7c7b\u578b\u4e2d\u5bf9\u5e94\u7684API\n    at(123.ID)\n    atAll()\n    text("\u6587\u672c")\n    \n    // \u901a\u8fc7 `unaryPlus` \u64cd\u4f5c\u7b26\u76f4\u63a5\u6dfb\u52a0\u4e00\u4e2a\u4efb\u610f\u7684 `Message.Element` \u5b9e\u4f8b\u6216\u7eaf\u6587\u672c\n    +"\u8fd8\u662f\u6587\u672c"\n    +At(456.ID)\n    \n    // \u6216\u8005\u4f7f\u7528\u4f20\u7edf\u7684 append. \u6548\u679c\u4e0e `unaryPlus` \u64cd\u4f5c\u7b26\u4e00\u81f4\u3002\n    append(AtAll)\n}\n'))),(0,l.kt)(p.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("p",null,"\u5728Java\u4e2d\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u6784\u5efa\u5b83\u5e76\u4f7f\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final MessagesBuilder messagesBuilder = new MessagesBuilder();\n\nfinal Messages messages = messagesBuilder\n        // \u63d0\u4f9b\u4e0e\u6807\u51c6\u6d88\u606f\u7c7b\u578b\u4e2d\u5bf9\u5e94\u7684API\n        .at(Identifies.ID(123))\n        .atAll()\n        .text("\u6587\u672c")\n        // \u901a\u8fc7append\u8ffd\u52a0\u4efb\u610f Message.Element \u5b9e\u4f8b\u6216\u7eaf\u6587\u672c\n        .append("\u8fd8\u662f\u6587\u672c")\n        .append(new At(Identifies.ID(456)))\n        .append(AtAll.INSTANCE, new Face(Identifies.ID(114)))\n        // \u6784\u5efa\u7ed3\u679c\n        .build();\n')))),(0,l.kt)("h2",{id:"\u6d88\u606f\u94fe\u4f7f\u7528"},"\u6d88\u606f\u94fe\u4f7f\u7528"),(0,l.kt)("p",null,"\u4f60\u5df2\u7ecf\u4e86\u89e3\u4e86\u6d88\u606f\u94fe\u5982\u4f55\u88ab\u6784\u5efa\u51fa\u6765\uff0c\u90a3\u4e48\u63a5\u4e0b\u6765\u4f60\u53ef\u80fd\u9700\u8981\u4e86\u89e3\u5982\u4f55\u4f7f\u7528\u8fd9\u4e2a\u6d88\u606f\u94fe\u3002"),(0,l.kt)("h3",{id:"\u904d\u5386\u6d88\u606f\u94fe"},"\u904d\u5386\u6d88\u606f\u94fe"),(0,l.kt)("p",null,"\u6d88\u606f\u94fe ",(0,l.kt)("inlineCode",{parentName:"p"},"Messages")," \u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"View")," \u63a5\u53e3\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u89c6\u4e3a\u4e00\u4e2a\u8fd1\u4f3c\u4e8e",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u53d8"),"\u5217\u8868\u4f7f\u7528\u3002"),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val messages: Messages = ...\n\nfor (element in messages) {\n    // \u904d\u5386\u6d88\u606f\u94fe\n}\n\n// \u7d22\u5f15\u8bbf\u95ee\nval secondMessage: Message.Element<*> = messages[1]\n\n// \u6d88\u606f\u7c7b\u578b\u8bbf\u95ee\nval ats: List<At> = messages[At]\n"))),(0,l.kt)(p.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final Messages messages = ...;\n\nfor (Message.Element<?> element : messages) {\n    // \u904d\u5386\u6d88\u606f\u94fe\n}\n\n// \u7d22\u5f15\u8bbf\u95ee\nfinal Message.Element<?> secondElement = messages.get(1);\n\n// \u6d88\u606f\u7c7b\u578b\u8bbf\u95ee\nfinal List<At> ats = messages.get(At.Key);\n")))),(0,l.kt)("h3",{id:"\u8ffd\u52a0\u5143\u7d20"},'"\u8ffd\u52a0"\u5143\u7d20'),(0,l.kt)("p",null,"\u4e0a\u6587\u63d0\u5230\u8fc7\uff0c\u6d88\u606f\u662f",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u53d8"),"\u7684\uff0c\u56e0\u6b64\u5982\u679c\u4f60\u60f3\u8981\u5411\u4e00\u4e2a\u6d88\u606f\u94fe\u4e2d",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},'"\u8ffd\u52a0"')),"\u4e00\u4e2a\u6d88\u606f\uff0c\u5176\u5b9e\u4f60\u9700\u8981\u7684\u662f\u5f97\u5230\u4e00\u4e2a\u589e\u52a0\u4e86\u76ee\u6807\u6d88\u606f\u5143\u7d20\u7684\u65b0\u6d88\u606f\u94fe\u3002"),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val messages: Messages = ...\n\n// \u4f7f\u7528 plus \u64cd\u4f5c\u7b26\u8ffd\u52a0\u5e76\u5f97\u5230\u4e00\u4e2a\u65b0\u7684\u6d88\u606f\u94fe\u3002\nval newMessages: Messages = messages + AtAll\n"))),(0,l.kt)(p.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final Messages messages = Messages.messages();\n\n// \u4f7f\u7528 plus \u8ffd\u52a0\u5e76\u5f97\u5230\u4e00\u4e2a\u65b0\u7684\u6d88\u606f\u94fe\u3002\n// \u6ce8\u610f\uff1a\u4e0d\u8981\u4f7f\u7528 .add(...)\uff0c\u8fd9\u5c06\u4f1a\u5f15\u53d1\u5f02\u5e38\u3002\nfinal Messages newMessages = messages.plus(AtAll.INSTANCE);\n")))),(0,l.kt)("h2",{id:"\u6d88\u606f\u53d1\u9001"},"\u6d88\u606f\u53d1\u9001"),(0,l.kt)("p",null,"\u5927\u90e8\u5206\u6d88\u606f\u7684\u53d1\u9001\u80fd\u529b\u7531 ",(0,l.kt)("a",{parentName:"p",href:"../definition/ability-support#sendsupport"},"SendSupport")," \u6216 ",(0,l.kt)("a",{parentName:"p",href:"../definition/ability-support#replysupport"},"ReplySupport")," \u63d0\u4f9b\u3002"),(0,l.kt)("h3",{id:"sendsupport"},"SendSupport"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SendSupport")," \u662f\u63a5\u53e3\u7c7b\u578b\uff0c\u5176\u4ee3\u8868\u4e3a\u4e00\u4e2a\u201c\u53ef\u4ee5\u53d1\u9001\u6d88\u606f\u7684\u76ee\u6807\u201d\uff0c\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"ChatRoom")," (\u804a\u5929\u5ba4) \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Contact")," (\u8054\u7cfb\u4eba) \u9ed8\u8ba4\u5b9e\u73b0\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"ChatRoom")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Group"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Guild"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Channel")," \u7684\u7236\u7c7b\u578b\uff0c\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"Contact")," \u5219\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Friend"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Member")," \u7684\u7236\u7c7b\u3002\n\u7b80\u5355\u6765\u8bb2\uff0c\u57fa\u672c\u4e0a\u5e38\u89c1\u7684\u53ef\u8054\u7cfb\u5bf9\u8c61\u90fd\u662f\u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"SendSupport")," \u7684\u3002"),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val messages: Messages = ...\nval group: Group = ...\n\nval receipt = group.send(messages)\n"))),(0,l.kt)(p.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final Messages messages = ...;\nfinal Group group = ...;\n\nfinal MessageReceipt receipt = group.sendBlocking(messages);\n// \u6216\u8005\nfinal CompletableFuture<? extends MessageReceipt> future = group.sendAsync(messages);\n")))),(0,l.kt)("h3",{id:"replysupport"},"ReplySupport"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ReplySupport")," \u662f\u63a5\u53e3\u7c7b\u578b\uff0c\u5176\u4ee3\u8868\u4e3a\u4e00\u4e2a\u201c\u53ef\u4ee5\u56de\u590d\u6d88\u606f\u7684\u76ee\u6807\u201d\uff0c\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageEvent")," \u9ed8\u8ba4\u5b9e\u73b0\u3002\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"SendSupport")," \u4e0d\u540c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ReplySupport")," \u7684\u9ed8\u8ba4\u5b9e\u73b0\u662f",(0,l.kt)("strong",{parentName:"p"},"\u6d88\u606f\u4e8b\u4ef6"),"\u7c7b\u578b\u3002"),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val messages: Messages = ...\nval event: MessageEvent = ...\n\nval receipt = event.reply(messages)\n"))),(0,l.kt)(p.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final Messages messages = ...;\nfinal MessageEvent event = ...;\n\nfinal MessageReceipt receipt = event.replyBlocking(messages);\n// \u6216\u8005\nfinal CompletableFuture<? extends MessageReceipt> future = event.replyAsync(messages);\n\n")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'"\u53d1\u9001\u6d88\u606f"')," \u548c ",(0,l.kt)("em",{parentName:"p"},'"\u56de\u590d\u6d88\u606f"')," \u7684\u529f\u80fd\u884c\u4e3a\u7c7b\u4f3c\uff0c\u4f46\u53c8\u4e0d\u592a\u4e00\u6837\u3002\u6bd4\u5982\u5728mirai\u7ec4\u4ef6\u4e2d\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"reply"),' \u4f1a\u5c1d\u8bd5\u9ed8\u8ba4\u643a\u5e26\u4e00\u4e2a"\u5f15\u7528\u56de\u590d"\u5bf9\u8c61\u3002\n\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6839\u636e\u4f60\u7684\u5b9e\u9645\u9700\u6c42\u548c\u5177\u4f53\u8bed\u4e49\u6765\u9009\u62e9\u4e00\u4e2a\u5408\u9002\u7684\u6d88\u606f\u53d1\u9001\u65b9\u5f0f\u5427\u3002'),(0,l.kt)("h2",{id:"\u6d88\u606f\u56de\u6267"},"\u6d88\u606f\u56de\u6267"),(0,l.kt)("p",null,"\u5f53\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"SenSupport.send")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplySupport.reply")," \u53d1\u9001\u6d88\u606f\u540e\uff0c\u4f1a\u5f97\u5230\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageReceipt")," \u7c7b\u578b\u7684\u8fd4\u56de\u503c\uff0c\u8fd9\u5c31\u662f ",(0,l.kt)("strong",{parentName:"p"},'"\u6d88\u606f\u56de\u6267"'),"\u3002"),(0,l.kt)("p",null,"\u6d88\u606f\u56de\u6267\u901a\u5e38\u60c5\u51b5\u4e0b\u6765\u7528\u4e8e\u5f97\u77e5\u6d88\u606f\u53d1\u9001\u7684\u60c5\u51b5\u3001\u5b83\u4eec\u7684\u6807\u8bc6\uff0c\u548c\u8fdb\u884c\u5220\u9664\uff08\u64a4\u56de\uff09\u64cd\u4f5c\u3002\n\u4e0d\u8fc7\u5bf9\u4e8e\u4e0d\u540c\u7ec4\u4ef6\u4e2d\u7684\u5b9e\u73b0\u6765\u8bb2\uff0c\u4e5f\u8bb8\u5b83\u4eec\u8fd8\u4f1a\u63d0\u4f9b\u66f4\u591a\u7684\u7279\u6b8a\u80fd\u529b\u3002"),(0,l.kt)("h3",{id:"deletesupport"},"DeleteSupport"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MessageReceipt")," \u5b9e\u73b0\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteSupport"),"\uff0c\u4ee3\u8868\u5176\u662f\u53ef\u4ee5\u88ab ",(0,l.kt)("em",{parentName:"p"},'"\u5220\u9664"')," \u7684\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u8fd9\u79cd\u5220\u9664\u5373\u4ee3\u8868\u4e86\u5e38\u8bf4\u7684",(0,l.kt)("strong",{parentName:"p"},"\u6d88\u606f\u64a4\u56de"),"\u3002"),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val messages: Messages = ...\nval event: MessageEvent = ...\n\nval receipt = event.reply(messages)\nreceipt.delete()\n"))),(0,l.kt)(p.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final Messages messages = ...;\nfinal MessageEvent event = ...;\n\nfinal MessageReceipt receipt = event.replyBlocking(messages);\nreceipt.deleteBlocking();\n\n// \u6216\u8005\nfinal CompletableFuture<? extends MessageReceipt> future = event.replyAsync(messages);\nfuture.thenCompose(DeleteSupport::deleteAsync);\n")))),(0,l.kt)("h3",{id:"\u72ec\u7acb\u4e0e\u805a\u5408"},"\u72ec\u7acb\u4e0e\u805a\u5408"),(0,l.kt)("p",null,"\u5728\u4e0d\u540c\u7684\u7ec4\u4ef6\u4e2d\uff0c\u6d88\u606f\u53d1\u9001\u7684\u5177\u4f53\u903b\u8f91\u53ef\u80fd\u5e76\u4e0d\u76f8\u540c\u3002\u53d1\u9001\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Messages")," \u53ef\u80fd\u4f1a\u6839\u636e\u7ec4\u4ef6\u7684\u4e0d\u540c\u800c\u88ab",(0,l.kt)("strong",{parentName:"p"},"\u62c6\u5206"),"\u4e3a\u591a\u6761\u5b9e\u9645\u6d88\u606f\u53d1\u9001\uff08\u4f8b\u5982 Kook \u7ec4\u4ef6\u4e2d\u53d1\u9001\u4e00\u4e2a\u65e2\u6709\u56fe\u7247\u53c8\u6709\u6587\u5b57\u7684\u6d88\u606f\uff09\u3002\n\u4f46\u662f\u4e00\u6b21\u53d1\u9001\u53ea\u4f1a\u5f97\u5230\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageReceipt")," \uff0c\u90a3\u4e48\u5e94\u8be5\u5982\u4f55\u5224\u65ad\u6b64\u56de\u6267\u4e2d\u5b9e\u9645\u7684\u6570\u91cf\u5462\uff1f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MessageReceipt")," \u63d0\u4f9b\u4e86\u4e24\u4e2a\u6807\u51c6\u5b50\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"SingleMessageReceipt")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"AggregatedMessageReceipt"),"\u3002"),(0,l.kt)("h4",{id:"singlemessagereceipt"},"SingleMessageReceipt"),(0,l.kt)("p",null,"\u5982\u540c\u5b57\u9762\u610f\u601d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"SingleMessageReceipt")," \u4ee3\u8868\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u6216\u96f6\u4e2a"),"\u5b9e\u9645\u6d88\u606f\u53d1\u9001\u540e\u7684\u56de\u6267\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"SingleMessageReceipt")," \u989d\u5916\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\uff0c\u5176\u4ee3\u8868\u8fd9\u4e2a\u5177\u4f53\u6d88\u606f\u53d1\u9001\u540e\u7684\u56de\u6267\u6807\u8bc6\u3002"),(0,l.kt)("h4",{id:"aggregatedmessagereceipt"},"AggregatedMessageReceipt"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AggregatedMessageReceipt")," \u610f\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u805a\u5408\u56de\u6267"),"\uff0c\u4ee3\u8868\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u591a\u4e2a"),"\u5b9e\u9645\u6d88\u606f\u53d1\u9001\u540e\u7684\u56de\u6267\u3002\n\u9996\u5148\u6765\u7b80\u5355\u770b\u4e00\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"AggregatedMessageReceipt")," \u7684\u7b80\u5316\u7248\u5b9a\u4e49\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"\n/**\n * \u805a\u5408\u6d88\u606f\u56de\u6267\uff0c\u4ee3\u8868\u591a\u4e2a [SingleMessageReceipt] \u7684\u805a\u5408\u4f53\u3002\n *\n * @see StandardMessageReceipt\n * @see SingleMessageReceipt\n * @see aggregation\n */\npublic abstract class AggregatedMessageReceipt : StandardMessageReceipt(), Iterable<SingleMessageReceipt> {\n    \n    /**\n     * \u805a\u5408\u6d88\u606f\u4e2d\u7684 [isSuccess] \u4ee3\u8868\u662f\u5426\u5b58\u5728**\u4efb\u610f**\u56de\u6267\u7684 [MessageReceipt.isSuccess] \u4e3a `true`\u3002\n     */\n    abstract override val isSuccess: Boolean\n    \n    /**\n     * \u5f53\u524d\u805a\u5408\u6d88\u606f\u4e2d\u5305\u542b\u7684\u6240\u6709 [MessageReceipt] \u7684\u6570\u91cf\u3002\n     */\n    public abstract val size: Int\n    \n    /**\n     * \u6839\u636e\u7d22\u5f15\u503c\u83b7\u53d6\u5230\u6307\u5b9a\u4f4d\u7f6e\u7684 [SingleMessageReceipt]\u3002\n     */\n    public abstract operator fun get(index: Int): SingleMessageReceipt\n    \n    /**\n     * \u5220\u9664\u5176\u6240\u4ee3\u8868\u7684\u6240\u6709\u6d88\u606f\u56de\u6267\u3002\n     */\n    override suspend fun delete(): Boolean\n    \n    /**\n     * \u5220\u9664\u5176\u6240\u4ee3\u8868\u7684\u6240\u6709\u6d88\u606f\u56de\u6267\u3002\n     */\n    public suspend fun deleteAll(): Int\n}\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"AggregatedMessageReceipt")," \u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Iterable<SingleMessageReceipt>"),"\uff0c\u8bf4\u660e ",(0,l.kt)("inlineCode",{parentName:"p"},"AggregatedMessageReceipt")," \u5b9e\u9645\u4e0a\u5c31\u662f\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"SingleMessageReceipt")," \u7684\u805a\u5408\u4f53\u3002\n\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e9b\u989d\u5916\u7684\u5143\u7d20\u83b7\u53d6API\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"get"),"\uff09\u548c\u96c6\u5408\u5c5e\u6027\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"size"),"\uff09\uff0c\u5e76\u540c\u6837\u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"delete"),"\u3002"),(0,l.kt)("p",null,"\u6b64\u5904\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," \u4fbf\u4ee3\u8868",(0,l.kt)("strong",{parentName:"p"},"\u5220\u9664\u6240\u6709"),"\uff0c\u5b83\u4f1a\u4f9d\u6b21\u904d\u5386\u5185\u90e8\u7684\u6240\u6709\u72ec\u7acb\u56de\u6267\uff0c\u5e76\u5c1d\u8bd5\u5220\u9664\u5b83\u3002"),(0,l.kt)("admonition",{title:"\u53ef\u80fd\u7684\u4e2d\u65ad",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u7684\u65f6\uff0c\u5982\u679c\u5728\u5220\u9664\u6240\u6709\u7684\u8fc7\u7a0b\u4e2d\u53d1\u751f\u4e86\u5f02\u5e38\uff0c\u5219\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8fd9\u4e2a\u5220\u9664\u6240\u6709\u8fc7\u7a0b\u6267\u884c\u7684",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u5b8c\u6574"),"\u3002\u5982\u679c\u60f3\u8981\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u5219\u9700\u8981\u81ea\u884c\u901a\u8fc7\u5faa\u73af\u6765\u7cbe\u51c6\u63a7\u5236\u3002")))}g.isMDXComponent=!0},8209:(e,t,a)=>{a.d(t,{G:()=>p});var n=a(7294),l=a(7273);const s="light";const p=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),p=document.querySelector("html"),[r,i]=(0,n.useState)(!1),o=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??s;a!==s&&"dark"!==a&&(a=s);const n=a===s?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(p,a)),[a,r]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){i((e=>!e));break}}));return e.observe(p,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?l.Z.initialize({startOnLoad:!0,...a.mermaid,theme:o}):l.Z.initialize({startOnLoad:!0,theme:o}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),l.Z.contentLoaded())}),[a,o]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(l.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);