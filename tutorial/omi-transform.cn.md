## Omi 拥抱 60FPS 的 Web 动画

[Omi 框架](https://github.com/Tencent/omi/) 正式发布了 [→ omi-transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)。

> Made css3 transform super easy.

![](https://github.com/Tencent/omi/raw/master/packages/omi-transform/css3transform/asset/transform.gif)

作为 Omi 组件化开发特效运动解决方案，让你轻松在Omi项目里快速简便支持CSS3 Transform设置。先说说 css3transform，css3transform 作为移动 Web 特效解决方案，在微信、手Q兴趣部落、日迹、QQ群、QQ附近等项目中广泛使用，以激进的**修改**DOM属性为代价，带来极为便利的可编程性。

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
* 没有标记 perspective 的话默认不使用透视投影

组件里的某个DOM在运动过程中，可能会由于其他逻辑，进行update。有可能是用户交互，有可能是数据返回的回调。所以，update前后，DOM的状态的保留显得尤其重要，不然的话就会有闪烁、跳跃的效果或者其他显示逻辑错误。

可以看到上面的代码在 DOM 运动过程中时不进行 Diff ？意思就是组件不进行 update ？
意思就是万一组件update，所有运动的状态都会丢失？Omi怎么解决这个问题？

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

而 Omi 的方式则和传统的原生 js 的耗时一模一样。以为运动过程不进行DOM Diff!!

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

主要对比上面两个代码块的执行效率，直接看对比结果:

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

## Star & Fork

[→ omi-transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)
