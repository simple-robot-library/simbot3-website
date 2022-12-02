"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[283],{2991:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(7294),i=r(6010),a=r(3438),o=r(9960),c=r(3919),s=r(5999);const m="cardContainer_fWXF",d="cardTitle_rnsV",l="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",m)},r)}function p(e){let{href:t,icon:r,title:a,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:a},r," ",a),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",l),title:o},o))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:null==i?void 0:i.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(v,e);const o=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},8012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>m,toc:()=>l});var n=r(7462),i=(r(7294),r(3905)),a=(r(8209),r(2991)),o=r(3438);const c={title:"\u7ec4\u4ef6\u6982\u89c8"},s=void 0,m={unversionedId:"component-overview/index",id:"component-overview/index",title:"\u7ec4\u4ef6\u6982\u89c8",description:"\u672c\u7ae0\u8282\u4e0b\u5c06\u4f1a\u63d0\u4f9b\u6240\u6709\u7531 Simple Robot \u8fdb\u884c\u7ef4\u62a4\u7684 \u7ec4\u4ef6 \u6240\u76f8\u5173\u7684\u6587\u6863\u5185\u5bb9\u3002",source:"@site/docs/component-overview/index.md",sourceDirName:"component-overview",slug:"/component-overview/",permalink:"/docs/component-overview/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/component-overview/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1669997681,formattedLastUpdatedAt:"Dec 2, 2022",frontMatter:{title:"\u7ec4\u4ef6\u6982\u89c8"},sidebar:"docs",previous:{title:"\u6253\u5305",permalink:"/docs/basic/package/"},next:{title:"\u7ec4\u4ef6\u534f\u540c",permalink:"/docs/component-overview/synergy/"}},d={},l=[{value:"\u9644\u5c5e\u5e93",id:"\u9644\u5c5e\u5e93",level:2},{value:"\u7ae0\u8282\u5217\u8868",id:"\u7ae0\u8282\u5217\u8868",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u7ae0\u8282\u4e0b\u5c06\u4f1a\u63d0\u4f9b\u6240\u6709\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"Simple Robot")," \u8fdb\u884c\u7ef4\u62a4\u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6")," \u6240\u76f8\u5173\u7684\u6587\u6863\u5185\u5bb9\u3002"),(0,i.kt)("h2",{id:"\u9644\u5c5e\u5e93"},"\u9644\u5c5e\u5e93"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 GitHub \u7684 ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/simple-robot"},"Simple Robot \u9644\u5c5e\u5e93")," \u7ec4\u7ec7\u9996\u9875\u627e\u5230\u4e0eSimple Robot\u76f8\u5173\u7684\u5404",(0,i.kt)("strong",{parentName:"p"},"\u9644\u5c5e"),"\u7684\u4ee3\u7801\u4ed3\u5e93\u3002\n\u8fd9\u5176\u4e2d\u4fbf\u5305\u62ec\u4e0b\u8ff0\u7684\u5404\u7ec4\u4ef6\u7684\u4ed3\u5e93\u3002"),(0,i.kt)("h2",{id:"\u7ae0\u8282\u5217\u8868"},"\u7ae0\u8282\u5217\u8868"),(0,i.kt)("admonition",{title:"\u72ec\u7acb\u6587\u6863",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8003\u8651\u5230\u76ee\u524d\u6240\u6709\u7684\u5b98\u65b9\u7ec4\u4ef6\u7248\u672c\u66f4\u8fed\u662f\u8fd1\u4f3c\u4e8e\u72ec\u7acb\u7684\uff0c\u56e0\u6b64\u672a\u6765\u4e0b\u8ff0\u7ec4\u4ef6 ",(0,i.kt)("strong",{parentName:"p"},"\u6709\u53ef\u80fd")," \u4f1a\u5404\u81ea\u4f7f\u7528\u72ec\u7acb\u7684\u6587\u6863\u5730\u5740\u8fdb\u884c\u90e8\u7f72\u3002")),(0,i.kt)(a.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0},8209:(e,t,r)=>{r.d(t,{G:()=>o});var n=r(7294),i=r(7273);const a="light";const o=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const r=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),o=document.querySelector("html"),[c,s]=(0,n.useState)(!1),m=(0,n.useMemo)((()=>function(e,t){let r=e.getAttribute("data-theme")??a;r!==a&&"dark"!==r&&(r=a);const n=r===a?"default":"dark";return t?.theme?.[r]??t?.mermaid?.theme??n}(o,r)),[r,c]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){s((e=>!e));break}}));return e.observe(o,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{r&&(r.mermaid?i.Z.initialize({startOnLoad:!0,...r.mermaid,theme:m}):i.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),i.Z.contentLoaded())}),[r,m]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(i.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);