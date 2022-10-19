"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[733],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=c(t),g=l,d=s["".concat(p,".").concat(g)]||s[g]||m[g]||o;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=s;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5431:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(7294),l=t(5488),o=t(5162),i=t(814),r=t(3612);function p(){return a.createElement(a.Fragment,null,a.createElement(l.Z,{groupId:"w19code"},a.createElement(o.Z,{value:"launcher"},a.createElement(i.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val launcher: ApplicationLauncher<SimpleApplication> = simbotApplication(Simple)\n    val app: SimpleApplication = launcher.launch() \n    app.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    simbotApplication(Simple).launch().join()\n}")),a.createElement(o.Z,{value:"create"},a.createElement(i.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val app: SimpleApplication = createSimbotApplication(Simple)\n    app.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    createSimbotApplication(Simple).join()\n}"))))}function c(){return a.createElement(a.Fragment,null,a.createElement(l.Z,{groupId:"w19code"},a.createElement(o.Z,{value:"launcher"},a.createElement(i.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val launcher: ApplicationLauncher<SimpleApplication> = simbotApplication(\n        factory = Simple,\n        configurator = { // this: SimpleApplicationConfiguration\n            logger = ...\n            coroutineContext = ...\n        }\n    ) { // this: SimpleApplicationBuilder, it: SimpleApplicationConfiguration\n        \n        // \u7ec4\u4ef6\u6ce8\u518c\n        installAllComponents()\n        // \u4e8b\u4ef6\u63d0\u4f9b\u8005\u6ce8\u518c\n        // BotManager\u4e5f\u5c5e\u4e8eEventProvider\n        installAllEventProviders()\n        // \u5e26\u914d\u7f6e\u7684\u6ce8\u518c\n        install(FooComponent) {\n            // config for it\n        }\n        \n        install(FooBotManager) // or ignore config\n        \n        // \u5168\u5c40\u901a\u7528\u7684bot\u6ce8\u518c\u76f8\u5173\n        bots {\n            val bot = register(...)\n            register(...)?.start()\n        }\n        \n        // \u5185\u7f6e\u4e8b\u4ef6\u5904\u7406\u5668\u914d\u7f6e\n        eventProcessor {\n            // \u914d\u7f6e\u76d1\u542c\u51fd\u6570\n            listeners {\n                listener(myListener)\n                listener(MessageEvent) {\n                    isAsync = true | false\n                    blockNext = true | false\n                    logger = ...\n                    handle { context, event ->\n                        // ...\n                    }\n                }\n                val myListener: EventListener = ...\n                // plus listener\n                +myListener\n            }\n            \n            // \u914d\u7f6e\u62e6\u622a\u5668\n            interceptors {\n                // \u76d1\u542c\u51fd\u6570\u62e6\u622a\u5668\n                listenerIntercept {\n                    // ...\n                }\n                // \u4e8b\u4ef6\u6d41\u7a0b\u62e6\u622a\u5668\n                processingIntercept {\n                    // ...\n                }\n            }\n        }\n        \n        // \u989d\u5916\u7684\u6269\u5c55\u5141\u8bb8\u76f4\u63a5\u5728\u6b64\u5904\u5b9a\u4e49\u76d1\u542c\u51fd\u6570\n        listeners {\n            listener(myListener)\n            listener(MessageEvent) {\n                handle { context, messageEvent ->\n                    // ...\n                }\n            }\n        }\n        \n        // \u5b8c\u6210\u65f6\u7684\u56de\u8c03\u51fd\u6570\n        onCompletion {\n            // ...\n        }\n    }\n    \n    val app: SimpleApplication = launcher.launch()\n    app.join()\n}")),a.createElement(o.Z,{value:"create"},a.createElement(i.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val app: SimpleApplication = createSimbotApplication(\n        factory = Simple,\n        configurator = { // this: SimpleApplicationConfiguration\n        \n            // config block\n            \n        }\n    ) { // this: SimpleApplicationBuilder, it: SimpleApplicationConfiguration\n    \n        // build block\n        \n    }\n    \n    app.join()\n}")),a.createElement(o.Z,{value:"builder"},a.createElement(i.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val app: SimpleApplication = buildSimbotApplication(Simple) { \n            config { // this: SimpleApplicationConfiguration\n            \n                // config block\n                \n            }\n            \n            build { // this: SimpleApplicationBuilder, it: SimpleApplicationConfiguration\n            \n                // build block\n                \n            }\n            \n        }\n    \n    app.join()\n}"))))}function u(){return a.createElement(l.Z,{groupId:"w19code"},a.createElement(o.Z,{value:"launcher"},a.createElement(i.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val launcher: ApplicationLauncher<SimpleApplication> = simpleApplication({\n        // config block\n    }) {\n        // build block\n    }\n    \n    val app: SimpleApplication = launcher.launch()\n    app.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val launcher = simpleApplication()\n    val app = launcher.launch()\n    app.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    simpleApplication().launch().join()\n}")),a.createElement(o.Z,{value:"create"},a.createElement(i.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val app: SimpleApplication = createSimpleApplication({\n        // config block\n    }) {\n        // build block\n    }\n    \n    app.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    val app = createSimpleApplication()\n    app.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"App.kt"},"suspend fun main() {\n    createSimpleApplication().join()\n}")))}function m(){return a.createElement(l.Z,{groupId:"w19code-show"},a.createElement(o.Z,{value:"\u6700\u7b80\u793a\u4f8b"},a.createElement(p,null)),a.createElement(o.Z,{value:"\u5b8c\u6574\u793a\u4f8b"},a.createElement(c,null)),a.createElement(o.Z,{value:"\u6269\u5c55\u793a\u4f8b"},a.createElement(u,null)))}function s(){return a.createElement(a.Fragment,null,a.createElement(l.Z,{groupId:"w19code"},a.createElement(o.Z,{value:"launcher"},a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val launcher: ApplicationLauncher<BootApplication> = simbotApplication(Boot)\n    val launch: BootApplication = launcher.launch()\n    launch.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    simbotApplication(Boot).launch().join()\n}")),a.createElement(o.Z,{value:"create"},a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val app: BootApplication = createSimbotApplication(Boot)\n    app.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    createSimbotApplication(Boot).join()\n}"))))}function g(){return a.createElement(a.Fragment,null,a.createElement(l.Z,{groupId:"w19code"},a.createElement(o.Z,{value:"launcher"},a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},'suspend fun main() {\n    suspend fun main() {\n    val launcher: ApplicationLauncher<BootApplication> = simbotApplication(\n        factory = Boot,\n        configurator = { // this: BootApplicationConfiguration\n            logger = ...\n            coroutineContext = ...\n            \n            // \u7528\u4e8e\u5404\u79cd\u8d44\u6e90\u626b\u63cf\u7684\u7c7b\u52a0\u8f7d\u5668\n            classLoader = ...\n            // \u4f9d\u8d56\u7c7b\u626b\u63cf\u5305\u8def\u5f84\n            classesScanPackage = listOf("com.example")\n            // \u9876\u5c42\u51fd\u6570\u5f62\u5f0f\u7684\u76d1\u542c\u51fd\u6570\u626b\u63cf\n            topLevelListenerScanPackage = listOf("com.example")\n            // \u9876\u5c42\u51fd\u6570\u7684binder\u51fd\u6570\u626b\u63cf\n            topLevelBinderScanPackage = listOf("com.example")\n            args = listOf("-foo", "-bar")\n            // *.bot \u8d44\u6e90\u6587\u4ef6\u626b\u63cf\u8def\u5f84\n            botConfigurationResources = listOf("simbot-bots/*.bot*")\n            // \u989d\u5916\u914d\u7f6e\u7684*.bot \u8d44\u6e90\n            botConfigurations = listOf(File("xxx/fooBot.bot").toResource())\n            // \u662f\u5426\u81ea\u52a8\u542f\u52a8\u626b\u63cf\u6ce8\u518c\u7684bot\n            isAutoStartBots = true\n        }\n    ) { // this: BootApplicationBuilder, it: BootApplicationConfiguration\n        \n        // \u7ec4\u4ef6\u6ce8\u518c\n        installAllComponents()\n        \n        // \u4e8b\u4ef6\u63d0\u4f9b\u8005\u6ce8\u518c\n        // BotManager\u4e5f\u5c5e\u4e8eEventProvider\n        installAllEventProviders()\n        \n        // \u5e26\u914d\u7f6e\u7684\u6ce8\u518c\n        install(FooComponent) {\n            // config for it\n        }\n        \n        install(FooBotManager) // or ignore config\n        \n        // \u5bf9\u4f9d\u8d56\u6ce8\u5165\u5185\u5bb9\u7684**\u989d\u5916**\u914d\u7f6e\n        beans {\n            bean("foo", Foo())\n            bean("bar", Bar::class) { Bar() }\n            scan("foo.example", "bar.example")\n        }\n        \n        // \u914d\u7f6e\u989d\u5916\u7684binders\n        binders {\n            binder("foo-binder", FooBinderFactory)\n            binder(BarBinderFactory)\n        }\n        \n        \n        // \u5168\u5c40\u901a\u7528\u7684bot\u6ce8\u518c\uff0c\u4e0e Simple \u51e0\u4e4e\u4e00\u81f4\u3002\u53ea\u4e0d\u8fc7\u6b64\u5904\u4e3a\u914d\u7f6e\u6587\u4ef6\u626b\u63cf\u4ee5\u5916\u7684\u5185\u5bb9\u3002\n        bots {\n            // ...\n        }\n        \n        // \u4e8b\u4ef6\u5904\u7406\u5668\u4e0e Simple \u51e0\u4e4e\u4e00\u81f4\u3002\u53ea\u4e0d\u8fc7\u6b64\u5904\u914d\u7f6e\u7684\u4e3abean\u626b\u63cf\u4ee5\u5916\u7684\u5185\u5bb9\u3002\n        // \u4f9d\u8d56\u7ba1\u7406\u529f\u80fd\u4f1a\u5c1d\u8bd5\u81ea\u52a8\u626b\u63cf\u5e76\u6ce8\u518c\u76f8\u5173\u7684\u76d1\u542c\u51fd\u6570\u3002\n        eventProcessor {\n            // ...\n        }\n        \n        \n        // \u5b8c\u6210\u65f6\u7684\u56de\u8c03\u51fd\u6570\n        onCompletion {\n            // ...\n        }\n    }\n    \n    val app: BootApplication = launcher.launch()\n    app.join()\n}')),a.createElement(o.Z,{value:"create"},a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val app: BootApplication = createSimbotApplication(\n        factory = Boot,\n        configurator = { // this: BootApplicationConfiguration\n            // config block\n        }\n    ) { // this: BootApplicationBuilder, it: BootApplicationConfiguration\n        // build block\n    }\n    \n    app.join()\n}")),a.createElement(o.Z,{value:"builder"},a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val app: BootApplication = buildSimbotApplication(Boot) {\n        config { // this: BootApplicationConfiguration\n            // config block\n        }\n        build { // this: BootApplicationBuilder, it: BootApplicationConfiguration\n            // build block\n        }\n    }\n    \n    app.join()\n}"))))}function d(){return a.createElement(l.Z,{groupId:"w19code"},a.createElement(o.Z,{value:"launcher"},a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val launcher: ApplicationLauncher<BootApplication> = bootApplication({\n        // config block\n    }) {\n        // build block\n    }\n    \n    val launch: BootApplication = launcher.launch()\n    launch.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val launcher = bootApplication()\n    val launch = launcher.launch()\n    launch.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    bootApplication().launch().join()\n}")),a.createElement(o.Z,{value:"create"},a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val app: BootApplication = createBootApplication({\n        // config block\n    }) {\n        // build block\n    }\n    \n    app.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    val app = createBootApplication()\n    app.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"suspend fun main() {\n    createBootApplication().join()\n}")))}function f(){return a.createElement(a.Fragment,null,a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"import love.forte.simboot.core.SimbootApp\nimport love.forte.simboot.core.SimbootApplication\n\n@SimbootApplication\nclass App\n\nsuspend fun main(vararg args: String) {\n    val app = SimbootApp.run(App::class, args = args)\n    app.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"import love.forte.simboot.core.SimbootApp\nimport love.forte.simboot.core.SimbootApplication\nimport love.forte.simboot.core.invoke\n\n@SimbootApplication\nclass App\n\nsuspend fun main(vararg args: String) {\n    val app = SimbootApp<App>(args = args)\n    app.join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"import love.forte.simboot.core.SimbootApp\nimport love.forte.simboot.core.SimbootApplication\nimport love.forte.simboot.core.invoke\n\n@SimbootApplication\nclass App\n\nsuspend fun main(vararg args: String) {\n    SimbootApp<App>(args = args).join()\n}"),a.createElement(i.Z,{language:"kotlin",title:"com/example/App.kt"},"package com.example\n\nimport love.forte.simboot.core.SimbootApp\n\n\nsuspend fun main(vararg args: String) {\n    SimbootApp.run(args = args).join()\n}"))}function b(){return a.createElement(a.Fragment,null,a.createElement(i.Z,{language:"java",title:"com/example/App.java"},"@SimbootApplication\npublic class App {\n    public static void main(String[] args) {\n        final ApplicationLauncher<BootApplication> launcher = SimbootApp.run(App.class, args);\n        final BootApplication application = launcher.launchBlocking();\n        application.joinBlocking();\n    }\n}"),a.createElement(i.Z,{language:"java",title:"com/example/App.java"},"public class App {\n    public static void main(String[] args) {\n        final ApplicationLauncher<BootApplication> launcher = SimbootApp.run(args);\n        final BootApplication application = launcher.launchBlocking();\n        application.joinBlocking();\n    }\n}"),a.createElement(i.Z,{language:"java",title:"com/example/App.java"},"@SimbootApplication\npublic class App {\n    public static void main(String[] args) {\n        SimbootApp.run(App.class, args)\n                .launchBlocking()\n                .joinBlocking();\n    }\n}"),a.createElement(i.Z,{language:"java",title:"com/example/App.java"},"public class App {\n    public static void main(String[] args) {\n        SimbootApp.run(args)\n                .launchBlocking()\n                .joinBlocking();\n    }\n}"))}function v(){return a.createElement(l.Z,{groupId:"code"},a.createElement(o.Z,{value:"Kotlin"},a.createElement(f,null)),a.createElement(o.Z,{value:"Java"},a.createElement(b,null)))}function A(){return a.createElement(l.Z,{groupId:"w19code-show"},a.createElement(o.Z,{value:"\u6700\u7b80\u793a\u4f8b"},a.createElement(s,null)),a.createElement(o.Z,{value:"\u5b8c\u6574\u793a\u4f8b"},a.createElement(g,null)),a.createElement(o.Z,{value:"\u6269\u5c55\u793a\u4f8b"},a.createElement(d,null)),a.createElement(o.Z,{value:"\u5feb\u901f\u542f\u52a8\u793a\u4f8b"},a.createElement(v,null)))}function h(){return a.createElement(l.Z,{groupId:"code"},a.createElement(o.Z,{value:"Kotlin"},a.createElement(i.Z,{language:"kotlin",title:"com/example/SpringBootApp.kt"},"@EnableSimbot\n@SpringBootApplication\nclass SpringBootApp\n\n\nfun main(vararg args: String) {\n    runApplication<SpringBootApp>(*args)\n}")),a.createElement(o.Z,{value:"Java"},a.createElement(i.Z,{language:"java",title:"com/example/SpringBootApp.java"},"@EnableSimbot\n@SpringBootApplication\npublic class SpringBootApp {\n    public static void main(String[] args) {\n        SpringApplication.run(SpringBootApp.class, args);\n    }\n}")))}function E(){return a.createElement(a.Fragment,null,a.createElement(r.Z,{type:"note"},a.createElement("p",null,"Spring Boot\u6a21\u5757\u4e0b\u4e0d\u592a\u5efa\u8bae\u901a\u8fc7\u524d\u8ff0\u7684 ",a.createElement("code",null," simbotApplication { ... } ")," \u7684\u65b9\u5f0f\u6765\u4f7f\u7528 \u2014\u2014\u2014\u2014 \u8fd9\u4e9b\u884c\u4e3a\u5c06\u4f1a\u7531\u5185\u90e8\u7684Spring Boot\u914d\u7f6e\u6765\u5b8c\u6210\u3002"),a.createElement("p",null,"\u56e0\u6b64\u6b64\u5904\u53ea\u63d0\u4f9b\u5feb\u901f\u5f00\u59cb\u793a\u4f8b\u3002")),a.createElement(l.Z,{groupId:"w19code-show"},a.createElement(o.Z,{value:"\u5feb\u901f\u5f00\u59cb\u793a\u4f8b"},a.createElement(h,null))))}function k(e){let{}=e;return a.createElement(l.Z,null,a.createElement(o.Z,{default:!0,value:"Simple"},a.createElement(m,null)),a.createElement(o.Z,{value:"Boot"},a.createElement(A,null)),a.createElement(o.Z,{value:"SpringBoot"},a.createElement(E,null)))}},3612:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(7294),l=t(6010),o=t(5281),i=t(5999);const r="admonition_LlT9",p="admonitionHeading_tbUL",c="admonitionIcon_kALy",u="admonitionContent_S0QG";const m={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},s={secondary:"note",important:"info",success:"tip",warning:"danger"};function g(e){var n;const{mdxAdmonitionTitle:t,rest:l}=function(e){const n=a.Children.toArray(e),t=n.find((e=>{var n;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),l=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:l}}(e.children);return{...e,title:null!=(n=e.title)?n:t,children:l}}function d(e){const{children:n,type:t,title:i,icon:d}=g(e),f=function(e){var n;const t=null!=(n=s[e])?n:e;return m[t]||(console.warn('No admonition config found for admonition type "'+t+'". Using Info as fallback.'),m.info)}(t),b=null!=i?i:f.label,{iconComponent:v}=f,A=null!=d?d:a.createElement(v,null);return a.createElement("div",{className:(0,l.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert","alert--"+f.infimaClassName,r)},a.createElement("div",{className:p},a.createElement("span",{className:c},A),b),a.createElement("div",{className:u},n))}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),l=t(6010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>g});var a=t(7462),l=t(7294),o=t(6010),i=t(2389),r=t(7392),p=t(7094),c=t(2466);const u="tabList__CuJ",m="tabItem_LNqP";function s(e){var n,t;const{lazy:i,block:s,defaultValue:g,values:d,groupId:f,className:b}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),A=null!=d?d:v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),h=(0,r.l)(A,((e,n)=>e.value===n.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const E=null===g?g:null!=(n=null!=g?g:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:v[0].props.value;if(null!==E&&!A.some((e=>e.value===E)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+E+'" but none of its children has the corresponding value. Available values are: '+A.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:S}=(0,p.U)(),[Z,y]=(0,l.useState)(E),B=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==Z&&A.some((n=>n.value===e))&&y(e)}const j=e=>{const n=e.currentTarget,t=B.indexOf(n),a=A[t].value;a!==Z&&(x(n),y(a),null!=f&&S(f,String(a)))},w=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=B.indexOf(e.currentTarget)+1;t=null!=(a=B[n])?a:B[0];break}case"ArrowLeft":{var l;const n=B.indexOf(e.currentTarget)-1;t=null!=(l=B[n])?l:B[B.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},b)},A.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===n?0:-1,"aria-selected":Z===n,key:n,ref:e=>B.push(e),onKeyDown:w,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":Z===n})}),null!=t?t:n)}))),i?(0,l.cloneElement)(v.filter((e=>e.props.value===Z))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==Z})))))}function g(e){const n=(0,i.Z)();return l.createElement(s,(0,a.Z)({key:String(n)},e))}},5358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(7462),l=(t(7294),t(3905));t(5431);const o={authors:"forliy",title:"2022\u5e74\u7b2c19\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},i=void 0,r={permalink:"/blog/2022/05/13/weak-19-report",editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/blog/2022-05-13-weak-19-report/index.mdx",source:"@site/blog/2022-05-13-weak-19-report/index.mdx",title:"2022\u5e74\u7b2c19\u5468\u5468\u62a5",description:"2022\u5e74\u7b2c19\u5468\u5468\u62a5\u55b5\u3002",date:"2022-05-13T00:00:00.000Z",formattedDate:"May 13, 2022",tags:[{label:"2022\u5468\u62a5",permalink:"/blog/tags/2022-\u5468\u62a5"},{label:"\u5468\u62a5",permalink:"/blog/tags/\u5468\u62a5"}],readingTime:4.805,hasTruncateMarker:!0,authors:[{name:"Scarlet Forliy",title:"Simple Robot \u9996\u5e2d\u5409\u7965\u7269",url:"https://github.com/ForliyScarlet",email:"ForliyScarlet@163.com",imageURL:"https://github.com/ForliyScarlet.png",key:"forliy"}],frontMatter:{authors:"forliy",title:"2022\u5e74\u7b2c19\u5468\u5468\u62a5",tags:["2022\u5468\u62a5","\u5468\u62a5"]},prevItem:{title:"2022\u5e74\u7b2c20\u5468\u5468\u62a5",permalink:"/blog/2022/05/20/week-20-report"},nextItem:{title:"2022\u5e74\u7b2c18\u5468\u5468\u62a5",permalink:"/blog/2022/05/06/week-18-report"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"2022\u5e74\u7b2c19\u5468\u5468\u62a5\u55b5\u3002"))}m.isMDXComponent=!0}}]);