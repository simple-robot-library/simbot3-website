"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[2417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=l,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),l=a(7294),r=a(6010),o=a(2389),i=a(7392),s=a(7094),p=a(2466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,a;const{lazy:o,block:c,defaultValue:d,values:k,groupId:b,className:v}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=k?k:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,i.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===d?d:null!=(t=null!=d?d:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:C}=(0,s.U)(),[w,T]=(0,l.useState)(N),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=b){const e=y[b];null!=e&&e!==w&&f.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=E.indexOf(t),n=f[a].value;n!==w&&(x(t),T(n),null!=b&&C(b,String(n)))},M=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;a=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var l;const t=E.indexOf(e.currentTarget)-1;a=null!=(l=E[t])?l:E[E.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},v)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:M,onFocus:O,onClick:O},o,{className:(0,r.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},5027:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),r=a(5488),o=a(5162);const i={authors:"forliy",title:"2022\u5e74\u7b2c15\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},s=void 0,p={permalink:"/blog/2022/04/15/week-15-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022-04-15-week-15-report.mdx",source:"@site/blog/2022-04-15-week-15-report.mdx",title:"2022\u5e74\u7b2c15\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c15\u5468\u5468\u62a5\u55b5\u3002",date:"2022-04-15T00:00:00.000Z",formattedDate:"April 15, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:4.8,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c15\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c16\u5468\u5468\u62a5",permalink:"/blog/2022/04/22/week-16-report"},nextItem:{title:"\u5173\u4e8e\u7fa4\u5185\u804a\u5929\u5185\u5bb9\u7684\u516c\u544a",permalink:"/blog/2022/04/13/announcement"}},u={authorsImageUrls:[void 0]},m=[{value:"\ud83c\udf89 \u66f4\u65b0",id:"-\u66f4\u65b0",level:2},{value:"\ud83d\udc49 \u6838\u5fc3",id:"-\u6838\u5fc3",level:3},{value:"\ud83d\udc49 Mirai\u7ec4\u4ef6",id:"-mirai\u7ec4\u4ef6",level:3},{value:"\ud83d\udca1 Examples",id:"-examples",level:2},{value:"\ud83d\udcac \u65b0\u7684\u8ba8\u8bba",id:"-\u65b0\u7684\u8ba8\u8bba",level:2},{value:"\ud83d\udcd6 \u6587\u6863",id:"-\u6587\u6863",level:2},{value:"\ud83d\udc49 \u6587\u6863\u7248\u672c",id:"-\u6587\u6863\u7248\u672c",level:3},{value:"\ud83d\udc49 \u6587\u6863\u5185\u5bb9",id:"-\u6587\u6863\u5185\u5bb9",level:3},{value:"\ud83e\udd14 \u7f3a\u70b9\u513f\u4ec0\u4e48",id:"-\u7f3a\u70b9\u513f\u4ec0\u4e48",level:2},{value:"\ud83d\uddc2 \u88c5\u4fee",id:"-\u88c5\u4fee",level:2}],c={toc:m};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"2022\u5e74\u7b2c15\u5468\u5468\u62a5\u55b5\u3002"),(0,l.kt)("h2",{id:"-\u66f4\u65b0"},"\ud83c\udf89 \u66f4\u65b0"),(0,l.kt)("p",null,"\u5728\u7b2c15\u5468\u91cc\uff0c\u6838\u5fc3\u548c\u90e8\u5206\u7ec4\u4ef6\u4f9d\u65e7\u5728\u8fdb\u884c\u8fd9\u6301\u7eed\u7684\u4fee\u4fee\u8865\u8865\u3002"),(0,l.kt)("h3",{id:"-\u6838\u5fc3"},"\ud83d\udc49 \u6838\u5fc3"),(0,l.kt)("p",null,"\u672c\u5468\u6838\u5fc3\u6a21\u5757\u622a\u6b62\u5230\u64b0\u6587\u65f6\u5171\u66f4\u65b0\u4e86\u4e00\u4e2a\u7248\u672c\uff1a\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.7.0"},"v3.0.0.preview.7.0")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u7248\u672c\u4e3b\u8981\u7684\u4f5c\u7528\u662f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u62bd\u8c61\u7684\u914d\u7f6e\u7c7b ",(0,l.kt)("inlineCode",{parentName:"p"},"ComponentRegistryConfigure")," \u6765\u5b9e\u73b0\u5728 boot \u76f8\u5173\u6a21\u5757\u4e2d\u652f\u6301\u4f7f\u7528\u8005\u5bf9\u7ec4\u4ef6\u6ce8\u518c\u884c\u4e3a\u7684\u81ea\u5b9a\u4e49\u3002\n\u5728\u9ed8\u8ba4\u884c\u4e3a\u4e0b\uff0c\u4f9d\u65e7\u662f\u8fdb\u884c\u6ce8\u518c\u6240\u6709\uff08 ",(0,l.kt)("inlineCode",{parentName:"p"},"installAll")," \uff09\u7684\u3002",(0,l.kt)("br",null),"\n\u6b64\u7248\u672c\u5e76\u6ca1\u6709\u5bf9\u6838\u5fc3\u7b49\u5185\u5bb9\u6709\u6240\u8c03\u6574\uff0c\u56e0\u6b64\u7406\u8bba\u4e0a\u662f\u517c\u5bb9\u4e0a\u4e2a\u7248\u672c\u7684\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"preview.6.0"),"\uff09\uff0c\n\u4e0d\u8fc7\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u4f7f\u7528 Spring Boot Starter \u7684\u8bdd\uff0c\u5219\u5fc5\u987b\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"preview.7.0")," \uff0c\n\u56e0\u4e3a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"preview.6.0")," \u4e2d\u7531\u4e8e\u7ec4\u4ef6\u6ce8\u518c\u7684\u95ee\u9898\uff0c\u4f60\u5c06\u65e0\u6cd5\u6b63\u5e38\u4f7f\u7528\u3002"),(0,l.kt)("h3",{id:"-mirai\u7ec4\u4ef6"},"\ud83d\udc49 Mirai\u7ec4\u4ef6"),(0,l.kt)("p",null,"mirai\u7ec4\u4ef6\u672c\u5468\u66f4\u65b0\u4e86\u4e00\u4e2a\u7248\u672c:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-component-mirai/releases/tag/v3.0.0.0.preview.1.0"},"v3.0.0.0.preview.1.0")," ,\n\u6b64\u7248\u672c\u6700\u4e3b\u8981\u7684\u76ee\u7684\u5c31\u662f\u63d0\u4f9b\u4e86\u89e3\u6790 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/forteScarlet/catcode"},"\u732b\u732b\u7801")," \u7684\u6269\u5c55\u6a21\u5757\uff1a\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-component-mirai/tree/v3.0.0.0.preview.1.0/simbot-component-mirai-extra-catcode"},"extra-catcode")," \u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"extra-catcode")," \u6269\u5c55\u6a21\u5757\u63d0\u4f9b\u4e86\u5bf9\u4e8e Java \u548c Kotlin \u7684\u732b\u732b\u7801\u89e3\u6790/\u7f16\u7801\u5de5\u5177\uff0c\u65e8\u5728\u5bf9 simbot2 mirai \u7ec4\u4ef6\u7684\u5e8f\u5217\u5316\u6d88\u606f\u7684\u517c\u5bb9\u3002"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u89e3\u6790\u732b\u732b\u7801\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"Message")," \u5bf9\u8c61")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val at = "[CAT:at,code=123]"\nval message: Message = catCodeToMessage(at)\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u89e3\u6790 ",(0,l.kt)("inlineCode",{parentName:"li"},"Neko")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"Message.Element<*>")," \u5bf9\u8c61")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val at = CatCodeUtil.nekoTemplate.at(123)\nval message: Message.Element<*> = at.toMessage()\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5c06 Mirai \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"SingleMessage")," \u8f6c\u5316\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"Neko"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val at = net.mamoe.mirai.message.data.At(123)\nval neko = at.toNeko()\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Java\u4e2d\uff0c\u76f8\u5173\u7684\u64cd\u4f5c\u51fd\u6570\u4f1a\u6574\u5408\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"CatCodeMessageUtil")," \u7c7b\u4e2d\u3002")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u89e3\u6790\u732b\u732b\u7801\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"Message")," \u5bf9\u8c61")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final String cat = "[CAT:at,code=123]";\nfinal Message message = CatCodeMessageUtil.catCodeToMessage(cat);\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u89e3\u6790 ",(0,l.kt)("inlineCode",{parentName:"li"},"Neko")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"Message.Element<*>")," \u5bf9\u8c61")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final Neko cat = CatCodeUtil.INSTANCE.getNekoTemplate().at(123);\nfinal Message.Element<?> message = CatCodeMessageUtil.toMessage(cat);\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5c06 Mirai \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"SingleMessage")," \u8f6c\u5316\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"Neko"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final At at = new At(123);\nfinal Neko neko = CatCodeMessageUtil.toNeko(at);\n")))),(0,l.kt)("h2",{id:"-examples"},"\ud83d\udca1 Examples"),(0,l.kt)("p",null,"\u9664\u4e86\u7ec4\u4ef6\u4ee5\u5916\uff0c\u672c\u5468\u5185\u8fd8\u5bf9 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-examples"},"Simple Robot Examples")," \u505a\u4e86\u4e00\u90e8\u5206\u5c0f\u66f4\u65b0\u3001\u5c0f\u4fee\u6b63\uff0c\n\u8865\u5145\u4e86\u4e00\u4e9b\u6ce8\u91ca\u3001\u8c03\u6574\u4e86\u4e00\u4e0b\u76ee\u5f55\u7684\u540d\u79f0\u7ed3\u6784\uff0c\u4ee5\u53ca\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u76f8\u5173\u7684\u793a\u4f8b\u6a21\u5757\u3002"),(0,l.kt)("p",null,"\u5b9e\u9645\u4e0a\u793a\u4f8b\u9879\u76ee\u8fd9\u4e2a\u4e1c\u897f\uff0c\u4e00\u5f00\u59cb\u7684\u65f6\u5019\uff0c\u5728\u6b63\u5f0f\u7248\u672c\u53d1\u5e03\u4e4b\u524d\u6211\u662f\u5e76\u4e0d\u6253\u7b97\u63d0\u4f9b\u7684\uff0c\u56e0\u4e3a\u73b0\u9636\u6bb5API\u53d8\u52a8\u7387\u592a\u9ad8\u4e86\uff0c\u5982\u679c\u5199\u4e86\u8fd8\u9700\u8981\u65f6\u4e0d\u65f6\u7684\u53bb\u505a\u4fee\u6539\uff0c\u597d\u751f\u9ebb\u70e6\uff01\n\u4e0d\u8fc7\u8bdd\u867d\u5982\u6b64\uff0c\u65e2\u7136\u5199\u4e86\u5076\u5c14\u60f3\u8d77\u6765\u7684\u65f6\u5019\u8fd8\u662f\u53ef\u4ee5\u7a0d\u5fae\u66f4\u65b0\u4e0b\u7684\u3002"),(0,l.kt)("h2",{id:"-\u65b0\u7684\u8ba8\u8bba"},"\ud83d\udcac \u65b0\u7684\u8ba8\u8bba"),(0,l.kt)("p",null,"\u672c\u5468\u53d1\u8d77\u4e86\u4e00\u4e2a\u65b0\u7684",(0,l.kt)("del",{parentName:"p"},"\u81ea\u8a00\u81ea\u8bed"),"\u8ba8\u8bba\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/discussions/241"},"\u53bb\u53cd\u5c04\u5316"),"\n\u4ee5\u516c\u5e03(\u8f83\u4e3a\u9065\u8fdc\u7684)\u672a\u6765\u6240\u53ef\u80fd\u65bd\u884c\u7684\u65b9\u5411\u4e0e\u8ba1\u5212\u4e2d\u7684\u4e00\u73af\uff1a\n\u964d\u4f4e\u6216\u5b8c\u5168\u6392\u9664\u53cd\u5c04API\u7684\u4f7f\u7528\u3002\u5982\u679c\u6709\u5174\u8da3\u7684\u8bdd\u53ef\u4ee5\u7b80\u5355\u7785\u4e00\u773c\u5594\u3002"),(0,l.kt)("h2",{id:"-\u6587\u6863"},"\ud83d\udcd6 \u6587\u6863"),(0,l.kt)("h3",{id:"-\u6587\u6863\u7248\u672c"},"\ud83d\udc49 \u6587\u6863\u7248\u672c"),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0\uff0c\u76ee\u524d\u6587\u6863\u53f3\u4e0a\u89d2\u7684\u7248\u672c\u5217\u8868\u53d8\u6210\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Next")," \u6309\u94ae\u3002\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u6682\u65f6\u5c06\u7248\u672c\u5316\u7ed9\u79fb\u9664\u4e86\u3002\n\u5f53\u7b2c\u4e00\u4e2a\u6b63\u5f0f\u7248\u672c\u53d1\u5e03\u4e4b\u540e\uff0c\u624d\u4f1a\u5f00\u59cb\u5206\u7248\uff0c\u76ee\u524d\u7684\u7f16\u64b0\u9636\u6bb5\uff0c\u5c31\u5148\u4e0d\u5206\u4e86\u3002"),(0,l.kt)("h3",{id:"-\u6587\u6863\u5185\u5bb9"},"\ud83d\udc49 \u6587\u6863\u5185\u5bb9"),(0,l.kt)("p",null,"\u672c\u5468\u6587\u6863\u5185\u5bb9\u4e5f\u662f\u6709\u6240\u66f4\u65b0\uff0c\u5176\u4e2d\u5305\u62ec"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5feb\u901f\u542f\u52a8\u5185\u5bb9\u540c\u6b65 ",(0,l.kt)("a",{parentName:"li",href:"https://www.yuque.com/simpler-robot/simpler-robot-doc"},"\u8bed\u96c0\u6587\u6863")," \u7684\u4fee\u6b63\u3002"),(0,l.kt)("li",{parentName:"ul"},"Mirai\u7ec4\u4ef6\u4e0b\u90e8\u5206\u5b50\u7ae0\u8282\u7684\u540c\u6b65\u3002")),(0,l.kt)("h2",{id:"-\u7f3a\u70b9\u513f\u4ec0\u4e48"},"\ud83e\udd14 \u7f3a\u70b9\u513f\u4ec0\u4e48"),(0,l.kt)("p",null,"\u8bf4\u5230\u5e95\uff0c\u6cd5\u6b27\u8389\u6211\u8bde\u751f\u81f3\u4eca\u4e5f\u6709\u4e9b\u65f6\u65e5\u4e86\uff0c\u4f46\u662f\u81f3\u4eca\u751a\u81f3\u6ca1\u6709\u4e00\u4e2a\u7ba1\u7406\u5e73\u53f0\uff0c\u7740\u5b9e\u8bf4\u4e0d\u8fc7\u53bb\u554a\uff01\u4e0d\u8fc7\u6211\u4ece\u4e00\u4e9b\u5c0f\u9053\u6d88\u606f\u6253\u542c\u5230\uff0c\u4f3c\u4e4e\u4e3a\u6211\u91cf\u8eab\u6253\u9020\u7684\u4e1c\u897f\u6b63\u5728\u7b79\u5907\u4e2d\u5462\uff0c\u563f\u563f\uff0c\u8fd8\u662f\u86ee\u671f\u5f85\u7684\u5462 \uff5e \ud83c\udfb6"),(0,l.kt)("h2",{id:"-\u88c5\u4fee"},"\ud83d\uddc2 \u88c5\u4fee"),(0,l.kt)("p",null,"\u524d\u9635\u5b50\u53d1\u73b0\u67d0\u4eba\u7684GitHub\u4e3b\u9875\u5077\u5077\u6478\u6478\u7684\u91cd\u65b0\u88c5\u4fee\u4e86\u4e00\u4e0b\uff0c\u54fc\uff0c\u4ee5\u4e3a\u6211\u6ca1\u53d1\u73b0\u5417\uff1f\u5404\u4f4d\u5982\u679c\u6709\u65f6\u95f4\u4e86\u53ef\u4ee5\u53bb\u770b\u770b\u4ed6\u88c5\u4fee\u7684\u90a3\u4e2a\u9b3c\u6837\u5b50\uff0c\u5567\u5567\u5567"))}d.isMDXComponent=!0}}]);