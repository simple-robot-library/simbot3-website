(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[7291],{5162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},4866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>C});var n=a(7462),r=a(7294),l=a(6010),s=a(6775),o=a(1980),i=a(7392),u=a(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,d]=c({queryString:a,groupId:n}),[k,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=i??k;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=a(2466),g=a(2389);const N="tabList__CuJ",b="tabItem_LNqP";function h(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,v.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=i[a].value;n!==s&&(d(t),o(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function C(e){const t=(0,g.Z)();return r.createElement(f,(0,n.Z)({key:String(t)},e))}},1610:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(7294);const r="label_Yf5u";function l(e){let{type:t,href:a,children:l,title:s}=e;t=t||"primary",s=s||"";const o=n.createElement("span",{className:r,title:s},n.createElement("span",{className:`badge badge--${t}`},l));return null!=a&&a.length>0?n.createElement("a",{href:a},o):o}},7904:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=(a(8209),a(1610)),s=a(4866),o=a(5162);a(814);const i={title:"\u6d88\u606f\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},u=void 0,d={unversionedId:"definition/event-overview/standard-event/message-event/index",id:"definition/event-overview/standard-event/message-event/index",title:"\u6d88\u606f\u4e8b\u4ef6",description:"\u4e00\u4e9b\u4e0e \u6d88\u606f \u76f8\u5173\u7684\u4e8b\u4ef6\u7c7b\u578b\u3002",source:"@site/docs/definition/event-overview/standard-event/message-event/index.md",sourceDirName:"definition/event-overview/standard-event/message-event",slug:"/definition/event-overview/standard-event/message-event/",permalink:"/docs/definition/event-overview/standard-event/message-event/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/definition/event-overview/standard-event/message-event/index.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1682267096,formattedLastUpdatedAt:"2023\u5e744\u670823\u65e5",frontMatter:{title:"\u6d88\u606f\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u5bf9\u8c61\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/objective-event/"},next:{title:"\u8bf7\u6c42\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/request-event/"}},p={},m=[{value:"MessageEvent",id:"messageevent",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:3},{value:"ReplySupport",id:"replysupport",level:3},{value:"DeleteSupport",id:"deletesupport",level:3},{value:"ContactMessageEvent",id:"contactmessageevent",level:2},{value:"FriendMessageEvent",id:"friendmessageevent",level:2},{value:"ChatRoomMessageEvent",id:"chatroommessageevent",level:2},{value:"GroupMessageEvent",id:"groupmessageevent",level:2},{value:"ChannelMessageEvent",id:"channelmessageevent",level:2},{value:"<em>MessageReactedEvent</em>",id:"messagereactedevent",level:2}],c={toc:m};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e00\u4e9b\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u6d88\u606f")," \u76f8\u5173\u7684\u4e8b\u4ef6\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u6d88\u606f\u4e8b\u4ef6\u901a\u5e38\u4f1a\u914d\u5408\u7740 ",(0,r.kt)("a",{parentName:"p",href:"../objective-event"},"\u5bf9\u8c61\u4e8b\u4ef6")," \u8fdb\u884c\u5b9e\u73b0\u3002"),(0,r.kt)("h2",{id:"messageevent"},"MessageEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.message"),(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"RemoteMessageContainer"),(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ReplySupport")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MessageEvent")," \u662f\u6240\u6709 ",(0,r.kt)("strong",{parentName:"p"},"\u6d88\u606f\u4e8b\u4ef6")," \u7684\u57fa\u7840\u7236\u7c7b\u578b\u3002"),(0,r.kt)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MessageEvent")," \u63d0\u4f9b\u4e86\u83b7\u53d6\u4e0b\u8ff0\u5c5e\u6027\u7684\u80fd\u529b:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Objectives")),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u6d88\u606f\u4e8b\u4ef6\u53d1\u751f\u7684\u4e3b\u8981\u6e90\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"messageContent")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RemoteMessageContent")),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u6d88\u606f\u4e8b\u4ef6\u6240\u6536\u5230\u7684\u6d88\u606f\u3002")))),(0,r.kt)("admonition",{title:"\u7701\u7565",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0a\u8ff0\u5c5e\u6027\u5b9a\u4e49\u5728\u540e\u7eed\u4e8b\u4ef6\u4e2d\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u5219\u5c06\u4e0d\u518d\u8d58\u8ff0\u3002")),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val source: Objectives = event.source()\nval messageContent: ReceivedMessageContent = event.messageContent\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Objectives source = event.getSource();\nReceivedMessageContent messageContent = event.getMessageContent();\n")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"source")," \u7684\u503c\u53ef\u80fd\u4f1a\u968f\u7740\u5f53\u524d\u4e8b\u4ef6\u7684\u5177\u4f53\u542b\u4e49\u8303\u56f4\u800c\u53d8\u5316\u3002\u5177\u4f53\u7ec6\u8282\u53ef\u53c2\u8003\u540e\u7eed\u7684\u5176\u4ed6\u4e8b\u4ef6\u3002"),(0,r.kt)("h3",{id:"replysupport"},"ReplySupport"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MessageEvent")," \u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplySupport"),"\uff0c\u5bf9\u4e8e\u6d88\u606f\u4e8b\u4ef6\u6765\u8bb2\u5b83\u603b\u662f ",(0,r.kt)("em",{parentName:"p"},"\u671f\u671b")," \u5b9e\u73b0\u8005\u62e5\u6709 ",(0,r.kt)("strong",{parentName:"p"},"\u6d88\u606f\u56de\u590d(",(0,r.kt)("inlineCode",{parentName:"strong"},"reply"),")")," \u7684\u80fd\u529b\u3002"),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val message: Message = ...\nval receipt: MessageReceipt = event.reply(message)\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Message message = ...;\nMessageReceipt receipt = event.replyBlocking(message);\n")))),(0,r.kt)("h3",{id:"deletesupport"},"DeleteSupport"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MessageEvent")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageContent")," \u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"DeleteSupport"),"\u3002\u5728\u9884\u671f\u5185\u4e14\u6743\u9650\u5141\u8bb8\u7684\u60c5\u51b5\u4e0b\uff0c\u4ee3\u8868\u5176\u80fd\u591f\u5bf9\u6b64\u6d88\u606f\u8fdb\u884c ",(0,r.kt)("strong",{parentName:"p"},"\u5220\u9664")," \u3002\n\u901a\u5e38\u8fd9\u79cd\u884c\u4e3a\u53ef\u4ee5\u7406\u89e3\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u64a4\u56de"),"\u3002"),(0,r.kt)("admonition",{title:"\u5e76\u975e\u5176\u672c\u8eab",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e8b\u4ef6\u7c7b\u578b",(0,r.kt)("strong",{parentName:"p"},"\u672c\u8eab"),"\u5e76\u4e0d\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"DeleteSupport"),"\u3002")),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val messageContent: MessageContent = event.messageContent\n\nval isDeleted: Boolean = messageContent.delete()\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"MessageContent messageContent = event.getMessageContent();\nmessageContent.deleteBlocking();\n// or messageContent.deleteAsync();\n")))),(0,r.kt)("h2",{id:"contactmessageevent"},"ContactMessageEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.contact_message"),(0,r.kt)("a",{href:"#messageevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"MessageEvent")),(0,r.kt)("a",{href:"../objective-event/#userevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"UserEvent"))),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ContactMessageEvent")," \u4e2d\uff0c\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," \u8fd4\u56de\u7c7b\u578b\u4e00\u81f4\uff0c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u7c7b\u578b\u3002"),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val user: User = event.user()\n// same as\nval source: User = event.source()\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"User user = event.getUser();\n// same as\nUser source = event.getSource();\n")))),(0,r.kt)("h2",{id:"friendmessageevent"},"FriendMessageEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.friend_message"),(0,r.kt)("a",{href:"#contactmessageevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ContactMessageEvent")),(0,r.kt)("a",{href:"../objective-event/#friendevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"FriendEvent"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"friend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Friend")),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u6d88\u606f\u4e8b\u4ef6\u4e2d\u6d88\u606f\u7684\u53d1\u9001\u8005\u5bf9\u8c61\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")))),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val friend: Friend = event.friend()\nval user: Friend = event.user()\nval source: Friend = event.source()\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Friend friend = event.getFriend();\nFriend user = event.getUser();\nFriend source = event.getSource();\n")))),(0,r.kt)("h2",{id:"chatroommessageevent"},"ChatRoomMessageEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.chat_room_message"),(0,r.kt)("a",{href:"#messageevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"MessageEvent")),(0,r.kt)("a",{href:"#organizationevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"OrganizationEvent")),(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"MessageContainer")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatRoomMessageEvent")," \u4e2d\uff0c\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatRoom")," \u7c7b\u578b\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"author")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Member")),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u6d88\u606f\u4e8b\u4ef6\u4e2d\u6d88\u606f\u7684\u53d1\u9001\u8005\u5bf9\u8c61\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ChatRoom")),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u6d88\u606f\u4e8b\u4ef6\u53d1\u751f\u6240\u5728\u7684\u804a\u5929\u5ba4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"organization")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")))),(0,r.kt)("p",null,"\u5728 Kotlin \u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ChatRoomMessageEvent")," \u4e3a\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"author")," \u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inAuthor { // this: Author\n   // ...\n}\nevent.useAuthor { author: Author ->\n   // ...\n}\n")),(0,r.kt)("h2",{id:"groupmessageevent"},"GroupMessageEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.group_message"),(0,r.kt)("a",{href:"#chatroommessageevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ChatRoomMessageEvent")),(0,r.kt)("a",{href:"../objective-event/#groupevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"GroupEvent"))),(0,r.kt)("p",null,"\u4e00\u4e2a\u6765\u81ea\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"\u7fa4")," \u7684\u6d88\u606f\u4e8b\u4ef6\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Group")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b64\u4e8b\u4ef6\u6240\u6765\u6e90\u7684\u7fa4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"group")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")))),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val source: Group = event.source()\nval group: Group = event.group()\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Group source = event.getSource();\nGroup group = event.getGroup();\n")))),(0,r.kt)("h2",{id:"channelmessageevent"},"ChannelMessageEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.channel_message"),(0,r.kt)("a",{href:"#chatroommessageevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ChatRoomMessageEvent")),(0,r.kt)("a",{href:"../objective-event/#channelevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ChannelEvent"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Channel")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b64\u4e8b\u4ef6\u6240\u6765\u6e90\u7684\u5b50\u9891\u9053\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"channel")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")))),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val source: Channel = event.source()\nval channel: Channel = event.channel()\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Channel source = event.getSource();\nChannel channel = event.getChannel();\n")))),(0,r.kt)("h2",{id:"messagereactedevent"},(0,r.kt)("em",{parentName:"h2"},"MessageReactedEvent")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5c1a\u672a\u6295\u5165\u4f7f\u7528")))}k.isMDXComponent=!0},1748:(e,t,a)=>{var n={"./locale":9234,"./locale.js":9234};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=1748},8209:(e,t,a)=>{"use strict";a.d(t,{G:()=>s});var n=a(7294),r=a(1304);const l="light";const s=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),s=document.querySelector("html"),[o,i]=(0,n.useState)(!1),u=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??l;a!==l&&"dark"!==a&&(a=l);const n=a===l?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(s,a)),[a,o]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){i((e=>!e));break}}));return e.observe(s,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?r.Z.initialize({startOnLoad:!0,...a.mermaid,theme:u}):r.Z.initialize({startOnLoad:!0,theme:u}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[a,u]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);