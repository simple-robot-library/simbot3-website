"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[6002],{5162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294),l=t(6010);const i="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(7462),l=t(7294),i=t(6010),r=t(2389),o=t(7392),u=t(7094),d=t(2466);const s="tabList__CuJ",p="tabItem_LNqP";function m(e){var a,t;const{lazy:r,block:m,defaultValue:c,values:I,groupId:k,className:D}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=I?I:b.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),g=(0,o.l)(v,((e,a)=>e.value===a.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===c?c:null!=(a=null!=c?c:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?a:b[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:f,setTabGroupChoices:h}=(0,u.U)(),[T,y]=(0,l.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:Z}=(0,d.o5)();if(null!=k){const e=f[k];null!=e&&e!==T&&v.some((a=>a.value===e))&&y(e)}const x=e=>{const a=e.currentTarget,t=C.indexOf(a),n=v[t].value;n!==T&&(Z(a),y(n),null!=k&&h(k,String(n)))},S=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var n;const a=C.indexOf(e.currentTarget)+1;t=null!=(n=C[a])?n:C[0];break}case"ArrowLeft":{var l;const a=C.indexOf(e.currentTarget)-1;t=null!=(l=C[a])?l:C[C.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},D)},v.map((e=>{let{value:a,label:t,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>C.push(e),onKeyDown:S,onFocus:x,onClick:x},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":T===a})}),null!=t?t:a)}))),r?(0,l.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function c(e){const a=(0,r.Z)();return l.createElement(m,(0,n.Z)({key:String(a)},e))}},5109:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=t(7462),l=(t(7294),t(3905)),i=(t(1839),t(5488)),r=t(5162);const o={sidebar_position:10,title:"\u552f\u4e00\u6807\u8bc6 ID"},u=void 0,d={unversionedId:"defition/ID",id:"defition/ID",title:"\u552f\u4e00\u6807\u8bc6 ID",description:"ID\uff0c\u7528\u4e8e\u4ee3\u8868\u4e00\u4e2a\u76ee\u6807\u7684\u552f\u4e00\u6807\u8bc6\u3002ID\u4e00\u4e2a\u5927\u5bb6\u90fd\u719f\u6089\u7684\u5185\u5bb9\uff0c\u5b83\u5e38\u5e38\u8868\u73b0\u4e3a\u4e00\u4e32\u6570\u5b57\uff0c\u6216\u8005\u4e00\u4e32\u5b57\u7b26\u3002",source:"@site/docs/defition/ID.md",sourceDirName:"defition",slug:"/defition/ID",permalink:"/docs/defition/ID",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/defition/ID.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1667277196,formattedLastUpdatedAt:"Nov 1, 2022",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u552f\u4e00\u6807\u8bc6 ID"},sidebar:"docs",previous:{title:"\u6807\u51c6\u5b9a\u4e49",permalink:"/docs/defition/"},next:{title:"\u5143\u7d20\u5e8f\u5217",permalink:"/docs/defition/Items"}},s={},p=[{value:"ID",id:"id",level:2},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"NumericalID",id:"numericalid",level:3},{value:"CharSequenceID",id:"charsequenceid",level:3}],m={toc:p};function c(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ID\uff0c\u7528\u4e8e\u4ee3\u8868\u4e00\u4e2a\u76ee\u6807\u7684\u552f\u4e00\u6807\u8bc6\u3002ID\u4e00\u4e2a\u5927\u5bb6\u90fd\u719f\u6089\u7684\u5185\u5bb9\uff0c\u5b83\u5e38\u5e38\u8868\u73b0\u4e3a\u4e00\u4e32\u6570\u5b57\uff0c\u6216\u8005\u4e00\u4e32\u5b57\u7b26\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u7edf\u4e00\u5728\u5404\u4e2a\u73af\u5883\u4e0b\u53ef\u80fd\u5b58\u5728\u7684ID\u7c7b\u578b\u5dee\u5f02\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"simbot3")," \u4e2d\u63d0\u4f9b\u4e86\u4e00\u5957\u9488\u5bf9ID\u7684\u7c7b\u578b\u3002"),(0,l.kt)("h2",{id:"id"},"ID"),(0,l.kt)("p",null,"ID \u662f\u4e00\u4e2a\u901a\u7528\u7684\u552f\u4e00\u6807\u8bc6\u5b9a\u4e49\uff0c\u5176\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sealed class ID : Comparable<ID> {\n  // \u5f97\u5230\u5b57\u7b26\u4e32\u7c7b\u578b\u5b57\u9762\u503c\n    fun toString(): String\n  \n  // \u6bd4\u8f83\n  fun compareTo(other ID): Int\n}\n")),(0,l.kt)("p",null,"\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u6709\u4e24\u5c42\u542b\u4e49\uff1a\u8fd9\u4e2a\u552f\u4e00\u6807\u8bc6\u7684\u7c7b\u578b\uff0c\u4ee5\u53ca\u5b83\u5177\u4f53\u7684\u503c\u3002\n\u4e0d\u540c\u7c7b\u578b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u7684\u503c\u7c7b\u578b\u53ef\u80fd\u4e0d\u540c\uff0c\u4f46\u662f\u4f60\u90fd\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"toString")," \u6765\u5f97\u5230\u5b83\u4eec\u7684\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u3002"),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u603b\u5171\u67093\u4e2a\u5927\u7c7b\u578b\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"NumericalID")," (\u5c24\u5176 ",(0,l.kt)("inlineCode",{parentName:"p"},"IntID")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"LongID")," ) \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"CharSequenceID")," \u7406\u8bba\u4e0a\u53ef\u4ee5\u6ee1\u8db3\u7edd\u5927\u591a\u6570\u9700\u6c42\u3002"),(0,l.kt)("h3",{id:"numericalid"},"NumericalID"),(0,l.kt)("p",null,"\u6b64\u7c7b\u578b\u4ee3\u8868\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"\u6570\u5b57\u5f62\u5f0f")," \u7684ID\u3002\u5176\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sealed class NumericalID<N : Number> : ID() {\n  // \u5f97\u5230\u5b57\u9762\u503c\n  fun getValue(): N\n  \n  \n  // \u4e00\u4e9b\u7c7b\u4f3c\u4e8e Number\u4e2d\u7684\u65b9\u6cd5\n  \n  fun toByte(): Byte\n  fun toShort(): Short\n  fun toInt(): Int\n  fun toLong(): Long\n  fun toDouble(): Double\n  fun toFloat(): Float\n  fun toChar(): Char\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NumericalID"),"\u63d0\u4f9b\u4e866\u4e2a\u57fa\u672c\u7684\u7c7b\u578b\u5b9e\u73b0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IntID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LongID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DoubleID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FloatID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BigDecimalID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BigIntegerID"))),(0,l.kt)("p",null,"\u7b80\u5355\u7684\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)(i.Z,{groupId:"id-type",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Int",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val intId = 123.ID\n"))),(0,l.kt)(r.Z,{value:"Long",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val longId = 123456L.ID\n"))),(0,l.kt)(r.Z,{value:"Double",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val doubleId = 123.456.ID\n"))),(0,l.kt)(r.Z,{value:"Float",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val floatId = 123.456F.ID\n"))),(0,l.kt)(r.Z,{value:"BigDecimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bdId = BigDecimal("123,456").ID\n'))),(0,l.kt)(r.Z,{value:"BigInteger",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val biId = BigInteger.valueOf(123456).ID\n"))))),(0,l.kt)(r.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)(i.Z,{groupId:"id-type",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Int",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final IntID intId = Identifies.ID(123);\n"))),(0,l.kt)(r.Z,{value:"Long",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final LongID longId = Identifies.ID(123456L);\n"))),(0,l.kt)(r.Z,{value:"Double",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final DoubleID doubleId = Identifies.ID(123.456);\n"))),(0,l.kt)(r.Z,{value:"Float",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final FloatID floatId = Identifies.ID(123.456F);\n"))),(0,l.kt)(r.Z,{value:"BigDecimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final BigDecimalID bdId = Identifies.ID(new BigDecimal("123.456").setScale(1, RoundingMode.HALF_UP));\n'))),(0,l.kt)(r.Z,{value:"BigInteger",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final BigIntegerID biId = Identifies.ID(BigInteger.valueOf(500L));\n")))))),(0,l.kt)("h3",{id:"charsequenceid"},"CharSequenceID"),(0,l.kt)("p",null,"\u9664\u4e86\u6570\u5b57ID\uff0c\u6700\u5e38\u89c1\u7684\u5c31\u662f\u5b57\u7b26\u5e8f\u5217ID\u4e86\uff0c\u6bd4\u5982\u4e00\u4e32UUID\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"CharSequenceID")," \u662f\u4e00\u4e2a\u72ec\u7acb\u5b9e\u73b0\uff0c\u8868\u793a\u4e00\u4e2a\u6700\u57fa\u7840\u7684\u5b57\u7b26\u4e32ID\u3002"),(0,l.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val id: CharSequenceID = "HelloWorld".ID\n\nval anyId: CharSequenceID = 123.ID.toCharSequenceID() // \u6240\u6709ID\u7406\u8bba\u4e0a\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u5b57\u7b26\u5e8f\u5217ID\n'))),(0,l.kt)(r.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final CharSequenceID helloId = Identifies.ID("HelloWorld");\n\nfinal CharSequenceID strId = Identifies.toCharSequenceID(Identifies.ID(123));\n')))))}c.isMDXComponent=!0}}]);