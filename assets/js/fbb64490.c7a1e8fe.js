"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3806],{5162:(t,e,a)=>{a.d(e,{Z:()=>o});var l=a(7294),r=a(6010);const n="tabItem_Ymn6";function o(t){let{children:e,hidden:a,className:o}=t;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,o),hidden:a},e)}},5488:(t,e,a)=>{a.d(e,{Z:()=>c});var l=a(7462),r=a(7294),n=a(6010),o=a(2389),i=a(7392),s=a(7094),m=a(2466);const u="tabList__CuJ",p="tabItem_LNqP";function b(t){var e;const{lazy:a,block:o,defaultValue:b,values:c,groupId:d,className:k}=t,h=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??h.map((t=>{let{props:{value:e,label:a,attributes:l}}=t;return{value:e,label:a,attributes:l}})),v=(0,i.l)(g,((t,e)=>t.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===b?b:b??(null==(e=h.find((t=>t.props.default)))?void 0:e.props.value)??h[0].props.value;if(null!==f&&!g.some((t=>t.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,s.U)(),[w,E]=(0,r.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:Z}=(0,m.o5)();if(null!=d){const t=N[d];null!=t&&t!==w&&g.some((e=>e.value===t))&&E(t)}const I=t=>{const e=t.currentTarget,a=T.indexOf(e),l=g[a].value;l!==w&&(Z(e),E(l),null!=d&&y(d,String(l)))},M=t=>{var e;let a=null;switch(t.key){case"Enter":I(t);break;case"ArrowRight":{const e=T.indexOf(t.currentTarget)+1;a=T[e]??T[0];break}case"ArrowLeft":{const e=T.indexOf(t.currentTarget)-1;a=T[e]??T[T.length-1];break}}null==(e=a)||e.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},k)},g.map((t=>{let{value:e,label:a,attributes:o}=t;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:t=>T.push(t),onKeyDown:M,onClick:I},o,{className:(0,n.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===e})}),a??e)}))),a?(0,r.cloneElement)(h.filter((t=>t.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==w})))))}function c(t){const e=(0,o.Z)();return r.createElement(b,(0,l.Z)({key:String(e)},t))}},1610:(t,e,a)=>{a.d(e,{Z:()=>n});var l=a(7294);const r="label_Yf5u";function n(t){let{type:e,href:a,children:n}=t;e=e||"primary";const o=l.createElement("span",{className:r},l.createElement("span",{className:`badge badge--${e}`},n));return null!=a&&a.length>0?l.createElement("a",{href:a},o):o}},8627:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var l=a(7462),r=(a(7294),a(3905));a(5488),a(5162),a(814),a(1610);const n={authors:"forliy",title:"2022\u5e74\u7b2c28\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},o=void 0,i={permalink:"/blog/2022/07/15/weak-28-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022-07-15/weak-28-report.md",source:"@site/blog/2022-07-15/weak-28-report.md",title:"2022\u5e74\u7b2c28\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c28\u5468\u5468\u62a5\u55b5\u3002",date:"2022-07-15T00:00:00.000Z",formattedDate:"July 15, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:2.515,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c28\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"\u8bed\u4e49\u5316\u7248\u672c?",permalink:"/blog/2022/07/15/semantic-versioning"},nextItem:{title:"2022\u5e74\u7b2c27\u5468\u5468\u62a5",permalink:"/blog/2022/07/08/week-27-report"}},s={authorsImageUrls:[void 0]},m=[{value:"\ud83d\ude80 \u7248\u672c\u66f4\u65b0",id:"-\u7248\u672c\u66f4\u65b0",level:2},{value:"\ud83d\udea4 v3.0.0-beta-M3",id:"-v300-beta-m3",level:3},{value:"\ud83d\udcac \u7248\u672c\u8bed\u4e49\u5316",id:"-\u7248\u672c\u8bed\u4e49\u5316",level:2},{value:"\ud83d\ude15 \u7ec4\u4ef6\u8fdb\u5c55",id:"-\u7ec4\u4ef6\u8fdb\u5c55",level:2}],u={toc:m};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,l.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"2022\u5e74\u7b2c28\u5468\u5468\u62a5\u55b5\u3002"),(0,r.kt)("h2",{id:"-\u7248\u672c\u66f4\u65b0"},"\ud83d\ude80 \u7248\u672c\u66f4\u65b0"),(0,r.kt)("p",null,"\u622a\u6b62\u5230\u672c\u5468\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u53d1\u5e03\u4e86\u5982\u4e0b\u7248\u672c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0-beta-M3"},(0,r.kt)("strong",{parentName:"a"},"v3.0.0-beta-M3")))),(0,r.kt)("h3",{id:"-v300-beta-m3"},"\ud83d\udea4 v3.0.0-beta-M3"),(0,r.kt)("p",null,"\u5982\u4e0a\u4e00\u5468\u5468\u62a5\u6240\u8bf4\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0-beta-M3"},(0,r.kt)("strong",{parentName:"a"},"v3.0.0-beta-M3"))," \u5b58\u5728\u5927\u91cf\u4e0d\u517c\u5bb9\u66f4\u65b0\uff08\u5305\u8def\u5f84\u53d8\u66f4\u6240\u5bfc\u81f4\u7684\uff09\uff0c\u4e14\u662f\u6700\u540e\u4e00\u6b21\u5b58\u5728\u5927\u91cf\u4e0d\u517c\u5bb9\u66f4\u65b0\u7684\u66f4\u65b0\u3002"),(0,r.kt)("i",null,(0,r.kt)("s",null,(0,r.kt)("small",null,"\u8bf4\u5b9e\u8bdd\u505a\u51fa\u8fd9\u4e2a\u627f\u8bfa\u4e4b\u540e\u6709\u70b9\u513f\u5c0f\u540e\u6094")))," \u6211\u4eec\u4f1a\u5c3d\u53ef\u80fd\u9075\u5b88\u8fd9\u4e2a\u627f\u8bfa\uff0c\u4e0d\u518d\u53d8\u66f4\u57fa\u672cAPI\uff0c \u5e76\u5c3d\u5feb\u53d1\u5e03 ",(0,r.kt)("strong",null,"v3.0.0-beta-RC")," \u7248\u672c\u3002",(0,r.kt)("p",null,"simbot3\u7248\u672c\u4ece\u5f00\u59cb\u5230\u73b0\u5728\u5df2\u7ecf\u8fdb\u884c\u4e86\u5c06\u8fd11\u5e74\uff0c\u6211\u4eec\u5f88\u662f\u8feb\u5207\u5730\u5e0c\u671b\u80fd\u8d76\u7d27\u7a33\u5b9a\u4e0b\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"-\u7248\u672c\u8bed\u4e49\u5316"},"\ud83d\udcac \u7248\u672c\u8bed\u4e49\u5316"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5f53\u524d simbot3 \u7684\u7248\u672c\u8bed\u4e49\u5316\u60c5\u51b5\u548c\u6211\u4eec\u5bf9\u6b64\u60c5\u51b5\u7684\u60f3\u6cd5\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"semantic-versioning"},"\u300a\u8bed\u4e49\u5316\u7248\u672c?\u300b"),"\u3002"),(0,r.kt)("h2",{id:"-\u7ec4\u4ef6\u8fdb\u5c55"},"\ud83d\ude15 \u7ec4\u4ef6\u8fdb\u5c55"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u7684\u8fdb\u5c55\u59cb\u7ec8\u7f13\u4e8e\u6838\u5fc3\u5e93\uff0c\u6bd5\u7adf\u6838\u5fc3\u5e93\u7684\u7a33\u5b9a\u624d\u80fd\u4fdd\u8bc1\u7ec4\u4ef6\u53ef\u4ee5\u4e13\u6ce8\u7684\u8fdb\u884c\u63a8\u8fdb\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\uff0c\u7531\u6211\u4eec\u5b98\u65b9\u6240\u7ef4\u62a4\u7684\u7ec4\u4ef6\u53ca\u5176\u57fa\u672c\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4ed3\u5e93"),(0,r.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mirai\u7ec4\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/simple-robot/simbot-component-mirai"},"simple-robot/simbot-component-mirai")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u76f8\u5bf9"),"\u7a33\u5b9a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kook\u7ec4\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/simple-robot/simbot-component-kook"},"simple-robot/simbot-component-kook")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u7a33\u5b9a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"QQ\u9891\u9053\u7ec4\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/simple-robot/simbot-component-kook"},"simple-robot/simbot-component-kook")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u7a33\u5b9a")))),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u4e09\u4e2a\u7ec4\u4ef6\u4e2d\uff0c",(0,r.kt)("strong",{parentName:"p"},"mirai\u7ec4\u4ef6")," \u76f8\u5bf9\u4e8e\u5176\u4ed6\u4e24\u4e2a\u7ec4\u4ef6\u6765\u8bb2\u66f4\u52a0\u7a33\u5b9a\u3002\u8fd9\u662f\u56e0\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mamoe/mirai"},"mirai")," \u6846\u67b6\u672c\u8eab\u5df2\u5341\u5206\u6210\u719f\uff0c\n\u800cmirai\u7ec4\u4ef6\u5219\u4ec5\u9700\u8981\u5bf9mirai\u6846\u67b6\u8fdb\u884c\u5c01\u88c5\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u800c\u5176\u4ed6\u7ec4\u4ef6\u7684\u4e3b\u8981api\u90fd\u662f\u6839\u636e\u5176\u5404\u81ea\u5bf9\u5e94\u7684\u5b98\u65b9api\u8fdb\u884c\u7684\u5c01\u88c5\uff0c\u5e76\u4e0d\u6d89\u53ca\u7b2c\u4e09\u65b9\u6846\u67b6\uff0c\u56e0\u6b64\u4f1a\u6709\u66f4\u591a\u7684\u5de5\u4f5c\u548c\u7ec6\u8282\u6027\u95ee\u9898\u9700\u8981\u5904\u7406\uff0c\n\u8fd9\u4e5f\u5bfc\u81f4\u4e86\u5b83\u4eec\u5b58\u5728\u66f4\u591a\u9690\u60a3\u548c\u5f85\u89e3\u51b3\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u603b\u800c\u8a00\u4e4b\uff0c\u5c31\u662f\u8fd9\u6837\u3002\u4ee5\u76ee\u524d\u7684\u5f62\u52bf\u6765\u770b\uff0c\u56e2\u961f\u7684\u751f\u4ea7\u529b\u8fdc\u8fdc\u65e0\u6cd5\u5f25\u8865\u5f53\u524d\u5de5\u4f5c\u91cf\u7684\u7f3a\u53e3\uff0c\u56e0\u6b64\u6211\u4eec\u65e0\u6cd5\u4fdd\u8bc1\u6b64\u9879\u76ee\u7684\u751f\u547d\u529b\u4e0e\u672a\u6765\u3002"))}p.isMDXComponent=!0}}]);