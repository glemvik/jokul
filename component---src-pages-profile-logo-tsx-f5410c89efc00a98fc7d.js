(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{211:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(224),c=n.n(l),i=n(221),o=n(222),u="## Logo\n";function s(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{renderers:o.b,source:u}))}n.d(t,"default",function(){return s})},218:function(e,t,n){var a;e.exports=(a=n(220))&&a.default||a},219:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return o});n(47),n(35),n(24);var a=n(0),r=n.n(a),l=n(223),c=n.n(l);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(o){r=!0,l=o}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){var t=e.children,n=e.title,l=e.startExpanded,o=void 0!==l&&l,u=i(Object(a.useState)(o),2),s=u[0],m=u[1],d=s?" jkl-accordion-item--expanded":"";return r.a.createElement("div",{"data-testid":"jkl-accordion-item",className:"jkl-accordion-item".concat(d)},r.a.createElement("button",{className:"jkl-accordion-item__title",type:"button"},r.a.createElement("div",{className:"jkl-accordion-item__title-text"},n),r.a.createElement("div",{className:"jkl-accordion-item__title-icon"})),r.a.createElement(c.a,{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",hidden:!s,onToggle:function(){return m(!s)}},r.a.createElement("div",{className:"jkl-accordion-item__content"},t)))}function u(e){var t=e.children;return r.a.createElement("div",{"data-testid":"jkl-accordion",className:"jkl-accordion"},t)}},220:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),l=n(83);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null}},221:function(e,t,n){"use strict";n(128);var a=n(0),r=n.n(a),l=n(16),c=n(61),i=n.n(c);n(218),n(8).default.enqueue,r.a.createContext({});n(185);var o,u,s=function(e){var t=e.siteTitle,n=void 0===t?"":t;return r.a.createElement("header",{className:"portal-header"},r.a.createElement("h1",{className:"portal-header__title jkl-h2"},r.a.createElement(i.a,{to:"/"},n)))},m=(n(126),n(127),n(219)),d=function(e,t,n){return{title:e,page:t,section:n}},p=function(e,t){return d(e,t,"developer")},f=function(e,t){return d(e,t,"core")},g=function(e,t){return d(e,t,"components")},E=function(e,t){return d(e,t,"profile")},v=[p("Kom i gang","getting-started"),p("Bidragsguide","contribute")],k=[(o="Kom i gang",u="getting-started",d(o,u,"designer"))],h=[f("Designprinsipper","principle"),f("Bevegelse","motion"),f("Klarhet","clarity"),f("Elevasjon","elevation"),f("Mønstre","pattern")],j=[g("Alle komponenter","a-la-carte"),g("Knapper","button"),g("Trekkspilliste","accordion"),g("Datovelger","datepicker")],b=[E("Farger","colors"),E("Tilgjengelighet","a11y"),E("Stil og tone","tone"),E("Typograpfi","typography"),E("Bildestil","picture"),E("Ikoner","icon"),E("Sperring","spacing"),E("Layout","layout"),E("Skygger","shadow"),E("Logo","logo")];n(186);function _(){return r.a.createElement(l.LocationProvider,null,function(e){var t=e.location;return r.a.createElement("nav",{className:"portal-menu"},r.a.createElement(m.a,null,r.a.createElement(m.b,{title:"Grunnleggende",startExpanded:t.pathname.includes("core")||"/"===t.pathname},h.map(function(e){return r.a.createElement(i.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),r.a.createElement(m.b,{title:"Profilelementer",startExpanded:t.pathname.includes("profile")},b.map(function(e){return r.a.createElement(i.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),r.a.createElement(m.b,{title:"For designere",startExpanded:t.pathname.includes("designer")},k.map(function(e){return r.a.createElement(i.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),r.a.createElement(m.b,{title:"For utviklere",startExpanded:t.pathname.includes("developer")},v.map(function(e){return r.a.createElement(i.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),r.a.createElement(m.b,{title:"Komponenter",startExpanded:t.pathname.includes("components")},j.map(function(e){return r.a.createElement(i.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)}))))})}n(187);n.d(t,"a",function(){return N});var N=function(e){var t=e.children,n=e.title,a=e.mainExample;return r.a.createElement(l.LocationProvider,null,function(e){return"?fullscreen"!==e.location.search?r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{siteTitle:"Jøkul"}),r.a.createElement(_,null),r.a.createElement("main",{className:"portal-content"},n&&r.a.createElement("h2",{className:"jkl-h1 portal-content__title"},n),a,t)):r.a.createElement("main",{className:"portal-component-only"},a)})};t.b=N},222:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return c});n(23);var a=n(0),r=(n(188),{paragraph:function(e){var t=e.children;return Object(a.createElement)("p",{className:"jkl-p"},t)},list:function(e){var t=e.children;return Object(a.createElement)("ul",{className:"jkl-bullet-list jkl-p"},t)},listItem:function(e){var t=e.children;return Object(a.createElement)("li",{className:"jkl-bullet-list__item"},t)},blockquote:function(e){var t=e.children;return Object(a.createElement)("div",{className:"jkl-message-box jkl-message-box__info"},t)}}),l=Object.assign({},r,{heading:function(e){var t=e.level,n=e.children;return 1===t?null:Object(a.createElement)("h"+t,{className:"jkl-h"+(t+1)},n)}}),c=Object.assign({},r,{heading:function(e){var t=e.level,n=e.children;return Object(a.createElement)("h"+t,{className:"jkl-h"+(t+1)},n)}})}}]);
//# sourceMappingURL=component---src-pages-profile-logo-tsx-f5410c89efc00a98fc7d.js.map