"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,k=u["".concat(o,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),d=n(7392),o=n(7094),p=n(2466);const m="tabList__CuJ",c="tabItem_LNqP";function u(e){var t,n;const{lazy:i,block:u,defaultValue:s,values:k,groupId:v,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,d.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===s?s:null!=(t=null!=s?s:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:E}=(0,o.U)(),[C,T]=(0,r.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=v){const e=y[v];null!=e&&e!==C&&N.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=w.indexOf(t),a=N[n].value;a!==C&&(O(t),T(a),null!=v&&E(v,String(a)))},Z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=w.indexOf(e.currentTarget)+1;n=null!=(a=w[t])?a:w[0];break}case"ArrowLeft":{var r;const t=w.indexOf(e.currentTarget)-1;n=null!=(r=w[t])?r:w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},b)},N.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:Z,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function s(e){const t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},1610:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="label_Yf5u";function l(e){let{type:t,href:n,children:l}=e;t=t||"primary";const i=a.createElement("span",{className:r},a.createElement("span",{className:"badge badge--"+t},l));return null!=n&&n.length>0?a.createElement("a",{href:n},i):i}},4687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(1610);n(5488),n(5162),n(814);const i={sidebar_position:20,title:"\u5bf9\u8c61\u53d8\u66f4\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},d=void 0,o={unversionedId:"defition/event-overview/standard-event/change-event/objective-changed-event",id:"defition/event-overview/standard-event/change-event/objective-changed-event",title:"\u5bf9\u8c61\u53d8\u66f4\u4e8b\u4ef6",description:"\u5bf9\u8c61\u53d8\u66f4\u4e8b\u4ef6\u3002\u4ee3\u8868\u4e3a\u4e00\u4e2a Objectives \u53d1\u751f\u4e86\u53d8\u5316\u7684\u4e8b\u4ef6\u3002",source:"@site/docs/defition/event-overview/standard-event/change-event/objective-changed-event.md",sourceDirName:"defition/event-overview/standard-event/change-event",slug:"/defition/event-overview/standard-event/change-event/objective-changed-event",permalink:"/docs/defition/event-overview/standard-event/change-event/objective-changed-event",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/defition/event-overview/standard-event/change-event/objective-changed-event.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1666107855,formattedLastUpdatedAt:"Oct 18, 2022",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"\u5bf9\u8c61\u53d8\u66f4\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u7aef\u70b9\u53d8\u66f4\u4e8b\u4ef6",permalink:"/docs/defition/event-overview/standard-event/change-event/point-changed-event"},next:{title:"\u6d88\u606f\u6982\u8ff0",permalink:"/docs/defition/message-overview/"}},p={},m=[{value:"MemberChangedEvent",id:"memberchangedevent",level:2},{value:"MemberIncreaseEvent",id:"memberincreaseevent",level:2},{value:"MemberDecreaseEvent",id:"memberdecreaseevent",level:2},{value:"ActionType",id:"actiontype",level:2},{value:"FriendChangedEvent",id:"friendchangedevent",level:2},{value:"FriendIncreaseEvent",id:"friendincreaseevent",level:2},{value:"FriendDecreaseEvent",id:"frienddecreaseevent",level:2}],c={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5bf9\u8c61\u53d8\u66f4\u4e8b\u4ef6\u3002\u4ee3\u8868\u4e3a\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Objectives")," \u53d1\u751f\u4e86\u53d8\u5316\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"memberchangedevent"},"MemberChangedEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.member_changed"),(0,r.kt)("a",{href:"./#changedevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ChangedEvent")),(0,r.kt)("a",{href:"../objective-event/#organizationevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"OrganizationEvent")),(0,r.kt)("a",{href:"../objective-event/#memberevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"MemberEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2a\u7ec4\u7ec7\u4e2d\u53d1\u751f\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u6210\u5458\u53d8\u52a8")," \u4e8b\u4ef6\u3002\u901a\u5e38\u8868\u73b0\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"#memberincreaseevent"},"\u6210\u5458\u589e\u52a0")," \u6216 ",(0,r.kt)("a",{parentName:"p",href:"#memberdecreaseevent"},"\u6210\u5458\u51cf\u5c11")," \u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"operator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MemberInfo?")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u5458\u53d8\u52a8\u7684\u64cd\u4f5c\u8005\u3002\u5982\u679c\u672c\u6b21\u53d8\u52a8\u884c\u4e3a\u53d1\u751f\u7684\u539f\u56e0\u5728\u4e8e\u672c\u6b21\u53d8\u52a8\u7684\u6210\u5458\u81ea\u8eab\uff0c\u5219\u6b64\u5c5e\u6027\u503c\u7b49\u540c\u4e8e\u6b64\u6210\u5458\uff1b\u5728\u4e0d\u652f\u6301\u3001\u4e0d\u5b58\u5728\u7b49\u60c5\u51b5\u4e0b\u53ef\u80fd\u4e3anull\u3002")))),(0,r.kt)("h2",{id:"memberincreaseevent"},"MemberIncreaseEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.member_increase"),(0,r.kt)("a",{href:"./point-changed-event/#increaseevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"IncreaseEvent")),(0,r.kt)("a",{href:"#memberchangedevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"MemberChangedEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2a\u7ec4\u7ec7\u4e2d\u589e\u52a0\u4e86\u4e00\u4e2a\u6210\u5458\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"after")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Member")),(0,r.kt)("td",{parentName:"tr",align:null},"\u589e\u52a0\u7684\u7ec4\u7ec7\u6210\u5458")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actionType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#actiontype"},"ActionType")),(0,r.kt)("td",{parentName:"tr",align:null},"\u884c\u4e3a\u7c7b\u578b")))),(0,r.kt)("h2",{id:"memberdecreaseevent"},"MemberDecreaseEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.member_decrease"),(0,r.kt)("a",{href:"./point-changed-event/#decreaseevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"DecreaseEvent")),(0,r.kt)("a",{href:"#memberchangedevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"MemberChangedEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2a\u7ec4\u7ec7\u4e2d\u51cf\u5c11\u4e86\u4e00\u4e2a\u6210\u5458\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"before")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Member")),(0,r.kt)("td",{parentName:"tr",align:null},"\u79bb\u5f00\u7684\u7ec4\u7ec7\u6210\u5458")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actionType")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#actiontype"},"ActionType")),(0,r.kt)("td",{parentName:"tr",align:null},"\u884c\u4e3a\u7c7b\u578b")))),(0,r.kt)("h2",{id:"actiontype"},"ActionType"),(0,r.kt)("p",null,"\u679a\u4e3e\u7c7b\u578b\uff0c\u4ee3\u8868\u4e3a\u4e00\u4e2a\u884c\u4e3a\u7684\u7c7b\u578b\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5143\u7d20"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PROACTIVE")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u7684")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PASSIVE")),(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u7684")))),(0,r.kt)("h2",{id:"friendchangedevent"},"FriendChangedEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.friend_changed"),(0,r.kt)("a",{href:"./#changedevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ChangedEvent")),(0,r.kt)("a",{href:"../objective-event/#friendevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"FriendEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2abot\u7684\u597d\u53cb\uff08\u6570\u91cf\uff09\u53d1\u751f\u4e86\u53d8\u5316\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bot")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u751f\u597d\u53cb\u53d8\u5316\u7684bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"friend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Friend")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u5316\u7684\u597d\u53cb\u5bf9\u8c61")))),(0,r.kt)("h2",{id:"friendincreaseevent"},"FriendIncreaseEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.friend_increase"),(0,r.kt)("a",{href:"./point-changed-event/#increaseevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"IncreaseEvent")),(0,r.kt)("a",{href:"#friendchangedevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"FriendChangedEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2abot\u7684\u597d\u53cb\u589e\u52a0\u4e86\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bot")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u751f\u597d\u53cb\u53d8\u5316\u7684bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"friend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"friend")),(0,r.kt)("td",{parentName:"tr",align:null},"\u589e\u52a0\u7684\u597d\u53cb\u5bf9\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"after")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")))),(0,r.kt)("h2",{id:"frienddecreaseevent"},"FriendDecreaseEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.friend_decrease"),(0,r.kt)("a",{href:"./point-changed-event/#decreaseevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"DecreaseEvent")),(0,r.kt)("a",{href:"#friendchangedevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"FriendChangedEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2abot\u7684\u597d\u53cb\u51cf\u5c11\u4e86\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bot")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u751f\u597d\u53cb\u53d8\u5316\u7684bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"friend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"friend")),(0,r.kt)("td",{parentName:"tr",align:null},"\u51cf\u5c11\u7684\u597d\u53cb\u5bf9\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"before")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")))))}u.isMDXComponent=!0}}]);