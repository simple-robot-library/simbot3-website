(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[4313],{5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},4866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var a=n(7462),r=n(7294),l=n(6010),i=n(6775),o=n(1980),u=n(7392),s=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,p]=m({queryString:n,groupId:a}),[v,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=u??v;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),k(e)}),[p,k,l]),tabValues:l}}var k=n(2466),b=n(2389);const g="tabList__CuJ",f="tabItem_LNqP";function N(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,k.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==i&&(p(t),o(a))},c=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:c,onClick:d},o,{className:(0,l.Z)("tabs__item",f,null==o?void 0:o.className,{"tabs__item--active":i===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},1610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(7294);const r="label_Yf5u";function l(e){let{type:t,href:n,children:l,title:i}=e;t=t||"primary",i=i||"";const o=a.createElement("span",{className:r,title:i},a.createElement("span",{className:`badge badge--${t}`},l));return null!=n&&n.length>0?a.createElement("a",{href:n},o):o}},149:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>v,frontMatter:()=>u,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=(n(8209),n(1610)),i=n(4866),o=n(5162);n(814);const u={title:"\u5bf9\u8c61\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},s=void 0,p={unversionedId:"definition/event-overview/standard-event/objective-event/index",id:"definition/event-overview/standard-event/objective-event/index",title:"\u5bf9\u8c61\u4e8b\u4ef6",description:"\u5bf9\u8c61\u4e8b\u4ef6\uff0c\u4e00\u4e9b\u4e0e Objectives \u76f8\u5173\u7684\u4e8b\u4ef6\u7c7b\u578b\uff0c\u662f\u6bd4\u8f83\u57fa\u7840\u7684\u4e8b\u4ef6\u7c7b\u578b\u3002",source:"@site/docs/definition/event-overview/standard-event/objective-event/index.md",sourceDirName:"definition/event-overview/standard-event/objective-event",slug:"/definition/event-overview/standard-event/objective-event/",permalink:"/docs/definition/event-overview/standard-event/objective-event/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/definition/event-overview/standard-event/objective-event/index.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1681209865,formattedLastUpdatedAt:"2023\u5e744\u670811\u65e5",frontMatter:{title:"\u5bf9\u8c61\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/"},next:{title:"\u6d88\u606f\u4e8b\u4ef6",permalink:"/docs/definition/event-overview/standard-event/message-event/"}},d={},c=[{value:"ObjectiveEvent",id:"objectiveevent",level:2},{value:"UserEvent",id:"userevent",level:2},{value:"MemberEvent",id:"memberevent",level:2},{value:"FriendEvent",id:"friendevent",level:2},{value:"OrganizationEvent",id:"organizationevent",level:2},{value:"GroupEvent",id:"groupevent",level:2},{value:"GuildEvent",id:"guildevent",level:2},{value:"ChannelEvent",id:"channelevent",level:2}],m={toc:c};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5bf9\u8c61\u4e8b\u4ef6\uff0c\u4e00\u4e9b\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"Objectives")," \u76f8\u5173\u7684\u4e8b\u4ef6\u7c7b\u578b\uff0c\u662f\u6bd4\u8f83\u57fa\u7840\u7684\u4e8b\u4ef6\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u6ca1\u6709\u5fc5\u8981\u4f7f\u7528\u8fd9\u4e9b\u4e8b\u4ef6\uff0c\u5b83\u4eec\u66f4\u591a\u7684\u4f5c\u7528\u662f\u4e3a\u5176\u4ed6\u4e8b\u4ef6\u63d0\u4f9b\u7528\u4e8e\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Objectives")," \u7684\u76f8\u5173api\u7684\u3002"),(0,r.kt)("h2",{id:"objectiveevent"},"ObjectiveEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"\u65e0")),(0,r.kt)("p",null,"\u662f\u6240\u6709\u5bf9\u8c61\u4e8b\u4ef6\u7684\u57fa\u7840\u7236\u7c7b\u578b\uff0c\u7528\u4e8e\u63d0\u4f9b\u7ed9\u5176\u4ed6\u76f8\u5173\u7684\u5bf9\u8c61\u4e8b\u4ef6\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ObjectiveEvent")," \u672a\u5b9e\u73b0\u4f34\u751f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.Key"),"\uff0c\u56e0\u6b64\u6b64\u4e8b\u4ef6\u7c7b\u578b ",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u5e94")," \u88ab\u7528\u4e8e\u76d1\u542c\u3002"),(0,r.kt)("h2",{id:"userevent"},"UserEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.user"),(0,r.kt)("a",{href:"#objectiveevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ObjectiveEvent")),(0,r.kt)("a",{href:"../../../container-overview/#userinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"UserInfoContainer"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237")," \u76f8\u5173\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"UserInfoContainer")," \u5e76\u63d0\u4f9b\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," \u7684\u83b7\u53d6\u3002"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val user = event.user()\n")),(0,r.kt)("p",null,"kotlin\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"UserEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," \u5c5e\u6027\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inUser { // this: User\n  // ...\n}\n\nevent.useUser { user: User -> \n  // ...\n}\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"User user = event.getUser();\n")))),(0,r.kt)("h2",{id:"memberevent"},"MemberEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.member"),(0,r.kt)("a",{href:"#userevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"UserEvent")),(0,r.kt)("a",{href:"../../../container-overview/#memberinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"MemberInfoContainer"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u6210\u5458")," \u6709\u5173\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"MemberInfoContainer")," \u5e76\u63d0\u4f9b\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"member")," \u7684\u83b7\u53d6\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"user")," \u7684\u503c\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"member")," \u7684\u503c\u4e00\u81f4\u3002"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val member: Member = event.member()\n")),(0,r.kt)("p",null,"kotlin\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"MemberEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"member")," \u5c5e\u6027\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inMember { // this: Member\n  // ...\n}\n\nevent.useUser { member: Member -> \n  // ...\n}\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Member member = event.getMember();\n")))),(0,r.kt)("h2",{id:"friendevent"},"FriendEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.friend"),(0,r.kt)("a",{href:"#userevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"UserEvent")),(0,r.kt)("a",{href:"../../../container-overview/#friendinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"FriendInfoContainer"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u597d\u53cb")," \u6709\u5173\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"FriendInfoContainer")," \u5e76\u63d0\u4f9b\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"friend")," \u7684\u83b7\u53d6\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"user")," \u7684\u503c\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"friend")," \u7684\u503c\u4e00\u81f4\u3002"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val friend: Friend = event.friend()\n")),(0,r.kt)("p",null,"kotlin\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"FriendEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"friend")," \u5c5e\u6027\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inFriend { // this: Friend\n  // ...\n}\n\nevent.useFriend { friend: Friend -> \n  // ...\n}\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Friend friend = event.getFriend();\n")))),(0,r.kt)("h2",{id:"organizationevent"},"OrganizationEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.organization"),(0,r.kt)("a",{href:"#objectiveevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ObjectiveEvent"))),(0,r.kt)("p",null,"\u4e00\u4e2a\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u7ec4\u7ec7")," \u76f8\u5173\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u63d0\u4f9b\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"organization")," \u7684\u83b7\u53d6\u3002"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val organization: Organization = event.organization()\n")),(0,r.kt)("p",null,"kotlin\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"OrganizationEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"organization")," \u5c5e\u6027\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inOrganization { // this: Organization\n  // ...\n}\n\nevent.useOrganization { organization: Organization -> \n  // ...\n}\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Organization organization = event.getOrganization();\n")))),(0,r.kt)("h2",{id:"groupevent"},"GroupEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.group"),(0,r.kt)("a",{href:"#organizationevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"OrganizationEvent")),(0,r.kt)("a",{href:"../../../container-overview/#groupinfocontainer"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"GroupInfoContainer"))),(0,r.kt)("p",null,"\u4e00\u4e2a\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u7fa4")," \u76f8\u5173\u7684\u4e8b\u4ef6\u3002\u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"GroupInfoContainer")," \u5e76\u63d0\u4f9b\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," \u7684\u83b7\u53d6\u3002\u901a\u5e38\u60c5\u51b5\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," \u7684\u503c\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"organization")," \u7684\u503c\u4e00\u81f4\u3002"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val group: Group = event.group()\n")),(0,r.kt)("p",null,"kotlin\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"GroupEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," \u5c5e\u6027\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inGroup { // this: Group\n  // ...\n}\n\nevent.useGroup { group: Group -> \n  // ...\n}\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Group group = event.getGroup();\n")))),(0,r.kt)("h2",{id:"guildevent"},"GuildEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.guild"),(0,r.kt)("a",{href:"#organizationevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"OrganizationEvent"))),(0,r.kt)("p",null,"\u4e00\u4e2a\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u9891\u9053\u670d\u52a1\u5668")," \u76f8\u5173\u7684\u4e8b\u4ef6\u3002\u63d0\u4f9b\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"guild")," \u7684\u83b7\u53d6\u3002\u901a\u5e38\u60c5\u51b5\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"guild")," \u7684\u503c\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"organization")," \u7684\u503c\u4e00\u81f4\u3002"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val guild: Guild = event.guild()\n")),(0,r.kt)("p",null,"kotlin\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"GuildEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"guild")," \u5c5e\u6027\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inGuild { // this: Guild\n  // ...\n}\n\nevent.useGuild { guild: Guild -> \n  // ...\n}\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Guild guild = event.getGuild();\n")))),(0,r.kt)("h2",{id:"channelevent"},"ChannelEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.channel"),(0,r.kt)("a",{href:"#organizationevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"OrganizationEvent"))),(0,r.kt)("p",null,"\u4e00\u4e2a\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u5b50\u9891\u9053")," \u76f8\u5173\u7684\u4e8b\u4ef6\u3002\u63d0\u4f9b\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," \u7684\u83b7\u53d6\u3002\u901a\u5e38\u60c5\u51b5\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," \u7684\u503c\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"organization")," \u7684\u503c\u4e00\u81f4\u3002"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val channel: Channel = event.channel()\n")),(0,r.kt)("p",null,"kotlin\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ChannelEvent")," \u63d0\u4f9b\u4e24\u4e2a\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," \u5c5e\u6027\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"in/use")," \u6269\u5c55\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"event.inChannel { // this: Channel\n  // ...\n}\n\nevent.useChannel { channel: Channel -> \n  // ...\n}\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Channel channel = event.getChannel();\n")))))}v.isMDXComponent=!0},1748:(e,t,n)=>{var a={"./locale":9234,"./locale.js":9234};function r(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id=1748},8209:(e,t,n)=>{"use strict";n.d(t,{G:()=>i});var a=n(7294),r=n(1304);const l="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return a.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const n=(0,a.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[o,u]=(0,a.useState)(!1),s=(0,a.useMemo)((()=>function(e,t){let n=e.getAttribute("data-theme")??l;n!==l&&"dark"!==n&&(n=l);const a=n===l?"default":"dark";return t?.theme?.[n]??t?.mermaid?.theme??a}(i,n)),[n,o]);return(0,a.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){u((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,a.useEffect)((()=>{n&&(n.mermaid?r.Z.initialize({startOnLoad:!0,...n.mermaid,theme:s}):r.Z.initialize({startOnLoad:!0,theme:s}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[n,s]),(0,a.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[e]),a.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);