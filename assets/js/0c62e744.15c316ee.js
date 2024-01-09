"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[1509],{99676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(85893),s=t(11151),i=t(74866),o=t(85162);const l={title:"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587",tags:["\u6807\u51c6\u4e8b\u4ef6"]},a=void 0,c={id:"definition/event-overview/event-processing-context/index",title:"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587",description:"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587\uff0c \u5373 EventProcessingContext \uff0c\u662f\u6574\u4e2a\u4e8b\u4ef6\u8c03\u5ea6\u6d41\u7a0b\u4e2d\u7684 \u6838\u5fc3\u5bf9\u8c61\u3002",source:"@site/docs/definition/event-overview/event-processing-context/index.md",sourceDirName:"definition/event-overview/event-processing-context",slug:"/definition/event-overview/event-processing-context/",permalink:"/docs/definition/event-overview/event-processing-context/",draft:!1,unlisted:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/definition/event-overview/event-processing-context/index.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",lastUpdatedBy:"ForliyScarlet",lastUpdatedAt:1704193644,formattedLastUpdatedAt:"2024\u5e741\u67082\u65e5",frontMatter:{title:"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u6982\u8ff0",permalink:"/docs/definition/event-overview/"},next:{title:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/"}},d={},u=[{value:"EventProcessingContext",id:"eventprocessingcontext",level:2},{value:"event",id:"event",level:3},{value:"result",id:"result",level:3},{value:"messagesSerializersModule",id:"messagesserializersmodule",level:3},{value:"EventListenerProcessingContext",id:"eventlistenerprocessingcontext",level:2}];function v(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587\uff0c \u5373 ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"EventProcessingContext"})})," \uff0c\u662f\u6574\u4e2a\u4e8b\u4ef6\u8c03\u5ea6\u6d41\u7a0b\u4e2d\u7684 ",(0,r.jsx)(n.strong,{children:"\u6838\u5fc3\u5bf9\u8c61"}),"\u3002"]}),"\n",(0,r.jsx)(n.admonition,{title:"\u8d77\u6e90...",type:"note",children:(0,r.jsxs)(n.p,{children:["\u4e00\u6b21\u4e8b\u4ef6\u8c03\u5ea6\u4e2d\u7684\u4e8b\u4ef6\u5bf9\u8c61\uff08 ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Event"})})," \uff09\u4fbf\u662f\u6765\u81ea\u6b64\u4e0a\u4e0b\u6587\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587\u521b\u5efa\u4e8e\u4e8b\u4ef6\u63a8\u9001\u4e4b\u521d\u3001\u6d88\u4ea1 ",(0,r.jsx)("small",{children:"(\u6307\u4e0d\u4f1a\u518d\u63d0\u4f9b\u7ed9\u5176\u4ed6\u6d41\u7a0b)"})," \u4e8e\u4e8b\u4ef6\u8c03\u5ea6\u7ed3\u675f\uff0c\u662f\u4e00\u6b21\u5b8c\u6574\u4e8b\u4ef6\u8c03\u5ea6\u6d41\u7a0b\u7684\u4ee3\u8868\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6838\u5fc3\u6a21\u5757\u4e0b\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u4e8b\u4ef6\u76d1\u542c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"createSimpleApplication {\n    listeners {\n        listen(FriendEvent) {\n            // (1)\n            // highlight-start\n            handle { event -> // this: EventListenerProcessingContext\n                eventResult()\n            }\n            // highlight-end\n        }\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e0a\u8ff0\u4ee3\u7801\u793a\u4f8b\u4e2d\u7684 ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"(1)"})})," \u5904\uff0c",(0,r.jsx)(n.code,{children:"handle { ... }"})," \u51fd\u6570\u4e2d\u7684\u63a5\u6536\u5668\u7c7b\u578b\u5373\u4e3a ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"EventListenerProcessingContext"})}),"\n(\u4e5f\u5c31\u662f ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"EventProcessingContext"})})," \u5728\u76d1\u542c\u51fd\u6570\u4e2d\u7684\u6269\u5c55) \u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"eventprocessingcontext",children:"EventProcessingContext"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"EventProcessingContext"})})," \u7684\u7b80\u5316\u7248\u57fa\u672c\u5b9a\u4e49\u5927\u6982\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:" interface EventProcessingContext /* ... */ {\n    /**\n     * \u672c\u6b21\u76d1\u542c\u6d41\u7a0b\u4e2d\u7684\u4e8b\u4ef6\u4e3b\u4f53\u3002\n     */\n    val event: Event\n    \n    /**\n     * \u5df2\u7ecf\u6267\u884c\u8fc7\u7684\u6240\u6709\u76d1\u542c\u51fd\u6570\u7684\u7ed3\u679c\u3002\n     *\n     * \u6b64\u5217\u8868\u4ec5\u7531\u4e8b\u4ef6\u5904\u7406\u5668\u5185\u90e8\u64cd\u4f5c\uff0c\u662f\u4e00\u4e2a\u5bf9\u5916\u4e0d\u53ef\u53d8\u89c6\u56fe\u3002\n     */\n    val results: List<EventResult>\n    \n    /**\n     * \u5f53\u524d\u4e8b\u4ef6\u6240\u5904\u73af\u5883\u4e2d\u6240\u80fd\u591f\u63d0\u4f9b\u7684\u6d88\u606f\u5e8f\u5217\u5316\u6a21\u5757\u4fe1\u606f\u3002\n     */\n    val messagesSerializersModule: SerializersModule\n    \n    /**\n     * \u6839\u636e\u4e00\u4e2a [Attribute] \u5f97\u5230\u4e00\u4e2a\u5c5e\u6027\u3002\n     */\n    override fun <T : Any> getAttribute(attribute: Attribute<T>): T?\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5f97\u51fa\u6765\uff0c\u5728 ",(0,r.jsx)(n.code,{children:"EventProcessingContext"})," \u4e2d\uff0c\u5176\u6240\u63d0\u4f9b\u7684\u4e3b\u8981\u51e0\u4e2a\u5c5e\u6027\u4e3a ",(0,r.jsx)(n.code,{children:"event"}),"\u3001",(0,r.jsx)(n.code,{children:"result"}),"\u3001",(0,r.jsx)(n.code,{children:"messagesSerializersModule"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"event",children:"event"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c5e\u6027 ",(0,r.jsx)(n.code,{children:"event"})," \u662f\u6700\u5e38\u7528\u3001\u6700\u57fa\u672c\u7684\u5bf9\u8c61\uff0c\u5b83\u4fbf\u662f\u672c\u6b21\u4e8b\u4ef6\u8c03\u5ea6\u6d41\u7a0b\u4e2d\u7684",(0,r.jsx)(n.strong,{children:"\u4e8b\u4ef6"}),"\u672c\u4f53\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"result",children:"result"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"})," \u4ee3\u8868\u6bcf\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\u5904\u7406\u7ed3\u679c\u7684\u96c6\u5408\u89c6\u56fe\uff0c\u4f1a\u968f\u7740\u4e8b\u4ef6\u5904\u7406\u6d41\u7a0b\u7684\u63a8\u8fdb\u800c\u9010\u6e10\u589e\u52a0\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"messagesserializersmodule",children:"messagesSerializersModule"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"messagesSerializersModule"})," \u4ee3\u8868\u4e3a\u5f53\u524d\u4e8b\u4ef6\u8c03\u5ea6\u6240\u5904application\u73af\u5883\u4e2d\u7684\u6240\u6709\u53ef\u80fd\u7684\n",(0,r.jsx)(n.a,{href:"../../message-overview",children:(0,r.jsx)(n.strong,{children:"\u6d88\u606f\u5bf9\u8c61"})})," \u7684\u5e8f\u5217\u5316\u6a21\u7ec4\u3002"]}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsxs)(n.p,{children:["\u9664\u4e86\u8fd9\u51e0\u4e2a\u4e3b\u8981\u5c5e\u6027\u4ee5\u5916\uff0c",(0,r.jsx)(n.code,{children:"EventProcessingContext"})," \u8fd8\u63d0\u4f9b\u4e86\u7528\u4e8e\u83b7\u53d6/\u8bbe\u7f6e\u77ac\u65f6\u5c5e\u6027\u7684\u51fd\u6570\uff1a",(0,r.jsx)(n.code,{children:"get(...)"})," \u548c ",(0,r.jsx)(n.code,{children:"put(...)"})," ( ",(0,r.jsx)(n.code,{children:"set(...)"})," )\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e24\u4e2a\u5c5e\u6027\u7ee7\u627f\u81ea ",(0,r.jsx)(n.code,{children:"InstantScopeContext"}),"\uff0c\u53ef\u4ee5\u7528\u4e8e\u5728\u6d41\u7a0b\u4e2d\u4f20\u9012\u5c5e\u6027\u3002"]}),"\n",(0,r.jsxs)(i.Z,{groupId:"code",children:[(0,r.jsx)(o.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'class Foo   // \u4fdd\u5b58\u5143\u7d20\u7c7b\u578b\n\nval attribute = attribute<Foo>("foo") // \u5b9a\u4e49\u5c5e\u6027\u952e\n\n/** \u8bbe\u7f6e\u5c5e\u6027\u793a\u4f8b */\nfun setAttr(context: EventProcessingContext) {\n    context[attribute] = Foo()\n}\n\n/** \u83b7\u53d6\u5c5e\u6027\u793a\u4f8b */\nfun useAttr(context: EventProcessingContext) {\n    val foo = context[attribute]\n    // ...\n}\n'})})}),(0,r.jsx)(o.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class Example {\n    private record Foo(){}  // \u4fdd\u5b58\u5143\u7d20\u7c7b\u578b\n    private static final Attribute<Foo> attribute = Attribute.of("foo"); // \u5b9a\u4e49\u5c5e\u6027\u952e\n    \n    /** \u8bbe\u7f6e\u5c5e\u6027\u793a\u4f8b */\n    public void getAttr(EventProcessingContext context) {\n        context.put(attribute, new Foo());\n    }\n    \n    /** \u83b7\u53d6\u5c5e\u6027\u793a\u4f8b */\n    public void useAttr(EventProcessingContext context) {\n        final var foo = context.get(attribute);\n        // ...\n    }\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"eventlistenerprocessingcontext",children:"EventListenerProcessingContext"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u6587\u4e2d\uff0c\u9664\u4e86 ",(0,r.jsx)(n.code,{children:"EventProcessingContext"}),", \u6211\u4eec\u8fd8\u63d0\u5230\u4e86\u4e00\u4e2a\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"EventListenerProcessingContext"}),"\u3002\u5b83\u4ee3\u8868\u4e3a ",(0,r.jsx)(n.em,{children:'"\u76d1\u542c\u51fd\u6570\u5904\u7406\u4e0a\u4e0b\u6587"'}),"\uff0c\n\u662f\u6d3e\u751f\u81ea ",(0,r.jsx)(n.code,{children:"EventProcessingContext"})," \u7684\u3001\u4ee5\u76d1\u542c\u51fd\u6570\u4e3a\u5355\u4f4d\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u524d\u6587\u63d0\u5230\u8fc7\uff1a",(0,r.jsx)(n.em,{children:"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587\u521b\u5efa\u4e8e\u4e8b\u4ef6\u63a8\u9001\u4e4b\u521d\u3001\u6d88\u4ea1\u4e8e\u4e8b\u4ef6\u8c03\u5ea6\u7ed3\u675f\uff0c\u662f\u4e00\u6b21\u5b8c\u6574\u4e8b\u4ef6\u8c03\u5ea6\u6d41\u7a0b\u7684\u4ee3\u8868\u3002"})," \uff0c\n\u90a3\u4e48\u76d1\u542c\u51fd\u6570\u5904\u7406\u4e0a\u4e0b\u6587\u5219\u662f\u521b\u5efa\u4e8e\u76d1\u542c\u51fd\u6570\u51fa\u53d1\u4e4b\u524d\uff0c\u6d88\u4ea1\u4e8e\u76d1\u542c\u51fd\u6570\u6267\u884c\u7ed3\u675f\uff0c\u662f\u4e00\u6b21\u5b8c\u6574\u76d1\u542c\u51fd\u6570\u89e6\u53d1\u6d41\u7a0b\u7684\u4ee3\u8868\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"EventListenerProcessingContext"})," \u7684\u7b80\u5316\u7248\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:" interface EventListenerProcessingContext : EventProcessingContext {\n    /**\n     * \u5f53\u524d\uff08\u5c06\u8981\uff09\u88ab\u6267\u884c\u7684\u76d1\u542c\u51fd\u6570\u3002\n     */\n    val listener: EventListener\n\n    /**\n     * \u5f53\u524d\u76d1\u542c\u51fd\u6570\u7684\u4e3b\u8981\u6587\u672c\u5185\u5bb9\uff0c\u4e00\u822c\u53ef\u7528\u4e8e\u5728\u62e6\u622a\u5668\u3001\u8fc7\u6ee4\u5668\u3001\u76d1\u542c\u51fd\u6570\u76f8\u4e92\u7ec4\u5408\u65f6\u8fdb\u884c\u4e00\u4e9b\u8fc7\u6ee4\u5185\u5bb9\u5339\u914d\u3002\n     *\n     * \u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c[textContent] \u5728 [event] \u4e3a [MessageEvent] \u7c7b\u578b\u7684\u65f6\u5019\uff0c\u9ed8\u8ba4\u4e3a [MessageContent.plainText],\n     * \u5176\u4ed6\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u4e3anull\u3002\n     *\n     */\n    var textContent: String?\n\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u96be\u770b\u51fa\uff0c",(0,r.jsx)(n.code,{children:"EventListenerProcessingContext"})," \u76f8\u6bd4\u8f83\u4e8e ",(0,r.jsx)(n.code,{children:"EventProcessingContext"})," \u800c\u8a00\uff0c\n\u989d\u5916\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5c5e\u6027\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:""})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(90512);const s={tabItem:"tabItem_Ymn6"};var i=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>C});var r=t(67294),s=t(90512),i=t(12466),o=t(16550),l=t(20469),a=t(91980),c=t(67392),d=t(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function v(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=v(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=x({queryString:t,groupId:s}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),m=(()=>{const e=c??p;return h({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function b(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),s=l[t].value;s!==r&&(c(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function E(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function C(e){const n=(0,g.Z)();return(0,f.jsx)(E,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(67294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);