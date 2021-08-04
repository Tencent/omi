Kity Vector Libary [![Build Status](https://travis-ci.org/fex-team/kity.svg?branch=dev)](https://travis-ci.org/fex-team/kity)
=======

Kity 是一个基于 SVG 的矢量图形库，帮助你快速在页面上创建和使用矢量元素。

* 面向对象的接口风格

  在 Kity 里，所有图形，以及交换的数据，都是以强类型的对象出现的，可以非常方便地使用和拓展它们。

* 丰富的图形

  Kity 内置了的图形，包括矩形、圆形、椭圆、多边形、自动曲线、直线、正多边形、星形、饼、环、旋转形等等，还有最强大的 Path 工具，可以绘制任意矢量图形

* 强大的填充能力

  Kity 对颜色加强了支持，不仅能随意使用 RGB 或 HSL 进行颜色的配置，还支持调色板的定义和使用。Kity 同时支持渐变和纹理的使用，可以让矢量元素更加生动丰富。

* 完善的坐标变换能力

  在 Kity 中，对图形进行平移、旋转、缩放等变换是非常简单的。而且，这些变换的综合结果还可以获取，用于图形学的一些计算。

* 灵活的动画支持

  Kity 内置了一个灵活的动画引擎，你可以使用该引擎方便灵活地创建和使用动画。动画创建的时间线还可以进一步控制：暂停、停止、循环等。同时提供最底层的动画接口，让你有完全的动画能力。
  
* 必不可少的事件处理

  对于需要创建交互的应用来说，事件是必不可少的。Kity 允许你在图形上绑定各种各样的事件，并且可以帮你精确的计算事件发生的坐标（你还可以指定坐标系）。这个是非常重要的，不是吗？
  
* 文本支持

  Kity 在文本的支持上下了苦工，你可以方便地定位文本和设置文本的样式。你还可以使用路径文本，让一个文本沿着指定的路径排列。

* 滤镜支持

  Kity 支持最常用的 SVG 滤镜，而且为您预留了接口，可以快速拓展。
  
* 强大的图形学支持

  这个在图形应用当中也是非常重要的。在 Kity 中，你可以轻松获取图形在指定坐标系下的区域，支持区域的合并、变换操作。Kity 同时对贝塞尔曲线和路径提供了很多有用的工具，比如切割、求字段、求补间等。
  

## 开始使用

要开始使用 kity，你需要先在页面中引用 `kity.min.js`：

```html
// 引用本地的 kity 库
<script type="text/javascript" src="lib/kity.min.js"></script>


// 使用 git 的 CDN 服务引用
<script type="text/javascript" src="https://cdn.rawgit.com/fex-team/kity/dev/dist/kity.min.js"></script>
```

然后，你就可以在任何的元素上创建 kity 的画布：

```html
<div id="kity_paper"></div>

<script type="text/javascript">
    var paper = new kity.Paper('kity_paper');
    var rect = paper.put(new kity.Rect());
    var text = paper.put(new kity.Text());

    text.setContent('hello kity!');
    text.fill('white');
    text.setX(100);
    text.setY(200);

    rect.setBox(text.getBoundaryBox().expand(-15, -10, 15, 10));
    rect.setRadius(5);
    rect.fill('blue');
</script>
```

![Hello Kity](doc/images/hello-kity.png)

更详细的使用方法请参考 [wiki](https://github.com/fex-team/kity/wiki)。

## 贡献

如果您在使用的过程中发现任何问题，欢迎给我们提 [issue](https://github.com/fex-team/kity/issues)。

如果您是开发者，可以直接给我们提 [Pull Requst](https://github.com/fex-team/pulls)。

## 联系我们

Email: kity@baidu.com
