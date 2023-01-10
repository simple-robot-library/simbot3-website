"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3280],{1610:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(7294);const a="label_Yf5u";function n(e){let{type:t,href:o,children:n,title:i}=e;t=t||"primary",i=i||"";const s=r.createElement("span",{className:a,title:i},r.createElement("span",{className:`badge badge--${t}`},n));return null!=o&&o.length>0?r.createElement("a",{href:o},s):s}},5008:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var r=o(7462),a=(o(7294),o(3905)),n=(o(8209),o(1610));const i={title:"Kook\u7ec4\u4ef6"},s=void 0,m={unversionedId:"component-overview/kook/index",id:"component-overview/kook/index",title:"Kook\u7ec4\u4ef6",description:"\u9488\u5bf9 Kook \u673a\u5668\u4eba\u6240\u5b9e\u73b0\u7684\u7ec4\u4ef6\uff0c\u5bf9\u63a5\u5b98\u65b9API\uff0c\u65e0\u989d\u5916\u7684\u7b2c\u4e09\u65b9API\u4f9d\u8d56\u3002",source:"@site/docs/component-overview/kook/index.md",sourceDirName:"component-overview/kook",slug:"/component-overview/kook/",permalink:"/docs/component-overview/kook/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/component-overview/kook/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1673199811,formattedLastUpdatedAt:"Jan 8, 2023",frontMatter:{title:"Kook\u7ec4\u4ef6"},sidebar:"docs",previous:{title:"Bot\u914d\u7f6e\u6587\u4ef6",permalink:"/docs/component-overview/mirai/bot-config"},next:{title:"QQ\u9891\u9053\u7ec4\u4ef6",permalink:"/docs/component-overview/tencent-guild/"}},c={},d=[],p={toc:d};function l(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9488\u5bf9 ",(0,a.kt)("a",{parentName:"p",href:"https://www.kookapp.cn/"},"Kook")," \u673a\u5668\u4eba\u6240\u5b9e\u73b0\u7684\u7ec4\u4ef6\uff0c\u5bf9\u63a5",(0,a.kt)("a",{parentName:"p",href:"https://developer.kookapp.cn/doc/reference"},"\u5b98\u65b9API"),"\uff0c\u65e0\u989d\u5916\u7684\u7b2c\u4e09\u65b9API\u4f9d\u8d56\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6ID"),"\uff1a",(0,a.kt)(n.Z,{mdxType:"Label"},"simbot.kook")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u5f53\u524d\u72b6\u6001"),"\uff1a",(0,a.kt)(n.Z,{title:"\u65e0\u6cd5\u4fdd\u8bc1\u53ef\u7528\u6027\u3001\u672a\u6765\u53ef\u80fd\u4f1a\u9891\u53d1\u53d1\u751f\u7834\u574f\u6027\u6539\u52a8",mdxType:"Label"},"alpha"))),(0,a.kt)("admonition",{title:"\u94fe\u63a5\u5f15\u5bfc",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u7ec4\u4ef6\u4ed3\u5e93\u5730\u5740\uff1a",(0,a.kt)("a",{href:"https://github.com/simple-robot/simbot-component-kook"},(0,a.kt)("b",null,(0,a.kt)("span",{class:"bi-github"})," simple-robot/simbot-component-kook"))),(0,a.kt)("p",{parentName:"admonition"},"\u5728\u7ebfApi Doc\uff1a",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://simple-robot-library.github.io/simbot3-component-kook-apiDoc"},"https://simple-robot-library.github.io/simbot3-component-kook-apiDoc")))))}l.isMDXComponent=!0},8209:(e,t,o)=>{o.d(t,{G:()=>i});var r=o(7294),a=o(7273);const n="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return r.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const o=(0,r.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[s,m]=(0,r.useState)(!1),c=(0,r.useMemo)((()=>function(e,t){let o=e.getAttribute("data-theme")??n;o!==n&&"dark"!==o&&(o=n);const r=o===n?"default":"dark";return t?.theme?.[o]??t?.mermaid?.theme??r}(i,o)),[o,s]);return(0,r.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){m((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,r.useEffect)((()=>{o&&(o.mermaid?a.Z.initialize({startOnLoad:!0,...o.mermaid,theme:c}):a.Z.initialize({startOnLoad:!0,theme:c}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),a.Z.contentLoaded())}),[o,c]),(0,r.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(a.Z.contentLoaded,0)}),[e]),r.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);