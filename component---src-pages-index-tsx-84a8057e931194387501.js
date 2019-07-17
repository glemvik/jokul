(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{194:function(t,e,n){"use strict";n.r(e);var r=n(202),o=n(0),a=n.n(o),i=n(206);e.default=function(){return a.a.createElement(i.b,null,a.a.createElement("h2",null,"Jokul - Fremtinds designsystem"),a.a.createElement("div",null,a.a.createElement(r.a,{to:"/components/button/"},"Eksempel på komponent dokumentasjon"),a.a.createElement(r.a,{to:"/components/accordion/"},"Eksempel på komponent dokumentasjon")),a.a.createElement(r.a,{to:"/a-la-carte"},"Alle komponenter"))}},202:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(61),i=n.n(a);n.d(e,"a",function(){return i.a});n(204),o.a.createContext({})},203:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return u});n(47),n(35),n(24);var r=n(0),o=n.n(r),a=n(207),i=n.n(a);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(t){var e=t.children,n=t.title,a=t.startExpanded,u=void 0!==a&&a,l=c(Object(r.useState)(u),2),s=l[0],p=l[1],d=s?" jkl-accordion-item--expanded":"";return o.a.createElement("div",{"data-testid":"jkl-accordion-item",className:"jkl-accordion-item".concat(d)},o.a.createElement("button",{className:"jkl-accordion-item__title",type:"button"},o.a.createElement("div",{className:"jkl-accordion-item__title-text"},n),o.a.createElement("div",{className:"jkl-accordion-item__title-icon"})),o.a.createElement(i.a,{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",hidden:!s,onToggle:function(){return p(!s)}},o.a.createElement("div",{className:"jkl-accordion-item__content"},e)))}function l(t){var e=t.children;return o.a.createElement("div",{"data-testid":"jkl-accordion",className:"jkl-accordion"},e)}},204:function(t,e,n){var r;t.exports=(r=n(205))&&r.default||r},205:function(t,e,n){"use strict";n.r(e);n(25);var r=n(0),o=n.n(r),a=n(90);e.default=function(t){var e=t.location,n=t.pageResources;return n?o.a.createElement(a.a,Object.assign({location:e,pageResources:n},n.json)):null}},206:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(202),i=(n(186),function(t){var e=t.siteTitle,n=void 0===e?"":e;return o.a.createElement("header",{className:"portal-header"},o.a.createElement("h1",{className:"portal-header__title jkl-h2"},o.a.createElement(a.a,{to:"/"},n)))}),c=n(203),u=(n(187),function(t,e){return function(t,e,n){return{title:t,page:e,section:n}}(t,e,"developer")}),l=[u("Kom i gang","getting-started"),u("Bidragsguide","contribute")];function s(){return o.a.createElement("nav",{className:"portal-menu"},o.a.createElement(c.a,null,o.a.createElement(c.b,{title:"Grunnleggende",startExpanded:!0},o.a.createElement(a.a,{className:"portal-menu__link",to:"/"},"Designprinsipper"),o.a.createElement(a.a,{className:"portal-menu__link",to:"/"},"Farger"),o.a.createElement(a.a,{className:"portal-menu__link",to:"/"},"Typografi"),o.a.createElement(a.a,{className:"portal-menu__link",to:"/"},"Bevegelse"),o.a.createElement(a.a,{className:"portal-menu__link",to:"/"},"Spacing"),o.a.createElement(a.a,{className:"portal-menu__link",to:"/"},"Stil og tone")),o.a.createElement(c.b,{title:"Profilelementer"},o.a.createElement(a.a,{className:"portal-menu__link",to:"/"},"Logo"),o.a.createElement(a.a,{className:"portal-menu__link",to:"/"},"Farger"),o.a.createElement(a.a,{className:"portal-menu__link",to:"/"},"Bildestil"),o.a.createElement(a.a,{className:"portal-menu__link",to:"/"},"Illustrasjon"),o.a.createElement(a.a,{className:"portal-menu__link",to:"/"},"Ikoner")),o.a.createElement(c.b,{title:"For utviklere"},l.map(function(t){return o.a.createElement(a.a,{key:t.title,className:"portal-menu__link",to:"/"+t.section+"/"+t.page},t.title)})),o.a.createElement(c.b,{title:"Komponenter"},o.a.createElement(a.a,{className:"portal-menu__link",to:"/components/button/"},"Knapper"),o.a.createElement(a.a,{className:"portal-menu__link",to:"/components/accordion/"},"Trekkspilliste"),o.a.createElement(a.a,{className:"portal-menu__link",to:"/components/datepicker/"},"Datovelger"))))}n(188);n.d(e,"a",function(){return p});var p=function(t){var e=t.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i,{siteTitle:"Jøkul"}),o.a.createElement(s,null),o.a.createElement("main",{className:"portal-content"},e))};e.b=p},207:function(t,e,n){"use strict";(function(e){n(36),n(14),n(87),n(26),n(37),n(24),n(16),n(62),n(63),n(46),n(12),n(128),n(127);var r,o=(r=n(0))&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function s(t){var e="function"==typeof Map?new Map:void 0;return(s=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return l(t,arguments,c(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)})(t)}function p(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var d="undefined"!=typeof window,f=d&&/(android)/i.test(navigator.userAgent),m=d&&/iPad|iPhone|iPod/.test(String(navigator.platform));d&&!window.Element.prototype.toggleAttribute&&(window.Element.prototype.toggleAttribute=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!this.hasAttribute(t);return!e===this.hasAttribute(t)&&this[e?"setAttribute":"removeAttribute"](t,""),e}),d||e.HTMLElement||(e.HTMLElement=function(){return function t(){a(this,t)}}());var h,b,v=(h="undefined"==typeof window?{}:window.Element.prototype,b=h.matches||h.msMatchesSelector||h.webkitMatchesSelector,h.closest?function(t,e){return t.closest(e)}:function(t,e){for(;t;t=t.parentElement)if(b.call(t,e))return t;return null});function g(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="prevent_recursive_dispatch_maximum_callstack".concat(e);if(t[o])return!0;t[o]=!0,"function"==typeof window.CustomEvent?n=new window.CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r}):(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,r);var a=t.dispatchEvent(n);return t[o]=null,a}function E(){return Date.now().toString(36)+Math.random().toString(36).slice(2,5)}var y=function(t){function e(){return a(this,e),p(this,c(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,s(HTMLElement)),n=e,o=[{key:"observedAttributes",get:function(){return["hidden"]}}],(r=[{key:"connectedCallback",value:function(){m&&(document.documentElement.style.cursor="pointer"),f||this.setAttribute("aria-labelledby",this.button.id=this.button.id||E()),this.value=this.button.textContent,this.setAttribute("role","group"),this.button.setAttribute("aria-expanded",this._open=!this.hidden),this.button.setAttribute("aria-controls",this.id=this.id||E()),document.addEventListener("keydown",this,!0),document.addEventListener("click",this)}},{key:"disconnectedCallback",value:function(){this._button=null,document.removeEventListener("keydown",this,!0),document.removeEventListener("click",this)}},{key:"attributeChangedCallback",value:function(){if(this._open===this.hidden){this.button.setAttribute("aria-expanded",this._open=!this.hidden);try{this.querySelector("[autofocus]").focus()}catch(t){}g(this,"toggle")}}},{key:"handleEvent",value:function(t){if(!t.defaultPrevented){if("keydown"===t.type&&27===t.keyCode)if(t.target.getAttribute&&"true"===t.target.getAttribute("aria-expanded")?t.target===this.button:v(t.target,this.nodeName)===this)return this.hidden=!0,this.button.focus(),t.preventDefault();if("click"===t.type){var e=v(t.target,"a,button");e&&!e.hasAttribute("aria-expanded")&&v(t.target,this.nodeName)===this?g(this,"toggle.select",e):e&&e.getAttribute("aria-controls")===this.id?this.hidden=!this.hidden:this.popup&&!this.contains(t.target)&&(this.hidden=!0)}}}},{key:"button",get:function(){return this._button&&this._button.getAttribute("for")===this.id?this._button:(this._button=this.id&&document.querySelector('[for="'.concat(this.id,'"]')))||this.previousElementSibling}},{key:"popup",get:function(){return"true"===this.getAttribute("popup")||this.getAttribute("popup")||this.hasAttribute("popup")},set:function(t){this[!1===t?"removeAttribute":"setAttribute"]("popup",t)}},{key:"hidden",get:function(){return this.hasAttribute("hidden")},set:function(t){this.toggleAttribute("hidden",t)}},{key:"value",get:function(){return this.button.value||this.button.textContent},set:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.button&&this.popup.length){var e=this.button,n=(e.getAttribute("aria-label")||",".concat(this.popup)).split(",")[1],r=t.textContent||t||"";n===this.popup&&(e.value=t.value||r,e[t.innerHTML?"innerHTML":"textContent"]=t.innerHTML||r,e.setAttribute("aria-label","".concat(e.textContent,",").concat(this.popup)))}}}])&&i(n.prototype,r),o&&i(n,o),e}(),k=function(){var t="undefined"==typeof window?{}:window.Element.prototype,e=t.matches||t.msMatchesSelector||t.webkitMatchesSelector;return t.closest?function(t,e){return t.closest(e)}:function(t,n){for(;t;t=t.parentElement)if(e.call(t,n))return t;return null}}();var _=function(t,e){void 0===e&&(e={});var n=(t.name||String(t).match(/function ([^(]+)/)[1]).replace(/.[A-Z]/g,function(t){return t[0]+"-"+t[1]}),r=e.props||[],a=e.customEvents||[],i=r.slice(),c=(n+"-"+(e.suffix||"react")).replace(/\W+/g,"-").toLowerCase();return function(e){function n(t){var n=this;e.call(this,t),this.ref=function(t){return n.el=t},a.forEach(function(t){var e="on"+t.replace(/(^|\.)./g,function(t){return t.slice(-1).toUpperCase()});n[t]=function(t){return n.props[e]&&k(t.target,n.el.nodeName)===n.el&&n.props[e](t)},i.push(e)})}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){var e=this;window.customElements.get(c)||window.customElements.define(c,t),r.forEach(function(t){return e.props.hasOwnProperty(t)&&(e.el[t]=e.props[t])}),a.forEach(function(t){return e.el.addEventListener(t,e[t])})},n.prototype.componentDidUpdate=function(t){var e=this;r.forEach(function(n){return t[n]!==e.props[n]&&(e.el[n]=e.props[n])})},n.prototype.componentWillUnmount=function(){var t=this;a.forEach(function(e){return t.el.removeEventListener(e,t[e])})},n.prototype.render=function(){var t=this;return o.createElement(c,Object.keys(this.props).reduce(function(e,n){return-1===i.indexOf(n)&&("className"===n?e.class=t.props[n]:!0===t.props[n]?e[n]="":!1!==t.props[n]&&(e[n]=t.props[n])),e},{ref:this.ref}))},n}(o.Component)}(y,{customEvents:["toggle","toggle.select"],suffix:"3.0.4"});t.exports=_}).call(this,n(88))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-84a8057e931194387501.js.map