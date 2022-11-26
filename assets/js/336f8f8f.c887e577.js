"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[5094],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),r=a(6010);const n="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(7462),r=a(7294),n=a(6010),o=a(2389),i=a(7392),s=a(7094),p=a(2466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:a,block:o,defaultValue:c,values:d,groupId:h,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??k.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),f=(0,i.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[y,C]=(0,r.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==y&&v.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,a=E.indexOf(t),l=v[a].value;l!==y&&(T(t),C(l),null!=h&&w(h,String(l)))},S=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},b)},v.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>E.push(e),onKeyDown:S,onClick:x},o,{className:(0,n.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,o.Z)();return r.createElement(c,(0,l.Z)({key:String(t)},e))}},1610:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294);const r="label_Yf5u";function n(e){let{type:t,href:a,children:n}=e;t=t||"primary";const o=l.createElement("span",{className:r},l.createElement("span",{className:`badge badge--${t}`},n));return null!=a&&a.length>0?l.createElement("a",{href:a},o):o}},1040:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var l=a(7462),r=(a(7294),a(3905));a(5488),a(5162),a(814),a(1610);const n={authors:"forliy",title:"2022\u5e74\u7b2c36\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},o=void 0,i={permalink:"/blog/2022/09/10/weak-36-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022-09-10/weak-36-report.md",source:"@site/blog/2022-09-10/weak-36-report.md",title:"2022\u5e74\u7b2c36\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c36\u5468\u5468\u62a5\u55b5\u3002",date:"2022-09-10T00:00:00.000Z",formattedDate:"September 10, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:3.05,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c36\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c37\u5468\u5468\u62a5",permalink:"/blog/2022/09/16/weak-37-report"},nextItem:{title:"2022\u5e74\u7b2c35\u5468\u5468\u62a5\u505c\u66f4\u516c\u544a",permalink:"/blog/2022/08/26/weak-35-stop"}},s={authorsImageUrls:[void 0]},p=[{value:"\ud83d\udc31\ud83c\udf89 \u732b\u732b\u7801 \u7b2c\u4e8c\u4ee3\uff01",id:"-\u732b\u732b\u7801-\u7b2c\u4e8c\u4ee3",level:2},{value:"\ud83d\udc31\ud83d\udd27 \u591a\u5e73\u53f0",id:"-\u591a\u5e73\u53f0",level:3},{value:"\ud83d\ude38\ud83e\uddf5 \u5e8f\u5217\u5316",id:"-\u5e8f\u5217\u5316",level:3},{value:"\ud83d\ude3d\u2699\ufe0f \u517c\u5bb9\u6027",id:"\ufe0f-\u517c\u5bb9\u6027",level:3},{value:"\ud83d\ude80 \u6838\u5fc3\u5e93\u66f4\u65b0",id:"-\u6838\u5fc3\u5e93\u66f4\u65b0",level:2},{value:"\ud83d\ude9a \u6838\u5fc3\u5e93\u8fc1\u79fb",id:"-\u6838\u5fc3\u5e93\u8fc1\u79fb",level:2},{value:"\ud83c\udfe2 \u793e\u533a",id:"-\u793e\u533a",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"2022\u5e74\u7b2c36\u5468\u5468\u62a5\u55b5\u3002"),(0,r.kt)("h2",{id:"-\u732b\u732b\u7801-\u7b2c\u4e8c\u4ee3"},"\ud83d\udc31\ud83c\udf89 \u732b\u732b\u7801 \u7b2c\u4e8c\u4ee3\uff01"),(0,r.kt)("p",null,"\u7ec6\u5fc3\u7684\u5c0f\u4f19\u4f34\u4eec\u53ef\u80fd\u5df2\u7ecf\u53d1\u73b0\u4e86\uff0c\u5c31\u5728\u524d\u4e0d\u4e45\uff0c\u6211\u4eec\u516c\u5f00\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ForteScarlet/CatCode2"},"CatCode2"),"\n\u2014\u2014 \u4e5f\u5c31\u662f\u7b2c\u4e8c\u4ee3\u732b\u732b\u7801\u5e93\uff0c\u5e76\u53d1\u5e03\u4e86\u51e0\u4e2a\u65e9\u671f\u7248\u672c\u3002"),(0,r.kt)("admonition",{title:"\ud83d\udc31\ud83d\ude38\ud83d\ude39\ud83d\ude3b\ud83d\ude3c\ud83d\ude3d\ud83d\ude40\ud83d\ude3f\ud83d\ude3e\ud83d\ude3a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5373\u523b\u524d\u5f80 \ud83d\udc49",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ForteScarlet/CatCode2"},(0,r.kt)("strong",{parentName:"a"},"\u732b\u732b\u78012"))," \u67e5\u770b\u3001\u652f\u6301\u4e0e\u8d21\u732e\uff01")),(0,r.kt)("h3",{id:"-\u591a\u5e73\u53f0"},"\ud83d\udc31\ud83d\udd27 \u591a\u5e73\u53f0"),(0,r.kt)("p",null,"\u732b\u732b\u7801\u7b2c\u4e8c\u4ee3\u4e0e\u7b2c\u4e00\u4ee3\u6700\u5927\u7684\u4e0d\u540c\u5728\u4e8e\u7b2c\u4e8c\u4ee3\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/multiplatform.html"},"Kotlin Multiplatform"),"\n\u652f\u6301\u591a\u5e73\u53f0\uff08JVM\u3001JS\u3001Native\uff09\u3002\u9664\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/love/forte/catcode2"},"Maven")," \u4ed3\u5e93\u7684\u53d1\u5e03\uff0c\n\u4e5f\u4f1a\u540c\u6b65\u53d1\u5e03\u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@catcode2/core"},"NPM\u5305"),"\uff0c\u5e76\u4e14\u6838\u5fc3\u6a21\u5757\u63d0\u4f9b\u591a\u4e2a\u5e73\u53f0\u7684 C API (\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"linux x64"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"mingw x64"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"macos x64")," \u7b49 )\n\u3002\n\u4f60\u53ef\u4ee5\u5728\u66f4\u591a\u5e73\u53f0\u4e0a\u4f7f\u7528\u732b\u732b\u7801\u4e86\u55b5\u3002"),(0,r.kt)("h3",{id:"-\u5e8f\u5217\u5316"},"\ud83d\ude38\ud83e\uddf5 \u5e8f\u5217\u5316"),(0,r.kt)("p",null,"\u732b\u732b\u7801\u7b2c\u4e8c\u4ee3\u63d0\u4f9b\u4e86\u9488\u5bf9 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},"Kotlinx Serialization")," \u7684\u5e8f\u5217\u5316\u5b9e\u73b0\uff0c\n\u5f53\u4f60\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx-serialization")," \u65f6\uff0c\u53ef\u4ee5\u4e3a\u732b\u732b\u7801\u63d0\u4f9b\u5b9e\u4f53\u6a21\u677f\u6765\u8fdb\u884c\u66f4\u5b89\u5168\u660e\u786e\u7684\u5e8f\u5217\u5316\u4f7f\u7528\u55b5\u3002"),(0,r.kt)("h3",{id:"\ufe0f-\u517c\u5bb9\u6027"},"\ud83d\ude3d\u2699\ufe0f \u517c\u5bb9\u6027"),(0,r.kt)("p",null,"\u732b\u732b\u7801\u7b2c\u4e8c\u4ee3\u5e76\u6ca1\u6709\u53d8\u66f4\u732b\u732b\u7801\u7684\u57fa\u672c\u89c4\u5219\u4e0e\u7ed3\u6784\uff0c\u56e0\u6b64\u7406\u8bba\u4e0a\u5b83\u652f\u6301\u89e3\u6790\u65e7\u7248\u672c\u7684\u732b\u732b\u7801\u3002\u7b2c\u4e8c\u4ee3\u4ec5\u4ec5\u53ea\u662f\u89e3\u6790\u5e93\u7684\u8fed\u4ee3\uff0c\n\u800c\u6ca1\u6709\u8fed\u4ee3\u5176\u57fa\u672c\u89c4\u5219\u55b5\u3002"),(0,r.kt)("h2",{id:"-\u6838\u5fc3\u5e93\u66f4\u65b0"},"\ud83d\ude80 \u6838\u5fc3\u5e93\u66f4\u65b0"),(0,r.kt)("p",null,"\u672c\u5468 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u53d1\u5e03\u4e86\u4e00\u4e2a\u65b0\u7248\u672c\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0-beta"},"v3.0.0-beta")),(0,r.kt)("p",null,"\u9274\u4e8e\u8fd1\u671f\u5e76\u672a\u6709\u4ec0\u4e48\u4e25\u91cd\u95ee\u9898\u7684\u53cd\u9988\uff0c\u56e0\u6b64\u53d1\u5e03\u4e86\u8fd9\u4e2a\u6838\u5fc3\u5e93\u7684\u7b2c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"BETA")," \u7cfb\u5217\u7248\u672c\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"BETA")," \u7cfb\u5217\u7248\u672c\u53d1\u5e03\u540e\uff0c\n\u540e\u7eed\u7248\u672c\u7684\u66f4\u65b0\u5c31\u4e0d\u518d\u4f1a\u60f3\u4e4b\u524d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"preview")," \u9636\u6bb5\u90a3\u6837\u7684\u9891\u7e41\u53d8\u52a8\u4e86\uff0c\u800c\u662f\u4f1a\u66f4\u591a\u7684\u8003\u8651\u517c\u5bb9\u6027\u3002"),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u6b63\u5f0f\u7248\u672c\u53d1\u5e03\u4e4b\u524d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"BETA")," \u9636\u6bb5\u4f1a\u62e9\u673a\u5220\u9664",(0,r.kt)("strong",{parentName:"p"},"\u6240\u6709\u7684\u8fc7\u65f6API"),"\u3002\u8fd9\u4e9b\u5c06\u4f1a\u88ab\u5220\u9664\u7684\u8fc7\u65f6API\u90fd\u662f\u5728\n",(0,r.kt)("inlineCode",{parentName:"p"},"preview")," \u9636\u6bb5\u9057\u7559\u4e0b\u6765\u7684\u5185\u5bb9\u3002"),(0,r.kt)("h2",{id:"-\u6838\u5fc3\u5e93\u8fc1\u79fb"},"\ud83d\ude9a \u6838\u5fc3\u5e93\u8fc1\u79fb"),(0,r.kt)("p",null,"\u66fe\u7ecf\u6211\u4eec\u63d0\u5230\u8fc7\uff0c\u6211\u4eec\u6b63\u8ba1\u5212\u7740\u5c06 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u8fc1\u79fb\u5230 ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/simple-robot"},"\u7ec4\u7ec7\u5e93"),"\n\u4e2d\u3002\u6b64\u8ba1\u5212",(0,r.kt)("em",{parentName:"p"},"\u53ef\u80fd"),"\u4f1a\u5728\u8fd1\u671f\u5b9e\u884c\u3002"),(0,r.kt)("h2",{id:"-\u793e\u533a"},"\ud83c\udfe2 \u793e\u533a"),(0,r.kt)("p",null,"\u4f34\u968f\u7740\u4e0a\u8ff0\u7684\u6838\u5fc3\u5e93\u8fc1\u79fb\u8ba1\u5212\uff0c\u6211\u4eec\u5728 ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/simple-robot"},"\u7ec4\u7ec7\u5e93")," \u4e2d\u501f\u52a9 github discussions\n\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/simple-robot/discussions"},"\u793e\u533a")," \u3002\n\u65e5\u540e\u53ef\u80fd\u4f1a\u9010\u6b65\u5b8c\u5584\u6b64\u793e\u533a\uff0c\u5e76\u65f6\u4e0d\u65f6\u5730\u66f4\u65b0\u4e00\u4e9b\u54a8\u8be2\u6216F&Q\u6765\u63d0\u4f9b\u66f4\u53cb\u597d\u5730\u5f15\u5bfc\uff0c\u5982\u679c\u6709\u5fc5\u8981\u7684\u8bdd\u3002"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e4b\u524d\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/discussions"},"\u6838\u5fc3\u5e93\u8ba8\u8bba\u533a")," \u4e00\u76f4\u62c5\u4efb\u7740\u793e\u533a\u7684\u804c\u8d23\u3002"))}m.isMDXComponent=!0}}]);