"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3308],{21931:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(85893),i=t(11151),r=(t(31610),t(74866)),l=t(85162);const o={sidebar_position:10,title:"Application"},c=void 0,s={id:"basic/application",title:"Application",description:"Application \u5373\u4e3a\u5bf9\u4e00\u4e2asimbot\u5e94\u7528\u7684\u63cf\u8ff0\uff0c\u5176\u5305\u542b\u4e86\u4e00\u4e2a\u5e94\u7528\u8303\u56f4\u5185\u5b89\u88c5\u7684\u7ec4\u4ef6\u3001\u4e8b\u4ef6\u63d0\u4f9b\u8005\u4ee5\u53ca\u4e00\u4e9b\u6240\u9700\u5c5e\u6027\u7b49\u4fe1\u606f\u3002",source:"@site/docs/basic/application.md",sourceDirName:"basic",slug:"/basic/application",permalink:"/docs/basic/application",draft:!1,unlisted:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/basic/application.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1703923363,formattedLastUpdatedAt:"2023\u5e7412\u670830\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Application"},sidebar:"docs",previous:{title:"BOT\u7ba1\u7406\u5668",permalink:"/docs/definition/bot-manager/"},next:{title:"\u76d1\u542c\u51fd\u6570",permalink:"/docs/basic/event-listener"}},u={},d=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u6784\u5efa",id:"\u6784\u5efa",level:2},{value:"\u6784\u5efa\u5de5\u5382",id:"\u6784\u5efa\u5de5\u5382",level:3}];function p(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Application"})," \u5373\u4e3a\u5bf9\u4e00\u4e2asimbot\u5e94\u7528\u7684\u63cf\u8ff0\uff0c\u5176\u5305\u542b\u4e86\u4e00\u4e2a\u5e94\u7528\u8303\u56f4\u5185\u5b89\u88c5\u7684\u7ec4\u4ef6\u3001\u4e8b\u4ef6\u63d0\u4f9b\u8005\u4ee5\u53ca\u4e00\u4e9b\u6240\u9700\u5c5e\u6027\u7b49\u4fe1\u606f\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5b9a\u4e49",children:"\u5b9a\u4e49"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e86\u89e3 ",(0,a.jsx)(n.code,{children:"Application"})," \u7684\u7b2c\u4e00\u6b65\uff0c\u5148\u8ba9\u6211\u4eec\u6765\u7b80\u5355\u4e86\u89e3\u4e00\u4e0b ",(0,a.jsx)(n.code,{children:"Application"})," \u7684",(0,a.jsx)(n.strong,{children:"\u5b9a\u4e49"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:" interface Application : CoroutineScope {\n\n    /**\n     * \u5f53\u524d [Application] \u7684\u90e8\u5206\u5c5e\u6027\u3002\n     */\n    val environment: Environment\n\n    /**\n     * \u5728\u8fdb\u884c\u6784\u5efa\u65f6\u6240\u4f7f\u7528\u7684\u914d\u7f6e\u4fe1\u606f\u3002\n     * \u6784\u5efa\u5b8c\u6210\u540e\u53ef\u4ee5\u5f97\u5230\uff0c\u4f46\u662f\u5c3d\u53ef\u80fd\u4e0d\u8981\u8fdb\u884c\u4fee\u6539\u64cd\u4f5c\u3002\u8fd9\u53ef\u80fd\u6ca1\u6709\u610f\u4e49\uff0c\u4e5f\u53ef\u80fd\u4f1a\u5bfc\u81f4\u610f\u5916\u7684\u9519\u8bef\u3002\n     */\n    val configuration: ApplicationConfiguration\n\n    /**\n     * \u5f97\u5230\u5f53\u524d [Application] \u6700\u7ec8\u7684 [EventListenerManager].\n     */\n    val eventListenerManager: EventListenerManager\n\n    /**\n     * \u5f53\u524d\u5e94\u7528\u4e0b\u7684\u6240\u6709 [\u4e8b\u4ef6\u63d0\u4f9b\u8005][EventProvider]\u3002\n     */\n    val providers: List<EventProvider>\n\n    /**\n     * \u5f53\u524d\u5e94\u7528\u4e0b\u7684\u6240\u6709 [bot\u7ba1\u7406\u5668][BotManager]\u3002\n     */\n    val botManagers: BotManagers\n\n    /**\n     * \u6302\u8d77\u6b64\u5e94\u7528\u76f4\u81f3\u5176\u88ab\u7ec8\u6b62\u3002\n     */\n    suspend fun join()\n\n    /**\n     * \u7ec8\u6b62\u5f53\u524d\u5e94\u7528\uff0c\u5e76\u5173\u95ed\u5176\u4e2d\u6240\u6709\u53ef\u80fd\u7684\u8d44\u6e90\u3002\n     * [Application] \u88ab\u7ec8\u6b62\u540e\u5c06\u4e0d\u80fd\u518d\u6b21\u542f\u52a8\u3002\n     */\n    suspend fun shutdown(reason: Throwable? = null)\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u6784\u5efa",children:"\u6784\u5efa"}),"\n",(0,a.jsxs)(n.p,{children:["\u60f3\u8981\u6784\u5efa\u4e00\u4e2a ",(0,a.jsx)(n.code,{children:"Application"}),", \u9700\u8981\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"createSimbotApplication"})," \u51fd\u6570\u3002"]}),"\n",(0,a.jsxs)(r.Z,{groupId:"code",children:[(0,a.jsx)(l.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"createSimbotApplication(FACTORY, configurator = { /* config function block */ }) {\n    // build function block\n}\n"})})}),(0,a.jsxs)(l.Z,{value:"Java",attributes:{"data-value":"Java"},children:[(0,a.jsxs)(n.p,{children:["\u5728Java\u4e2d\uff0c",(0,a.jsx)(n.code,{children:"createSimbotApplication"})," \u662f ",(0,a.jsx)(n.code,{children:"Applications"})," \u7684\u9759\u6001\u51fd\u6570\u3002"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"xxxApplication application = Applications.createSimbotApplication(\n        FACTORY,\n        (config) -> { \n          // config function block \n        },\n        (builder, config) -> {\n          // build function block\n        });\n"})})]})]}),"\n",(0,a.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u51fa\uff0c",(0,a.jsx)(n.code,{children:"createSimbotApplication"})," \u9700\u8981\u4e09\u4e2a\u53c2\u6570\uff1a"]}),"\n",(0,a.jsxs)(n.p,{children:["\u7b2c\u4e00\u4e2a\u4e3a\u76ee\u6807 ",(0,a.jsx)(n.code,{children:"Application"})," \u7684\u5de5\u5382\u7c7b\u578b\uff1b"]}),"\n",(0,a.jsx)(n.p,{children:"\u7b2c\u4e8c\u4e2a\u4e3a\u8fdb\u884c\u6784\u5efa\u4e4b\u524d\u7684\u5c5e\u6027\u914d\u7f6e\uff1b"}),"\n",(0,a.jsx)(n.p,{children:"\u7b2c\u4e09\u4e2a\u5219\u4e3a\u9488\u5bf9\u5f53\u524dApplication\u7684\u6784\u5efa\u5185\u5bb9\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u6784\u5efa\u5de5\u5382",children:"\u6784\u5efa\u5de5\u5382"}),"\n",(0,a.jsxs)(n.p,{children:["\u6211\u4eec\u4e0a\u6587\u63d0\u5230\u4e86\u6784\u5efa",(0,a.jsx)(n.code,{children:"Application"}),'\u7684**"\u5de5\u5382"**\uff0c\u8fd9\u5176\u5b9e\u5c31\u662f\u4ee3\u8868\u4e3a ',(0,a.jsx)(n.code,{children:"ApplicationFactory"}),"\n\u7c7b\u578b\u7684\u5b9e\u4f8b\uff0csimbot\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4e09\u4e2a\u5b9e\u73b0\uff0c\u5176\u4e2d\u6700\u5e38\u7528\u7684\u5373\u4e3a ",(0,a.jsx)(n.code,{children:"Simple"})," \u5de5\u5382\uff1a"]}),"\n",(0,a.jsxs)(r.Z,{groupId:"code",children:[(0,a.jsx)(l.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val application = createSimbotApplication(\n          // This is success\n          Simple, \n          configurator = { /* config function block */ }\n      ) {\n          // build function block\n      }\n"})})}),(0,a.jsxs)(l.Z,{value:"Java",attributes:{"data-value":"Java"},children:[(0,a.jsxs)(n.p,{children:["\u5728Java\u4e2d\uff0c",(0,a.jsx)(n.code,{children:"createSimbotApplication"})," \u662f ",(0,a.jsx)(n.code,{children:"Applications"})," \u7684\u9759\u6001\u51fd\u6570\u3002"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"SimpleApplication application = Applications.createSimbotApplication(\n        // This is success\n        Simple.INSTANCE,\n        (config) -> { \n          // config function block \n        },\n        (builder, config) -> {\n          // build function block\n        });\n"})})]})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Simple"})," \u5de5\u5382\u6784\u5efa\u800c\u5f97\u5230\u7684 ",(0,a.jsx)(n.code,{children:"Application"})," \u4e3a ",(0,a.jsx)(n.code,{children:"SimpleApplication"}),"\uff0c\u4e5f\u662fsimbot\u9ed8\u8ba4\u63d0\u4f9b\u7684\u6700\u57fa\u7840\u7684 ",(0,a.jsx)(n.code,{children:"Application"}),"\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var a=t(90512);const i={tabItem:"tabItem_Ymn6"};var r=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(67294),i=t(90512),r=t(12466),l=t(16550),o=t(20469),c=t(91980),s=t(67392),u=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=p(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[s,d]=b({queryString:t,groupId:i}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,u.Nk)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),v=(()=>{const e=s??f;return h({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function g(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:s}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),i=o[t].value;i!==a&&(s(n),l(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...r,className:(0,i.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function A(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function k(e){const n=(0,m.Z)();return(0,x.jsx)(A,{...e,children:d(e.children)},String(n))}},31610:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);const a={label:"label_Yf5u"};var i=t(85893);function r(e){let{type:n,href:t,children:r,title:l}=e;n=n||"primary",l=l||"";const o=(0,i.jsx)("span",{className:a.label,title:l,children:(0,i.jsx)("span",{className:`badge badge--${n}`,children:r})});return null!=t&&t.length>0?(0,i.jsx)("a",{href:t,children:o}):o}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var a=t(67294);const i={},r=a.createContext(i);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);