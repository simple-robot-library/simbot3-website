(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[5679],{5162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},4866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),l=a(6010),i=a(6775),o=a(1980),d=a(7392),u=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function s(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function c(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[d,p]=s({queryString:a,groupId:n}),[c,N]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=d??c;return k({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),N(e)}),[p,N,l]),tabValues:l}}var N=a(2466),b=a(2389);const g="tabList__CuJ",f="tabItem_LNqP";function h(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,N.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==i&&(p(t),o(n))},k=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:k,onClick:m},o,{className:(0,l.Z)("tabs__item",f,null==o?void 0:o.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function I(e){const t=c(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(I,(0,n.Z)({key:String(t)},e))}},1610:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(7294);const r="label_Yf5u";function l(e){let{type:t,href:a,children:l,title:i}=e;t=t||"primary",i=i||"";const o=n.createElement("span",{className:r,title:i},n.createElement("span",{className:`badge badge--${t}`},l));return null!=a&&a.length>0?n.createElement("a",{href:a},o):o}},8838:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>c,frontMatter:()=>d,metadata:()=>p,toc:()=>k});var n=a(7462),r=(a(7294),a(3905)),l=(a(8209),a(1610)),i=a(4866),o=a(5162);a(814);const d={title:"\u5bb9\u5668\u6982\u8ff0"},u=void 0,p={unversionedId:"definition/container-overview/index",id:"definition/container-overview/index",title:"\u5bb9\u5668\u6982\u8ff0",description:'\u5bb9\u5668 Container \u7c7b\u578b\u662f\u4e00\u4e2a\u57fa\u7840\u6027\u7684\u63a5\u53e3\uff0c\u7528\u4e8e\u4ee3\u8868\u4e3a\u67d0\u4e2a\u6216\u67d0\u7cfb\u5217\u5c5e\u6027\u7684"\u5bb9\u5668"\u3002',source:"@site/docs/definition/container-overview/index.md",sourceDirName:"definition/container-overview",slug:"/definition/container-overview/",permalink:"/docs/definition/container-overview/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/definition/container-overview/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1676288775,formattedLastUpdatedAt:"2023\u5e742\u670813\u65e5",frontMatter:{title:"\u5bb9\u5668\u6982\u8ff0"},sidebar:"docs",previous:{title:"\u7ec4\u7ec7",permalink:"/docs/definition/base-objective/Organization"},next:{title:"\u4e8b\u4ef6\u6982\u8ff0",permalink:"/docs/definition/event-overview/"}},m={},k=[{value:"Container",id:"container",level:2},{value:"\u6807\u51c6\u5c5e\u6027\u5bb9\u5668",id:"\u6807\u51c6\u5c5e\u6027\u5bb9\u5668",level:2},{value:"IDContainer",id:"idcontainer",level:3},{value:"BotContainer",id:"botcontainer",level:3},{value:"ChannelInfoContainer",id:"channelinfocontainer",level:3},{value:"GuildInfoContainer",id:"guildinfocontainer",level:3},{value:"GroupInfoContainer",id:"groupinfocontainer",level:3},{value:"UserInfoContainer",id:"userinfocontainer",level:3},{value:"MemberInfoContainer",id:"memberinfocontainer",level:3},{value:"FriendInfoContainer",id:"friendinfocontainer",level:3},{value:"ResourceContainer",id:"resourcecontainer",level:3},{value:"BotSocialRelationsContainer",id:"botsocialrelationscontainer",level:2},{value:"FriendsContainer",id:"friendscontainer",level:3},{value:"GroupsContainer",id:"groupscontainer",level:3},{value:"GuildsContainer",id:"guildscontainer",level:3}],s={toc:k};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5bb9\u5668 ",(0,r.kt)("inlineCode",{parentName:"p"},"Container"),' \u7c7b\u578b\u662f\u4e00\u4e2a\u57fa\u7840\u6027\u7684\u63a5\u53e3\uff0c\u7528\u4e8e\u4ee3\u8868\u4e3a\u67d0\u4e2a\u6216\u67d0\u7cfb\u5217\u5c5e\u6027\u7684"\u5bb9\u5668"\u3002'),(0,r.kt)("h2",{id:"container"},"Container"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Container"))," \u63a5\u53e3\u5e94\u5f53\u662f\u6240\u6709\uff08\u6216\u8005\u8bf4\u5927\u90e8\u5206\uff09\u5bb9\u5668\u63a5\u53e3\u7684\u7236\u63a5\u53e3\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Container")," \u63a5\u53e3\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"public interface Container\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Container")," \u63a5\u53e3\u4e2d\u4e0d\u5b58\u5728\u4efb\u4f55\u7ea6\u675f\uff0c\u4ec5\u4ec5\u7528\u4f5c\u4e3a\u6807\u8bb0\u3002"),(0,r.kt)("h2",{id:"\u6807\u51c6\u5c5e\u6027\u5bb9\u5668"},"\u6807\u51c6\u5c5e\u6027\u5bb9\u5668"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u5bb9\u5668\u7c7b\u578b\u66f4\u591a\u7684\u662f\u5728\u5185\u90e8\u4f7f\u7528\u7684\u3002\u56e0\u6b64\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4f60\u4e0d\u9700\u8981\u5173\u5fc3\u5bb9\u5668\u7c7b\u578b\uff0c\u66f4\u6ca1\u6709\u5fc5\u8981\u53bb\u5b9e\u73b0\u5b83\u3002\nsimbot\u5728\u6838\u5fc3\u5e93\u4e2d\u63d0\u4f9b\u4e86\u90e8\u5206\u5185\u90e8\u5e38\u7528\u4e00\u4e9b\u5bb9\u5668\u7c7b\u578b\uff0c\u5e76\u7531\u90e8\u5206\u5185\u90e8\u7c7b\u578b\u5b9e\u73b0\uff08\u4f8b\u5982\u4e00\u4e9b\u4e8b\u4ef6\u6216\u8005\u5bf9\u8c61\uff09\u3002"),(0,r.kt)("p",null,"\u6b64\u7ae0\u8282\u4f1a\u7b80\u5355\u4ecb\u7ecd\u8fd9\u4e9b\u6807\u51c6\u5bb9\u5668\u7c7b\u578b(\u4e2d\u63d0\u4f9b\u7684\u5c5e\u6027)\uff0c\u4ec5\u505a\u4e86\u89e3\u5373\u53ef\u3002"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u6587\u6863\u5c55\u73b0"),(0,r.kt)("p",null,"\u5728\u4e0b\u6587\u4e2d\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230\u7c7b\u4f3c\u4e8e\u5982\u4e0b\u7684\u6587\u6863\u5c55\u73b0\u5f62\u5f0f\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"foocontainer"},"FooContainer"),(0,r.kt)("table",{parentName:"blockquote"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bar")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bar")),(0,r.kt)("td",{parentName:"tr",align:null},"property: bar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"foo")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Foo")),(0,r.kt)("td",{parentName:"tr",align:null},"suspend 'property': foo"))))),(0,r.kt)("p",null,"\u5728\u8fd9\u5176\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u5c5e\u6027\u4ee3\u8868\u4e3a\u4e00\u4e2a\u666e\u901a\u7684\u5c5e\u6027\uff0c\u5176\u83b7\u53d6\u65b9\u5f0f\u901a\u5e38\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bar: Bar = container.bar\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bar bar = container.getBar();\n")))),(0,r.kt)("p",null,"\u4f46\u662f\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u5c5e\u6027\uff0c\u5b83\u6807\u8bb0\u4e86\u4e00\u4e2a ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")," \uff0c\u56e0\u6b64\u5b83\u4ee3\u8868\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u6302\u8d77\u7684")," ",(0,r.kt)("em",{parentName:"p"},"\u5c5e\u6027"),'\u3002\n\u5f53\u7136\uff0c\u8fd9\u53ef\u80fd\u4e0d\u662f\u4e25\u683c\u610f\u4e49\u4e0a\u7684"\u5c5e\u6027"\uff0c\u4f46\u8fd9\u65e0\u4f24\u5927\u96c5\u3002\u5bf9\u4e8e\u8fd9\u79cd\u5c5e\u6027\uff0c\u5b83\u7684\u83b7\u53d6\u65b9\u5f0f\u901a\u5e38\u5982\u4e0b\u6240\u793a\uff1a'),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val foo: Foo = container.foo() // suspend\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Foo foo = container.getFoo(); // blocking\n"))))),(0,r.kt)("h3",{id:"idcontainer"},"IDContainer"),(0,r.kt)("p",null,"\u4ee3\u8868\u53ef\u7528\u4e8e\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"p",href:"../ID"},(0,r.kt)("strong",{parentName:"a"},"ID"))," \u7684\u5bb9\u5668\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../ID"},(0,r.kt)("strong",{parentName:"a"},"ID"))),(0,r.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00\u6807\u8bc6")))),(0,r.kt)("h3",{id:"botcontainer"},"BotContainer"),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot")," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bot")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bot")),(0,r.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00\u6807\u8bc6")))),(0,r.kt)("h3",{id:"channelinfocontainer"},"ChannelInfoContainer"),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"p",href:"../base-objective/Info/#channelinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"ChannelInfo"))," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"channel")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../base-objective/Info/#channelinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"ChannelInfo"))),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u9891\u9053\u4fe1\u606f")))),(0,r.kt)("h3",{id:"guildinfocontainer"},"GuildInfoContainer"),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"p",href:"../base-objective/Info/#guildinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"GuildInfo"))," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"guild")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../base-objective/Info/#guildinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"GuildInfo"))),(0,r.kt)("td",{parentName:"tr",align:null},"\u9891\u9053\u670d\u52a1\u5668\u4fe1\u606f")))),(0,r.kt)("h3",{id:"groupinfocontainer"},"GroupInfoContainer"),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"p",href:"../base-objective/Info/#groupinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"GroupInfo"))," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"group")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../base-objective/Info/#groupinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"GroupInfo"))),(0,r.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4fe1\u606f")))),(0,r.kt)("h3",{id:"userinfocontainer"},"UserInfoContainer"),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"p",href:"../base-objective/Info/#userinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"UserInfo"))," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../base-objective/Info/#userinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"UserInfo"))),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u4fe1\u606f")))),(0,r.kt)("h3",{id:"memberinfocontainer"},"MemberInfoContainer"),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"p",href:"../base-objective/Info/#memberinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"MemberInfo"))," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"member")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../base-objective/Info/#memberinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"MemberInfo"))),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ec4\u7ec7\u6210\u5458\u4fe1\u606f")))),(0,r.kt)("h3",{id:"friendinfocontainer"},"FriendInfoContainer"),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"p",href:"../base-objective/Info/#friendinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"FirendInfo"))," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"friend")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../base-objective/Info/#friendinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"FirendInfo"))),(0,r.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u4fe1\u606f")))),(0,r.kt)("h3",{id:"resourcecontainer"},"ResourceContainer"),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," \u5b9e\u4f8b\u7684\u5bb9\u5668\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resource")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Resource")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90")))),(0,r.kt)("h2",{id:"botsocialrelationscontainer"},"BotSocialRelationsContainer"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BotSocialRelationsContainer")," \u76f8\u6bd4\u8f83\u4e8e\u4e0a\u8ff0\u7684 ",(0,r.kt)("a",{parentName:"p",href:"#%E6%A0%87%E5%87%86%E5%B1%9E%E6%80%A7%E5%AE%B9%E5%99%A8"},"\u6807\u51c6\u5c5e\u6027\u5bb9\u5668")," \u6765\u8bb2\uff0c\u7a0d\u5fae\u6709\u4e9b\u7279\u6b8a\u3002\n\u6b64\u5bb9\u5668\u4ee3\u8868\u4e3a ",(0,r.kt)("em",{parentName:"p"},'"',(0,r.kt)("inlineCode",{parentName:"em"},"Bot"),'\u793e\u4ea4\u5173\u7cfb\u5bb9\u5668"')," \uff0c\u4e3b\u8981\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot"),' \u8fdb\u884c\u5b9e\u73b0\uff0c\u5e76\u63d0\u4f9b\u90e8\u5206"\u793e\u4ea4\u4fe1\u606f"\u7684\u83b7\u53d6API\u3002\n\u56e0\u6b64\u6b64\u5bb9\u5668\u4e0b\u7684\u7c7b\u578b\u63d0\u4f9b\u7684\u5927\u591a\u662f ',(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"API"))," \u6027\u8d28\u7684\u5185\u5bb9\u3002"),(0,r.kt)("h3",{id:"friendscontainer"},"FriendsContainer"),(0,r.kt)("p",null,"\u83b7\u53d6\u4e0e\u5f53\u524dbot\u76f8\u5173\u7684 ",(0,r.kt)("a",{parentName:"p",href:"../base-objective/Objectives#friend"},(0,r.kt)("inlineCode",{parentName:"a"},"Friend"))," \u4fe1\u606f\u7684\u793e\u4ea4\u5bb9\u5668\u3002"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"friends")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Items<",(0,r.kt)("a",{parentName:"td",href:"../base-objective/Objectives#friend"},"Friend"),">")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u7684\u597d\u53cb\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"friend(ID)")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"../base-objective/Objectives#friend"},"Friend"),"?")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u6307\u5b9aID\u7684\u597d\u53cb")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val friends: Items<Friend> = container.friends\n\nval id: ID = ...\nval friend: Friend = container.friend(id)\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getFriends()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Items<",(0,r.kt)("a",{parentName:"td",href:"../base-objective/Objectives#friend"},"Friend"),">")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u7684\u597d\u53cb\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getFriend(ID)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"../base-objective/Objectives#friend"},"Friend"),"?")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u6307\u5b9aID\u7684\u597d\u53cb")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Items<Friend> friends = container.getFriends();\n\nID id = ...;\nFriend friend = container.getFriend(id);\n")))),(0,r.kt)("h3",{id:"groupscontainer"},"GroupsContainer"),(0,r.kt)("p",null,"\u83b7\u53d6\u4e0e\u5f53\u524dbot\u76f8\u5173\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Group")," \u4fe1\u606f\u7684\u793e\u4ea4\u5bb9\u5668\u3002"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groups")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Items<",(0,r.kt)("a",{parentName:"td",href:"../base-objective/Objectives#group"},"Group"),">")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u7684\u7fa4\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"group(ID)")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"../base-objective/Objectives#group"},"Group"),"?")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u6307\u5b9aID\u7684\u7fa4")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val groups: Items<Group> = container.groups\n\nval id: ID = ...\nval group: Group = container.group(id)\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getGroups()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Items<",(0,r.kt)("a",{parentName:"td",href:"../base-objective/Objectives#group"},"Group"),">")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u7684\u7fa4\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getGroup(ID)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"../base-objective/Objectives#group"},"Group"),"?")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u6307\u5b9aID\u7684\u7fa4")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Items<Group> groups = container.getGroups();\n\nID id = ...;\nGroup group = container.getGroup(id);\n")))),(0,r.kt)("h3",{id:"guildscontainer"},"GuildsContainer"),(0,r.kt)("p",null,"\u83b7\u53d6\u4e0e\u5f53\u524dbot\u76f8\u5173\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Guild")," \u4fe1\u606f\u7684\u793e\u4ea4\u5bb9\u5668\u3002"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"guilds")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Items<",(0,r.kt)("a",{parentName:"td",href:"../base-objective/Objectives#guild"},"Guild"),">")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u7684\u9891\u9053\u670d\u52a1\u5668\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"guild(ID)")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"../base-objective/Objectives#guild"},"Guild"),"?")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u6307\u5b9aID\u7684\u9891\u9053\u670d\u52a1\u5668")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val guilds: Items<Guild> = container.guilds\n\nval id: ID = ...\nval guild: Guild = container.guild(id)\n"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getGuilds()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Items<",(0,r.kt)("a",{parentName:"td",href:"../base-objective/Objectives#guild"},"Guild"),">")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u7684\u9891\u9053\u670d\u52a1\u5668\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getGuild(ID)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"../base-objective/Objectives#guild"},"Guild"),"?")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6bot\u6307\u5b9aID\u7684\u9891\u9053\u670d\u52a1\u5668")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Items<Guild> guilds = container.getGuilds(...);\n\nID id = ...;\nGuild guild = container.getGuild(id);\n")))))}c.isMDXComponent=!0},1748:(e,t,a)=>{var n={"./locale":9234,"./locale.js":9234};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=1748},8209:(e,t,a)=>{"use strict";a.d(t,{G:()=>i});var n=a(7294),r=a(1304);const l="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[o,d]=(0,n.useState)(!1),u=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??l;a!==l&&"dark"!==a&&(a=l);const n=a===l?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(i,a)),[a,o]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){d((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?r.Z.initialize({startOnLoad:!0,...a.mermaid,theme:u}):r.Z.initialize({startOnLoad:!0,theme:u}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[a,u]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);