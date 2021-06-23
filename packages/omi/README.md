English | [简体中文](https://github.com/Tencent/omi/blob/master/README.CN.md) 

<p align="center"><img src="https://tencent.github.io/omi/assets/logo.svg" alt="omi" width="100"/></p>
<h2 align="center">Omi -  Front End Cross-Frameworks Framework</h2>

## With TypeScript

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
| [omix![](https://dntzhang.github.io/cax/asset/hot.png)](https://github.com/Tencent/omi/tree/master/packages/omix)| 小程序全局状态管理框架，数据触手可及，状态无处遁形 |
| [omim![](https://dntzhang.github.io/cax/asset/hot.png)](https://github.com/Tencent/omi/tree/master/packages/omim)| Cross **frameworks** and **themes** components.([DOCS & REPL](https://tencent.github.io/omi/packages/omim/docs/build/index.html) && [JOIN US!](https://github.com/Tencent/omi/tree/master/packages/omim#contribution))|
| [omi-kbone![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omi-kbone)| 使用 omi + [kbone](https://github.com/wechat-miniprogram/kbone) 多端开发(小程序和Web)的贪吃蛇游戏。 |
| [omio](https://github.com/Tencent/omi/tree/master/packages/omio)| Omi for old browsers with same api(IE8+)|
| [omis![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omis)| Omis + React|
| [omi-ssr](https://github.com/Tencent/omi/tree/master/packages/omi-ssr)| Server-side rendering(support omio only)|
| [omi-router](https://github.com/Tencent/omi/tree/master/packages/omi-router) |Omi official router in 1KB js|
| [omi-cli](https://github.com/Tencent/omi/tree/master/packages/omi-cli)| Project scaffolding. [→ Base Templates](https://github.com/Tencent/omi/tree/master/packages/omi-cli/template) and [→ Other Templates](https://github.com/omijs) |
| [omi-devtools](https://github.com/f/omi-devtools)| Browser DevTools extension |
| [omiu](https://tencent.github.io/omi/packages/omiu/examples/build/index.html)| Simple Omi UI |
| [omil](https://github.com/Wscats/omil)|Webpack loader for Omi.js components.([DOCS](https://wscats.github.io/omi-docs/public/home/))|
| [omi-snippets](https://github.com/Wscats/omi-snippets) |A beautify VSCode extension for .omi or .eno file, [Install now!](https://marketplace.visualstudio.com/items?itemName=Wscats.omi-snippets)|
| [obaa](https://github.com/Tencent/omi/tree/master/packages/obaa) or [JSONPatcherProxy](https://github.com/Palindrom/JSONPatcherProxy) | Observe or Proxy any object's any change |
<!-- | [omiv![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omiv)| 1kb store system for Vue apps. [SSR Now](https://github.com/Tencent/omi/tree/master/packages/vue-omiv-ssr-starter) | -->
#### :snake:Snake MVP 

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-snake![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omi-snake) & [→ Touch the demo](https://tencent.github.io/omi/packages/omi-snake/build/index.html)| The Snake-Eating Game Based on MVP Architecture Written by Omi |
| [omi-kbone-snake![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/omi-kbone)| omi-kbone 写的 MVP 架构的跨端贪吃蛇游戏，支持小程序和 H5 |
| [Preact-snake](https://github.com/Tencent/omi/tree/master/packages/preact-css/examples/snake) & [→ Touch the demo](https://tencent.github.io/omi/packages/preact-css/examples/snake/build/)| The Snake-Eating Game Based on MVP Architecture Written by Preact + [Preact-CSS](https://github.com/Tencent/omi/tree/master/packages/preact-css) + Omis |
| [[P]react-snake](https://github.com/Tencent/omi/tree/master/packages/react-snake) & [→ Touch the demo](https://tencent.github.io/omi/packages/react-snake/build/index.html)| The Snake-Eating Game Based on MVP Architecture Written by React/Preact |
| [omix-snake![](https://dntzhang.github.io/cax/asset/hot.png)](https://github.com/Tencent/omi/tree/master/packages/omix-snake) | The Snake-Eating Game Based on MVP Architecture Written by Omix  |
<!-- | [vue-snake](https://github.com/Tencent/omi/tree/master/packages/vue-snake) | The Snake-Eating Game Based on MVP Architecture Written by Vue + Omiv | -->
#### :+1:Mini Program(小程序) 

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omix![](https://dntzhang.github.io/cax/asset/hot.png)](https://github.com/Tencent/omi/tree/master/packages/omix)| 小程序全局状态管理框架，数据触手可及，状态无处遁形 |
| [react-kbone![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/react-kbone)| 直接使用 React 开发小程序或 Web，基于 [kbone](https://github.com/wechat-miniprogram/kbone) |
| [preact-kbone![](https://dntzhang.github.io/cax/asset/hot.png) ](https://github.com/Tencent/omi/tree/master/packages/preact-kbone)| 直接使用 Preact 开发小程序或 Web，基于 [kbone](https://github.com/wechat-miniprogram/kbone) |
| [omi-cloud](https://github.com/Tencent/omi/tree/master/packages/omi-cloud)| 小程序•云开发|
| [omip](https://github.com/Tencent/omi/tree/master/packages/omip)| 直接使用 Omi 开发小程序或 H5 SPA|
| [mps](https://github.com/Tencent/omi/tree/master/packages/mps)| 原生小程序增强框架(JSX + Less 输出 WXML + WXSS)，也支持 QQ 轻应用 |
| [cax](https://github.com/Tencent/omi/tree/master/packages/cax)| 小程序 Canvas 和 SVG 渲染引擎 |
| [omi-mp](https://github.com/Tencent/omi/tree/master/packages/omi-mp)| 通过微信小程序开发和生成 Web 单页应用(H5 SPA)|
| [westore](https://github.com/Tencent/westore/)| 小程序状态管理 |
| [comi](https://github.com/Tencent/omi/tree/master/packages/comi)| 小程序代码高亮和 markdown 渲染组件 |
| [wx-touch-event](https://github.com/qbright/wx-touch-event)| 基于 [AlloyFinger](https://github.com/AlloyTeam/AlloyFinger) 改造的小程序手势解决方案 |

#### :books:Other 

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [omi-piano![](https://dntzhang.github.io/cax/asset/hot.png)](https://github.com/Wscats/piano) |Build piano with Omi and Omi Snippets, [Enjoy now!](https://wscats.github.io/piano/build/)|
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
| [Soo](https://github.com/tonis2/Soo)| Has same API as omi but is great alternative if you want to create custom elements without JSX, virtual DOM and store |
|[CEE](https://omijs.github.io/cee/out/)| Fork from custom-elements-everywhere |

## Why Omi?

- Tiny size and [High performance](https://tencent.github.io/omi/packages/omi/examples/perfs/)
- Cross frameworks(react, preact, vue, angular), components of omi are pure custom elements
- One framework. Mobile & desktop & mini program
- Stateless View Architecture Design
- Be friendly to custom elements, you can pass `false` attributes to elements through string `'0'` or string `'false'`, you can [pass `object` attributes to elements through `:` prefix and `Omi.$`](https://github.com/Tencent/omi/releases/tag/v6.8.0)
- [Easy two way binding by extend api](https://codepen.io/omijs/pen/aeLYjx)
- Supports TypeScript
- Reactive data-binding
- [Native tap event support](https://github.com/Tencent/omi/releases/tag/v4.0.24)
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
- The original **Path Updating** **store system**. Proxy-based automatic **accurate** update, **low power consumption**, high degree of freedom, excellent performance, easy integration of `requestIdleCallback`,It will automatically update UI partially when data is changed

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
