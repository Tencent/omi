# 今天，小程序正式支持 SVG

经过腾讯 Omi 团队的努力，今天你可以在小程序中使用 Cax 引擎高性能渲染 SVG！

SVG 是可缩放矢量图形(Scalable Vector Graphics)，基于可扩展标记语言，用于描述二维矢量图形的一种图形格式。它由万维网联盟制定，是一个开放标准。SVG 的优势有很多:

* SVG 使用 XML 格式定义图形，可通过文本编辑器来创建和修改
* SVG 图像可被搜索、索引、脚本化或压缩
* SVG 是可伸缩的，且放大图片质量不下降
* SVG 图像可在任何的分辨率下被高质量地打印
* SVG 可被非常多的工具读取和修改（比如记事本）
* SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性、可编程星更强
* SVG 完全支持 DOM 编程，具有交互性和动态性

而支持上面这些优秀特性的前提是 - **需要支持 SVG 标签**。比如在小程序中直接写：

```html
<svg width="300" height="150">
  <rect
    bindtap="tapHandler" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff">
  </rect>
</svg>
```

上面定义了 SVG 的结构、样式和点击行为。但是小程序目前不支持 SVG 标签，仅仅支持加载 SVG 之后 作为 background-image 进行展示，如 `background-image: url("data:image/svg+xml.......)`，或者 base64 后作为 background-image 的 url。

那么怎么办呢？有没有办法让小程序支持 SVG? 答案是有的！需要下面这些东西（站在巨人的肩膀上）：

