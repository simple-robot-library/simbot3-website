"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[9776],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(6010);const s="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),l=a(7294),s=a(6010),r=a(2389),i=a(7392),o=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:r,block:d,defaultValue:m,values:b,groupId:g,className:h}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const Z=null===m?m:null!=(t=null!=m?m:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==Z&&!k.some((e=>e.value===Z)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+Z+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:y}=(0,o.U)(),[N,E]=(0,l.useState)(Z),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=g){const e=w[g];null!=e&&e!==N&&k.some((t=>t.value===e))&&E(e)}const I=e=>{const t=e.currentTarget,a=j.indexOf(t),n=k[a].value;n!==N&&(T(t),E(n),null!=g&&y(g,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=j.indexOf(e.currentTarget)+1;a=null!=(n=j[t])?n:j[0];break}case"ArrowLeft":{var l;const t=j.indexOf(e.currentTarget)-1;a=null!=(l=j[t])?l:j[j.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},h)},k.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:S,onFocus:I,onClick:I},r,{className:(0,s.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),r?(0,l.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,r.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},1610:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294);const l="label_Yf5u";function s(e){let{type:t,href:a,children:s}=e;t=t||"primary";const r=n.createElement("span",{className:l},n.createElement("span",{className:"badge badge--"+t},s));return null!=a&&a.length>0?n.createElement("a",{href:a},r):r}},2701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),l=(a(7294),a(3905)),s=(a(5488),a(5162),a(814),a(1610));const r={authors:"forliy",title:"2022\u5e74\u7b2c38\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},i=void 0,o={permalink:"/blog/2022/09/23/weak-38-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022-09-23/weak-38-report.md",source:"@site/blog/2022-09-23/weak-38-report.md",title:"2022\u5e74\u7b2c38\u5468\u5468\u62a5",description:"\u5927\u6982\u662f2022\u5e74\u7b2c38\u5468\u5468\u62a5\u55b5\u3002",date:"2022-09-23T00:00:00.000Z",formattedDate:"September 23, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:2.385,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c38\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c39\u5468\u5468\u62a5",permalink:"/blog/2022/09/30/weak-39-report"},nextItem:{title:"2022\u5e74\u7b2c37\u5468\u5468\u62a5",permalink:"/blog/2022/09/16/weak-37-report"}},u={authorsImageUrls:[void 0]},c=[{value:"\ud83d\ude80 \u6838\u5fc3\u5e93\u66f4\u65b0..?",id:"-\u6838\u5fc3\u5e93\u66f4\u65b0",level:2},{value:"\u26f0 \u9ec4\u5c71",id:"-\u9ec4\u5c71",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5927\u6982\u662f2022\u5e74\u7b2c38\u5468\u5468\u62a5\u55b5\u3002"),(0,l.kt)("h2",{id:"-\u6838\u5fc3\u5e93\u66f4\u65b0"},"\ud83d\ude80 \u6838\u5fc3\u5e93\u66f4\u65b0..?"),(0,l.kt)("p",null,"\u672c\u5468 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u4f9d\u7136\u4fdd\u6301\u5728 ",(0,l.kt)(s.Z,{mdxType:"Label"},"v3.0.0-beta")," \u7248\u672c\uff0c\u6682\u65f6\u6ca1\u6709\u65b0\u7684\u53d8\u66f4\u3002"),(0,l.kt)("p",null,"\u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f\u5b9e\u9645\u4e0a\u6211\u4eec\u8fd9\u4e24\u5468\u4e00\u76f4\u5728\u5bfb\u627e\u4e00\u4e2a\u9488\u5bf9\u76ee\u524d\u5f00\u53d1\u4e2d\u75db\u70b9\u7684\u89e3\u51b3\u65b9\u6848\u3002\n\u90a3\u4e48\u662f\u4ec0\u4e48\u75db\u70b9\u5462\uff1f\u9996\u5148\u6765\u770b\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface FooEvent {\n    suspend fun user(): User\n}\n")),(0,l.kt)("p",null,"\u6211\u4eec\u5047\u8bbe\u4e0a\u8ff0\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"FooEvent")," \u662f\u4e00\u4e2a\u4e8b\u4ef6\u7c7b\u578b\uff0c\u8fd9\u4e2a\u4e8b\u4ef6\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"user()")," \u5f97\u5230\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," \u5bf9\u8c61\u3002\n\u800c\u95ee\u9898\u662f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"user()")," \u51fd\u6570\u662f\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"suspend")," \u51fd\u6570\uff0c\u5373\u6302\u8d77\u51fd\u6570\uff0c\u56e0\u6b64\u5b83\u5e76\u4e0d\u80fd\u76f4\u63a5\u88abJava\u5e73\u53f0\u7684\u7528\u6237\u6216JS\u5e73\u53f0\u7684\u7528\u6237\u4f7f\u7528\uff0c\n\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5bf9\u5916\u518d\u63d0\u4f9b\u4e00\u5957\u989d\u5916\u7684API\uff0c\u4f7f\u5176\u53d8\u4e3a\u5982\u4e0b\u5f62\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface FooEvent {\n    @JvmSynthtic\n    suspend fun user(): User\n    \n    // on Java platform\n    \n    @Api4J\n    fun userBlocking(): User = runInBlocking { user() }\n    @Api4J\n    fun userAsync(): CompletableFuture<out User> = runInAsync { user() }\n    \n    // or on JS platform\n    \n    @Api4JS\n    fun userAsync(): Promise<out User> = runInAsync { user() }\n}\n")),(0,l.kt)("p",null,"\u4f46\u662f\u5982\u679c\u6240\u6709\u7684\u53ef\u6302\u8d77\u51fd\u6570\u90fd\u9700\u8981\u5982\u6b64\u989d\u5916\u63d0\u4f9b\u5e73\u53f0\u517c\u5bb9\u6027\u7684API\uff0c\u8fd9\u4f1a\u4f7f\u5f97\u6211\u4eec\u5f00\u53d1\u4e2d\u7684\u91cd\u590d\u5de5\u4f5c\u91cf\u5927\u5927\u63d0\u9ad8\uff0c\u4e25\u91cd\u5f71\u54cd\u6574\u4f53\u7684\u5f00\u53d1\u6548\u7387\u3002\n\u90a3\u4e48\u600e\u4e48\u529e\u5462\uff1f\u78b0\u5de7\u7684\u662f\uff0c\u6211\u4eec\u7684\u67d0\u4f4d\u6210\u5458\u5728GitHub\u4e0a\u4e0d\u7ecf\u610f\u95f4\u53d1\u73b0\u4e86\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ForteScarlet/kotlin-suspend-transform-compiler-plugin"},"Kotlin\u7f16\u8bd1\u5668\u63d2\u4ef6"),"\uff0c\n\u5b83\u53ef\u4ee5\u6ee1\u8db3\u6211\u4eec\u5f53\u4e0b\u7684\u9700\u6c42\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u76ee\u524d\u6b63\u5728\u5c1d\u8bd5\u4e0e\u6b64\u7f16\u8bd1\u5668\u63d2\u4ef6\u8fdb\u884c\u6574\u5408\uff0c\u5982\u679c\u80fd\u591f\u8fbe\u6210\u89e3\u51b3\u95ee\u9898\u7684\u76ee\u7684\uff0c\u4fbf\u4f1a\u6b63\u5f0f\u6295\u5165\u4f7f\u7528\u5e76\u53d1\u5e03\u4e0b\u4e00\u4e2a\u7248\u672c\u6765\u89c2\u5bdf\u5176\u5177\u4f53\u8868\u73b0\u6548\u679c\u3002"),(0,l.kt)("h2",{id:"-\u9ec4\u5c71"},"\u26f0 \u9ec4\u5c71"),(0,l.kt)("p",null,"\u8fd9\u5468\uff0c\u6211\u4eec\u7684\u56e2\u961f\u6210\u5458\u4e00\u540c\u524d\u5f80\u4e86\u9ec4\u5c71\uff0c\u611f\u53d7\u4e86\u4e00\u4e0b\u9ec4\u5c71\u7684\u7edd\u7f8e\u5c71\u666f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(3980).Z,width:"3468",height:"4624"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(3317).Z,width:"3468",height:"4624"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(6084).Z,width:"4624",height:"3468"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(3233).Z,width:"3264",height:"2448"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(8063).Z,width:"3468",height:"4624"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(7649).Z,width:"3264",height:"2448"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(6424).Z,width:"4624",height:"3468"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(7071).Z,width:"3264",height:"2448"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(649).Z,width:"3264",height:"2448"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(9946).Z,width:"4624",height:"3468"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(8777).Z,width:"4624",height:"3468"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(4617).Z,width:"4384",height:"2352"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(8369).Z,width:"10080",height:"2384"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(6669).Z,width:"3468",height:"4624"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(145).Z,width:"3468",height:"4624"})))}d.isMDXComponent=!0},3980:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1-e4bbfa9cb0f804981dc043880d2e6110.jpg"},9946:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/10-02bd5b5d73fa6d5b1cd84d5357dcd30a.jpg"},8777:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/11-8eb9e0ab7d6172b28c23e25cfbab0818.jpg"},4617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-7eed371c815b7c3d29449c97ea2a527c.jpg"},8369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/13-d0f0aeb6126b3dd36b2f724ef9540a48.jpg"},6669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/14-092d9510deb753c4c40ef45c46bfe616.jpg"},145:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/15-defcef036fcdc0b630d2e7f8f79612a8.jpg"},3317:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2-c9e8cf174d524b7d7c4a8e7532f99611.jpg"},6084:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/3-caf84a263d7f0672fba7f738af82f122.jpg"},3233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4-3bf79fb95a14b105d8c0b3f1d688d193.jpg"},8063:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/5-79398aba59d6511319d8ef41bdbd27cf.jpg"},7649:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/6-107fed793abff2b8195337ca3ab75bad.jpg"},6424:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/7-960d1df51b8a563dbf4f5109ae4d5aea.jpg"},7071:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/8-5436391b25c600ac4b2fa3e317f41207.jpg"},649:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/9-2f9ca7e117efbf04665f4d7a92ce98f0.jpg"}}]);