"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[7450],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),l=a(7294),o=a(6010),r=a(2389),i=a(7392),p=a(7094),s=a(2466);const m="tabList__CuJ",u="tabItem_LNqP";function b(e){var t;const{lazy:a,block:r,defaultValue:b,values:c,groupId:d,className:k}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,i.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===b?b:b??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,p.U)(),[C,w]=(0,l.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=d){const e=N[d];null!=e&&e!==C&&v.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=E.indexOf(t),n=v[a].value;n!==C&&(T(t),w(n),null!=d&&y(d,String(n)))},Z=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},k)},v.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>E.push(e),onKeyDown:Z,onClick:x},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":C===t})}),a??t)}))),a?(0,l.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function c(e){const t=(0,r.Z)();return l.createElement(b,(0,n.Z)({key:String(t)},e))}},1610:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294);const l="label_Yf5u";function o(e){let{type:t,href:a,children:o}=e;t=t||"primary";const r=n.createElement("span",{className:l},n.createElement("span",{className:`badge badge--${t}`},o));return null!=a&&a.length>0?n.createElement("a",{href:a},r):r}},5425:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));a(5488),a(5162),a(814),a(1610);const o={authors:"forliy",title:"2022\u5e74\u7b2c32\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},r=void 0,i={permalink:"/blog/2022/08/12/weak-32-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022-08-12/weak-32-report.md",source:"@site/blog/2022-08-12/weak-32-report.md",title:"2022\u5e74\u7b2c32\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c32\u5468\u5468\u62a5\u55b5\u3002",date:"2022-08-12T00:00:00.000Z",formattedDate:"August 12, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:3.635,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c32\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c33\u5468\u5468\u62a5",permalink:"/blog/2022/08/20/weak-33-report"},nextItem:{title:"\u6709\u5173BOOT\u6a21\u5757\u7684\u601d\u8003",permalink:"/blog/2022/08/07/about-boot"}},p={authorsImageUrls:[void 0]},s=[{value:"\ud83d\ude80 \u7248\u672c\u53d1\u5e03",id:"-\u7248\u672c\u53d1\u5e03",level:2},{value:"\ud83d\udcd5 \u6587\u6863\u66f4\u65b0",id:"-\u6587\u6863\u66f4\u65b0",level:2},{value:"\ud83c\udfaf \u5750\u6807\u4e0e\u4ed3\u5e93",id:"-\u5750\u6807\u4e0e\u4ed3\u5e93",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"2022\u5e74\u7b2c32\u5468\u5468\u62a5\u55b5\u3002"),(0,l.kt)("h2",{id:"-\u7248\u672c\u53d1\u5e03"},"\ud83d\ude80 \u7248\u672c\u53d1\u5e03"),(0,l.kt)("p",null,"\u672c\u5468, ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u53d1\u5e03\u4e86\u7248\u672c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0-beta-RC.2"},(0,l.kt)("inlineCode",{parentName:"a"},"v3.0.0-beta-RC.2")),"\uff0c"),(0,l.kt)("p",null,"\u6b64\u7248\u672c\u4e2d\u4e3b\u8981\u8fdb\u884c\u4e86\u4e00\u4e9b\u4f18\u5316\u3001\u4fee\u590d\u76f8\u5173\u7684\u5de5\u4f5c\u3002"),(0,l.kt)("h2",{id:"-\u6587\u6863\u66f4\u65b0"},"\ud83d\udcd5 \u6587\u6863\u66f4\u65b0"),(0,l.kt)("p",null,"\u5bf9\u4e8emirai\u7ec4\u4ef6\uff0c\u6211\u4eec\u5927\u7bc7\u5e45\u7684\u66f4\u65b0\u4e86\u6709\u5173bot\u914d\u7f6e\u76f8\u5173\u7684\u5185\u5bb9\uff0c\u4e5f\u540c\u65f6\u66f4\u65b0\u4e86\u6587\u6863\u3002\u6709\u5174\u8da3\u7684\u8bdd\uff0c\u4e0d\u59a8\u53bb\u770b\u770b\u3002"),(0,l.kt)("h2",{id:"-\u5750\u6807\u4e0e\u4ed3\u5e93"},"\ud83c\udfaf \u5750\u6807\u4e0e\u4ed3\u5e93"),(0,l.kt)("p",null,"\u6211\u4eec\u4e00\u76f4\u5728\u8003\u8651\uff0c\u662f\u5426\u8981\u5728\u6b63\u5f0f\u7248\u672c\u53d1\u5e03\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u66f4\u7b26\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"simbot3")," \u540d\u4e49\u7684maven\u5750\u6807\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u73b0\u5728\u7684\u5750\u6807\u548c\u7248\u672c\u662f\u5982\u4e0b\u7684\u6837\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"love.forte.simbot:simbot-core:3.0.0-beta\nlove.forte.simbot.boot:simboot-core:3.0.0-beta\n")),(0,l.kt)("p",null,"\u800c\u6211\u4eec\u62df\u5b9a\u5728\u6b63\u5f0f\u7248\u53d1\u5e03\u65f6\uff0c\u7edf\u4e00\u4f7f\u7528\u66f4\u660e\u786e\u7684\u5750\u6807\u548c\u7248\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"love.forte.simbot3:simbot3-core:1.0.0\nlove.forte.simbot3.boot:simbot3-boot-core:1.0.0\n")),(0,l.kt)("admonition",{title:"\u865a\u5984...",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u4f46\u8fd9\u4ecd\u5728\u8003\u8651\u4e2d\uff0c\u5e76\u4e14\u53ef\u80fd\u5927\u6982\u7387",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a\u65bd\u884c"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd9\u79cd\u8003\u8651\uff1f"))," simbot\u5386\u5c4a\u7248\u672c\u90fd\u5e94\u8be5\u8fd9\u6837\uff0c\u6bd4\u5982simbot2\u5b9e\u9645\u4e0a\u5e94\u8be5\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"love.forte.simbot2:simbot2-xxx:1.x.x\n")),(0,l.kt)("p",null,"\u56e0\u4e3a\u6bcf\u4e00\u4ee3\u7684simbot\u4e4b\u95f4\u90fd\u5b58\u5728\u5929\u5dee\u5730\u522b\u7684\u53d8\u5316\uff0c\u800c\u8fd9\u79cd\u53d8\u5316\u751a\u81f3\u4e0d\u5e94\u7b80\u5355\u7684\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"major")," \u7248\u672c\u53f7\u7684\u66f4\u65b0\u6765\u63cf\u8ff0\uff0c\n\u800c\u662f\u5e94\u8be5\u5b8c\u5168\u4f5c\u4e3a\u4e00\u4e2a\u65b0\u7684\u5185\u5bb9\uff0c\u4ece\u5934\u5f00\u59cb\uff0c\u4ece1.0.0\u7684\u7248\u672c\u53f7\u5f00\u59cb\u3002"),(0,l.kt)("p",null,"\u7136\u800c\u5b9e\u9645\u4e0a\uff0c\u4ecesimbot2\u5f00\u59cb\u7684\u7248\u672c\u53f7\u4fbf\u5df2\u7ecf\u6ca1\u6709\u5c65\u884c \u2014\u2014\u2014\u2014 \u6216\u8005\u8bf4\u96be\u4ee5\u5c65\u884c\u5b83\u4eec\u7528\u4e8e\u63cf\u8ff0api\u8fed\u4ee3\u7684\u804c\u8d23\u4e86\u3002"),(0,l.kt)("p",null,"\u800c\u73b0\u5728\u5f53\u6211\u4eec\u8003\u8651\u5230\u8fd9\u4ef6\u4e8b\u7684\u65f6\u5019\uff0c\u4e5f\u5df2\u7ecf\u6709\u4e9b\u665a\u4e86\u3002"),(0,l.kt)("admonition",{title:"\u8ba8\u8bba",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"2022-07-15")," \u7684\u65f6\u5019\u5c31\u53d1\u5e03\u8fc7\u4e00\u6b21\u7c7b\u4f3c\u7684\u8ba8\u8bba\u535a\u5ba2: \u300a\u8bed\u4e49\u5316\u7248\u672c\uff1f\u300b")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u867d\u7136\u5750\u6807\u7684\u53d8\u66f4\u96be\u4ee5\u65bd\u884c\uff0c\u4f46\u662f\u5bf9\u4e8e\u4ed3\u5e93\u7684\u91cd\u6574\u4e0e\u8f6c\u79fb\u5219\u4f1a\u62e9\u671f\u8fdb\u884c\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u540e\u7eed\u4f1a\u5c06\u76ee\u524d\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u62c6\u5206\u4e3a\u5206\u522b\u4ee3\u8868\u4e86\u4e0d\u540c",(0,l.kt)("strong",{parentName:"p"},"\u4e16\u4ee3"),"\u7684\u4e24\u4e2a\u4ed3\u5e93\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"simple-robot-g2")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"simple-robot-g3"),"\uff0c\n\u5e76\u5c06\u5b83\u4eec\u8f6c\u79fb\u5230 ",(0,l.kt)("a",{parentName:"p",href:"http://github.com/simple-robot"},(0,l.kt)("inlineCode",{parentName:"a"},"simple-robot")," \u7ec4\u7ec7\u5e93")," \u4e2d\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\uff0c\u6211\u4e0a\u9762\u63d0\u5230\u4e86 ",(0,l.kt)("strong",{parentName:"p"},'"\u4e16\u4ee3"')," \u800c\u4e0d\u662f\u7248\u672c\uff0c\u5e76\u4e14\u4ed3\u5e93\u7684\u547d\u540d\u4e5f\u662f\u4f7f\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},'"g2"'),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},'"g3"')," \u800c\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},'"v2"'),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},'"v3"'),'\u3002\n\u8fd9\u662f\u56e0\u4e3a\uff0csimbot1\u3001simbot2\u3001simbot3\u4e4b\u524d\uff0c\u6211\u8ba4\u4e3a\u5b83\u4eec\u9664\u4e86\u7ee7\u627f\u7edf\u4e00\u610f\u5fd7\u4e0e\u540d\u79f0\u4ee5\u5916\uff0c\u5e76\u6ca1\u6709\u5b9e\u9645\u4e0a\u7684"\u8fed\u4ee3"\uff0c\u56e0\u6b64\u4f7f\u7528 ',(0,l.kt)("inlineCode",{parentName:"p"},"version")," \u6765\u63cf\u8ff0\u5b83\u4eec\u5e76\u4e0d\u5341\u5206\u59a5\u5f53\u3002"),(0,l.kt)("p",null,"\u90a3\u4e48\u8be5\u7528\u4ec0\u4e48\u6765\u63cf\u8ff0\u5462\uff0c\u6211\u4eec\u60f3\u5230\u4e86\u4e0a\u9762\u7684\u8bcd\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u4e16\u4ee3"),"\uff0c\u7136\u540e\u7ffb\u8bd1\u4e00\u4e0b\u4fbf\u5f97\u5230\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Generation"),"\uff0c\u4e5f\u5c31\u5f97\u5230\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},'"g2"'),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},'"g3"')," \u540e\u7f00\u3002\n\u5df2\u7ecf\u8fc7\u53bb\u7684\u7248\u672c\u65e0\u6cd5\u518d\u53d8\uff0c\u800c\u540e\u7eed\uff0c\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"gx")," \u7684\u8fed\u4ee3\uff0c\u4f1a\u6839\u636e\u65b0\u7248\u672c\u7684\u7279\u8d28\u6765\u51b3\u5b9a\u5b83\u4f1a\u6210\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"g3 v2")," \u8fd8\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"g4 v1"),"\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\u8bf4\u771f\u7684\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"g3")," \u8fd9\u79cd\u540e\u7f00\u770b\u4e0a\u53bb\u5f88\u4e0d\u4e60\u60ef\uff0c\u4e5f\u8bb8\u6211\u4eec\u4f1a\u7ee7\u7eed\u601d\u8003\u66f4\u597d\u7684\u547d\u540d\u65b9\u5f0f\u3002"),(0,l.kt)("admonition",{title:"\u610f\u89c1\u4e0e\u5efa\u8bae ",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u8fd9\u9879\u4e3e\u63aa\u5c1a\u672a\u65bd\u884c\u4e4b\u9645\uff0c\u5982\u679c\u4f60\u6709\u66f4\u597d\u7684\u60f3\u6cd5\u6216\u8005\u5176\u4ed6\u610f\u89c1\uff0c\u975e\u5e38\u6b22\u8fce\u4e0e\u6211\u4eec\u4ea4\u6d41\u3002")))}u.isMDXComponent=!0}}]);