"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[283],{2991:(e,t,n)=>{n.d(t,{Z:()=>k});var i=n(7294),o=n(6010),r=n(3438),a=n(9960),c=n(3919),s=n(5999);const l="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return i.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},n)}function u(e){let{href:t,icon:n,title:r,description:a}=e;return i.createElement(p,{href:t},i.createElement("h2",{className:(0,o.Z)("text--truncate",m),title:r},n," ",r),a&&i.createElement("p",{className:(0,o.Z)("text--truncate",d),title:a},a))}function f(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?i.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){var t;let{item:n}=e;const o=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(null!=(t=n.docId)?t:void 0);return i.createElement(u,{href:n.href,icon:o,title:n.label,description:null==a?void 0:a.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(v,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{className:t}=e;const n=(0,r.jA)();return i.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return i.createElement(b,e);const a=(0,r.MN)(t);return i.createElement("section",{className:(0,o.Z)("row",n)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(h,{item:e})))))}},8012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var i=n(7462),o=(n(7294),n(3905)),r=(n(1839),n(2991)),a=n(3438);const c={title:"\u7ec4\u4ef6\u6982\u89c8"},s=void 0,l={unversionedId:"component-overview/index",id:"component-overview/index",title:"\u7ec4\u4ef6\u6982\u89c8",description:"\u672c\u7ae0\u8282\u4e0b\u5c06\u4f1a\u63d0\u4f9b\u6240\u6709\u7531 Simple Robot \u8fdb\u884c\u7ef4\u62a4\u7684 \u7ec4\u4ef6 \u6240\u76f8\u5173\u7684\u6587\u6863\u5185\u5bb9\u3002",source:"@site/docs/component-overview/index.md",sourceDirName:"component-overview",slug:"/component-overview/",permalink:"/docs/component-overview/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/component-overview/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1667277196,formattedLastUpdatedAt:"Nov 1, 2022",frontMatter:{title:"\u7ec4\u4ef6\u6982\u89c8"},sidebar:"docs",previous:{title:"\u6253\u5305",permalink:"/docs/basic/package/"},next:{title:"\u7ec4\u4ef6\u534f\u540c",permalink:"/docs/component-overview/synergy/"}},m={},d=[{value:"\u9644\u5c5e\u5e93",id:"\u9644\u5c5e\u5e93",level:2},{value:"\u7ae0\u8282\u5217\u8868",id:"\u7ae0\u8282\u5217\u8868",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u7ae0\u8282\u4e0b\u5c06\u4f1a\u63d0\u4f9b\u6240\u6709\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"Simple Robot")," \u8fdb\u884c\u7ef4\u62a4\u7684 ",(0,o.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6")," \u6240\u76f8\u5173\u7684\u6587\u6863\u5185\u5bb9\u3002"),(0,o.kt)("h2",{id:"\u9644\u5c5e\u5e93"},"\u9644\u5c5e\u5e93"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 GitHub \u7684 ",(0,o.kt)("a",{parentName:"p",href:"http://github.com/simple-robot"},"Simple Robot \u9644\u5c5e\u5e93")," \u7ec4\u7ec7\u9996\u9875\u627e\u5230\u4e0eSimple Robot\u76f8\u5173\u7684\u5404",(0,o.kt)("strong",{parentName:"p"},"\u9644\u5c5e"),"\u7684\u4ee3\u7801\u4ed3\u5e93\u3002\n\u8fd9\u5176\u4e2d\u4fbf\u5305\u62ec\u4e0b\u8ff0\u7684\u5404\u7ec4\u4ef6\u7684\u4ed3\u5e93\u3002"),(0,o.kt)("h2",{id:"\u7ae0\u8282\u5217\u8868"},"\u7ae0\u8282\u5217\u8868"),(0,o.kt)("admonition",{title:"\u72ec\u7acb\u6587\u6863",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8003\u8651\u5230\u76ee\u524d\u6240\u6709\u7684\u5b98\u65b9\u7ec4\u4ef6\u7248\u672c\u66f4\u8fed\u662f\u8fd1\u4f3c\u4e8e\u72ec\u7acb\u7684\uff0c\u56e0\u6b64\u672a\u6765\u4e0b\u8ff0\u7ec4\u4ef6 ",(0,o.kt)("strong",{parentName:"p"},"\u6709\u53ef\u80fd")," \u4f1a\u5404\u81ea\u4f7f\u7528\u72ec\u7acb\u7684\u6587\u6863\u5730\u5740\u8fdb\u884c\u90e8\u7f72\u3002")),(0,o.kt)(r.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);