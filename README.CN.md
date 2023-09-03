[English](./README.md) | 简体中文 

<p align="center"><img src="https://tencent.github.io/omi/assets/logo.svg" alt="omi" width="100"/></p>
<h2 align="center">Omi - 前端跨框架跨平台框架</h2>

```tsx
import { tag, WeElement, h, render } from 'omi'

@tag('hello-world')
class HelloWorld extends WeElement {
  static css = 'p { color: red }'
  
  render(props) {
    return (
      <>
        <h1>Omi</h1>
        <p>Hello {props.msg}</p>
      </>
    )
  }
}

render(<hello-world msg='World' />, 'body')
```

* [💯Omi 教程和游乐场](https://omi.cdn-go.cn/play/latest/index.html)
* [→ Omi 学习路线图](https://github.com/Tencent/omi/tree/master/assets/rm.md)

### 特性

- 跨框架，任何框架可以使用 Omi 自定义元素
- 提供桌面、移动和小程序整体解决方案
- 小巧的尺寸和[高性能](https://tencent.github.io/omi/packages/omi/examples/perfs/)
- [基于 Shadow/Light Dom 设计](https://developers.google.cn/web/fundamentals/web-components/shadowdom?hl=zh-cn)
- 符合浏览器的发展趋势以及 API 设计理念
- [**Web Components**](https://developers.google.com/web/fundamentals/web-components/) + [**JSX/TSX**](https://reactjs.org/docs/introducing-jsx.html) 融合为一个框架 Omi
- JSX/TSX 是开发体验最棒(智能提示)、[语法噪音最少](https://github.com/facebook/jsx#why-not-template-literals)、图灵完备的 UI 表达式，模板引擎不完备，模板字符串完备但是语法噪音太大
- 看看 [Facebook React 和 Web Components 对比优势](https://www.cnblogs.com/rubylouvre/p/4072979.html)，Omi 融合了各自的优点，而且给开发者自由的选择喜爱的方式
- `Shadow/Light DOM` 与 `Virtual DOM` 融合，Omi 既使用了`虚拟 DOM`，也是使用真实 `Shadow DOM`，让视图更新更准确更迅速
- 局部 CSS 最佳解决方案(`Shadow DOM`)，社区为局部 CSS 折腾了不少框架和库(使用 js 或 json 写样式，如:`Radium`，`jsxstyle`，`react-style`；与 webpack 绑定使用生成独特的 className `文件名—类名—hash值`，如：`CSS Modules`，`Vue`)，还有运行时注入`scoped atrr` 的方式，都是 hack 技术；`Shadow DOM Style` 是最完美的方案
- 对 custom elements 友好, 通过字符串 `'0'`或者`'false'`传递 `false`，[通过`:`和`Omi.$`传递任意复杂类型](https://github.com/Tencent/omi/releases/tag/v6.8.0)
- 增强了 CSS, [支持 rpx 单位](https://github.com/Tencent/omi/releases/tag/v4.0.26)，基于 **750** 屏幕宽度

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


### TypeScript 里用法

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


<!-- 
# 目录

- [Omi 生态](#omi-生态)
- [必须收藏的资源](#必须收藏的资源)
- [快速入门](#快速入门)
  - [项目模板](#项目模板)
  - [Hello Element](#hello-element)
  - [生命周期](#生命周期)
- [浏览器兼容](#浏览器兼容)
- [相关链接](#相关链接)
- [贡献者们](#贡献者们)
- [维护者](#维护者)
- [感谢](#感谢)
- [License](#license) -->


## 浏览器兼容

Omi适用于所有主要浏览器的最新两个版本:

![→ Browsers Support](./assets/browsers-support.png)

[→ polyfills](https://github.com/webcomponents/webcomponentsjs)

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"></script>
```



## 贡献者们

<a href="https://github.com/Tencent/omi/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Tencent/omi" />
</a>

感谢所有贡献者，欢迎更多人加入一起贡献。

### 一些例子

| **项目**                         | **描述**                           |
| ------------------------------- | ----------------------------------- |
| [snake![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/snake)| omi 写的 MVP 架构的贪吃蛇游戏 |
| [omi-kbone-snake![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omi-kbone)| omi-kbone 写的 MVP 架构的跨端贪吃蛇游戏，支持小程序和 H5  |
|[custom-elements-everywhere](https://custom-elements-everywhere.com/)| 框架和自定义元素无缝工作 |
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


## 必须收藏的资源

* [使用 MVP 架构和 Web Components(Omi) 开发贪吃蛇](https://github.com/Tencent/omi/blob/master/tutorial/omi-web-components-snake-game-mvp.cn.md)
* [Web Components 规范](https://github.com/w3c/webcomponents)
* [如何通过小程序实现跨平台开发](https://developers.weixin.qq.com/community/develop/article/doc/00002cda45c930d87a380a74351813)
* [你必须收藏 ES6 Spread Operator 技巧](https://github.com/Tencent/omi/blob/master/tutorial/spread-operator.cn.md)
* [深入浅出 Shadow Dom](https://github.com/Tencent/omi/blob/master/tutorial/shadow-dom-in-depth.cn.md)
* [HTM - JSX 的替代品？还是另一种选择？](https://github.com/Tencent/omi/blob/master/tutorial/omi-html.cn.md)
* [60FPS Animation In Omi](https://github.com/Tencent/omi/blob/master/tutorial/omi-transform.cn.md)
* [Web Components MDN](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
* [Web Components Google](https://developers.google.com/web/fundamentals/web-components/)
* [Web Components Org](https://www.webcomponents.org/introduction)
* [CSS Variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_variables)
* [CSS Shadow Parts](https://drafts.csswg.org/css-shadow-parts-1/)
* [Part Theme Explainer](https://meowni.ca/posts/part-theme-explainer/)
* [Platform HTML5](https://platform.html5.org/)
* [Web Components 的力量](https://github.com/Tencent/omi/blob/master/tutorial/the-power-of-web-components.cn.md)
* [ShadowRoot](https://developer.mozilla.org/zh-CN/docs/Web/API/ShadowRoot)
* [Developer Tools support for Web Components in Firefox 63](https://blog.nightly.mozilla.org/2018/09/06/developer-tools-support-for-web-components-in-firefox-63/)
* [Web Components中引入外部CSS的3种方法](https://www.zhangxinxu.com/wordpress/2021/02/web-components-import-css/)

## License

MIT © Tencent
