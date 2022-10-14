"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3052],{3905:(e,n,t)=>{t.d(n,{Zo:()=>v,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},v=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,v=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,m=u["".concat(p,".").concat(d)]||u[d]||s[d]||o;return t?r.createElement(m,a(a({ref:n},v),{},{components:t})):r.createElement(m,a({ref:n},v))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const o={title:"\u4e8b\u4ef6\u6982\u8ff0"},a=void 0,l={unversionedId:"defition/event-overview/index",id:"defition/event-overview/index",title:"\u4e8b\u4ef6\u6982\u8ff0",description:"\u4e8b\u4ef6\u662fsimbot\u7684\u6838\u5fc3\u4e4b\u4e00\u3002",source:"@site/docs/defition/event-overview/index.md",sourceDirName:"defition/event-overview",slug:"/defition/event-overview/",permalink:"/docs/defition/event-overview/",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/docs/defition/event-overview/index.md",tags:[],version:"current",lastUpdatedBy:"ForteScarlet",lastUpdatedAt:1665775945,formattedLastUpdatedAt:"Oct 14, 2022",frontMatter:{title:"\u4e8b\u4ef6\u6982\u8ff0"},sidebar:"docs",previous:{title:"\u5bb9\u5668\u6982\u8ff0",permalink:"/docs/defition/container-overview/"},next:{title:"\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587",permalink:"/docs/defition/event-overview/event-processing-context/"}},p={},c=[{value:"Event",id:"event",level:2},{value:"Event.Key",id:"eventkey",level:2},{value:"Event\u7684\u5b9e\u73b0",id:"event\u7684\u5b9e\u73b0",level:2},{value:"\u6807\u51c6\u4e8b\u4ef6\u5b9a\u4e49",id:"\u6807\u51c6\u4e8b\u4ef6\u5b9a\u4e49",level:2}],v={toc:c};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e8b\u4ef6\u662fsimbot\u7684\u6838\u5fc3\u4e4b\u4e00\u3002"),(0,i.kt)("h2",{id:"event"},"Event"),(0,i.kt)("p",null,"\u4ecesimbot3\u7248\u672c\u5f00\u59cb\uff0c\u4e8b\u4ef6\u7684\u6839\u63a5\u53e3\u4e0d\u518d\u4fdd\u7559\u9057\u7559\u547d\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgGet"),"\uff0c\u800c\u662f\u76f4\u63a5\u547d\u540d\u4e3a\u5e38\u89c1\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),"\u3002"),(0,i.kt)("p",null,"\u4e8b\u4ef6\u662f\u5728simbot\u4e2d\u6700\u57fa\u7840\u4e14\u6700\u5e38\u89c1\u7684\u7c7b\u578b\u4e4b\u4e00\uff0c\u5b83\u4ee3\u8868\u4e86\u4e00\u6b21\u4e8b\u4ef6\u8c03\u5ea6\u4e2d\u6240\u627f\u8f7d\u7684\u4e8b\u4ef6\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," \u7684\u57fa\u7840\u5b9a\u4e49\u5982\u4e0b\uff08\u7565\u6709\u7b80\u5316\uff09\uff1a"),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5f53\u4e0b\u8ff0\u63cf\u8ff0\u4e0e\u5b9e\u9645\u4ee3\u7801\u4ea7\u751f\u51fa\u5165\u65f6\uff0c\u4ee5",(0,i.kt)("strong",{parentName:"p"},"\u5b9e\u9645\u4ee3\u7801"),"\u8868\u73b0\u4e3a\u51c6\uff0c\n\u5e76\u53ca\u65f6\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/simple-robot-library/simbot3-website/issues/"},(0,i.kt)("strong",{parentName:"a"},"issue"))," \u8fdb\u884c\u53cd\u9988\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'public interface Event : BotContainer, IDContainer, ComponentContainer {\n\n    /** \u4e8b\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u3002 */\n    override val id: ID\n\n    /** \u4e0e\u8fd9\u4e2a\u4e8b\u4ef6\u6709\u5173\u7cfb\u7684 [Bot]. */\n    override val bot: Bot\n\n    /**\n     * \u4e00\u4e2a\u4e8b\u4ef6\u6240\u5c5e\u7684\u7ec4\u4ef6\u3002\n     * \u901a\u5e38\u4e0e [bot] \u7684\u7ec4\u4ef6\u6240\u5c5e\u4e00\u81f4\u3002\n     */\n    override val component: Component\n\n    /**\n     * \u6b64\u65f6\u95f4\u53d1\u751f\u7684\u65f6\u95f4\u6233\u3002\n     *\n     * \u5982\u679c\u76f8\u5173\u7ec4\u4ef6\u652f\u6301\uff0c\u5219\u4e3a\u5bf9\u5e94\u65f6\u95f4\uff0c\u5982\u679c\u4e0d\u652f\u6301\u5219\u4e00\u822c\u4e3a\u6784\u5efa\u65f6\u7684\u77ac\u65f6\u65f6\u95f4\u6233\u3002\n     */\n    public val timestamp: Timestamp\n\n\n    /**\n     * \u5f97\u5230\u5f53\u524d\u4e8b\u4ef6\u6240\u5bf9\u5e94\u7684\u7c7b\u578bkey\u3002\n     */\n    public val key: Key<out Event>\n\n    /** \u6240\u6709\u4e8b\u4ef6\u7684\u6839\u7c7b\u578b\u3002 */\n    public companion object Root : Key<Event> {\n    \n        /** Event\u6839\u8282\u70b9\u7684\u552f\u4e00ID\u5e38\u91cf\u3002 */\n        public const val ID_VALUE: String = "api.root"\n\n        /** Event\u6839\u8282\u70b9\u7684\u552f\u4e00ID\u3002 */\n        override val id: CharSequenceID = ID_VALUE.ID\n\n        /** Event\u662f\u6240\u6709\u4e8b\u4ef6\u7684\u6839\uff0c\u4e0d\u53ef\u80fd\u662f\u5176\u4ed6\u4e8b\u4ef6\u7684\u5b50\u9879\u3002 */\n        override val parents: Set<Key<*>> get() = emptySet()\n        \n        // ...\n    }\n    \n    // \u5176\u4ed6\u5b9a\u4e49, \u4e0b\u6587\u5c06\u4f1a\u63d0\u5230\n    \n    public interface Key { /* ... */ }\n    \n}\n')),(0,i.kt)("p",null,"\u5176\u4e2d\uff0c\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," \u5e94\u8be5\u6709\u5b83\u5c5e\u4e8e\u7684\u7ec4\u4ef6\u3002\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"bot.component")," \u6765\u51b3\u5b9a\u4e00\u4e2a\u4e8b\u4ef6\u7684\u6240\u5c5e\u7ec4\u4ef6\u3002"),(0,i.kt)("h2",{id:"eventkey"},"Event.Key"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u4e8b\u4ef6\u548c\u5bf9\u5176\u4e8b\u4ef6\u7c7b\u578b\u7684\u5224\u65ad\uff0c\u4e0d\u518d\u76f4\u63a5\u4f7f\u7528\u5176\u7c7b\u578b ( ",(0,i.kt)("inlineCode",{parentName:"p"},"[K]Class")," ) \u8fdb\u884c\u76f4\u63a5\u5224\u65ad\uff0c\u800c\u662f\u4f7f\u7528\u7ea6\u5b9a\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Event.Key")," \u4f5c\u4e3a\u4e8b\u4ef6\u7c7b\u578b\u7684\u5224\u65ad\u4f9d\u636e\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Event.Key")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," \u7684\u5185\u90e8\u63a5\u53e3\uff0c\u5176\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"public interface Event /* : ... */ {\n    \n    // ...\n\n    public interface Key<E : Event> {\n\n        /**\n         * \u6b64\u4e8b\u4ef6\u7684ID\uff0c\u9700\u8981\u662f\u552f\u4e00\u7684\u3002\u5047\u82e5\u5728\u4e8b\u4ef6\u6ce8\u518c\u65f6\u51fa\u73b0\u4e86ID\u76f8\u540c\u4f46\u4e0d\u662f\u540c\u4e00\u4e2aKey\u7684\u60c5\u51b5\u5c06\u4f1a\u5bfc\u81f4\u5f02\u5e38\u3002\n         */\n        public val id: CharSequenceID\n\n        /**\n         * \u6b64\u4e8b\u4ef6\u6240\u7ee7\u627f\u7684\u6240\u6709\u7236\u4e8b\u4ef6\u3002\n         * \u6b64\u5c5e\u6027\u5e94\u5f53\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u4e0d\u5e94\u5728\u8fd0\u884c\u671f\u5185\u53d1\u751f\u53d8\u66f4\u3002\n         */\n        public val parents: Set<Key<*>>\n\n        /**\n         * \u5c06\u4e00\u4e2a\u63d0\u4f9b\u7684\u7c7b\u578b\u8f6c\u5316\u4e3a\u5f53\u524d\u7684\u76ee\u6807\u4e8b\u4ef6\u3002\n         * \u5982\u679c\u5f97\u5230null\uff0c\u5219\u8bf4\u660e\u65e0\u6cd5\u88ab\u8f6c\u5316\u3002\n         */\n        public fun safeCast(value: Any): E?\n\n\n        public companion object {\n            // ... \n        }\n    }\n    \n    // ...\n\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Event.Key")," \u76ee\u524d\u88ab\u7ea6\u5b9a\u4e3a\u5fc5\u987b",(0,i.kt)("strong",{parentName:"p"},"\u5c3d\u53ef\u80fd\u5730"),"\u901a\u8fc7\u4f34\u751f\u5bf9\u8c61\u5b9e\u73b0\uff0c\u4e14\u5176\u6cdb\u578b\u7c7b\u578b\u6807\u8bb0\u4e3a\u5f53\u524d\u88ab\u76d1\u542c\u7684\u4e8b\u4ef6\u3002\n\u5176\u4e2d\uff0c\u4e3a\u4e86\u8fbe\u6210\u4e8b\u4ef6\u7ee7\u627f\u5173\u7cfb\uff0c\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"parents")," \u6807\u8bb0\u5f53\u524d\u4e8b\u4ef6\u6240\u7ee7\u627f\u7684\u7236\u7c7b\u4e8b\u4ef6\u3002"),(0,i.kt)("h2",{id:"event\u7684\u5b9e\u73b0"},"Event\u7684\u5b9e\u73b0"),(0,i.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," \u7c7b\u578b\u7531\u7ec4\u4ef6\u8fdb\u884c\u5177\u4f53\u7684\u5b9e\u73b0\u3002\u6838\u5fc3\u5e93\u63d0\u4f9b\u4e86\u90e8\u5206\u5e38\u89c1\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),' \u7c7b\u578b\u5e76\u4f5c\u4e3a"\u6807\u51c6\u4e8b\u4ef6\u7c7b\u578b"\u3002\u7ec4\u4ef6\u5728\u5b9e\u73b0\u7684\u65f6\u5019\uff0c\n\u5e94\u5f53\u4f18\u5148\u8003\u8651\u662f\u5426\u6ee1\u8db3\u6807\u51c6\u4e8b\u4ef6\u7c7b\u578b\u7684\u5b9a\u4e49\uff0c\u5982\u679c\u6ee1\u8db3\u5219\u5e94\u4f18\u5148\u4f7f\u7528\u6807\u51c6\u4e8b\u4ef6\u7c7b\u578b\u4f5c\u4e3a\u5b9e\u73b0\u76ee\u6807\u3002\u53ea\u6709\u5728\u4e0d\u6ee1\u8db3\u7684\u60c5\u51b5\u4e0b\u7ec4\u4ef6\u5b9e\u73b0\u624d\u5e94\u8003\u8651\u63d0\u4f9b\u989d\u5916\u7684\u975e\u6807\u51c6\u4e8b\u4ef6\u5b9e\u73b0\u3002'),(0,i.kt)("h2",{id:"\u6807\u51c6\u4e8b\u4ef6\u5b9a\u4e49"},"\u6807\u51c6\u4e8b\u4ef6\u5b9a\u4e49"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6807\u51c6\u4e8b\u4ef6\u76f8\u5173\u5185\u5bb9\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"standard-event"},"\u6807\u51c6\u4e8b\u4ef6"),"\u3002"))}s.isMDXComponent=!0}}]);