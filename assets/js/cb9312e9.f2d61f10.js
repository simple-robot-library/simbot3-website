"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[6644],{2991:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(7294),s=r(6010),i=r(3438),n=r(9960),o=r(3919),c=r(5999);const m="cardContainer_fWXF",l="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return a.createElement(n.Z,{href:t,className:(0,s.Z)("card padding--lg",m)},r)}function p(e){let{href:t,icon:r,title:i,description:n}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,s.Z)("text--truncate",l),title:i},r," ",i),n&&a.createElement("p",{className:(0,s.Z)("text--truncate",d),title:n},n))}function h(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?a.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(t.docId??void 0);return a.createElement(p,{href:t.href,icon:r,title:t.label,description:null==s?void 0:s.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,i.jA)();return a.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return a.createElement(k,e);const n=(0,i.MN)(t);return a.createElement("section",{className:(0,s.Z)("row",r)},n.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(b,{item:e})))))}},6261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var a=r(7462),s=(r(7294),r(3905)),i=(r(8209),r(2991));const n={title:"\u5feb\u901f\u5f00\u59cb",tags:["\u5feb\u901f\u5f00\u59cb"]},o=void 0,c={unversionedId:"quick-start-faster/index",id:"quick-start-faster/index",title:"\u5feb\u901f\u5f00\u59cb",description:"simbot3\u76ee\u524d\u63d0\u4f9b\u4e86\u4e00\u4e9b\u6216\u8bb8\u4f1a\u5bf9\u4f60\u6709\u5e2e\u52a9\u7684\u793a\u4f8b\u9879\u76ee\u96c6\u6216\u7528\u4e8e\u5feb\u901f\u6784\u5efa\u7684\u9879\u76ee\u539f\u578b\u3002",source:"@site/docs/quick-start-faster/index.mdx",sourceDirName:"quick-start-faster",slug:"/quick-start-faster/",permalink:"/docs/quick-start-faster/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/quick-start-faster/index.mdx",tags:[{label:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/tags/\u5feb\u901f\u5f00\u59cb"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1675525879,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",tags:["\u5feb\u901f\u5f00\u59cb"]},sidebar:"docs",previous:{title:"Spring Boot Starter",permalink:"/docs/quick-start/spring-boot-starter"},next:{title:"Maven & Java",permalink:"/docs/quick-start-faster/maven-java"}},m={},l=[{value:"\u793a\u4f8b\u9879\u76ee\u96c6",id:"\u793a\u4f8b\u9879\u76ee\u96c6",level:2},{value:"\u9879\u76ee\u539f\u578b",id:"\u9879\u76ee\u539f\u578b",level:2},{value:"\u7591\u8651",id:"\u7591\u8651",level:2}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"simbot3\u76ee\u524d\u63d0\u4f9b\u4e86\u4e00\u4e9b\u6216\u8bb8\u4f1a\u5bf9\u4f60\u6709\u5e2e\u52a9\u7684",(0,s.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-examples"},(0,s.kt)("strong",{parentName:"a"},"\u793a\u4f8b\u9879\u76ee\u96c6")),"\u6216\u7528\u4e8e\u5feb\u901f\u6784\u5efa\u7684",(0,s.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-archetypes"},(0,s.kt)("strong",{parentName:"a"},"\u9879\u76ee\u539f\u578b")),"\u3002"),(0,s.kt)("h2",{id:"\u793a\u4f8b\u9879\u76ee\u96c6"},"\u793a\u4f8b\u9879\u76ee\u96c6"),(0,s.kt)("p",null,"\u524d\u5f80 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-examples"},"simple-robot/simbot-examples")," \u67e5\u770b\u5404\u79cd\u793a\u4f8b\u9879\u76ee\u5e76\u5feb\u901f\u4e0a\u624b\u3002"),(0,s.kt)("h2",{id:"\u9879\u76ee\u539f\u578b"},"\u9879\u76ee\u539f\u578b"),(0,s.kt)("p",null,"\u524d\u5f80 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-archetypes"},"simple-robot/simbot-archetypes")," \u67e5\u770b\u76ee\u524d\u652f\u6301\u7684\u9879\u76ee\u539f\u578b\u5e76\u901a\u8fc7",(0,s.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Maven"),"\u5feb\u901f\u6784\u5efa\u6837\u677f\u9879\u76ee\u3002"),(0,s.kt)("h2",{id:"\u7591\u8651"},"\u7591\u8651"),(0,s.kt)("p",null,"\u5982\u679c\u5728\u4f7f\u7528\u4e2d\u9047\u5230\u4e86\u4e0d\u660e\u767d\u7684\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u901b\u901b\u5f53\u524d\u6587\u6863\u6216\u8005\u524d\u5f80",(0,s.kt)("a",{parentName:"p",href:"https://github.com/orgs/simple-robot/discussions"},"\u793e\u533a"),"\u6216",(0,s.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/issues"},"issues"),"\u770b\u770b\u662f\u4e0d\u662f\u5df2\u7ecf\u6709\u4eba\u63d0\u5230\u6b64\u95ee\u9898\u4e86\u3002\n\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e09\u4e2a\u5730\u65b9\u8db3\u4ee5\u89e3\u51b3\u5927\u91cf\u5e38\u89c1\u95ee\u9898\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u89e3\u51b3\uff0c\u4f60\u53ef\u4ee5\u4ece",(0,s.kt)("a",{parentName:"p",href:"https://github.com/orgs/simple-robot/discussions"},"\u793e\u533a"),"\u53d1\u8d77\u4e00\u4e2a\u65b0",(0,s.kt)("strong",{parentName:"p"},"\u7591\u95ee"),"\u6216\u5728",(0,s.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/issues"},"issues"),(0,s.kt)("strong",{parentName:"p"},"\u53cd\u9988"),"\u4e00\u4e2a\u5f02\u5e38\u6216\u9519\u8bef\u3002"),(0,s.kt)("hr",null),(0,s.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},8209:(e,t,r)=>{r.d(t,{G:()=>n});var a=r(7294),s=r(7273);const i="light";const n=({chart:e,config:t})=>{if("undefined"==typeof window)return a.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const r=(0,a.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),n=document.querySelector("html"),[o,c]=(0,a.useState)(!1),m=(0,a.useMemo)((()=>function(e,t){let r=e.getAttribute("data-theme")??i;r!==i&&"dark"!==r&&(r=i);const a=r===i?"default":"dark";return t?.theme?.[r]??t?.mermaid?.theme??a}(n,r)),[r,o]);return(0,a.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){c((e=>!e));break}}));return e.observe(n,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,a.useEffect)((()=>{r&&(r.mermaid?s.Z.initialize({startOnLoad:!0,...r.mermaid,theme:m}):s.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),s.Z.contentLoaded())}),[r,m]),(0,a.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(s.Z.contentLoaded,0)}),[e]),a.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);