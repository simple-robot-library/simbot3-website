(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[7230],{5162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,i),hidden:a},t)}},4866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>z});var n=a(7462),r=a(7294),s=a(6010),i=a(6775),o=a(1980),l=a(7392),u=a(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,d]=p({queryString:a,groupId:n}),[g,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),k=(()=>{const e=l??g;return c({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=a(2466),k=a(2389);const b="tabList__CuJ",f="tabItem_LNqP";function M(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,v.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=l[a].value;n!==i&&(d(t),o(n))},c=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},l.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:m},o,{className:(0,s.Z)("tabs__item",f,null==o?void 0:o.className,{"tabs__item--active":i===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=g(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",b)},r.createElement(M,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function z(e){const t=(0,k.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},663:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),s=(a(8209),a(4866)),i=a(5162);const o={sidebar_position:20,title:"\u5e8f\u5217\u5316",tags:["\u6d88\u606f"]},l=void 0,u={unversionedId:"definition/message-overview/message-serialization",id:"definition/message-overview/message-serialization",title:"\u5e8f\u5217\u5316",description:"simbot\u901a\u8fc7 kotlinx-serialization \u5b8c\u6210\u6807\u51c6\u5e8f\u5217\u5316\u3002",source:"@site/docs/definition/message-overview/message-serialization.md",sourceDirName:"definition/message-overview",slug:"/definition/message-overview/message-serialization",permalink:"/docs/definition/message-overview/message-serialization",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/definition/message-overview/message-serialization.md",tags:[{label:"\u6d88\u606f",permalink:"/docs/tags/\u6d88\u606f"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1683786312,formattedLastUpdatedAt:"2023\u5e745\u670811\u65e5",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"\u5e8f\u5217\u5316",tags:["\u6d88\u606f"]},sidebar:"docs",previous:{title:"\u6807\u51c6\u6d88\u606f",permalink:"/docs/definition/message-overview/standard-message"},next:{title:"\u732b\u732b\u7801?",permalink:"/docs/definition/message-overview/CatCode"}},d={},m=[{value:"\u6807\u51c6\u6d88\u606f",id:"\u6807\u51c6\u6d88\u606f",level:2},{value:"\u7ec4\u4ef6\u6d88\u606f",id:"\u7ec4\u4ef6\u6d88\u606f",level:2}],c={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"simbot\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},"kotlinx-serialization")," \u5b8c\u6210\u6807\u51c6\u5e8f\u5217\u5316\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx-serialization")," \u65e0\u5173\u6570\u636e\u7ed3\u6784\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5176\u5c06\u6d88\u606f\u5e8f\u5217\u5316\u4e3a\u4efb\u4f55 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization/tree/master/formats"},"\u652f\u6301\u7684"),"\n\u7ed3\u679c\u3002\u672c\u7ae0\u8282\u5185\u6211\u4eec\u4f1a\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," \u4e3a\u4f8b\u3002"),(0,r.kt)("h2",{id:"\u6807\u51c6\u6d88\u606f"},"\u6807\u51c6\u6d88\u606f"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx-serialization"),"\uff0c\u9996\u5148\u4f60\u8981\u786e\u5b9a\u9700\u8981\u5e8f\u5217\u5316\u5bf9\u8c61\u7684\u8303\u56f4\u3002\u6bd5\u7adf\u6d88\u606f\u5bf9\u8c61\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"Message.Element")," \u65e0\u6cd5\u9884\u77e5\u6240\u6709\u5176\u5b9e\u73b0\u7c7b\uff0c\n\u56e0\u6b64\u6240\u6709\u7ec4\u4ef6\u5728\u63d0\u4f9b\u6d88\u606f\u5b9e\u73b0\u7684\u540c\u65f6\uff0c\u4e5f\u9700\u8981\u63d0\u4f9b\u5176\u5bf9\u5e94\u7684\u591a\u6001\u5e8f\u5217\u5316\u4fe1\u606f\uff0c\u4e5f\u5c31\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SerializersModule")),"\u3002"),(0,r.kt)("p",null,"\u5728simbot\u4e2d\u63d0\u4f9b\u7684",(0,r.kt)("strong",{parentName:"p"},"\u6807\u51c6\u6d88\u606f"),"\u5b9e\u73b0\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Messages.serializersModule")," \u83b7\u53d6\u3002"),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val module = Messages.serializersModule\n"))),(0,r.kt)(i.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"SerializersModule module = Messages.getSerializersModule();\n")))),(0,r.kt)("p",null,"\u5f53\u4f60\u60f3\u8981\u5e8f\u5217\u5316\u4e00\u4e2a\u4ec5\u5305\u542b\u4e86",(0,r.kt)("strong",{parentName:"p"},"\u6807\u51c6\u6d88\u606f"),"\u7684\u6d88\u606f\u94fe\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4e86\u3002"),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val json = Json {\n    // \u6307\u5b9a\u5e8f\u5217\u5316\u4fe1\u606f\n    serializersModule = Messages.serializersModule\n    // config...\n    isLenient = true\n}\n// \u4ec5\u5305\u542b\u6807\u51c6\u6d88\u606f\u7684\u6d88\u606f\u94fe\nval messages: Messages = "\u4f60\u597d".toText() + AtAll + Face(123.ID)\n\nval jsonStr = json.encodeToString(Messages.serializer, messages)\n'))),(0,r.kt)(i.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("p",null,"\u5728Java\u4e2d\uff0c\u60f3\u8981\u6784\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization.json.Json")," \u4f1a\u76f8\u5bf9\u6bd4\u8f83\u56f0\u96be\u3002simbot\u5185\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u6613\u7684\u5de5\u5177 ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageSerializationUtil"),"\n\u6765\u8f85\u52a9Java\u5f00\u53d1\u8005\u6765\u5904\u7406\u5e8f\u5217\u5316\u7684\u60c5\u51b5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'MessagesBuilder builder = new MessagesBuilder();\n// \u6784\u5efa\u4e00\u4e2aJson\u5e8f\u5217\u5316\u5668, \u5e76\u914d\u7f6e\u5e8f\u5217\u5316\u4fe1\u606f\u548cJson\u81ea\u8eab\u7684\u914d\u7f6e\nJson json = MessageSerializationUtil.createJson(null, (config) -> {\n    // isLenient = true\n    config.setLenient(true);\n    // config...\n}, Messages.getSerializersModule());\n\n// \u4ec5\u5305\u542b\u6807\u51c6\u6d88\u606f\u7684\u6d88\u606f\u94fe\nMessages messages = builder.text("\u4f60\u597d").atAll().face(Identifies.ID(123)).build();\n\nString jsonStr = json.encodeToString(Messages.getSerializer(), messages);\n')))),(0,r.kt)("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u7684\u5e8f\u5217\u5316\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[{"type":"m.std.text","text":"\u4f60\u597d"},{"type":"m.std.atAll"},{"type":"m.std.face","id":"123"}]\n')),(0,r.kt)("p",null,"\u53cd\u4e4b\u4ea6\u7136\u3002\u53cd\u5e8f\u5217\u5316\u4e5f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx-serialization")," \u5b8c\u6210\u3002"),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val json = Json {\n    // config...\n    isLenient = true\n    // \u8bb0\u5f97\u6307\u5b9a\u5e8f\u5217\u5316\u4fe1\u606f\n    serializersModule = Messages.serializersModule\n}\nval jsonStr = """[{"type":"m.std.text","text":"\u4f60\u597d"},{"type":"m.std.atAll"},{"type":"m.std.face","id":"123"}]"""\n\nval messages = json.decodeFromString(Messages.serializer, jsonStr)\n'))),(0,r.kt)(i.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("p",null,"\u5728Java\u4e2d\uff0c\u60f3\u8981\u6784\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization.json.Json")," \u4f1a\u76f8\u5bf9\u6bd4\u8f83\u56f0\u96be\u3002simbot\u5185\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u6613\u7684\u5de5\u5177 ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageSerializationUtil"),"\n\u6765\u8f85\u52a9Java\u5f00\u53d1\u8005\u6765\u5904\u7406\u5e8f\u5217\u5316\u7684\u60c5\u51b5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String jsonStr = "[{\\"type\\":\\"m.std.text\\",\\"text\\":\\"\u4f60\u597d\\"},{\\"type\\":\\"m.std.atAll\\"},{\\"type\\":\\"m.std.face\\",\\"id\\":\\"123\\"}]";\n\n// \u6784\u5efa\u4e00\u4e2aJson\u5e8f\u5217\u5316\u5668, \u5e76\u914d\u7f6e\u5e8f\u5217\u5316\u4fe1\u606f\u548cJson\u81ea\u8eab\u7684\u914d\u7f6e\nJson json = MessageSerializationUtil.createJson(null, (config) -> {\n    // isLenient = true\n    config.setLenient(true);\n    // config...\n}, Messages.getSerializersModule());\n\nMessages messages = json.decodeFromString(Messages.getSerializer(), jsonStr);\n')))),(0,r.kt)("p",null,"\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\u4e86\uff0c\u5728\u8fdb\u884c\u5e8f\u5217\u5316\u6216\u53cd\u5e8f\u5217\u5316\u65f6\uff0c\u603b\u4f1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Messages.serializer")," \u5e76\u5c06\u7ed3\u679c\u5e8f\u5217\u5316\u4e3a\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u5217\u8868"),"\uff08\u5982JsonArray\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Messages.serializer")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Messages")," \u7684\u5e8f\u5217\u5316\u5b9e\u73b0\uff0c\u5b83\u4f1a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"Messages")," \u89c6\u4e3a\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Message.Element")," \u7684\u96c6\u5408\u6765\u770b\u5f85\u3002"),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u6d88\u606f"},"\u7ec4\u4ef6\u6d88\u606f"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u7ec4\u4ef6\u57fa\u672c\u4e0a\u90fd\u4f1a\u6709\u5b83\u4eec\u81ea\u5df1\u4e13\u5c5e\u7684\u6d88\u606f\u7c7b\u578b\u5b9e\u73b0\uff0c\u56e0\u6b64\u5f53\u4f60\u7684\u7a0b\u5e8f\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a\u7ec4\u4ef6\u4e2d\u65f6\uff0c\u53ea\u4f7f\u7528\u6807\u51c6\u6d88\u606f\u7684\u5e8f\u5217\u5316\u4fe1\u606f ",(0,r.kt)("inlineCode",{parentName:"p"},"Messages.serializersModule")," \u662f\u4e0d\u591f\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b"),"\uff0c\u4e00\u4e2a\u7ec4\u4ef6\u4f1a\u63d0\u4f9b\u5176\u4e13\u5c5e\u7684\u6d88\u606f\u5e8f\u5217\u5316\u4fe1\u606f\uff0c\u5e76\u4e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," \u7c7b\u578b\u4e5f\u8981\u6c42\u5176\u5b9e\u73b0\u7c7b\u5fc5\u987b\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"componentSerializersModule")," \u5c5e\u6027\u3002\n\u7531simbot\u6240\u63d0\u4f9b\u7684\u7ec4\u4ef6\u4e2d\uff0c\u6d88\u606f\u5e8f\u5217\u5316\u4fe1\u606f\u4f1a\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," \u7684\u5b9e\u73b0\u4ee5\u53ca\u9759\u6001\u5c5e\u6027\u7b49\u591a\u4e2a\u65b9\u5f0f\u5bf9\u5916\u63d0\u4f9b\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val serializersModule = SerializersModule {\n        include(Messages.serializersModule)\n        // Kook\u7ec4\u4ef6\u7684\u5e8f\u5217\u5316\u4fe1\u606f\n        include(KookComponent.messageSerializersModule)\n        // Mirai\u7ec4\u4ef6\u7684\u5e8f\u5217\u5316\u4fe1\u606f\n        include(MiraiComponent.messageSerializersModule)\n    }\n\nval json = Json {\n    this.serializersModule = serializersModule\n}\n"))),(0,r.kt)(i.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \u5408\u5e76\u6807\u51c6\u6d88\u606f\u7684\u5e8f\u5217\u5316\u4fe1\u606f \u548c Kook\u7ec4\u4ef6\u7684\u5e8f\u5217\u5316\u4fe1\u606f\nSerializersModule module = SerializersModuleKt.plus(Messages.getSerializersModule(), KookComponent.getMessageSerializersModule());\n// \u518d\u5408\u5e76\u8fdbMirai\u7ec4\u4ef6\u7684\u5e8f\u5217\u5316\u4fe1\u606f\nmodule = SerializersModuleKt.plus(module, MiraiComponent.getMessageSerializersModule());\n \n// \u6784\u5efa\u4e00\u4e2aJson\u5e8f\u5217\u5316\u5668, \u5e76\u914d\u7f6e\u5e8f\u5217\u5316\u4fe1\u606f\u548cJson\u81ea\u8eab\u7684\u914d\u7f6e\nJson json = MessageSerializationUtil.createJson(null, (config) -> {\n    // config...\n}, module);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \u6784\u5efa\u4e00\u4e2aJson\u5e8f\u5217\u5316\u5668, \u5e76\u914d\u7f6e\u5e8f\u5217\u5316\u4fe1\u606f\u548cJson\u81ea\u8eab\u7684\u914d\u7f6e\nJson json = MessageSerializationUtil.createJson(null, (config) -> {\n        // config...\n    }, \n    Messages.getSerializersModule(),             // \u6807\u51c6\u6d88\u606f\u7684\u5e8f\u5217\u5316\u4fe1\u606f\n    KookComponent.getMessageSerializersModule(), // Kook\u7ec4\u4ef6\u7684\u5e8f\u5217\u5316\u4fe1\u606f\n    MiraiComponent.getMessageSerializersModule() // Mirai\u7ec4\u4ef6\u7684\u5e8f\u5217\u5316\u4fe1\u606f\n);\n")))),(0,r.kt)("p",null,"\u9664\u4e86\u8fd9\u79cd\u63d0\u524d\u5b9a\u4e49\u597d\u7684\u65b9\u5f0f\u4ee5\u5916\uff0c\u4e5f\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," \u542f\u52a8\u540e\u6765\u52a8\u6001\u83b7\u53d6\u6240\u6709\u5df2\u52a0\u8f7d\u7ec4\u4ef6\u4e2d\u7684\u5e8f\u5217\u5316\u4fe1\u606f\u3002"),(0,r.kt)(s.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val application = createSimbotApplication(...) {\n    // ...\n}\n// \u904d\u5386\u6240\u6709\u7ec4\u4ef6\nfor (component in application.environment.components) {\n    // \u6b64\u7ec4\u4ef6\u7684\u5e8f\u5217\u5316\u4fe1\u606f\n    val componentSerializersModule = component.componentSerializersModule\n}\n"))),(0,r.kt)(i.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Application application = Applications.createSimbotApplication(..., null, (b, c) -> {\n    // ...\n});\n\nList<Component> components = application.getEnvironment().getComponents();\n// \u904d\u5386\u6240\u6709\u7ec4\u4ef6\nfor (Component component : components) {\n    // \u6b64\u7ec4\u4ef6\u7684\u5e8f\u5217\u5316\u4fe1\u606f\n    SerializersModule componentSerializersModule = component.getComponentSerializersModule();\n}\n")))))}p.isMDXComponent=!0},1748:(e,t,a)=>{var n={"./locale":9234,"./locale.js":9234};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=1748},8209:(e,t,a)=>{"use strict";a.d(t,{G:()=>i});var n=a(7294),r=a(1304);const s="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[o,l]=(0,n.useState)(!1),u=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??s;a!==s&&"dark"!==a&&(a=s);const n=a===s?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(i,a)),[a,o]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){l((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?r.Z.initialize({startOnLoad:!0,...a.mermaid,theme:u}):r.Z.initialize({startOnLoad:!0,theme:u}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[a,u]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);