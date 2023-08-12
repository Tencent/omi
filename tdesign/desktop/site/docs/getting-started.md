---
title: Omi for Web
description: TDesign 适配桌面端的组件库，适合在任意技术栈项目中使用。
---

## 安装

### 使用 npm 安装

推荐使用 npm 方式进行开发

```shell
npm i tdesign-omi
```

### 通过 浏览器引入 安装

目前可以通过 [unpkg.com/tdesign-omi](https://unpkg.com/tdesign-omi) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- omi -->
<script src="https://unpkg.com/omi@next"></script>
<link rel="stylesheet" href="https://unpkg.com/tdesign-omi/dist/tdesign.min.css" />
<script src="https://unpkg.com/tdesign-omi/dist/tdesign.min.js"></script>
...
<script>
	Omi.createApp({}).use(TDesign).mount('#app');
</script>
```

npm package 中提供了多种构建产物，可以阅读 [这里](https://github.com/Tencent/tdesign/blob/main/docs/develop-install.md) 了解不同目录下产物的差别。

## 使用

TDesign 提供了三种方式使用组件，具体使用方式如下
### 基础使用

基础使用会全量注册所有组件，如果您的项目大规模使用组件，请放心使用这种方式。

```js
import TDesign from 'tdesign-omi';

// 引入组件库的少量全局样式变量
import 'tdesign-omi/es/style/index.css';

document.innerHTML = '<t-button>Hello Omi!</t-button>';
```

### 按需引入使用

如果您对产物大小有严格的要求，可以通过 按需引入具体组件 的方式来使用。

借助 Webpack 或 Rollup 等支持 tree-shaking 特性的构建工具，可以达到按需引入的使用效果。

```js
import { Button } from 'tdesign-omi';
import App from './app.omi';

// 引入组件库的少量全局样式变量
import 'tdesign-omi/es/style/index.css';

document.innerHTML = '<t-button>Hello Omi!</t-button>';
```

### 通过插件按需引用使用

除此之外，也可以使用 `unplugin-omi-components` 和 `unplugin-auto-import` 来实现自动导入：

您仍需在项目引入组件库的少量全局样式变量
```js
import { createApp } from 'omi';
// 引入组件库的少量全局样式变量
import 'tdesign-omi/es/style/index.css';

const app = createApp(App);
```
并安装两个unplugin相关的第三方包
```bash
npm install -D unplugin-omi-components unplugin-auto-import
```

然后在 Webpack 或 Vite 对应的配置文件添加上述插件。

#### Vite

```js
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-omi-components/vite';
import { TDesignResolver } from 'unplugin-omi-components/resolvers';
export default {
  plugins: [
    // ...
    AutoImport({
      resolvers: [TDesignResolver({
        library: 'omi'
      })],
    }),
    Components({
      resolvers: [TDesignResolver({
        library: 'omi'
      })],
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
      resolvers: [TDesignResolver({
        library: 'omi'
      })],
    }),
    Components({
      resolvers: [TDesignResolver({
        library: 'omi'
      })],
    }),
  ],
};
```

> `TDesignResolver` 支持的配置，可以点击此[链接](https://github.com/antfu/unplugin-omi-components/blob/main/src/core/resolvers/tdesign.ts#L4)。



## 编辑器提示

安装注册 TDesign 之后，在开发项目时，可以配合插件在VSCode等主流编辑器中达到提示组件名及API的效果。

推荐安装 `volar`，并在项目的 tsconfig.json 的 `includes` 属性中增加`node_modules/tdesign-omi/global.d.ts`，即可实现该效果。

## 快速体验

可以访问官方提供的 [tdesign-starter](https://tdesign.tencent.com/starter/omi/) 项目体验使用 TDesign 组件快速搭建业务系统。

## 浏览器兼容性

| [<img src="https://tdesign.gtimg.com/docs/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> IE / Edge | [<img src="https://tdesign.gtimg.com/docs/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://tdesign.gtimg.com/docs/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://tdesign.gtimg.com/docs/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari |
| --- | --- | --- | --- |
| Edge >=84 | Firefox >=83 | Chrome >=84 | Safari >=14.1 |


详情参见[桌面端组件库浏览器兼容性说明](https://github.com/Tencent/tdesign/wiki/%E6%A1%8C%E9%9D%A2%E7%AB%AF%E7%BB%84%E4%BB%B6%E5%BA%93%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7%E8%AF%B4%E6%98%8E)

## FAQ

Q: 是否内置reset样式统一页面元素的默认样式 ？

A: `0.17.0` 版本开始我们不再引入 `reset.less`，影响最大的是移除了原先全局盒子模型的设定：

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

如果你的项目开发依赖于原先的 `reset` 样式，可以从 `dist` 目录中单独引入它：

```js
import 'tdesign-omi/dist/reset.css';
```
