(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{183:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(212),c=a.n(r);function i(e){var t=e.children,a=e.title,r=e.startExpanded,i=void 0!==r&&r,o=Object(n.useState)(i),s=o[0],m=o[1],u=s?" jkl-accordion-item--expanded":"";return l.a.createElement("div",{"data-testid":"jkl-accordion-item",className:"jkl-accordion-item"+u},l.a.createElement("button",{className:"jkl-accordion-item__title",type:"button"},l.a.createElement("div",{className:"jkl-accordion-item__title-text"},a),l.a.createElement("div",{className:"jkl-accordion-item__title-icon"})),l.a.createElement(c.a,{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",hidden:!s,onToggle:function(){return m(!s)}},l.a.createElement("div",{className:"jkl-accordion-item__content"},t)))}function o(e){var t=e.children;return l.a.createElement("div",{"data-testid":"jkl-accordion",className:"jkl-accordion"},t)}function s(e){return function(t){var a=t.children,n=t.className,r=void 0===n?"":n,c=t.onClick;return l.a.createElement("button",{onClick:c,className:"jkl-button jkl-button--"+e+" "+r},a)}}var m=s("primary"),u=s("secondary"),d=s("tertiary"),h=function(e){var t=e.children;return l.a.createElement("div",{className:"jkl-card"},t)};function v(e){return l.a.createElement("label",{className:"jkl-checkbox"},l.a.createElement("input",{"data-testid":"jkl-checkbox-input",defaultChecked:e.defaultChecked,className:"jkl-checkbox__input",type:"checkbox"}),e.children)}var E=a(200),p=a.n(E),k=function(){var e=Object(n.useState)("undefined"==typeof IntersectionObserver),t=e[0],a=e[1],r=Object(n.useState)(p()())[0],c="undefined"!=typeof IntersectionObserver&&new IntersectionObserver(function(e){return e.forEach(function(e){e.isIntersecting&&t!==e.isIntersecting&&a(!0)})},{rootMargin:"0px",threshold:1})||{observe:function(){return a(!0)}};return Object(n.useEffect)(function(){var e=document.getElementById(r);e&&c.observe(e)},[]),l.a.createElement("hr",{id:r,className:"jkl-divider "+(t?"jkl-divider--spin":"")})},j=(a(12),a(309)),g=function(e){var t=e.label,a=e.items,n=e.className,r=void 0===n?"":n,c=e.initialInputValue,i=e.onChange;return l.a.createElement(j.a,{onChange:function(e){return i(e)},initialInputValue:c},function(e){var n=e.getInputProps,c=e.getToggleButtonProps,i=e.getLabelProps,o=e.getMenuProps,s=e.isOpen,m=e.highlightedIndex,u=e.inputValue,d=e.getItemProps;return l.a.createElement("div",Object.assign({className:"jkl-dropdown "+(s?"jkl-dropdown--open":"")+" "+r},n()),l.a.createElement("button",Object.assign({"data-testid":"jkl-dropdown-button",className:"jkl-dropdown__toggler"},c()),s?"Lukk":"Åpne"),l.a.createElement("label",Object.assign({className:"jkl-dropdown__label "+(u?"jkl-dropdown__label--raised":"")},i()),t),l.a.createElement("input",{"data-testid":"jkl-dropdown-input",type:"text",className:"jkl-dropdown__value "+(u?"jkl-dropdown__value--show":""),value:null!==u?u:void 0,readOnly:!0}),l.a.createElement("ul",Object.assign({className:"jkl-dropdown__option"},o()),s?a.map(function(e,t){return l.a.createElement("li",Object.assign({className:"jkl-dropdown__option--item "+(m===t?"jkl-dropdown__option--item--highlighted":"")+" "+(u===e?"jkl-dropdown__option--item--selected":"")},d({key:e,index:t,item:e})),e)}):null))})},f=function(e){var t=e.className,a=void 0===t?"":t;return l.a.createElement("svg",{className:"jkl-logo "+a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 260.32 140.25"},l.a.createElement("path",{stroke:"currentColor",fill:"currentColor",d:"M248.27 138.54l9.48-9.48L130.11 1.42 2.56 128.97l9.85 9.85 59.88-59.88 59.88 59.89 9.49-9.49-59.88-59.89 48.7-48.7 117.79 117.79z"}))},b=function(e){var t=e.className,a=void 0===t?"":t;return l.a.createElement("svg",{className:"jkl-logo "+a,viewBox:"0 0 994 187",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{stroke:"currentColor",fill:"currentColor",d:"M113 2.974H0v180.379h13.93V98.674h84.685V85.252H13.93l-.001-68.871H113V2.974M192.63 54.93c-17.612 0-34.845 11.822-41.04 27.828l-.272-26.182-.003-.387h-11.913v127.164h13.423v-61.051c0-20.338 5.171-54.457 39.805-54.457 4.984 0 8.887.397 12.282 1.248l.486.122V55.749l-.321-.06c-4.077-.759-8.334-.759-12.447-.759M235.971 110.779c.174-26.22 17.81-45.211 42.066-45.211 26.01 0 40.172 22.676 40.808 45.211h-82.874zm42.066-57.878c-17.642 0-32.608 7.658-43.28 22.147-8.495 11.558-12.453 25.928-12.453 45.225 0 19.125 5.626 35.818 16.27 48.28 10.519 11.994 24.137 18.078 40.475 18.078 13.966 0 26.902-5.245 36.422-14.764 7.799-7.527 12.6-16.53 14.262-26.761l.077-.453h-13.93l-.064.314c-1.329 6.686-4.346 12.327-9.492 17.752-6.845 7.091-16.53 10.997-27.275 10.997-12.646 0-22.835-4.461-30.283-13.254-7.967-9.451-12.713-23.012-13.046-37.261h96.541v-.391c0-1.513.067-2.862.128-4.166.064-1.308.132-2.662.132-4.184 0-16.285-5.092-31.475-14.339-42.773-10.058-12.291-23.942-18.786-40.145-18.786zM501.435 52.901c-18.685 0-33.076 9.428-40.634 26.581-4.101-12.363-14.384-26.581-39.988-26.581-16.57 0-30.723 8.905-38.14 23.909l-1.402-20.257-.028-.364h-11.885v127.164h13.419v-63.586c0-21.012 5.061-36.391 15.042-45.712 5.908-5.631 13.386-8.487 22.227-8.487 20.43 0 29.946 11.04 29.946 34.744v83.041h13.667v-71.921c0-15.27 5.115-28.194 14.788-37.371 6.35-5.794 13.413-8.493 22.233-8.493 20.252 0 29.686 11.04 29.686 34.744v83.041h13.423V99.545c0-30.079-15.042-46.644-42.354-46.644M608.935 18.166l-13.423 3.231v34.792h-25.28v12.409h25.28v79.23c0 24.398 11.411 37.295 33.002 37.295 6.837 0 13.334-1.388 20.216-2.858l1.152-.246v-11.918l-.461.085c-6.219 1.149-12.876 2.269-19.904 2.269-14.428 0-20.582-7.516-20.582-25.134V68.598h75.09v114.755h14.177V56.189h-89.267V18.166M803.232 52.901c-17.878 0-35.083 10.266-42.427 25.142l-1.43-21.854h-11.891v127.164h13.422v-63.586c0-10.442 1.607-25.35 9.257-37.063 7.209-11.035 18.083-16.628 32.314-16.628 21.674 0 32.211 11.198 32.211 34.236v83.041h13.422V99.545c0-29.643-16.356-46.644-44.878-46.644M690.983 2.438c-5.608 0-10.167 4.561-10.167 10.166 0 5.606 4.559 10.167 10.167 10.167s10.168-4.561 10.168-10.167c0-5.605-4.56-10.166-10.168-10.166M963.931 163.464c-6.912 6.639-15.497 10.006-25.517 10.006-9.963 0-18.062-2.861-24.757-8.743-10.675-9.519-16.555-25.485-16.555-44.96 0-17.785 4.987-32.949 14.039-42.693 7.133-7.402 15.889-10.998 26.769-10.998 10.699 0 19.534 3.278 26.272 9.751 10.782 10.084 15.806 24.047 15.806 43.94 0 18.569-5.403 33.272-16.057 43.697zM979.725.08v76.091c-7.355-13.778-24.28-23.27-41.815-23.27-13.924 0-25.577 4.46-34.638 13.252-12.606 11.896-19.837 31.532-19.837 53.874 0 23.458 7.408 42.861 20.857 54.633 9.028 7.943 20.424 11.971 33.877 11.971 17.447 0 34.689-10.165 41.661-24.369l1.442 21.091h11.876V.08h-13.423z"}))},N=function(e){var t=e.className,a=void 0===t?"":t,n=e.centered,r=void 0===n||n,c=e.showSymbol,i=void 0===c||c;return l.a.createElement("div",{className:"jkl-logo__wrapper "+(r&&i?"jkl-logo__wrapper--centered":"")},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",stroke:"currentColor",viewBox:"30 18 658 127",className:"jkl-logo jkl-logo--animated "+(i?"jkl-logo--animated__symbol-only":"")+" "+a},l.a.createElement("g",{fill:"none",className:"jkl-logo--animated__F",strokeWidth:"8"},l.a.createElement("line",{x1:"34.3",x2:"99.846844",y1:"32.563024",y2:"32.563024",className:"jkl-logo--animated__F-line"}),l.a.createElement("line",{x1:"35.12226",x2:"91.504088",y1:"80.105318",y2:"80.105318"}),l.a.createElement("line",{x1:"-10.820058",x2:"87.38984",y1:"84.219561",y2:"84.219561",transform:"rotate(90, 38.2849, 84.2196)"})),l.a.createElement("path",{strokeWidth:".57975",d:"M145.752 58.979c-10.21 0-20.201 6.854-23.793 16.133l-.157-15.179-.002-.224h-6.907v73.723h7.782V98.038c0-11.791 2.998-31.572 23.077-31.572 2.89 0 5.153.23 7.12.724l.283.07v-7.806l-.187-.035c-2.363-.44-4.831-.44-7.216-.44M170.88 91.357c.1-15.2 10.325-26.21 24.387-26.21 15.08 0 23.29 13.146 23.658 26.21H170.88zm24.387-33.554c-10.228 0-18.904 4.44-25.092 12.84-4.925 6.7-7.22 15.031-7.22 26.218 0 11.088 3.262 20.766 9.433 27.99 6.099 6.954 13.994 10.481 23.466 10.481 8.097 0 15.596-3.04 21.115-8.559 4.522-4.364 7.305-9.583 8.269-15.515l.044-.262h-8.075l-.038.182c-.77 3.876-2.52 7.146-5.503 10.292-3.968 4.11-9.583 6.375-15.812 6.375-7.332 0-13.239-2.586-17.557-7.684-4.619-5.48-7.37-13.341-7.563-21.602h55.97v-.227c0-.877.038-1.659.074-2.415.037-.758.076-1.543.076-2.426 0-9.44-2.952-18.247-8.313-24.797-5.831-7.126-13.88-10.891-23.274-10.891h0zM324.782 57.803c-10.833 0-19.176 5.465-23.558 15.41-2.377-7.168-8.339-15.41-23.183-15.41-9.606 0-17.811 5.162-22.111 13.86l-.813-11.743-.016-.211h-6.89v73.723h7.78V96.568c0-12.182 2.933-21.098 8.72-26.501 3.425-3.265 7.76-4.92 12.885-4.92 11.845 0 17.362 6.4 17.362 20.142v48.143h7.923V91.736c0-8.853 2.965-16.346 8.573-21.666 3.682-3.36 7.777-4.924 12.89-4.924 11.741 0 17.21 6.4 17.21 20.143v48.143h7.783V84.844c0-17.438-8.721-27.041-24.555-27.041M387.105 37.665l-7.782 1.873v20.17h-14.656v7.195h14.656v45.933c0 14.145 6.615 21.622 19.133 21.622 3.964 0 7.73-.804 11.72-1.657l.668-.142v-6.91l-.267.05c-3.606.666-7.465 1.315-11.54 1.315-8.364 0-11.932-4.357-11.932-14.571v-45.64h43.533v66.529h8.22V59.709h-51.753V37.665M499.748 57.803c-10.364 0-20.339 5.951-24.596 14.576l-.83-12.67h-6.893v73.723h7.781V96.568c0-6.054.932-14.697 5.367-21.487 4.18-6.398 10.483-9.64 18.734-9.64 12.565 0 18.674 6.492 18.674 19.848v48.143h7.781V84.844c0-17.185-9.482-27.041-26.018-27.041M434.672 28.547a5.9 5.9 0 0 0-5.894 5.893 5.9 5.9 0 0 0 5.894 5.895 5.9 5.9 0 0 0 5.895-5.895 5.9 5.9 0 0 0-5.895-5.893M592.914 121.901c-4.007 3.85-8.984 5.801-14.793 5.801-5.777 0-10.472-1.658-14.354-5.068-6.188-5.519-9.597-14.775-9.597-26.066 0-10.31 2.89-19.102 8.139-24.751 4.135-4.291 9.212-6.376 15.52-6.376 6.202 0 11.324 1.9 15.23 5.653 6.251 5.846 9.164 13.941 9.164 25.474 0 10.765-3.132 19.29-9.309 25.333zm9.157-94.721v44.113c-4.264-7.988-14.077-13.49-24.243-13.49-8.072 0-14.828 2.585-20.081 7.682-7.309 6.897-11.5 18.281-11.5 31.234 0 13.6 4.294 24.848 12.091 31.673 5.234 4.605 11.841 6.94 19.64 6.94 10.115 0 20.112-5.893 24.154-14.127l.835 12.227h6.886V27.18h-7.782 0z",className:"jkl-logo--animated__remtind"})))},_=(a(29),function(e){var t=e.value,a=e.onChange,r=e.name,c=void 0===r?"":r,i=e.inline,o=void 0!==i&&i,s=e.checked,m=Object(n.useState)(p()())[0];return l.a.createElement("span",{className:"jkl-radio-button".concat(o?" jkl-radio-button--inline":"")},l.a.createElement("input",{type:"radio",id:m,name:c,value:t,className:"jkl-radio-button__input",onChange:a,checked:s}),l.a.createElement("label",{htmlFor:m,className:"jkl-radio-button__label"},t))}),w=function(e){var t=e.name,a=e.legend,n=e.choices,r=e.selectedValue,c=e.onChange,i=e.inline,o=void 0===i||i;return l.a.createElement("fieldset",{className:"jkl-radio-button-choice"},l.a.createElement("legend",null,a||t),n.map(function(e){return l.a.createElement(_,{key:e,name:t,value:e,inline:o,checked:e===r,onChange:c})}))};a(17),a(16),a(4),a(35);var x=function(e){var t=e.type,a=void 0===t?"text":t,n=e.isInvalid,r=void 0!==n&&n,c=e.id,i=e.label,o=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["type","isInvalid","id","label"]);return l.a.createElement("label",{className:"jkl-text-field"},l.a.createElement("input",Object.assign({type:a,"aria-invalid":r,className:"jkl-text-field__input",id:c,placeholder:" "},o)),l.a.createElement("span",{className:"jkl-text-field__label"},i),l.a.createElement("span",{className:"jkl-text-field__border"}))};var y=function(e){var t=e.isInvalid,a=void 0!==t&&t,n=e.id,r=e.label,c=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["isInvalid","id","label"]);return l.a.createElement("label",{className:"jkl-text-field jkl-text-area"},l.a.createElement("textarea",Object.assign({"aria-invalid":a,className:"jkl-text-field__input",id:n,placeholder:" "},c)),l.a.createElement("span",{className:"jkl-text-field__label"},r),l.a.createElement("span",{className:"jkl-text-field__border"}))};function O(e,t){return function(a){var n=a.children,r=a.className,c=void 0===r?"":r,i=a.styledAs,o=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(a,["children","className","styledAs"]),s=e,m=i||e;return l.a.createElement(s,Object.assign({className:"jkl-"+(t||m)+" "+c},o),n)}}var C=O("h1"),V=O("h2"),I=O("h3"),M=O("h4"),S=O("p","lead"),T=O("p"),H=O("p","small"),P=O("p","tiny"),z=function(e){var t=e.children,a=e.className;return l.a.createElement("ul",{className:"jkl-bullet-list "+(a||"")},t)},B=function(e){var t=e.children;return l.a.createElement("li",{className:"jkl-bullet-list__item"},t)},L=a(191);a(181);function R(){var e=Object(n.useState)(!0),t=e[0],a=e[1],r=Object(n.useState)("1"),c=r[0],s=r[1],E=Object(n.useState)(),p=E[0],j=E[1],_=Object(n.useState)(),O=_[0],R=_[1],F=Object(n.useState)(),A=F[0],D=F[1];return l.a.createElement(L.a,null,l.a.createElement("section",null,l.a.createElement("h1",{className:"jkl-h2"},"Button"),l.a.createElement("span",{className:"jkl-component-vertical-spacer"},l.a.createElement(m,{onClick:function(){}},"Primary")),l.a.createElement("span",{className:"jkl-component-vertical-spacer"},l.a.createElement(u,{onClick:function(){}},"Secondary")),l.a.createElement("span",{className:"jkl-component-vertical-spacer"},l.a.createElement(d,{onClick:function(){}},"Tertiary"))),l.a.createElement("section",null,l.a.createElement("h1",{className:"jkl-h2"},"Accordion"),l.a.createElement(o,null,l.a.createElement(i,{title:"Hello"},"Hugh?"))),l.a.createElement("section",null,l.a.createElement("h1",{className:"jkl-h2"},"Bullet List"),l.a.createElement(z,null,l.a.createElement(B,null,"Some Item"),l.a.createElement(B,null,"Some Item 2"),l.a.createElement(B,null,"Some Item 3"),l.a.createElement(z,null,l.a.createElement(B,null,"Nested Item 1"),l.a.createElement(z,null,l.a.createElement(B,null,"INCEPTION!"))))),l.a.createElement("section",null,l.a.createElement("h1",{className:"jkl-h2"},"Card"),l.a.createElement(h,null," I am card!")),l.a.createElement("section",null,l.a.createElement("h1",{className:"jkl-h2"},"Checkbox"),l.a.createElement(v,{defaultChecked:!0}," Yes "),l.a.createElement(v,null," No ")),l.a.createElement("section",null,l.a.createElement("h1",{className:"jkl-h2"},"Divider line"),l.a.createElement(k,null)),l.a.createElement("section",null,l.a.createElement("h1",{className:"jkl-h2"},"Dropdown"),l.a.createElement(g,{items:["Ener","Toer","Treer"],label:"Jeg er",onChange:function(){}})),l.a.createElement("section",null,l.a.createElement("h1",{className:"jkl-h2"},"Logo"),l.a.createElement("div",{className:"jkl-logo-wrapper"},"Tekstlogo: ",l.a.createElement(b,null)),l.a.createElement("div",{className:"jkl-logo-wrapper"},"Symbollogo: ",l.a.createElement(f,null)),l.a.createElement("div",{onClick:function(){a(!t)}},"Animert logo (trykk):",l.a.createElement(N,{showSymbol:t}))),l.a.createElement("section",null,l.a.createElement("h1",{className:"jkl-h2"},"Radiobutton choice"),l.a.createElement(w,{selectedValue:c,onChange:function(e){return s(e.target.value)},name:"Testing testing",choices:["1","2","3"]})),l.a.createElement("section",null,l.a.createElement("h1",{className:"jkl-h2"},"Text input"),l.a.createElement(x,{onChange:function(e){return j(e.target.value)},value:p,label:"Fornavn"}),l.a.createElement(x,{onChange:function(e){return R(e.target.value)},value:O,label:"Etternavn"}),l.a.createElement(y,{onChange:function(e){return D(e.target.value)},value:A,label:"Din livshistorie"})),l.a.createElement("section",null,l.a.createElement("h1",{className:"jkl-h2"},"Typografi"),l.a.createElement(C,null,"H1 "),l.a.createElement(V,null,"H2 "),l.a.createElement(I,null,"H3 "),l.a.createElement(M,null,"H4 "),l.a.createElement(T,null,"P"),l.a.createElement(S,null,"Lead paragraph"),l.a.createElement(H,null,"SmallParagraph"),l.a.createElement(P,null,"TinyParagraph")))}a.d(t,"default",function(){return R})},186:function(e,t,a){var n;e.exports=(n=a(190))&&n.default||n},188:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(13),c=a.n(r),i=a(62),o=a.n(i);a.d(t,"a",function(){return o.a});a(186),l.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Jokul"}}}}},190:function(e,t,a){"use strict";a.r(t);a(12);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),i=a(91),o=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},191:function(e,t,a){"use strict";var n=a(189),l=a(0),r=a.n(l),c=a(188),i=function(e){var t=e.siteTitle,a=void 0===t?"":t;return r.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},a))))};t.a=function(e){var t=e.children,a=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{siteTitle:a.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t)))}}}]);
//# sourceMappingURL=component---src-pages-a-la-carte-tsx-491afbfd9042c3f587a9.js.map