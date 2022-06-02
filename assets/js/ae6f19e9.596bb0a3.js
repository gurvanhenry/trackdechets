"use strict";(self.webpackChunktd_doc=self.webpackChunktd_doc||[]).push([[2932],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return k}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),o=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=o(r),k=l,f=c["".concat(i,".").concat(k)]||c[k]||p[k]||s;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=r.length,a=new Array(s);a[0]=c;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var o=2;o<s;o++)a[o]=r[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},39975:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return p}});var n=r(87462),l=r(63366),s=(r(67294),r(3905)),a=["components"],u={id:"queries",title:"Queries",slug:"queries",sidebar_position:1},i=void 0,o={unversionedId:"reference/api-reference/bsdasri/queries",id:"reference/api-reference/bsdasri/queries",title:"Queries",description:"appendixForms",source:"@site/docs/reference/api-reference/bsdasri/queries.md",sourceDirName:"reference/api-reference/bsdasri",slug:"/reference/api-reference/bsdasri/queries",permalink:"/reference/api-reference/bsdasri/queries",editUrl:"https://github.com/MTES-MCT/trackdechets/edit/dev/doc/docs/reference/api-reference/bsdasri/queries.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"queries",title:"Queries",slug:"queries",sidebar_position:1},sidebar:"docs",previous:{title:"Scalars",permalink:"/reference/api-reference/bsdd/scalars"},next:{title:"Mutations",permalink:"/reference/api-reference/bsdasri/mutations"}},d={},p=[{value:"appendixForms",id:"appendixforms",level:2},{value:"bsdasri",id:"bsdasri",level:2},{value:"bsdasriPdf",id:"bsdasripdf",level:2},{value:"bsdasris",id:"bsdasris",level:2},{value:"form",id:"form",level:2},{value:"formPdf",id:"formpdf",level:2},{value:"formRevisionRequests",id:"formrevisionrequests",level:2},{value:"forms",id:"forms",level:2},{value:"formsLifeCycle",id:"formslifecycle",level:2},{value:"formsRegister",id:"formsregister",level:2},{value:"stats",id:"stats",level:2}],c={toc:p};function k(e){var t=e.components,r=(0,l.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"appendixforms"},"appendixForms"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type:")," ",(0,s.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#form"},"[Form!]!")),(0,s.kt)("p",null,"Renvoie des BSD candidats \xe0 un regroupement dans une annexe 2"),(0,s.kt)("p",{style:{marginBottom:"0.4em"}},(0,s.kt)("strong",null,"Arguments")),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Description"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"siret",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String!"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"Siret d'un des \xe9tablissements dont je suis membre"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"wasteCode",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Code d\xe9chet pour affiner la recherche"))))),(0,s.kt)("h2",{id:"bsdasri"},"bsdasri"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type:")," ",(0,s.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#bsdasri"},"Bsdasri!")),(0,s.kt)("p",{style:{marginBottom:"0.4em"}},(0,s.kt)("strong",null,"Arguments")),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Description"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"id",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#id"},(0,s.kt)("code",null,"ID!"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"Identifiant du BSD"))))),(0,s.kt)("h2",{id:"bsdasripdf"},"bsdasriPdf"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type:")," ",(0,s.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#filedownload"},"FileDownload!")),(0,s.kt)("p",null,"Renvoie un token pour t\xe9l\xe9charger un pdf de bordereau\nCe token doit \xeatre transmis \xe0 la route /download pour obtenir le fichier.\nIl est valable 10 secondes"),(0,s.kt)("p",{style:{marginBottom:"0.4em"}},(0,s.kt)("strong",null,"Arguments")),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Description"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"id",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#id"},(0,s.kt)("code",null,"ID"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"ID d'un bordereau"))))),(0,s.kt)("h2",{id:"bsdasris"},"bsdasris"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type:")," ",(0,s.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#bsdasriconnection"},"BsdasriConnection!")),(0,s.kt)("p",null,"Renvoie les Bsdasris.\nPar d\xe9faut, les dasris des diff\xe9rentes companies de l'utilisateur sont renvoy\xe9s."),(0,s.kt)("p",{style:{marginBottom:"0.4em"}},(0,s.kt)("strong",null,"Arguments")),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Description"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"after",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#id"},(0,s.kt)("code",null,"ID"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) PAGINATION Permet en conjonction avec ",(0,s.kt)("code",null,"first"),' de paginer "en avant" (des Bsdasri les plus r\xe9cents aux Bsdasri les plus anciens) Curseur apr\xe8s lequel les Bsdasri doivent \xeatre retourn\xe9s Attend un identifiant (propri\xe9t\xe9 ',(0,s.kt)("code",null,"id"),") de BSD D\xe9faut \xe0 vide, pour retourner les Bsdasri les plus r\xe9cents. Le BSD pr\xe9cis\xe9 dans le curseur ne fait pas partie du r\xe9sultat"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"first",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#int"},(0,s.kt)("code",null,"Int"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) PAGINATION Permet en conjonction avec ",(0,s.kt)("code",null,"after"),' de paginer "en avant" (des Bsdasri les plus r\xe9cents aux Bsdasri les plus anciens) Nombre de Bsdasri retourn\xe9s apr\xe8s le ',(0,s.kt)("code",null,"cursorAfter"),"D\xe9faut \xe0 50, maximum \xe0 500"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"before",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#id"},(0,s.kt)("code",null,"ID"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) PAGINATION Permet en conjonction avec ",(0,s.kt)("code",null,"last"),' de paginer "en arri\xe8re" (des Bsdasri les plus anciens aux Bsdasris les plus r\xe9cents) Curseur avant lequel les Bsdasri doivent \xeatre retourn\xe9s Attend un identifiant (propri\xe9t\xe9 ',(0,s.kt)("code",null,"id"),") de BSD D\xe9faut \xe0 vide, pour retourner les Bsdasri les plus anciens Le BSD pr\xe9cis\xe9 dans le curseur ne fait pas partie du r\xe9sultat"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"last",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#int"},(0,s.kt)("code",null,"Int"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) PAGINATION Nombre de Bsdasri retourn\xe9s avant le ",(0,s.kt)("code",null,"before"),"D\xe9faut \xe0 50, maximum \xe0 500"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"where",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/inputObjects#bsdasriwhere"},(0,s.kt)("code",null,"BsdasriWhere"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"Filtres de recherche"))))),(0,s.kt)("h2",{id:"form"},"form"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type:")," ",(0,s.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#form"},"Form!")),(0,s.kt)("p",null,"Renvoie un BSD s\xe9lectionn\xe9 par son ID (opaque ou lisible, l'un des deux doit \xeatre fourni)"),(0,s.kt)("p",{style:{marginBottom:"0.4em"}},(0,s.kt)("strong",null,"Arguments")),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Description"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"id",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#id"},(0,s.kt)("code",null,"ID"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"Identifiant opaque du BSD"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"readableId",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"Identifiant lisible du BSD"))))),(0,s.kt)("h2",{id:"formpdf"},"formPdf"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type:")," ",(0,s.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#filedownload"},"FileDownload!")),(0,s.kt)("p",null,"Renvoie un token pour t\xe9l\xe9charger un pdf de BSD\nCe token doit \xeatre transmis \xe0 la route /download pour obtenir le fichier.\nIl est valable 10 secondes"),(0,s.kt)("p",{style:{marginBottom:"0.4em"}},(0,s.kt)("strong",null,"Arguments")),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Description"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"id",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#id"},(0,s.kt)("code",null,"ID"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"ID d'un BSD"))))),(0,s.kt)("h2",{id:"formrevisionrequests"},"formRevisionRequests"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type:")," ",(0,s.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#formrevisionrequestconnection"},"FormRevisionRequestConnection!")),(0,s.kt)("p",null,"Renvoie les demandes de r\xe9visions BSDD associ\xe9es \xe0 un SIRET (demandes soumises et approbations requises)"),(0,s.kt)("p",{style:{marginBottom:"0.4em"}},(0,s.kt)("strong",null,"Arguments")),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Description"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"siret",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String!"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"SIRET d'un \xe9tablissement dont je suis membre"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"where",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/inputObjects#formrevisionrequestwhere"},(0,s.kt)("code",null,"FormRevisionRequestWhere"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Filtres"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"after",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) PAGINATION Permet en conjonction avec ",(0,s.kt)("code",null,"first"),' de paginer "en avant" (des r\xe9visions les plus r\xe9centes aux r\xe9visions les plus ancienness) Curseur apr\xe8s lequel les r\xe9visions doivent \xeatre retourn\xe9es Attend un identifiant (propri\xe9t\xe9 ',(0,s.kt)("code",null,"id"),") de r\xe9vision D\xe9faut \xe0 vide, pour retourner les r\xe9visions les plus r\xe9centes La r\xe9vision pr\xe9cis\xe9e dans le curseur ne fait pas partie du r\xe9sultat"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"first",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#int"},(0,s.kt)("code",null,"Int"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) PAGINATION Permet en conjonction avec ",(0,s.kt)("code",null,"after"),' de paginer "en avant" (des r\xe9visions les plus r\xe9centes aux r\xe9visions les plus anciennes) Nombre de r\xe9visions retourn\xe9es apr\xe8s le ',(0,s.kt)("code",null,"after"),"D\xe9faut \xe0 50"))))),(0,s.kt)("h2",{id:"forms"},"forms"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type:")," ",(0,s.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#form"},"[Form!]!")),(0,s.kt)("p",null,"Renvoie les BSDs de l'\xe9tablissement s\xe9lectionn\xe9.\nSi aucun SIRET n'est pr\xe9cis\xe9 et que l'utilisateur est membre d'une seule entreprise\nalors les BSD de cette entreprise sont retourn\xe9s.\nSi l'utilisateur est membre de 2 entreprises ou plus, vous devez obligatoirement\npr\xe9ciser un SIRET\nSi l'utilisateur n'est membre d'aucune entreprise, un tableau vide sera renvoy\xe9"),(0,s.kt)("p",null,"Vous pouvez filtrer:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"par r\xf4le que joue votre entreprise sur le BSD via ",(0,s.kt)("inlineCode",{parentName:"li"},"role")),(0,s.kt)("li",{parentName:"ul"},"par date de derni\xe8re modification via ",(0,s.kt)("inlineCode",{parentName:"li"},"updatedAfter")),(0,s.kt)("li",{parentName:"ul"},"par date d'envoi via ",(0,s.kt)("inlineCode",{parentName:"li"},"sentAfter")),(0,s.kt)("li",{parentName:"ul"},"par statut du BSD via ",(0,s.kt)("inlineCode",{parentName:"li"},"status")),(0,s.kt)("li",{parentName:"ul"},"les BSD qui attendent une action (ou non) de votre part via ",(0,s.kt)("inlineCode",{parentName:"li"},"hasNextStep")),(0,s.kt)("li",{parentName:"ul"},"par code d\xe9chet via ",(0,s.kt)("inlineCode",{parentName:"li"},"wasteCode")),(0,s.kt)("li",{parentName:"ul"},"par SIRET d'une entreprise pr\xe9sente n'importe o\xf9 sur le bordereau via ",(0,s.kt)("inlineCode",{parentName:"li"},"siretPresentOnForm"))),(0,s.kt)("p",null,"Par d\xe9faut:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"tous les BSD accessibles sont retourn\xe9s"),(0,s.kt)("li",{parentName:"ul"},"les BSD sont class\xe9s par date de cr\xe9ation, de la plus r\xe9cente \xe0 la plus vieille"),(0,s.kt)("li",{parentName:"ul"},"les r\xe9sultats sont pagin\xe9s par 50. Il est possible de modifier cette valeur via ",(0,s.kt)("inlineCode",{parentName:"li"},"first")," ou ",(0,s.kt)("inlineCode",{parentName:"li"},"last")," en fonction du curseur utilis\xe9"),(0,s.kt)("li",{parentName:"ul"},"pour afficher la suite des r\xe9sultats, utiliser ",(0,s.kt)("inlineCode",{parentName:"li"},"cursorAfter")," ou ",(0,s.kt)("inlineCode",{parentName:"li"},"cursorBefore"))),(0,s.kt)("p",{style:{marginBottom:"0.4em"}},(0,s.kt)("strong",null,"Arguments")),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Description"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"siret",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"SIRET d'un \xe9tablissement dont je suis membre"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"skip",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#int"},(0,s.kt)("code",null,"Int"))),(0,s.kt)("td",null,(0,s.kt)("p",null,'DEPRECATED - (Optionnel) PAGINATION Nombre d\'\xe9l\xe9ments \xe0 ne pas r\xe9cup\xe9rer en d\xe9but de liste dans le mode de pagination par "offset" Utiliser en conjonction avec ',(0,s.kt)("code",null,"first"),' pour paginer "en avant" (des plus r\xe9cents aux plus anciens) Utiliser en conjonction avec ',(0,s.kt)("code",null,"last"),' pour paginer "en arri\xe8re" (des plus anciens aux plus r\xe9cents) D\xe9faut \xe0 0'))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"cursorAfter",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#id"},(0,s.kt)("code",null,"ID"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) PAGINATION Permet en conjonction avec ",(0,s.kt)("code",null,"first"),' de paginer "en avant" (des bordereaux les plus r\xe9cents aux bordereaux les plus anciens) Curseur apr\xe8s lequel les bordereaux doivent \xeatre retourn\xe9s Attend un identifiant (propri\xe9t\xe9 ',(0,s.kt)("code",null,"id"),") de BSD D\xe9faut \xe0 vide, pour retourner les bordereaux les plus r\xe9cents Le BSD pr\xe9cis\xe9 dans le curseur ne fait pas partie du r\xe9sultat"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"first",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#int"},(0,s.kt)("code",null,"Int"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) PAGINATION Permet en conjonction avec ",(0,s.kt)("code",null,"cursorAfter"),' de paginer "en avant" (des bordereaux les plus r\xe9cents aux bordereaux les plus anciens) Nombre de bordereaux retourn\xe9s apr\xe8s le ',(0,s.kt)("code",null,"cursorAfter"),"D\xe9faut \xe0 50, maximum \xe0 500"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"cursorBefore",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#id"},(0,s.kt)("code",null,"ID"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) PAGINATION Permet en conjonction avec ",(0,s.kt)("code",null,"last"),' de paginer "en arri\xe8re" (des bordereaux les plus anciens aux bordereaux les plus r\xe9cents) Curseur avant lequel les bordereaux doivent \xeatre retourn\xe9s Attend un identifiant (propri\xe9t\xe9 ',(0,s.kt)("code",null,"id"),") de BSD D\xe9faut \xe0 vide, pour retourner les bordereaux les plus anciens Le BSD pr\xe9cis\xe9 dans le curseur ne fait pas partie du r\xe9sultat"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"last",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#int"},(0,s.kt)("code",null,"Int"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) PAGINATION Nombre de bordereaux retourn\xe9s avant le ",(0,s.kt)("code",null,"cursorBefore"),"D\xe9faut \xe0 50, maximum \xe0 500"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"sentAfter",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Retourne les BSD envoy\xe9s apr\xe8s la date Filtre sur la date d'envoi (date de la case 9 du bordereau) Au format ISO 8601 Par d\xe9faut vide, aucun filtre n'est appliqu\xe9"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"updatedAfter",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Retourne les BSD modifi\xe9s apr\xe8s la date Filtre sur la date de derni\xe8re modification Au format ISO 8601 Par d\xe9faut vide, aucun filtre n'est appliqu\xe9"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"status",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/enums#formstatus"},(0,s.kt)("code",null,"[FormStatus!]"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Filtre sur les statuts des bordereaux Si aucun filtre n'est pass\xe9, les bordereaux seront retourn\xe9s quel que soit leur statut D\xe9faut \xe0 vide."))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"roles",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/enums#formrole"},(0,s.kt)("code",null,"[FormRole!]"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Filtre sur le role de demandeur dams le bordereau Par exemple:"),(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("code",null,"roles: [TRANSPORTER]")," renverra les bordereaux pour lesquels je suis transporteur"),(0,s.kt)("li",null,(0,s.kt)("code",null,"roles: [EMITTER, RECIPIENT]")," renverra les bordereaux dont je suis l'\xe9metteur ou le destinataire final Voir ",(0,s.kt)("code",null,"FormRole")," pour la liste des roles sur lesquels il est possible de filtrer. Si aucune filtre n'est pass\xe9, les bordereaux seront retourn\xe9s quel que soit votre role dessus. D\xe9faut \xe0 vide.")))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"hasNextStep",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#boolean"},(0,s.kt)("code",null,"Boolean"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Permet de filtrer sur les bordereaux en attente d'une action de votre part Si ",(0,s.kt)("code",null,"true"),", seul les bordereaux attendant une action sont renvoy\xe9s Si ",(0,s.kt)("code",null,"false"),", seul les bordereaux n'attendant aucune action son renvoy\xe9s Si vide, tous les bordereaux sont renvoy\xe9s D\xe9faut \xe0 vide."))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"siretPresentOnForm",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Siret d'une autre entreprise pr\xe9sente sur le bordereau Vous n'avez pas besoin d'\xeatre membre de cette entreprise. Seuls les bordereaux ou cette entreprise apparait (dans n'importe quel cadre) seront retourn\xe9s. D\xe9faut \xe0 vide."))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"wasteCode",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Code d\xe9chet pour affiner la recherche Ex: 01 03 04* (Veillez \xe0 bien respecter les espaces). D\xe9faut \xe0 vide."))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"customId",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) CustomId pour affiner la recherche D\xe9faut \xe0 vide."))))),(0,s.kt)("h2",{id:"formslifecycle"},"formsLifeCycle"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type:")," ",(0,s.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#formslifecycledata"},"formsLifeCycleData!")),(0,s.kt)("p",null,"Renvoie les changements de statut des bordereaux de l'entreprise s\xe9lectionn\xe9e.\nLa liste est pagin\xe9e par pages de 100 items, ordonn\xe9e par date d\xe9croissante (champ ",(0,s.kt)("inlineCode",{parentName:"p"},"loggedAt"),")\nSeuls les changements de statut disposant d'un champ ",(0,s.kt)("inlineCode",{parentName:"p"},"loggedAt")," non nul sont retourn\xe9s"),(0,s.kt)("p",{style:{marginBottom:"0.4em"}},(0,s.kt)("strong",null,"Arguments")),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Description"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"siret",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) SIRET d'un \xe9tablissement dont je suis membre"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"loggedBefore",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Date format\xe9e apr\xe8s laquelle les changements de statut doivent \xeatre retourn\xe9s (YYYY-MM-DD)"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"loggedAfter",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Date format\xe9e avant laquelle les changements de statut doivent \xeatre retourn\xe9s (YYYY-MM-DD), optionnel"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"cursorAfter",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,'(Optionnel) PAGINATION Permet de paginer les changements de statut "en avant" (des changements de statut les plus r\xe9cents aux changements de statut les plus anciens) Curseur apr\xe8s lequel les changements de statut doivent \xeatre retourn\xe9s Attend un identifiant (propri\xe9t\xe9 ',(0,s.kt)("code",null,"id"),") d'un changement de statut D\xe9faut \xe0 vide, pour retourner les changements de statut les plus r\xe9cents Le changement de statut pr\xe9cis\xe9 dans le curseur ne fait pas partie du r\xe9sultat"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"cursorBefore",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,'(Optionnel) PAGINATION Permet de paginer les changements de statut "en arri\xe8re" (des changements de statut les plus anciens aux changements de statut les plus r\xe9cents) Curseur avant lequel les changements de statut doivent \xeatre retourn\xe9s Attend un identifiant (propri\xe9t\xe9 ',(0,s.kt)("code",null,"id"),") d'un changement de statut D\xe9faut \xe0 vide, pour retourner les changements de statut les plus anciens Le changement de statut pr\xe9cis\xe9 dans le curseur ne fait pas partie du r\xe9sultat"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"formId",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#id"},(0,s.kt)("code",null,"ID"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) ID d'un BSD en particulier"))))),(0,s.kt)("h2",{id:"formsregister"},"formsRegister"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type:")," ",(0,s.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#filedownload"},"FileDownload!")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Deprecated: Utiliser wastesDownloadLink")),(0,s.kt)("p",null,"DEPRECATED - Renvoie un lien de t\xe9l\xe9chargement pour t\xe9l\xe9charger le registre BSDD\nLe lien est valable 10 secondes"),(0,s.kt)("p",{style:{marginBottom:"0.4em"}},(0,s.kt)("strong",null,"Arguments")),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Description"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"sirets",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"[String!]!"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"Liste de SIRET pour lesquelles exporter le registre"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"exportType",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/enums#formsregisterexporttype"},(0,s.kt)("code",null,"FormsRegisterExportType"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Mod\xe8le de registre (exhaustif, entrants, sortants, transport, n\xe9gociants) D\xe9faut: ALL"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"startDate",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#datetime"},(0,s.kt)("code",null,"DateTime"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Filtre les donn\xe9es par une date de d\xe9but D\xe9faut: aucune valeur"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"endDate",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#datetime"},(0,s.kt)("code",null,"DateTime"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Filtre les donn\xe9es par une date de fin D\xe9faut: aucune valeur"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"wasteCode",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#string"},(0,s.kt)("code",null,"String"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Filtre les donn\xe9es par code d\xe9chet D\xe9faut: Tous les codes d\xe9chets"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"exportFormat",(0,s.kt)("br",null),(0,s.kt)("a",{href:"/reference/api-reference/bsdasri/enums#formsregisterexportformat"},(0,s.kt)("code",null,"FormsRegisterExportFormat"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Optionnel) Format de l'export D\xe9faut: csv"))))),(0,s.kt)("h2",{id:"stats"},"stats"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type:")," ",(0,s.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#companystat"},"[CompanyStat!]!")),(0,s.kt)("p",null,"Renvoie des statistiques sur le volume de d\xe9chets entrant et sortant"))}k.isMDXComponent=!0}}]);