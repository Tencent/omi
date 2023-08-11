## 使用 MVP 架构和 Web Components(Omi) 开发贪吃蛇

<img src="../assets/omi-snake.png" width="300px" />

事实上, 我使用了 react、preact、vue 和 [omi 框架](https://github.com/Tencent/omi) 分别开发贪吃蛇游戏，我发现 omi 的开发体验最棒，并且其最后的[源代码非常地简洁]((https://github.com/Tencent/omi/tree/master/packages/snake))，让我一步一步带着你们开发这款简单的游戏。

* [在线示例(手机移动端)](https://tencent.github.io/omi/packages/snake/build/)

阅读本文大概花费 10 分钟，你可以从中学会:

* 前端领域驱动实战
* CSS rpx 单位的应用和原理
* Omi 开发贪吃蛇游戏的经验
* 理解 MVC、MVP 和 MVVM 架构
* 使用 DOM 开发游戏 (not canvas)
* Omi store 体系
* 游戏主循环和局部降帧技巧
* 游戏定时器循环优化

### 领域模型设计

* 提取主要实体，比如（蛇、游戏）
* 从实体名词中总结出具体业务属性方法，
  * 蛇
    * 包含运动方向、body属性
    * 包含移动和转向方法
  * 游戏
    * 包含结束暂停状态、地图、分数、帧率、游戏主角、食物
    * 包含开始游戏、暂停游戏、结束游戏、生产食物、重置游戏等方法
* 建立实体属性方法之间的联系
  * 游戏主角唯一，即蛇
  * 蛇吃食物，游戏分数增加
  * 食物消失，游戏负责再次生产食物
  * 蛇撞墙或撞自身，游戏状态结束
* 核心循环设计
  * 判断是否有食物，没有就生产一个(低帧率)
  * 蛇与自身碰撞检测
  * 蛇与障碍物碰撞检测
  * 蛇与食物碰撞检测
  * 蛇移动

### Snake Class

```js
class Snake {
  constructor() {
    this.body = [3, 1, 2, 1, 1, 1]
    this.dir = 'right'
  }

  move(eating) {
    const b = this.body
    if (!eating) {
      b.pop()
      b.pop()
    }

    switch (this.dir) {
      case 'up':
        b.unshift(b[0], b[1] - 1)
        break
      case 'right':
        b.unshift(b[0] + 1, b[1])
        break
      case 'down':
        b.unshift(b[0], b[1] + 1)
        break
      case 'left':
        b.unshift(b[0] - 1, b[1])
        break
    }
  }

  turnUp() {
    if (this.dir !== 'down')
      this.dir = 'up'
  }
  turnRight() {
    if (this.dir !== 'left')
      this.dir = 'right'
  }
  turnDown() {
    if (this.dir !== 'up')
      this.dir = 'down'
  }
  turnLeft() {
    if (this.dir !== 'right')
      this.dir = 'left'
  }
}
```

蛇的转向有个逻辑，就是不能反方向后退，比如正在向上移动，不能直接直接向下转向，所以在 `turnUp`,`turnRight`,`turnDown`,`turnLeft` 中都有对应的条件判断。

### Game Class

```js
import Snake from './snake'

class Game {
  constructor() {
    this.map = []
    this.size = 16
    this.loop = null
    this.interval = 500
    this.paused = false
    this._preDate = Date.now()
    this.init()
  }

  init() {

    this.snake = new Snake

    for (let i = 0; i < this.size; i++) {
      const row = []
      for (let j = 0; j < this.size; j++) {
        row.push(0)
      }
      this.map.push(row)
    }
  }

  tick() {

    this.makeFood()
    const eating = this.eat()
    this.snake.move(eating)
    this.mark()

  }

  mark() {
    const map = this.map
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        map[i][j] = 0
      }
    }

    for (let k = 0, len = this.snake.body.length; k < len; k += 2) {
      this.snake.body[k + 1] %= this.size
      this.snake.body[k] %= this.size

      if (this.snake.body[k + 1] < 0) this.snake.body[k + 1] += this.size
      if (this.snake.body[k] < 0) this.snake.body[k] += this.size
      map[this.snake.body[k + 1]][this.snake.body[k]] = 1
    }
    if (this.food) {
      map[this.food[1]][this.food[0]] = 1
    }
  }

  start() {
    this.loop = setInterval(() => {
      if (Date.now() - this._preDate > this.interval) {
        this._preDate = Date.now()
        if (!this.paused) {
          this.tick()
        }
      }
    }, 16)
  }

  stop() {
    clearInterval(this.loop)
  }

  pause() {
    this.paused = true
  }

  play() {
    this.paused = false
  }

  reset() {
    this.paused = false
    this.interval = 500
    this.snake.body = [3, 1, 2, 1, 1, 1]
    this.food = null
    this.snake.dir = 'right'
  }

  toggleSpeed() {
    this.interval === 500 ? (this.interval = 150) : (this.interval = 500)
  }

  makeFood() {
    if (!this.food) {
      this.food = [this._rd(0, this.size - 1), this._rd(0, this.size - 1)]
      for (let k = 0, len = this.snake.body.length; k < len; k += 2) {
        if (this.snake.body[k + 1] === this.food[1]
          && this.snake.body[k] === this.food[0]) {
          this.food = null
          this.makeFood()
          break
        }

      }
    }
  }

  eat() {
    for (let k = 0, len = this.snake.body.length; k < len; k += 2) {
      if (this.snake.body[k + 1] === this.food[1]
        && this.snake.body[k] === this.food[0]) {
        this.food = null
        return true
      }
    }
  }

  _rd(from, to) {
    return from + Math.floor(Math.random() * (to + 1))
  }
}
```

可以看到上图使用了 16*16 的二维数组来存储蛇、食物、地图信息。蛇和食物占据的格子为 1，其余为 0。

```js
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
```

所以上面代表了一条长度为 5 的蛇和 1 个食物，你能在上图中找到吗？

### Game 面板渲染

```jsx
import { define, rpx } from 'omi'

define('my-game', ['map'], _ => (
  <div class="game">
    {_.store.data.map.map(row => {
      return <p>
        {row.map(col => {
          if (col) {
            return <b class='s'></b>
          }
          return <b></b>
        })}
      </p>
    })}
  </div>
), rpx(require('./_index.css')))
```


带有 `class` 为 `s` 的格式是黑色的，比如食物、蛇的身体，其余的会灰色底色。`['map']` 的作用后面细讲，`['map']` 代表依赖 store.data.map，map 更新会自动更新视图。

### Ctrl 和 Game 面板渲染 

```jsx

import { define, rpx } from 'omi'
import '../game'

define('my-index', ['paused'], ({store}) => (
  <div class="container">
    <h1>OMI SNAKE</h1>

    <my-game></my-game>

    <div class="ctrl">
      <div class="btn cm-btn cm-btn-dir up" onClick={store.turnUp}><i></i><em></em><span>Up</span></div>
      <div class="btn cm-btn cm-btn-dir down" onClick={store.turnDown}><i></i><em></em><span>Down</span></div>
      <div class="btn cm-btn cm-btn-dir left" onClick={store.turnLeft}><i></i><em></em><span >Left</span></div>
      <div class="btn cm-btn cm-btn-dir right" onClick={store.turnRight}><i></i><em></em><span >Right</span></div>
      <div class="btn cm-btn space" onClick={store.toggleSpeed}><i></i><span >加速/减速</span></div>
      <div class="btn reset small" onClick={store.reset}><i ></i><span >Reset</span></div>
      <div class="btn pp small" onClick={store.pauseOrPlay}><i></i><span >{store.data.paused ? 'Play' : 'Pause'}</span></div>
    </div>
  </div>

), rpx(require('./_index.css')))
```

### 定义 Store 

```js
import Game from '../models/game'

const game = new Game
const { snake, map } = game

game.start()

class Store {
  data = {
    map,
    paused: false
  }

  turnUp() {
    snake.turnUp()
  }
  
  turnRight() {
    snake.turnRight()
  }

  turnDown() {
    snake.turnDown()
  }

  turnLeft() {
    snake.turnLeft()
  }

  pauseOrPlay = () => {
    if (game.paused) {
      game.play()
      this.data.paused = false
    } else {
      game.pause()
      this.data.paused = true
    }
  }
  
  reset() {
    game.reset()
  }

  toggleSpeed() {
    game.toggleSpeed()
  }
}

export default new Store
```


会发现， store 很薄，只负责中转 View 的 action，到 Model，以及更改`this.data.paused`数据会自动更新 View，其中 `this.data.map` 的更改是在 model 中进行(game.js 的 tick 方法)。


因为定义组件时声明了依赖:

```js
define('my-index', ['paused'], ...
```

```js
define('my-game', ['map'], ...
```

### 帧率控制

怎么控制主帧率和局部帧率。一般情况下，我们认为 60 FPS 是流畅的，所以我们定时器间隔是有 16ms，核心循环里的计算量越小，就越接近 60 FPS：

```js
this.loop = setInterval(() => {
  //
}, 16)
```

但是有些计算没有必要 16 秒计算一次，这样会降低帧率，所以可以记录上一次执行的时间用来控制帧率:

```js
this.loop = setInterval(() => {
  //执行在这里是大约 60 FPS
  if (Date.now() - this._preDate > this.interval) {
    //执行在这里是大约  1000/this.interval FPS
    this._preDate = Date.now()
    //暂停判断
    if (!this.paused) {
      //核心循环逻辑
      this.tick()
    }
  }
}, 16)
```

你可以使用基于 `requestAnimationFrame` 的 [raf-interval](https://github.com/dntzhang/raf-interval) 来替代 `setInterval`，用于提高性能:

```js
this.loop = setRafInterval(() => {
  //执行在这里是大约 60 FPS
  if (Date.now() - this._preDate > this.interval) {
    //执行在这里是大约  1000/this.interval FPS
    this._preDate = Date.now()
    //暂停判断
    if (!this.paused) {
      //核心循环逻辑
      this.tick()
    }
  }
}, 16)
```

### 贪吃蛇目录说明

```
├─ build            //web 编译出的文件，用于生产环境
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ components    //存放所有页面的组件
│  ├─ models        //存放所有模型
│  ├─ stores        //存放页面的 store
│  └─ index.js      //入口文件，会 build 成 index.html
```


那么是 MVC、MVP 还是 MVVM?

从贪吃蛇源码可以看出：视图(components)和模型(models)是分离的，没有相互依赖关系，但是在 MVC 中，视图依赖模型，耦合度太高，导致视图的可移植性大大降低，所以一定不是 MVC 架构。


![](../assets/mvc-mvp-mvvm.png)

在 MVP 模式中，视图不直接依赖模型，由 Presenter 负责完成 Model 和 View 的交互。MVVM 和 MVP 的模式比较接近。ViewModel 担任这 Presenter 的角色，并且提供 UI 视图所需要的数据源，而不是直接让 View 使用 Model 的数据源，这样大大提高了 View 和 Model 的可移植性，比如同样的 Model 切换使用 Flash、HTML、WPF 渲染，比如同样 View 使用不同的 Model，只要 Model 和 ViewModel 映射好，View 可以改动很小甚至不用改变。

从贪吃蛇源码可以看出，View(components) 里直接使用了 Presenter(stores) 的 data 属性进行渲染，data 属性来自于 Model(models) 的属性，并没有出现 Model 到 ViewModel 的映射。所以一定不是 MVVM 架构。

所以上面的贪吃蛇属于 **MVP** !只不过是进化版的 MVP，因为 M 里的 map 的变更会自定更是 View，从 M->P->V的回路是自动化的，代码里看不到任何逻辑。仅仅需要声明依赖:

```js
define('my-game', ['map'] ...
```

这样也规避了 MVVM 最大的问题： M 到 VM 映射的开销。

### 进化版 MVP 优势

1、复用性

Model 和 View 之间解耦，Model 或 View 中的一方发生变化，Presenter 接口不变，另一方就没必要对上述变化做出改变，那么 Model 层的业务逻辑具有很好的灵活性和可重用性。

2、灵活性

Presenter 的 data 变更自动映射到视图，使得 Presenter 很薄很薄，View 属于被动视图。而且基于 Presenter 的 data 可以使用任何平台、任何框架、任何技术进行渲染。

3、测试性

假如 View 和 Model 之间的紧耦合，在 Model 和 View 同时开发完成之前对其中一方进行测试是不可能的。出于同样的原因，对 View 或 Model 进行单元测试很困难。现在，MVP模式解决了所有的问题。MVP 模式中，View 和 Model 之间没有直接依赖，开发者能够借助模拟对象注入测试两者中的任一方。


### CSS rpx unit

rpx（responsive pixel）最初来源于小程序的 wxss，但是知道其原理后也可以用于 web。 rpx 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。

| **设备**                         | **rpx 转 px (屏幕宽度/750)**        | 	px 转 rpx (750/屏幕宽度) |
| ------------------------------- | ----------------------------------- | ---------------------|
| iPhone5 | 	1rpx = 0.42px | 1px = 2.34rpx|
| iPhone6 | 	1rpx = 0.5px | 1px = 2rpx|	
| iPhone6 Plus | 	1rpx = 0.552px | 1px = 1.81rpx |

rpx 单元非常有利于前端开发的整体工作流程，因为设计人员的设计草图是按照750的宽度设计的，所以前端页面可以直接使用草图导出标尺进行 rpx 布局。


### rpx 原理    

因为设备宽度只能在运行时知道，所以需要在运行时动态计算 rpx 到 px 的映射。

```js
export function rpx(css) {
  return css.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, (a, b) => {
    return (window.innerWidth * Number(b)) / 750 + 'px'
  })
}
```



### 兼容性

#### Omi HTML 输出结构

<img src="../assets/omi-snake-html.png" width="340px" />

从上图可以看到使用的 web components shadow dom 进行渲染，最新的两个版本的现代浏览器都支持。Edge 和 Internet Explorer 11 需要引入 web components polyfills。

如果你要兼容 **IE8+**, 只要改 package.json 里的一行代码便可以:

```json
  "alias": {
    "omi": "omio"
  }
```

> Omio - Omi for old browsers with same api of omi(IE8+)

#### Omio HTML 输出结构

<img src="../assets/omi-snake-html-omio.png" width="450px" />

### Links

* [游戏源码](https://github.com/Tencent/omi/tree/master/packages/snake)
* [Omi源码](https://github.com/Tencent/omi)
* [Omi Store 体系文档](https://tencent.github.io/omi/site/docs/cn.html#/store?index=1&subIndex=8)
