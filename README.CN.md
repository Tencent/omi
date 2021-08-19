[English](./README.md) | 简体中文 

<p align="center"><img src="https://tencent.github.io/omi/assets/logo.svg" alt="omi" width="100"/></p>
<h2 align="center">Omi - 前端跨框架跨平台框架</h2>

> Omiu - 使用 Omi 打造的跨框架、[跨主题](https://omi.cdn-go.cn/admin/latest/index.html#/docs/theme) UI 组件库

* [💯国内加速访问 Omi Admin](https://omi.cdn-go.cn/admin/latest/index.html)
* [💯Omiu 打造的 Omi Admin](https://tencent.github.io/omi/packages/admin/dist/index.html)


使用 TypeScript 开发跨框架的按钮组件:

```ts
import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
  size?: 'medium' | 'small' | 'mini',
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
  plain?: boolean,
  round?: boolean,
  circle?: boolean,
  loading?: boolean,
  disabled?: boolean,
  icon?: string,
  autofocus?: boolean,
  nativeType?: 'button' | 'submit' | 'reset',
  block?: boolean
  text?: string
}

@tag('o-button')
export default class Button extends WeElement<Props>{
  static css = css

  static defaultProps = {
    plain: false,
    round: false,
    circle: false,
    loading: false,
    disabled: false,
    autofocus: false,
    nativeType: 'button',
    block: false
  }

  static propTypes = {
    size: String,
    type: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    autofocus: Boolean,
    nativeType: String,
    block: Boolean,
    text: String
  }

  render(props) {
    return <button disabled={props.disabled} {...extractClass(props, 'o-button', {
      ['o-button-' + props.type]: props.type,
      ['o-button-' + props.size]: props.size,
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-disabled': props.disabled,
      'is-block': props.block
    })} type={props.nativeType} >
      {props.loading && <i class='icon-loading'></i>}
      {props.text}
      <slot></slot>
    </button>
  }
}
```


## 快速开始开发项目

```bash
$ npm i omi-cli -g    # install cli
$ omi init my-app     # 初始化项目，也可以在空目录里执行 'omi init'
$ cd my-app           # 如果在空目录里执行 'omi init' 忽略这条命令
$ npm start           # 开发
$ npm run build       # 编译发布
```

> `npx omi-cli init my-app` 也支持(要求 npm v5.2.0+)

## 快速开始开发跨框架组件

```bash
$ npm i omi-cli -g    # install cli
$ omi init-component my-component     # 初始化项目，也可以在空目录里执行 'omi init'
$ cd my-app           # 如果在空目录里执行 'omi init' 忽略这条命令
$ npm start           # 开发
$ npm run build       # 编译发布
```

> `npx omi-cli init-component my-component` 也支持(要求 npm v5.2.0+)


## Omi 生态

[→ Omi 生态学习路线图](https://github.com/Tencent/omi/tree/master/assets/rm.md)

#### 基础生态

| **项目**                         | **描述**                           |
| ------------------------------- | ----------------------------------- |
| [omi-docs](https://tencent.github.io/omi/site/docs/cn.html) 和 [例子](https://codepen.io/collection/DrMYgV/) 和 [webcomponents.dev](https://webcomponents.dev/)| Omi 官方文档 |
| [omi-router ](https://github.com/Tencent/omi/tree/master/packages/omi-router) |Omi 官方路由,超级小的尺寸，只有 1KB 的 js|
| [omi-cli](https://github.com/Tencent/omi/tree/master/packages/omi-cli)| 项目脚手架工具，各种模板任你选 [→ 基础模板](https://github.com/Tencent/omi/tree/master/packages/omi-cli/template) |
| [CEE](https://omijs.github.io/cee/out/)| custom-elements-everywhere 评分 |

#### Snake MVP

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-snake![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omi-snake)| omi 写的 MVP 架构的贪吃蛇游戏 |
| [omi-kbone-snake![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omi-kbone)| omi-kbone 写的 MVP 架构的跨端贪吃蛇游戏，支持小程序和 H5  |
| [Preact-snake](https://github.com/Tencent/omi/tree/master/packages/preact-css/examples/snake) & [→ Touch the demo](https://tencent.github.io/omi/packages/preact-css/examples/snake/build/)| Preact + [Preact-CSS](https://github.com/Tencent/omi/tree/master/packages/preact-css) + Omis 写的贪吃蛇 |
| [[P]react-snake ](https://github.com/Tencent/omi/tree/master/packages/react-snake) & [→ Touch the demo](https://tencent.github.io/omi/packages/react-snake/build/index.html)| react/preact 写的 MVP 架构的贪吃蛇游戏 |
| [omix-snake![](https://dntzhang.github.io/cax/asset/hot.png)](https://github.com/Tencent/omi/tree/master/packages/omix-snake) | Omix 写的 MVP 架构贪吃蛇  |
<!-- | [vue-snake](https://github.com/Tencent/omi/tree/master/packages/vue-snake) | Vue + Omiv 写的 MVP 架构的贪吃蛇游戏 | -->


#### 其他

| **项目**                         | **描述**                           |
| ------------------------------- | ----------------------------------- |
| [omi-piano![](https://dntzhang.github.io/cax/asset/hot.png)](https://github.com/Wscats/piano) |Omi 钢琴, [开始演奏吧!](https://wscats.github.io/piano/build/)|
| [omi-devtools](https://github.com/f/omi-devtools)| 谷歌浏览器开发工具扩展|
| [md2site](https://tencent.github.io/omi/assets/md2site/)| 用 markdown 生成静态网站文档.|
| [omi-chart](https://github.com/Tencent/omi/tree/master/packages/omi-chart)| 一个 chart-x 标签搞定报表|
| [omi-30-seconds](https://github.com/Tencent/omi/tree/master/packages/omi-30-seconds)| 30 秒理解一段有用的 Omi 代码片段.|
| [omi-swiper](https://github.com/loo41/Omi-Swiper)| Omi + Swiper  |
| [omi-vscode](https://github.com/ZainChen/omi-vscode)| VSCode extension for omi, [Install now!](https://marketplace.visualstudio.com/items?itemName=ZainChen.omi) |
| [omi-sprite](https://github.com/Tencent/omi/tree/master/packages/omi-sprite)| Web Components, JSX 和 Canvas 的完美融合|
| [omi-canvas](https://github.com/Tencent/omi/tree/master/packages/omi-canvas)| Web Components, JSX 和 Canvas 的完美融合|
| [omi-ex](https://github.com/Tencent/omi/tree/master/packages/omi-ex)| Omi.js 扩展(TypeScript) |
| [omi-transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)|Omi 和 [css3transform](https://tencent.github.io/omi/packages/omi-transform/css3transform/) 完美结合. 让 css3 transform 在你的 Omi 项目中变得超级简单.|
| [omi-finger](https://github.com/Tencent/omi/tree/master/packages/omi-finger)|Omi 官方手势库|
| [omi-touch](https://github.com/Tencent/omi/tree/master/packages/omi-touch)|丝般顺滑的触摸运动|
| [omi-snap](https://github.com/Tencent/omi/blob/master/tutorial/omi-snap.cn.md)|预渲染骨架屏|
|[omi-i18n](https://github.com/i18next/omi-i18n)| Omi 国际化解决方案 |
| [omie](https://github.com/Wscats/omi-electron) | Omi.js 和 Electron.js 打造跨平台桌面应用 |
| [Soo](https://github.com/tonis2/Soo)| 和 Omi 一样的 API，但是更小且没有 JSX, virtual DOM 和 store|

### 特性

- 框架无关，任何框架可以使用 Omi 自定义元素
- 提供桌面、移动和小程序整体解决方案
- 无状态视图的架构设计
- 小巧的尺寸和[高性能](https://tencent.github.io/omi/packages/omi/examples/perfs/)
- 对 custom elements 友好, 通过字符串 `'0'`或者`'false'`传递 `false`，[通过`:`和`Omi.$`传递任意复杂类型](https://github.com/Tencent/omi/releases/tag/v6.8.0)
- 拥有官方跨框架 UI 组件库 - [omim](https://tencent.github.io/omi/packages/omim/docs/build/cn.html)
- 使用 [omio](https://github.com/Tencent/omi/tree/master/packages/omio) 可以兼容到 IE8
- [很容易通过 extend api 实现双向绑定](https://codepen.io/omijs/pen/aeLYjx)
- 增强了 CSS, [支持 rpx 单位](https://github.com/Tencent/omi/releases/tag/v4.0.26)，基于 **750** 屏幕宽度
- [基于 Shadow/Light Dom 设计](https://developers.google.cn/web/fundamentals/web-components/shadowdom?hl=zh-cn)
- 利用 [Chrome 开发工具扩展 ](https://github.com/f/omi-devtools)轻松调试，[从 Chrome 应用商店安装](https://chrome.google.com/webstore/detail/omijs-devtools/pjgglfliglbhpcpalbpeloghnbceocmd/related)
- 符合浏览器的发展趋势以及 API 设计理念
- [**Web Components**](https://developers.google.com/web/fundamentals/web-components/) + [**JSX**](https://reactjs.org/docs/introducing-jsx.html) 融合为一个框架 Omi
- Web Components 也可以数据驱动视图, `UI = fn(data)`
- JSX 是开发体验最棒(智能提示)、[语法噪音最少](https://github.com/facebook/jsx#why-not-template-literals)、图灵完备的 UI 表达式，模板引擎不完备，模板字符串完备但是语法噪音太大
- 看看 [Facebook React 和 Web Components 对比优势](https://www.cnblogs.com/rubylouvre/p/4072979.html)，Omi 融合了各自的优点，而且给开发者自由的选择喜爱的方式
- `Shadow/Light DOM` 与 `Virtual DOM` 融合，Omi 既使用了`虚拟 DOM`，也是使用真实 `Shadow DOM`，让视图更新更准确更迅速
- 局部 CSS 最佳解决方案(`Shadow DOM`)，社区为局部 CSS 折腾了不少框架和库(使用 js 或 json 写样式，如:`Radium`，`jsxstyle`，`react-style`；与 webpack 绑定使用生成独特的 className `文件名—类名—hash值`，如：`CSS Modules`，`Vue`)，还有运行时注入`scoped atrr` 的方式，都是 hack 技术；`Shadow DOM Style` 是最完美的方案

对比同样开发 TodoApp， Omi 和 React 渲染完的 DOM 结构，Omi 使用 Shadow/Light DOM 隔离样式和语义化结构:

| **Omi**                         | **React**                           | **Omio**                           |
| ------------------------------- | ----------------------------------- |----------------------------------- |
| ![Omi](https://tencent.github.io/omi/assets/omi-render.jpg) | ![React](https://tencent.github.io/omi/assets/react-render.jpg) | ![Omio](https://tencent.github.io/omi/assets/omio.png) |


### TypeScript 智能提示

```jsx
import { h, WeElement, tag, classNames } from 'omi';
import * as styles from './_index.less';

interface ButtonProps {
  href?: string,
  disabled?: boolean,
  type?: 'default' | 'primary' | 'danger',
  htmltype?: 'submit' | 'button' | 'reset',
  onClick?: (e: any) => void
}

const TAG = 'o-button'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [TAG]: Omi.Props & ButtonProps
    }
  }
}

@tag(TAG)
export default class oButton extends WeElement<ButtonProps> {
...
...
...
```

<img src="./assets/ts.png" alt="omi" width="427"/>

## 必须收藏的资源

* [使用 MVP 架构和 Web Components(Omi) 开发贪吃蛇](https://github.com/Tencent/omi/blob/master/tutorial/omi-web-components-snake-game-mvp.cn.md)
* [Web Components 规范](https://github.com/w3c/webcomponents)
* [Comi 原理揭秘](https://github.com/Tencent/omi/blob/master/tutorial/comi-principle.md)
* [Omip 编译 H5 原理揭秘](https://github.com/Tencent/omi/blob/master/tutorial/omip-h5.md)
* [如何通过小程序实现跨平台开发](https://developers.weixin.qq.com/community/develop/article/doc/00002cda45c930d87a380a74351813)
* [你必须收藏 ES6 Spread Operator 技巧](https://github.com/Tencent/omi/blob/master/tutorial/spread-operator.cn.md)
* [Omi snap 骨架屏与快照](https://github.com/Tencent/omi/blob/master/tutorial/omi-snap.cn.md)
* [Omio 兼容 IE8 踩坑之路](https://github.com/Tencent/omi/blob/master/tutorial/omio.cn.md)
* [Omi 生态发布](https://github.com/Tencent/omi/blob/master/tutorial/ecosystem.cn.md)
* [深入浅出 Shadow Dom](https://github.com/Tencent/omi/blob/master/tutorial/shadow-dom-in-depth.cn.md)
* [HTM - JSX 的替代品？还是另一种选择？](https://github.com/Tencent/omi/blob/master/tutorial/omi-html.cn.md)
* [MVVM 王者归来](https://github.com/Tencent/omi/blob/master/tutorial/omi-mvvm.cn.md)
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
* [Web Components 的力量](https://github.com/Tencent/omi/blob/master/tutorial/the-power-of-web-components.cn.md)
* [ShadowRoot](https://developer.mozilla.org/zh-CN/docs/Web/API/ShadowRoot)
* [Developer Tools support for Web Components in Firefox 63](https://blog.nightly.mozilla.org/2018/09/06/developer-tools-support-for-web-components-in-firefox-63/)
* [Web Components中引入外部CSS的3种方法](https://www.zhangxinxu.com/wordpress/2021/02/web-components-import-css/)
---

# 目录

- [Omi 生态](#omi-生态)
- [必须收藏的资源](#必须收藏的资源)
- [快速入门](#快速入门)
  - [项目模板](#项目模板)
  - [Hello Element](#hello-element)
  - [生命周期](#生命周期)
- [调试工具](#调试工具)
- [浏览器兼容](#浏览器兼容)
- [相关链接](#相关链接)
- [贡献者们](#贡献者们)
- [维护者](#维护者)
- [感谢](#感谢)
- [License](#license)


## 快速入门

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
​``` -->

### 项目模板

| **Template Type**|  **Command**|  **Describe**|
| ------------ |  -----------|  ----------------- |
|基础模板(v3.3.0+)|`omi init my-app`| 基础模板，支持 omi 和 omio(IE8+)|
|Kbone Template|`omi init-kbone my-app`  | 使用 omi 开发小程序或者 Web|

### Hello Element

先创建一个自定义元素:

```js
import { define, WeElement } from 'omi'

define('hello-element', class extends WeElement {
  onClick = evt => {
    // trigger CustomEvent
    this.fire('Abc', { name: 'dntzhang', age: 12 })
    evt.stopPropagation()
  }

  //如果需要在 html 里直接使用 <hello-element></hello-element>，必须声明 propTypes
  static propTypes = {
    msg: String
  }

  static css = `
      div {
        color: red;
        cursor: pointer;
      }`

  render(props) {
    return (
      <div onClick={this.onClick}>
        Hello {props.msg}
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
  data = { abc: 'abc' }

  // define CustomEvent Handler
  onAbc = evt => {
    // get evt data by evt.detail
    this.data.abc = ' by ' + evt.detail.name
    this.update()
  }

  static css = `
      div{
          color: green;
      }`

  render(props) {
    return (
      <div>
        Hello {this.data.abc}
        <hello-element
          onAbc={this.onAbc}
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
        "pragma": "Omi.h",
        "pragmaFrag": "Omi.h.f"
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

如果你的 css 文件以 `_` 开头, css 会使用 to-string-loader, 如：

``` js
import { tag, WeElement render } from 'omi'

define('my-app', class extends WeElement {

  css = require('./_index.css')
  ...
  ...
  ...
```

你也可以忘掉这一对繁琐的配置直接使用 omi-cli，不需要你配置任何东西。

<!-- ### TodoApp

下面列举一个相对完整的 TodoApp 的例子:

```js
import { define, render, WeElement } from 'omi'

define('todo-list', class extends WeElement {
  static propTypes = {
    items: Array
  }

  render(props) {
    return (
      <ul>
        {props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
})

define('todo-app', class extends WeElement {
  items = []
  text = ''

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <todo-list items={this.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.text}
          />
          <button>Add #{this.items.length + 1}</button>
        </form>
      </div>
    )
  }

  handleChange = e => {
    this.text = e.target.value
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.text.trim().length) {
      return
    }
    this.items.push({
      text: this.text,
      id: Date.now()
    })
    this.text = ''
    this.update()
  }
})

render(<todo-app />, 'body')
``` -->

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
* 组件和页面的 data 用来列出依赖的 store.data 的属性 (omi 会记录 path)，按需更新
* 如果页面简单组件很少，可以 updateAll 设置成 true，并且组件和页面不需要声明 data，也就不会按需更新
* globalData 里声明的 path，只要修改了对应 path 的值，就会刷新所有页面和组件，globalData 可以用来列出所有页面或大部分公共的属性 Path -->
<!-- 
## Mitt

如果不想使用 store 的 data 体系，也可以使用发布订阅模式。比如在 Omi 中使用 [mitt](https://github.com/developit/mitt) 跨组件通讯:

* [cross-component-communication](https://github.com/Tencent/omi/blob/master/packages/omi-30-seconds/README.md#cross-component-communication) -->

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
​``` -->

### 生命周期

| 钩子方法 |      触发时机                   |
| ---------------- | -------------------------------------------- |
| `install`        | 初始化安装 |
| `installed`      | 插入到文档之后且安装完成 |
| `uninstall`      |   从文档中卸载移除        |
| `beforeUpdate`   |  update 之前                         |
| `updated`    |  update 之后                          |
| `beforeRender`   |  `render()` 之前                         |
| `receiveProps`   | 父组件更新时候触发, 返回 false 可以阻止更新      |

## 调试工具

使用 [Omi 开发工具](https://chrome.google.com/webstore/detail/omijs-devtools/pjgglfliglbhpcpalbpeloghnbceocmd) 可以非常简单地调试和管理你的 UI。不需要任何配置，你只要安装然后就能调试。

既然  Omi 使用了 Web Components 和 Shadow-DOM, 所以不需要像 React 一样安装其他元素面板，只需要使用 Chrome 自带的 **Elements' sidebar** 便可，它和 React 开发者工具一样强大。

![Omi DevTools](https://github.com/f/omi-devtools/raw/master/omi-devtools.gif)

### 查看所有注册的元素

```js
console.log(Omi.elements)
```

<!-- 
## React 组件转成 Omi

举个例子，下面是吧 weui react 的 button 转成 weui omi 的 button 的例子 :

![react to omi](./assets/react-to-omi.png)

* [Diff Split](https://github.com/Tencent/omi/commit/9790fadaaf20cfede80bcf9213756a83fc8c3949?diff=split)
* [Diff Unified](https://github.com/Tencent/omi/commit/9790fadaaf20cfede80bcf9213756a83fc8c3949?diff=unified)
* [Before](https://github.com/Tencent/omi/blob/c8af654f1d5865dc557c0b4b8ad524f702a69be5/packages/omi-weui/src/omi-weui/elements/button/button.js)
* [After](https://github.com/Tencent/omi/blob/9790fadaaf20cfede80bcf9213756a83fc8c3949/packages/omi-weui/src/omi-weui/elements/button/button.js) -->

## 浏览器兼容

> [Omio](https://github.com/Tencent/omi/tree/master/packages/omio) - 兼容老浏览器的 Omi 版本(支持到 IE8+)

Omi works in the latest two versions of all major browsers: Safari 10+, IE 11+, and the evergreen Chrome, Firefox, and Edge.

![→ Browsers Support](./assets/browsers-support.png)

[→ polyfills](https://github.com/webcomponents/webcomponentsjs)

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"></script>
```

## 贡献

Build a example:

```bash
npm start example_name
```

Build omi:

```bash
npm run build
```

Unit testing

```
npm run test
```

## 贡献者们

<a href="https://github.com/Tencent/omi/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Tencent/omi" />
</a>

感谢所有贡献者，欢迎更多人加入一起贡献。

## 核心维护者

- [@dntzhang](https://github.com/dntzhang)
- [@Wscats](https://github.com/Wscats)
- [@LeeHyungGeun](https://github.com/LeeHyungGeun)
- [@xcatliu](https://github.com/xcatliu)
- [AlloyTeam](http://alloyteam.com/)

任何 Omi 相关问题欢迎联系我们。也可以[加入 Omi QQ 群](https://github.com/Tencent/omi/issues/169)进行讨论交流。

## 感谢

* [preact](https://github.com/developit/preact)
* [JSX](https://github.com/facebook/jsx)

## License

MIT © Tencent
