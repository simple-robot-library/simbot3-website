"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3308],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),l=a(7294),i=a(6010),o=a(2389),r=a(7392),s=a(7094),c=a(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:o,block:d,defaultValue:m,values:b,groupId:v,className:h}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,r.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===m?m:null!=(t=null!=m?m:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[E,T]=(0,l.useState)(N),_=[],{blockElementScrollPositionUntilNextRender:A}=(0,c.o5)();if(null!=v){const e=y[v];null!=e&&e!==E&&k.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=_.indexOf(t),n=k[a].value;n!==E&&(A(t),T(n),null!=v&&w(v,String(n)))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=_.indexOf(e.currentTarget)+1;a=null!=(n=_[t])?n:_[0];break}case"ArrowLeft":{var l;const t=_.indexOf(e.currentTarget)-1;a=null!=(l=_[t])?l:_[_.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>_.push(e),onKeyDown:Z,onFocus:C,onClick:C},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,o.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},1610:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);const l="label_Yf5u";function i(e){let{type:t,href:a,children:i}=e;t=t||"primary";const o=n.createElement("span",{className:l},n.createElement("span",{className:"badge badge--"+t},i));return null!=a&&a.length>0?n.createElement("a",{href:a},o):o}},1644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));a(1839),a(1610),a(5488),a(5162);const i={sidebar_position:10,title:"Application"},o=void 0,r={unversionedId:"basic/application",id:"basic/application",title:"Application",description:"Application\uff0c\u610f\u4e3a\u4e00\u4e2asimbot\u5e94\u7528\uff0c\u5728simbot\u4e2d\uff0c\u5b83\u626e\u6f14\u8005\u8d77\u70b9\u3001\u5165\u53e3\u7684\u89d2\u8272\u3002",source:"@site/docs/basic/application.md",sourceDirName:"basic",slug:"/basic/application",permalink:"/docs/basic/application",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/basic/application.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1667277196,formattedLastUpdatedAt:"Nov 1, 2022",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Application"},sidebar:"docs",previous:{title:"BOT\u7ba1\u7406\u5668",permalink:"/docs/defition/bot-manager/"},next:{title:"\u76d1\u542c\u51fd\u6570",permalink:"/docs/basic/event-listener"}},s={},c=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Application")),"\uff0c\u610f\u4e3a\u4e00\u4e2asimbot\u5e94\u7528\uff0c\u5728simbot\u4e2d\uff0c\u5b83\u626e\u6f14\u8005\u8d77\u70b9\u3001\u5165\u53e3\u7684\u89d2\u8272\u3002"),(0,l.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u4e86\u89e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"Application")," \u7684\u7b2c\u4e00\u6b65\uff0c\u5148\u8ba9\u6211\u4eec\u6765\u7b80\u5355\u4e86\u89e3\u4e00\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"Application")," \u7684",(0,l.kt)("strong",{parentName:"p"},"\u5b9a\u4e49"),"\u3002"),(0,l.kt)("admonition",{title:"TODO",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"\u65bd\u5de5\u4e2d")))}p.isMDXComponent=!0}}]);