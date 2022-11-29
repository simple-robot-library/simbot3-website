"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[4523],{5162:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294),r=a(6010);const o="tabItem_Ymn6";function n(e){let{children:t,hidden:a,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,n),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>b});var l=a(7462),r=a(7294),o=a(6010),n=a(2389),s=a(7392),i=a(7094),u=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:a,block:n,defaultValue:p,values:b,groupId:d,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=b??v.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[E,N]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:Z}=(0,u.o5)();if(null!=d){const e=y[d];null!=e&&e!==E&&f.some((t=>t.value===e))&&N(e)}const _=e=>{const t=e.currentTarget,a=T.indexOf(t),l=f[a].value;l!==E&&(Z(t),N(l),null!=d&&w(d,String(l)))},I=e=>{var t;let a=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},f.map((e=>{let{value:t,label:a,attributes:n}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>T.push(e),onKeyDown:I,onClick:_},n,{className:(0,o.Z)("tabs__item",m,null==n?void 0:n.className,{"tabs__item--active":E===t})}),a??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function b(e){const t=(0,n.Z)();return r.createElement(p,(0,l.Z)({key:String(t)},e))}},1610:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294);const r="label_Yf5u";function o(e){let{type:t,href:a,children:o}=e;t=t||"primary";const n=l.createElement("span",{className:r},l.createElement("span",{className:`badge badge--${t}`},o));return null!=a&&a.length>0?l.createElement("a",{href:a},n):n}},9104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=a(7462),r=(a(7294),a(3905));a(5488),a(5162),a(814),a(1610);const o={authors:"forliy",title:"2022\u5e74\u7b2c37\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},n=void 0,s={permalink:"/blog/2022/09/16/weak-37-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022-09-16/weak-37-report.md",source:"@site/blog/2022-09-16/weak-37-report.md",title:"2022\u5e74\u7b2c37\u5468\u5468\u62a5",description:"\u5927\u6982\u662f2022\u5e74\u7b2c37\u5468\u5468\u62a5\u55b5\u3002",date:"2022-09-16T00:00:00.000Z",formattedDate:"September 16, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:1.21,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c37\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c38\u5468\u5468\u62a5",permalink:"/blog/2022/09/23/weak-38-report"},nextItem:{title:"2022\u5e74\u7b2c36\u5468\u5468\u62a5",permalink:"/blog/2022/09/10/weak-36-report"}},i={authorsImageUrls:[void 0]},u=[{value:"\ud83d\ude80 \u6838\u5fc3\u5e93\u66f4\u65b0",id:"-\u6838\u5fc3\u5e93\u66f4\u65b0",level:2},{value:"\ud83c\udfe2 \u793e\u533a",id:"-\u793e\u533a",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5927\u6982\u662f2022\u5e74\u7b2c37\u5468\u5468\u62a5\u55b5\u3002"),(0,r.kt)("h2",{id:"-\u6838\u5fc3\u5e93\u66f4\u65b0"},"\ud83d\ude80 \u6838\u5fc3\u5e93\u66f4\u65b0"),(0,r.kt)("p",null,"\u672c\u5468 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u53d1\u5e03\u4e86......\u54c8\u54c8\uff0c\u9a97\u4f60\u7684\uff0c\u6838\u5fc3\u5e93\u672c\u5468\u5e76\u6ca1\u6709\u53d1\u5e03\u65b0\u7248\u672c\u3002\n\u8fd9\u79cd\u6211\u4eec\u867d\u7136\u6ca1\u6709\u66f4\u65b0\u6838\u5fc3\u5e93\u6216\u8005\u6587\u6863\uff0c\u4f46\u662f\u8fd9\u5e76\u4e0d\u4ee3\u8868\u6211\u4eec\u4e00\u76f4\u5728\u95f2\u7740\uff0c\u7ec8\u7a76\u662f\u6709\u5728\u5199\u4ec0\u4e48\u4e1c\u897f\u7684\u3002"),(0,r.kt)("p",null,"\u5c3d\u7ba1\u5982\u6b64\uff0c\u6838\u5fc3\u5e93\u5e76\u975e\u6beb\u65e0\u53d8\u5316\u3002\u5728\u672c\u5468\uff0c\u6211\u4eec\u5b8c\u6210\u4e86\u5c06\u6838\u5fc3\u5e93\u8fc1\u79fb\u81f3 ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/simple-robot"},"\u7ec4\u7ec7\u5e93")," \u7684\u5de5\u4f5c\uff0c\n\u73b0\u5728simbot\u7684\u805a\u96c6\u5730\u5df2\u7ecf\u76f8\u5bf9\u96c6\u4e2d\u4e86\u3002"),(0,r.kt)("h2",{id:"-\u793e\u533a"},"\ud83c\udfe2 \u793e\u533a"),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u662f\u8981\u518d\u8bf4\u4e00\u6b21\uff0c\u4f34\u968f\u7740\u4e0a\u8ff0\u7684\u6838\u5fc3\u5e93\u7684\u8fc1\u79fb\uff0c\u6211\u4eec\u5728 ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/simple-robot"},"\u7ec4\u7ec7\u5e93")," \u4e2d\u501f\u52a9 github discussions\n\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/simple-robot/discussions"},"\u793e\u533a")," \u3002\n\u65e5\u540e\u53ef\u80fd\u4f1a\u9010\u6b65\u5b8c\u5584\u6b64\u793e\u533a\uff0c\u5e76\u65f6\u4e0d\u65f6\u5730\u66f4\u65b0\u4e00\u4e9b\u54a8\u8be2\u6216F&Q\u6765\u63d0\u4f9b\u66f4\u53cb\u597d\u5730\u5f15\u5bfc\uff0c\u5982\u679c\u6709\u5fc5\u8981\u7684\u8bdd\u3002"))}m.isMDXComponent=!0}}]);