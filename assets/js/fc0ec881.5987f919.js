"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[4346],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),o=a(6010);const n="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(n,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(7462),o=a(7294),n=a(6010),s=a(2389),i=a(7392),l=a(7094),c=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:s,defaultValue:m,values:b,groupId:p,className:f}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=b??v.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:E}=(0,l.U)(),[w,N]=(0,o.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:Z}=(0,c.o5)();if(null!=p){const e=y[p];null!=e&&e!==w&&h.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,a=T.indexOf(t),r=h[a].value;r!==w&&(Z(t),N(r),null!=p&&E(p,String(r)))},A=e=>{var t;let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,n.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":s},f)},h.map((e=>{let{value:t,label:a,attributes:s}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:A,onClick:S},s,{className:(0,n.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,o.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function b(e){const t=(0,s.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}},6099:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));a(8209),a(5488),a(5162);const n={sidebar_position:50,title:"Spring Boot"},s=void 0,i={unversionedId:"basic/spring-boot",id:"basic/spring-boot",title:"Spring Boot",description:"\u65bd\u5de5\u4e2d",source:"@site/docs/basic/spring-boot.md",sourceDirName:"basic",slug:"/basic/spring-boot",permalink:"/docs/basic/spring-boot",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/basic/spring-boot.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1671025550,formattedLastUpdatedAt:"Dec 14, 2022",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Spring Boot"},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u5904\u7406\u5668",permalink:"/docs/basic/event-manager"},next:{title:"\u6253\u5305",permalink:"/docs/basic/package/"}},l={},c=[],u={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"TODO",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"\u65bd\u5de5\u4e2d")))}d.isMDXComponent=!0},8209:(e,t,a)=>{a.d(t,{G:()=>s});var r=a(7294),o=a(7273);const n="light";const s=({chart:e,config:t})=>{if("undefined"==typeof window)return r.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,r.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),s=document.querySelector("html"),[i,l]=(0,r.useState)(!1),c=(0,r.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??n;a!==n&&"dark"!==a&&(a=n);const r=a===n?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??r}(s,a)),[a,i]);return(0,r.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){l((e=>!e));break}}));return e.observe(s,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,r.useEffect)((()=>{a&&(a.mermaid?o.Z.initialize({startOnLoad:!0,...a.mermaid,theme:c}):o.Z.initialize({startOnLoad:!0,theme:c}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),o.Z.contentLoaded())}),[a,c]),(0,r.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(o.Z.contentLoaded,0)}),[e]),r.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);