"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[5034],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),b=n,d=m["".concat(s,".").concat(b)]||m[b]||p[b]||l;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(7462),n=r(7294),l=r(6010),o=r(2389),i=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:r,block:o,defaultValue:m,values:b,groupId:d,className:f}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=b??v.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[O,E]=(0,n.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=d){const e=k[d];null!=e&&e!==O&&h.some((t=>t.value===e))&&E(e)}const N=e=>{const t=e.currentTarget,r=T.indexOf(t),a=h[r].value;a!==O&&(j(t),E(a),null!=d&&w(d,String(a)))},x=e=>{var t;let r=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},h.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:N},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),r??t)}))),r?(0,n.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,o.Z)();return n.createElement(m,(0,a.Z)({key:String(t)},e))}},1610:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294);const n="label_Yf5u";function l(e){let{type:t,href:r,children:l}=e;t=t||"primary";const o=a.createElement("span",{className:n},a.createElement("span",{className:`badge badge--${t}`},l));return null!=r&&r.length>0?a.createElement("a",{href:r},o):o}},2286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));r(5488),r(5162),r(814),r(1610);const l={authors:"forliy",title:"2022\u5e74\u7b2c34\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"],date:"2022-08-26T23:45"},o=void 0,i={permalink:"/blog/2022/08/26/weak-34-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022/08-26/weak-34-report.md",source:"@site/blog/2022/08-26/weak-34-report.md",title:"2022\u5e74\u7b2c34\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c34\u5468\u5468\u62a5\u55b5\u3002",date:"2022-08-26T23:45:00.000Z",formattedDate:"August 26, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:.96,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c34\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"],date:"2022-08-26T23:45"},prevItem:{title:"2022\u5e74\u7b2c35\u5468\u5468\u62a5\u505c\u66f4\u516c\u544a",permalink:"/blog/2022/08/26/weak-35-stop"},nextItem:{title:"2022\u5e74\u7b2c33\u5468\u5468\u62a5",permalink:"/blog/2022/08/20/weak-33-report"}},s={authorsImageUrls:[void 0]},u=[{value:"\ud83d\ude4f \u548c\u5e73\u4e07\u5c81",id:"-\u548c\u5e73\u4e07\u5c81",level:2},{value:"\ud83d\ude45\u200d \u4e0b\u5468\u505c\u66f4",id:"-\u4e0b\u5468\u505c\u66f4",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"2022\u5e74\u7b2c34\u5468\u5468\u62a5\u55b5\u3002"),(0,n.kt)("h2",{id:"-\u548c\u5e73\u4e07\u5c81"},"\ud83d\ude4f \u548c\u5e73\u4e07\u5c81"),(0,n.kt)("p",null,"\u672c\u5468\u6ca1\u6709\u4ec0\u4e48\u60ca\u5929\u52a8\u5730\u7684\u4e1c\u897f\uff0c\u751a\u81f3\u4e5f\u6ca1\u6709\u4ec0\u4e48\u65b0\u7248\u672c\u7684\u53d1\u5e03\u3002\n\u5e73\u51e1\u7684\u9633\u5149\uff0c\u5e73\u51e1\u7684\u5929\u7a7a\uff1b\u5e73\u51e1\u7684\u8f7b\u53f9\uff0c\u5e73\u51e1\u7684\u4e00\u5468\u3002"),(0,n.kt)("p",null,"\u672c\u5468\uff0c\u6211\u4eec\u5c06\u4e3b\u8981\u7684\u5de5\u4f5c\u7cbe\u529b\u6682\u65f6\u8f6c\u79fb\u5230\u4e86",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ForteScarlet/CatCode2"},"\u5176\u4ed6\u5730\u65b9"),"\uff0c\u56e0\u6b64simbot\u7684\u76f8\u5173\u5185\u5bb9\u53ef\u80fd\u5e76\u6ca1\u6709\u4ec0\u4e48\u8fdb\u5c55\u3002\n\u5c3d\u7ba1\u5b83\u5bf9\u4e8esimbot3\u5df2\u7ecf\u4e0d\u518d\u662f\u5fc5\u987b\uff0c\u4f46\u662f\u5bf9\u4e8e\u627f\u8bfa\u8fc7\u7684\u4e8b\u60c5\uff0c\u6211\u4eec\u56e2\u961f\u7684\u6210\u5458\u4eec\u7ec8\u7a76\u662f\u4e0d\u613f\u610f\u653e\u4e0b\u7684\u3002"),(0,n.kt)("h2",{id:"-\u4e0b\u5468\u505c\u66f4"},"\ud83d\ude45\u200d \u4e0b\u5468\u505c\u66f4"),(0,n.kt)("p",null,"\u4e5f\u8bb8\u4f60\u5df2\u7ecf\u770b\u5230\u4e86 ",(0,n.kt)("a",{parentName:"p",href:"weak-35-stop"},"\u505c\u66f4\u516c\u544a"),"\uff0c\u5982\u679c\u6ca1\u770b\u5230\u4e5f\u6ca1\u5173\u7cfb\uff0c\u56e0\u4e3a\u4f60\u73b0\u5728\u770b\u5230\u4e86\u3002"))}p.isMDXComponent=!0}}]);