"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[1250],{2991:(e,t,r)=>{r.d(t,{Z:()=>f});var i=r(7294),a=r(6010),n=r(3438),o=r(9960),s=r(3919),l=r(5999);const m="cardContainer_fWXF",c="cardTitle_rnsV",d="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return i.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",m)},r)}function u(e){let{href:t,icon:r,title:n,description:o}=e;return i.createElement(p,{href:t},i.createElement("h2",{className:(0,a.Z)("text--truncate",c),title:n},r," ",n),o&&i.createElement("p",{className:(0,a.Z)("text--truncate",d),title:o},o))}function k(e){let{item:t}=e;const r=(0,n.Wl)(t);return r?i.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,n.xz)(t.docId??void 0);return i.createElement(u,{href:t.href,icon:r,title:t.label,description:null==a?void 0:a.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(b,{item:t});case"category":return i.createElement(k,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,n.jA)();return i.createElement(f,{items:r.items,className:t})}function f(e){const{items:t,className:r}=e;if(!t)return i.createElement(v,e);const o=(0,n.MN)(t);return i.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(h,{item:e})))))}},4926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var i=r(7462),a=(r(7294),r(3905)),n=r(8209),o=r(2991),s=r(3438);const l={title:"\u6a21\u5757\u6982\u8ff0"},m=void 0,c={unversionedId:"overviews/module-overview/index",id:"overviews/module-overview/index",title:"\u6a21\u5757\u6982\u8ff0",description:"simbot\u6bcf\u4e00\u4ee3\u7248\u672c\u7684\u8fed\u4ee3\uff0c\u4e0d\u4ec5\u4ec5\u662f\u529f\u80fd\u7684\u5927\u7bc7\u5e45\u66f4\u65b0\u4e0e\u4f18\u5316\uff0c\u66f4\u662f\u5bf9\u4e8e\u6211\u4eec\u56e2\u961f\u6210\u957f\u7684\u4f50\u8bc1\u3002",source:"@site/docs/overviews/module-overview/index.mdx",sourceDirName:"overviews/module-overview",slug:"/overviews/module-overview/",permalink:"/docs/overviews/module-overview/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/overviews/module-overview/index.mdx",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1670755923,formattedLastUpdatedAt:"Dec 11, 2022",frontMatter:{title:"\u6a21\u5757\u6982\u8ff0"},sidebar:"docs",previous:{title:"Spring Boot Starter",permalink:"/docs/quick-start/spring-boot-starter"},next:{title:"api\u6a21\u5757",permalink:"/docs/overviews/module-overview/api"}},d={},p=[{value:"\u6a21\u5757",id:"\u6a21\u5757",level:2},{value:"api",id:"api",level:3},{value:"core",id:"core",level:3},{value:"boot",id:"boot",level:3},{value:"spring boot starter",id:"spring-boot-starter",level:3},{value:"\u7ae0\u8282\u5217\u8868",id:"\u7ae0\u8282\u5217\u8868",level:2}],u={toc:p};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"simbot\u6bcf\u4e00\u4ee3\u7248\u672c\u7684\u8fed\u4ee3\uff0c\u4e0d\u4ec5\u4ec5\u662f\u529f\u80fd\u7684\u5927\u7bc7\u5e45\u66f4\u65b0\u4e0e\u4f18\u5316\uff0c\u66f4\u662f\u5bf9\u4e8e\u6211\u4eec\u56e2\u961f\u6210\u957f\u7684\u4f50\u8bc1\u3002"),(0,a.kt)("p",null,"simbot3\u5c06\u4f1a\u662f\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"http://gradle.org/"},"gradle")," \u6784\u5efa\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/"},"kotlin")," \u8bed\u8a00\u591a\u6a21\u5757\u9879\u76ee\u3002"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u591a\u5e73\u53f0?"),"\u6211\u4eec\u6700\u7ec8\u9009\u62e9\u653e\u5f03\u5bf9\u591a\u5e73\u53f0\u7684\u652f\u6301\u3002simbot3\u7248\u672c\u5c06\u4e0d\u4f1a\u8003\u8651\u63d0\u4f9b\u5176\u4ed6\u5e73\u53f0\uff08\u4f8b\u5982JS\u6216native\uff09\u7684\u652f\u6301\u3002\u4e5f\u8bb8...\u672a\u6765\u7684\u7248\u672c\u4f1a\u7ee7\u7eed\u8003\u8651\u5427\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"simbot3\u6b63\u5f0f\u7248\u53d1\u5e03\u4e4b\u524d\uff0c\u4f60\u53ef\u4ee5\u5bf9\u76ee\u524dsimbot3\u6587\u6863\u6216\u4ee3\u7801\u4e2d\u51fa\u73b0\u7684\u6240\u6709\u5185\u5bb9\u63d0\u51fa\u4f60\u5b9d\u8d35\u7684\u5efa\u8bae\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u56e2\u961f\u7684\u6280\u672f\u6c34\u5e73\u4e0e\u7cbe\u529b\u5341\u5206\u6709\u9650\uff0c\u80af\u5b9a\u4f1a\u51fa\u73b0\u5f88\u591a\u4e0d\u591f\u5b8c\u5584\u7684\u5185\u5bb9\uff0c\u4e5f\u8bb8\u4f60\u63d0\u51fa\u7684\u5efa\u8bae\u610f\u89c1\u80fd\u591f\u62ef\u6551\u5728\u672a\u6765\u7684simbot\u4e8e\u6c34\u6df1\u706b\u70ed\u4e4b\u4e2d\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u4ee5\u901a\u8fc7\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/issues"},"issue"),"\n\u6216\u8005 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/discussions"},"github\u8ba8\u8bba\u533a")," \u4e2d\u63d0\u51fa\u5efa\u8bae\uff0c\u975e\u5e38\u611f\u8c22\u3002")),(0,a.kt)("h2",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,a.kt)("h3",{id:"api"},"api"),(0,a.kt)("p",null,"api\u6a21\u5757\u662f\u4e3a\u6574\u4e2asimbot\u5b9a\u4e49\u6700\u57fa\u7840\u7684\u63a5\u53e3\u89c4\u8303\u7684\u591a\u5e73\u53f0\u6a21\u5757\u3002"),(0,a.kt)("p",null,"\u5176\u63d0\u4f9bsimbot\u4e2d\u7edd\u5927\u591a\u6570\u901a\u7528\u7684\u6807\u51c6\u63a5\u53e3\u5b9a\u4e49\uff0c\u4e14\u4e0d\u63d0\u4f9b ",(0,a.kt)("strong",{parentName:"p"},"\u4efb\u4f55\u5b9e\u73b0")," \uff08\u9664\u4e86\u4e00\u4e9b\u9ed8\u8ba4\u5b9e\u73b0\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"object"),"\u6216\u4e0d\u9700\u8981\u5916\u90e8\u5b9e\u73b0\u7684\u5c01\u95ed\u5b9e\u4f8b\u96c6\uff0c\u4f8b\u5982 ",(0,a.kt)("a",{parentName:"p",href:"../../defition/ID.md"},"\u552f\u4e00\u6807\u8bc6")," \uff09\u3002"),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u4ecesimbot3\u5f00\u59cb\uff0csimbot\u5c06\u8fdb\u884c\u5168\u5f02\u6b65\u6539\u9020\uff0c\u56e0\u6b64api\u6a21\u5757\u6240\u63d0\u4f9b\u7684\u7edd\u5927\u591a\u6570\u63a5\u53e3\u90fd\u4f1a\u4f18\u5148\u8003\u8651\u5f02\u6b65\u3002\u5bf9\u4e8e\u8fd9\u4e9b\u5f02\u6b65api\u7684\u540c\u6b65\u517c\u5bb9\u5b9e\u73b0\u5c06 ",(0,a.kt)("em",{parentName:"p"},"\u4e0d\u4f1a")," \u7531api\u6a21\u5757\u63d0\u4f9b\uff0c\u800c\u662f\u7531\u5176\u5b9e\u73b0\u65b9\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," \u6a21\u5757\uff09\u8fdb\u884c\u8003\u8651\u3002"),(0,a.kt)("br",null),(0,a.kt)("p",null,"simbot3\u5f00\u59cb\uff0c\u5c06\u4e0d\u4f1a\u518d\u51fa\u73b0\u66fe\u7ecf\u7248\u672c\u7684",(0,a.kt)("strong",{parentName:"p"},"\u4ee5\u6ce8\u89e3\u4e3a\u4e3b"),"\u7684\u65b9\u5f0f\u8fdb\u884c\u5b9a\u4e49\uff0c\u800c\u662f\u5411\u7740\u6240\u6709\u7684\u65b9\u6cd5\u5747\u53ef\u901a\u8fc7\u975e\u53cd\u5c04\u7684\u76f4\u63a5\u4ee3\u7801\u8fdb\u884c\u5b9e\u73b0\u7684\u65b9\u5f0f\u524d\u8fdb\u3002"),(0,a.kt)("br",null),(0,a.kt)("p",null,"api\u6a21\u5757\u5e76\u4e0d\u4e00\u5b9a\u53ea\u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," \u6a21\u5757\uff0c\u201capi\u6a21\u5757\u201d\u4f1a\u662f\u4e00\u7cfb\u5217\u5bf9\u901a\u7528\u6807\u51c6\u8fdb\u884c\u5b9a\u4e49\u7684\u6a21\u5757\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," \u3001",(0,a.kt)("inlineCode",{parentName:"p"},"api-xx")," \u7b49\u7b49\u3002"),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"core"},"core"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"core")," \u6a21\u5757\uff0c\u662fsimbot\u5b98\u65b9\u9488\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," \u6a21\u5757\u901a\u7528\u6807\u51c6\u8fdb\u884c\u5b9e\u73b0\u7684\u6807\u51c6\u6838\u5fc3\u3002\u6b64\u6838\u5fc3\u4f1a\u4e3a\u5176\u4ed6\u7ec4\u4ef6\u63d0\u4f9b\u8f83\u4e3a\u5b8c\u6574\u7684\u6807\u51c6\u5b9e\u73b0\uff0c\u5e76\u63d0\u4f9b\u4e00\u5957\u6807\u51c6\u7684simbot\u7ec4\u4ef6-\u4e8b\u4ef6\u8c03\u5ea6\u673a\u5236\u3002"),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"core")," \u662f\u4e00\u4e2a\u9488\u5bf9\u4e8e\u7ec4\u4ef6\u7684api\u6a21\u5757\u901a\u7528\u5b9e\u73b0\u3002"),(0,a.kt)("h3",{id:"boot"},"boot"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h3",{id:"spring-boot-starter"},"spring boot starter"),(0,a.kt)("p",null,"spring\u6574\u5408\u6a21\u5757\u4e3a\u4ec0\u4e48\u53ea\u662fjvm-only\u6211\u89c9\u5f97\u6211\u5c31\u4e0d\u7528\u89e3\u91ca\u4e86\u5427\u3002"),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u5728jvm\u5e73\u53f0\uff0csimbot\u4f9d\u65e7\u8003\u8651\u652f\u6301\u4e0e ",(0,a.kt)("a",{parentName:"p",href:"https://spring.io/"},"spring")," \u7684\u6574\u5408\uff0c\u4e14\u5e94\u5f53\u8bbe\u8ba1\u7684\u66f4\u52a0\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"spring"),"\u3002\u5f53\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"spring")," \u8fdb\u884c\u6574\u5408\u65f6\uff0c\n\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4f9d\u8d56\u7ba1\u7406\u3001\u4e8b\u4ef6\u5904\u7406\u5168\u90e8\u5e94\u4f9d\u9760spring\u673a\u5236\uff0c\u4e14\u5e94\u652f\u6301 ",(0,a.kt)("a",{parentName:"p",href:"https://spring.io/reactive"},"reactive")," (",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html"},"webFlux"),") \u7684\u652f\u6301\u3002"),(0,a.kt)(n.G,{config:'{"theme":{"light":"neutral","dark":"forest"}}',chart:"    graph TD\n        A[http\u8bf7\u6c42] --\x3e B{\u534f\u540cbot};\n        B --\x3e|Yes| C[simbot\u4e8b\u4ef6];\n        C --\x3e D[simbot\u54cd\u5e94];\n        D --\x3e E;\n        B ----\x3e|No| E[http\u54cd\u5e94];",mdxType:"Mermaid"}),(0,a.kt)("h2",{id:"\u7ae0\u8282\u5217\u8868"},"\u7ae0\u8282\u5217\u8868"),(0,a.kt)(o.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}k.isMDXComponent=!0},8209:(e,t,r)=>{r.d(t,{G:()=>o});var i=r(7294),a=r(7273);const n="light";const o=({chart:e,config:t})=>{if("undefined"==typeof window)return i.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const r=(0,i.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),o=document.querySelector("html"),[s,l]=(0,i.useState)(!1),m=(0,i.useMemo)((()=>function(e,t){let r=e.getAttribute("data-theme")??n;r!==n&&"dark"!==r&&(r=n);const i=r===n?"default":"dark";return t?.theme?.[r]??t?.mermaid?.theme??i}(o,r)),[r,s]);return(0,i.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){l((e=>!e));break}}));return e.observe(o,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,i.useEffect)((()=>{r&&(r.mermaid?a.Z.initialize({startOnLoad:!0,...r.mermaid,theme:m}):a.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),a.Z.contentLoaded())}),[r,m]),(0,i.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(a.Z.contentLoaded,0)}),[e]),i.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);