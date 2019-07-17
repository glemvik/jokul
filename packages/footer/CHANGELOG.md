# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.5.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-footer@0.3.0...@fremtind/jkl-footer@0.5.0) (2019-07-15)


### Bug Fixes

* use correct syntax for importing sass index files ([46fa8f6](https://github.com/fremtind/jokul/commit/46fa8f6))
* **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))





# [0.3.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-footer@0.2.0...@fremtind/jkl-footer@0.3.0) (2019-07-15)


### Features

* **build:** publish correct files in all packages ([b1fbb8f](https://github.com/fremtind/jokul/commit/b1fbb8f))
* **core:** flatten structure of core package ([5b2287b](https://github.com/fremtind/jokul/commit/5b2287b))





# [0.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-footer@0.1.0...@fremtind/jkl-footer@0.2.0) (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

# 0.1.0 (2019-07-15)

### Bug Fixes

-   **all:** css imports in other examples ([c4a40a2](https://github.com/fremtind/jokul/commit/c4a40a2))
-   **all:** remove css main files ([c9a4ca0](https://github.com/fremtind/jokul/commit/c9a4ca0))
-   **all:** various build and import errors ([8d9a507](https://github.com/fremtind/jokul/commit/8d9a507))
-   **build:** fix deterministic build order ([78566ef](https://github.com/fremtind/jokul/commit/78566ef))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))
-   **typescript:** clean up tsconfig, make sure everything is typechecked ([745a0fb](https://github.com/fremtind/jokul/commit/745a0fb))

### Code Refactoring

-   flatten structure in all style packages ([dd875e5](https://github.com/fremtind/jokul/commit/dd875e5)), closes [#7](https://github.com/fremtind/jokul/issues/7)

### Performance Improvements

-   **build:** use gulp for all style packages ([5699683](https://github.com/fremtind/jokul/commit/5699683))

### BREAKING CHANGES

-   moves entry point in style packages. any style imports must be updated accordingly