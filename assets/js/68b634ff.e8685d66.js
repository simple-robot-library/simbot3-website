"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[883],{13107:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>b});var r=t(85893),i=t(11151),a=t(74866),o=t(85162),s=t(42965),l=t(9286);const c={title:"Spring Boot"},d=void 0,u={id:"spring-boot/index",title:"Spring Boot",description:"simbot3 \u63d0\u4f9b\u4e86 starter \u6765\u652f\u6301\u5feb\u901f\u4e0eSpringBoot\u76f8\u7ed3\u5408\u3002",source:"@site/docs/spring-boot/index.md",sourceDirName:"spring-boot",slug:"/spring-boot/",permalink:"/simbot3-website/docs/spring-boot/",draft:!1,unlisted:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/docs/spring-boot/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1705900478,formattedLastUpdatedAt:"2024\u5e741\u670822\u65e5",frontMatter:{title:"Spring Boot"},sidebar:"docs",previous:{title:"\u6253\u5305",permalink:"/simbot3-website/docs/basic/package/"},next:{title:"\u7ec4\u4ef6\u6982\u89c8",permalink:"/simbot3-website/docs/component-overview/"}},p={},b=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"BOT\u914d\u7f6e",id:"bot\u914d\u7f6e",level:3},{value:"\u4e8b\u4ef6\u76d1\u542c",id:"\u4e8b\u4ef6\u76d1\u542c",level:3},{value:"\u5b9e\u7528\u7c7b\u578b",id:"\u5b9e\u7528\u7c7b\u578b",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"simbot3 \u63d0\u4f9b\u4e86 starter \u6765\u652f\u6301\u5feb\u901f\u4e0eSpringBoot\u76f8\u7ed3\u5408\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u5f15\u5165\u4f9d\u8d56\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u4e86 ",(0,r.jsx)(n.code,{children:"simbot-core"})," \u6216 ",(0,r.jsx)(n.code,{children:"simboot-core"})," \uff0c",(0,r.jsx)(n.strong,{children:"\u66ff\u6362"}),"\u5373\u53ef\uff0c\nstarter \u4e2d\u5305\u542b\u4e86\u5bf9 ",(0,r.jsx)(n.code,{children:"simbot-core"})," \u7684\u5f15\u7528\u3002"]}),"\n","\n","\n",(0,r.jsxs)(a.Z,{groupId:"use-dependency",children:[(0,r.jsx)(o.Z,{value:"Maven",attributes:{"data-value":"Maven"},children:(0,r.jsx)(l.Z,{language:"xml",children:`\n<dependency>\n<groupId>love.forte.simbot.boot</groupId>\n<artifactId>simboot-core-spring-boot-starter</artifactId>\n<version>${s.version}</version>\n</dependency>\n`.trim()})}),(0,r.jsx)(o.Z,{value:"Gradle Kotlin DSL",attributes:{"data-value":"Kts"},children:(0,r.jsx)(l.Z,{language:"kotlin",children:`\nimplementation("love.forte.simbot.boot:simboot-core-spring-boot-starter:${s.version}")\n`.trim()})}),(0,r.jsx)(o.Z,{value:"Gradle Groovy",attributes:{"data-value":"Gradle"},children:(0,r.jsx)(l.Z,{language:"groovy",children:`\nimplementation 'love.forte.simbot.boot:simboot-core-spring-boot-starter:${s.version}'\n`.trim()})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\u4e66\u5199\u4e00\u4e2a\u6807\u51c6\u7684 Spring Boot \u5e94\u7528\u5165\u53e3\uff0c\u5e76\u6dfb\u52a0\u542f\u52a8\u6ce8\u89e3 ",(0,r.jsx)(n.code,{children:"@EnableSimbot"}),":"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"code",children:[(0,r.jsx)(o.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:"title='example/Main.kt'",children:"// highlight-next-line\n@EnableSimbot // \ud83d\udc48\n@SpringBootApplication\nopen class Main\n\nfun main(args: Array<String>) {\n    runApplication<Main>(*args)\n}\n"})})}),(0,r.jsx)(o.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:"title='example/Main.java'",children:"// highlight-next-line\n@EnableSimbot // \ud83d\udc48\n@SpringBootApplication\npublic class Main {\n    public static void main(String[] args) {\n        SpringApplication.run(Main.class, args);\n    }\n}\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"starter \u4e2d\u63d0\u4f9b\u4e86\u4e00\u4e9b\u53ef\u7528\u7684 Spring Boot \u914d\u7f6e\u9879:"}),"\n",(0,r.jsxs)(a.Z,{groupId:"spring-config",children:[(0,r.jsx)(o.Z,{value:"YAML",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"title='application.yml'",children:"simbot:\n  # \u662f\u5426\u5728bot\u6ce8\u518c\u5b8c\u6210\u540e\u81ea\u52a8\u542f\u52a8\u4ed6\u4eec\u3002\n  # \u9ed8\u8ba4\u4e3a true\n  auto-start-bots: true\n\n  # \u81ea\u5b9a\u4e49\u914d\u7f6ebot\u8d44\u6e90\u6587\u4ef6\u7684\u626b\u63cf\u8def\u5f84\u3002\n  # \u9ed8\u8ba4\u4e3a 'classpath:simbot-bots/*.bot*'\n  bot-configuration-resources:\n    - 'classpath:simbot-bots/*.bot*'\n\n  # \u5982\u679c\u9700\u8981\uff0c\u6b64\u5904\u914d\u7f6e\u626b\u63cf\u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684 Binder Factory\u3002\n  # \u9ed8\u8ba4\u4e0d\u626b\u63cf    \n  # top-level-binder-scan-package:\n  #   - 'example.binder.foo'\n  #   - 'example.binder.bar'\n\n  # \u5982\u679c\u9700\u8981\uff0c\u6b64\u5904\u914d\u7f6e\u626b\u63cf\u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684\u76d1\u542c\u51fd\u6570\u3002\n  # \u9ed8\u8ba4\u4e0d\u626b\u63cf    \n  # top-level-listener-scan-package:\n  #   - 'example.listener.foo'\n  #   - 'example.listener.bar'\n"})})}),(0,r.jsx)(o.Z,{value:"properties",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",metastring:"title='application.properties'",children:"# \u662f\u5426\u5728bot\u6ce8\u518c\u5b8c\u6210\u540e\u81ea\u52a8\u542f\u52a8\u4ed6\u4eec\u3002\n# \u9ed8\u8ba4\u4e3atrue\nsimbot.auto-start-bots=true\n\n# \u81ea\u5b9a\u4e49\u914d\u7f6ebot\u8d44\u6e90\u6587\u4ef6\u7684\u626b\u63cf\u8def\u5f84\u3002\n# \u9ed8\u8ba4\u4e3a classpath:simbot-bots/*.bot*\nsimbot.bot-configuration-resources[0]=classpath:simbot-bots/*.bot*\n\n# \u5982\u679c\u9700\u8981\uff0c\u6b64\u5904\u914d\u7f6e\u626b\u63cf\u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684\u76d1\u542c\u51fd\u6570\u3002\n# \u9ed8\u8ba4\u4e0d\u626b\u63cf\n# simbot.top-level-listener-scan-package[0]=example.listener.foo\n# simbot.top-level-listener-scan-package[1]=example.listener.bar\n\n# \u5982\u679c\u9700\u8981\uff0c\u6b64\u5904\u914d\u7f6e\u626b\u63cf\u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684 Binder Factory\u3002\n# \u9ed8\u8ba4\u4e0d\u626b\u63cf\n# simbot.top-level-binder-scan-package[0]=example.binder.foo\n# simbot.top-level-binder-scan-package[1]=example.binder.bar\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"bot\u914d\u7f6e",children:"BOT\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u5e38\u60c5\u51b5\u4e0b bot \u4fe1\u606f\u7684\u914d\u7f6e\u4e5f\u662f\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u5b8c\u6210\u7684\u3002\n\u4ee5\u4e0a\u8ff0\u914d\u7f6e\u6216\u9ed8\u8ba4\u914d\u7f6e\u4e3a\u4f8b\uff0cbot \u914d\u7f6e\u6587\u4ef6\u5e94\u5f53\u5728\u8d44\u6e90\u76ee\u5f55\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"simbot-bots/*.bot*"})," \u4e0b\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5 IDEA \u4e2d ",(0,r.jsx)(n.code,{children:"Gradle"})," \u9879\u76ee\u7ed3\u6784\u4e3a\u4f8b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"simply-robot\n\u2514\u2500 src\n    \u2514\u2500 main\n        \u251c\u2500 java\n        \u251c\u2500 kotlin\n        \u2514\u2500 resources\n              \u2514\u2500 simbot-bots\n                    // highlight-start\n                    \u251c\u2500 xxx.bot.json <-- \u4f60\u7684bot\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u662f\u591a\u4e2a\n                    \u2514\u2500 yyy.bot.json <-- \u4f60\u7684bot\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u662f\u591a\u4e2a\n                    // highlight-end\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u540c\u7684\u7ec4\u4ef6\u6240\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u662f\u4e0d\u540c\u7684\uff0c\u8fd9\u91cc\u7ed9\u51fa\u5404\u7ec4\u4ef6\u9488\u5bf9\u914d\u7f6e\u6587\u4ef6\u7684\u8bf4\u660e\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u7ec4\u4ef6"}),(0,r.jsx)(n.th,{children:"\u76f8\u5173\u6587\u6863\u94fe\u63a5"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"QQ\u9891\u9053\u7ec4\u4ef6"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"http://component-qqguild.simbot.forte.love/old-bot-config.html",children:"\u624b\u518c\uff1aBOT\u914d\u7f6e\u6587\u4ef6"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"KOOK\u7ec4\u4ef6"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://simple-robot.github.io/simbot-component-kook/docs/bot-config/",children:"\u624b\u518c\uff1aBOT\u914d\u7f6e\u6587\u4ef6"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"mirai\u7ec4\u4ef6"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://component-mirai.simbot.forte.love/docs/bot-config",children:"\u624b\u518c\uff1aBOT\u914d\u7f6e\u6587\u4ef6"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u4e8b\u4ef6\u76d1\u542c",children:"\u4e8b\u4ef6\u76d1\u542c"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 boot \u6a21\u5757\u6216\u672c\u7ae0\u6240\u8ff0\u7684 starter \u6a21\u5757\u4e0b\uff0c\u5728\u4e00\u4e2a\u88ab Spring \u6240\u7ba1\u7406\u7684 bean \u4e2d\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"@Listener"})," \u6ce8\u89e3\u6765\u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"code",children:[(0,r.jsx)(o.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:"title='MyListener.kt'",children:"@Component\nclass MyListener {\n    // highlight-next-line\n    @Listener\n    suspend fun onEvent(event: FriendMessageEvent) {\n        // \u5904\u7406\u4e8b\u4ef6...\n    }\n}\n"})})}),(0,r.jsx)(o.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:"title='MyListener.java'",children:"@Component\npublic class MyListener {\n    // highlight-next-line\n    @Listener\n    public void onEvent(FriendMessageEvent event) {\n        // \u5904\u7406\u4e8b\u4ef6...\n    }\n}\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{title:"\u66f4\u8be6\u7ec6",type:"tip",children:(0,r.jsxs)(n.p,{children:["\u6709\u5173\u6ce8\u89e3\u4e8b\u4ef6\u76d1\u542c\u7684\u66f4\u591a\u4fe1\u606f\u53ef\u53c2\u8003\u6587\u6863\u7ae0\u8282 ",(0,r.jsx)(n.a,{href:"../../docs/basic/event-listening#%E6%B3%A8%E8%A7%A3%E7%9B%91%E5%90%AC",children:"\u4e8b\u4ef6\u76d1\u542c"}),"\n\u4e2d\u6709\u5173 ",(0,r.jsx)(n.strong,{children:"\u6ce8\u89e3\u76d1\u542c"})," \u7684\u76f8\u5173\u5185\u5bb9\u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u5b9e\u7528\u7c7b\u578b",children:"\u5b9e\u7528\u7c7b\u578b"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4f7f\u7528 starter \u65f6\uff0c\u4f1a\u6709\u4e00\u4e9b\u53ef\u80fd\u5bf9\u4f60\u6709\u7528\u7684\u7c7b\u578b\u88ab\u6ce8\u5165\u5230\u4f9d\u8d56\u4e2d\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"love.forte.simbot.application.Application"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"love.forte.simbot.event.application.Application.Environment"})," (\u884d\u751f\u81ea ",(0,r.jsx)(n.code,{children:"Application"})," )"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"love.forte.simbot.event.EventListenerManager"})," (\u884d\u751f\u81ea ",(0,r.jsx)(n.code,{children:"Application"})," )"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"love.forte.simbot.application.BotManagers"})," (\u884d\u751f\u81ea ",(0,r.jsx)(n.code,{children:"Application"})," )\n\u4f60\u53ef\u4ee5\u914d\u5408\u8fd9\u4e9b\u7c7b\u578b\u6765\u5b9e\u73b0\u4e00\u4e9b\u6bd4\u8f83\u7279\u6b8a\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u83b7\u53d6\u5f53\u524d\u6240\u6709\u7684bot\u3001\u52a8\u6001\u6ce8\u518cbot\u3001\u52a8\u6001\u6ce8\u518c\u76d1\u542c\u51fd\u6570\u7b49\u3002"]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:'\u4ee5**"\u52a8\u6001\u6ce8\u518cbot"**\u4e3a\u4f8b\uff1a'}),"\n",(0,r.jsxs)(a.Z,{groupId:"code",children:[(0,r.jsx)(o.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:"title='RegisterSomeBot.kt'",children:"@Component\nopen class RegisterSomeBot(\n    // highlight-next-line\n    val application: Application\n    // \u6b64\u793a\u4f8b\u573a\u666f\u4e0b\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7528 BotManagers\n) : CommandLineRunner {\n    override fun run(vararg args: String?) {\n        val bot = application.botManagers.register(...)\n        bot?.start() // nullable\n        \n        // \u6216\u8005\u7cbe\u51c6\u7684\u65f6\u5019\u67d0\u4e2a\u5177\u4f53\u7684\u7ec4\u4ef6\u7684BOT\u7ba1\u7406\u5668\n        val bot2 = application.botManagers\n            .filterIsInstance<MiraiBotManager>()\n            .first()\n            .register(...)\n        \n        bot2.start()\n    }\n}\n"})})}),(0,r.jsx)(o.Z,{value:"Java",attributes:{"data-value":"Java"},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:"title='RegisterSomeBot.java'",children:"@Component\npublic class RegisterSomeBot implements CommandLineRunner {\n    private final Application application;\n\n    public RegisterSomeBot(Application application) {\n        // highlight-next-line\n        this.application = application;\n        // \u6b64\u793a\u4f8b\u573a\u666f\u4e0b\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7528 BotManagers\n    }\n\n    @Override\n    public void run(String... args) {\n        Bot bot = application.getBotManagers().register(...);\n        bot.startBlocking(); // warn: bot is nullable\n\n        MiraiBot bot2 = application.getBotManagers()\n                .getFirst(MiraiBotManager.class)\n                .register(...);\n        bot2.startBlocking();\n    }\n\n}\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(90512);const i={tabItem:"tabItem_Ymn6"};var a=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),i=t(90512),a=t(12466),o=t(16550),s=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=h({queryString:t,groupId:i}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,d.Nk)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),x=(()=>{const e=c??m;return b({value:e,tabValues:a})?e:null})();(0,s.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=s[t].value;i!==r&&(c(n),o(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(f,{...e,...n})]})}function k(e){const n=(0,g.Z)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var r=t(67294);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}},42965:e=>{e.exports={version:"3.3.0"}}}]);