"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[161],{5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),l=t(6010);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(7462),l=t(7294),r=t(6010),i=t(2389),o=t(7392),p=t(7094),u=t(2466);const s="tabList__CuJ",d="tabItem_LNqP";function m(e){var n,t;const{lazy:i,block:m,defaultValue:v,values:k,groupId:c,className:b}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),h=(0,o.l)(N,((e,n)=>e.value===n.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===v?v:null!=(n=null!=v?v:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:C}=(0,p.U)(),[y,x]=(0,l.useState)(f),Z=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=c){const e=T[c];null!=e&&e!==y&&N.some((n=>n.value===e))&&x(e)}const I=e=>{const n=e.currentTarget,t=Z.indexOf(n),a=N[t].value;a!==y&&(E(n),x(a),null!=c&&C(c,String(a)))},w=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=Z.indexOf(e.currentTarget)+1;t=null!=(a=Z[n])?a:Z[0];break}case"ArrowLeft":{var l;const n=Z.indexOf(e.currentTarget)-1;t=null!=(l=Z[n])?l:Z[Z.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},b)},N.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,key:n,ref:e=>Z.push(e),onKeyDown:w,onFocus:I,onClick:I},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":y===n})}),null!=t?t:n)}))),i?(0,l.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==y})))))}function v(e){const n=(0,i.Z)();return l.createElement(m,(0,a.Z)({key:String(n)},e))}},1610:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294);const l="label_Yf5u";function r(e){let{type:n,href:t,children:r}=e;n=n||"primary";const i=a.createElement("span",{className:l},a.createElement("span",{className:"badge badge--"+n},r));return null!=t&&t.length>0?a.createElement("a",{href:t},i):i}},1541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var a=t(7462),l=(t(7294),t(3905)),r=t(1610),i=t(5488),o=t(5162);t(814);const p={title:"\u5bf9\u8c61\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},u=void 0,s={unversionedId:"defition/event-overview/standard-event/objective-event/index",id:"defition/event-overview/standard-event/objective-event/index",title:"\u5bf9\u8c61\u4e8b\u4ef6",description:"\u5bf9\u8c61\u4e8b\u4ef6\uff0c\u4e00\u4e9b\u4e0e Objectives \u76f8\u5173\u7684\u4e8b\u4ef6\u7c7b\u578b\uff0c\u662f\u6bd4\u8f83\u57fa\u7840\u7684\u4e8b\u4ef6\u7c7b\u578b\u3002",source:"@site/docs/defition/event-overview/standard-event/objective-event/index.md",sourceDirName:"defition/event-overview/standard-event/objective-event",slug:"/defition/event-overview/standard-event/objective-event/",permalink:"/docs/defition/event-overview/standard-event/objective-event/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/defition/event-overview/standard-event/objective-event/index.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",frontMatter:{title:"\u5bf9\u8c61\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"myAutogeneratedSidebar",previous:{title:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/defition/event-overview/standard-event/"},next:{title:"\u6d88\u606f\u4e8b\u4ef6",permalink:"/docs/defition/event-overview/standard-event/message-event/"}},d={},m=[{value:"ObjectiveEvent",id:"objectiveevent",level:2},{value:"UserEvent",id:"userevent",level:2},{value:"MemberEvent",id:"memberevent",level:2},{value:"FriendEvent",id:"friendevent",level:2},{value:"OrganizationEvent",id:"organizationevent",level:2},{value:"GroupEvent",id:"groupevent",level:2},{value:"GuildEvent",id:"guildevent",level:2},{value:"ChannelEvent",id:"channelevent",level:2}],v={toc:m};function k(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5bf9\u8c61\u4e8b\u4ef6\uff0c\u4e00\u4e9b\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"Objectives")," \u76f8\u5173\u7684\u4e8b\u4ef6\u7c7b\u578b\uff0c\u662f\u6bd4\u8f83\u57fa\u7840\u7684\u4e8b\u4ef6\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u6ca1\u6709\u5fc5\u8981\u4f7f\u7528\u8fd9\u4e9b\u4e8b\u4ef6\uff0c\u5b83\u4eec\u66f4\u591a\u7684\u4f5c\u7528\u662f\u4e3a\u5176\u4ed6\u4e8b\u4ef6\u63d0\u4f9b\u7528\u4e8e\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"Objectives")," \u7684\u76f8\u5173api\u7684\u3002"),(0,l.kt)("h2",{id:"objectiveevent"},"ObjectiveEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"\u65e0")),(0,l.kt)("p",null,"\u662f\u6240\u6709\u5bf9\u8c61\u4e8b\u4ef6\u7684\u57fa\u7840\u7236\u7c7b\u578b\uff0c\u7528\u4e8e\u63d0\u4f9b\u7ed9\u5176\u4ed6\u76f8\u5173\u7684\u5bf9\u8c61\u4e8b\u4ef6\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ObjectiveEvent")," \u672a\u5b9e\u73b0\u4f34\u751f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Event.Key"),"\uff0c\u56e0\u6b64\u6b64\u4e8b\u4ef6\u7c7b\u578b ",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u5e94")," \u88ab\u7528\u4e8e\u76d1\u542c\u3002"),(0,l.kt)("h2",{id:"userevent"},"UserEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"api.user"),(0,l.kt)("a",{href:"#objectiveevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"ObjectiveEvent")),(0,l.kt)("a",{href:"../../../container-overview/#userinfocontainer"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"UserInfoContainer"))),(0,l.kt)("p",null,"\u4ee3\u8868\u4e0e ",(0,l.kt)("strong",{parentName:"p"},"\u7528\u6237")," \u76f8\u5173\u7684\u4e8b\u4ef6\u3002"),(0,l.kt)("p",null,"\u7ee7\u627f ",(0,l.kt)("inlineCode",{parentName:"p"},"UserInfoContainer")," \u5e76\u63d0\u4f9b\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"user")," \u7684\u83b7\u53d6\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val user = event.user()\n")),(0,l.kt)("p",null,"kotlin\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"UserEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"user")," \u5c5e\u6027\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inUser { // this: User\n  // ...\n}\n\nevent.useUser { user: User -> \n  // ...\n}\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"User user = event.getUser();\n")))),(0,l.kt)("h2",{id:"memberevent"},"MemberEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"api.member"),(0,l.kt)("a",{href:"#userevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"UserEvent")),(0,l.kt)("a",{href:"../../../container-overview/#memberinfocontainer"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"MemberInfoContainer"))),(0,l.kt)("p",null,"\u4ee3\u8868\u4e0e ",(0,l.kt)("strong",{parentName:"p"},"\u6210\u5458")," \u6709\u5173\u7684\u4e8b\u4ef6\u3002"),(0,l.kt)("p",null,"\u7ee7\u627f ",(0,l.kt)("inlineCode",{parentName:"p"},"MemberInfoContainer")," \u5e76\u63d0\u4f9b\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"member")," \u7684\u83b7\u53d6\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"user")," \u7684\u503c\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"member")," \u7684\u503c\u4e00\u81f4\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val member: Member = event.member()\n")),(0,l.kt)("p",null,"kotlin\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"MemberEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"member")," \u5c5e\u6027\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inMember { // this: Member\n  // ...\n}\n\nevent.useUser { member: Member -> \n  // ...\n}\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Member member = event.getMember();\n")))),(0,l.kt)("h2",{id:"friendevent"},"FriendEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"api.friend"),(0,l.kt)("a",{href:"#userevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"UserEvent")),(0,l.kt)("a",{href:"../../../container-overview/#friendinfocontainer"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"FriendInfoContainer"))),(0,l.kt)("p",null,"\u4ee3\u8868\u4e0e ",(0,l.kt)("strong",{parentName:"p"},"\u597d\u53cb")," \u6709\u5173\u7684\u4e8b\u4ef6\u3002"),(0,l.kt)("p",null,"\u7ee7\u627f ",(0,l.kt)("inlineCode",{parentName:"p"},"FriendInfoContainer")," \u5e76\u63d0\u4f9b\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"friend")," \u7684\u83b7\u53d6\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"user")," \u7684\u503c\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"friend")," \u7684\u503c\u4e00\u81f4\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val friend: Friend = event.friend()\n")),(0,l.kt)("p",null,"kotlin\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"FriendEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"friend")," \u5c5e\u6027\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inFriend { // this: Friend\n  // ...\n}\n\nevent.useFriend { friend: Friend -> \n  // ...\n}\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Friend friend = event.getFriend();\n")))),(0,l.kt)("h2",{id:"organizationevent"},"OrganizationEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"api.organization"),(0,l.kt)("a",{href:"#objectiveevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"ObjectiveEvent"))),(0,l.kt)("p",null,"\u4e00\u4e2a\u4e0e ",(0,l.kt)("strong",{parentName:"p"},"\u7ec4\u7ec7")," \u76f8\u5173\u7684\u4e8b\u4ef6\u3002"),(0,l.kt)("p",null,"\u63d0\u4f9b\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"organization")," \u7684\u83b7\u53d6\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val organization: Organization = event.organization()\n")),(0,l.kt)("p",null,"kotlin\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"OrganizationEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"organization")," \u5c5e\u6027\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inOrganization { // this: Organization\n  // ...\n}\n\nevent.useOrganization { organization: Organization -> \n  // ...\n}\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Organization organization = event.getOrganization();\n")))),(0,l.kt)("h2",{id:"groupevent"},"GroupEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"api.group"),(0,l.kt)("a",{href:"#organizationevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"OrganizationEvent")),(0,l.kt)("a",{href:"../../../container-overview/#groupinfocontainer"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"GroupInfoContainer"))),(0,l.kt)("p",null,"\u4e00\u4e2a\u4e0e ",(0,l.kt)("strong",{parentName:"p"},"\u7fa4")," \u76f8\u5173\u7684\u4e8b\u4ef6\u3002\u7ee7\u627f ",(0,l.kt)("inlineCode",{parentName:"p"},"GroupInfoContainer")," \u5e76\u63d0\u4f9b\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"group")," \u7684\u83b7\u53d6\u3002\u901a\u5e38\u60c5\u51b5\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"group")," \u7684\u503c\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"organization")," \u7684\u503c\u4e00\u81f4\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val group: Group = event.group()\n")),(0,l.kt)("p",null,"kotlin\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"GroupEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"group")," \u5c5e\u6027\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inGroup { // this: Group\n  // ...\n}\n\nevent.useGroup { group: Group -> \n  // ...\n}\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Group group = event.getGroup();\n")))),(0,l.kt)("h2",{id:"guildevent"},"GuildEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"api.guild"),(0,l.kt)("a",{href:"#organizationevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"OrganizationEvent"))),(0,l.kt)("p",null,"\u4e00\u4e2a\u4e0e ",(0,l.kt)("strong",{parentName:"p"},"\u9891\u9053\u670d\u52a1\u5668")," \u76f8\u5173\u7684\u4e8b\u4ef6\u3002\u63d0\u4f9b\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"guild")," \u7684\u83b7\u53d6\u3002\u901a\u5e38\u60c5\u51b5\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"guild")," \u7684\u503c\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"organization")," \u7684\u503c\u4e00\u81f4\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val guild: Guild = event.guild()\n")),(0,l.kt)("p",null,"kotlin\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"GuildEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"guild")," \u5c5e\u6027\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inGuild { // this: Guild\n  // ...\n}\n\nevent.useGuild { guild: Guild -> \n  // ...\n}\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Guild guild = event.getGuild();\n")))),(0,l.kt)("h2",{id:"channelevent"},"ChannelEvent"),(0,l.kt)("blockquote",null,(0,l.kt)(r.Z,{mdxType:"Label"},"api.channel"),(0,l.kt)("a",{href:"#organizationevent"},(0,l.kt)(r.Z,{type:"success",mdxType:"Label"},"OrganizationEvent"))),(0,l.kt)("p",null,"\u4e00\u4e2a\u4e0e ",(0,l.kt)("strong",{parentName:"p"},"\u5b50\u9891\u9053")," \u76f8\u5173\u7684\u4e8b\u4ef6\u3002\u63d0\u4f9b\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"channel")," \u7684\u83b7\u53d6\u3002\u901a\u5e38\u60c5\u51b5\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"channel")," \u7684\u503c\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"organization")," \u7684\u503c\u4e00\u81f4\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val channel: Channel = event.channel()\n")),(0,l.kt)("p",null,"kotlin\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"channel")," \u5c5e\u6027\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inChannel { // this: Channel\n  // ...\n}\n\nevent.useChannel { channel: Channel -> \n  // ...\n}\n"))),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Channel channel = event.getChannel();\n")))))}k.isMDXComponent=!0}}]);