(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[4405],{5162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>I});var n=a(7462),r=a(7294),l=a(6010),o=a(6775),s=a(1980),u=a(7392),i=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,d]=p({queryString:a,groupId:n}),[v,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,i.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=u??v;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=a(2466),b=a(2389);const f="tabList__CuJ",k="tabItem_LNqP";function h(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,g.o5)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),n=u[a].value;n!==o&&(d(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;a=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;a=i[t]??i[i.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:c},s,{className:(0,l.Z)("tabs__item",k,null==s?void 0:s.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function I(e){const t=(0,b.Z)();return r.createElement(T,(0,n.Z)({key:String(t)},e))}},2746:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=(a(8209),a(4866)),o=a(5162);const s={sidebar_position:40,title:"\u4e07\u82b1\u4e1b\u4e2d"},u=void 0,i={unversionedId:"take-a-look/something-else",id:"take-a-look/something-else",title:"\u4e07\u82b1\u4e1b\u4e2d",description:"\u4ece\u4e8b\u4ef6\u4e2d\u83b7\u53d6\u5bf9\u8c61",source:"@site/docs/take-a-look/something-else.md",sourceDirName:"take-a-look",slug:"/take-a-look/something-else",permalink:"/docs/take-a-look/something-else",draft:!1,editUrl:"https://github.com/simple-robot/simpler-robot/tree/v3-dev/website/docs/take-a-look/something-else.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1676299898,formattedLastUpdatedAt:"2023\u5e742\u670813\u65e5",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"\u4e07\u82b1\u4e1b\u4e2d"},sidebar:"docs",previous:{title:"boot\u6982\u89c8",permalink:"/docs/take-a-look/boot-overview"},next:{title:"\u5347\u7ea7\u6307\u5357",permalink:"/docs/upgrade-guide/"}},d={},c=[{value:"\u4ece\u4e8b\u4ef6\u4e2d\u83b7\u53d6\u5bf9\u8c61",id:"\u4ece\u4e8b\u4ef6\u4e2d\u83b7\u53d6\u5bf9\u8c61",level:2},{value:"\u597d\u53cb",id:"\u597d\u53cb",level:3},{value:"\u7fa4",id:"\u7fa4",level:3},{value:"\u9891\u9053\u4e0e\u5b50\u9891\u9053",id:"\u9891\u9053\u4e0e\u5b50\u9891\u9053",level:3},{value:"\u4ece\u5bf9\u8c61\u4e2d\u83b7\u53d6\u5c5e\u6027",id:"\u4ece\u5bf9\u8c61\u4e2d\u83b7\u53d6\u5c5e\u6027",level:2},{value:"\u597d\u53cb\u5c5e\u6027",id:"\u597d\u53cb\u5c5e\u6027",level:3},{value:"\u5ef6\u65f6\u53d1\u9001&amp;\u52a8\u6001\u53c2\u6570",id:"\u5ef6\u65f6\u53d1\u9001\u52a8\u6001\u53c2\u6570",level:2},{value:"\u7279\u6b8a\u6d88\u606f",id:"\u7279\u6b8a\u6d88\u606f",level:2},{value:"\u4e0a\u4f20\u5e76\u53d1\u9001\u56fe\u7247",id:"\u4e0a\u4f20\u5e76\u53d1\u9001\u56fe\u7247",level:3},{value:"\u7fa4\u91ccat + \u6587\u672c",id:"\u7fa4\u91ccat--\u6587\u672c",level:3}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ece\u4e8b\u4ef6\u4e2d\u83b7\u53d6\u5bf9\u8c61"},"\u4ece\u4e8b\u4ef6\u4e2d\u83b7\u53d6\u5bf9\u8c61"),(0,r.kt)("h3",{id:"\u597d\u53cb"},"\u597d\u53cb"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Listener\nsuspend fun FriendEvent.event() {\n    val friend = friend()\n}\n"))),(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Listener\npublic void event(FriendEvent event) {\n    Friend friend = event.getFriend();\n}\n")))),(0,r.kt)("h3",{id:"\u7fa4"},"\u7fa4"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Listener\nsuspend fun GroupEvent.event() {\n    val group = group()   \n}\n"))),(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Listener\npublic void event(GroupEvent event) {\n    Group group = event.getGroup();\n}\n")))),(0,r.kt)("h3",{id:"\u9891\u9053\u4e0e\u5b50\u9891\u9053"},"\u9891\u9053\u4e0e\u5b50\u9891\u9053"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Listener \nsuspend fun GuildEvent.event() {\n    val guild = guild()\n    val channels: Items<Channel> = gulid.channels \n} \n"))),(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Listener\npublic void event(GuildEvent event) {\n    Guild guild = event.getGuild();\n    Items<? extends Channel> channels = guild.getChannels();\n} \n")))),(0,r.kt)("h2",{id:"\u4ece\u5bf9\u8c61\u4e2d\u83b7\u53d6\u5c5e\u6027"},"\u4ece\u5bf9\u8c61\u4e2d\u83b7\u53d6\u5c5e\u6027"),(0,r.kt)("h3",{id:"\u597d\u53cb\u5c5e\u6027"},"\u597d\u53cb\u5c5e\u6027"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val id = friend.id\nval username = friend.username\nval remark = friend.remark\nval avatar = friend.avatar\n"))),(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ID id = friend.getId();\nString username = friend.getUsername();\nString remark = friend.getRemark();\nString avatar = friend.getAvatar();\n")))),(0,r.kt)("h2",{id:"\u5ef6\u65f6\u53d1\u9001\u52a8\u6001\u53c2\u6570"},"\u5ef6\u65f6\u53d1\u9001&\u52a8\u6001\u53c2\u6570"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Filter("\u6211\u53eb{{name}}")\n@Listener\nsuspend fun FriendMessageEvent.listen(@FilterValue("name") name: String) {\n    val friend = friend()\n    // \u5f53\u7136\uff0c\u4e0d\u5f02\u6b65\u4e5f\u884c\n    bot.launch {\n        delay(3000)\n        friend.send("Hello, $name")\n    }\n}\n'))),(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"java\u4e2d\u4e0d\u5efa\u8bae\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Thread.sleep(...)")," \u6765\u8fbe\u6210\u5ef6\u8fdf\u6548\u679c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Filter("\u6211\u53eb{{name}}")\n@Listener\npublic void listen(FriendMessageEvent event, @FilterValue("name") String name) throws Exception {\n    Friend friend = event.getFriend();\n    // \u90e8\u5206\u7c7b\u578b(\u6bd4\u5982\u300cBot\u300d)\u63d0\u4f9b\u4e86\u9762\u5411Java\u7528\u6237\u4f7f\u7528\u7684\u975e\u963b\u585e\u5ef6\u8fdfapi, \u5e76\u8fd4\u56de\u5f97\u5230 DelayableCompletableFuture \u5bf9\u8c61.\n    // \u5bf9\u4e8e DelayableCompletableFuture \u7c7b\u578b\uff0c\u4f60\u53ef\u4ee5\u5c06\u5b83\u89c6\u4e3a\u4e00\u4e2a\u62e5\u6709 `delay` api\u7684CompletableFuture.\n    event.getBot()\n            .delay(Duration.ofSeconds(3), () -> {\n                // \u5ef6\u8fdf \u300c3s\u300d, \u7136\u540e\u53d1\u9001\u6d88\u606f.\n                friend.sendBlocking("Hello, " + name);\n            }).delay(3000, () -> {\n                // \u518d\u5ef6\u8fdf\u300c3000ms\u300d, \u8f93\u51fa\u65e5\u5fd7\n                logger.info("\u53d1\u9001\u6d88\u606f3\u79d2\u540e");\n            });\n}\n')))),(0,r.kt)("h2",{id:"\u7279\u6b8a\u6d88\u606f"},"\u7279\u6b8a\u6d88\u606f"),(0,r.kt)("h3",{id:"\u4e0a\u4f20\u5e76\u53d1\u9001\u56fe\u7247"},"\u4e0a\u4f20\u5e76\u53d1\u9001\u56fe\u7247"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Listener\nsuspend fun FriendMessageEvent.listen() {\n    val imgPath = Path("img/example.png")\n    val imgResource = Resource.of(imgPath)\n    val img = imgResource.toImage()\n\n    // send img to friend\n    friend().send(img)\n}\n'))),(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Listener\npublic void listen(FriendMessageEvent event) {\n    PathResource resource = Resource.of(Paths.get("image.png"));\n    ResourceImage resourceImage = Image.of(resource);\n    event.getFriend().sendBlocking(resourceImage);\n}\n')))),(0,r.kt)("h3",{id:"\u7fa4\u91ccat--\u6587\u672c"},"\u7fa4\u91ccat + \u6587\u672c"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Listener\nsuspend fun GroupMessageEvent.listen() {\n    val authorId = author().id\n    val at = At(authorId)\n    \n    group().send(at + "\u4f60\u597d?".toText())\n}\n'))),(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Listener\npublic void listen(GroupMessageEvent event) {\n    ID authorId = event.getAuthor().getId();\n    At at = new At(authorId);\n    \n    Messages messages = Messages.toMessages(at, Text.of(" \u4f60\u597d?"));\n    \n    event.getGroup().sendBlocking(messages);\n}\n')))))}p.isMDXComponent=!0},1748:(e,t,a)=>{var n={"./locale":9234,"./locale.js":9234};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=1748},8209:(e,t,a)=>{"use strict";a.d(t,{G:()=>o});var n=a(7294),r=a(1304);const l="light";const o=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),o=document.querySelector("html"),[s,u]=(0,n.useState)(!1),i=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??l;a!==l&&"dark"!==a&&(a=l);const n=a===l?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(o,a)),[a,s]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){u((e=>!e));break}}));return e.observe(o,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?r.Z.initialize({startOnLoad:!0,...a.mermaid,theme:i}):r.Z.initialize({startOnLoad:!0,theme:i}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[a,i]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);