"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[102],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),b=a,d=m["".concat(s,".").concat(b)]||m[b]||p[b]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7462),a=r(7294),l=r(6010),o=r(2389),i=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:r,block:o,defaultValue:m,values:b,groupId:d,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=b??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[O,E]=(0,a.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=d){const e=k[d];null!=e&&e!==O&&h.some((t=>t.value===e))&&E(e)}const j=e=>{const t=e.currentTarget,r=T.indexOf(t),n=h[r].value;n!==O&&(N(t),E(n),null!=d&&w(d,String(n)))},x=e=>{var t;let r=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},h.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:j},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),r??t)}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,o.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},1610:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294);const a="label_Yf5u";function l(e){let{type:t,href:r,children:l}=e;t=t||"primary";const o=n.createElement("span",{className:a},n.createElement("span",{className:`badge badge--${t}`},l));return null!=r&&r.length>0?n.createElement("a",{href:r},o):o}},8286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));r(5488),r(5162),r(814),r(1610);const l={authors:"forliy",title:"2022\u5e74\u7b2c29\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},o=void 0,i={permalink:"/blog/2022/07/22/weak-29-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022/07-22/weak-29-report.md",source:"@site/blog/2022/07-22/weak-29-report.md",title:"2022\u5e74\u7b2c29\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c29\u5468\u5468\u62a5\u55b5\u3002",date:"2022-07-22T00:00:00.000Z",formattedDate:"July 22, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:1.865,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c29\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c30\u5468\u5468\u62a5",permalink:"/blog/2022/07/29/weak-30-report"},nextItem:{title:"\u8bed\u4e49\u5316\u7248\u672c?",permalink:"/blog/2022/07/15/semantic-versioning"}},s={authorsImageUrls:[void 0]},u=[{value:"\ud83d\ude80 \u7248\u672c\u8ba1\u5212",id:"-\u7248\u672c\u8ba1\u5212",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"2022\u5e74\u7b2c29\u5468\u5468\u62a5\u55b5\u3002"),(0,a.kt)("p",null,"\u53c8\u662f\u4e00\u5468\u8fc7\u53bb\u4e86\u3002\u5728\u8fd9\u5468\uff0c\u53ef\u80fdsimbot3\u7684\u6574\u4f53\u5f00\u53d1\u90fd\u6ca1\u6709\u4ec0\u4e48\u5f88\u5927\u7684\u8fdb\u5c55\u3002\u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f\n\u56e0\u4e3a\u6211\u4eec\u56e2\u961f\u7684\u6210\u5458\u4eec\u5728\u8fd9\u5468\u4e2d\u7684\u65f6\u95f4\u5e76\u4e0d\u4e0d\u8db3\u3002\u51e0\u4e4e\u5728\u540c\u4e00\u65f6\u95f4\uff0c\u6210\u5458\u4eec\u90fd\u6536\u5230\u4e86\u6765\u81ea\u5404\u81ea\u5de5\u4f5c\u4e0a\u7684\u65b0\u5de5\u4f5c\u5b89\u6392\u3002"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u65f6\u5e38\u5728\u4e00\u8d77\u63a2\u8ba8\uff0c\u5de5\u4f5c\u7684\u610f\u4e49\u662f\u4ec0\u4e48\uff0c\u800c\u73b0\u5728\u7684\u5de5\u4f5c\u662f\u5426\u6709\u610f\u4e49\u5462\uff1f"),(0,a.kt)("p",{align:"center"},(0,a.kt)("small",null,(0,a.kt)("i",null,"\u4eba\u751f\u5982\u96ea\u82b1\u822c\u98d8\u843d\uff0c\u59cb\u4e8e\u9752\u7a7a\uff0c\u878d\u4e8e\u6cde\u571f\u3002"))," "),(0,a.kt)("h2",{id:"-\u7248\u672c\u8ba1\u5212"},"\ud83d\ude80 \u7248\u672c\u8ba1\u5212"),(0,a.kt)("p",null,"\u597d\u5427\uff0c\u8ba9\u6211\u4eec\u56de\u5230\u6b63\u9898\u3002\u5bf9\u4e8e\u63a5\u4e0b\u6765\u7684\u7248\u672c\u8ba1\u5212\uff0c\u4fbf\u662f\u7ee7\u7eed\u63a8\u8fdb ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},(0,a.kt)("strong",{parentName:"a"},"\u6838\u5fc3\u5e93")),"\n\u7684\u7248\u672c\u8fdb\u5ea6\u3002\u4e0b\u4e00\u4e2a\u7248\u672c\u5c06\u4f1a\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"v3.0.0-beta-RC.1")," \u7248\u672c\uff0c\u5e76\u9010\u6b65\u5411\u7b2c\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"beta")," \u7248\u672c\u524d\u8fdb\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u597d\u5427\uff0c\u8fd9\u5468\u5bf9\u4e8esimbot\u7684\u5185\u5bb9\u7684\u786e\u4e0d\u662f\u5f88\u591a\u3002\u5982\u4f60\u6240\u89c1\uff0c\u6211\u4eec\u751a\u81f3\u6ca1\u6709\u53ef\u4ee5\u5411\u4f60\u4ecb\u7ecd\u7684\u65b0\u70b9\u5b50\u3002"),(0,a.kt)("p",null,"\u4e0a\u4e00\u6b21\u7684\u5468\u62a5\u6211\u4eec\u4fbf\u63d0\u8fc7\uff0csimbot3 \u5df2\u7ecf\u9646\u9646\u7eed\u7eed\u7684\u63a8\u8fdb\u4e86\u5c06\u8fd11\u5e74\u7684\u65f6\u95f4\u4e86\u3002\u5728\u8fd9\u671f\u95f4\uff0c\u5927\u5927\u5c0f\u5c0f\u7684\u4fee\u8865\u4ece\u672a\u95f4\u65ad\u3002\n\u6216\u8bb8\u6211\u4eec\u56e2\u961f\u7684\u7cbe\u529b\u5df2\u7ecf\u96be\u4ee5\u652f\u6491simbot\u80fd\u591f\u8d70\u4e0b\u8db3\u591f\u591a\u7684\u8def\u9014\uff1b\n\u6216\u8bb8\u7ec8\u6709\u4e00\u5929\u56e2\u961f\u6210\u5458\u4f1a\u5404\u5954\u4e1c\u897f\u3001\u4e0d\u518d\u8054\u7edc\uff1b\n\u4f46\u81f3\u5c11\u73b0\u5728\uff0c\u6211\u4eec\u4ecd\u5e0c\u671b\u80fd\u591f\u5728\u5176\u5c1a\u672a\u7834\u706d\u4e4b\u65f6\uff0c\u7115\u5176\u8363\u5f69\u3002"))}p.isMDXComponent=!0}}]);