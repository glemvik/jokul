(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{190:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(221);e.default=function(){return o.a.createElement(i.b,null,o.a.createElement("h1",null,"NOT FOUND"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},218:function(t,e,n){var r;t.exports=(r=n(220))&&r.default||r},219:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return u});n(47),n(35),n(24);var r=n(0),o=n.n(r),i=n(223),a=n.n(i);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(t){var e=t.children,n=t.title,i=t.startExpanded,u=void 0!==i&&i,l=c(Object(r.useState)(u),2),s=l[0],p=l[1],d=s?" jkl-accordion-item--expanded":"";return o.a.createElement("div",{"data-testid":"jkl-accordion-item",className:"jkl-accordion-item".concat(d)},o.a.createElement("button",{className:"jkl-accordion-item__title",type:"button"},o.a.createElement("div",{className:"jkl-accordion-item__title-text"},n),o.a.createElement("div",{className:"jkl-accordion-item__title-icon"})),o.a.createElement(a.a,{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",hidden:!s,onToggle:function(){return p(!s)}},o.a.createElement("div",{className:"jkl-accordion-item__content"},e)))}function l(t){var e=t.children;return o.a.createElement("div",{"data-testid":"jkl-accordion",className:"jkl-accordion"},e)}},220:function(t,e,n){"use strict";n.r(e);n(23);var r=n(0),o=n.n(r),i=n(83);e.default=function(t){var e=t.location,n=t.pageResources;return n?o.a.createElement(i.a,Object.assign({location:e,pageResources:n},n.json)):null}},221:function(t,e,n){"use strict";n(128);var r=n(0),o=n.n(r),i=n(16),a=n(61),c=n.n(a);n(218),n(8).default.enqueue,o.a.createContext({});n(185);var u,l,s=function(t){var e=t.siteTitle,n=void 0===e?"":e;return o.a.createElement("header",{className:"portal-header"},o.a.createElement("h1",{className:"portal-header__title jkl-h2"},o.a.createElement(c.a,{to:"/"},n)))},p=(n(126),n(127),n(219)),d=function(t,e,n){return{title:t,page:e,section:n}},f=function(t,e){return d(t,e,"developer")},h=function(t,e){return d(t,e,"core")},m=function(t,e){return d(t,e,"components")},v=function(t,e){return d(t,e,"profile")},g=[f("Kom i gang","getting-started"),f("Bidragsguide","contribute")],b=[(u="Kom i gang",l="getting-started",d(u,l,"designer"))],y=[h("Designprinsipper","principle"),h("Bevegelse","motion"),h("Klarhet","clarity"),h("Elevasjon","elevation"),h("Mønstre","pattern")],E=[m("Alle komponenter","a-la-carte"),m("Knapper","button"),m("Trekkspilliste","accordion"),m("Datovelger","datepicker")],k=[v("Farger","colors"),v("Tilgjengelighet","a11y"),v("Stil og tone","tone"),v("Typograpfi","typography"),v("Bildestil","picture"),v("Ikoner","icon"),v("Sperring","spacing"),v("Layout","layout"),v("Skygger","shadow"),v("Logo","logo")];n(186);function w(){return o.a.createElement(i.LocationProvider,null,function(t){var e=t.location;return o.a.createElement("nav",{className:"portal-menu"},o.a.createElement(p.a,null,o.a.createElement(p.b,{title:"Grunnleggende",startExpanded:e.pathname.includes("core")||"/"===e.pathname},y.map(function(t){return o.a.createElement(c.a,{key:t.title,className:"portal-menu__link",to:"/"+t.section+"/"+t.page},t.title)})),o.a.createElement(p.b,{title:"Profilelementer",startExpanded:e.pathname.includes("profile")},k.map(function(t){return o.a.createElement(c.a,{key:t.title,className:"portal-menu__link",to:"/"+t.section+"/"+t.page},t.title)})),o.a.createElement(p.b,{title:"For designere",startExpanded:e.pathname.includes("designer")},b.map(function(t){return o.a.createElement(c.a,{key:t.title,className:"portal-menu__link",to:"/"+t.section+"/"+t.page},t.title)})),o.a.createElement(p.b,{title:"For utviklere",startExpanded:e.pathname.includes("developer")},g.map(function(t){return o.a.createElement(c.a,{key:t.title,className:"portal-menu__link",to:"/"+t.section+"/"+t.page},t.title)})),o.a.createElement(p.b,{title:"Komponenter",startExpanded:e.pathname.includes("components")},E.map(function(t){return o.a.createElement(c.a,{key:t.title,className:"portal-menu__link",to:"/"+t.section+"/"+t.page},t.title)}))))})}n(187);n.d(e,"a",function(){return _});var _=function(t){var e=t.children,n=t.title,r=t.mainExample;return o.a.createElement(i.LocationProvider,null,function(t){return"?fullscreen"!==t.location.search?o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{siteTitle:"Jøkul"}),o.a.createElement(w,null),o.a.createElement("main",{className:"portal-content"},n&&o.a.createElement("h2",{className:"jkl-h1 portal-content__title"},n),r,e)):o.a.createElement("main",{className:"portal-component-only"},r)})};e.b=_},223:function(t,e,n){"use strict";(function(e){n(37),n(14),n(84),n(26),n(36),n(24),n(25),n(85),n(86),n(48),n(13),n(131),n(129);var r,o=(r=n(0))&&"object"==typeof r&&"default"in r?r.default:r;function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function s(t){var e="function"==typeof Map?new Map:void 0;return(s=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return l(t,arguments,c(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)})(t)}function p(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var d="undefined"!=typeof window,f=d&&/(android)/i.test(navigator.userAgent),h=d&&/iPad|iPhone|iPod/.test(String(navigator.platform));d&&!window.Element.prototype.toggleAttribute&&(window.Element.prototype.toggleAttribute=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!this.hasAttribute(t);return!e===this.hasAttribute(t)&&this[e?"setAttribute":"removeAttribute"](t,""),e}),d||e.HTMLElement||(e.HTMLElement=function(){return function t(){i(this,t)}}());var m,v,g=(m="undefined"==typeof window?{}:window.Element.prototype,v=m.matches||m.msMatchesSelector||m.webkitMatchesSelector,m.closest?function(t,e){return t.closest(e)}:function(t,e){for(;t;t=t.parentElement)if(v.call(t,e))return t;return null});function b(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="prevent_recursive_dispatch_maximum_callstack".concat(e);if(t[o])return!0;t[o]=!0,"function"==typeof window.CustomEvent?n=new window.CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r}):(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,r);var i=t.dispatchEvent(n);return t[o]=null,i}function y(){return Date.now().toString(36)+Math.random().toString(36).slice(2,5)}var E=function(t){function e(){return i(this,e),p(this,c(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,s(HTMLElement)),n=e,o=[{key:"observedAttributes",get:function(){return["hidden"]}}],(r=[{key:"connectedCallback",value:function(){h&&(document.documentElement.style.cursor="pointer"),f||this.setAttribute("aria-labelledby",this.button.id=this.button.id||y()),this.value=this.button.textContent,this.setAttribute("role","group"),this.button.setAttribute("aria-expanded",this._open=!this.hidden),this.button.setAttribute("aria-controls",this.id=this.id||y()),document.addEventListener("keydown",this,!0),document.addEventListener("click",this)}},{key:"disconnectedCallback",value:function(){this._button=null,document.removeEventListener("keydown",this,!0),document.removeEventListener("click",this)}},{key:"attributeChangedCallback",value:function(){if(this._open===this.hidden){this.button.setAttribute("aria-expanded",this._open=!this.hidden);try{this.querySelector("[autofocus]").focus()}catch(t){}b(this,"toggle")}}},{key:"handleEvent",value:function(t){if(!t.defaultPrevented){if("keydown"===t.type&&27===t.keyCode)if(t.target.getAttribute&&"true"===t.target.getAttribute("aria-expanded")?t.target===this.button:g(t.target,this.nodeName)===this)return this.hidden=!0,this.button.focus(),t.preventDefault();if("click"===t.type){var e=g(t.target,"a,button");e&&!e.hasAttribute("aria-expanded")&&g(t.target,this.nodeName)===this?b(this,"toggle.select",e):e&&e.getAttribute("aria-controls")===this.id?this.hidden=!this.hidden:this.popup&&!this.contains(t.target)&&(this.hidden=!0)}}}},{key:"button",get:function(){return this._button&&this._button.getAttribute("for")===this.id?this._button:(this._button=this.id&&document.querySelector('[for="'.concat(this.id,'"]')))||this.previousElementSibling}},{key:"popup",get:function(){return"true"===this.getAttribute("popup")||this.getAttribute("popup")||this.hasAttribute("popup")},set:function(t){this[!1===t?"removeAttribute":"setAttribute"]("popup",t)}},{key:"hidden",get:function(){return this.hasAttribute("hidden")},set:function(t){this.toggleAttribute("hidden",t)}},{key:"value",get:function(){return this.button.value||this.button.textContent},set:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.button&&this.popup.length){var e=this.button,n=(e.getAttribute("aria-label")||",".concat(this.popup)).split(",")[1],r=t.textContent||t||"";n===this.popup&&(e.value=t.value||r,e[t.innerHTML?"innerHTML":"textContent"]=t.innerHTML||r,e.setAttribute("aria-label","".concat(e.textContent,",").concat(this.popup)))}}}])&&a(n.prototype,r),o&&a(n,o),e}(),k=function(){var t="undefined"==typeof window?{}:window.Element.prototype,e=t.matches||t.msMatchesSelector||t.webkitMatchesSelector;return t.closest?function(t,e){return t.closest(e)}:function(t,n){for(;t;t=t.parentElement)if(e.call(t,n))return t;return null}}();var w=function(t,e){void 0===e&&(e={});var n=(t.name||String(t).match(/function ([^(]+)/)[1]).replace(/.[A-Z]/g,function(t){return t[0]+"-"+t[1]}),r=e.props||[],i=e.customEvents||[],a=r.slice(),c=(n+"-"+(e.suffix||"react")).replace(/\W+/g,"-").toLowerCase();return function(e){function n(t){var n=this;e.call(this,t),this.ref=function(t){return n.el=t},i.forEach(function(t){var e="on"+t.replace(/(^|\.)./g,function(t){return t.slice(-1).toUpperCase()});n[t]=function(t){return n.props[e]&&k(t.target,n.el.nodeName)===n.el&&n.props[e](t)},a.push(e)})}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){var e=this;window.customElements.get(c)||window.customElements.define(c,t),r.forEach(function(t){return e.props.hasOwnProperty(t)&&(e.el[t]=e.props[t])}),i.forEach(function(t){return e.el.addEventListener(t,e[t])})},n.prototype.componentDidUpdate=function(t){var e=this;r.forEach(function(n){return t[n]!==e.props[n]&&(e.el[n]=e.props[n])})},n.prototype.componentWillUnmount=function(){var t=this;i.forEach(function(e){return t.el.removeEventListener(e,t[e])})},n.prototype.render=function(){var t=this;return o.createElement(c,Object.keys(this.props).reduce(function(e,n){return-1===a.indexOf(n)&&("className"===n?e.class=t.props[n]:!0===t.props[n]?e[n]="":!1!==t.props[n]&&(e[n]=t.props[n])),e},{ref:this.ref}))},n}(o.Component)}(E,{customEvents:["toggle","toggle.select"],suffix:"3.0.4"});t.exports=w}).call(this,n(87))}}]);
//# sourceMappingURL=component---src-pages-404-tsx-aff55506fe362622404e.js.map