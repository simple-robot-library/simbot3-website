"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[1205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),v=r,m=c["".concat(u,".").concat(v)]||c[v]||d[v]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),u=n(7094),s=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n;const{lazy:i,block:c,defaultValue:v,values:m,groupId:k,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===v?v:null!=(t=null!=v?v:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:q,setTabGroupChoices:h}=(0,u.U)(),[E,T]=(0,r.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=k){const e=q[k];null!=e&&e!==E&&f.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==E&&(C(t),T(a),null!=k&&h(k,String(a)))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;n=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>x.push(e),onKeyDown:R,onFocus:w,onClick:w},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function v(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},1610:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="label_Yf5u";function l(e){let{type:t,href:n,children:l}=e;t=t||"primary";const i=a.createElement("span",{className:r},a.createElement("span",{className:"badge badge--"+t},l));return null!=n&&n.length>0?a.createElement("a",{href:n},i):i}},9496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(1610),i=n(5488),o=n(5162);n(814);const u={title:"\u8bf7\u6c42\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},s=void 0,p={unversionedId:"defition/event-overview/standard-event/request-event/index",id:"defition/event-overview/standard-event/request-event/index",title:"\u8bf7\u6c42\u4e8b\u4ef6",description:"\u4e0e\u8bf7\u6c42\u76f8\u5173\u7684\u7cfb\u5217\u4e8b\u4ef6\u3002",source:"@site/docs/defition/event-overview/standard-event/request-event/index.md",sourceDirName:"defition/event-overview/standard-event/request-event",slug:"/defition/event-overview/standard-event/request-event/",permalink:"/docs/defition/event-overview/standard-event/request-event/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/defition/event-overview/standard-event/request-event/index.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1665991410,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"\u8bf7\u6c42\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u6d88\u606f\u4e8b\u4ef6",permalink:"/docs/defition/event-overview/standard-event/message-event/"},next:{title:"\u53d8\u66f4\u4e8b\u4ef6",permalink:"/docs/defition/event-overview/standard-event/change-event/"}},d={},c=[{value:"RequestEvent",id:"requestevent",level:2},{value:"RequestEvent.Type",id:"requesteventtype",level:3},{value:"JoinRequestEvent",id:"joinrequestevent",level:2},{value:"GuildRequestEvent",id:"guildrequestevent",level:2},{value:"GuildJoinRequestEvent",id:"guildjoinrequestevent",level:2},{value:"GroupRequestEvent",id:"grouprequestevent",level:2},{value:"GroupJoinRequestEvent",id:"groupjoinrequestevent",level:2},{value:"ChannelRequestEvent",id:"channelrequestevent",level:2},{value:"UserRequestEvent",id:"userrequestevent",level:2},{value:"FriendRequestEvent",id:"friendrequestevent",level:2},{value:"FriendAddRequestEvent",id:"friendaddrequestevent",level:2}],v={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0e\u8bf7\u6c42\u76f8\u5173\u7684\u7cfb\u5217\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"requestevent"},"RequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.request"),(0,r.kt)("a",{href:"../../../container-overview/#userinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"UserInfoContainer"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u4e8b\u4ef6")," \u7684\u57fa\u7840\u7236\u7c7b\u63a5\u53e3\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String?")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u7533\u8bf7\u4e8b\u4ef6\u53ef\u80fd\u4f1a\u5b58\u5728\u9644\u52a0\u7684",(0,r.kt)("strong",{parentName:"td"},"\u6587\u672c\u6d88\u606f")," \u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"requester")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UserInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b64\u7533\u8bf7\u4e8b\u4ef6\u7684",(0,r.kt)("strong",{parentName:"td"},"\u7533\u8bf7\u4eba")," \u3002 \u5bf9\u4e8e\u4e00\u4e2a\u7533\u8bf7\u8005\u4e0d\u80fd\u4fdd\u8bc1\u53ef\u4ee5\u4f5c\u4e3a\u5b8c\u5168\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"User")," \u4f7f\u7528\uff0c\u56e0\u6b64\u7c7b\u578b\u4ec5\u4fdd\u7559\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"UserInfo"),"\uff0c\u5373\u4ec5\u63d0\u4f9b\u6b64\u7528\u6237\u7684\u57fa\u7840\u4fe1\u606f\u83b7\u53d6\u80fd\u529b\u3002\u5728\u4e00\u4e9b\u7533\u8bf7\u4eba\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"Bot")," \u81ea\u8eab\u7684\u60c5\u51b5\u65f6\uff08\u6bd4\u5982bot\u88ab\u9080\u8bf7\uff09\u6b64\u5c5e\u6027\u503c\u53ef\u80fd\u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"bot")," \u5c5e\u6027\u76f8\u540c\u6216\u7c7b\u4f3c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RequestEvent.Type")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u7c7b\u578b")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"accept()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u610f/\u63a5\u53d7 \u6b64\u8bf7\u6c42 \u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reject()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd\u6b64\u8bf7\u6c42 \u3002")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728api\u4e2d\uff0c\u6240\u6709\u7684api\u5728Java\u4e2d\u7684\u8868\u73b0\u90fd\u4f1a\u5728\u540d\u79f0\u540e\u8ffd\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},'"Blocking"')," \u540e\u7f00\u3002\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"accept()")," \u5728Java\u4e2d\u8868\u73b0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptBlocking()"),"\u3002")),(0,r.kt)("h3",{id:"requesteventtype"},"RequestEvent.Type"),(0,r.kt)("p",null,"\u679a\u4e3e\u7c7b\u578b\uff0c\u4ee3\u8868\u5f53\u524d\u8bf7\u6c42\u4e8b\u4ef6\u7684\u7c7b\u578b\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5143\u7d20"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APPLICATION")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u7684\u7533\u8bf7\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INVITATION")),(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u7684\u7533\u8bf7\uff08\u4f8b\u5982\u88ab\u9080\u8bf7\uff09\u3002")))),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val message: String? = event.message\nval requester: UserInfo = event.requester()\nval user: UserInfo = event.user()\nval type: RequestEvent.Type = event.type\n//\nval isAccpeted: Boolean = event.accept()\nval isRejected: Boolean = event.reject()\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"String message = event.getMessage();\nUserInfo requester = event.getRequester();\nUserInfo user = event.getUser();\nRequestEvent.Type type = event.getType();\n//\nboolean isAccpeted = event.acceptBlocking();\nboolean isRejected = event.rejectBlocking();\n")))),(0,r.kt)("h2",{id:"joinrequestevent"},"JoinRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.join_request"),(0,r.kt)("a",{href:"#requestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"RequestEvent"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RequestEvent")," \u7684\u5b50\u7c7b\u578b\uff0c\u6cdb\u6307\u4e00\u4e2a\u53ef\u4ee5\u8868\u793a\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u52a0\u5165/\u6dfb\u52a0\u7533\u8bf7")," \u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002\u5e38\u89c1\u4e8e\u5165\u7fa4\u7533\u8bf7\u3001\u597d\u53cb\u6dfb\u52a0\u7533\u8bf7\u7b49\u573a\u666f\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inviter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UserInfo?")),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u6dfb\u52a0\u7533\u8bf7\u4eba\u7684",(0,r.kt)("strong",{parentName:"td"},"\u9080\u8bf7\u4eba"),"\u3002\u53ea\u6709\u5728\u7ec4\u4ef6",(0,r.kt)("strong",{parentName:"td"},"\u652f\u6301\u8bc6\u522b"),"\u9080\u8bf7\u4eba\u5e76\u4e14",(0,r.kt)("strong",{parentName:"td"},"\u5b9e\u9645\u5b58\u5728"),"\u9080\u8bf7\u4eba\u7684\u65f6\u5019\u624d\u4f1a\u5b58\u5728\uff0c\u5426\u5219\u4e3anull\u3002")))),(0,r.kt)("h2",{id:"guildrequestevent"},"GuildRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.guild_request"),(0,r.kt)("a",{href:"#requestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"RequestEvent")),(0,r.kt)("a",{href:"../../../container-overview/#guildinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"GuildInfoContainer"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u9891\u9053\u670d\u52a1\u5668")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"guildjoinrequestevent"},"GuildJoinRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.guild_join_request"),(0,r.kt)("a",{href:"#joinrequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"JoinRequestEvent")),(0,r.kt)("a",{href:"#guildrequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"GuildRequestEvent"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u52a0\u5165\u9891\u9053\u670d\u52a1\u5668")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"grouprequestevent"},"GroupRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.group_request"),(0,r.kt)("a",{href:"#requestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"RequestEvent")),(0,r.kt)("a",{href:"../../../container-overview/#groupinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"GroupInfoContainer"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u7fa4")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"groupjoinrequestevent"},"GroupJoinRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.group_join_request"),(0,r.kt)("a",{href:"#grouprequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"GroupRequestEvent")),(0,r.kt)("a",{href:"#joinrequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"JoinRequestEvent"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u52a0\u5165\u7fa4")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"channelrequestevent"},"ChannelRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.channel_request"),(0,r.kt)("a",{href:"#requestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"RequestEvent")),(0,r.kt)("a",{href:"../../../container-overview/#channelinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ChannelInfoContainer"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u5b50\u9891\u9053")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"userrequestevent"},"UserRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.user_request"),(0,r.kt)("a",{href:"#requestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"RequestEvent")),(0,r.kt)("a",{href:"../../../container-overview/#userinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"UserInfoContainer"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"friendrequestevent"},"FriendRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.friend_request"),(0,r.kt)("a",{href:"#userrequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"UserRequestEvent")),(0,r.kt)("a",{href:"../../../container-overview/#friendinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"FriendInfoContainer"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u597d\u53cb")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002\u6b64\u4e8b\u4ef6\u4e2d\u6d89\u53ca\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"requester")," \u6216\u5176\u4ed6\u5c5e\u6027\u53ef\u80fd\u5e76\u975e ",(0,r.kt)("inlineCode",{parentName:"p"},"Firend")," \u5bf9\u8c61\u3002"),(0,r.kt)("h2",{id:"friendaddrequestevent"},"FriendAddRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.friend_add_request"),(0,r.kt)("a",{href:"#joinrequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"JoinRequestEvent")),(0,r.kt)("a",{href:"#friendrequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"FriendRequestEvent"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u597d\u53cb\u6dfb\u52a0")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002\u6b64\u4e8b\u4ef6\u4ee3\u8868\u5176\u4ed6\u4eba\u60f3\u8981",(0,r.kt)("strong",{parentName:"p"},"\u7533\u8bf7\u6210\u4e3a"),"\u5f53\u524dbot\u7684\u597d\u53cb\uff0c\n\u56e0\u6b64\u6b64\u7528\u6237\u6b64\u65f6",(0,r.kt)("strong",{parentName:"p"},"\u5e76\u975e"),"\u597d\u53cb\u3002"))}m.isMDXComponent=!0}}]);