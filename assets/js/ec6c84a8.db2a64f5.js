"use strict";(self.webpackChunkhhc_2022=self.webpackChunkhhc_2022||[]).push([[942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(n),f=o,m=h["".concat(l,".").concat(f)]||h[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[h]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Clone with a Difference",c={unversionedId:"hhc2022/elfen_ring/clone_with_a_difference",id:"hhc2022/elfen_ring/clone_with_a_difference",title:"Clone with a Difference",description:"Challenge",source:"@site/docs/hhc2022/elfen_ring/clone_with_a_difference.md",sourceDirName:"hhc2022/elfen_ring",slug:"/hhc2022/elfen_ring/clone_with_a_difference",permalink:"/hhc2022/docs/hhc2022/elfen_ring/clone_with_a_difference",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"The Elfen Ring",permalink:"/hhc2022/docs/hhc2022/elfen_ring/"},next:{title:"Prison Escape",permalink:"/hhc2022/docs/hhc2022/elfen_ring/prison_escape"}},l={},s=[{value:"Challenge",id:"challenge",level:3},{value:"Answers",id:"answers",level:3}],p={toc:s};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clone-with-a-difference"},"Clone with a Difference"),(0,o.kt)("h3",{id:"challenge"},"Challenge"),(0,o.kt)("admonition",{title:"Challenge Text",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"Difficulty:")," \u2605\u2730\u2730\u2730\u2730"),(0,o.kt)("p",{parentName:"admonition"},"Clone a code repository. Get hints for this challenge from Bow Ninecandle in the Elfen Ring.")),(0,o.kt)("h3",{id:"answers"},"Answers"),(0,o.kt)("admonition",{title:"Terminal Question Prompt",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We just need you to clone one repo: git clone ",(0,o.kt)("a",{parentName:"p",href:"mailto:git@haugfactory.com"},"git@haugfactory.com"),":asnowball/aws_scripts.git\nThis should be easy, right?"),(0,o.kt)("p",{parentName:"admonition"},"Thing is: it doesn't seem to be working for me. This is a public repository though. I'm so confused!"),(0,o.kt)("p",{parentName:"admonition"},"Please clone the repo and cat the README.md file.\nThen runtoanswer and tell us the last word of the README.md file!")),(0,o.kt)("p",null,"This challenge instructs us to clone the repository ",(0,o.kt)("inlineCode",{parentName:"p"},"git@haugfactory.com:asnowball/aws_scripts.git"),". Unfortunately, since this is the SSH URL for this repository, this would require us to have an account on the Git server: haugfactory.com."),(0,o.kt)("p",null,"However, this is a public repository, so we can just use the HTTP URL to clone it. It's easy enough to infer from the SSH URL, but if we wanted to double check, we could always look at the ",(0,o.kt)("a",{parentName:"p",href:"https://haugfactory.com/orcadmin/aws_scripts"},"Gitlab page for the repo"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Answer: ",(0,o.kt)("code",null,"git clone https://haugfactory.com/aws_scripts.git")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bow@be60c9676c7e:~$ git clone https://haugfactory.com/aws_scripts.git\nCloning into 'aws_scripts'...\nUsername for 'https://haugfactory.com': ^C\nbow@be60c9676c7e:~$ git clone https://haugfactory.com/asnowball/aws_scripts.git\nCloning into 'aws_scripts'...\nremote: Enumerating objects: 64, done.\nremote: Total 64 (delta 0), reused 0 (delta 0), pack-reused 64\nUnpacking objects: 100% (64/64), 23.83 KiB | 1.32 MiB/s, done.\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Answer: ",(0,o.kt)("code",null,"maintainers")),(0,o.kt)("p",null,"Once we have the readme, we can ",(0,o.kt)("inlineCode",{parentName:"p"},"cat")," it to discover that the last word of the file is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"maintainers")),".")))}h.isMDXComponent=!0}}]);