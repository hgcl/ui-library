# UI Library

The UI library of Life Under Control. It is built for Next.js — with Storybook, React, Typescript, and Rollup. Package published on NPM as [@hgcle/ui-library](https://www.npmjs.com/package/@hgcle/ui-library).

## Publish the library

Make sure all new components are exported in `src/index.ts`. Update the package version number in `package.json`.

```
npm i
npm build
npm publish --access public
```

## Commit conventions

_Source: [Conventional commits](https://www.conventionalcommits.org/)_

```
<type>[optional scope]: <description>

<optional body>

<optional footer>
```

- `feat` – a new feature is introduced with the changes
- `fix` – a bug fix has occurred
- `chore` – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
- `refactor` – refactored code that neither fixes a bug nor adds a feature
- `docs` – updates to documentation such as the README or other markdown files
- `style` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semicolons, and so on.
- `test` – including new or correcting previous tests
- `perf` – performance improvements
- `ci` – continuous integration related
- `build` – changes that affect the build system or external dependencies
- `revert` – reverts a previous commit
- `content` – content-related commits

Commit example:

```
fix: fix foo to enable bar

This fixes the broken behavior of the component by doing xyz.

BREAKING CHANGE
Before this fix foo wasn't enabled at all, behavior changes from <old> to <new>

Closes D2IQ-12345
```
