(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3367],{5162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>D});var n=a(7462),r=a(7294),l=a(6010),o=a(6775),i=a(1980),u=a(7392),s=a(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function I(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,d]=p({queryString:a,groupId:n}),[I,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=u??I;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),k(e)}),[d,k,l]),tabValues:l}}var k=a(2466),b=a(2389);const f="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,k.o5)(),c=e=>{const t=e.currentTarget,a=s.indexOf(t),n=u[a].value;n!==o&&(d(t),i(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":o===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=I(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function D(e){const t=(0,b.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},1610:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(7294);const r="label_Yf5u";function l(e){let{type:t,href:a,children:l,title:o}=e;t=t||"primary",o=o||"";const i=n.createElement("span",{className:r,title:o},n.createElement("span",{className:`badge badge--${t}`},l));return null!=a&&a.length>0?n.createElement("a",{href:a},i):i}},5965:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>I,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=(a(8209),a(4866)),o=a(5162),i=a(1610);const u={sidebar_position:10,title:"\u552f\u4e00\u6807\u8bc6 ID"},s=void 0,d={unversionedId:"definition/ID",id:"definition/ID",title:"\u552f\u4e00\u6807\u8bc6 ID",description:"ID\uff0c\u7528\u4e8e\u4ee3\u8868\u4e00\u4e2a\u76ee\u6807\u7684\u552f\u4e00\u6807\u8bc6\u3002ID\u4e00\u4e2a\u5927\u5bb6\u90fd\u719f\u6089\u7684\u5185\u5bb9\uff0c\u5b83\u5e38\u5e38\u8868\u73b0\u4e3a\u4e00\u4e32\u6570\u5b57\uff0c\u6216\u8005\u4e00\u4e32\u5b57\u7b26\u3002",source:"@site/docs/definition/ID.md",sourceDirName:"definition",slug:"/definition/ID",permalink:"/docs/definition/ID",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/definition/ID.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1703008710,formattedLastUpdatedAt:"2023\u5e7412\u670819\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u552f\u4e00\u6807\u8bc6 ID"},sidebar:"docs",previous:{title:"\u6807\u51c6\u5b9a\u4e49",permalink:"/docs/definition/"},next:{title:"\u5143\u7d20\u5e8f\u5217",permalink:"/docs/definition/Items"}},c={},m=[{value:"ID",id:"id",level:2},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"NumericalID",id:"numericalid",level:3},{value:"CharSequenceID",id:"charsequenceid",level:3},{value:"\u7b80\u5355\u7c7b\u578b\u5305\u88c5",id:"\u7b80\u5355\u7c7b\u578b\u5305\u88c5",level:2}],p={toc:m};function I(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ID\uff0c\u7528\u4e8e\u4ee3\u8868\u4e00\u4e2a\u76ee\u6807\u7684\u552f\u4e00\u6807\u8bc6\u3002ID\u4e00\u4e2a\u5927\u5bb6\u90fd\u719f\u6089\u7684\u5185\u5bb9\uff0c\u5b83\u5e38\u5e38\u8868\u73b0\u4e3a\u4e00\u4e32\u6570\u5b57\uff0c\u6216\u8005\u4e00\u4e32\u5b57\u7b26\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u7edf\u4e00\u5728\u5404\u4e2a\u73af\u5883\u4e0b\u53ef\u80fd\u5b58\u5728\u7684ID\u7c7b\u578b\u5dee\u5f02\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"simbot3")," \u4e2d\u63d0\u4f9b\u4e86\u4e00\u5957\u9488\u5bf9ID\u7684\u7c7b\u578b\u3002"),(0,r.kt)("h2",{id:"id"},"ID"),(0,r.kt)("p",null,"ID \u662f\u4e00\u4e2a\u901a\u7528\u7684\u552f\u4e00\u6807\u8bc6\u5b9a\u4e49\uff0c\u5176\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"sealed class ID : Comparable<ID> {\n  // \u5f97\u5230\u5b57\u7b26\u4e32\u7c7b\u578b\u5b57\u9762\u503c\n    fun toString(): String\n  \n  // \u6bd4\u8f83\n  fun compareTo(other: ID): Int\n}\n")),(0,r.kt)("p",null,"\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," \u6709\u4e24\u5c42\u542b\u4e49\uff1a\u8fd9\u4e2a\u552f\u4e00\u6807\u8bc6\u7684\u7c7b\u578b\uff0c\u4ee5\u53ca\u5b83\u5177\u4f53\u7684\u503c\u3002\n\u4e0d\u540c\u7c7b\u578b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," \u7684\u503c\u7c7b\u578b\u53ef\u80fd\u4e0d\u540c\uff0c\u4f46\u662f\u4f60\u90fd\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"toString")," \u6765\u5f97\u5230\u5b83\u4eec\u7684\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u3002"),(0,r.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ID")," \u603b\u5171\u67093\u4e2a\u5927\u7c7b\u578b\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"NumericalID")," (\u5c24\u5176 ",(0,r.kt)("inlineCode",{parentName:"p"},"IntID")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"LongID")," ) \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"CharSequenceID")," \u7406\u8bba\u4e0a\u53ef\u4ee5\u6ee1\u8db3\u7edd\u5927\u591a\u6570\u9700\u6c42\u3002"),(0,r.kt)("h3",{id:"numericalid"},"NumericalID"),(0,r.kt)("p",null,"\u6b64\u7c7b\u578b\u4ee3\u8868\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u6570\u5b57\u5f62\u5f0f")," \u7684ID\u3002\u5176\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"sealed class NumericalID<N : Number> : ID() {\n  // \u5f97\u5230\u5b57\u9762\u503c\n  fun getValue(): N\n  \n  \n  // \u4e00\u4e9b\u7c7b\u4f3c\u4e8e Number\u4e2d\u7684\u65b9\u6cd5\n  \n  fun toByte(): Byte\n  fun toShort(): Short\n  fun toInt(): Int\n  fun toLong(): Long\n  fun toDouble(): Double\n  fun toFloat(): Float\n  fun toChar(): Char\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NumericalID"),"\u63d0\u4f9b\u4e86\u5f88\u591a\u57fa\u672c\u7684\u7c7b\u578b\u5b9e\u73b0\uff0c\u4f46\u662f\u5b9e\u9645\u4e0a\u53ea\u6709\u6574\u578b\u7c7b\u578b\u624d\u662f\u6700\u5e38\u7528\u7684\u7c7b\u578b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IntID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LongID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UIntID")," ",(0,r.kt)(i.Z,{mdxType:"Label"},"3.1.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ULongID")," ",(0,r.kt)(i.Z,{mdxType:"Label"},"3.1.0"))),(0,r.kt)("admonition",{title:"future",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u672a\u6765\uff0c\u4e5f\u53ef\u80fd\u5728 simbot 4.0\uff0cID\u7c7b\u578b\u4f1a\u8fdb\u4e00\u6b65\u88ab\u7b80\u5316\u3002")),(0,r.kt)("p",null,"\u7b80\u5355\u7684\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)(l.Z,{groupId:"id-type",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Int",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val intId = 123.ID\n"))),(0,r.kt)(o.Z,{value:"Long",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val longId = 123456L.ID\n"))),(0,r.kt)(o.Z,{value:"UInt",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)(i.Z,{mdxType:"Label"},"3.1.0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val longId = 123456u.ID\n"))),(0,r.kt)(o.Z,{value:"ULong",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)(i.Z,{mdxType:"Label"},"3.1.0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val ul: ULong = 123456u\nval longId = ul.ID\n"))))),(0,r.kt)(o.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)(l.Z,{groupId:"id-type",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Int",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"final IntID intId = Identifies.ID(123);\n"))),(0,r.kt)(o.Z,{value:"Long",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"final LongID longId = Identifies.ID(123456L);\n")))))),(0,r.kt)("h3",{id:"charsequenceid"},"CharSequenceID"),(0,r.kt)("p",null,"\u9664\u4e86\u6570\u5b57ID\uff0c\u6700\u5e38\u89c1\u7684\u5c31\u662f\u5b57\u7b26\u5e8f\u5217ID\u4e86\uff0c\u6bd4\u5982\u4e00\u4e32UUID\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"CharSequenceID")," \u662f\u4e00\u4e2a\u72ec\u7acb\u5b9e\u73b0\uff0c\u8868\u793a\u4e00\u4e2a\u6700\u57fa\u7840\u7684\u5b57\u7b26\u4e32ID\u3002"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",default:!0,attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val id: CharSequenceID = "HelloWorld".ID\n\nval anyId: CharSequenceID = 123.ID.toCharSequenceID() // \u6240\u6709ID\u7406\u8bba\u4e0a\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u5b57\u7b26\u5e8f\u5217ID\n'))),(0,r.kt)(o.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final CharSequenceID helloId = Identifies.ID("HelloWorld");\n\nfinal CharSequenceID strId = Identifies.toCharSequenceID(Identifies.ID(123));\n')))),(0,r.kt)("h2",{id:"\u7b80\u5355\u7c7b\u578b\u5305\u88c5"},"\u7b80\u5355\u7c7b\u578b\u5305\u88c5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ID")," \u662f\u4e00\u79cd\u5bf9\u7b80\u5355\u7c7b\u578b\u7684\u5305\u88c5\uff0c\u56e0\u6b64\u5b83\u4eec\u5f88\u53ef\u80fd\u662f",(0,r.kt)("strong",{parentName:"p"},"\u5373\u7528\u5373\u9020"),"\u7684\u3002\u56e0\u6b64\u5728\u6709\u9700\u8981\u7684\u60c5\u51b5\u4e0b\uff08\u4f8b\u5982\u670d\u52a1\u5668\u8d44\u6e90\u5341\u5206\u7d27\u7f3a\uff09\u8003\u8651\u901a\u8fc7\u53d8\u91cf\u5728\u4e0a\u4e0b\u6587\u4e2d\u4fdd\u5b58\u800c\u4e0d\u662f\u59cb\u7ec8\u901a\u8fc7\u5c5e\u6027\u83b7\u53d6\u3002"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not so good"),"\ud83e\udd14:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val someContainer = ...\n\n// via property (getter)\nuseId(someContainer.id)\nuseId(someContainer.id)\nuseId(someContainer.id)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not bad"),"\ud83d\udc4d:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val someContainer = ...\n\nval id = someContainer.id\n\n// via local variables\nuseId(id)\nuseId(id)\nuseId(id)\n"))),(0,r.kt)(o.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not so good"),"\ud83e\udd14:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"var someContainer = ...;\n\n// via property (getter)\nuseId(someContainer.getId());\nuseId(someContainer.getId());\nuseId(someContainer.getId());\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not bad"),"\ud83d\udc4d:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"var someContainer = ...;\n\nvar id = someContainer.getId();\n\n// via local variables\nuseId(id);\nuseId(id);\nuseId(id);\n")))))}I.isMDXComponent=!0},1748:(e,t,a)=>{var n={"./locale":9234,"./locale.js":9234};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=1748},8209:(e,t,a)=>{"use strict";a.d(t,{G:()=>o});var n=a(7294),r=a(1304);const l="light";const o=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),o=document.querySelector("html"),[i,u]=(0,n.useState)(!1),s=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??l;a!==l&&"dark"!==a&&(a=l);const n=a===l?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(o,a)),[a,i]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){u((e=>!e));break}}));return e.observe(o,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?r.Z.initialize({startOnLoad:!0,...a.mermaid,theme:s}):r.Z.initialize({startOnLoad:!0,theme:s}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[a,s]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);