(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(e,n,r){"use strict";r.r(n);var t='import { PrimaryButton } from "@fremtind/jkl-button-react";\nimport React from "react";\n\nfunction clickHandler() {\n    console.log("You\'ve clicked me!");\n}\n\nexport function ButtonExample() {\n    return (\n        <>\n            <PrimaryButton onClick={clickHandler}>Click me!</PrimaryButton>\n        </>\n    );\n}\n',a="# Knapper\n\nKnapper starter en handling. De oppfordrer brukeren til å gjøre noe. Teksten på knappen forteller hva som vil skje når brukeren velger den.\n\n## Knappetyper\n\n-   Primærknapp – brukes når du vil oppfordre\n    til en hovedhandling på en side.\n-   Sekundærknapp – for handlinger som kommer i andre rekke på en side.\n-   Tertiærknapp - brukes for handlinger som har begrenset viktighet eller kan føre til uønskede konsekvenser\n\nFor Fremtind designer vi knappene med animasjon etter prinsippet om [elevasjon](#). Det vil si at når brukerne beveger pekeren over eller velger en knapp, vil den bli midlertidig forstørret.\n\n## Eksempler\n\nKnapper brukes til handlinger som\n\n-   Lagre\n-   Slett\n-   Meld skade\n-   Fortsett (i et skjema)\n\nHver side kan ha én eller to primærknapper. Hvis du ønsker at brukeren skal gjøre noe mer, bruk en sekundærknapp.\n\n## Generelle råd\n\nIkke bruk knapper til å navigere. Hvis du vil at brukeren skal gå til en ny side, bruker du en lenke. Unntak: I skjemaer er det naturlig å hjelpe brukeren videre med en Fortsett-knapp.\n",l=r(0),i=r.n(l),c=r(224),o=r.n(c);function u(e){return function(n){var r=n.children,t=n.className,a=void 0===t?"":t,l=n.onClick;return i.a.createElement("button",{onClick:l,className:"jkl-button jkl-button--".concat(e," ").concat(a)},r)}}var s=u("primary");u("secondary"),u("tertiary");function m(){console.log("You've clicked me!")}function d(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{onClick:m},"Click me!"))}var p=r(191),k=r(127),v=r.n(k);function g(e){return Object(l.useEffect)(function(){v.a.highlightAll()}),i.a.createElement("pre",null,i.a.createElement("code",{className:"language-tsx"},e.children))}var f={paragraph:function(e){var n=e.children;return Object(l.createElement)("p",{className:"jkl-p"},n)},heading:function(e){var n=e.level,r=e.children;return Object(l.createElement)("h"+n,{className:"jkl-h"+n},r)},list:function(e){var n=e.children;return Object(l.createElement)("ul",{className:"jkl-bullet-list"},n)},listItem:function(e){var n=e.children;return Object(l.createElement)("li",{className:"jkl-bullet-list__item"},n)}};function h(){return i.a.createElement(p.a,null,i.a.createElement("div",{style:{margin:"2rem 0"}},i.a.createElement(o.a,{renderers:f,source:a})),i.a.createElement("div",null,i.a.createElement(d,null),i.a.createElement(g,null,t)))}r.d(n,"default",function(){return h})},186:function(e,n,r){var t;e.exports=(t=r(190))&&t.default||t},188:function(e,n,r){"use strict";var t=r(0),a=r.n(t),l=r(12),i=r.n(l),c=r(57),o=r.n(c);r.d(n,"a",function(){return o.a});r(186),a.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Jokul"}}}}},190:function(e,n,r){"use strict";r.r(n);r(16);var t=r(0),a=r.n(t),l=r(12),i=r.n(l),c=r(87),o=function(e){var n=e.location,r=e.pageResources;return r?a.a.createElement(c.a,Object.assign({location:n,pageResources:r},r.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=o},191:function(e,n,r){"use strict";var t=r(189),a=r(0),l=r.n(a),i=r(188),c=function(e){var n=e.siteTitle,r=void 0===n?"":n;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(i.a,{to:"/",style:{color:"white",textDecoration:"none"}},r))))};n.a=function(e){var n=e.children,r=t.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,{siteTitle:r.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,n)))}}}]);
//# sourceMappingURL=component---src-pages-components-button-tsx-8ebda01fc9cbeeba51e8.js.map