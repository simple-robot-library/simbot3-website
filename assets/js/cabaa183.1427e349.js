"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[6430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,b=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(b,i(i({ref:t},m),{},{components:n})):r.createElement(b,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),o=n(6010),i=n(2389),l=n(7392),p=n(7094),s=n(2466);const m="tabList__CuJ",c="tabItem_LNqP";function u(e){var t,n;const{lazy:i,block:u,defaultValue:d,values:b,groupId:g,className:v}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=b?b:k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const S=null===d?d:null!=(t=null!=d?d:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==S&&!f.some((e=>e.value===S)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+S+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:h}=(0,p.U)(),[x,B]=(0,a.useState)(S),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=g){const e=N[g];null!=e&&e!==x&&f.some((t=>t.value===e))&&B(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),r=f[n].value;r!==x&&(E(t),B(r),null!=g&&h(g,String(r)))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=T.indexOf(e.currentTarget)+1;n=null!=(r=T[t])?r:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},v)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:w,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},1699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var r=n(7462),a=n(7294),o=n(3905),i=n(9775),l=n(5488),p=n(5162),s=n(814);function m(e){let{version:t}=e;return a.createElement(l.Z,{groupId:"use-dependency"},a.createElement(p.Z,{value:"Maven",label:"Maven",default:!0},a.createElement(s.Z,{language:"xml"},function(e){return"\x3c!-- Spring Boot \u76f8\u5173\u3002\u6b64\u5904\u9009\u62e9\u4f7f\u7528parent\u5bf9Spring\u8fdb\u884c\u7248\u672c\u63a7\u5236 --\x3e\n<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    \x3c!-- Spring Boot \u7248\u672c --\x3e\n    <version>2.7.0</version>\n    <relativePath/> \x3c!-- lookup parent from repository --\x3e\n  </parent>\n\n<dependencies>\n    \x3c!-- \u5f15\u5165\u4f60\u6240\u9700\u8981\u7684Spring Boot\u4f9d\u8d56\u3002\u8fd9\u91cc\u5047\u8bbe\u4f60\u9700\u8981\u4f7f\u7528 web \u76f8\u5173\u529f\u80fd --\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    \n    \x3c!-- simbot Spring Boot Starter --\x3e\n    <dependency>\n        <groupId>love.forte.simbot.boot</groupId>\n        <artifactId>simboot-core-spring-boot-starter</artifactId>\n        <version>"+e.simbot.version+"</version>\n    </dependency>\n    \x3c!-- mirai\u7ec4\u4ef6 --\x3e\n    <dependency>\n        <groupId>love.forte.simbot.component</groupId>\n        <artifactId>simbot-component-mirai-boot</artifactId>\n        <version>"+e.simbot.component.mirai+"</version>\n    </dependency>\n    \n    \x3c!-- \u6216\u8bb8\u8fd8\u9700\u8981\u5176\u4ed6\u4f9d\u8d56...? --\x3e\n    \n</dependencies>\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-maven-plugin</artifactId>\n      </plugin>\n    </plugins>\n  </build>"}(t))),a.createElement(p.Z,{value:"Gradle Kotlin DSL",label:"Gradle Kotlin DSL"},a.createElement(s.Z,{language:"kotlin"},function(e){return'plugins {\n  id("org.springframework.boot") version "2.7.0" // Spring Boot\n  id("io.spring.dependency-management") version "1.0.11.RELEASE"\n  `java`\n}\n\ngroup = "..."\nversion = "..."\n\nrepositories {\n  mavenCentral()\n}\n\n// \u4f7f\u7528\u4f60\u6240\u9700\u8981\u7684Spring Boot\u4f9d\u8d56\u3002\u8fd9\u91cc\u5047\u8bbe\u4f60\u9700\u8981\u4f7f\u7528web\u76f8\u5173\u5185\u5bb9\u3002\nimplementation("org.springframework.boot:spring-boot-starter-web")\n\n// simbot Spring Boot Starter\nimplementation("love.forte.simbot.boot:simboot-core-spring-boot-starter:'+e.simbot.version+'")\n\n// mirai\u7ec4\u4ef6\nimplementation("love.forte.simbot.component:simbot-component-mirai-boot:'+e.simbot.component.mirai+'")'}(t))),a.createElement(p.Z,{value:"Gradle Groovy",label:"Gradle Groovy"},a.createElement(s.Z,{language:"groovy"},function(e){return"plugins {\n  id 'org.springframework.boot' version '2.7.0' // Spring Boot\n  id 'io.spring.dependency-management' version '1.0.11.RELEASE'\n  id 'java'\n}\n\ngroup = '...'\nversion = '...'\n\nrepositories {\n  mavenCentral()\n}\n\n// \u4f7f\u7528\u4f60\u6240\u9700\u8981\u7684Spring Boot\u4f9d\u8d56\u3002\u8fd9\u91cc\u5047\u8bbe\u4f60\u9700\u8981\u4f7f\u7528web\u76f8\u5173\u5185\u5bb9\u3002\nimplementation 'org.springframework.boot:spring-boot-starter-web'\n\n// simbot Spring Boot Starter\nimplementation 'love.forte.simbot.boot:simboot-core-spring-boot-starter:"+e.simbot.version+"'\n\n// mirai\u7ec4\u4ef6\nimplementation 'love.forte.simbot.component:simbot-component-mirai-boot:"+e.simbot.component.mirai+"'"}(t))))}const c={sidebar_position:3,tags:["\u5feb\u901f\u5f00\u59cb"],title:"Spring Boot Starter"},u=void 0,d={unversionedId:"quick-start/spring-boot-starter",id:"quick-start/spring-boot-starter",title:"Spring Boot Starter",description:"\u6b64\u7ae0\u8282\u6f14\u793asimbot\u4ee5 Spring Boot Starter \u7684\u5f62\u5f0f\u6574\u5408 spring",source:"@site/docs/quick-start/spring-boot-starter.md",sourceDirName:"quick-start",slug:"/quick-start/spring-boot-starter",permalink:"/docs/quick-start/spring-boot-starter",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/quick-start/spring-boot-starter.md",tags:[{label:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/tags/\u5feb\u901f\u5f00\u59cb"}],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1665991410,formattedLastUpdatedAt:"Oct 17, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["\u5feb\u901f\u5f00\u59cb"],title:"Spring Boot Starter"},sidebar:"docs",previous:{title:"Boot",permalink:"/docs/quick-start/Boot"},next:{title:"\u6a21\u5757\u6982\u8ff0",permalink:"/docs/overviews/module-overview/"}},b={},g=[{value:"\u542f\u52a8\u7c7b",id:"\u542f\u52a8\u7c7b",level:2},{value:"\u4f9d\u8d56\u6ce8\u5165",id:"\u4f9d\u8d56\u6ce8\u5165",level:2},{value:"\u76d1\u542c\u51fd\u6570",id:"\u76d1\u542c\u51fd\u6570",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5176\u4ed6..?",id:"\u5176\u4ed6",level:2},{value:"BOT\u914d\u7f6e",id:"bot\u914d\u7f6e",level:2},{value:"\u6253\u5305",id:"\u6253\u5305",level:2}],v={toc:g};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6b64\u7ae0\u8282\u6f14\u793asimbot\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u7684\u5f62\u5f0f\u6574\u5408 ",(0,o.kt)("a",{parentName:"p",href:"http://spring.io/"},(0,o.kt)("inlineCode",{parentName:"a"},"spring")),"\n\u3002\u6709\u5173\u76f8\u5173\u6a21\u5757\u7684\u8bf4\u660e\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"../overviews/module-overview/spring-boot-starter"},"Simple Robot: Spring Boot Starter \u6a21\u5757\u6982\u8ff0")),(0,o.kt)("admonition",{title:"\u5047\u8bbe",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u4e0b\u6587\u5c06\u4f1a ",(0,o.kt)("strong",{parentName:"p"},"\u5047\u8bbe")," \u4f60\u60f3\u8981\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"../component-overview/mirai"},(0,o.kt)("strong",{parentName:"a"},"mirai\u7ec4\u4ef6")),"\u3002")),(0,o.kt)("h1",{id:"\u4f7f\u7528\u4f9d\u8d56"},"\u4f7f\u7528\u4f9d\u8d56"),(0,o.kt)(m,{version:i,mdxType:"QuickStartSpringBootStarterCodes"}),(0,o.kt)("admonition",{title:"\u5f15\u7528Spring Boot",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"simbot\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u6a21\u5757\u4e0d\u4f1a\u4e3b\u52a8\u4f20\u9012\u4efb\u4f55\u4e0e spring \u76f8\u5173\u7684\u4f9d\u8d56\uff0c\u56e0\u6b64\u4f60\u5fc5\u987b\u4e3b\u52a8\u989d\u5916\u7684\u5f15\u5165\u5176\u4ed6\u4efb\u610f\u4f60\u6240\u9700\u7684 spring \u4f9d\u8d56, \u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"spring-web"),"\u3002")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u6ce8\u610f\u5230\uff0csimbot \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u9664\u4e86\u6838\u5fc3\u4f9d\u8d56\u7684\u5750\u6807\u4e0d\u540c\u4ee5\u5916\uff0c\u7ec4\u4ef6\u7684\u4f9d\u8d56\u914d\u7f6e\u4e0e ",(0,o.kt)("a",{parentName:"p",href:"Boot"},(0,o.kt)("strong",{parentName:"a"},"Boot"))," \u6a21\u5757\u7684\u914d\u7f6e\u57fa\u672c\u4e00\u81f4\u3002")),(0,o.kt)("h1",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("h2",{id:"\u542f\u52a8\u7c7b"},"\u542f\u52a8\u7c7b"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u7f16\u5199\u4e00\u4e2a Spring Boot \u9879\u76ee\u7684\u5165\u53e3\u7c7b\u3002\u5728 Spring Boot \u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u6807\u8bb0\u4e00\u4e2a\u6ce8\u89e3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"@EnableSimbot"))," \u6765\u5f00\u542fsimbot\u7684\u4f7f\u7528\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u4f7f\u7528\u7684\u6ce8\u89e3\u4e0e ",(0,o.kt)("a",{parentName:"p",href:"Boot"},(0,o.kt)("strong",{parentName:"a"},"Boot"))," \u6a21\u5757\u4e2d\u7684\u5dee\u5f02\u3002")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title='example/Main.kt'",title:"'example/Main.kt'"},"@EnableSimbot\n@SpringBootApplication\nclass Main\n\nfun main(args: Array<String>) {\n    runApplication<Main>(*args)\n}\n"))),(0,o.kt)(p.Z,{value:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='example/Main.java'",title:"'example/Main.java'"},"@EnableSimbot\n@SpringBootApplication\npublic class Main {\n    public static void main(String[] args) {\n        SpringApplication.run(Main.class, args);\n    }\n}\n")))),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u4f60\u7684\u9879\u76ee\u4e2d\u6ca1\u6709\u4ec0\u4e48\u80fd\u591f\u4fdd\u6301\u9879\u76ee\u6301\u7eed\u8fd0\u884c\u7684\u7ec4\u4ef6\u7684\u8bdd\uff08\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"spring-web")," \uff09\uff0c \u90a3\u4e48\u9879\u76ee\u4f1a\u5728\u542f\u52a8\u540e\u505c\u6b62\u3002\n\u5982\u679c\u60f3\u8981\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"SpringContext")," \u4e2d\u5f97\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," \u5e76\u6267\u884c\u5b83\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," \u76f8\u5173\u65b9\u6cd5\u3002")),(0,o.kt)("h2",{id:"\u4f9d\u8d56\u6ce8\u5165"},"\u4f9d\u8d56\u6ce8\u5165"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u6a21\u5757\u4e0b\uff0c\u4f9d\u8d56\u6ce8\u5165\u529f\u80fd\u76f4\u63a5\u4f9d\u8d56\u4e0espring\u81ea\u8eab\u3002\u56e0\u6b64\uff0c\u4f60\u5e94\u5f53\u76f4\u63a5\u4f7f\u7528spring\u7684\u76f8\u5173\u6ce8\u89e3\u3002"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title='example/listener/BarListener.kt'",title:"'example/listener/BarListener.kt'"},"@Component\nopen class Foo\n\n@Service\nopen class BarListener(val foo: Foo) {\n   \n   @Listener\n   suspend fun EventProcessingContext.listen(event: TarEvent) {\n      // ...\n   }\n}\n"))),(0,o.kt)(p.Z,{value:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='example/listener/Foo.java'",title:"'example/listener/Foo.java'"},"@Component\npublic class Foo {\n    // ...\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='example/listener/BarListener.java'",title:"'example/listener/BarListener.java'"},"@Service\npublic class BarListener {\n  private final Foo foo;\n   \n  public BarListener(Foo foo) {\n      this.foo = foo;\n  }\n  \n  @Listener\n  public void listen(EventProcessingContext context, TarEvent event) {\n      // ...\n  }\n}\n")))),(0,o.kt)("h2",{id:"\u76d1\u542c\u51fd\u6570"},"\u76d1\u542c\u51fd\u6570"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Boot")," \u6a21\u5757\u4e0b\uff0c\u6240\u6709\u7684\u76d1\u542c\u51fd\u6570\u90fd\u9700\u8981\u6807\u8bb0 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Listener")," \u3002\u8fd9\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u6a21\u5757\u4e0b\u4f9d\u65e7\u9002\u7528\u3002\n\u81f3\u4e8e\u4f60\u60f3\u8981\u76d1\u542c\u7684\u4e8b\u4ef6\uff0c\u5c06\u5176\u4f5c\u4e3a\u53c2\u6570\u5373\u53ef\uff0c\u4e0d\u518d\u9700\u8981\u989d\u5916\u7684\u6807\u8bb0\u3002\n\u4e0b\u9762\u5c06\u4f1a\u4ee5 \u76d1\u542c ",(0,o.kt)("inlineCode",{parentName:"p"},"FriendMessageEvent(\u597d\u53cb\u6d88\u606f\u4e8b\u4ef6)")," \u4f5c\u4e3a\u793a\u4f8b\u3002"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title='MyListener.kt'",title:"'MyListener.kt'"},"@Component\nclass MyListener {\n    \n    @Listener\n    suspend fun FriendMessageEvent.onEvent() {\n        // do..\n    }\n}\n"))),(0,o.kt)(p.Z,{value:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MyListener.java'",title:"'MyListener.java'"},"@Component\npublic class MyListener {\n\n    @Listener\n    public void onEvent(FriendMessageEvent event) {\n        // do...\n    }\n}\n")))),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot")," \u4e2d\uff0c\u6709\u5173\u4e8e\u4f9d\u8d56\u6ce8\u5165\u7b49\u76f8\u5173\u5185\u5bb9\uff0c\u5c31\u50cf\u666e\u901a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot")," \u9879\u76ee\u90a3\u6837\u5c31\u597d\u3002\n\u4e3e\u4e2a\u5176\u4ed6\u4f8b\u5b50\uff0c\u4f60\u53ef\u4ee5\u4e0e\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," \u914d\u5408\u4f7f\u7528\uff1a"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title='BarController.kt'",title:"'BarController.kt'"},'@RestController\nclass BarController {\n    \n    @GetMapping("/hello")\n    fun hello() = "Hello Simbot"\n    \n    \n    @Listener\n    suspend fun FriendMessageEvent.onEvent() {\n        // do..\n    }\n}\n'))),(0,o.kt)(p.Z,{value:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='BarController.java'",title:"'BarController.java'"},'@RestController\npublic class BarController {\n    \n    @GetMapping("/hello")\n    public String hello() {\n        return "Hello Simbot"\n    }\n\n    @Listener\n    public void onEvent(FriendMessageEvent event) {\n        // do...\n    }\n}\n')))),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u4e2d\u5b9e\u9645\u4e0a\u4e5f\u5b58\u5728\u76f8\u5173\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," \u4fe1\u606f\uff0c\u53ea\u4e0d\u8fc7\u8fd9\u6b21\u4e0d\u518d\u9700\u8981\u4f60\u6765\u5904\u7406\u8fd9\u4e9b\u5185\u5bb9\u4e86\u3002\u800c\u5bf9\u4e8e\u4e00\u4e9b\u53ef\u914d\u7f6e\u5185\u5bb9\uff0c\n\u4f60\u53ef\u4ee5\u4f7f\u7528spring\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u63d0\u4f9b\uff1a"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"YAML",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"simbot:\n  # \u662f\u5426\u5728bot\u6ce8\u518c\u5b8c\u6210\u540e\u81ea\u52a8\u542f\u52a8\u4ed6\u4eec\u3002\n  # \u9ed8\u8ba4\u4e3a true\n  auto-start-bots: true\n\n  # \u81ea\u5b9a\u4e49\u914d\u7f6ebot\u8d44\u6e90\u6587\u4ef6\u7684\u626b\u63cf\u8def\u5f84\u3002\n  # \u9ed8\u8ba4\u4e3a 'classpath:simbot-bots/*.bot*'\n  bot-configuration-resources:\n    - 'classpath:simbot-bots/*.bot*'\n   \n  # \u5982\u679c\u9700\u8981\uff0c\u6b64\u5904\u914d\u7f6e\u626b\u63cf\u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684 Binder Factory\u3002\n  # \u9ed8\u8ba4\u4e0d\u626b\u63cf    \n  top-level-binder-scan-package:\n    - 'example.binder.foo'\n    - 'example.binder.bar'\n\n  # \u5982\u679c\u9700\u8981\uff0c\u6b64\u5904\u914d\u7f6e\u626b\u63cf\u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684\u76d1\u542c\u51fd\u6570\u3002\n  # \u9ed8\u8ba4\u4e0d\u626b\u63cf    \n  top-level-listener-scan-package:\n    - 'example.listener.foo'\n    - 'example.listener.bar'\n\n"))),(0,o.kt)(p.Z,{value:"properties",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"# \u5982\u679c\u9700\u8981\uff0c\u6b64\u5904\u914d\u7f6e\u626b\u63cf\u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684\u76d1\u542c\u51fd\u6570\u3002\n# \u9ed8\u8ba4\u4e0d\u626b\u63cf\nsimbot.top-level-listener-scan-package[0]=example.listener.foo\nsimbot.top-level-listener-scan-package[1]=example.listener.bar\n\n# \u5982\u679c\u9700\u8981\uff0c\u6b64\u5904\u914d\u7f6e\u626b\u63cf\u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684 Binder Factory\u3002\n# \u9ed8\u8ba4\u4e0d\u626b\u63cf\nsimbot.top-level-binder-scan-package[0]=example.binder.foo\nsimbot.top-level-binder-scan-package[1]=example.binder.bar\n\n# \u662f\u5426\u5728bot\u6ce8\u518c\u5b8c\u6210\u540e\u81ea\u52a8\u542f\u52a8\u4ed6\u4eec\u3002\n# \u9ed8\u8ba4\u4e3atrue\nsimbot.auto-start-bots=true\n\n# \u81ea\u5b9a\u4e49\u914d\u7f6ebot\u8d44\u6e90\u6587\u4ef6\u7684\u626b\u63cf\u8def\u5f84\u3002\n# \u9ed8\u8ba4\u4e3a classpath:simbot-bots/*.bot*\nsimbot.bot-configuration-resources[0]=classpath:simbot-bots/*.bot*\n")))),(0,o.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6..?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u5185\u7684\u7edd\u5927\u591a\u6570\u5185\u5bb9\u4e0e ",(0,o.kt)("a",{parentName:"p",href:"Boot"},"Boot")," \u5185\u5bb9\u7c7b\u4f3c\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 Boot \u4e2d\u7684\u5185\u5bb9\u8fdb\u884c\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"bot\u914d\u7f6e"},"BOT\u914d\u7f6e"),(0,o.kt)("p",null,"\u53c2\u8003\u7ae0\u8282 ",(0,o.kt)("a",{parentName:"p",href:"../basic/bot-config"},"BOT\u914d\u7f6e")),(0,o.kt)("h2",{id:"\u6253\u5305"},"\u6253\u5305"),(0,o.kt)("p",null,"\u53c2\u8003\u7ae0\u8282 ",(0,o.kt)("a",{parentName:"p",href:"../basic/package"},"\u6253\u5305")))}k.isMDXComponent=!0},9775:e=>{e.exports=JSON.parse('{"simbot":{"version":"3.0.0.beta.2","snapshotVersion":"3.0.0.beta.2-SNAPSHOT","component":{"mirai":"3.0.0.0.beta-M3","tcg":"3.0.0.0.alpha.1","khl":"3.0.0.0.alpha.1","miraiSnap":"3.0.0.0.beta-M3-SNAPSHOT","tcgSnap":"3.0.0.0.alpha.1-SNAPSHOT","khlSnap":"3.0.0.0.alpha.1-SNAPSHOT"}}}')}}]);