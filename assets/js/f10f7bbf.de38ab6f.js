(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[8612],{5162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(7294),s=a(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,l),hidden:a},t)}},4866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(7462),s=a(7294),r=a(6010),l=a(6775),i=a(1980),o=a(7392),u=a(12);function d(e){return function(e){var t;return(null==(t=s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function m(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,d]=p({queryString:a,groupId:n}),[g,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=o??g;return c({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=a(2466),k=a(2389);const v="tabList__CuJ",b="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,f.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=o[a].value;n!==l&&(d(t),i(n))},c=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:i}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:m},i,{className:(0,r.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":l===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function M(e){const t=g(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",v)},s.createElement(N,(0,n.Z)({},e,t)),s.createElement(h,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return s.createElement(M,(0,n.Z)({key:String(t)},e))}},8063:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=a(7462),s=(a(7294),a(3905)),r=(a(8209),a(4866)),l=a(5162);const i={title:"\u6d88\u606f\u6982\u8ff0",tags:["\u6d88\u606f"]},o=void 0,u={unversionedId:"definition/message-overview/index",id:"definition/message-overview/index",title:"\u6d88\u606f\u6982\u8ff0",description:"\u6d88\u606f\u662f\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u90e8\u5206\u3002",source:"@site/docs/definition/message-overview/index.md",sourceDirName:"definition/message-overview",slug:"/definition/message-overview/",permalink:"/docs/definition/message-overview/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/definition/message-overview/index.md",tags:[{label:"\u6d88\u606f",permalink:"/docs/tags/\u6d88\u606f"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1686029262,formattedLastUpdatedAt:"2023\u5e746\u67086\u65e5",frontMatter:{title:"\u6d88\u606f\u6982\u8ff0",tags:["\u6d88\u606f"]},sidebar:"docs",previous:{title:"\u5bf9\u8c61\u53d8\u66f4\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/change-event/objective-changed-event"},next:{title:"\u6807\u51c6\u6d88\u606f",permalink:"/docs/definition/message-overview/standard-message"}},d={},m=[{value:"Message.Element",id:"messageelement",level:2},{value:"Messages",id:"messages",level:2},{value:"\u4e0d\u53ef\u53d8\u6027",id:"\u4e0d\u53ef\u53d8\u6027",level:3},{value:"\u6784\u5efa",id:"\u6784\u5efa",level:3},{value:"Message.Key",id:"messagekey",level:2}],c={toc:m};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u6d88\u606f\u662f\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u90e8\u5206\u3002"),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"simbot2")," \u4e2d\uff0c\u6d88\u606f\u7684\u4e3b\u8981\u5b58\u5728\u5f62\u5f0f\u662f\u4ee5 ",(0,s.kt)("em",{parentName:"p"},"\u732b\u732b\u7801")," \u7684\u5b9e\u4f53\u6216\u5b57\u7b26\u4e32\u4e3a\u4e3b\u7684\uff0c\u8fd9\u4e5f\u662f\u4eceCQ\u65f6\u4ee3\u6240\u9057\u7559\u4e0b\u6765\u7684\u4f20\u7edf\u3002\n\u732b\u732b\u7801\u62e5\u6709\u5f88\u9ad8\u7684\u7075\u6d3b\u6027\uff08\u56e0\u4e3a\u5176\u672c\u8d28\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u79cdMap\u6216\u4e00\u79cd\u7279\u6b8a\u89c4\u5219\u7684\u5b57\u7b26\u4e32\uff09\uff0c\u4f46\u662f\u4e5f\u5b58\u5728\u8bf8\u591a\u52a3\u52bf\uff08\u8bed\u4e49\u3001\u7c7b\u578b\u4e0d\u660e\u786e\u4ee5\u53ca\u6027\u80fd\u95ee\u9898\uff09\u3002"),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"simbot3")," \u4e2d\uff0c\u732b\u732b\u7801\u6216\u8bb8\u4f1a\u5728\u672a\u6765\u88ab\u5b9e\u73b0\u4e3a\u4e00\u79cd\u5e8f\u5217\u5316\u7684\u65b9\u5f0f\uff0c\u4f46\u5c06\u4e0d\u518d\u662f\u201c\u6d88\u606f\u201d\u7684\u6ce8\u610f\u8868\u73b0\u5f62\u5f0f\u4e0e\u9014\u5f84\u3002\n\u6d88\u606f\u7684\u6982\u5ff5\u5c06\u4f1a\u7531\u63a5\u53e3\u7c7b\u578b ",(0,s.kt)("inlineCode",{parentName:"p"},"Message")," \u6765\u8fdb\u884c\u63cf\u8ff0\uff0c\u7531\u6838\u5fc3\u3001\u7ec4\u4ef6\u7b49\u6240\u9700\u6a21\u5757\u63d0\u4f9b\u5b9e\u73b0\u4e0e\u89e3\u91ca\u3002"),(0,s.kt)("p",null,"\u5bf9\u4e8e ",(0,s.kt)("inlineCode",{parentName:"p"},"Message")," \u6d88\u606f\u7c7b\u578b\u6765\u8bb2\uff0c\u5b83\u53ea\u5e94\u53ef\u80fd\u5b58\u5728\u4e24\u79cd\u7c7b\u578b\u5206\u652f\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"Messages")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"Message.Element")," \u3002"),(0,s.kt)("h2",{id:"messageelement"},"Message.Element"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Message.Element")," \u4ee3\u8868\u4e00\u4e2a\u6700\u5c0f\u5355\u4f4d\u7684 ",(0,s.kt)("strong",{parentName:"p"},"\u6d88\u606f\u5143\u7d20"),"\uff0c\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"Message")," \u7c7b\u578b\u7684\u5b9e\u73b0\u4e4b\u4e00\u3002\n",(0,s.kt)("inlineCode",{parentName:"p"},"Message.Element")," \u7c7b\u578b\u672c\u8eab\u9664\u4e86\u89c4\u5b9a\u4e86\u4e00\u4e9b\u6765\u6e90\u5c5e\u6027\u4ee5\u5916\uff0c\u5e76\u6ca1\u6709\u5b9e\u8d28\u6027\u7684\u5c5e\u6027\u6216\u51fd\u6570\u53ef\u4ee5\u4f7f\u7528\u3002\u5bf9\u4e8e\u6d88\u606f\u7684\u5b9a\u4e49\u4e0e\u5b9e\u73b0\u662f\u5b8c\u5168\u81ea\u7531\u7684\u3002"),(0,s.kt)("admonition",{title:"\u76f8\u5173\u53c2\u8003",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u4e00\u4e9b\u5e38\u89c1\u7684\u6d88\u606f\u7c7b\u578b\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,s.kt)("a",{parentName:"p",href:"/docs/definition/message-overview/standard-message"},"\u6807\u51c6\u6d88\u606f"),"\u3002"),(0,s.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u6d88\u606f\u7684\u5e8f\u5217\u5316\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,s.kt)("a",{parentName:"p",href:"/docs/definition/message-overview/message-serialization"},"\u5e8f\u5217\u5316"),"\u3002")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Message.Element")," \u63a5\u53e3\u672c\u8eab\u53ea\u89c4\u5b9a\u4e86\u5982\u4e0b\u5c5e\u6027/\u51fd\u6570\uff1a"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027/\u51fd\u6570"),(0,s.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,s.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"key"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"#messagekey"},"Message.Key")),(0,s.kt)("td",{parentName:"tr",align:null},"\u6b64\u6d88\u606f\u7684key\u4fe1\u606f\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"component"),(0,s.kt)("td",{parentName:"tr",align:null},"Component"),(0,s.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u6b64\u6d88\u606f\u5b9e\u73b0\u7684\u7ec4\u4ef6\u5bf9\u8c61\u3002\u540c key.component\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"toString()"),(0,s.kt)("td",{parentName:"tr",align:null},"String"),(0,s.kt)("td",{parentName:"tr",align:null},"\u5f97\u5230\u6b64\u6d88\u606f\u7684\u5b57\u7b26\u4e32\u8868\u73b0\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"equals(Any)"),(0,s.kt)("td",{parentName:"tr",align:null},"boolean"),(0,s.kt)("td",{parentName:"tr",align:null},"\u6bd4\u8f83\u4e24\u4e2a\u5143\u7d20\u662f\u5426\u76f8\u540c\u3002")))),(0,s.kt)("h2",{id:"messages"},"Messages"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Messages")," \u4ee3\u8868\u4e86\u591a\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"Message.Element"),"\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u7406\u89e3\u4e3a\u6d88\u606f\u5143\u7d20\u7684\u5217\u8868\uff0c\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"Message")," \u7c7b\u578b\u7684\u5b9e\u73b0\u4e4b\u4e00\u3002\n\u5b83\u53ef\u4ee5\u8868\u793a\u4e3a\u4e00\u4e2a\u6d88\u606f\u5143\u7d20\u5217\u8868\uff0c\u56e0\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"Messages")," \u5b9e\u73b0\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"View<Message.Element<*>>"),"\uff0c\u95f4\u63a5\u5b9e\u73b0\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"Iterable<Message.Element<*>>"),"\u3002"),(0,s.kt)("h3",{id:"\u4e0d\u53ef\u53d8\u6027"},"\u4e0d\u53ef\u53d8\u6027"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Messages")," \u5728\u5217\u8868\u7684\u89d2\u5ea6\u4e0a\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u5f53\u4f60\u8981\u8c03\u6574\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"Messages")," (\u589e\u52a0\u3001\u5220\u9664) \u7684\u65f6\u5019\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u65b0\u7684\u5b9e\u4f8b\u3002"),(0,s.kt)("h3",{id:"\u6784\u5efa"},"\u6784\u5efa"),(0,s.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"Kotlin",default:!0,attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u901a\u8fc7\u7528 \'+\' \u62fc\u63a5\u6d88\u606f\u5143\u7d20\u6765\u5f97\u5230\u7ed3\u679c\u3002\nval messages: Messages = "abc".toText() + At(123.ID) + AtAll\n// \u540c\u4e0a\nval messages2: Messages = "abc".toText() + At(123.ID) + AtAll\n// \u901a\u8fc7\u62fc\u63a5\u4e24\u4e2a\u6d88\u606f\u8fde\u6765\u5f97\u5230\u65b0\u7684\u6d88\u606f\u94fe\nval combinedMessage = messages + messages2\nval messageElementList = listOf(\n    "simbot".toText(),\n    At("666".ID),\n    AtAll\n)\n// \u901a\u8fc7 "\u6d88\u606f\u5217\u8868(List<Message.Element>)" \u8f6c\u5316\u4e3a "\u6d88\u606f\u5217\u8868(Messages)"\nval messagesOfList = messageElementList.toMessages()\n\n// \u7a7a\u5b9e\u73b0\nval emptyMessage = EmptyMessages\n\n// \u901a\u8fc7builder\nbuildMessages {\n  // ...\n}\n'))),(0,s.kt)(l.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'List<Message.Element<?>> messageList = new ArrayList<>(3);\nmessageList.add(Text.of("simbot"));\nmessageList.add(new At(Identifies.ID(123)));\nmessageList.add(AtAll.INSTANCE);\n\n// \u901a\u8fc7\u5217\u8868\u5f97\u5230\u6d88\u606f\u94fe\nfinal Messages messagesOfList = Messages.listToMessages(messageList);\n\n// \u6ce8\u610f! Messages \u4e0d\u5141\u8bb8\u76f4\u63a5\u7684\u4fee\u6539\u64cd\u4f5c\n// messagesOfList.add(AtAll.INSTANCE);\n\n// \u9700\u8981\u901a\u8fc7 plus \u5f97\u5230\u65b0\u7684\u6d88\u606f\u94fe\nfinal Messages newMessagesOfList = messagesOfList.plus(AtAll.INSTANCE);\n\n// \u901a\u8fc7 Messages.toMessages \u5f97\u5230\u6d88\u606f\u94fe\nfinal Messages messages = Messages.toMessages(\n                            Text.of("forte"),\n                            new At(Identifies.ID(114514)),\n                            AtAll.INSTANCE\n                        );\n                        \n// \u901a\u8fc7builder\nMessagesBuilder builder = new MessagesBuilder();\n// ...\nMessages built = builder.build();\n')))),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"Java")," \u4e2d\uff0c\u7528\u6765\u6784\u5efa\u4e00\u6761\u6d88\u606f\u94fe\u7684\u4e3b\u8981\u65b9\u5f0f\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"Messages.listToMessages")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"Messages.toMessages")," \u4ee5\u53ca ",(0,s.kt)("inlineCode",{parentName:"p"},"Messages.plus"),"\u3002"),(0,s.kt)("h2",{id:"messagekey"},"Message.Key"),(0,s.kt)("p",null,"\u662f\u4e00\u4e2a\u5e94\u8be5\u7531 Message.Element\u5b9e\u73b0\u4e2d\u7684\u4f34\u751f\u5bf9\u8c61\u8fdb\u884c\u5b9e\u73b0\u7684\u7ea6\u5b9a\u7c7b\u578b\u3002"))}p.isMDXComponent=!0},1748:(e,t,a)=>{var n={"./locale":9234,"./locale.js":9234};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=1748},8209:(e,t,a)=>{"use strict";a.d(t,{G:()=>l});var n=a(7294),s=a(1304);const r="light";const l=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),l=document.querySelector("html"),[i,o]=(0,n.useState)(!1),u=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??r;a!==r&&"dark"!==a&&(a=r);const n=a===r?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(l,a)),[a,i]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){o((e=>!e));break}}));return e.observe(l,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?s.Z.initialize({startOnLoad:!0,...a.mermaid,theme:u}):s.Z.initialize({startOnLoad:!0,theme:u}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),s.Z.contentLoaded())}),[a,u]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(s.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);