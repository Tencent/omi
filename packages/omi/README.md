<p align="right">v<strong>6.0.0</strong></p>
<p align="center"><img src="https://tencent.github.io/omi/assets/omi-logo2019.svg" alt="omi" width="300"/></p>
<h2 align="center">Omi - Next front end framework using web components with omio(IE8+) and omip(小程序) fallback in tiny js.</h2>

---

## Ecosystem of Omi

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-docs](https://github.com/Tencent/omi/blob/master/docs/main-concepts.md)| Omi official documents |
| [omip![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omip)| 直接使用 Omi 开发小程序或 H5 SPA！！！|
| [omio![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omio)| Omi for old browsers(IE8+ and mobile browsers).|
| [omiu![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png)](https://tencent.github.io/omi/packages/omiu/examples/build/index.html)| Omi official UI|
| [omix![](https://raw.githubusercontent.com/dntzhang/cax/master/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omix)| Tiny size mini programe framework.|
| [omi-chart](https://github.com/Tencent/omi/tree/master/packages/omi-chart)| Simple HTML5 Charts using chart-x tag.|
| [md2site](https://tencent.github.io/omi/assets/md2site/)| Static Site Generator with markdown powered by Omio.|
| [omi-mvvm](https://github.com/Tencent/omi/blob/master/tutorial/omi-mvvm.md)| MVVM comes back bravely with [mappingjs](https://github.com/Tencent/omi/tree/master/packages/mappingjs) strong support.|
| [omi-html](https://github.com/Tencent/omi/tree/master/packages/omi-html)| Using [htm](https://github.com/developit/htm) in omi.|
| [omi-30-seconds](https://github.com/Tencent/omi/tree/master/packages/omi-30-seconds)| Useful Omi snippets that you can understand in 30 seconds.|
| [omi-canvas](https://github.com/Tencent/omi/tree/master/packages/omi-canvas)| Perfect fusion of web components, jsx and canvas.|
| [omi-mp](https://github.com/Tencent/omi/tree/master/packages/omi-mp)| Develop and generate Web HTML5 Single-Page Applications by wechat mini program. The output source is base on omi + [omi-router](https://github.com/Tencent/omi/tree/master/packages/omi-router)|
| [omi-router](https://github.com/Tencent/omi/tree/master/packages/omi-router) |Omi official router in 1KB js. [→ DEMO](https://tencent.github.io/omi/packages/omi-router/examples/spa/build/) |
| [omi-devtools](https://github.com/f/omi-devtools)| Browser DevTools extension |
| [omi-cli](https://github.com/Tencent/omi/tree/master/packages/omi-cli)| Project scaffolding |
| [omi-swiper](https://github.com/loo41/Omi-Swiper)| Omi + Swiper  |
| [omi-vscode](https://github.com/ZainChen/omi-vscode)| Vscode extension for omi, [Install now!](https://marketplace.visualstudio.com/items?itemName=ZainChen.omi) |
| [omi-ex](https://github.com/Tencent/omi/tree/master/packages/omi-ex)| Omi.js extension(TypeScript) |
| [omi-transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)|Omi / [css3transform](https://tencent.github.io/omi/packages/omi-transform/css3transform/) integration. Made css3 transform super easy in your Omi project.|
| [omi-tap](https://github.com/Tencent/omi/releases/tag/v4.0.24)| Native tap event support(omi v4.0.24+）|
| [omi-finger](https://github.com/Tencent/omi/tree/master/packages/omi-finger)|Support touch and gesture events in your Omi project.|
| [omi-touch](https://github.com/Tencent/omi/tree/master/packages/omi-touch)|Smooth scrolling, rotation, pull to refresh and any motion for the web.|
| [omi-use](https://github.com/Tencent/omi/blob/master/docs/main-concepts.md#use)|React hooks like API|
| [omi-native](https://github.com/Tencent/omi/tree/master/packages/omi-native)|Render web components to native|
|[omi-i18n](https://github.com/i18next/omi-i18n)| Internationalization solution for omi.js using i18next ecosystem |
| [omi-page](https://github.com/Tencent/omi/tree/master/packages/omi-page) |Tiny client-side router by [page](https://github.com/visionmedia/page.js)|

## Why Omi?

- Tiny size. 
- Supports TypeScript
- Reactive data-binding
- Excellent compatibility(IE8+) with [omio](https://github.com/Tencent/omi/tree/master/packages/omio)
- Real [MVVM](https://github.com/Tencent/omi/blob/master/tutorial/omi-mvvm.md) with [mappingjs](https://github.com/Tencent/omi/tree/master/packages/mappingjs) strong support
- Enhanced CSS, [rpx unit support](https://github.com/Tencent/omi/releases/tag/v4.0.26) base on **750** screen width
- Compliance with browser trend and API design
- Merge [**Web Components**](https://developers.google.com/web/fundamentals/web-components/) and [**JSX**](https://reactjs.org/docs/introducing-jsx.html)  into one framework
- Built in observe feature (No need to call `this.update()`)
- Web Components can also be a data-driven view, **`UI = fn(data)`**.
- JSX is the best development experience (code intelligent completion and tip) UI Expression with least [grammatical noise](https://github.com/facebook/jsx#why-not-template-literals) and it's turing complete(template engine is not, es template string is but grammatical noise is too loud)
- The original **Path Updating** system. Proxy-based automatic **accurate** update, **low power consumption**, high degree of freedom, excellent performance, easy integration of `requestIdleCallback`
- Say goodbye to `this.update` method when using **store system**! It will automatically update UI partially when data is changed
- Look at [Facebook React vs Web Components](https://softwareengineering.stackexchange.com/questions/225400/pros-and-cons-of-facebooks-react-vs-web-components-polymer)，Omi **combines their advantages** and gives developers the **freedom to choose the way they like**
- **Shadow DOM merges with Virtual DOM**, Omi uses both virtual DOM and real Shadow DOM to make view updates more accurate and faster
- With a Store system, 99.9% of projects don't need time travel, and not only Redux can travel, please don't come up on Redux, Omi store system can meet all projects
- **Scoped CSS**'s best solution is [**Shadow DOM**](https://developers.google.com/web/fundamentals/web-components/shadowdom), the community churning out frameworks and libraries for Scoped CSS (using JS or JSON writing styles such as Radium, jsxstyle, react-style; binding to webpack using generated unique `className` `filename-classname-hash`, such as CSS Modules, Vue), are hack technologies; _and Shadow DOM Style is the perfect solution_.

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
