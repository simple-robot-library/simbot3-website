(self.webpackChunksimbot_website=self.webpackChunksimbot_website||[]).push([[3085],{3612:(e,n,t)=>{"use strict";t.d(n,{Z:()=>v});var a=t(7294),l=t(6010),i=t(5281),r=t(5999);const o="admonition_LlT9",c="admonitionHeading_tbUL",s="admonitionIcon_kALy",m="admonitionContent_S0QG";const d={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},u={secondary:"note",important:"info",success:"tip",warning:"danger"};function f(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=a.Children.toArray(e),t=n.find((e=>{var n;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),l=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:l}}(e.children);return{...e,title:e.title??n,children:t}}function v(e){const{children:n,type:t,title:r,icon:v}=f(e),h=function(e){const n=u[e]??e;return d[n]||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),d.info)}(t),p=r??h.label,{iconComponent:E}=h,g=v??a.createElement(E,null);return a.createElement("div",{className:(0,l.Z)(i.k.common.admonition,i.k.common.admonitionType(e.type),"alert",`alert--${h.infimaClassName}`,o)},a.createElement("div",{className:c},a.createElement("span",{className:s},g),p),a.createElement("div",{className:m},n))}},7955:(e,n,t)=>{"use strict";t.d(n,{Z:()=>d});var a=t(7462),l=t(7294),i=t(6010),r=t(5999),o=t(6668),c=t(9960);const s="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5";function d(e){let{as:n,id:t,...d}=e;const{navbar:{hideOnScroll:u}}=(0,o.L)();if("h1"===n||!t)return l.createElement(n,(0,a.Z)({},d,{id:void 0}));const f=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:t});return l.createElement(n,(0,a.Z)({},d,{className:(0,i.Z)("anchor",u?m:s,d.className),id:t}),d.children,l.createElement(c.Z,{className:"hash-link",to:`#${t}`,"aria-label":f,title:f},"\u200b"))}},76:(e,n,t)=>{"use strict";t.d(n,{Z:()=>H});var a=t(7294),l=t(3905),i=t(7462),r=t(5742);var o=t(614);var c=t(9960);var s=t(6010),m=t(2389),d=t(6043);const u="details_lb9f",f="isBrowser_bmU9",v="collapsibleContent_i85q";function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function p(e,n){return!!e&&(e===n||p(e.parentElement,n))}function E(e){let{summary:n,children:t,...l}=e;const r=(0,m.Z)(),o=(0,a.useRef)(null),{collapsed:c,setCollapsed:E}=(0,d.u)({initialState:!l.open}),[g,b]=(0,a.useState)(l.open),N=a.isValidElement(n)?n:a.createElement("summary",null,n??"Details");return a.createElement("details",(0,i.Z)({},l,{ref:o,open:g,"data-collapsed":c,className:(0,s.Z)(u,r&&f,l.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;h(n)&&p(n,o.current)&&(e.preventDefault(),c?(E(!1),b(!0)):E(!0))}}),N,a.createElement(d.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{E(e),b(!e)}},a.createElement("div",{className:v},t)))}const g="details_b_Ee";function b(e){let{...n}=e;return a.createElement(E,(0,i.Z)({},n,{className:(0,s.Z)("alert alert--info",g,n.className)}))}var N=t(7955);function C(e){return a.createElement(N.Z,e)}const Z="containsTaskList_mC6p";function L(e){if(void 0!==e)return(0,s.Z)(e,(null==e?void 0:e.includes("contains-task-list"))&&Z)}const y="img_ev3q";var _=t(3612),k=t(9079);const x={head:function(e){const n=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(r.Z,e,n)},code:function(e){const n=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>{var t;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&n.includes(null==(t=e.props)?void 0:t.mdxType)}))?a.createElement("code",e):a.createElement(o.Z,e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){var n;return a.createElement(o.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:{...e})},details:function(e){const n=a.Children.toArray(e.children),t=n.find((e=>{var n;return a.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),l=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return a.createElement(b,(0,i.Z)({},e,{summary:t}),l)},ul:function(e){return a.createElement("ul",(0,i.Z)({},e,{className:L(e.className)}))},img:function(e){return a.createElement("img",(0,i.Z)({loading:"lazy"},e,{className:(n=e.className,(0,s.Z)(n,y))}));var n},h1:e=>a.createElement(C,(0,i.Z)({as:"h1"},e)),h2:e=>a.createElement(C,(0,i.Z)({as:"h2"},e)),h3:e=>a.createElement(C,(0,i.Z)({as:"h3"},e)),h4:e=>a.createElement(C,(0,i.Z)({as:"h4"},e)),h5:e=>a.createElement(C,(0,i.Z)({as:"h5"},e)),h6:e=>a.createElement(C,(0,i.Z)({as:"h6"},e)),admonition:_.Z,mermaid:k.Z};function H(e){let{children:n}=e;return a.createElement(l.Zo,{components:x},n)}},4247:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>d});var a=t(7294),l=t(6010),i=t(1944),r=t(5281),o=t(6804),c=t(76),s=t(9407);const m="mdxPageWrapper_j9I6";function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:v}=u;return a.createElement(i.FG,{className:(0,l.Z)(f??r.k.wrapper.mdxPages,r.k.page.mdxPage)},a.createElement(i.d,{title:t,description:d}),a.createElement(o.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",m)},a.createElement("div",{className:(0,l.Z)("col",!v&&"col--8")},a.createElement("article",null,a.createElement(c.Z,null,a.createElement(n,null)))),!v&&n.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},9407:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});var a=t(7462),l=t(7294),i=t(6010),r=t(3743);const o="tableOfContents_bqdL";function c(e){let{className:n,...t}=e;return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",n)},l.createElement(r.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,n,t)=>{"use strict";t.d(n,{Z:()=>v});var a=t(7462),l=t(7294),i=t(6668);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function s(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>c(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,l.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,l.useRef)(void 0),t=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:i,maxHeadingLevel:r}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),c=s(o,{anchorTopOffset:t.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?l.createElement("ul",{className:i?void 0:t},n.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const f=l.memo(u);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...v}=e;const h=(0,i.L)(),p=m??h.tableOfContents.minHeadingLevel,E=u??h.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>o({toc:r(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:p,maxHeadingLevel:E});return d((0,l.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:E}}),[c,s,p,E])),l.createElement(f,(0,a.Z)({toc:g,className:t,linkClassName:c},v))}},9079:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var a=t(7294),l=t(1304);const i="mermaid_i2ME";l.Z.initialize({startOnLoad:!0});const r=e=>{let{chart:n}=e;return(0,a.useEffect)((()=>{l.Z.contentLoaded()}),[]),a.createElement("div",{className:`${i} mermaid`},n)}},1748:(e,n,t)=>{var a={"./locale":9234,"./locale.js":9234};function l(e){var n=i(e);return t(n)}function i(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=i,e.exports=l,l.id=1748}}]);