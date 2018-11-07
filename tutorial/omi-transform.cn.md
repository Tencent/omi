## Omi 拥抱 60FPS 的 Web 动画

[Omi 框架](https://github.com/Tencent/omi/) 正式发布了 [→ omi-transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)。

> Made css3 transform super easy. Made 60 FPS easy.

![](https://github.com/Tencent/omi/raw/master/packages/omi-transform/css3transform/asset/transform.gif)

作为 Omi 组件化开发特效运动解决方案，让你轻松在Omi项目里快速简便支持CSS3 Transform设置。css3transform 是经受过海量项目洗礼的，作为移动 Web 特效解决方案，在微信、手Q兴趣部落、日迹、QQ群、QQ附近等项目中广泛使用，以激进的**修改**DOM属性为代价，带来极为便利的可编程性。

你可以通过[css3transform 官方首页](https://tencent.github.io/omi/packages/omi-transform/css3transform/)快速了解它。

上面官网的例子都是原生 js 的，css3transform 也拥有react版本，你也可以在 react 中以声明式的方式使用 css3transform：

``` js
render() {
    return (
        <Transform
          translateX={100}
          scaleX={0.5}
          originX={0.5}>
          <div>你要运动的 DOM</div>
        </Transform>
    );
}
```

这都不是重点，重点是 omi-transform。

## 3分钟掌握 omi-transform

### 通过npm安装 

``` js
npm install omi-transform
```

### 使用


```js
import { render, WeElement, define } from "omi"
import "omi-transform"

define("my-app", class extends WeElement {
  install() {
    this.data.rotateZ = 30
    this.linkRef = (e) => {
      this.animDiv = e
    }
  }

  installed() {
    setInterval(() => {
      //slow
      // this.data.rotateZ += 2
      // this.update()

      //fast
      this.animDiv.rotateZ += 2
      //sync for update call of any scenario
      this.data.rotateZ = this.animDiv.rotateZ
    }, 16)
  }

  render(props, data) {
    return (
      <css3-transform rotateZ={data.rotateZ} translateX={0} perspective={0} >
        <div ref={this.linkRef}>
          omi-transform
        </div>
      </css3-transform>
    )
  }
})

render(<my-app />, "body")
```

* 在需要使用 css3transform 的DOM上标记 `ref` 用来直接操作 DOM
* 在组件函数里便可以使用 this.refs.xxx 来读取或者设置 css transform属性
* this.refs.xxx 支持 "translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ", "perspective" 这些属性设置和读取
* perspective 表示透视投影的距离

组件里的某个 DOM 在运动过程中，可能会由于其他逻辑，进行 update。有可能是用户交互，有可能是数据返回的回调。所以，update 前后，DOM 的状态的保留显得尤其重要，不然的话就会有闪烁、跳跃的效果或者其他显示逻辑错误。

可以看到上面的代码在 DOM 运动过程中时不进行 Diff ？组件不进行 update ？
万一组件 update，所有运动的状态都会丢失？Omi 怎么解决这个问题？上面的代码已经给出了答案：

> 使用 `this.data.rotateZ` 来同步运动 DOM 的状态防止意外的刷新(`update`)

[→ 演示](https://tencent.github.io/omi/packages/omi/examples/css3transform/)

## 支持的属性

| **Property**    | **Describe**                           |
| --------- | ---------------------- |
| translateX |translateX |
| translateY |translateY |
| translateZ |translateZ |
| scaleX |scaleX |
| scaleY |scaleY |
| scaleZ |scaleZ|
| rotateX |rotateX |
| rotateY |rotateY |
| rotateZ |rotateZ |
| skewX | skewX|
| skewY |skewY |
| originX |  the basic x point of rotation|
| originY | the basic y point of rotation |
| originZ |  the basic z point of rotation|
| perspective |Perspective projection distance |

你既可以 get 也可以 set。

## 性能对比

因为 react 版本会有 diff 过程，然后 apply diff to dom 的过程，state 改变不会整个 innerHTML 全部替换，所以对浏览器渲染来说还是很便宜，但是在 js 里 diff 的过程的耗时还是需要去 profiles 一把，如果耗时严重，不在 webworker 里跑还是会卡住UI线程导致卡顿，交互延缓等。所以要看一看 CPU 的耗时还是很有必要的。

下面数据是对比 omi-transform 和 react-transform，两种方式使用 chrome profiles 了一把。

**先看总耗时对比**：

react-transform：
![](https://user-gold-cdn.xitu.io/2017/4/5/d1c804dc8700f0561f9d81fcb635576f)

omi-transform：
![](https://user-gold-cdn.xitu.io/2017/4/5/19b25f47561d69b0f48ac330146cf4b4)


- react 在8739秒内CPU耗时花费了近似**1686ms**
- Omi 方式在9254ms秒内CPU耗时花费近似**700ms**

在不进行 profiles 就能想象到 react 是一定会更慢一些，因为 state 的改变要走把 react 生命周期走一遍，但是可以看到 react 的耗时还是在可以接受的范围，没有慢到难以接受。

而 Omi 的方式则和传统的原生 js 的耗时一模一样。因为运动过程不进行DOM Diff，直接操作 DOM!!

## Omi 自身对比

```js
//slow
this.data.rotateZ += 2
this.update()
```

```js
//fast
this.animDiv.rotateZ += 2
this.data.rotateZ = this.animDiv.rotateZ
```

主要对比上面两个代码块的执行效率，打开谷歌浏览器的 Performance 运行 10 秒左右，打开 Summary 对比:

| **Slow**                         | **Fast**                           |
| ------------------------------- | ----------------------------------- |
| ![Omi](../assets/css3transform-update.jpg) | ![Omi](../assets/css3transform.jpg) |

可以看到 omi 的两种方式都拥有很高性能，10秒钟内拥有大量的空闲时间，但是 fast 确实更加 fast，scripting 的耗时更短。但是优势不明显是为什么？因为 DOM 结构简单，如果 DOM 结构越复杂， fast 直接操作 DOM 的方式会把 slow 的方式甩开一大截！下面进行验证一下:

先发 render 的 DOM 结构修改成复杂的:

![Omi](../assets/mock.jpg) 

打开谷歌浏览器的 Performance 运行 10 秒左右，打开 Summary 对比:

| **Slow**                         | **Fast**                           |
| ------------------------------- | ----------------------------------- |
| ![Omi](../assets/css3transform-update2.jpg) | ![Omi](../assets/css3transform2.jpg) |

可以看到 Scripting Time 已经拉开了差距！

对比前后两次的数据：

|DOM 结构| **Slow**                         | **Fast**                           |
|-----------| ------------------------------- | ----------------------------------- |
|简单| ![Omi](../assets/css3transform-update.jpg) | ![Omi](../assets/css3transform.jpg) |
|复杂| ![Omi](../assets/css3transform-update2.jpg) | ![Omi](../assets/css3transform2.jpg) |

可以看到 Fast 的前后两次没有太大差别，Slow 前后两次差距巨大。那么 Fast 内核 css3transform 原理是什么？

## css3transform

## 简介

在过去的两年，越来越多的同事、朋友和其他不认识的童鞋进行移动web开发的时候，都使用了[css3transform](https://github.com/AlloyTeam/AlloyTouch/tree/master/css3transform)，所有必要介绍一下，让更多的人受益，提高编程效率，并享受编程乐趣。（当然css3transform不仅仅支持移动设备，[支持CSS3 3D Transforms的浏览器](http://caniuse.com/#search=CSS3%203D)都能正常使用css3transform）


## 传送门

官方网站：[http://alloyteam.github.io/AlloyTouch/css3transform/](http://alloyteam.github.io/AlloyTouch/css3transform/)
Github地址：[https://github.com/AlloyTeam/AlloyTouch/tree/master/css3transform](https://github.com/AlloyTeam/AlloyTouch/tree/master/css3transform)

## 安装
```js
npm install css3transform
```

## API
```js
Transform(domElement, [notPerspective]);
```

通过上面一行代码的调用，就可以设置或者读取 domElement的"translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"！

方便吧！


## 使用姿势

```js
Transform(domElement);//or Transform(domElement, true);

//set "translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"
domElement.translateX = 100;
domElement.scaleX = 0.5;
domElement.originX = 50;

//get "translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"
console.log(domElement.translateX )
```

## 传统的CSS3编程的问题
以前，我们一般使用animate.css、zepto/jQuery的animate方法或者tween.js+css3进行交互特效编程。总结下来有三个缺点：
- 不直观
- 不直接
- 不方便

### 不直观
看下面这张图：
![](https://lc-api-gold-cdn.xitu.io/827c350ead224a857fdb.png)

顺序影响结果，不直观。那么为什么会是这个结果？可以通过new WebKitCSSMatrix(transform_str)对比最终的matrix。
![](https://user-gold-cdn.xitu.io/2016/11/29/4a62743f763d912afed7202e03127712)

这也直接说明了矩阵不符合交换律。A*B!=B*A

## 不直接

zepto姿势：

```js
$("#some_element").animate({
  opacity: 0.25, left: '50px',
  color: '#abcdef',
  rotateZ: '45deg', translate3d: '0,10px,0'
}, 500, 'ease-out')

```
translate3d: '0,10px,0'非常不方便，无法step递进递减控制。更别提配合一些运动或者时间的库来编程了。可能你会反驳'ease-out'不就可以实现缓动吗？但是如果我需要让x和y以及z分别对应不同的缓动函数，这种基于字符串编程的形式就费劲了~~
这里还需要注意的是，zepto里的顺序也会影响结果。因为其最后也是拼成string赋给dom元素。

tween.js姿势
```js
var position = { x: 100, y: 100, rotation: 0 },
    target = document.getElementById('target');

    new TWEEN.Tween(position)
    .to({ x: 700, y: 200, rotation: 359 }, 2000)
    .delay(1000)
    .easing(TWEEN.Easing.Elastic.InOut)
    .onUpdate(function update() {
        var t_str= 'translateX(' + position.x + 'px) translateY(' + position.y + 'px) rotate(' + Math.floor(position.rotation) + 'deg)';
        element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = t_str;
    });
```
使用字符串的方式，看着就心累。更别提写的过程要遭受多少折磨。

animate.css姿势:
```css
@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
```
animate.css封装了一大堆关键帧动画，开发者只需要关心添加或者移除相关的动画的class便可以。这一定程度上给交互特效带来了极大的遍历，但是要有硬伤：
- 可编程性不够高
- 适用于简单场景
- 没有change回调，只有end回调

## 不方便
transform的旋转点基准点默认是在中心，但是有些是时候，不系统在中心，我们传统的做法是使用transform-origin来设置基准点。
![](https://user-gold-cdn.xitu.io/2016/11/29/666f43f1ad1c941c7499c94104872d8d)

注意，是另一个属性transform-origin，而不是transform。但是如果需要运动transform-origin呢？这种设计是不是就废了？有没有需要运动origin的场景？这个在游戏设计中是经常会使用的到，这个以后另外单独开篇再说，事实就是，有场景是需要运动origin来达到某种效果。


## css3transform
基于上面种种不便，所以有了css3transform！

- css3transform 专注于CSS3 transform读取和设置的一个超轻量级js库，大大提高了CSS3 transform的可编程性
- css3transform 高度抽象，不与任何时间、运动框架捆绑，所以可以和任意时间、和运动框架轻松搭配使用
- css3transform 使用matrix3d为最终输出给dom对象，硬件加速的同时，不失去可编程性
- css3transform 拥有超级易用的API，一分钟轻松上手，二分钟嵌入真实项目实战
- css3transform 扩展了transform本身的能力，让transform origin更加方便

## Star & Fork

[→ omi-transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)
