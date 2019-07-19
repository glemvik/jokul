(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{201:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(224),i=n.n(l),c=n(221),o=n(222),s="## Bevegelse\n\nI Fremtind ønsker vi å vise at vi er et selskap i bevegelse. Derfor bruker vi animasjon for å hjelpe brukeren med å forstå hva som skjer når de bruker løsningene våre. Vi benytter det sparsomt men godt – det vil si at vi animerer bare når brukeren utfører en handling i en av løsningene våre. Animasjoner skal alltid ha en funksjonell verdi.\n";function u(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{renderers:o.b,source:s}))}n.d(t,"default",function(){return u})},218:function(e,t,n){var a;e.exports=(a=n(220))&&a.default||a},219:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o});n(47),n(35),n(24);var a=n(0),r=n.n(a),l=n(223),i=n.n(l);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(o){r=!0,l=o}finally{try{a||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){var t=e.children,n=e.title,l=e.startExpanded,o=void 0!==l&&l,s=c(Object(a.useState)(o),2),u=s[0],m=s[1],d=u?" jkl-accordion-item--expanded":"";return r.a.createElement("div",{"data-testid":"jkl-accordion-item",className:"jkl-accordion-item".concat(d)},r.a.createElement("button",{className:"jkl-accordion-item__title",type:"button"},r.a.createElement("div",{className:"jkl-accordion-item__title-text"},n),r.a.createElement("div",{className:"jkl-accordion-item__title-icon"})),r.a.createElement(i.a,{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",hidden:!u,onToggle:function(){return m(!u)}},r.a.createElement("div",{className:"jkl-accordion-item__content"},t)))}function s(e){var t=e.children;return r.a.createElement("div",{"data-testid":"jkl-accordion",className:"jkl-accordion"},t)}},220:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),l=n(83);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null}},221:function(e,t,n){"use strict";n(128);var a=n(0),r=n.n(a),l=n(16),i=n(61),c=n.n(i);n(218),n(8).default.enqueue,r.a.createContext({});n(185);var o,s,u=function(e){var t=e.siteTitle,n=void 0===t?"":t;return r.a.createElement("header",{className:"portal-header"},r.a.createElement("h1",{className:"portal-header__title jkl-h2"},r.a.createElement(c.a,{to:"/"},n)))},m=(n(126),n(127),n(219)),d=function(e,t,n){return{title:e,page:t,section:n}},p=function(e,t){return d(e,t,"developer")},f=function(e,t){return d(e,t,"core")},v=function(e,t){return d(e,t,"components")},g=function(e,t){return d(e,t,"profile")},k=[p("Kom i gang","getting-started"),p("Bidragsguide","contribute")],E=[(o="Kom i gang",s="getting-started",d(o,s,"designer"))],h=[f("Designprinsipper","principle"),f("Bevegelse","motion"),f("Klarhet","clarity"),f("Elevasjon","elevation"),f("Mønstre","pattern")],b=[v("Alle komponenter","a-la-carte"),v("Knapper","button"),v("Trekkspilliste","accordion"),v("Datovelger","datepicker")],j=[g("Farger","colors"),g("Tilgjengelighet","a11y"),g("Stil og tone","tone"),g("Typograpfi","typography"),g("Bildestil","picture"),g("Ikoner","icon"),g("Sperring","spacing"),g("Layout","layout"),g("Skygger","shadow"),g("Logo","logo")];n(186);function _(){return r.a.createElement(l.LocationProvider,null,function(e){var t=e.location;return r.a.createElement("nav",{className:"portal-menu"},r.a.createElement(m.a,null,r.a.createElement(m.b,{title:"Grunnleggende",startExpanded:t.pathname.includes("core")||"/"===t.pathname},h.map(function(e){return r.a.createElement(c.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),r.a.createElement(m.b,{title:"Profilelementer",startExpanded:t.pathname.includes("profile")},j.map(function(e){return r.a.createElement(c.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),r.a.createElement(m.b,{title:"For designere",startExpanded:t.pathname.includes("designer")},E.map(function(e){return r.a.createElement(c.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),r.a.createElement(m.b,{title:"For utviklere",startExpanded:t.pathname.includes("developer")},k.map(function(e){return r.a.createElement(c.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),r.a.createElement(m.b,{title:"Komponenter",startExpanded:t.pathname.includes("components")},b.map(function(e){return r.a.createElement(c.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)}))))})}n(187);n.d(t,"a",function(){return y});var y=function(e){var t=e.children,n=e.title,a=e.mainExample;return r.a.createElement(l.LocationProvider,null,function(e){return"?fullscreen"!==e.location.search?r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{siteTitle:"Jøkul"}),r.a.createElement(_,null),r.a.createElement("main",{className:"portal-content"},n&&r.a.createElement("h2",{className:"jkl-h1 portal-content__title"},n),a,t)):r.a.createElement("main",{className:"portal-component-only"},a)})};t.b=y},222:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return i});n(23);var a=n(0),r=(n(188),{paragraph:function(e){var t=e.children;return Object(a.createElement)("p",{className:"jkl-p"},t)},list:function(e){var t=e.children;return Object(a.createElement)("ul",{className:"jkl-bullet-list jkl-p"},t)},listItem:function(e){var t=e.children;return Object(a.createElement)("li",{className:"jkl-bullet-list__item"},t)},blockquote:function(e){var t=e.children;return Object(a.createElement)("div",{className:"jkl-message-box jkl-message-box__info"},t)}}),l=Object.assign({},r,{heading:function(e){var t=e.level,n=e.children;return 1===t?null:Object(a.createElement)("h"+t,{className:"jkl-h"+(t+1)},n)}}),i=Object.assign({},r,{heading:function(e){var t=e.level,n=e.children;return Object(a.createElement)("h"+t,{className:"jkl-h"+(t+1)},n)}})}}]);
//# sourceMappingURL=component---src-pages-core-motion-tsx-5164bafbc926a96206fb.js.map