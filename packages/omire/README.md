<p align="right">v<strong>6.0.0</strong></p>
<p align="center"><img src="https://tencent.github.io/omi/assets/omi-logo2019.svg" alt="omi" width="300"/></p>
<h2 align="center">Omi - Next front end framework using web components with omio(IE8+) and omip(小程序) fallback in tiny js.</h2>

---

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
| ![Omi](https://tencent.github.io/omi/assets/omi-render.jpg) | ![React](https://tencent.github.io/omi/assets/react-render.jpg) |

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
