"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[6430],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),o=n(7294),r=n(6010),i=n(2389),l=n(7392),p=n(7094),s=n(2466);const m="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n;const{lazy:i,block:c,defaultValue:u,values:b,groupId:g,className:k}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=b?b:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,l.l)(N,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const S=null===u?u:null!=(t=null!=u?u:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==S&&!N.some((e=>e.value===S)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+S+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:h,setTabGroupChoices:x}=(0,p.U)(),[y,B]=(0,o.useState)(S),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=g){const e=h[g];null!=e&&e!==y&&N.some((t=>t.value===e))&&B(e)}const w=e=>{const t=e.currentTarget,n=C.indexOf(t),a=N[n].value;a!==y&&(T(t),B(a),null!=g&&x(g,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var o;const t=C.indexOf(e.currentTarget)-1;n=null!=(o=C[t])?o:C[C.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},k)},N.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>C.push(e),onKeyDown:E,onFocus:w,onClick:w},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":y===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function u(e){const t=(0,i.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},1699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var a=n(7462),o=n(7294),r=n(3905),i=n(9775),l=n(5488),p=n(5162),s=n(814);function m(e){let{version:t}=e;return o.createElement(l.Z,{groupId:"use-dependency"},o.createElement(p.Z,{value:"Maven",label:"Maven",default:!0},o.createElement(s.Z,{language:"xml"},function(e){return"\x3c!-- Spring Boot \u76f8\u5173\u3002\u6b64\u5904\u9009\u62e9\u4f7f\u7528parent\u5bf9Spring\u8fdb\u884c\u7248\u672c\u63a7\u5236 --\x3e\n<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    \x3c!-- Spring Boot \u7248\u672c --\x3e\n    <version>2.6.6</version>\n    <relativePath/> \x3c!-- lookup parent from repository --\x3e\n  </parent>\n\n<dependencies>\n    \x3c!-- \u5f15\u5165\u4f60\u6240\u9700\u8981\u7684Spring Boot\u4f9d\u8d56\u3002\u8fd9\u91cc\u5047\u8bbe\u4f60\u9700\u8981\u4f7f\u7528 web \u76f8\u5173\u529f\u80fd --\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    \n    \x3c!-- simbot Spring Boot Starter --\x3e\n    <dependency>\n        <groupId>love.forte.simbot.boot</groupId>\n        <artifactId>simboot-core-spring-boot-starter</artifactId>\n        <version>"+e.simbot.version+"</version>\n    </dependency>\n    \x3c!-- \u5f00\u9ed1\u5566\u7ec4\u4ef6 --\x3e\n    <dependency>\n        <groupId>love.forte.simbot.component</groupId>\n        <artifactId>simbot-component-kaiheila-boot</artifactId>\n        <version>"+e.simbot.component.khl+"</version>\n    </dependency>\n    \x3c!-- mirai\u7ec4\u4ef6 --\x3e\n    <dependency>\n        <groupId>love.forte.simbot.component</groupId>\n        <artifactId>simbot-component-mirai-boot</artifactId>\n        <version>"+e.simbot.component.mirai+"</version>\n    </dependency>\n    \n    \x3c!-- \u6216\u8bb8\u8fd8\u9700\u8981\u5176\u4ed6\u4f9d\u8d56...? --\x3e\n    \n</dependencies>\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-maven-plugin</artifactId>\n      </plugin>\n    </plugins>\n  </build>"}(t))),o.createElement(p.Z,{value:"Gradle Kotlin DSL",label:"Gradle Kotlin DSL"},o.createElement(s.Z,{language:"kotlin"},function(e){return'plugins {\n  id("org.springframework.boot") version "2.6.6" // Spring Boot\n  id("io.spring.dependency-management") version "1.0.11.RELEASE"\n  `java`\n}\n\ngroup = "..."\nversion = "..."\n\nrepositories {\n  mavenCentral()\n}\n\n// \u4f7f\u7528\u4f60\u6240\u9700\u8981\u7684Spring Boot\u4f9d\u8d56\u3002\u8fd9\u91cc\u5047\u8bbe\u4f60\u9700\u8981\u4f7f\u7528web\u76f8\u5173\u5185\u5bb9\u3002\nimplementation("org.springframework.boot:spring-boot-starter-web")\n\n// simbot Spring Boot Starter\nimplementation("love.forte.simbot.boot:simboot-core-spring-boot-starter:'+e.simbot.version+'")\n\n// \u5f00\u9ed1\u5566\u7ec4\u4ef6\nimplementation("love.forte.simbot.component:simbot-component-kaiheila-boot:'+e.simbot.component.khl+'")\n\n// mirai\u7ec4\u4ef6\nimplementation("love.forte.simbot.component:simbot-component-mirai-boot:'+e.simbot.component.mirai+'")'}(t))),o.createElement(p.Z,{value:"Gradle Groovy",label:"Gradle Groovy"},o.createElement(s.Z,{language:"groovy"},function(e){return"plugins {\n  id 'org.springframework.boot' version '2.6.6' // Spring Boot\n  id 'io.spring.dependency-management' version '1.0.11.RELEASE'\n  id 'java'\n}\n\ngroup = '...'\nversion = '...'\n\nrepositories {\n  mavenCentral()\n}\n\n// \u4f7f\u7528\u4f60\u6240\u9700\u8981\u7684Spring Boot\u4f9d\u8d56\u3002\u8fd9\u91cc\u5047\u8bbe\u4f60\u9700\u8981\u4f7f\u7528web\u76f8\u5173\u5185\u5bb9\u3002\nimplementation 'org.springframework.boot:spring-boot-starter-web'\n\n// simbot Spring Boot Starter\nimplementation 'love.forte.simbot.boot:simboot-core-spring-boot-starter:"+e.simbot.version+"'\n\n// \u5f00\u9ed1\u5566\u7ec4\u4ef6\nimplementation 'love.forte.simbot.component:simbot-component-kaiheila-boot:"+e.simbot.component.khl+"'\n\n// mirai\u7ec4\u4ef6\nimplementation 'love.forte.simbot.component:simbot-component-mirai-boot:"+e.simbot.component.mirai+"'"}(t))))}const d={sidebar_position:3,tags:["\u5feb\u901f\u5f00\u59cb"],title:"Spring Boot Starter"},c=void 0,u={unversionedId:"quick-start/spring-boot-starter",id:"quick-start/spring-boot-starter",title:"Spring Boot Starter",description:"\u6b64\u7ae0\u8282\u6f14\u793asimbot\u4ee5 Spring Boot Starter \u7684\u5f62\u5f0f\u6574\u5408 spring",source:"@site/docs/quick-start/spring-boot-starter.md",sourceDirName:"quick-start",slug:"/quick-start/spring-boot-starter",permalink:"/docs/quick-start/spring-boot-starter",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/quick-start/spring-boot-starter.md",tags:[{label:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/tags/\u5feb\u901f\u5f00\u59cb"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["\u5feb\u901f\u5f00\u59cb"],title:"Spring Boot Starter"},sidebar:"myAutogeneratedSidebar",previous:{title:"Boot",permalink:"/docs/quick-start/Boot"},next:{title:"\u6a21\u5757\u6982\u8ff0",permalink:"/docs/overviews/module-overview/"}},b={},g=[{value:"\u542f\u52a8\u7c7b",id:"\u542f\u52a8\u7c7b",level:2},{value:"\u4f9d\u8d56\u6ce8\u5165",id:"\u4f9d\u8d56\u6ce8\u5165",level:2},{value:"\u76d1\u542c\u51fd\u6570",id:"\u76d1\u542c\u51fd\u6570",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5176\u4ed6..?",id:"\u5176\u4ed6",level:2},{value:"BOT\u914d\u7f6e",id:"bot\u914d\u7f6e",level:2},{value:"\u6253\u5305",id:"\u6253\u5305",level:2}],k={toc:g};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6b64\u7ae0\u8282\u6f14\u793asimbot\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u7684\u5f62\u5f0f\u6574\u5408 ",(0,r.kt)("a",{parentName:"p",href:"http://spring.io/"},(0,r.kt)("inlineCode",{parentName:"a"},"spring")),"\n\u3002\u6709\u5173\u76f8\u5173\u6a21\u5757\u7684\u8bf4\u660e\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"../overviews/module-overview/spring-boot-starter"},"Simple Robot: Spring Boot Starter \u6a21\u5757\u6982\u8ff0")),(0,r.kt)("admonition",{title:"\u5047\u8bbe",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0b\u6587\u5c06\u4f1a ",(0,r.kt)("strong",{parentName:"p"},"\u5047\u8bbe")," \u4f60\u60f3\u8981\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"../component-overview/kaiheila"},(0,r.kt)("strong",{parentName:"a"},"\u5f00\u9ed1\u5566\u7ec4\u4ef6"))," \u548c ",(0,r.kt)("a",{parentName:"p",href:"../component-overview/mirai"},(0,r.kt)("strong",{parentName:"a"},"mirai\u7ec4\u4ef6")),"\u3002")),(0,r.kt)("admonition",{title:"\u517c\u5bb9\u95ee\u9898",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5b9e\u9645\u4e0a ",(0,r.kt)("a",{parentName:"p",href:"../component-overview/kaiheila"},(0,r.kt)("strong",{parentName:"a"},"\u5f00\u9ed1\u5566\u7ec4\u4ef6"))," \u548c ",(0,r.kt)("a",{parentName:"p",href:"../component-overview/mirai"},(0,r.kt)("strong",{parentName:"a"},"mirai\u7ec4\u4ef6"))," \u5e76\u4e0d\u517c\u5bb9\u3002\u8bf4\u5177\u4f53\u70b9\uff0c",(0,r.kt)("strong",{parentName:"p"},"mirai\u7ec4\u4ef6"),"\n\u53ef\u80fd\u6682\u65f6\u65e0\u6cd5\u4e0e\u5176\u4ed6\u5927\u90e8\u5206\u7ec4\u4ef6\u517c\u5bb9\uff1a\u56e0\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"mirai")," \u4f7f\u7528\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://ktor.io/"},(0,r.kt)("strong",{parentName:"a"},"Ktor"))," \u7248\u672c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.x"),", \u800c\u5176\u4ed6\u5927\u90e8\u5206\u7ec4\u4ef6\u4f7f\u7528\u7684\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.x"),"\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\u4e0b\u6587\u4e2d\u7684\u7ec4\u5408\u4f7f\u7528\u4ec5\u4e3a\u7406\u60f3\u72b6\u6001\u5e76\u4ec5\u505a\u793a\u4f8b\u7528\u3002")),(0,r.kt)("admonition",{title:"\u7248\u672c\u8981\u6c42",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"simbot \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Boot")," \u6216\u8005\u8bf4\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Framework")," \u7248\u672c\u5b58\u5728\u4e00\u5b9a\u8981\u6c42\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"../overviews/module-overview/spring-boot-starter/version-requirements"},(0,r.kt)("strong",{parentName:"a"},"simbot \u4e2d\u7684 Spring Boot \u7248\u672c\u8981\u6c42"))," \u3002")),(0,r.kt)("h1",{id:"\u4f7f\u7528\u4f9d\u8d56"},"\u4f7f\u7528\u4f9d\u8d56"),(0,r.kt)(m,{version:i,mdxType:"QuickStartSpringBootStarterCodes"}),(0,r.kt)("admonition",{title:"\u5f15\u7528Spring Boot",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"simbot\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u6a21\u5757\u4e0d\u4f1a\u4e3b\u52a8\u4f20\u9012\u4efb\u4f55\u4e0e spring \u76f8\u5173\u7684\u4f9d\u8d56\uff0c\u56e0\u6b64\u4f60\u5fc5\u987b\u4e3b\u52a8\u989d\u5916\u7684\u5f15\u5165\u5176\u4ed6\u4efb\u610f\u4f60\u6240\u9700\u7684 spring \u4f9d\u8d56, \u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"spring-web"),"\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u6ce8\u610f\u5230\uff0csimbot \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u9664\u4e86\u6838\u5fc3\u4f9d\u8d56\u7684\u5750\u6807\u4e0d\u540c\u4ee5\u5916\uff0c\u7ec4\u4ef6\u7684\u4f9d\u8d56\u914d\u7f6e\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"Boot"},(0,r.kt)("strong",{parentName:"a"},"Boot"))," \u6a21\u5757\u7684\u914d\u7f6e\u57fa\u672c\u4e00\u81f4\u3002")),(0,r.kt)("h1",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("h2",{id:"\u542f\u52a8\u7c7b"},"\u542f\u52a8\u7c7b"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u7f16\u5199\u4e00\u4e2a Spring Boot \u9879\u76ee\u7684\u5165\u53e3\u7c7b\u3002\u5728 Spring Boot \u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u6807\u8bb0\u4e00\u4e2a\u6ce8\u89e3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@EnableSimbot"))," \u6765\u5f00\u542fsimbot\u7684\u4f7f\u7528\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u4f7f\u7528\u7684\u6ce8\u89e3\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"Boot"},(0,r.kt)("strong",{parentName:"a"},"Boot"))," \u6a21\u5757\u4e2d\u7684\u5dee\u5f02\u3002")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title='example/Main.kt'",title:"'example/Main.kt'"},"@EnableSimbot\n@SpringBootApplication\nclass Main\n\nfun main(args: Array<String>) {\n    runApplication<Main>(*args)\n}\n"))),(0,r.kt)(p.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='example/Main.java'",title:"'example/Main.java'"},"@EnableSimbot\n@SpringBootApplication\npublic class Main {\n    public static void main(String[] args) {\n        SpringApplication.run(Main.class, args);\n    }\n}\n")))),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u4f60\u7684\u9879\u76ee\u4e2d\u6ca1\u6709\u4ec0\u4e48\u80fd\u591f\u4fdd\u6301\u9879\u76ee\u6301\u7eed\u8fd0\u884c\u7684\u7ec4\u4ef6\u7684\u8bdd\uff08\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"spring-web")," \uff09\uff0c \u90a3\u4e48\u9879\u76ee\u4f1a\u5728\u542f\u52a8\u540e\u505c\u6b62\u3002\n\u5982\u679c\u60f3\u8981\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"SpringContext")," \u4e2d\u5f97\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," \u5e76\u6267\u884c\u5b83\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"join")," \u76f8\u5173\u65b9\u6cd5\u3002")),(0,r.kt)("h2",{id:"\u4f9d\u8d56\u6ce8\u5165"},"\u4f9d\u8d56\u6ce8\u5165"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u6a21\u5757\u4e0b\uff0c\u4f9d\u8d56\u6ce8\u5165\u529f\u80fd\u76f4\u63a5\u4f9d\u8d56\u4e0espring\u81ea\u8eab\u3002\u56e0\u6b64\uff0c\u4f60\u5e94\u5f53\u76f4\u63a5\u4f7f\u7528spring\u7684\u76f8\u5173\u6ce8\u89e3\u3002"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title='example/listener/BarListener.kt'",title:"'example/listener/BarListener.kt'"},"@Component\nopen class Foo\n\n@Service\nopen class BarListener(val foo: Foo) {\n   \n   @Listener\n   suspend fun EventProcessingContext.listen(event: TarEvent) {\n      // ...\n   }\n}\n"))),(0,r.kt)(p.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='example/listener/Foo.java'",title:"'example/listener/Foo.java'"},"@Component\npublic class Foo {\n    // ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='example/listener/BarListener.java'",title:"'example/listener/BarListener.java'"},"@Service\npublic class BarListener {\n  private final Foo foo;\n   \n  public BarListener(Foo foo) {\n      this.foo = foo;\n  }\n  \n  @Listener\n  public void listen(EventProcessingContext context, TarEvent event) {\n      // ...\n  }\n}\n")))),(0,r.kt)("h2",{id:"\u76d1\u542c\u51fd\u6570"},"\u76d1\u542c\u51fd\u6570"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Boot")," \u6a21\u5757\u4e0b\uff0c\u6240\u6709\u7684\u76d1\u542c\u51fd\u6570\u90fd\u9700\u8981\u6807\u8bb0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Listener")," \u3002\u8fd9\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u6a21\u5757\u4e0b\u4f9d\u65e7\u9002\u7528\u3002\n\u81f3\u4e8e\u4f60\u60f3\u8981\u76d1\u542c\u7684\u4e8b\u4ef6\uff0c\u5c06\u5176\u4f5c\u4e3a\u53c2\u6570\u5373\u53ef\uff0c\u4e0d\u518d\u9700\u8981\u989d\u5916\u7684\u6807\u8bb0\u3002\n\u4e0b\u9762\u5c06\u4f1a\u4ee5 \u76d1\u542c ",(0,r.kt)("inlineCode",{parentName:"p"},"FriendMessageEvent(\u597d\u53cb\u6d88\u606f\u4e8b\u4ef6)")," \u4f5c\u4e3a\u793a\u4f8b\u3002"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title='MyListener.kt'",title:"'MyListener.kt'"},"@Component\nclass MyListener {\n    \n    @Listener\n    suspend fun FriendMessageEvent.onEvent() {\n        // do..\n    }\n}\n"))),(0,r.kt)(p.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MyListener.java'",title:"'MyListener.java'"},"@Component\npublic class MyListener {\n\n    @Listener\n    public void onEvent(FriendMessageEvent event) {\n        // do...\n    }\n}\n")))),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Boot")," \u4e2d\uff0c\u6709\u5173\u4e8e\u4f9d\u8d56\u6ce8\u5165\u7b49\u76f8\u5173\u5185\u5bb9\uff0c\u5c31\u50cf\u666e\u901a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Boot")," \u9879\u76ee\u90a3\u6837\u5c31\u597d\u3002\n\u4e3e\u4e2a\u5176\u4ed6\u4f8b\u5b50\uff0c\u4f60\u53ef\u4ee5\u4e0e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Controller")," \u914d\u5408\u4f7f\u7528\uff1a"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title='BarController.kt'",title:"'BarController.kt'"},'@RestController\nclass BarController {\n    \n    @GetMapping("/hello")\n    fun hello() = "Hello Simbot"\n    \n    \n    @Listener\n    suspend fun FriendMessageEvent.onEvent() {\n        // do..\n    }\n}\n'))),(0,r.kt)(p.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='BarController.java'",title:"'BarController.java'"},'@RestController\npublic class BarController {\n    \n    @GetMapping("/hello")\n    public String hello() {\n        return "Hello Simbot"\n    }\n\n    @Listener\n    public void onEvent(FriendMessageEvent event) {\n        // do...\n    }\n}\n')))),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u4e2d\u5b9e\u9645\u4e0a\u4e5f\u5b58\u5728\u76f8\u5173\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," \u4fe1\u606f\uff0c\u53ea\u4e0d\u8fc7\u8fd9\u6b21\u4e0d\u518d\u9700\u8981\u4f60\u6765\u5904\u7406\u8fd9\u4e9b\u5185\u5bb9\u4e86\u3002\u800c\u5bf9\u4e8e\u4e00\u4e9b\u53ef\u914d\u7f6e\u5185\u5bb9\uff0c\n\u4f60\u53ef\u4ee5\u4f7f\u7528spring\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u63d0\u4f9b\uff1a"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"YAML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"simbot:\n  # \u662f\u5426\u5728bot\u6ce8\u518c\u5b8c\u6210\u540e\u81ea\u52a8\u542f\u52a8\u4ed6\u4eec\u3002\n  # \u9ed8\u8ba4\u4e3atrue\n  auto-start-bots: true\n\n  # \u81ea\u5b9a\u4e49\u914d\u7f6ebot\u8d44\u6e90\u6587\u4ef6\u7684\u626b\u63cf\u8def\u5f84\u3002\n  # \u9ed8\u8ba4\u4e3a simbot-bots/*.bot*\n  bot-configuration-resources:\n    - classpath:bots/bot-*.bot\n   \n  # \u5982\u679c\u9700\u8981\uff0c\u6b64\u5904\u914d\u7f6e\u626b\u63cf\u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684 Binder Factory\u3002\n  # \u9ed8\u8ba4\u4e0d\u626b\u63cf    \n  top-level-binder-scan-package:\n    - example.binder.foo\n    - example.binder.bar\n\n  # \u5982\u679c\u9700\u8981\uff0c\u6b64\u5904\u914d\u7f6e\u626b\u63cf\u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684\u76d1\u542c\u51fd\u6570\u3002\n  # \u9ed8\u8ba4\u4e0d\u626b\u63cf    \n  top-level-listener-scan-package:\n    - example.listener.foo\n    - example.listener.bar\n\n"))),(0,r.kt)(p.Z,{value:"properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# \u5982\u679c\u9700\u8981\uff0c\u6b64\u5904\u914d\u7f6e\u626b\u63cf\u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684\u76d1\u542c\u51fd\u6570\u3002\n# \u9ed8\u8ba4\u4e0d\u626b\u63cf\nsimbot.top-level-listener-scan-package[0]=example.listener.foo\nsimbot.top-level-listener-scan-package[1]=example.listener.bar\n\n# \u5982\u679c\u9700\u8981\uff0c\u6b64\u5904\u914d\u7f6e\u626b\u63cf\u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684 Binder Factory\u3002\n# \u9ed8\u8ba4\u4e0d\u626b\u63cf\nsimbot.top-level-binder-scan-package[0]=example.binder.foo\nsimbot.top-level-binder-scan-package[1]=example.binder.bar\n\n# \u662f\u5426\u5728bot\u6ce8\u518c\u5b8c\u6210\u540e\u81ea\u52a8\u542f\u52a8\u4ed6\u4eec\u3002\n# \u9ed8\u8ba4\u4e3atrue\nsimbot.auto-start-bots=true\n\n# \u81ea\u5b9a\u4e49\u914d\u7f6ebot\u8d44\u6e90\u6587\u4ef6\u7684\u626b\u63cf\u8def\u5f84\u3002\n# \u9ed8\u8ba4\u4e3a simbot-bots/*.bot*\nsimbot.bot-configuration-resources[0]=classpath:bots/bot-*.bot\n")))),(0,r.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6..?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u5185\u7684\u7edd\u5927\u591a\u6570\u5185\u5bb9\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"Boot"},"Boot")," \u5185\u5bb9\u7c7b\u4f3c\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 Boot \u4e2d\u7684\u5185\u5bb9\u8fdb\u884c\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"bot\u914d\u7f6e"},"BOT\u914d\u7f6e"),(0,r.kt)("p",null,"\u53c2\u8003\u7ae0\u8282 ",(0,r.kt)("a",{parentName:"p",href:"../basic/bot-config"},"BOT\u914d\u7f6e")),(0,r.kt)("h2",{id:"\u6253\u5305"},"\u6253\u5305"),(0,r.kt)("p",null,"\u53c2\u8003\u7ae0\u8282 ",(0,r.kt)("a",{parentName:"p",href:"../basic/package"},"\u6253\u5305")))}v.isMDXComponent=!0},9775:e=>{e.exports=JSON.parse('{"simbot":{"version":"3.0.0.preview.11.1","snapshotVersion":"3.0.0.preview.11.1-SNAPSHOT","component":{"mirai":"3.0.0.0.preview.6.0","tcg":"3.0.0.0.preview.6.0","khl":"3.0.0.0.preview.7.0","miraiSnap":"3.0.0.0.preview.6.0-SNAPSHOT","tcgSnap":"3.0.0.0.preview.6.0-SNAPSHOT","khlSnap":"3.0.0.0.preview.7.0-SNAPSHOT"}}}')}}]);