(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[283],{2991:(e,t,r)=>{"use strict";r.d(t,{Z:()=>k});var n=r(7294),i=r(6010),o=r(3438),a=r(9960),c=r(3919),s=r(5999);const m="cardContainer_fWXF",d="cardTitle_rnsV",l="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",m)},r)}function p(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",l),title:a},a))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:null==i?void 0:i.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}},8012:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>m,toc:()=>l});var n=r(7462),i=(r(7294),r(3905)),o=(r(8209),r(2991)),a=r(3438);const c={title:"\u7ec4\u4ef6\u6982\u89c8"},s=void 0,m={unversionedId:"component-overview/index",id:"component-overview/index",title:"\u7ec4\u4ef6\u6982\u89c8",description:"\u672c\u7ae0\u8282\u4e0b\u5c06\u4f1a\u63d0\u4f9b\u6240\u6709\u7531 Simple Robot \u8fdb\u884c\u7ef4\u62a4\u7684 \u7ec4\u4ef6 \u6240\u76f8\u5173\u7684\u6587\u6863\u5185\u5bb9\u3002",source:"@site/docs/component-overview/index.md",sourceDirName:"component-overview",slug:"/component-overview/",permalink:"/docs/component-overview/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/component-overview/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1676044030,formattedLastUpdatedAt:"2023\u5e742\u670810\u65e5",frontMatter:{title:"\u7ec4\u4ef6\u6982\u89c8"},sidebar:"docs",previous:{title:"\u6253\u5305",permalink:"/docs/basic/package/"},next:{title:"Mirai\u7ec4\u4ef6",permalink:"/docs/component-overview/mirai/"}},d={},l=[{value:"\u9644\u5c5e\u5e93",id:"\u9644\u5c5e\u5e93",level:2},{value:"\u7ae0\u8282\u5217\u8868",id:"\u7ae0\u8282\u5217\u8868",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u7ae0\u8282\u4e0b\u5c06\u4f1a\u63d0\u4f9b\u6240\u6709\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"Simple Robot")," \u8fdb\u884c\u7ef4\u62a4\u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6")," \u6240\u76f8\u5173\u7684\u6587\u6863\u5185\u5bb9\u3002"),(0,i.kt)("h2",{id:"\u9644\u5c5e\u5e93"},"\u9644\u5c5e\u5e93"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 GitHub \u7684 ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/simple-robot"},"Simple Robot \u9644\u5c5e\u5e93")," \u7ec4\u7ec7\u9996\u9875\u627e\u5230\u4e0eSimple Robot\u76f8\u5173\u7684\u5404",(0,i.kt)("strong",{parentName:"p"},"\u9644\u5c5e"),"\u7684\u4ee3\u7801\u4ed3\u5e93\u3002\n\u8fd9\u5176\u4e2d\u4fbf\u5305\u62ec\u4e0b\u8ff0\u7684\u5404\u7ec4\u4ef6\u7684\u4ed3\u5e93\u3002"),(0,i.kt)("admonition",{title:"\u72ec\u7acb...",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u6709\u5173\u4e8e\u7ec4\u4ef6\u7684\u6587\u6863\uff0c\u672a\u6765\u53ef\u80fd\u4f1a\u5404\u81ea\u72ec\u7acb\u4e3a\u5355\u72ec\u7684\u7f51\u7ad9\u3002")),(0,i.kt)("h2",{id:"\u7ae0\u8282\u5217\u8868"},"\u7ae0\u8282\u5217\u8868"),(0,i.kt)("admonition",{title:"\u72ec\u7acb\u6587\u6863",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8003\u8651\u5230\u76ee\u524d\u6240\u6709\u7684\u5b98\u65b9\u7ec4\u4ef6\u7248\u672c\u66f4\u8fed\u662f\u8fd1\u4f3c\u4e8e\u72ec\u7acb\u7684\uff0c\u56e0\u6b64\u672a\u6765\u4e0b\u8ff0\u7ec4\u4ef6 ",(0,i.kt)("strong",{parentName:"p"},"\u6709\u53ef\u80fd")," \u4f1a\u5404\u81ea\u4f7f\u7528\u72ec\u7acb\u7684\u6587\u6863\u5730\u5740\u8fdb\u884c\u90e8\u7f72\u3002")),(0,i.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0},1748:(e,t,r)=>{var n={"./locale":9234,"./locale.js":9234};function i(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=1748},8209:(e,t,r)=>{"use strict";r.d(t,{G:()=>a});var n=r(7294),i=r(1304);const o="light";const a=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const r=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),a=document.querySelector("html"),[c,s]=(0,n.useState)(!1),m=(0,n.useMemo)((()=>function(e,t){let r=e.getAttribute("data-theme")??o;r!==o&&"dark"!==r&&(r=o);const n=r===o?"default":"dark";return t?.theme?.[r]??t?.mermaid?.theme??n}(a,r)),[r,c]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){s((e=>!e));break}}));return e.observe(a,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{r&&(r.mermaid?i.Z.initialize({startOnLoad:!0,...r.mermaid,theme:m}):i.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),i.Z.contentLoaded())}),[r,m]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(i.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);