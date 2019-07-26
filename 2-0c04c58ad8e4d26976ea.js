(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{265:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(266),s=n.n(i),o=n(267),c=n(276);n(209);function l(e){var t=e.changelog,n=e.changelogReact;return a.a.createElement(c.a,{className:"portal-changelog"},t&&a.a.createElement(c.b,{title:"Style changelog"},a.a.createElement(s.a,{renderers:o.a,source:t})),n&&a.a.createElement(c.b,{title:"React changelog"},a.a.createElement(s.a,{renderers:o.a,source:n})))}n(27);var p=n(820),_=function(e){var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()},j={plain:{color:"#3d3d3d",backgroundColor:"transparent"},styles:[{types:["prolog"],style:{color:"#0a3166"}},{types:["comment"],style:{color:"#dcb28b"}},{types:["builtin","changed","keyword"],style:{color:"#ff7059"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"#0a3166"}},{types:["deleted","string","attr-value"],style:{color:"#ff7059"}},{types:["selector"],style:{color:"#dcb28b"}},{types:["tag"],style:{color:"#0d5745"}},{types:["tag"],languages:["markup"],style:{color:"#509ce6"}},{types:["punctuation"],style:{color:"#696666",backgroundColor:"transparent"}},{types:["operator"],style:{color:"#0d5745",backgroundColor:"transparent"}},{types:["punctuation"],languages:["markup"],style:{color:"#696666"}},{types:["function"],style:{color:"#509ce6"}},{types:["class-name"],style:{color:"#0d5745"}},{types:["char"],style:{color:"#ff7059"}},{types:["string"],style:{color:"#ff7059"}}]},u=n(152),S=n.n(u);function m(e){return Object(r.useEffect)(function(){S.a.highlightAll()}),a.a.createElement("pre",null,a.a.createElement("code",{className:"language-tsx"},e.children))}n(302),n(43);var d=function(e){var t=e.split("\n"),n=!1;return t.filter(function(e){var t=n;switch(!0){case e.startsWith("interface"):t=!0,n=!0;break;case t&&e.startsWith("}"):n=!1;break;case e.startsWith("declare"):t=!0,n=!1}return t}).join("\n")};n(210);function y(e){var t=e.exampleComponents,n=e.exampleCode,r=e.type,i=e.types,s=e.exampleImport;return a.a.createElement(p.d,{scope:t,code:n,theme:j},a.a.createElement(p.c,{className:"portal-content__example"}),a.a.createElement(c.a,null,a.a.createElement(c.b,{title:"Kode"},a.a.createElement(p.a,null),a.a.createElement(p.b,null),s&&a.a.createElement("button",{onClick:function(){return _(s||"")},className:"portal-content__section portal-content__section--copy"},a.a.createElement("h4",{className:"jkl-h4"},"Import"),a.a.createElement("p",{className:"jkl-small"},"Klikk for å kopiere"),a.a.createElement(m,null,s)),r&&a.a.createElement("div",{className:"portal-content__section"},a.a.createElement("h4",{className:"jkl-h4"},"Type"),a.a.createElement(m,null,d(r))),i&&i.map(function(e){return a.a.createElement("div",{key:e.name,className:"portal-content__section"},a.a.createElement("h4",{className:"jkl-h4"},"Type: ",e.name),a.a.createElement(m,null,d(e.type)))}))))}var E,g,h=n(289),x=(n(211),function(e){var t=e.siteTitle,n=void 0===t?"":t;return a.a.createElement("header",{className:"portal-header"},a.a.createElement("h1",{className:"portal-header__title jkl-h2"},a.a.createElement(h.a,{to:"/"},n)))}),f=(n(141),n(142),n(96),n(23)),k=n(308),b=function(e,t,n){return{title:e,page:t,section:n}},C=function(e,t){return b(e,t,"developer")},v=function(e,t){return b(e,t,"core")},P=function(e,t){return b(e,t,"components")},B=function(e,t){return b(e,t,"profile")},N=[C("Kom i gang","getting-started"),C("Bidragsguide","contribute")],G=[(E="Kom i gang",g="getting-started",b(E,g,"designer"))],O=[v("Designprinsipper","principle"),v("Bevegelse","motion"),v("Klarhet","clarity"),v("Elevasjon","elevation"),v("Mønstre","pattern")],T=[P("Alle komponenter",""),P("Knapper","button"),P("Radioknapp","radiobutton"),P("Avmerkingsbokser","checkbox"),P("Toggle-knapp","toggleswitch"),P("Trekkspilliste","accordion"),P("Datovelger","datepicker"),P("Nedtrekksliste","dropdown"),P("Typografi","typography"),P("Tekstfelt","textfield"),P("Lang tekstfelt","textarea"),P("Meldinger","messagebox"),P("Logo","logo"),P("Lasteindikator","loader"),P("Delelinje","dividerline"),P("Kort","card"),P("Liste","bulletlist"),P("Hamburger meny","hamburger")],M=[B("Farger","colors"),B("Tilgjengelighet","a11y"),B("Stil og tone","tone"),B("Typograpfi","typography"),B("Bildestil","picture"),B("Ikoner","icon"),B("Sperring","spacing"),B("Layout","layout"),B("Skygger","shadow"),B("Logo","logo")];n(204),n(205),n(212);function L(){var e=Object(r.useState)(!1),t=e[0],n=e[1],i=Object(r.useRef)(null),s=function(e){return n(e)};return a.a.createElement(f.LocationProvider,null,function(e){var n=e.location;return a.a.createElement("div",{ref:i,className:"portal-menu "+(t?" portal-menu--open":"portal-menu--closed")},a.a.createElement("div",{className:"portal-menu__toggler"},a.a.createElement(k.a,{negative:!0,onClick:s,enableClickOutside:t,onClickOutside:s,insideRef:i})),a.a.createElement("nav",{className:"portal-menu__bar"},a.a.createElement(c.a,null,a.a.createElement(c.b,{title:"Grunnleggende",startExpanded:!!n.pathname.match(/(core|jokul)/)||"/"===n.pathname},O.map(function(e){return a.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page,tabIndex:t?0:-1},e.title)})),a.a.createElement(c.b,{title:"Profilelementer",startExpanded:n.pathname.includes("profile")},M.map(function(e){return a.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page,tabIndex:t?0:-1},e.title)})),a.a.createElement(c.b,{title:"For designere",startExpanded:n.pathname.includes("designer")},G.map(function(e){return a.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page,tabIndex:t?0:-1},e.title)})),a.a.createElement(c.b,{title:"For utviklere",startExpanded:n.pathname.includes("developer")},N.map(function(e){return a.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page,tabIndex:t?0:-1},e.title)})),a.a.createElement(c.b,{title:"Komponenter",startExpanded:n.pathname.includes("components")},T.map(function(e){return a.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page,tabIndex:t?0:-1},e.title)}))),a.a.createElement("a",{className:"portal-menu__link portal-menu__link--github jkl-p",href:"https://github.com/fremtind/jokul",tabIndex:t?0:-1},"Kode på Github"),a.a.createElement("a",{className:"portal-menu__link portal-menu__link--github jkl-p",href:"https://github.com/fremtind/jokul/issues/new?assignees=&labels=bug&template=bug_report.md&title=",tabIndex:t?0:-1},"Rapporter feil"),a.a.createElement("a",{className:"portal-menu__link portal-menu__link--github jkl-p",href:"https://github.com/fremtind/jokul/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=",tabIndex:t?0:-1},"Forslag ny funksjon"),a.a.createElement("a",{className:"portal-menu__link portal-menu__link--figma jkl-p",href:"https://www.figma.com/file/TkbB9ANfejDSjB2u4u1OEuqM/J%C3%B8kul-components",tabIndex:t?0:-1},"Designbibliotek")))})}n(206);var I=function(e){var t=e.children,n=e.isComponent,r=void 0!==n&&n;return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{siteTitle:"Jøkul"}),a.a.createElement(L,null),a.a.createElement("main",{className:"portal-content "+(r?"portal-content--component":"")},t))},w=I,A=(n(145),function(e){var t=e.children,n=e.title,r=e.mainExample;return a.a.createElement(f.LocationProvider,null,function(e){return"?fullscreen"!==e.location.search?a.a.createElement(w,{isComponent:!0},a.a.createElement(a.a.Fragment,null,n&&a.a.createElement("h2",{className:"jkl-h1 portal-content__title"},n),a.a.createElement("section",{className:"portal-content__main-example"},r),a.a.createElement("section",{className:"portal-content__rest"},t))):a.a.createElement("main",{className:"portal-component-only"},r)})});n.d(t,"a",function(){return l}),n.d(t,"c",function(){return y}),n.d(t,"d",function(){return I}),n.d(t,"b",function(){return A})},267:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s});n(28);var r=n(0),a=(n(202),n(203),{paragraph:function(e){var t=e.children;return Object(r.createElement)("p",{className:"jkl-p"},t)},list:function(e){var t=e.children;return Object(r.createElement)("ul",{className:"jkl-bullet-list jkl-p"},t)},listItem:function(e){var t=e.children;return Object(r.createElement)("li",{className:"jkl-bullet-list__item"},t)},blockquote:function(e){var t=e.children;return Object(r.createElement)("div",{className:"jkl-message-box jkl-message-box__info"},t)}}),i=Object.assign({},a,{heading:function(e){var t=e.level,n=e.children;return 1===t?null:Object(r.createElement)("h"+t,{className:"jkl-h"+(t+1)},n)}}),s=Object.assign({},a,{heading:function(e){var t=e.level,n=e.children;return Object(r.createElement)("h"+t,{className:"jkl-h"+(t+1)},n)}})},276:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return c});n(54),n(41),n(25);var r=n(0),a=n.n(r),i=n(283),s=n.n(i);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e){var t=e.children,n=e.title,i=e.startExpanded,c=void 0!==i&&i,l=o(Object(r.useState)(c),2),p=l[0],_=l[1],j=p?" jkl-accordion-item--expanded":"";return a.a.createElement("div",{"data-testid":"jkl-accordion-item",className:"jkl-accordion-item".concat(j)},a.a.createElement("button",{className:"jkl-accordion-item__title",type:"button"},a.a.createElement("div",{className:"jkl-accordion-item__title-text"},n),a.a.createElement("div",{className:"jkl-accordion-item__title-icon"})),a.a.createElement(s.a,{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",hidden:!p,onToggle:function(){return _(!p)}},a.a.createElement("div",{className:"jkl-accordion-item__content"},t)))}function l(e){var t=e.children,n=e.className,r=void 0===n?"":n;return a.a.createElement("div",{"data-testid":"jkl-accordion",className:"jkl-accordion ".concat(r)},t)}},289:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(71),s=n.n(i);n.d(t,"a",function(){return s.a});n(307),n(10).default.enqueue,a.a.createContext({})},307:function(e,t,n){var r;e.exports=(r=n(815))&&r.default||r},308:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n(54),n(41),n(25);var r=n(0),a=n.n(r);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=function(e){var t=e.className,n=void 0===t?"":t,s=e.initialIsActive,o=void 0!==s&&s,c=e.negative,l=void 0!==c&&c,p=e.description,_=void 0===p?"Hovedmeny":p,j=e.onClick,u=e.onClickOutside,S=e.enableClickOutside,m=void 0!==S&&S,d=e.insideRef,y=i(Object(r.useState)(o),2),E=y[0],g=y[1],h=Object(r.useRef)(null),x=function(e){var t=!E;g(t),e&&e(t)};return function(e,t){function n(n){e&&e.current&&!e.current.contains(n.target)&&t()}a.a.useEffect(function(){return e&&document.addEventListener("click",n),function(){e&&document.removeEventListener("click",n)}})}(m?d||h:null,function(){return x(u)}),a.a.createElement("button",{type:"button","aria-label":_,onClick:function(){return x(j)},className:"jkl-hamburger ".concat(E?"jkl-hamburger--is-active":""," ").concat(l?"jkl-hamburger--negative":""," ").concat(n),"data-testid":"jkl-hamburger",ref:h},a.a.createElement("span",{className:"jkl-hamburger__box"},a.a.createElement("span",{className:"jkl-hamburger__inner"})))}},404:function(e,t,n){var r={"./Binary_Property/ASCII.js":405,"./Binary_Property/ASCII_Hex_Digit.js":406,"./Binary_Property/Alphabetic.js":407,"./Binary_Property/Any.js":408,"./Binary_Property/Assigned.js":409,"./Binary_Property/Bidi_Control.js":410,"./Binary_Property/Bidi_Mirrored.js":411,"./Binary_Property/Case_Ignorable.js":412,"./Binary_Property/Cased.js":413,"./Binary_Property/Changes_When_Casefolded.js":414,"./Binary_Property/Changes_When_Casemapped.js":415,"./Binary_Property/Changes_When_Lowercased.js":416,"./Binary_Property/Changes_When_NFKC_Casefolded.js":417,"./Binary_Property/Changes_When_Titlecased.js":418,"./Binary_Property/Changes_When_Uppercased.js":419,"./Binary_Property/Dash.js":420,"./Binary_Property/Default_Ignorable_Code_Point.js":421,"./Binary_Property/Deprecated.js":422,"./Binary_Property/Diacritic.js":423,"./Binary_Property/Emoji.js":424,"./Binary_Property/Emoji_Component.js":425,"./Binary_Property/Emoji_Modifier.js":426,"./Binary_Property/Emoji_Modifier_Base.js":427,"./Binary_Property/Emoji_Presentation.js":428,"./Binary_Property/Extended_Pictographic.js":429,"./Binary_Property/Extender.js":430,"./Binary_Property/Grapheme_Base.js":431,"./Binary_Property/Grapheme_Extend.js":432,"./Binary_Property/Hex_Digit.js":433,"./Binary_Property/IDS_Binary_Operator.js":434,"./Binary_Property/IDS_Trinary_Operator.js":435,"./Binary_Property/ID_Continue.js":436,"./Binary_Property/ID_Start.js":437,"./Binary_Property/Ideographic.js":438,"./Binary_Property/Join_Control.js":439,"./Binary_Property/Logical_Order_Exception.js":440,"./Binary_Property/Lowercase.js":441,"./Binary_Property/Math.js":442,"./Binary_Property/Noncharacter_Code_Point.js":443,"./Binary_Property/Pattern_Syntax.js":444,"./Binary_Property/Pattern_White_Space.js":445,"./Binary_Property/Quotation_Mark.js":446,"./Binary_Property/Radical.js":447,"./Binary_Property/Regional_Indicator.js":448,"./Binary_Property/Sentence_Terminal.js":449,"./Binary_Property/Soft_Dotted.js":450,"./Binary_Property/Terminal_Punctuation.js":451,"./Binary_Property/Unified_Ideograph.js":452,"./Binary_Property/Uppercase.js":453,"./Binary_Property/Variation_Selector.js":454,"./Binary_Property/White_Space.js":455,"./Binary_Property/XID_Continue.js":456,"./Binary_Property/XID_Start.js":457,"./General_Category/Cased_Letter.js":458,"./General_Category/Close_Punctuation.js":459,"./General_Category/Connector_Punctuation.js":460,"./General_Category/Control.js":461,"./General_Category/Currency_Symbol.js":462,"./General_Category/Dash_Punctuation.js":463,"./General_Category/Decimal_Number.js":464,"./General_Category/Enclosing_Mark.js":465,"./General_Category/Final_Punctuation.js":466,"./General_Category/Format.js":467,"./General_Category/Initial_Punctuation.js":468,"./General_Category/Letter.js":469,"./General_Category/Letter_Number.js":470,"./General_Category/Line_Separator.js":471,"./General_Category/Lowercase_Letter.js":472,"./General_Category/Mark.js":473,"./General_Category/Math_Symbol.js":474,"./General_Category/Modifier_Letter.js":475,"./General_Category/Modifier_Symbol.js":476,"./General_Category/Nonspacing_Mark.js":477,"./General_Category/Number.js":478,"./General_Category/Open_Punctuation.js":479,"./General_Category/Other.js":480,"./General_Category/Other_Letter.js":481,"./General_Category/Other_Number.js":482,"./General_Category/Other_Punctuation.js":483,"./General_Category/Other_Symbol.js":484,"./General_Category/Paragraph_Separator.js":485,"./General_Category/Private_Use.js":486,"./General_Category/Punctuation.js":487,"./General_Category/Separator.js":488,"./General_Category/Space_Separator.js":489,"./General_Category/Spacing_Mark.js":490,"./General_Category/Surrogate.js":491,"./General_Category/Symbol.js":492,"./General_Category/Titlecase_Letter.js":493,"./General_Category/Unassigned.js":494,"./General_Category/Uppercase_Letter.js":495,"./Script/Adlam.js":496,"./Script/Ahom.js":497,"./Script/Anatolian_Hieroglyphs.js":498,"./Script/Arabic.js":499,"./Script/Armenian.js":500,"./Script/Avestan.js":501,"./Script/Balinese.js":502,"./Script/Bamum.js":503,"./Script/Bassa_Vah.js":504,"./Script/Batak.js":505,"./Script/Bengali.js":506,"./Script/Bhaiksuki.js":507,"./Script/Bopomofo.js":508,"./Script/Brahmi.js":509,"./Script/Braille.js":510,"./Script/Buginese.js":511,"./Script/Buhid.js":512,"./Script/Canadian_Aboriginal.js":513,"./Script/Carian.js":514,"./Script/Caucasian_Albanian.js":515,"./Script/Chakma.js":516,"./Script/Cham.js":517,"./Script/Cherokee.js":518,"./Script/Common.js":519,"./Script/Coptic.js":520,"./Script/Cuneiform.js":521,"./Script/Cypriot.js":522,"./Script/Cyrillic.js":523,"./Script/Deseret.js":524,"./Script/Devanagari.js":525,"./Script/Dogra.js":526,"./Script/Duployan.js":527,"./Script/Egyptian_Hieroglyphs.js":528,"./Script/Elbasan.js":529,"./Script/Elymaic.js":530,"./Script/Ethiopic.js":531,"./Script/Georgian.js":532,"./Script/Glagolitic.js":533,"./Script/Gothic.js":534,"./Script/Grantha.js":535,"./Script/Greek.js":536,"./Script/Gujarati.js":537,"./Script/Gunjala_Gondi.js":538,"./Script/Gurmukhi.js":539,"./Script/Han.js":540,"./Script/Hangul.js":541,"./Script/Hanifi_Rohingya.js":542,"./Script/Hanunoo.js":543,"./Script/Hatran.js":544,"./Script/Hebrew.js":545,"./Script/Hiragana.js":546,"./Script/Imperial_Aramaic.js":547,"./Script/Inherited.js":548,"./Script/Inscriptional_Pahlavi.js":549,"./Script/Inscriptional_Parthian.js":550,"./Script/Javanese.js":551,"./Script/Kaithi.js":552,"./Script/Kannada.js":553,"./Script/Katakana.js":554,"./Script/Kayah_Li.js":555,"./Script/Kharoshthi.js":556,"./Script/Khmer.js":557,"./Script/Khojki.js":558,"./Script/Khudawadi.js":559,"./Script/Lao.js":560,"./Script/Latin.js":561,"./Script/Lepcha.js":562,"./Script/Limbu.js":563,"./Script/Linear_A.js":564,"./Script/Linear_B.js":565,"./Script/Lisu.js":566,"./Script/Lycian.js":567,"./Script/Lydian.js":568,"./Script/Mahajani.js":569,"./Script/Makasar.js":570,"./Script/Malayalam.js":571,"./Script/Mandaic.js":572,"./Script/Manichaean.js":573,"./Script/Marchen.js":574,"./Script/Masaram_Gondi.js":575,"./Script/Medefaidrin.js":576,"./Script/Meetei_Mayek.js":577,"./Script/Mende_Kikakui.js":578,"./Script/Meroitic_Cursive.js":579,"./Script/Meroitic_Hieroglyphs.js":580,"./Script/Miao.js":581,"./Script/Modi.js":582,"./Script/Mongolian.js":583,"./Script/Mro.js":584,"./Script/Multani.js":585,"./Script/Myanmar.js":586,"./Script/Nabataean.js":587,"./Script/Nandinagari.js":588,"./Script/New_Tai_Lue.js":589,"./Script/Newa.js":590,"./Script/Nko.js":591,"./Script/Nushu.js":592,"./Script/Nyiakeng_Puachue_Hmong.js":593,"./Script/Ogham.js":594,"./Script/Ol_Chiki.js":595,"./Script/Old_Hungarian.js":596,"./Script/Old_Italic.js":597,"./Script/Old_North_Arabian.js":598,"./Script/Old_Permic.js":599,"./Script/Old_Persian.js":600,"./Script/Old_Sogdian.js":601,"./Script/Old_South_Arabian.js":602,"./Script/Old_Turkic.js":603,"./Script/Oriya.js":604,"./Script/Osage.js":605,"./Script/Osmanya.js":606,"./Script/Pahawh_Hmong.js":607,"./Script/Palmyrene.js":608,"./Script/Pau_Cin_Hau.js":609,"./Script/Phags_Pa.js":610,"./Script/Phoenician.js":611,"./Script/Psalter_Pahlavi.js":612,"./Script/Rejang.js":613,"./Script/Runic.js":614,"./Script/Samaritan.js":615,"./Script/Saurashtra.js":616,"./Script/Sharada.js":617,"./Script/Shavian.js":618,"./Script/Siddham.js":619,"./Script/SignWriting.js":620,"./Script/Sinhala.js":621,"./Script/Sogdian.js":622,"./Script/Sora_Sompeng.js":623,"./Script/Soyombo.js":624,"./Script/Sundanese.js":625,"./Script/Syloti_Nagri.js":626,"./Script/Syriac.js":627,"./Script/Tagalog.js":628,"./Script/Tagbanwa.js":629,"./Script/Tai_Le.js":630,"./Script/Tai_Tham.js":631,"./Script/Tai_Viet.js":632,"./Script/Takri.js":633,"./Script/Tamil.js":634,"./Script/Tangut.js":635,"./Script/Telugu.js":636,"./Script/Thaana.js":637,"./Script/Thai.js":638,"./Script/Tibetan.js":639,"./Script/Tifinagh.js":640,"./Script/Tirhuta.js":641,"./Script/Ugaritic.js":642,"./Script/Vai.js":643,"./Script/Wancho.js":644,"./Script/Warang_Citi.js":645,"./Script/Yi.js":646,"./Script/Zanabazar_Square.js":647,"./Script_Extensions/Adlam.js":648,"./Script_Extensions/Ahom.js":649,"./Script_Extensions/Anatolian_Hieroglyphs.js":650,"./Script_Extensions/Arabic.js":651,"./Script_Extensions/Armenian.js":652,"./Script_Extensions/Avestan.js":653,"./Script_Extensions/Balinese.js":654,"./Script_Extensions/Bamum.js":655,"./Script_Extensions/Bassa_Vah.js":656,"./Script_Extensions/Batak.js":657,"./Script_Extensions/Bengali.js":658,"./Script_Extensions/Bhaiksuki.js":659,"./Script_Extensions/Bopomofo.js":660,"./Script_Extensions/Brahmi.js":661,"./Script_Extensions/Braille.js":662,"./Script_Extensions/Buginese.js":663,"./Script_Extensions/Buhid.js":664,"./Script_Extensions/Canadian_Aboriginal.js":665,"./Script_Extensions/Carian.js":666,"./Script_Extensions/Caucasian_Albanian.js":667,"./Script_Extensions/Chakma.js":668,"./Script_Extensions/Cham.js":669,"./Script_Extensions/Cherokee.js":670,"./Script_Extensions/Common.js":671,"./Script_Extensions/Coptic.js":672,"./Script_Extensions/Cuneiform.js":673,"./Script_Extensions/Cypriot.js":674,"./Script_Extensions/Cyrillic.js":675,"./Script_Extensions/Deseret.js":676,"./Script_Extensions/Devanagari.js":677,"./Script_Extensions/Dogra.js":678,"./Script_Extensions/Duployan.js":679,"./Script_Extensions/Egyptian_Hieroglyphs.js":680,"./Script_Extensions/Elbasan.js":681,"./Script_Extensions/Elymaic.js":682,"./Script_Extensions/Ethiopic.js":683,"./Script_Extensions/Georgian.js":684,"./Script_Extensions/Glagolitic.js":685,"./Script_Extensions/Gothic.js":686,"./Script_Extensions/Grantha.js":687,"./Script_Extensions/Greek.js":688,"./Script_Extensions/Gujarati.js":689,"./Script_Extensions/Gunjala_Gondi.js":690,"./Script_Extensions/Gurmukhi.js":691,"./Script_Extensions/Han.js":692,"./Script_Extensions/Hangul.js":693,"./Script_Extensions/Hanifi_Rohingya.js":694,"./Script_Extensions/Hanunoo.js":695,"./Script_Extensions/Hatran.js":696,"./Script_Extensions/Hebrew.js":697,"./Script_Extensions/Hiragana.js":698,"./Script_Extensions/Imperial_Aramaic.js":699,"./Script_Extensions/Inherited.js":700,"./Script_Extensions/Inscriptional_Pahlavi.js":701,"./Script_Extensions/Inscriptional_Parthian.js":702,"./Script_Extensions/Javanese.js":703,"./Script_Extensions/Kaithi.js":704,"./Script_Extensions/Kannada.js":705,"./Script_Extensions/Katakana.js":706,"./Script_Extensions/Kayah_Li.js":707,"./Script_Extensions/Kharoshthi.js":708,"./Script_Extensions/Khmer.js":709,"./Script_Extensions/Khojki.js":710,"./Script_Extensions/Khudawadi.js":711,"./Script_Extensions/Lao.js":712,"./Script_Extensions/Latin.js":713,"./Script_Extensions/Lepcha.js":714,"./Script_Extensions/Limbu.js":715,"./Script_Extensions/Linear_A.js":716,"./Script_Extensions/Linear_B.js":717,"./Script_Extensions/Lisu.js":718,"./Script_Extensions/Lycian.js":719,"./Script_Extensions/Lydian.js":720,"./Script_Extensions/Mahajani.js":721,"./Script_Extensions/Makasar.js":722,"./Script_Extensions/Malayalam.js":723,"./Script_Extensions/Mandaic.js":724,"./Script_Extensions/Manichaean.js":725,"./Script_Extensions/Marchen.js":726,"./Script_Extensions/Masaram_Gondi.js":727,"./Script_Extensions/Medefaidrin.js":728,"./Script_Extensions/Meetei_Mayek.js":729,"./Script_Extensions/Mende_Kikakui.js":730,"./Script_Extensions/Meroitic_Cursive.js":731,"./Script_Extensions/Meroitic_Hieroglyphs.js":732,"./Script_Extensions/Miao.js":733,"./Script_Extensions/Modi.js":734,"./Script_Extensions/Mongolian.js":735,"./Script_Extensions/Mro.js":736,"./Script_Extensions/Multani.js":737,"./Script_Extensions/Myanmar.js":738,"./Script_Extensions/Nabataean.js":739,"./Script_Extensions/Nandinagari.js":740,"./Script_Extensions/New_Tai_Lue.js":741,"./Script_Extensions/Newa.js":742,"./Script_Extensions/Nko.js":743,"./Script_Extensions/Nushu.js":744,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":745,"./Script_Extensions/Ogham.js":746,"./Script_Extensions/Ol_Chiki.js":747,"./Script_Extensions/Old_Hungarian.js":748,"./Script_Extensions/Old_Italic.js":749,"./Script_Extensions/Old_North_Arabian.js":750,"./Script_Extensions/Old_Permic.js":751,"./Script_Extensions/Old_Persian.js":752,"./Script_Extensions/Old_Sogdian.js":753,"./Script_Extensions/Old_South_Arabian.js":754,"./Script_Extensions/Old_Turkic.js":755,"./Script_Extensions/Oriya.js":756,"./Script_Extensions/Osage.js":757,"./Script_Extensions/Osmanya.js":758,"./Script_Extensions/Pahawh_Hmong.js":759,"./Script_Extensions/Palmyrene.js":760,"./Script_Extensions/Pau_Cin_Hau.js":761,"./Script_Extensions/Phags_Pa.js":762,"./Script_Extensions/Phoenician.js":763,"./Script_Extensions/Psalter_Pahlavi.js":764,"./Script_Extensions/Rejang.js":765,"./Script_Extensions/Runic.js":766,"./Script_Extensions/Samaritan.js":767,"./Script_Extensions/Saurashtra.js":768,"./Script_Extensions/Sharada.js":769,"./Script_Extensions/Shavian.js":770,"./Script_Extensions/Siddham.js":771,"./Script_Extensions/SignWriting.js":772,"./Script_Extensions/Sinhala.js":773,"./Script_Extensions/Sogdian.js":774,"./Script_Extensions/Sora_Sompeng.js":775,"./Script_Extensions/Soyombo.js":776,"./Script_Extensions/Sundanese.js":777,"./Script_Extensions/Syloti_Nagri.js":778,"./Script_Extensions/Syriac.js":779,"./Script_Extensions/Tagalog.js":780,"./Script_Extensions/Tagbanwa.js":781,"./Script_Extensions/Tai_Le.js":782,"./Script_Extensions/Tai_Tham.js":783,"./Script_Extensions/Tai_Viet.js":784,"./Script_Extensions/Takri.js":785,"./Script_Extensions/Tamil.js":786,"./Script_Extensions/Tangut.js":787,"./Script_Extensions/Telugu.js":788,"./Script_Extensions/Thaana.js":789,"./Script_Extensions/Thai.js":790,"./Script_Extensions/Tibetan.js":791,"./Script_Extensions/Tifinagh.js":792,"./Script_Extensions/Tirhuta.js":793,"./Script_Extensions/Ugaritic.js":794,"./Script_Extensions/Vai.js":795,"./Script_Extensions/Wancho.js":796,"./Script_Extensions/Warang_Citi.js":797,"./Script_Extensions/Yi.js":798,"./Script_Extensions/Zanabazar_Square.js":799,"./index.js":800,"./unicode-version.js":801};function a(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=404},815:function(e,t,n){"use strict";n.r(t);n(28);var r=n(0),a=n.n(r),i=n(132);t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}}}]);
//# sourceMappingURL=2-0c04c58ad8e4d26976ea.js.map