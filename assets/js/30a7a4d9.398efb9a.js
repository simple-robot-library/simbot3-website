"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[6002],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),l=a(7294),r=a(6010),i=a(2389),o=a(7392),u=a(7094),d=a(2466);const s="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:a,block:i,defaultValue:c,values:p,groupId:I,className:k}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),D=p??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,o.l)(D,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!D.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${D.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,u.U)(),[h,T]=(0,l.useState)(v),y=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=I){const e=g[I];null!=e&&e!==h&&D.some((t=>t.value===e))&&T(e)}const Z=e=>{const t=e.currentTarget,a=y.indexOf(t),n=D[a].value;n!==h&&(C(t),T(n),null!=I&&N(I,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;a=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;a=y[t]??y[y.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},D.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>y.push(e),onKeyDown:x,onClick:Z},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":h===t})}),a??t)}))),a?(0,l.cloneElement)(b.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function p(e){const t=(0,i.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},5109:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),r=(a(8209),a(5488)),i=a(5162);const o={sidebar_position:10,title:"\u552f\u4e00\u6807\u8bc6 ID"},u=void 0,d={unversionedId:"defition/ID",id:"defition/ID",title:"\u552f\u4e00\u6807\u8bc6 ID",description:"ID\uff0c\u7528\u4e8e\u4ee3\u8868\u4e00\u4e2a\u76ee\u6807\u7684\u552f\u4e00\u6807\u8bc6\u3002ID\u4e00\u4e2a\u5927\u5bb6\u90fd\u719f\u6089\u7684\u5185\u5bb9\uff0c\u5b83\u5e38\u5e38\u8868\u73b0\u4e3a\u4e00\u4e32\u6570\u5b57\uff0c\u6216\u8005\u4e00\u4e32\u5b57\u7b26\u3002",source:"@site/docs/defition/ID.md",sourceDirName:"defition",slug:"/defition/ID",permalink:"/docs/defition/ID",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/defition/ID.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1669997681,formattedLastUpdatedAt:"Dec 2, 2022",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u552f\u4e00\u6807\u8bc6 ID"},sidebar:"docs",previous:{title:"\u6807\u51c6\u5b9a\u4e49",permalink:"/docs/defition/"},next:{title:"\u5143\u7d20\u5e8f\u5217",permalink:"/docs/defition/Items"}},s={},m=[{value:"ID",id:"id",level:2},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"NumericalID",id:"numericalid",level:3},{value:"CharSequenceID",id:"charsequenceid",level:3}],c={toc:m};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ID\uff0c\u7528\u4e8e\u4ee3\u8868\u4e00\u4e2a\u76ee\u6807\u7684\u552f\u4e00\u6807\u8bc6\u3002ID\u4e00\u4e2a\u5927\u5bb6\u90fd\u719f\u6089\u7684\u5185\u5bb9\uff0c\u5b83\u5e38\u5e38\u8868\u73b0\u4e3a\u4e00\u4e32\u6570\u5b57\uff0c\u6216\u8005\u4e00\u4e32\u5b57\u7b26\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u7edf\u4e00\u5728\u5404\u4e2a\u73af\u5883\u4e0b\u53ef\u80fd\u5b58\u5728\u7684ID\u7c7b\u578b\u5dee\u5f02\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"simbot3")," \u4e2d\u63d0\u4f9b\u4e86\u4e00\u5957\u9488\u5bf9ID\u7684\u7c7b\u578b\u3002"),(0,l.kt)("h2",{id:"id"},"ID"),(0,l.kt)("p",null,"ID \u662f\u4e00\u4e2a\u901a\u7528\u7684\u552f\u4e00\u6807\u8bc6\u5b9a\u4e49\uff0c\u5176\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sealed class ID : Comparable<ID> {\n  // \u5f97\u5230\u5b57\u7b26\u4e32\u7c7b\u578b\u5b57\u9762\u503c\n    fun toString(): String\n  \n  // \u6bd4\u8f83\n  fun compareTo(other ID): Int\n}\n")),(0,l.kt)("p",null,"\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u6709\u4e24\u5c42\u542b\u4e49\uff1a\u8fd9\u4e2a\u552f\u4e00\u6807\u8bc6\u7684\u7c7b\u578b\uff0c\u4ee5\u53ca\u5b83\u5177\u4f53\u7684\u503c\u3002\n\u4e0d\u540c\u7c7b\u578b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u7684\u503c\u7c7b\u578b\u53ef\u80fd\u4e0d\u540c\uff0c\u4f46\u662f\u4f60\u90fd\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"toString")," \u6765\u5f97\u5230\u5b83\u4eec\u7684\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u3002"),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u603b\u5171\u67093\u4e2a\u5927\u7c7b\u578b\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"NumericalID")," (\u5c24\u5176 ",(0,l.kt)("inlineCode",{parentName:"p"},"IntID")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"LongID")," ) \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"CharSequenceID")," \u7406\u8bba\u4e0a\u53ef\u4ee5\u6ee1\u8db3\u7edd\u5927\u591a\u6570\u9700\u6c42\u3002"),(0,l.kt)("h3",{id:"numericalid"},"NumericalID"),(0,l.kt)("p",null,"\u6b64\u7c7b\u578b\u4ee3\u8868\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"\u6570\u5b57\u5f62\u5f0f")," \u7684ID\u3002\u5176\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sealed class NumericalID<N : Number> : ID() {\n  // \u5f97\u5230\u5b57\u9762\u503c\n  fun getValue(): N\n  \n  \n  // \u4e00\u4e9b\u7c7b\u4f3c\u4e8e Number\u4e2d\u7684\u65b9\u6cd5\n  \n  fun toByte(): Byte\n  fun toShort(): Short\n  fun toInt(): Int\n  fun toLong(): Long\n  fun toDouble(): Double\n  fun toFloat(): Float\n  fun toChar(): Char\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NumericalID"),"\u63d0\u4f9b\u4e866\u4e2a\u57fa\u672c\u7684\u7c7b\u578b\u5b9e\u73b0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IntID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LongID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DoubleID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FloatID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BigDecimalID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BigIntegerID"))),(0,l.kt)("p",null,"\u7b80\u5355\u7684\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)(r.Z,{groupId:"id-type",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Int",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val intId = 123.ID\n"))),(0,l.kt)(i.Z,{value:"Long",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val longId = 123456L.ID\n"))),(0,l.kt)(i.Z,{value:"Double",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val doubleId = 123.456.ID\n"))),(0,l.kt)(i.Z,{value:"Float",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val floatId = 123.456F.ID\n"))),(0,l.kt)(i.Z,{value:"BigDecimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bdId = BigDecimal("123,456").ID\n'))),(0,l.kt)(i.Z,{value:"BigInteger",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val biId = BigInteger.valueOf(123456).ID\n"))))),(0,l.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)(r.Z,{groupId:"id-type",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Int",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final IntID intId = Identifies.ID(123);\n"))),(0,l.kt)(i.Z,{value:"Long",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final LongID longId = Identifies.ID(123456L);\n"))),(0,l.kt)(i.Z,{value:"Double",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final DoubleID doubleId = Identifies.ID(123.456);\n"))),(0,l.kt)(i.Z,{value:"Float",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final FloatID floatId = Identifies.ID(123.456F);\n"))),(0,l.kt)(i.Z,{value:"BigDecimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final BigDecimalID bdId = Identifies.ID(new BigDecimal("123.456").setScale(1, RoundingMode.HALF_UP));\n'))),(0,l.kt)(i.Z,{value:"BigInteger",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final BigIntegerID biId = Identifies.ID(BigInteger.valueOf(500L));\n")))))),(0,l.kt)("h3",{id:"charsequenceid"},"CharSequenceID"),(0,l.kt)("p",null,"\u9664\u4e86\u6570\u5b57ID\uff0c\u6700\u5e38\u89c1\u7684\u5c31\u662f\u5b57\u7b26\u5e8f\u5217ID\u4e86\uff0c\u6bd4\u5982\u4e00\u4e32UUID\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"CharSequenceID")," \u662f\u4e00\u4e2a\u72ec\u7acb\u5b9e\u73b0\uff0c\u8868\u793a\u4e00\u4e2a\u6700\u57fa\u7840\u7684\u5b57\u7b26\u4e32ID\u3002"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val id: CharSequenceID = "HelloWorld".ID\n\nval anyId: CharSequenceID = 123.ID.toCharSequenceID() // \u6240\u6709ID\u7406\u8bba\u4e0a\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u5b57\u7b26\u5e8f\u5217ID\n'))),(0,l.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final CharSequenceID helloId = Identifies.ID("HelloWorld");\n\nfinal CharSequenceID strId = Identifies.toCharSequenceID(Identifies.ID(123));\n')))))}p.isMDXComponent=!0},8209:(e,t,a)=>{a.d(t,{G:()=>i});var n=a(7294),l=a(7273);const r="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[o,u]=(0,n.useState)(!1),d=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??r;a!==r&&"dark"!==a&&(a=r);const n=a===r?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(i,a)),[a,o]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){u((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?l.Z.initialize({startOnLoad:!0,...a.mermaid,theme:d}):l.Z.initialize({startOnLoad:!0,theme:d}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),l.Z.contentLoaded())}),[a,d]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(l.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);