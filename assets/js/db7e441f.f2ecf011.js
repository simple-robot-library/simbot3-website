"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[9367],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(7462),n=a(7294),s=a(6010),i=a(2389),o=a(7392),l=a(7094),c=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:i,defaultValue:m,values:p,groupId:b,className:v}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),g=(0,o.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:k}=(0,l.U)(),[w,N]=(0,n.useState)(y),_=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=b){const e=E[b];null!=e&&e!==w&&h.some((t=>t.value===e))&&N(e)}const Z=e=>{const t=e.currentTarget,a=_.indexOf(t),r=h[a].value;r!==w&&(T(t),N(r),null!=b&&k(b,String(r)))},A=e=>{var t;let a=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;a=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;a=_[t]??_[_.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},v)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>_.push(e),onKeyDown:A,onClick:Z},i,{className:(0,s.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function p(e){const t=(0,i.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},1610:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294);const n="label_Yf5u";function s(e){let{type:t,href:a,children:s}=e;t=t||"primary";const i=r.createElement("span",{className:n},r.createElement("span",{className:`badge badge--${t}`},s));return null!=a&&a.length>0?r.createElement("a",{href:a},i):i}},2558:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));a(8209),a(1610),a(5488),a(5162);const s={sidebar_position:16,title:"\u4e8b\u4ef6\u62e6\u622a",toc_max_heading_level:4},i=void 0,o={unversionedId:"basic/event-interception",id:"basic/event-interception",title:"\u4e8b\u4ef6\u62e6\u622a",description:"\u65bd\u5de5\u4e2d",source:"@site/docs/basic/event-interception.md",sourceDirName:"basic",slug:"/basic/event-interception",permalink:"/docs/basic/event-interception",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/basic/event-interception.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1669477508,formattedLastUpdatedAt:"Nov 26, 2022",sidebarPosition:16,frontMatter:{sidebar_position:16,title:"\u4e8b\u4ef6\u62e6\u622a",toc_max_heading_level:4},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u76d1\u542c",permalink:"/docs/basic/event-listening"},next:{title:"\u6d88\u606f",permalink:"/docs/basic/messages"}},l={},c=[],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"TODO",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"\u65bd\u5de5\u4e2d")))}d.isMDXComponent=!0},8209:(e,t,a)=>{a.d(t,{G:()=>i});var r=a(7294),n=a(7273);const s="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return r.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,r.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[o,l]=(0,r.useState)(!1),c=(0,r.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??s;a!==s&&"dark"!==a&&(a=s);const r=a===s?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??r}(i,a)),[a,o]);return(0,r.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){l((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,r.useEffect)((()=>{a&&(a.mermaid?n.Z.initialize({startOnLoad:!0,...a.mermaid,theme:c}):n.Z.initialize({startOnLoad:!0,theme:c}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),n.Z.contentLoaded())}),[a,c]),(0,r.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(n.Z.contentLoaded,0)}),[e]),r.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);