"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[1356],{5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),s=n(7392),i=n(7094),d=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function u(e){var t,n;const{lazy:o,block:u,defaultValue:v,values:m,groupId:b,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const E=null===v?v:null!=(t=null!=v?v:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==E&&!f.some((e=>e.value===E)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+E+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:y}=(0,i.U)(),[w,T]=(0,r.useState)(E),Z=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=b){const e=N[b];null!=e&&e!==w&&f.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=Z.indexOf(t),a=f[n].value;a!==w&&(C(t),T(a),null!=b&&y(b,String(a)))},_=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=Z.indexOf(e.currentTarget)+1;n=null!=(a=Z[t])?a:Z[0];break}case"ArrowLeft":{var r;const t=Z.indexOf(e.currentTarget)-1;n=null!=(r=Z[t])?r:Z[Z.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},h)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>Z.push(e),onKeyDown:_,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function v(e){const t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},1610:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="label_Yf5u";function l(e){let{type:t,href:n,children:l}=e;t=t||"primary";const o=a.createElement("span",{className:r},a.createElement("span",{className:"badge badge--"+t},l));return null!=n&&n.length>0?a.createElement("a",{href:n},o):o}},3606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(1610);n(5488),n(5162),n(814);const o={sidebar_position:10,title:"\u7aef\u70b9\u53d8\u66f4\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},s=void 0,i={unversionedId:"defition/event-overview/standard-event/change-event/point-changed-event",id:"defition/event-overview/standard-event/change-event/point-changed-event",title:"\u7aef\u70b9\u53d8\u66f4\u4e8b\u4ef6",description:"\u7aef\u70b9\u53d8\u66f4\u4e8b\u4ef6\u3002\u4ee3\u8868\u4e3a\u4e00\u4e2a\u5728\u53d8\u66f4\u72b6\u6001\u5904\u4e8e\u7aef\u70b9\u4f4d\u7f6e\u7684\u4e8b\u4ef6\u3002",source:"@site/docs/defition/event-overview/standard-event/change-event/point-changed-event.md",sourceDirName:"defition/event-overview/standard-event/change-event",slug:"/defition/event-overview/standard-event/change-event/point-changed-event",permalink:"/docs/defition/event-overview/standard-event/change-event/point-changed-event",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/defition/event-overview/standard-event/change-event/point-changed-event.md",tags:[{label:"\u6807\u51c6\u4e8b\u4ef6",permalink:"/docs/tags/\u6807\u51c6\u4e8b\u4ef6"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1665775945,formattedLastUpdatedAt:"Oct 14, 2022",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u7aef\u70b9\u53d8\u66f4\u4e8b\u4ef6",tags:["\u6807\u51c6\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u53d8\u66f4\u4e8b\u4ef6",permalink:"/docs/defition/event-overview/standard-event/change-event/"},next:{title:"\u5bf9\u8c61\u53d8\u66f4\u4e8b\u4ef6",permalink:"/docs/defition/event-overview/standard-event/change-event/objective-changed-event"}},d={},c=[{value:"StartPointEvent",id:"startpointevent",level:2},{value:"EndPointEvent",id:"endpointevent",level:2},{value:"IncreaseEvent",id:"increaseevent",level:2},{value:"DecreaseEvent",id:"decreaseevent",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7aef\u70b9\u53d8\u66f4\u4e8b\u4ef6\u3002\u4ee3\u8868\u4e3a\u4e00\u4e2a\u5728\u53d8\u66f4\u72b6\u6001\u5904\u4e8e\u7aef\u70b9\u4f4d\u7f6e\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u7aef\u70b9\u53d8\u66f4\u4e8b\u4ef6\u7684\u6982\u5ff5\u7c7b\u4f3c\u4e8e\u53d1\u751f\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"\u589e\u52a0")," \u6216 ",(0,r.kt)("strong",{parentName:"p"},"\u51cf\u5c11")," \u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("strong",{parentName:"p"},"\u589e\u52a0")," \u4ee3\u8868\u4e3a\u7aef\u70b9\u4e8b\u4ef6\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u8d77\u70b9"),"\uff0c\u800c",(0,r.kt)("strong",{parentName:"p"},"\u51cf\u5c11")," \u4ee3\u8868\u4e3a\u7aef\u70b9\u4e8b\u4ef6\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u7ec8\u70b9"),"\u3002"),(0,r.kt)("h2",{id:"startpointevent"},"StartPointEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.start_point"),(0,r.kt)("a",{href:"./#changedevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ChangedEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2a\u4f5c\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u8d77\u70b9")," \u7684 ",(0,r.kt)("a",{parentName:"p",href:"./#changedevent"},"\u53d8\u66f4\u4e8b\u4ef6")," \u3002 \u8d77\u70b9\u4e8b\u4ef6\u901a\u5e38\u4f5c\u4e3a\u5176\u4ed6\u4e8b\u4ef6\u7684\u7236\u7c7b\u578b\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u7528\u6765\u76f4\u63a5\u76d1\u542c\u3002"),(0,r.kt)("p",null,"\u5728\u8d77\u70b9\u4e2d\uff0c\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"before")," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5e94\u5f53\u59cb\u7ec8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u3002"),(0,r.kt)("h2",{id:"endpointevent"},"EndPointEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.end_point"),(0,r.kt)("a",{href:"./#changedevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"ChangedEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2a\u4f5c\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u7ec8\u70b9")," \u7684 ",(0,r.kt)("a",{parentName:"p",href:"./#changedevent"},"\u53d8\u66f4\u4e8b\u4ef6")," \u3002 \u7ec8\u70b9\u4e8b\u4ef6\u901a\u5e38\u4f5c\u4e3a\u5176\u4ed6\u4e8b\u4ef6\u7684\u7236\u7c7b\u578b\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u7528\u6765\u76f4\u63a5\u76d1\u542c\u3002"),(0,r.kt)("p",null,"\u5728\u7ec8\u70b9\u4e2d\uff0c\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"after")," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5e94\u5f53\u59cb\u7ec8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u3002"),(0,r.kt)("h2",{id:"increaseevent"},"IncreaseEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.increase"),(0,r.kt)("a",{href:"#startpointevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"StartPointEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u589e\u52a0/\u589e\u957f")," \u4e8b\u4ef6\u3002\u901a\u5e38\u7528\u4e8e\u63cf\u8ff0\u6b64\u4e8b\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," \u4e2d\u67d0\u4e8b\u7269\u88ab\u589e\u52a0\u4e86\u3002\u4f8b\u5982\u4e00\u4e2a\u7fa4\u5185\u589e\u52a0\u4e86\u4e00\u540d\u7fa4\u6210\u5458\u3002\u901a\u5e38\u4f5c\u4e3a\u5176\u4ed6\u4e8b\u4ef6\u7684\u7236\u7c7b\u578b\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u7528\u6765\u76f4\u63a5\u76d1\u542c\u3002"),(0,r.kt)("h2",{id:"decreaseevent"},"DecreaseEvent"),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{mdxType:"Label"},"api.decrease"),(0,r.kt)("a",{href:"#endpointevent"},(0,r.kt)(l.Z,{type:"success",mdxType:"Label"},"EndPointEvent"))),(0,r.kt)("p",null,"\u4ee3\u8868\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u51cf\u5c11")," \u4e8b\u4ef6\u3002\u901a\u5e38\u7528\u4e8e\u63cf\u8ff0\u6b64\u4e8b\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," \u4e2d\u67d0\u4e8b\u7269\u88ab\u51cf\u5c11\u4e86\u3002\u4f8b\u5982\u4e00\u4e2a\u7fa4\u5185\u51cf\u5c11\u4e86\u4e00\u540d\u7fa4\u6210\u5458\u3002\u901a\u5e38\u4f5c\u4e3a\u5176\u4ed6\u4e8b\u4ef6\u7684\u7236\u7c7b\u578b\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u7528\u6765\u76f4\u63a5\u76d1\u542c\u3002"))}u.isMDXComponent=!0}}]);