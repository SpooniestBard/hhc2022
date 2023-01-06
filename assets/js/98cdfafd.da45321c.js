"use strict";(self.webpackChunkhhc_2022=self.webpackChunkhhc_2022||[]).push([[190],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(r),u=i,d=h["".concat(s,".").concat(u)]||h[u]||f[u]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7363:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:3},a="404 FTW",c={unversionedId:"hhc2022/web_ring/ftw",id:"hhc2022/web_ring/ftw",title:"404 FTW",description:"Background",source:"@site/docs/hhc2022/web_ring/404_ftw.md",sourceDirName:"hhc2022/web_ring",slug:"/hhc2022/web_ring/ftw",permalink:"/hhc2022/docs/hhc2022/web_ring/ftw",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Credential Mining",permalink:"/hhc2022/docs/hhc2022/web_ring/credential_mining"},next:{title:"IMDS, XXE, and other Abbreviations",permalink:"/hhc2022/docs/hhc2022/web_ring/imds_xxe_abbreviations"}},s={},l=[{value:"Background",id:"background",level:3},{value:"Challenge",id:"challenge",level:3}],p={toc:l};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"404-ftw"},"404 FTW"),(0,i.kt)("h3",{id:"background"},"Background"),(0,i.kt)("p",null,"Still using the artifact PCAP, we're now asked to look for the first successful forced browsing attempt that the attacker made."),(0,i.kt)("h3",{id:"challenge"},"Challenge"),(0,i.kt)("admonition",{title:"Question",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The next attack is forced browsing where the naughty one is guessing URLs. What's the first successful URL path in this attack?")),(0,i.kt)("p",null,'Still filtering on the source IP being the "Naughty IP", at the end of the cred mining attack we see a series of GET requests with different target url directories. The first of these is for the path ',(0,i.kt)("inlineCode",{parentName:"p"},"/index"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"List of HTTP GET requests sent by the naughty IP",src:r(1630).Z,width:"1328",height:"302"})),(0,i.kt)("p",null,"However, since we need to see the responses too, we'll remove the filter and look for the first packet after the forced browsing attack starts (packet 23352) that gets a response other than 404 (not found). Scrolling down, we can find the first 200 (success) response code from the server at packet 26774. Right clicking on it, we can once again right click on this packet and select ",(0,i.kt)("inlineCode",{parentName:"p"},"Follow -> HTTP Stream"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"HTTP stream trace of the first successfully attempted endpoint",src:r(8294).Z,width:"1853",height:"691"})),(0,i.kt)("p",null,"We can see from this request that the first successful endpoint was ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"/proc")),"."))}h.isMDXComponent=!0},1630:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/wr3-1-8cc309ed0492c78920193ee9504d4734.png"},8294:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/wr3-2-d9fad8700acac6051e8edf8ff3b90a47.png"}}]);