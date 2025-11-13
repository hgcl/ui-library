# UI Library

The UI library of Life Under Control. It is built for Next.js — with Storybook, React, Typescript, and Rollup. Package published on NPM as [@hgcle/ui-library](https://www.npmjs.com/package/@hgcle/ui-library).

### BEM methodology

This UI library is built based on the [BEM (Block, Element, Modifier) methodology](https://en.bem.info/methodology/quick-start/).

- **Block**: A functionally independent page component that can be reused. A block is created if a section of code might be reused, and it doesn't depend on other page components being implemented.
- **Element**: A composite part of a block that can't be used separately from it. An element is created if a section of code can't be used separately without the parent entity (the block).
- **Modifier**: An entity that defines the appearance (`sizeM`), state (`disabled`), or behavior (`leftTop`) of a block or element.

In HTML, this BEM structure is represented by the `class` attribute. The structure of an element's full name is `BlockName__elementName`. The element name is separated from the block name with a double underscore (`__`). The modifier name is used in a separate `class`.

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

## Publish the library

Make sure all new components are exported in `src/index.ts`. Update the package version number in `package.json`.

```
npm i
npm build
npm publish --access public
```
