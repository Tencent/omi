English | [简体中文](./README.CN.md) 

<p align="center"><img src="https://tencent.github.io/omi/assets/logo.svg" alt="omi" width="100"/></p>
<h2 align="center">Omi -  Front End Cross-Frameworks Framework</h2>

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

## Omiu

> Cross-Frameworks and [Cross-Themes](https://tencent.github.io/omi/components/docs/#/theme?index=0&subIndex=1) UI Components powered by Omi

| **Name**         | **Status**         | **Example**            | **Docs** |
| -------------- | ----------|----------- | ----------------|
| [@omiu/button][omiu-button-github] | [![omiu-button-status]][omiu-button-package]|[CodePen][omiu-button-codepen] | [Button Docs][omiu-button-docs]|
| [@omiu/icon][omiu-icon-github] | [![omiu-icon-status]][omiu-icon-package]|[Icon Online][omiu-icon-codepen] | [Icon Docs][omiu-icon-docs]|
| [@omiu/tabs][omiu-tabs-github] | [![omiu-tabs-status]][omiu-tabs-package]|[CodePen][omiu-tabs-codepen] | [Tabs Docs][omiu-tabs-docs]|
| [@omiu/radio][omiu-radio-github] | [![omiu-radio-status]][omiu-radio-package]|[CodePen][omiu-radio-codepen] | [Radio Docs][omiu-radio-docs]|
| [@omiu/link][omiu-link-github] | [![omiu-link-status]][omiu-link-package]|[CodePen][omiu-link-codepen] | [Link Docs][omiu-link-docs]|
| [@omiu/checkbox][omiu-checkbox-github] | [![omiu-checkbox-status]][omiu-checkbox-package]|[CodePen][omiu-checkbox-codepen] | [Checkbox Docs][omiu-checkbox-docs]|
| [@omiu/hamburger-menu][omiu-hamburger-menu-github] | [![omiu-hamburger-menu-status]][omiu-hamburger-menu-package]|[CodePen][omiu-hamburger-menu-codepen] | [HamburgerMenu Docs][omiu-hamburger-menu-docs]|
| [@omiu/input][omiu-input-github] | [![omiu-input-status]][omiu-input-package]|[CodePen][omiu-input-codepen] | [Input Docs][omiu-input-docs]|
| [@omiu/tree][omiu-tree-github] | [![omiu-tree-status]][omiu-tree-package]|[CodePen][omiu-tree-codepen] | [Tree Docs][omiu-tree-docs]|
| [@omiu/pagination][omiu-pagination-github] | [![omiu-pagination-status]][omiu-pagination-package]|[CodePen][omiu-pagination-codepen] | [Pagination Docs][omiu-pagination-docs]|
| [@omiu/loading][omiu-loading-github] | [![omiu-loading-status]][omiu-loading-package]|[CodePen][omiu-loading-codepen] | [Loading Docs][omiu-loading-docs]|
| [@omiu/toast][omiu-toast-github] | [![omiu-toast-status]][omiu-toast-package]|[CodePen][omiu-toast-codepen] | [Toast Docs][omiu-toast-docs]|
| [@omiu/action-sheet][omiu-action-sheet-github] | [![omiu-action-sheet-status]][omiu-action-sheet-package]|[CodePen][omiu-action-sheet-codepen] | [ActionSheet Docs][omiu-action-sheet-docs]|
| [@omiu/switch][omiu-switch-github] | [![omiu-switch-status]][omiu-switch-package]|[CodePen][omiu-switch-codepen] | [Switch Docs][omiu-switch-docs]|
| [@omiu/color-picker][omiu-color-picker-github] | [![omiu-color-picker-status]][omiu-color-picker-package]|[CodePen][omiu-color-picker-codepen] | [ColorPicker Docs][omiu-color-picker-docs]|
| [@omiu/chart][omiu-chart-github] | [![omiu-chart-status]][omiu-chart-package]|[CodePen][omiu-chart-codepen] | [Chart Docs][omiu-chart-docs]|
| [@omiu/toggle-icon][omiu-toggle-icon-github] | [![omiu-toggle-icon-status]][omiu-toggle-icon-package]|[CodePen][omiu-toggle-icon-codepen] | [ToggleIcon Docs][omiu-toggle-icon-docs]|
| [@omiu/o-icon][omiu-o-icon-github] | [![omiu-o-icon-status]][omiu-o-icon-package]|[CodePen][omiu-o-icon-codepen] | [OIcon Docs][omiu-o-icon-docs]|
| [@omiu/badge][omiu-badge-github] | [![omiu-badge-status]][omiu-badge-package]|[CodePen][omiu-badge-codepen] | [Badge Docs][omiu-badge-docs]|
| [@omiu/avatar][omiu-avatar-github] | [![omiu-avatar-status]][omiu-avatar-package]|[CodePen][omiu-avatar-codepen] | [Avatar Docs][omiu-avatar-docs]|
| [@omiu/breadcrumb][omiu-breadcrumb-github] | [![omiu-breadcrumb-status]][omiu-breadcrumb-package]|[CodePen][omiu-breadcrumb-codepen] | [Breadcrumb Docs][omiu-breadcrumb-docs]|
| [@omiu/bottom-nav][omiu-bottom-nav-github] | [![omiu-bottom-nav-status]][omiu-bottom-nav-package]|[CodePen][omiu-bottom-nav-codepen] | [BottomNav Docs][omiu-bottom-nav-docs]|
| [@omiu/transition][omiu-transition-github] | [![omiu-transition-status]][omiu-transition-package]|[CodePen][omiu-transition-codepen] | [Transition Docs][omiu-transition-docs]|
| [@omiu/dialog][omiu-dialog-github] | [![omiu-dialog-status]][omiu-dialog-package]|[CodePen][omiu-dialog-codepen] | [Dialog Docs][omiu-dialog-docs]|
| [@omiu/dialog-extention][omiu-dialog-extention-github] | [![omiu-dialog-extention-status]][omiu-dialog-extention-package]|[CodePen][omiu-dialog-extention-codepen] | [DialogExtention Docs][omiu-dialog-extention-docs]|
| Coming... | |  | |
| Coming... | |  | |

[omiu-button-github]: https://github.com/Tencent/omi/tree/master/components/button
[omiu-button-status]: https://img.shields.io/npm/v/@omiu/button.svg
[omiu-button-package]: https://www.npmjs.com/package/@omiu/button
[omiu-button-docs]: https://tencent.github.io/omi/components/docs/index.html#/button
[omiu-button-codepen]: https://codepen.io/omijs/pen/LYppwYG

[omiu-icon-github]: https://github.com/Tencent/omi/tree/master/components/icon
[omiu-icon-status]: https://img.shields.io/npm/v/@omiu/icon.svg
[omiu-icon-package]: https://www.npmjs.com/package/@omiu/icon
[omiu-icon-docs]: https://tencent.github.io/omi/components/docs/index.html#/icon
[omiu-icon-codepen]: https://tencent.github.io/omi/components/icon/demos/icon.html

[omiu-tabs-github]: https://github.com/Tencent/omi/tree/master/components/tabs
[omiu-tabs-status]: https://img.shields.io/npm/v/@omiu/tabs.svg
[omiu-tabs-package]: https://www.npmjs.com/package/@omiu/tabs
[omiu-tabs-docs]: https://tencent.github.io/omi/components/docs/index.html#/tabs
[omiu-tabs-codepen]: https://codepen.io/omijs/pen/XWmjyXK


[omiu-radio-github]: https://github.com/Tencent/omi/tree/master/components/radio
[omiu-radio-status]: https://img.shields.io/npm/v/@omiu/radio.svg
[omiu-radio-package]: https://www.npmjs.com/package/@omiu/radio
[omiu-radio-docs]: https://tencent.github.io/omi/components/docs/index.html#/radio
[omiu-radio-codepen]: https://codepen.io/omijs/pen/GRpjapr


[omiu-link-github]: https://github.com/Tencent/omi/tree/master/components/link
[omiu-link-status]: https://img.shields.io/npm/v/@omiu/link.svg
[omiu-link-package]: https://www.npmjs.com/package/@omiu/link
[omiu-link-docs]: https://tencent.github.io/omi/components/docs/index.html#/link
[omiu-link-codepen]: https://codepen.io/omijs/pen/KKdNBaO


[omiu-hamburger-menu-github]: https://github.com/Tencent/omi/tree/master/components/hamburger-menu
[omiu-hamburger-menu-status]: https://img.shields.io/npm/v/@omiu/hamburger-menu.svg
[omiu-hamburger-menu-package]: https://www.npmjs.com/package/@omiu/hamburger-menu
[omiu-hamburger-menu-docs]: https://tencent.github.io/omi/components/docs/index.html#/hamburger-menu
[omiu-hamburger-menu-codepen]: https://codepen.io/omijs/pen/MWapaJd


[omiu-input-github]: https://github.com/Tencent/omi/tree/master/components/input
[omiu-input-status]: https://img.shields.io/npm/v/@omiu/input.svg
[omiu-input-package]: https://www.npmjs.com/package/@omiu/input
[omiu-input-docs]: https://tencent.github.io/omi/components/docs/index.html#/input
[omiu-input-codepen]: https://codepen.io/omijs/pen/yLYMGqa

[omiu-checkbox-github]: https://github.com/Tencent/omi/tree/master/components/checkbox
[omiu-checkbox-status]: https://img.shields.io/npm/v/@omiu/checkbox.svg
[omiu-checkbox-package]: https://www.npmjs.com/package/@omiu/checkbox
[omiu-checkbox-docs]: https://tencent.github.io/omi/components/docs/index.html#/checkbox
[omiu-checkbox-codepen]: https://codepen.io/omijs/pen/MWapwNZ

[omiu-switch-github]: https://github.com/Tencent/omi/tree/master/components/switch
[omiu-switch-status]: https://img.shields.io/npm/v/@omiu/switch.svg
[omiu-switch-package]: https://www.npmjs.com/package/@omiu/switch
[omiu-switch-docs]: https://tencent.github.io/omi/components/docs/index.html#/switch
[omiu-switch-codepen]: https://codepen.io/omijs/pen/BaoRpLd

[omiu-tree-github]: https://github.com/Tencent/omi/tree/master/components/tree
[omiu-tree-status]: https://img.shields.io/npm/v/@omiu/tree.svg
[omiu-tree-package]: https://www.npmjs.com/package/@omiu/tree
[omiu-tree-docs]: https://tencent.github.io/omi/components/docs/index.html#/tree
[omiu-tree-codepen]: https://codepen.io/omijs/pen/yLYMrdg

[omiu-pagination-github]: https://github.com/Tencent/omi/tree/master/components/pagination
[omiu-pagination-status]: https://img.shields.io/npm/v/@omiu/pagination.svg
[omiu-pagination-package]: https://www.npmjs.com/package/@omiu/pagination
[omiu-pagination-docs]: https://tencent.github.io/omi/components/docs/index.html#/pagination
[omiu-pagination-codepen]: https://codepen.io/omijs/pen/MWamyBQ

[omiu-loading-github]: https://github.com/Tencent/omi/tree/master/components/loading
[omiu-loading-status]: https://img.shields.io/npm/v/@omiu/loading.svg
[omiu-loading-package]: https://www.npmjs.com/package/@omiu/loading
[omiu-loading-docs]: https://tencent.github.io/omi/components/docs/index.html#/loading
[omiu-loading-codepen]: https://codepen.io/omijs/pen/oNjZRwO

[omiu-toast-github]: https://github.com/Tencent/omi/tree/master/components/toast
[omiu-toast-status]: https://img.shields.io/npm/v/@omiu/toast.svg
[omiu-toast-package]: https://www.npmjs.com/package/@omiu/toast
[omiu-toast-docs]: https://tencent.github.io/omi/components/docs/index.html#/toast
[omiu-toast-codepen]: https://codepen.io/omijs/pen/YzyVwOO

[omiu-action-sheet-github]: https://github.com/Tencent/omi/tree/master/components/action-sheet
[omiu-action-sheet-status]: https://img.shields.io/npm/v/@omiu/action-sheet.svg
[omiu-action-sheet-package]: https://www.npmjs.com/package/@omiu/action-sheet
[omiu-action-sheet-docs]: https://tencent.github.io/omi/components/docs/index.html#/action-sheet
[omiu-action-sheet-codepen]: https://codepen.io/omijs/pen/wvKdoNJ

[omiu-color-picker-github]: https://github.com/Tencent/omi/tree/master/components/color-picker
[omiu-color-picker-status]: https://img.shields.io/npm/v/@omiu/color-picker.svg
[omiu-color-picker-package]: https://www.npmjs.com/package/@omiu/color-picker
[omiu-color-picker-docs]: https://tencent.github.io/omi/components/docs/index.html#/color-picker
[omiu-color-picker-codepen]: https://codepen.io/omijs/pen/gOaWmZE

[omiu-chart-github]: https://github.com/Tencent/omi/tree/master/components/chart
[omiu-chart-status]: https://img.shields.io/npm/v/@omiu/chart.svg
[omiu-chart-package]: https://www.npmjs.com/package/@omiu/chart
[omiu-chart-docs]: https://tencent.github.io/omi/components/docs/index.html#/chart
[omiu-chart-codepen]: https://codepen.io/omijs/pen/pojPKLr

[omiu-toggle-icon-github]: https://github.com/Tencent/omi/tree/master/components/toggle-icon
[omiu-toggle-icon-status]: https://img.shields.io/npm/v/@omiu/toggle-icon.svg
[omiu-toggle-icon-package]: https://www.npmjs.com/package/@omiu/toggle-icon
[omiu-toggle-icon-docs]: https://tencent.github.io/omi/components/docs/index.html#/toggle-icon
[omiu-toggle-icon-codepen]: https://codepen.io/omijs/pen/ZEbKwXX

[omiu-o-icon-github]: https://github.com/Tencent/omi/tree/master/components/o-icon
[omiu-o-icon-status]: https://img.shields.io/npm/v/@omiu/o-icon.svg
[omiu-o-icon-package]: https://www.npmjs.com/package/@omiu/o-icon
[omiu-o-icon-docs]: https://tencent.github.io/omi/components/docs/index.html#/o-icon
[omiu-o-icon-codepen]: https://codepen.io/omijs/pen/QWjgapY

[omiu-badge-github]: https://github.com/Tencent/omi/tree/master/components/badge
[omiu-badge-status]: https://img.shields.io/npm/v/@omiu/badge.svg
[omiu-badge-package]: https://www.npmjs.com/package/@omiu/badge
[omiu-badge-docs]: https://tencent.github.io/omi/components/docs/index.html#/badge
[omiu-badge-codepen]: https://codepen.io/omijs/pen/WNQOdaB

[omiu-avatar-github]: https://github.com/Tencent/omi/tree/master/components/avatar
[omiu-avatar-status]: https://img.shields.io/npm/v/@omiu/avatar.svg
[omiu-avatar-package]: https://www.npmjs.com/package/@omiu/avatar
[omiu-avatar-docs]: https://tencent.github.io/omi/components/docs/index.html#/avatar
[omiu-avatar-codepen]: https://codepen.io/omijs/pen/QWjgaze

[omiu-breadcrumb-github]: https://github.com/Tencent/omi/tree/master/components/breadcrumb
[omiu-breadcrumb-status]: https://img.shields.io/npm/v/@omiu/breadcrumb.svg
[omiu-breadcrumb-package]: https://www.npmjs.com/package/@omiu/breadcrumb
[omiu-breadcrumb-docs]: https://tencent.github.io/omi/components/docs/index.html#/breadcrumb
[omiu-breadcrumb-codepen]: https://codepen.io/omijs/pen/wvKqGxB


[omiu-bottom-nav-github]: https://github.com/Tencent/omi/tree/master/components/bottom-nav
[omiu-bottom-nav-status]: https://img.shields.io/npm/v/@omiu/bottom-nav.svg
[omiu-bottom-nav-package]: https://www.npmjs.com/package/@omiu/bottom-nav
[omiu-bottom-nav-docs]: https://tencent.github.io/omi/components/docs/index.html#/bottom-nav
[omiu-bottom-nav-codepen]: https://codepen.io/omijs/pen/zYvdjEY

[omiu-transition-github]: https://github.com/Tencent/omi/tree/master/components/transition
[omiu-transition-status]: https://img.shields.io/npm/v/@omiu/transition.svg
[omiu-transition-package]: https://www.npmjs.com/package/@omiu/transition
[omiu-transition-docs]: https://tencent.github.io/omi/components/docs/index.html#/transition
[omiu-transition-codepen]: https://codepen.io/omijs/pen/JjYyezQ

[omiu-dialog-github]: https://github.com/Tencent/omi/tree/master/components/dialog
[omiu-dialog-status]: https://img.shields.io/npm/v/@omiu/dialog.svg
[omiu-dialog-package]: https://www.npmjs.com/package/@omiu/dialog
[omiu-dialog-docs]: https://tencent.github.io/omi/components/docs/index.html#/dialog
[omiu-dialog-codepen]: https://codepen.io/omijs/pen/JjYyezQ

[omiu-dialog-extention-github]: https://github.com/Tencent/omi/tree/master/components/dialog-extention
[omiu-dialog-extention-status]: https://img.shields.io/npm/v/@omiu/dialog-extention.svg
[omiu-dialog-extention-package]: https://www.npmjs.com/package/@omiu/dialog-extention
[omiu-dialog-extention-docs]: https://tencent.github.io/omi/components/docs/index.html#/dialog-extention
[omiu-dialog-extention-codepen]: https://codepen.io/omijs/pen/GRpOBmL

## Ecosystem of Omi

#### :100:Base 

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-docs](https://tencent.github.io/omi/site/docs/index.html) and [codepen](https://codepen.io/collection/DrMYgV/) and [webcomponents.dev](https://webcomponents.dev/)| Omi official documents |
| [omi-router](https://github.com/Tencent/omi/tree/master/packages/omi-router) |Omi official router in 1KB js|
| [omi-cli](https://github.com/Tencent/omi/tree/master/packages/omi-cli)| Project scaffolding. [→ Base Templates](https://github.com/Tencent/omi/tree/master/packages/omi-cli/template)|
|[CEE](https://omijs.github.io/cee/out/)| Fork from custom-elements-everywhere |

#### :snake:Snake MVP 

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-snake![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omi-snake) & [→ Touch the demo](https://tencent.github.io/omi/packages/omi-snake/build/index.html)| The Snake-Eating Game Based on MVP Architecture Written by Omi |
| [omi-kbone-snake![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omi-kbone)| omi-kbone 写的 MVP 架构的跨端贪吃蛇游戏，支持小程序和 H5 |
| [Preact-snake](https://github.com/Tencent/omi/tree/master/packages/preact-css/examples/snake) & [→ Touch the demo](https://tencent.github.io/omi/packages/preact-css/examples/snake/build/)| The Snake-Eating Game Based on MVP Architecture Written by Preact + [Preact-CSS](https://github.com/Tencent/omi/tree/master/packages/preact-css) + Omis |
| [[P]react-snake](https://github.com/Tencent/omi/tree/master/packages/react-snake) & [→ Touch the demo](https://tencent.github.io/omi/packages/react-snake/build/index.html)| The Snake-Eating Game Based on MVP Architecture Written by React/Preact |
| [omix-snake![](https://dntzhang.github.io/cax/asset/hot.png)](https://github.com/Tencent/omi/tree/master/packages/omix-snake) | The Snake-Eating Game Based on MVP Architecture Written by Omix  |

#### :books:Other 

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-piano![](https://dntzhang.github.io/cax/asset/hot.png)](https://github.com/Wscats/piano) |Build piano with Omi and Omi Snippets, [Enjoy now!](https://wscats.github.io/piano/build/)|
| [omi-devtools](https://github.com/f/omi-devtools)| Browser DevTools extension |
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
| [omie](https://github.com/Wscats/omi-electron) |Build cross platform desktop apps with Omi.js and Electron.js|
| [omi-cv](https://github.com/Wscats/CV) |Create a front-end engineer curriculum vitae, [Get Started!](http://wscats.github.io/CV/omi/build/index.html)|
| [Soo](https://github.com/tonis2/Soo)| Has same API as omi but is great alternative if you want to create custom elements without JSX, virtual DOM and store |


## Why Omi?

- Tiny size and [High performance](https://tencent.github.io/omi/packages/omi/examples/perfs/)
- Cross frameworks(react, preact, vue, angular), components of omi are pure custom elements
- One framework. Mobile & desktop & mini program
- Stateless View Architecture Design
- Be friendly to custom elements, you can pass `false` attributes to elements through string `'0'` or string `'false'`, you can [pass `object` attributes to elements through `:` prefix and `Omi.$`](https://github.com/Tencent/omi/releases/tag/v6.8.0)
- [Easy two way binding by extend api](https://codepen.io/omijs/pen/aeLYjx)
- Having Cross-frameworks UI components - [omim](https://tencent.github.io/omi/packages/omim/docs/build/index.html)
- Excellent compatibility(IE8+) with [omio](https://github.com/Tencent/omi/tree/master/packages/omio)
- Enhanced CSS, [rpx unit support](https://github.com/Tencent/omi/releases/tag/v4.0.26) base on **750** screen width
- Compliance with browser trend and API design
- Merge [**Web Components**](https://developers.google.com/web/fundamentals/web-components/), [**JSX**](https://reactjs.org/docs/introducing-jsx.html) into one framework
- Web Components can also be a data-driven view, **`UI = fn(data)`**.
- JSX is the best development experience (code intelligent completion and tip) UI Expression with least [grammatical noise](https://github.com/facebook/jsx#why-not-template-literals) and it's turing complete(template engine is not, es template string is but grammatical noise is too loud)
- Look at [Facebook React vs Web Components](https://softwareengineering.stackexchange.com/questions/225400/pros-and-cons-of-facebooks-react-vs-web-components-polymer)，Omi **combines their advantages** and gives developers the **freedom to choose the way they like**
- **Shadow DOM or Light DOM merges with Virtual DOM**, Omi uses both virtual DOM and real Shadow DOM to make view updates more accurate and faster
- **Scoped CSS**'s best solution is [**Shadow DOM**](https://developers.google.com/web/fundamentals/web-components/shadowdom), the community churning out frameworks and libraries for Scoped CSS (using JS or JSON writing styles such as Radium, jsxstyle, react-style; binding to webpack using generated unique `className` `filename-classname-hash`, such as CSS Modules, Vue), are hack technologies; _and Shadow DOM Style is the perfect solution_.

Compare TodoApp by Omi and React, Omi and React rendering DOM structure:

| **Omi**                         | **React**                           | **Omio**                           |
| ------------------------------- | ----------------------------------- |----------------------------------- |
| ![Omi](https://tencent.github.io/omi/assets/omi-render.jpg) | ![React](https://tencent.github.io/omi/assets/react-render.jpg) | ![Omio](https://tencent.github.io/omi/assets/omio.png) |

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
  - [Install](#install)
  - [Project Template](#project-template)
  - [Hello Element](#hello-element)
  - [TypeScript Auto Complete](#typescript-auto-complete)
  - [Lifecycle](#lifecycle)
- [Debugging](#debugging)
- [Browsers Support](#browsers-support)
- [Contributors](#contributors)
- [Maintainers](#maintainers)
- [Thanks](#thanks)
- [License](#license)

## Getting Started

### Install

```bash
$ npm i omi-cli -g    # install cli
$ omi init my-app     # init project
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
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
"build-windows": "set PUBLIC_URL=https://fe.wxpay.oa.com/dv && node scripts/build.js",
...
```


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

## Debugging

Easy to debug via [Omi DevTools Extension](https://github.com/f/omi-devtools) [[Install from Chrome WebStore](https://chrome.google.com/webstore/detail/omijs-devtools/pjgglfliglbhpcpalbpeloghnbceocmd)], using Omi DevTools you can simply debug and manage your UI **without any configuration**. Just install and debug.

Since Omi uses Web Components and Shadow-DOM, it doesn't need to have another elements panel such as React has. It just adds a panel to the **Elements' sidebar** and it's powerful as much as React DevTools.

![Omi DevTools](https://github.com/f/omi-devtools/raw/master/omi-devtools.gif)

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

<table><tbody>
      <tr><td><a target="_blank" href="https://github.com/dntzhang"><img width="60px" src="https://avatars2.githubusercontent.com/u/7917954?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/LeeHyungGeun"><img width="60px" src="https://avatars2.githubusercontent.com/u/2471651?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/xcatliu"><img width="60px" src="https://avatars1.githubusercontent.com/u/5453359?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/1921622004"><img width="60px" src="https://avatars1.githubusercontent.com/u/19359217?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/yanceyou"><img width="60px" src="https://avatars2.githubusercontent.com/u/16320418?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/f"><img width="60px" src="https://avatars0.githubusercontent.com/u/196477?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/pasturn"><img width="60px" src="https://avatars0.githubusercontent.com/u/6126885?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/Wscats"><img width="60px" src="https://avatars3.githubusercontent.com/u/17243165?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/akira-cn"><img width="60px" src="https://avatars0.githubusercontent.com/u/316498?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/ZainChen"><img width="60px" src="https://avatars3.githubusercontent.com/u/15615524?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/dangxuandev"><img width="60px" src="https://avatars1.githubusercontent.com/u/5436704?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/daizhan"><img width="60px" src="https://avatars0.githubusercontent.com/u/5318547?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/132yse"><img width="60px" src="https://avatars1.githubusercontent.com/u/12951461?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/elfman"><img width="60px" src="https://avatars3.githubusercontent.com/u/948001?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/NoBey"><img width="60px" src="https://avatars3.githubusercontent.com/u/10740524?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/hilkbahar"><img width="60px" src="https://avatars2.githubusercontent.com/u/12161006?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/eyea"><img width="60px" src="https://avatars0.githubusercontent.com/u/17020223?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/guisturdy"><img width="60px" src="https://avatars1.githubusercontent.com/u/7098619?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/KidneyFlower"><img width="60px" src="https://avatars1.githubusercontent.com/u/16027183?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/zhangsanshi"><img width="60px" src="https://avatars1.githubusercontent.com/u/3771933?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/xland"><img width="60px" src="https://avatars0.githubusercontent.com/u/2980915?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/winstonxie"><img width="60px" src="https://avatars3.githubusercontent.com/u/16422642?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/ghostzhang"><img width="60px" src="https://avatars3.githubusercontent.com/u/194242?s=60&amp;v=4"></a></td>
      <td><a target="_blank" href="https://github.com/jayZOU"><img width="60px" src="https://avatars3.githubusercontent.com/u/8576977?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/zhengbao"><img width="60px" src="https://avatars3.githubusercontent.com/u/1736166?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/vorshen"><img width="60px" src="https://avatars3.githubusercontent.com/u/10334783?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/akira-cn"><img width="60px" src="https://avatars3.githubusercontent.com/u/316498?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/loo41"><img width="60px" src="https://avatars3.githubusercontent.com/u/28095677?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/rainmanhhh"><img width="60px" src="https://avatars3.githubusercontent.com/u/13862623?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/nbompetsis"><img width="60px" src="https://avatars3.githubusercontent.com/u/11991105?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/CodeFalling"><img width="60px" src="https://avatars1.githubusercontent.com/u/5436704?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/daizhan"><img width="60px" src="https://avatars0.githubusercontent.com/u/5318547?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/ritschwumm"><img width="60px" src="https://avatars2.githubusercontent.com/u/547138?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/kahwee"><img width="60px" src="https://avatars3.githubusercontent.com/u/262105?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/alanyinjs"><img width="60px" src="https://avatars3.githubusercontent.com/u/25688258?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/electerious"><img width="60px" src="https://avatars2.githubusercontent.com/u/499088?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/nanhupatar"><img width="60px" src="https://avatars1.githubusercontent.com/u/27266016?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/ilker0"><img width="60px" src="https://avatars1.githubusercontent.com/u/23511412?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/MrGrabazu"><img width="60px" src="https://avatars2.githubusercontent.com/u/6928672?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/Tagir-A"><img width="60px" src="https://avatars2.githubusercontent.com/u/23556586?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/mahmut-gundogdu"><img width="60px" src="https://avatars2.githubusercontent.com/u/2217899?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/howel52"><img width="60px" src="https://avatars3.githubusercontent.com/u/9854818?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/yolio2003"><img width="60px" src="https://avatars1.githubusercontent.com/u/352931?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/loo41"><img width="60px" src="https://avatars3.githubusercontent.com/u/28095677?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/nbompetsis"><img width="60px" src="https://avatars1.githubusercontent.com/u/11991105?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/WozHuang"><img width="60px" src="https://avatars2.githubusercontent.com/u/22727100?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/web-padawan"><img width="60px" src="https://avatars2.githubusercontent.com/u/10589913?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/SuperHuangXu"><img width="60px" src="https://avatars1.githubusercontent.com/u/14816052?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/LastHeaven"><img width="60px" src="https://avatars1.githubusercontent.com/u/10590077?s=60&amp;v=4"></a></td>
      <td><a target="_blank" href="https://github.com/validalias"><img width="60px" src="https://avatars3.githubusercontent.com/u/44221844?s=60&amp;v=4"></a></td></tr><tr>
      <td><a target="_blank" href="https://github.com/FAKER-A"><img width="60px" src="https://avatars2.githubusercontent.com/u/25676164?s=60&amp;v=4"></a></td>
       <td><a target="_blank" href="https://github.com/liulinboyi"><img width="60px" src="https://avatars2.githubusercontent.com/u/41336612?s=60&amp;v=4"></a></td>
        <td><a target="_blank" href="https://github.com/hulei"><img width="60px" src="https://avatars2.githubusercontent.com/u/6905072?s=60&amp;v=4"></a></td> <td><a target="_blank" href="https://github.com/mtonhuang"><img width="60px" src="https://avatars2.githubusercontent.com/u/30364922?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/Juliiii"><img width="60px" src="https://avatars2.githubusercontent.com/u/23744602?s=60&amp;v=4"></a></td></tr><tr><td><a target="_blank" href="https://github.com/mingkang1993"><img width="60px" src="https://avatars2.githubusercontent.com/u/9126292?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/liufushihai"><img width="60px" src="https://avatars2.githubusercontent.com/u/28208916?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/supermp"><img width="60px" src="https://avatars2.githubusercontent.com/u/892475?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/LeachZhou"><img width="60px" src="https://avatars2.githubusercontent.com/u/18715564?s=60&amp;v=4"></a></td><td><a target="_blank" href="https://github.com/yiliang114"><img width="60px" src="https://avatars2.githubusercontent.com/u/11473889?s=60&amp;v=4"></a></td>
        </tr><tr><td><a target="_blank" href="https://github.com/liubailing"><img width="60px" src="https://avatars2.githubusercontent.com/u/3907493?s=60&amp;v=4"></a></td>
        <td><a target="_blank" href="https://github.com/fyuan1992"><img width="60px" src="https://avatars2.githubusercontent.com/u/19830858?s=60&amp;v=4"></a></td>
         <td><a target="_blank" href="https://github.com/xinshangshangxin"><img width="60px" src="https://avatars2.githubusercontent.com/u/8779091?s=60&amp;v=4"></a></td>
        <td><a target="_blank" href="https://github.com/aolu11"><img width="60px" src="https://avatars2.githubusercontent.com/u/1127488?s=60&amp;v=4"></a></td>
        </tr></tbody></table>

Any form of contribution is welcome. The above contributors have been officially released by Tencent.

We very much welcome developers to contribute to Tencent's open source, and we will also give them incentives to acknowledge and thank them. Here we provide an official description of Tencent's open source contribution. Specific contribution rules for each project are formulated by the project team. Developers can choose the appropriate project and participate according to the corresponding rules. The Tencent Project Management Committee will report regularly to qualified contributors and awards will be issued by the official contact.

## Core Maintainers

- [AlloyTeam](http://alloyteam.com/)
- [@Wscats](https://github.com/Wscats)
- [@f](https://github.com/f)
- [@LeeHyungGeun](https://github.com/LeeHyungGeun)
- [@dntzhang](https://github.com/dntzhang)
- [@xcatliu](https://github.com/xcatliu)

Please contact us for any questions. 

## Thanks

* [preact](https://github.com/developit/preact)
* [obaa](https://github.com/Tencent/omi/tree/master/packages/obaa) 
* [create-react-app](https://github.com/facebook/create-react-app)
* [JSX](https://github.com/facebook/jsx)
* [JSONPatcherProxy](https://github.com/Palindrom/JSONPatcherProxy)

## License

MIT © Tencent
