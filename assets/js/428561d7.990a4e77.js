"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[8888],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>Z});var n=r(7462),a=r(7294),l=r(6010),s=r(6775),o=r(1980),i=r(7392),u=r(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=p(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,c]=m({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),g=(()=>{const e=i??f;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var b=r(2466),g=r(2389);const h="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:s,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,b.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),n=i[r].value;n!==s&&(c(t),o(n))},d=e=>{var t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},o,{className:(0,l.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":s===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function Z(e){const t=(0,g.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},1610:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294);const a="label_Yf5u";function l(e){let{type:t,href:r,children:l,title:s}=e;t=t||"primary",s=s||"";const o=n.createElement("span",{className:a,title:s},n.createElement("span",{className:`badge badge--${t}`},l));return null!=r&&r.length>0?n.createElement("a",{href:r},o):o}},1776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),l=(r(4866),r(5162),r(814),r(1610));const s={authors:"forliy",title:"2022\u5e74\u7b2c38\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},o=void 0,i={permalink:"/blog/2022/09/23/weak-38-report",editUrl:"https://github.com/simple-robot/simpler-robot/tree/v3-dev/website/blog/blog/2022/09-23/weak-38-report.md",source:"@site/blog/2022/09-23/weak-38-report.md",title:"2022\u5e74\u7b2c38\u5468\u5468\u62a5",description:"\u5927\u6982\u662f2022\u5e74\u7b2c38\u5468\u5468\u62a5\u55b5\u3002",date:"2022-09-23T00:00:00.000Z",formattedDate:"2022\u5e749\u670823\u65e5",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:2.385,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c38\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c39\u5468\u5468\u62a5",permalink:"/blog/2022/09/30/weak-39-report"},nextItem:{title:"2022\u5e74\u7b2c37\u5468\u5468\u62a5",permalink:"/blog/2022/09/16/weak-37-report"}},u={authorsImageUrls:[void 0]},c=[{value:"\ud83d\ude80 \u6838\u5fc3\u5e93\u66f4\u65b0..?",id:"-\u6838\u5fc3\u5e93\u66f4\u65b0",level:2},{value:"\u26f0 \u9ec4\u5c71",id:"-\u9ec4\u5c71",level:2}],p={toc:c};function d(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5927\u6982\u662f2022\u5e74\u7b2c38\u5468\u5468\u62a5\u55b5\u3002"),(0,a.kt)("h2",{id:"-\u6838\u5fc3\u5e93\u66f4\u65b0"},"\ud83d\ude80 \u6838\u5fc3\u5e93\u66f4\u65b0..?"),(0,a.kt)("p",null,"\u672c\u5468 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u4f9d\u7136\u4fdd\u6301\u5728 ",(0,a.kt)(l.Z,{mdxType:"Label"},"v3.0.0-beta")," \u7248\u672c\uff0c\u6682\u65f6\u6ca1\u6709\u65b0\u7684\u53d8\u66f4\u3002"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f\u5b9e\u9645\u4e0a\u6211\u4eec\u8fd9\u4e24\u5468\u4e00\u76f4\u5728\u5bfb\u627e\u4e00\u4e2a\u9488\u5bf9\u76ee\u524d\u5f00\u53d1\u4e2d\u75db\u70b9\u7684\u89e3\u51b3\u65b9\u6848\u3002\n\u90a3\u4e48\u662f\u4ec0\u4e48\u75db\u70b9\u5462\uff1f\u9996\u5148\u6765\u770b\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface FooEvent {\n    suspend fun user(): User\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u5047\u8bbe\u4e0a\u8ff0\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"FooEvent")," \u662f\u4e00\u4e2a\u4e8b\u4ef6\u7c7b\u578b\uff0c\u8fd9\u4e2a\u4e8b\u4ef6\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"user()")," \u5f97\u5230\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," \u5bf9\u8c61\u3002\n\u800c\u95ee\u9898\u662f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"user()")," \u51fd\u6570\u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"suspend")," \u51fd\u6570\uff0c\u5373\u6302\u8d77\u51fd\u6570\uff0c\u56e0\u6b64\u5b83\u5e76\u4e0d\u80fd\u76f4\u63a5\u88abJava\u5e73\u53f0\u7684\u7528\u6237\u6216JS\u5e73\u53f0\u7684\u7528\u6237\u4f7f\u7528\uff0c\n\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5bf9\u5916\u518d\u63d0\u4f9b\u4e00\u5957\u989d\u5916\u7684API\uff0c\u4f7f\u5176\u53d8\u4e3a\u5982\u4e0b\u5f62\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface FooEvent {\n    @JvmSynthtic\n    suspend fun user(): User\n    \n    // on Java platform\n    \n    @Api4J\n    fun userBlocking(): User = runInBlocking { user() }\n    @Api4J\n    fun userAsync(): CompletableFuture<out User> = runInAsync { user() }\n    \n    // or on JS platform\n    \n    @Api4JS\n    fun userAsync(): Promise<out User> = runInAsync { user() }\n}\n")),(0,a.kt)("p",null,"\u4f46\u662f\u5982\u679c\u6240\u6709\u7684\u53ef\u6302\u8d77\u51fd\u6570\u90fd\u9700\u8981\u5982\u6b64\u989d\u5916\u63d0\u4f9b\u5e73\u53f0\u517c\u5bb9\u6027\u7684API\uff0c\u8fd9\u4f1a\u4f7f\u5f97\u6211\u4eec\u5f00\u53d1\u4e2d\u7684\u91cd\u590d\u5de5\u4f5c\u91cf\u5927\u5927\u63d0\u9ad8\uff0c\u4e25\u91cd\u5f71\u54cd\u6574\u4f53\u7684\u5f00\u53d1\u6548\u7387\u3002\n\u90a3\u4e48\u600e\u4e48\u529e\u5462\uff1f\u78b0\u5de7\u7684\u662f\uff0c\u6211\u4eec\u7684\u67d0\u4f4d\u6210\u5458\u5728GitHub\u4e0a\u4e0d\u7ecf\u610f\u95f4\u53d1\u73b0\u4e86\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ForteScarlet/kotlin-suspend-transform-compiler-plugin"},"Kotlin\u7f16\u8bd1\u5668\u63d2\u4ef6"),"\uff0c\n\u5b83\u53ef\u4ee5\u6ee1\u8db3\u6211\u4eec\u5f53\u4e0b\u7684\u9700\u6c42\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u76ee\u524d\u6b63\u5728\u5c1d\u8bd5\u4e0e\u6b64\u7f16\u8bd1\u5668\u63d2\u4ef6\u8fdb\u884c\u6574\u5408\uff0c\u5982\u679c\u80fd\u591f\u8fbe\u6210\u89e3\u51b3\u95ee\u9898\u7684\u76ee\u7684\uff0c\u4fbf\u4f1a\u6b63\u5f0f\u6295\u5165\u4f7f\u7528\u5e76\u53d1\u5e03\u4e0b\u4e00\u4e2a\u7248\u672c\u6765\u89c2\u5bdf\u5176\u5177\u4f53\u8868\u73b0\u6548\u679c\u3002"),(0,a.kt)("h2",{id:"-\u9ec4\u5c71"},"\u26f0 \u9ec4\u5c71"),(0,a.kt)("p",null,"\u8fd9\u5468\uff0c\u6211\u4eec\u7684\u56e2\u961f\u6210\u5458\u4e00\u540c\u524d\u5f80\u4e86\u9ec4\u5c71\uff0c\u611f\u53d7\u4e86\u4e00\u4e0b\u9ec4\u5c71\u7684\u7edd\u7f8e\u5c71\u666f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3137).Z,width:"3468",height:"4624"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5927).Z,width:"3468",height:"4624"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4442).Z,width:"4624",height:"3468"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8944).Z,width:"3264",height:"2448"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3432).Z,width:"3468",height:"4624"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1974).Z,width:"3264",height:"2448"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3819).Z,width:"4624",height:"3468"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3870).Z,width:"3264",height:"2448"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6424).Z,width:"3264",height:"2448"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8583).Z,width:"4624",height:"3468"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9031).Z,width:"4624",height:"3468"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3694).Z,width:"4384",height:"2352"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7898).Z,width:"10080",height:"2384"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4345).Z,width:"3468",height:"4624"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5391).Z,width:"3468",height:"4624"})))}d.isMDXComponent=!0},3137:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1-e4bbfa9cb0f804981dc043880d2e6110.jpg"},8583:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/10-02bd5b5d73fa6d5b1cd84d5357dcd30a.jpg"},9031:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/11-8eb9e0ab7d6172b28c23e25cfbab0818.jpg"},3694:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/12-7eed371c815b7c3d29449c97ea2a527c.jpg"},7898:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/13-d0f0aeb6126b3dd36b2f724ef9540a48.jpg"},4345:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/14-092d9510deb753c4c40ef45c46bfe616.jpg"},5391:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/15-defcef036fcdc0b630d2e7f8f79612a8.jpg"},5927:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/2-c9e8cf174d524b7d7c4a8e7532f99611.jpg"},4442:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/3-caf84a263d7f0672fba7f738af82f122.jpg"},8944:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/4-3bf79fb95a14b105d8c0b3f1d688d193.jpg"},3432:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/5-79398aba59d6511319d8ef41bdbd27cf.jpg"},1974:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/6-107fed793abff2b8195337ca3ab75bad.jpg"},3819:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/7-960d1df51b8a563dbf4f5109ae4d5aea.jpg"},3870:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/8-5436391b25c600ac4b2fa3e317f41207.jpg"},6424:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/9-2f9ca7e117efbf04665f4d7a92ce98f0.jpg"}}]);