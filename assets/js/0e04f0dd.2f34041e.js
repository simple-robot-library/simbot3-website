(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[8220],{5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),i=n(6775),l=n(1980),s=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=v({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??m;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var f=n(2466),b=n(2389);const h="tabList__CuJ",k="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,f.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==i&&(c(t),l(a))},p=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},l,{className:(0,o.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(E,(0,a.Z)({key:String(t)},e))}},1610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294);const r="label_Yf5u";function o(e){let{type:t,href:n,children:o,title:i}=e;t=t||"primary",i=i||"";const l=a.createElement("span",{className:r,title:i},a.createElement("span",{className:`badge badge--${t}`},o));return null!=n&&n.length>0?a.createElement("a",{href:n},l):l}},628:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=(n(8209),n(1610));n(4866),n(5162),n(814);const i={sidebar_position:10,title:"\u7aef\u70b9\u53d8\u66f4/\u589e\u51cf\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},l=void 0,s={unversionedId:"definition/event-overview/standard-event/change-event/point-changed-event",id:"definition/event-overview/standard-event/change-event/point-changed-event",title:"\u7aef\u70b9\u53d8\u66f4/\u589e\u51cf\u4e8b\u4ef6",description:"\u7aef\u70b9\u53d8\u66f4\u4e8b\u4ef6\u3002\u4ee3\u8868\u4e3a\u4e00\u4e2a\u5728\u53d8\u66f4\u72b6\u6001\u5904\u4e8e\u7aef\u70b9\u4f4d\u7f6e\u7684\u4e8b\u4ef6\u3002",source:"@site/docs/definition/event-overview/standard-event/change-event/point-changed-event.md",sourceDirName:"definition/event-overview/standard-event/change-event",slug:"/definition/event-overview/standard-event/change-event/point-changed-event",permalink:"/docs/definition/event-overview/standard-event/change-event/point-changed-event",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/definition/event-overview/standard-event/change-event/point-changed-event.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1676044030,formattedLastUpdatedAt:"2023\u5e742\u670810\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u7aef\u70b9\u53d8\u66f4/\u589e\u51cf\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u53d8\u66f4\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/change-event/"},next:{title:"\u5bf9\u8c61\u53d8\u66f4\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/change-event/objective-changed-event"}},u={},c=[{value:"StartPointEvent",id:"startpointevent",level:2},{value:"EndPointEvent",id:"endpointevent",level:2},{value:"IncreaseEvent",id:"increaseevent",level:2},{value:"DecreaseEvent",id:"decreaseevent",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7aef\u70b9\u53d8\u66f4\u4e8b\u4ef6\u3002\u4ee3\u8868\u4e3a\u4e00\u4e2a\u5728\u53d8\u66f4\u72b6\u6001\u5904\u4e8e\u7aef\u70b9\u4f4d\u7f6e\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u7aef\u70b9\u53d8\u66f4\u4e8b\u4ef6\u7684\u6982\u5ff5\u7c7b\u4f3c\u4e8e\u53d1\u751f\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"\u589e\u52a0")," \u6216 ",(0,r.kt)("strong",{parentName:"p"},"\u51cf\u5c11")," \u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("strong",{parentName:"p"},"\u589e\u52a0")," \u4ee3\u8868\u4e3a\u7aef\u70b9\u4e8b\u4ef6\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u8d77\u70b9"),"\uff0c\u800c",(0,r.kt)("strong",{parentName:"p"},"\u51cf\u5c11")," \u4ee3\u8868\u4e3a\u7aef\u70b9\u4e8b\u4ef6\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u7ec8\u70b9"),"\u3002"),(0,r.kt)("h2",{id:"startpointevent"},"StartPointEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(o.Z,{mdxType:"Label"},"api.start_point"),(0,r.kt)("a",{href:"./#changedevent"},(0,r.kt)(o.Z,{type:"success",mdxType:"Label"},"ChangedEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2a\u4f5c\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u8d77\u70b9")," \u7684 ",(0,r.kt)("a",{parentName:"p",href:"./#changedevent"},"\u53d8\u66f4\u4e8b\u4ef6")," \u3002 \u8d77\u70b9\u4e8b\u4ef6\u901a\u5e38\u4f5c\u4e3a\u5176\u4ed6\u4e8b\u4ef6\u7684\u7236\u7c7b\u578b\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u7528\u6765\u76f4\u63a5\u76d1\u542c\u3002"),(0,r.kt)("p",null,"\u5728\u8d77\u70b9\u4e2d\uff0c\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"before")," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5e94\u5f53\u59cb\u7ec8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u3002"),(0,r.kt)("h2",{id:"endpointevent"},"EndPointEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(o.Z,{mdxType:"Label"},"api.end_point"),(0,r.kt)("a",{href:"./#changedevent"},(0,r.kt)(o.Z,{type:"success",mdxType:"Label"},"ChangedEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2a\u4f5c\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u7ec8\u70b9")," \u7684 ",(0,r.kt)("a",{parentName:"p",href:"./#changedevent"},"\u53d8\u66f4\u4e8b\u4ef6")," \u3002 \u7ec8\u70b9\u4e8b\u4ef6\u901a\u5e38\u4f5c\u4e3a\u5176\u4ed6\u4e8b\u4ef6\u7684\u7236\u7c7b\u578b\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u7528\u6765\u76f4\u63a5\u76d1\u542c\u3002"),(0,r.kt)("p",null,"\u5728\u7ec8\u70b9\u4e2d\uff0c\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"after")," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5e94\u5f53\u59cb\u7ec8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u3002"),(0,r.kt)("h2",{id:"increaseevent"},"IncreaseEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(o.Z,{mdxType:"Label"},"api.increase"),(0,r.kt)("a",{href:"#startpointevent"},(0,r.kt)(o.Z,{type:"success",mdxType:"Label"},"StartPointEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u589e\u52a0/\u589e\u957f")," \u4e8b\u4ef6\u3002\u901a\u5e38\u7528\u4e8e\u63cf\u8ff0\u6b64\u4e8b\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," \u4e2d\u67d0\u4e8b\u7269\u88ab\u589e\u52a0\u4e86\u3002\u4f8b\u5982\u4e00\u4e2a\u7fa4\u5185\u589e\u52a0\u4e86\u4e00\u540d\u7fa4\u6210\u5458\u3002\u901a\u5e38\u4f5c\u4e3a\u5176\u4ed6\u4e8b\u4ef6\u7684\u7236\u7c7b\u578b\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u7528\u6765\u76f4\u63a5\u76d1\u542c\u3002"),(0,r.kt)("h2",{id:"decreaseevent"},"DecreaseEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(o.Z,{mdxType:"Label"},"api.decrease"),(0,r.kt)("a",{href:"#endpointevent"},(0,r.kt)(o.Z,{type:"success",mdxType:"Label"},"EndPointEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u51cf\u5c11")," \u4e8b\u4ef6\u3002\u901a\u5e38\u7528\u4e8e\u63cf\u8ff0\u6b64\u4e8b\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," \u4e2d\u67d0\u4e8b\u7269\u88ab\u51cf\u5c11\u4e86\u3002\u4f8b\u5982\u4e00\u4e2a\u7fa4\u5185\u51cf\u5c11\u4e86\u4e00\u540d\u7fa4\u6210\u5458\u3002\u901a\u5e38\u4f5c\u4e3a\u5176\u4ed6\u4e8b\u4ef6\u7684\u7236\u7c7b\u578b\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u7528\u6765\u76f4\u63a5\u76d1\u542c\u3002"))}p.isMDXComponent=!0},1748:(e,t,n)=>{var a={"./locale":9234,"./locale.js":9234};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=1748},8209:(e,t,n)=>{"use strict";n.d(t,{G:()=>i});var a=n(7294),r=n(1304);const o="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return a.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const n=(0,a.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[l,s]=(0,a.useState)(!1),u=(0,a.useMemo)((()=>function(e,t){let n=e.getAttribute("data-theme")??o;n!==o&&"dark"!==n&&(n=o);const a=n===o?"default":"dark";return t?.theme?.[n]??t?.mermaid?.theme??a}(i,n)),[n,l]);return(0,a.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){s((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,a.useEffect)((()=>{n&&(n.mermaid?r.Z.initialize({startOnLoad:!0,...n.mermaid,theme:u}):r.Z.initialize({startOnLoad:!0,theme:u}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[n,u]),(0,a.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[e]),a.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);