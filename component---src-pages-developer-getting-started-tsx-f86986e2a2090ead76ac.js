(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{255:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t.n(i),o=t(270),a=t.n(o),l=t(269),c=t(271);e.default=function(){return r.a.createElement(l.d,null,r.a.createElement(a.a,{renderers:c.b,source:'## Komme i gang\n\nDu kan bruke Jøkul på to måter, med rene stilark eller med React-komponenter. Alle CSS-stilark finnes i både vanlig og minifisert utgave. Vi anbefaler å bruke den minifiserte.\n\n### Komme i gang med React-komponenter\n\nHvis du vil ta i bruk en Jøkul React-komponent, trenger du å laste inn både stilen og komponenten. Hvis du har satt opp en CSS loader i pakkesystemet, kan du kan laste ned stilen direkte i React. Du kan også velge å legge den inn i en av dine `.less`- eller `.scss`-filer.\n\n> For å normalisere stilen og få tilgang til rotstilen, laster du inn `core.min.css` fra `@fremtind/jkl-core`. Det trenger du bare å gjøre en gang.\n\n### Installere avhengigheter\n\n`npm i @fremtind/jkl-accordion @fremtind/jkl-accordion-react`\n\n### Ta i bruk komponenten\n\n```\nimport "@fremtind/jkl-accordion/accordion.min.css";\nimport { Accordion, AccordionItem } from "@fremtind/jkl-accordion";\n\nconst Component = () => (\n    <Accordion>\n        <AccordionItem title="Tittel 1">Innhold i første</AccordionItem>\n        <AccordionItem title="Tittel 2">Innhold i andre</AccordionItem>\n    </Accordion>\n);\n```\n'}))}}}]);
//# sourceMappingURL=component---src-pages-developer-getting-started-tsx-f86986e2a2090ead76ac.js.map