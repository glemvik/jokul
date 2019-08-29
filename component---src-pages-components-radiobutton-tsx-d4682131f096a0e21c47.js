(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{242:function(t,n,e){"use strict";e.r(n);var o=e(0),i=e.n(o),r=e(268),a=e.n(r),m=e(267),d=e(269),c=e(270),l="# [`@fremtind/jkl-radio-button`](https://fremtind.github.io/jokul/components/radiobutton/)\n\nRadioknapper (alternativknapper) lar brukeren velge mellom to eller flere alternativer som utelukker hverandre. Brukeren kan bare velge ett av alternativene. Det er mest vanlig å bruke radioknapper når vi skal gi brukeren to eller tre alternativer, hvis det er flere, bruker vi gjerne en nedtrekksliste.\n\nDet vanligste er at et alternativ er forhåndsvalgt som standard, men Fremtind tillater også at vi har radioknapper som ikke er valgt på forhånd, hvis det er behov for det i en løsning.  \n\nRadioknapper skal ha en god overskrift og en ledetekst til høyre for hvert alternativ. Sørg for at ledeteksten er tydelig, kort og presis. \n### Eksempler\n- Å svare ja eller nei i et skjema\n- Andre spørsmål i skjema der man har så få valg at vi ikke trenger en nedtrekksliste.\n",u="# Change Log\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [0.7.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button@0.7.1...@fremtind/jkl-radio-button@0.7.2) (2019-08-02)\n\n**Note:** Version bump only for package @fremtind/jkl-radio-button\n\n\n\n\n\n## [0.7.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button@0.7.0...@fremtind/jkl-radio-button@0.7.1) (2019-07-31)\n\n**Note:** Version bump only for package @fremtind/jkl-radio-button\n\n\n\n\n\n# [0.7.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button@0.6.1...@fremtind/jkl-radio-button@0.7.0) (2019-07-30)\n\n\n### Bug Fixes\n\n* **radio-button:** refactor structure to match other components ([d66f256](https://github.com/fremtind/jokul/commit/d66f256))\n* **radio-button:** style fieldset and label correctly ([bc806a7](https://github.com/fremtind/jokul/commit/bc806a7))\n\n\n### Features\n\n* **portal:** add components, refactor portal ([7e7d038](https://github.com/fremtind/jokul/commit/7e7d038))\n\n\n\n\n\n## [0.6.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button@0.6.0...@fremtind/jkl-radio-button@0.6.1) (2019-07-18)\n\n**Note:** Version bump only for package @fremtind/jkl-radio-button\n\n\n\n\n\n# [0.6.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button@0.5.0...@fremtind/jkl-radio-button@0.6.0) (2019-07-18)\n\n\n### Bug Fixes\n\n* **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))\n\n\n### Features\n\n* **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))\n\n\n\n\n\n# [0.5.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button@0.3.0...@fremtind/jkl-radio-button@0.5.0) (2019-07-15)\n\n\n### Bug Fixes\n\n* use correct syntax for importing sass index files ([46fa8f6](https://github.com/fremtind/jokul/commit/46fa8f6))\n* **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))\n\n\n\n\n\n# [0.3.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button@0.2.0...@fremtind/jkl-radio-button@0.3.0) (2019-07-15)\n\n\n### Features\n\n* **build:** publish correct files in all packages ([b1fbb8f](https://github.com/fremtind/jokul/commit/b1fbb8f))\n* **core:** flatten structure of core package ([5b2287b](https://github.com/fremtind/jokul/commit/5b2287b))\n\n\n\n\n\n# [0.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button@0.1.0...@fremtind/jkl-radio-button@0.2.0) (2019-07-15)\n\n### Bug Fixes\n\n-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))\n\n### Features\n\n-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))\n\n# 0.1.0 (2019-07-15)\n\n### Bug Fixes\n\n-   **all:** remove css main files ([c9a4ca0](https://github.com/fremtind/jokul/commit/c9a4ca0))\n-   **all:** various build and import errors ([8d9a507](https://github.com/fremtind/jokul/commit/8d9a507))\n-   **build:** fix deterministic build order ([78566ef](https://github.com/fremtind/jokul/commit/78566ef))\n-   update focus styles to only show on keyboard nav ([b7555a8](https://github.com/fremtind/jokul/commit/b7555a8))\n-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))\n-   **radiobutton:** fix import ([f795ca2](https://github.com/fremtind/jokul/commit/f795ca2))\n\n### Code Refactoring\n\n-   flatten structure in all style packages ([dd875e5](https://github.com/fremtind/jokul/commit/dd875e5)), closes [#7](https://github.com/fremtind/jokul/issues/7)\n\n### Performance Improvements\n\n-   **build:** use gulp for all style packages ([5699683](https://github.com/fremtind/jokul/commit/5699683))\n\n### BREAKING CHANGES\n\n-   moves entry point in style packages. any style imports must be updated accordingly\n",s="# Change Log\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n# [0.6.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button-react@0.5.4...@fremtind/jkl-radio-button-react@0.6.0) (2019-08-02)\n\n\n### Bug Fixes\n\n* **radiobutton:** fix radio button screenshot ([1cf87b3](https://github.com/fremtind/jokul/commit/1cf87b3))\n* **test:** change travis order, allow more diff on screenshots ([bb42529](https://github.com/fremtind/jokul/commit/bb42529))\n\n\n### Features\n\n* **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))\n\n\n\n\n\n## [0.5.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button-react@0.5.3...@fremtind/jkl-radio-button-react@0.5.4) (2019-07-31)\n\n**Note:** Version bump only for package @fremtind/jkl-radio-button-react\n\n\n\n\n\n## [0.5.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button-react@0.5.2...@fremtind/jkl-radio-button-react@0.5.3) (2019-07-30)\n\n\n### Bug Fixes\n\n* **radio-button:** refactor structure to match other components ([d66f256](https://github.com/fremtind/jokul/commit/d66f256))\n\n\n\n\n\n## [0.5.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button-react@0.5.1...@fremtind/jkl-radio-button-react@0.5.2) (2019-07-18)\n\n**Note:** Version bump only for package @fremtind/jkl-radio-button-react\n\n\n\n\n\n## [0.5.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button-react@0.5.0...@fremtind/jkl-radio-button-react@0.5.1) (2019-07-18)\n\n\n### Bug Fixes\n\n* **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)\n\n\n\n\n\n# [0.5.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button-react@0.2.1...@fremtind/jkl-radio-button-react@0.5.0) (2019-07-15)\n\n**Note:** Version bump only for package @fremtind/jkl-radio-button-react\n\n\n\n\n\n## [0.2.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button-react@0.2.0...@fremtind/jkl-radio-button-react@0.2.1) (2019-07-15)\n\n**Note:** Version bump only for package @fremtind/jkl-radio-button-react\n\n\n\n\n\n# [0.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button-react@0.1.0...@fremtind/jkl-radio-button-react@0.2.0) (2019-07-15)\n\n### Bug Fixes\n\n-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))\n\n### Features\n\n-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))\n\n# 0.1.0 (2019-07-15)\n\n### Bug Fixes\n\n-   **all:** css imports in other examples ([c4a40a2](https://github.com/fremtind/jokul/commit/c4a40a2))\n-   **build:** fix deterministic build order ([78566ef](https://github.com/fremtind/jokul/commit/78566ef))\n-   **portal:** remove storybook and old portal ([c69d7fa](https://github.com/fremtind/jokul/commit/c69d7fa))\n-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))\n-   **typescript:** clean up tsconfig, make sure everything is typechecked ([745a0fb](https://github.com/fremtind/jokul/commit/745a0fb))\n-   **typescript:** remove unnecessary tsconfig ([c594b9e](https://github.com/fremtind/jokul/commit/c594b9e))\n\n### Features\n\n-   **storybook:** add textfield and radio story ([f8044c1](https://github.com/fremtind/jokul/commit/f8044c1)), closes [#4](https://github.com/fremtind/jokul/issues/4)\n";function b(){return i.a.createElement(m.b,{title:"Radioknapp",mainExample:i.a.createElement(c.n,null),packageName:"radio-button"},i.a.createElement(a.a,{renderers:d.b,source:l}),i.a.createElement(m.a,{changelog:u,changelogReact:s}))}e.d(n,"default",function(){return b})}}]);
//# sourceMappingURL=component---src-pages-components-radiobutton-tsx-d4682131f096a0e21c47.js.map