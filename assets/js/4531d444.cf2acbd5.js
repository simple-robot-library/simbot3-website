"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[5758],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),i=n(2389),o=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:d,groupId:k,className:b}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,o.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:C}=(0,s.U)(),[w,y]=(0,l.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:L}=(0,p.o5)();if(null!=k){const e=N[k];null!=e&&e!==w&&h.some((t=>t.value===e))&&y(e)}const M=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==w&&(L(t),y(a),null!=k&&C(k,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":M(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},b)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:M},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,l.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},6189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),i=n(5162);n(814);const o={authors:"forliy",title:"2022\u5e74\u7b2c11\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},s=void 0,p={permalink:"/blog/2022/03/18/weak-11-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022-03-18-weak-11-report.md",source:"@site/blog/2022-03-18-weak-11-report.md",title:"2022\u5e74\u7b2c11\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c11\u5468\u5468\u62a5\u55b5\u3002",date:"2022-03-18T00:00:00.000Z",formattedDate:"March 18, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:7.355,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c11\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c12\u5468\u5468\u62a5",permalink:"/blog/2022/03/26/weak-12-report"}},u={authorsImageUrls:[void 0]},m=[{value:"\u2728 Simple Robot \u7248\u672c\u53d1\u5e03",id:"version-release",level:2},{value:"\u7ec4\u4ef6\u673a\u5236\u66f4\u65b0",id:"\u7ec4\u4ef6\u673a\u5236\u66f4\u65b0",level:3},{value:"\u76d1\u542c\u51fd\u6570\u6ce8\u518c\u673a\u5236\u66f4\u65b0",id:"\u76d1\u542c\u51fd\u6570\u6ce8\u518c\u673a\u5236\u66f4\u65b0",level:3},{value:"\u7ec4\u4ef6\u66f4\u65b0",id:"\u7ec4\u4ef6\u66f4\u65b0",level:3},{value:"\u2699\ufe0f \u5f00\u9ed1\u5566\u7ec4\u4ef6",id:"kaiheila-component",level:2},{value:"\ud83c\udfe0 \u65b0\u7684\u9996\u9875\u5efa\u8bbe",id:"homepage-built",level:2},{value:"\ud83d\udc40 \u5165\u7fa4\u5ba1\u6838",id:"group-review",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"2022\u5e74\u7b2c11\u5468\u5468\u62a5\u55b5\u3002"),(0,l.kt)("h2",{id:"version-release"},"\u2728 Simple Robot \u7248\u672c\u53d1\u5e03"),(0,l.kt)("p",null,"\u5728\u7b2c11\u5468\uff0c\u6211\u4eec\u53d1\u5e03\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"Simple Robot"),"\n\u7684\u9884\u89c8\u7248\u672c\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.5.0"},"v3.0.0.preview.5.0")," \u3002\n\u5176\u4e2d\u6bd4\u8f83\u91cd\u8981\u7684\u51e0\u4e2a\u66f4\u65b0\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("h3",{id:"\u7ec4\u4ef6\u673a\u5236\u66f4\u65b0"},"\u7ec4\u4ef6\u673a\u5236\u66f4\u65b0"),(0,l.kt)("p",null,"\u5728\u57fa\u7840\u7684core\u6a21\u5757\u4e0b\uff0c\u7ec4\u4ef6\u5c06\u4e0d\u518d\u662f\u201c\u81ea\u52a8\u52a0\u8f7d\u201d\u7684\u5185\u5bb9\uff0c\u800c\u662f\u9700\u8981\u4f60\u5728\u6784\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"coreListenerManager")," \u7684\u65f6\u5019\u4e3b\u52a8\u52a0\u5165\u7684\u3002"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val manager = coreListenerManager {\n    install(TestComponent)\n    // \u6216\u8005\u5c1d\u8bd5\u81ea\u52a8\u52a0\u8f7d\n    installAll() // \u5b9e\u9a8c\u6027\u7684\uff0c\u5c1d\u8bd5\u52a0\u8f7d\u5f53\u524d\u73af\u5883\u4e2d\u7684\u6240\u6709(\u652f\u6301\u88ab\u81ea\u52a8\u52a0\u8f7d\u7684)\u7ec4\u4ef6\n}\n"))),(0,l.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// \u914d\u7f6e\u7c7b\nfinal CoreListenerManagerConfiguration configuration = new CoreListenerManagerConfiguration();\n// \u6ce8\u518c\u4e00\u4e2a\u7ec4\u4ef6\u3002\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u7ec4\u4ef6\u7684\u6ce8\u518c\u5668\u4e3a\u7ec4\u4ef6\u7684\u4f34\u751f\u5bf9\u8c61\uff0c\u56e0\u6b64Java\u4e2d\u53ef\u4ee5\u4f7f\u7528 `XxxComponent.Registrar`(\u6216\u8005`XxxComponent.Companion`\u7b49)\nconfiguration.install(TestComponent.Registrar);\n// \u6216\u8005\u5c1d\u8bd5\u81ea\u52a8\u52a0\u8f7d\n// \u8fd9\u662f\u5b9e\u9a8c\u6027\u7684\u3002\u5c1d\u8bd5\u52a0\u8f7d\u5f53\u524d\u73af\u5883\u4e2d\u7684\u6240\u6709(\u652f\u6301\u88ab\u81ea\u52a8\u52a0\u8f7d\u7684)\u7ec4\u4ef6\nconfiguration.installAll(); \nCoreListenerManager.newInstance(configuration);\n")))),(0,l.kt)("h3",{id:"\u76d1\u542c\u51fd\u6570\u6ce8\u518c\u673a\u5236\u66f4\u65b0"},"\u76d1\u542c\u51fd\u6570\u6ce8\u518c\u673a\u5236\u66f4\u65b0"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u5728\u57fa\u7840\u7684core\u6a21\u5757\u4e0b\uff0c\u66f4\u63a8\u8350\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"coreListenerManager")," \u914d\u7f6e\u8303\u56f4\u5185\u5b8c\u6210\u5bf9\u76d1\u542c\u51fd\u6570\u7684\u5168\u90e8\u6ce8\u518c\u3002\n\u540e\u671f\u52a8\u6001\u6ce8\u518c\u76d1\u542c\u51fd\u6570\u7684api\u4f1a\u6682\u65f6\u4fdd\u7559\uff0c\u4f46\u662f\u4e0d\u4fdd\u8bc1\u65e5\u540e\u662f\u5426\u4f1a\u8fc7\u65f6\u5e76\u5220\u9664\u3002"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"coreListenerManager {\n    // \u914d\u7f6e\u76d1\u542c\u51fd\u6570\u76f8\u5173\u5185\u5bb9\n    listeners {\n        // \u53ef\u4ee5\u76f4\u63a5\u6ce8\u518c\u4e00\u4e2a EventListener \u5b9e\u4f8b\n        listener(coreListener { ... })\n        // \u901a\u8fc7DSL\u914d\u7f6e\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\n        listener(FriendMessageEvent) {\n            // \u53ef\u4ee5\u63d0\u4f9b\u90e8\u5206\u8fc7\u6ee4\u5668\u903b\u8f91\n            filter { true }\n            filters {\n                filter { true }\n                filter { true }\n                filter { true }\n            }\n            // \u76d1\u542c\u51fd\u6570\u7684\u5904\u7406\u903b\u8f91\n            handle { context, event ->\n                // do...\n                null\n            }\n        }\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// \u6784\u5efa\u914d\u7f6e\u7c7b\nfinal CoreListenerManagerConfiguration configuration = new CoreListenerManagerConfiguration();\n        \n// \u6784\u5efa\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\u5b9e\u4f8b\u3002\nEventListener listener1 = CoreListenerUtil.newCoreListener(FriendMessageEvent.Key, (context, event) -> {\n    // do..\n    return null;\n});\n\n// \u6dfb\u52a0\u76d1\u542c\u51fd\u6570\n// Java\u4e2d\uff0c\u4f7f\u7528 `addListener` \u662f\u76f8\u5bf9\u6bd4\u8f83\u7b80\u4fbf\u7684\u65b9\u5f0f\u3002\nconfiguration.addListener(listener1);\n\n// \u6784\u5efa manager\nCoreListenerManager manager = CoreListenerManager.newInstance(configuration);\n\n")))),(0,l.kt)("h3",{id:"\u7ec4\u4ef6\u66f4\u65b0"},"\u7ec4\u4ef6\u66f4\u65b0"),(0,l.kt)("p",null,"\u51e0\u4e2a\u7ec4\u4ef6\u4f1a\u968f\u4e4b\u66f4\u65b0\u3002\u8be6\u60c5\u8bf7\u524d\u5f80 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.5.0"},"v3.0.0.preview.5.0 release")," \u67e5\u770b\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"kaiheila-component"},"\u2699\ufe0f \u5f00\u9ed1\u5566\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u7b2c11\u5468\u968f\u7740\u4e0a\u8ff0\u7684\u9884\u89c8\u7248\u672c ",(0,l.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.5.0")," \u66f4\u65b0\uff0c\u540c\u65f6\u53d1\u5e03\u4e86\u4e00\u4e2a\u65e9\u671f\u9636\u6bb5\u7684\u65b0\u7ec4\u4ef6\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-component-kaiheila"},"\u5f00\u9ed1\u5566\u7ec4\u4ef6")," \u3002\n\u73b0\u5728\u4f60\u5df2\u7ecf\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot"},"Simple Robot Repositories")," \u9996\u9875\u4e2d\u770b\u5230\u5b83\u7684\u4ecb\u7ecd\u548c\u94fe\u63a5\u5f15\u5bfc\u4e86\u3002"),(0,l.kt)("p",null,"\u5f00\u9ed1\u5566\u7ec4\u4ef6\u7684\u76ee\u524d\u7248\u672c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-component-kaiheila/releases/tag/v3.0.0.preview.5.0-0.0.2"},"v3.0.0.preview.5.0-0.0.2"),"\n\u63d0\u4f9b\u7684\u5185\u5bb9\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"api\u548cstdlib\uff08\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/simple-robot/simbot-component-tencent-guild"},"\u817e\u8baf\u9891\u9053\u7ec4\u4ef6")," \u7684\u7c7b\u4f3c\u6982\u5ff5\uff0c\u5373\u57fa\u7840API\u7684\u5bf9\u63a5\u5b9a\u4e49 \uff09\u7684\u57fa\u672c\u5b8c\u6574\u7684\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u63a5simbot\u7684core\u6a21\u5757\u4e0b\uff0c\u9488\u5bf9\u5927\u90e8\u5206\u5bf9\u8c61\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"Objective"),"\uff09\u7684\u5b9e\u73b0\uff08\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"Guild")," \u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Channel"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Member")," \u7b49\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u63a5simbot\u7684core\u6a21\u5757\u4e0b\uff0c\u9488\u5bf9 ",(0,l.kt)("strong",{parentName:"li"},"\u6d88\u606f\u4e8b\u4ef6")," \u7684\u76d1\u542c\u5b9e\u73b0\uff0c\u9488\u5bf9\u6d88\u606f\u53d1\u9001\u7684\u5b9e\u73b0\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0simbot-boot\u652f\u6301\u3002")),(0,l.kt)("p",null,"\u7531\u6b64\u53ef\u89c1\uff0c\u4e0a\u8ff0\u5185\u5bb9\u4e2d\uff0c\u5f00\u9ed1\u5566\u7ec4\u4ef6\u76ee\u524d\u5927\u90e8\u5206\u5185\u5bb9\u5df2\u5efa\u8bbe\u5b8c\u6210\uff0c\u5176\u4e2d\u5bf9simbot\u6807\u51c6\u4e8b\u4ef6\u7684\u5b9e\u73b0\u4ecd\u5728\u7ee7\u7eed\u3002"),(0,l.kt)("p",null,"\u5f00\u9ed1\u5566\u7ec4\u4ef6\u4e0e\u817e\u8baf\u9891\u9053\u7ec4\u4ef6\u5341\u5206\u7c7b\u4f3c\uff0c\u4f46\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u5f00\u9ed1\u5566\u7ec4\u4ef6\u76f8\u5bf9\u4e8e\u817e\u8baf\u9891\u9053\u7ec4\u4ef6\uff0c\u5b83\u4f7f\u7528\u4e86\u53e6\u5916\u4e00\u79cd ",(0,l.kt)("inlineCode",{parentName:"p"},"Objective")," \u7684\u64cd\u4f5c\u5f62\u5f0f\u3002\n\u5728\u817e\u8baf\u9891\u9053\u4e2d\uff0c\u6240\u6709\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Objective"),"\uff08\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"Guild")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Channel"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Member")," \u7b49\uff09\u90fd\u662f\u901a\u8fc7\u4e0e\u4e4b\u76f8\u5bf9\u5e94\u7684\u6302\u8d77api\u76f4\u63a5\u8c03\u7528\u76f8\u5bf9\u5e94\u7684http\u63a5\u53e3\u6765\u83b7\u53d6\u7684\uff0c\n\u867d\u7136\u5bf9\u4e8e\u540c\u4e00\u4e2a\u5bf9\u8c61\u6765\u8bb2\u53ea\u4f1a\u521d\u59cb\u5316\u4e00\u6b21\uff0c\u4f46\u662f\u5728\u9891\u7e41\u4f7f\u7528\u7684\u60c5\u51b5\u4e0b\u4ecd\u7136\u53ef\u80fd\u51fa\u73b0\u5927\u91cf\u8c03\u7528http api\u7684\u60c5\u51b5\uff0c\u5bf9\u7f51\u7edc\u8981\u6c42\u4f1a\u76f8\u5bf9\u8f83\u9ad8\u3002"),(0,l.kt)("p",null,"\u800c\u5bf9\u4e8e\u5f00\u9ed1\u5566\uff0c\u9996\u5148\u7531\u4e8e\u5176api\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.kaiheila.cn/doc/rate-limit"},"\u901f\u7387\u9650\u5236")," \u673a\u5236\uff0c\u672c\u8eab\u5c31\u4e0d\u5efa\u8bae\u9891\u7e41\u8c03\u7528api\u3002\u56e0\u6b64\u5f00\u9ed1\u5566\u7ec4\u4ef6\n\u4f1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Bot")," \u542f\u52a8\u65f6\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"Bot.start()")," \u65f6 \uff09\u53bb\u4f18\u5148\u521d\u59cb\u5316\u6240\u6709\u7684\u76f8\u5173 ",(0,l.kt)("inlineCode",{parentName:"p"},"Objective")," \u8d44\u6e90\u5e76\u7f13\u5b58\uff0c\u5e76\u5728\u540e\u7eed\u6839\u636e\u6240\u63a5\u6536\u5230\u7684\u4e8b\u4ef6\u8fdb\u884c\u76f8\u5bf9\u5e94\u7684\u7f13\u5b58\u8c03\u6574\n\uff08\u4f8b\u5982\u5f53\u6536\u5230\u7fa4\u6210\u5458\u79bb\u5f00\u9891\u9053\u7684\u4e8b\u4ef6\uff0c\u5219\u79fb\u9664\u7f13\u5b58\u5185\u90e8\u7684\u5bf9\u5e94\u5bf9\u8c61\uff09\u3002\n\u4e0d\u8bba\u4f60\u5bf9\u8fd9\u79cd\u6a21\u5f0f\u662f\u5426\u6709\u4e00\u79cd\u719f\u6089\u7684\u611f\u89c9\uff0c\u5b83\u7684\u786e\u53ef\u4ee5\u5927\u5927\u51cf\u7f13\u5bf9http api\u7684\u8c03\u7528\u901f\u7387\u3002\n\u76ee\u524d\u6240\u9762\u4e34\u7684\u60c5\u51b5\u4fbf\u662f\u5bf9\u8fd9\u79cd\u7f13\u5b58\u673a\u5236\u7684\u7a33\u5b9a\u6027\u6d4b\u8bd5\uff0c\u6bd5\u7adf\u5982\u679c\u5904\u7406\u4e0d\u5f53\u5219\u53ef\u80fd\u51fa\u73b0\u7f13\u5b58\u66f4\u65b0\u4e0d\u53ca\u65f6\u6216\u8005\u51fa\u73b0\u7f13\u5b58\u4e0d\u4e00\u81f4\u7684\u60c5\u51b5\u3002\u5f53\u5f00\u9ed1\u5566\u7684\u7f13\u5b58\u673a\u5236\u8db3\u591f\u7a33\u5b9a\u540e\uff0c\n\u817e\u8baf\u9891\u9053\u7ec4\u4ef6\u4e5f\u4f1a\u5f00\u59cb\u8003\u8651\u66f4\u65b0\u4e3a\u6b64\u7c7b\u578b\u673a\u5236\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u7f13\u5b58\u7684\u673a\u5236\u7ec6\u8282\u6ca1\u6709\u4ec0\u4e48\u8fc7\u591a\u9610\u8ff0\u7684\u5fc5\u8981\uff0c\u53ea\u662f\u7b80\u5355\u7684\u6839\u636e\u4e8b\u4ef6\u7c7b\u578b\u8fdb\u884c\u57fa\u7840\u7684\u589e\u5220\u6539\u67e5\uff0c\u5e76\u5c3d\u53ef\u80fd\u4fdd\u8bc1\u5176\u64cd\u4f5c\u7684\u7ebf\u7a0b\u5b89\u5168\u6027\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"homepage-built"},"\ud83c\udfe0 \u65b0\u7684\u9996\u9875\u5efa\u8bbe"),(0,l.kt)("p",null,"\u5982\u4f60\u6240\u89c1\u3002\u5f53\u4f60\u80fd\u770b\u5230\u8fd9\u5219\u5468\u62a5\uff0c\u90a3\u4e48\u4f60\u4fbf\u770b\u5230\u4e86\u88ab\u5efa\u8bbe\u7684\u9996\u9875\u3002\u672a\u6765\u76f8\u5173\u6587\u6863\u5c06\u4f1a\u4e8e\u6b64\u5904\u66f4\u65b0\u3002\u6709\u5173\u6587\u6863\u6784\u5efa\u5de5\u5177\u3001\u7248\u6743\u4fe1\u606f\u3001\u76f8\u5173\u94fe\u63a5\u6307\u5f15\u7b49\u5185\u5bb9\uff0c\u4f60\u53ef\u4ee5\u5728\n\u7f51\u9875\u7684\u811a\u6ce8\u5904\u770b\u5230\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"group-review"},"\ud83d\udc40 \u5165\u7fa4\u5ba1\u6838"),(0,l.kt)("p",null,"\u4e00\u6bb5\u65f6\u95f4\u4e4b\u524d\uff0c\u6211\u66fe\u8bf4\u8fc7\u8981\u501f\u7fa4\u53cb\u4e4b\u529b\u4e3a\u5165\u7fa4\u7533\u8bf7\u5efa\u8bbe\u4e00\u4e2a\u7b54\u9898\u5ba1\u6838\u529f\u80fd\uff0c\u53c2\u4e0e\u7684\u7fa4\u53cb\u5df2\u7ecf\u5c06\u5176\u6784\u5efa\u7684\u5dee\u4e0d\u591a\u4e86\uff0c\u8fd9\u91cc\u975e\u5e38\u611f\u8c22\u4ed6\u4eec\u7684\u8d21\u732e\u4e0e\u534f\u52a9\uff01",(0,l.kt)("small",null,(0,l.kt)("i",null,"\u7b49\u6b63\u5f0f\u53d1\u5e03\u540e\u6211\u4f1a\u5217\u4e3e\u53c2\u4e0e\u6210\u5458\u4fe1\u606f\u5e76\u5411\u4ed6\u4eec\u8868\u793a\u611f\u8c22\u3002"))),(0,l.kt)("p",null,"\u4f46\u662f\u76ee\u524d\u6709\u51e0\u5927\u56e0\u7d20\u963b\u788d\u5b83\u7684\u90e8\u7f72\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7ad9\u8d44\u6e90\u6709\u9650\uff0c\u73b0\u5728\u9700\u8981\u7b49\u5f85\u8d44\u91d1\u7528\u4e8e\u5347\u7ea7\u670d\u52a1\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u9879\u76ee\u9700\u8981\u914d\u5408\u6cd5\u6b27\u8389\u8fdb\u884c\u4e00\u5b9a\u7a0b\u5ea6\u7684\u6539\u9020"),(0,l.kt)("li",{parentName:"ul"},"4\u6708\u6709\u4e13\u5347\u672c\u8003\u8bd5"),(0,l.kt)("li",{parentName:"ul"},"\u67d0\u4eba\u622a\u6b62\u5230\u73b0\u5728\u8fd8\u6ca1\u590d\u4e60\u6240\u4ee5\u5341\u5206\u7126\u8651")),(0,l.kt)("p",null,"\u56e0\u6b64\u5bf9\u4e8e\u6b64\u529f\u80fd\u7684\u4e0a\u7ebf\uff0c\u53ef\u80fd\u9700\u8981\u9759\u5019\u4e00\u6bb5\u65f6\u95f4\u3002"))}d.isMDXComponent=!0}}]);