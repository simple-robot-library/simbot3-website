"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[6002],{5109:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>I,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),i=(a(8209),a(5488)),r=a(5162);const d={sidebar_position:10,title:"\u552f\u4e00\u6807\u8bc6 ID"},o=void 0,m={unversionedId:"defition/ID",id:"defition/ID",title:"\u552f\u4e00\u6807\u8bc6 ID",description:"ID\uff0c\u7528\u4e8e\u4ee3\u8868\u4e00\u4e2a\u76ee\u6807\u7684\u552f\u4e00\u6807\u8bc6\u3002ID\u4e00\u4e2a\u5927\u5bb6\u90fd\u719f\u6089\u7684\u5185\u5bb9\uff0c\u5b83\u5e38\u5e38\u8868\u73b0\u4e3a\u4e00\u4e32\u6570\u5b57\uff0c\u6216\u8005\u4e00\u4e32\u5b57\u7b26\u3002",source:"@site/docs/defition/ID.md",sourceDirName:"defition",slug:"/defition/ID",permalink:"/docs/defition/ID",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/defition/ID.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1667987660,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u552f\u4e00\u6807\u8bc6 ID"},sidebar:"docs",previous:{title:"\u6807\u51c6\u5b9a\u4e49",permalink:"/docs/defition/"},next:{title:"\u5143\u7d20\u5e8f\u5217",permalink:"/docs/defition/Items"}},u={},p=[{value:"ID",id:"id",level:2},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"NumericalID",id:"numericalid",level:3},{value:"CharSequenceID",id:"charsequenceid",level:3}],s={toc:p};function I(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ID\uff0c\u7528\u4e8e\u4ee3\u8868\u4e00\u4e2a\u76ee\u6807\u7684\u552f\u4e00\u6807\u8bc6\u3002ID\u4e00\u4e2a\u5927\u5bb6\u90fd\u719f\u6089\u7684\u5185\u5bb9\uff0c\u5b83\u5e38\u5e38\u8868\u73b0\u4e3a\u4e00\u4e32\u6570\u5b57\uff0c\u6216\u8005\u4e00\u4e32\u5b57\u7b26\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u7edf\u4e00\u5728\u5404\u4e2a\u73af\u5883\u4e0b\u53ef\u80fd\u5b58\u5728\u7684ID\u7c7b\u578b\u5dee\u5f02\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"simbot3")," \u4e2d\u63d0\u4f9b\u4e86\u4e00\u5957\u9488\u5bf9ID\u7684\u7c7b\u578b\u3002"),(0,l.kt)("h2",{id:"id"},"ID"),(0,l.kt)("p",null,"ID \u662f\u4e00\u4e2a\u901a\u7528\u7684\u552f\u4e00\u6807\u8bc6\u5b9a\u4e49\uff0c\u5176\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sealed class ID : Comparable<ID> {\n  // \u5f97\u5230\u5b57\u7b26\u4e32\u7c7b\u578b\u5b57\u9762\u503c\n    fun toString(): String\n  \n  // \u6bd4\u8f83\n  fun compareTo(other ID): Int\n}\n")),(0,l.kt)("p",null,"\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u6709\u4e24\u5c42\u542b\u4e49\uff1a\u8fd9\u4e2a\u552f\u4e00\u6807\u8bc6\u7684\u7c7b\u578b\uff0c\u4ee5\u53ca\u5b83\u5177\u4f53\u7684\u503c\u3002\n\u4e0d\u540c\u7c7b\u578b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u7684\u503c\u7c7b\u578b\u53ef\u80fd\u4e0d\u540c\uff0c\u4f46\u662f\u4f60\u90fd\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"toString")," \u6765\u5f97\u5230\u5b83\u4eec\u7684\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u3002"),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u603b\u5171\u67093\u4e2a\u5927\u7c7b\u578b\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"NumericalID")," (\u5c24\u5176 ",(0,l.kt)("inlineCode",{parentName:"p"},"IntID")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"LongID")," ) \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"CharSequenceID")," \u7406\u8bba\u4e0a\u53ef\u4ee5\u6ee1\u8db3\u7edd\u5927\u591a\u6570\u9700\u6c42\u3002"),(0,l.kt)("h3",{id:"numericalid"},"NumericalID"),(0,l.kt)("p",null,"\u6b64\u7c7b\u578b\u4ee3\u8868\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"\u6570\u5b57\u5f62\u5f0f")," \u7684ID\u3002\u5176\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sealed class NumericalID<N : Number> : ID() {\n  // \u5f97\u5230\u5b57\u9762\u503c\n  fun getValue(): N\n  \n  \n  // \u4e00\u4e9b\u7c7b\u4f3c\u4e8e Number\u4e2d\u7684\u65b9\u6cd5\n  \n  fun toByte(): Byte\n  fun toShort(): Short\n  fun toInt(): Int\n  fun toLong(): Long\n  fun toDouble(): Double\n  fun toFloat(): Float\n  fun toChar(): Char\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NumericalID"),"\u63d0\u4f9b\u4e866\u4e2a\u57fa\u672c\u7684\u7c7b\u578b\u5b9e\u73b0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IntID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LongID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DoubleID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FloatID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BigDecimalID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BigIntegerID"))),(0,l.kt)("p",null,"\u7b80\u5355\u7684\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)(i.Z,{groupId:"id-type",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Int",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val intId = 123.ID\n"))),(0,l.kt)(r.Z,{value:"Long",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val longId = 123456L.ID\n"))),(0,l.kt)(r.Z,{value:"Double",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val doubleId = 123.456.ID\n"))),(0,l.kt)(r.Z,{value:"Float",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val floatId = 123.456F.ID\n"))),(0,l.kt)(r.Z,{value:"BigDecimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bdId = BigDecimal("123,456").ID\n'))),(0,l.kt)(r.Z,{value:"BigInteger",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val biId = BigInteger.valueOf(123456).ID\n"))))),(0,l.kt)(r.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)(i.Z,{groupId:"id-type",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Int",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final IntID intId = Identifies.ID(123);\n"))),(0,l.kt)(r.Z,{value:"Long",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final LongID longId = Identifies.ID(123456L);\n"))),(0,l.kt)(r.Z,{value:"Double",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final DoubleID doubleId = Identifies.ID(123.456);\n"))),(0,l.kt)(r.Z,{value:"Float",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final FloatID floatId = Identifies.ID(123.456F);\n"))),(0,l.kt)(r.Z,{value:"BigDecimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final BigDecimalID bdId = Identifies.ID(new BigDecimal("123.456").setScale(1, RoundingMode.HALF_UP));\n'))),(0,l.kt)(r.Z,{value:"BigInteger",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final BigIntegerID biId = Identifies.ID(BigInteger.valueOf(500L));\n")))))),(0,l.kt)("h3",{id:"charsequenceid"},"CharSequenceID"),(0,l.kt)("p",null,"\u9664\u4e86\u6570\u5b57ID\uff0c\u6700\u5e38\u89c1\u7684\u5c31\u662f\u5b57\u7b26\u5e8f\u5217ID\u4e86\uff0c\u6bd4\u5982\u4e00\u4e32UUID\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"CharSequenceID")," \u662f\u4e00\u4e2a\u72ec\u7acb\u5b9e\u73b0\uff0c\u8868\u793a\u4e00\u4e2a\u6700\u57fa\u7840\u7684\u5b57\u7b26\u4e32ID\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val id: CharSequenceID = "HelloWorld".ID\n\nval anyId: CharSequenceID = 123.ID.toCharSequenceID() // \u6240\u6709ID\u7406\u8bba\u4e0a\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u5b57\u7b26\u5e8f\u5217ID\n'))),(0,l.kt)(r.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final CharSequenceID helloId = Identifies.ID("HelloWorld");\n\nfinal CharSequenceID strId = Identifies.toCharSequenceID(Identifies.ID(123));\n')))))}I.isMDXComponent=!0},8209:(e,t,a)=>{a.d(t,{G:()=>r});var n=a(7294),l=a(7273);const i="light";const r=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),r=document.querySelector("html"),[d,o]=(0,n.useState)(!1),m=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??i;a!==i&&"dark"!==a&&(a=i);const n=a===i?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(r,a)),[a,d]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){o((e=>!e));break}}));return e.observe(r,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?l.Z.initialize({startOnLoad:!0,...a.mermaid,theme:m}):l.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),l.Z.contentLoaded())}),[a,m]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(l.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);