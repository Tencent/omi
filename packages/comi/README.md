# Comi

Comi 读 ['kəʊmɪ]，类似中文 科米，是腾讯 Omi 团队开发的小程序代码高亮和 markdown 渲染组件。


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
    const md =`你也渲染的 md！`;
    comi(md, this)
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
    const md =`你要渲染的 md`;

    comi(md, this.$scope)
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

```
@import '../../components/comi/comi.wxss';
```

## 感谢

* wxParse
* remarkable
* html2json
* htmlparser
* prism
