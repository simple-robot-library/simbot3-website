"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[6126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,b=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(b,l(l({ref:t},m),{},{components:n})):a.createElement(b,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),p=n(2466);const m="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:l,defaultValue:c,values:d,groupId:b,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:h}=(0,s.U)(),[N,T]=(0,r.useState)(k),I=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=b){const e=x[b];null!=e&&e!==N&&f.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=I.indexOf(t),a=f[n].value;a!==N&&(w(t),T(a),null!=b&&h(b,String(a)))},Z=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;n=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;n=I[t]??I[I.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>I.push(e),onKeyDown:Z,onClick:O},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},1610:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const r="label_Yf5u";function o(e){let{type:t,href:n,children:o}=e;t=t||"primary";const l=a.createElement("span",{className:r},a.createElement("span",{className:`badge badge--${t}`},o));return null!=n&&n.length>0?a.createElement("a",{href:n},l):l}},773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);n(814),n(1610);const i={authors:["forliy","forte"],title:"\u8bed\u4e49\u5316\u7248\u672c?",tags:["\u6742\u8c08"]},s=void 0,p={permalink:"/blog/2022/07/15/semantic-versioning",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022/07-15/semantic-versioning.md",source:"@site/blog/2022/07-15/semantic-versioning.md",title:"\u8bed\u4e49\u5316\u7248\u672c?",description:"simbot3\u7684\u7248\u672c\u8bed\u4e49\uff0c\u4f9d\u65e7\u4e0d\u5c3d\u4eba\u610f\u3002",date:"2022-07-15T00:00:00.000Z",formattedDate:"July 15, 2022",tags:[{label:"\u6742\u8c08",permalink:"/blog/tags/\u6742\u8c08"}],readingTime:2.875,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"},{name:"Scarlet Forte",title:"Simple Robot \u4e34\u65f6\u534f\u4f5c\u8005",url:"https://github.com/ForteScarlet",email:"ForteScarlet@163.com",imageURL:"https://github.com/ForteScarlet.png",key:"forte"}],frontMatter:{authors:["forliy","forte"],title:"\u8bed\u4e49\u5316\u7248\u672c?",tags:["\u6742\u8c08"]},prevItem:{title:"2022\u5e74\u7b2c29\u5468\u5468\u62a5",permalink:"/blog/2022/07/22/weak-29-report"},nextItem:{title:"2022\u5e74\u7b2c28\u5468\u5468\u62a5",permalink:"/blog/2022/07/15/weak-28-report"}},m={authorsImageUrls:[void 0,void 0]},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"simbot3\u7684\u7248\u672c\u8bed\u4e49\uff0c\u4f9d\u65e7\u4e0d\u5c3d\u4eba\u610f\u3002"),(0,r.kt)("admonition",{title:"\u9605\u524d\u53c2\u8003",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"\u8bed\u4e49\u5316\u7248\u672c")," \u7684\u6982\u5ff5\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/lang/zh-CN/"},"\u300a\u8bed\u4e49\u5316\u7248\u672c 2.0.0\u300b"),"\u3002")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0-beta-M3"},"v3.0.0-beta-M3")," \u7248\u672c\u53d1\u5e03\u65f6\uff0c\n\u6211\u4eec\u627f\u8bfa\u8fc7\u540e\u7eed\u7684beta\u7248\u672c\u4e0d\u4f1a\u518d\u51fa\u73b0\u5927\u9762\u79ef\u7684\u4e0d\u517c\u5bb9\u66f4\u65b0\u3002\u800c\u5728\u6b64\u7248\u672c\u53d1\u5e03\u4e4b\u540e\uff0c\u6211\u4eec\u53c8\u5bf9simbot3\u7684\u8bed\u4e49\u5316\u7248\u672c\u4ea7\u751f\u4e86\u81ea\u6211\u8d28\u7591\u3002"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u4ecesimbot\u6700\u521d\u7684\u7248\u672c\u76f4\u81f3\u4eca\u65e5\uff0c\u90fd\u6ca1\u6709\u9075\u5faa\u6807\u51c6\u7684",(0,r.kt)("strong",{parentName:"p"},"\u8bed\u4e49\u5316\u7248\u672c"),"\u89c4\u5219\u3002\u4e0d\u8bba\u662fsimbot\u3001simbot2\u8fd8\u662f\u76ee\u524d\u6b63\u5728\u7b79\u5907\u7684simbot3\uff0c\n\u5b83\u4eec\u7684\u7248\u672c\u8bed\u4e49\u90fd\u5341\u5206\u7684\u6df7\u4e71\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\uff0csimbot2\u7684\u5750\u6807\u5927\u6982\u662f\u8fd9\u4e2a\u6837\u5b50\u7684\uff1a"),(0,r.kt)(o.Z,{groupId:"use-dependency",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Maven",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>love.forte.simple-robot</groupId>\n  <artifactId>xxx</artifactId>\n  <version>2.x.x</version>\n</dependency>\n"))),(0,r.kt)(l.Z,{value:"Gradle Kotlin DSL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("love.forte.simple-robot:xxx:2.x.x")\n'))),(0,r.kt)(l.Z,{value:"Gradle Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'love.forte.simple-robot:xxx:2.x.x'\n")))),(0,r.kt)("p",null,"\u800c\u76ee\u524d\u7684simbot3\u7684\u5750\u6807\u5927\u6982\u662f\u8fd9\u4e2a\u6837\u5b50\u7684\uff1a"),(0,r.kt)(o.Z,{groupId:"use-dependency",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Maven",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>love.forte.simbot</groupId>\n  <artifactId>simbot-xxx</artifactId>\n  <version>3.x.x</version>\n</dependency>\n"))),(0,r.kt)(l.Z,{value:"Gradle Kotlin DSL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("love.forte.simbot:simbot-xxx:3.x.x")\n'))),(0,r.kt)(l.Z,{value:"Gradle Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'love.forte.simbot:simbot-xxx:3.x.x'\n")))),(0,r.kt)("p",null,"\u4ece\u672c\u8d28\u4e0a\u6765\u8bb2\uff0csimbot2\u548csimbot3\u5b9e\u9645\u4e0a\u5c5e\u4e8e\u4e24\u4e2a\u5b8c\u5168\u4e0d\u540c\u7684\u6846\u67b6 \u2014\u2014\u2014\u2014 \u751a\u81f3\u4e8e\u53ea\u662f\u5c06",(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u7248\u672c\u53f7"),"\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," \u63d0\u5347\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," \u90fd\u96be\u4ee5\u63cf\u8ff0\u4e8c\u8005\u4e4b\u95f4\u7684\u5dee\u5f02\u3002\n\u56e0\u6b64\uff0c\u6211\u4eec\u8ba4\u4e3a\uff0c\u5b9e\u9645\u4e0a\u5bf9\u4e8esimbot3\u4f7f\u7528\u5982\u4e0b\u5f62\u5f0f\u7684\u5b9a\u4e49\u53ef\u80fd\u4f1a\u66f4\u52a0\u5408\u9002\uff1a"),(0,r.kt)(o.Z,{groupId:"use-dependency",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Maven",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>love.forte.simbot3</groupId>\n  <artifactId>simbot3-xxx</artifactId>\n  <version>0.x.x</version>\n</dependency>\n"))),(0,r.kt)(l.Z,{value:"Gradle Kotlin DSL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("love.forte.simbot3:simbot3-xxx:0.x.x")\n'))),(0,r.kt)(l.Z,{value:"Gradle Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'love.forte.simbot3:simbot3-xxx:0.x.x'\n")))),(0,r.kt)("p",null,"\u8fd9\u6837\u4e00\u6765\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"love.forte.simbot3")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"groupId")," \u6765\u533a\u5206\u4e8e\u65b0\u65e7\u6846\u67b6\uff0c\u4e5f\u53ef\u4ee5\u501f\u52a9\u4e00\u4e2a\u4ece\u5934\u5f00\u59cb\u7684\u7248\u672c\u53f7\u6765\u66f4\u51c6\u786e\u7684\u63cf\u8ff0\u7248\u672c\u8bed\u4e49\u3002\n\u4f46\u662f\u5f88\u53ef\u60dc\u7684\u662f\uff0c\u8fd9\u79cd\u60c5\u51b5\u88ab\u63d0\u51fa\u7684\u592a\u665a\uff0c\u4ee5\u81f3\u4e8esimbot3\u5c06\u65e0\u6cd5\u9075\u5faa\u8fd9\u79cd\u65b9\u5f0f\u4e86\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4e0d\u8bba\u5bf9\u4e8e\u6838\u5fc3\u5e93\u8fd8\u662f\u5bf9\u4e8e\u7ec4\u4ef6\uff0c\u90fd\u662f\u4e00\u4e2a\u5145\u6ee1\u5305\u5bb9\u6027\u7684\u65b0\u5f00\u59cb\u3002\u53ea\u4e0d\u8fc7\u8fd9\u6837\u7684\u8bdd\u53ef\u80fd\u9700\u8981\u91cd\u65b0\u5b9a\u4e49\u6574\u4f53\u7684\u5305\u7ed3\u6784\uff0c\n\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"love.forte.simbot3")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"groupId")," \u4e00\u81f4\u3002\u6240\u4ee5\u8fd9\u79cd\u65b9\u5f0f\uff0c\u5c31\u8ba9\u6211\u4eec\u7559\u7ed9\u672a\u6765\u53ef\u671f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"simbot4")," \u5427\u3002"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u672a\u6765...?"),(0,r.kt)("admonition",{title:"\u53ef\u671f",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u7f8e\u597d\u7684\u5c55\u671b\u603b\u662f\u4e00\u5207\u7684\u5f00\u7aef\u3002")),(0,r.kt)(o.Z,{groupId:"use-dependency",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Maven",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>love.forte.simbot4</groupId>\n  <artifactId>simbot4-xxx</artifactId>\n  <version>0.x.x</version>\n</dependency>\n"))),(0,r.kt)(l.Z,{value:"Gradle Kotlin DSL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("love.forte.simbot4:simbot4-xxx:0.x.x")\n'))),(0,r.kt)(l.Z,{value:"Gradle Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'love.forte.simbot4:simbot4-xxx:0.x.x'\n"))))))}d.isMDXComponent=!0}}]);