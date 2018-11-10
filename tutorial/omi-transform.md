## 60FPS Web Animation in Omi Project

[Omi Framework](https://github.com/Tencent/omi/) Official Release [→ omi-transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)。

> Made css3 transform super easy. Made 60 FPS easy.

![](https://github.com/Tencent/omi/raw/master/packages/omi-transform/css3transform/asset/transform.gif)

It is a specific motion solution for developing transform in Omi. It lets you easy and fast to config CSS Transform in an Omi project. css3transform is being using a lot as a mobile web motion solution, and it is using in Wechat and QQ Mobile broadly. Also, it provides functions to **modify** DOM attributes.

Through [css3transform Official Homepage](https://tencent.github.io/omi/packages/omi-transform/css3transform/) you can check it.

The example in an Official Homepage is by Native JS, and there has a React version for css3transform so it can be used css3transform as declarative way of React:

``` js
render() {
    return (
        <Transform
          translateX={100}
          scaleX={0.5}
          originX={0.5}>
          <div>Transform DOM</div>
        </Transform>
    )
}
```

Significant part is an omi-transform.

## omi-transform Master in 3 minutes

### NPM Install

``` js
npm install omi-transform
```

### Usage


```js
import { render, WeElement, define } from "omi"
import "omi-transform"

define("my-app", class extends WeElement {
  static observe = true

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
* Use the `<css3-transform></css3-transform>` package for the DOM that needs to be moved.
* Mark `ref` on DOM that requires css3transform to operate DOM directly.
* You can use this.refs.animDiv to read or set the CSS transform attribute in the component function.
* this.refs.xxx supports "translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ", "perspective", and it will be configured and is able to read.
* perspective represents distance of perspective projection.

A DOM in a component may be updated due to other logic udring the movement. There may be user interaction, and it may be a callback for data return. Therefore, before and after the update, the retention of the state of the DOM is particularly important, otherwise there will be refresh, jumping effects or other display logic erros.

Can you see the above code does not perform Diff during DOM motion? Is this mean that the component is not updated?
The meaning is that in the event of component updated. is the state of all motion going to be lost? How does Omi solve this problem? The above source code is the solution of its:

You can see that the code above does not carry Diff when DOM is moving. Components do not carry update? In case of component update, all motion states will be lost? How does Omi solve this problem? The above code has given the answer:

> Use `this.data.rotateZ` to synchronize the state of the motion DOM to prevent accidental refreshes (`update`).

[→ Demo](https://tencent.github.io/omi/packages/omi/examples/css3transform/)

## Support Property

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

You can get and set.

## Performance Comparison

Because the React version will have a diff process, and then apply diff to DOM process, state changes will not replace the entire innerHTML, so it is still cheap for browser rendering, but in JS diff process time-consuming still needs to go to profiles, if time-consuming is serious, do not run in the web worker or The UI thread will be jammed, leading to Catton, animated carton frame dropping and interaction delay. So it is necessary to take a look at the time consuming of CPU.

The following data compares between omi-transform and react-transform, using Chrome Profiles in two ways.

**Total Time Consumption Comparison**：

react-transform：
![](https://user-gold-cdn.xitu.io/2017/4/5/d1c804dc8700f0561f9d81fcb635576f)

omi-transform：
![](https://user-gold-cdn.xitu.io/2017/4/5/19b25f47561d69b0f48ac330146cf4b4)


- React in 8379ms, CPU took **1686ms** approximately.
- Omi in 9254ms, CPU took **700ms** approximately.

Without Profiles, you can imagine that the React will be slower because the state changes to go through the React Life Cycle, but you can see that the time spent on the React is still acceptable, not too slow to accept.

Omi's approach is exactly the same as the traditional Native JS. Since during motion, it does not do DOM Diff, it does handle DOM directly!!

## Omi Self Comparison

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

Mainly compare the execution efficiency of the above two code blocks. Open Chrome and Performance Tab, then start it around 10 seconds, then check it in Summary:

| **Slow**                         | **Fast**                           |
| ------------------------------- | ----------------------------------- |
| ![Omi](../assets/css3transform-update.jpg) | ![Omi](../assets/css3transform.jpg) |

You can see that Omi has high performance in both ways, with a lot of idel time in 10 seconds, and fast is indeed faster and scripting takes less time, but why is the advantage not obvious? Because the DOM structure is simple, if the DOM structure is more complex, the way that fast directly manipulates the DOM will cut the slow way off! Please verify it in below:

The DOM structure of first redner is modifed as complex:

![Omi](../assets/mock.jpg) 

Please open Chrome, and start Performance check for 10 seconds, then open Summary and compare it:

| **Slow**                         | **Fast**                           |
| ------------------------------- | ----------------------------------- |
| ![Omi](../assets/css3transform-update2.jpg) | ![Omi](../assets/css3transform2.jpg) |

You can see the gap of Scripting Time is much bigger more and more!

Compare data twice before and after:

|DOM Structure| **Slow**                         | **Fast**                           |
|-----------| ------------------------------- | ----------------------------------- |
|Simple| ![Omi](../assets/css3transform-update.jpg) | ![Omi](../assets/css3transform.jpg) |
|Complex| ![Omi](../assets/css3transform-update2.jpg) | ![Omi](../assets/css3transform2.jpg) |

Fast has no difference between DOMs: Simple and Complex, and Slow has big difference. If then, what is core principle of Fast?

## css3transform

## Install
```js
npm install css3transform
```

## API
```js
Transform(domElement, [notPerspective])
```

Using the above code, can read and set up the below properties of domElement.
"translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"！

Isn't convenience?

## Usage

```js
Transform(domElement)//or Transform(domElement, true)

//set

domElement.translateX = 100
domElement.scaleX = 0.5
domElement.originX = 50

//get

console.log(domElement.translateX )
```

## Issue in traditional CSS3 programing
Before that, we used animate.css, zepto/jQuery's animate, or tween.js + css3, and make interactive programming. There are three disadvantages:

- Not Readable
- Not Handle Directly
- Inconvenience

### Not Readable

Look the below image:
![](https://lc-api-gold-cdn.xitu.io/827c350ead224a857fdb.png)

Order affects the result, and not readable. If then why it results it? You can compare final matrixs through new WebKitCSSMatrix(transform_str).
![]
(https://user-gold-cdn.xitu.io/2016/11/29/4a62743f763d912afed7202e03127712)

This shows it does not follow Matrix commutative property. `A * B != B * A`

 ## Not Handle Directly

 zepto Example:
 ```js
$("#some_element").animate({
  opacity: 0.25, left: '50px',
  color: '#abcdef',
  rotateZ: '45deg', translate3d: '0,10px,0'
}, 500, 'ease-out')

 ```

translate3d: '0,10px,0' is inconvenient and no way handle it. If using some motion or time library, it is hell. You might want to say `ease-out` can be used, but x, y, and z, if we deal with different functions each, that kind of string-based programming should be hard.
Also, order of zepto will affect result. Finally, set it in DOM elements as String.

tween.js Example:

```js
var position = { x: 100, y: 100, rotation: 0 },
    target = document.getElementById('target')
    new TWEEN.Tween(position)
    .to({ x: 700, y: 200, rotation: 359 }, 2000)
    .delay(1000)
    .easing(TWEEN.Easing.Elastic.InOut)
    .onUpdate(function update() {
        var t_str= 'translateX(' + position.x + 'px) translateY(' + position.y + 'px) rotate(' + Math.floor(position.rotation) + 'deg)'
        element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = t_str
    })
```

It is inconvenience using String way. In addition, we don't know how much that kind of codes, we should write down.

 animate.css Example:
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

animate.css is needed to be encapsulated a several Key Frame Animation, and developers need to add/remove a class regarding Animation. Even though it is good in interaction effect, but there have disadvatages:

- Low effective
- Suitable to simple job
- no change call back, only end callback

## Inconvenience

rotate point of transform is normally set as center, but sometimes is not. Traditionally, we use transform-origin and set a standard point.
![](https://user-gold-cdn.xitu.io/2016/11/29/666f43f1ad1c941c7499c94104872d8d)

NOTE: other transform-origin property is not a transform, but transform-origin is needed, and this kind of design is deprecated. so it needs scene of motion origin. It is usually using in design of game, but I will talk about it later. In fact, for some effect to show up, there are many scene to change the standard point.


## Summary

To resolve the above disadvantages, there is css3transform!

- css3transform is mainly focus on CSS3 transform, and light-weight JS library, also improve ability of CSS transform programming.
- css3transform is very abstracted, and it does not provide Time or Motion frame so easy to use.
- css3transform is using matrix3d as last output of DOM object, but still using hardware acceleration.
- css3transform can be started in one minute, and can embeded in two minutes.
- css3transform is extended from standard functions so it is added convenience in transform origin.

## Practical Experience

![](https://github.com/Tencent/omi/raw/master/assets/wave.gif)

You can easily make Swing effect through createjs' tweenjs:

```js
var element = document.querySelector("#test")
Transform(element)
element.originY = 100
element.skewX = -20

var Tween = createjs.Tween,
    sineInOutEase = createjs.Ease.sineInOut
Tween.get(element, {loop: true}).to({scaleY: .8}, 450, sineInOutEase).to({scaleY: 1}, 450, sineInOutEase)
Tween.get(element, {loop: true}).to({skewX: 20}, 900, sineInOutEase).to({skewX: -20}, 900, sineInOutEase)
```

The above code is very concise. Here's a little eplanation:

- The initial skewX of the element is -20, in order to keep pace with scale
- The originY of the element is 100, which is based on penguin's bottom center

As you can see, because css3transform is highly abstract, it can be easily used with tweenjs without any pressure.

## Principle

css3transform can not only mix CSS3 transform to DOM elements, but also mix to any object literlas, or use css3transform as a tool. It provides some basic mathmatical functions.

> We need to pay attention here. We can continue to use the previous positions. Here are three other kinds of ways.

#### Syntax1

```js
Transform(obj, [notPerspective])
```
As you can see, there are no other ways to change. Only the first parameter can not only transmit DOM elements, but also transmit literal quantities of arbitrary objects.

You don't need to worry, first look at the use of way.


```js
var element = document.querySelector("#test"),
    obj = {}

Transform(obj)

obj.rotateZ = 90

element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = obj.transform
```
See, no, you can not only pass the DOM elements into it, but also pass the literal amount of the object. You can print obj. transform, which is selected 90 degrees, so the matrix it generated is:

```js
perspective(500px) matrix3d(0,1,0,0,-1,0,0,0,0,0,1,0,0,0,0,1)
```

You can also close the perspective projection, such as:

```js
var element = document.querySelector("#test"),
    obj = {}
//close perspective projection
Transform(obj, true)

obj.rotateZ = 90

element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = obj.transform
```

The generated matrix is:

```js
matrix3d(0,1,0,0,-1,0,0,0,0,0,1,0,0,0,0,1)
```

What about the way of exercise? Here is an example of [tween.js](https://github.com/tweenjs/tween.js):
```js
var element = document.querySelector("#test"),
    obj = { translateX: 0, translateY: 0 }

Transform(obj)

var tween = new TWEEN.Tween(obj)
    .to({ translateX: 100, translateY: 100 }, 1000)
    .onUpdate(function () {
        element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = obj.transform
    })
    .start()

requestAnimationFrame(animate)

function animate(time) {
    requestAnimationFrame(animate)
    TWEEN.update(time)
}
```

So what if we use traditional gestures?


```js
var element = document.querySelector("#test")

Transform(element)

var tween = new TWEEN.Tween({ translateX: element.translateX, translateY: element.translateY })
    .to({ translateX: 100, translateY: 100 }, 1000)
    .onUpdate(function () {
        element.translateX = this.translateX
        element.translateY = this.translateY
    })
    .start()

requestAnimationFrame(animate)

function animate(time) {
    requestAnimationFrame(animate)
    TWEEN.update(time)
}
```

Here, because TWEEN.Tween traverses all attributes and sets initial values, such as the code in tween:
```js
 // Set all starting values present on the target object
for (var field in object) {
    _valuesStart[field] = parseFloat(object[field], 10)
}
```

So you can't directly put new TWEEN.Tween(element).
Because before the start, the program can actually collect all the attributes needed to, and then move. We can encapsulate a tween ourselves to support this simple way. Such as:
```js
var Tween = function (obj) {
    this.obj = obj
    return this
}

Tween.prototype = {
    to: function (targets, duration, easing) {
        this.duration = duration
        this.targets = targets
        return this
    },
    start: function () {
        this.startTime = new Date()
        this._beginTick()
    },
    _beginTick: function () {
        var _startValues = {},
            targets = this.targets
        for (var key in targets) {
            if (targets.hasOwnProperty(key)) {
                _startValues[key] = this.obj[key]
            }
        }
        var self  = this
        this._interval = setInterval(function () {
            var dt = new Date() - self.startTime
            for (var key in targets) {
                if (targets.hasOwnProperty(key)) {
                    if (dt >= self.duration) {
                        clearInterval(self._interval)
                    } else {
                        var p = dt / self.duration;
                        var dv = targets[key] - self.obj[key]
                        self.obj[key] += dv * p
                    }
                }
            }
        }, 15)

    }
}
```

Here, in order to simply use setInterval to do loop, of course, it can be changed into other ways. Now you can use the following ways:

```js
var element = document.querySelector("#test")
Transform(element)
var tween = new Tween(element)
    .to({ translateX: 100, translateY: 100 }, 1000)
    .start()
```
Of course, this is a bit off the point. This is just a comparison of the difference between using DOM directly to mount and use third party objects to mount. The third party mounts a sense of mountain climbing.
Of course, it is not finished, it is not just the way it looks. You can also use css3transform as a computing tool.

#### Syntax2

```
 Transform.getMatrix3D(option)
```

#### Usage

```js
var matrix3d = Transform.getMatrix3D({
    translateX: 0,
    translateY: 100,
    scaleX:2
})
console.log(matrix3d)
```
Print out and you will get the following values:

![](https://user-gold-cdn.xitu.io/2016/12/26/26489de707c1fa09c73054f2843bcb9a)


You can do whatever you want to do with this value. Look at the css3transform source code, which can get the attributes supported by Transform.getMatrix3D:

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

#### Syntax3

```js
 Transform.getMatrix2D(option)
```
Not only is 3D matrix, but css3transform also provides 2D tool function support.

#### Usage

```js
var matrix2d = Transform.getMatrix2D({
    translateX: 0,
    translateY: 100,
    scaleX:2
})
console.log(matrix2d)
```
Print out and you will get the following values:

![](https://user-gold-cdn.xitu.io/2016/12/26/008948bb857f77720d570dc86edea081)

- a Horizontal Scale
- b Horizontal Stretch
- c Vertical Stretch
- d Vertical Scale
- tx Horizontal Move
- ty Vertical Move

So what is the use of getting this Matrix2D?

- Scale: scale(sx, sy) is equivalent to (sx, 0, 0, sy, 0, 0)
- Translate：translate(tx, ty) is equivalent to matrix(1, 0, 0, 1, tx, ty)
- Rotate：rotate(deg) is equivalent to matrix(cos(deg), sin(deg), -sin(deg), cos(deg), 0, 0)
- Skew：skew(degx, degy) is equivalent to matrix(1, tan(degy), tan(degx), 1, 0, 0)

Look at the css3transform source code, which can get the attributes supported by Transform.getMatrix2D:

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

## Special Attention Points

Transform.getMatrix2D and Transform.getMatrix3D both support the original feature, please say goodbye to transform-origin
Transform.getMatrix2D and Transform.getMatrix3D do not use the traditional Math.tan to implement the skew, but instead the half of rotation

Such as 2d skew:
```js
Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX)
```

In the past, Tencent IEG, which Game development team, friends asked why they used half of rotation instead of Math.tan?
The reason is simple, Math.tan is particularly distorted, and there are infinite values that cause distortion across the entire screen.

![](https://user-gold-cdn.xitu.io/2016/12/26/fb17c9aefdf30a7881bb120f04926863)


The half of rotation will not.

## Is getMatrix2D useful?

**For DOM Transformation, it can be usedwith browsers that do not support CSS3 3D Transforms**

For example, we can easily convert some transformation properties into CSS3 properties and assign them to the DOM:

```js
var matrix = Transform.getMatrix2D({
    rotation: 30,
    scaleX: 0.5,
    scaleY: 0.5,
    translateX: 100
})
ele.style.transform = ele.style.msTransform = ele.style.OTransform = ele.style.MozTransform = ele.style.webkitTransform = "matrix(" + [matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty].join(",") + ")"
```

**For Canvas and SVG Transformation**

What? Can also be used for Canvas and SVG? Yes, for example, in Canvas draw a picture rotated 30 degrees, reduced to 0.5 times, and parallel translation (200, 200):
```js
var canvas = document.getElementById("ourCanvas"),
    ctx = canvas.getContext("2d"),
    img = new Image(),
    rotation = 30 * Math.PI / 180

img.onload = function () {
    ctx.sava()
    ctx.setTransform(
        0.5 * Math.cos(rotation), 0.5 * Math.sin(rotation),
        -0.5 * Math.sin(rotation), 0.5 * Math.cos(rotation),
        200, 200
    )
    ctx.drawImage(img, 0, 0)
    ctx.restore()
};

img.src = "asset/img/test.png"
```
The Above is our traditional way. After using Transform.getMatrix2D, it becomes like this:

```js
var canvas = document.getElementById("ourCanvas"),
    ctx = canvas.getContext("2d"),
    img = new Image()

var matrix = Transform.getMatrix2D({
    rotation: 30,
    scaleX: 0.5,
    scaleY: 0.5,
    translateX: 200,
    translateY: 200
})

img.onload = function () {
    ctx.sava()
    ctx.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty)
    ctx.drawImage(img, 0, 0)
    ctx.restore()
}

img.src = "asset/img/test.png"
```

It can be seen that developers do not have to patch up matrix themselves. SVG's particle is no longer an example. It's almost the same as the used for DOM. I believe you can do it quickly.

## Star & Fork

[→ omi-transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)
