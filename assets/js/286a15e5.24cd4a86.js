"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[6860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7294),i=n(6010),a=n(3438),o=n(9960),c=n(3919),l=n(5999);const s="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},n)}function u(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",p),title:o},o))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){var t;let{item:n}=e;const i=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(u,{href:n.href,icon:i,title:n.label,description:null==o?void 0:o.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(v,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}},1610:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);const i="label_Yf5u";function a(e){let{type:t,href:n,children:a}=e;t=t||"primary";const o=r.createElement("span",{className:i},r.createElement("span",{className:"badge badge--"+t},a));return null!=n&&n.length>0?r.createElement("a",{href:n},o):o}},3261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=n(7462),i=(n(7294),n(3905)),a=n(1610),o=n(2991),c=n(3438);const l={title:"\u6807\u51c6\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},s=void 0,d={unversionedId:"defition/event-overview/standard-event/index",id:"defition/event-overview/standard-event/index",title:"\u6807\u51c6\u4e8b\u4ef6",description:"simbot3\u6838\u5fc3\u5e93\u6240\u63d0\u4f9b\u7684\u6807\u51c6\u4e8b\u4ef6\u5b9a\u4e49\u3002",source:"@site/docs/defition/event-overview/standard-event/index.md",sourceDirName:"defition/event-overview/standard-event",slug:"/defition/event-overview/standard-event/",permalink:"/docs/defition/event-overview/standard-event/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/defition/event-overview/standard-event/index.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",frontMatter:{title:"\u6807\u51c6\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"myAutogeneratedSidebar",previous:{title:"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587",permalink:"/docs/defition/event-overview/event-processing-context/"},next:{title:"\u5bf9\u8c61\u4e8b\u4ef6",permalink:"/docs/defition/event-overview/standard-event/objective-event/"}},p={},m=[{value:"\u6587\u6863\u5c55\u73b0",id:"\u6587\u6863\u5c55\u73b0",level:2},{value:"\u7ae0\u8282\u5217\u8868",id:"\u7ae0\u8282\u5217\u8868",level:2}],u={toc:m};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"simbot3\u6838\u5fc3\u5e93\u6240\u63d0\u4f9b\u7684\u6807\u51c6\u4e8b\u4ef6\u5b9a\u4e49\u3002"),(0,i.kt)("h2",{id:"\u6587\u6863\u5c55\u73b0"},"\u6587\u6863\u5c55\u73b0"),(0,i.kt)("p",null,"\u5728\u4e0b\u8ff0\u7ae0\u8282\u4e2d\uff0c\u4f60\u53ef\u80fd\u4f1a\u770b\u5230\u7c7b\u4f3c\u4e8e\u4e0b\u9762\u8fd9\u79cd\u7684\u5c55\u73b0\u5f62\u5f0f\uff1a"),(0,i.kt)("hr",null),(0,i.kt)("blockquote",null,(0,i.kt)("h3",{parentName:"blockquote",id:"fooevent"},"FooEvent"),(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)(a.Z,{mdxType:"Label"},"api.foo"),(0,i.kt)(a.Z,{type:"success",mdxType:"Label"},"BarEvent"),(0,i.kt)(a.Z,{type:"success",mdxType:"Label"},"TarEvent")),(0,i.kt)("p",{parentName:"blockquote"},"\u8fd9\u662f\u4e00\u6bb5\u8bf4\u660e")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u8fd9\u4ee3\u8868\u6587\u6863\u4e2d\u63cf\u8ff0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"FooEvent")," \u7684 key.id \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"api.foo")," \uff0c\u5e76\u4e14\u5b83\u7ee7\u627f/\u5b9e\u73b0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"BarEvent")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"TarEvent"),"\u3002\u5e76\u4e14\u5bf9\u4e8e\u6b64\u4e8b\u4ef6\u7684\u63cf\u8ff0\uff0c\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u60c5\u51b5\u5219\u4e0d\u4f1a\u5bf9\u7ee7\u627f\u4e8b\u4ef6\u4e2d\u7684\u91cd\u590d\u5185\u5bb9\u8fdb\u884c\u8d58\u8ff0\u3002\n\u5f53\u7136\uff0c\u8fd9\u4e5f\u4e0d\u4e00\u5b9a\u662f\u4e8b\u4ef6\u7c7b\u578b\uff0c\u5b83\u4ee3\u8868\u7684\u4e5f\u53ef\u80fd\u662f\u5176\u4ed6\u4efb\u4f55\u53ef\u80fd\u88ab\u5b9e\u73b0/\u7ee7\u627f\u7684\u7c7b\u578b\uff0c\u4f8b\u5982 ",(0,i.kt)(a.Z,{type:"success",mdxType:"Label"},"FooContainer"),"\u3002"),(0,i.kt)("p",null,"\u6240\u6709\u4e8b\u4ef6\u5168\u90e8\u9ed8\u8ba4\u5b9e\u73b0 ",(0,i.kt)(a.Z,{type:"success",mdxType:"Label"},"Event")," \u7c7b\u578b\u3002\n\u56e0\u6b64\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," \u7684\u5b9e\u73b0\u5c06\u4e0d\u4f1a\u518d\u8fdb\u884c\u6807\u8bb0\u3002"),(0,i.kt)("admonition",{title:"\u51fa\u5165",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u51fa\u73b0\u4efb\u4f55\u6587\u6863\u4e0e\u5b9e\u9645\u4ee3\u7801\u8868\u73b0\u4e0d\u7b26\u7684\u60c5\u51b5\uff0c\u4f18\u5148\u4ee5\u5b9e\u9645\u4ee3\u7801\u8868\u73b0\u4e3a\u51c6\uff0c\n\u5e76\u53ca\u65f6\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/simple-robot-library/simbot3-website/issues/"},(0,i.kt)("strong",{parentName:"a"},"issue"))," \u8fdb\u884c\u53cd\u9988\u3002")),(0,i.kt)("h2",{id:"\u7ae0\u8282\u5217\u8868"},"\u7ae0\u8282\u5217\u8868"),(0,i.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);