(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[9904],{5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function u(e){let{children:t,hidden:n,className:u}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:n},t)}},4866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),l=n(6010),u=n(6775),i=n(1980),s=n(7392),o=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[u,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,d]=m({queryString:n,groupId:a}),[v,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,o.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=s??v;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),k(e)}),[d,k,l]),tabValues:l}}var k=n(2466),b=n(2389);const f="tabList__CuJ",g="tabItem_LNqP";function N(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,k.o5)(),p=e=>{const t=e.currentTarget,n=o.indexOf(t),a=s[n].value;a!==u&&(d(t),i(a))},c=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>o.push(e),onKeyDown:c,onClick:p},i,{className:(0,l.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":u===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function q(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(q,(0,a.Z)({key:String(t)},e))}},1610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(7294);const r="label_Yf5u";function l(e){let{type:t,href:n,children:l,title:u}=e;t=t||"primary",u=u||"";const i=a.createElement("span",{className:r,title:u},a.createElement("span",{className:`badge badge--${t}`},l));return null!=n&&n.length>0?a.createElement("a",{href:n},i):i}},8562:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>v,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=(n(8209),n(1610)),u=n(4866),i=n(5162);n(814);const s={title:"\u8bf7\u6c42\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},o=void 0,d={unversionedId:"definition/event-overview/standard-event/request-event/index",id:"definition/event-overview/standard-event/request-event/index",title:"\u8bf7\u6c42\u4e8b\u4ef6",description:"\u4e0e\u8bf7\u6c42\u76f8\u5173\u7684\u7cfb\u5217\u4e8b\u4ef6\u3002",source:"@site/docs/definition/event-overview/standard-event/request-event/index.md",sourceDirName:"definition/event-overview/standard-event/request-event",slug:"/definition/event-overview/standard-event/request-event/",permalink:"/docs/definition/event-overview/standard-event/request-event/",draft:!1,editUrl:"https://github.com/simple-robot/simpler-robot/tree/v3-dev/website/docs/definition/event-overview/standard-event/request-event/index.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1676396918,formattedLastUpdatedAt:"2023\u5e742\u670814\u65e5",frontMatter:{title:"\u8bf7\u6c42\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u6d88\u606f\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/message-event/"},next:{title:"\u53d8\u66f4\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/change-event/"}},p={},c=[{value:"RequestEvent",id:"requestevent",level:2},{value:"RequestEvent.Type",id:"requesteventtype",level:3},{value:"JoinRequestEvent",id:"joinrequestevent",level:2},{value:"GuildRequestEvent",id:"guildrequestevent",level:2},{value:"GuildJoinRequestEvent",id:"guildjoinrequestevent",level:2},{value:"GroupRequestEvent",id:"grouprequestevent",level:2},{value:"GroupJoinRequestEvent",id:"groupjoinrequestevent",level:2},{value:"ChannelRequestEvent",id:"channelrequestevent",level:2},{value:"UserRequestEvent",id:"userrequestevent",level:2},{value:"FriendRequestEvent",id:"friendrequestevent",level:2},{value:"FriendAddRequestEvent",id:"friendaddrequestevent",level:2}],m={toc:c};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0e\u8bf7\u6c42\u76f8\u5173\u7684\u7cfb\u5217\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"requestevent"},"RequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.request"),(0,r.kt)("a",{href:"../../../container-overview/#userinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"UserInfoContainer"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u4e8b\u4ef6")," \u7684\u57fa\u7840\u7236\u7c7b\u63a5\u53e3\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String?")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u7533\u8bf7\u4e8b\u4ef6\u53ef\u80fd\u4f1a\u5b58\u5728\u9644\u52a0\u7684",(0,r.kt)("strong",{parentName:"td"},"\u6587\u672c\u6d88\u606f")," \u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"requester")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UserInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b64\u7533\u8bf7\u4e8b\u4ef6\u7684",(0,r.kt)("strong",{parentName:"td"},"\u7533\u8bf7\u4eba")," \u3002 \u5bf9\u4e8e\u4e00\u4e2a\u7533\u8bf7\u8005\u4e0d\u80fd\u4fdd\u8bc1\u53ef\u4ee5\u4f5c\u4e3a\u5b8c\u5168\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"User")," \u4f7f\u7528\uff0c\u56e0\u6b64\u7c7b\u578b\u4ec5\u4fdd\u7559\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"UserInfo"),"\uff0c\u5373\u4ec5\u63d0\u4f9b\u6b64\u7528\u6237\u7684\u57fa\u7840\u4fe1\u606f\u83b7\u53d6\u80fd\u529b\u3002\u5728\u4e00\u4e9b\u7533\u8bf7\u4eba\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"Bot")," \u81ea\u8eab\u7684\u60c5\u51b5\u65f6\uff08\u6bd4\u5982bot\u88ab\u9080\u8bf7\uff09\u6b64\u5c5e\u6027\u503c\u53ef\u80fd\u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"bot")," \u5c5e\u6027\u76f8\u540c\u6216\u7c7b\u4f3c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RequestEvent.Type")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u7c7b\u578b")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"accept()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u610f/\u63a5\u53d7 \u6b64\u8bf7\u6c42 \u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reject()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd\u6b64\u8bf7\u6c42 \u3002")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728api\u4e2d\uff0c\u6240\u6709\u7684api\u5728Java\u4e2d\u7684\u8868\u73b0\u90fd\u4f1a\u5728\u540d\u79f0\u540e\u8ffd\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},'"Blocking"')," \u540e\u7f00\u3002\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"accept()")," \u5728Java\u4e2d\u8868\u73b0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptBlocking()"),"\u3002")),(0,r.kt)("h3",{id:"requesteventtype"},"RequestEvent.Type"),(0,r.kt)("p",null,"\u679a\u4e3e\u7c7b\u578b\uff0c\u4ee3\u8868\u5f53\u524d\u8bf7\u6c42\u4e8b\u4ef6\u7684\u7c7b\u578b\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5143\u7d20"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APPLICATION")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u7684\u7533\u8bf7\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INVITATION")),(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u7684\u7533\u8bf7\uff08\u4f8b\u5982\u88ab\u9080\u8bf7\uff09\u3002")))),(0,r.kt)(u.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val message: String? = event.message\nval requester: UserInfo = event.requester()\nval user: UserInfo = event.user()\nval type: RequestEvent.Type = event.type\n//\nval isAccpeted: Boolean = event.accept()\nval isRejected: Boolean = event.reject()\n"))),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"String message = event.getMessage();\nUserInfo requester = event.getRequester();\nUserInfo user = event.getUser();\nRequestEvent.Type type = event.getType();\n//\nboolean isAccpeted = event.acceptBlocking();\nboolean isRejected = event.rejectBlocking();\n")))),(0,r.kt)("h2",{id:"joinrequestevent"},"JoinRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.join_request"),(0,r.kt)("a",{href:"#requestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"RequestEvent"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RequestEvent")," \u7684\u5b50\u7c7b\u578b\uff0c\u6cdb\u6307\u4e00\u4e2a\u53ef\u4ee5\u8868\u793a\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u52a0\u5165/\u6dfb\u52a0\u7533\u8bf7")," \u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002\u5e38\u89c1\u4e8e\u5165\u7fa4\u7533\u8bf7\u3001\u597d\u53cb\u6dfb\u52a0\u7533\u8bf7\u7b49\u573a\u666f\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inviter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UserInfo?")),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u6dfb\u52a0\u7533\u8bf7\u4eba\u7684",(0,r.kt)("strong",{parentName:"td"},"\u9080\u8bf7\u4eba"),"\u3002\u53ea\u6709\u5728\u7ec4\u4ef6",(0,r.kt)("strong",{parentName:"td"},"\u652f\u6301\u8bc6\u522b"),"\u9080\u8bf7\u4eba\u5e76\u4e14",(0,r.kt)("strong",{parentName:"td"},"\u5b9e\u9645\u5b58\u5728"),"\u9080\u8bf7\u4eba\u7684\u65f6\u5019\u624d\u4f1a\u5b58\u5728\uff0c\u5426\u5219\u4e3anull\u3002")))),(0,r.kt)("h2",{id:"guildrequestevent"},"GuildRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.guild_request"),(0,r.kt)("a",{href:"#requestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"RequestEvent")),(0,r.kt)("a",{href:"../../../container-overview/#guildinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"GuildInfoContainer"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u9891\u9053\u670d\u52a1\u5668")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"guildjoinrequestevent"},"GuildJoinRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.guild_join_request"),(0,r.kt)("a",{href:"#joinrequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"JoinRequestEvent")),(0,r.kt)("a",{href:"#guildrequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"GuildRequestEvent"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u52a0\u5165\u9891\u9053\u670d\u52a1\u5668")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"grouprequestevent"},"GroupRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.group_request"),(0,r.kt)("a",{href:"#requestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"RequestEvent")),(0,r.kt)("a",{href:"../../../container-overview/#groupinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"GroupInfoContainer"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u7fa4")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"groupjoinrequestevent"},"GroupJoinRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.group_join_request"),(0,r.kt)("a",{href:"#grouprequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"GroupRequestEvent")),(0,r.kt)("a",{href:"#joinrequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"JoinRequestEvent"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u52a0\u5165\u7fa4")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"channelrequestevent"},"ChannelRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.channel_request"),(0,r.kt)("a",{href:"#requestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"RequestEvent")),(0,r.kt)("a",{href:"../../../container-overview/#channelinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ChannelInfoContainer"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u5b50\u9891\u9053")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"userrequestevent"},"UserRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.user_request"),(0,r.kt)("a",{href:"#requestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"RequestEvent")),(0,r.kt)("a",{href:"../../../container-overview/#userinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"UserInfoContainer"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"friendrequestevent"},"FriendRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.friend_request"),(0,r.kt)("a",{href:"#userrequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"UserRequestEvent")),(0,r.kt)("a",{href:"../../../container-overview/#friendinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"FriendInfoContainer"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u597d\u53cb")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002\u6b64\u4e8b\u4ef6\u4e2d\u6d89\u53ca\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"requester")," \u6216\u5176\u4ed6\u5c5e\u6027\u53ef\u80fd\u5e76\u975e ",(0,r.kt)("inlineCode",{parentName:"p"},"Firend")," \u5bf9\u8c61\u3002"),(0,r.kt)("h2",{id:"friendaddrequestevent"},"FriendAddRequestEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.friend_add_request"),(0,r.kt)("a",{href:"#joinrequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"JoinRequestEvent")),(0,r.kt)("a",{href:"#friendrequestevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"FriendRequestEvent"))),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u597d\u53cb\u6dfb\u52a0")," \u76f8\u5173\u7684\u8bf7\u6c42\u4e8b\u4ef6\u3002\u6b64\u4e8b\u4ef6\u4ee3\u8868\u5176\u4ed6\u4eba\u60f3\u8981",(0,r.kt)("strong",{parentName:"p"},"\u7533\u8bf7\u6210\u4e3a"),"\u5f53\u524dbot\u7684\u597d\u53cb\uff0c\n\u56e0\u6b64\u6b64\u7528\u6237\u6b64\u65f6",(0,r.kt)("strong",{parentName:"p"},"\u5e76\u975e"),"\u597d\u53cb\u3002"))}v.isMDXComponent=!0},1748:(e,t,n)=>{var a={"./locale":9234,"./locale.js":9234};function r(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id=1748},8209:(e,t,n)=>{"use strict";n.d(t,{G:()=>u});var a=n(7294),r=n(1304);const l="light";const u=({chart:e,config:t})=>{if("undefined"==typeof window)return a.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const n=(0,a.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),u=document.querySelector("html"),[i,s]=(0,a.useState)(!1),o=(0,a.useMemo)((()=>function(e,t){let n=e.getAttribute("data-theme")??l;n!==l&&"dark"!==n&&(n=l);const a=n===l?"default":"dark";return t?.theme?.[n]??t?.mermaid?.theme??a}(u,n)),[n,i]);return(0,a.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){s((e=>!e));break}}));return e.observe(u,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,a.useEffect)((()=>{n&&(n.mermaid?r.Z.initialize({startOnLoad:!0,...n.mermaid,theme:o}):r.Z.initialize({startOnLoad:!0,theme:o}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[n,o]),(0,a.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[e]),a.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);