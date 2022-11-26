"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3564],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),l=a(7294),r=a(6010),i=a(2389),o=a(7392),s=a(7094),p=a(2466);const m="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:a,block:i,defaultValue:c,values:d,groupId:b,className:k}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,o.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[y,I]=(0,l.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=b){const e=N[b];null!=e&&e!==y&&h.some((t=>t.value===e))&&I(e)}const S=e=>{const t=e.currentTarget,a=C.indexOf(t),n=h[a].value;n!==y&&(T(t),I(n),null!=b&&w(b,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;a=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=C[t]??C[C.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>C.push(e),onKeyDown:E,onClick:S},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,l.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,i.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},2913:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(7462),l=(a(7294),a(3905)),r=a(5488),i=a(5162);a(814);const o={authors:"forliy",title:"2022\u5e74\u7b2c22\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},s=void 0,p={permalink:"/blog/2022/06/02/week-22-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022-06-02-week-22-report/index.md",source:"@site/blog/2022-06-02-week-22-report/index.md",title:"2022\u5e74\u7b2c22\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c22\u5468\u5468\u62a5\u55b5\u3002",date:"2022-06-02T00:00:00.000Z",formattedDate:"June 2, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:3.36,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c22\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c23\u5468\u5468\u62a5",permalink:"/blog/2022/06/10/week-23-report"},nextItem:{title:"2022\u5e74\u7b2c21\u5468\u5468\u62a5",permalink:"/blog/2022/05/26/week-21-report"}},m={authorsImageUrls:[void 0]},u=[{value:"\ud83d\udc32 \u7aef\u5348\u8282",id:"-\u7aef\u5348\u8282",level:2},{value:"\ud83d\ude80 \u7248\u672c\u66f4\u65b0",id:"-\u7248\u672c\u66f4\u65b0",level:2},{value:"\ud83c\udfb8 Items API",id:"-items-api",level:2},{value:"\ud83d\udcd6 \u6587\u6863\u66f4\u65b0",id:"-\u6587\u6863\u66f4\u65b0",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"2022\u5e74\u7b2c22\u5468\u5468\u62a5\u55b5\u3002"),(0,l.kt)("h2",{id:"-\u7aef\u5348\u8282"},"\ud83d\udc32 \u7aef\u5348\u8282"),(0,l.kt)("p",null,"\u4e34\u8fd1\u7aef\u5348\u8282\uff0c\u795d\u613f\u5404\u4f4d\u670b\u53cb\u4eab\u53d7\u5047\u671f\uff0c\u591a\u5403\u7cbd\u5b50\uff0c\u653e\u677e\u8eab\u5fc3\uff0c\u4e0d\u8981\u52a0\u73ed\uff5e"),(0,l.kt)("h2",{id:"-\u7248\u672c\u66f4\u65b0"},"\ud83d\ude80 \u7248\u672c\u66f4\u65b0"),(0,l.kt)("p",null,"\u5728\u672c\u5468\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u53d1\u5e03\u4e86\u51e0\u4e2a\u7248\u672c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.12.0"},(0,l.kt)("strong",{parentName:"a"},"v3.0.0.preview.12.0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.11.1"},"v3.0.0.preview.11.1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.11.0"},"v3.0.0.preview.11.0"),"\uff08\u4e0a\u5468\u672b\u53d1\u5e03\uff09")),(0,l.kt)("p",null,"\u5728\u8fd9\u5176\u4e2d\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.12.0"},(0,l.kt)("strong",{parentName:"a"},"v3.0.0.preview.12.0")),"\n\u662f\u672c\u5468\u5185\u53d1\u5e03\u7684\u4e3b\u8981\u91cd\u6784\u7248\u672c\u3002\u5728\u8fd9\u4e2a\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u4e3b\u8981\u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Items")," \u7c7b\u578b\u6765\u5c1d\u8bd5\u6539\u5584\u539f\u672c\u8fc7\u4e8e\u7e41\u6742\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Sequance"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Stream"),"\u6df7\u642d\u7684\u60c5\u51b5\u3002\n\u7531\u4e8e\u662f\u7528\u6765\u6539\u5584\u7c7b\u578b\u4f53\u9a8c\u7684\uff0c\u56e0\u6b64\u4f1a\u53d8\u66f4\u5404\u76f8\u5173\u7c7b\u578b\u7684\u8fd4\u56de\u503c\uff08\u5927\u6982\u6d89\u53ca\u7c7b\u578b\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"Bot")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Member"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Guild"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Channel"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Group"),"\uff09\uff0c\u5728\u5347\u7ea7\u7684\u65f6\u5019\u53ef\u80fd\u9700\u8981\u5bf9\u4ee3\u7801\u8fdb\u884c\u4e00\u5b9a\u7684\u8c03\u6574\u3002"),(0,l.kt)("h2",{id:"-items-api"},"\ud83c\udfb8 Items API"),(0,l.kt)("p",null,"\u5982\u4e0a\u6587\u6240\u5c5e\uff0c\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.12.0"},(0,l.kt)("strong",{parentName:"a"},"v3.0.0.preview.12.0")),"\n\u7248\u672c\u4e2d\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Items")," \u7c7b\u578b\u6765\u66ff\u4ee3\u539f\u672c\u4e0d\u591f\u7edf\u4e00\u7684\u6d41\u5f0f\u7c7b\u578b\u3002\u6211\u4eec\u5e0c\u671b\u5b83\u80fd\u591f\u6709\u6548\u7684\u6539\u5584\u666e\u901a\u5f00\u53d1\u8005\u5bf9\u9650\u6d41\u64cd\u4f5c\u7684\u4f7f\u7528\u624b\u611f\uff0c\n\u4e5f\u5e0c\u671b\u5b83\u80fd\u591f\u6709\u6548\u7684\u6539\u5584\u7ec4\u4ef6\u5f00\u53d1\u8005\u7684\u4f53\u9a8c\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Items")," API\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u793a\u4f8b\uff1a"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Foo(val name: String)\n\n// \nsuspend fun foo(items: Items<Foo>) {\n    // \u6700\u57fa\u7840\u7684\u64cd\u4f5c\uff1a\u6536\u96c6\u5143\u7d20.\n    items.collect { println(it) } // suspend\n    // \u6216\u8005\u8bd5\u8bd5 toList()\n}\n\n// \nsuspend fun bar(items: Items<Foo>) {\n    // \u4e09\u4e2a\u9884\u5904\u7406\u51fd\u6570: limit, offset, batch.\n    // \u6709\u5173\u9884\u5904\u7406\u51fd\u6570\u7684\u63cf\u8ff0\u8bf7\u53c2\u89c1\u6e90\u7801\u6ce8\u91ca\u6216\u6587\u6863\n    items.limit(10).offset(10).batch(100)\n        .asFlow() // \u6216\u8005\u8bd5\u8bd5 asSequence()\n        // do ..?\n        .collect { println(it) }\n}\n"))),(0,l.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"class Bar {\n    String name;\n}\n\npublic class Test {\n\n    public void foo(Items<Bar> items) {\n        // \u6536\u96c6\u5143\u7d20\n        // \u53c2\u6570\u7c7b\u578b\u95ee\u9898\u4f1a\u5728\u540e\u7eed\u7248\u672c\u4f18\u5316\n        items.collect((Consumer<? super Bar>) bar -> {\n            System.out.println(bar);\n        });\n\n        // \u6216\u8005\u8bd5\u8bd5 items.collectToList()\n    }\n\n    public void bar(Items<Bar> items) {\n        items.limit(10).offset(10).batch(100)\n                .asStream()\n                // do ..?\n                .forEach(bar -> System.out.println(bar));\n    }\n}\n")))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.13.0")," \u4e2d\u4f1a\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"Items")," API\u8fdb\u884c\u8c03\u6574\u66f4\u65b0\u3002")),(0,l.kt)("admonition",{title:"\u53cd\u9988!",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u8001\u5b9e\u8bf4\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.12.0")," \u7248\u672c\u53d1\u5e03\u7684\u7684\u786e\u5f88\u662f\u4ed3\u4fc3\uff0c\u56e0\u6b64 ",(0,l.kt)("inlineCode",{parentName:"p"},"Items")," API \u5b9e\u9645\u4e0a\u6ca1\u6709\u8fdb\u884c\u5f88\u7ec6\u81f4\u7684\u6253\u78e8\uff0c\u5c31\u9b3c\u4f7f\u795e\u5dee\u7684\u88ab\u53d1\u5e03\u4e86\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u56e0\u6b64 ",(0,l.kt)("inlineCode",{parentName:"p"},"Items")," API \u53d1\u5e03\u540e\uff0c\u5b83\u5f88\u6709\u53ef\u80fd\u5b58\u5728\u5404\u79cd\u5404\u6837\u7684\u9690\u60a3\uff0c\u5982\u679c\u53ef\u4ee5\u8fd8\u8bf7\u4ed4\u7ec6\u4f53\u9a8c\uff0c\u5e76\u79ef\u6781\u53cd\u9988\u95ee\u9898\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/issues"},(0,l.kt)("strong",{parentName:"a"},"issue")),"\uff0c\n\u611f\u8c22\u4f60\u7684\u534f\u52a9\uff01")),(0,l.kt)("h2",{id:"-\u6587\u6863\u66f4\u65b0"},"\ud83d\udcd6 \u6587\u6863\u66f4\u65b0"),(0,l.kt)("p",null,"\u6700\u8fd1\u6587\u6863\u66f4\u65b0\u7684\u5de5\u4f5c\u6709\u5728\u7f13\u6162\u8fdb\u884c\u3002\u53bb\u770b\u770b ",(0,l.kt)("a",{parentName:"p",href:"/docs/defition/"},"\u300a\u6807\u51c6\u5b9a\u4e49\u300b")," \u4e0b\u7684\u5185\u5bb9\u5427\uff5e \u4e5f\u8bb8\u4f1a\u53d1\u73b0\u4e9b\u4ec0\u4e48\u53d8\u5316\u5462\u3002\n\u5f53\u7136\u4e86\uff0c\u6587\u6863\u5185\u5bb9\u4ecd\u7136\u5341\u5206\u532e\u4e4f\u3002\u4f46\u662f\u8fd9\u4e5f\u4e0d\u662f\u80fd\u591f\u77ac\u95f4\u5b8c\u6210\u7684\u4e8b\u60c5\uff0c\u5728\u5199\u4e4b\u524d\uff0c\u6211\u4eec\u4e5f\u6ca1\u60f3\u5230\u8981\u5199\u7684\u4e1c\u897f\u6709\u90a3\u4e48\u591a... \u603b\u4e4b\uff0c\n\u5de5\u4f5c\u6b63\u5728\u8fdb\u884c\u5c31\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u6d88\u606f\uff0c\u4e0d\u662f\u5417\uff1f"))}d.isMDXComponent=!0}}]);