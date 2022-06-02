"use strict";(self.webpackChunktd_doc=self.webpackChunktd_doc||[]).push([[4238],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99359:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={title:"Introduction \xe0 GraphQL"},u=void 0,s={unversionedId:"concepts/graphql",id:"concepts/graphql",title:"Introduction \xe0 GraphQL",description:"Comparaison avec le standard REST",source:"@site/docs/concepts/graphql.md",sourceDirName:"concepts",slug:"/concepts/graphql",permalink:"/concepts/graphql",editUrl:"https://github.com/MTES-MCT/trackdechets/edit/dev/doc/docs/concepts/graphql.md",tags:[],version:"current",frontMatter:{title:"Introduction \xe0 GraphQL"},sidebar:"docs",previous:{title:"Lien entre l'API et l'interface web Trackd\xe9chets",permalink:"/concepts/api-ui"}},l={},c=[{value:"Comparaison avec le standard REST",id:"comparaison-avec-le-standard-rest",level:2},{value:"\xc0 propos des op\xe9rations de type <code>query</code> et <code>mutation</code>",id:"\xe0-propos-des-op\xe9rations-de-type-query-et-mutation",level:2},{value:"Queries",id:"queries",level:3},{value:"Mutations",id:"mutations",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"comparaison-avec-le-standard-rest"},"Comparaison avec le standard REST"),(0,o.kt)("p",null,"Dans le standard REST, la m\xe9thode de requ\xeate HTTP (",(0,o.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE"),") d\xe9termine le type d'op\xe9ration. Dans le standard GraphQL, un contenu de requ\xeate JSON est pass\xe9 que ce soit pour une ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," ou une ",(0,o.kt)("inlineCode",{parentName:"p"},"mutation"),", la m\xe9thode de requ\xeate est donc toujours ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),". La seule exception est la requ\xeate d'introspection qui est un simple ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," sur le point de terminaison GraphQL."),(0,o.kt)("p",null,"Toutes les requ\xeates se font sur un point de terminaison unique \xe0 la ",(0,o.kt)("a",{parentName:"p",href:"/reference/environments/"},"racine de l'API")),(0,o.kt)("p",null,"Pour faire une requ\xeate GraphQL en utilisant cURL, vous devez faire un ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," avec un corps JSON. Le corps de la requ\xeate doit contenir une chaine de caract\xe8res appel\xe9e ",(0,o.kt)("inlineCode",{parentName:"p"},"query"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -H "Authorization: Bearer YOUR_TOKEN" \\\n  --data \'{"query": "query { me { name} }"}\' https://api.trackdechets.beta.gouv.fr/\n')),(0,o.kt)("h2",{id:"\xe0-propos-des-op\xe9rations-de-type-query-et-mutation"},"\xc0 propos des op\xe9rations de type ",(0,o.kt)("inlineCode",{parentName:"h2"},"query")," et ",(0,o.kt)("inlineCode",{parentName:"h2"},"mutation")),(0,o.kt)("p",null,"Les deux types d'op\xe9ration autoris\xe9es sur l'API GraphQL Trackd\xe9chets sont les ",(0,o.kt)("em",{parentName:"p"},"queries")," et les ",(0,o.kt)("em",{parentName:"p"},"mutations"),". Pour faire un parall\xe8le avec le standard REST, les ",(0,o.kt)("em",{parentName:"p"},"queries")," se comportent comme des requ\xeates ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," et les mutations se comportent comme des requ\xeates ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE"),". Le nom de la mutation d\xe9termine l'op\xe9ration qui sera execut\xe9e. Les requ\xeates et mutations ont une forme similaire avec quelques diff\xe9rences."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"La cl\xe9 JSON utilis\xe9e est toujours ",(0,o.kt)("inlineCode",{parentName:"p"},'"query"'),", que ce soit pour une ",(0,o.kt)("em",{parentName:"p"},"query")," ou une ",(0,o.kt)("em",{parentName:"p"},"mutation")," GraphQL. La diff\xe9rence se fait dans la chaine de caract\xe8re pass\xe9e en valeur :"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// exemple de query\n{ "query": "query { ... }" }\n\n// exemple de mutation\n{ "query" : "mutation { ... }"}\n')))),(0,o.kt)("h3",{id:"queries"},"Queries"),(0,o.kt)("p",null,"Les ",(0,o.kt)("em",{parentName:"p"},"queries")," GraphQL retournent uniquement les donn\xe9es sp\xe9cifi\xe9es. Pour construire une ",(0,o.kt)("em",{parentName:"p"},"query")," il faut sp\xe9cifier les champs imbriqu\xe9s jusqu'\xe0 un champs de type scalaire (string, int, etc)."),(0,o.kt)("p",null,"Exemple avec une requ\xeate de profil utilisateur"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  me {\n    name\n    email\n    companies {\n      name\n      siret\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Des variables peuvent \xe9galement \xeatre ajout\xe9es sur certaines ",(0,o.kt)("em",{parentName:"p"},"queries"),"."),(0,o.kt)("p",null,"Exemple avec une requ\xeate d'information entreprise en passant un num\xe9ro siret en variable :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  companyInfos(siret: "13001045700013") {\n    name,\n    address\n  }\n}\n')),(0,o.kt)("h3",{id:"mutations"},"Mutations"),(0,o.kt)("p",null,"Pour construire une mutation, il faut sp\xe9cifier trois choses:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Le nom de la mutation qui correspond \xe0 l'op\xe9ration \xe0 ex\xe9cuter"),(0,o.kt)("li",{parentName:"ol"},"Les donn\xe9es d'input pass\xe9es en argument"),(0,o.kt)("li",{parentName:"ol"},"Les donn\xe9es retourn\xe9es")),(0,o.kt)("p",null,"Exemple avec une requ\xeate permettant de valider la r\xe9ception d'un bordereau de d\xe9chets dangereux :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  markAsReceived(\n    id: "sju8d6g0JU61G76F",\n    receivedInfo: {\n      receivedBy: "Bill",\n      receivedAt: "2019-01-17",\n      signedAt: "2019-01-17",\n      wasteAcceptationStatus: "ACCEPTED",\n      quantityReceived: 0\n    }){\n    id\n    status\n  }\n}\n')))}m.isMDXComponent=!0}}]);