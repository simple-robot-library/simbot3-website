"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[9382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),i=r(7392),s=r(7094),p=r(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:r,block:l,defaultValue:m,values:d,groupId:b,className:v}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??k.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,i.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,C]=(0,a.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=b){const e=y[b];null!=e&&e!==w&&f.some((t=>t.value===e))&&C(e)}const j=e=>{const t=e.currentTarget,r=T.indexOf(t),n=f[r].value;n!==w&&(O(t),C(n),null!=b&&N(b,String(n)))},F=e=>{var t;let r=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},f.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:F,onClick:j},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,a.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},5977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=r(5488),l=r(5162);r(814);const i={authors:"forliy",title:"2022\u5e74\u7b2c24\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},s=void 0,p={permalink:"/blog/2022/06/17/week-24-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022/06-17-week-24-report/index.md",source:"@site/blog/2022/06-17-week-24-report/index.md",title:"2022\u5e74\u7b2c24\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c24\u5468\u5468\u62a5\u55b5\u3002",date:"2022-06-17T00:00:00.000Z",formattedDate:"June 17, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:2.585,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c24\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c25\u5468\u5468\u62a5",permalink:"/blog/2022/06/22/week-25-report"},nextItem:{title:"2022\u5e74\u7b2c23\u5468\u5468\u62a5",permalink:"/blog/2022/06/10/week-23-report"}},c={authorsImageUrls:[void 0]},u=[{value:"\ud83d\ude80 \u7248\u672c\u66f4\u65b0/\u8ba1\u5212",id:"-\u7248\u672c\u66f4\u65b0\u8ba1\u5212",level:2},{value:"\ud83d\udea9 v3.0.0.preview.14.0",id:"-v300preview140",level:2},{value:"\ud83d\udc49 #319 \u79fb\u9664 <code>Bot.friend(...)</code>",id:"-319-\u79fb\u9664-botfriend",level:3},{value:"\ud83d\udc49 #320 <code>Objectives</code> \u91cd\u547d\u540d\u4e3a <code>Objective</code>",id:"-320-objectives-\u91cd\u547d\u540d\u4e3a-objective",level:3},{value:"\ud83c\udf8f v3.0.0.preview.15.0",id:"-v300preview150",level:2},{value:"\u26d4\ufe0f \u79fb\u9664 <code>UserStatus</code>",id:"\ufe0f-\u79fb\u9664-userstatus",level:3},{value:"\u26d4\ufe0f \u79fb\u9664 <code>@Filter.or</code> \u548c <code>@Filter.and</code>",id:"\ufe0f-\u79fb\u9664-filteror-\u548c-filterand",level:3}],m={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"2022\u5e74\u7b2c24\u5468\u5468\u62a5\u55b5\u3002"),(0,a.kt)("h2",{id:"-\u7248\u672c\u66f4\u65b0\u8ba1\u5212"},"\ud83d\ude80 \u7248\u672c\u66f4\u65b0/\u8ba1\u5212"),(0,a.kt)("p",null,"\u672c\u5468\u4e2d\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u53d1\u5e03\u4e86\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.14.0"},"v3.0.0.preview.14.0")," \uff0c\n\u5e76\u9884\u8ba1\u5f88\u5feb\u4f1a\u518d\u53d1\u5e03 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"v3.0.0.preview.15.0")),"\u3002"),(0,a.kt)("p",null,"\u4e0d\u51fa\u610f\u5916\u7684\u8bdd\uff0c",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"v3.0.0.preview.15.0")),"\u5c06\u4f1a\u662f\u5012\u6570\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"preview")," \u7248\u672c\u4e86\u3002"),(0,a.kt)("h2",{id:"-v300preview140"},"\ud83d\udea9 v3.0.0.preview.14.0"),(0,a.kt)("p",null,"\u8fd9\u6b21\u7684\u66f4\u65b0\u4e5f\u662f\u4e00\u5982\u65e2\u5f80\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u26a0\ufe0f\u4e0d\u517c\u5bb9\u66f4\u65b0"),"\u3002\u5728\u8fd9\u6b21\u66f4\u65b0\u4e2d\uff0c\u6709\u4e00\u4e9b\u503c\u5f97\u6ce8\u610f\u7684\u5185\u5bb9\u3002"),(0,a.kt)("h3",{id:"-319-\u79fb\u9664-botfriend"},"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/simple-robot/simpler-robot/pull/319"},"#319")," \u79fb\u9664 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Bot.friend(...)")),(0,a.kt)("p",null,"\u79fb\u9664\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Bot")," \u4e2d\u9ed8\u8ba4\u5b9e\u73b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Bot.friends")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Bot.friend(...)")," api, \u53d6\u800c\u4ee3\u4e4b\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Bot.contacts()")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Bot.contact(...)"),"\u3002"),(0,a.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"  val bot: Bot = ...\n  \n// error-start\n- val friends: Item<Friend> = bot.friends\n- val friend: Friend = bot.friend(...)\n// error-end\n// success-start\n+ val contacts: Item<Contact> = bot.contacts\n+ val contact: Contact = bot.contact(...)\n// success-end\n"))),(0,a.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"  Bot bot = ...;\n  \n// error-start\n- Item<Friend> friends = bot.getFriends();\n- Friend friend = bot.getFriend(...);\n// error-end\n// success-start\n+ Item<Contact> contacts = bot.getContacts();\n+ Contact contact = bot.getContact(...);\n// success-end\n")))),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u8fd9\u5e76\u4e0d\u610f\u5473\u7740 ",(0,a.kt)("inlineCode",{parentName:"p"},"friends")," api\u5c31\u6b64\u6d88\u5931\u4e86\u3002\u4e0e",(0,a.kt)("strong",{parentName:"p"},'"\u597d\u53cb"'),"\u76f8\u5173\u7684api\u5b58\u5728\u4e8e\u5bb9\u5668\u63a5\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"FriendsContainer")," \u4e2d\uff0c\n\u5e76\u53ef\u4ee5\u7531\u7ec4\u4ef6\u8fdb\u884c\u989d\u5916\u5b9e\u73b0\u3002"),(0,a.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bot: Bot = ...\nif (bot is FriendsContainer) {\n    val friends: Item<Friend> = bot.friends\n    val friend: Friend = bot.friend(...)\n}\n"))),(0,a.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Bot bot = ...;\nif (bot instanceof FriendsContainer) {\n   FriendsContainer container = (FriendsContainer) bot;\n   Item<Friend> friends = container.getFriends();\n   Friend friend = container.getFriend(...);  \n}\n")))),(0,a.kt)("h3",{id:"-320-objectives-\u91cd\u547d\u540d\u4e3a-objective"},"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/simple-robot/simpler-robot/pull/320"},"#320")," ",(0,a.kt)("inlineCode",{parentName:"h3"},"Objectives")," \u91cd\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"h3"},"Objective")),(0,a.kt)("p",null,"\u5b57\u9762\u610f\u601d\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u66f4\u591a\u53d8\u66f4\u5185\u5bb9\u53ef\u4ee5\u524d\u5f80 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.14.0"},"v3.0.0.preview.14.0 release")," \u67e5\u770b\u3002"),(0,a.kt)("h2",{id:"-v300preview150"},"\ud83c\udf8f v3.0.0.preview.15.0"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"v3.0.0.preview.15.0"))," \u4e2d\uff0c\u4e5f\u6709\u4e00\u4e9b\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u66f4\u65b0\u5185\u5bb9\u3002"),(0,a.kt)("h3",{id:"\ufe0f-\u79fb\u9664-userstatus"},"\u26d4\ufe0f \u79fb\u9664 ",(0,a.kt)("inlineCode",{parentName:"h3"},"UserStatus")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.14.0"},"v3.0.0.preview.14.0")," \u4e2d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/pull/328"},"#328"),"\uff0c\n\u6211\u4eec\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"UserStatus")," \u6807\u8bb0\u8fc7\u65f6\u5e76\u51c6\u5907\u5220\u9664\u3002\u800c\u5728",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"v3.0.0.preview.15.0"))," \u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u5b8c\u6210\u5220\u9664\u5de5\u4f5c\u3002"),(0,a.kt)("h3",{id:"\ufe0f-\u79fb\u9664-filteror-\u548c-filterand"},"\u26d4\ufe0f \u79fb\u9664 ",(0,a.kt)("inlineCode",{parentName:"h3"},"@Filter.or")," \u548c ",(0,a.kt)("inlineCode",{parentName:"h3"},"@Filter.and")),(0,a.kt)("p",null,"\u6700\u7ec8\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"@Filter")," \u6ce8\u89e3\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"or")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," \u6700\u7ec8\u8fd8\u662f\u65e0\u6cd5\u6253\u7834\u89c4\u5219\u3002\u5b83\u4eec\u7834\u574f\u4e86\u6ce8\u89e3\u7684\u7ea6\u5b9a\uff0c\u800cKotlin\u5c06\u4f1a\u57281.9\u7248\u672c\u5c06\u8fd9\u79cd\u884c\u4e3a\u6807\u8bb0\u4e3a\u9519\u8bef\u3002\n\u56e0\u6b64\uff0c\u6211\u4eec\u51b3\u5b9a\u5220\u9664\u8fd9\u4e24\u4e2a\u53c2\u6570 \u2014\u2014\u2014\u2014 \u5b9e\u9645\u4e0a\uff0c\u8fd9\u4e24\u4e2a\u53c2\u6570\u4e5f\u7684\u786e\u6ca1\u6709\u975e\u5e38\u6709\u7528\u7684\u5e94\u7528\u573a\u666f\u3002\n\u76f8\u5173\u539f\u56e0\u53c2\u8003\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/spring-projects/spring-framework/issues/28012#issuecomment-1154964509"},(0,a.kt)("strong",{parentName:"a"},"Spring Framework#28012#issuecomment-1154964509"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtrack.jetbrains.com/issue/KT-47932"},(0,a.kt)("strong",{parentName:"a"},"KT-47932")))),(0,a.kt)("p",null,"\u66f4\u591a\u5185\u5bb9\u8fd8\u8bf7\u5173\u6ce8\u540e\u7eed\u7684\u8be6\u7ec6\u66f4\u65b0\u65e5\u5fd7\u3002"))}d.isMDXComponent=!0}}]);