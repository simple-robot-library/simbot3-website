"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[7291],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7462),l=a(7294),r=a(6010),s=a(2389),o=a(7392),i=a(7094),p=a(2466);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:a,block:s,defaultValue:u,values:k,groupId:c,className:v}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=k??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,o.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:C}=(0,i.U)(),[f,T]=(0,l.useState)(h),Z=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=c){const e=y[c];null!=e&&e!==f&&N.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=Z.indexOf(t),n=N[a].value;n!==f&&(E(t),T(n),null!=c&&C(c,String(n)))},M=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=Z.indexOf(e.currentTarget)+1;a=Z[t]??Z[0];break}case"ArrowLeft":{const t=Z.indexOf(e.currentTarget)-1;a=Z[t]??Z[Z.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},v)},N.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>Z.push(e),onKeyDown:M,onClick:x},s,{className:(0,r.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":f===t})}),a??t)}))),a?(0,l.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function k(e){const t=(0,s.Z)();return l.createElement(u,(0,n.Z)({key:String(t)},e))}},1610:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);const l="label_Yf5u";function r(e){let{type:t,href:a,children:r,title:s}=e;t=t||"primary",s=s||"";const o=n.createElement("span",{className:l,title:s},n.createElement("span",{className:`badge badge--${t}`},r));return null!=a&&a.length>0?n.createElement("a",{href:a},o):o}},7904:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=a(7462),l=(a(7294),a(3905)),r=(a(8209),a(1610)),s=a(5488),o=a(5162);a(814);const i={title:"\u6d88\u606f\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},p=void 0,d={unversionedId:"definition/event-overview/standard-event/message-event/index",id:"definition/event-overview/standard-event/message-event/index",title:"\u6d88\u606f\u4e8b\u4ef6",description:"\u4e00\u4e9b\u4e0e \u6d88\u606f \u76f8\u5173\u7684\u4e8b\u4ef6\u7c7b\u578b\u3002",source:"@site/docs/definition/event-overview/standard-event/message-event/index.md",sourceDirName:"definition/event-overview/standard-event/message-event",slug:"/definition/event-overview/standard-event/message-event/",permalink:"/docs/definition/event-overview/standard-event/message-event/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/definition/event-overview/standard-event/message-event/index.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1674798388,formattedLastUpdatedAt:"Jan 27, 2023",frontMatter:{title:"\u6d88\u606f\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u5bf9\u8c61\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/objective-event/"},next:{title:"\u8bf7\u6c42\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/request-event/"}},m={},u=[{value:"MessageEvent",id:"messageevent",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:3},{value:"ReplySupport",id:"replysupport",level:3},{value:"DeleteSupport",id:"deletesupport",level:3},{value:"ContactMessageEvent",id:"contactmessageevent",level:2},{value:"FriendMessageEvent",id:"friendmessageevent",level:2},{value:"ChatRoomMessageEvent",id:"chatroommessageevent",level:2},{value:"GroupMessageEvent",id:"groupmessageevent",level:2},{value:"ChannelMessageEvent",id:"channelmessageevent",level:2},{value:"<em>MessageReactedEvent</em>",id:"messagereactedevent",level:2}],k={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e00\u4e9b\u4e0e ",(0,l.kt)("strong",{parentName:"p"},"\u6d88\u606f")," \u76f8\u5173\u7684\u4e8b\u4ef6\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u6d88\u606f\u4e8b\u4ef6\u901a\u5e38\u4f1a\u914d\u5408\u7740 ",(0,l.kt)("a",{parentName:"p",href:"../objective-event"},"\u5bf9\u8c61\u4e8b\u4ef6")," \u8fdb\u884c\u5b9e\u73b0\u3002"),(0,l.kt)("h2",{id:"messageevent"},"MessageEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"api.message"),(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"RemoteMessageContainer"),(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"ReplySupport")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MessageEvent")," \u662f\u6240\u6709 ",(0,l.kt)("strong",{parentName:"p"},"\u6d88\u606f\u4e8b\u4ef6")," \u7684\u57fa\u7840\u7236\u7c7b\u578b\u3002"),(0,l.kt)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MessageEvent")," \u63d0\u4f9b\u4e86\u83b7\u53d6\u4e0b\u8ff0\u5c5e\u6027\u7684\u80fd\u529b:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Objectives")),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u6d88\u606f\u4e8b\u4ef6\u53d1\u751f\u7684\u4e3b\u8981\u6e90\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"messageContent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RemoteMessageContent")),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u6d88\u606f\u4e8b\u4ef6\u6240\u6536\u5230\u7684\u6d88\u606f\u3002")))),(0,l.kt)("admonition",{title:"\u7701\u7565",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0a\u8ff0\u5c5e\u6027\u5b9a\u4e49\u5728\u540e\u7eed\u4e8b\u4ef6\u4e2d\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u5219\u5c06\u4e0d\u518d\u8d58\u8ff0\u3002")),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val source: Objectives = event.source()\nval messageContent: ReceivedMessageContent = event.messageContent\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Objectives source = event.getSource();\nReceivedMessageContent messageContent = event.getMessageContent();\n")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"source")," \u7684\u503c\u53ef\u80fd\u4f1a\u968f\u7740\u5f53\u524d\u4e8b\u4ef6\u7684\u5177\u4f53\u542b\u4e49\u8303\u56f4\u800c\u53d8\u5316\u3002\u5177\u4f53\u7ec6\u8282\u53ef\u53c2\u8003\u540e\u7eed\u7684\u5176\u4ed6\u4e8b\u4ef6\u3002"),(0,l.kt)("h3",{id:"replysupport"},"ReplySupport"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MessageEvent")," \u7ee7\u627f ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplySupport"),"\uff0c\u5bf9\u4e8e\u6d88\u606f\u4e8b\u4ef6\u6765\u8bb2\u5b83\u603b\u662f ",(0,l.kt)("em",{parentName:"p"},"\u671f\u671b")," \u5b9e\u73b0\u8005\u62e5\u6709 ",(0,l.kt)("strong",{parentName:"p"},"\u6d88\u606f\u56de\u590d(",(0,l.kt)("inlineCode",{parentName:"strong"},"reply"),")")," \u7684\u80fd\u529b\u3002"),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val message: Message = ...\nval receipt: MessageReceipt = event.reply(message)\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Message message = ...;\nMessageReceipt receipt = event.replyBlocking(message);\n")))),(0,l.kt)("h3",{id:"deletesupport"},"DeleteSupport"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MessageEvent")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageContent")," \u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteSupport"),"\u3002\u5728\u9884\u671f\u5185\u4e14\u6743\u9650\u5141\u8bb8\u7684\u60c5\u51b5\u4e0b\uff0c\u4ee3\u8868\u5176\u80fd\u591f\u5bf9\u6b64\u6d88\u606f\u8fdb\u884c ",(0,l.kt)("strong",{parentName:"p"},"\u5220\u9664")," \u3002\n\u901a\u5e38\u8fd9\u79cd\u884c\u4e3a\u53ef\u4ee5\u7406\u89e3\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"\u64a4\u56de"),"\u3002"),(0,l.kt)("admonition",{title:"\u5e76\u975e\u5176\u672c\u8eab",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4e8b\u4ef6\u7c7b\u578b",(0,l.kt)("strong",{parentName:"p"},"\u672c\u8eab"),"\u5e76\u4e0d\u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteSupport"),"\u3002")),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val messageContent: MessageContent = event.messageContent\n\nval isDeleted: Boolean = messageContent.delete()\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"MessageContent messageContent = event.getMessageContent();\nmessageContent.deleteBlocking();\n// or messageContent.deleteAsync();\n")))),(0,l.kt)("h2",{id:"contactmessageevent"},"ContactMessageEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"api.contact_message"),(0,l.kt)("a",{href:"#messageevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"MessageEvent")),(0,l.kt)("a",{href:"../objective-event/#userevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"UserEvent"))),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"ContactMessageEvent")," \u4e2d\uff0c\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"user")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"source")," \u8fd4\u56de\u7c7b\u578b\u4e00\u81f4\uff0c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," \u7c7b\u578b\u3002"),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val user: User = event.user()\n// same as\nval source: User = event.source()\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"User user = event.getUser();\n// same as\nUser source = event.getSource();\n")))),(0,l.kt)("h2",{id:"friendmessageevent"},"FriendMessageEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"api.friend_message"),(0,l.kt)("a",{href:"#contactmessageevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"ContactMessageEvent")),(0,l.kt)("a",{href:"../objective-event/#friendevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"FriendEvent"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"friend")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Friend")),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u6d88\u606f\u4e8b\u4ef6\u4e2d\u6d88\u606f\u7684\u53d1\u9001\u8005\u5bf9\u8c61\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user")),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source")),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")))),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val friend: Friend = event.friend()\nval user: Friend = event.user()\nval source: Friend = event.source()\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Friend friend = event.getFriend();\nFriend user = event.getUser();\nFriend source = event.getSource();\n")))),(0,l.kt)("h2",{id:"chatroommessageevent"},"ChatRoomMessageEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"api.chat_room_message"),(0,l.kt)("a",{href:"#messageevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"MessageEvent")),(0,l.kt)("a",{href:"#organizationevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"OrganizationEvent")),(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"MessageContainer")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"ChatRoomMessageEvent")," \u4e2d\uff0c\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"source")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"ChatRoom")," \u7c7b\u578b\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"author")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Member")),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u6d88\u606f\u4e8b\u4ef6\u4e2d\u6d88\u606f\u7684\u53d1\u9001\u8005\u5bf9\u8c61\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ChatRoom")),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u6d88\u606f\u4e8b\u4ef6\u53d1\u751f\u6240\u5728\u7684\u804a\u5929\u5ba4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"organization")),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")))),(0,l.kt)("p",null,"\u5728 Kotlin \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ChatRoomMessageEvent")," \u4e3a\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"author")," \u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inAuthor { // this: Author\n   // ...\n}\nevent.useAuthor { author: Author ->\n   // ...\n}\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Member author = event.getAuthor();\nChatRoom source = event.getSource();\nRemoteMessageContent messageContent = event.getMessageContent();\n\nboolean isDeleted = event.deleteBlocking();\n")))),(0,l.kt)("h2",{id:"groupmessageevent"},"GroupMessageEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"api.group_message"),(0,l.kt)("a",{href:"#chatroommessageevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"ChatRoomMessageEvent")),(0,l.kt)("a",{href:"../objective-event/#groupevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"GroupEvent"))),(0,l.kt)("p",null,"\u4e00\u4e2a\u6765\u81ea\u4e8e ",(0,l.kt)("strong",{parentName:"p"},"\u7fa4")," \u7684\u6d88\u606f\u4e8b\u4ef6\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Group")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u4e8b\u4ef6\u6240\u6765\u6e90\u7684\u7fa4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"group")),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")))),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val source: Group = event.source()\nval group: Group = event.group()\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Group source = event.getSource();\nGroup group = event.getGroup();\n")))),(0,l.kt)("h2",{id:"channelmessageevent"},"ChannelMessageEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"api.channel_message"),(0,l.kt)("a",{href:"#chatroommessageevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"ChatRoomMessageEvent")),(0,l.kt)("a",{href:"../objective-event/#channelevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"ChannelEvent"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Channel")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u4e8b\u4ef6\u6240\u6765\u6e90\u7684\u5b50\u9891\u9053\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"channel")),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")))),(0,l.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val source: Channel = event.source()\nval channel: Channel = event.channel()\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Channel source = event.getSource();\nChannel channel = event.getChannel();\n")))),(0,l.kt)("h2",{id:"messagereactedevent"},(0,l.kt)("em",{parentName:"h2"},"MessageReactedEvent")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5c1a\u672a\u6295\u5165\u4f7f\u7528")))}c.isMDXComponent=!0},8209:(e,t,a)=>{a.d(t,{G:()=>s});var n=a(7294),l=a(7273);const r="light";const s=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),s=document.querySelector("html"),[o,i]=(0,n.useState)(!1),p=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??r;a!==r&&"dark"!==a&&(a=r);const n=a===r?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(s,a)),[a,o]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){i((e=>!e));break}}));return e.observe(s,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?l.Z.initialize({startOnLoad:!0,...a.mermaid,theme:p}):l.Z.initialize({startOnLoad:!0,theme:p}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),l.Z.contentLoaded())}),[a,p]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(l.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);