"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3641],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),r=a(6010);const n="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>b});var l=a(7462),r=a(7294),n=a(6010),o=a(2389),s=a(7392),i=a(7094),u=a(2466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,a;const{lazy:o,block:c,defaultValue:b,values:d,groupId:h,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:k.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),v=(0,s.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===b?b:null!=(t=null!=b?b:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[E,T]=(0,r.useState)(y),Z=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=h){const e=N[h];null!=e&&e!==E&&g.some((t=>t.value===e))&&T(e)}const _=e=>{const t=e.currentTarget,a=Z.indexOf(t),l=g[a].value;l!==E&&(C(t),T(l),null!=h&&w(h,String(l)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var l;const t=Z.indexOf(e.currentTarget)+1;a=null!=(l=Z[t])?l:Z[0];break}case"ArrowLeft":{var r;const t=Z.indexOf(e.currentTarget)-1;a=null!=(r=Z[t])?r:Z[Z.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":c},f)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>Z.push(e),onKeyDown:I,onFocus:_,onClick:_},o,{className:(0,n.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(k.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function b(e){const t=(0,o.Z)();return r.createElement(c,(0,l.Z)({key:String(t)},e))}},1610:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294);const r="label_Yf5u";function n(e){let{type:t,href:a,children:n}=e;t=t||"primary";const o=l.createElement("span",{className:r},l.createElement("span",{className:"badge badge--"+t},n));return null!=a&&a.length>0?l.createElement("a",{href:a},o):o}},3255:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var l=a(7462),r=(a(7294),a(3905));a(5488),a(5162),a(814),a(1610);const n={authors:"forliy",title:"2022\u5e74\u7b2c30\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},o=void 0,s={permalink:"/blog/2022/07/29/weak-30-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022-07-29/weak-30-report.md",source:"@site/blog/2022-07-29/weak-30-report.md",title:"2022\u5e74\u7b2c30\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c30\u5468\u5468\u62a5\u55b5\u3002",date:"2022-07-29T00:00:00.000Z",formattedDate:"July 29, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:1.185,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c30\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c31\u5468\u5468\u62a5",permalink:"/blog/2022/08/05/weak-31-report"},nextItem:{title:"2022\u5e74\u7b2c29\u5468\u5468\u62a5",permalink:"/blog/2022/07/22/weak-29-report"}},i={authorsImageUrls:[void 0]},u=[{value:"\ud83d\ude80 \u7248\u672c\u53d1\u5e03",id:"-\u7248\u672c\u53d1\u5e03",level:2},{value:"\ud83c\udf1f \u661f\u661f\uff01",id:"-\u661f\u661f",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"2022\u5e74\u7b2c30\u5468\u5468\u62a5\u55b5\u3002"),(0,r.kt)("p",null,"\u65e9\u4e0a\u597d\u3002\u4e5f\u8bb8\u662f\u4e2d\u5348\uff1f\u90a3\u4e48\u5c31\u662f\u665a\u4e0a\u597d\u3002\u4e0d\u77e5\u4e0d\u89c9\u5df2\u7ecf\u8fdb\u5165\u5230\u4e86\u4eca\u5e74\u7684\u7b2c30\u5468\u4e86\uff0c\u800c\u8fd9\u5468\uff0c\u53c8\u53d1\u751f\u4e86\u4ec0\u4e48\u5927\u4e8b\u513f\u5462\uff1f"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\u57fa\u672c\u4e0a\u6ca1\u6709\u3002"),(0,r.kt)("h2",{id:"-\u7248\u672c\u53d1\u5e03"},"\ud83d\ude80 \u7248\u672c\u53d1\u5e03"),(0,r.kt)("p",null,"\u5728\u672c\u5468\uff0c\u6211\u4eec\u51e0\u4f4d\u6838\u5fc3\u6210\u5458\u5fd9\u91cc\u5077\u95f2\u7684\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93"),"\n\u53d1\u5e03\u4e86\u4e00\u4e2a\u65b0\u7684\u7248\u672c\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0-beta-RC.1"},(0,r.kt)("strong",{parentName:"a"},"v3.0.0-beta-RC.1"))),(0,r.kt)("p",null,"\u8fd9\u662f\u7b2c\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"RC"))," \u7248\u672c\uff0c\u8fd9\u4e5f\u4ee3\u8868\u4ece\u6b64\u7248\u672c\u5f00\u59cb\uff0capi\u5c06\u4f1a\u88ab\u5c3d\u53ef\u80fd\u7684\u4fdd\u8bc1\u4e0d\u53d1\u751f\u91cd\u5927\u53d8\u5316\u4e86\u3002\n\u8fd9\u662f\u4e2a\u597d\u6d88\u606f\uff0c\u4e0d\u662f\u5417\uff1f"),(0,r.kt)("p",null,"\u9664\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u4ee5\u5916\uff0c\u5982\u679c\u4e0d\u51fa\u610f\u5916\uff0c\u53ef\u80fd\u8fd8\u4f1a\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-component-mirai"},"mirai\u7ec4\u4ef6"),"\n\u53d1\u5e03\u4e00\u4e2a\u65b0\u7248\u672c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0.0-beta-M2"),"\u3002"),(0,r.kt)("h2",{id:"-\u661f\u661f"},"\ud83c\udf1f \u661f\u661f\uff01"),(0,r.kt)("p",null,"\u5c31\u5728\u521a\u521a\uff0c\u6211\u4eec ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u7684 ",(0,r.kt)("strong",{parentName:"p"},"star")," \u91cf\u7ec8\u4e8e\u8fbe\u5230\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"300")," \uff01\u53ef\u559c\u53ef\u8d3a\uff0c\u53ef\u559c\u53ef\u8d3a\uff5e"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(5934).Z},(0,r.kt)("img",{alt:"star.png",src:a(5605).Z,width:"540",height:"135"}))),(0,r.kt)("blockquote",null,(0,r.kt)("small",null,"\u54e6\u597d\u5427\uff0c\u4e5f\u8bb8\u4e0d\u662f\u521a\u521a?")))}m.isMDXComponent=!0},5934:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/files/star-1b8a24c4f04a84ace6f3f1cba974fe1e.png"},5605:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/star-1b8a24c4f04a84ace6f3f1cba974fe1e.png"}}]);