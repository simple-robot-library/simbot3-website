(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[5645],{2991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(7294),i=n(6010),a=n(3438),o=n(9960),s=n(3919),c=n(5999);const m="cardContainer_fWXF",d="cardTitle_rnsV",l="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",m)},n)}function u(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",l),title:o},o))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??(null==i?void 0:i.description)})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(k,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function N(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(N,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},5080:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>l});var r=n(7462),i=(n(7294),n(3905)),a=(n(8209),n(2991)),o=n(3438);const s={title:"\u6807\u51c6\u5b9a\u4e49"},c=void 0,m={unversionedId:"definition/index",id:"definition/index",title:"\u6807\u51c6\u5b9a\u4e49",description:"\u672c\u7ae0\u8282\u4e0b\u4ecb\u7ecd simbot3 \u4e2d\u7684\u90e8\u5206\u5b9a\u4e49\u4ecb\u7ecd\uff0c\u4f8b\u5982\u4e00\u4e9b\u901a\u7528\u7684\u5b9a\u4e49\u53ca\u5176\u89e3\u91ca\u7b49\u3002",source:"@site/docs/definition/index.md",sourceDirName:"definition",slug:"/definition/",permalink:"/docs/definition/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/definition/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1682267096,formattedLastUpdatedAt:"2023\u5e744\u670823\u65e5",frontMatter:{title:"\u6807\u51c6\u5b9a\u4e49"},sidebar:"docs",previous:{title:"\u547d\u540d\u6982\u8ff0",permalink:"/docs/overviews/naming-overview/"},next:{title:"\u552f\u4e00\u6807\u8bc6 ID",permalink:"/docs/definition/ID"}},d={},l=[{value:"\u9605\u8bfb\u5efa\u8bae",id:"\u9605\u8bfb\u5efa\u8bae",level:2},{value:"API\u6587\u6863",id:"api\u6587\u6863",level:2},{value:"\u7ae0\u8282\u5217\u8868",id:"\u7ae0\u8282\u5217\u8868",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u7ae0\u8282\u4e0b\u4ecb\u7ecd ",(0,i.kt)("inlineCode",{parentName:"p"},"simbot3")," \u4e2d\u7684\u90e8\u5206",(0,i.kt)("strong",{parentName:"p"},"\u5b9a\u4e49\u4ecb\u7ecd"),"\uff0c\u4f8b\u5982\u4e00\u4e9b\u901a\u7528\u7684\u5b9a\u4e49\u53ca\u5176\u89e3\u91ca\u7b49\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5b9a\u4e49\u4ecb\u7ecd"),"\u4e3b\u8981\u4ee5\u4ecb\u7ecd\u67d0\u4e9b\u5e38\u89c1\u7684\u3001\u57fa\u7840\u7684\u7c7b\u578b\u4e2d\u5404\u5c5e\u6027\u3001\u51fd\u6570\u7b49\u5185\u5bb9\uff0c\u6765\u5e2e\u52a9\u4f60\u7406\u89e3\u8fd9\u4e9b\u7c7b\u578b\u3002"),(0,i.kt)("admonition",{title:"\u6709\u6240\u51fa\u5165...",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6587\u6863\u4e0e\u5b9e\u9645\u4ee3\u7801\u8868\u73b0\u4e4b\u95f4\u5b58\u5728\u51fa\u5165\uff0c\u4ee5",(0,i.kt)("strong",{parentName:"p"},"\u5b9e\u9645\u4ee3\u7801\u8868\u73b0"),"\u4e3a\u6700\u7ec8\u6548\u679c\uff0c\n\u5e76\u5c06\u6b64\u60c5\u51b5\u53cd\u9988\u5230\u5f53\u524d\u6587\u6863\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/simple-robot-library/simbot3-website/issues"},(0,i.kt)("strong",{parentName:"a"},"Issues"))," \u5904\u3002"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"\u8fd9\u53ef\u80fd\u662f\u4ee3\u7801\u7684\u8868\u73b0bug\uff0c\u4e5f\u53ef\u80fd\u662f\u6587\u6863\u7684\u63cf\u8ff0\u9519\u8bef\u3002"))),(0,i.kt)("h2",{id:"\u9605\u8bfb\u5efa\u8bae"},"\u9605\u8bfb\u5efa\u8bae"),(0,i.kt)("p",null,'\u300a\u6807\u51c6\u5b9a\u4e49\u300b\u7ae0\u8282\u5185\u7684\u4e1c\u897f\u5e76\u975e\u9700\u8981\u5168\u90e8\u9605\u8bfb\u4e86\u89e3\uff0c\u5b83\u4eec\u66f4\u503e\u5411\u4e8e"\u67e5\u9605"\uff1b\u5f53\u4f60\u9047\u5230\u4e86\u4e00\u4e9b\u4e0d\u592a\u660e\u767d\u7528\u610f\u7684\u7c7b\u578b\u65f6\uff0c\n\u53ef\u4ee5\u6765\u5bfb\u627e\u6b64\u7c7b\u578b\u7684\u63cf\u8ff0\u3002'),(0,i.kt)("admonition",{title:"\u6700\u597d\u7684\u9009\u62e9...",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff01")," \u4e86\u89e3\u4e00\u4e2a\u7c7b\u578b\u3001\u5c5e\u6027\u6216API\u7684\u6700\u597d\u65b9\u5f0f\u6c38\u8fdc\u662f\u76f4\u63a5",(0,i.kt)("strong",{parentName:"p"},"\u9605\u8bfb\u6e90\u7801\u6216\u6587\u6863\u6ce8\u91ca"),"\uff0c\u5176\u6b21\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"API\u6587\u6863"),'\uff0c\n\u800c\u4f9d\u8d56\u7c7b\u4f3c\u4e8e\u6b64\u7ae0\u8282\u7684"\u6807\u51c6\u5b9a\u4e49\u624b\u518c"\u5219\u4e3a',(0,i.kt)("strong",{parentName:"p"},"\u4e0b\u9009"),"\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u624b\u518c\u4e5f\u8bb8\u4f1a\u5728\u4e3a\u4f60\u63d0\u4f9b\u5404API\u7684\u4f7f\u7528\u4e0a\u63d0\u4f9b\u6709\u6548\u5e2e\u52a9\uff0c\u4f46\u662f\u5374\u4e0d\u5e94\u7528\u6765\u4f5c\u4e3a\u5b9a\u4e49\u63cf\u8ff0\u7684\u67e5\u9605\u624b\u518c\u3002\u6e90\u7801\u4e2d\u7684\u6587\u6863\u6ce8\u91ca\u548c\u81ea\u52a8\u6784\u5efa\u7684API\u6587\u6863\u6c38\u8fdc\u6700\u8d34\u5408\u5b9e\u9645\u60c5\u51b5\uff0c\u4e5f\u4f1a\u66f4\u52a0\u5168\u9762\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u4e00\u70b9\u6211\u53ef\u80fd\u4f1a\u5728\u6587\u6863\u5404\u4e2a\u5730\u65b9\u63d0\u9192\u5f88\u591a\u6b21\uff0c\u5e0c\u671b\u4f60\u80fd\u660e\u767d\u6211\u4eec\u7684\u7528\u610f\u3002"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"\u953b\u70bc\u4f60\u7684\u6e90\u7801\u9605\u8bfb\u80fd\u529b\u3002"))),(0,i.kt)("h2",{id:"api\u6587\u6863"},"API\u6587\u6863"),(0,i.kt)("p",null,"\u5f53\u524d\u7f51\u7ad9\u4e2d\u7684\u6587\u6863\u5185\u5bb9",(0,i.kt)("strong",{parentName:"p"},"\u6c38\u8fdc"),"\u4e5f\u8d76\u4e0d\u4e0a\u5b9e\u9645\u4ee3\u7801\u4e2d\u7684\u5185\u5bb9\u3002\u56e0\u6b64\u6211\u4eec\u66f4\u5efa\u8bae\u4f60\u4f18\u5148\u524d\u5f80\u9605\u8bfb\u6e90\u7801\u6216\u6839\u636e\u7248\u672c\u53d1\u5e03\u81ea\u52a8\u751f\u6210\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.simbot.forte.love"},"API\u6587\u6863"),"\uff0c\n\u800c\u4ec5\u4ee5\u6b64\u7ad9\u4e3a",(0,i.kt)("strong",{parentName:"p"},"\u8f85\u52a9"),"\u4f5c\u7528\u3002"),(0,i.kt)("h2",{id:"\u7ae0\u8282\u5217\u8868"},"\u7ae0\u8282\u5217\u8868"),(0,i.kt)(a.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0},1748:(e,t,n)=>{var r={"./locale":9234,"./locale.js":9234};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=1748},8209:(e,t,n)=>{"use strict";n.d(t,{G:()=>o});var r=n(7294),i=n(1304);const a="light";const o=({chart:e,config:t})=>{if("undefined"==typeof window)return r.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const n=(0,r.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),o=document.querySelector("html"),[s,c]=(0,r.useState)(!1),m=(0,r.useMemo)((()=>function(e,t){let n=e.getAttribute("data-theme")??a;n!==a&&"dark"!==n&&(n=a);const r=n===a?"default":"dark";return t?.theme?.[n]??t?.mermaid?.theme??r}(o,n)),[n,s]);return(0,r.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){c((e=>!e));break}}));return e.observe(o,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,r.useEffect)((()=>{n&&(n.mermaid?i.Z.initialize({startOnLoad:!0,...n.mermaid,theme:m}):i.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),i.Z.contentLoaded())}),[n,m]),(0,r.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(i.Z.contentLoaded,0)}),[e]),r.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);