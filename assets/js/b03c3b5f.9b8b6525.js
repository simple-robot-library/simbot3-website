(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[8203],{1463:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>m});var i=r(7462),n=(r(7294),r(3905));r(8209);const a={title:"\u4e8b\u4ef6\u7ba1\u7406\u5668"},o=void 0,d={unversionedId:"definition/event-manager/index",id:"definition/event-manager/index",title:"\u4e8b\u4ef6\u7ba1\u7406\u5668",description:"TODO",source:"@site/docs/definition/event-manager/index.md",sourceDirName:"definition/event-manager",slug:"/definition/event-manager/",permalink:"/docs/definition/event-manager/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/definition/event-manager/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1677045158,formattedLastUpdatedAt:"2023\u5e742\u670822\u65e5",frontMatter:{title:"\u4e8b\u4ef6\u7ba1\u7406\u5668"},sidebar:"docs",previous:{title:"\u9884\u671f\u80fd\u529b",permalink:"/docs/definition/ability-support/"},next:{title:"BOT\u7ba1\u7406\u5668",permalink:"/docs/definition/bot-manager/"}},s={},m=[],c={toc:m};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"TODO"))}u.isMDXComponent=!0},1748:(e,t,r)=>{var i={"./locale":9234,"./locale.js":9234};function n(e){var t=a(e);return r(t)}function a(e){if(!r.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=a,e.exports=n,n.id=1748},8209:(e,t,r)=>{"use strict";r.d(t,{G:()=>o});var i=r(7294),n=r(1304);const a="light";const o=({chart:e,config:t})=>{if("undefined"==typeof window)return i.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const r=(0,i.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),o=document.querySelector("html"),[d,s]=(0,i.useState)(!1),m=(0,i.useMemo)((()=>function(e,t){let r=e.getAttribute("data-theme")??a;r!==a&&"dark"!==r&&(r=a);const i=r===a?"default":"dark";return t?.theme?.[r]??t?.mermaid?.theme??i}(o,r)),[r,d]);return(0,i.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){s((e=>!e));break}}));return e.observe(o,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,i.useEffect)((()=>{r&&(r.mermaid?n.Z.initialize({startOnLoad:!0,...r.mermaid,theme:m}):n.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),n.Z.contentLoaded())}),[r,m]),(0,i.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(n.Z.contentLoaded,0)}),[e]),i.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);