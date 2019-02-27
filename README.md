[English](./README.EN.md) | 简体中文 | [한국어](./README.KR.md)

<p align="right">Omi <strong>v5.0.23</strong></p>
<p align="right">Omio <strong>v1.3.7</strong></p>
<p align="center"><img src="./assets/omi-logo2019.svg" alt="omi" width="300"/></p>
<h2 align="center">Omi - 下一代前端框架，去万物糟粕，合精华为一点点 JS</h2>
<p align="center"><b>基于 Web Components 并支持 IE8+(omio) 和 小程序(omip)</b></p>

## Omi 生态

[→ Omi 生态学习路线图](https://github.com/Tencent/omi/tree/master/assets/rm.md)

| **项目**                         | **描述**                           |
| ------------------------------- | ----------------------------------- |
| [omi-docs](https://github.com/Tencent/omi/blob/master/docs/main-concepts.cn.md)| Omi 官方文档 |
| [omip![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omip)| 直接使用 Omi 开发小程序！！！|
| [omio![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omio)| 兼容老浏览器的 Omi 版本(支持到IE8+和移动端浏览器)。|
| [omiu![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png)](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html)| Omi 官方 UI。|
| [omix![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omix)| 极小却精巧的小程序框架。|
| [omi-mp](https://github.com/Tencent/omi/tree/master/packages/omi-mp)| 通过微信小程序开发和生成 Web 单页应用(H5 SPA)|
| [md2site](https://tencent.github.io/omi/assets/md2site/)| 用 markdown 生成静态网站文档.|
| [omi-mvvm](https://github.com/Tencent/omi/blob/master/tutorial/omi-mvvm.cn.md)| MVVM 王者归来, [mappingjs](https://github.com/Tencent/omi/tree/master/packages/mappingjs) 强力加持。|
| [omi-chart](https://github.com/Tencent/omi/tree/master/packages/omi-chart)| 一个 chart-x 标签搞定报表|
| [mp-mvvm ](https://github.com/Tencent/omi/tree/master/packages/mp-mvvm)| 小程序插上 MVVM 的翅膀, [mappingjs](https://github.com/Tencent/omi/tree/master/packages/mappingjs) 强力加持。|
| [omi-html](https://github.com/Tencent/omi/tree/master/packages/omi-html)| Using [htm](https://github.com/developit/htm) in omi.|
| [omi-30-seconds](https://github.com/Tencent/omi/tree/master/packages/omi-30-seconds)| 30 秒理解一段有用的 Omi 代码片段.|
| [omi-swiper](https://github.com/loo41/Omi-Swiper)| Omi + Swiper  |
| [omi-sprite](https://github.com/Tencent/omi/tree/master/packages/omi-sprite)| Web Components, JSX 和 Canvas 的完美融合|
| [omi-canvas](https://github.com/Tencent/omi/tree/master/packages/omi-canvas)| Web Components, JSX 和 Canvas 的完美融合|
| [omi-router ](https://github.com/Tencent/omi/tree/master/packages/omi-router) |Omi 官方路由,超级小的尺寸，只有 1KB 的 js。[→ DEMO](https://tencent.github.io/omi/packages/omi-router/examples/spa/build/)|
| [omi-devtools](https://github.com/f/omi-devtools)| 谷歌浏览器开发工具扩展|
| [omi-cli](https://github.com/Tencent/omi/tree/master/packages/omi-cli)| 项目脚手架工具，各种模板任你选。 |
| [omi-ex](https://github.com/Tencent/omi/tree/master/packages/omi-ex)| Omi.js 扩展(TypeScript) |
| [omi-transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)|Omi 和 [css3transform](https://tencent.github.io/omi/packages/omi-transform/css3transform/) 完美结合. 让 css3 transform 在你的 Omi项目中变得超级简单.|
| [omi-tap](https://github.com/Tencent/omi/releases/tag/v4.0.24)| Omi 原生支持 tap 事件（omi v4.0.24+）|
| [omi-finger](https://github.com/Tencent/omi/tree/master/packages/omi-finger)|Omi 官方手势库|
| [omi-touch](https://github.com/Tencent/omi/tree/master/packages/omi-touch)|丝般顺滑的触摸运动|
| [omi-native](https://github.com/Tencent/omi/tree/master/packages/omi-native)|把 web components 渲染到 native，比如 IOS 、Android|
|[omi-i18n](https://github.com/i18next/omi-i18n)| Omi 国际化解决方案 |
| [omi-page](https://github.com/Tencent/omi/tree/master/packages/omi-page) | 基于 [page.js](https://github.com/visionmedia/page.js) 的 Omi 路由|

### 特性

- 小巧的尺寸
- 拥有官方 UI 组件库 - [omiu](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html)
- 使用 [omio](https://github.com/Tencent/omi/tree/master/packages/omio) 可以兼容到 IE8
- 真正的 [MVVM](https://github.com/Tencent/omi/blob/master/tutorial/omi-mvvm.cn.md), 拥有 [mappingjs](https://github.com/Tencent/omi/tree/master/packages/mappingjs) 强力支持
- 支持 `TypeScript`
- 响应式数据绑定
- 增强了 CSS, [支持 rpx 单位](https://github.com/Tencent/omi/releases/tag/v4.0.26)，基于 **750** 屏幕宽度
- [基于 Shadow Dom 设计](https://developers.google.cn/web/fundamentals/web-components/shadowdom?hl=zh-cn)
- 利用[Chrome 开发工具扩展 ](https://github.com/f/omi-devtools)轻松调试，[从 Chrome 应用商店安装](https://chrome.google.com/webstore/detail/omijs-devtools/pjgglfliglbhpcpalbpeloghnbceocmd/related)
- 符合浏览器的发展趋势以及API设计理念
- [**Web Components**](https://developers.google.com/web/fundamentals/web-components/) + [**JSX**](https://reactjs.org/docs/introducing-jsx.html) 相互融合为一个框架 Omi
- Web Components 也可以数据驱动视图, `UI = fn(data)`
- JSX 是开发体验最棒(智能提示)、[语法噪音最少](https://github.com/facebook/jsx#why-not-template-literals)、图灵完备的 UI 表达式，模板引擎不完备，模板字符串完备但是语法噪音太大
- 看看[Facebook React 和 Web Components对比优势](https://www.cnblogs.com/rubylouvre/p/4072979.html)，Omi 融合了各自的优点，而且给开发者自由的选择喜爱的方式
- `Shadow DOM` 与 `Virtual DOM` 融合，Omi 既使用了`虚拟 DOM`，也是使用真实 `Shadow DOM`，让视图更新更准确更迅速
- 局部 CSS 最佳解决方案(`Shadow DOM`)，社区为局部 CSS 折腾了不少框架和库(使用js或json写样式，如:`Radium`，`jsxstyle`，`react-style`；与webpack绑定使用生成独特的className`文件名—类名—hash值`，如：`CSS Modules`，`Vue`)，还有运行时注入`scoped atrr` 的方式，都是 hack 技术；`Shadow DOM Style` 是最完美的方案
<!-- - 独创的 `Path Updating` 机制，基于 Proxy 全自动化的精准更新，功耗低，自由度高，性能卓越，方便集成 `requestIdleCallback`,对 this.update 说再见吧！只要使用 `store` 系统，它就会自动化按需更新局部视图 -->

对比同样开发 TodoApp， Omi 和 React 渲染完的 DOM 结构，Omi 使用 Shadow DOM 隔离样式和语义化结构:

| **Omi** | **React** |
|-|-|
| ![Omi](./assets/omi-render.jpg) | ![React](./assets/react-render.jpg) |

## omi-mp 

> 通过微信小程序开发和一键生成 Web 的 H5 SPA (基于 omi + [omi-router](https://github.com/Tencent/omi/tree/master/packages/omi-router))

看下官方模板的转换例子：

| **Index**                         | **Logs**                           |
| ------------------------------- | ----------------------------------- |
|![](./assets/mp1.jpg)| ![](./assets/mp2.jpg)|

因为 Web 里拉取不到用户登录态，更换了用户头像和名称。

## 必须收藏的资源

* [你必须收藏 ES6 Spread Operator 技巧](https://github.com/Tencent/omi/blob/master/tutorial/spread-operator.cn.md)
* [Omio 兼容 IE8 踩坑之路](https://github.com/Tencent/omi/blob/master/tutorial/omio.cn.md)
* [深入浅出 Shadow Dom](https://github.com/Tencent/omi/blob/master/tutorial/shadow-dom-in-depth.cn.md)
* [HTM - JSX 的替代品？还是另一种选择？](https://github.com/Tencent/omi/blob/master/tutorial/omi-html.cn.md)
* [60FPS Animation In Omi](https://github.com/Tencent/omi/blob/master/tutorial/omi-transform.cn.md)
* [Render Web Components To Native](https://github.com/Tencent/omi/blob/master/tutorial/render-web-components-to-native.cn.md)
* [Web Components MDN](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
* [Web Components Google](https://developers.google.com/web/fundamentals/web-components/)
* [Web Components Org](https://www.webcomponents.org/introduction)
* [Proxy MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
* [CSS Variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_variables)
* [CSS Shadow Parts](https://drafts.csswg.org/css-shadow-parts-1/)
* [Part Theme Explainer](https://meowni.ca/posts/part-theme-explainer/)
* [Platform HTML5](https://platform.html5.org/)
* [使用 requestIdleCallback](https://div.io/topic/1370)
* [A requestIdleCallback polyfill](https://gist.github.com/paullewis/55efe5d6f05434a96c36)
* [The Power Of Web Components](https://hacks.mozilla.org/2018/11/the-power-of-web-components/)
* [ShadowRoot](https://developer.mozilla.org/zh-CN/docs/Web/API/ShadowRoot)
* [Developer Tools support for Web Components in Firefox 63](https://blog.nightly.mozilla.org/2018/09/06/developer-tools-support-for-web-components-in-firefox-63/)
---

# 目录

- [Omi 生态](#omi-生态)
- [omi-mp](#omi-mp)
- [必须收藏的资源](#必须收藏的资源)
- [一个 HTML 完全上手](#一个-html-完全上手)
- [再花 30 秒完全上手](#再花-30-秒完全上手)
- [快速入门](#快速入门)
  - [安装](#安装)
  - [项目模板](#项目模板)
  - [Hello Element](#hello-element)
  - [TodoApp](#todoapp)
  - [Store](#store)
  - [Mitt](#mitt)
  - [Observe](#observe)
  - [生命周期](#生命周期)
- [调试工具](#调试工具)
- [浏览器兼容](#浏览器兼容)
- [React 组件转成 Omi](#react-组件转成-omi)
- [相关链接](#相关链接)
- [贡献者们](#贡献者们)
- [维护者](#维护者)
- [感谢](#感谢)
- [License](#license)

## 一个 HTML 完全上手

下面这个页面不需要任何构建工具就可以执行

* [点击这里看执行结果](https://tencent.github.io/omi/assets/)
* [Omi.js CDN](https://unpkg.com/omi)

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

通过上面脚本的执行，你已经定义好了一个自定义标签，可以不使用 render 方法，直接使用 `like-button` 标签：

```jsx
<body>
    <like-button></like-button>
</body>
```

## 再花 30 秒完全上手

你也可以使用现代化的 JS 语法，快速构建 Omi 项目:

<!-- ```js
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
```


你会发现 `MyCounter` 从未使用过，所以你可以使用下面代码达到同样效果并且避免 Eslint 提示错误: -->

```js
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
    static observe = true
    
    css () {
      return `span{
        color: red;
      }`
    }

    data = {
      count: 1
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
  })

render(<my-counter />, 'body')
```

也可以手动调用 `this.update`，这样你就可以选择最佳的时机进行更新，而且能够兼容 IE8。

```js
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
  data = {
    count: 1
  }

  //也可以直接传递字符串
  css = `span{
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

<!-- 
你也可以定义成纯函数的形式:

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

如果你不需要 effect 方法, 可以直接使用 `useData`:

```js
const [count, setCount] = this.useData(0)
``` -->

## 快速入门

### 安装

```bash
$ npm i omi-cli -g               # install cli
$ omi init my-app     # init project, you can also exec 'omi init' in an empty folder
$ cd my-app           # please ignore this command if you executed 'omi init' in an empty folder
$ npm start                      # develop
$ npm run build                  # release
```

> `npx omi-cli init my-app` 也支持(要求 npm v5.2.0+)

目录说明:

```
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ elements    //存放所有 custom elements
│  ├─ store       //存放所有页面的 store
│  ├─ admin.js    //入口文件，会 build 成  admin.html
│  └─ index.js    //入口文件，会 build 成  index.html
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

你也可以设置 PUBLIC_URL, 比如：

```json
...
"build": "PUBLIC_URL=https://fe.wxpay.oa.com/dv node scripts/build.js",
"build-windows": "set PUBLIC_URL=https://fe.wxpay.oa.com/dv&& node scripts/build.js",
...
```

#### 切换 omi 和 omio

增加或删除 package.json 里的 alias config 可以切换 omi 和 omio 渲染:

```js
 ...
 "alias": {
    "omi": "omio"
  }
  ...
```
    

<!-- 关于编译网站的 url 前缀的设置，可以参考两个地址：

* [build problem](https://stackoverflow.com/questions/42686149/create-react-app-build-with-public-url)
* [build env doc](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables#referencing-environment-variables-in-the-html)

比如在 windows 下:

```json
"scripts": {
  "start": "node scripts/start.js",
  "_build": "node scripts/build.js",
  "build":"set PUBLIC_URL=https://fe.wxpay.oa.com/dv&& npm run _build"
}
```

在 mac os 中:

```json
"scripts": {
    "start": "node scripts/start.js",
    "_build": "node scripts/build.js",
    "build":"PUBLIC_URL=https://fe.wxpay.oa.com/dv npm run _build",
    "fix": "eslint src --fix"
  },
```

如果你只想使用相对地址:

```
"build":"set PUBLIC_URL=.&& npm run _build"  //windows
"build":"PUBLIC_URL=. npm run _build",       //mac os
``` -->

### 项目模板

| **Template Type**|  **Command**|  **Describe**|
| ------------ |  -----------|  ----------------- |
|基础模板(v3.3.0+)|`omi init my-app`| 基础模板，支持 omi 和 omio(IE8+)|
|支持预渲染快照骨架的模板|`omi init-snap my-app`| 基础模板，支持 omi 和 omio(IE8+)，内置预渲染|
|TypeScript Template(omi-cli v3.3.0+)|`omi init-ts my-app`|使用 TypeScript 的模板|
|Mobile Template|`omi init-weui my-app`| 使用了 weui 和 omi-router 的移动 web app 模板|
|omi-mp Template(omi-cli v3.0.13+)|`omi init-mp my-app`  |小程序开发 Web 的模板|
|MVVM Template(omi-cli v3.0.22+)|`omi init-mvvm my-app`  |MVVM 模板|
<!-- |[SPA Template](https://tencent.github.io/omi/packages/omi-router/examples/spa/build/)(omi-cli v3.0.10+)|`omi init-spa my-app`|使用  omi-router 单页应用的模板| -->

Cli 自动创建的项目脚手架是基于单页的 create-react-app 改造成多页的，有配置方面的问题可以查看 [create-react-app 用户指南](https://facebook.github.io/create-react-app/docs/getting-started)。

### Hello Element

先创建一个自定义元素:

```js
import { define, WeElement } from 'omi'

define('hello-element', class extends WeElement {
  onClick = evt => {
    // trigger CustomEvent
    this.fire('abc', { name: 'dntzhang', age: 12 })
    evt.stopPropagation()
  }

  css = `
      div {
        color: red;
        cursor: pointer;
      }`
  }

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

使用该元素:

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

告诉 Babel 把 JSX 转化成 Omi.h() 的调用:

``` json
{
    "presets": ["env", "omi"]
}
```

需要安装下面两个 npm 包支持上面的配置:

``` bash
"babel-preset-env": "^1.6.0",
"babel-preset-omi": "^0.1.1",
```

如果你使用 babel7，也可以使用如下包和配置：

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

如果不想把 css 写在 js 里，你可以使用 webpack [to-string-loader](https://www.npmjs.com/package/to-string-loader), 比如下面配置:

``` js
{
    test: /[\\|\/]_[\S]*\.css$/,
    use: [
        'to-string-loader',
        'css-loader'
    ]
}
```

如果你的 css 文件以 `_` 开头, css 会使用 to-string-loader. 如：

``` js
import { tag, WeElement render } from 'omi'

define('my-app', class extends WeElement {

  css = require('./_index.css')
  ...
  ...
  ...
```

你也可以忘掉这一对繁琐的配置直接使用 omi-cli，不需要你配置任何东西。

### TodoApp

下面列举一个相对完整的 TodoApp 的例子:

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

Omi 的 Store 体系： 从根组件注入，在所有子组件可以共享。使用起来非常简单：

```js
import { define, render, WeElement } from 'omi'

define('my-hello', class extends WeElement {
  render() {
    //任意子组件的任意方法都可以使用 this.store 访问注入的 store
    return <div>{this.store.name}</div>
  }
})

define('my-app', class extends WeElement {
  handleClick = () => {
     //任意子组件的任意方法都可以使用 this.store 访问注入的 store
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
//通过第三个参数注入
render(<my-app />, document.body, store)
```

与全局变量不同的是， 当有多个根节点的时候就可以注入多个 store，而全局变量只有一个。

<!-- 
使用 Store 体系可以告别 update 方法，基于 Proxy 的全自动属性追踪和更新机制。强大的 Store 体系是高性能的原因，除了靠 props 决定组件状态的组件，其余组件所有 data 都挂载在 store 上,

```js
export default {
  data: {
    items: [],
    text: '',
    firstName: 'dnt',
    lastName: 'zhang',
    fullName: function () {
      return this.firstName + this.lastName
    },
    globalPropTest: 'abc', //更改我会刷新所有页面,不需要再组件和页面声明data依赖
    ccc: { ddd: 1 } //更改我会刷新所有页面,不需要再组件和页面声明data依赖
  },
  globalData: ['globalPropTest', 'ccc.ddd'],
  add: function () {
    if (!this.data.text.trim().length) {
        return;
    }
    this.data.items.push({
      text: this.data.text,
      id: Date.now()
    })
    this.data.text = ''
  }
  //默认 false，为 true 会无脑更新所有实例
  //updateAll: true
}
```

自定义 Element 需要声明依赖的 data，这样 Omi store 根据自定义组件上声明的 data 计算依赖 path 并会按需局部更新。如:

```js
define('todo-app', class extends WeElement {
    static get data() {
        //如果你用了 store，这个只是用来声明依赖，按需 Path Updating
        return { items: [], text: '' }
    }
    ...
    ...
    ...
    handleChange = (e) => {
        this.store.data.text = e.target.value
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.store.add()
    }
})
```

* 数据的逻辑都封装在了 store 定义的方法里 (如 store.add)
* 视图只负责传递数据给 store （如上面调用 store.add 或设置 store.data.text）

需要在 render 的时候从根节点注入 store 才能在所有自定义 Element 里使用 this.store:

```js
render(<todo-app></todo-app>, 'body', store)
```

[→ Store 完整的代码](https://github.com/Tencent/omi/blob/master/packages/omi/examples/store/main.js)

总结一下:

* store.data 用来列出所有属性和默认值(除去 props 决定的视图的组件)
* 组件和页面的 data 用来列出依赖的 store.data 的属性 (omi会记录path)，按需更新
* 如果页面简单组件很少，可以 updateAll 设置成 true，并且组件和页面不需要声明 data，也就不会按需更新
* globalData 里声明的 path，只要修改了对应 path 的值，就会刷新所有页面和组件，globalData 可以用来列出所有页面或大部分公共的属性 Path -->

## Mitt

如果不想使用 store 的 data 体系，也可以使用发布订阅模式。比如在 Omi 中使用 [mitt](https://github.com/developit/mitt) 跨组件通讯:

* [cross-component-communication](https://github.com/Tencent/omi/blob/master/packages/omi-30-seconds/README.md#cross-component-communication)

## Observe

### Omi Observe

你可以为那些不需要 store 的自定义元素使用 observe 创建响应式视图，比如:

```js
import { define, WeElement } from "omi"

define("my-app", class extends WeElement {
  static observe = true

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
})
```
<!-- 
如果你想要兼容 IE11,请使用 `omi-mobx` 代替 omi 自带的 observe，往下看..

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

### 生命周期

| Lifecycle method | When it gets called                          |
| ---------------- | -------------------------------------------- |
| `install`        | before the component gets mounted to the DOM |
| `installed`      | after the component gets mounted to the DOM  |
| `uninstall`      | prior to removal from the DOM                |
| `beforeUpdate`   | before update                           |
| `updated`    | after update                             |
| `beforeRender`   | before `render()`                           |
| `receiveProps`   | parent element re-render will trigger it      |

## 调试工具

使用 [Omi 开发工具](https://chrome.google.com/webstore/detail/omijs-devtools/pjgglfliglbhpcpalbpeloghnbceocmd) 可以非常简单地调试和管理你的 UI。不需要任何配置，你只要安装然后就能调试。

既然  Omi 使用了 Web Components 和 Shadow-DOM, 所以不需要像 React 一样安装其他元素面板，只需要使用 Chrome 自带的 **Elements' sidebar** 便可，它和 React 开发者工具一样强大。

![Omi DevTools](https://github.com/f/omi-devtools/raw/master/omi-devtools.gif)

## React 组件转成 Omi

举个例子，下面是吧 weui react 的 button 转成 weui omi 的 button 的例子 :

![react to omi](./assets/react-to-omi.png)

* [Diff Split](https://github.com/Tencent/omi/commit/9790fadaaf20cfede80bcf9213756a83fc8c3949?diff=split)
* [Diff Unified](https://github.com/Tencent/omi/commit/9790fadaaf20cfede80bcf9213756a83fc8c3949?diff=unified)
* [Before](https://github.com/Tencent/omi/blob/c8af654f1d5865dc557c0b4b8ad524f702a69be5/packages/omi-weui/src/omi-weui/elements/button/button.js)
* [After](https://github.com/Tencent/omi/blob/9790fadaaf20cfede80bcf9213756a83fc8c3949/packages/omi-weui/src/omi-weui/elements/button/button.js)

## 浏览器兼容

> [Omio](https://github.com/Tencent/omi/tree/master/packages/omio) - 兼容老浏览器的 Omi 版本(支持到IE8+和移动端浏览器)


Omi 4.0+ works in the latest two versions of all major browsers: Safari 10+, IE 11+, and the evergreen Chrome, Firefox, and Edge.

![→ Browsers Support](./assets/browsers-support.png)

[→ polyfills](https://github.com/webcomponents/webcomponentsjs)

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"></script>
```

## 贡献者们

<table><tbody>
      <tr><td><a target="_blank" href="https://github.com/dntzhang"><img width="60px" src="https://avatars2.githubusercontent.com/u/7917954?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/LeeHyungGeun"><img width="60px" src="https://avatars2.githubusercontent.com/u/2471651?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/xcatliu"><img width="60px" src="https://avatars1.githubusercontent.com/u/5453359?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/yanceyou"><img width="60px" src="https://avatars2.githubusercontent.com/u/16320418?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/1921622004"><img width="60px" src="https://avatars1.githubusercontent.com/u/19359217?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/f"><img width="60px" src="https://avatars0.githubusercontent.com/u/196477?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/pasturn"><img width="60px" src="https://avatars0.githubusercontent.com/u/6126885?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/ghostzhang"><img width="60px" src="https://avatars3.githubusercontent.com/u/194242?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/jayZOU"><img width="60px" src="https://avatars3.githubusercontent.com/u/8576977?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/zhengbao"><img width="60px" src="https://avatars3.githubusercontent.com/u/1736166?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/vorshen"><img width="60px" src="https://avatars3.githubusercontent.com/u/10334783?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/akira-cn"><img width="60px" src="https://avatars3.githubusercontent.com/u/316498?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/loo41"><img width="60px" src="https://avatars3.githubusercontent.com/u/28095677?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/rainmanhhh"><img width="60px" src="https://avatars3.githubusercontent.com/u/13862623?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/nbompetsis"><img width="60px" src="https://avatars3.githubusercontent.com/u/11991105?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/CodeFalling"><img width="60px" src="https://avatars1.githubusercontent.com/u/5436704?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/daizhan"><img width="60px" src="https://avatars0.githubusercontent.com/u/5318547?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/validalias"><img width="60px" src="https://avatars1.githubusercontent.com/u/44221844?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/elfman"><img width="60px" src="https://avatars3.githubusercontent.com/u/948001?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/132yse"><img width="60px" src="https://avatars3.githubusercontent.com/u/12951461?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/NoBey"><img width="60px" src="https://avatars3.githubusercontent.com/u/10740524?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/hilkbahar"><img width="60px" src="https://avatars2.githubusercontent.com/u/12161006?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/KidneyFlower"><img width="60px" src="https://avatars1.githubusercontent.com/u/16027183?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/zhangsanshi"><img width="60px" src="https://avatars1.githubusercontent.com/u/3771933?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/xland"><img width="60px" src="https://avatars0.githubusercontent.com/u/2980915?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/winstonxie"><img width="60px" src="https://avatars3.githubusercontent.com/u/16422642?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/ritschwumm"><img width="60px" src="https://avatars2.githubusercontent.com/u/547138?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/kahwee"><img width="60px" src="https://avatars3.githubusercontent.com/u/262105?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/alanyinjs"><img width="60px" src="https://avatars3.githubusercontent.com/u/25688258?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/electerious"><img width="60px" src="https://avatars2.githubusercontent.com/u/499088?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/nanhupatar"><img width="60px" src="https://avatars1.githubusercontent.com/u/27266016?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/ilker0"><img width="60px" src="https://avatars1.githubusercontent.com/u/23511412?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/MrGrabazu"><img width="60px" src="https://avatars2.githubusercontent.com/u/6928672?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/Tagir-A"><img width="60px" src="https://avatars2.githubusercontent.com/u/23556586?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/mahmut-gundogdu"><img width="60px" src="https://avatars2.githubusercontent.com/u/2217899?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/howel52"><img width="60px" src="https://avatars3.githubusercontent.com/u/9854818?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/tcdona"><img width="60px" src="https://avatars1.githubusercontent.com/u/352931?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/eyea"><img width="60px" src="https://avatars0.githubusercontent.com/u/17020223?s=60&amp;v=4"></a></td></tr></tbody></table>

## 维护者

- [@f](https://github.com/f)
- [@LeeHyungGeun](https://github.com/LeeHyungGeun)
- [@dntzhang](https://github.com/dntzhang)
- [@xcatliu](https://github.com/xcatliu)

任何 Omi 相关问题欢迎联系我们。也可以[加入 Omi QQ 群](https://github.com/Tencent/omi/issues/169)进行讨论交流。

## 感谢

* [preact](https://github.com/developit/preact)
* [JSONPatcherProxy](https://github.com/Palindrom/JSONPatcherProxy)
* [create-react-app](https://github.com/facebook/create-react-app)
* [JSX](https://github.com/facebook/jsx)

## License

MIT © Tencent
