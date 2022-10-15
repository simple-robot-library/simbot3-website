"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[7619],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),i=n(2389),o=n(7392),p=n(7094),s=n(2466);const m="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,n;const{lazy:i,block:c,defaultValue:d,values:b,groupId:k,className:h}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,o.l)(g,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:C}=(0,p.U)(),[E,w]=(0,l.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:L}=(0,s.o5)();if(null!=k){const e=y[k];null!=e&&e!==E&&g.some((t=>t.value===e))&&w(e)}const D=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==E&&(L(t),w(a),null!=k&&C(k,String(a)))},F=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var l;const t=T.indexOf(e.currentTarget)-1;n=null!=(l=T[t])?l:T[T.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},h)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>T.push(e),onKeyDown:F,onFocus:D,onClick:D},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function d(e){const t=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},1610:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const l="label_Yf5u";function r(e){let{type:t,href:n,children:r}=e;t=t||"primary";const i=a.createElement("span",{className:l},a.createElement("span",{className:"badge badge--"+t},r));return null!=n&&n.length>0?a.createElement("a",{href:n},i):i}},7980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),i=n(5162);n(814),n(1610);const o={authors:"forliy",title:"2022\u5e74\u7b2c40\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},p=void 0,s={permalink:"/blog/2022/10/07/weak-40-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022-10-07/weak-40-report.mdx",source:"@site/blog/2022-10-07/weak-40-report.mdx",title:"2022\u5e74\u7b2c40\u5468\u5468\u62a5",description:"\u5927\u6982\u662f2022\u5e74\u7b2c40\u5468\u5468\u62a5\u55b5\u3002",date:"2022-10-07T00:00:00.000Z",formattedDate:"October 7, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:5.135,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c40\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c41\u5468\u5468\u62a5",permalink:"/blog/2022/10/16/weak-41-report"},nextItem:{title:"2022\u5e74\u7b2c39\u5468\u5468\u62a5",permalink:"/blog/2022/09/30/weak-39-report"}},m={authorsImageUrls:[void 0]},u=[{value:"\ud83d\ude80 \u6838\u5fc3\u5e93\u66f4\u65b0",id:"-\u6838\u5fc3\u5e93\u66f4\u65b0",level:2},{value:"\u5b8c\u5584 <code>DelayableCompletableFuture</code> \u5185\u5bb9 (#463)",id:"\u5b8c\u5584-delayablecompletablefuture-\u5185\u5bb9-463",level:3},{value:"\u8c03\u6574\u76d1\u542c\u51fd\u6570\u7684\u6ce8\u518c\u3001\u8c03\u5ea6\u673a\u5236; \u5f03\u7528 <code>EventListener</code> \u4e2d\u7684<code>id</code>\u3001<code>priority</code>\u3001<code>isAsync</code>\u5c5e\u6027\u5e76\u5c06\u8fd9\u4e9b\u4fe1\u606f\u8c03\u6574\u5230\u6ce8\u518c\u65f6 (#465)",id:"\u8c03\u6574\u76d1\u542c\u51fd\u6570\u7684\u6ce8\u518c\u8c03\u5ea6\u673a\u5236-\u5f03\u7528-eventlistener-\u4e2d\u7684idpriorityisasync\u5c5e\u6027\u5e76\u5c06\u8fd9\u4e9b\u4fe1\u606f\u8c03\u6574\u5230\u6ce8\u518c\u65f6-465",level:3},{value:"<code>EventResult</code> \u7ed3\u6784\u4f18\u5316; \u54cd\u5e94\u503c\u652f\u6301\u5904\u7406 <code>CompletableFuture</code> \u4e0e <code>Deferred</code> (#466)",id:"eventresult-\u7ed3\u6784\u4f18\u5316-\u54cd\u5e94\u503c\u652f\u6301\u5904\u7406-completablefuture-\u4e0e-deferred-466",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5927\u6982\u662f2022\u5e74\u7b2c40\u5468\u5468\u62a5\u55b5\u3002"),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("small",null,(0,l.kt)("i",null,"\u65f6\u95f4\u5982\u5b69\u7ae5, \u5b09\u7b11\u5e02\u4e95\u95f4; \u65f6\u95f4\u82e5\u5ddd\u6d41, \u6d93\u6d93\u77f3\u7f45\u9699."))),(0,l.kt)("h2",{id:"-\u6838\u5fc3\u5e93\u66f4\u65b0"},"\ud83d\ude80 \u6838\u5fc3\u5e93\u66f4\u65b0"),(0,l.kt)("p",null,"\u672c\u5468 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u6682\u65f6\u6ca1\u6709\u65b0\u7684\u7248\u672c\u66f4\u65b0\uff0c\u4e0d\u8fc7\u5df2\u7ecf\u6709\u4e86\u51e0\u4e2a\u9884\u5907\u7279\u6027\u5c06\u4f1a\u5728\u4e0b\u4e2a\u7248\u672c\u4e2d\u5448\u73b0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EventResult")," \u7ed3\u6784\u4f18\u5316; \u54cd\u5e94\u503c\u652f\u6301\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"li"},"CompletableFuture")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"Deferred")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/simple-robot/simpler-robot/pull/466"},"#466"),")"),(0,l.kt)("li",{parentName:"ul"},"\u8c03\u6574\u76d1\u542c\u51fd\u6570\u7684\u6ce8\u518c\u3001\u8c03\u5ea6\u673a\u5236; \u5f03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"EventListener")," \u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"id"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"priority"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"isAsync"),"\u5c5e\u6027\u5e76\u5c06\u8fd9\u4e9b\u4fe1\u606f\u8c03\u6574\u5230\u6ce8\u518c\u65f6 (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/simple-robot/simpler-robot/pull/465"},"#465"),")"),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5584 ",(0,l.kt)("inlineCode",{parentName:"li"},"DelayableCompletableFuture")," \u5185\u5bb9 (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/simple-robot/simpler-robot/pull/463"},"#463"),")")),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u7b80\u5355\u804a\u804a\u8fd9\u51e0\u4e2a\u7279\u6027."),(0,l.kt)("h3",{id:"\u5b8c\u5584-delayablecompletablefuture-\u5185\u5bb9-463"},"\u5b8c\u5584 ",(0,l.kt)("inlineCode",{parentName:"h3"},"DelayableCompletableFuture")," \u5185\u5bb9 (",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/simple-robot/simpler-robot/pull/463"},"#463"),")"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u7248\u672c\u4e2d, ",(0,l.kt)("inlineCode",{parentName:"p"},"DelayableCompletableFuture")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," \u4e4b\u95f4\u5176\u5b9e\u662f\u76f8\u4e92\u72ec\u7acb\u7684, \u800c\u5728 #463 \u7684\u4f18\u5316\u4e4b\u540e, \u5b83\u4eec\u4e4b\u95f4\u4fbf\u6709\u4e86\u66f4\u591a\u7684\u5171\u901a\u6027."),(0,l.kt)("h3",{id:"\u8c03\u6574\u76d1\u542c\u51fd\u6570\u7684\u6ce8\u518c\u8c03\u5ea6\u673a\u5236-\u5f03\u7528-eventlistener-\u4e2d\u7684idpriorityisasync\u5c5e\u6027\u5e76\u5c06\u8fd9\u4e9b\u4fe1\u606f\u8c03\u6574\u5230\u6ce8\u518c\u65f6-465"},"\u8c03\u6574\u76d1\u542c\u51fd\u6570\u7684\u6ce8\u518c\u3001\u8c03\u5ea6\u673a\u5236; \u5f03\u7528 ",(0,l.kt)("inlineCode",{parentName:"h3"},"EventListener")," \u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"h3"},"id"),"\u3001",(0,l.kt)("inlineCode",{parentName:"h3"},"priority"),"\u3001",(0,l.kt)("inlineCode",{parentName:"h3"},"isAsync"),"\u5c5e\u6027\u5e76\u5c06\u8fd9\u4e9b\u4fe1\u606f\u8c03\u6574\u5230\u6ce8\u518c\u65f6 (",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/simple-robot/simpler-robot/pull/465"},"#465"),")"),(0,l.kt)("p",null,"\u6211\u4eec\u5728\u5f88\u4e45\u4e4b\u524d\u4fbf\u6ce8\u610f\u5230\uff0c\u7ecf\u5e38\u6709\u4eba\u4f1a\u6bd4\u8f83\u5173\u5fc3\u6216\u8005\u671f\u671b\u80fd\u591f\u62e5\u6709\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u6001\u6ce8\u518c\u76d1\u542c\u51fd\u6570"),"\u7684\u7279\u6027\u4e0e\u80fd\u529b\u3002\n\u5728\u8fd9\u4e4b\u524d\uff0csimbot\u6838\u5fc3\u4e2d\u63d0\u4f9b\u7684\u4e8b\u4ef6\u8c03\u5ea6\u5668\u63a8\u8350\u9884\u6ce8\u518c\u76d1\u542c\u51fd\u6570\uff0c\u652f\u6301\u540e\u7eed\u6ce8\u518c\u800c\u4e0d\u652f\u6301",(0,l.kt)("strong",{parentName:"p"},"\u51fd\u6570\u79fb\u9664"),"\u3002"),(0,l.kt)("p",null,"\u539f\u672c\u7684\u8c03\u5ea6\u5668\u4e2d\uff0c\u4f1a\u5bf9\u6240\u6709\u7684\u76d1\u542c\u51fd\u6570\u8fdb\u884c\u9884\u5904\u7406\u4e0e\u7f13\u5b58\uff0c\u5982\u679c\u9891\u7e41\u7684\u52a8\u6001\u589e\u5220\u76d1\u542c\u51fd\u6570\u4f1a\u5927\u5927\u964d\u4f4e\u6574\u4f53\u6548\u7387\u3002\n\u800c\u8fd9\u6b21\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/pull/465"},"#465")," \u4e2d\uff0c\n\u6211\u4eec\u5bf9\u5176\u5185\u90e8\u7684\u6574\u4f53\u7ed3\u6784\u505a\u4e86\u8c03\u6574\uff0c\u5728\u4fdd\u7559\u4e86\u539f\u6709\u5927\u90e8\u5206\u7279\u6027\u7684\u60c5\u51b5\u4e0b\uff0c\u652f\u6301\u7684\u76d1\u542c\u51fd\u6570\u7684\u52a8\u6001\u6ce8\u518c\u4e0e\u5220\u9664\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"application\u6784\u5efa\u8fc7\u7a0b\u4e2d",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"createSimpleApplication {\n    listeners {\n        FriendEvent { // this: EventListenerProcessingContext\n            // \u5f53\u524d\u6240\u5904\u7684\u76d1\u542c\u51fd\u6570\u7684\u53e5\u67c4.\n            val currentHandle = this.listenerHandle\n\n            // \u5f97\u5230\u5f53\u524d\u76d1\u542c\u51fd\u6570\u6240\u5c5e\u7684\u5bb9\u5668\n            val currentContainer = currentHandle.container\n            // \u52a8\u6001\u6ce8\u518c\u4e00\u4e2a\u65b0\u7684\u76d1\u542c\u51fd\u6570, \u5e76\u5f97\u5230\u8fd9\u4e2a\u65b0\u51fd\u6570\u7684\u53e5\u67c4\n            val newListenerHandle = currentContainer.register(buildSimpleListener(FriendMessageEvent) {\n            match { /* ... */ true }\n            process { /* \u5904\u7406\u4e8b\u4ef6 */ }\n        })\n\n        // \u7b49\u5f850.5s\n        delay(500)\n\n        // \u5220\u9664\u8fd9\u4e2a\u76d1\u542c\u51fd\u6570.\n        newListenerHandle.dispose()\n\n        // \u5220\u9664\u81ea\u5df1(\u5f53\u524d\u7684\u76d1\u542c\u51fd\u6570)\n        currentHandle.dispose()\n        }\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"application\u6784\u5efa\u5b8c\u6210\u540e",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val application = createSimpleApplication {\n    // ...\n}\n// \u5f97\u5230\u4e8b\u4ef6\u7ba1\u7406\u5668\nval manager = application.eventListenerManager\nrepeat(500) {\n    // \u6ce8\u518c\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\n    val handle = manager.register(buildSimpleListener(FriendEvent) {\n        match { /* ... */ true }\n        process { /* ... */ }\n    })\n\n    // \u5ef6\u8fdf\u4e00\u6bb5\u65f6\u95f4\u540e\u5220\u6389\u5b83\n    delay(Random.nextLong(500))\n    handle.dispose()\n}\n")))),(0,l.kt)("p",null,"\u56de\u5230\u6807\u9898\uff0c\u6211\u4eec\u6ce8\u610f\u5230\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"EventListener")," \u4e2d\u7684\u5927\u90e8\u5206\u5c5e\u6027\u5bf9\u4e8e\u5176\u672c\u8eab\u6765\u8bb2\u5e76\u4e0d\u5fc5\u8981\uff0c\u5bf9\u4e8e\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u51fd\u6570"),"\u6765\u8bb2\uff0c\u4ed6\u4e0d\u5e94\u5173\u5fc3\u81ea\u5df1\u662f\u4e0d\u662f",(0,l.kt)("strong",{parentName:"p"},"\u552f\u4e00(id)"),"\uff0c\n\u4e0d\u5e94\u5173\u5fc3\u81ea\u5df1\u7684",(0,l.kt)("strong",{parentName:"p"},"\u4f18\u5148\u7ea7(priority)"),"\uff0c\u4e5f\u4e0d\u9700\u8981\u5173\u5fc3\u81ea\u5df1\u662f\u4e0d\u662f\u62e5\u6709\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u5f02\u6b65\u6807\u8bc6(isAsync)"),"(\u751a\u81f3\u53ef\u4ee5\u5728\u903b\u8f91\u4e2d\u81ea\u884c\u5b9e\u73b0\u5f02\u6b65\u884c\u4e3a)\u3002\n\u56e0\u6b64\uff0c\u6211\u4eec\u5f03\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"EventListener")," \u4e2d\u8fd9\u4e9b\u6ca1\u6709\u5fc5\u8981\u7684\u5c5e\u6027\uff0c\u5e76\u5c06\u8fd9\u4e9b\u5c5e\u6027\u6574\u5408\u5230\u4e86",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u518c\u65f6"),"\u624d\u9700\u8981\u63d0\u4f9b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val application = createSimpleApplication {\n}\n// \u5f97\u5230\u4e8b\u4ef6\u7ba1\u7406\u5668\nval manager = application.eventListenerManager\n// \u6784\u5efa\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\nval listener = buildSimpleListener(FriendEvent) {\n    match { /* ... */ true }\n    process { /* ... */ }\n}\n// \u5141\u8bb8\u91cd\u590d\u6ce8\u518c\nmanager.register(listener)\nmanager.register(listener)\n// \u63d0\u4f9b\u66f4\u591a'\u5c5e\u6027'\nmanager.register(listener.toRegistrationDescription {\n    priority = PriorityConstant.FIRST\n    isAsync = true\n})\nmanager.register(listener.toRegistrationDescription {\n    priority = PriorityConstant.LAST\n    isAsync = false\n})\n")),(0,l.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u7684\u7c7b\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"EventListernerRegistrationDescription")," \u6765\u627f\u8f7d\u8fd9\u4e9b ",(0,l.kt)("inlineCode",{parentName:"p"},"EventListener")," \u81ea\u8eab\u4e0d\u9700\u8981\u5173\u5fc3\u7684\u5c5e\u6027\u3002"),(0,l.kt)("admonition",{title:"465",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u8be6\u60c5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/pull/465"},"#465"))),(0,l.kt)("h3",{id:"eventresult-\u7ed3\u6784\u4f18\u5316-\u54cd\u5e94\u503c\u652f\u6301\u5904\u7406-completablefuture-\u4e0e-deferred-466"},(0,l.kt)("inlineCode",{parentName:"h3"},"EventResult")," \u7ed3\u6784\u4f18\u5316; \u54cd\u5e94\u503c\u652f\u6301\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"h3"},"CompletableFuture")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"h3"},"Deferred")," (",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/simple-robot/simpler-robot/pull/466"},"#466"),")"),(0,l.kt)("p",null,"\u4e5f\u8bb8\u4f60\u53ef\u80fd\u6709\u6ce8\u610f\u5230\u8fc7\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"EventResult.content")," \u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u652f\u6301\u5c06\u975e\u963b\u585e\u7684\u54cd\u5e94\u5f0f\u7ed3\u679c\u8fdb\u884c\u81ea\u52a8\u6536\u96c6\uff08\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"reactor")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"rxJava"),"\uff09\uff0c\u8fd9\u4e00\u7279\u6027\u4e5f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"EventResult.content")," \u7684\u6587\u6863\u8bf4\u660e\u4e0a\u6709\u6240\u4f53\u73b0\u3002"),(0,l.kt)("p",null,"\u800c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/pull/466"},"#466")," \u5728\u8fd9\u4e4b\u524d\u652f\u6301\u7684\u57fa\u7840\u4e0a\uff0c\u53c8\u589e\u52a0\u652f\u6301\u4e86\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"Deferred"),"\n\u8fd9\u4e24\u4e2a\u5f02\u6b65\u7c7b\u578b\u7684\u6536\u96c6\uff0c\u540c\u65f6\u5b8c\u5584\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"EventResult")," \u6574\u4f53\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u4f7f\u5b83\u4eec\u5404\u81ea\u7684\u804c\u8d23\u66f4\u52a0\u6e05\u6670\u3002"),(0,l.kt)("admonition",{title:"466",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u8be6\u60c5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/pull/466"},"#466"))))}d.isMDXComponent=!0}}]);