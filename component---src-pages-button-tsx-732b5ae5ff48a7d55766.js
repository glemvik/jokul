(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{176:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(187);function i(){console.log("You've clicked me!")}function o(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{onClick:i},"Click me!"))}var l='import { PrimaryButton } from "@fremtind/jkl-button-react";\nimport React from "react";\n\nfunction clickHandler() {\n    console.log("You\'ve clicked me!");\n}\n\nexport function ButtonExample() {\n    return (\n        <>\n            <PrimaryButton onClick={clickHandler}>Click me!</PrimaryButton>\n        </>\n    );\n}\n',u=n(181);function m(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement("pre",null,l)))}n.d(t,"default",function(){return m})},177:function(e,t,n){var a;e.exports=(a=n(180))&&a.default||a},178:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(13),i=n.n(c),o=n(60),l=n.n(o);n.d(t,"a",function(){return l.a});n(177),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Jokul"}}}}},180:function(e,t,n){"use strict";n.r(t);n(9);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),o=n(87),l=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},181:function(e,t,n){"use strict";var a=n(179),r=n(0),c=n.n(r),i=n(178),o=function(e){var t=e.siteTitle,n=void 0===t?"":t;return c.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},c.a.createElement("h1",{style:{margin:0}},c.a.createElement(i.a,{to:"/",style:{color:"white",textDecoration:"none"}},n))))};n(184),n(185),t.a=function(e){var t=e.children,n=a.data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o,{siteTitle:n.site.siteMetadata.title}),c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},c.a.createElement("main",null,t)))}},187:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n.n(a);function c(e){return function(t){var n=t.children,a=t.className,c=void 0===a?"":a,i=t.onClick;return r.a.createElement("button",{onClick:i,className:"jkl-button jkl-button--".concat(e," ").concat(c)},n)}}var i=c("Primary");c("Secondary"),c("Tertiary")}}]);
//# sourceMappingURL=component---src-pages-button-tsx-732b5ae5ff48a7d55766.js.map