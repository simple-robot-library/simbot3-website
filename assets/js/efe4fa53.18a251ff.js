"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3443],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),p=a(7094),s=a(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:c,groupId:k,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,i.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:C}=(0,p.U)(),[y,w]=(0,r.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,s.o5)();if(null!=k){const e=f[k];null!=e&&e!==y&&g.some((t=>t.value===e))&&w(e)}const Z=e=>{const t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==y&&(I(t),w(n),null!=k&&C(k,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:Z},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function c(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);a(814);const i={authors:"forliy",title:"2022\u5e74\u7b2c23\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},p=void 0,s={permalink:"/blog/2022/06/10/week-23-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022/06-10-week-23-report/index.md",source:"@site/blog/2022/06-10-week-23-report/index.md",title:"2022\u5e74\u7b2c23\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c23\u5468\u5468\u62a5\u55b5\u3002",date:"2022-06-10T00:00:00.000Z",formattedDate:"June 10, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:3.705,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c23\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c24\u5468\u5468\u62a5",permalink:"/blog/2022/06/17/week-24-report"},nextItem:{title:"2022\u5e74\u7b2c22\u5468\u5468\u62a5",permalink:"/blog/2022/06/02/week-22-report"}},u={authorsImageUrls:[void 0]},m=[{value:"\ud83d\ude80 \u7248\u672c\u66f4\u65b0/\u8ba1\u5212",id:"-\u7248\u672c\u66f4\u65b0\u8ba1\u5212",level:2},{value:"\ud83c\udf93 Bot\u5b9e\u73b0\u53d8\u66f4",id:"-bot\u5b9e\u73b0\u53d8\u66f4",level:3},{value:"\ud83d\udd8b \u91cd\u547d\u540d",id:"-\u91cd\u547d\u540d",level:3},{value:"\u26d4\ufe0f \u5f03\u7528 sendIfSupportBlocking",id:"\ufe0f-\u5f03\u7528-sendifsupportblocking",level:3},{value:"\ud83e\udee3 \u66f4\u591a\u7684\u4e0d\u517c\u5bb9\u66f4\u65b0\uff1f",id:"-\u66f4\u591a\u7684\u4e0d\u517c\u5bb9\u66f4\u65b0",level:2},{value:"\ud83d\udcd6 \u6587\u6863\u66f4\u65b0",id:"-\u6587\u6863\u66f4\u65b0",level:2},{value:"\ud83e\udd14 \u56e2\u961f\u6210\u5458\u7684\u672a\u6765\u95ee\u9898",id:"-\u56e2\u961f\u6210\u5458\u7684\u672a\u6765\u95ee\u9898",level:2}],d={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"2022\u5e74\u7b2c23\u5468\u5468\u62a5\u55b5\u3002"),(0,r.kt)("h2",{id:"-\u7248\u672c\u66f4\u65b0\u8ba1\u5212"},"\ud83d\ude80 \u7248\u672c\u66f4\u65b0/\u8ba1\u5212"),(0,r.kt)("p",null,"\u672c\u5468\u4e2d\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot"},"\u6838\u5fc3\u5e93")," \u53d1\u5e03\u4e86\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.13.0"},"v3.0.0.preview.13.0")," \uff0c\n\u4e3b\u8981\u7528\u4e8e\u66f4\u65b0\u4f18\u5316\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/releases/tag/v3.0.0.preview.12.0"},"v3.0.0.preview.12.0"),"\n\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," API\u3002"),(0,r.kt)("p",null,"\u800c\u5728\u540e\u7eed\u8ba1\u5212\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.14.0")," \u4e2d\uff0c\u5c06\u4f1a\u6709\u5982\u4e0b\u7684\u53d8\u66f4\u8ba1\u5212\uff1a"),(0,r.kt)("h3",{id:"-bot\u5b9e\u73b0\u53d8\u66f4"},"\ud83c\udf93 Bot\u5b9e\u73b0\u53d8\u66f4"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/pull/280"},"#280")," \u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Bot")," \u7684\u7ed3\u6784\u88ab\u8fdb\u884c\u4e86\u4e00\u6b21\u8c03\u6574\uff0c\n\u5c06\u539f\u6765\u4e00\u90e8\u5206\u7684api\u62c6\u5206\u4e3a\u4e86 ",(0,r.kt)("em",{parentName:"p"},"\u793e\u4ea4\u5173\u7cfb\u5bb9\u5668")," \u63a5\u53e3\u7c7b\u578b\u5e76\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot")," \u8fdb\u884c\u9ed8\u8ba4\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u800c\u5728\u4e4b\u540e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.14.0")," \u4e2d\uff0c\u5c06\u4e0d\u518d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot")," \u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"FriendsContainer"),"\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u5219\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"ContactsContainer")," \u7684\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u6b64\u7248\u672c\u4e4b\u540e\uff0c\u5982\u4e0bapi\u5c06\u4e0d\u518d\u9ed8\u8ba4\u5b58\u5728\uff1a"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"FriendsContainer")," \u4ecd\u7136\u53ef\u80fd\u7531\u7ec4\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot")," \u5b9e\u73b0\u3002\u53ea\u4e0d\u8fc7\u4e0d\u518d\u88ab ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot")," \u63a5\u53e3",(0,r.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u5b9e\u73b0"),"\u3002")),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// error-start\n- val friends: Items<Friend> = bot.friends\n- val friend: Friend? = bot.friend(id)\n// error-end\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// error-start\n- Items<Friend> friends = bot.getFriedns()\n- Friend friend = bot.getFriend(id)\n// error-end\n")))),(0,r.kt)("p",null,"\u5e76\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot")," \u4e2d\u589e\u52a0\u4e86\u5982\u4e0b\u7684\u9ed8\u8ba4api\u5b9e\u73b0\uff1a"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// success-start\n+ val contacts: Items<Contact> = bot.contacts\n+ val Contact: Contact? = bot.contact(id)\n// success-end\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// success-start\n+ Items<Contact> contacts = bot.getContacts()\n+ Contact contact = bot.getContact(id)\n// success-end\n")))),(0,r.kt)("admonition",{title:"\u4e0d\u517c\u5bb9",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6bd5\u7adf\u8c03\u6574\u4e86\u7ee7\u627f\u5173\u7cfb\uff0c\u8fd9\u662f\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0f\u4e0d\u517c\u5bb9\u66f4\u65b0"),"\u3002")),(0,r.kt)("h3",{id:"-\u91cd\u547d\u540d"},"\ud83d\udd8b \u91cd\u547d\u540d"),(0,r.kt)("p",null,"\u5bf9api\u6a21\u5757\u4e0b\u7684\u57fa\u7840\u7c7b\u578b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Objectives"))," \u8fdb\u884c\u91cd\u547d\u540d\uff0c\u91cd\u547d\u540d\u4e3a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Objective")),"\u3002"),(0,r.kt)("admonition",{title:"\u4e0d\u517c\u5bb9",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u901a\u5e38\u6765\u8bb2 ",(0,r.kt)("inlineCode",{parentName:"p"},"Objectives")," \u4e0d\u4f1a\u7ecf\u5e38\u88ab\u76f4\u63a5\u4f7f\u7528\uff0c\u4e0d\u8fc7\u8fd9\u4f9d\u65e7\u662f\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0f\u4e0d\u517c\u5bb9\u66f4\u65b0"),"\u3002")),(0,r.kt)("h3",{id:"\ufe0f-\u5f03\u7528-sendifsupportblocking"},"\u26d4\ufe0f \u5f03\u7528 sendIfSupportBlocking"),(0,r.kt)("p",null,"\u5f03\u7528API\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Objective.sendIfSupportBlocking"),"\u3002\u8fd9\u672c\u8eab\u662f\u9488\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"Java")," \u7b49\u4f7f\u7528\u8005\u4f7f\u7528\u7684\u963b\u585e\u5f0fAPI\uff0c\n\u5b9a\u4e49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"Objectve")," \u63a5\u53e3\u5185\u3002\u4f46\u662f\u76ee\u524d\u6765\u770b\uff0c\u6b64\u63a5\u53e3\u5b58\u5728\u7684\u610f\u4e49\u5df2\u7ecf\u4e0d\u5927\uff0c\u5927\u90e8\u5206\u573a\u666f\u4e0b\u90fd\u80fd\u76f4\u63a5\u5224\u65ad\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"SendSupport")," \u7684\u5b58\u5728\u3002 "),(0,r.kt)("h2",{id:"-\u66f4\u591a\u7684\u4e0d\u517c\u5bb9\u66f4\u65b0"},"\ud83e\udee3 \u66f4\u591a\u7684\u4e0d\u517c\u5bb9\u66f4\u65b0\uff1f"),(0,r.kt)("p",null,"\u6b63\u5982\u6700\u8fd1\u7684\u66f4\u65b0\u5185\u5bb9\u6240\u8868\u73b0\u51fa\u6765\u7684\u4e00\u6837\uff0c\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.10.x")," \u91cd\u6784\u4ee5\u6765\uff0c\u540e\u7eed\u7684\u51e0\u4e2a\u7248\u672c\u66f4\u65b0\u90fd\u5b58\u5728\u4e86\u5927\u91cf\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u517c\u5bb9\u66f4\u65b0"),"\u3002\n\u8fd9\u5b9e\u9645\u4e0a\u4f1a\u6781\u5927\u7684\u5f71\u54cd\u4f7f\u7528\u4f53\u9a8c\uff0c\u90a3\u4e48\u8fd9\u79cd\u66f4\u65b0\u8fd8\u4f1a\u6709\u5f88\u591a\u5417\uff1f\u8fd8\u8981\u6301\u7eed\u591a\u4e45\uff1f"),(0,r.kt)("p",null,"\u4ee5\u76ee\u524d\u56e2\u961f\u5f00\u53d1\u60c5\u51b5\u6765\u770b\uff0c\u4e5f\u8bb8\u4e0d\u4f1a\u518d\u6301\u7eed\u5f88\u4e45\u4e86\u3002\u8fd9\u4e9b\u5927\u91cf\u7684\u4e0d\u517c\u5bb9\u66f4\u65b0\u90fd\u662f\u4e3a\u4e86\u5c3d\u53ef\u80fd\u51cf\u5c11\u8fd9\u79cd\u95ee\u9898\u53d1\u751f\u5728beta\u751a\u81f3\u6b63\u5f0f\u7248\u4e2d\u3002\n\u9884\u89c8\u7248\u672c\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"preview"),"\uff09\u5df2\u7ecf\u8fed\u4ee3\u8fd1\u534a\u5e74\u7684\u65f6\u95f4\u4e86\uff0c\u6211\u4eec\u5bf9\u4e8e\u7a33\u5b9aapi\u5e76\u8fdb\u5165beta\u9636\u6bb5\u8fd9\u4ef6\u4e8b\u4e0a\u4e5f\u662f\u975e\u5e38\u7684\u6025\u8feb\u3002\u6bd5\u7adf\u793e\u533a\u53c2\u4e0e\u5ea6",(0,r.kt)("del",{parentName:"p"},"\u51e0\u4e4e"),"\u4e3a0\uff0c\n\u8fd9\u5bf9\u6211\u4eec\u8fd9\u79cd\u4f4e\u4ea7\u80fd\u7684\u56e2\u961f\u6765\u8bb2\u5f88\u662f\u56f0\u96be\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u76ee\u524d\u53d1\u73b0\u7684\u5927\u90e8\u5206\u95ee\u9898\u90fd\u5df2\u7ecf\u88ab\u91cd\u6784\u6216\u4fee\u6b63\uff0c\u5176\u4ed6\u90e8\u5206\u5185\u5bb9\u6211\u4eec\u4e5f\u5728\u659f\u914c\u5f53\u4e2d\u3002\u4e5f\u8bb8\u8ddd\u79bbapi\u7684\u7a33\u5b9a\u4e5f\u5feb\u4e86\u5427\u3002"),(0,r.kt)("h2",{id:"-\u6587\u6863\u66f4\u65b0"},"\ud83d\udcd6 \u6587\u6863\u66f4\u65b0"),(0,r.kt)("p",null,"\u4e00\u5982\u65e2\u5f80\u7684\uff0c\u6587\u6863\u4ecd\u5728\u7f13\u6162\u7684\u9010\u6b65\u66f4\u65b0\u5f53\u4e2d\u3002"),(0,r.kt)("h2",{id:"-\u56e2\u961f\u6210\u5458\u7684\u672a\u6765\u95ee\u9898"},"\ud83e\udd14 \u56e2\u961f\u6210\u5458\u7684\u672a\u6765\u95ee\u9898"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\u5185\u5bb9\u5df2\u88ab\u9690\u85cf\u3002"))))}c.isMDXComponent=!0}}]);