"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3151],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),b=n,d=c["".concat(s,".").concat(b)]||c[b]||m[b]||l;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(7462),n=r(7294),l=r(6010),o=r(2389),i=r(7392),s=r(7094),u=r(2466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:r,block:o,defaultValue:c,values:b,groupId:d,className:k}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=b??h.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),g=(0,i.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,O]=(0,n.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=d){const e=y[d];null!=e&&e!==w&&f.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,r=E.indexOf(t),a=f[r].value;a!==w&&(T(t),O(a),null!=d&&N(d,String(a)))},P=e=>{var t;let r=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},k)},f.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:P,onClick:j},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,n.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function b(e){const t=(0,o.Z)();return n.createElement(c,(0,a.Z)({key:String(t)},e))}},1610:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294);const n="label_Yf5u";function l(e){let{type:t,href:r,children:l}=e;t=t||"primary";const o=a.createElement("span",{className:n},a.createElement("span",{className:`badge badge--${t}`},l));return null!=r&&r.length>0?a.createElement("a",{href:r},o):o}},5576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));r(5488),r(5162),r(814),r(1610);const l={authors:"forliy",title:"2022\u5e74\u7b2c28\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},o=void 0,i={permalink:"/blog/2022/07/15/weak-28-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022/07-15/weak-28-report.md",source:"@site/blog/2022/07-15/weak-28-report.md",title:"2022\u5e74\u7b2c28\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c28\u5468\u5468\u62a5\u55b5\u3002",date:"2022-07-15T00:00:00.000Z",formattedDate:"July 15, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:2.515,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c28\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"\u8bed\u4e49\u5316\u7248\u672c?",permalink:"/blog/2022/07/15/semantic-versioning"},nextItem:{title:"2022\u5e74\u7b2c27\u5468\u5468\u62a5",permalink:"/blog/2022/07/08/week-27-report"}},s={authorsImageUrls:[void 0]},u=[{value:"\ud83d\ude80 \u7248\u672c\u66f4\u65b0",id:"-\u7248\u672c\u66f4\u65b0",level:2},{value:"\ud83d\udea4 v3.0.0-beta-M3",id:"-v300-beta-m3",level:3},{value:"\ud83d\udcac \u7248\u672c\u8bed\u4e49\u5316",id:"-\u7248\u672c\u8bed\u4e49\u5316",level:2},{value:"\ud83d\ude15 \u7ec4\u4ef6\u8fdb\u5c55",id:"-\u7ec4\u4ef6\u8fdb\u5c55",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"2022\u5e74\u7b2c28\u5468\u5468\u62a5\u55b5\u3002"),(0,n.kt)("h2",{id:"-\u7248\u672c\u66f4\u65b0"},"\ud83d\ude80 \u7248\u672c\u66f4\u65b0"),(0,n.kt)("p",null,"\u622a\u6b62\u5230\u672c\u5468\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u53d1\u5e03\u4e86\u5982\u4e0b\u7248\u672c\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0-beta-M3"},(0,n.kt)("strong",{parentName:"a"},"v3.0.0-beta-M3")))),(0,n.kt)("h3",{id:"-v300-beta-m3"},"\ud83d\udea4 v3.0.0-beta-M3"),(0,n.kt)("p",null,"\u5982\u4e0a\u4e00\u5468\u5468\u62a5\u6240\u8bf4\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0-beta-M3"},(0,n.kt)("strong",{parentName:"a"},"v3.0.0-beta-M3"))," \u5b58\u5728\u5927\u91cf\u4e0d\u517c\u5bb9\u66f4\u65b0\uff08\u5305\u8def\u5f84\u53d8\u66f4\u6240\u5bfc\u81f4\u7684\uff09\uff0c\u4e14\u662f\u6700\u540e\u4e00\u6b21\u5b58\u5728\u5927\u91cf\u4e0d\u517c\u5bb9\u66f4\u65b0\u7684\u66f4\u65b0\u3002"),(0,n.kt)("i",null,(0,n.kt)("s",null,(0,n.kt)("small",null,"\u8bf4\u5b9e\u8bdd\u505a\u51fa\u8fd9\u4e2a\u627f\u8bfa\u4e4b\u540e\u6709\u70b9\u513f\u5c0f\u540e\u6094")))," \u6211\u4eec\u4f1a\u5c3d\u53ef\u80fd\u9075\u5b88\u8fd9\u4e2a\u627f\u8bfa\uff0c\u4e0d\u518d\u53d8\u66f4\u57fa\u672cAPI\uff0c \u5e76\u5c3d\u5feb\u53d1\u5e03 ",(0,n.kt)("strong",null,"v3.0.0-beta-RC")," \u7248\u672c\u3002",(0,n.kt)("p",null,"simbot3\u7248\u672c\u4ece\u5f00\u59cb\u5230\u73b0\u5728\u5df2\u7ecf\u8fdb\u884c\u4e86\u5c06\u8fd11\u5e74\uff0c\u6211\u4eec\u5f88\u662f\u8feb\u5207\u5730\u5e0c\u671b\u80fd\u8d76\u7d27\u7a33\u5b9a\u4e0b\u7248\u672c\u3002"),(0,n.kt)("h2",{id:"-\u7248\u672c\u8bed\u4e49\u5316"},"\ud83d\udcac \u7248\u672c\u8bed\u4e49\u5316"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u5f53\u524d simbot3 \u7684\u7248\u672c\u8bed\u4e49\u5316\u60c5\u51b5\u548c\u6211\u4eec\u5bf9\u6b64\u60c5\u51b5\u7684\u60f3\u6cd5\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"semantic-versioning"},"\u300a\u8bed\u4e49\u5316\u7248\u672c?\u300b"),"\u3002"),(0,n.kt)("h2",{id:"-\u7ec4\u4ef6\u8fdb\u5c55"},"\ud83d\ude15 \u7ec4\u4ef6\u8fdb\u5c55"),(0,n.kt)("p",null,"\u7ec4\u4ef6\u7684\u8fdb\u5c55\u59cb\u7ec8\u7f13\u4e8e\u6838\u5fc3\u5e93\uff0c\u6bd5\u7adf\u6838\u5fc3\u5e93\u7684\u7a33\u5b9a\u624d\u80fd\u4fdd\u8bc1\u7ec4\u4ef6\u53ef\u4ee5\u4e13\u6ce8\u7684\u8fdb\u884c\u63a8\u8fdb\u3002"),(0,n.kt)("p",null,"\u76ee\u524d\uff0c\u7531\u6211\u4eec\u5b98\u65b9\u6240\u7ef4\u62a4\u7684\u7ec4\u4ef6\u53ca\u5176\u57fa\u672c\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u4ed3\u5e93"),(0,n.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mirai\u7ec4\u4ef6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/simple-robot/simbot-component-mirai"},"simple-robot/simbot-component-mirai")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u76f8\u5bf9"),"\u7a33\u5b9a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kook\u7ec4\u4ef6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/simple-robot/simbot-component-kook"},"simple-robot/simbot-component-kook")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u7a33\u5b9a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"QQ\u9891\u9053\u7ec4\u4ef6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/simple-robot/simbot-component-kook"},"simple-robot/simbot-component-kook")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u7a33\u5b9a")))),(0,n.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u4e09\u4e2a\u7ec4\u4ef6\u4e2d\uff0c",(0,n.kt)("strong",{parentName:"p"},"mirai\u7ec4\u4ef6")," \u76f8\u5bf9\u4e8e\u5176\u4ed6\u4e24\u4e2a\u7ec4\u4ef6\u6765\u8bb2\u66f4\u52a0\u7a33\u5b9a\u3002\u8fd9\u662f\u56e0\u4e3a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mamoe/mirai"},"mirai")," \u6846\u67b6\u672c\u8eab\u5df2\u5341\u5206\u6210\u719f\uff0c\n\u800cmirai\u7ec4\u4ef6\u5219\u4ec5\u9700\u8981\u5bf9mirai\u6846\u67b6\u8fdb\u884c\u5c01\u88c5\u5373\u53ef\u3002"),(0,n.kt)("p",null,"\u800c\u5176\u4ed6\u7ec4\u4ef6\u7684\u4e3b\u8981api\u90fd\u662f\u6839\u636e\u5176\u5404\u81ea\u5bf9\u5e94\u7684\u5b98\u65b9api\u8fdb\u884c\u7684\u5c01\u88c5\uff0c\u5e76\u4e0d\u6d89\u53ca\u7b2c\u4e09\u65b9\u6846\u67b6\uff0c\u56e0\u6b64\u4f1a\u6709\u66f4\u591a\u7684\u5de5\u4f5c\u548c\u7ec6\u8282\u6027\u95ee\u9898\u9700\u8981\u5904\u7406\uff0c\n\u8fd9\u4e5f\u5bfc\u81f4\u4e86\u5b83\u4eec\u5b58\u5728\u66f4\u591a\u9690\u60a3\u548c\u5f85\u89e3\u51b3\u7684\u95ee\u9898\u3002"),(0,n.kt)("p",null,"\u603b\u800c\u8a00\u4e4b\uff0c\u5c31\u662f\u8fd9\u6837\u3002\u4ee5\u76ee\u524d\u7684\u5f62\u52bf\u6765\u770b\uff0c\u56e2\u961f\u7684\u751f\u4ea7\u529b\u8fdc\u8fdc\u65e0\u6cd5\u5f25\u8865\u5f53\u524d\u5de5\u4f5c\u91cf\u7684\u7f3a\u53e3\uff0c\u56e0\u6b64\u6211\u4eec\u65e0\u6cd5\u4fdd\u8bc1\u6b64\u9879\u76ee\u7684\u751f\u547d\u529b\u4e0e\u672a\u6765\u3002"))}m.isMDXComponent=!0}}]);