"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[2289],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),l=a(7294),r=a(6010),i=a(2389),o=a(7392),d=a(7094),p=a(2466);const m="tabList__CuJ",u="tabItem_LNqP";function k(e){var t,a;const{lazy:i,block:k,defaultValue:N,values:s,groupId:b,className:c}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=s?s:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,o.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===N?N:null!=(t=null!=N?N:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:I,setTabGroupChoices:C}=(0,d.U)(),[y,T]=(0,l.useState)(v),j=[],{blockElementScrollPositionUntilNextRender:G}=(0,p.o5)();if(null!=b){const e=I[b];null!=e&&e!==y&&h.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=j.indexOf(t),n=h[a].value;n!==y&&(G(t),T(n),null!=b&&C(b,String(n)))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=j.indexOf(e.currentTarget)+1;a=null!=(n=j[t])?n:j[0];break}case"ArrowLeft":{var l;const t=j.indexOf(e.currentTarget)-1;a=null!=(l=j[t])?l:j[j.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":k},c)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>j.push(e),onKeyDown:Z,onFocus:x,onClick:x},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":y===t})}),null!=a?a:t)}))),i?(0,l.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function N(e){const t=(0,i.Z)();return l.createElement(k,(0,n.Z)({key:String(t)},e))}},1610:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);const l="label_Yf5u";function r(e){let{type:t,href:a,children:r}=e;t=t||"primary";const i=n.createElement("span",{className:l},n.createElement("span",{className:"badge badge--"+t},r));return null!=a&&a.length>0?n.createElement("a",{href:a},i):i}},9254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>d,metadata:()=>m,toc:()=>k});var n=a(7462),l=(a(7294),a(3905)),r=(a(1839),a(1610)),i=a(5488),o=a(5162);a(814);const d={title:"\u5bb9\u5668\u6982\u8ff0"},p=void 0,m={unversionedId:"defition/container-overview/index",id:"defition/container-overview/index",title:"\u5bb9\u5668\u6982\u8ff0",description:'\u5bb9\u5668 Container \u7c7b\u578b\u662f\u4e00\u4e2a\u57fa\u7840\u6027\u7684\u63a5\u53e3\uff0c\u7528\u4e8e\u4ee3\u8868\u4e3a\u67d0\u4e2a\u6216\u67d0\u7cfb\u5217\u5c5e\u6027\u7684"\u5bb9\u5668"\u3002',source:"@site/docs/defition/container-overview/index.md",sourceDirName:"defition/container-overview",slug:"/defition/container-overview/",permalink:"/docs/defition/container-overview/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/defition/container-overview/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1667589234,formattedLastUpdatedAt:"Nov 4, 2022",frontMatter:{title:"\u5bb9\u5668\u6982\u8ff0"},sidebar:"docs",previous:{title:"\u7ec4\u7ec7",permalink:"/docs/defition/base-objective/Organization"},next:{title:"\u4e8b\u4ef6\u6982\u8ff0",permalink:"/docs/defition/event-overview/"}},u={},k=[{value:"Container",id:"container",level:2},{value:"\u6807\u51c6\u5c5e\u6027\u5bb9\u5668",id:"\u6807\u51c6\u5c5e\u6027\u5bb9\u5668",level:2},{value:"IDContainer",id:"idcontainer",level:3},{value:"BotContainer",id:"botcontainer",level:3},{value:"ChannelInfoContainer",id:"channelinfocontainer",level:3},{value:"GuildInfoContainer",id:"guildinfocontainer",level:3},{value:"GroupInfoContainer",id:"groupinfocontainer",level:3},{value:"UserInfoContainer",id:"userinfocontainer",level:3},{value:"MemberInfoContainer",id:"memberinfocontainer",level:3},{value:"FriendInfoContainer",id:"friendinfocontainer",level:3},{value:"ResourceContainer",id:"resourcecontainer",level:3},{value:"BotSocialRelationsContainer",id:"botsocialrelationscontainer",level:2},{value:"FriendsContainer",id:"friendscontainer",level:3},{value:"GroupsContainer",id:"groupscontainer",level:3},{value:"GuildsContainer",id:"guildscontainer",level:3}],N={toc:k};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5bb9\u5668 ",(0,l.kt)("inlineCode",{parentName:"p"},"Container"),' \u7c7b\u578b\u662f\u4e00\u4e2a\u57fa\u7840\u6027\u7684\u63a5\u53e3\uff0c\u7528\u4e8e\u4ee3\u8868\u4e3a\u67d0\u4e2a\u6216\u67d0\u7cfb\u5217\u5c5e\u6027\u7684"\u5bb9\u5668"\u3002'),(0,l.kt)("h2",{id:"container"},"Container"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Container"))," \u63a5\u53e3\u5e94\u5f53\u662f\u6240\u6709\uff08\u6216\u8005\u8bf4\u5927\u90e8\u5206\uff09\u5bb9\u5668\u63a5\u53e3\u7684\u7236\u63a5\u53e3\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Container")," \u63a5\u53e3\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"public interface Container\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Container")," \u63a5\u53e3\u4e2d\u4e0d\u5b58\u5728\u4efb\u4f55\u7ea6\u675f\uff0c\u4ec5\u4ec5\u7528\u4f5c\u4e3a\u6807\u8bb0\u3002"),(0,l.kt)("h2",{id:"\u6807\u51c6\u5c5e\u6027\u5bb9\u5668"},"\u6807\u51c6\u5c5e\u6027\u5bb9\u5668"),(0,l.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u5bb9\u5668\u7c7b\u578b\u66f4\u591a\u7684\u662f\u5728\u5185\u90e8\u4f7f\u7528\u7684\u3002\u56e0\u6b64\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4f60\u4e0d\u9700\u8981\u5173\u5fc3\u5bb9\u5668\u7c7b\u578b\uff0c\u66f4\u6ca1\u6709\u5fc5\u8981\u53bb\u5b9e\u73b0\u5b83\u3002\nsimbot\u5728\u6838\u5fc3\u5e93\u4e2d\u63d0\u4f9b\u4e86\u90e8\u5206\u5185\u90e8\u5e38\u7528\u4e00\u4e9b\u5bb9\u5668\u7c7b\u578b\uff0c\u5e76\u7531\u90e8\u5206\u5185\u90e8\u7c7b\u578b\u5b9e\u73b0\uff08\u4f8b\u5982\u4e00\u4e9b\u4e8b\u4ef6\u6216\u8005\u5bf9\u8c61\uff09\u3002"),(0,l.kt)("p",null,"\u6b64\u7ae0\u8282\u4f1a\u7b80\u5355\u4ecb\u7ecd\u8fd9\u4e9b\u6807\u51c6\u5bb9\u5668\u7c7b\u578b(\u4e2d\u63d0\u4f9b\u7684\u5c5e\u6027)\uff0c\u4ec5\u505a\u4e86\u89e3\u5373\u53ef\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u6587\u6863\u5c55\u73b0"),(0,l.kt)("p",null,"\u5728\u4e0b\u6587\u4e2d\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230\u7c7b\u4f3c\u4e8e\u5982\u4e0b\u7684\u6587\u6863\u5c55\u73b0\u5f62\u5f0f\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("h3",{parentName:"blockquote",id:"foocontainer"},"FooContainer"),(0,l.kt)("table",{parentName:"blockquote"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bar")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Bar")),(0,l.kt)("td",{parentName:"tr",align:null},"property: bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"foo")," ",(0,l.kt)(r.Z,{mdxType:"Label"},"suspend")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Foo")),(0,l.kt)("td",{parentName:"tr",align:null},"suspend 'property': foo"))))),(0,l.kt)("p",null,"\u5728\u8fd9\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," \u5c5e\u6027\u4ee3\u8868\u4e3a\u4e00\u4e2a\u666e\u901a\u7684\u5c5e\u6027\uff0c\u5176\u83b7\u53d6\u65b9\u5f0f\u901a\u5e38\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bar: Bar = container.bar\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Bar bar = container.getBar();\n")))),(0,l.kt)("p",null,"\u4f46\u662f\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," \u5c5e\u6027\uff0c\u5b83\u6807\u8bb0\u4e86\u4e00\u4e2a ",(0,l.kt)(r.Z,{mdxType:"Label"},"suspend")," \uff0c\u56e0\u6b64\u5b83\u4ee3\u8868\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"\u53ef\u6302\u8d77\u7684")," ",(0,l.kt)("em",{parentName:"p"},"\u5c5e\u6027"),'\u3002\n\u5f53\u7136\uff0c\u8fd9\u53ef\u80fd\u4e0d\u662f\u4e25\u683c\u610f\u4e49\u4e0a\u7684"\u5c5e\u6027"\uff0c\u4f46\u8fd9\u65e0\u4f24\u5927\u96c5\u3002\u5bf9\u4e8e\u8fd9\u79cd\u5c5e\u6027\uff0c\u5b83\u7684\u83b7\u53d6\u65b9\u5f0f\u901a\u5e38\u5982\u4e0b\u6240\u793a\uff1a'),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val foo: Foo = container.foo() // suspend\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Foo foo = container.getFoo(); // blocking\n"))))),(0,l.kt)("h3",{id:"idcontainer"},"IDContainer"),(0,l.kt)("p",null,"\u4ee3\u8868\u53ef\u7528\u4e8e\u83b7\u53d6 ",(0,l.kt)("a",{parentName:"p",href:"../ID"},(0,l.kt)("strong",{parentName:"a"},"ID"))," \u7684\u5bb9\u5668\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../ID"},(0,l.kt)("strong",{parentName:"a"},"ID"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00\u6807\u8bc6")))),(0,l.kt)("h3",{id:"botcontainer"},"BotContainer"),(0,l.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"Bot")," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bot")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Bot")),(0,l.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00\u6807\u8bc6")))),(0,l.kt)("h3",{id:"channelinfocontainer"},"ChannelInfoContainer"),(0,l.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,l.kt)("a",{parentName:"p",href:"../base-objective/Info/#channelinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"ChannelInfo"))," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"channel")," ",(0,l.kt)(r.Z,{mdxType:"Label"},"suspend")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../base-objective/Info/#channelinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"ChannelInfo"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u9891\u9053\u4fe1\u606f")))),(0,l.kt)("h3",{id:"guildinfocontainer"},"GuildInfoContainer"),(0,l.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,l.kt)("a",{parentName:"p",href:"../base-objective/Info/#guildinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"GuildInfo"))," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"guild")," ",(0,l.kt)(r.Z,{mdxType:"Label"},"suspend")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../base-objective/Info/#guildinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"GuildInfo"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u9891\u9053\u670d\u52a1\u5668\u4fe1\u606f")))),(0,l.kt)("h3",{id:"groupinfocontainer"},"GroupInfoContainer"),(0,l.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,l.kt)("a",{parentName:"p",href:"../base-objective/Info/#groupinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"GroupInfo"))," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"group")," ",(0,l.kt)(r.Z,{mdxType:"Label"},"suspend")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../base-objective/Info/#groupinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"GroupInfo"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4fe1\u606f")))),(0,l.kt)("h3",{id:"userinfocontainer"},"UserInfoContainer"),(0,l.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,l.kt)("a",{parentName:"p",href:"../base-objective/Info/#userinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"UserInfo"))," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user")," ",(0,l.kt)(r.Z,{mdxType:"Label"},"suspend")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../base-objective/Info/#userinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"UserInfo"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u4fe1\u606f")))),(0,l.kt)("h3",{id:"memberinfocontainer"},"MemberInfoContainer"),(0,l.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,l.kt)("a",{parentName:"p",href:"../base-objective/Info/#memberinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"MemberInfo"))," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"member")," ",(0,l.kt)(r.Z,{mdxType:"Label"},"suspend")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../base-objective/Info/#memberinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"MemberInfo"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u7ec7\u6210\u5458\u4fe1\u606f")))),(0,l.kt)("h3",{id:"friendinfocontainer"},"FriendInfoContainer"),(0,l.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,l.kt)("a",{parentName:"p",href:"../base-objective/Info/#friendinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"FirendInfo"))," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"friend")," ",(0,l.kt)(r.Z,{mdxType:"Label"},"suspend")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../base-objective/Info/#friendinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"FirendInfo"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u4fe1\u606f")))),(0,l.kt)("h3",{id:"resourcecontainer"},"ResourceContainer"),(0,l.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"Resource")," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resource")," ",(0,l.kt)(r.Z,{mdxType:"Label"},"suspend")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Resource")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90")))),(0,l.kt)("h2",{id:"botsocialrelationscontainer"},"BotSocialRelationsContainer"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BotSocialRelationsContainer")," \u76f8\u6bd4\u8f83\u4e8e\u4e0a\u8ff0\u7684 ",(0,l.kt)("a",{parentName:"p",href:"#%E6%A0%87%E5%87%86%E5%B1%9E%E6%80%A7%E5%AE%B9%E5%99%A8"},"\u6807\u51c6\u5c5e\u6027\u5bb9\u5668")," \u6765\u8bb2\uff0c\u7a0d\u5fae\u6709\u4e9b\u7279\u6b8a\u3002\n\u6b64\u5bb9\u5668\u4ee3\u8868\u4e3a ",(0,l.kt)("em",{parentName:"p"},'"',(0,l.kt)("inlineCode",{parentName:"em"},"Bot"),'\u793e\u4ea4\u5173\u7cfb\u5bb9\u5668"')," \uff0c\u4e3b\u8981\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"Bot"),' \u8fdb\u884c\u5b9e\u73b0\uff0c\u5e76\u63d0\u4f9b\u90e8\u5206"\u793e\u4ea4\u4fe1\u606f"\u7684\u83b7\u53d6API\u3002\n\u56e0\u6b64\u6b64\u5bb9\u5668\u4e0b\u7684\u7c7b\u578b\u63d0\u4f9b\u7684\u5927\u591a\u662f ',(0,l.kt)("em",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"em"},"API"))," \u6027\u8d28\u7684\u5185\u5bb9\u3002"),(0,l.kt)("h3",{id:"friendscontainer"},"FriendsContainer"),(0,l.kt)("p",null,"\u83b7\u53d6\u4e0e\u5f53\u524dbot\u76f8\u5173\u7684 ",(0,l.kt)("a",{parentName:"p",href:"../base-objective/Objectives#friend"},(0,l.kt)("inlineCode",{parentName:"a"},"Friend"))," \u4fe1\u606f\u7684\u793e\u4ea4\u5bb9\u5668\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"friends")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Items<",(0,l.kt)("a",{parentName:"td",href:"../base-objective/Objectives#friend"},"Friend"),">")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u7684\u597d\u53cb\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"friend(ID)")," ",(0,l.kt)(r.Z,{mdxType:"Label"},"suspend")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{parentName:"td",href:"../base-objective/Objectives#friend"},"Friend"),"?")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u6307\u5b9aID\u7684\u597d\u53cb")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val friends: Items<Friend> = container.friends\n\nval id: ID = ...\nval friend: Friend = container.friend(id)\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getFriends()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Items<",(0,l.kt)("a",{parentName:"td",href:"../base-objective/Objectives#friend"},"Friend"),">")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u7684\u597d\u53cb\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getFriend(ID)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{parentName:"td",href:"../base-objective/Objectives#friend"},"Friend"),"?")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u6307\u5b9aID\u7684\u597d\u53cb")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Items<Friend> friends = container.getFriends();\n\nID id = ...;\nFriend friend = container.getFriend(id);\n")))),(0,l.kt)("h3",{id:"groupscontainer"},"GroupsContainer"),(0,l.kt)("p",null,"\u83b7\u53d6\u4e0e\u5f53\u524dbot\u76f8\u5173\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Group")," \u4fe1\u606f\u7684\u793e\u4ea4\u5bb9\u5668\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"groups")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Items<",(0,l.kt)("a",{parentName:"td",href:"../base-objective/Objectives#group"},"Group"),">")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u7684\u7fa4\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"group(ID)")," ",(0,l.kt)(r.Z,{mdxType:"Label"},"suspend")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{parentName:"td",href:"../base-objective/Objectives#group"},"Group"),"?")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u6307\u5b9aID\u7684\u7fa4")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val groups: Items<Group> = container.groups\n\nval id: ID = ...\nval group: Group = container.group(id)\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getGroups()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Items<",(0,l.kt)("a",{parentName:"td",href:"../base-objective/Objectives#group"},"Group"),">")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u7684\u7fa4\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getGroup(ID)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{parentName:"td",href:"../base-objective/Objectives#group"},"Group"),"?")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u6307\u5b9aID\u7684\u7fa4")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Items<Group> groups = container.getGroups();\n\nID id = ...;\nGroup group = container.getGroup(id);\n")))),(0,l.kt)("h3",{id:"guildscontainer"},"GuildsContainer"),(0,l.kt)("p",null,"\u83b7\u53d6\u4e0e\u5f53\u524dbot\u76f8\u5173\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Guild")," \u4fe1\u606f\u7684\u793e\u4ea4\u5bb9\u5668\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"guilds")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Items<",(0,l.kt)("a",{parentName:"td",href:"../base-objective/Objectives#guild"},"Guild"),">")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u7684\u9891\u9053\u670d\u52a1\u5668\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"guild(ID)")," ",(0,l.kt)(r.Z,{mdxType:"Label"},"suspend")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{parentName:"td",href:"../base-objective/Objectives#guild"},"Guild"),"?")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u6307\u5b9aID\u7684\u9891\u9053\u670d\u52a1\u5668")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val guilds: Items<Guild> = container.guilds\n\nval id: ID = ...\nval guild: Guild = container.guild(id)\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getGuilds()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Items<",(0,l.kt)("a",{parentName:"td",href:"../base-objective/Objectives#guild"},"Guild"),">")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u7684\u9891\u9053\u670d\u52a1\u5668\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getGuild(ID)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{parentName:"td",href:"../base-objective/Objectives#guild"},"Guild"),"?")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u6307\u5b9aID\u7684\u9891\u9053\u670d\u52a1\u5668")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Items<Guild> guilds = container.getGuilds(...);\n\nID id = ...;\nGuild guild = container.getGuild(id);\n")))))}s.isMDXComponent=!0}}]);