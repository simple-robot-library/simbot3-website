(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[4547],{2991:(t,e,r)=>{"use strict";r.d(e,{Z:()=>g});var a=r(7294),i=r(6010),n=r(3438),o=r(9960),s=r(3919),c=r(5999);const m="cardContainer_fWXF",l="cardTitle_rnsV",d="cardDescription_PWke";function u(t){let{href:e,children:r}=t;return a.createElement(o.Z,{href:e,className:(0,i.Z)("card padding--lg",m)},r)}function p(t){let{href:e,icon:r,title:n,description:o}=t;return a.createElement(u,{href:e},a.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:n},r," ",n),o&&a.createElement("p",{className:(0,i.Z)("text--truncate",d),title:o},o))}function h(t){let{item:e}=t;const r=(0,n.Wl)(e);return r?a.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function k(t){let{item:e}=t;const r=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.xz)(e.docId??void 0);return a.createElement(p,{href:e.href,icon:r,title:e.label,description:e.description??(null==i?void 0:i.description)})}function f(t){let{item:e}=t;switch(e.type){case"link":return a.createElement(k,{item:e});case"category":return a.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function b(t){let{className:e}=t;const r=(0,n.jA)();return a.createElement(g,{items:r.items,className:e})}function g(t){const{items:e,className:r}=t;if(!e)return a.createElement(b,t);const o=(0,n.MN)(e);return a.createElement("section",{className:(0,i.Z)("row",r)},o.map(((t,e)=>a.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:t})))))}},9323:(t,e,r)=>{"use strict";r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var a=r(7462),i=(r(7294),r(3905)),n=(r(8209),r(2991)),o=r(3438);const s={title:"\u5feb\u901f\u5f00\u59cb",tags:["\u5feb\u901f\u5f00\u59cb"]},c=void 0,m={unversionedId:"quick-start/index",id:"quick-start/index",title:"\u5feb\u901f\u5f00\u59cb",description:"\u672c\u76ee\u5f55\u4e2d\u63d0\u4f9b\u4f7f\u7528simbot3\u8fdb\u884c\u5f00\u53d1\u7684\u4e00\u4e9b\u5feb\u901f\u5f00\u59cb\u793a\u4f8b\u3002",source:"@site/docs/quick-start/index.mdx",sourceDirName:"quick-start",slug:"/quick-start/",permalink:"/docs/quick-start/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/quick-start/index.mdx",tags:[{label:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/tags/\u5feb\u901f\u5f00\u59cb"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1682267096,formattedLastUpdatedAt:"2023\u5e744\u670823\u65e5",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",tags:["\u5feb\u901f\u5f00\u59cb"]},sidebar:"docs",previous:{title:"\u89c6\u9891\u6559\u5b66",permalink:"/docs/video-instruction/"},next:{title:"\u4f7f\u7528\u6838\u5fc3\u5e93",permalink:"/docs/quick-start/core"}},l={},d=[{value:"\u7ec4\u4ef6\u7684\u5feb\u901f\u5f00\u59cb",id:"\u7ec4\u4ef6\u7684\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u6587\u6863\u5217\u8868",id:"\u6587\u6863\u5217\u8868",level:2}],u={toc:d};function p(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u76ee\u5f55\u4e2d\u63d0\u4f9b\u4f7f\u7528simbot3\u8fdb\u884c\u5f00\u53d1\u7684\u4e00\u4e9b\u5feb\u901f\u5f00\u59cb\u793a\u4f8b\u3002"),(0,i.kt)("admonition",{title:"\u770b\u770b\u4f60\u7684",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6709\u4f18\u79c0\u7684\u9879\u76ee\u6216\u8005\u60f3\u8981\u63d0\u4f9b\u4f18\u79c0\u7684\u793a\u4f8b\u9879\u76ee\uff0c\u6b22\u8fce\u4ece ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/issues/new?assignees=ForteScarlet&labels=%E4%BD%9C%E5%93%81%E5%B1%95%E7%A4%BA&template=show.yml"},"issues")," \u63d0\u4ea4~")),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u7684\u5feb\u901f\u5f00\u59cb"},"\u7ec4\u4ef6\u7684\u5feb\u901f\u5f00\u59cb"),(0,i.kt)("p",null,"\u90e8\u5206\u7ec4\u4ef6\u4f1a\u5728\u5b83\u4eec\u7684\u5e94\u7528\u624b\u518c\u4e2d\u63d0\u4f9b\u5404\u81ea\u7684",(0,i.kt)("strong",{parentName:"p"},"\u5feb\u901f\u5f00\u59cb"),"\u6587\u6863\u3002\n\u5982\u679c\u4f60\u53ea\u5173\u5fc3\u67d0\u4e00\u4e2a\u5177\u4f53\u7684\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u8ff0\u5f15\u5bfc\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,i.kt)("th",{parentName:"tr",align:null},"\u300a\u5feb\u901f\u5f00\u59cb\u300b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/simple-robot/simbot-component-qq-guild"},"QQ\u9891\u9053")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://simple-robot.github.io/simbot-component-qq-guild/docs/quick-start/"},"\u624b\u518c: \u5feb\u901f\u5f00\u59cb"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/simple-robot/simbot-component-kook"},"KOOK")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://simple-robot.github.io/simbot-component-kook/docs/quick-start/"},"\u624b\u518c: \u5feb\u901f\u5f00\u59cb"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/simple-robot/simbot-component-mirai"},"mirai\u7ec4\u4ef6")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://component-mirai.simbot.forte.love/docs/quick-start/"},"\u624b\u518c: \u5feb\u901f\u5f00\u59cb"))))),(0,i.kt)("h2",{id:"\u6587\u6863\u5217\u8868"},"\u6587\u6863\u5217\u8868"),(0,i.kt)(n.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0},1748:(t,e,r)=>{var a={"./locale":9234,"./locale.js":9234};function i(t){var e=n(t);return r(e)}function n(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id=1748},8209:(t,e,r)=>{"use strict";r.d(e,{G:()=>o});var a=r(7294),i=r(1304);const n="light";const o=({chart:t,config:e})=>{if("undefined"==typeof window)return a.createElement("div",{className:"mermaid","data-mermaid-src":t},t);const r=(0,a.useMemo)((()=>"string"==typeof e?JSON.parse(e):e),[e]),o=document.querySelector("html"),[s,c]=(0,a.useState)(!1),m=(0,a.useMemo)((()=>function(t,e){let r=t.getAttribute("data-theme")??n;r!==n&&"dark"!==r&&(r=n);const a=r===n?"default":"dark";return e?.theme?.[r]??e?.mermaid?.theme??a}(o,r)),[r,s]);return(0,a.useEffect)((()=>{const t=new MutationObserver((t=>{for(const e of t)if("attributes"===e.type&&"data-theme"===e.attributeName){c((t=>!t));break}}));return t.observe(o,{attributes:!0}),()=>{try{t.disconnect()}catch{}}}),[]),(0,a.useEffect)((()=>{r&&(r.mermaid?i.Z.initialize({startOnLoad:!0,...r.mermaid,theme:m}):i.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((t=>{t.removeAttribute("data-processed"),t.innerHTML=t.getAttribute("data-mermaid-src")})),i.Z.contentLoaded())}),[r,m]),(0,a.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((t=>{t.removeAttribute("data-processed"),t.innerHTML=t.getAttribute("data-mermaid-src")})),setTimeout(i.Z.contentLoaded,0)}),[t]),a.createElement("div",{className:"mermaid","data-mermaid-src":t},t)}}}]);