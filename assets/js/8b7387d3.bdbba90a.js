"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[4547],{2991:(t,e,i)=>{i.d(e,{Z:()=>g});var r=i(7294),n=i(6010),a=i(3438),s=i(9960),c=i(3919),o=i(5999);const l="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function u(t){let{href:e,children:i}=t;return r.createElement(s.Z,{href:e,className:(0,n.Z)("card padding--lg",l)},i)}function p(t){let{href:e,icon:i,title:a,description:s}=t;return r.createElement(u,{href:e},r.createElement("h2",{className:(0,n.Z)("text--truncate",d),title:a},i," ",a),s&&r.createElement("p",{className:(0,n.Z)("text--truncate",m),title:s},s))}function f(t){let{item:e}=t;const i=(0,a.Wl)(e);return i?r.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function k(t){var e;let{item:i}=t;const n=(0,c.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,a.xz)(null!=(e=i.docId)?e:void 0);return r.createElement(p,{href:i.href,icon:n,title:i.label,description:null==s?void 0:s.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return r.createElement(k,{item:e});case"category":return r.createElement(f,{item:e});default:throw new Error("unknown item type "+JSON.stringify(e))}}function b(t){let{className:e}=t;const i=(0,a.jA)();return r.createElement(g,{items:i.items,className:e})}function g(t){const{items:e,className:i}=t;if(!e)return r.createElement(b,t);const s=(0,a.MN)(e);return r.createElement("section",{className:(0,n.Z)("row",i)},s.map(((t,e)=>r.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:t})))))}},9323:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var r=i(7462),n=(i(7294),i(3905)),a=(i(1839),i(2991)),s=i(3438);const c={title:"\u5feb\u901f\u5f00\u59cb",tags:["\u5feb\u901f\u5f00\u59cb"]},o=void 0,l={unversionedId:"quick-start/index",id:"quick-start/index",title:"\u5feb\u901f\u5f00\u59cb",description:"simbot3\u4e0b\uff0c\u4f7f\u7528\u6838\u5fc3\u6a21\u5757\u4e0e\u4f7f\u7528Boot\u6a21\u5757\u7684\u65b9\u5f0f\u662f\u622a\u7136\u4e0d\u540c\u7684\u3002",source:"@site/docs/quick-start/index.mdx",sourceDirName:"quick-start",slug:"/quick-start/",permalink:"/docs/quick-start/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/quick-start/index.mdx",tags:[{label:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/tags/\u5feb\u901f\u5f00\u59cb"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1666707410,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",tags:["\u5feb\u901f\u5f00\u59cb"]},sidebar:"docs",previous:{title:"\u5347\u7ea7\u6307\u5357",permalink:"/docs/upgrade-guide/"},next:{title:"Core",permalink:"/docs/quick-start/Core"}},d={},m=[{value:"\u6587\u6863\u5217\u8868",id:"\u6587\u6863\u5217\u8868",level:2}],u={toc:m};function p(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"simbot3\u4e0b\uff0c\u4f7f\u7528\u6838\u5fc3\u6a21\u5757\u4e0e\u4f7f\u7528Boot\u6a21\u5757\u7684\u65b9\u5f0f\u662f\u622a\u7136\u4e0d\u540c\u7684\u3002"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6709\u4f18\u79c0\u7684\u9879\u76ee\u6216\u8005\u60f3\u8981\u63d0\u4f9b\u4f18\u79c0\u7684\u793a\u4f8b\u9879\u76ee\uff0c\u6b22\u8fce\u4ece\u8bc4\u8bba\u533a\u6216\u8005 issue \u5904\u63d0\u4ea4\uff5e")),(0,n.kt)("h2",{id:"\u6587\u6863\u5217\u8868"},"\u6587\u6863\u5217\u8868"),(0,n.kt)(a.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);