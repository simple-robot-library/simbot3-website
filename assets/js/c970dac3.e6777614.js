(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3734],{2991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var a=n(7294),r=n(6010),l=n(3438),i=n(9960),o=n(3919),s=n(5999);const u="cardContainer_fWXF",c="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return a.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",u)},n)}function p(e){let{href:t,icon:n,title:l,description:i}=e;return a.createElement(m,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",c),title:l},n," ",l),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",d),title:i},i))}function v(e){let{item:t}=e;const n=(0,l.Wl)(t);return n?a.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,l.xz)(t.docId??void 0);return a.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??(null==r?void 0:r.description)})}function h(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(v,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,l.jA)();return a.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return a.createElement(b,e);const i=(0,l.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(h,{item:e})))))}},5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},4866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var a=n(7462),r=n(7294),l=n(6010),i=n(6775),o=n(1980),s=n(7392),u=n(12);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,c]=p({queryString:n,groupId:a}),[v,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=s??v;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var f=n(2466),h=n(2389);const b="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,f.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==i&&(c(t),o(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":i===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function E(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},1610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(7294);const r="label_Yf5u";function l(e){let{type:t,href:n,children:l,title:i}=e;t=t||"primary",i=i||"";const o=a.createElement("span",{className:r,title:i},a.createElement("span",{className:`badge badge--${t}`},l));return null!=n&&n.length>0?a.createElement("a",{href:n},o):o}},3766:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>v});var a=n(7462),r=(n(7294),n(3905)),l=(n(8209),n(1610)),i=n(4866),o=n(5162),s=(n(814),n(2991)),u=n(3438);const c={title:"\u53d8\u66f4\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},d=void 0,m={unversionedId:"definition/event-overview/standard-event/change-event/index",id:"definition/event-overview/standard-event/change-event/index",title:"\u53d8\u66f4\u4e8b\u4ef6",description:"\u6807\u51c6\u4e8b\u4ef6\u4e2d\u4e0e \u53d8\u66f4 \u6709\u5173\u7684\u7cfb\u5217\u4e8b\u4ef6\u7c7b\u578b\u3002",source:"@site/docs/definition/event-overview/standard-event/change-event/index.md",sourceDirName:"definition/event-overview/standard-event/change-event",slug:"/definition/event-overview/standard-event/change-event/",permalink:"/docs/definition/event-overview/standard-event/change-event/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/definition/event-overview/standard-event/change-event/index.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1683786312,formattedLastUpdatedAt:"2023\u5e745\u670811\u65e5",frontMatter:{title:"\u53d8\u66f4\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u8bf7\u6c42\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/request-event/"},next:{title:"\u7aef\u70b9\u53d8\u66f4/\u589e\u51cf\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/change-event/point-changed-event"}},p={},v=[{value:"ChangeEvent",id:"changeevent",level:2},{value:"ChangedEvent",id:"changedevent",level:2},{value:"\u5176\u4ed6\u76f8\u5173\u4e8b\u4ef6",id:"\u5176\u4ed6\u76f8\u5173\u4e8b\u4ef6",level:2}],f={toc:v};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6807\u51c6\u4e8b\u4ef6\u4e2d\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u53d8\u66f4")," \u6709\u5173\u7684\u7cfb\u5217\u4e8b\u4ef6\u7c7b\u578b\u3002"),(0,r.kt)("h2",{id:"changeevent"},"ChangeEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.change")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53d8\u66f4")," \u4e8b\u4ef6\u7684\u57fa\u7840\u7236\u7c7b\u63a5\u53e3\u7c7b\u578b\u3002\u4ee3\u8868\u4e00\u4e2a\u4e8b\u7269\u53d1\u751f\u4e86",(0,r.kt)("strong",{parentName:"p"},"\u53d8\u5316"),"\u3002\u8fd9\u662f\u4e00\u79cd\u6bd4\u8f83 ",(0,r.kt)("strong",{parentName:"p"},"\u7b3c\u7edf")," \u7684\u53d8\u5316\u6982\u5ff5\uff0c\u4e0d\u533a\u5206 ",(0,r.kt)("em",{parentName:"p"},"\u53d8\u5316\u524d")," \u6216\u8005\u8bf4 ",(0,r.kt)("em",{parentName:"p"},"\u53d8\u5316\u540e")," \u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Any")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u66f4\u8f7d\u4f53\u3002\u5373\u672c\u6b21\u53d8\u66f4\u6240\u53d1\u751f\u7684\u573a\u6240\u6216\u8005\u76ee\u6807\u3002\u53ef\u80fd\u4e3a\u4efb\u4f55\u7c7b\u578b\uff0c\u4e0d\u505a\u7ea6\u675f\uff0c\u4f46\u4e0d\u5e94\u4e3anull\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"before")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Any?")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u66f4\u884c\u4e3a\u53d1\u751f\u524d\u53d8\u5316\u76ee\u6807\u7684\u503c\u3002\u5f53\u4e0d\u652f\u6301\u83b7\u53d6\u3001\u4e0d\u5b58\u5728\u7b49\u60c5\u51b5\u4e0b\u53ef\u80fd\u4e3anull\u3002\u5177\u4f53\u60c5\u51b5\u9700\u8981\u53c2\u8003\u5177\u4f53\u4e8b\u4ef6\u7c7b\u578b\u7684\u63cf\u8ff0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"after")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Any?")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u66f4\u884c\u4e3a\u53d1\u751f\u540e\u53d8\u5316\u76ee\u6807\u7684\u503c\u3002\u5f53\u4e0d\u652f\u6301\u83b7\u53d6\u3001\u4e0d\u5b58\u5728\u3001\u5c1a\u672a\u53d1\u751f\u53d8\u66f4\u7b49\u60c5\u51b5\u4e0b\u53ef\u80fd\u4e3anull\u3002\u5177\u4f53\u60c5\u51b5\u9700\u8981\u53c2\u8003\u5177\u4f53\u4e8b\u4ef6\u7c7b\u578b\u7684\u63cf\u8ff0\u3002")))),(0,r.kt)("h2",{id:"changedevent"},"ChangedEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.changed"),(0,r.kt)("a",{href:"#changeevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ChangeEvent"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#changeevent"},(0,r.kt)("strong",{parentName:"a"},"ChangeEvent"))," \u7684\u57fa\u7840\u5b50\u7c7b\u578b\uff0c\u4ee3\u8868\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u5df2\u7ecf\u53d1\u751f\u4e86\u53d8\u5316"),"\u7684\u53d8\u5316\u4e8b\u4ef6\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"changedTime")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u66f4\u53d1\u751f\u7684\u65f6\u95f4\u3002\u4e0d\u4fdd\u8bc1\u4e3a\u5177\u4f53\u7684\u670d\u52a1\u5668\u65f6\u95f4\uff0c\u5728\u4e0d\u652f\u6301\u7684\u60c5\u51b5\u4e0b\u53ef\u80fd\u4e3a\u4e8b\u4ef6\u88ab\u6784\u9020\u65f6\u7684\u672c\u5730\u77ac\u65f6\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")))),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val source: Any = event.source\nval before: Any = event.before\nval after: Any = event.after\n"))),(0,r.kt)(o.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Object source = event.getSource();\nObject before = event.getBefore();\nObject after = event.getAfter();\n")))),(0,r.kt)("h2",{id:"\u5176\u4ed6\u76f8\u5173\u4e8b\u4ef6"},"\u5176\u4ed6\u76f8\u5173\u4e8b\u4ef6"),(0,r.kt)(s.Z,{items:(0,u.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0},1748:(e,t,n)=>{var a={"./locale":9234,"./locale.js":9234};function r(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id=1748},8209:(e,t,n)=>{"use strict";n.d(t,{G:()=>i});var a=n(7294),r=n(1304);const l="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return a.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const n=(0,a.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[o,s]=(0,a.useState)(!1),u=(0,a.useMemo)((()=>function(e,t){let n=e.getAttribute("data-theme")??l;n!==l&&"dark"!==n&&(n=l);const a=n===l?"default":"dark";return t?.theme?.[n]??t?.mermaid?.theme??a}(i,n)),[n,o]);return(0,a.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){s((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,a.useEffect)((()=>{n&&(n.mermaid?r.Z.initialize({startOnLoad:!0,...n.mermaid,theme:u}):r.Z.initialize({startOnLoad:!0,theme:u}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[n,u]),(0,a.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[e]),a.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);