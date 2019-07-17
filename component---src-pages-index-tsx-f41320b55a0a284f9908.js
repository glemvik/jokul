(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{207:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(222),l=t(225),o=t.n(l),s=t(223);n.default=function(){return a.a.createElement(i.b,null,a.a.createElement(o.a,{renderers:s.b,source:"# Landingsside\n\n## Om Jøkul\n\nJøkul er designsystemet til Fremtind forsikring. Med Jøkul kan vi designe og utvikle konsekvente digitale løsninger for både interne fagsystemer og nettsider som forsikringsselskapet distributører og kunder skal bruke.\n\nMålet med Jøkul er å samle alle ressursene som trengs for å bygge små og store løsninger for virksomheten til selskapet. Slik sprer vi kunnskap til alle om hvordan vi lager de beste løsningene for Fremtind.\n\nPå disse sidene finner du tankegangen bak designsystemet, komponentbiblioteket vårt og informasjon om hvordan du kommer i gang med å designe eller utvikle.\nHvem kan bruke Jøkul?\nInnholdet på disse sidene er ment for designere og utviklere som skal lage eller bidra til løsninger for Fremtind. Jobber du med relaterte områder og er nysgjerrig på Jøkul, er du også velkommen til å ta en titt.\n\nJøkul er et levende bibliotek. Det vil aldri være helt ferdig, men vi skal holde det så godt oppdatert som mulig. Vi vil at du enkelt skal kunne finne ut hva som gjelder for å kunne levere gode opplevelser til alle de som bruker løsningen våre, både innomhus og ut mot kundene.\n\nEndringsloggen vår er alltid oppdatert med siste nytt om nye komponenter som har kommet til eller om det har skjedd endringer.\n\n### Vi setter pris på bidrag\n\nVi trenger dine tanker og erfaringer! Utforsk komponentene vi har laget og foreslå gjerne endringer og forbedringer. Vi blir glade for alle kommentarer og innspill.\n\n### Kontakt oss\n\nLurer du på noe om Jøkul og hvordan du skal bruke komponentene og retningslinjene våre?\n\n-   Leder for Designsystemteamet: [glenn.brownlee@fremtind.no](mailto:glenn.brownlee@fremtind.no)\n-   Utviklerspørsmål: TODO: set responsible\n-   Designspørsmål: TODO: set responsible\n-   Hvordan vi bruker merkevaren: [jarle@fremtind.no](mailto:jarle@fremtind.no)\n\n### Forum og kanaler\n\nVi er på Slack og GitHub. Du finner oss ved å søke på Fremtind.\n\nPå huset har Designsystem-teamet et åpent forum hver tirsdag fra klokken 14 til 14.30. Her er alle velkomne. Da viser vi ofte hva som har skjedd siden sist og hva vi holder på med for øyeblikket. Vi er glade for aktive diskusjoner og innspill på forumet.\n\n## Om Fremtind\n\nFremtind forsikring er en ny aktør på forsikringsmarkedet, men selskapet har likevel lang erfaring. Selskapet er opprettet og eid av DNB og Sparebank 1, som begge selger Fremtinds forsikringer gjennom sine banker.\n\nFremtind sitter på kunnskap om forsikringsmarkedet som vi ønsker å ta med oss inn i fremtiden, der forsikringsløsningene skal være gode, enkle og praktiske for kunden.\n\nDesignsystemet vårt, Jøkul, gjenspeiler Fremtinds visjon. Det inneholder komponenter og informasjon som gjør det lett å designe og utvikle brukervennlige løsninger.\n"}))}},219:function(e,n,t){var r;e.exports=(r=t(221))&&r.default||r},220:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return s});t(46),t(35),t(25);var r=t(0),a=t.n(r),i=t(224),l=t.n(i);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e){var n=e.children,t=e.title,i=e.startExpanded,s=void 0!==i&&i,c=o(Object(r.useState)(s),2),m=c[0],d=c[1],u=m?" jkl-accordion-item--expanded":"";return a.a.createElement("div",{"data-testid":"jkl-accordion-item",className:"jkl-accordion-item".concat(u)},a.a.createElement("button",{className:"jkl-accordion-item__title",type:"button"},a.a.createElement("div",{className:"jkl-accordion-item__title-text"},t),a.a.createElement("div",{className:"jkl-accordion-item__title-icon"})),a.a.createElement(l.a,{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",hidden:!m,onToggle:function(){return d(!m)}},a.a.createElement("div",{className:"jkl-accordion-item__content"},n)))}function c(e){var n=e.children;return a.a.createElement("div",{"data-testid":"jkl-accordion",className:"jkl-accordion"},n)}},221:function(e,n,t){"use strict";t.r(n);t(24);var r=t(0),a=t.n(r),i=t(87);n.default=function(e){var n=e.location,t=e.pageResources;return t?a.a.createElement(i.a,Object.assign({location:n,pageResources:t},t.json)):null}},222:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(61),l=t.n(i);t(219),a.a.createContext({});t(186);var o,s,c=function(e){var n=e.siteTitle,t=void 0===n?"":n;return a.a.createElement("header",{className:"portal-header"},a.a.createElement("h1",{className:"portal-header__title jkl-h2"},a.a.createElement(l.a,{to:"/"},t)))},m=(t(127),t(128),t(17)),d=t(220),u=function(e,n,t){return{title:e,page:n,section:t}},g=function(e,n){return u(e,n,"developer")},k=function(e,n){return u(e,n,"core")},p=function(e,n){return u(e,n,"components")},f=function(e,n){return u(e,n,"profile")},v=[g("Kom i gang","getting-started"),g("Bidragsguide","contribute")],b=[(o="Kom i gang",s="getting-started",u(o,s,"designer"))],h=[k("Designprinsipper","principle"),k("Bevegelse","motion"),k("Klarhet","clarity"),k("Elevasjon","elevation"),k("Mønstre","pattern")],j=[p("Alle komponenter","a-la-carte"),p("Knapper","button"),p("Trekkspilliste","accordion"),p("Datovelger","datepicker")],E=[f("Farger","colors"),f("Tilgjengelighet","a11y"),f("Stil og tone","tone"),f("Typograpfi","typography"),f("Bildestil","picture"),f("Ikoner","icon"),f("Sperring","spacing"),f("Layout","layout"),f("Skygger","shadow"),f("Logo","logo")];t(187);function y(){return a.a.createElement(m.LocationProvider,null,function(e){var n=e.location;return a.a.createElement("nav",{className:"portal-menu"},a.a.createElement(d.a,null,a.a.createElement(d.b,{title:"Grunnleggende",startExpanded:n.pathname.includes("core")||"/"===n.pathname},h.map(function(e){return a.a.createElement(l.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),a.a.createElement(d.b,{title:"Profilelementer",startExpanded:n.pathname.includes("profile")},E.map(function(e){return a.a.createElement(l.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),a.a.createElement(d.b,{title:"For designere",startExpanded:n.pathname.includes("designer")},b.map(function(e){return a.a.createElement(l.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),a.a.createElement(d.b,{title:"For utviklere",startExpanded:n.pathname.includes("developer")},v.map(function(e){return a.a.createElement(l.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),a.a.createElement(d.b,{title:"Komponenter",startExpanded:n.pathname.includes("components")},j.map(function(e){return a.a.createElement(l.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)}))))})}t(188);t.d(n,"a",function(){return _});var _=function(e){var n=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(c,{siteTitle:"Jøkul"}),a.a.createElement(y,null),a.a.createElement("main",{className:"portal-content"},n))};n.b=_},223:function(e,n,t){"use strict";t.d(n,"b",function(){return i}),t.d(n,"a",function(){return l});t(24);var r=t(0),a=(t(189),{paragraph:function(e){var n=e.children;return Object(r.createElement)("p",{className:"jkl-p"},n)},list:function(e){var n=e.children;return Object(r.createElement)("ul",{className:"jkl-bullet-list jkl-p"},n)},listItem:function(e){var n=e.children;return Object(r.createElement)("li",{className:"jkl-bullet-list__item"},n)},blockquote:function(e){var n=e.children;return Object(r.createElement)("div",{className:"jkl-message-box jkl-message-box__info"},n)}}),i=Object.assign({},a,{heading:function(e){var n=e.level,t=e.children;return 1===n?null:Object(r.createElement)("h"+n,{className:"jkl-h"+(n+1)},t)}}),l=Object.assign({},a,{heading:function(e){var n=e.level,t=e.children;return Object(r.createElement)("h"+n,{className:"jkl-h"+(n+1)},t)}})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f41320b55a0a284f9908.js.map