(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[8653],{2991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(7294),i=n(6010),a=n(3438),o=n(9960),s=n(3919),c=n(5999);const d="cardContainer_fWXF",l="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",d)},n)}function p(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",m),title:o},o))}function v(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??(null==i?void 0:i.description)})}function k(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(v,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(k,{item:e})))))}},1610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(7294);const i="label_Yf5u";function a(e){let{type:t,href:n,children:a,title:o}=e;t=t||"primary",o=o||"";const s=r.createElement("span",{className:i,title:o},r.createElement("span",{className:`badge badge--${t}`},a));return null!=n&&n.length>0?r.createElement("a",{href:n},s):s}},6610:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905)),a=(n(8209),n(1610)),o=n(2991),s=n(3438);const c={title:"\u6807\u51c6\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},d=void 0,l={unversionedId:"definition/event-overview/standard-event/index",id:"definition/event-overview/standard-event/index",title:"\u6807\u51c6\u4e8b\u4ef6",description:"simbot3\u6838\u5fc3\u5e93\u6240\u63d0\u4f9b\u7684\u6807\u51c6\u4e8b\u4ef6\u5b9a\u4e49\u3002",source:"@site/docs/definition/event-overview/standard-event/index.md",sourceDirName:"definition/event-overview/standard-event",slug:"/definition/event-overview/standard-event/",permalink:"/docs/definition/event-overview/standard-event/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/definition/event-overview/standard-event/index.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1686029262,formattedLastUpdatedAt:"2023\u5e746\u67086\u65e5",frontMatter:{title:"\u6807\u51c6\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587",permalink:"/docs/definition/event-overview/event-processing-context/"},next:{title:"\u5bf9\u8c61\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/objective-event/"}},m={},u=[{value:"\u6587\u6863\u5c55\u73b0",id:"\u6587\u6863\u5c55\u73b0",level:2},{value:"\u7ae0\u8282\u5217\u8868",id:"\u7ae0\u8282\u5217\u8868",level:2}],p={toc:u};function v(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"simbot3\u6838\u5fc3\u5e93\u6240\u63d0\u4f9b\u7684\u6807\u51c6\u4e8b\u4ef6\u5b9a\u4e49\u3002"),(0,i.kt)("h2",{id:"\u6587\u6863\u5c55\u73b0"},"\u6587\u6863\u5c55\u73b0"),(0,i.kt)("p",null,"\u5728\u4e0b\u8ff0\u7ae0\u8282\u4e2d\uff0c\u4f60\u53ef\u80fd\u4f1a\u770b\u5230\u7c7b\u4f3c\u4e8e\u4e0b\u9762\u8fd9\u79cd\u7684\u5c55\u73b0\u5f62\u5f0f\uff1a"),(0,i.kt)("hr",null),(0,i.kt)("blockquote",null,(0,i.kt)("h3",{parentName:"blockquote",id:"fooevent"},"FooEvent"),(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)(a.Z,{mdxType:"Label"},"api.foo"),(0,i.kt)(a.Z,{type:"success",mdxType:"Label"},"BarEvent"),(0,i.kt)(a.Z,{type:"success",mdxType:"Label"},"TarEvent")),(0,i.kt)("p",{parentName:"blockquote"},"\u8fd9\u662f\u4e00\u6bb5\u8bf4\u660e")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u8fd9\u4ee3\u8868\u6587\u6863\u4e2d\u63cf\u8ff0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"FooEvent")," \u7684 key.id \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"api.foo")," \uff0c\u5e76\u4e14\u5b83\u7ee7\u627f/\u5b9e\u73b0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"BarEvent")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"TarEvent"),"\u3002\u5e76\u4e14\u5bf9\u4e8e\u6b64\u4e8b\u4ef6\u7684\u63cf\u8ff0\uff0c\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u60c5\u51b5\u5219\u4e0d\u4f1a\u5bf9\u7ee7\u627f\u4e8b\u4ef6\u4e2d\u7684\u91cd\u590d\u5185\u5bb9\u8fdb\u884c\u8d58\u8ff0\u3002\n\u5f53\u7136\uff0c\u8fd9\u4e5f\u4e0d\u4e00\u5b9a\u662f\u4e8b\u4ef6\u7c7b\u578b\uff0c\u5b83\u4ee3\u8868\u7684\u4e5f\u53ef\u80fd\u662f\u5176\u4ed6\u4efb\u4f55\u53ef\u80fd\u88ab\u5b9e\u73b0/\u7ee7\u627f\u7684\u7c7b\u578b\uff0c\u4f8b\u5982 ",(0,i.kt)(a.Z,{type:"success",mdxType:"Label"},"FooContainer"),"\u3002"),(0,i.kt)("p",null,"\u6240\u6709\u4e8b\u4ef6\u5168\u90e8\u9ed8\u8ba4\u5b9e\u73b0 ",(0,i.kt)(a.Z,{type:"success",mdxType:"Label"},"Event")," \u7c7b\u578b\u3002\n\u56e0\u6b64\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," \u7684\u5b9e\u73b0\u5c06\u4e0d\u4f1a\u518d\u8fdb\u884c\u6807\u8bb0\u3002"),(0,i.kt)("admonition",{title:"\u51fa\u5165",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u51fa\u73b0\u4efb\u4f55\u6587\u6863\u4e0e\u5b9e\u9645\u4ee3\u7801\u8868\u73b0\u4e0d\u7b26\u7684\u60c5\u51b5\uff0c\u4f18\u5148\u4ee5\u5b9e\u9645\u4ee3\u7801\u8868\u73b0\u4e3a\u51c6\uff0c\n\u5e76\u53ca\u65f6\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/simple-robot-library/simbot3-website/issues/"},(0,i.kt)("strong",{parentName:"a"},"issue"))," \u8fdb\u884c\u53cd\u9988\u3002")),(0,i.kt)("h2",{id:"\u7ae0\u8282\u5217\u8868"},"\u7ae0\u8282\u5217\u8868"),(0,i.kt)(o.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}v.isMDXComponent=!0},1748:(e,t,n)=>{var r={"./locale":9234,"./locale.js":9234};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=1748},8209:(e,t,n)=>{"use strict";n.d(t,{G:()=>o});var r=n(7294),i=n(1304);const a="light";const o=({chart:e,config:t})=>{if("undefined"==typeof window)return r.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const n=(0,r.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),o=document.querySelector("html"),[s,c]=(0,r.useState)(!1),d=(0,r.useMemo)((()=>function(e,t){let n=e.getAttribute("data-theme")??a;n!==a&&"dark"!==n&&(n=a);const r=n===a?"default":"dark";return t?.theme?.[n]??t?.mermaid?.theme??r}(o,n)),[n,s]);return(0,r.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){c((e=>!e));break}}));return e.observe(o,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,r.useEffect)((()=>{n&&(n.mermaid?i.Z.initialize({startOnLoad:!0,...n.mermaid,theme:d}):i.Z.initialize({startOnLoad:!0,theme:d}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),i.Z.contentLoaded())}),[n,d]),(0,r.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(i.Z.contentLoaded,0)}),[e]),r.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);