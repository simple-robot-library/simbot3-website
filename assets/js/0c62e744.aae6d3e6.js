(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[1509],{5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var r=n(7462),a=n(7294),o=n(6010),i=n(6775),s=n(1980),l=n(7392),u=n(12);function c(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=m({queryString:n,groupId:r}),[v,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=l??v;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var g=n(2466),f=n(2389);const k="tabList__CuJ",b="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,g.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=l[n].value;r!==i&&(c(t),s(r))},p=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},s,{className:(0,o.Z)("tabs__item",b,null==s?void 0:s.className,{"tabs__item--active":i===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(N,(0,r.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return a.createElement(x,(0,r.Z)({key:String(t)},e))}},3091:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=(n(8209),n(4866)),i=n(5162);const s={title:"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587",tags:["\u6807\u51c6\u4e8b\u4ef6"]},l=void 0,u={unversionedId:"definition/event-overview/event-processing-context/index",id:"definition/event-overview/event-processing-context/index",title:"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587",description:"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587\uff0c \u5373 EventProcessingContext \uff0c\u662f\u6574\u4e2a\u4e8b\u4ef6\u8c03\u5ea6\u6d41\u7a0b\u4e2d\u7684 \u6838\u5fc3\u5bf9\u8c61\u3002",source:"@site/docs/definition/event-overview/event-processing-context/index.md",sourceDirName:"definition/event-overview/event-processing-context",slug:"/definition/event-overview/event-processing-context/",permalink:"/docs/definition/event-overview/event-processing-context/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/definition/event-overview/event-processing-context/index.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1686563625,formattedLastUpdatedAt:"2023\u5e746\u670812\u65e5",frontMatter:{title:"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u6982\u8ff0",permalink:"/docs/definition/event-overview/"},next:{title:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/"}},c={},d=[{value:"EventProcessingContext",id:"eventprocessingcontext",level:2},{value:"event",id:"event",level:3},{value:"result",id:"result",level:3},{value:"messagesSerializersModule",id:"messagesserializersmodule",level:3},{value:"EventListenerProcessingContext",id:"eventlistenerprocessingcontext",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587\uff0c \u5373 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"EventProcessingContext"))," \uff0c\u662f\u6574\u4e2a\u4e8b\u4ef6\u8c03\u5ea6\u6d41\u7a0b\u4e2d\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u6838\u5fc3\u5bf9\u8c61"),"\u3002"),(0,a.kt)("admonition",{title:"\u8d77\u6e90...",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e00\u6b21\u4e8b\u4ef6\u8c03\u5ea6\u4e2d\u7684\u4e8b\u4ef6\u5bf9\u8c61\uff08 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Event"))," \uff09\u4fbf\u662f\u6765\u81ea\u6b64\u4e0a\u4e0b\u6587\u3002")),(0,a.kt)("p",null,"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587\u521b\u5efa\u4e8e\u4e8b\u4ef6\u63a8\u9001\u4e4b\u521d\u3001\u6d88\u4ea1 ",(0,a.kt)("small",null,"(\u6307\u4e0d\u4f1a\u518d\u63d0\u4f9b\u7ed9\u5176\u4ed6\u6d41\u7a0b)")," \u4e8e\u4e8b\u4ef6\u8c03\u5ea6\u7ed3\u675f\uff0c\u662f\u4e00\u6b21\u5b8c\u6574\u4e8b\u4ef6\u8c03\u5ea6\u6d41\u7a0b\u7684\u4ee3\u8868\u3002"),(0,a.kt)("p",null,"\u5728\u6838\u5fc3\u6a21\u5757\u4e0b\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u4e8b\u4ef6\u76d1\u542c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"createSimpleApplication {\n    listeners {\n        listen(FriendEvent) {\n            // (1)\n            // highlight-start\n            handle { event -> // this: EventListenerProcessingContext\n                eventResult()\n            }\n            // highlight-end\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u5728\u4e0a\u8ff0\u4ee3\u7801\u793a\u4f8b\u4e2d\u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"(1)"))," \u5904\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"handle { ... }")," \u51fd\u6570\u4e2d\u7684\u63a5\u6536\u5668\u7c7b\u578b\u5373\u4e3a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"EventListenerProcessingContext")),"\n(\u4e5f\u5c31\u662f ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"EventProcessingContext"))," \u5728\u76d1\u542c\u51fd\u6570\u4e2d\u7684\u6269\u5c55) \u3002"),(0,a.kt)("h2",{id:"eventprocessingcontext"},"EventProcessingContext"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"EventProcessingContext"))," \u7684\u7b80\u5316\u7248\u57fa\u672c\u5b9a\u4e49\u5927\u6982\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"}," interface EventProcessingContext /* ... */ {\n    /**\n     * \u672c\u6b21\u76d1\u542c\u6d41\u7a0b\u4e2d\u7684\u4e8b\u4ef6\u4e3b\u4f53\u3002\n     */\n    val event: Event\n    \n    /**\n     * \u5df2\u7ecf\u6267\u884c\u8fc7\u7684\u6240\u6709\u76d1\u542c\u51fd\u6570\u7684\u7ed3\u679c\u3002\n     *\n     * \u6b64\u5217\u8868\u4ec5\u7531\u4e8b\u4ef6\u5904\u7406\u5668\u5185\u90e8\u64cd\u4f5c\uff0c\u662f\u4e00\u4e2a\u5bf9\u5916\u4e0d\u53ef\u53d8\u89c6\u56fe\u3002\n     */\n    val results: List<EventResult>\n    \n    /**\n     * \u5f53\u524d\u4e8b\u4ef6\u6240\u5904\u73af\u5883\u4e2d\u6240\u80fd\u591f\u63d0\u4f9b\u7684\u6d88\u606f\u5e8f\u5217\u5316\u6a21\u5757\u4fe1\u606f\u3002\n     */\n    val messagesSerializersModule: SerializersModule\n    \n    /**\n     * \u6839\u636e\u4e00\u4e2a [Attribute] \u5f97\u5230\u4e00\u4e2a\u5c5e\u6027\u3002\n     */\n    override fun <T : Any> getAttribute(attribute: Attribute<T>): T?\n}\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5f97\u51fa\u6765\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"EventProcessingContext")," \u4e2d\uff0c\u5176\u6240\u63d0\u4f9b\u7684\u4e3b\u8981\u51e0\u4e2a\u5c5e\u6027\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"event"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"result"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"messagesSerializersModule"),"\u3002"),(0,a.kt)("h3",{id:"event"},"event"),(0,a.kt)("p",null,"\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," \u662f\u6700\u5e38\u7528\u3001\u6700\u57fa\u672c\u7684\u5bf9\u8c61\uff0c\u5b83\u4fbf\u662f\u672c\u6b21\u4e8b\u4ef6\u8c03\u5ea6\u6d41\u7a0b\u4e2d\u7684",(0,a.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6"),"\u672c\u4f53\u3002"),(0,a.kt)("h3",{id:"result"},"result"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"result")," \u4ee3\u8868\u6bcf\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\u5904\u7406\u7ed3\u679c\u7684\u96c6\u5408\u89c6\u56fe\uff0c\u4f1a\u968f\u7740\u4e8b\u4ef6\u5904\u7406\u6d41\u7a0b\u7684\u63a8\u8fdb\u800c\u9010\u6e10\u589e\u52a0\u3002"),(0,a.kt)("h3",{id:"messagesserializersmodule"},"messagesSerializersModule"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"messagesSerializersModule")," \u4ee3\u8868\u4e3a\u5f53\u524d\u4e8b\u4ef6\u8c03\u5ea6\u6240\u5904application\u73af\u5883\u4e2d\u7684\u6240\u6709\u53ef\u80fd\u7684\n",(0,a.kt)("a",{parentName:"p",href:"../../message-overview"},(0,a.kt)("strong",{parentName:"a"},"\u6d88\u606f\u5bf9\u8c61"))," \u7684\u5e8f\u5217\u5316\u6a21\u7ec4\u3002 "),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u9664\u4e86\u8fd9\u51e0\u4e2a\u4e3b\u8981\u5c5e\u6027\u4ee5\u5916\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"EventProcessingContext")," \u8fd8\u63d0\u4f9b\u4e86\u7528\u4e8e\u83b7\u53d6/\u8bbe\u7f6e\u77ac\u65f6\u5c5e\u6027\u7684\u51fd\u6570\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"get(...)")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"put(...)")," ( ",(0,a.kt)("inlineCode",{parentName:"p"},"set(...)")," )\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e24\u4e2a\u5c5e\u6027\u7ee7\u627f\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"InstantScopeContext"),"\uff0c\u53ef\u4ee5\u7528\u4e8e\u5728\u6d41\u7a0b\u4e2d\u4f20\u9012\u5c5e\u6027\u3002"),(0,a.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class Foo   // \u4fdd\u5b58\u5143\u7d20\u7c7b\u578b\n\nval attribute = attribute<Foo>("foo") // \u5b9a\u4e49\u5c5e\u6027\u952e\n\n/** \u8bbe\u7f6e\u5c5e\u6027\u793a\u4f8b */\nfun setAttr(context: EventProcessingContext) {\n    context[attribute] = Foo()\n}\n\n/** \u83b7\u53d6\u5c5e\u6027\u793a\u4f8b */\nfun useAttr(context: EventProcessingContext) {\n    val foo = context[attribute]\n    // ...\n}\n'))),(0,a.kt)(i.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class Example {\n    private record Foo(){}  // \u4fdd\u5b58\u5143\u7d20\u7c7b\u578b\n    private static final Attribute<Foo> attribute = Attribute.of("foo"); // \u5b9a\u4e49\u5c5e\u6027\u952e\n    \n    /** \u8bbe\u7f6e\u5c5e\u6027\u793a\u4f8b */\n    public void getAttr(EventProcessingContext context) {\n        context.put(attribute, new Foo());\n    }\n    \n    /** \u83b7\u53d6\u5c5e\u6027\u793a\u4f8b */\n    public void useAttr(EventProcessingContext context) {\n        final var foo = context.get(attribute);\n        // ...\n    }\n}\n')))),(0,a.kt)("h2",{id:"eventlistenerprocessingcontext"},"EventListenerProcessingContext"),(0,a.kt)("p",null,"\u4e0a\u6587\u4e2d\uff0c\u9664\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"EventProcessingContext"),", \u6211\u4eec\u8fd8\u63d0\u5230\u4e86\u4e00\u4e2a\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"EventListenerProcessingContext"),"\u3002\u5b83\u4ee3\u8868\u4e3a ",(0,a.kt)("em",{parentName:"p"},'"\u76d1\u542c\u51fd\u6570\u5904\u7406\u4e0a\u4e0b\u6587"'),"\uff0c\n\u662f\u6d3e\u751f\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"EventProcessingContext")," \u7684\u3001\u4ee5\u76d1\u542c\u51fd\u6570\u4e3a\u5355\u4f4d\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u524d\u6587\u63d0\u5230\u8fc7\uff1a",(0,a.kt)("em",{parentName:"p"},"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587\u521b\u5efa\u4e8e\u4e8b\u4ef6\u63a8\u9001\u4e4b\u521d\u3001\u6d88\u4ea1\u4e8e\u4e8b\u4ef6\u8c03\u5ea6\u7ed3\u675f\uff0c\u662f\u4e00\u6b21\u5b8c\u6574\u4e8b\u4ef6\u8c03\u5ea6\u6d41\u7a0b\u7684\u4ee3\u8868\u3002")," \uff0c\n\u90a3\u4e48\u76d1\u542c\u51fd\u6570\u5904\u7406\u4e0a\u4e0b\u6587\u5219\u662f\u521b\u5efa\u4e8e\u76d1\u542c\u51fd\u6570\u51fa\u53d1\u4e4b\u524d\uff0c\u6d88\u4ea1\u4e8e\u76d1\u542c\u51fd\u6570\u6267\u884c\u7ed3\u675f\uff0c\u662f\u4e00\u6b21\u5b8c\u6574\u76d1\u542c\u51fd\u6570\u89e6\u53d1\u6d41\u7a0b\u7684\u4ee3\u8868\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"EventListenerProcessingContext")," \u7684\u7b80\u5316\u7248\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"}," interface EventListenerProcessingContext : EventProcessingContext {\n    /**\n     * \u5f53\u524d\uff08\u5c06\u8981\uff09\u88ab\u6267\u884c\u7684\u76d1\u542c\u51fd\u6570\u3002\n     */\n    val listener: EventListener\n\n    /**\n     * \u5f53\u524d\u76d1\u542c\u51fd\u6570\u7684\u4e3b\u8981\u6587\u672c\u5185\u5bb9\uff0c\u4e00\u822c\u53ef\u7528\u4e8e\u5728\u62e6\u622a\u5668\u3001\u8fc7\u6ee4\u5668\u3001\u76d1\u542c\u51fd\u6570\u76f8\u4e92\u7ec4\u5408\u65f6\u8fdb\u884c\u4e00\u4e9b\u8fc7\u6ee4\u5185\u5bb9\u5339\u914d\u3002\n     *\n     * \u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c[textContent] \u5728 [event] \u4e3a [MessageEvent] \u7c7b\u578b\u7684\u65f6\u5019\uff0c\u9ed8\u8ba4\u4e3a [MessageContent.plainText],\n     * \u5176\u4ed6\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u4e3anull\u3002\n     *\n     */\n    var textContent: String?\n\n}\n")),(0,a.kt)("p",null,"\u4e0d\u96be\u770b\u51fa\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"EventListenerProcessingContext")," \u76f8\u6bd4\u8f83\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"EventProcessingContext")," \u800c\u8a00\uff0c\n\u989d\u5916\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5c5e\u6027\u3002"),(0,a.kt)("h3",{id:""}))}m.isMDXComponent=!0},1748:(e,t,n)=>{var r={"./locale":9234,"./locale.js":9234};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=1748},8209:(e,t,n)=>{"use strict";n.d(t,{G:()=>i});var r=n(7294),a=n(1304);const o="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return r.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const n=(0,r.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[s,l]=(0,r.useState)(!1),u=(0,r.useMemo)((()=>function(e,t){let n=e.getAttribute("data-theme")??o;n!==o&&"dark"!==n&&(n=o);const r=n===o?"default":"dark";return t?.theme?.[n]??t?.mermaid?.theme??r}(i,n)),[n,s]);return(0,r.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){l((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,r.useEffect)((()=>{n&&(n.mermaid?a.Z.initialize({startOnLoad:!0,...n.mermaid,theme:u}):a.Z.initialize({startOnLoad:!0,theme:u}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),a.Z.contentLoaded())}),[n,u]),(0,r.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(a.Z.contentLoaded,0)}),[e]),r.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);