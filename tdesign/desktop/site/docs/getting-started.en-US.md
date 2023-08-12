---
title: Omi for Web
description: TDesign Omi is a UI component library for desktop application.
---

## Installation

### npm

```shell
npm i tdesign-omi
```

### unpkg

```html
<!-- omi -->
<script src="https://unpkg.com/omi"></script>
<link rel="stylesheet" href="https://unpkg.com/tdesign-omi/dist/tdesign.min.css" />
<script src="https://unpkg.com/tdesign-omi/dist/tdesign.min.js"></script>
...
<script>
  // todo
</script>
```

The package of tdesign-omi provides kinds of bundles, read [the documentation](https://github.com/Tencent/tdesign/blob/main/docs/develop-install.md) for the detail of differences between bundles.

## Usage

TDesign provides three ways to use components

### Basic Usage

Basic usage will register all components in full. If your project uses components on a large scale, feel free to use tdesign-omi in this way.

```js
import TDesign from 'tdesign-omi';

// import global design variables
import 'tdesign-omi/es/style/index.css';

document.innerHTML = '<t-button>Hello Omi!</t-button>';
```

### Import on-demand

If you have strict requirements for the size of the bundle, you can use tdesign-omi in this way.

With the help of building tools such as `Webpack` or `Rollup` that support tree-shaking features, you can achieve the effect of importing on demand.

```js
import { Button } from 'tdesign-omi';

// import global design variables
import 'tdesign-omi/es/style/index.css';

document.innerHTML = '<t-button>Hello Omi!</t-button>'
```

### Import on-demand with Plugin

You can also use `unplugin-omi-components` and `unplugin-auto-import` to achieve automatic on-demand import.

```js
import { createApp } from 'omi';
// import global design variables
import 'tdesign-omi/es/style/index.css';

const app = createApp(App);
```

install `unplugin-omi-components` and `unplugin-auto-import`

```bash
npm install -D unplugin-omi-components unplugin-auto-import
```

Then, add the above plugins to the corresponding configuration files of Webpack or Vite.

#### Vite

```js
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-omi-components/vite';
import { TDesignResolver } from 'unplugin-omi-components/resolvers';
export default {
  plugins: [
    // ...
    AutoImport({
      resolvers: [
        TDesignResolver({
          library: 'omi',
        }),
      ],
    }),
    Components({
      resolvers: [
        TDesignResolver({
          library: 'omi',
        }),
      ],
    }),
  ],
};
```

#### Webpack

```js
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-omi-components/webpack');
const { TDesignResolver } = require('unplugin-omi-components/resolvers');
module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [
        TDesignResolver({
          library: 'omi',
        }),
      ],
    }),
    Components({
      resolvers: [
        TDesignResolver({
          library: 'omi',
        }),
      ],
    }),
  ],
};
```

> You can click on this [link](https://github.com/antfu/unplugin-omi-components/blob/main/src/core/resolvers/tdesign.ts#L4) for the configuration supported by `TDesignResolver`.


## Editor Prompts

After installing and registering TDesign, it can be used with plugins in editors such as VSCode to achieve the effect of prompting component names and APIs during development.

Plugin `volar` is recommended, after installing `volar`, please add `node_modules/tdesign-omi/global.d.ts` to the `includes` property in the project's `tsconfig.json file`.

## Starter Kit

Visit [TDesign Starter](https://tdesign.tencent.com/starter/omi/) to experience the system built with tdesign-omi UI Components.

## Browser Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge >=91                                                                                                                                                                                                        | Firefox >=83                                                                                                                                                                                                      | Chrome >=91                                                                                                                                                                                                   | Safari >=14.1                                                                                                                                                                                                 |

Read our [browser compatibility](https://github.com/Tencent/tdesign/wiki/Browser-Compatibility) for more details.

## FAQ

Q: Does TDesign have a built-in reset style for unifying the default styles of page elements?

A: Since version `0.17.0`, tdesign-omi no longer imports `reset.less`. The biggest impact is the removal of the global box model setting

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

If your project development depends on the `reset` style, you can import it from the `dist` directory.

```js
import 'tdesign-omi/dist/reset.css';
```
