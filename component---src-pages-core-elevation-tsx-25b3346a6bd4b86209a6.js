(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{201:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(225),i=n.n(l),c=n(222),o=n(223),s="## Elevasjon\n\nVi ønsker at brukerne lett skal se hvilket innhold som er på ett nivå og hvilket som er over- eller underordnet. Til det bruker vi blant annet skygger, som skaper inntrykk av elevasjon. Vi bruker ulike skygger for å skape et hierarki.\n";function u(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{renderers:o.b,source:s}))}n.d(t,"default",function(){return u})},219:function(e,t,n){var a;e.exports=(a=n(221))&&a.default||a},220:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o});n(46),n(35),n(25);var a=n(0),r=n.n(a),l=n(224),i=n.n(l);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(o){r=!0,l=o}finally{try{a||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){var t=e.children,n=e.title,l=e.startExpanded,o=void 0!==l&&l,s=c(Object(a.useState)(o),2),u=s[0],m=s[1],d=u?" jkl-accordion-item--expanded":"";return r.a.createElement("div",{"data-testid":"jkl-accordion-item",className:"jkl-accordion-item".concat(d)},r.a.createElement("button",{className:"jkl-accordion-item__title",type:"button"},r.a.createElement("div",{className:"jkl-accordion-item__title-text"},n),r.a.createElement("div",{className:"jkl-accordion-item__title-icon"})),r.a.createElement(i.a,{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",hidden:!u,onToggle:function(){return m(!u)}},r.a.createElement("div",{className:"jkl-accordion-item__content"},t)))}function s(e){var t=e.children;return r.a.createElement("div",{"data-testid":"jkl-accordion",className:"jkl-accordion"},t)}},221:function(e,t,n){"use strict";n.r(t);n(24);var a=n(0),r=n.n(a),l=n(87);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null}},222:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(61),i=n.n(l);n(219),r.a.createContext({});n(186);var c,o,s=function(e){var t=e.siteTitle,n=void 0===t?"":t;return r.a.createElement("header",{className:"portal-header"},r.a.createElement("h1",{className:"portal-header__title jkl-h2"},r.a.createElement(i.a,{to:"/"},n)))},u=(n(127),n(128),n(17)),m=n(220),d=function(e,t,n){return{title:e,page:t,section:n}},p=function(e,t){return d(e,t,"developer")},g=function(e,t){return d(e,t,"core")},k=function(e,t){return d(e,t,"components")},f=function(e,t){return d(e,t,"profile")},v=[p("Kom i gang","getting-started"),p("Bidragsguide","contribute")],E=[(c="Kom i gang",o="getting-started",d(c,o,"designer"))],h=[g("Designprinsipper","principle"),g("Bevegelse","motion"),g("Klarhet","clarity"),g("Elevasjon","elevation"),g("Mønstre","pattern")],b=[k("Alle komponenter","a-la-carte"),k("Knapper","button"),k("Trekkspilliste","accordion"),k("Datovelger","datepicker")],j=[f("Farger","colors"),f("Tilgjengelighet","a11y"),f("Stil og tone","tone"),f("Typograpfi","typography"),f("Bildestil","picture"),f("Ikoner","icon"),f("Sperring","spacing"),f("Layout","layout"),f("Skygger","shadow"),f("Logo","logo")];n(187);function _(){return r.a.createElement(u.LocationProvider,null,function(e){var t=e.location;return r.a.createElement("nav",{className:"portal-menu"},r.a.createElement(m.a,null,r.a.createElement(m.b,{title:"Grunnleggende",startExpanded:t.pathname.includes("core")||"/"===t.pathname},h.map(function(e){return r.a.createElement(i.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),r.a.createElement(m.b,{title:"Profilelementer",startExpanded:t.pathname.includes("profile")},j.map(function(e){return r.a.createElement(i.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),r.a.createElement(m.b,{title:"For designere",startExpanded:t.pathname.includes("designer")},E.map(function(e){return r.a.createElement(i.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),r.a.createElement(m.b,{title:"For utviklere",startExpanded:t.pathname.includes("developer")},v.map(function(e){return r.a.createElement(i.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),r.a.createElement(m.b,{title:"Komponenter",startExpanded:t.pathname.includes("components")},b.map(function(e){return r.a.createElement(i.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)}))))})}n(188);n.d(t,"a",function(){return y});var y=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{siteTitle:"Jøkul"}),r.a.createElement(_,null),r.a.createElement("main",{className:"portal-content"},t))};t.b=y},223:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return i});n(24);var a=n(0),r=(n(189),{paragraph:function(e){var t=e.children;return Object(a.createElement)("p",{className:"jkl-p"},t)},list:function(e){var t=e.children;return Object(a.createElement)("ul",{className:"jkl-bullet-list jkl-p"},t)},listItem:function(e){var t=e.children;return Object(a.createElement)("li",{className:"jkl-bullet-list__item"},t)},blockquote:function(e){var t=e.children;return Object(a.createElement)("div",{className:"jkl-message-box jkl-message-box__info"},t)}}),l=Object.assign({},r,{heading:function(e){var t=e.level,n=e.children;return 1===t?null:Object(a.createElement)("h"+t,{className:"jkl-h"+(t+1)},n)}}),i=Object.assign({},r,{heading:function(e){var t=e.level,n=e.children;return Object(a.createElement)("h"+t,{className:"jkl-h"+(t+1)},n)}})}}]);
//# sourceMappingURL=component---src-pages-core-elevation-tsx-25b3346a6bd4b86209a6.js.map