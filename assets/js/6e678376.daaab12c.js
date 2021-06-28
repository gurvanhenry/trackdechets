(self.webpackChunktd_doc=self.webpackChunktd_doc||[]).push([[5916],{35722:function(e,t,n){"use strict";var a=n(67294),r=n(21140),i=n.n(r);i().initialize({startOnLoad:!0});t.Z=function(e){var t=e.chart;return(0,a.useEffect)((function(){i().contentLoaded()}),[]),a.createElement("div",{className:"mermaid"},t)}},26127:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l=n(35722),d=["components"],p={title:"Cycle de vie du BSDD"},o={unversionedId:"bsdd/workflow",id:"bsdd/workflow",isDocsHomePage:!1,title:"Cycle de vie du BSDD",description:"Tableau de bord",source:"@site/docs/bsdd/workflow.md",sourceDirName:"bsdd",slug:"/bsdd/workflow",permalink:"/bsdd/workflow",editUrl:"https://github.com/MTES-MCT/trackdechets/doc/docs/bsdd/workflow.md",version:"current",frontMatter:{title:"Cycle de vie du BSDD"},sidebar:"docs",previous:{title:"Transport multi-modal",permalink:"/bsdd/multimodal"},next:{title:"Regroupement",permalink:"/bsdasri/regroupement"}},u=[{value:"Tableau de bord",id:"tableau-de-bord",children:[]},{value:"Num\xe9ro de BSD",id:"num\xe9ro-de-bsd",children:[]},{value:"\xc9tats du BSD",id:"\xe9tats-du-bsd",children:[]},{value:"Exemples",id:"exemples",children:[]},{value:"BSD au format pdf",id:"bsd-au-format-pdf",children:[]},{value:"Flux de modifications de BSD",id:"flux-de-modifications-de-bsd",children:[]},{value:"Import d&#39;un BSD sign\xe9 papier",id:"import-dun-bsd-sign\xe9-papier",children:[]}],s={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tableau-de-bord"},"Tableau de bord"),(0,i.kt)("p",null,"Nous int\xe9grons petit \xe0 petit l'ensemble des cas d'usage du suivi de d\xe9chets au bordereau num\xe9rique."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Fonctionnalit\xe9"),(0,i.kt)("th",{parentName:"tr",align:null},"\xc9tat"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BSD simple (case 1-6, 9, 11)"),(0,i.kt)("td",{parentName:"tr",align:null},"OK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Signature Transporteur (case 8)"),(0,i.kt)("td",{parentName:"tr",align:null},"OK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"N\xe9gociant (case 7)"),(0,i.kt)("td",{parentName:"tr",align:null},"OK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Destinatation ult\xe9rieure (case 12)"),(0,i.kt)("td",{parentName:"tr",align:null},"OK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rupture de tra\xe7abilit\xe9"),(0,i.kt)("td",{parentName:"tr",align:null},"OK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Refus de d\xe9chets"),(0,i.kt)("td",{parentName:"tr",align:null},"OK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Collecte de petites quantit\xe9s de d\xe9chets relevant d'une m\xeame rubrique (Annexe 1)"),(0,i.kt)("td",{parentName:"tr",align:null},"OK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R\xe9exp\xe9dition apr\xe8s transformation ou traitement aboutissant \xe0 des d\xe9chets dont la provenance reste identifiable (Annexe 2)"),(0,i.kt)("td",{parentName:"tr",align:null},"OK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Entreposage provisoire ou reconditionnement (case 13-19)"),(0,i.kt)("td",{parentName:"tr",align:null},"OK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Transport multi-modal simple (case 20-21)"),(0,i.kt)("td",{parentName:"tr",align:null},"OK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Transport multi-modal complexe"),(0,i.kt)("td",{parentName:"tr",align:null},"Planifi\xe9")))),(0,i.kt)("p",null,"Pour plus d'informations sur le calendrier de d\xe9ploiement des fonctionnalit\xe9s, vous pouvez consulter notre ",(0,i.kt)("a",{parentName:"p",href:"https://trello.com/b/2pkc7bFg/trackd%C3%A9chets-roadmap-produit"},"roadmap produit")),(0,i.kt)("h2",{id:"num\xe9ro-de-bsd"},"Num\xe9ro de BSD"),(0,i.kt)("p",null,"Chaque BSD est associ\xe9 \xe0 un identifiant opaque unique. Cet identifiant correspond au champ ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),' et doit \xeatre utilis\xe9 lors des diff\xe9rentes requ\xeates. En plus de l\'identifiant opaque, un identifiant "lisible" est g\xe9n\xe9r\xe9 (champ ',(0,i.kt)("inlineCode",{parentName:"p"},"readableId"),'). Cet identifiant apparait sur le bordereau dans la case "Bordereau n\xb0". L\'identifiant est sous la forme ',(0,i.kt)("inlineCode",{parentName:"p"},"TD-{ann\xe9e}-{identifiant}")," (Ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"TD-20-AAA00136"),"). Il peut \xeatre utiliser pour r\xe9cup\xe9rer l'identifiant opaque unique via la query ",(0,i.kt)("inlineCode",{parentName:"p"},"form"),"."),(0,i.kt)("p",null,"Vous pouvez \xe9galement ajouter un identifiant qui vous est propre pour faire le lien avec votre SI. Il vous faut pour cela utiliser le champ ",(0,i.kt)("inlineCode",{parentName:"p"},"customId"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Un QRCode g\xe9n\xe9r\xe9 dans l'interface utilisateur encode le champ ",(0,i.kt)("inlineCode",{parentName:"p"},"readableId"),"."))),(0,i.kt)("h2",{id:"\xe9tats-du-bsd"},"\xc9tats du BSD"),(0,i.kt)("p",null,"L'ensemble des champs du BSD num\xe9rique est d\xe9crit dans la ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/bsdd/objects#form"},"r\xe9f\xe9rence de l'API"),". Au cours de son cycle de vie, un BSD num\xe9rique peut passer par diff\xe9rents \xe9tats d\xe9crits ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/bsdd/objects#formstatus"},"ici"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRAFT")," (brouillon): \xc9tat initial \xe0 la cr\xe9ation d'un BSD. Des champs obligatoires peuvent manquer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SEALED")," (finalis\xe9): BSD finalis\xe9. Les donn\xe9es sont valid\xe9es et un num\xe9ro de BSD ",(0,i.kt)("inlineCode",{parentName:"li"},"readableId")," est affect\xe9."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SENT")," (envoy\xe9): BSD en transit vers l'installation de destination, d'entreposage ou de reconditionnement"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RECEIVED")," (re\xe7u): BSD re\xe7u sur l'installation de destination, d'entreposage ou de reconditionnement"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ACCEPTED")," (accept\xe9): BSD accept\xe9 sur l'installation de destination, d'entreposage ou de reconditionnement"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REFUSED")," (refus\xe9): D\xe9chet refus\xe9"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PROCESSED")," (trait\xe9): BSD dont l'op\xe9ration de traitement a \xe9t\xe9 effectu\xe9"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NO_TRACEABILITY")," (rupture de tra\xe7abilit\xe9): Rupture de tra\xe7abilit\xe9 autoris\xe9e par arr\xeat\xe9 pr\xe9fectoral avec transfert de responsabilit\xe9."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AWAITING_GROUP"),": BSD en attente de regroupement (code de traitement D 13, D 14, D 15, R 12, R 13)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GROUPED"),": BSD qui a \xe9t\xe9 ajout\xe9 \xe0 une annexe 2")),(0,i.kt)("p",null,"Chaque changement d'\xe9tat s'effectue gr\xe2ce \xe0 une mutation."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Mutation"),(0,i.kt)("th",{parentName:"tr",align:null},"Transition"),(0,i.kt)("th",{parentName:"tr",align:null},"Donn\xe9es"),(0,i.kt)("th",{parentName:"tr",align:null},"Permissions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"createForm")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-> DRAFT")," ",(0,i.kt)("br",null)),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#forminput"},"FormInput")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"\xe9metteur"),(0,i.kt)("li",null,"destinataire"),(0,i.kt)("li",null,"transporteur"),(0,i.kt)("li",null,"n\xe9gociant"),(0,i.kt)("li",null,"\xe9co-organisme"))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"updateForm")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DRAFT -> DRAFT")," ",(0,i.kt)("br",null)),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#forminput"},"FormInput")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"\xe9metteur"),(0,i.kt)("li",null,"destinataire"),(0,i.kt)("li",null,"transporteur"),(0,i.kt)("li",null,"n\xe9gociant"),(0,i.kt)("li",null,"\xe9co-organisme"))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"markAsSealed")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DRAFT -> SEALED")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"\xe9metteur"),(0,i.kt)("li",null,"destinataire"),(0,i.kt)("li",null,"transporteur"),(0,i.kt)("li",null,"n\xe9gociant"),(0,i.kt)("li",null,"\xe9co-organisme"))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"signedByTransporter")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"SEALED -> SENT")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"RESEALED -> RESENT"))))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#transportersignatureforminput"},"TransporterSignatureFormInput")),(0,i.kt)("td",{parentName:"tr",align:null},"Uniquement le collecteur-transporteur, l'\xe9metteur ou le site d'entreposage provisoire/reconditionnement \xe9tant authentifi\xe9 gr\xe2ce au code de s\xe9curit\xe9 pr\xe9sent en param\xe8tre de la mutation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"markAsReceived")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"SENT -> ACCEPTED")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"SENT -> RECEIVED")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"SENT -> REFUSED"))))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#receivedforminput"},"ReceivedFormInput")),(0,i.kt)("td",{parentName:"tr",align:null},"Uniquement le destinataire du BSD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"markAsAccepted")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RECEIVED -> ACCEPTED")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#acceptedforminput"},"AcceptedFormInput")),(0,i.kt)("td",{parentName:"tr",align:null},"Uniquement le destinataire du BSD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"markAsProcessed")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"RECEIVED -> PROCESSED")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"RECEIVED -> NO_TRACEABILITY")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"RECEIVED -> AWAITING_GROUP"))))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#processedforminput"},"ProcessedFormInput")),(0,i.kt)("td",{parentName:"tr",align:null},"Uniquement le destinataire du BSD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"markAsTempStored")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"SENT -> TEMP_STORER_ACCEPTED")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"SENT -> TEMP_STORED")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"SENT -> REFUSED"))))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#tempstoredforminput"},"TempStoredFormInput")),(0,i.kt)("td",{parentName:"tr",align:null},"Uniquement le site d'entreposage temporaire ou de reconditionnement")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"markAsTempStorerAccepted")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TEMP_STORED -> TEMP_STORER_ACCEPTED")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#tempstoreracceptedforminput"},"TempStorerAcceptedFormInput")),(0,i.kt)("td",{parentName:"tr",align:null},"Uniquement le site d'entreposage temporaire ou de reconditionnement")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"markAsResealed")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TEMP_STORED -> RESEALED")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#resealedtoredforminput"},"ResealedFormInput")),(0,i.kt)("td",{parentName:"tr",align:null},"Uniquement le site d'entreposage temporaire ou de reconditionnement")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"importPaperForm")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SEALED -> PROCESSED")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../api-reference/bsdd/inputObjects#importpaperforminput"},"ImportPaperFormInput")),(0,i.kt)("td",{parentName:"tr",align:null},"Uniquement l'entreprise de destination")))),(0,i.kt)("p",null,"Le diagramme ci dessous retrace le cycle de vie d'un BSD dans Trackd\xe9chets:"),(0,i.kt)(l.Z,{chart:"\ngraph TD\nAO(NO STATE) --\x3e|createForm| A\nA --\x3e|updateForm| A\nB --\x3e|updateForm| B\nA[DRAFT] --\x3e|markAsSealed| B(SEALED)\nB --\x3e|signedByTransporter| C(SENT)\nB --\x3e|importPaperForm| E(PROCESSED)\nC --\x3e|markAsReceived| D(ACCEPTED)\nC --\x3e|markAsReceived - sans signature| M(RECEIVED)\nM --\x3e|markAsAccepted| D\nM --\x3e|markAsReceived - avec refus| I\nD --\x3e|markAsProcessed| E(PROCESSED)\nD --\x3e|markAsProcessed - avec rupture de tra\xe7abalit\xe9 |G(NO_TRACEABILITY)\nD --\x3e|markAsProcessed - avec op\xe9ration de regroupement | F(AWAITING_GROUP)\nC --\x3e|markAsReceived - avec refus| I(REFUSED)\nC --\x3e|markAsTempStored - avec refus| I\nF.->|createForm - appendix2Forms |A\nF--\x3e|Lorsque markAsSealed est appel\xe9 sur le BSD de regroupement avec annexe 2|H[GROUPED]\nH--\x3e|Lorsque markAsProcessed est appel\xe9 sur le BSD  de regroupement avec annexe 2|E\nC --\x3e|markAsTempStored - |J(TEMP_STORED)\nC --\x3e|markAsTempStored|N\nJ --\x3e|markAsTempStorerAccepted - avec refus|I\nJ --\x3e|markAsTempStorerAccepted|N(TEMP_STORER_ACCEPTED)\nN --\x3e|markAsResealed| K(RESEALED)\nK --\x3e|signedByTransporter| L(RESENT)\nL --\x3e D\n",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"exemples"},"Exemples"),(0,i.kt)("p",null,"Vous pouvez consulter ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MTES-MCT/trackdechets/blob/master/back/src/forms/workflow/__tests__/workflow.integration.ts"},"ce test d'int\xe9gration")," \xe9crit en Node.js pour voir des exemples concrets d'utilisation de l'API pour diff\xe9rents cas d'usage (acheminement direct du producteur \xe0 l'installation de traitement, entreposage provisoire, multi-modal, etc)"),(0,i.kt)("h2",{id:"bsd-au-format-pdf"},"BSD au format pdf"),(0,i.kt)("p",null,"Il est possible \xe0 tout moment d'obtenir une version pdf du BSD (\xe0 l'exception d'un BSD \xe0 l'\xe9tat brouillon). L'obtention du pdf se fait en deux temps. Il faut d'abord r\xe9cup\xe9rer un lien de t\xe9l\xe9chargement gr\xe2ce \xe0 la mutation ",(0,i.kt)("inlineCode",{parentName:"p"},"formPdf")," en passant en argument l'identifiant du BSD, puis utiliser ce lien pour t\xe9l\xe9charger le fichier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  formPdf(id: "{BSD_id}") {\n    downloadLink\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "formPdf": {\n      "downloadLink": "https://api.trackdechets.beta.gouv.fr/download?token=form_pdf-xxxxxxxxx-xxxx"\n    }\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"L'URL a une dur\xe9e de validit\xe9 de 10 secondes."))),(0,i.kt)("h2",{id:"flux-de-modifications-de-bsd"},"Flux de modifications de BSD"),(0,i.kt)("p",null,"Il est possible d'acc\xe9der \xe0 un flux des modifications d'\xe9tats qui ont eu lieu sur un BSD en particulier ou sur l'ensemble des BSD's li\xe9s \xe0 un \xe9tablissement. En faisant des appels r\xe9guliers sur ce flux, il est possible d'impl\xe9menter des syst\xe8mes de notifications en quasi temps r\xe9el pour vos utilisateurs (par exemple lors du traitement d'un d\xe9chets)."),(0,i.kt)("p",null,"Ce flux est accessible via la query ",(0,i.kt)("a",{parentName:"p",href:"../api-reference/bsdd/queries#formslifecycle"},(0,i.kt)("inlineCode",{parentName:"a"},"formsLifeCycle")),"."),(0,i.kt)("h2",{id:"import-dun-bsd-sign\xe9-papier"},"Import d'un BSD sign\xe9 papier"),(0,i.kt)("p",null,"L'installation de traitement a la possibilit\xe9 d'importer un BSD sign\xe9 papier dans Trackd\xe9chet apr\xe8s l'\xe9tape de traitement final dans\nle cas simple d'un acheminement direct du producteur \xe0 l\u2019installation de traitement.\nCet import se fait via la mutation ",(0,i.kt)("inlineCode",{parentName:"p"},"importFormPaper"),". Deux cas de figures se pr\xe9sentent:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le BSD est cr\xe9e initialement dans Trackd\xe9chet puis imprim\xe9 avant l'enl\xe8vement par le transporteur. La signature du collecteur-transporteur en case 8\nainsi que les informations et signatures en case 9, 10 et 11 sont renseign\xe9es sur le bordereau papier. Apr\xe8s la phase de traitement finale, le BSD num\xe9rique\ninitial est mis \xe0 jour pour l'entreprise de destination en renseignant son ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," et les informations manquantes.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Afin d'obtenir d'obtenir l'identifiant d'un bordereau num\xe9rique \xe0 partir du num\xe9ro ",(0,i.kt)("em",{parentName:"p"},"TD-xxx")," apparaissant sur le bordereau papier, il suffit d'utiliser la query ",(0,i.kt)("inlineCode",{parentName:"p"},"form")," en lui passant\nle param\xe8tre ",(0,i.kt)("inlineCode",{parentName:"p"},'{ readableId: "TD-XXX"}')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le BSD initial n'a pas \xe9t\xe9 \xe9mis via Trackd\xe9chets et dispose d'un num\xe9ro qui lui est propre. Apr\xe8s la phase de traitement finale, le bordereau papier\nest import\xe9 dans Trackd\xe9chets en reportant l'ensemble des informations y apparaissant. Le num\xe9ro du BSD papier doit \xeatre renseign\xe9 gr\xe2ce au champ ",(0,i.kt)("inlineCode",{parentName:"li"},"customId"),".\nCe champ permettra de faire le lien entre le bordereau num\xe9rique et le bordereau papier.")),(0,i.kt)("p",null,"Dans les deux cas ci-dessus, l'entreprise de traitement doit conserver l'original papier pendant toute la dur\xe9e r\xe9glementaire."))}m.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=11748}}]);