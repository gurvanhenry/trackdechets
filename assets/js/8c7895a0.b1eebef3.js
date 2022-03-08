"use strict";(self.webpackChunktd_doc=self.webpackChunktd_doc||[]).push([[1954],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},71491:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),l=["components"],o={title:"Erreurs"},i=void 0,p={unversionedId:"reference/errors",id:"reference/errors",title:"Erreurs",description:"Formattage des erreurs",source:"@site/docs/reference/errors.md",sourceDirName:"reference",slug:"/reference/errors",permalink:"/reference/errors",editUrl:"https://github.com/MTES-MCT/trackdechets/edit/dev/doc/docs/reference/errors.md",tags:[],version:"current",frontMatter:{title:"Erreurs"},sidebar:"docs",previous:{title:"Validation des donn\xe9es",permalink:"/reference/validation"},next:{title:"Notifications",permalink:"/reference/notifications"}},u={},d=[{value:"Formattage des erreurs",id:"formattage-des-erreurs",level:2},{value:"Liste des codes erreur GraphQL",id:"liste-des-codes-erreur-graphql",level:2},{value:"Liste des codes HTTP",id:"liste-des-codes-http",level:2}],c={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"formattage-des-erreurs"},"Formattage des erreurs"),(0,s.kt)("p",null,"Dans le cas o\xf9 une erreur a lieu avant ou pendant l'ex\xe9cution d'une requ\xeate GraphQL, un champ ",(0,s.kt)("inlineCode",{parentName:"p"},"errors")," sera pr\xe9sent dans le corps de la r\xe9ponse. Ce champ correspond \xe0 une liste non vide d'erreurs format\xe9es de la fa\xe7on suivante:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Vous n\'\xeates pas authentifi\xe9",\n      "extensions": {\n        "code": "UNAUTHENTICATED"\n      }\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"Voir ",(0,s.kt)("a",{parentName:"p",href:"https://spec.graphql.org/June2018/#sec-Response-Format"},"GraphQL Response Format")," pour plus d'information sur le formattage des erreurs GraphQL."),(0,s.kt)("p",null,"Le champ ",(0,s.kt)("inlineCode",{parentName:"p"},"code")," permet au client de l'API d'\xeatre inform\xe9 du type d'erreur renvoy\xe9 et d'effectuer une action ad\xe9quate."),(0,s.kt)("h2",{id:"liste-des-codes-erreur-graphql"},"Liste des codes erreur GraphQL"),(0,s.kt)("p",null,"La liste des codes erreur utilis\xe9s est la suivante:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"GRAPHQL_PARSE_FAILED"),": Erreur de syntaxe dans la requ\xeate GraphQL. Exemple")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  me  // accolade manquante\n    email\n  }\n}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"GRAPHQL_VALIDATION_FAILED"),": La syntaxe de la requ\xeate GraphQL est correcte mais elle ne correspond pas au sch\xe9ma. Exemple:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  query {\n    me {\n      hair_color // le champ hair_color n'existe pas sur le type User\n    }\n  }\n}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"UNAUTHENTICATED"),": Vous n'\xeates pas authentifi\xe9")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"FORBIDDEN"),": Vous n'avez pas les droits pour effectuer l'action d\xe9sir\xe9e. Exemple: vous essayez de finaliser un bordereau sur lesquel aucune entreprise dont vous \xeates membre n'apparait.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"BAD_USER_INPUT"),": La requ\xeate GraphQL est valide mais la valeur des arguments fournis ne l'est pas. Exemple: vous essayez de passer un SIRET qui ne fait pas 14 caract\xe8res."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  companyInfos(siret: "123"){\n    siret\n  }\n}\n')),(0,s.kt)("p",null,"Dans le cas des erreurs ",(0,s.kt)("inlineCode",{parentName:"p"},"BAD_USER_INPUT")," un champ additionnel ",(0,s.kt)("inlineCode",{parentName:"p"},"invalidArgs")," pourra \xeatre pr\xe9sent dans la r\xe9ponse"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Le siret doit faire 14 caract\xe8res",\n      "extensions": {\n        "code": "BAD_USER_INPUT",\n        "invalidArgs": [\n          "siret"\n        ]\n      }\n    }\n  ]\n}\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"INTERNAL_SERVER_ERROR"),": Une erreur inconnue s'est produite. Ce code s'accompagne du message d'erreur \"Erreur serveur\"")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Erreur serveur",\n      "extensions": {\n        "code": "INTERNAL_SERVER_ERROR"\n      }\n    }\n  ]\n}\n')),(0,s.kt)("h2",{id:"liste-des-codes-http"},"Liste des codes HTTP"),(0,s.kt)("p",null,"Ci-dessous un tableau r\xe9capitulatif des diff\xe9rents codes HTTP et codes GraphQL possibles :"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Code HTTP"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Code GraphQL"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Erreur"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"200"),(0,s.kt)("td",{parentName:"tr",align:"left"},"UNAUTHENTICATED"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Vous n'\xeates pas authentifi\xe9")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"200"),(0,s.kt)("td",{parentName:"tr",align:"left"},"FORBIDDEN"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Vous n'avez pas les droits pour effectuer l'action d\xe9sir\xe9e")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"200"),(0,s.kt)("td",{parentName:"tr",align:"left"},"BAD_USER_INPUT"),(0,s.kt)("td",{parentName:"tr",align:"left"},"La requ\xeate GraphQL est valide mais la valeur des arguments fournis ne l'est pas")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"400"),(0,s.kt)("td",{parentName:"tr",align:"left"},"GRAPHQL_PARSE_FAILED"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Erreur de syntaxe GraphQL")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"400"),(0,s.kt)("td",{parentName:"tr",align:"left"},"GRAPHQL_VALIDATION_FAILED"),(0,s.kt)("td",{parentName:"tr",align:"left"},"La syntaxe de la requ\xeate GraphQL est correcte mais elle ne correspond pas au sch\xe9ma")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"502"),(0,s.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Le serveur GraphQL est indisponible")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"503"),(0,s.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Le serveur GraphQL est indisponible")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"504"),(0,s.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Le serveur GraphQL met trop de temps \xe0 r\xe9pondre")))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},'Le code HTTP renvoy\xe9 par le serveur GraphQL est toujours 200 lorsque la requ\xeate GraphQL a \xe9t\xe9 "comprise" par le serveur (la syntaxe est bonne et la requ\xeate correspond au sch\xe9ma). ',(0,s.kt)("br",null),"\nEn cas d'indisponibilit\xe9 ou de surcharge du serveur GraphQL, l'erreur renvoy\xe9e provient du serveur proxy et ne comporte pas de code erreur GraphQL."))))}m.isMDXComponent=!0}}]);