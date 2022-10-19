"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[4547],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),i=r(6010),o=r(3438),a=r(9960),c=r(3919),l=r(5999);const s="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},r)}function d(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:a},a))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t;let{item:r}=e;const i=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:i,title:r.label,description:null==a?void 0:a.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},9323:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var n=r(7462),i=(r(7294),r(3905)),o=r(2991),a=r(3438);const c={title:"\u5feb\u901f\u5f00\u59cb",tags:["\u5feb\u901f\u5f00\u59cb"]},l=void 0,s={unversionedId:"quick-start/index",id:"quick-start/index",title:"\u5feb\u901f\u5f00\u59cb",description:"simbot3\u4e0b\uff0c\u4f7f\u7528\u6838\u5fc3\u6a21\u5757\u4e0e\u4f7f\u7528Boot\u6a21\u5757\u7684\u65b9\u5f0f\u662f\u622a\u7136\u4e0d\u540c\u7684\u3002",source:"@site/docs/quick-start/index.mdx",sourceDirName:"quick-start",slug:"/quick-start/",permalink:"/docs/quick-start/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/quick-start/index.mdx",tags:[{label:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/tags/\u5feb\u901f\u5f00\u59cb"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1666107855,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",tags:["\u5feb\u901f\u5f00\u59cb"]},sidebar:"docs",previous:{title:"\u5347\u7ea7\u6307\u5357",permalink:"/docs/upgrade-guide/"},next:{title:"Core",permalink:"/docs/quick-start/Core"}},u={},m=[{value:"\u6587\u6863\u5217\u8868",id:"\u6587\u6863\u5217\u8868",level:2}],p={toc:m};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"simbot3\u4e0b\uff0c\u4f7f\u7528\u6838\u5fc3\u6a21\u5757\u4e0e\u4f7f\u7528Boot\u6a21\u5757\u7684\u65b9\u5f0f\u662f\u622a\u7136\u4e0d\u540c\u7684\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6709\u4f18\u79c0\u7684\u9879\u76ee\u6216\u8005\u60f3\u8981\u63d0\u4f9b\u4f18\u79c0\u7684\u793a\u4f8b\u9879\u76ee\uff0c\u6b22\u8fce\u4ece\u8bc4\u8bba\u533a\u6216\u8005 issue \u5904\u63d0\u4ea4\uff5e")),(0,i.kt)("h2",{id:"\u6587\u6863\u5217\u8868"},"\u6587\u6863\u5217\u8868"),(0,i.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);