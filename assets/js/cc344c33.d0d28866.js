"use strict";(self.webpackChunktd_doc=self.webpackChunktd_doc||[]).push([[8120],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=n.createContext({}),o=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):f(f({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,u=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=o(r),d=l,k=p["".concat(a,".").concat(d)]||p[d]||c[d]||u;return r?n.createElement(k,f(f({ref:t},s),{},{components:r})):n.createElement(k,f({ref:t},s))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var u=r.length,f=new Array(u);f[0]=p;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:l,f[1]=i;for(var o=2;o<u;o++)f[o]=r[o];return n.createElement.apply(null,f)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},81024:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var n=r(87462),l=r(63366),u=(r(67294),r(3905)),f=["components"],i={id:"queries",title:"Queries",slug:"queries",sidebar_position:1},a=void 0,o={unversionedId:"reference/api-reference/bsff/queries",id:"reference/api-reference/bsff/queries",isDocsHomePage:!1,title:"Queries",description:"bsff",source:"@site/docs/reference/api-reference/bsff/queries.md",sourceDirName:"reference/api-reference/bsff",slug:"/reference/api-reference/bsff/queries",permalink:"/reference/api-reference/bsff/queries",editUrl:"https://github.com/MTES-MCT/trackdechets/edit/dev/doc/docs/reference/api-reference/bsff/queries.md",version:"current",sidebarPosition:1,frontMatter:{id:"queries",title:"Queries",slug:"queries",sidebar_position:1},sidebar:"docs",previous:{title:"Scalars",permalink:"/reference/api-reference/bsvhu/scalars"},next:{title:"Mutations",permalink:"/reference/api-reference/bsff/mutations"}},s=[{value:"bsff",id:"bsff",children:[]},{value:"bsffPdf",id:"bsffpdf",children:[]},{value:"bsffs",id:"bsffs",children:[]}],c={toc:s};function p(e){var t=e.components,r=(0,l.Z)(e,f);return(0,u.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"bsff"},"bsff"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Type:")," ",(0,u.kt)("a",{parentName:"p",href:"/reference/api-reference/bsff/objects#bsff"},"Bsff!")),(0,u.kt)("p",null,"Retourne un bordereau avec l'identifiant donn\xe9."),(0,u.kt)("p",{style:{marginBottom:"0.4em"}},(0,u.kt)("strong",null,"Arguments")),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"id",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/scalars#id"},(0,u.kt)("code",null,"ID!"))),(0,u.kt)("td",null,(0,u.kt)("p",null,"Identifiant du bordereau \xe0 retrouver."))))),(0,u.kt)("h2",{id:"bsffpdf"},"bsffPdf"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Type:")," ",(0,u.kt)("a",{parentName:"p",href:"/reference/api-reference/bsff/objects#filedownload"},"FileDownload!")),(0,u.kt)("p",null,"Retourne un lien de t\xe9l\xe9chargement au format PDF du bordereau avec l'identifiant donn\xe9."),(0,u.kt)("p",{style:{marginBottom:"0.4em"}},(0,u.kt)("strong",null,"Arguments")),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"id",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/scalars#id"},(0,u.kt)("code",null,"ID!"))),(0,u.kt)("td",null,(0,u.kt)("p",null,"Identifiant du bordereau \xe0 retrouver."))))),(0,u.kt)("h2",{id:"bsffs"},"bsffs"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Type:")," ",(0,u.kt)("a",{parentName:"p",href:"/reference/api-reference/bsff/objects#bsffconnection"},"BsffConnection!")),(0,u.kt)("p",null,"Retourne tous les bordereaux de l'utilisateur connect\xe9, en respectant les diff\xe9rents filtres."),(0,u.kt)("p",{style:{marginBottom:"0.4em"}},(0,u.kt)("strong",null,"Arguments")),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"after",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/scalars#id"},(0,u.kt)("code",null,"ID"))),(0,u.kt)("td",null,(0,u.kt)("p",null,"Retourne les bordereaux apr\xe8s celui qui correspond \xe0 l'identifiant donn\xe9."))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"before",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/scalars#id"},(0,u.kt)("code",null,"ID"))),(0,u.kt)("td",null,(0,u.kt)("p",null,"Retourne les bordereaux avant celui qui correspond \xe0 l'identifiant donn\xe9."))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"first",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/scalars#int"},(0,u.kt)("code",null,"Int"))),(0,u.kt)("td",null,(0,u.kt)("p",null,"Retourne les x premiers bordereaux."))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"last",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/scalars#int"},(0,u.kt)("code",null,"Int"))),(0,u.kt)("td",null,(0,u.kt)("p",null,"Retourne les x derniers bordereaux."))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"where",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/inputObjects#bsffwhere"},(0,u.kt)("code",null,"BsffWhere"))),(0,u.kt)("td",null,(0,u.kt)("p",null,"Filtre les r\xe9sultats d'apr\xe8s certains crit\xe8res."))))))}p.isMDXComponent=!0}}]);