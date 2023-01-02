"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[6504],{5162:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},e)}},5488:(t,e,n)=>{n.d(e,{Z:()=>g});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),m=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(t){var e;const{lazy:n,block:i,defaultValue:c,values:g,groupId:k,className:u}=t,b=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=g??b.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),v=(0,l.l)(N,((t,e)=>t.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(e=b.find((t=>t.props.default)))?void 0:e.props.value)??b[0].props.value;if(null!==f&&!N.some((t=>t.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,s.U)(),[M,E]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:B}=(0,m.o5)();if(null!=k){const t=y[k];null!=t&&t!==M&&N.some((e=>e.value===t))&&E(t)}const T=t=>{const e=t.currentTarget,n=x.indexOf(e),a=N[n].value;a!==M&&(B(e),E(a),null!=k&&h(k,String(a)))},L=t=>{var e;let n=null;switch(t.key){case"Enter":T(t);break;case"ArrowRight":{const e=x.indexOf(t.currentTarget)+1;n=x[e]??x[0];break}case"ArrowLeft":{const e=x.indexOf(t.currentTarget)-1;n=x[e]??x[x.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},u)},N.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:M===e?0:-1,"aria-selected":M===e,key:e,ref:t=>x.push(t),onKeyDown:L,onClick:T},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":M===e})}),n??e)}))),n?(0,r.cloneElement)(b.filter((t=>t.props.value===M))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==M})))))}function g(t){const e=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(e)},t))}},3717:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=(n(8209),n(5488)),i=n(5162);const l={sidebar_position:2,title:"\u5347\u7ea7\u6307\u5357"},s=void 0,m={unversionedId:"upgrade-guide/index",id:"upgrade-guide/index",title:"\u5347\u7ea7\u6307\u5357",description:"\u5bf9\u7167\u8868",source:"@site/docs/upgrade-guide/index.md",sourceDirName:"upgrade-guide",slug:"/upgrade-guide/",permalink:"/docs/upgrade-guide/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/upgrade-guide/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1672651725,formattedLastUpdatedAt:"Jan 2, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5347\u7ea7\u6307\u5357"},sidebar:"docs",previous:{title:"\u9996\u9875",permalink:"/docs/"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/quick-start/"}},p={},d=[{value:"\u5bf9\u7167\u8868",id:"\u5bf9\u7167\u8868",level:2},{value:"\u90e8\u5206\u529f\u80fd\u5bf9\u7167",id:"\u90e8\u5206\u529f\u80fd\u5bf9\u7167",level:2},{value:"\u4e8b\u4ef6\u76d1\u542c",id:"\u4e8b\u4ef6\u76d1\u542c",level:3},{value:"\u83b7\u53d6Bot",id:"\u83b7\u53d6bot",level:3},{value:"\u6d88\u606f\u5bf9\u8c61",id:"\u6d88\u606f\u5bf9\u8c61",level:3}],c={toc:d};function g(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5bf9\u7167\u8868"},"\u5bf9\u7167\u8868"),(0,r.kt)("p",null,"\u6b64\u5904\u4f1a\u5217\u4e3e\u51fa simbot2 \u7248\u672c\u4e2d\u5728 simbot3 \u4e2d\u76f8\u4f3c\u6982\u5ff5\u7684\u529f\u80fd\u5bf9\u7167\u8868\u3002\n\u5bf9\u7167\u4ec5\u5bf9\u4e8e\u201c\u6982\u5ff5\u201d\u5c42\u9762\u7684\u5bf9\u7167\uff0c\u81f3\u4e8eAPI\u5c42\u9762\uff0c\u5fc5\u7136\u5b58\u5728\u5927\u91cf\u4e0d\u517c\u5bb9\u53d8\u66f4\uff0c\u8bf7\u81ea\u884c\u6392\u67e5\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u6709\u60f3\u8981\u77e5\u9053\u4f46\u662f\u8fd9\u91cc\u6ca1\u6709\u5217\u4e3e\u51fa\u6765\u7684\u5bf9\u7167\uff0c\u6b22\u8fce\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot-library/simbot3-website/pulls"},"pr")," \u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot-library/simbot3-website/issues"},"issues")," \u8fdb\u884c\u53cd\u9988\uff0c\u975e\u5e38\u611f\u8c22\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:"center"},"v2\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:"center"},"v3\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e8b\u4ef6\u603b\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.api.message.events.MsgGet"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.event.Event"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u76d1\u542c\u51fd\u6570\u5b9a\u4e49\u6ce8\u89e3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simboot.annotation.Listener"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4ec5\u5b58\u5728\u4e8eboot\u6a21\u5757\u4e0b\u3002"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e8b\u4ef6\u76d1\u542c\u6ce8\u89e3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.annotation.Listen",(0,r.kt)("br",null),"love.forte.simbot.annotation.Listens"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simboot.annotation.Listen",(0,r.kt)("br",null),"love.forte.simboot.annotation.Listens"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4ec5\u5b58\u5728\u4e8eboot\u6a21\u5757\u4e0b\uff0c\u4e14\u4e0d\u518d\u5f3a\u6c42\u6b64\u6ce8\u89e3\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e8b\u4ef6\u8fc7\u6ee4\u6ce8\u89e3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.annotation.Filter",(0,r.kt)("br",null),"love.forte.simbot.annotation.Filters"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simboot.annotation.Filter",(0,r.kt)("br",null),"love.forte.simboot.annotation.Filters"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4ec5\u5b58\u5728\u4e8eboot\u6a21\u5757\u4e0b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u76d1\u542c\u51fd\u6570"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.listener.ListenerFunction"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.event.EventListener"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u76d1\u542c\u8fc7\u6ee4\u5668"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.filter.ListenerFilter"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.event.EventFilter"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u76d1\u542c\u62e6\u622a\u5668"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.listener.ListenerInterceptor"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.event.EventInterceptor"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Bot"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.bot.Bot"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.Bot"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Bot\u7ba1\u7406\u5668"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.bot.BotManager"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.BotManager"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7531 OriginBotManager \u7ba1\u7406\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u591a\u7ec4\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.Component"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2.x\u5bf9\u591a\u7ec4\u4ef6\u534f\u540c\u7684\u652f\u6301\u5e76\u4e0d\u53cb\u597d\u3002"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7528\u6237\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.api.message.containers.AccountInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.definition.User"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u597d\u53cb"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.api.message.results.FriendInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.definition.Friend"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7fa4\u804a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.api.message.containers.GroupInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.definition.Group"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7fa4\u6210\u5458"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.api.message.results.GroupMemberInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.definition.Member"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u9891\u9053"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.definition.Guild"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v2\u4e2d\uff0c\u4ee5\u7fa4\u804a\uff08group\uff09\u6a21\u62df\u9891\u9053\u6982\u5ff5\u3002"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5b50\u9891\u9053"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.definition.Channel"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6d88\u606f\u4f53"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u732b\u732b\u7801\u5b57\u7b26\u4e32/\u732b\u732b\u7801\u5bf9\u8c61"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Message\u5bf9\u8c61\u5404\u7c7b\u5b9e\u73b0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v3\u4e2dMessage\u5177\u6709\u5e8f\u5217\u5316\u7279\u6027\uff0c\u732b\u732b\u7801\u662f\u5426\u5b58\u5728\u5c06\u4e0d\u5f71\u54cd\u4f7f\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u9001\u4fe1\u5668"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.api.sender.MsgSender"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v3\u4e2d\u7684api\u64cd\u4f5c\u90fd\u4f1a\u6574\u5408\u5230 definition \u4e2d\uff0c\u4e0d\u518d\u6709\u72ec\u7acb\u7684\u201c\u9001\u4fe1\u5668\u201d\u6982\u5ff5\u3002"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Getter"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.api.sender.Getter"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Setter"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.api.sender.Setter"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Sender"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.api.sender.Sender"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e8b\u4ef6\u4e0a\u4e0b\u6587"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.listener.ListenerContext"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.event.EventProcessingContext"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v2\u4e0d\u533a\u5206\u4e8b\u4ef6\u548c\u51fd\u6570\u4e0a\u4e0b\u6587\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u76d1\u542c\u51fd\u6570\u4e0a\u4e0b\u6587"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.listener.ListenerContext"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.event.EventListenerProcessingContext"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u77ac\u65f6\u4f5c\u7528\u57df"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.listener.MapScopeContext"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.event.ScopeContext"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5168\u5c40\u4f5c\u7528\u57df"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.listener.MapScopeContext"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.event.ScopeContext"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6301\u7eed\u4f1a\u8bdd\u4f5c\u7528\u57df"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.listener.ContinuousSessionScopeContext"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.event.ContinuousSessionContext"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v3\u4e2d\u7684 \u6301\u7eed\u4f1a\u8bdd \u5728\u7528\u6cd5\u4e0a\u4e0ev2\u5b8c\u5168\u4e0d\u540c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e8b\u4ef6\u54cd\u5e94\u4f53"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.listener.ListenResult"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.event.EventResult"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e8b\u4ef6\u54cd\u5e94\u5904\u7406\u5668"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.processor.ListenResultProcessor"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v3\u7684\u54cd\u5e94\u4f53\u5904\u7406\u53ef\u4ee5\u76f4\u63a5\u501f\u52a9\u62e6\u622a\u5668\u5b9e\u73b0\u3002"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u65e5\u5fd7API"),(0,r.kt)("td",{parentName:"tr",align:"center"},"slf4j"),(0,r.kt)("td",{parentName:"tr",align:"center"},"slf4j"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8fd9\u5012\u662f\u6ca1\u53d8\u5316\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u542f\u52a8\u5165\u53e3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.core.SimbotApp"),(0,r.kt)("td",{parentName:"tr",align:"center"},"love.forte.simbot.core.SimbotApp\tlove.forte.simboot.SimbootApp"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v3\u7684\u5165\u53e3\u4ec5\u9650\u4e8eboot\u6a21\u5757\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u542f\u52a8\u6807\u8bb0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"@love.forte.simbot.annotation.SimbotApplication"),(0,r.kt)("td",{parentName:"tr",align:"center"},"@love.forte.simboot.core.SimbootApplication\uff0c\u6216\u5176\u4ed6\u53ef\u9009\u9879"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v3\u7684\u5165\u53e3\u4e0d\u4ec5\u9650\u4e8e\u63d0\u4f9b\u201c\u6807\u8bb0\u4e86\u6ce8\u89e3\u7684class\u5bf9\u8c61\u201d\uff0c\u800c\u662f\u63d0\u4f9b\u4e86\u66f4\u591a\u53ef\u9009\u9879\u3002\u5177\u4f53\u53ef\u63d0\u4f9b\u7684\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003\u6587\u6863\u6216\u6587\u6863\u6ce8\u91ca\u3002")))),(0,r.kt)("h2",{id:"\u90e8\u5206\u529f\u80fd\u5bf9\u7167"},"\u90e8\u5206\u529f\u80fd\u5bf9\u7167"),(0,r.kt)("h3",{id:"\u4e8b\u4ef6\u76d1\u542c"},"\u4e8b\u4ef6\u76d1\u542c"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u9996\u5148\u4f60\u9700\u8981\u660e\u767d\uff0csimbot2\u4e2d\u7684\u4ee5\u6ce8\u89e3\u5f62\u5f0f\u8fdb\u884c\u4e8b\u4ef6\u76d1\u542c\u7684\u65b9\u5f0f\u5728simbot3\u4e2d\u4ea4\u7531 ",(0,r.kt)("strong",{parentName:"p"},"boot")," \u76f8\u5173\u6a21\u5757\u8d1f\u8d23\u4e86\uff0c\n\u4e5f\u5c31\u662f\u8bf4\u5982\u679c\u4f60\u4ec5\u4ec5\u53ea\u662f\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"love.forte.simbot:simbot-core")," \u4e4b\u7c7b\u7684\u975e ",(0,r.kt)("strong",{parentName:"p"},"boot")," \u76f8\u5173\u7684\u6a21\u5757\uff0c\u90a3\u4e48\u662f\u6ca1\u6709\u90a3\u4e9b\u6ce8\u89e3\u7684\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4e0b\u6587\u6240\u6709\u793a\u4f8b\u4ee3\u7801\u4e2d\u53ef\u80fd\u51fa\u73b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Beans"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@Listener")," (simbot3\u7684\u76f8\u5173\u793a\u4f8b\u4ee3\u7801) \u7b49\u6ce8\u89e3\u5747\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"boot")," \u6a21\u5757\u4e0b\u5185\u5bb9\uff0c",(0,r.kt)("strong",{parentName:"p"},"core")," \u6a21\u5757\u65e0\u9700\u4e5f\u6ca1\u6709\u76f8\u5173\u6ce8\u89e3\u3002\n\u6b64\u5904\u4e3a\u4e86\u7b80\u5316\u5c55\u793a\uff0c\u5927\u90e8\u5206\u793a\u4f8b\u9ed8\u8ba4\u8ba4\u4e3a\u5904\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"boot")," \u6a21\u5757\u4e2d\u3002")),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u5bf9\u7167\u3002\u9996\u5148\uff0c\u5047\u5982\u5728simbot2\u4e2d\uff0c\u4f60\u7f16\u5199\u7684\u5185\u5bb9\u5982\u679c\u662f\uff1a"),(0,r.kt)(o.Z,{groupId:"code",class:"shadow--md",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="simbot2\u270c"',title:'"simbot2\u270c"'},"@Beans\nclass MyListener {\n    @OnPrivate // @Listen(PrivateMsg::class)\n    suspend fun PrivateMsg.listen() {\n      // do...\n    }   \n}\n"))),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="simbot2\u270c"',title:'"simbot2\u270c"'},"@Beans\npublic class MyListener {\n    @OnPrivate // @Listen(PrivateMsg::class)\n    public void listen(privateMsg PrivateMsg) {\n        // do...\n    }\n}\n")))),(0,r.kt)("p",null,"\u90a3\u4e48\u5728simbot3\u4e2d\u5176\u8868\u73b0\u4e3a\uff08\u5728boot\u76f8\u5173\u6a21\u5757\u4e0b\uff09\uff1a"),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="simbot3\ud83d\udc4c"',title:'"simbot3\ud83d\udc4c"'},"@Beans\nclass MyListener {\n    @Listener\n    suspend fun FriendMessageEvent.listen() {\n        // do...\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"KotlinTop",label:"Kotlin(Top-Level)",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\u5b9e\u9a8c\u6027",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"boot")," \u6a21\u5757\u4e0b\u5bf9\u4e8eKotlin\u9876\u5c42\u51fd\u6570\u7684\u626b\u63cf\u4e0e\u52a0\u8f7d\u529f\u80fd\u5c1a\u5904\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u9636\u6bb5"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="simbot3\ud83d\udc4c"',title:'"simbot3\ud83d\udc4c"'},"@Listener\nsuspend fun FriendMessageEvent.listen() {\n    // do...\n}\n"))),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="simbot3\ud83d\udc4c"',title:'"simbot3\ud83d\udc4c"'},"@Beans\npublic class MyListener {\n    @Listener\n    public void listen(FriendMessageEvent event) {\n        // do...\n    }\n}\n")))),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6ce8\u610f\u5230\u5982\u4e0b\u53d8\u5316\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u518d\u9700\u8981\u901a\u8fc7\u6ce8\u89e3\u6807\u8bb0\u9700\u8981\u76d1\u542c\u7684\u7c7b\u578b\u4e86\uff0c\u800c\u662f\u4ec5\u9700\u8981\u4e00\u4e2a\u6807\u8bb0\u6ce8\u89e3 ",(0,r.kt)("inlineCode",{parentName:"li"},"@Listener"),"\u3002simbot3\u4e2d\u4f1a\u6839\u636e\u4f60\u6240\u9700\u7684\u7c7b\u578b\u81ea\u52a8\u5224\u65ad\u8fd9\u4e2a\u76d1\u542c\u51fd\u6570\u7684\u76d1\u542c\u4e8b\u4ef6\u7c7b\u578b\u3002\u5047\u5982\u6807\u8bb0\u4e3a\u4e86\u76d1\u542c\u51fd\u6570\uff08\u6807\u8bb0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"@Listener")," \uff09\u7684\u76d1\u542c\u51fd\u6570\u6ca1\u6709\u63d0\u4f9b\u4efb\u4f55\u4e8b\u4ef6\u76f8\u5173\u7684\u7c7b\u578b\uff0c\u90a3\u4e48\u4ee3\u8868\u5b83\u76d1\u542c\u6240\u6709\u4e8b\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"Kotlin\u4e2d\uff0c\u652f\u6301\u626b\u63cf\u9876\u5c42\u51fd\u6570\u3002\uff08\u5b9e\u9a8c\u9636\u6bb5\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u4f9d\u8d56\u6ce8\u5165\u529f\u80fd\u7684\u6ce8\u89e3 ",(0,r.kt)("inlineCode",{parentName:"li"},"@Beans")," \u7684 ",(0,r.kt)("strong",{parentName:"li"},"\u540d\u79f0")," \u6ca1\u6709\u53d8\uff08\u5305\u8def\u5f84\u6709\u53d8\u5316\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u540d\u79f0\u53d8\u4e86\u3002")),(0,r.kt)("h3",{id:"\u83b7\u53d6bot"},"\u83b7\u53d6Bot"),(0,r.kt)("p",null,"\u5728simbot2\u4e2d\uff0c\u4f60\u5982\u679c\u9700\u8981\u5728\u975e\u76d1\u542c\u51fd\u6570\u73af\u5883\u4e2d\u4f7f\u7528bot\u6216\u8005\u9700\u8981botManager\u5e76\u5bfb\u627e\u5176\u4ed6bot\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u501f\u52a9\u4f9d\u8d56\u6ce8\u5165\u529f\u80fd\uff1a"),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="simbot2\u270c"',title:'"simbot2\u270c"'},"@Beans\nclass External {\n    @Depend\n    lateinit var botManager: BotManager\n    \n    fun run() {\n        // use manager..\n    }\n    \n}\n"))),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="simbot2\u270c"',title:'"simbot2\u270c"'},"@Beans\npublic class External {\n    @Depend\n    private BotManager botManager;\n    \n    public void run() {\n        // use manager..\n    }\n    \n}\n")))),(0,r.kt)("p",null,"\u800c\u5728v3\u4e2d\uff0c\u56e0\u4e3a\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"BotManager")," \u90fd\u662f\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager")," \u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u8003\u8651\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager"),"\uff1a"),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="simbot3\ud83d\udc4c"',title:'"simbot3\ud83d\udc4c"'},'fun useBotManager() {\n    OriginBotManager.forEach { manager ->\n        manager.all().forEach { bot ->\n            println("Bot: $bot")\n        }\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="simbot3\ud83d\udc4c"',title:'"simbot3\ud83d\udc4c"'},'public void useBotManager() {\n    OriginBotManager.INSTANCE.forEach(manager -> {\n        manager.all().forEach(bot -> {\n            System.out.println("bot: " + bot);\n        });\n    }); \n}\n')))),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager")," \u65e0\u5173\u4efb\u4f55\u73af\u5883\uff0c\u5c5e\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40")," \u6027API\u3002\u4f60\u5e94\u8be5\u8c28\u614e\u8003\u8651\u662f\u5426\u5e94\u8be5\u4f7f\u7528\u4efb\u4f55 ",(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40")," \u76f8\u5173\u7684API\uff0c\u5e76\u4e14\u8fd9\u4e9bAPI\u672a\u6765\u90fd\u6709\u53ef\u80fd\u53d1\u751f\u53d8\u66f4\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u76f8\u5173\u5185\u5bb9\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"../definition/bot-manager"},"BOT\u7ba1\u7406\u5668")," \u3002")),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager")," \u5e76\u4e0d\u662f\u7279\u522b\u88ab\u5efa\u8bae\u4f7f\u7528\u3002\u5728 simbot3 \u4e2d\uff0c\n\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," \u7b49\u591a\u79cd\u65b9\u5f0f\u6765\u53d6\u4ee3\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"OriginBotManager"),"\u3002"),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"\u4ecebot\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Listener\nsuspend fun onEvent(event: FooEvent){\n    // \u901a\u8fc7bot\u76f4\u63a5\u5f97\u5230\u5176\u6240\u5c5e\u7684botManager\n    val botManager = event.bot.manager\n    val newBot = botManager.register(...)\n    newBot.start()\n    // ...\n}\n")),(0,r.kt)("p",null,"\u4eceapplication\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Listener\nsuspend fun onEvent(context: EventProcessingContext,  event: FooEvent){\n    context.application.botManagers.forEach { manager -> \n        if (...) {\n            val newBot = manager.register(...)\n            newBot.start()\n            // ...\n        }\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"\u4ecebot\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Listener\npublic void onEvent(FooEvent event) throws InterruptedException {\n    final BotManager<? extends Bot> manager = event.getBot().getManager();\n    final Bot newBot = manager.register(...);\n    newBot.startBlocking();\n    // ...\n}\n")),(0,r.kt)("p",null,"\u4eceapplication\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Listener\npublic void onEvent(EventProcessingContext context, FriendMessageEvent event) throws InterruptedException {\n    final Application application = context.getAttribute(ApplicationAttributes.Application);\n    if (application != null) {\n        for (BotManager<?> manager : application.getBotManagers()) {\n            if (...) {\n                final Bot bot = manager.register(...);\n                bot.startBlocking();\n                // ...\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u6216"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Listener\npublic void onEvent(EventProcessingContext context, FriendMessageEvent event) throws InterruptedException {\n    final Application application = ApplicationAttributes.getApplication(context);\n    for (BotManager<?> manager : application.getBotManagers()) {\n        if (...) {\n            final Bot bot = manager.register(...);\n            bot.startBlocking();\n            // ...\n        }\n    }\n}\n")))),(0,r.kt)("h3",{id:"\u6d88\u606f\u5bf9\u8c61"},"\u6d88\u606f\u5bf9\u8c61"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"../definition/message-overview"},(0,r.kt)("strong",{parentName:"a"},"\u6d88\u606f\u6982\u8ff0")),"\u3002")))}g.isMDXComponent=!0},8209:(t,e,n)=>{n.d(e,{G:()=>i});var a=n(7294),r=n(7273);const o="light";const i=({chart:t,config:e})=>{if("undefined"==typeof window)return a.createElement("div",{className:"mermaid","data-mermaid-src":t},t);const n=(0,a.useMemo)((()=>"string"==typeof e?JSON.parse(e):e),[e]),i=document.querySelector("html"),[l,s]=(0,a.useState)(!1),m=(0,a.useMemo)((()=>function(t,e){let n=t.getAttribute("data-theme")??o;n!==o&&"dark"!==n&&(n=o);const a=n===o?"default":"dark";return e?.theme?.[n]??e?.mermaid?.theme??a}(i,n)),[n,l]);return(0,a.useEffect)((()=>{const t=new MutationObserver((t=>{for(const e of t)if("attributes"===e.type&&"data-theme"===e.attributeName){s((t=>!t));break}}));return t.observe(i,{attributes:!0}),()=>{try{t.disconnect()}catch{}}}),[]),(0,a.useEffect)((()=>{n&&(n.mermaid?r.Z.initialize({startOnLoad:!0,...n.mermaid,theme:m}):r.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((t=>{t.removeAttribute("data-processed"),t.innerHTML=t.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[n,m]),(0,a.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((t=>{t.removeAttribute("data-processed"),t.innerHTML=t.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[t]),a.createElement("div",{className:"mermaid","data-mermaid-src":t},t)}}}]);