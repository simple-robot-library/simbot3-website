(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[5879],{5162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},4866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var n=a(7462),r=a(7294),o=a(6010),i=a(6775),l=a(1980),s=a(7392),u=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,d]=c({queryString:a,groupId:n}),[g,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??g;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=a(2466),k=a(2389);const f="tabList__CuJ",v="tabItem_LNqP";function B(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,b.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==i&&(d(t),l(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function M(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(B,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function h(e){const t=(0,k.Z)();return r.createElement(M,(0,n.Z)({key:String(t)},e))}},5510:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),o=(a(8209),a(4866)),i=a(5162);const l={title:"BOT\u7ba1\u7406\u5668"},s=void 0,u={unversionedId:"definition/bot-manager/index",id:"definition/bot-manager/index",title:"BOT\u7ba1\u7406\u5668",description:"\u5728simbot3\u4e2d\uff0c\u6240\u6709\u7684 Bot \u90fd\u5e94\u8be5\u7531 BotManager \u8fdb\u884c\u7ba1\u7406\uff0c\u6240\u6709\u7684 BotManager \u90fd\u5e94\u7531 OriginBotManager \u8fdb\u884c\u7ba1\u7406\u3002",source:"@site/docs/definition/bot-manager/index.md",sourceDirName:"definition/bot-manager",slug:"/definition/bot-manager/",permalink:"/docs/definition/bot-manager/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/definition/bot-manager/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1676044030,formattedLastUpdatedAt:"2023\u5e742\u670810\u65e5",frontMatter:{title:"BOT\u7ba1\u7406\u5668"},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u7ba1\u7406\u5668",permalink:"/docs/definition/event-manager/"},next:{title:"Application",permalink:"/docs/basic/application"}},d={},m=[{value:"OriginBotManager",id:"originbotmanager",level:2},{value:"BotManager",id:"botmanager",level:2},{value:"\u83b7\u53d6API",id:"\u83b7\u53d6api",level:3},{value:"\u6ce8\u518cAPI",id:"\u6ce8\u518capi",level:3}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728simbot3\u4e2d\uff0c\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot")," \u90fd\u5e94\u8be5\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"BotManager")," \u8fdb\u884c\u7ba1\u7406\uff0c\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"BotManager")," \u90fd\u5e94\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager")," \u8fdb\u884c\u7ba1\u7406\u3002"),(0,r.kt)("h2",{id:"originbotmanager"},"OriginBotManager"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager")," \u662f\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"BotManager")," \u5b9e\u4f8b\u7684\u7edf\u4e00\u7ba1\u7406\u7c7b\uff0c\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"BotManager")," \u5b9e\u73b0\u7c7b\u5728\u65b0\u5efa\u5b9e\u4f8b\u7684\u65f6\u5019\uff08new\uff09\u90fd\u4f1a\u5c06\u81ea\u8eab\u4ea4\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager")," \u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u3002",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager")," \u5185\u90e8\u4e0d\u4f1a\u6301\u6709\u8fd9\u4e9bmanager\uff0c\u5f53\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"BotManager")," \u6267\u884c\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel")," \u6216\u88ab\u5783\u573e\u56de\u6536\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager")," \u4e2d\u5c06\u65e0\u6cd5\u518d\u83b7\u53d6\u5230\u5b83\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager"),"\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u5728\u4efb\u4f55\u4e8b\u4ef6\u83b7\u53d6\u5230\u76ee\u524d\u5904\u4e8e\u6d3b\u8dc3\u72b6\u6001\u4e2d\u7684\u4efb\u4f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"BotManager"),"\uff0c\u8fdb\u800c\u5f97\u5230\u4efb\u4f55\u6d3b\u8dc3\u72b6\u6001\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot")," \u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager")," \u672c\u8eab\u5b9e\u73b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Set<BotManager<*>>"),"\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u5c06\u5176\u89c6\u4e3a\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Set")," \u4f7f\u7528 \u2014\u2014 \u5f53\u7136\uff0c\u4f60\u4e0d\u80fd\u76f4\u63a5\u5bf9\u5b83\u8fdb\u884c\u4fee\u6539\u64cd\u4f5c\u3002"),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'OriginBotManager.forEach {\n    println("BotManager: $it")\n}\n'))),(0,r.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'for(BotManager<?> it : OriginBotManager) {\n    System.out.println("BotManager: " + it)\n}\n')))),(0,r.kt)("p",null,"\u9664\u4e86Set\u63d0\u4f9b\u7684api\u4ee5\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager")," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u989d\u5916\u7684API\u4f7f\u5f97\u53ef\u80fd\u66f4\u5feb\u6377\u7684\u8fdb\u884c\u67d0\u4e9b\u64cd\u4f5c\uff1a"),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// \u6839\u636e\u7ec4\u4ef6\u83b7\u53d6\u6240\u6709\u7684\u7ba1\u7406\u5668\u3002\u5047\u8bbe\u8fd9\u91cc\u83b7\u53d6\u6240\u6709\u7684Mirai\u7ec4\u4ef6\u3002\nval managers: List<BotManager<*>> = OriginBotManager.getManagers(MiraiComponent.component)\n\n\n// \u901a\u8fc7ID\u548c\u7ec4\u4ef6\u4fe1\u606f\u76f4\u63a5\u5b9a\u4f4d\u4e00\u4e2aBot\u5bf9\u8c61\u3002\nval bot: Bot? = OriginBotManager.getBot(123.ID, TencentGuildComponent.component)\n\n\n// \u8fdb\u884c\u5173\u95ed\u64cd\u4f5c\u3002\u6ce8\u610f\uff01\u5173\u95ed\u64cd\u4f5c\u5c06\u4f1a\u5173\u95ed\u6240\u6709\u88ab\u7ba1\u7406\u7684botManager\uff0c\u5e76\u4e14\u5c06\u65e0\u6cd5\u5728\u7ee7\u7eed\u6784\u5efa\u65b0\u7684\u7ba1\u7406\u5668\u3002\n// \u9664\u975e\u5fc5\u8981\uff0c\u5426\u5219\u4f60\u4e0d\u9700\u8981\u5173\u5fc3\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u8fd9\u4e00\u822c\u662f\u5728\u7cfb\u7edf\u5173\u95ed\u7684hook\u4e4b\u7c7b\u7684\u5730\u65b9\u4f7f\u7528\u3002\nOriginBotManager.cancel()\n"))),(0,r.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"final OriginBotManager manager = OriginBotManager.INSTANCE;\n\n// \u5f97\u5230\u5bf9\u5e94\u7ec4\u4ef6\u4e0b\u7684\u6240\u6709manager\u3002\n// \u5b9e\u9645\u4e0aSimbotComponent\u4e0d\u4f1a\u6709\u6240\u5c5ebotManager\uff0c\u6b64\u5904\u4ec5\u505a\u793a\u4f8b\u3002\nfinal List<BotManager<?>> managers = manager.getManagers(SimbotComponent.INSTANCE);\n\n// \u6839\u636eID\u548c\u7ec4\u4ef6\u4fe1\u606f\u5f97\u5230\u5bf9\u5e94\u7684Bot\u3002\nfinal ID botId = Identifies.ID(123); // \u4f60bot\u7684ID\uff0c\u53ef\u4ee5\u662f\u6570\u5b57\uff0c\u6216\u8005\u5b57\u7b26\u4e32\u7b49\u3002\nfinal Bot bot = manager.getBot(botId, SimbotComponent.INSTANCE);\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager")," \u65e0\u5173\u4efb\u4f55\u73af\u5883\uff0c\u5c5e\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40")," \u6027API\u3002\u4f60\u5e94\u8be5\u8c28\u614e\u8003\u8651\u662f\u5426\u5e94\u8be5\u4f7f\u7528\u4efb\u4f55 ",(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40")," \u76f8\u5173\u7684API\uff0c\u5e76\u4e14\u8fd9\u4e9bAPI\u672a\u6765\u90fd\u6709\u53ef\u80fd\u53d1\u751f\u53d8\u66f4\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u5efa\u8bae\u4f60\u5728\u66f4\u5408\u9002\u7684\u73af\u5883\u4e2d\u83b7\u53d6\u5e76\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"BotManager"),"\u3002\n\u5728simbot3\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"BotManager")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot"),"\uff0c \u6216\u8005\u8bf4\u6574\u4e2a\u542f\u52a8\u6d41\u7a0b\uff08\u5728\u57fa\u7840\u7684 ",(0,r.kt)("strong",{parentName:"p"},"core")," \u6a21\u5757\u7684\u89d2\u5ea6\u4e0a\uff09 \u606f\u606f\u76f8\u5173\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot")," \u5f88\u8f7b\u6613\u5730\u5f97\u5230\u5176\u5bf9\u5e94/\u6240\u5c5e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"BotManager"),"\uff0c\u5e76\u5728\u5c3d\u91cf\u907f\u514d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager")," \u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"/** \u5904\u7406\u4e00\u4e2a\u7fa4\u6d88\u606f\u4e8b\u4ef6 */\nsuspend fun GroupMessageEvent.processEvent() {\n    // \u5f97\u5230\u4e8b\u4ef6\u4e2dbot\u6240\u5c5e\u7684manager\n    val manager: BotManager<out Bot> = bot.manager\n    // \u5f97\u5230\u5f53\u524d\u7ba1\u7406\u5668\u7684\u6240\u6709bot\n    val all: List<Bot> = manager.all()\n}\n"))),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/** \u5904\u7406\u4e00\u4e2a\u7fa4\u6d88\u606f\u4e8b\u4ef6 */\npublic void processEvent(GroupMessageEvent event) {\n    // \u5f97\u5230\u6b64\u4e8b\u4ef6\u5bf9\u5e94\u7684bot\n    final Bot bot = event.getBot();\n\n    // \u5f97\u5230bot\u6240\u5c5e\u7684manager\n    final BotManager<? extends Bot> manager = bot.getManager();\n\n    // \u5f97\u5230\u8fd9\u4e2abotManager\u4e2d\u7684\u6240\u6709Bot\n    final List<? extends Bot> allBot = manager.all();\n}\n"))))),(0,r.kt)("h2",{id:"botmanager"},"BotManager"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BotManager<B extends Bot>")," \u987e\u540d\u601d\u4e49\u5373\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot")," \u7684\u7ba1\u7406\u5668\uff0c\u6bcf\u4e2abot\u90fd\u5e94\u5c5e\u4e8e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"BotManager"),"\u3002"),(0,r.kt)("h3",{id:"\u83b7\u53d6api"},"\u83b7\u53d6API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BotManager")," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u7528\u4e8e\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot")," \u7684API: ",(0,r.kt)("inlineCode",{parentName:"p"},"all")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),"\u3002"),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val manager: BotManager<*> = ...\n\n// \u83b7\u53d6\u6240\u6709Bot\uff0c\u4ee5\u5e8f\u5217Sequence\u7684\u5f62\u5f0f\u8fd4\u56de\nval all: List<Bot> = manager.all()\n\n// \u83b7\u53d6\u6307\u5b9a\u7684Bot\nval bot: Bot? = manager.get(123.ID)\n"))),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"final BotManager<? extends Bot> manager = ...;\n\n// \u83b7\u53d6\u6240\u6709\u7684Bot\uff0c\u4f5c\u4e3aStream\u8fd4\u56de\nfinal List<? extends Bot> allBot = manager.all();\n        \n// \u6839\u636eID\u83b7\u53d6\u5bf9\u5e94\u7684Bot\nfinal Bot bot = manager.get(Identifies.ID(123));\n")))),(0,r.kt)("h3",{id:"\u6ce8\u518capi"},"\u6ce8\u518cAPI"),(0,r.kt)("p",null,"\u6240\u6709\u7684BotManager\u90fd\u81f3\u5c11\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6ce8\u518c\u51fd\u6570 register(BotVerifyInfo)\u3002\u4f46\u5b9e\u9645\u4e0a\u5e76\u4e0d\u63a8\u8350\u4f7f\u7528\u8005\u901a\u8fc7\u8fd9\u4e2a\u51fd\u6570\u6765\u6ce8\u518cBOT\u3002\n\u6b64\u51fd\u6570\u4e2d\u7684\u53c2\u6570 BotVerifyInfo \u662f\u901a\u8fc7\u8bfb\u53d6 *.bot \u6587\u4ef6\u800c\u5f97\u5230\u7684\u4ee5Json\u914d\u7f6e\u4e3a\u4e3b\u7684\u4fe1\u606f\u7c7b\uff0c\u4f46\u662f\u5f88\u591a\u60c5\u51b5\u4e0b\u6ce8\u518c\u4e00\u4e2aBot\u5e76\u4e0d\u9700\u8981\u4e00\u4e2aJson\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u90a3\u4e48\u8be5\u5982\u4f55\u6ce8\u518c\u5462\uff1f\u56e0\u4e3asimbot3\u652f\u6301\u591a\u7ec4\u4ef6\u534f\u540c\uff0c\u56e0\u6b64\u9996\u5148\u4f60\u9700\u8981\u77e5\u9053\u4f60\u8981\u6ce8\u518cbot\u7684\u76ee\u6807\u7ec4\u4ef6\u4e0b\u7684BotManager\u7684\u5177\u4f53\u7c7b\u578b\uff0c\u7136\u540e\u83b7\u53d6\u5b83\u3002\u8fd9\u91cc\u4ee5 Mirai\u7ec4\u4ef6 \u4e3a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val miraiManager = OriginBotManager.filterIsInstance<MiraiBotManager>().first()\n")))}c.isMDXComponent=!0},1748:(e,t,a)=>{var n={"./locale":9234,"./locale.js":9234};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=1748},8209:(e,t,a)=>{"use strict";a.d(t,{G:()=>i});var n=a(7294),r=a(1304);const o="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[l,s]=(0,n.useState)(!1),u=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??o;a!==o&&"dark"!==a&&(a=o);const n=a===o?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(i,a)),[a,l]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){s((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?r.Z.initialize({startOnLoad:!0,...a.mermaid,theme:u}):r.Z.initialize({startOnLoad:!0,theme:u}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[a,u]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);