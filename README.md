English | [简体中文](./README.CN.md) | [한국어](./README.KR.md)

<p align="right">Omi <strong>v6.0.6</strong></p>
<p align="right">Omio <strong>v2.1.2</strong></p>
<p align="center"><img src="./assets/omi-logo2019.svg" alt="omi" width="300"/></p>
<h2 align="center">Omi - Next front end framework using web components with omio(IE8+) and omip(小程序) fallback in tiny js.</h2>

## Ecosystem of Omi

#### Base

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-docs](https://tencent.github.io/omi/site/docs/index.html)| Omi official documents |
| [omio![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omio)| Omi for old browsers with same api(IE8+ and mobile browsers).|
| [omis![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omis)| Server-side rendering(support omio only). |
| [omi-router](https://github.com/Tencent/omi/tree/master/packages/omi-router) |Omi official router in 1KB js. [→ DEMO](https://tencent.github.io/omi/packages/omi-router/examples/spa/build/) |
| [omi-cli](https://github.com/Tencent/omi/tree/master/packages/omi-cli)| Project scaffolding |
| [omi-devtools](https://github.com/f/omi-devtools)| Browser DevTools extension |
| [omiu](https://tencent.github.io/omi/packages/omiu/examples/build/index.html)| Omi official UI|

#### Mini Program

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-cloud![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omi-cloud)| 小程序•云开发|
| [omip![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omip)| 直接使用 Omi 开发小程序或 H5 SPA|
| [mps![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/mps)| 原生小程序增强框架(JSX + Less 输出 WXML + WXSS)，也支持 QQ 轻应用 |
| [cax![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png)](https://github.com/Tencent/omi/tree/master/packages/cax)| 小程序 Canvas 和 SVG 渲染引擎 |
| [omix](https://github.com/Tencent/omi/tree/master/packages/omix)| 极小却精巧的小程序框架|
| [omi-mp](https://github.com/Tencent/omi/tree/master/packages/omi-mp)| 通过微信小程序开发和生成 Web 单页应用(H5 SPA)|
| [comi](https://github.com/Tencent/omi/tree/master/packages/comi)| 小程序代码高亮和 markdown 渲染组件 |
| [wx-touch-event](https://github.com/qbright/wx-touch-event)| 基于 AlloyFinger/omi-finger 改造的小程序手势解决方案 |

#### Other

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-chart](https://github.com/Tencent/omi/tree/master/packages/omi-chart)| Simple HTML5 Charts using chart-x tag.|
| [md2site](https://tencent.github.io/omi/assets/md2site/)| Static Site Generator with markdown powered by Omio.|
| [omi-mvvm](https://github.com/Tencent/omi/blob/master/tutorial/omi-mvvm.md)| MVVM comes back bravely with [mappingjs](https://github.com/Tencent/omi/tree/master/packages/mappingjs) strong support.|
| [omi-html](https://github.com/Tencent/omi/tree/master/packages/omi-html)| Using [htm](https://github.com/developit/htm) in omi.|
| [omi-30-seconds](https://github.com/Tencent/omi/tree/master/packages/omi-30-seconds)| Useful Omi snippets that you can understand in 30 seconds.|
| [omi-canvas](https://github.com/Tencent/omi/tree/master/packages/omi-canvas)| Perfect fusion of web components, jsx and canvas.|
| [omi-swiper](https://github.com/loo41/Omi-Swiper)| Omi + Swiper  |
| [omi-vscode](https://github.com/ZainChen/omi-vscode)| Vscode extension for omi, [Install now!](https://marketplace.visualstudio.com/items?itemName=ZainChen.omi) |
| [omi-ex](https://github.com/Tencent/omi/tree/master/packages/omi-ex)| Omi.js extension(TypeScript) |
| [omi-transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)|Omi / [css3transform](https://tencent.github.io/omi/packages/omi-transform/css3transform/) integration. Made css3 transform super easy in your Omi project.|
| [omi-tap](https://github.com/Tencent/omi/releases/tag/v4.0.24)| Native tap event support(omi v4.0.24+）|
| [omi-finger](https://github.com/Tencent/omi/tree/master/packages/omi-finger)|Support touch and gesture events in your Omi project.|
| [omi-touch](https://github.com/Tencent/omi/tree/master/packages/omi-touch)|Smooth scrolling, rotation, pull to refresh and any motion for the web.|
| [omi-native](https://github.com/Tencent/omi/tree/master/packages/omi-native)|Render web components to native|
|[omi-i18n](https://github.com/i18next/omi-i18n)| Internationalization solution for omi.js using i18next ecosystem |
| [omi-page](https://github.com/Tencent/omi/tree/master/packages/omi-page) |Tiny client-side router by [page](https://github.com/visionmedia/page.js)|

## Why Omi?

- One framework. Mobile & desktop & mini program.
- Tiny size
- Supports TypeScript
- Reactive data-binding
- Having official UI components - [omiu](https://tencent.github.io/omi/packages/omiu/examples/build/index.html)
- Excellent compatibility(IE8+) with [omio](https://github.com/Tencent/omi/tree/master/packages/omio)
- Real [MVVM](https://github.com/Tencent/omi/blob/master/tutorial/omi-mvvm.md) with [mappingjs](https://github.com/Tencent/omi/tree/master/packages/mappingjs) strong support
- Enhanced CSS, [rpx unit support](https://github.com/Tencent/omi/releases/tag/v4.0.26) base on **750** screen width
- Compliance with browser trend and API design
- Merge [**Web Components**](https://developers.google.com/web/fundamentals/web-components/) and [**JSX**](https://reactjs.org/docs/introducing-jsx.html)  into one framework
- Web Components can also be a data-driven view, **`UI = fn(data)`**.
- JSX is the best development experience (code intelligent completion and tip) UI Expression with least [grammatical noise](https://github.com/facebook/jsx#why-not-template-literals) and it's turing complete(template engine is not, es template string is but grammatical noise is too loud)
- Look at [Facebook React vs Web Components](https://softwareengineering.stackexchange.com/questions/225400/pros-and-cons-of-facebooks-react-vs-web-components-polymer)，Omi **combines their advantages** and gives developers the **freedom to choose the way they like**
- **Shadow DOM merges with Virtual DOM**, Omi uses both virtual DOM and real Shadow DOM to make view updates more accurate and faster
- **Scoped CSS**'s best solution is [**Shadow DOM**](https://developers.google.com/web/fundamentals/web-components/shadowdom), the community churning out frameworks and libraries for Scoped CSS (using JS or JSON writing styles such as Radium, jsxstyle, react-style; binding to webpack using generated unique `className` `filename-classname-hash`, such as CSS Modules, Vue), are hack technologies; _and Shadow DOM Style is the perfect solution_.
- The original **Path Updating** **store system**. Proxy-based automatic **accurate** update, **low power consumption**, high degree of freedom, excellent performance, easy integration of `requestIdleCallback`,It will automatically update UI partially when data is changed

Compare TodoApp by Omi and React, Omi and React rendering DOM structure:

| **Omi**                         | **React**                           |
| ------------------------------- | ----------------------------------- |
| ![Omi](./assets/omi-render.jpg) | ![React](./assets/react-render.jpg) |

Omi uses Shadow DOM based style isolation and semantic structure.

## Useful Resources

| **Title Name**  | **Other language** | **Related**|
| ----------------------------------------- | ------------------ |-----------------|
|[Styling We Components Using A Shared Style Sheet](https://www.smashingmagazine.com/2016/12/styling-web-components-using-a-shared-style-sheet/)|
|[Developer Tools support for Web Components in Firefox 63](https://blog.nightly.mozilla.org/2018/09/06/developer-tools-support-for-web-components-in-firefox-63/)||
|[Develop W3C Web Components with WebAssembly](https://medium.com/coinmonks/develop-w3c-web-components-with-webassembly-d65938284255)||
| [60FPS Animation In Omi](https://github.com/Tencent/omi/blob/master/tutorial/omi-transform.md)| [简体中文](https://github.com/Tencent/omi/blob/master/tutorial/omi-transform.cn.md) [한국어](https://github.com/Tencent/omi/blob/master/tutorial/omi-transform.kr.md)|
| [Render Web Components To Native](https://github.com/Tencent/omi/blob/master/tutorial/render-web-components-to-native.md)|[简体中文](https://github.com/Tencent/omi/blob/master/tutorial/render-web-components-to-native.cn.md) [한국어](https://github.com/Tencent/omi/blob/master/tutorial/render-web-components-to-native.kr.md)|
| [Shadow Dom In Depth](https://github.com/praveenpuglia/shadow-dom-in-depth)|  [简体中文](https://github.com/Tencent/omi/blob/master/tutorial/shadow-dom-in-depth.cn.md)|
|  [Part Theme Explainer](https://meowni.ca/posts/part-theme-explainer/)|求翻译|
|  [Web Components MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)| [简体中文](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)|
|  [Web Components Google](https://developers.google.com/web/fundamentals/web-components/)|
|  [Web Components Org](https://www.webcomponents.org/introduction)|
|  [Web Components: the Right Way](https://github.com/mateusortiz/webcomponents-the-right-way)|
|  [Proxy MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)|[简体中文](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) [한국어](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy)|
|  [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)|[简体中文](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_variables) [한국어](https://developer.mozilla.org/ko-KR/docs/Web/CSS/Using_CSS_variables)|
|  [CSS Shadow Parts](https://drafts.csswg.org/css-shadow-parts-1/)|
|  [Platform HTML5](https://platform.html5.org/)|
| [Using requestIdleCallback](https://developers.google.com/web/updates/2015/08/using-requestidlecallback)|[简体中文](https://div.io/topic/1370)| [A polyfill](https://gist.github.com/paullewis/55efe5d6f05434a96c36)|
| [The Power Of Web Components](https://hacks.mozilla.org/2018/11/the-power-of-web-components/)|[简体中文](https://github.com/Tencent/omi/blob/master/tutorial/the-power-of-web-components.cn.md)|
|[ShadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot)|[简体中文](https://developer.mozilla.org/zh-CN/docs/Web/API/ShadowRoot)||

# Overview of the Readme

- [Ecosystem of Omi](#ecosystem-of-omi)
- [Useful Resources](#useful-resources)
- [Add Omi in One Minute](#add-omi-in-one-minute)
- [Add Omi in 30 Seconds](#add-omi-in-30-seconds)
- [Getting Started](#getting-started)
  - [Install](#install)
  - [Project Template](#project-template)
  - [Hello Element](#hello-element)
  - [TodoApp](#todoapp)
  - [Store](#store)
  - [Lifecycle](#lifecycle)
- [Debugging](#debugging)
- [Browsers Support](#browsers-support)
- [Contributors](#contributors)
- [Maintainers](#maintainers)
- [Thanks](#thanks)
- [License](#license)

## Add Omi in One Minute

This page demonstrates using Omi **with no build tooling**.

- [Online Demo!](https://tencent.github.io/omi/assets/)
- [Omi.js CDN](https://unpkg.com/omi)

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>Add Omi in One Minute</title>
</head>

<body>
  <script src="https://unpkg.com/omi"></script>
  <script>
    const { WeElement, h, render, define } = Omi

    define('like-button', class extends WeElement {
        install() {
          this.data = { liked: false }
        }

        render() {
          if (this.data.liked) {
            return 'You liked this.'
          }

          return h(
            'button',
            {
              onClick: () => {
                this.data.liked = true
                this.update()
              }
            },
            'Like'
          )
        }
      })

    render(h('like-button'), 'body')
  </script>
</body>

</html>
```

You can also use `like-button` tag directly in HTML：

```jsx
<body>
  <like-button />
</body>
```

### Add Omi in 30 Seconds

You can also quickly build omi projects using modern JS code:
<!-- 
```js
import { render, WeElement, tag, observe } from "omi"

@observe
@tag("my-counter")
class MyCounter extends WeElement {

  data = {
    count: 0
  }

  sub = () => {
    this.data.count--
  }

  add = () => {
    this.data.count++
  }

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.data.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

render(<my-counter />, "body")
``` -->
<!-- 
You will find that the `MyCounter` class name defined above is never used. So you can also use the following way to avoid Eslint hints: -->

```js
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
    static observe = true
    
    data = {
      count: 1
    }

    static css = `
      span{
          color: red;
      }`

    sub = () => {
      this.data.count--
    }

    add = () => {
      this.data.count++
    }

    render() {
      return (
        <div>
          <button onClick={this.sub}>-</button>
          <span>{this.data.count}</span>
          <button onClick={this.add}>+</button>
        </div>
      )
    }
  })

render(<my-counter />, 'body')
```

You can also update the view manually then you can choose the best time to update.

```js
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
  data = {
    count: 1
  }

  static css = `
    span{
        color: red;
    }`

  sub = () => {
    this.data.count--
    this.update()
  }

  add = () => {
    this.data.count++
    this.update()
  }

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.data.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')
```


[→ counter demo](https://tencent.github.io/omi/packages/omi/examples/counter/)

<!-- You can also be defined as a form of pure functions:

```js
import { define, render } from 'omi'

define('my-counter', function() {
  const [count, setCount] = this.use({
    data: 0,
    effect: function() {
      document.title = `The num is ${this.data}.`
    }
  })

  this.useCss(`button{ color: red; }`)

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
})

render(<my-counter />, 'body')
```

If you don't need effect, you can use `useData` directly:

```js
const [count, setCount] = this.useData(0)
``` -->

## Getting Started

### Install

```bash
$ npm i omi-cli -g               # install cli
$ omi init my-app     # init project, you can also exec 'omi init' in an empty folder
$ cd my-app           # please ignore this command if you executed 'omi init' in an empty folder
$ npm start                      # develop
$ npm run build                  # release
```

> `npx omi-cli init my-app` is also supported(npm v5.2.0+).

Directory description:

```
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ elements    //Store all custom elements
│  ├─ store       //Store all this store of pages
│  ├─ admin.js    //Entry js of compiler，will build to admin.html
│  └─ index.js    //Entry js of compiler，will build to index.html
```

#### Scripts

```json
"scripts": {
    "start": "node scripts/start.js",
    "build": "PUBLIC_URL=. node scripts/build.js",
    "build-windows": "set PUBLIC_URL=.&& node scripts/build.js",
    "fix": "eslint src --fix"
}
```

You can set up the PUBLIC_URL, such as：

```json
...
"build": "PUBLIC_URL=https://fe.wxpay.oa.com/dv node scripts/build.js",
"build-windows": "set PUBLIC_URL=https://fe.wxpay.oa.com/dv&& node scripts/build.js",
...
```

#### Switch omi and omio

Add or remove the alias config in package.json to switch omi and omio：

```js
 ...
 "alias": {
    "omi": "omio"
  }
  ...
```
    
<!-- About compiled website URL：

* [build env doc](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables#referencing-environment-variables-in-the-html)
* [build problem](https://stackoverflow.com/questions/42686149/create-react-app-build-with-public-url)

Such as in windows:

```json
"scripts": {
  "start": "node scripts/start.js",
  "_build": "node scripts/build.js",
  "build":"set PUBLIC_URL=https://fe.wxpay.oa.com/dv&& npm run _build"
}
```

In mac os:

```json
"scripts": {
    "start": "node scripts/start.js",
    "_build": "node scripts/build.js",
    "build":"PUBLIC_URL=https://fe.wxpay.oa.com/dv npm run _build",
    "fix": "eslint src --fix"
  },
```

If you only want to use relative addresses:

```
"build":"set PUBLIC_URL=.&& npm run _build"  //windows
"build":"PUBLIC_URL=. npm run _build",       //mac os
``` -->

### Project Template

| **Template Type**|  **Command**|  **Describe**|
| ------------ |  -----------|  ----------------- |
|Base Template(v3.3.0+)|`omi init my-app`| Basic omi or omio(IE8+) project template.|
|Base Template with snapshoot|`omi init-snap my-app`| Basic omi or omio(IE8+) project template with snapshoot prerendering.|
|TypeScript Template(omi-cli v3.3.0+)|`omi init-ts my-app`|Basic template with typescript.|
|Mobile Template|`omi init-weui my-app`| Mobile web app template with weui and omi-router.|
|omi-mp Template(omi-cli v3.0.13+)|`omi init-mp my-app`  |Developing web with mini program template.|
|MVVM Template(omi-cli v3.0.22+)|`omi init-mvvm my-app`  |MVVM template.|
<!-- |[SPA Template](https://tencent.github.io/omi/packages/omi-router/examples/spa/build/)(omi-cli v3.0.10+)|`omi init-spa my-app`|Single page application template with omi-router.| -->

The base Template(`omi init my-app`) is based on a single-page create-react-app to be converted into a multi-page one, with configuration issues to see [create-react-app user guide](https://facebook.github.io/create-react-app/docs/getting-started)

### Hello Element

Define a custom element by extending **`WeElement`** base class:

```js
import { define, WeElement } from 'omi'

define('hello-element', class extends WeElement {
  onClick = evt => {
    // trigger CustomEvent
    this.fire('abc', { name: 'dntzhang', age: 12 })
    evt.stopPropagation()
  }

 static css = `
      div {
        color: red;
        cursor: pointer;
      }`

  render(props) {
    return (
      <div onClick={this.onClick}>
        Hello {props.msg} {props.propFromParent}
        <div>Click Me!</div>
      </div>
    )
  }
})
```

Using `hello-element`:

```js
import { define, render, WeElement } from 'omi'
import './hello-element'

define('my-app', class extends WeElement {
  data = { abc: 'abc', passToChild: 123 }

  // define CustomEvent Handler
  onAbc = evt => {
    // get evt data by evt.detail
    this.data.abc = ' by ' + evt.detail.name
    this.data.passToChild = 1234
    this.update()
  }

  css = `
      div{
          color: green;
      }`
  }

  render(props, data) {
    return (
      <div>
        Hello {props.name} {data.abc}
        <hello-element
          onAbc={this.onAbc}
          propFromParent={data.passToChild}
          msg="WeElement"
        />
      </div>
    )
  }
})

render(<my-app name="Omi v4.0" />, 'body')
```

Tell Babel to transform JSX into `Omi.h()` call:

```json
{
  "presets": ["env", "omi"]
}
```

The following two NPM packages need to be installed to support the above configuration:

```bash
"babel-preset-env": "^1.6.0",
"babel-preset-omi": "^0.1.1",
```

If you use babel7, you can also use the following packages and configuration:

```bash
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/preset-react
```

```js
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "pragma": "Omi.h"
      }
    ]
  ]
}
```

If you don't want to write CSS in JS, you can use [to-string-loader](https://www.npmjs.com/package/to-string-loader) of webpack,
For example, the following configuration:

```js
{
  test: /[\\|\/]_[\S]*\.css$/,
  use: [
    'to-string-loader',
    'css-loader'
  ]
}
```

If your CSS file starts with "`_`", CSS will use `to-string-loader`., such as:

``` js
import { tag, WeElement render } from 'omi'

define('my-app', class extends WeElement {

  css = require('./_index.css')
  ...
  ...
  ...
```

You can also forget the tedious configuration and use omi-cli directly, no need to configure anything.

### TodoApp

Here is a relatively complete example of TodoApp:

```js
import { define, render, WeElement } from 'omi'

define('todo-list', function(props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
})

define('todo-app', class extends WeElement {
  static observe = true

  data = { items: [], text: '' }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <todo-list items={this.data.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.data.text}
          />
          <button>Add #{this.data.items.length + 1}</button>
        </form>
      </div>
    )
  }

  handleChange = e => {
    this.data.text = e.target.value
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.data.text.trim().length) {
      return
    }
    this.data.items.push({
      text: this.data.text,
      id: Date.now()
    })
    this.data.text = ''
  }
})

render(<todo-app />, 'body')
```

### Store

Omi Store provides a way to pass data through the component tree without having to pass props down manually at every level, injected from the root component and shared across all subcomponents. It's very simple to use:

```js
import { define, render, WeElement } from 'omi'

define('my-hello', class extends WeElement {
  render() {
    //use this.store in any method of any children components
    return <div>{this.store.name}</div>
  }
})

define('my-app', class extends WeElement {
  handleClick = () => {
     //use this.store in any method of any children components
    this.store.reverse()
    this.update()
  }

  render() {
    return (
      <div>
        <my-hello />
        <button onclick={this.handleClick}>reverse</button>
      </div>
    )
  }
})

const store = {
  name: 'abc',
  reverse: function() {
    this.name = this.name.split("").reverse().join("")
  }
}
//Injection through a third parameter
render(<my-app />, document.body, store)
```

Unlike global variables, when there are multiple root nodes, multiple stores can be injected, while there is only one global variable.

<!-- It will automatically update the UI partially when store.data is changed. The powerful **Store architecture** is high-performanced since all the data is mounted on the store.

```js
export default {
  data: {
    items: [],
    text: "",
    firstName: "dnt",
    lastName: "zhang",
    fullName: function() {
      return this.firstName + this.lastName;
    },
    globalPropTest: "abc", // Change it will refresh all elements without changing the components and page declaring data dependency.
    ccc: { ddd: 1 } // Change it will refresh all elements without changing the components and page declaring data dependency.
  },
  globalData: ["globalPropTest", "ccc.ddd"],
  add: function() {
    if (!this.data.text.trim().length) {
      return;
    }
    this.data.items.push({
      text: this.data.text,
      id: Date.now()
    });
    this.data.text = "";
  }
  // Default value is false, set to true will update all instances when data changing.
  // updateAll: true
};
```

Custom Element requires declaring dependent data so that Omi stores compute the dependency path based on the data declared on the custom component and update it locally as needed. Such as:

```js
define('todo-app', class extends WeElement {
  // If you use store, the data is only used to declare dependencies.
  static get data() {
    return { items: [], text: "" };
  }
  // ...
  handleChange = e => {
    this.store.data.text = e.target.value;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.store.add();
  };
})
```

- The logic of data is **encapsulated in the store definition method** (such as `store.add`).
- Views are only **responsible for passing data to store**, such as calling `store.add` or setting `store.data.text` on top.

You need to inject `store` from the root node at render time to use this store:

```js
render(<todo-app />, "body", store);
```

[→ Store Source Code](https://github.com/Tencent/omi/blob/master/packages/omi/examples/store/main.js) -->


<!-- 
## Mitt

If you don't want to use store's data system, you can also use publish subscribe mode. For example, using [mitt](https://github.com/developit/mitt) across component communication in Omi:

* [cross-component-communication](https://github.com/Tencent/omi/blob/master/packages/omi-30-seconds/README.md#cross-component-communication) -->

<!-- 
If you want to be compatible with IE11, please use the `omi-mobx` instead of omi's own observe.

### Omi Mobx

```js
import { tag, WeElement } from "omi"
import { observe } from "omi-mobx"

@observe
@tag("my-app")
class MyApp extends WeElement {
  install() {
    this.data.name = "omi"
  }

  onClick = () => {
    this.data.name = "Omi V4.0"
  }

  render(props, data) {
    return (
      <div onClick={this.onClick}>
        <h1>Welcome to {data.name}</h1>
      </div>
    )
  }
}
``` -->

### Lifecycle

| Lifecycle method | When it gets called                          |
| ---------------- | -------------------------------------------- |
| `install`        | before the component gets mounted to the DOM |
| `installed`      | after the component gets mounted to the DOM  |
| `uninstall`      | prior to removal from the DOM                |
| `beforeUpdate`   | before update                           |
| `updated`    | after update                             |
| `beforeRender`   | before `render()`                           |
| `receiveProps`   | parent element re-render will trigger it      |

## Debugging

Easy to debug via [Omi DevTools Extension](https://github.com/f/omi-devtools) [[Install from Chrome WebStore](https://chrome.google.com/webstore/detail/omijs-devtools/pjgglfliglbhpcpalbpeloghnbceocmd)], using Omi DevTools you can simply debug and manage your UI **without any configuration**. Just install and debug.

Since Omi uses Web Components and Shadow-DOM, it doesn't need to have another elements panel such as React has. It just adds a panel to the **Elements' sidebar** and it's powerful as much as React DevTools.

![Omi DevTools](https://github.com/f/omi-devtools/raw/master/omi-devtools.gif)
<!-- 
## React to Omi

For example, the below is about migration React button as weui Omi button:

![react to omi](./assets/react-to-omi.png)

* [Diff Split](https://github.com/Tencent/omi/commit/9790fadaaf20cfede80bcf9213756a83fc8c3949?diff=split)
* [Diff Unified](https://github.com/Tencent/omi/commit/9790fadaaf20cfede80bcf9213756a83fc8c3949?diff=unified)
* [Before](https://github.com/Tencent/omi/blob/c8af654f1d5865dc557c0b4b8ad524f702a69be5/packages/omi-weui/src/omi-weui/elements/button/button.js)
* [After](https://github.com/Tencent/omi/blob/9790fadaaf20cfede80bcf9213756a83fc8c3949/packages/omi-weui/src/omi-weui/elements/button/button.js) -->

## Browsers Support

> [Omio](https://github.com/Tencent/omi/tree/master/packages/omio) - Omi for old browsers(IE8+ and mobile browsers)

Omi 4.0+ works in the latest two versions of all major browsers: Safari 10+, IE 11+, and the evergreen Chrome, Firefox, and Edge.

![→ Browsers Support](./assets/browsers-support.png)

[→ Polyfills](https://github.com/webcomponents/webcomponentsjs)

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"></script>
```

## Contributors

<table><tbody>
      <tr><td><a target="_blank" href="https://github.com/dntzhang"><img width="60px" src="https://avatars2.githubusercontent.com/u/7917954?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/LeeHyungGeun"><img width="60px" src="https://avatars2.githubusercontent.com/u/2471651?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/xcatliu"><img width="60px" src="https://avatars1.githubusercontent.com/u/5453359?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/1921622004"><img width="60px" src="https://avatars1.githubusercontent.com/u/19359217?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/yanceyou"><img width="60px" src="https://avatars2.githubusercontent.com/u/16320418?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/f"><img width="60px" src="https://avatars0.githubusercontent.com/u/196477?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/pasturn"><img width="60px" src="https://avatars0.githubusercontent.com/u/6126885?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/132yse"><img width="60px" src="https://avatars3.githubusercontent.com/u/12951461?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/akira-cn"><img width="60px" src="https://avatars0.githubusercontent.com/u/316498?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/ZainChen"><img width="60px" src="https://avatars3.githubusercontent.com/u/15615524?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/dangxuandev"><img width="60px" src="https://avatars1.githubusercontent.com/u/5436704?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/daizhan"><img width="60px" src="https://avatars0.githubusercontent.com/u/5318547?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/validalias"><img width="60px" src="https://avatars1.githubusercontent.com/u/44221844?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/elfman"><img width="60px" src="https://avatars3.githubusercontent.com/u/948001?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/NoBey"><img width="60px" src="https://avatars3.githubusercontent.com/u/10740524?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/hilkbahar"><img width="60px" src="https://avatars2.githubusercontent.com/u/12161006?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/eyea"><img width="60px" src="https://avatars0.githubusercontent.com/u/17020223?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/guisturdy"><img width="60px" src="https://avatars1.githubusercontent.com/u/7098619?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/KidneyFlower"><img width="60px" src="https://avatars1.githubusercontent.com/u/16027183?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/zhangsanshi"><img width="60px" src="https://avatars1.githubusercontent.com/u/3771933?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/xland"><img width="60px" src="https://avatars0.githubusercontent.com/u/2980915?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/winstonxie"><img width="60px" src="https://avatars3.githubusercontent.com/u/16422642?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/ghostzhang"><img width="60px" src="https://avatars3.githubusercontent.com/u/194242?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/jayZOU"><img width="60px" src="https://avatars3.githubusercontent.com/u/8576977?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/zhengbao"><img width="60px" src="https://avatars3.githubusercontent.com/u/1736166?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/vorshen"><img width="60px" src="https://avatars3.githubusercontent.com/u/10334783?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/akira-cn"><img width="60px" src="https://avatars3.githubusercontent.com/u/316498?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/loo41"><img width="60px" src="https://avatars3.githubusercontent.com/u/28095677?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/rainmanhhh"><img width="60px" src="https://avatars3.githubusercontent.com/u/13862623?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/nbompetsis"><img width="60px" src="https://avatars3.githubusercontent.com/u/11991105?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/CodeFalling"><img width="60px" src="https://avatars1.githubusercontent.com/u/5436704?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/daizhan"><img width="60px" src="https://avatars0.githubusercontent.com/u/5318547?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/ritschwumm"><img width="60px" src="https://avatars2.githubusercontent.com/u/547138?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/kahwee"><img width="60px" src="https://avatars3.githubusercontent.com/u/262105?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/alanyinjs"><img width="60px" src="https://avatars3.githubusercontent.com/u/25688258?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/electerious"><img width="60px" src="https://avatars2.githubusercontent.com/u/499088?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/nanhupatar"><img width="60px" src="https://avatars1.githubusercontent.com/u/27266016?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/ilker0"><img width="60px" src="https://avatars1.githubusercontent.com/u/23511412?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/MrGrabazu"><img width="60px" src="https://avatars2.githubusercontent.com/u/6928672?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/Tagir-A"><img width="60px" src="https://avatars2.githubusercontent.com/u/23556586?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/mahmut-gundogdu"><img width="60px" src="https://avatars2.githubusercontent.com/u/2217899?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/howel52"><img width="60px" src="https://avatars3.githubusercontent.com/u/9854818?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/yolio2003"><img width="60px" src="https://avatars1.githubusercontent.com/u/352931?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/loo41"><img width="60px" src="https://avatars3.githubusercontent.com/u/28095677?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/nbompetsis"><img width="60px" src="https://avatars1.githubusercontent.com/u/11991105?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/WozHuang"><img width="60px" src="https://avatars2.githubusercontent.com/u/22727100?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/web-padawan"><img width="60px" src="https://avatars2.githubusercontent.com/u/10589913?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/SuperHuangXu"><img width="60px" src="https://avatars1.githubusercontent.com/u/14816052?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/LastHeaven"><img width="60px" src="https://avatars1.githubusercontent.com/u/10590077?s=60&amp;v=4"></a></td>
      </tr></tbody></table>

## Maintainers

- [@f](https://github.com/f)
- [@LeeHyungGeun](https://github.com/LeeHyungGeun)
- [@dntzhang](https://github.com/dntzhang)
- [@xcatliu](https://github.com/xcatliu)

Please contact us for any questions. Also, Add [Omi QQ Group](https://github.com/Tencent/omi/issues/169).

## Thanks

* [preact](https://github.com/developit/preact)
* [JSONPatcherProxy](https://github.com/Palindrom/JSONPatcherProxy)
* [create-react-app](https://github.com/facebook/create-react-app)
* [JSX](https://github.com/facebook/jsx)

## License

MIT © Tencent
