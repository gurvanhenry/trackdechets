"use strict";(self.webpackChunktd_doc=self.webpackChunktd_doc||[]).push([[1890],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78555:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"Authentification"},u=void 0,s={unversionedId:"reference/authentification",id:"reference/authentification",title:"Authentification",description:"Authentification avec un token personnel",source:"@site/docs/reference/authentification.md",sourceDirName:"reference",slug:"/reference/authentification",permalink:"/reference/authentification",editUrl:"https://github.com/MTES-MCT/trackdechets/edit/dev/doc/docs/reference/authentification.md",tags:[],version:"current",frontMatter:{title:"Authentification"},sidebar:"docs",previous:{title:"Environnements",permalink:"/reference/environments/"},next:{title:"R\xf4les et permissions",permalink:"/reference/permissions"}},l={},p=[{value:"Authentification avec un token personnel",id:"authentification-avec-un-token-personnel",level:2},{value:"Authentification pour le compte de tiers",id:"authentification-pour-le-compte-de-tiers",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"authentification-avec-un-token-personnel"},"Authentification avec un token personnel"),(0,o.kt)("p",null,"L'authentification \xe0 l'API se fait avec un token qui doit \xeatre pass\xe9e via l'en-t\xeate ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," de chacune de vos requ\xeates de la fa\xe7on suivante :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ Authorization: "Bearer YOUR_TOKEN" }\n')),(0,o.kt)("p",null,"Chaque utilisateur inscrit sur la plateforme peut obtenir un token depuis l'interface Trackd\xe9chets en allant sur ",(0,o.kt)("em",{parentName:"p"},"Mon Compte")," > ",(0,o.kt)("em",{parentName:"p"},"Int\xe9gration API")," puis ",(0,o.kt)("em",{parentName:"p"},"G\xe9n\xe9rer une cl\xe9"),". Les tokens ont une dur\xe9e de vie inifinie. Il sera \xe0 terme possible de les r\xe9voquer depuis son compte Trackd\xe9chets."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"La mutation ",(0,o.kt)("inlineCode",{parentName:"p"},"login(email, password)")," qui permet d'obtenir un token via l'API GraphQL \xe0 partir de l'email et mot de passe est d\xe9sormais d\xe9pr\xe9ci\xe9e."))),(0,o.kt)("p",null,"Un token est li\xe9 \xe0 un utilisateur. Les permissions du token d\xe9coule donc directement des droits de l'utilisateur qui a g\xe9n\xe9r\xe9 le token. Voir aussi la r\xe9f\xe9rence sur les ",(0,o.kt)("a",{parentName:"p",href:"./permissions"},"permissions")),(0,o.kt)("h2",{id:"authentification-pour-le-compte-de-tiers"},"Authentification pour le compte de tiers"),(0,o.kt)("p",null,"Pour les logiciels (ex: logiciel SaaS d\xe9chets) d\xe9sirant se connecter \xe0 l'API Trackd\xe9chets pour le compte d'utilisateurs tiers, nous recommandons d'utiliser le protocole OAuth2 : ",(0,o.kt)("a",{parentName:"p",href:"../guides/oauth2"},"Cr\xe9er une application OAuth2")))}m.isMDXComponent=!0}}]);