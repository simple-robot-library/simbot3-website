(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[4467],{5162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,i),hidden:a},t)}},4866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),s=a(6010),i=a(6775),o=a(1980),l=a(7392),m=a(12);function u(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,u]=d({queryString:a,groupId:n}),[b,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),f=(()=>{const e=l??b;return c({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var v=a(2466),f=a(2389);const k="tabList__CuJ",T="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:l}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,v.o5)(),p=e=>{const t=e.currentTarget,a=m.indexOf(t),n=l[a].value;n!==i&&(u(t),o(n))},c=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;a=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;a=m[t]??m[m.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},l.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:p},o,{className:(0,s.Z)("tabs__item",T,null==o?void 0:o.className,{"tabs__item--active":i===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=b(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},8761:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),s=(a(8209),a(4866)),i=a(5162);const o={sidebar_position:20,title:"\u65f6\u95f4\u6233"},l=void 0,m={unversionedId:"definition/Timestamp",id:"definition/Timestamp",title:"\u65f6\u95f4\u6233",description:"Timestamp\uff0c\u987e\u540d\u601d\u4e49\uff0c\u8fd9\u662f\u4e00\u4e2a\u65f6\u95f4\u6233\u7c7b\u578b\u3002",source:"@site/docs/definition/Timestamp.md",sourceDirName:"definition",slug:"/definition/Timestamp",permalink:"/docs/definition/Timestamp",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/definition/Timestamp.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1688485470,formattedLastUpdatedAt:"2023\u5e747\u67084\u65e5",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"\u65f6\u95f4\u6233"},sidebar:"docs",previous:{title:"\u5143\u7d20\u5e8f\u5217",permalink:"/docs/definition/Items"},next:{title:"\u4fe1\u606f\u7c7b\u578b",permalink:"/docs/definition/base-objective/Info"}},u={},p=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u83b7\u53d6",id:"\u83b7\u53d6",level:2},{value:"\u7b80\u5355\u7c7b\u578b\u5305\u88c5",id:"\u7b80\u5355\u7c7b\u578b\u5305\u88c5",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp"),"\uff0c\u987e\u540d\u601d\u4e49\uff0c\u8fd9\u662f\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u65f6\u95f4\u6233"),"\u7c7b\u578b\u3002"),(0,r.kt)("p",null,'\u5728\u7ec4\u4ef6\u4e2d\uff0c"\u65f6\u95f4\u6233"\u7684\u975e\u5e38\u5e38\u89c1\u7684\u4e00\u4e2a\u6982\u5ff5\u3002\u6bd4\u5982 ',(0,r.kt)("inlineCode",{parentName:"p"},"Event.timestamp")," \u5373\u4ee3\u8868\u83b7\u53d6\u6b64\u4e8b\u4ef6\u53d1\u751f\u7684\u65f6\u95f4\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u65f6\u95f4\u6233\u90fd\u662f\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u957f\u6574\u578b"),"\u6570\u503c\uff0c\u4e00\u822c\u4ee3\u8868\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u6beb\u79d2\u65f6\u95f4\u6233")," \u6216 ",(0,r.kt)("strong",{parentName:"p"},"\u79d2\u65f6\u95f4\u6233"),"\u3002\n\uff08\u5f53\u7136\u4e86\uff0c\u4e5f\u6709\u5c0f\u6982\u7387\u51fa\u73b0\u90a3\u79cd\u7528\u5206\u949f\u65f6\u95f4\u6233\u7684\u602a\u80ce\uff0c\u5c3d\u7ba1\u76ee\u524d\u6211\u4ece\u672a\u89c1\u8fc7\uff09\n\u4f46\u662f\u5bf9\u4e8e\u4e0d\u540c\u7684\u7ec4\u4ef6\u5b9e\u73b0\u8fdb\u884c\u534f\u4f5c\u65f6\uff0c\u4e0d\u540c\u7ec4\u4ef6\u4e2d\u65f6\u95f4\u6233\u5355\u4f4d\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\u5f88\u53ef\u80fd\u4f1a\u662f\u4e00\u79cd\u9690\u60a3\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64simbot\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp")," \u4f5c\u4e3a\u9762\u5411\u4f7f\u7528\u8005\u7684\u7edf\u4e00\u65f6\u95f4\u6233\u7c7b\u578b\u6765\u53d6\u4ee3\u4e0d\u540c\u65f6\u95f4\u5355\u4f4d\u7684\u65f6\u95f4\u6233\u3002"),(0,r.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.kt)("p",null,"\u5982\u4e0b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp")," \u7684\u57fa\u672c\u5b9a\u4e49\uff08\u7b80\u5316\u7248\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"}," sealed class Timestamp : Comparable<Timestamp> {\n\n    /**\n     * \u79d2\u503c\u3002\n     */\n    abstract val second: Long\n\n    /**\n     * \u6beb\u79d2\u503c\u3002\n     */\n    abstract val millisecond: Long\n\n    /**\n     * \u6b64\u65f6\u95f4\u6233\u662f\u5426\u662f\u4e00\u4e2a\u88ab\u652f\u6301\u7684\u771f\u5b9e\u65f6\u95f4\u6233\u3002\n     * \u5982\u679c\u5f97\u5230false\uff0c\u5219\u4ee3\u8868\u6b64\u65f6\u95f4\u6233\u672c\u8d28\u4e0a\u4e0d\u5b58\u5728\uff0c\u4e14\u4e0a\u8ff0\u79d2\u503c\u548c\u6beb\u79d2\u503c\u6700\u7ec8\u7ed3\u679c\u5e94\u4e3a-1\u3002\n     */\n    abstract fun isSupport(): Boolean\n\n\n    object NotSupport : Timestamp() {\n        // \u7ec6\u8282\u7701\u7565...\n    }\n}\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp")," \u5b9e\u9645\u4e0a\u7684\u5e94\u7528\u4e5f\u5f88\u7b80\u5355\uff0c\u4e3b\u8981\u5c31\u662f\u7528\u4e8e\u83b7\u53d6\u4e24\u79cd\u65f6\u95f4\u6233\u7c7b\u578b\u3002"),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val timestamp: Timestamp = ...\n\nval second = timestamp.second            // \u79d2\u65f6\u95f4\u6233\nval milliSecond = timestamp.millisecond  // \u6beb\u79d2\u65f6\u95f4\u6233\nval isSupport = timestamp.isSupport()    // \u662f\u5426\u4e3a\u6709\u6548\u65f6\u95f4\n// isSupport \u7684\u7ed3\u679c\u7c7b\u4f3c\u4e8e second >= 0\n")),(0,r.kt)("p",null,"\u5728 Kotlin \u4e2d\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e9b\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp")," \u7684\u6269\u5c55\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val instant: Instant = timestamp.instantValue // \u8f6c\u5316\u4e3a java.time.Instant \u5bf9\u8c61\n"))),(0,r.kt)(i.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Timestamp timestamp = ...\n\nfinal long second = timestamp.getSecond();           // \u79d2\u65f6\u95f4\u6233\nfinal long millisecond = timestamp.getMillisecond(); // \u6beb\u79d2\u65f6\u95f4\u6233\nfinal boolean support = timestamp.isSupport();       // \u662f\u5426\u4e3a\u6709\u6548\u65f6\u95f4\n// isSupport \u7684\u7ed3\u679c\u7c7b\u4f3c\u4e8e second >= 0\n")))),(0,r.kt)("h2",{id:"\u83b7\u53d6"},"\u83b7\u53d6"),(0,r.kt)("p",null,"\u5176\u5b9e\u5bf9\u4e8e\u666e\u901a\u5f00\u53d1\u8005\u6765\u8bb2\uff0c\u4e3b\u52a8\u6784\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp")," \u7684\u60c5\u51b5\u5e76\u4e0d\u591a\u89c1\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp")," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5de5\u5382\u51fd\u6570\u6765\u6784\u5efa\u5b9e\u4f8b\uff1a"),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'Timestamp.now()                             // \u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u5bf9\u5e94\u7684\u65f6\u95f4\u6233\nTimestamp.byMillisecond(1234567898765L)     // \u6839\u636e\u6beb\u79d2\u65f6\u95f4\u6233\u6784\u5efa\nTimestamp.bySecond(123456789)               // \u6839\u636e\u79d2\u65f6\u95f4\u6233\u6784\u5efa\nTimestamp.bySecond(123456789, 123)          // \u6839\u636e\u79d2\u65f6\u95f4\u6233\u6784\u5efa\nTimestamp.byInstant(Instant.now())          // \u6839\u636e java.time.Instant \u6784\u5efa\nInstant.now().toTimestamp()                 // \u6839\u636e java.time.Instant \u6784\u5efa\nTimestamp.notSupport()                      // \u5f97\u5230\u4e00\u4e2a\u4ee3\u8868"\u65e0\u6548"\u7684\u65f6\u95f4\u6233\n'))),(0,r.kt)(i.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Timestamp.now();                            // \u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u5bf9\u5e94\u7684\u65f6\u95f4\u6233\nTimestamp.byMillisecond(1145141919810L);    // \u6839\u636e\u6beb\u79d2\u65f6\u95f4\u6233\u6784\u5efa\nTimestamp.bySecond(1145141919);             // \u6839\u636e\u79d2\u65f6\u95f4\u6233\u6784\u5efa\nTimestamp.bySecond(1145141919, 810);        // \u6839\u636e\u79d2\u65f6\u95f4\u6233\u6784\u5efa\nTimestamp.byInstant(Instant.now());         // \u6839\u636e java.time.Instant \u6784\u5efa\nTimestamp.notSupport();                     // \u5f97\u5230\u4e00\u4e2a\u4ee3\u8868"\u65e0\u6548"\u7684\u65f6\u95f4\u6233\n')))),(0,r.kt)("h2",{id:"\u7b80\u5355\u7c7b\u578b\u5305\u88c5"},"\u7b80\u5355\u7c7b\u578b\u5305\u88c5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp")," \u662f\u4e00\u79cd\u5bf9\u7b80\u5355\u7c7b\u578b\u7684\u5305\u88c5\uff0c\u56e0\u6b64\u5b83\u4eec\u5f88\u53ef\u80fd\u662f",(0,r.kt)("strong",{parentName:"p"},"\u5373\u7528\u5373\u9020"),"\u7684\u3002\u56e0\u6b64\u5728\u6709\u9700\u8981\u7684\u60c5\u51b5\u4e0b\uff08\u4f8b\u5982\u670d\u52a1\u5668\u8d44\u6e90\u5341\u5206\u7d27\u7f3a\uff09\u8003\u8651\u901a\u8fc7\u53d8\u91cf\u5728\u4e0a\u4e0b\u6587\u4e2d\u4fdd\u5b58\u800c\u4e0d\u662f\u59cb\u7ec8\u901a\u8fc7\u5c5e\u6027\u83b7\u53d6\u3002"),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not so good"),"\ud83e\udd14:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val someContainer = ...\n\n// via property (getter)\nuseTimestamp(someContainer.timestamp)\nuseTimestamp(someContainer.timestamp)\nuseTimestamp(someContainer.timestamp)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not bad"),"\ud83d\udc4d:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val someContainer = ...\n\nval timestamp = someContainer.timestamp\n\n// via local variables\nuseTimestamp(timestamp)\nuseTimestamp(timestamp)\nuseTimestamp(timestamp)\n"))),(0,r.kt)(i.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not so good"),"\ud83e\udd14:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"var someContainer = ...;\n\n// via property (getter)\nuseTimestamp(someContainer.getTimestamp());\nuseTimestamp(someContainer.getTimestamp());\nuseTimestamp(someContainer.getTimestamp());\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not bad"),"\ud83d\udc4d:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"var someContainer = ...;\n\nvar timestamp = someContainer.getTimestamp();\n\n// via local variables\nuseTimestamp(timestamp);\nuseTimestamp(timestamp);\nuseTimestamp(timestamp);\n")))))}d.isMDXComponent=!0},1748:(e,t,a)=>{var n={"./locale":9234,"./locale.js":9234};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=1748},8209:(e,t,a)=>{"use strict";a.d(t,{G:()=>i});var n=a(7294),r=a(1304);const s="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[o,l]=(0,n.useState)(!1),m=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??s;a!==s&&"dark"!==a&&(a=s);const n=a===s?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(i,a)),[a,o]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){l((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?r.Z.initialize({startOnLoad:!0,...a.mermaid,theme:m}):r.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[a,m]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);