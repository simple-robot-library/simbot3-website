"use strict";(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:o,block:m,defaultValue:d,values:b,groupId:f,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const O=null===d?d:null!=(t=null!=d?d:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+O+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[E,N]=(0,a.useState)(O),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==E&&h.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==E&&(j(t),N(r),null!=f&&w(f,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=T.indexOf(e.currentTarget)+1;n=null!=(r=T[t])?r:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},v)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>T.push(e),onKeyDown:x,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(y.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},1610:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294);const a="label_Yf5u";function l(e){let{type:t,href:n,children:l}=e;t=t||"primary";const o=r.createElement("span",{className:a},r.createElement("span",{className:"badge badge--"+t},l));return null!=n&&n.length>0?r.createElement("a",{href:n},o):o}},1644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));n(1610),n(5488),n(5162);const l={sidebar_position:10,title:"Application"},o=void 0,i={unversionedId:"basic/application",id:"basic/application",title:"Application",description:"Application\uff0c\u610f\u4e3a\u4e00\u4e2asimbot\u5e94\u7528\uff0c\u5728simbot\u4e2d\uff0c\u5b83\u626e\u6f14\u8005\u8d77\u70b9\u3001\u5165\u53e3\u7684\u89d2\u8272\u3002",source:"@site/docs/basic/application.md",sourceDirName:"basic",slug:"/basic/application",permalink:"/docs/basic/application",draft:!1,editUrl:"https://github.com/simple-robot-library/simbot3-website/blob/main/docs/basic/application.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Application"},sidebar:"myAutogeneratedSidebar",previous:{title:"BOT\u7ba1\u7406\u5668",permalink:"/docs/defition/bot-manager/"},next:{title:"\u4e8b\u4ef6\u76d1\u542c",permalink:"/docs/basic/event-listening"}},s={},c=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"**Application**"),"\uff0c\u610f\u4e3a\u4e00\u4e2asimbot\u5e94\u7528\uff0c\u5728simbot\u4e2d\uff0c\u5b83\u626e\u6f14\u8005\u8d77\u70b9\u3001\u5165\u53e3\u7684\u89d2\u8272\u3002"),(0,a.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("p",null,"\u4e86\u89e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," \u7684\u7b2c\u4e00\u6b65\uff0c\u5148\u8ba9\u6211\u4eec\u6765\u7b80\u5355\u4e86\u89e3\u4e00\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," \u7684",(0,a.kt)("strong",{parentName:"p"},"\u5b9a\u4e49"),"\u3002"),(0,a.kt)("admonition",{title:"TODO",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u65bd\u5de5\u4e2d")))}p.isMDXComponent=!0}}]);