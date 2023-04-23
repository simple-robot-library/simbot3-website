"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[8559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),b=a,d=m["".concat(u,".").concat(b)]||m[b]||c[b]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),o=r(6010),l=r(6775),i=r(1980),u=r(7392),s=r(12);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function c(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function d(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=c(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,p]=b({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,s.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),k=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var f=r(2466),k=r(2389);const g="tabList__CuJ",h="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,f.o5)(),c=e=>{const t=e.currentTarget,r=s.indexOf(t),n=u[r].value;n!==l&&(p(t),i(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;r=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;r=s[t]??s[s.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:c},i,{className:(0,o.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":l===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=d(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return a.createElement(N,(0,n.Z)({key:String(t)},e))}},1610:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a="label_Yf5u";function o(e){let{type:t,href:r,children:o,title:l}=e;t=t||"primary",l=l||"";const i=n.createElement("span",{className:a,title:l},n.createElement("span",{className:`badge badge--${t}`},o));return null!=r&&r.length>0?n.createElement("a",{href:r},i):i}},5435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(4866),r(5162),r(814),r(1610);const o={authors:"forliy",title:"2022\u5e74\u7b2c32\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},l=void 0,i={permalink:"/blog/2022/08/12/weak-32-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/blog/2022/08-12/weak-32-report.md",source:"@site/blog/2022/08-12/weak-32-report.md",title:"2022\u5e74\u7b2c32\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c32\u5468\u5468\u62a5\u55b5\u3002",date:"2022-08-12T00:00:00.000Z",formattedDate:"2022\u5e748\u670812\u65e5",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:3.635,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c32\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c33\u5468\u5468\u62a5",permalink:"/blog/2022/08/20/weak-33-report"},nextItem:{title:"\u6709\u5173BOOT\u6a21\u5757\u7684\u601d\u8003",permalink:"/blog/2022/08/07/about-boot"}},u={authorsImageUrls:[void 0]},s=[{value:"\ud83d\ude80 \u7248\u672c\u53d1\u5e03",id:"-\u7248\u672c\u53d1\u5e03",level:2},{value:"\ud83d\udcd5 \u6587\u6863\u66f4\u65b0",id:"-\u6587\u6863\u66f4\u65b0",level:2},{value:"\ud83c\udfaf \u5750\u6807\u4e0e\u4ed3\u5e93",id:"-\u5750\u6807\u4e0e\u4ed3\u5e93",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"2022\u5e74\u7b2c32\u5468\u5468\u62a5\u55b5\u3002"),(0,a.kt)("h2",{id:"-\u7248\u672c\u53d1\u5e03"},"\ud83d\ude80 \u7248\u672c\u53d1\u5e03"),(0,a.kt)("p",null,"\u672c\u5468, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u53d1\u5e03\u4e86\u7248\u672c ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0-beta-RC.2"},(0,a.kt)("inlineCode",{parentName:"a"},"v3.0.0-beta-RC.2")),"\uff0c"),(0,a.kt)("p",null,"\u6b64\u7248\u672c\u4e2d\u4e3b\u8981\u8fdb\u884c\u4e86\u4e00\u4e9b\u4f18\u5316\u3001\u4fee\u590d\u76f8\u5173\u7684\u5de5\u4f5c\u3002"),(0,a.kt)("h2",{id:"-\u6587\u6863\u66f4\u65b0"},"\ud83d\udcd5 \u6587\u6863\u66f4\u65b0"),(0,a.kt)("p",null,"\u5bf9\u4e8emirai\u7ec4\u4ef6\uff0c\u6211\u4eec\u5927\u7bc7\u5e45\u7684\u66f4\u65b0\u4e86\u6709\u5173bot\u914d\u7f6e\u76f8\u5173\u7684\u5185\u5bb9\uff0c\u4e5f\u540c\u65f6\u66f4\u65b0\u4e86\u6587\u6863\u3002\u6709\u5174\u8da3\u7684\u8bdd\uff0c\u4e0d\u59a8\u53bb\u770b\u770b\u3002"),(0,a.kt)("h2",{id:"-\u5750\u6807\u4e0e\u4ed3\u5e93"},"\ud83c\udfaf \u5750\u6807\u4e0e\u4ed3\u5e93"),(0,a.kt)("p",null,"\u6211\u4eec\u4e00\u76f4\u5728\u8003\u8651\uff0c\u662f\u5426\u8981\u5728\u6b63\u5f0f\u7248\u672c\u53d1\u5e03\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u66f4\u7b26\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"simbot3")," \u540d\u4e49\u7684maven\u5750\u6807\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u73b0\u5728\u7684\u5750\u6807\u548c\u7248\u672c\u662f\u5982\u4e0b\u7684\u6837\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"love.forte.simbot:simbot-core:3.0.0-beta\nlove.forte.simbot.boot:simboot-core:3.0.0-beta\n")),(0,a.kt)("p",null,"\u800c\u6211\u4eec\u62df\u5b9a\u5728\u6b63\u5f0f\u7248\u53d1\u5e03\u65f6\uff0c\u7edf\u4e00\u4f7f\u7528\u66f4\u660e\u786e\u7684\u5750\u6807\u548c\u7248\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"love.forte.simbot3:simbot3-core:1.0.0\nlove.forte.simbot3.boot:simbot3-boot-core:1.0.0\n")),(0,a.kt)("admonition",{title:"\u865a\u5984...",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4f46\u8fd9\u4ecd\u5728\u8003\u8651\u4e2d\uff0c\u5e76\u4e14\u53ef\u80fd\u5927\u6982\u7387",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a\u65bd\u884c"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd9\u79cd\u8003\u8651\uff1f"))," simbot\u5386\u5c4a\u7248\u672c\u90fd\u5e94\u8be5\u8fd9\u6837\uff0c\u6bd4\u5982simbot2\u5b9e\u9645\u4e0a\u5e94\u8be5\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"love.forte.simbot2:simbot2-xxx:1.x.x\n")),(0,a.kt)("p",null,"\u56e0\u4e3a\u6bcf\u4e00\u4ee3\u7684simbot\u4e4b\u95f4\u90fd\u5b58\u5728\u5929\u5dee\u5730\u522b\u7684\u53d8\u5316\uff0c\u800c\u8fd9\u79cd\u53d8\u5316\u751a\u81f3\u4e0d\u5e94\u7b80\u5355\u7684\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"major")," \u7248\u672c\u53f7\u7684\u66f4\u65b0\u6765\u63cf\u8ff0\uff0c\n\u800c\u662f\u5e94\u8be5\u5b8c\u5168\u4f5c\u4e3a\u4e00\u4e2a\u65b0\u7684\u5185\u5bb9\uff0c\u4ece\u5934\u5f00\u59cb\uff0c\u4ece1.0.0\u7684\u7248\u672c\u53f7\u5f00\u59cb\u3002"),(0,a.kt)("p",null,"\u7136\u800c\u5b9e\u9645\u4e0a\uff0c\u4ecesimbot2\u5f00\u59cb\u7684\u7248\u672c\u53f7\u4fbf\u5df2\u7ecf\u6ca1\u6709\u5c65\u884c \u2014\u2014\u2014\u2014 \u6216\u8005\u8bf4\u96be\u4ee5\u5c65\u884c\u5b83\u4eec\u7528\u4e8e\u63cf\u8ff0api\u8fed\u4ee3\u7684\u804c\u8d23\u4e86\u3002"),(0,a.kt)("p",null,"\u800c\u73b0\u5728\u5f53\u6211\u4eec\u8003\u8651\u5230\u8fd9\u4ef6\u4e8b\u7684\u65f6\u5019\uff0c\u4e5f\u5df2\u7ecf\u6709\u4e9b\u665a\u4e86\u3002"),(0,a.kt)("admonition",{title:"\u8ba8\u8bba",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"2022-07-15")," \u7684\u65f6\u5019\u5c31\u53d1\u5e03\u8fc7\u4e00\u6b21\u7c7b\u4f3c\u7684\u8ba8\u8bba\u535a\u5ba2: \u300a\u8bed\u4e49\u5316\u7248\u672c\uff1f\u300b")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u867d\u7136\u5750\u6807\u7684\u53d8\u66f4\u96be\u4ee5\u65bd\u884c\uff0c\u4f46\u662f\u5bf9\u4e8e\u4ed3\u5e93\u7684\u91cd\u6574\u4e0e\u8f6c\u79fb\u5219\u4f1a\u62e9\u671f\u8fdb\u884c\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u540e\u7eed\u4f1a\u5c06\u76ee\u524d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u62c6\u5206\u4e3a\u5206\u522b\u4ee3\u8868\u4e86\u4e0d\u540c",(0,a.kt)("strong",{parentName:"p"},"\u4e16\u4ee3"),"\u7684\u4e24\u4e2a\u4ed3\u5e93\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"simple-robot-g2")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"simple-robot-g3"),"\uff0c\n\u5e76\u5c06\u5b83\u4eec\u8f6c\u79fb\u5230 ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/simple-robot"},(0,a.kt)("inlineCode",{parentName:"a"},"simple-robot")," \u7ec4\u7ec7\u5e93")," \u4e2d\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\uff0c\u6211\u4e0a\u9762\u63d0\u5230\u4e86 ",(0,a.kt)("strong",{parentName:"p"},'"\u4e16\u4ee3"')," \u800c\u4e0d\u662f\u7248\u672c\uff0c\u5e76\u4e14\u4ed3\u5e93\u7684\u547d\u540d\u4e5f\u662f\u4f7f\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},'"g2"'),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},'"g3"')," \u800c\u4e0d\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},'"v2"'),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},'"v3"'),'\u3002\n\u8fd9\u662f\u56e0\u4e3a\uff0csimbot1\u3001simbot2\u3001simbot3\u4e4b\u524d\uff0c\u6211\u8ba4\u4e3a\u5b83\u4eec\u9664\u4e86\u7ee7\u627f\u7edf\u4e00\u610f\u5fd7\u4e0e\u540d\u79f0\u4ee5\u5916\uff0c\u5e76\u6ca1\u6709\u5b9e\u9645\u4e0a\u7684"\u8fed\u4ee3"\uff0c\u56e0\u6b64\u4f7f\u7528 ',(0,a.kt)("inlineCode",{parentName:"p"},"version")," \u6765\u63cf\u8ff0\u5b83\u4eec\u5e76\u4e0d\u5341\u5206\u59a5\u5f53\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u8be5\u7528\u4ec0\u4e48\u6765\u63cf\u8ff0\u5462\uff0c\u6211\u4eec\u60f3\u5230\u4e86\u4e0a\u9762\u7684\u8bcd\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u4e16\u4ee3"),"\uff0c\u7136\u540e\u7ffb\u8bd1\u4e00\u4e0b\u4fbf\u5f97\u5230\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Generation"),"\uff0c\u4e5f\u5c31\u5f97\u5230\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},'"g2"'),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},'"g3"')," \u540e\u7f00\u3002\n\u5df2\u7ecf\u8fc7\u53bb\u7684\u7248\u672c\u65e0\u6cd5\u518d\u53d8\uff0c\u800c\u540e\u7eed\uff0c\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"gx")," \u7684\u8fed\u4ee3\uff0c\u4f1a\u6839\u636e\u65b0\u7248\u672c\u7684\u7279\u8d28\u6765\u51b3\u5b9a\u5b83\u4f1a\u6210\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"g3 v2")," \u8fd8\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"g4 v1"),"\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u8bf4\u771f\u7684\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"g3")," \u8fd9\u79cd\u540e\u7f00\u770b\u4e0a\u53bb\u5f88\u4e0d\u4e60\u60ef\uff0c\u4e5f\u8bb8\u6211\u4eec\u4f1a\u7ee7\u7eed\u601d\u8003\u66f4\u597d\u7684\u547d\u540d\u65b9\u5f0f\u3002"),(0,a.kt)("admonition",{title:"\u610f\u89c1\u4e0e\u5efa\u8bae ",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u8fd9\u9879\u4e3e\u63aa\u5c1a\u672a\u65bd\u884c\u4e4b\u9645\uff0c\u5982\u679c\u4f60\u6709\u66f4\u597d\u7684\u60f3\u6cd5\u6216\u8005\u5176\u4ed6\u610f\u89c1\uff0c\u975e\u5e38\u6b22\u8fce\u4e0e\u6211\u4eec\u4ea4\u6d41\u3002")))}c.isMDXComponent=!0}}]);