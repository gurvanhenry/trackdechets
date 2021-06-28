(self.webpackChunktd_doc=self.webpackChunktd_doc||[]).push([[5061],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99080:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),a=["components"],s={title:"Registre"},l={unversionedId:"guides/registre",id:"guides/registre",isDocsHomePage:!1,title:"Registre",description:"Il est possible d'exporter les donn\xe9es Trackd\xe9chets correspondant aux diff\xe9rents types de registres r\xe9glementaires:",source:"@site/docs/guides/registre.md",sourceDirName:"guides",slug:"/guides/registre",permalink:"/guides/registre",editUrl:"https://github.com/MTES-MCT/trackdechets/doc/docs/guides/registre.md",version:"current",frontMatter:{title:"Registre"},sidebar:"docs",previous:{title:"API SIRENE enrichie",permalink:"/guides/sirene"},next:{title:"R\xf4les",permalink:"/guides/roles"}},c=[],u={toc:c};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Il est possible d'exporter les donn\xe9es Trackd\xe9chets correspondant aux diff\xe9rents types de registres r\xe9glementaires:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"registre de d\xe9chets sortants (",(0,o.kt)("inlineCode",{parentName:"li"},"OUTGOING"),")"),(0,o.kt)("li",{parentName:"ul"},"registre de d\xe9chets entrants (",(0,o.kt)("inlineCode",{parentName:"li"},"INCOMING"),")"),(0,o.kt)("li",{parentName:"ul"},"registre transporteur (",(0,o.kt)("inlineCode",{parentName:"li"},"TRANSPORTED"),")"),(0,o.kt)("li",{parentName:"ul"},"registre n\xe9gociant (",(0,o.kt)("inlineCode",{parentName:"li"},"TRADED"),")"),(0,o.kt)("li",{parentName:"ul"},"registre exhaustif (",(0,o.kt)("inlineCode",{parentName:"li"},"ALL"),")")),(0,o.kt)("p",null,"Les donn\xe9es peuvent \xeatre s\xe9lectionn\xe9es par siret, date de d\xe9but, date de fin ou code d\xe9chet. Le format de l'export peut \xeatre csv (",(0,o.kt)("inlineCode",{parentName:"p"},"CSV"),") ou Excel (",(0,o.kt)("inlineCode",{parentName:"p"},"XLXS"),")"),(0,o.kt)("p",null,"Pour ce faire vous devez utiliser la query ",(0,o.kt)("a",{parentName:"p",href:"../api-reference/bsdd/queries#formsregister"},(0,o.kt)("inlineCode",{parentName:"a"},"formsRegister"))," de la fa\xe7on suivante"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'query {\n  formsRegister(sirets: ["xxxxxxxxxxxxxx"], exportType: OUTGOING, startDate: "2019-01-01", endDate: "2019-12-31", exportFormat: CSV) {\n    downloadLink\n  }\n}\n')),(0,o.kt)("p",null,"Vous recevrez en r\xe9ponse un lien de t\xe9l\xe9chargement \xe0 utiliser pour t\xe9l\xe9charger le fichier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "data": {\n    "formsRegister": {\n      "downloadLink": "http://api.trackdechets.beta.gouv.fr/download?token=xxxx"\n    }\n  }\n}\n\n')))}p.isMDXComponent=!0}}]);