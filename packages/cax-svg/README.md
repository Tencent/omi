# 今天，小程序正式支持 SVG

经过腾讯 Omi 团队的努力，今天你可以在小程序中使用 SVG!

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
* [Cax 最新渲染引擎](https://github.com/Tencent/omi/tree/master/packages/cax-svg/cax)
* HTM，Hyperscript Tagged Markup，可能是 JSX 的替代品或者另一种选择，使用ES标准的模板语法实现的 Hyperscript 运行时/编译时生成，preact 作者(也是google工程师)打造

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
  transform="translate(30) rotate(45 50 50)">
  </rect>
</svg>`, 'svg-a', this)

  },

  tapHandler: function () {
    console.log('你点击了 rect')
  }
})
```

小程序种显示效果:



在来一个复杂的例子，用 SVG 绘制 Omi 的 logo:


