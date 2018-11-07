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

## 安装
```js
npm install css3transform
```

## API
```js
Transform(domElement, [notPerspective]);
```

通过上面一行代码的调用，就可以设置或者读取 domElement的"translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"！

大道至简。


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

这也直接说明了矩阵不符合交换律。`A*B != B*A`

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
- 只有 `end` 回调，没有 `change` 回调

## 不方便

transform的旋转点基准点默认是在中心，但是有些是时候，不系统在中心，我们传统的做法是使用transform-origin来设置基准点。
![](https://user-gold-cdn.xitu.io/2016/11/29/666f43f1ad1c941c7499c94104872d8d)

注意，是另一个属性transform-origin，而不是transform。但是如果需要运动transform-origin呢？这种设计是不是就废了？有没有需要运动origin的场景？这个在游戏设计中是经常会使用的到，这个以后另外单独开篇再说，事实就是，有场景是需要运动origin来达到某种效果。


## 小结

基于上面种种不便，所以有了css3transform！

- css3transform 专注于CSS3 transform读取和设置的一个超轻量级js库，大大提高了CSS3 transform的可编程性
- css3transform 高度抽象，不与任何时间、运动框架捆绑，所以可以和任意时间、和运动框架轻松搭配使用
- css3transform 使用matrix3d为最终输出给dom对象，硬件加速的同时，不失去可编程性
- css3transform 拥有超级易用的API，一分钟轻松上手，二分钟嵌入真实项目实战
- css3transform 扩展了transform本身的能力，让transform origin更加方便

## 实战

![](https://lc-api-gold-cdn.xitu.io/a4db68a46e2fe49b0f79.gif?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

你可以配合 createjs 的 tweenjs ，轻松制作出上面的摇摆特效:

```js
var element = document.querySelector("#test");
Transform(element);
element.originY = 100;
element.skewX = -20;

var Tween = createjs.Tween,
    sineInOutEase = createjs.Ease.sineInOut;
Tween.get(element, {loop: true}).to({scaleY: .8}, 450, sineInOutEase).to({scaleY: 1}, 450, sineInOutEase);
Tween.get(element, {loop: true}).to({skewX: 20}, 900, sineInOutEase).to({skewX: -20}, 900, sineInOutEase);
```

上面的代码很精简。这里稍微解释下：

- 元素的初始skewX是-20，为了和scale的步调一致
- 元素的originY是100，为的以企鹅的bottom center为基准点

可以看到，由于css3transform高度抽象，可以和tweenjs轻松搭配使用，没有任何压力。

## 原理

css3transform不仅仅可以mix CSS3 transform到DOM元素，还能mix到任意的对象字面量，也可以把css3transform当作工具，他提供一些基础的数学能力。

> 这里需要特别注意，以前的姿势可以继续使用，这里另外三种使用姿势。

#### 语法1

```js
Transform(obj, [notPerspective]);
```
如你所见，其他方式都不用变。只是第一个参数不仅仅可以传DOM元素，也可以传任意对象字面量等。

不卖关子，先看使用姿势


```js
var element = document.querySelector("#test"),
    obj = {};

Transform(obj);

obj.rotateZ = 90;

element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = obj.transform;
```
看到了没有，你不仅可以传DOM元素进去，也可以传对象字面量。你可以把obj.transform打印出来，上面是选择了90度，所以它生成出来的matrix是：

```js
perspective(500px) matrix3d(0,1,0,0,-1,0,0,0,0,0,1,0,0,0,0,1)
```

你同样也可以关闭透视投影，如：
```js
var element = document.querySelector("#test"),
    obj = {};
//关闭透视投影
Transform(obj, true);

obj.rotateZ = 90;

element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = obj.transform;
```

生成出来的matrix是：

```js
matrix3d(0,1,0,0,-1,0,0,0,0,0,1,0,0,0,0,1)
```

那么运动的姿势呢？这里配合[tween.js](https://github.com/tweenjs/tween.js)的示例如下：
```js
var element = document.querySelector("#test"),
    obj = { translateX: 0, translateY: 0 };

Transform(obj);

var tween = new TWEEN.Tween(obj)
    .to({ translateX: 100, translateY: 100 }, 1000)
    .onUpdate(function () {
        element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = obj.transform;
    })
    .start();

requestAnimationFrame(animate);

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
```

那么如果用传统的姿势是？


```js
var element = document.querySelector("#test");

Transform(element);

var tween = new TWEEN.Tween({ translateX: element.translateX, translateY: element.translateY })
    .to({ translateX: 100, translateY: 100 }, 1000)
    .onUpdate(function () {
        element.translateX = this.translateX
        element.translateY = this.translateY
    })
    .start();

requestAnimationFrame(animate);

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
```

这里由于 TWEEN.Tween会去遍历所以的属性并且设置初始值，如tween里面的代码：
```js
 // Set all starting values present on the target object
for (var field in object) {
    _valuesStart[field] = parseFloat(object[field], 10);
}
```

所以不能直接把 new TWEEN.Tween(element)。
因为在start之前，程序其实已经可以完全收集到所有需要to的属性，去运动便可以。我们可以自己封装一个tween去支持这种简便的方式。如：
```js
var Tween = function (obj) {
    this.obj = obj;
    return this;
}

Tween.prototype = {
    to: function (targets, duration, easing) {
        this.duration = duration;
        this.targets = targets;
        return this;
    },
    start: function () {
        this.startTime = new Date();
        this._beginTick();
    },
    _beginTick: function () {
        var _startValues = {},
            targets = this.targets;
        for (var key in targets) {
            if (targets.hasOwnProperty(key)) {
                _startValues[key] = this.obj[key];
            }
        }
        var self  = this;
        this._interval = setInterval(function () {
            var dt = new Date() - self.startTime;
            for (var key in targets) {
                if (targets.hasOwnProperty(key)) {
                    if (dt >= self.duration) {
                        clearInterval(self._interval);
                    } else {
                        var p = dt / self.duration;
                        var dv = targets[key] - self.obj[key];
                        self.obj[key] += dv * p;
                    }
                }
            }
        }, 15)

    }
}
```

这里为了简便使用setInterval去进行loop，当然可以换成其他方式。现在便可以使用如下方式：
```js
var element = document.querySelector("#test");
Transform(element);
var tween = new Tween(element)
    .to({ translateX: 100, translateY: 100 }, 1000)
    .start();
```
当然这有点跑题了。这里只是对比直接使用DOM挂载和使用第三方对象挂载的区别。第三方挂载有点隔山打牛的感觉。
当然..，还没有完，不仅仅可以上面那个样子。那还可以把css3transform完全当作一个计算工具来用。

#### 语法2

```
 Transform.getMatrix3D(option)
```

#### 姿势

```js
var matrix3d = Transform.getMatrix3D({
    translateX: 0,
    translateY: 100,
    scaleX:2
});
console.log(matrix3d);
```
打印出来你将得到下面的值：

![](https://user-gold-cdn.xitu.io/2016/12/26/26489de707c1fa09c73054f2843bcb9a)


你想用这个值来干什么就干什么吧。看css3transform源码可以得到 Transform.getMatrix3D一共支持的属性：

```js
Transform.getMatrix3D = function (option) {
    var defaultOption = {
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        skewX: 0,
        skewY: 0,
        originX: 0,
        originY: 0,
        originZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1
    };
    for (var key in option) {
    ...
    ...
    ...

}
```

#### 语法3

```js
 Transform.getMatrix2D(option)
```
不仅仅是3D matrix， css3transform也提供了2D的工具函数支持。

#### 姿势

```js
var matrix2d = Transform.getMatrix2D({
    translateX: 0,
    translateY: 100,
    scaleX:2
});
console.log(matrix2d);
```
打印出来你将得到下面的值：

![](https://user-gold-cdn.xitu.io/2016/12/26/008948bb857f77720d570dc86edea081)

- a 水平缩放
- b 水平拉伸
- c 垂直拉伸
- d 垂直缩放
- tx 水平位移
- ty 垂直位移

那么得到这个Matrix2D有什么用?

- 缩放：scale(sx, sy) 等同于 matrix(sx, 0, 0, sy, 0, 0);
- 平移：translate(tx, ty) 等同于 matrix(1, 0, 0, 1, tx, ty);
- 旋转：rotate(deg) 等同于 matrix(cos(deg), sin(deg), -sin(deg), cos(deg), 0, 0);
- 拉伸：skew(degx, degy) 等同于 matrix(1, tan(degy), tan(degx), 1, 0, 0);

看css3transform源码可以得到 Transform.getMatrix2D一共支持的属性：

```js
Transform.getMatrix2D = function(option){
    var defaultOption = {
        translateX: 0,
        translateY: 0,
        rotation: 0,
        skewX: 0,
        skewY: 0,
        originX: 0,
        originY: 0,
        scaleX: 1,
        scaleY: 1
    };
    ...
    ...
    ...
}
```

## 特别注意事项

Transform.getMatrix2D 和Transform.getMatrix3D都是支持origin特性，请和transform-origin说拜拜
Transform.getMatrix2D 和Transform.getMatrix3D没有使用传统的Math.tan去实现shew，取而代之的是half of rotation

如2d的skew：
```js
Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX)
```

以前腾讯IEG的同学问过为什么使用half of rotation，而不使用Math.tan？
原因很简单，Math.tan扭曲力度特别大，而且会有无穷大的值导致扭曲横跨整个屏幕。

![](https://user-gold-cdn.xitu.io/2016/12/26/fb17c9aefdf30a7881bb120f04926863)


而half of rotation则不会。

## getMatrix2D有用吗？

**用于Dom Transformation时候，可以用于兼容不支持CSS3 3D Transforms的浏览器**

如，我们可以很轻松的把一些transformation属性转换成CSS3属性赋给DOM:

```js
var matrix = Transform.getMatrix2D({
    rotation: 30,
    scaleX: 0.5,
    scaleY: 0.5,
    translateX: 100
});
ele.style.transform = ele.style.msTransform = ele.style.OTransform = ele.style.MozTransform = ele.style.webkitTransform = "matrix(" + [matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty].join(",") + ")";
```

**用于Canvas和SVG Transformation**

什么？还能用于Canvas和SVG?是的，举个例子，在Canvas画一个旋转30度、缩小成0.5倍，并且平移（200,200）的图片：
```js
var canvas = document.getElementById("ourCanvas"),
    ctx = canvas.getContext("2d"),
    img = new Image(),
    rotation = 30 * Math.PI / 180;

img.onload = function () {
    ctx.sava();
    ctx.setTransform(
        0.5 * Math.cos(rotation), 0.5 * Math.sin(rotation),
        -0.5 * Math.sin(rotation), 0.5 * Math.cos(rotation),
        200, 200
    );
    ctx.drawImage(img, 0, 0);
    ctx.restore();
};

img.src = "asset/img/test.png";
```
上面是我们传统的姿势。使用Transform.getMatrix2D 之后，变成这个样子：

```js
var canvas = document.getElementById("ourCanvas"),
    ctx = canvas.getContext("2d"),
    img = new Image();

var matrix = Transform.getMatrix2D({
    rotation: 30,
    scaleX: 0.5,
    scaleY: 0.5,
    translateX: 200,
    translateY: 200
});

img.onload = function () {
    ctx.sava();
    ctx.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    ctx.drawImage(img, 0, 0);
    ctx.restore();
};

img.src = "asset/img/test.png";
```

可以看到，这里让开发者不用自己去拼凑matrix。SVG的粒子就不再举例，和用于DOM的例子差不多，相信大家能够很快搞定。
## Star & Fork

[→ omi-transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)
