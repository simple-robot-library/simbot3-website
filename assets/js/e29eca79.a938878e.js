(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[9981],{5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},4866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var a=n(7462),o=n(7294),r=n(6010),i=n(6775),l=n(1980),s=n(7392),m=n(12);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function u(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=u(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,p]=d({queryString:n,groupId:a}),[k,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,m.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=s??k;return c({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),b(e)}),[p,b,r]),tabValues:r}}var b=n(2466),f=n(2389);const g="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,b.o5)(),u=e=>{const t=e.currentTarget,n=m.indexOf(t),a=s[n].value;a!==i&&(p(t),l(a))},c=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;n=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;n=m[t]??m[m.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:u},l,{className:(0,r.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(h,(0,a.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return o.createElement(N,(0,a.Z)({key:String(t)},e))}},6654:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),r=(n(8209),n(4866)),i=n(5162);const l={sidebar_position:20,title:"BOT\u914d\u7f6e\u6587\u4ef6"},s=void 0,m={unversionedId:"basic/bot-config",id:"basic/bot-config",title:"BOT\u914d\u7f6e\u6587\u4ef6",description:"\u5728simbot3\u4e2d\uff0c\u6240\u6709\u7684\u914d\u7f6e\u6587\u4ef6\u90fd\u4ea4\u7531 .bot \u683c\u5f0f\u7684\u6587\u4ef6\u8fdb\u884c\u5b9a\u4e49\uff0c\u4f8b\u5982\uff1aforliy.bot \u3001 forliy.bot.json \u3001 forliy.bot.yaml \u7b49\u3002",source:"@site/docs/basic/bot-config.md",sourceDirName:"basic",slug:"/basic/bot-config",permalink:"/docs/basic/bot-config",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/basic/bot-config.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1677680807,formattedLastUpdatedAt:"2023\u5e743\u67081\u65e5",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"BOT\u914d\u7f6e\u6587\u4ef6"},sidebar:"docs",previous:{title:"\u6d88\u606f",permalink:"/docs/basic/messages"},next:{title:"\u6301\u7eed\u4f1a\u8bdd",permalink:"/docs/basic/continuous-session"}},p={},u=[{value:"\u7c7b\u578b\u652f\u6301",id:"\u7c7b\u578b\u652f\u6301",level:2},{value:"JSON",id:"json",level:3},{value:"YAML",id:"yaml",level:3},{value:"Properties",id:"properties",level:3},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"\u89e3\u6790",id:"\u89e3\u6790",level:2}],c={toc:u};function d(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728simbot3\u4e2d\uff0c\u6240\u6709\u7684\u914d\u7f6e\u6587\u4ef6\u90fd\u4ea4\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"*.bot*")," \u683c\u5f0f\u7684\u6587\u4ef6\u8fdb\u884c\u5b9a\u4e49\uff0c\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"forliy.bot")," \u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"forliy.bot.json")," \u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"forliy.bot.yaml")," \u7b49\u3002"),(0,o.kt)("p",null,"\u5728 simbot \u4e2d\uff0c\u8fd9\u4e9b\u6587\u4ef6\u6700\u7ec8\u90fd\u4f1a\u88ab\u5c01\u88c5\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"BotVerifyInfo")," \u5bf9\u8c61\u63d0\u4f9b\u7ed9\u7ec4\u4ef6\u8fdb\u884c\u89e3\u6790\u3002"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u683c\u5f0f\u9ad8\u4eae"),(0,o.kt)("p",null,"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},".bot")," \u6587\u4ef6\u7b49\u540c\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},".json"),"\u3002\u56e0\u6b64\u5982\u679c\u4f60\u60f3\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},".bot")," \u683c\u5f0f\u6587\u4ef6\u7684\u540c\u65f6\u80fd\u591f\u62e5\u6709IDE\u7684\u683c\u5f0f\u9ad8\u4eae\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u4f60\u7684IDE\u3002\n\u4ee5IDEA\u4e3e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"settings -> File Types")," \u4e2d\u5de6\u4fa7\u641c\u7d22 ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),"\uff0c\u5e76\u5728\u53f3\u8fb9\u6dfb\u52a0 pattern: ",(0,o.kt)("inlineCode",{parentName:"p"},"*.bot"),"\uff0c\u5982\u4e0b\u56fe\u8fd9\u6837\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4786).Z,width:"1270",height:"1046"})),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5176\u4ed6IDE\uff0c\u8bf7\u5c1d\u8bd5\u7740\u5bfb\u627e\u7c7b\u4f3c\u7684\u529f\u80fd\u3002")),(0,o.kt)("h2",{id:"\u7c7b\u578b\u652f\u6301"},"\u7c7b\u578b\u652f\u6301"),(0,o.kt)("p",null,"\u867d\u7136\u4e0a\u6587\u8bb2\u5230\uff0cbot\u6587\u4ef6\u914d\u7f6e\u652f\u6301\u591a\u79cd\u683c\u5f0f\u7684\u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"*.bot"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"*.bot.json"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"*.bot.yaml"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"*.bot.properties")," \u7b49\uff0c\n\u4f46\u662f\u5e76\u4e0d\u662f\u6240\u6709\u7684\u683c\u5f0f\u652f\u6301\u90fd\u662f",(0,o.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u96c6\u6210"),"\u7684\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e9b\u4e0d\u662f\u9ed8\u8ba4\u96c6\u6210\u4f7f\u7528\u7684\u6587\u4ef6\u7c7b\u578b\u652f\u6301\uff0c\u4f60\u9700\u8981\u5728\u4f60\u7684\u9879\u76ee\u73af\u5883\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u4f9d\u8d56\u3002"),(0,o.kt)("h3",{id:"json"},"JSON"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON")," \u6587\u4ef6\u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u5373 ",(0,o.kt)("inlineCode",{parentName:"p"},"*.bot")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"*.bot.json")," \u683c\u5f0f\u7684\u6587\u4ef6\u3002"),(0,o.kt)("h3",{id:"yaml"},"YAML"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u589e\u52a0\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"*.bot.yml")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"*.bot.yaml")," \u683c\u5f0f\u6587\u4ef6\u7684\u652f\u6301\uff0c\u8bf7\u6dfb\u52a0 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/charleskorn/kaml"},(0,o.kt)("inlineCode",{parentName:"a"},"com.charleskorn.kaml:kaml"))," \u4f9d\u8d56\u3002"),(0,o.kt)(r.Z,{groupId:"use-dependency",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Maven",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=pom.xml",title:"pom.xml"},"<dependencies>\n    \x3c!-- https://mvnrepository.com/artifact/com.charleskorn.kaml/kaml --\x3e\n    <dependency>\n        <groupId>com.charleskorn.kaml</groupId>\n        <artifactId>kaml</artifactId>\n        \x3c!-- \u53c2\u8003 https://github.com/charleskorn/kaml --\x3e\n        <version>${kaml-version}</version>\n    </dependency>\n</dependencies>\n"))),(0,o.kt)(i.Z,{value:"Gradle Kotlin DSL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=gradle.build.kts",title:"gradle.build.kts"},'dependencies {\n    // \u53c2\u8003 https://github.com/charleskorn/kaml\n    implementation("com.charleskorn.kaml:kaml:$kaml_version")\n}\n'))),(0,o.kt)(i.Z,{value:"Gradle Groovy",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy",metastring:"title=gradle.build",title:"gradle.build"},"dependencies {\n    // \u53c2\u8003 https://github.com/charleskorn/kaml\n    implementation 'com.charleskorn.kaml:kaml:$kaml_version'\n}\n")))),(0,o.kt)("admonition",{title:"\u65e5\u5fd7",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u65e0\u6cd5\u5728\u4f60\u7684\u8fd0\u884c\u65f6\u73af\u5883\u4e2d\u627e\u5230\u6b64\u4f9d\u8d56\uff0c\u90a3\u4e48\u4f60\u6709\u53ef\u80fd\u4f1a\u5728\u63a7\u5236\u53f0\u4e2d\u53d1\u73b0\u7c7b\u4f3c\u4e8e\u5982\u4e0b\u5185\u5bb9\u7684\u8b66\u544a\u65e5\u5fd7\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-log"},"[WARN] Unable to find the com.charleskorn.kaml:kaml in current classpath, the bot configuration parser in *.bot.yaml format will not be available.\n")),(0,o.kt)("p",{parentName:"admonition"},"\u5047\u5982\u4f60\u6ca1\u6709\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"YAML")," \u683c\u5f0f\u6587\u4ef6\u7684\u8ba1\u5212\uff0c\u90a3\u4e48\u5927\u53ef\u4ee5\u65e0\u89c6\u6b64\u8b66\u544a\u3002")),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u589e\u52a0\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"*.bot.properties")," \u683c\u5f0f\u6587\u4ef6\u7684\u652f\u6301\uff0c\u8bf7\u6dfb\u52a0 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization/tree/master/formats#properties"},(0,o.kt)("inlineCode",{parentName:"a"},"kotlinx-serialization-properties"))," \u4f9d\u8d56\u3002"),(0,o.kt)(r.Z,{groupId:"use-dependency",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Maven",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=pom.xml",title:"pom.xml"},"<dependencies>\n    \x3c!-- https://mvnrepository.com/artifact/com.charleskorn.kaml/kaml --\x3e\n    <dependency>\n        <groupId>org.jetbrains.kotlinx</groupId>\n        <artifactId>kotlinx-serialization-properties</artifactId>\n        \x3c!-- \u53c2\u8003 https://github.com/Kotlin/kotlinx.serialization --\x3e\n        <version>${ktx-serialization-properties-version}</version>\n    </dependency>\n</dependencies>\n"))),(0,o.kt)(i.Z,{value:"Gradle Kotlin DSL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=gradle.build.kts",title:"gradle.build.kts"},'dependencies {\n    // \u53c2\u8003 https://github.com/Kotlin/kotlinx.serialization\n    implementation("org.jetbrains.kotlinx:kotlinx-serialization-properties:$ktx_serialization_properties_version")\n}\n'))),(0,o.kt)(i.Z,{value:"Gradle Groovy",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy",metastring:"title=gradle.build",title:"gradle.build"},"dependencies {\n    // \u53c2\u8003 https://github.com/Kotlin/kotlinx.serialization\n    implementation 'org.jetbrains.kotlinx:kotlinx-serialization-properties:$ktx_serialization_properties_version'\n}\n")))),(0,o.kt)("admonition",{title:"\u65e5\u5fd7",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u65e0\u6cd5\u5728\u4f60\u7684\u8fd0\u884c\u65f6\u73af\u5883\u4e2d\u627e\u5230\u6b64\u4f9d\u8d56\uff0c\u90a3\u4e48\u4f60\u6709\u53ef\u80fd\u4f1a\u5728\u63a7\u5236\u53f0\u4e2d\u53d1\u73b0\u7c7b\u4f3c\u4e8e\u5982\u4e0b\u5185\u5bb9\u7684\u8b66\u544a\u65e5\u5fd7\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-log"},"[WARN] Unable to find the kotlinx-serialization-properties in current classpath, the bot configuration parser in *.bot.properties format will not be available.\n")),(0,o.kt)("p",{parentName:"admonition"},"\u5047\u5982\u4f60\u6ca1\u6709\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"Properties")," \u683c\u5f0f\u6587\u4ef6\u7684\u8ba1\u5212\uff0c\u90a3\u4e48\u5927\u53ef\u4ee5\u65e0\u89c6\u6b64\u8b66\u544a\u3002")),(0,o.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2abot\u914d\u7f6e\u6587\u4ef6\uff0c\u5176\u53ef\u80fd\u5b58\u5728\u7684\u5c5e\u6027\u5728\u6bcf\u4e2a\u4e0d\u540c\u7684\u7ec4\u4ef6\u4e0b\u90fd\u662f\u4e0d\u540c\u7684\uff0c\u4f46\u662f\u6709\u4e00\u4e2a\u5c5e\u6027\u5fc5\u5b9a\u5b58\u5728\uff0c\u5373 ",(0,o.kt)("inlineCode",{parentName:"p"},"component"),":"),(0,o.kt)(r.Z,{groupId:"bot-config",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='my-bot.bot'",title:"'my-bot.bot'"},'{\n  "component": "simbot.xxxx"\n}\n'))),(0,o.kt)(i.Z,{value:"YAML",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title='my-bot.bot.yaml'",title:"'my-bot.bot.yaml'"},"component: 'simbot.xxxx'\n"))),(0,o.kt)(i.Z,{value:"properties",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties",metastring:"title='my-bot.properties'",title:"'my-bot.properties'"},"component=simbot.xxxx\n")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"component")," \u5c5e\u6027\u7528\u6765\u9610\u660e\u6b64\u914d\u7f6e\u6587\u4ef6\u662f\u4e3a\u4e86\u54ea\u4e2a\u7ec4\u4ef6\u6240\u670d\u52a1\u7684\uff0c\u5b83\u7684\u503c\u4e3a\u5bf9\u5e94\u7ec4\u4ef6\u7684ID\u503c\u3002\n\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"simbot.mirai"),"\uff0c\u5219\u4ee3\u8868\u6b64\u914d\u7f6e\u6587\u4ef6\u4e3a ",(0,o.kt)("a",{parentName:"p",href:"../component-overview/mirai"},"mirai\u7ec4\u4ef6")," \u6240\u4f7f\u7528\u7684\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u4ee3\u8868\u4e86\u4e00\u4e2a\u7ec4\u4ef6\u4e0b\u67d0\u4e2abot\u7684\u7279\u5b9a\u914d\u7f6e\u3002\n\u800c\u9664\u4e86\u6240\u6709\u914d\u7f6e\u6587\u4ef6\u5185\u90fd\u5e94\u5b58\u5728\u7684\u914d\u7f6e\u9879 ",(0,o.kt)("inlineCode",{parentName:"p"},"component")," \u4ee5\u5916\uff0c\u5176\u4ed6\u7684\u6240\u6709\u5185\u5bb9\u90fd\u662f\u7ec4\u4ef6\u5b9e\u73b0\u6240",(0,o.kt)("strong",{parentName:"p"},"\u5b9a\u5236"),"\u7684\uff0c\u4f60\u9700\u8981\u53c2\u8003\u76f8\u5173\u7ec4\u4ef6\u7684\u8bf4\u660e\u6587\u6863\u6765\u8fdb\u884c\u8fdb\u4e00\u6b65\u7684\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u524d\u5f80 ",(0,o.kt)("a",{parentName:"p",href:"../component-overview"},(0,o.kt)("strong",{parentName:"a"},"\u300a\u7ec4\u4ef6\u300b"))," \u7ae0\u8282\u9009\u62e9\u4f60\u9700\u8981\u4f7f\u7528\u7684\u7ec4\u4ef6\uff0c\u5e76\u9605\u8bfb\u5b83\u4eec\u7684\u6587\u6863\u6765\u4e86\u89e3\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u914d\u7f6e\u6587\u4ef6\u7684\u5177\u4f53\u683c\u5f0f\u3002"),(0,o.kt)("admonition",{title:"\u61d2\u4eba\u6700\u7231",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6b64\u5904\u662f\u4e0d\u5b9a\u671f\u66f4\u65b0\u7684\u5feb\u901f\u94fe\u63a5\uff0c\u53ef\u4ee5\u5c06\u4f60\u76f4\u63a5\u5f15\u5bfc\u5230\u4e00\u4e9b\u7ec4\u4ef6\u5bf9\u4e8e",(0,o.kt)("strong",{parentName:"p"},"BOT\u914d\u7f6e"),"\u7684\u8bf4\u660e\u9875\u3002"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\ud83d\udc49 ",(0,o.kt)("a",{parentName:"li",href:"https://component-mirai.simbot.forte.love/docs/bot-config"},"mirai\u7ec4\u4ef6\u7684Bot\u914d\u7f6e\u6587\u6863")))),(0,o.kt)("h2",{id:"\u89e3\u6790"},"\u89e3\u6790"),(0,o.kt)("admonition",{title:"\u867d\u7136...",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u90fd\u4e0d\u9700\u8981\u81ea\u884c\u89e3\u6790 bot \u914d\u7f6e\u6587\u4ef6\u3002")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"BotVerifyInfo")," \u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},(0,o.kt)("inlineCode",{parentName:"a"},"kotlinx-serialization"))," \u5b9e\u73b0\u53cd\u5e8f\u5217\u5316\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/"},"Kotlin")," \u6765\u5b8c\u6210\u914d\u7f6e\u6587\u4ef6\u7684\u89e3\u6790\u3002")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u6784\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"BotVerifyInfo")," \u6765\u81ea\u5b9a\u4e49\u89e3\u6790\u4e00\u4e2a bot \u914d\u7f6e\u6587\u4ef6\u3002"),(0,o.kt)(r.Z,{groupId:"bot-config",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("p",null,"\u5047\u8bbe\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='custom.bot'",title:"'custom.bot'"},'{\n   "component": "example.foo",\n   "age": 14,\n   "name": "forliy"\n}\n')),(0,o.kt)("p",null,"\u90a3\u4e48\u53c2\u8003\u5982\u4e0b\u89e3\u6790\u903b\u8f91\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title='Example.kt'",title:"'Example.kt'"},'/**\n * \u7528\u6765\u6620\u5c04\u53cd\u5e8f\u5217\u5316\u7ed3\u679c\u7684\u914d\u7f6e\u4fe1\u606f\u5b9e\u4f53\u7c7b\u3002\n */\n@Serializable\ndata class CustomConfig(val age: Int, val name: String)\n\nfun main() {\n    // \u5f97\u5230\u914d\u7f6e\u6587\u4ef6\u7684 resource\n    val configResource = Path("custom.bot").toResource()\n    \n    // \u63d0\u4f9b\u4e00\u4e2a\u914d\u7f6e\u4fe1\u606f\u89e3\u7801\u5668\u5e76\u6784\u5efa\u4e3a BotVerifyInfo\n    // \u8fd9\u91cc\u9009\u62e9\u7684\u662f\u901a\u8fc7 \u6807\u51c6\u89e3\u7801\u5668\u5de5\u5382 \u4e2d\u7684 Json \u683c\u5f0f\u7684\u89e3\u7801\u5668\u5de5\u5382\u6765\u6784\u5efa\u4e00\u4e2a Json \u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6\u89e3\u7801\u5668\u3002\n    val botVerifyInfo = configResource.toBotVerifyInfo(\n        StandardBotVerifyInfoDecoderFactory.Json.create {\n            // config...\n            isLenient = true\n            ignoreUnknownKeys = true\n        }\n    )\n    \n    val config = botVerifyInfo.decode(CustomConfig.serializer())\n}\n'))),(0,o.kt)(i.Z,{value:"YAML",mdxType:"TabItem"},(0,o.kt)("p",null,"\u5047\u8bbe\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title='custom.bot.yaml'",title:"'custom.bot.yaml'"},"component: 'example.foo'\nage: 14\nname: 'forliy'\n")),(0,o.kt)("p",null,"\u90a3\u4e48\u53c2\u8003\u5982\u4e0b\u89e3\u6790\u903b\u8f91\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title='Example.kt'",title:"'Example.kt'"},'/**\n * \u7528\u6765\u6620\u5c04\u53cd\u5e8f\u5217\u5316\u7ed3\u679c\u7684\u914d\u7f6e\u4fe1\u606f\u5b9e\u4f53\u7c7b\u3002\n */\n@Serializable\ndata class CustomConfig(val age: Int, val name: String)\n\nfun main() {\n    // \u5f97\u5230\u914d\u7f6e\u6587\u4ef6\u7684 resource\n    val configResource = Path("custom.bot.yaml").toResource()\n    \n    // \u63d0\u4f9b\u4e00\u4e2a\u914d\u7f6e\u4fe1\u606f\u89e3\u7801\u5668\u5e76\u6784\u5efa\u4e3a BotVerifyInfo\n    // \u8fd9\u91cc\u9009\u62e9\u7684\u662f\u901a\u8fc7 \u6807\u51c6\u89e3\u7801\u5668\u5de5\u5382 \u4e2d\u7684 Yaml \u683c\u5f0f\u7684\u89e3\u7801\u5668\u5de5\u5382\u6765\u6784\u5efa\u4e00\u4e2a Yaml \u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6\u89e3\u7801\u5668\u3002\n    val botVerifyInfo = configResource.toBotVerifyInfo(\n        StandardBotVerifyInfoDecoderFactory.Yaml.create {\n            // config...\n        }\n    )\n    \n    val config = botVerifyInfo.decode(CustomConfig.serializer())\n}\n'))),(0,o.kt)(i.Z,{value:"Properties",mdxType:"TabItem"},(0,o.kt)("p",null,"\u5047\u8bbe\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties",metastring:"title='custom.bot.properties'",title:"'custom.bot.properties'"},"component=example.foo\nage=14\nname=forliy\n")),(0,o.kt)("p",null,"\u90a3\u4e48\u53c2\u8003\u5982\u4e0b\u89e3\u6790\u903b\u8f91\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title='Example.kt'",title:"'Example.kt'"},'/**\n * \u7528\u6765\u6620\u5c04\u53cd\u5e8f\u5217\u5316\u7ed3\u679c\u7684\u914d\u7f6e\u4fe1\u606f\u5b9e\u4f53\u7c7b\u3002\n */\n@Serializable\ndata class CustomConfig(val age: Int, val name: String)\n\nfun main() {\n    // \u5f97\u5230\u914d\u7f6e\u6587\u4ef6\u7684 resource\n    val configResource = Path("custom.bot.properties").toResource()\n    \n    // \u63d0\u4f9b\u4e00\u4e2a\u914d\u7f6e\u4fe1\u606f\u89e3\u7801\u5668\u5e76\u6784\u5efa\u4e3a BotVerifyInfo\n    // \u8fd9\u91cc\u9009\u62e9\u7684\u662f\u901a\u8fc7 \u6807\u51c6\u89e3\u7801\u5668\u5de5\u5382 \u4e2d\u7684 Properties \u683c\u5f0f\u7684\u89e3\u7801\u5668\u5de5\u5382\u6765\u6784\u5efa\u4e00\u4e2a Properties \u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6\u89e3\u7801\u5668\u3002\n    val botVerifyInfo = configResource.toBotVerifyInfo(\n        StandardBotVerifyInfoDecoderFactory.Properties.create {\n            // config...\n        }\n    )\n    \n    val config = botVerifyInfo.decode(CustomConfig.serializer())\n}\n')))))}d.isMDXComponent=!0},1748:(e,t,n)=>{var a={"./locale":9234,"./locale.js":9234};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=1748},4786:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/idea-json-file-config-856b613c445472b3b3116c7016ab93f2.png"},8209:(e,t,n)=>{"use strict";n.d(t,{G:()=>i});var a=n(7294),o=n(1304);const r="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return a.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const n=(0,a.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[l,s]=(0,a.useState)(!1),m=(0,a.useMemo)((()=>function(e,t){let n=e.getAttribute("data-theme")??r;n!==r&&"dark"!==n&&(n=r);const a=n===r?"default":"dark";return t?.theme?.[n]??t?.mermaid?.theme??a}(i,n)),[n,l]);return(0,a.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){s((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,a.useEffect)((()=>{n&&(n.mermaid?o.Z.initialize({startOnLoad:!0,...n.mermaid,theme:m}):o.Z.initialize({startOnLoad:!0,theme:m}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),o.Z.contentLoaded())}),[n,m]),(0,a.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(o.Z.contentLoaded,0)}),[e]),a.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);