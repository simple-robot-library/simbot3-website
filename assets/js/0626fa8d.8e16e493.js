"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[6958],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),r=a(6010);const n="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>b});var l=a(7462),r=a(7294),n=a(6010),o=a(2389),s=a(7392),i=a(7094),u=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:a,block:o,defaultValue:p,values:b,groupId:d,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=b??v.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),f=(0,s.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[E,N]=(0,r.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:Z}=(0,u.o5)();if(null!=d){const e=y[d];null!=e&&e!==E&&k.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,a=T.indexOf(t),l=k[a].value;l!==E&&(Z(t),N(l),null!=d&&w(d,String(l)))},_=e=>{var t;let a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},h)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>T.push(e),onKeyDown:_,onClick:C},o,{className:(0,n.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":E===t})}),a??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function b(e){const t=(0,o.Z)();return r.createElement(p,(0,l.Z)({key:String(t)},e))}},1610:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294);const r="label_Yf5u";function n(e){let{type:t,href:a,children:n}=e;t=t||"primary";const o=l.createElement("span",{className:r},l.createElement("span",{className:`badge badge--${t}`},n));return null!=a&&a.length>0?l.createElement("a",{href:a},o):o}},3421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var l=a(7462),r=(a(7294),a(3905));a(5488),a(5162),a(814),a(1610);const n={authors:"forliy",title:"2022\u5e74\u7b2c29\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},o=void 0,s={permalink:"/blog/2022/07/22/weak-29-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022-07-22/weak-29-report.md",source:"@site/blog/2022-07-22/weak-29-report.md",title:"2022\u5e74\u7b2c29\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c29\u5468\u5468\u62a5\u55b5\u3002",date:"2022-07-22T00:00:00.000Z",formattedDate:"July 22, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:1.865,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c29\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c30\u5468\u5468\u62a5",permalink:"/blog/2022/07/29/weak-30-report"},nextItem:{title:"\u8bed\u4e49\u5316\u7248\u672c?",permalink:"/blog/2022/07/15/semantic-versioning"}},i={authorsImageUrls:[void 0]},u=[{value:"\ud83d\ude80 \u7248\u672c\u8ba1\u5212",id:"-\u7248\u672c\u8ba1\u5212",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"2022\u5e74\u7b2c29\u5468\u5468\u62a5\u55b5\u3002"),(0,r.kt)("p",null,"\u53c8\u662f\u4e00\u5468\u8fc7\u53bb\u4e86\u3002\u5728\u8fd9\u5468\uff0c\u53ef\u80fdsimbot3\u7684\u6574\u4f53\u5f00\u53d1\u90fd\u6ca1\u6709\u4ec0\u4e48\u5f88\u5927\u7684\u8fdb\u5c55\u3002\u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f\n\u56e0\u4e3a\u6211\u4eec\u56e2\u961f\u7684\u6210\u5458\u4eec\u5728\u8fd9\u5468\u4e2d\u7684\u65f6\u95f4\u5e76\u4e0d\u4e0d\u8db3\u3002\u51e0\u4e4e\u5728\u540c\u4e00\u65f6\u95f4\uff0c\u6210\u5458\u4eec\u90fd\u6536\u5230\u4e86\u6765\u81ea\u5404\u81ea\u5de5\u4f5c\u4e0a\u7684\u65b0\u5de5\u4f5c\u5b89\u6392\u3002"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u65f6\u5e38\u5728\u4e00\u8d77\u63a2\u8ba8\uff0c\u5de5\u4f5c\u7684\u610f\u4e49\u662f\u4ec0\u4e48\uff0c\u800c\u73b0\u5728\u7684\u5de5\u4f5c\u662f\u5426\u6709\u610f\u4e49\u5462\uff1f"),(0,r.kt)("p",{align:"center"},(0,r.kt)("small",null,(0,r.kt)("i",null,"\u4eba\u751f\u5982\u96ea\u82b1\u822c\u98d8\u843d\uff0c\u59cb\u4e8e\u9752\u7a7a\uff0c\u878d\u4e8e\u6cde\u571f\u3002"))," "),(0,r.kt)("h2",{id:"-\u7248\u672c\u8ba1\u5212"},"\ud83d\ude80 \u7248\u672c\u8ba1\u5212"),(0,r.kt)("p",null,"\u597d\u5427\uff0c\u8ba9\u6211\u4eec\u56de\u5230\u6b63\u9898\u3002\u5bf9\u4e8e\u63a5\u4e0b\u6765\u7684\u7248\u672c\u8ba1\u5212\uff0c\u4fbf\u662f\u7ee7\u7eed\u63a8\u8fdb ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},(0,r.kt)("strong",{parentName:"a"},"\u6838\u5fc3\u5e93")),"\n\u7684\u7248\u672c\u8fdb\u5ea6\u3002\u4e0b\u4e00\u4e2a\u7248\u672c\u5c06\u4f1a\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0-beta-RC.1")," \u7248\u672c\uff0c\u5e76\u9010\u6b65\u5411\u7b2c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"beta")," \u7248\u672c\u524d\u8fdb\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u597d\u5427\uff0c\u8fd9\u5468\u5bf9\u4e8esimbot\u7684\u5185\u5bb9\u7684\u786e\u4e0d\u662f\u5f88\u591a\u3002\u5982\u4f60\u6240\u89c1\uff0c\u6211\u4eec\u751a\u81f3\u6ca1\u6709\u53ef\u4ee5\u5411\u4f60\u4ecb\u7ecd\u7684\u65b0\u70b9\u5b50\u3002"),(0,r.kt)("p",null,"\u4e0a\u4e00\u6b21\u7684\u5468\u62a5\u6211\u4eec\u4fbf\u63d0\u8fc7\uff0csimbot3 \u5df2\u7ecf\u9646\u9646\u7eed\u7eed\u7684\u63a8\u8fdb\u4e86\u5c06\u8fd11\u5e74\u7684\u65f6\u95f4\u4e86\u3002\u5728\u8fd9\u671f\u95f4\uff0c\u5927\u5927\u5c0f\u5c0f\u7684\u4fee\u8865\u4ece\u672a\u95f4\u65ad\u3002\n\u6216\u8bb8\u6211\u4eec\u56e2\u961f\u7684\u7cbe\u529b\u5df2\u7ecf\u96be\u4ee5\u652f\u6491simbot\u80fd\u591f\u8d70\u4e0b\u8db3\u591f\u591a\u7684\u8def\u9014\uff1b\n\u6216\u8bb8\u7ec8\u6709\u4e00\u5929\u56e2\u961f\u6210\u5458\u4f1a\u5404\u5954\u4e1c\u897f\u3001\u4e0d\u518d\u8054\u7edc\uff1b\n\u4f46\u81f3\u5c11\u73b0\u5728\uff0c\u6211\u4eec\u4ecd\u5e0c\u671b\u80fd\u591f\u5728\u5176\u5c1a\u672a\u7834\u706d\u4e4b\u65f6\uff0c\u7115\u5176\u8363\u5f69\u3002"))}m.isMDXComponent=!0}}]);