English | [简体中文](https://github.com/Tencent/omi/blob/master/README.CN.md) 

<p align="center"><img src="https://tencent.github.io/omi/assets/omi-logo2019.svg" alt="omi" width="100"/></p>
<p align="center"><img src="https://tencent.github.io/omi/assets/omi-v6.jpg" alt="omi" width="1000"/></p>
<h2 align="center">Omi -  Front End Cross-Frameworks Framework</h2>
<p align="center">Merge Web Components, JSX, HTM, Virtual DOM, Functional style and Proxy into one framework with tiny size and high performance. Write components once, using in everywhere, such as Omi, React, Preact, Vue or Angular.</p>

## Quick Preview

Pass data through the component tree without having to pass props down manually at every level by store, auto update the view on demand.

```jsx
import { define, render } from 'omi'

class Store {
  data = {
    count: 1
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
}

define('my-counter', _ => (
  <div>
    <button onClick={_.store.sub}>-</button>
    <span>{_.store.data.count}</span>
    <button onClick={_.store.add}>+</button>
  </div>
), {
    use: ['count'], 
    //or using useSelf, useSelf will update self only, exclude children components
    //useSelf: ['count'], 
    css: `span { color: red; }`,
    installed() {
      console.log('installed')
    }
  })

render(<my-counter />, 'body', new Store)
```

* `<my-counter></my-counter>` can be used in any framework or no framework, such as `document.createElement('my-counter')`

You can also use `useSelf`, `useSelf` only updates itself. When using `useSelf`, the corresponding attributes are accessed through. `usingSelf` in JSX.

You can also implement `computed` props through `compute`, such as:

```jsx
define('my-counter', _ => (
  <div>
    <button onClick={_.store.sub}>-</button>
    <span>{_.store.data.count}</span>
    <button onClick={_.store.add}>+</button>
    <div>Double: {_.computed.doubleCount}</div>
  </div>
), {
    use: ['count'],
    compute: {
      doubleCount() {
        return this.count * 2
      }
    }
  })
```

Path is also supported:

```js
class Store {
  data = {
    list: [
      { name: { first: 'dnt', last: 'zhang' } }
    ]
  }
}

...
...

define('my-counter', _ => (
  ...
  ...
), {
    use: [
      'list[0].name', //Direct string path dep, accessible through this.using[0] 
    ],
    compute: {
      fullName() {
        return this.list[0].name.first + this.list[0].name.last
      }
    }
  })
```

![](https://github.com/Tencent/omi/raw/master/assets/store.jpg)

### Multi-store injection

```jsx
import { define, render } from 'omi'

define('my-app', _ => {
  const store = _.store.storeA
  const { data, add, sub } = store
  return (
    <p>
      Clicked: {data.count} times
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>

      <div>
        {_.store.storeB.data.msg}
        <button  onClick={_.store.storeB.changeMsg}>
          change storeB's msg
        </button>
      </div>
    </p>
  )
}, {
  useSelf: {
    storeA: ['count', 'adding'],
    storeB: ['msg']
  }
})

const storeA = new class Store {
  data = {
    count: 0,
    adding: false
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
}

const storeB = new class Store {
  data = {
    msg: 'abc'
  }
  changeMsg = () => {
    this.data.msg = 'bcd'
  }
}

render( <my-app /> , 'body', {
  storeA,
  storeB
})
```

How to Multi-store injection with `compute` and `computed`? Very simple:

```jsx
define('my-app', _ => {
	const store = _.store.storeA
	const { data, add, sub } = store
	return (
		<p>
			Clicked: {data.count} times
			<button onClick={add}>+</button>
			<button onClick={sub}>-</button>

			<div>
				{_.store.storeB.data.msg}
				<button onClick={_.store.storeB.changeMsg}>
					change storeB's msg
				</button>
			</div>

			<div>{_.computed.dobuleCount}</div>
			<div>{_.computed.reverseMsg}</div>
		</p>
	)
}, {
		useSelf: {
			storeA: ['count', 'adding'],
			storeB: ['msg']
		},
		compute: {
			dobuleCount() {
				return this.storeA.data.count * 2
			},
			reverseMsg() {
				return this.storeB.data.msg.split('').reverse().join('')
			}
		}
	})
```

### API and Hooks

```jsx
define('my-component', _ => (
  ...
  ...
), {
    use: ['count', 'path.a', 'path[1].b'],
    useSelf: ['path.c', 'path[1].d'],
    compute: {
      doubleCount() {
        return this.count * 2
      }
    },
    css: 'h1 { color: red; }',
    propTypes: {

    },
    defaultProps: {

    },

    //life cycle
    install() { }, 
    installed() { }, 
    uninstall() { }, 
    receiveProps() { },
    beforeUpdate() { }, 
    updated() { }, 
    beforeRender() { }, 
    rendered() { }, 

    //custom methods
    myMethodA() { },
    myMethodB() { }

  })
```

## Ecosystem of Omi

#### Base

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-docs](https://tencent.github.io/omi/site/docs/index.html) and [codepen](https://codepen.io/collection/DrMYgV/) and [webcomponents.dev](https://webcomponents.dev/)| Omi official documents |
| [omim![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png)](https://github.com/Tencent/omi/tree/master/packages/omim)| Cross **frameworks** and **themes** components.([DOCS & REPL](https://tencent.github.io/omi/packages/omim/docs/build/index.html) && [JOIN US!](https://github.com/Tencent/omi/tree/master/packages/omim#contribution))|
| [omi-kbone![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omi-kbone)| 使用 omi + [kbone](https://github.com/wechat-miniprogram/kbone) 多端开发(小程序和Web)的贪吃蛇游戏。 |
| [omio](https://github.com/Tencent/omi/tree/master/packages/omio)| Omi for old browsers with same api(IE8+)|
| [omis![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omis)| Omis + React|
| [omiv![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omiv)| Omiv + Vue|
| [omi-ssr](https://github.com/Tencent/omi/tree/master/packages/omi-ssr)| Server-side rendering(support omio only)|
| [omi-router](https://github.com/Tencent/omi/tree/master/packages/omi-router) |Omi official router in 1KB js|
| [omi-cli](https://github.com/Tencent/omi/tree/master/packages/omi-cli)| Project scaffolding. [→ Base Templates](https://github.com/Tencent/omi/tree/master/packages/omi-cli/template) and [→ Other Templates](https://github.com/omijs) |
| [omi-devtools](https://github.com/f/omi-devtools)| Browser DevTools extension |
| [omiu](https://tencent.github.io/omi/packages/omiu/examples/build/index.html)| Simple Omi UI |
| [omil](https://github.com/Wscats/omil)|Webpack loader for Omi.js components.([DOCS](https://wscats.github.io/omi-docs/public/home/))|
| [omi-snippets](https://github.com/Wscats/omi-snippets) |A beautify VSCode extension for .omi or .eno file, [Install now!](https://marketplace.visualstudio.com/items?itemName=Wscats.omi-snippets)|
| [obaa](https://github.com/Tencent/omi/tree/master/packages/obaa) or [JSONPatcherProxy](https://github.com/Palindrom/JSONPatcherProxy) | Observe or Proxy any object's any change |

#### Snake MVP

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-snake![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omi-snake) & [→ Touch the demo](https://tencent.github.io/omi/packages/omi-snake/build/index.html)| The Snake-Eating Game Based on MVP Architecture Written by Omi |
| [omi-kbone-snake![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omi-kbone)| omi-kbone 写的 MVP 架构的贪吃蛇小程序 |
| [Preact-snake![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png)](https://github.com/Tencent/omi/tree/master/packages/preact-css/examples/snake) & [→ Touch the demo](https://tencent.github.io/omi/packages/preact-css/examples/snake/build/)| The Snake-Eating Game Based on MVP Architecture Written by Preact + [Preact-CSS](https://github.com/Tencent/omi/tree/master/packages/preact-css) + Omis |
| [[P]react-snake![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png)](https://github.com/Tencent/omi/tree/master/packages/react-snake) & [→ Touch the demo](https://tencent.github.io/omi/packages/react-snake/build/index.html)| The Snake-Eating Game Based on MVP Architecture Written by React/Preact |

#### Mini Program(小程序)

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [react-kbone![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/react-kbone)| 直接使用 React 开发小程序或 Web，基于 [kbone](https://github.com/wechat-miniprogram/kbone) |
| [preact-kbone![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/preact-kbone)| 直接使用 Preact 开发小程序或 Web，基于 [kbone](https://github.com/wechat-miniprogram/kbone) |
| [omix![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png)](https://github.com/Tencent/omi/tree/master/packages/omix)| 极小却精巧的小程序框架|
| [omi-cloud](https://github.com/Tencent/omi/tree/master/packages/omi-cloud)| 小程序•云开发|
| [omip](https://github.com/Tencent/omi/tree/master/packages/omip)| 直接使用 Omi 开发小程序或 H5 SPA|
| [mps](https://github.com/Tencent/omi/tree/master/packages/mps)| 原生小程序增强框架(JSX + Less 输出 WXML + WXSS)，也支持 QQ 轻应用 |
| [cax](https://github.com/Tencent/omi/tree/master/packages/cax)| 小程序 Canvas 和 SVG 渲染引擎 |
| [omi-mp](https://github.com/Tencent/omi/tree/master/packages/omi-mp)| 通过微信小程序开发和生成 Web 单页应用(H5 SPA)|
| [westore](https://github.com/Tencent/westore/)| 小程序状态管理 |
| [comi](https://github.com/Tencent/omi/tree/master/packages/comi)| 小程序代码高亮和 markdown 渲染组件 |
| [wx-touch-event](https://github.com/qbright/wx-touch-event)| 基于 [AlloyFinger](https://github.com/AlloyTeam/AlloyFinger) 改造的小程序手势解决方案 |

#### Other

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-piano![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png)](https://github.com/Wscats/piano) |Build piano with Omi and Omi Snippets, [Enjoy now!](https://wscats.github.io/piano/build/)|
| [omi-chart](https://github.com/Tencent/omi/tree/master/packages/omi-chart)| Simple HTML5 Charts using chart-x tag.|
| [md2site](https://tencent.github.io/omi/assets/md2site/)| Static Site Generator with markdown powered by Omio.|
| [omi-30-seconds](https://github.com/Tencent/omi/tree/master/packages/omi-30-seconds)| Useful Omi snippets that you can understand in 30 seconds.|
| [omi-canvas](https://github.com/Tencent/omi/tree/master/packages/omi-canvas)| Perfect fusion of web components, jsx and canvas.|
| [omi-swiper](https://github.com/loo41/Omi-Swiper)| Omi + Swiper  |
| [omi-vscode](https://github.com/ZainChen/omi-vscode)| VSCode extension for omi, [Install now!](https://marketplace.visualstudio.com/items?itemName=ZainChen.omi) |
| [omi-ex](https://github.com/Tencent/omi/tree/master/packages/omi-ex)| Omi.js extension(TypeScript) |
| [omi-transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)|Omi / [css3transform](https://tencent.github.io/omi/packages/omi-transform/css3transform/) integration. Made css3 transform super easy in your Omi project.|
| [omi-finger](https://github.com/Tencent/omi/tree/master/packages/omi-finger)|Support touch and gesture events in your Omi project.|
| [omi-touch](https://github.com/Tencent/omi/tree/master/packages/omi-touch)|Smooth scrolling, rotation, pull to refresh and any motion for the web.|
| [omi-native](https://github.com/Tencent/omi/tree/master/packages/omi-native)|Render web components to native|
| [omi-i18n](https://github.com/i18next/omi-i18n)| Internationalization solution for omi.js using i18next ecosystem |
| [omi-page](https://github.com/Tencent/omi/tree/master/packages/omi-page) |Tiny client-side router by [page](https://github.com/visionmedia/page.js)|
| [omie](https://github.com/Wscats/omi-electron) |Build cross platform desktop apps with Omi.js and Electron.js|
| [omi-cv](https://github.com/Wscats/CV) |Create a front-end engineer curriculum vitae, [Get Started!](http://wscats.github.io/CV/omi/build/index.html)|

## Why Omi?

- Tiny size and [High performance](https://tencent.github.io/omi/packages/omi/examples/perfs/)
- Cross frameworks(react, preact, vue, angular), components of omi are pure custom elements
- One framework. Mobile & desktop & mini program
- Stateless View Architecture Design
- Be friendly to custom elements, you can pass `false` attributes to elements through string `'0'` or string `'flase'`, you can [pass `object` attributes to elements through `:` prefix and `Omi.$`](https://github.com/Tencent/omi/releases/tag/v6.8.0)
- [Easy two way binding by extend api](https://codepen.io/omijs/pen/aeLYjx)
- Supports TypeScript
- Reactive data-binding
- [Native tap event support](https://github.com/Tencent/omi/releases/tag/v4.0.24)
- Having Cross-frameworks UI components - [omim](https://tencent.github.io/omi/packages/omim/docs/build/index.html)
- Excellent compatibility(IE8+) with [omio](https://github.com/Tencent/omi/tree/master/packages/omio)
- Enhanced CSS, [rpx unit support](https://github.com/Tencent/omi/releases/tag/v4.0.26) base on **750** screen width
- Compliance with browser trend and API design
- Merge [**Web Components**](https://developers.google.com/web/fundamentals/web-components/), [**JSX**](https://reactjs.org/docs/introducing-jsx.html) and [**HTM**](https://github.com/developit/htm) into one framework
- Web Components can also be a data-driven view, **`UI = fn(data)`**.
- JSX is the best development experience (code intelligent completion and tip) UI Expression with least [grammatical noise](https://github.com/facebook/jsx#why-not-template-literals) and it's turing complete(template engine is not, es template string is but grammatical noise is too loud)
- Look at [Facebook React vs Web Components](https://softwareengineering.stackexchange.com/questions/225400/pros-and-cons-of-facebooks-react-vs-web-components-polymer)，Omi **combines their advantages** and gives developers the **freedom to choose the way they like**
- **Shadow DOM merges with Virtual DOM**, Omi uses both virtual DOM and real Shadow DOM to make view updates more accurate and faster
- **Scoped CSS**'s best solution is [**Shadow DOM**](https://developers.google.com/web/fundamentals/web-components/shadowdom), the community churning out frameworks and libraries for Scoped CSS (using JS or JSON writing styles such as Radium, jsxstyle, react-style; binding to webpack using generated unique `className` `filename-classname-hash`, such as CSS Modules, Vue), are hack technologies; _and Shadow DOM Style is the perfect solution_.
- The original **Path Updating** **store system**. Proxy-based automatic **accurate** update, **low power consumption**, high degree of freedom, excellent performance, easy integration of `requestIdleCallback`,It will automatically update UI partially when data is changed

Compare TodoApp by Omi and React, Omi and React rendering DOM structure:

| **Omi**                         | **React**                           | **Omio**                           |
| ------------------------------- | ----------------------------------- |----------------------------------- |
| ![Omi](https://tencent.github.io/omi/assets/omi-render.jpg) | ![React](https://tencent.github.io/omi/assets/react-render.jpg) | ![Omio](https://tencent.github.io/omi/assets/omio.png) |

Omi uses Shadow DOM based style isolation and semantic structure.

## Useful Resources

| **Title Name**  | **Other language** | **Related**|
| ----------------------------------------- | ------------------ |-----------------|
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
