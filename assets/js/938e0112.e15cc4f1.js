(self.webpackChunktd_doc=self.webpackChunktd_doc||[]).push([[429],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=o(n),c=a,k=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},62577:function(e,t,n){"use strict";var r=n(67294),a=n(21140),l=n.n(a);l().initialize({startOnLoad:!0});t.Z=function(e){var t=e.chart;return(0,r.useEffect)((function(){l().contentLoaded()}),[]),r.createElement("div",{className:"mermaid"},t)}},31322:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(62577),d=["components"],u={title:"BSDD"},o=void 0,p={unversionedId:"reference/statuts/bsdd",id:"reference/statuts/bsdd",title:"BSDD",description:"Au cours de son cycle de vie, un BSDD num\xe9rique peut passer par diff\xe9rents \xe9tats d\xe9crits ici.",source:"@site/docs/reference/statuts/bsdd.mdx",sourceDirName:"reference/statuts",slug:"/reference/statuts/bsdd",permalink:"/reference/statuts/bsdd",editUrl:"https://github.com/MTES-MCT/trackdechets/edit/dev/doc/docs/reference/statuts/bsdd.mdx",tags:[],version:"current",frontMatter:{title:"BSDD"},sidebar:"docs",previous:{title:"Scalars",permalink:"/reference/api-reference/registre/scalars"},next:{title:"BSDASRI",permalink:"/reference/statuts/bsdasri"}},m={},s=[],c={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Au cours de son cycle de vie, un BSDD num\xe9rique peut passer par diff\xe9rents \xe9tats d\xe9crits ",(0,l.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdd/enums#formstatus"},"ici"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DRAFT")," (brouillon): \xc9tat initial \xe0 la cr\xe9ation d'un BSD. Des champs obligatoires peuvent manquer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SEALED")," (finalis\xe9): BSD finalis\xe9. Les donn\xe9es sont valid\xe9es et un num\xe9ro de BSD ",(0,l.kt)("inlineCode",{parentName:"li"},"readableId")," est affect\xe9."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SENT")," (envoy\xe9): BSD en transit vers l'installation de destination, d'entreposage ou de reconditionnement"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RECEIVED")," (re\xe7u): BSD re\xe7u sur l'installation de destination"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ACCEPTED")," (accept\xe9): BSD accept\xe9 sur l'installation de destination"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"REFUSED")," (refus\xe9): D\xe9chet refus\xe9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PROCESSED")," (trait\xe9): BSD dont l'op\xe9ration de traitement a \xe9t\xe9 effectu\xe9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NO_TRACEABILITY")," (rupture de tra\xe7abilit\xe9): Rupture de tra\xe7abilit\xe9 autoris\xe9e par arr\xeat\xe9 pr\xe9fectoral avec transfert de responsabilit\xe9."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AWAITING_GROUP"),": BSD en attente de regroupement (code de traitement D 13, D 14, D 15, R 12, R 13)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GROUPED"),": BSD qui a \xe9t\xe9 ajout\xe9 \xe0 une annexe 2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TEMP_STORED"),": (re\xe7u): BSD re\xe7u sur l'installation d'entreposage provisoire ou de reconditionnement"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TEMP_STORED_ACCEPTED"),": (accept\xe9): BSD accept\xe9 sur l'installation d'entreposage provisoire ou de reconditionnement"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RESEALED"),": (finalis\xe9): BSD sur lequel les informations de l'entreposage provisoire ont \xe9t\xe9 finalis\xe9es et valid\xe9es"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RESENT"),": (envoy\xe9): BSD en transit vers l'installation de destination finale apr\xe8s un entreposage provisoire")),(0,l.kt)("p",null,"Chaque changement d'\xe9tat s'effectue gr\xe2ce \xe0 une mutation."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Mutation"),(0,l.kt)("th",{parentName:"tr",align:null},"Transition"),(0,l.kt)("th",{parentName:"tr",align:null},"Donn\xe9es"),(0,l.kt)("th",{parentName:"tr",align:null},"Permissions"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"createForm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-> DRAFT")," ",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#forminput"},"FormInput")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"\xe9metteur"),(0,l.kt)("li",null,"destinataire"),(0,l.kt)("li",null,"transporteur"),(0,l.kt)("li",null,"n\xe9gociant"),(0,l.kt)("li",null,"\xe9co-organisme"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"updateForm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"DRAFT -> DRAFT")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"SEALED -> SEALED"))))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#forminput"},"FormInput")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"\xe9metteur"),(0,l.kt)("li",null,"destinataire"),(0,l.kt)("li",null,"transporteur"),(0,l.kt)("li",null,"n\xe9gociant"),(0,l.kt)("li",null,"\xe9co-organisme"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"markAsSealed")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DRAFT -> SEALED")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"\xe9metteur"),(0,l.kt)("li",null,"destinataire"),(0,l.kt)("li",null,"transporteur"),(0,l.kt)("li",null,"n\xe9gociant"),(0,l.kt)("li",null,"\xe9co-organisme"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"signedByTransporter")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"SEALED -> SENT")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"RESEALED -> RESENT"))))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#transportersignatureforminput"},"TransporterSignatureFormInput")),(0,l.kt)("td",{parentName:"tr",align:null},"Uniquement le collecteur-transporteur, l'\xe9metteur ou le site d'entreposage provisoire/reconditionnement \xe9tant authentifi\xe9 gr\xe2ce au code de s\xe9curit\xe9 pr\xe9sent en param\xe8tre de la mutation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"markAsReceived")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"SENT -> ACCEPTED")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"SENT -> RECEIVED")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"SENT -> REFUSED"))))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#receivedforminput"},"ReceivedFormInput")),(0,l.kt)("td",{parentName:"tr",align:null},"Uniquement le destinataire du BSD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"markAsAccepted")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RECEIVED -> ACCEPTED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#acceptedforminput"},"AcceptedFormInput")),(0,l.kt)("td",{parentName:"tr",align:null},"Uniquement le destinataire du BSD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"markAsProcessed")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"RECEIVED -> PROCESSED")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"RECEIVED -> NO_TRACEABILITY")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"RECEIVED -> AWAITING_GROUP"))))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#processedforminput"},"ProcessedFormInput")),(0,l.kt)("td",{parentName:"tr",align:null},"Uniquement le destinataire du BSD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"markAsTempStored")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"SENT -> TEMP_STORER_ACCEPTED")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"SENT -> TEMP_STORED")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"SENT -> REFUSED"))))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#tempstoredforminput"},"TempStoredFormInput")),(0,l.kt)("td",{parentName:"tr",align:null},"Uniquement le site d'entreposage temporaire ou de reconditionnement")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"markAsTempStorerAccepted")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TEMP_STORED -> TEMP_STORER_ACCEPTED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#tempstoreracceptedforminput"},"TempStorerAcceptedFormInput")),(0,l.kt)("td",{parentName:"tr",align:null},"Uniquement le site d'entreposage temporaire ou de reconditionnement")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"markAsResealed")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"TEMP_STORED -> RESEALED")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"RESEALED -> RESEALED"))))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#resealedtoredforminput"},"ResealedFormInput")),(0,l.kt)("td",{parentName:"tr",align:null},"Uniquement le site d'entreposage temporaire ou de reconditionnement")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"importPaperForm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SEALED -> PROCESSED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#importpaperforminput"},"ImportPaperFormInput")),(0,l.kt)("td",{parentName:"tr",align:null},"Uniquement l'entreprise de destination")))),(0,l.kt)("p",null,"Le diagramme ci dessous retrace le cycle de vie d'un BSD dans Trackd\xe9chets:"),(0,l.kt)(i.Z,{chart:"\ngraph TD\nAO(NO STATE) --\x3e|createForm| A\nA --\x3e|updateForm| A\nB --\x3e|updateForm| B\nA[DRAFT] --\x3e|markAsSealed| B(SEALED)\nB --\x3e|signedByTransporter| C(SENT)\nB --\x3e|importPaperForm| E(PROCESSED)\nC --\x3e|markAsReceived| D(ACCEPTED)\nC --\x3e|markAsReceived - sans signature| M(RECEIVED)\nM --\x3e|markAsAccepted| D\nM --\x3e|markAsReceived - avec refus| I\nD --\x3e|markAsProcessed| E(PROCESSED)\nD --\x3e|markAsProcessed - avec rupture de tra\xe7abalit\xe9 |G(NO_TRACEABILITY)\nD --\x3e|markAsProcessed - avec op\xe9ration de regroupement | F(AWAITING_GROUP)\nC --\x3e|markAsReceived - avec refus| I(REFUSED)\nC --\x3e|markAsTempStored - avec refus| I\nF.->|createForm - appendix2Forms |A\nF--\x3e|Lorsque markAsSealed est appel\xe9 sur le BSD de regroupement avec annexe 2|H[GROUPED]\nH--\x3e|Lorsque markAsProcessed est appel\xe9 sur le BSD  de regroupement avec annexe 2|E\nC --\x3e|markAsTempStored - |J(TEMP_STORED)\nC --\x3e|markAsTempStored|N\nJ --\x3e|markAsTempStorerAccepted - avec refus|I\nJ --\x3e|markAsTempStorerAccepted|N(TEMP_STORER_ACCEPTED)\nN --\x3e|markAsResealed| K(RESEALED)\nK --\x3e|markAsResealed| K\nK --\x3e|signedByTransporter| L(RESENT)\nL --\x3e D\n",mdxType:"Mermaid"}))}k.isMDXComponent=!0},11748:function(e,t,n){var r={"./locale":89234,"./locale.js":89234};function a(e){var t=l(e);return n(t)}function l(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=l,e.exports=a,a.id=11748}}]);