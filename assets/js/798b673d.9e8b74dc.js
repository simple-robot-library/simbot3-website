"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[4362],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),b=a,d=m["".concat(u,".").concat(b)]||m[b]||c[b]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(7462),a=r(7294),l=r(6010),o=r(6775),i=r(1980),u=r(7392),s=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function c(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function d(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=c(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,p]=b({queryString:r,groupId:n}),[d,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,s.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),f=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),v(e)}),[p,v,l]),tabValues:l}}var v=r(2466),f=r(2389);const h="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:o,selectValue:i,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,v.o5)(),c=e=>{const t=e.currentTarget,r=s.indexOf(t),n=u[r].value;n!==o&&(p(t),i(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;r=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;r=s[t]??s[s.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":o===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=d(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},1871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),l=r(4866),o=r(5162);const i={authors:"forliy",title:"2022\u5e74\u7b2c21\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},u=void 0,s={permalink:"/blog/2022/05/26/week-21-report",editUrl:"https://github.com/simple-robot/simpler-robot/tree/v3-dev/website/blog/blog/2022/05-26-week-21-report/index.mdx",source:"@site/blog/2022/05-26-week-21-report/index.mdx",title:"2022\u5e74\u7b2c21\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c21\u5468\u5468\u62a5\u55b5\u3002",date:"2022-05-26T00:00:00.000Z",formattedDate:"2022\u5e745\u670826\u65e5",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:2.68,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c21\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c22\u5468\u5468\u62a5",permalink:"/blog/2022/06/02/week-22-report"},nextItem:{title:"2022\u5e74\u7b2c20\u5468\u5468\u62a5",permalink:"/blog/2022/05/20/week-20-report"}},p={authorsImageUrls:[void 0]},c=[{value:"\ud83d\ude80 \u7248\u672c\u66f4\u65b0",id:"-\u7248\u672c\u66f4\u65b0",level:2},{value:"\ud83d\ude8f preview.11",id:"-preview11",level:2},{value:"\ud83e\udd16 \u7ec4\u7ec7\u4e2d\u7684bot",id:"-\u7ec4\u7ec7\u4e2d\u7684bot",level:3},{value:"\ud83e\udd2b Mute API",id:"-mute-api",level:3},{value:"\ud83d\udcd6 \u6587\u6863",id:"-\u6587\u6863",level:2},{value:"\ud83d\udcbc \u4fdd\u7559\u8282\u76ee",id:"-\u4fdd\u7559\u8282\u76ee",level:2}],m={toc:c};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"2022\u5e74\u7b2c21\u5468\u5468\u62a5\u55b5\u3002"),(0,a.kt)("h2",{id:"-\u7248\u672c\u66f4\u65b0"},"\ud83d\ude80 \u7248\u672c\u66f4\u65b0"),(0,a.kt)("p",null,"\u5728\u672c\u5468\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u53d1\u5e03\u4e86\u51e0\u4e2a\u5c0f\u578b\u7684\u4fee\u590d\u6027\u7248\u672c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.10.2"},"v3.0.0.preview.10.2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.10.1"},"v3.0.0.preview.10.1"))),(0,a.kt)("p",null,"\u4ee5\u53ca\u5728\u672c\u5468\u4e4b\u5185\u9884\u8ba1\u4f1a\u53d1\u5e03\u4e00\u4e2a\u65b0\u7684\u7248\u672c ",(0,a.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.11.0"),"\u3002"),(0,a.kt)("h2",{id:"-preview11"},"\ud83d\ude8f preview.11"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5c06\u8981\u53d1\u5e03\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.11.0")," \u4e2d\uff0c\u5c06\u8981\u63d0\u4f9b\u4e00\u4e9b\u6bd4\u8f83\u5c0f\u578b\u7684\u7279\u6027\uff0c\u4ee5\u53ca\u4e00\u4e9b\u63cf\u8ff0\u548c\u7ea6\u675f\u7684\u8c03\u6574\u3002"),(0,a.kt)("h3",{id:"-\u7ec4\u7ec7\u4e2d\u7684bot"},"\ud83e\udd16 \u7ec4\u7ec7\u4e2d\u7684bot"),(0,a.kt)("p",null,'\u4ece v2.x \u65f6\u4ee3\u5f00\u59cb\uff08\u751a\u81f3\u4e8ev1.x\u65f6\u4ee3\uff09\uff0c\u5c31\u7ecf\u5e38\u80fd\u770b\u5230\u6709\u4eba\u95ee"\u600e\u4e48\u5728\u7fa4\u91cc\u5f97\u5230bot"\u8fd9\u79cd\u7a0d\u5fae\u52a8\u52a8...\u8fd9\u79cd\u6bd4\u8f83\u8003\u9a8c\u601d\u7ef4\u80fd\u529b\u7684\u95ee\u9898\u3002'),(0,a.kt)("p",null,"\u6309\u7167\u5e38\u7406\u6765\u8bb2\uff0c\u5b9e\u9645\u4e0a\u53ea\u8981\u6309\u7167\u83b7\u53d6\u666e\u901a\u7fa4\u6210\u5458\u7684\u65b9\u5f0f\u6765\u83b7\u53d6bot\uff0c\u57fa\u672c\u4e0a\u5c31\u53ef\u4ee5\u5b8c\u6210\u8fd9\u4e2a\u5de5\u4f5c\u3002\u4e0d\u8fc7\u5728\u672c\u6b21\u66f4\u65b0\u4e2d\uff0c\u62df\u5b9a\u589e\u52a0\u4e00\u4e2a\u65b0\u7684\u7279\u6027\u3002\n\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.11.0")," \u4e2d\u4f1a\u8c03\u6574\u6240\u6709\u7ec4\u7ec7\u7c7b\u578b\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Organization")," \uff09\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"bot")," \u5c5e\u6027\u7684\u8fd4\u56de\u503c\uff0c\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"Bot")," \u8c03\u6574\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"BotMember"),"\u3002"),(0,a.kt)("p",null,"\u987e\u540d\u601d\u4e49\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"BotMember")," \u5373\u4ee3\u8868\u6b64bot\u5728\u76ee\u6807\u7ec4\u7ec7\u4e2d\u6240\u626e\u6f14\u7684\u89d2\u8272\u3002\u5b83\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Bot")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Member"),"\uff0c\u53ef\u4ee5\u4f5c\u4e3abot\u6216\u6210\u5458\u4f7f\u7528\u3002"),(0,a.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"suspend fun onEvent(event: GroupEvent) {\n    val bot: BotGroupMember = event.group().bot\n}\n"))),(0,a.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public void onEvent(GroupEvent event) {\n    BotGroupMember bot = event.getGroup().getBot();\n}\n")))),(0,a.kt)("h3",{id:"-mute-api"},"\ud83e\udd2b Mute API"),(0,a.kt)("p",null,"\u7b80\u5355\u8c03\u6574\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"mute")," api\u7684\u63cf\u8ff0\u4e0e\u7ea6\u675f\u3002\u73b0\u5728\u7981\u8a00\u76f8\u5173\u7684api\u6309\u7167\u7ea6\u5b9a\u5176\u65f6\u95f4\u5468\u671f\u53c2\u6570\u4ec5\u5728 ",(0,a.kt)("strong",{parentName:"p"},"\u5927\u4e8e0")," \u7684\u65f6\u5019\u89c6\u4e3a\u6709\u6548\u3002"),(0,a.kt)("h2",{id:"-\u6587\u6863"},"\ud83d\udcd6 \u6587\u6863"),(0,a.kt)("p",null,"\u7ecf\u8fc7\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.10")," \u4e4b\u540e\uff0c\u76ee\u524d\u5df2\u7ecf\u6682\u65f6\u6ca1\u6709\u5927\u8303\u56f4\u7684\u91cd\u6784\u8ba1\u5212\u4e86\u3002\u56e0\u6b64\u672a\u6765\u4e00\u6bb5\u65f6\u95f4\u5185\u6211\u4eec\u4f1a\u7a0d\u5fae\u5206\u914d\u4e00\u4e9b\u7cbe\u529b\u5230\u6587\u6863\u7684\u7f16\u5199\u4e0a\u3002\n\u76ee\u524d\u4f60\u80fd\u591f\u770b\u5f97\u5230\u7684\u65b0\u5185\u5bb9\u6709\u300a\u5feb\u901f\u5f00\u59cb\u300b\u4e2d\u7684\u5404\u90e8\u5206\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u4e00\u5982\u65e2\u5f80\u7684\uff0c\u5982\u679c\u6587\u6863\u4e2d\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u6216\u8005\u6709\u4efb\u4f55\u5efa\u8bae\u610f\u89c1\uff0c\u6b22\u8fce\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot-library/simbot3-website"},"\u6587\u6863\u4ed3\u5e93"),"\n\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot-library/simbot3-website/issues"},"issues")," \u63d0\u4ea4\u6216\u901a\u8fc7\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot-library/simbot3-website/pulls"},"pr")," \u534f\u52a9\u6211\u4eec\u5b8c\u5584\uff0c\u975e\u5e38\u611f\u8c22\u3002"),(0,a.kt)("h2",{id:"-\u4fdd\u7559\u8282\u76ee"},"\ud83d\udcbc \u4fdd\u7559\u8282\u76ee"),(0,a.kt)("p",null,"\u6700\u8fd1\u56e2\u961f\u6210\u5458\u4e2d\u53c8\u5f00\u59cb\u51fa\u73b0\u4e86\u5de5\u4f5c\u52a8\u8361\u7684\u60c5\u51b5\u4e86\uff0c\u53ef\u80fd\u4f1a\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u5f71\u54cd\u5230\u6574\u4f53\u6027\u7684\u5f00\u53d1\u8fdb\u5ea6\u3002"))}b.isMDXComponent=!0}}]);