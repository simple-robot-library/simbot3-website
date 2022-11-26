"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[7239],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),o=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),o=a(7294),r=a(6010),i=a(2389),s=a(7392),l=a(7094),c=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:i,defaultValue:m,values:p,groupId:v,className:b}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,s.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,l.U)(),[y,E]=(0,o.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:B}=(0,c.o5)();if(null!=v){const e=g[v];null!=e&&e!==y&&h.some((t=>t.value===e))&&E(e)}const F=e=>{const t=e.currentTarget,a=T.indexOf(t),n=h[a].value;n!==y&&(B(t),E(n),null!=v&&N(v,String(n)))},Z=e=>{var t;let a=null;switch(e.key){case"Enter":F(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},b)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>T.push(e),onKeyDown:Z,onClick:F},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,o.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function p(e){const t=(0,i.Z)();return o.createElement(m,(0,n.Z)({key:String(t)},e))}},6885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7462),o=(a(7294),a(3905)),r=(a(8209),a(5488)),i=a(5162);const s={title:"\u4f9d\u8d56\u6ce8\u5165"},l=void 0,c={unversionedId:"overviews/di-overview/index",id:"overviews/di-overview/index",title:"\u4f9d\u8d56\u6ce8\u5165",description:"simbot3 \u4f9d\u65e7\u4fdd\u7559\u7684\u4f9d\u8d56\u6ce8\u5165\u7684\u529f\u80fd\uff0c\u4f46\u662f\u76f8\u5bf9\u4e8e simbot2 \u800c\u8a00\u6709\u6240\u7b80\u5316\u3002",source:"@site/docs/overviews/di-overview/index.md",sourceDirName:"overviews/di-overview",slug:"/overviews/di-overview/",permalink:"/docs/overviews/di-overview/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/overviews/di-overview/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1669477508,formattedLastUpdatedAt:"Nov 26, 2022",frontMatter:{title:"\u4f9d\u8d56\u6ce8\u5165"},sidebar:"docs",previous:{title:"\u547d\u540d\u6982\u8ff0",permalink:"/docs/overviews/naming-overview/"},next:{title:"\u6807\u51c6\u5b9a\u4e49",permalink:"/docs/defition/"}},u={},d=[],m={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"simbot3 \u4f9d\u65e7\u4fdd\u7559\u7684\u4f9d\u8d56\u6ce8\u5165\u7684\u529f\u80fd\uff0c\u4f46\u662f\u76f8\u5bf9\u4e8e simbot2 \u800c\u8a00",(0,o.kt)("strong",{parentName:"p"},"\u6709\u6240\u7b80\u5316"),"\u3002\n\u5728 simbot3 \u4e2d\uff0c\u4f9d\u8d56\u6ce8\u5165\u6240\u4f7f\u7528\u7684\u652f\u6301\u5e93\u4e3a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/forte-projects/forte-DI"},"forte-DI"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"forte-DI")," \u4fdd\u7559\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"simbot2")," \u65f6\u671f\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Beans")," \u7b49\u6ce8\u89e3\u7684\u4f7f\u7528\u4e60\u60ef\uff0c\u4f46\u4e0d\u540c\u7684\u662f\u5176\u4e3b\u8981\u4ee5 ",(0,o.kt)("a",{parentName:"p",href:"https://www.jcp.org/en/jsr/detail?id=330"},"JSR 330"),"\n\u6807\u51c6\u4e3a\u4e3b\uff08\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"@Named")," \u4e3a\u4e3b\uff09\uff0c\u4e14\u4e0d\u518d\u63d0\u4f9b ",(0,o.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u6587\u4ef6\u6ce8\u5165")," \u529f\u80fd\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"simbot3\u4e2d\uff0c\u53ea\u6709 ",(0,o.kt)("a",{parentName:"p",href:"../module-overview/boot"},"boot\u6a21\u5757")," \u4f7f\u7528\u4e86\u4f9d\u8d56\u6ce8\u5165\u529f\u80fd\uff0c\u57fa\u7840\u7684 ",(0,o.kt)("a",{parentName:"p",href:"../module-overview/core"},"\u6838\u5fc3\u6a21\u5757")," \u5e76\u65e0\u4f9d\u8d56\u6ce8\u5165\u80fd\u529b\u3002")),(0,o.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="\u76f4\u63a5\u6ce8\u5165"',title:'"\u76f4\u63a5\u6ce8\u5165"'},"@Beans class Foo\n\n// auto-inject foo\n@Beans class Bar(val foo: Foo)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="\u5de5\u5382\u6ce8\u5165"',title:'"\u5de5\u5382\u6ce8\u5165"'},"@BeansFactory\nclass FooConfig {\n    @Beans\n    fun foo() = Foo()\n\n}\n\n@Beans class Bar(val foo: Foo)\n"))),(0,o.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="\u76f4\u63a5\u6ce8\u5165"',title:'"\u76f4\u63a5\u6ce8\u5165"'},"@Beans class Foo {}\n\n@Beans class Bar {\n    private final Foo foo;\n    \n    public Bar(Foo foo) {\n        this.foo = foo;\n    }   \n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="\u5de5\u5382\u6ce8\u5165"',title:'"\u5de5\u5382\u6ce8\u5165"'},"@BeansFactory\npublic class FooFactory {\n    @Beans\n    public Foo foo() {\n        return new Foo();\n    }\n}\n\n// Foo.java\npublic class Foo{}\n\n\n// Bar.java\n@Beans \npublic class Bar {\n    private final Foo foo;\n    \n    @Depend\n    private Foo foo2;\n    \n    public Bar(Foo foo) {\n        this.foo = foo;\n    }   \n}\n")))))}p.isMDXComponent=!0},8209:(e,t,a)=>{a.d(t,{G:()=>i});var n=a(7294),o=a(7273);const r="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[s,l]=(0,n.useState)(!1),c=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??r;a!==r&&"dark"!==a&&(a=r);const n=a===r?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(i,a)),[a,s]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){l((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?o.Z.initialize({startOnLoad:!0,...a.mermaid,theme:c}):o.Z.initialize({startOnLoad:!0,theme:c}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),o.Z.contentLoaded())}),[a,c]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(o.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);