"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[80],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),l=a(7294),o=a(6010),r=a(2389),i=a(7392),s=a(7094),m=a(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:a,block:r,defaultValue:d,values:c,groupId:b,className:k}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),x=(0,i.l)(g,((e,t)=>e.value===t.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:h}=(0,s.U)(),[N,T]=(0,l.useState)(y),I=[],{blockElementScrollPositionUntilNextRender:Z}=(0,m.o5)();if(null!=b){const e=f[b];null!=e&&e!==N&&g.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,a=I.indexOf(t),n=g[a].value;n!==N&&(Z(t),T(n),null!=b&&h(b,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;a=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;a=I[t]??I[I.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},k)},g.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>I.push(e),onKeyDown:E,onClick:w},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,l.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,r.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},1610:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294);const l="label_Yf5u";function o(e){let{type:t,href:a,children:o}=e;t=t||"primary";const r=n.createElement("span",{className:l},n.createElement("span",{className:`badge badge--${t}`},o));return null!=a&&a.length>0?n.createElement("a",{href:a},r):r}},6344:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var n=a(7462),l=(a(7294),a(3905)),o=a(5488),r=a(5162);a(814),a(1610);const i={authors:["forliy","forte"],title:"\u8bed\u4e49\u5316\u7248\u672c?",tags:["\u6742\u8c08"]},s=void 0,m={permalink:"/blog/2022/07/15/semantic-versioning",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022-07-15/semantic-versioning.md",source:"@site/blog/2022-07-15/semantic-versioning.md",title:"\u8bed\u4e49\u5316\u7248\u672c?",description:"simbot3\u7684\u7248\u672c\u8bed\u4e49\uff0c\u4f9d\u65e7\u4e0d\u5c3d\u4eba\u610f\u3002",date:"2022-07-15T00:00:00.000Z",formattedDate:"July 15, 2022",tags:[{label:"\u6742\u8c08",permalink:"/blog/tags/\u6742\u8c08"}],readingTime:2.875,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"},{name:"Scarlet Forte",title:"Simple Robot \u4e34\u65f6\u534f\u4f5c\u8005",url:"https://github.com/ForteScarlet",email:"ForteScarlet@163.com",imageURL:"https://github.com/ForteScarlet.png",key:"forte"}],frontMatter:{authors:["forliy","forte"],title:"\u8bed\u4e49\u5316\u7248\u672c?",tags:["\u6742\u8c08"]},prevItem:{title:"2022\u5e74\u7b2c29\u5468\u5468\u62a5",permalink:"/blog/2022/07/22/weak-29-report"},nextItem:{title:"2022\u5e74\u7b2c28\u5468\u5468\u62a5",permalink:"/blog/2022/07/15/weak-28-report"}},p={authorsImageUrls:[void 0,void 0]},u=[],d={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"simbot3\u7684\u7248\u672c\u8bed\u4e49\uff0c\u4f9d\u65e7\u4e0d\u5c3d\u4eba\u610f\u3002"),(0,l.kt)("admonition",{title:"\u9605\u524d\u53c2\u8003",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e ",(0,l.kt)("strong",{parentName:"p"},"\u8bed\u4e49\u5316\u7248\u672c")," \u7684\u6982\u5ff5\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://semver.org/lang/zh-CN/"},"\u300a\u8bed\u4e49\u5316\u7248\u672c 2.0.0\u300b"),"\u3002")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0-beta-M3"},"v3.0.0-beta-M3")," \u7248\u672c\u53d1\u5e03\u65f6\uff0c\n\u6211\u4eec\u627f\u8bfa\u8fc7\u540e\u7eed\u7684beta\u7248\u672c\u4e0d\u4f1a\u518d\u51fa\u73b0\u5927\u9762\u79ef\u7684\u4e0d\u517c\u5bb9\u66f4\u65b0\u3002\u800c\u5728\u6b64\u7248\u672c\u53d1\u5e03\u4e4b\u540e\uff0c\u6211\u4eec\u53c8\u5bf9simbot3\u7684\u8bed\u4e49\u5316\u7248\u672c\u4ea7\u751f\u4e86\u81ea\u6211\u8d28\u7591\u3002"),(0,l.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u4ecesimbot\u6700\u521d\u7684\u7248\u672c\u76f4\u81f3\u4eca\u65e5\uff0c\u90fd\u6ca1\u6709\u9075\u5faa\u6807\u51c6\u7684",(0,l.kt)("strong",{parentName:"p"},"\u8bed\u4e49\u5316\u7248\u672c"),"\u89c4\u5219\u3002\u4e0d\u8bba\u662fsimbot\u3001simbot2\u8fd8\u662f\u76ee\u524d\u6b63\u5728\u7b79\u5907\u7684simbot3\uff0c\n\u5b83\u4eec\u7684\u7248\u672c\u8bed\u4e49\u90fd\u5341\u5206\u7684\u6df7\u4e71\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\uff0csimbot2\u7684\u5750\u6807\u5927\u6982\u662f\u8fd9\u4e2a\u6837\u5b50\u7684\uff1a"),(0,l.kt)(o.Z,{groupId:"use-dependency",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>love.forte.simple-robot</groupId>\n  <artifactId>xxx</artifactId>\n  <version>2.x.x</version>\n</dependency>\n"))),(0,l.kt)(r.Z,{value:"Gradle Kotlin DSL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("love.forte.simple-robot:xxx:2.x.x")\n'))),(0,l.kt)(r.Z,{value:"Gradle Groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'love.forte.simple-robot:xxx:2.x.x'\n")))),(0,l.kt)("p",null,"\u800c\u76ee\u524d\u7684simbot3\u7684\u5750\u6807\u5927\u6982\u662f\u8fd9\u4e2a\u6837\u5b50\u7684\uff1a"),(0,l.kt)(o.Z,{groupId:"use-dependency",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>love.forte.simbot</groupId>\n  <artifactId>simbot-xxx</artifactId>\n  <version>3.x.x</version>\n</dependency>\n"))),(0,l.kt)(r.Z,{value:"Gradle Kotlin DSL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("love.forte.simbot:simbot-xxx:3.x.x")\n'))),(0,l.kt)(r.Z,{value:"Gradle Groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'love.forte.simbot:simbot-xxx:3.x.x'\n")))),(0,l.kt)("p",null,"\u4ece\u672c\u8d28\u4e0a\u6765\u8bb2\uff0csimbot2\u548csimbot3\u5b9e\u9645\u4e0a\u5c5e\u4e8e\u4e24\u4e2a\u5b8c\u5168\u4e0d\u540c\u7684\u6846\u67b6 \u2014\u2014\u2014\u2014 \u751a\u81f3\u4e8e\u53ea\u662f\u5c06",(0,l.kt)("strong",{parentName:"p"},"\u4e3b\u7248\u672c\u53f7"),"\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," \u63d0\u5347\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"3")," \u90fd\u96be\u4ee5\u63cf\u8ff0\u4e8c\u8005\u4e4b\u95f4\u7684\u5dee\u5f02\u3002\n\u56e0\u6b64\uff0c\u6211\u4eec\u8ba4\u4e3a\uff0c\u5b9e\u9645\u4e0a\u5bf9\u4e8esimbot3\u4f7f\u7528\u5982\u4e0b\u5f62\u5f0f\u7684\u5b9a\u4e49\u53ef\u80fd\u4f1a\u66f4\u52a0\u5408\u9002\uff1a"),(0,l.kt)(o.Z,{groupId:"use-dependency",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>love.forte.simbot3</groupId>\n  <artifactId>simbot3-xxx</artifactId>\n  <version>0.x.x</version>\n</dependency>\n"))),(0,l.kt)(r.Z,{value:"Gradle Kotlin DSL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("love.forte.simbot3:simbot3-xxx:0.x.x")\n'))),(0,l.kt)(r.Z,{value:"Gradle Groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'love.forte.simbot3:simbot3-xxx:0.x.x'\n")))),(0,l.kt)("p",null,"\u8fd9\u6837\u4e00\u6765\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"love.forte.simbot3")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"groupId")," \u6765\u533a\u5206\u4e8e\u65b0\u65e7\u6846\u67b6\uff0c\u4e5f\u53ef\u4ee5\u501f\u52a9\u4e00\u4e2a\u4ece\u5934\u5f00\u59cb\u7684\u7248\u672c\u53f7\u6765\u66f4\u51c6\u786e\u7684\u63cf\u8ff0\u7248\u672c\u8bed\u4e49\u3002\n\u4f46\u662f\u5f88\u53ef\u60dc\u7684\u662f\uff0c\u8fd9\u79cd\u60c5\u51b5\u88ab\u63d0\u51fa\u7684\u592a\u665a\uff0c\u4ee5\u81f3\u4e8esimbot3\u5c06\u65e0\u6cd5\u9075\u5faa\u8fd9\u79cd\u65b9\u5f0f\u4e86\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4e0d\u8bba\u5bf9\u4e8e\u6838\u5fc3\u5e93\u8fd8\u662f\u5bf9\u4e8e\u7ec4\u4ef6\uff0c\u90fd\u662f\u4e00\u4e2a\u5145\u6ee1\u5305\u5bb9\u6027\u7684\u65b0\u5f00\u59cb\u3002\u53ea\u4e0d\u8fc7\u8fd9\u6837\u7684\u8bdd\u53ef\u80fd\u9700\u8981\u91cd\u65b0\u5b9a\u4e49\u6574\u4f53\u7684\u5305\u7ed3\u6784\uff0c\n\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"love.forte.simbot3")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"groupId")," \u4e00\u81f4\u3002\u6240\u4ee5\u8fd9\u79cd\u65b9\u5f0f\uff0c\u5c31\u8ba9\u6211\u4eec\u7559\u7ed9\u672a\u6765\u53ef\u671f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"simbot4")," \u5427\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u672a\u6765...?"),(0,l.kt)("admonition",{title:"\u53ef\u671f",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u7f8e\u597d\u7684\u5c55\u671b\u603b\u662f\u4e00\u5207\u7684\u5f00\u7aef\u3002")),(0,l.kt)(o.Z,{groupId:"use-dependency",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>love.forte.simbot4</groupId>\n  <artifactId>simbot4-xxx</artifactId>\n  <version>0.x.x</version>\n</dependency>\n"))),(0,l.kt)(r.Z,{value:"Gradle Kotlin DSL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("love.forte.simbot4:simbot4-xxx:0.x.x")\n'))),(0,l.kt)(r.Z,{value:"Gradle Groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'love.forte.simbot4:simbot4-xxx:0.x.x'\n"))))))}c.isMDXComponent=!0}}]);