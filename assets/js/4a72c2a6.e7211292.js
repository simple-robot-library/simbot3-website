(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3308],{5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(7294),i=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:n},t)}},4866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(7462),i=n(7294),r=n(6010),l=n(6775),o=n(1980),c=n(7392),u=n(12);function s(e){return function(e){return i.Children.map(e,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,s]=m({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),v=(()=>{const e=c??b;return d({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,r]),tabValues:r}}var f=n(2466),v=n(2389);const k="tabList__CuJ",g="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:l,selectValue:o,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:s}=(0,f.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(s(t),o(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},o,{className:(0,r.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":l===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function A(e){const t=b(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",k)},i.createElement(h,(0,a.Z)({},e,t)),i.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,v.Z)();return i.createElement(A,(0,a.Z)({key:String(t)},e))}},1610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(7294);const i="label_Yf5u";function r(e){let{type:t,href:n,children:r,title:l}=e;t=t||"primary",l=l||"";const o=a.createElement("span",{className:i,title:l},a.createElement("span",{className:`badge badge--${t}`},r));return null!=n&&n.length>0?a.createElement("a",{href:n},o):o}},1644:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),r=(n(8209),n(1610),n(4866)),l=n(5162);const o={sidebar_position:10,title:"Application"},c=void 0,u={unversionedId:"basic/application",id:"basic/application",title:"Application",description:"Application \u5373\u4e3a\u5bf9\u4e00\u4e2asimbot\u5e94\u7528\u7684\u63cf\u8ff0\uff0c\u5176\u5305\u542b\u4e86\u4e00\u4e2a\u5e94\u7528\u8303\u56f4\u5185\u5b89\u88c5\u7684\u7ec4\u4ef6\u3001\u4e8b\u4ef6\u63d0\u4f9b\u8005\u4ee5\u53ca\u4e00\u4e9b\u6240\u9700\u5c5e\u6027\u7b49\u4fe1\u606f\u3002",source:"@site/docs/basic/application.md",sourceDirName:"basic",slug:"/basic/application",permalink:"/docs/basic/application",draft:!1,editUrl:"https://github.com/simple-robot/simpler-robot/tree/v3-dev/website/docs/basic/application.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1676299898,formattedLastUpdatedAt:"2023\u5e742\u670813\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Application"},sidebar:"docs",previous:{title:"BOT\u7ba1\u7406\u5668",permalink:"/docs/definition/bot-manager/"},next:{title:"\u76d1\u542c\u51fd\u6570",permalink:"/docs/basic/event-listener"}},s={},p=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u6784\u5efa",id:"\u6784\u5efa",level:2},{value:"\u6784\u5efa\u5de5\u5382",id:"\u6784\u5efa\u5de5\u5382",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Application")," \u5373\u4e3a\u5bf9\u4e00\u4e2asimbot\u5e94\u7528\u7684\u63cf\u8ff0\uff0c\u5176\u5305\u542b\u4e86\u4e00\u4e2a\u5e94\u7528\u8303\u56f4\u5185\u5b89\u88c5\u7684\u7ec4\u4ef6\u3001\u4e8b\u4ef6\u63d0\u4f9b\u8005\u4ee5\u53ca\u4e00\u4e9b\u6240\u9700\u5c5e\u6027\u7b49\u4fe1\u606f\u3002"),(0,i.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,i.kt)("p",null,"\u4e86\u89e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," \u7684\u7b2c\u4e00\u6b65\uff0c\u5148\u8ba9\u6211\u4eec\u6765\u7b80\u5355\u4e86\u89e3\u4e00\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," \u7684",(0,i.kt)("strong",{parentName:"p"},"\u5b9a\u4e49"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"public interface Application : CoroutineScope {\n\n    /**\n     * \u5f53\u524d [Application] \u7684\u90e8\u5206\u5c5e\u6027\u3002\n     */\n    public val environment: Environment\n\n    /**\n     * \u5728\u8fdb\u884c\u6784\u5efa\u65f6\u6240\u4f7f\u7528\u7684\u914d\u7f6e\u4fe1\u606f\u3002\n     * \u6784\u5efa\u5b8c\u6210\u540e\u53ef\u4ee5\u5f97\u5230\uff0c\u4f46\u662f\u5c3d\u53ef\u80fd\u4e0d\u8981\u8fdb\u884c\u4fee\u6539\u64cd\u4f5c\u3002\u8fd9\u53ef\u80fd\u6ca1\u6709\u610f\u4e49\uff0c\u4e5f\u53ef\u80fd\u4f1a\u5bfc\u81f4\u610f\u5916\u7684\u9519\u8bef\u3002\n     */\n    public val configuration: ApplicationConfiguration\n\n    /**\n     * \u5f97\u5230\u5f53\u524d [Application] \u6700\u7ec8\u7684 [EventListenerManager].\n     */\n    public val eventListenerManager: EventListenerManager\n\n    /**\n     * \u5f53\u524d\u5e94\u7528\u4e0b\u7684\u6240\u6709 [\u4e8b\u4ef6\u63d0\u4f9b\u8005][EventProvider]\u3002\n     */\n    public val providers: List<EventProvider>\n\n    /**\n     * \u5f53\u524d\u5e94\u7528\u4e0b\u7684\u6240\u6709 [bot\u7ba1\u7406\u5668][BotManager]\u3002\n     */\n    public val botManagers: BotManagers\n\n    /**\n     * \u6302\u8d77\u6b64\u5e94\u7528\u76f4\u81f3\u5176\u88ab\u7ec8\u6b62\u3002\n     */\n    public suspend fun join()\n\n    /**\n     * \u7ec8\u6b62\u5f53\u524d\u5e94\u7528\uff0c\u5e76\u5173\u95ed\u5176\u4e2d\u6240\u6709\u53ef\u80fd\u7684\u8d44\u6e90\u3002\n     * [Application] \u88ab\u7ec8\u6b62\u540e\u5c06\u4e0d\u80fd\u518d\u6b21\u542f\u52a8\u3002\n     */\n    public suspend fun shutdown(reason: Throwable? = null)\n}\n")),(0,i.kt)("h2",{id:"\u6784\u5efa"},"\u6784\u5efa"),(0,i.kt)("p",null,"\u60f3\u8981\u6784\u5efa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),", \u9700\u8981\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"createSimbotApplication")," \u51fd\u6570\u3002"),(0,i.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"createSimbotApplication(FACTORY, configurator = { /* config function block */ }) {\n    // build function block\n}\n"))),(0,i.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("p",null,"\u5728Java\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"createSimbotApplication")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Applications")," \u7684\u9759\u6001\u51fd\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"xxxApplication application = Applications.createSimbotApplication(\n        FACTORY,\n        (config) -> { \n          // config function block \n        },\n        (builder, config) -> {\n          // build function block\n        });\n")))),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"createSimbotApplication")," \u9700\u8981\u4e09\u4e2a\u53c2\u6570\uff1a"),(0,i.kt)("p",null,"\u7b2c\u4e00\u4e2a\u4e3a\u76ee\u6807 ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," \u7684\u5de5\u5382\u7c7b\u578b\uff1b"),(0,i.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u4e3a\u8fdb\u884c\u6784\u5efa\u4e4b\u524d\u7684\u5c5e\u6027\u914d\u7f6e\uff1b"),(0,i.kt)("p",null,"\u7b2c\u4e09\u4e2a\u5219\u4e3a\u9488\u5bf9\u5f53\u524dApplication\u7684\u6784\u5efa\u5185\u5bb9\u3002"),(0,i.kt)("h3",{id:"\u6784\u5efa\u5de5\u5382"},"\u6784\u5efa\u5de5\u5382"),(0,i.kt)("p",null,"\u6211\u4eec\u4e0a\u6587\u63d0\u5230\u4e86\u6784\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),"\u7684",(0,i.kt)("strong",{parentName:"p"},'"\u5de5\u5382"'),"\uff0c\u8fd9\u5176\u5b9e\u5c31\u662f\u4ee3\u8868\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationFactory"),"\n\u7c7b\u578b\u7684\u5b9e\u4f8b\uff0csimbot\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4e09\u4e2a\u5b9e\u73b0\uff0c\u5176\u4e2d\u6700\u5e38\u7528\u7684\u5373\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Simple")," \u5de5\u5382\uff1a"),(0,i.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val application = createSimbotApplication(\n          // This is success\n          Simple, \n          configurator = { /* config function block */ }\n      ) {\n          // build function block\n      }\n"))),(0,i.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("p",null,"\u5728Java\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"createSimbotApplication")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Applications")," \u7684\u9759\u6001\u51fd\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"SimpleApplication application = Applications.createSimbotApplication(\n        // This is success\n        Simple.INSTANCE,\n        (config) -> { \n          // config function block \n        },\n        (builder, config) -> {\n          // build function block\n        });\n")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Simple")," \u5de5\u5382\u6784\u5efa\u800c\u5f97\u5230\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleApplication"),"\uff0c\u4e5f\u662fsimbot\u9ed8\u8ba4\u63d0\u4f9b\u7684\u6700\u57fa\u7840\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),"\u3002"))}m.isMDXComponent=!0},1748:(e,t,n)=>{var a={"./locale":9234,"./locale.js":9234};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=1748},8209:(e,t,n)=>{"use strict";n.d(t,{G:()=>l});var a=n(7294),i=n(1304);const r="light";const l=({chart:e,config:t})=>{if("undefined"==typeof window)return a.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const n=(0,a.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),l=document.querySelector("html"),[o,c]=(0,a.useState)(!1),u=(0,a.useMemo)((()=>function(e,t){let n=e.getAttribute("data-theme")??r;n!==r&&"dark"!==n&&(n=r);const a=n===r?"default":"dark";return t?.theme?.[n]??t?.mermaid?.theme??a}(l,n)),[n,o]);return(0,a.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){c((e=>!e));break}}));return e.observe(l,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,a.useEffect)((()=>{n&&(n.mermaid?i.Z.initialize({startOnLoad:!0,...n.mermaid,theme:u}):i.Z.initialize({startOnLoad:!0,theme:u}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),i.Z.contentLoaded())}),[n,u]),(0,a.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(i.Z.contentLoaded,0)}),[e]),a.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);