English | [简体中文](./README.CN.md) 

<p align="center"><img src="https://tencent.github.io/omi/assets/logo.svg" alt="omi" width="100"/></p>
<h2 align="center">Omi -  Front End Cross-Frameworks Framework</h2>

> Omiu - Cross-Frameworks and [Cross-Themes](https://omi.cdn-go.cn/admin/latest/index.html#/docs/theme) UI Components powered by Omi

* [💯Omi Admin by Omiu](https://tencent.github.io/omi/packages/admin/dist/index.html)
* [💯国内加速访问 Omi Admin](https://omi.cdn-go.cn/admin/latest/index.html)


Define cross-frameworks button element with typescript:

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


### New Project by Omi

```bash
$ npm i omi-cli -g    # install cli
$ omi init my-app     # init project
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```

> `npx omi-cli init my-app` is also supported(npm v5.2.0+).


### New Component by Omi

```bash
$ npm i omi-cli -g    # install cli
$ omi init-component my-component     # init project
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```

> `npx omi-cli init-component my-component` is also supported(npm v5.2.0+).



## Ecosystem of Omi

#### :100:Base 

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-docs](https://tencent.github.io/omi/site/docs/index.html) and [codepen](https://codepen.io/collection/DrMYgV/) | Omi official documents |
| [omi-router](https://github.com/Tencent/omi/tree/master/packages/omi-router) |Omi official router in 1KB js|
| [omi-cli](https://github.com/Tencent/omi/tree/master/packages/omi-cli)| Project scaffolding. [→ Base Templates](https://github.com/Tencent/omi/tree/master/packages/omi-cli/template)|
|[custom-elements-everywhere](https://custom-elements-everywhere.com/)| Making sure frameworks and custom elements can be BFFs 🍻 |

#### :snake:Snake MVP 

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-snake![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omi-snake) & [→ Touch the demo](https://tencent.github.io/omi/packages/omi-snake/dist/index.html)| The Snake-Eating Game Based on MVP Architecture Written by Omi |
| [omi-kbone-snake![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/v6/packages/omi-kbone)| omi-kbone 写的 MVP 架构的跨端贪吃蛇游戏，支持小程序和 H5 |
| [Preact-snake](https://github.com/Tencent/omi/tree/v6/packages/preact-css/examples/snake) | The Snake-Eating Game Based on MVP Architecture Written by Preact + [Preact-CSS](https://github.com/Tencent/omi/tree/v6/packages/preact-css) + Omis |
| [[P]react-snake](https://github.com/Tencent/omi/tree/v6/packages/react-snake) | The Snake-Eating Game Based on MVP Architecture Written by React/Preact |
| [omix-snake![](https://dntzhang.github.io/cax/asset/hot.png)](https://github.com/Tencent/omi/tree/v6/packages/omix-snake) | 小程序贪吃蛇  |

#### :books:Other 

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-piano![](https://dntzhang.github.io/cax/asset/hot.png)](https://github.com/Wscats/piano) |Build piano with Omi and Omi Snippets, [Enjoy now!](https://wscats.github.io/piano/build/)|
| [omi-devtools](https://github.com/f/omi-devtools)| Browser DevTools extension |
| [omi-chart](https://github.com/Tencent/omi/tree/v6/packages/omi-chart)| Simple HTML5 Charts using chart-x tag.|
| [md2site](https://tencent.github.io/omi/assets/md2site/)| Static Site Generator with markdown powered by Omio.|
| [omi-30-seconds](https://github.com/Tencent/omi/tree/v6/packages/omi-30-seconds)| Useful Omi snippets that you can understand in 30 seconds.|
| [omi-canvas](https://github.com/Tencent/omi/tree/v6/packages/omi-canvas)| Perfect fusion of web components, jsx and canvas.|
| [omi-swiper](https://github.com/loo41/Omi-Swiper)| Omi + Swiper  |
| [omi-vscode](https://github.com/ZainChen/omi-vscode)| VSCode extension for omi, [Install now!](https://marketplace.visualstudio.com/items?itemName=ZainChen.omi) |
| [omi-ex](https://github.com/Tencent/omi/tree/v6/packages/omi-ex)| Omi.js extension(TypeScript) |
| [omi-transform](https://github.com/Tencent/omi/tree/v6/packages/omi-transform)|Omi / [css3transform](https://tencent.github.io/omi/packages/omi-transform/css3transform/) integration. Made css3 transform super easy in your Omi project.|
| [omi-finger](https://github.com/Tencent/omi/tree/v6/packages/omi-finger)|Support touch and gesture events in your Omi project.|
| [omi-touch](https://github.com/Tencent/omi/tree/v6/packages/omi-touch)|Smooth scrolling, rotation, pull to refresh and any motion for the web.|
| [omi-i18n](https://github.com/i18next/omi-i18n)| Internationalization solution for omi.js using i18next ecosystem |
| [omie](https://github.com/Wscats/omi-electron) |Build cross platform desktop apps with Omi.js and Electron.js|
| [omi-cv](https://github.com/Wscats/CV) |Create a front-end engineer curriculum vitae, [Get Started!](http://wscats.github.io/CV/omi/build/index.html)|


## Why Omi?

- Tiny size and [High performance](https://tencent.github.io/omi/packages/omi/examples/perfs/)
- Cross frameworks(react, preact, vue, angular), components of omi are pure custom elements
- One framework. Mobile & desktop & mini program
- Stateless View Architecture Design
- Be friendly to custom elements, you can pass `false` attributes to elements through string `'0'` or string `'false'`, you can [pass `object` attributes to elements through `:` prefix and `Omi.$`](https://github.com/Tencent/omi/releases/tag/v6.8.0)
- [Easy two way binding by extend api](https://codepen.io/omijs/pen/aeLYjx)
- Enhanced CSS, [rpx unit support](https://github.com/Tencent/omi/releases/tag/v4.0.26) base on **750** screen width
- Compliance with browser trend and API design
- Merge [**Web Components**](https://developers.google.com/web/fundamentals/web-components/), [**JSX**](https://reactjs.org/docs/introducing-jsx.html) into one framework
- Web Components can also be a data-driven view, **`UI = fn(data)`**.
- JSX is the best development experience (code intelligent completion and tip) UI Expression with least [grammatical noise](https://github.com/facebook/jsx#why-not-template-literals) and it's turing complete(template engine is not, es template string is but grammatical noise is too loud)
- Look at [Facebook React vs Web Components](https://softwareengineering.stackexchange.com/questions/225400/pros-and-cons-of-facebooks-react-vs-web-components-polymer)，Omi **combines their advantages** and gives developers the **freedom to choose the way they like**
- **Shadow DOM or Light DOM merges with Virtual DOM**, Omi uses both virtual DOM and real Shadow DOM to make view updates more accurate and faster
- **Scoped CSS**'s best solution is [**Shadow DOM**](https://developers.google.com/web/fundamentals/web-components/shadowdom), the community churning out frameworks and libraries for Scoped CSS (using JS or JSON writing styles such as Radium, jsxstyle, react-style; binding to webpack using generated unique `className` `filename-classname-hash`, such as CSS Modules, Vue), are hack technologies; _and Shadow DOM Style is the perfect solution_.

Compare TodoApp by Omi and React, Omi and React rendering DOM structure:

| **Omi**                         | **React**                           | 
| ------------------------------- | ----------------------------------- |
| ![Omi](https://tencent.github.io/omi/assets/omi-render.jpg) | ![React](https://tencent.github.io/omi/assets/react-render.jpg) | 

Omi uses Shadow DOM or Light DOM based style isolation and semantic structure.

## Useful Resources

| **Title Name**  | **Other language** | **Related**|
| ----------------------------------------- | ------------------ |-----------------|
|[Web Components bookmarks](https://www.notion.so/Web-Components-bookmarks-64066078f891433dbc74997dc4d64302)|||
|[Snake-Eating Game Making with Web Components of Omi and MVP Architecture](https://github.com/Tencent/omi/blob/master/tutorial/omi-web-components-snake-game-mvp.md)|||
|[Constructable Stylesheets: seamless reusable styles](https://developers.google.com/web/updates/2019/02/constructable-stylesheets)|||
|[Web Components specifications](https://github.com/w3c/webcomponents)|||
|[Web Components in a Nutshell](https://levelup.gitconnected.com/web-components-in-a-nutshell-1e114aa971b9)|||
|[Using Web Components with React in 2019](https://www.grapecity.com/blogs/using-web-components-with-react-2019)|||
|[Using Web Components in React](https://coryrylan.com/blog/using-web-components-in-react)|||
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
- [Getting Started](#getting-started)
  - [Project Template](#project-template)
  - [Hello Element](#hello-element)
  - [TypeScript Auto Complete](#typescript-auto-complete)
  - [Lifecycle](#lifecycle)
- [Browsers Support](#browsers-support)
- [Contributors](#contributors)
- [Maintainers](#maintainers)
- [Thanks](#thanks)
- [License](#license)

## Getting Started


### Project Template

| **Template Type**|  **Command**|  **Describe**|
| ------------ |  -----------|  ----------------- |
|Base Template|`omi init my-app`| Basic omi project template.|
|Kbone Template|`omi init-kbone my-app`  |Developing mini program or web using omi.|

### Hello Element

Define a custom element by extending **`WeElement`** base class:

```js
import { define, WeElement } from 'omi'

define('hello-element', class extends WeElement {
  onClick = evt => {
    // trigger CustomEvent
    this.fire('Abc', { name: 'dntzhang', age: 12 })
    evt.stopPropagation()
  }

  //If you need to use <hello-element></hello-element> directly in html, you must declare propTypes
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

Using `hello-element`:

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
        "pragma": "Omi.h",
        "pragmaFrag": "Omi.h.f"
      }
    ]
  ]
}
```

If you don't want to write CSS in JS, you can use [to-string-loader](https://www.npmjs.com/package/to-string-loader) of webpack.
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

If your CSS file starts with "`_`", CSS will use `to-string-loader`, such as:

``` js
import { tag, WeElement render } from 'omi'

define('my-app', class extends WeElement {

  css = require('./_index.css')
  ...
  ...
  ...
```

You can also forget the tedious configuration and use omi-cli directly, no need to configure anything.
<!-- 
### TodoApp

Here is a relatively complete example of TodoApp:

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

### TypeScript Auto Complete

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

### Lifecycle

| Lifecycle method | When it gets called                          |
| ---------------- | -------------------------------------------- |
| `install`        | before the component gets mounted to the DOM |
| `installed`      | after the component gets mounted to the DOM  |
| `uninstall`      | prior to removal from the DOM                |
| `beforeUpdate`   | before update                           |
| `updated`    | after update                             |
| `beforeRender`   | before `render()`                           |
| `receiveProps`   | parent element re-render will trigger it, `return false` will prevent update action|

### View registered elements

```js
console.log(Omi.elements)
```

<!-- 
## React to Omi

For example, the below is about migration React button as weui Omi button:

![react to omi](./assets/react-to-omi.png)

* [Diff Split](https://github.com/Tencent/omi/commit/9790fadaaf20cfede80bcf9213756a83fc8c3949?diff=split)
* [Diff Unified](https://github.com/Tencent/omi/commit/9790fadaaf20cfede80bcf9213756a83fc8c3949?diff=unified)
* [Before](https://github.com/Tencent/omi/blob/c8af654f1d5865dc557c0b4b8ad524f702a69be5/packages/omi-weui/src/omi-weui/elements/button/button.js)
* [After](https://github.com/Tencent/omi/blob/9790fadaaf20cfede80bcf9213756a83fc8c3949/packages/omi-weui/src/omi-weui/elements/button/button.js) -->

## Browsers Support


Omi works in the latest two versions of all major browsers: Safari 10+, IE 11+, and the evergreen Chrome, Firefox, and Edge.

![→ Browsers Support](./assets/browsers-support.png)

[→ Polyfills](https://github.com/webcomponents/webcomponentsjs)

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"></script>
```

## Contribution

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

## Contributors

<a href="https://github.com/Tencent/omi/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Tencent/omi" />
</a>

Any form of contribution is welcome. The above contributors have been officially released by Tencent.

We very much welcome developers to contribute to Tencent's open source, and we will also give them incentives to acknowledge and thank them. Here we provide an official description of Tencent's open source contribution. Specific contribution rules for each project are formulated by the project team. Developers can choose the appropriate project and participate according to the corresponding rules. The Tencent Project Management Committee will report regularly to qualified contributors and awards will be issued by the official contact.

## Core Maintainers

- [@dntzhang](https://github.com/dntzhang)
- [@Wscats](https://github.com/Wscats)
- [@LeeHyungGeun](https://github.com/LeeHyungGeun)
- [@xcatliu](https://github.com/xcatliu)
- [AlloyTeam](http://alloyteam.com/)

Please contact us for any questions. 


## License

MIT © Tencent
