<div align="center">

  <img src="./icon.png" width="256" height="256" alt="Indentier">

# @indentier/plugin-jsx

</div>

[![npm version](https://img.shields.io/npm/v/@indentier/plugin-jsx.svg?color=cb3837&logo=npm)](https://www.npmjs.com/package/@indentier/plugin-jsx)
[![CI](https://github.com/indentier/plugin-jsx/actions/workflows/ci.yml/badge.svg)](https://github.com/indentier/plugin-jsx/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

> JSX / TSX support for [Indentier](https://github.com/indentier/indentier).

Full documentation: **[indentier.github.io](https://indentier.github.io)**

## Install

```sh
npm i -D indentier @indentier/plugin-jsx
```

## Setup

```jsonc
// .indentierrc.json
{
  "plugins": ["@indentier/plugin-jsx"]
}
```

<!-- prettier-ignore -->
| | |
|-|-|
| Language | JSX / TSX |
| Extensions | `.jsx` `.tsx` |
| Ruby mode | Yes — injects `let end=null;`; end statement: `end` |

## License

[MIT](./LICENSE) © otoneko.
