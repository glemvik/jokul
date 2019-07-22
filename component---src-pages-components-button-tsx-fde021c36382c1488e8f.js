(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{210:function(t,n,e){"use strict";e.r(n);var o=e(0),i=e.n(o),r=e(241),m=e.n(r),c=e(240),a=e(242),u=e(243),s="Knapper starter en handling. De oppfordrer brukeren til å gjøre noe. Teksten på knappen forteller hva som vil skje når brukeren velger den.\n\n## Knappetyper\n\n-   **Primærknapp** – brukes når du vil oppfordre\n    til en hovedhandling på en side.\n-   **Sekundærknapp** – for handlinger som kommer i andre rekke på en side.\n-   **Tertiærknapp** - brukes for handlinger som har begrenset viktighet eller kan føre til uønskede konsekvenser\n\nFor Fremtind designer vi knappene med animasjon etter prinsippet om [elevasjon](#). Det vil si at når brukerne beveger pekeren over eller velger en knapp, vil den bli midlertidig forstørret.\n\n## Eksempler\n\nKnapper brukes til handlinger som\n\n-   Lagre\n-   Slett\n-   Meld skade\n-   Fortsett (i et skjema)\n\nHver side kan ha én eller to primærknapper. Hvis du ønsker at brukeren skal gjøre noe mer, bruk en sekundærknapp.\n\n## Generelle råd\n\nIkke bruk knapper til å navigere. Hvis du vil at brukeren skal gå til en ny side, bruker du en lenke. Unntak: I skjemaer er det naturlig å hjelpe brukeren videre med en Fortsett-knapp.\n",l="# Change Log\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [0.6.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button@0.6.0...@fremtind/jkl-button@0.6.1) (2019-07-18)\n\n**Note:** Version bump only for package @fremtind/jkl-button\n\n\n\n\n\n# [0.6.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button@0.5.0...@fremtind/jkl-button@0.6.0) (2019-07-18)\n\n\n### Bug Fixes\n\n* **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))\n\n\n### Features\n\n* **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))\n\n\n\n\n\n# [0.5.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button@0.3.0...@fremtind/jkl-button@0.5.0) (2019-07-15)\n\n\n### Bug Fixes\n\n* use correct syntax for importing sass index files ([46fa8f6](https://github.com/fremtind/jokul/commit/46fa8f6))\n* **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))\n\n\n\n\n\n# [0.3.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button@0.2.0...@fremtind/jkl-button@0.3.0) (2019-07-15)\n\n\n### Features\n\n* **build:** publish correct files in all packages ([b1fbb8f](https://github.com/fremtind/jokul/commit/b1fbb8f))\n* **core:** flatten structure of core package ([5b2287b](https://github.com/fremtind/jokul/commit/5b2287b))\n\n\n\n\n\n# [0.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button@0.1.0...@fremtind/jkl-button@0.2.0) (2019-07-15)\n\n\n### Bug Fixes\n\n* **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))\n\n\n### Features\n\n* **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))\n\n\n\n\n\n# 0.1.0 (2019-07-15)\n\n\n### Bug Fixes\n\n* **all:** remove css main files ([c9a4ca0](https://github.com/fremtind/jokul/commit/c9a4ca0))\n* **all:** various build and import errors ([8d9a507](https://github.com/fremtind/jokul/commit/8d9a507))\n* **button:** add example README.md ([d9d2f21](https://github.com/fremtind/jokul/commit/d9d2f21))\n* **button:** change hover and active states and remove box shadow ([0216cda](https://github.com/fremtind/jokul/commit/0216cda))\n* **button:** clean up unnecessary code after redesigning button ([41d0e0c](https://github.com/fremtind/jokul/commit/41d0e0c))\n* **button:** correct focus ring ([8fb5415](https://github.com/fremtind/jokul/commit/8fb5415))\n* **button:** fix button-react structure ([c3c249a](https://github.com/fremtind/jokul/commit/c3c249a))\n* **button:** fix inconsistencies in button styles ([9ca5cc7](https://github.com/fremtind/jokul/commit/9ca5cc7))\n* **button:** fix scss import in example ([b506ba9](https://github.com/fremtind/jokul/commit/b506ba9))\n* **button:** remove button.css from commit ([c147286](https://github.com/fremtind/jokul/commit/c147286))\n* **button:** remove React from example ([3d7aecb](https://github.com/fremtind/jokul/commit/3d7aecb))\n* **button:** tweak line-height ([0b2cff1](https://github.com/fremtind/jokul/commit/0b2cff1))\n* **core:** add focus ring to button and remove max width ([6171efe](https://github.com/fremtind/jokul/commit/6171efe))\n* update focus styles to only show on keyboard nav ([b7555a8](https://github.com/fremtind/jokul/commit/b7555a8))\n* **core:** don't import all of core into button ([687f0ab](https://github.com/fremtind/jokul/commit/687f0ab))\n* **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))\n\n\n### Code Refactoring\n\n* flatten structure in all style packages ([dd875e5](https://github.com/fremtind/jokul/commit/dd875e5)), closes [#7](https://github.com/fremtind/jokul/issues/7)\n\n\n### Features\n\n* **portal:** make markdown parser use our components ([61baa27](https://github.com/fremtind/jokul/commit/61baa27))\n\n\n### Performance Improvements\n\n* **build:** use gulp for all style packages ([5699683](https://github.com/fremtind/jokul/commit/5699683))\n\n\n### BREAKING CHANGES\n\n* moves entry point in style packages. any style imports must be updated accordingly\n",d="# Change Log\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [0.5.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@0.5.1...@fremtind/jkl-button-react@0.5.2) (2019-07-18)\n\n**Note:** Version bump only for package @fremtind/jkl-button-react\n\n\n\n\n\n## [0.5.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@0.5.0...@fremtind/jkl-button-react@0.5.1) (2019-07-18)\n\n\n### Bug Fixes\n\n* **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)\n\n\n\n\n\n# [0.5.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@0.2.1...@fremtind/jkl-button-react@0.5.0) (2019-07-15)\n\n**Note:** Version bump only for package @fremtind/jkl-button-react\n\n\n\n\n\n## [0.2.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@0.2.0...@fremtind/jkl-button-react@0.2.1) (2019-07-15)\n\n**Note:** Version bump only for package @fremtind/jkl-button-react\n\n\n\n\n\n# [0.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@0.1.0...@fremtind/jkl-button-react@0.2.0) (2019-07-15)\n\n### Bug Fixes\n\n-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))\n\n### Features\n\n-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))\n\n# 0.1.0 (2019-07-15)\n\n### Bug Fixes\n\n-   remove unneeded attribute ([a8c3619](https://github.com/fremtind/jokul/commit/a8c3619))\n-   **build:** fix deterministic build order ([78566ef](https://github.com/fremtind/jokul/commit/78566ef))\n-   **button:** change classname to be lower case ([66e0c2e](https://github.com/fremtind/jokul/commit/66e0c2e))\n-   **button:** fix button-react structure ([c3c249a](https://github.com/fremtind/jokul/commit/c3c249a))\n-   **button:** fix lint error ([0a34fc8](https://github.com/fremtind/jokul/commit/0a34fc8))\n-   **portal:** remove storybook and old portal ([c69d7fa](https://github.com/fremtind/jokul/commit/c69d7fa))\n-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))\n-   **storybook:** fix style import in storybook ([6f9e4de](https://github.com/fremtind/jokul/commit/6f9e4de))\n-   **typescript:** clean up tsconfig, make sure everything is typechecked ([745a0fb](https://github.com/fremtind/jokul/commit/745a0fb))\n-   **typescript:** remove unnecessary tsconfig ([c594b9e](https://github.com/fremtind/jokul/commit/c594b9e))\n";function b(){return i.a.createElement(c.b,{title:"Knapper",mainExample:i.a.createElement(u.c,null)},i.a.createElement(m.a,{renderers:a.b,source:s}),i.a.createElement(c.a,{changelog:l,changelogReact:d}))}e.d(n,"default",function(){return b})}}]);
//# sourceMappingURL=component---src-pages-components-button-tsx-fde021c36382c1488e8f.js.map