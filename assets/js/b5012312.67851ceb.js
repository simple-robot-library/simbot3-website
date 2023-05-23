"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[9150],{2837:(n,e,t)=>{t.d(e,{Z:()=>S});var a=t(7294),l=t(4866),i=t(5162),o=t(614),p=t(3612);function r(){return a.createElement(a.Fragment,null,a.createElement(l.Z,{groupId:"w19code"},a.createElement(i.Z,{value:"launcher"},a.createElement(o.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val launcher: ApplicationLauncher<SimpleApplication> = simbotApplication(Simple)\n    val app: SimpleApplication = launcher.launch() \n    app.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    simbotApplication(Simple).launch().join()\n}")),a.createElement(i.Z,{value:"create"},a.createElement(o.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val app: SimpleApplication = createSimbotApplication(Simple)\n    app.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    createSimbotApplication(Simple).join()\n}"))))}function c(){return a.createElement(a.Fragment,null,a.createElement(l.Z,{groupId:"w19code"},a.createElement(i.Z,{value:"launcher"},a.createElement(o.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val launcher: ApplicationLauncher<SimpleApplication> = simbotApplication(\n        factory = Simple,\n        configurator = { // this: SimpleApplicationConfiguration\n            logger = ...\n            coroutineContext = ...\n        }\n    ) { // this: SimpleApplicationBuilder, it: SimpleApplicationConfiguration\n        \n        // \u7ec4\u4ef6\u6ce8\u518c\n        installAllComponents()\n        // \u4e8b\u4ef6\u63d0\u4f9b\u8005\u6ce8\u518c\n        // BotManager\u4e5f\u5c5e\u4e8eEventProvider\n        installAllEventProviders()\n        // \u5e26\u914d\u7f6e\u7684\u6ce8\u518c\n        install(FooComponent) {\n            // config for it\n        }\n        \n        install(FooBotManager) // or ignore config\n        \n        // \u5168\u5c40\u901a\u7528\u7684bot\u6ce8\u518c\u76f8\u5173\n        bots {\n            val bot = register(...)\n            register(...)?.start()\n        }\n        \n        // \u5185\u7f6e\u4e8b\u4ef6\u5904\u7406\u5668\u914d\u7f6e\n        eventProcessor {\n            // \u914d\u7f6e\u76d1\u542c\u51fd\u6570\n            listeners {\n                listener(myListener)\n                listener(MessageEvent) {\n                    isAsync = true | false\n                    blockNext = true | false\n                    logger = ...\n                    handle { context, event ->\n                        // ...\n                    }\n                }\n                val myListener: EventListener = ...\n                // plus listener\n                +myListener\n            }\n            \n            // \u914d\u7f6e\u62e6\u622a\u5668\n            interceptors {\n                // \u76d1\u542c\u51fd\u6570\u62e6\u622a\u5668\n                listenerIntercept {\n                    // ...\n                }\n                // \u4e8b\u4ef6\u6d41\u7a0b\u62e6\u622a\u5668\n                processingIntercept {\n                    // ...\n                }\n            }\n        }\n        \n        // \u989d\u5916\u7684\u6269\u5c55\u5141\u8bb8\u76f4\u63a5\u5728\u6b64\u5904\u5b9a\u4e49\u76d1\u542c\u51fd\u6570\n        listeners {\n            listener(myListener)\n            listener(MessageEvent) {\n                handle { context, messageEvent ->\n                    // ...\n                }\n            }\n        }\n        \n        // \u5b8c\u6210\u65f6\u7684\u56de\u8c03\u51fd\u6570\n        onCompletion {\n            // ...\n        }\n    }\n    \n    val app: SimpleApplication = launcher.launch()\n    app.join()\n}")),a.createElement(i.Z,{value:"create"},a.createElement(o.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val app: SimpleApplication = createSimbotApplication(\n        factory = Simple,\n        configurator = { // this: SimpleApplicationConfiguration\n        \n            // config block\n            \n        }\n    ) { // this: SimpleApplicationBuilder, it: SimpleApplicationConfiguration\n    \n        // build block\n        \n    }\n    \n    app.join()\n}")),a.createElement(i.Z,{value:"builder"},a.createElement(o.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val app: SimpleApplication = buildSimbotApplication(Simple) { \n            config { // this: SimpleApplicationConfiguration\n            \n                // config block\n                \n            }\n            \n            build { // this: SimpleApplicationBuilder, it: SimpleApplicationConfiguration\n            \n                // build block\n                \n            }\n            \n        }\n    \n    app.join()\n}"))))}function m(){return a.createElement(l.Z,{groupId:"w19code"},a.createElement(i.Z,{value:"launcher"},a.createElement(o.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val launcher: ApplicationLauncher<SimpleApplication> = simpleApplication({\n        // config block\n    }) {\n        // build block\n    }\n    \n    val app: SimpleApplication = launcher.launch()\n    app.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val launcher = simpleApplication()\n    val app = launcher.launch()\n    app.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    simpleApplication().launch().join()\n}")),a.createElement(i.Z,{value:"create"},a.createElement(o.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val app: SimpleApplication = createSimpleApplication({\n        // config block\n    }) {\n        // build block\n    }\n    \n    app.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val app = createSimpleApplication()\n    app.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    createSimpleApplication().join()\n}")))}function u(){return a.createElement(l.Z,{groupId:"w19code-show"},a.createElement(i.Z,{value:"\u6700\u7b80\u793a\u4f8b"},a.createElement(r,null)),a.createElement(i.Z,{value:"\u5b8c\u6574\u793a\u4f8b"},a.createElement(c,null)),a.createElement(i.Z,{value:"\u6269\u5c55\u793a\u4f8b"},a.createElement(m,null)))}function s(){return a.createElement(a.Fragment,null,a.createElement(l.Z,{groupId:"w19code"},a.createElement(i.Z,{value:"launcher"},a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val launcher: ApplicationLauncher<BootApplication> = simbotApplication(Boot)\n    val launch: BootApplication = launcher.launch()\n    launch.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    simbotApplication(Boot).launch().join()\n}")),a.createElement(i.Z,{value:"create"},a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val app: BootApplication = createSimbotApplication(Boot)\n    app.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    createSimbotApplication(Boot).join()\n}"))))}function g(){return a.createElement(a.Fragment,null,a.createElement(l.Z,{groupId:"w19code"},a.createElement(i.Z,{value:"launcher"},a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},'suspend fun main() {\n    suspend fun main() {\n    val launcher: ApplicationLauncher<BootApplication> = simbotApplication(\n        factory = Boot,\n        configurator = { // this: BootApplicationConfiguration\n            logger = ...\n            coroutineContext = ...\n            \n            // \u7528\u4e8e\u5404\u79cd\u8d44\u6e90\u626b\u63cf\u7684\u7c7b\u52a0\u8f7d\u5668\n            classLoader = ...\n            // \u4f9d\u8d56\u7c7b\u626b\u63cf\u5305\u8def\u5f84\n            classesScanPackage = listOf("com.example")\n            // \u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684\u76d1\u542c\u51fd\u6570\u626b\u63cf\n            topLevelListenerScanPackage = listOf("com.example")\n            // \u9876\u5c42\u51fd\u6570\u7684binder\u51fd\u6570\u626b\u63cf\n            topLevelBinderScanPackage = listOf("com.example")\n            args = listOf("-foo", "-bar")\n            // *.bot \u8d44\u6e90\u6587\u4ef6\u626b\u63cf\u8def\u5f84\n            botConfigurationResources = listOf("simbot-bots/*.bot*")\n            // \u989d\u5916\u914d\u7f6e\u7684*.bot \u8d44\u6e90\n            botConfigurations = listOf(File("xxx/fooBot.bot").toResource())\n            // \u662f\u5426\u81ea\u52a8\u542f\u52a8\u626b\u63cf\u6ce8\u518c\u7684bot\n            isAutoStartBots = true\n        }\n    ) { // this: BootApplicationBuilder, it: BootApplicationConfiguration\n        \n        // \u7ec4\u4ef6\u6ce8\u518c\n        installAllComponents()\n        \n        // \u4e8b\u4ef6\u63d0\u4f9b\u8005\u6ce8\u518c\n        // BotManager\u4e5f\u5c5e\u4e8eEventProvider\n        installAllEventProviders()\n        \n        // \u5e26\u914d\u7f6e\u7684\u6ce8\u518c\n        install(FooComponent) {\n            // config for it\n        }\n        \n        install(FooBotManager) // or ignore config\n        \n        // \u5bf9\u4f9d\u8d56\u6ce8\u5165\u5185\u5bb9\u7684**\u989d\u5916**\u914d\u7f6e\n        beans {\n            bean("foo", Foo())\n            bean("bar", Bar::class) { Bar() }\n            scan("foo.example", "bar.example")\n        }\n        \n        // \u914d\u7f6e\u989d\u5916\u7684binders\n        binders {\n            binder("foo-binder", FooBinderFactory)\n            binder(BarBinderFactory)\n        }\n        \n        \n        // \u5168\u5c40\u901a\u7528\u7684bot\u6ce8\u518c\uff0c\u4e0e Simple \u51e0\u4e4e\u4e00\u81f4\u3002\u53ea\u4e0d\u8fc7\u6b64\u5904\u4e3a\u914d\u7f6e\u6587\u4ef6\u626b\u63cf\u4ee5\u5916\u7684\u5185\u5bb9\u3002\n        bots {\n            // ...\n        }\n        \n        // \u4e8b\u4ef6\u5904\u7406\u5668\u4e0e Simple \u51e0\u4e4e\u4e00\u81f4\u3002\u53ea\u4e0d\u8fc7\u6b64\u5904\u914d\u7f6e\u7684\u4e3abean\u626b\u63cf\u4ee5\u5916\u7684\u5185\u5bb9\u3002\n        // \u4f9d\u8d56\u7ba1\u7406\u529f\u80fd\u4f1a\u5c1d\u8bd5\u81ea\u52a8\u626b\u63cf\u5e76\u6ce8\u518c\u76f8\u5173\u7684\u76d1\u542c\u51fd\u6570\u3002\n        eventProcessor {\n            // ...\n        }\n        \n        \n        // \u5b8c\u6210\u65f6\u7684\u56de\u8c03\u51fd\u6570\n        onCompletion {\n            // ...\n        }\n    }\n    \n    val app: BootApplication = launcher.launch()\n    app.join()\n}')),a.createElement(i.Z,{value:"create"},a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val app: BootApplication = createSimbotApplication(\n        factory = Boot,\n        configurator = { // this: BootApplicationConfiguration\n            // config block\n        }\n    ) { // this: BootApplicationBuilder, it: BootApplicationConfiguration\n        // build block\n    }\n    \n    app.join()\n}")),a.createElement(i.Z,{value:"builder"},a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val app: BootApplication = buildSimbotApplication(Boot) {\n        config { // this: BootApplicationConfiguration\n            // config block\n        }\n        build { // this: BootApplicationBuilder, it: BootApplicationConfiguration\n            // build block\n        }\n    }\n    \n    app.join()\n}"))))}function k(){return a.createElement(l.Z,{groupId:"w19code"},a.createElement(i.Z,{value:"launcher"},a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val launcher: ApplicationLauncher<BootApplication> = bootApplication({\n        // config block\n    }) {\n        // build block\n    }\n    \n    val launch: BootApplication = launcher.launch()\n    launch.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val launcher = bootApplication()\n    val launch = launcher.launch()\n    launch.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    bootApplication().launch().join()\n}")),a.createElement(i.Z,{value:"create"},a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val app: BootApplication = createBootApplication({\n        // config block\n    }) {\n        // build block\n    }\n    \n    app.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val app = createBootApplication()\n    app.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    createBootApplication().join()\n}")))}function A(){return a.createElement(a.Fragment,null,a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"import love.forte.simboot.core.SimbootApp\nimport love.forte.simboot.core.SimbootApplication\n\n@SimbootApplication\nclass App\n\nsuspend fun main(vararg args: String) {\n    val app = SimbootApp.run(App::class, args = args)\n    app.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"import love.forte.simboot.core.SimbootApp\nimport love.forte.simboot.core.SimbootApplication\nimport love.forte.simboot.core.invoke\n\n@SimbootApplication\nclass App\n\nsuspend fun main(vararg args: String) {\n    val app = SimbootApp<App>(args = args)\n    app.join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"import love.forte.simboot.core.SimbootApp\nimport love.forte.simboot.core.SimbootApplication\nimport love.forte.simboot.core.invoke\n\n@SimbootApplication\nclass App\n\nsuspend fun main(vararg args: String) {\n    SimbootApp<App>(args = args).join()\n}"),a.createElement(o.Z,{language:"kotlin",title:"com/example/App.kt"},"package com.example\n\nimport love.forte.simboot.core.SimbootApp\n\n\nsuspend fun main(vararg args: String) {\n    SimbootApp.run(args = args).join()\n}"))}function b(){return a.createElement(a.Fragment,null,a.createElement(o.Z,{language:"java",title:"com/example/App.java"},"@SimbootApplication\npublic class App {\n    public static void main(String[] args) {\n        final ApplicationLauncher<BootApplication> launcher = SimbootApp.run(App.class, args);\n        final BootApplication application = launcher.launchBlocking();\n        application.joinBlocking();\n    }\n}"),a.createElement(o.Z,{language:"java",title:"com/example/App.java"},"public class App {\n    public static void main(String[] args) {\n        final ApplicationLauncher<BootApplication> launcher = SimbootApp.run(args);\n        final BootApplication application = launcher.launchBlocking();\n        application.joinBlocking();\n    }\n}"),a.createElement(o.Z,{language:"java",title:"com/example/App.java"},"@SimbootApplication\npublic class App {\n    public static void main(String[] args) {\n        SimbootApp.run(App.class, args)\n                .launchBlocking()\n                .joinBlocking();\n    }\n}"),a.createElement(o.Z,{language:"java",title:"com/example/App.java"},"public class App {\n    public static void main(String[] args) {\n        SimbootApp.run(args)\n                .launchBlocking()\n                .joinBlocking();\n    }\n}"))}function v(){return a.createElement(l.Z,{groupId:"code"},a.createElement(i.Z,{value:"Kotlin"},a.createElement(A,null)),a.createElement(i.Z,{value:"Java"},a.createElement(b,null)))}function d(){return a.createElement(l.Z,{groupId:"w19code-show"},a.createElement(i.Z,{value:"\u6700\u7b80\u793a\u4f8b"},a.createElement(s,null)),a.createElement(i.Z,{value:"\u5b8c\u6574\u793a\u4f8b"},a.createElement(g,null)),a.createElement(i.Z,{value:"\u6269\u5c55\u793a\u4f8b"},a.createElement(k,null)),a.createElement(i.Z,{value:"\u5feb\u901f\u542f\u52a8\u793a\u4f8b"},a.createElement(v,null)))}function f(){return a.createElement(l.Z,{groupId:"code"},a.createElement(i.Z,{value:"Kotlin"},a.createElement(o.Z,{language:"kotlin",title:"com/example/SpringBootApp.kt"},"@EnableSimbot\n@SpringBootApplication\nclass SpringBootApp\n\n\nfun main(vararg args: String) {\n    runApplication<SpringBootApp>(*args)\n}")),a.createElement(i.Z,{value:"Java"},a.createElement(o.Z,{language:"java",title:"com/example/SpringBootApp.java"},"@EnableSimbot\n@SpringBootApplication\npublic class SpringBootApp {\n    public static void main(String[] args) {\n        SpringApplication.run(SpringBootApp.class, args);\n    }\n}")))}function E(){return a.createElement(a.Fragment,null,a.createElement(p.Z,{type:"note"},a.createElement("p",null,"Spring Boot\u6a21\u5757\u4e0b\u4e0d\u592a\u5efa\u8bae\u901a\u8fc7\u524d\u8ff0\u7684 ",a.createElement("code",null," simbotApplication { ... } ")," \u7684\u65b9\u5f0f\u6765\u4f7f\u7528 \u2014\u2014\u2014\u2014 \u8fd9\u4e9b\u884c\u4e3a\u5c06\u4f1a\u7531\u5185\u90e8\u7684Spring Boot\u914d\u7f6e\u6765\u5b8c\u6210\u3002"),a.createElement("p",null,"\u56e0\u6b64\u6b64\u5904\u53ea\u63d0\u4f9b\u5feb\u901f\u5f00\u59cb\u793a\u4f8b\u3002")),a.createElement(l.Z,{groupId:"w19code-show"},a.createElement(i.Z,{value:"\u5feb\u901f\u5f00\u59cb\u793a\u4f8b"},a.createElement(f,null))))}function S(n){let{}=n;return a.createElement(l.Z,null,a.createElement(i.Z,{default:!0,value:"Simple"},a.createElement(u,null)),a.createElement(i.Z,{value:"Boot"},a.createElement(d,null)),a.createElement(i.Z,{value:"SpringBoot"},a.createElement(E,null)))}},2038:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var a=t(7462),l=(t(7294),t(3905)),i=t(2837);const o={authors:"forliy",title:"2022\u5e74\u7b2c19\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},p=void 0,r={permalink:"/blog/2022/05/13/weak-19-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/tree/main/blog/2022/05-13-weak-19-report/index.mdx",source:"@site/blog/2022/05-13-weak-19-report/index.mdx",title:"2022\u5e74\u7b2c19\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c19\u5468\u5468\u62a5\u55b5\u3002",date:"2022-05-13T00:00:00.000Z",formattedDate:"2022\u5e745\u670813\u65e5",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:4.805,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c19\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c20\u5468\u5468\u62a5",permalink:"/blog/2022/05/20/week-20-report"},nextItem:{title:"2022\u5e74\u7b2c18\u5468\u5468\u62a5",permalink:"/blog/2022/05/06/week-18-report"}},c={authorsImageUrls:[void 0]},m=[{value:"\ud83c\udfd7 \u91cd\u6784",id:"-\u91cd\u6784",level:2},{value:"\u7b2c\u4e5d\u9884\u89c8",id:"\u7b2c\u4e5d\u9884\u89c8",level:3},{value:"\u7b2c\u5341\u9884\u89c8",id:"\u7b2c\u5341\u9884\u89c8",level:3},{value:"\u540e\u7eed",id:"\u540e\u7eed",level:3},{value:"\ud83d\ude80 \u7248\u672c\u66f4\u65b0",id:"-\u7248\u672c\u66f4\u65b0",level:2},{value:"\ud83d\udcd6 \u6587\u6863\u66f4\u65b0",id:"-\u6587\u6863\u66f4\u65b0",level:2}],u={toc:m};function s(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"2022\u5e74\u7b2c19\u5468\u5468\u62a5\u55b5\u3002"),(0,l.kt)("h2",{id:"-\u91cd\u6784"},"\ud83c\udfd7 \u91cd\u6784"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.10.x")," \u7248\u672c\uff08\u4e5f\u5c31\u662fv3\u7684\u7b2c\u5341\u4e2a\u9884\u89c8\u7248\u672c\uff09\u7684\u6838\u5fc3\u6a21\u5757\u4e2d\u7684",(0,l.kt)("strong",{parentName:"p"},"\u4e3b\u8981"),"\u91cd\u6784\u5de5\u4f5c\u5df2\u7ecf\u57fa\u672c\u63a5\u8fd1\u5c3e\u58f0\u3002\n\u5982\u679c\u4e0d\u51fa\u610f\u5916\u7684\u8bdd\uff0c\u672c\u5468\u5185\u5c06\u4f1a\u9996\u5148\u53d1\u5e03\u4e00\u4e2a\u8fc7\u6e21\u6027\u7248\u672c ",(0,l.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.9.x")," \uff08\u4e5f\u5c31\u662f\u7b2c\u4e5d\u4e2a\u9884\u89c8\u7248\u672c\uff09\u6765\u8fdb\u884c\u4e00\u6b21\u8fc7\u6e21\u5347\u7ea7\u4e0e\u95ee\u9898\u6536\u96c6\u3002"),(0,l.kt)("h3",{id:"\u7b2c\u4e5d\u9884\u89c8"},"\u7b2c\u4e5d\u9884\u89c8"),(0,l.kt)("p",null,'\u5728\u7b2c\u4e5d\u9884\u89c8\u7248\u672c\u4e2d\uff0c\u5c06\u4f1a\u66f4\u65b0\u5728\u7b2c\u5341\u9884\u89c8\u7248\u672c\u8ba1\u5212\u91cd\u6784\u4e2d\u7684\u4e3b\u8981\u90e8\u5206\uff1a\u6709\u5173"\u5e94\u7528\u7a0b\u5e8f"\u3001"\u7ec4\u4ef6"\u548c\u542f\u52a8\u7684\u6574\u4f53\u91cd\u6784\u3002\n\u5728\u672c\u6b21\u91cd\u6784\u540e\uff0c\u5e94\u7528\u5404\u6a21\u5757\uff08\u6838\u5fc3\u6a21\u5757\u3001Boot\u6a21\u5757\u3001SpringBoot\u6a21\u5757\uff09\u7684\u5e94\u7528\u7a0b\u5e8f\u5c06\u4f1a\u6709\u5982\u4e0b\u6548\u679c\uff1a'),(0,l.kt)(i.Z,{mdxType:"Codes4w19"}),(0,l.kt)("p",null,"\u5176\u4e2d\uff0c \u4e0a\u8ff0\u63d0\u5230\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Simple"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Boot"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"SpringBoot")," \u90fd\u662f ",(0,l.kt)("strong",{parentName:"p"},'"\u5e94\u7528\u7a0b\u5e8f\u5de5\u5382\uff08',(0,l.kt)("inlineCode",{parentName:"strong"},"ApplicationFactory"),'\uff09"')," \u7684\u4e00\u79cd\u5b9e\u73b0\uff0c\n\u5b83\u4eec\u4e09\u4e2a\u5206\u522b\u4ee3\u8868\u4e86\u539f\u6765\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u6838\u5fc3\u6a21\u5757")," \u3001 ",(0,l.kt)("strong",{parentName:"p"},"Boot\u6a21\u5757")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"Spring Boot Starter\u6a21\u5757"),"\u3002"),(0,l.kt)("p",null,"\u800c\u8fd9\u5176\u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"p"},'"\u5e94\u7528\u7a0b\u5e8f\uff08 ',(0,l.kt)("inlineCode",{parentName:"strong"},"Application"),' \uff09"')," \u5219\u662f\u672c\u6b21\u91cd\u6784\u540e\u6240\u5f15\u5165\u7684\u65b0\u6982\u5ff5\uff0c\u4e5f\u5c06\u4f1a\u662f\u540e\u7eed\u4f5c\u4e3asimbot\u7a0b\u5e8f\u5165\u53e3\u70b9\u7684\u6982\u5ff5\u4ee3\u7406\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u6709\u5173\u5e94\u7528\u7a0b\u5e8f\u6982\u5ff5\u7684\u4ea7\u751f\u4e4b\u5916\uff0c\u4f34\u968f\u7740\u5b83\u7684\u5b9e\u73b0\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Boot")," \u6a21\u5757\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Spring Boot Starter")," \u6a21\u5757\u7684\u5185\u90e8\u4e5f\u4ea7\u751f\u4e86\u5927\u91cf\u53d8\u5316\uff0c\n\u4ee5\u53ca\u8fd8\u6709\u4e00\u4e9b\u4f34\u968f\u4ea7\u751f\u7684\u65b0\u4e1c\u897f\u3001\u88ab\u79fb\u9664\u7684\u65e7\u4e1c\u897f\u7b49\u3002\u6709\u5173\u8fd9\u4e9b\u5185\u5bb9\uff0c\u4f1a\u5728\u7248\u672c\u53d1\u5e03\u7684\u65f6\u5019\u8be6\u7ec6\u5217\u4e8e\u66f4\u65b0\u65e5\u5fd7\u4e2d\u3002"),(0,l.kt)("h3",{id:"\u7b2c\u5341\u9884\u89c8"},"\u7b2c\u5341\u9884\u89c8"),(0,l.kt)("p",null,'\u7b2c\u5341\u9884\u89c8\u4e2d\u5e94\u8be5\u5b8c\u6210\u672c\u6b21\u91cd\u6784\u8ba1\u5212\uff0c\u800c\u6700\u7ec8\u7684\u91cd\u6784\u8ba1\u5212\u4e2d\uff0c\u9664\u4e86\u5728\u7b2c\u4e5d\u9884\u89c8\u4e2d\u6240\u66f4\u65b0\u7684"\u5e94\u7528\u7a0b\u5e8f"\u4ee5\u5916\uff0c\u6700\u4e3b\u8981\u7684\u5219\u662f\u5bf9 "\u6301\u7eed\u4f1a\u8bdd" API\u7684\u7ffb\u65b0\u3002'),(0,l.kt)("p",null,"\u8fd9\u8fd8\u662f\u6211\u4eec\u5c1a\u5728\u8bae\u8bba\u7684\u91cd\u6784\u5185\u5bb9\uff0c\u8fd8\u8bf7\u7a0d\u4f5c\u7b49\u5f85\u3002"),(0,l.kt)("h3",{id:"\u540e\u7eed"},"\u540e\u7eed"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.10.x")," \u91cd\u6784\u3001\u53d1\u5e03\u5b8c\u6210\u540e\uff0c\u5728\u540e\u7eed\u4e00\u6bb5\u65f6\u95f4\u5185\u5c06\u4f1a\u5bf9\u76ee\u524d\u7684\u9884\u89c8\u7248\u672c\u8fdb\u884c\u7b80\u5355\u7684\u6d4b\u8bd5\u4e0e\u53cd\u9988\u6536\u96c6\uff0c\u5e76\u7ee7\u7eed\u5411\u7740\u66f4\u4e3a\u5b8c\u5584\u7684api\u5b9a\u4e49\u7ee7\u7eed\u66f4\u65b0\u3002\n\u5c1a\u672a\u5217\u5165\u4e0a\u8ff0\u91cd\u6784\u8ba1\u5212\u5185\u7684\u5f85\u529e\u4e8b\u9879\u4e2d\uff0c\u8fd8\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u4e8e ",(0,l.kt)("strong",{parentName:"li"},"\u6743\u9650\u4e0e\u89d2\u8272\uff08",(0,l.kt)("inlineCode",{parentName:"strong"},"Role"),"\uff09")," \u76f8\u5173API"),(0,l.kt)("li",{parentName:"ul"},"Bot\u7684 ",(0,l.kt)("strong",{parentName:"li"},"\u8054\u7cfb\u4eba")," \u76f8\u5173API"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d41\u8fd4\u56de\u503c\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"Flow \u3001 Sequence \u3001Stream"),"\uff09\u517c\u5bb9\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u672a\u8003\u8651\u5230\u7684\u95ee\u9898")),(0,l.kt)("p",null,"\u5982\u6b64\u51e0\u9879\u5185\u5bb9\u9700\u8981\u8fdb\u884c\u8003\u8651\u4e0e\u5b8c\u5584\u3002"),(0,l.kt)("p",null,"\u5f53\u4e0a\u8ff0\u95ee\u9898\u90fd\u5f97\u5230\u4e86\u8f83\u4e3a\u59a5\u5584\u7684\u7b54\u6848\u4e4b\u540e\uff0c\u4fbf\u4f1a\u8003\u8651\u505c\u6b62\u5f53\u524d\u7684",(0,l.kt)("strong",{parentName:"p"},"\u9884\u89c8(preview)"),"\u9636\u6bb5\uff0c\u8f6c\u800c\u8fdb\u5165",(0,l.kt)("strong",{parentName:"p"},"BETA"),"\u9636\u6bb5\u3002"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("strong",{parentName:"p"},"BETA"),"\u9636\u6bb5\uff0c\u5c06\u4f1a\u4e3b\u8981\u4ee5\u4f18\u5316\u3001bugfix\u548c\u4ed3\u5e93\u3001\u6587\u6863\u5b8c\u5584\u4e3a\u4e3b\uff0c\u5c3d\u53ef\u80fd\u4e0d\u518d\u8003\u8651\u5927\u9762\u79ef\u7684\u91cd\u6784\u4f5c\u4e1a\u3002"),(0,l.kt)("h2",{id:"-\u7248\u672c\u66f4\u65b0"},"\ud83d\ude80 \u7248\u672c\u66f4\u65b0"),(0,l.kt)("p",null,"\u672c\u5468\u5185\u6ca1\u6709\u4ec0\u4e48\u4e3b\u8981\u7684\u7248\u672c\u66f4\u65b0\uff0c\u4f46\u662f",(0,l.kt)("strong",{parentName:"p"},"\u9884\u8ba1"),"\u4f1a\u5728\u672c\u5468\u5185\u6216\u4e0b\u5468\u521d\u53d1\u5e03 ",(0,l.kt)("inlineCode",{parentName:"p"},"v3.0.0.preview.9.0"),"\u3002\u4e0d\u8fc7\u5728\u672c\u5468\u4e4b\u524d\u76845\u67088\u53f7\uff0c\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-component-mirai"},"Mirai\u7ec4\u4ef6"),"\n\u53d1\u5e03\u4e86\u4e00\u4e2a\u4e0a\u5468\u5468\u62a5\u672a\u63d0\u53ca\u7684\u7248\u672c\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-component-mirai/releases/tag/v3.0.0.0.preview.2.3"},"v3.0.0.0.preview.2.3"),"\uff0c\n\u6709\u5174\u8da3\u7684\u5c0f\u4f19\u4f34\u53ef\u4ee5\u53bb\u770b\u770b\u3002"),(0,l.kt)("h2",{id:"-\u6587\u6863\u66f4\u65b0"},"\ud83d\udcd6 \u6587\u6863\u66f4\u65b0"),(0,l.kt)("p",null,'\u4e5f\u8bb8\u6709\u4e9b\u670b\u53cb\u53ef\u80fd\u4f1a\u95ee\uff1a"\u4f60\u4eec\u600e\u4e48\u8fd8\u4e0d\u5b8c\u5584\u6587\u6863\ud83d\ude4f"\uff0c\u6709\u5173\u6587\u6863\u7684\u5b8c\u5584\u95ee\u9898\uff0c\u76ee\u524d\u5728 ',(0,l.kt)("strong",{parentName:"p"},"\u9884\u89c8\u7248\u672c")," \u9636\u6bb5\uff0capi\u7684\u5b9a\u4e49\u53ef\u80fd\u4f1a\u7ecf\u5e38\u6027\u7684\u53d1\u751f\u53d8\u5316\uff0c\n\u6587\u6863\u5185\u5bb9\u51c6\u786e\u6027\u96be\u4ee5\u5f97\u5230\u4fdd\u8bc1\u3002\n\u5e76\u4e14\u6587\u6863\u7684\u7f16\u64b0\u9700\u8981\u6d88\u8017\u5927\u91cf\u7684\u7cbe\u529b\u6765\u505a\uff0c\u800c\u76ee\u524d\u56e2\u961f\u7684\u4e3b\u8981\u5de5\u4f5c\u662f\u5c3d\u5feb\u5b8c\u6210api\u7684\u786e\u5b9a\u6765\u4e3a\u672a\u6765\u505a\u4fdd\u969c\u3002\n\u56e0\u6b64\u5bf9\u4e8e\u6587\u6863\u5b8c\u5584\u7684\u4f18\u5148\u7ea7\u5728\u9884\u89c8\u9636\u6bb5\u7ed3\u675f\u524d\u90fd\u4e0d\u4f1a\u88ab\u63d0\u524d\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u6587\u6863\u5185\u5bb9\u7684\u7f16\u5199\uff0c\u9884\u8ba1\u4f1a\u5728beta\u7248\u672c\u6216\u8005\u6b63\u5f0f\u7248\u672c\u53d1\u5e03\u540e\u5f00\u59cb\u9010\u6b65\u63d0\u4e0a\u65e5\u7a0b\u3002"),(0,l.kt)("p",null,"\u5c3d\u7ba1\u5982\u6b64\uff0c\u5728\u8fd9\u5468\u91cc\uff0c\u5f53\u524d\u7f51\u7ad9\u5185\u4f9d\u65e7\u53d1\u751f\u4e86\u4e00\u4e9b\u53d8\u5316\u2014\u2014\u4e0e\u6587\u6863\u548c\u4ee3\u7801\u793a\u4f8b\u6709\u5173\u7684\u53d8\u5316\u3002\u4e0d\u77e5\u9053\u7ec6\u5fc3\u7684\u4f60\u6709\u6ca1\u6709\u53d1\u73b0\u5462\uff1f"))}s.isMDXComponent=!0}}]);