* JSX，史上最强 UI 表达式，支持书写 XML-Hyperscript 互转的 JS 语言
* 小程序内置 Canvas 渲染器
* [Cax 最新渲染引擎](https://github.com/Tencent/omi/tree/master/packages/cax/cax)
* HTM，Hyperscript Tagged Markup，可能是 JSX 的替代品或者另一种选择，使用ES标准的模板语法实现的 Hyperscript 运行时/编译时生成，preact 作者(也是google工程师)打造

这里稍微解释下 Hyperscript：

比如 JSX 中的

```jsx
<div>
  Hello {this.props.name}
</div>
```

或者 js 中的 htm:

```js
html`<div>
  Hello {this.props.name}
</div>`
```

最后都会被编译成:

```js
h(
  "div",
  null,
  "Hello ",
  this.props.name
);
```

嵌套的 div 也会变编译成 h 嵌套 h，比如

```jsx
<div>
  <div>abc</div>
</div>
```

编译后:

```js
h(
  "div",
  null,
  h(
    "div",
    null,
    "abc"
  )
)
```

而 h 函数的定义也是相当简洁:

```js
function h(type, props, ...children) {
  return { type, props, children }
}
```

通过 h 的执行可以 js 中拿到结构化的数据，也就是所谓的虚拟 dom。需要注意的是 htm 有轻微的运行时开销，jsx 没有。

一句话总结：

> 使用小程序内置的 Canvas 渲染器， 在 Cax 中实现 SVG 标准的子集，使用 JSX 或者 HTM 描述 SVG 结构行为表现

直接看在小程序种使用案例:

```js
import { html, renderSVG } from '../../cax/svg'

Page({
  onLoad: function () {

    renderSVG(html`
<svg width="300" height="220">
  <rect bindtap="tapHandler"
  height="110" width="110"
  style="stroke:#ff0000; fill: #ccccff"
  transform="translate(100 50) rotate(45 50 50)">
  </rect>
</svg>`, 'svg-a', this)

  },

  tapHandler: function () {
    console.log('你点击了 rect')
  }
})
```

其中的 svg-a 对应着 wxml 里 cax-element 的 id:

```js
<view class="container">
  <cax-element id="svg-c"></cax-element>
</view>
```

声明组件依赖

```json
{
  "usingComponents": {
    "cax-element":"../../cax/index"
  }
}
```

小程序种显示效果:

<img src="https://github.com/Tencent/omi/blob/master/assets/cax-rect.jpg" width="400" />

在来一个复杂的例子，用 SVG 绘制 Omi 的 logo:

```js
renderSVG(html`
<svg width="300" height="220">
  <g transform="translate(50,10) scale(0.2 0.2)">
   <circle fill="#07C160" cx="512" cy="512" r="512"/>
   <polygon fill="white" points="159.97,807.8 338.71,532.42 509.9,829.62 519.41,829.62 678.85,536.47 864.03,807.8 739.83,194.38 729.2,194.38 517.73,581.23 293.54,194.38 283.33,194.38 "/>
   <circle fill="white" cx="839.36" cy="242.47" r="50"/>
  </g>
</svg>`, 'svg-a', this)
```

小程序种显示效果:


<img src="https://github.com/Tencent/omi/blob/master/assets/cax-omi.jpg" width="400" />

在 omip 和 mps 当中使用 cax 渲染 svg，你可以不用使用 htm。比如在 omip 中实现上面两个例子：

```jsx
    renderSVG(
<svg width="300" height="220">
  <rect bindtap="tapHandler"
  height="110" width="110"
  style="stroke:#ff0000; fill: #ccccff"
  transform="translate(100 50) rotate(45 50 50)">
  </rect>
</svg>, 'svg-a', this.scope)
```


```js
renderSVG(
<svg width="300" height="220">
  <g transform="translate(50,10) scale(0.2 0.2)">
   <circle fill="#07C160" cx="512" cy="512" r="512"/>
   <polygon fill="white" points="159.97,807.8 338.71,532.42 509.9,829.62 519.41,829.62 678.85,536.47 864.03,807.8 739.83,194.38 729.2,194.38 517.73,581.23 293.54,194.38 283.33,194.38 "/>
   <circle fill="white" cx="839.36" cy="242.47" r="50"/>
  </g>
</svg>, 'svg-a', this.scope)
```

在 mps 中，更加彻底，你可以单独创建 svg 文件，通过 import 导入。

```js
//注意这里不能写 test.svg，因为 mps 会把 test.svg 编译成 test.js 
import testSVG from '../../svg/test'
import { renderSVG } from '../../cax/cax'

Page({
  tapHandler: function(){
    this.pause = !this.pause
  },
  onLoad: function () {
    renderSVG(testSVG, 'svg-a', this)
  }
})
```

所以总结一下:

* 你可以在 mps 中直接使用 import 的 SVG 文件的方式使用 SVG
* 你可以直接在 omip 中使用 JSX 的使用使用 SVG
* 你可以直接在原生小程序当中使用 htm 的方式使用 SVG

这就完了？远没有，看 cax 在小程序中的这个例子：

![](https://github.com/Tencent/omi/blob/master/assets/cax.gif)

详细代码:

```js
renderSVG(html`
<svg width="300" height="200">
  <path d="M 256,213 C 245,181 206,187 234,262 147,181 169,71.2 233,18 220,56 235,81 283,88 285,78.7 286,69.3 288,60 289,61.3 290,62.7 291,64 291,64 297,63 300,63 303,63 309,64 309,64 310,62.7 311,61.3 312,60 314,69.3 315,78.7 317,88 365,82 380,56 367,18 431,71 453,181 366,262 394,187 356,181 344,213 328,185 309,184 300,284 291,184 272,185 256,213 Z" style="stroke:#ff0000; fill: black">
    <animate dur="32s" repeatCount="indefinite" attributeName="d" values="......太长，这里省略 paths........" />
  </path>
</svg>`, 'svg-c', this)
```

再试试著名的 SVG 老虎:

<img src="https://github.com/Tencent/omi/blob/master/assets/tiger.jpg" width="600" />

path 太长，就不贴代码了，可以[点击这里查看](https://github.com/Tencent/omi/blob/master/packages/cax/pages/tiger/index.js)

就这么多？未完待续...，后续补充:

* pasiton 扩展 svg 标签能力
* tween + to + svg 打破声明式动画约束

## 其他

* vscode 安装 lit-html 插件使 html`内容` 高亮
* 还希望小程序 SVG 提供什么功能可以[开 issues](https://github.com/Tencent/omi/issues/new)告诉我们，评估后通过，我们去实现！
* [Cax SVG Github](https://github.com/Tencent/omi/tree/master/packages/cax)
* [参考文档](http://tutorials.jenkov.com/svg/index.html)
