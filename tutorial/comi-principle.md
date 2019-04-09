# Comi - 小程序 markdown 渲染和代码高亮解决方案

Comi 读 ['kəʊmɪ]，类似中文 科米，是腾讯 Omi 团队开发的小程序代码高亮和 markdown 渲染组件。

<img src="https://github.com/Tencent/omi/raw/master/assets/comi.jpg" width="320">

### 体验

![](https://github.com/Tencent/omi/raw/master/assets/omi-cloud.jpg)

Comi 基于下面的 5 个组件进行开发：

* prismjs
* wxParse
* remarkable
* html2json
* htmlparser

先看 Comi 使用，再分析原理。

## 使用

先拷贝 [此目录](https://github.com/Tencent/omi/tree/master/packages/comi/mp/comi) 到你的项目。

js:

```js
const comi = require('../../comi/comi.js');

Page({
  onLoad: function () {
    comi(`你要渲染的 md！`, this)
  }
})
```

wxml:

```html
<include src="../../comi/comi.wxml" />
```

wxss:

```css
@import "../../comi/comi.wxss";
```

简单把！

### 在 omip 中使用

先拷贝 [此目录](https://github.com/Tencent/omi/tree/master/packages/comi/omip/src/components/comi) 到你的项目。

js:

```jsx
import { WeElement, define } from 'omi'
import './index.css'
import comi from '../../components/comi/comi'

define('page-index', class extends WeElement {

  install() {
    comi(`你要渲染的 md`, this.$scope)
  }

  render() {
    return (
      <view>
        <include src="../../components/comi/comi.wxml" />
      </view>
    )
  }
})
```

css:

```css
@import '../../components/comi/comi.wxss';
```

## 原理

在开发 Comi 之前，我们进行了预研，是否有必要造这个轮子。

### 代码高亮预研

* wxParse 只是用标签包括代码，并未处理代码转成 WXML，所以渲染出的代码是没有颜色
* 老牌的 highlightjs 没有 WXML 对应的方案
* 老牌的 highlightjs 对 JSX 高亮支持太差
* prismjs 是 react 官方使用的高亮插件，对 JSX 支持高亮很好
* prismjs 支持几乎所有的语言，并且支持自定义扩展语言
* prismjs 拥有 Line Highlight 插件（目前还未移植到 Comi）

综合上面信息，决定基于 prismjs 二次开发。

### markdown 渲染预研

* wxParse 老牌的渲染组件，支持 markdown
* wxParse 内置的 showdownjs 不满足代码高亮的格式需求（比如语言种类也会生成一个标签，当然可以通过 wxss 隐藏）
* 小程序基础库 1.4.0 开始支持 `rich-text` 组件展示富文本，但是格式需要转成 json
* 高性能 remarkable，Facebook 和 Docusaurus 都在使用，支持 md 语法修改和扩展

```html
<rich-text nodes="{{nodes}}" bindtap="tap"></rich-text>
```

```js
Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
  },
  tap() {
    console.log('tap')
  }
})
```

综合上面信息，放弃 rich-text，决定基于 wxParse + remarkable 二次开发，移除 showdownjs。Comi 需要 remarkable 的高性能和灵活性。markdown 会持久化存在 db， 在小程序内运行时转换成 wxml，所以对性能还是有一定要求。



