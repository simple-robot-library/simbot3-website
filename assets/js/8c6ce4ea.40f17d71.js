"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[4405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=l,v=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return n?a.createElement(v,o(o({ref:t},d),{},{components:n})):a.createElement(v,o({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),l=n(7294),r=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:o,block:m,defaultValue:c,values:v,groupId:g,className:b}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=v?v:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===c?c:null!=(t=null!=c?c:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:N}=(0,s.U)(),[I,x]=(0,l.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=g){const e=T[g];null!=e&&e!==I&&f.some((t=>t.value===e))&&x(e)}const Z=e=>{const t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==I&&(w(t),x(a),null!=g&&N(g,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var l;const t=E.indexOf(e.currentTarget)-1;n=null!=(l=E[t])?l:E[E.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},b)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>E.push(e),onKeyDown:O,onFocus:Z,onClick:Z},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(k.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function c(e){const t=(0,o.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},2746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),o=n(5162);const i={sidebar_position:40,title:"\u4e07\u82b1\u4e1b\u4e2d"},s=void 0,u={unversionedId:"take-a-look/something-else",id:"take-a-look/something-else",title:"\u4e07\u82b1\u4e1b\u4e2d",description:"\u4ece\u4e8b\u4ef6\u4e2d\u83b7\u53d6\u5bf9\u8c61",source:"@site/docs/take-a-look/something-else.md",sourceDirName:"take-a-look",slug:"/take-a-look/something-else",permalink:"/docs/take-a-look/something-else",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/take-a-look/something-else.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1665775945,formattedLastUpdatedAt:"Oct 14, 2022",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"\u4e07\u82b1\u4e1b\u4e2d"},sidebar:"docs",previous:{title:"boot\u6982\u89c8",permalink:"/docs/take-a-look/boot-overview"}},d={},p=[{value:"\u4ece\u4e8b\u4ef6\u4e2d\u83b7\u53d6\u5bf9\u8c61",id:"\u4ece\u4e8b\u4ef6\u4e2d\u83b7\u53d6\u5bf9\u8c61",level:2},{value:"\u597d\u53cb",id:"\u597d\u53cb",level:3},{value:"\u7fa4",id:"\u7fa4",level:3},{value:"\u9891\u9053\u4e0e\u5b50\u9891\u9053",id:"\u9891\u9053\u4e0e\u5b50\u9891\u9053",level:3},{value:"\u4ece\u5bf9\u8c61\u4e2d\u83b7\u53d6\u5c5e\u6027",id:"\u4ece\u5bf9\u8c61\u4e2d\u83b7\u53d6\u5c5e\u6027",level:2},{value:"\u597d\u53cb\u5c5e\u6027",id:"\u597d\u53cb\u5c5e\u6027",level:3},{value:"\u5ef6\u65f6\u53d1\u9001&amp;\u52a8\u6001\u53c2\u6570",id:"\u5ef6\u65f6\u53d1\u9001\u52a8\u6001\u53c2\u6570",level:2},{value:"\u7279\u6b8a\u6d88\u606f",id:"\u7279\u6b8a\u6d88\u606f",level:2},{value:"\u4e0a\u4f20\u5e76\u53d1\u9001\u56fe\u7247",id:"\u4e0a\u4f20\u5e76\u53d1\u9001\u56fe\u7247",level:3},{value:"\u7fa4\u91ccat + \u6587\u672c",id:"\u7fa4\u91ccat--\u6587\u672c",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ece\u4e8b\u4ef6\u4e2d\u83b7\u53d6\u5bf9\u8c61"},"\u4ece\u4e8b\u4ef6\u4e2d\u83b7\u53d6\u5bf9\u8c61"),(0,l.kt)("h3",{id:"\u597d\u53cb"},"\u597d\u53cb"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Listener\nsuspend fun FriendEvent.event() {\n    val friend = friend()\n}\n"))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Listener\npublic void event(FriendEvent event) {\n    Friend friend = event.getFriend();\n}\n")))),(0,l.kt)("h3",{id:"\u7fa4"},"\u7fa4"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Listener\nsuspend fun GroupEvent.event() {\n    val group = group()   \n}\n"))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Listener\npublic void event(GroupEvent event) {\n    Group group = event.getGroup();\n}\n")))),(0,l.kt)("h3",{id:"\u9891\u9053\u4e0e\u5b50\u9891\u9053"},"\u9891\u9053\u4e0e\u5b50\u9891\u9053"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Listener \nsuspend fun GuildEvent.event() {\n    val guild = guild()\n    val channels: Items<Channel> = gulid.channels \n} \n"))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Listener\npublic void event(GuildEvent event) {\n    Guild guild = event.getGuild();\n    Items<? extends Channel> channels = guild.getChannels();\n} \n")))),(0,l.kt)("h2",{id:"\u4ece\u5bf9\u8c61\u4e2d\u83b7\u53d6\u5c5e\u6027"},"\u4ece\u5bf9\u8c61\u4e2d\u83b7\u53d6\u5c5e\u6027"),(0,l.kt)("h3",{id:"\u597d\u53cb\u5c5e\u6027"},"\u597d\u53cb\u5c5e\u6027"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val id = friend.id\nval username = friend.username\nval remark = friend.remark\nval avatar = friend.avatar\n"))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"ID id = friend.getId();\nString username = friend.getUsername();\nString remark = friend.getRemark();\nString avatar = friend.getAvatar();\n")))),(0,l.kt)("h2",{id:"\u5ef6\u65f6\u53d1\u9001\u52a8\u6001\u53c2\u6570"},"\u5ef6\u65f6\u53d1\u9001&\u52a8\u6001\u53c2\u6570"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Filter("\u6211\u53eb{{name}}")\n@Listener\nsuspend fun FriendMessageEvent.listen(@FilterValue("name") name: String) {\n    val friend = friend()\n    bot.launch {\n        delay(3000)\n        friend.send("Hello, $name")\n    }\n}\n'))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"java\u4e2d\u4e0d\u5efa\u8bae\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Thread.sleep(...)")," \u6765\u8fbe\u6210\u5ef6\u8fdf\u6548\u679c\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Filter("\u6211\u53eb{{name}}")\n@Listener\npublic void listen(FriendMessageEvent event, @FilterValue("name") String name) throws Exception {\n    Friend friend = event.getFriend();\n    // \u90e8\u5206\u7c7b\u578b(\u6bd4\u5982\u300cBot\u300d)\u63d0\u4f9b\u4e86\u9762\u5411Java\u7528\u6237\u4f7f\u7528\u7684\u975e\u963b\u585e\u5ef6\u8fdfapi, \u5e76\u8fd4\u56de\u5f97\u5230 DelayableCompletableFuture \u5bf9\u8c61.\n    // \u5bf9\u4e8e DelayableCompletableFuture \u7c7b\u578b\uff0c\u4f60\u53ef\u4ee5\u5c06\u5b83\u89c6\u4e3a\u4e00\u4e2a\u62e5\u6709 `delay` api\u7684 CompletableFuture.\n    event.getBot()\n            .delay(Duration.ofSeconds(3), () -> {\n                // \u5ef6\u8fdf \u300c3s\u300d, \u7136\u540e\u53d1\u9001\u6d88\u606f.\n                friend.sendBlocking("Hello, " + name);\n            }).delay(3000, () -> {\n                // \u518d\u5ef6\u8fdf\u300c3000ms\u300d, \u63a7\u5236\u53f0\u8f93\u51fa\u4fe1\u606f\n                System.out.println("\u53d1\u9001\u6d88\u606f3\u79d2\u540e");\n            });\n}\n')))),(0,l.kt)("h2",{id:"\u7279\u6b8a\u6d88\u606f"},"\u7279\u6b8a\u6d88\u606f"),(0,l.kt)("h3",{id:"\u4e0a\u4f20\u5e76\u53d1\u9001\u56fe\u7247"},"\u4e0a\u4f20\u5e76\u53d1\u9001\u56fe\u7247"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Listener\nsuspend fun FriendMessageEvent.listen() {\n    val img = Path("img/example.png")\n    val imgResource = Resource.of(img)\n\n    val imgForSend = bot.uploadImage(imgResource)\n\n    // send img to friend\n    friend().send(imgForSend)\n}\n'))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Listener\npublic void listen(FriendMessageEvent event) {\n    Path img = Paths.get("img/example.png");\n    Resource imgResource = Resource.of(img);\n    \n    Image<?> imgForSend = bot.uploadImageBlocking(imgResource);\n    \n    event.getFriend().sendBlocking(imgForSend);\n}\n')))),(0,l.kt)("h3",{id:"\u7fa4\u91ccat--\u6587\u672c"},"\u7fa4\u91ccat + \u6587\u672c"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Listener\nsuspend fun GroupMessageEvent.listen() {\n    val authorId = author().id\n    val at = At(authorId)\n    \n    group().send(at + "\u4f60\u597d?".toText())\n}\n'))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Listener\npublic void listen(GroupMessageEvent event) {\n    ID authorId = event.getAuthor().getId();\n    At at = new At(authorId);\n    \n    Messages messages = Messages.getMessages(at, Text.of(" \u4f60\u597d?"))\n    \n    event.getGroup().sendBlocking(messages);\n}\n')))))}c.isMDXComponent=!0}}]);