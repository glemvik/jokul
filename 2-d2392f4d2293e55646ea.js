(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{268:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(269),s=n.n(i),c=n(270),o=n(279);n(210);function l(e){var t=e.changelog,n=e.changelogReact;return r.a.createElement(o.a,{className:"portal-changelog"},t&&r.a.createElement(o.b,{title:"Style changelog"},r.a.createElement(s.a,{renderers:c.a,source:t})),n&&r.a.createElement(o.b,{title:"React changelog"},r.a.createElement(s.a,{renderers:c.a,source:n})))}n(27);var p=n(825),_=function(e){var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()},j={plain:{color:"#ded4c7",backgroundColor:"#3d3d3d"},styles:[{types:["prolog"],style:{color:"#0a3166"}},{types:["comment"],style:{color:"#dcb28b"}},{types:["builtin","changed","keyword"],style:{color:"#ff7059"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value"],style:{color:"#ffc880"}},{types:["selector"],style:{color:"#dcb28b"}},{types:["tag"],style:{color:"#50e68c"}},{types:["tag"],languages:["markup"],style:{color:"#509ce6"}},{types:["punctuation","operator"],style:{color:"#f0f0f0",backgroundColor:"transparent"}},{types:["punctuation"],languages:["markup"],style:{color:"#696666"}},{types:["function"],style:{color:"#509ce6"}},{types:["class-name"],style:{color:"#0d5745"}},{types:["char"],style:{color:"#ff7059"}}]},u={plain:{color:"#3d3d3d",backgroundColor:"transparent"},styles:[{types:["prolog"],style:{color:"#0a3166"}},{types:["comment"],style:{color:"#dcb28b"}},{types:["builtin","changed","keyword"],style:{color:"#ff7059"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"#0a3166"}},{types:["deleted","string","attr-value"],style:{color:"#ff7059"}},{types:["selector"],style:{color:"#dcb28b"}},{types:["tag"],style:{color:"#0d5745"}},{types:["tag"],languages:["markup"],style:{color:"#509ce6"}},{types:["punctuation"],style:{color:"#696666",backgroundColor:"transparent"}},{types:["operator"],style:{color:"#0d5745",backgroundColor:"transparent"}},{types:["punctuation"],languages:["markup"],style:{color:"#696666"}},{types:["function"],style:{color:"#509ce6"}},{types:["class-name"],style:{color:"#0d5745"}},{types:["char"],style:{color:"#ff7059"}},{types:["string"],style:{color:"#ff7059"}}]},m=n(152),S=n.n(m);function d(e){return Object(a.useEffect)(function(){S.a.highlightAll()}),r.a.createElement("pre",null,r.a.createElement("code",{className:"language-tsx"},e.children))}n(306),n(43);var g,y,E=function(e){var t=e.split("\n"),n=!1;return t.filter(function(e){var t=n;switch(!0){case e.startsWith("interface"):t=!0,n=!0;break;case t&&e.startsWith("}"):n=!1;break;case e.startsWith("declare"):t=!0,n=!1}return t}).join("\n")},h=(n(211),n(288)),x=(n(212),function(e){var t=e.siteTitle,n=void 0===t?"":t;return r.a.createElement("header",{className:"portal-header"},r.a.createElement("h1",{className:"portal-header__title jkl-h2"},r.a.createElement(h.a,{to:"/"},n)))}),k=(n(141),n(142),n(96),n(23)),f=n(308),b=function(e,t,n){return{title:e,page:t,section:n}},v=function(e,t){return b(e,t,"developer")},C=function(e,t){return b(e,t,"core")},P=function(e,t){return b(e,t,"components")},N=function(e,t){return b(e,t,"profile")},B=[v("Kom i gang","getting-started"),v("Bidragsguide","contribute"),v("Testguide","test"),v("Portalguide","portal")],w=[(g="Kom i gang",y="getting-started",b(g,y,"designer"))],G=[C("Designprinsipper","principle"),C("Bevegelse","motion"),C("Klarhet","clarity"),C("Elevasjon","elevation"),C("Mønstre","pattern")],M=[P("Alle komponenter",""),P("Knapper","button"),P("Radioknapp","radiobutton"),P("Avmerkingsbokser","checkbox"),P("Toggle-knapp","toggleswitch"),P("Trekkspilliste","accordion"),P("Datovelger","datepicker"),P("Nedtrekksliste","dropdown"),P("Typografi","typography"),P("Tekstfelt","textfield"),P("Lang tekstfelt","textarea"),P("Meldinger","messagebox"),P("Logo","logo"),P("Lasteindikator","loader"),P("Delelinje","dividerline"),P("Kort","card"),P("Liste","bulletlist"),P("Hamburger meny","hamburger")],O=[N("Farger","colors"),N("Tilgjengelighet","a11y"),N("Stil og tone","tone"),N("Typografi","typography"),N("Bildestil","picture"),N("Ikoner","icon"),N("Sperring","spacing"),N("Layout","layout"),N("Skygger","shadow"),N("Logo","logo")],T=(n(205),n(206),n(309));n(213);function L(){var e=Object(a.useState)(!1),t=e[0],n=e[1],i=Object(a.useRef)(null),s=function(e){return n(e)},c=Object(a.useContext)(I),l=c.theme,p=c.toggleTheme;return r.a.createElement(k.LocationProvider,null,function(e){var n=e.location;return r.a.createElement("div",{ref:i,className:"portal-menu "+(t?" portal-menu--open":"portal-menu--closed")},r.a.createElement("div",{className:"portal-menu__toggler"},r.a.createElement(f.a,{negative:!0,onClick:s,enableClickOutside:t,onClickOutside:s,insideRef:i})),r.a.createElement("nav",{className:"portal-menu__bar"},r.a.createElement(o.a,null,r.a.createElement(o.b,{title:"Grunnleggende",startExpanded:!!n.pathname.match(/(core|jokul)/)||"/"===n.pathname},G.map(function(e){return r.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page,tabIndex:t?0:-1},e.title)})),r.a.createElement(o.b,{title:"Profilelementer",startExpanded:n.pathname.includes("profile")},O.map(function(e){return r.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page,tabIndex:t?0:-1},e.title)})),r.a.createElement(o.b,{title:"For designere",startExpanded:n.pathname.includes("designer")},w.map(function(e){return r.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page,tabIndex:t?0:-1},e.title)})),r.a.createElement(o.b,{title:"For utviklere",startExpanded:n.pathname.includes("developer")},B.map(function(e){return r.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page,tabIndex:t?0:-1},e.title)})),r.a.createElement(o.b,{title:"Komponenter",startExpanded:n.pathname.includes("components")},M.map(function(e){return r.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page,tabIndex:t?0:-1},e.title)}))),r.a.createElement("a",{className:"portal-menu__link portal-menu__link--github jkl-p",href:"https://github.com/fremtind/jokul",tabIndex:t?0:-1},"Kode på Github"),r.a.createElement("a",{className:"portal-menu__link portal-menu__link--github jkl-p",href:"https://github.com/fremtind/jokul/issues/new?assignees=&labels=bug&template=bug_report.md&title=",tabIndex:t?0:-1},"Rapporter feil"),r.a.createElement("a",{className:"portal-menu__link portal-menu__link--github jkl-p",href:"https://github.com/fremtind/jokul/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=",tabIndex:t?0:-1},"Forslag ny funksjon"),r.a.createElement("a",{className:"portal-menu__link portal-menu__link--figma jkl-p",href:"https://www.figma.com/file/TkbB9ANfejDSjB2u4u1OEuqM/J%C3%B8kul-components",tabIndex:t?0:-1},"Designbibliotek"),r.a.createElement(T.a,{className:"jkl-spacing--top-2 jkl-spacing--bottom-3",checked:"dark"===l,onChange:p},"Dark(beta)")))})}n(201);var I=r.a.createContext({theme:"light",toggleTheme:function(){}}),A=function(e){var t=e.children,n=e.isComponentPage,a=void 0!==n&&n,i=r.a.useState("undefined"!=typeof window&&window.localStorage.getItem("portal-theme")||"light"),s=i[0],c=i[1];return r.a.useEffect(function(){"dark"===s?(window.localStorage.setItem("portal-theme","dark"),document.body.className="portal-dark"):(window.localStorage.setItem("portal-theme","light"),document.body.className="")},[s]),r.a.createElement(I.Provider,{value:{theme:s,toggleTheme:function(e){return c(e?"dark":"light")}}},r.a.createElement(x,{siteTitle:"Jøkul"}),r.a.createElement(L,null),r.a.createElement("main",{className:"portal-content "+(a?"portal-content--component-page":"")},t))},D=A;function H(e){var t=e.exampleComponents,n=e.exampleCode,i=e.type,s=e.types,c=e.exampleImport,l=e.figma,m=Object(a.useContext)(I).theme;return r.a.createElement(p.d,{scope:t,code:n,theme:"dark"===m?j:u},r.a.createElement(p.c,{className:"portal-content__example"}),r.a.createElement(o.a,null,r.a.createElement(o.b,{title:"Kode"},r.a.createElement(p.a,{className:"portal-content__code-editor"}),r.a.createElement(p.b,null),c&&r.a.createElement("button",{onClick:function(){return _(c||"")},className:"portal-content__section portal-content__section--copy"},r.a.createElement("h4",{className:"jkl-h4"},"Import"),r.a.createElement("p",{className:"jkl-small"},"Klikk for å kopiere"),r.a.createElement(d,null,c)),i&&r.a.createElement("div",{className:"portal-content__section"},r.a.createElement("h4",{className:"jkl-h4"},"Type"),r.a.createElement(d,null,E(i))),s&&s.map(function(e){return r.a.createElement("div",{key:e.name,className:"portal-content__section"},r.a.createElement("h4",{className:"jkl-h4"},"Type: ",e.name),r.a.createElement(d,null,E(e.type)))})),l&&r.a.createElement(o.b,{title:"Design"},r.a.createElement("div",{className:"portal-content__figma"},l.map(function(e){return r.a.createElement("iframe",{title:"Figma skisse",key:e,className:"portal-content__figma__iframe",width:"1000",height:"500",src:"https://www.figma.com/embed?embed_host=share&url="+encodeURIComponent(e)})})))))}n(145),n(207);var K=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"100 100 600 355.3",className:"portal-icon portal-icon--react"},r.a.createElement("g",{fill:"currentColor"},r.a.createElement("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),r.a.createElement("circle",{cx:"420.9",cy:"296.5",r:"45.7"}),r.a.createElement("path",{d:"M520.5 78.1z"})))},z=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 547.8 410.6",className:"portal-icon portal-icon--sass"},r.a.createElement("path",{fill:"currentColor",d:"M471.4 236c-19.1.1-35.7 4.7-49.6 11.5-5.1-10.1-10.2-19.1-11.1-25.7-1-7.7-2.2-12.4-1-21.6 1.2-9.2 6.6-22.3 6.5-23.3s-1.2-5.7-12.2-5.8c-11-.1-20.5 2.1-21.6 5-1.1 2.9-3.2 9.5-4.6 16.3-1.9 10-22 45.7-33.5 64.4a69.5 69.5 0 0 1-7.6-18.8c-1-7.7-2.2-12.4-1-21.6 1.2-9.2 6.6-22.3 6.5-23.3-.1-1-1.2-5.7-12.2-5.8-11-.1-20.5 2.1-21.6 5-1.1 2.9-2.3 9.7-4.6 16.3-2.3 6.6-29 66.2-36 81.6-3.6 7.9-6.7 14.2-8.9 18.5l-.4.8-3 5.7v.1c-1.5 2.7-3.1 5.2-3.9 5.2-.6 0-1.7-7.2.2-17 4-20.7 13.5-52.9 13.4-54 0-.6 1.8-6.2-6.2-9.1-7.8-2.9-10.6 1.9-11.3 1.9-.7 0-1.2 1.7-1.2 1.7s8.7-36.2-16.6-36.2c-15.8 0-37.6 17.3-48.4 32.9l-36.8 20.1-17.7 9.7-1.2-1.3c-30.6-32.7-87.2-55.8-84.8-99.7.9-16 6.4-58 108.7-109 84.2-41.5 151.2-30 162.8-4.5 16.6 36.4-35.9 104-122.9 113.8-33.2 3.7-50.6-9.1-55-13.9-4.6-5-5.3-5.3-7-4.3-2.8 1.5-1 6 0 8.6 2.6 6.8 13.3 18.8 31.4 24.7 16 5.2 54.9 8.1 102-10.1 52.7-20.4 93.9-77.1 81.8-124.6C330.7 2 250.7-13.9 175 13 130 29 81.2 54.2 46.1 87 4.4 126-2.2 159.9.5 174.1c9.7 50.4 79.2 83.2 107 107.5l-3.8 2.1c-13.9 6.9-66.9 34.6-80.1 63.9-15 33.2 2.4 57 13.9 60.2 35.7 9.9 72.4-7.9 92.1-37.3 19.7-29.4 17.3-67.6 8.2-85.1a2 2 0 0 0-.4-.6l10.9-6.4c7.1-4.2 14.1-8.1 20.1-11.3-3.4 9.3-5.9 20.4-7.1 36.4-1.5 18.8 6.2 43.2 16.3 52.8a18 18 0 0 0 13.2 4.3c11.8 0 17.1-9.8 23-21.4a418 418 0 0 0 13.7-30.7s-8.1 44.6 13.9 44.6c8 0 16.1-10.4 19.7-15.7v.1l.6-1 1.3-2.1v-.2c3.2-5.6 10.4-18.3 21.1-39.4 13.8-27.2 27.1-61.2 27.1-61.2s1.2 8.3 5.3 22.1c2.4 8.1 7.4 17 11.4 25.6-3.2 4.5-5.2 7-5.2 7l.1.1c-2.6 3.4-5.4 7.1-8.5 10.7-10.9 13-23.9 27.9-25.7 32.2-2.1 5.1-1.6 8.8 2.4 11.8 2.9 2.2 8.1 2.5 13.4 2.2 9.8-.7 16.7-3.1 20.1-4.6a67.5 67.5 0 0 0 17.3-9.1 38.7 38.7 0 0 0 16.6-34.1c-.3-8.2-3-16.4-6.3-24.1l2.9-4.2c16.9-24.7 30-51.8 30-51.8s1.2 8.3 5.3 22.1c2 7 6.1 14.6 9.7 22a95 95 0 0 0-29.2 37.7c-6.3 18.2-1.4 26.4 7.9 28.3 4.2.9 10.2-1.1 14.6-3a66.5 66.5 0 0 0 18.5-9.5c10.7-7.9 21-18.9 20.4-33.8a63.9 63.9 0 0 0-4.6-20c13.5-5.6 30.9-8.7 53.1-6.1 47.6 5.6 57 35.3 55.2 47.8a31.6 31.6 0 0 1-15.1 21.4c-3.3 2.1-4.4 2.8-4.1 4.3.4 2.2 2 2.1 4.8 1.7 3.9-.7 25-10.1 25.9-33.1 1.5-29.4-26.5-61.5-76-61.2zM104.2 359.8C88.4 377 66.4 383.5 56.9 378c-10.2-5.9-6.2-31.3 13.2-49.5a252 252 0 0 1 37.1-27.7l9.8-5.9 1.1-.6 2.4-1.5c7.1 26 .3 48.9-16.3 67zm115-78.2c-5.5 13.4-17 47.7-24 45.8-6-1.6-9.7-27.6-1.2-53.3a121 121 0 0 1 18.7-34.3c8.6-9.6 18.1-12.8 20.4-8.9 2.9 5.1-10.5 42.3-13.9 50.7zm94.9 45.4c-2.3 1.2-4.5 2-5.5 1.4-.7-.4 1-2 1-2s11.9-12.8 16.6-18.6l9.3-11.9v1.3c0 15.3-14.8 25.6-21.4 29.8zm73.2-16.7c-1.7-1.2-1.4-5.2 4.3-17.7a66.6 66.6 0 0 1 16.3-21c1 3.2 1.7 6.3 1.6 9.2-.1 19.3-13.9 26.5-22.2 29.5z"}))},R=(n(314),function(e){var t=e.icon,n=e.link;return r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"portal-content__code-links",href:"https://github.com/fremtind/jokul/tree/master/packages/"+n},t)}),W=function(e){var t=e.children,n=e.title,a=e.mainExample,i=e.packageName,s=e.packageNames;return r.a.createElement(k.LocationProvider,null,function(e){return"?fullscreen"!==e.location.search?r.a.createElement(D,{isComponentPage:!0},r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",{className:"portal-content__heading"},r.a.createElement("h2",{className:"jkl-h1 portal-content__title"},n),i&&r.a.createElement("div",null,r.a.createElement(R,{icon:r.a.createElement(K,null),link:i+"-react"}),r.a.createElement(R,{icon:r.a.createElement(z,null),link:i})),s&&r.a.createElement("div",null,s.react&&r.a.createElement(R,{icon:r.a.createElement(K,null),link:""+s.react}),s.scss&&r.a.createElement(R,{icon:r.a.createElement(z,null),link:s.scss}))),r.a.createElement("section",{className:"portal-content__main-example"},a),r.a.createElement("section",{className:"portal-content__rest"},t))):r.a.createElement("main",{className:"portal-component-only"},a)})};n.d(t,"a",function(){return l}),n.d(t,"c",function(){return H}),n.d(t,"d",function(){return A}),n.d(t,"b",function(){return W})},270:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s});n(28);var a=n(0),r=(n(203),n(204),{paragraph:function(e){var t=e.children;return Object(a.createElement)("p",{className:"jkl-p jkl-spacing--bottom-2"},t)},list:function(e){var t=e.children;return Object(a.createElement)("ul",{className:"jkl-bullet-list jkl-p"},t)},listItem:function(e){var t=e.children;return Object(a.createElement)("li",{className:"jkl-bullet-list__item"},t)},blockquote:function(e){var t=e.children;return Object(a.createElement)("div",{className:"jkl-message-box jkl-message-box__info jkl-spacing--top-3 jkl-spacing--bottom-3"},t)},link:function(e){var t=e.children,n=e.href;return Object(a.createElement)("a",{className:"jkl-link jkl-link--inline",href:n},t)}}),i=Object.assign({},r,{heading:function(e){var t=e.level,n=e.children;return 1===t?null:Object(a.createElement)("h"+t,{className:"jkl-h"+(t+1)},n)}}),s=Object.assign({},r,{heading:function(e){var t=e.level,n=e.children;return Object(a.createElement)("h"+t,{className:"jkl-h"+(t+1)},n)}})},279:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return o});n(54),n(41),n(25);var a=n(0),r=n.n(a),i=n(287),s=n.n(i);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(o){r=!0,i=o}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){var t=e.children,n=e.title,i=e.startExpanded,o=void 0!==i&&i,l=c(Object(a.useState)(o),2),p=l[0],_=l[1],j=p?" jkl-accordion-item--expanded":"";return r.a.createElement("div",{"data-testid":"jkl-accordion-item",className:"jkl-accordion-item".concat(j)},r.a.createElement("button",{className:"jkl-accordion-item__title",type:"button"},r.a.createElement("div",{className:"jkl-accordion-item__title-text"},n),r.a.createElement("div",{className:"jkl-accordion-item__title-icon"})),r.a.createElement(s.a,{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",hidden:!p,onToggle:function(){return _(!p)}},r.a.createElement("div",{className:"jkl-accordion-item__content"},t)))}function l(e){var t=e.children,n=e.className,a=void 0===n?"":n;return r.a.createElement("div",{"data-testid":"jkl-accordion",className:"jkl-accordion ".concat(a)},t)}},288:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(71),s=n.n(i);n.d(t,"a",function(){return s.a});n(307),n(10).default.enqueue,r.a.createContext({})},307:function(e,t,n){var a;e.exports=(a=n(394))&&a.default||a},308:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n(54),n(41),n(25);var a=n(0),r=n.n(a);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(o){r=!0,i=o}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=function(e){var t=e.className,n=void 0===t?"":t,s=e.initialIsActive,c=void 0!==s&&s,o=e.negative,l=void 0!==o&&o,p=e.description,_=void 0===p?"Hovedmeny":p,j=e.onClick,u=e.onClickOutside,m=e.enableClickOutside,S=void 0!==m&&m,d=e.insideRef,g=i(Object(a.useState)(c),2),y=g[0],E=g[1],h=Object(a.useRef)(null),x=function(e){var t=!y;E(t),e&&e(t)};return function(e,t){function n(n){e&&e.current&&!e.current.contains(n.target)&&t()}r.a.useEffect(function(){return e&&document.addEventListener("click",n),function(){e&&document.removeEventListener("click",n)}})}(S?d||h:null,function(){return x(u)}),r.a.createElement("button",{type:"button","aria-label":_,onClick:function(){return x(j)},className:"jkl-hamburger ".concat(y?"jkl-hamburger--is-active":""," ").concat(l?"jkl-hamburger--negative":""," ").concat(n),"data-testid":"jkl-hamburger",ref:h},r.a.createElement("span",{className:"jkl-hamburger__box"},r.a.createElement("span",{className:"jkl-hamburger__inner"})))}},309:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n.n(a),i=function(e){var t=e.children,n=e.checked,a=e.onChange,i=e.className,s=void 0===i?"":i;return r.a.createElement("label",{"data-testid":"jkl-toggle-input--label",className:"jkl-toggle-switch ".concat(s)},r.a.createElement("input",{"data-testid":"jkl-toggle-input",type:"checkbox",checked:n,onChange:function(e){return a&&a(e.target.checked)}}),r.a.createElement("span",{className:"jkl-toggle-switch__slider"}),r.a.createElement("span",{className:"jkl-toggle-switch__label jkl-p"},t))}},394:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),i=n(132);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},411:function(e,t,n){var a={"./Binary_Property/ASCII.js":412,"./Binary_Property/ASCII_Hex_Digit.js":413,"./Binary_Property/Alphabetic.js":414,"./Binary_Property/Any.js":415,"./Binary_Property/Assigned.js":416,"./Binary_Property/Bidi_Control.js":417,"./Binary_Property/Bidi_Mirrored.js":418,"./Binary_Property/Case_Ignorable.js":419,"./Binary_Property/Cased.js":420,"./Binary_Property/Changes_When_Casefolded.js":421,"./Binary_Property/Changes_When_Casemapped.js":422,"./Binary_Property/Changes_When_Lowercased.js":423,"./Binary_Property/Changes_When_NFKC_Casefolded.js":424,"./Binary_Property/Changes_When_Titlecased.js":425,"./Binary_Property/Changes_When_Uppercased.js":426,"./Binary_Property/Dash.js":427,"./Binary_Property/Default_Ignorable_Code_Point.js":428,"./Binary_Property/Deprecated.js":429,"./Binary_Property/Diacritic.js":430,"./Binary_Property/Emoji.js":431,"./Binary_Property/Emoji_Component.js":432,"./Binary_Property/Emoji_Modifier.js":433,"./Binary_Property/Emoji_Modifier_Base.js":434,"./Binary_Property/Emoji_Presentation.js":435,"./Binary_Property/Extended_Pictographic.js":436,"./Binary_Property/Extender.js":437,"./Binary_Property/Grapheme_Base.js":438,"./Binary_Property/Grapheme_Extend.js":439,"./Binary_Property/Hex_Digit.js":440,"./Binary_Property/IDS_Binary_Operator.js":441,"./Binary_Property/IDS_Trinary_Operator.js":442,"./Binary_Property/ID_Continue.js":443,"./Binary_Property/ID_Start.js":444,"./Binary_Property/Ideographic.js":445,"./Binary_Property/Join_Control.js":446,"./Binary_Property/Logical_Order_Exception.js":447,"./Binary_Property/Lowercase.js":448,"./Binary_Property/Math.js":449,"./Binary_Property/Noncharacter_Code_Point.js":450,"./Binary_Property/Pattern_Syntax.js":451,"./Binary_Property/Pattern_White_Space.js":452,"./Binary_Property/Quotation_Mark.js":453,"./Binary_Property/Radical.js":454,"./Binary_Property/Regional_Indicator.js":455,"./Binary_Property/Sentence_Terminal.js":456,"./Binary_Property/Soft_Dotted.js":457,"./Binary_Property/Terminal_Punctuation.js":458,"./Binary_Property/Unified_Ideograph.js":459,"./Binary_Property/Uppercase.js":460,"./Binary_Property/Variation_Selector.js":461,"./Binary_Property/White_Space.js":462,"./Binary_Property/XID_Continue.js":463,"./Binary_Property/XID_Start.js":464,"./General_Category/Cased_Letter.js":465,"./General_Category/Close_Punctuation.js":466,"./General_Category/Connector_Punctuation.js":467,"./General_Category/Control.js":468,"./General_Category/Currency_Symbol.js":469,"./General_Category/Dash_Punctuation.js":470,"./General_Category/Decimal_Number.js":471,"./General_Category/Enclosing_Mark.js":472,"./General_Category/Final_Punctuation.js":473,"./General_Category/Format.js":474,"./General_Category/Initial_Punctuation.js":475,"./General_Category/Letter.js":476,"./General_Category/Letter_Number.js":477,"./General_Category/Line_Separator.js":478,"./General_Category/Lowercase_Letter.js":479,"./General_Category/Mark.js":480,"./General_Category/Math_Symbol.js":481,"./General_Category/Modifier_Letter.js":482,"./General_Category/Modifier_Symbol.js":483,"./General_Category/Nonspacing_Mark.js":484,"./General_Category/Number.js":485,"./General_Category/Open_Punctuation.js":486,"./General_Category/Other.js":487,"./General_Category/Other_Letter.js":488,"./General_Category/Other_Number.js":489,"./General_Category/Other_Punctuation.js":490,"./General_Category/Other_Symbol.js":491,"./General_Category/Paragraph_Separator.js":492,"./General_Category/Private_Use.js":493,"./General_Category/Punctuation.js":494,"./General_Category/Separator.js":495,"./General_Category/Space_Separator.js":496,"./General_Category/Spacing_Mark.js":497,"./General_Category/Surrogate.js":498,"./General_Category/Symbol.js":499,"./General_Category/Titlecase_Letter.js":500,"./General_Category/Unassigned.js":501,"./General_Category/Uppercase_Letter.js":502,"./Script/Adlam.js":503,"./Script/Ahom.js":504,"./Script/Anatolian_Hieroglyphs.js":505,"./Script/Arabic.js":506,"./Script/Armenian.js":507,"./Script/Avestan.js":508,"./Script/Balinese.js":509,"./Script/Bamum.js":510,"./Script/Bassa_Vah.js":511,"./Script/Batak.js":512,"./Script/Bengali.js":513,"./Script/Bhaiksuki.js":514,"./Script/Bopomofo.js":515,"./Script/Brahmi.js":516,"./Script/Braille.js":517,"./Script/Buginese.js":518,"./Script/Buhid.js":519,"./Script/Canadian_Aboriginal.js":520,"./Script/Carian.js":521,"./Script/Caucasian_Albanian.js":522,"./Script/Chakma.js":523,"./Script/Cham.js":524,"./Script/Cherokee.js":525,"./Script/Common.js":526,"./Script/Coptic.js":527,"./Script/Cuneiform.js":528,"./Script/Cypriot.js":529,"./Script/Cyrillic.js":530,"./Script/Deseret.js":531,"./Script/Devanagari.js":532,"./Script/Dogra.js":533,"./Script/Duployan.js":534,"./Script/Egyptian_Hieroglyphs.js":535,"./Script/Elbasan.js":536,"./Script/Elymaic.js":537,"./Script/Ethiopic.js":538,"./Script/Georgian.js":539,"./Script/Glagolitic.js":540,"./Script/Gothic.js":541,"./Script/Grantha.js":542,"./Script/Greek.js":543,"./Script/Gujarati.js":544,"./Script/Gunjala_Gondi.js":545,"./Script/Gurmukhi.js":546,"./Script/Han.js":547,"./Script/Hangul.js":548,"./Script/Hanifi_Rohingya.js":549,"./Script/Hanunoo.js":550,"./Script/Hatran.js":551,"./Script/Hebrew.js":552,"./Script/Hiragana.js":553,"./Script/Imperial_Aramaic.js":554,"./Script/Inherited.js":555,"./Script/Inscriptional_Pahlavi.js":556,"./Script/Inscriptional_Parthian.js":557,"./Script/Javanese.js":558,"./Script/Kaithi.js":559,"./Script/Kannada.js":560,"./Script/Katakana.js":561,"./Script/Kayah_Li.js":562,"./Script/Kharoshthi.js":563,"./Script/Khmer.js":564,"./Script/Khojki.js":565,"./Script/Khudawadi.js":566,"./Script/Lao.js":567,"./Script/Latin.js":568,"./Script/Lepcha.js":569,"./Script/Limbu.js":570,"./Script/Linear_A.js":571,"./Script/Linear_B.js":572,"./Script/Lisu.js":573,"./Script/Lycian.js":574,"./Script/Lydian.js":575,"./Script/Mahajani.js":576,"./Script/Makasar.js":577,"./Script/Malayalam.js":578,"./Script/Mandaic.js":579,"./Script/Manichaean.js":580,"./Script/Marchen.js":581,"./Script/Masaram_Gondi.js":582,"./Script/Medefaidrin.js":583,"./Script/Meetei_Mayek.js":584,"./Script/Mende_Kikakui.js":585,"./Script/Meroitic_Cursive.js":586,"./Script/Meroitic_Hieroglyphs.js":587,"./Script/Miao.js":588,"./Script/Modi.js":589,"./Script/Mongolian.js":590,"./Script/Mro.js":591,"./Script/Multani.js":592,"./Script/Myanmar.js":593,"./Script/Nabataean.js":594,"./Script/Nandinagari.js":595,"./Script/New_Tai_Lue.js":596,"./Script/Newa.js":597,"./Script/Nko.js":598,"./Script/Nushu.js":599,"./Script/Nyiakeng_Puachue_Hmong.js":600,"./Script/Ogham.js":601,"./Script/Ol_Chiki.js":602,"./Script/Old_Hungarian.js":603,"./Script/Old_Italic.js":604,"./Script/Old_North_Arabian.js":605,"./Script/Old_Permic.js":606,"./Script/Old_Persian.js":607,"./Script/Old_Sogdian.js":608,"./Script/Old_South_Arabian.js":609,"./Script/Old_Turkic.js":610,"./Script/Oriya.js":611,"./Script/Osage.js":612,"./Script/Osmanya.js":613,"./Script/Pahawh_Hmong.js":614,"./Script/Palmyrene.js":615,"./Script/Pau_Cin_Hau.js":616,"./Script/Phags_Pa.js":617,"./Script/Phoenician.js":618,"./Script/Psalter_Pahlavi.js":619,"./Script/Rejang.js":620,"./Script/Runic.js":621,"./Script/Samaritan.js":622,"./Script/Saurashtra.js":623,"./Script/Sharada.js":624,"./Script/Shavian.js":625,"./Script/Siddham.js":626,"./Script/SignWriting.js":627,"./Script/Sinhala.js":628,"./Script/Sogdian.js":629,"./Script/Sora_Sompeng.js":630,"./Script/Soyombo.js":631,"./Script/Sundanese.js":632,"./Script/Syloti_Nagri.js":633,"./Script/Syriac.js":634,"./Script/Tagalog.js":635,"./Script/Tagbanwa.js":636,"./Script/Tai_Le.js":637,"./Script/Tai_Tham.js":638,"./Script/Tai_Viet.js":639,"./Script/Takri.js":640,"./Script/Tamil.js":641,"./Script/Tangut.js":642,"./Script/Telugu.js":643,"./Script/Thaana.js":644,"./Script/Thai.js":645,"./Script/Tibetan.js":646,"./Script/Tifinagh.js":647,"./Script/Tirhuta.js":648,"./Script/Ugaritic.js":649,"./Script/Vai.js":650,"./Script/Wancho.js":651,"./Script/Warang_Citi.js":652,"./Script/Yi.js":653,"./Script/Zanabazar_Square.js":654,"./Script_Extensions/Adlam.js":655,"./Script_Extensions/Ahom.js":656,"./Script_Extensions/Anatolian_Hieroglyphs.js":657,"./Script_Extensions/Arabic.js":658,"./Script_Extensions/Armenian.js":659,"./Script_Extensions/Avestan.js":660,"./Script_Extensions/Balinese.js":661,"./Script_Extensions/Bamum.js":662,"./Script_Extensions/Bassa_Vah.js":663,"./Script_Extensions/Batak.js":664,"./Script_Extensions/Bengali.js":665,"./Script_Extensions/Bhaiksuki.js":666,"./Script_Extensions/Bopomofo.js":667,"./Script_Extensions/Brahmi.js":668,"./Script_Extensions/Braille.js":669,"./Script_Extensions/Buginese.js":670,"./Script_Extensions/Buhid.js":671,"./Script_Extensions/Canadian_Aboriginal.js":672,"./Script_Extensions/Carian.js":673,"./Script_Extensions/Caucasian_Albanian.js":674,"./Script_Extensions/Chakma.js":675,"./Script_Extensions/Cham.js":676,"./Script_Extensions/Cherokee.js":677,"./Script_Extensions/Common.js":678,"./Script_Extensions/Coptic.js":679,"./Script_Extensions/Cuneiform.js":680,"./Script_Extensions/Cypriot.js":681,"./Script_Extensions/Cyrillic.js":682,"./Script_Extensions/Deseret.js":683,"./Script_Extensions/Devanagari.js":684,"./Script_Extensions/Dogra.js":685,"./Script_Extensions/Duployan.js":686,"./Script_Extensions/Egyptian_Hieroglyphs.js":687,"./Script_Extensions/Elbasan.js":688,"./Script_Extensions/Elymaic.js":689,"./Script_Extensions/Ethiopic.js":690,"./Script_Extensions/Georgian.js":691,"./Script_Extensions/Glagolitic.js":692,"./Script_Extensions/Gothic.js":693,"./Script_Extensions/Grantha.js":694,"./Script_Extensions/Greek.js":695,"./Script_Extensions/Gujarati.js":696,"./Script_Extensions/Gunjala_Gondi.js":697,"./Script_Extensions/Gurmukhi.js":698,"./Script_Extensions/Han.js":699,"./Script_Extensions/Hangul.js":700,"./Script_Extensions/Hanifi_Rohingya.js":701,"./Script_Extensions/Hanunoo.js":702,"./Script_Extensions/Hatran.js":703,"./Script_Extensions/Hebrew.js":704,"./Script_Extensions/Hiragana.js":705,"./Script_Extensions/Imperial_Aramaic.js":706,"./Script_Extensions/Inherited.js":707,"./Script_Extensions/Inscriptional_Pahlavi.js":708,"./Script_Extensions/Inscriptional_Parthian.js":709,"./Script_Extensions/Javanese.js":710,"./Script_Extensions/Kaithi.js":711,"./Script_Extensions/Kannada.js":712,"./Script_Extensions/Katakana.js":713,"./Script_Extensions/Kayah_Li.js":714,"./Script_Extensions/Kharoshthi.js":715,"./Script_Extensions/Khmer.js":716,"./Script_Extensions/Khojki.js":717,"./Script_Extensions/Khudawadi.js":718,"./Script_Extensions/Lao.js":719,"./Script_Extensions/Latin.js":720,"./Script_Extensions/Lepcha.js":721,"./Script_Extensions/Limbu.js":722,"./Script_Extensions/Linear_A.js":723,"./Script_Extensions/Linear_B.js":724,"./Script_Extensions/Lisu.js":725,"./Script_Extensions/Lycian.js":726,"./Script_Extensions/Lydian.js":727,"./Script_Extensions/Mahajani.js":728,"./Script_Extensions/Makasar.js":729,"./Script_Extensions/Malayalam.js":730,"./Script_Extensions/Mandaic.js":731,"./Script_Extensions/Manichaean.js":732,"./Script_Extensions/Marchen.js":733,"./Script_Extensions/Masaram_Gondi.js":734,"./Script_Extensions/Medefaidrin.js":735,"./Script_Extensions/Meetei_Mayek.js":736,"./Script_Extensions/Mende_Kikakui.js":737,"./Script_Extensions/Meroitic_Cursive.js":738,"./Script_Extensions/Meroitic_Hieroglyphs.js":739,"./Script_Extensions/Miao.js":740,"./Script_Extensions/Modi.js":741,"./Script_Extensions/Mongolian.js":742,"./Script_Extensions/Mro.js":743,"./Script_Extensions/Multani.js":744,"./Script_Extensions/Myanmar.js":745,"./Script_Extensions/Nabataean.js":746,"./Script_Extensions/Nandinagari.js":747,"./Script_Extensions/New_Tai_Lue.js":748,"./Script_Extensions/Newa.js":749,"./Script_Extensions/Nko.js":750,"./Script_Extensions/Nushu.js":751,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":752,"./Script_Extensions/Ogham.js":753,"./Script_Extensions/Ol_Chiki.js":754,"./Script_Extensions/Old_Hungarian.js":755,"./Script_Extensions/Old_Italic.js":756,"./Script_Extensions/Old_North_Arabian.js":757,"./Script_Extensions/Old_Permic.js":758,"./Script_Extensions/Old_Persian.js":759,"./Script_Extensions/Old_Sogdian.js":760,"./Script_Extensions/Old_South_Arabian.js":761,"./Script_Extensions/Old_Turkic.js":762,"./Script_Extensions/Oriya.js":763,"./Script_Extensions/Osage.js":764,"./Script_Extensions/Osmanya.js":765,"./Script_Extensions/Pahawh_Hmong.js":766,"./Script_Extensions/Palmyrene.js":767,"./Script_Extensions/Pau_Cin_Hau.js":768,"./Script_Extensions/Phags_Pa.js":769,"./Script_Extensions/Phoenician.js":770,"./Script_Extensions/Psalter_Pahlavi.js":771,"./Script_Extensions/Rejang.js":772,"./Script_Extensions/Runic.js":773,"./Script_Extensions/Samaritan.js":774,"./Script_Extensions/Saurashtra.js":775,"./Script_Extensions/Sharada.js":776,"./Script_Extensions/Shavian.js":777,"./Script_Extensions/Siddham.js":778,"./Script_Extensions/SignWriting.js":779,"./Script_Extensions/Sinhala.js":780,"./Script_Extensions/Sogdian.js":781,"./Script_Extensions/Sora_Sompeng.js":782,"./Script_Extensions/Soyombo.js":783,"./Script_Extensions/Sundanese.js":784,"./Script_Extensions/Syloti_Nagri.js":785,"./Script_Extensions/Syriac.js":786,"./Script_Extensions/Tagalog.js":787,"./Script_Extensions/Tagbanwa.js":788,"./Script_Extensions/Tai_Le.js":789,"./Script_Extensions/Tai_Tham.js":790,"./Script_Extensions/Tai_Viet.js":791,"./Script_Extensions/Takri.js":792,"./Script_Extensions/Tamil.js":793,"./Script_Extensions/Tangut.js":794,"./Script_Extensions/Telugu.js":795,"./Script_Extensions/Thaana.js":796,"./Script_Extensions/Thai.js":797,"./Script_Extensions/Tibetan.js":798,"./Script_Extensions/Tifinagh.js":799,"./Script_Extensions/Tirhuta.js":800,"./Script_Extensions/Ugaritic.js":801,"./Script_Extensions/Vai.js":802,"./Script_Extensions/Wancho.js":803,"./Script_Extensions/Warang_Citi.js":804,"./Script_Extensions/Yi.js":805,"./Script_Extensions/Zanabazar_Square.js":806,"./index.js":807,"./unicode-version.js":808};function r(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=411}}]);
//# sourceMappingURL=2-d2392f4d2293e55646ea.js.map