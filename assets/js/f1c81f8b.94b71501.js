(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[9342],{2774:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));r(8209);const i={title:"\u7ec4\u4ef6\u534f\u540c"},a=void 0,s={unversionedId:"component-overview/synergy/index",id:"component-overview/synergy/index",title:"\u7ec4\u4ef6\u534f\u540c",description:"\u5728simbot3\u4e2d\uff0c\u5728\u4e00\u4e2a\u8fd0\u884c\u73af\u5883\u4e0b\u5c06\u4f1a\u5141\u8bb8\u540c\u65f6\u5b58\u5728\u591a\u4e2a\u7ec4\u4ef6\u540c\u65f6\u4f7f\u7528\u3002",source:"@site/docs/component-overview/synergy/index.md",sourceDirName:"component-overview/synergy",slug:"/component-overview/synergy/",permalink:"/docs/component-overview/synergy/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/component-overview/synergy/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1686563625,formattedLastUpdatedAt:"2023\u5e746\u670812\u65e5",frontMatter:{title:"\u7ec4\u4ef6\u534f\u540c"},sidebar:"docs",previous:{title:"QQ\u9891\u9053\u7ec4\u4ef6",permalink:"/docs/component-overview/qq-guild/"},next:{title:"\u76d1\u542c\u6982\u89c8",permalink:"/docs/take-a-look/listen-overview"}},d={},c=[],m={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728simbot3\u4e2d\uff0c\u5728\u4e00\u4e2a\u8fd0\u884c\u73af\u5883\u4e0b\u5c06\u4f1a\u5141\u8bb8\u540c\u65f6\u5b58\u5728\u591a\u4e2a\u7ec4\u4ef6\u540c\u65f6\u4f7f\u7528\u3002"))}u.isMDXComponent=!0},1748:(e,t,r)=>{var o={"./locale":9234,"./locale.js":9234};function n(e){var t=i(e);return r(t)}function i(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=i,e.exports=n,n.id=1748},8209:(e,t,r)=>{"use strict";r.d(t,{G:()=>a});var o=r(7294),n=r(1304);const i="light";const a=({chart:e,config:t})=>{if("undefined"==typeof window)return o.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const r=(0,o.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),a=document.querySelector("html"),[s,d]=(0,o.useState)(!1),c=(0,o.useMemo)((()=>function(e,t){let r=e.getAttribute("data-theme")??i;r!==i&&"dark"!==r&&(r=i);const o=r===i?"default":"dark";return t?.theme?.[r]??t?.mermaid?.theme??o}(a,r)),[r,s]);return(0,o.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){d((e=>!e));break}}));return e.observe(a,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,o.useEffect)((()=>{r&&(r.mermaid?n.Z.initialize({startOnLoad:!0,...r.mermaid,theme:c}):n.Z.initialize({startOnLoad:!0,theme:c}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),n.Z.contentLoaded())}),[r,c]),(0,o.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(n.Z.contentLoaded,0)}),[e]),o.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);