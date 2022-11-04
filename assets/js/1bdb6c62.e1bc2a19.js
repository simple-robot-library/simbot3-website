"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[4885],{2991:(e,t,r)=>{r.d(t,{Z:()=>w});var o=r(7294),i=r(6010),n=r(3438),s=r(9960),a=r(3919),l=r(5999);const c="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return o.createElement(s.Z,{href:t,className:(0,i.Z)("card padding--lg",c)},r)}function u(e){let{href:t,icon:r,title:n,description:s}=e;return o.createElement(p,{href:t},o.createElement("h2",{className:(0,i.Z)("text--truncate",m),title:n},r," ",n),s&&o.createElement("p",{className:(0,i.Z)("text--truncate",d),title:s},s))}function v(e){let{item:t}=e;const r=(0,n.Wl)(t);return r?o.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t;let{item:r}=e;const i=(0,a.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,n.xz)(null!=(t=r.docId)?t:void 0);return o.createElement(u,{href:r.href,icon:i,title:r.label,description:null==s?void 0:s.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(g,{item:t});case"category":return o.createElement(v,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function f(e){let{className:t}=e;const r=(0,n.jA)();return o.createElement(w,{items:r.items,className:t})}function w(e){const{items:t,className:r}=e;if(!t)return o.createElement(f,e);const s=(0,n.MN)(t);return o.createElement("section",{className:(0,i.Z)("row",r)},s.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(b,{item:e})))))}},2856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=r(7462),i=(r(7294),r(3905)),n=(r(1839),r(2991)),s=r(3438);const a={title:"Spring Boot Starter"},l=void 0,c={unversionedId:"overviews/module-overview/spring-boot-starter/index",id:"overviews/module-overview/spring-boot-starter/index",title:"Spring Boot Starter",description:"spring-boot\u7684\u5feb\u901f\u542f\u52a8\u6a21\u5757\u3002Spring Boot Starter \u6a21\u5757\u80fd\u591f\u66f4\u52a0\u7b80\u4fbf\u53cb\u597d\u7684\u4e0e Spring Boot \u76f8\u4e92\u6574\u5408\u3002",source:"@site/docs/overviews/module-overview/spring-boot-starter/index.md",sourceDirName:"overviews/module-overview/spring-boot-starter",slug:"/overviews/module-overview/spring-boot-starter/",permalink:"/docs/overviews/module-overview/spring-boot-starter/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/overviews/module-overview/spring-boot-starter/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1667277196,formattedLastUpdatedAt:"Nov 1, 2022",frontMatter:{title:"Spring Boot Starter"},sidebar:"docs",previous:{title:"boot \u6838\u5fc3\u6a21\u5757",permalink:"/docs/overviews/module-overview/boot/boot-core"},next:{title:"\u7248\u672c\u8981\u6c42",permalink:"/docs/overviews/module-overview/spring-boot-starter/version-requirements"}},m={},d=[{value:"\u7248\u672c\u8981\u6c42",id:"\u7248\u672c\u8981\u6c42",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"spring-boot\u7684\u5feb\u901f\u542f\u52a8\u6a21\u5757\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u6a21\u5757\u80fd\u591f\u66f4\u52a0\u7b80\u4fbf\u53cb\u597d\u7684\u4e0e ",(0,i.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-boot"},"Spring Boot")," \u76f8\u4e92\u6574\u5408\u3002\n\u540c\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u6a21\u5757\u4e5f\u662f ",(0,i.kt)("a",{parentName:"p",href:"../boot"},"boot")," \u6a21\u5757\u7684\u53e6\u4e00\u79cd\u5b9e\u73b0\u3002"),(0,i.kt)("h2",{id:"\u7248\u672c\u8981\u6c42"},"\u7248\u672c\u8981\u6c42"),(0,i.kt)("p",null,"simbot3\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spring Boot"),", \u6216\u8005\u8bf4\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spring Framework")," \u6709\u6700\u4f4e\u8981\u6c42\uff0c\u5426\u5219\u4f60\u53ef\u80fd\u4f1a\u6709\u5f88\u5927\u6982\u7387\u65e0\u6cd5\u6b63\u5e38\u4f7f\u7528simbot\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter"),"\u3002"),(0,i.kt)("p",null,"\u8be6\u7ec6\u5185\u5bb9\u8bf7\u53c2\u8003\uff1a"),(0,i.kt)(n.Z,{items:(0,s.jA)().items.filter((e=>"module-overview/spring-boot-starter/version-requirements"==e.docId)),mdxType:"DocCardList"}),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"TODO")))}u.isMDXComponent=!0}}]);