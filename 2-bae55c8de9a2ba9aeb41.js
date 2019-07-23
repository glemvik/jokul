(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{242:function(e,t,r){"use strict";var n=r(0),i=r.n(n),a=r(243),s=r.n(a),o=r(244),c=r(250);r(191);function p(e){var t=e.changelog,r=e.changelogReact;return i.a.createElement(c.a,{className:"portal-changelog"},t&&i.a.createElement(c.b,{title:"Style changelog"},i.a.createElement(s.a,{renderers:o.a,source:t})),r&&i.a.createElement(c.b,{title:"React changelog"},i.a.createElement(s.a,{renderers:o.a,source:r})))}r(25);var l=r(794),_=function(e){var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()},j={plain:{color:"#3d3d3d",backgroundColor:"transparent"},styles:[{types:["prolog"],style:{color:"#0a3166"}},{types:["comment"],style:{color:"#dcb28b"}},{types:["builtin","changed","keyword"],style:{color:"#ff7059"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"#0a3166"}},{types:["deleted","string","attr-value"],style:{color:"#ff7059"}},{types:["selector"],style:{color:"#dcb28b"}},{types:["tag"],style:{color:"#0d5745"}},{types:["tag"],languages:["markup"],style:{color:"#509ce6"}},{types:["punctuation"],style:{color:"#696666",backgroundColor:"transparent"}},{types:["operator"],style:{color:"#0d5745",backgroundColor:"transparent"}},{types:["punctuation"],languages:["markup"],style:{color:"#696666"}},{types:["function"],style:{color:"#509ce6"}},{types:["class-name"],style:{color:"#0d5745"}},{types:["char"],style:{color:"#ff7059"}},{types:["string"],style:{color:"#ff7059"}}]},S=r(135),u=r.n(S);function y(e){return Object(n.useEffect)(function(){u.a.highlightAll()}),i.a.createElement("pre",null,i.a.createElement("code",{className:"language-tsx"},e.children))}r(274),r(36);var m=function(e){var t=e.split("\n"),r=!1;return t.filter(function(e){var t=r;switch(!0){case e.startsWith("interface"):t=!0,r=!0;break;case t&&e.startsWith("}"):r=!1;break;case e.startsWith("declare"):t=!0,r=!1}return t}).join("\n")};r(192);function E(e){var t=e.exampleComponents,r=e.exampleCode,n=e.type,a=e.types,s=e.exampleImport;return i.a.createElement(l.d,{scope:t,code:r,theme:j},i.a.createElement(l.c,{className:"portal-content__example"}),i.a.createElement(c.a,null,i.a.createElement(c.b,{title:"Kode"},i.a.createElement(l.a,null),i.a.createElement(l.b,null),s&&i.a.createElement("button",{onClick:function(){return _(s||"")},className:"portal-content__section portal-content__section--copy"},i.a.createElement("h4",{className:"jkl-h4"},"Import"),i.a.createElement("p",{className:"jkl-small"},"Klikk for å kopiere"),i.a.createElement(y,null,s)),n&&i.a.createElement("div",{className:"portal-content__section"},i.a.createElement("h4",{className:"jkl-h4"},"Type"),i.a.createElement(y,null,m(n))),a&&a.map(function(e){return i.a.createElement("div",{key:e.name,className:"portal-content__section"},i.a.createElement("h4",{className:"jkl-h4"},"Type: ",e.name),i.a.createElement(y,null,m(e.type)))}))))}var d,g,h=r(261),x=(r(193),function(e){var t=e.siteTitle,r=void 0===t?"":t;return i.a.createElement("header",{className:"portal-header"},i.a.createElement("h1",{className:"portal-header__title jkl-h2"},i.a.createElement(h.a,{to:"/"},r)))}),f=(r(128),r(129),r(22)),k=function(e,t,r){return{title:e,page:t,section:r}},C=function(e,t){return k(e,t,"developer")},P=function(e,t){return k(e,t,"core")},b=function(e,t){return k(e,t,"components")},B=function(e,t){return k(e,t,"profile")},v=[C("Kom i gang","getting-started"),C("Bidragsguide","contribute")],N=[(d="Kom i gang",g="getting-started",k(d,g,"designer"))],G=[P("Designprinsipper","principle"),P("Bevegelse","motion"),P("Klarhet","clarity"),P("Elevasjon","elevation"),P("Mønstre","pattern")],M=[b("Alle komponenter",""),b("Knapper","button"),b("Radioknapp","radiobutton"),b("Avkryssingsboks","checkbox"),b("Toggle-knapp","toggleswitch"),b("Trekkspilliste","accordion"),b("Datovelger","datepicker"),b("Typografi","typography"),b("Tekstfelt","textfield"),b("Lang tekstfelt","textarea"),b("Meldinger","messagebox"),b("Logo","logo"),b("Lasteindikator","loader"),b("Delelinje","dividerline"),b("Kort","card"),b("Liste","bulletlist")],T=[B("Farger","colors"),B("Tilgjengelighet","a11y"),B("Stil og tone","tone"),B("Typograpfi","typography"),B("Bildestil","picture"),B("Ikoner","icon"),B("Sperring","spacing"),B("Layout","layout"),B("Skygger","shadow"),B("Logo","logo")];r(187),r(194);function O(){return i.a.createElement(f.LocationProvider,null,function(e){var t=e.location;return i.a.createElement("nav",{className:"portal-menu"},i.a.createElement(c.a,null,i.a.createElement(c.b,{title:"Grunnleggende",startExpanded:t.pathname.includes("core")||"/"===t.pathname},G.map(function(e){return i.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),i.a.createElement(c.b,{title:"Profilelementer",startExpanded:t.pathname.includes("profile")},T.map(function(e){return i.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),i.a.createElement(c.b,{title:"For designere",startExpanded:t.pathname.includes("designer")},N.map(function(e){return i.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),i.a.createElement(c.b,{title:"For utviklere",startExpanded:t.pathname.includes("developer")},v.map(function(e){return i.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)})),i.a.createElement(c.b,{title:"Komponenter",startExpanded:t.pathname.includes("components")},M.map(function(e){return i.a.createElement(h.a,{key:e.title,className:"portal-menu__link",to:"/"+e.section+"/"+e.page},e.title)}))))})}r(188);var L=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,{siteTitle:"Jøkul"}),i.a.createElement(O,null),i.a.createElement("main",{className:"portal-content"},t))},A=L,w=(r(133),function(e){var t=e.children,r=e.title,n=e.mainExample;return i.a.createElement(f.LocationProvider,null,function(e){return"?fullscreen"!==e.location.search?i.a.createElement(A,null,i.a.createElement(i.a.Fragment,null,r&&i.a.createElement("h2",{className:"jkl-h1 portal-content__title"},r),i.a.createElement("section",{className:"portal-content__main-example"},n),i.a.createElement("section",{className:"portal-content__rest"},t))):i.a.createElement("main",{className:"portal-component-only"},n)})});r.d(t,"a",function(){return p}),r.d(t,"c",function(){return E}),r.d(t,"d",function(){return L}),r.d(t,"b",function(){return w})},244:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return s});r(26);var n=r(0),i=(r(185),r(186),{paragraph:function(e){var t=e.children;return Object(n.createElement)("p",{className:"jkl-p"},t)},list:function(e){var t=e.children;return Object(n.createElement)("ul",{className:"jkl-bullet-list jkl-p"},t)},listItem:function(e){var t=e.children;return Object(n.createElement)("li",{className:"jkl-bullet-list__item"},t)},blockquote:function(e){var t=e.children;return Object(n.createElement)("div",{className:"jkl-message-box jkl-message-box__info"},t)}}),a=Object.assign({},i,{heading:function(e){var t=e.level,r=e.children;return 1===t?null:Object(n.createElement)("h"+t,{className:"jkl-h"+(t+1)},r)}}),s=Object.assign({},i,{heading:function(e){var t=e.level,r=e.children;return Object(n.createElement)("h"+t,{className:"jkl-h"+(t+1)},r)}})},250:function(e,t,r){"use strict";r.d(t,"a",function(){return p}),r.d(t,"b",function(){return c});r(48),r(35),r(23);var n=r(0),i=r.n(n),a=r(273),s=r.n(a);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(c){i=!0,a=c}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e){var t=e.children,r=e.title,a=e.startExpanded,c=void 0!==a&&a,p=o(Object(n.useState)(c),2),l=p[0],_=p[1],j=l?" jkl-accordion-item--expanded":"";return i.a.createElement("div",{"data-testid":"jkl-accordion-item",className:"jkl-accordion-item".concat(j)},i.a.createElement("button",{className:"jkl-accordion-item__title",type:"button"},i.a.createElement("div",{className:"jkl-accordion-item__title-text"},r),i.a.createElement("div",{className:"jkl-accordion-item__title-icon"})),i.a.createElement(s.a,{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",hidden:!l,onToggle:function(){return _(!l)}},i.a.createElement("div",{className:"jkl-accordion-item__content"},t)))}function p(e){var t=e.children,r=e.className,n=void 0===r?"":r;return i.a.createElement("div",{"data-testid":"jkl-accordion",className:"jkl-accordion ".concat(n)},t)}},261:function(e,t,r){"use strict";var n=r(0),i=r.n(n),a=r(61),s=r.n(a);r.d(t,"a",function(){return s.a});r(280),r(9).default.enqueue,i.a.createContext({})},280:function(e,t,r){var n;e.exports=(n=r(789))&&n.default||n},378:function(e,t,r){var n={"./Binary_Property/ASCII.js":379,"./Binary_Property/ASCII_Hex_Digit.js":380,"./Binary_Property/Alphabetic.js":381,"./Binary_Property/Any.js":382,"./Binary_Property/Assigned.js":383,"./Binary_Property/Bidi_Control.js":384,"./Binary_Property/Bidi_Mirrored.js":385,"./Binary_Property/Case_Ignorable.js":386,"./Binary_Property/Cased.js":387,"./Binary_Property/Changes_When_Casefolded.js":388,"./Binary_Property/Changes_When_Casemapped.js":389,"./Binary_Property/Changes_When_Lowercased.js":390,"./Binary_Property/Changes_When_NFKC_Casefolded.js":391,"./Binary_Property/Changes_When_Titlecased.js":392,"./Binary_Property/Changes_When_Uppercased.js":393,"./Binary_Property/Dash.js":394,"./Binary_Property/Default_Ignorable_Code_Point.js":395,"./Binary_Property/Deprecated.js":396,"./Binary_Property/Diacritic.js":397,"./Binary_Property/Emoji.js":398,"./Binary_Property/Emoji_Component.js":399,"./Binary_Property/Emoji_Modifier.js":400,"./Binary_Property/Emoji_Modifier_Base.js":401,"./Binary_Property/Emoji_Presentation.js":402,"./Binary_Property/Extended_Pictographic.js":403,"./Binary_Property/Extender.js":404,"./Binary_Property/Grapheme_Base.js":405,"./Binary_Property/Grapheme_Extend.js":406,"./Binary_Property/Hex_Digit.js":407,"./Binary_Property/IDS_Binary_Operator.js":408,"./Binary_Property/IDS_Trinary_Operator.js":409,"./Binary_Property/ID_Continue.js":410,"./Binary_Property/ID_Start.js":411,"./Binary_Property/Ideographic.js":412,"./Binary_Property/Join_Control.js":413,"./Binary_Property/Logical_Order_Exception.js":414,"./Binary_Property/Lowercase.js":415,"./Binary_Property/Math.js":416,"./Binary_Property/Noncharacter_Code_Point.js":417,"./Binary_Property/Pattern_Syntax.js":418,"./Binary_Property/Pattern_White_Space.js":419,"./Binary_Property/Quotation_Mark.js":420,"./Binary_Property/Radical.js":421,"./Binary_Property/Regional_Indicator.js":422,"./Binary_Property/Sentence_Terminal.js":423,"./Binary_Property/Soft_Dotted.js":424,"./Binary_Property/Terminal_Punctuation.js":425,"./Binary_Property/Unified_Ideograph.js":426,"./Binary_Property/Uppercase.js":427,"./Binary_Property/Variation_Selector.js":428,"./Binary_Property/White_Space.js":429,"./Binary_Property/XID_Continue.js":430,"./Binary_Property/XID_Start.js":431,"./General_Category/Cased_Letter.js":432,"./General_Category/Close_Punctuation.js":433,"./General_Category/Connector_Punctuation.js":434,"./General_Category/Control.js":435,"./General_Category/Currency_Symbol.js":436,"./General_Category/Dash_Punctuation.js":437,"./General_Category/Decimal_Number.js":438,"./General_Category/Enclosing_Mark.js":439,"./General_Category/Final_Punctuation.js":440,"./General_Category/Format.js":441,"./General_Category/Initial_Punctuation.js":442,"./General_Category/Letter.js":443,"./General_Category/Letter_Number.js":444,"./General_Category/Line_Separator.js":445,"./General_Category/Lowercase_Letter.js":446,"./General_Category/Mark.js":447,"./General_Category/Math_Symbol.js":448,"./General_Category/Modifier_Letter.js":449,"./General_Category/Modifier_Symbol.js":450,"./General_Category/Nonspacing_Mark.js":451,"./General_Category/Number.js":452,"./General_Category/Open_Punctuation.js":453,"./General_Category/Other.js":454,"./General_Category/Other_Letter.js":455,"./General_Category/Other_Number.js":456,"./General_Category/Other_Punctuation.js":457,"./General_Category/Other_Symbol.js":458,"./General_Category/Paragraph_Separator.js":459,"./General_Category/Private_Use.js":460,"./General_Category/Punctuation.js":461,"./General_Category/Separator.js":462,"./General_Category/Space_Separator.js":463,"./General_Category/Spacing_Mark.js":464,"./General_Category/Surrogate.js":465,"./General_Category/Symbol.js":466,"./General_Category/Titlecase_Letter.js":467,"./General_Category/Unassigned.js":468,"./General_Category/Uppercase_Letter.js":469,"./Script/Adlam.js":470,"./Script/Ahom.js":471,"./Script/Anatolian_Hieroglyphs.js":472,"./Script/Arabic.js":473,"./Script/Armenian.js":474,"./Script/Avestan.js":475,"./Script/Balinese.js":476,"./Script/Bamum.js":477,"./Script/Bassa_Vah.js":478,"./Script/Batak.js":479,"./Script/Bengali.js":480,"./Script/Bhaiksuki.js":481,"./Script/Bopomofo.js":482,"./Script/Brahmi.js":483,"./Script/Braille.js":484,"./Script/Buginese.js":485,"./Script/Buhid.js":486,"./Script/Canadian_Aboriginal.js":487,"./Script/Carian.js":488,"./Script/Caucasian_Albanian.js":489,"./Script/Chakma.js":490,"./Script/Cham.js":491,"./Script/Cherokee.js":492,"./Script/Common.js":493,"./Script/Coptic.js":494,"./Script/Cuneiform.js":495,"./Script/Cypriot.js":496,"./Script/Cyrillic.js":497,"./Script/Deseret.js":498,"./Script/Devanagari.js":499,"./Script/Dogra.js":500,"./Script/Duployan.js":501,"./Script/Egyptian_Hieroglyphs.js":502,"./Script/Elbasan.js":503,"./Script/Elymaic.js":504,"./Script/Ethiopic.js":505,"./Script/Georgian.js":506,"./Script/Glagolitic.js":507,"./Script/Gothic.js":508,"./Script/Grantha.js":509,"./Script/Greek.js":510,"./Script/Gujarati.js":511,"./Script/Gunjala_Gondi.js":512,"./Script/Gurmukhi.js":513,"./Script/Han.js":514,"./Script/Hangul.js":515,"./Script/Hanifi_Rohingya.js":516,"./Script/Hanunoo.js":517,"./Script/Hatran.js":518,"./Script/Hebrew.js":519,"./Script/Hiragana.js":520,"./Script/Imperial_Aramaic.js":521,"./Script/Inherited.js":522,"./Script/Inscriptional_Pahlavi.js":523,"./Script/Inscriptional_Parthian.js":524,"./Script/Javanese.js":525,"./Script/Kaithi.js":526,"./Script/Kannada.js":527,"./Script/Katakana.js":528,"./Script/Kayah_Li.js":529,"./Script/Kharoshthi.js":530,"./Script/Khmer.js":531,"./Script/Khojki.js":532,"./Script/Khudawadi.js":533,"./Script/Lao.js":534,"./Script/Latin.js":535,"./Script/Lepcha.js":536,"./Script/Limbu.js":537,"./Script/Linear_A.js":538,"./Script/Linear_B.js":539,"./Script/Lisu.js":540,"./Script/Lycian.js":541,"./Script/Lydian.js":542,"./Script/Mahajani.js":543,"./Script/Makasar.js":544,"./Script/Malayalam.js":545,"./Script/Mandaic.js":546,"./Script/Manichaean.js":547,"./Script/Marchen.js":548,"./Script/Masaram_Gondi.js":549,"./Script/Medefaidrin.js":550,"./Script/Meetei_Mayek.js":551,"./Script/Mende_Kikakui.js":552,"./Script/Meroitic_Cursive.js":553,"./Script/Meroitic_Hieroglyphs.js":554,"./Script/Miao.js":555,"./Script/Modi.js":556,"./Script/Mongolian.js":557,"./Script/Mro.js":558,"./Script/Multani.js":559,"./Script/Myanmar.js":560,"./Script/Nabataean.js":561,"./Script/Nandinagari.js":562,"./Script/New_Tai_Lue.js":563,"./Script/Newa.js":564,"./Script/Nko.js":565,"./Script/Nushu.js":566,"./Script/Nyiakeng_Puachue_Hmong.js":567,"./Script/Ogham.js":568,"./Script/Ol_Chiki.js":569,"./Script/Old_Hungarian.js":570,"./Script/Old_Italic.js":571,"./Script/Old_North_Arabian.js":572,"./Script/Old_Permic.js":573,"./Script/Old_Persian.js":574,"./Script/Old_Sogdian.js":575,"./Script/Old_South_Arabian.js":576,"./Script/Old_Turkic.js":577,"./Script/Oriya.js":578,"./Script/Osage.js":579,"./Script/Osmanya.js":580,"./Script/Pahawh_Hmong.js":581,"./Script/Palmyrene.js":582,"./Script/Pau_Cin_Hau.js":583,"./Script/Phags_Pa.js":584,"./Script/Phoenician.js":585,"./Script/Psalter_Pahlavi.js":586,"./Script/Rejang.js":587,"./Script/Runic.js":588,"./Script/Samaritan.js":589,"./Script/Saurashtra.js":590,"./Script/Sharada.js":591,"./Script/Shavian.js":592,"./Script/Siddham.js":593,"./Script/SignWriting.js":594,"./Script/Sinhala.js":595,"./Script/Sogdian.js":596,"./Script/Sora_Sompeng.js":597,"./Script/Soyombo.js":598,"./Script/Sundanese.js":599,"./Script/Syloti_Nagri.js":600,"./Script/Syriac.js":601,"./Script/Tagalog.js":602,"./Script/Tagbanwa.js":603,"./Script/Tai_Le.js":604,"./Script/Tai_Tham.js":605,"./Script/Tai_Viet.js":606,"./Script/Takri.js":607,"./Script/Tamil.js":608,"./Script/Tangut.js":609,"./Script/Telugu.js":610,"./Script/Thaana.js":611,"./Script/Thai.js":612,"./Script/Tibetan.js":613,"./Script/Tifinagh.js":614,"./Script/Tirhuta.js":615,"./Script/Ugaritic.js":616,"./Script/Vai.js":617,"./Script/Wancho.js":618,"./Script/Warang_Citi.js":619,"./Script/Yi.js":620,"./Script/Zanabazar_Square.js":621,"./Script_Extensions/Adlam.js":622,"./Script_Extensions/Ahom.js":623,"./Script_Extensions/Anatolian_Hieroglyphs.js":624,"./Script_Extensions/Arabic.js":625,"./Script_Extensions/Armenian.js":626,"./Script_Extensions/Avestan.js":627,"./Script_Extensions/Balinese.js":628,"./Script_Extensions/Bamum.js":629,"./Script_Extensions/Bassa_Vah.js":630,"./Script_Extensions/Batak.js":631,"./Script_Extensions/Bengali.js":632,"./Script_Extensions/Bhaiksuki.js":633,"./Script_Extensions/Bopomofo.js":634,"./Script_Extensions/Brahmi.js":635,"./Script_Extensions/Braille.js":636,"./Script_Extensions/Buginese.js":637,"./Script_Extensions/Buhid.js":638,"./Script_Extensions/Canadian_Aboriginal.js":639,"./Script_Extensions/Carian.js":640,"./Script_Extensions/Caucasian_Albanian.js":641,"./Script_Extensions/Chakma.js":642,"./Script_Extensions/Cham.js":643,"./Script_Extensions/Cherokee.js":644,"./Script_Extensions/Common.js":645,"./Script_Extensions/Coptic.js":646,"./Script_Extensions/Cuneiform.js":647,"./Script_Extensions/Cypriot.js":648,"./Script_Extensions/Cyrillic.js":649,"./Script_Extensions/Deseret.js":650,"./Script_Extensions/Devanagari.js":651,"./Script_Extensions/Dogra.js":652,"./Script_Extensions/Duployan.js":653,"./Script_Extensions/Egyptian_Hieroglyphs.js":654,"./Script_Extensions/Elbasan.js":655,"./Script_Extensions/Elymaic.js":656,"./Script_Extensions/Ethiopic.js":657,"./Script_Extensions/Georgian.js":658,"./Script_Extensions/Glagolitic.js":659,"./Script_Extensions/Gothic.js":660,"./Script_Extensions/Grantha.js":661,"./Script_Extensions/Greek.js":662,"./Script_Extensions/Gujarati.js":663,"./Script_Extensions/Gunjala_Gondi.js":664,"./Script_Extensions/Gurmukhi.js":665,"./Script_Extensions/Han.js":666,"./Script_Extensions/Hangul.js":667,"./Script_Extensions/Hanifi_Rohingya.js":668,"./Script_Extensions/Hanunoo.js":669,"./Script_Extensions/Hatran.js":670,"./Script_Extensions/Hebrew.js":671,"./Script_Extensions/Hiragana.js":672,"./Script_Extensions/Imperial_Aramaic.js":673,"./Script_Extensions/Inherited.js":674,"./Script_Extensions/Inscriptional_Pahlavi.js":675,"./Script_Extensions/Inscriptional_Parthian.js":676,"./Script_Extensions/Javanese.js":677,"./Script_Extensions/Kaithi.js":678,"./Script_Extensions/Kannada.js":679,"./Script_Extensions/Katakana.js":680,"./Script_Extensions/Kayah_Li.js":681,"./Script_Extensions/Kharoshthi.js":682,"./Script_Extensions/Khmer.js":683,"./Script_Extensions/Khojki.js":684,"./Script_Extensions/Khudawadi.js":685,"./Script_Extensions/Lao.js":686,"./Script_Extensions/Latin.js":687,"./Script_Extensions/Lepcha.js":688,"./Script_Extensions/Limbu.js":689,"./Script_Extensions/Linear_A.js":690,"./Script_Extensions/Linear_B.js":691,"./Script_Extensions/Lisu.js":692,"./Script_Extensions/Lycian.js":693,"./Script_Extensions/Lydian.js":694,"./Script_Extensions/Mahajani.js":695,"./Script_Extensions/Makasar.js":696,"./Script_Extensions/Malayalam.js":697,"./Script_Extensions/Mandaic.js":698,"./Script_Extensions/Manichaean.js":699,"./Script_Extensions/Marchen.js":700,"./Script_Extensions/Masaram_Gondi.js":701,"./Script_Extensions/Medefaidrin.js":702,"./Script_Extensions/Meetei_Mayek.js":703,"./Script_Extensions/Mende_Kikakui.js":704,"./Script_Extensions/Meroitic_Cursive.js":705,"./Script_Extensions/Meroitic_Hieroglyphs.js":706,"./Script_Extensions/Miao.js":707,"./Script_Extensions/Modi.js":708,"./Script_Extensions/Mongolian.js":709,"./Script_Extensions/Mro.js":710,"./Script_Extensions/Multani.js":711,"./Script_Extensions/Myanmar.js":712,"./Script_Extensions/Nabataean.js":713,"./Script_Extensions/Nandinagari.js":714,"./Script_Extensions/New_Tai_Lue.js":715,"./Script_Extensions/Newa.js":716,"./Script_Extensions/Nko.js":717,"./Script_Extensions/Nushu.js":718,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":719,"./Script_Extensions/Ogham.js":720,"./Script_Extensions/Ol_Chiki.js":721,"./Script_Extensions/Old_Hungarian.js":722,"./Script_Extensions/Old_Italic.js":723,"./Script_Extensions/Old_North_Arabian.js":724,"./Script_Extensions/Old_Permic.js":725,"./Script_Extensions/Old_Persian.js":726,"./Script_Extensions/Old_Sogdian.js":727,"./Script_Extensions/Old_South_Arabian.js":728,"./Script_Extensions/Old_Turkic.js":729,"./Script_Extensions/Oriya.js":730,"./Script_Extensions/Osage.js":731,"./Script_Extensions/Osmanya.js":732,"./Script_Extensions/Pahawh_Hmong.js":733,"./Script_Extensions/Palmyrene.js":734,"./Script_Extensions/Pau_Cin_Hau.js":735,"./Script_Extensions/Phags_Pa.js":736,"./Script_Extensions/Phoenician.js":737,"./Script_Extensions/Psalter_Pahlavi.js":738,"./Script_Extensions/Rejang.js":739,"./Script_Extensions/Runic.js":740,"./Script_Extensions/Samaritan.js":741,"./Script_Extensions/Saurashtra.js":742,"./Script_Extensions/Sharada.js":743,"./Script_Extensions/Shavian.js":744,"./Script_Extensions/Siddham.js":745,"./Script_Extensions/SignWriting.js":746,"./Script_Extensions/Sinhala.js":747,"./Script_Extensions/Sogdian.js":748,"./Script_Extensions/Sora_Sompeng.js":749,"./Script_Extensions/Soyombo.js":750,"./Script_Extensions/Sundanese.js":751,"./Script_Extensions/Syloti_Nagri.js":752,"./Script_Extensions/Syriac.js":753,"./Script_Extensions/Tagalog.js":754,"./Script_Extensions/Tagbanwa.js":755,"./Script_Extensions/Tai_Le.js":756,"./Script_Extensions/Tai_Tham.js":757,"./Script_Extensions/Tai_Viet.js":758,"./Script_Extensions/Takri.js":759,"./Script_Extensions/Tamil.js":760,"./Script_Extensions/Tangut.js":761,"./Script_Extensions/Telugu.js":762,"./Script_Extensions/Thaana.js":763,"./Script_Extensions/Thai.js":764,"./Script_Extensions/Tibetan.js":765,"./Script_Extensions/Tifinagh.js":766,"./Script_Extensions/Tirhuta.js":767,"./Script_Extensions/Ugaritic.js":768,"./Script_Extensions/Vai.js":769,"./Script_Extensions/Wancho.js":770,"./Script_Extensions/Warang_Citi.js":771,"./Script_Extensions/Yi.js":772,"./Script_Extensions/Zanabazar_Square.js":773,"./index.js":774,"./unicode-version.js":775};function i(e){var t=a(e);return r(t)}function a(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=378},789:function(e,t,r){"use strict";r.r(t);r(26);var n=r(0),i=r.n(n),a=r(120);t.default=function(e){var t=e.location,r=e.pageResources;return r?i.a.createElement(a.a,Object.assign({location:t,pageResources:r},r.json)):null}}}]);
//# sourceMappingURL=2-bae55c8de9a2ba9aeb41.js.map