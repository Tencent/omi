# Comi

Comi 读 ['kəʊmɪ]，类似中文 科米，是腾讯 Omi 团队开发的小程序代码高亮和 markdown 渲染组件。

[→ Comi 原理点击这里](https://github.com/Tencent/omi/blob/master/tutorial/comi-principle.md#%E5%8E%9F%E7%90%86)

### 预览

<img src="https://github.com/Tencent/omi/raw/master/assets/comi.jpg" width="320">

### 体验

![](https://github.com/Tencent/omi/raw/master/assets/omi-cloud.jpg)

### 使用

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

## 在 omip 中使用

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

## 感谢

* wxParse
* remarkable
* html2json
* htmlparser
* prism
