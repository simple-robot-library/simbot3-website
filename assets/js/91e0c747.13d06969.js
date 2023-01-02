"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[7461],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),o=a(7392),m=a(7094),s=a(2466);const p="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:a,block:i,defaultValue:u,values:c,groupId:k,className:N}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,o.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:I}=(0,m.U)(),[T,y]=(0,r.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=k){const e=h[k];null!=e&&e!==T&&f.some((t=>t.value===e))&&y(e)}const w=e=>{const t=e.currentTarget,a=C.indexOf(t),n=f[a].value;n!==T&&(E(t),y(n),null!=k&&I(k,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;a=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=C[t]??C[C.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},N)},f.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:S,onClick:w},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},1610:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);const r="label_Yf5u";function l(e){let{type:t,href:a,children:l}=e;t=t||"primary";const i=n.createElement("span",{className:r},n.createElement("span",{className:`badge badge--${t}`},l));return null!=a&&a.length>0?n.createElement("a",{href:a},i):i}},9934:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>m,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),l=(a(8209),a(1610)),i=a(5488),o=a(5162);a(814);const m={sidebar_position:20,title:"\u5143\u7d20\u5e8f\u5217"},s=void 0,p={unversionedId:"definition/Items",id:"definition/Items",title:"\u5143\u7d20\u5e8f\u5217",description:"\u5143\u7d20\u5e8f\u5217 Items \u662f\u7531 simbot \u6240\u63d0\u4f9b\u7684\u7c7b\u5e8f\u5217\u7c7b\u578b\u5b9a\u4e49\u3002",source:"@site/docs/definition/Items.md",sourceDirName:"definition",slug:"/definition/Items",permalink:"/docs/definition/Items",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/definition/Items.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1672651725,formattedLastUpdatedAt:"Jan 2, 2023",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"\u5143\u7d20\u5e8f\u5217"},sidebar:"docs",previous:{title:"\u552f\u4e00\u6807\u8bc6 ID",permalink:"/docs/definition/ID"},next:{title:"\u65f6\u95f4\u6233",permalink:"/docs/definition/Timestamp"}},d={},u=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u9884\u5904\u7406\u51fd\u6570",id:"\u9884\u5904\u7406\u51fd\u6570",level:2},{value:"\u6536\u96c6\u51fd\u6570",id:"\u6536\u96c6\u51fd\u6570",level:2},{value:"\u8f6c\u5316\u51fd\u6570",id:"\u8f6c\u5316\u51fd\u6570",level:2}],c={toc:u};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5143\u7d20\u5e8f\u5217 ",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u662f\u7531 simbot \u6240\u63d0\u4f9b\u7684\u7c7b\u5e8f\u5217\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u65e8\u5728\u5c3d\u53ef\u80fd\u7684\u6d88\u9664\u975e\u963b\u585e\u548c\u963b\u585e\u7684\u5e8f\u5217API\u4e4b\u95f4\u7684\u5dee\u5f02\uff0c\u540c\u65f6\u7b80\u5316\u7ec4\u4ef6\u5f00\u53d1\u7684\u7e41\u6742\u5ea6\u3002\n\u76ee\u524d\u5728 simbot \u4e2d\u7684\u7edd\u5927\u591a\u6570\u6570\u636e\u7c7b\u578b\u4e3a\u5e8f\u5217\u7c7b\u578b\u7684\u76f8\u5173API\uff08\u4f8b\u5982\uff1a\u83b7\u53d6XX\u5217\u8868\uff09\u90fd\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u4f5c\u4e3a\u5e8f\u5217\u7c7b\u578b\u3002"),(0,r.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u7684\u57fa\u672c\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0b\u8ff0\u5b9a\u4e49\u5185\u5bb9\u6709\u6240\u7b80\u5316\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title='love/forte/simbot/utils/item/Items.kt'",title:"'love/forte/simbot/utils/item/Items.kt'"},"public interface Items<out T> {\n    \n    /**\n     * \u6570\u636e\u9650\u6d41\u3002\u53d6\u5f97\u7684\u6570\u636e\u6761\u6570\u7684\u6700\u5927\u4e0a\u9650\u3002\u5f53 [count] > 0 \u65f6\u6709\u6548\u3002\n     */\n    public fun limit(count: Int): Items<T>\n    \n    \n    /**\n     * \u6570\u636e\u504f\u79fb\u3002\u4ece [offset] \u6570\u91cf\u4e4b\u540e\u7684\u6570\u636e\u540e\u5f00\u59cb\u83b7\u53d6\u3002\u5f53 [offset] > 0 \u65f6\u6709\u6548\u3002\n     */\n    public fun offset(count: Int): Items<T>\n    \n    \n    /**\n     * \u6279\u6b21\u5927\u5c0f\u3002\u5982\u679c\u652f\u6301\u6279\u6b21\u83b7\u53d6\u7684\u8bdd\uff0c\u5219\u6bcf\u6279\u6b21\u83b7\u53d6 [size] \u7684\u5143\u7d20\u6570\u91cf\u3002\u901a\u5e38 [size] > 0 \u65f6\u6709\u6548\u3002\n     */\n    public fun batch(size: Int): Items<T>\n    \n    \n    /**\n     * \u6536\u96c6\u5f53\u524d\u6570\u636e\u5e8f\u5217\u4e2d\u7684\u5143\u7d20. [collectTo] \u53ef\u80fd\u4f1a\u4ea7\u751f\u6302\u8d77\uff0c\u4f1a\u76f4\u5230\u5f53\u524d\u5e8f\u5217\u4e2d\u7684\u6240\u6709\u53ef\u80fd\u4ea7\u751f\u7684\u5143\u7d20\u6536\u96c6\u5b8c\u6bd5\u540e\u7ed3\u675f\u6302\u8d77\u3002\n     */\n    public suspend fun collect(collector: suspend (T) -> Unit)\n    \n    /**\n     * \u5c06\u5f53\u524d\u5143\u7d20\u5e8f\u5217\u8f6c\u5316\u4e3a [Flow].\n     */\n    public fun asFlow(): Flow<T>\n    \n    /**\n     * \u5c06\u5f53\u524d\u5143\u7d20\u5e8f\u5217\u8f6c\u5316\u4e3a [Sequence].\n     */\n    public fun asSequence(): Sequence<T>\n    \n    /**\n     * \u5c06\u5f53\u524d\u5143\u7d20\u5e8f\u5217\u8f6c\u5316\u4e3a [Stream].\n     */\n    public fun asStream(): Stream<out T>\n    \n    // \u7701\u7565\u90e8\u5206\u5176\u4ed6\u517c\u5bb9\u6027API\n}\n")),(0,r.kt)("h2",{id:"\u9884\u5904\u7406\u51fd\u6570"},"\u9884\u5904\u7406\u51fd\u6570"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u4e2d\uff0c\u5b58\u5728\u4e00\u4e9b\u9884\u5904\u7406\u51fd\u6570\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9884\u5904\u7406\u51fd\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limit(Int)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u9650\u6d41\u3002\u53d6\u5f97\u7684\u6570\u636e\u6761\u6570\u7684\u6700\u5927\u4e0a\u9650\u3002\u5f53\u53c2\u6570 > 0 \u65f6\u6709\u6548\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offset(Int)")),(0,r.kt)("td",{parentName:"tr",align:null},'\u6570\u636e\u504f\u79fb\u3002\u4ece\u53c2\u6570\u6307\u5b9a\u7684\u6570\u91cf\u4e4b\u540e\u7684\u6570\u636e\u540e\u5f00\u59cb\u83b7\u53d6\u3002\u53ef\u4ee5\u7406\u89e3\u4e3a"\u8df3\u8fc7"\u6307\u5b9a\u6570\u91cf\u7684\u6570\u636e\u3002\u5f53\u53c2\u6570 > 0 \u65f6\u6709\u6548\u3002')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"batch(Int)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6279\u6b21\u5927\u5c0f\u3002\u5728\u652f\u6301\u6279\u6b21\u7684\u60c5\u51b5\u4e0b\uff0c\u914d\u7f6e\u6bcf\u6b21\u5b9e\u9645\u83b7\u53d6\u7684\u6570\u636e\u91cf\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u53c2\u6570 > 0 \u65f6\u6709\u6548\u3002")))),(0,r.kt)("p",null,"\u5f53\u4f60\u5728\u4f7f\u7528\u4e0a\u8ff0\u7684\u9884\u5904\u7406\u51fd\u6570\u7684\u65f6\u5019\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u901a\u5e38\u53ea\u662f\u5728\u5185\u90e8\u8bb0\u5f55\u5bf9\u5e94\u7684\u6570\u636e\u503c\uff0c\u800c\u4e0d\u4f1a\u53d1\u751f\u4efb\u4f55",(0,r.kt)("strong",{parentName:"p"},"\u771f\u6b63\u7684\u53d8\u5316"),"\u3002\n\u4e5f\u540c\u6837\u56e0\u6b64\uff0c\u540c\u4e00\u4e2a\u9884\u5904\u7406\u51fd\u6570\u5e94\u5f53\u5c3d\u53ef\u80fd",(0,r.kt)("strong",{parentName:"p"},"\u81f3\u591a"),"\u914d\u7f6e",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u6b21"),"\u3002"),(0,r.kt)("p",null,"\u5982\u4e0b\u793a\u4f8b\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"items.limit(10).limit(20)\n")),(0,r.kt)("p",null,"items\u5185\u90e8\u6700\u7ec8\u8bb0\u5f55\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," \u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"20"),"\uff0c\u5373\u540e\u8005\u8986\u76d6\u524d\u8005\u3002"),(0,r.kt)("admonition",{title:"\u4e0d\u592a\u4e00\u6837",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u5b9e\u9645\u4e0a\u4e0e\u5e38\u89c1\u7684\u5e8f\u5217API\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"Sequence")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," \u4e2d\u7c7b\u4f3c\u6982\u5ff5\u7684\u51fd\u6570\u8868\u73b0\u4e0d\u592a\u4e00\u6837\uff0c\u56e0\u6b64\u9700\u8981\u591a\u52a0\u6ce8\u610f\u3002")),(0,r.kt)("h2",{id:"\u6536\u96c6\u51fd\u6570"},"\u6536\u96c6\u51fd\u6570"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u63d0\u5230\u7684 ",(0,r.kt)("a",{parentName:"p",href:"#%E9%A2%84%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0"},"\u9884\u5904\u7406\u51fd\u6570")," \u4ee5\u5916\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u4e2d\u8fd8\u5b58\u5728\u53e6\u5916\u4e00\u79cd\u51fd\u6570\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u7ec8\u7ed3\u51fd\u6570"),"\u3002\u53ea\u6709\u5f53\u6267\u884c\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"\u7ec8\u7ed3\u51fd\u6570")," \u7684\u65f6\u5019\uff0c\n\u624d\u4f1a\u771f\u6b63\u7684\u53d1\u751f\u6570\u636e\u5e8f\u5217\u7684\u4ea7\u751f\uff0c\u5305\u62ec\u4f34\u968f\u7740\u4e00\u8d77\u53d1\u751f\u7684\u4efb\u4f55\u5176\u4ed6\u884c\u4e3a\uff0c\u4f8b\u5982\u7f51\u7edc\u8bf7\u6c42\u6216\u6302\u8d77\u3002"),(0,r.kt)("p",null,"\u800c ",(0,r.kt)("strong",{parentName:"p"},"\u6536\u96c6\u51fd\u6570")," \u4e3a\u7ec8\u7ed3\u51fd\u6570\u7684\u4e00\u79cd\u3002"),(0,r.kt)("admonition",{title:"\u6709\u4e9b\u7c7b\u4f3c",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"\u4e2d\u95f4\u51fd\u6570")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"\u7ec8\u7ed3\u51fd\u6570")," \u8fd9\u4e24\u4e2a\u7c7b\u578b\u6765\u8bb2\uff0c\u4ece\u6982\u5ff5\u4e0a\u4e0e\u666e\u901a\u7684\u5e8f\u5217\u7c7b\u578b\u76f8\u4f3c\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u4e2d\u7684\u6536\u96c6\u51fd\u6570\u6709\uff1a"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collect(suspend T -> Unit)")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6302\u8d77\u5e76\u6536\u96c6\u5f53\u524d\u5e8f\u5217\u4e2d\u7684\u5143\u7d20\u3002")))),(0,r.kt)("p",null,"\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"collect { ... }"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u8fd8\u6709\u4e00\u4e9b\u53ef\u4f9b\u4f7f\u7528\u7684\u6269\u5c55\u6536\u96c6\u51fd\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6269\u5c55API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toCollection(MutableCollection<T>)")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6302\u8d77\u5e76\u6536\u96c6\u5f53\u524d\u5e8f\u5217\u4e2d\u7684\u5143\u7d20\u5230\u6307\u5b9a\u7684\u5e8f\u5217\u4e2d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toList()")," ",(0,r.kt)(l.Z,{mdxType:"Label"},"suspend")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6302\u8d77\u5e76\u6536\u96c6\u5f53\u524d\u5e8f\u5217\u4e2d\u7684\u5143\u7d20\u5230\u5217\u8868\u4e2d\u3002"))))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collect(T -> void)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u963b\u585e\u7684\u6536\u96c6\u5f53\u524d\u5e8f\u5217\u4e2d\u7684\u5143\u7d20\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collectTo(Collection<T>)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u963b\u585e\u7684\u6536\u96c6\u5f53\u524d\u5e8f\u5217\u4e2d\u7684\u6240\u6709\u5143\u7d20\u5230\u6307\u5b9a\u7684\u96c6\u5408\u5bb9\u5668\u4e2d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collectToList()")),(0,r.kt)("td",{parentName:"tr",align:null},"\u963b\u585e\u7684\u6536\u96c6\u5f53\u524d\u5e8f\u5217\u4e2d\u7684\u6240\u6709\u5143\u7d20\u5230\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"td"},"List")," \u4e2d\u3002")))))),(0,r.kt)("h2",{id:"\u8f6c\u5316\u51fd\u6570"},"\u8f6c\u5316\u51fd\u6570"),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"#%E6%94%B6%E9%9B%86%E5%87%BD%E6%95%B0"},"\u6536\u96c6\u51fd\u6570")," ",(0,r.kt)("strong",{parentName:"p"},"\u7c7b\u4f3c"),"\uff0c\u53ef\u4ee5\u5c06\u5176\u89c6\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u7684\u7ec8\u7ed3\u51fd\u6570\uff0c\u4f46\u662f\u53c8\u6709\u6240\u4e0d\u540c\uff1a\u56e0\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u8f6c\u5316\u51fd\u6570")," \u7684\u8f6c\u5316\u7ed3\u679c\u4e3a\u5e8f\u5217\u76f8\u5173\u7684\u7c7b\u578b\uff0c\n\u800c\u8fd9\u4e9b\u7c7b\u578b\u5c1a\u672a\u6267\u884c\u8fc7\u7ec8\u7ed3\u51fd\u6570\uff0c\u56e0\u6b64\u5b83\u5e76\u975e\u5b8c\u5168\u7684 ",(0,r.kt)("em",{parentName:"p"},"\u7ec8\u7ed3"),"\uff0c\u4e5f\u4e0d\u4f1a\u771f\u6b63\u7684\u53d1\u751f\u6570\u636e\u5e8f\u5217\u7684\u4ea7\u751f\u884c\u4e3a\u3002"),(0,r.kt)("admonition",{title:"\u590d\u7528?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u7406\u8bba\u4e0a\u6765\u8bb2\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u7684\u8f6c\u5316\u51fd\u6570\u662f\u53ef\u4ee5\u590d\u7528\u7684\uff08\u5373\u8c03\u7528\u591a\u6b21\uff09\uff0c\u6bcf\u6b21\u90fd\u4f1a\u5f97\u5230\u4e00\u4e2a\u5168\u65b0\u7684\u5e8f\u5217\u5b9e\u4f8b\u3002\n\u4f46\u662f\u5e76\u4e0d\u5efa\u8bae\u8fd9\u4e48\u505a\uff0c\u4e5f\u6ca1\u6709\u4ec0\u4e48\u5b9e\u9645\u610f\u4e49\u3002\u800c\u4e14\u4e0d\u4fdd\u8bc1\u672a\u6765\u4f1a\u4fdd\u6301\u5bf9\u6b64\u884c\u4e3a\u7684\u5bbd\u677e\u7ea6\u675f\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c\u5982\u679c\u6ca1\u6709\u5fc5\u8981\uff0c\u5bf9\u4e8e\u6240\u6709\u8f6c\u5316\u51fd\u6570\u6765\u8bb2\u8bf7\u4fdd\u8bc1 ",(0,r.kt)("strong",{parentName:"p"},"\u81f3\u591a")," \u53ea\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u6b21"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u4e2d\u7684\u8f6c\u5316\u51fd\u6570\u7684\u4f7f\u7528\u53c2\u8003\uff1a"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Bar\nclass Tar(val foo: Bar)\n\nfun foo(items: Items<Bar>) {\n    val tarItems: Items<Tar> = items.transform { Tar(it) }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4e8b\u5b9e\u4e0a\uff0c\u8f6c\u5316\u51fd\u6570\u4e3b\u8981\u7528\u4e8e\u9762\u5411\u90a3\u4e9b\u5bf9\u5916\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u7ed3\u679c\u7684API\uff0c\u800c\u5e76\u975e\u4f7f\u7528\u8005\u3002\u5982\u679c\u4f5c\u4e3a\u4f7f\u7528\u8005\u60f3\u8981\u8fdb\u884c\u7c7b\u578b\u8f6c\u5316\uff0c\n\u4f60\u5927\u53ef\u4ee5\u5148\u5c06\u5176\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"asSequence")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"asFlow")," \u5c06\u5176\u8f6c\u5316\u4e3a\u5e8f\u5217\u7c7b\u578b\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun foo(items: Items<Bar>) {\n    val flow: Flow<Tar> = items.asFlow().map { Tar(it) }\n}\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun foo(items: Items<Bar>) {\n    val sequence: Sequence<Tar> = items.asSequence().map { Tar(it) }\n}\n")))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Bar{ /* ... */ }\nclass Tar{\n    Tar(Bar bar){ /* ... */ }\n}\n\npublic void foo(Items<Bar> items) {\n    final Items<Tar> tarItems = Items.transform(items, Tar::new);\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4e8b\u5b9e\u4e0a\uff0c\u8f6c\u5316\u51fd\u6570\u4e3b\u8981\u7528\u4e8e\u9762\u5411\u90a3\u4e9b\u5bf9\u5916\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," \u7ed3\u679c\u7684API\uff0c\u800c\u5e76\u975e\u4f7f\u7528\u8005\u3002\n\u8fd9\u4e00\u70b9\u4ece\u4e0a\u8ff0\u793a\u4f8b\u4e2d\u90a3\u79cd\u8f83\u4e3a\u7e41\u6742\u7684\u4f7f\u7528\u65b9\u5f0f\u4e5f\u80fd\u770b\u51fa\u6765\uff0c\u8fd9\u5e76\u4e0d\u662f\u4e3a\u4e86\u4f7f\u7528\u8005\u51c6\u5907\u7684api\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f5c\u4e3a\u4f7f\u7528\u8005\u60f3\u8981\u8fdb\u884c\u7c7b\u578b\u8f6c\u5316\uff0c\n\u4f60\u5927\u53ef\u4ee5\u5148\u5c06\u5176\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"asStream")," \u5c06\u5176\u8f6c\u5316\u4e3a\u5e8f\u5217\u7c7b\u578b\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void foo(Items<Bar> items) {\n    final Stream<Tar> stream = items.asStream().map(Tar::new);\n}\n"))))))}k.isMDXComponent=!0},8209:(e,t,a)=>{a.d(t,{G:()=>i});var n=a(7294),r=a(7273);const l="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return n.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,n.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[o,m]=(0,n.useState)(!1),s=(0,n.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??l;a!==l&&"dark"!==a&&(a=l);const n=a===l?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??n}(i,a)),[a,o]);return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){m((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,n.useEffect)((()=>{a&&(a.mermaid?r.Z.initialize({startOnLoad:!0,...a.mermaid,theme:s}):r.Z.initialize({startOnLoad:!0,theme:s}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),r.Z.contentLoaded())}),[a,s]),(0,n.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(r.Z.contentLoaded,0)}),[e]),n.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);