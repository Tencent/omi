## 使用 MVP 架构和 Omi 的 Web Components 开发贪吃蛇

<img src="../assets/omi-snake.png" width="300px" />

事实上, 我使用了 react、preact、vue 和 [omi 框架](https://github.com/Tencent/omi) 分别开发贪吃蛇游戏，我发现 omi 的开发体验最棒，并且其最后的[源代码非常地简洁]((https://github.com/Tencent/omi/tree/master/packages/omi-snake))，让我一步一步带着你们开发这款简单的游戏。

* [在线示例(手机移动端)](https://tencent.github.io/omi/packages/omi-snake/build/)

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

### Define the Store 

```js
import Game from '../models/game'

const game = new Game
const { snake, map } = game

game.start()

export default {
  data: {
    map
  },
  turnUp() {
    snake.turnUp()
  },
  turnRight() {
    snake.turnRight()
  },
  turnDown() {
    snake.turnDown()
  },
  turnLeft() {
    snake.turnLeft()
  },
  pauseOrPlay() {
    if (game.paused) {
      game.play()
    } else {
      game.pause()
    }
  },
  reset() {
    game.reset()
  },
  toggleSpeed() {
    game.toggleSpeed()
  }
}
```

You'll find that the store is thin and only responsible for transiting View action to Model and for automatically mapping data from Model to View.

### Frame Rate Control

How to control the main frame rate and the local frame rate? In general, we think that 60 FPS is fluent, so we have a 16 ms interval between timers. The smaller the amount of computation in the core cycle, the closer to 60 FPS:


```js
this.loop = setInterval(() => {
  //
}, 16)
```

However, some computations do not need to be computed once in 16 seconds, which reduces the frame rate, so the last execution time can be recorded to control the frame rate:



```js
this.loop = setInterval(() => {
    //60 FPS
  if (Date.now() - this._preDate > this.interval) {
    //1000/this.interval FPS
    this._preDate = Date.now()
    if (!this.paused) {
      //Core Loop Logic
      this.tick()
    }
  }
}, 16)
```

You can use [raf-interval](https://github.com/dntzhang/raf-interval) base on `requestAnimationFrame` instead of `setInterval` to improve performance:

```js
this.loop = setRafInterval(() => {
  //60 FPS
  if (Date.now() - this._preDate > this.interval) {
    //1000/this.interval FPS
    this._preDate = Date.now()
    if (!this.paused) {
      //Core Loop Logic
      this.tick()
    }
  }
}, 16)
```

### File directory description

```
├─ build           //Compiled files for production environments
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ components    //Components that store all view of pages
│  ├─ models        //Store all models
│  ├─ stores        //Store all store
│  └─ index.js      //The entry file will be built into index.html
```

So MVC, MVP or MVVM?

From the snake-eating source code, we can see that the view(components) and the model are separated, and there is no interdependence. But in MVC, the view depends on the model and the coupling degree is too high, which leads to the greatly reduced portability of the view, so it must not be MVC architecture.

![](../assets/mvc-mvp-mvvm.png)

In MVP mode, views do not depend directly on models, and Presenter is responsible for completing the interaction between Models and Views. MVVM and MVP are similar. ViewModel plays the role of Presenter and provides the data source needed for UI view, instead of directly letting View use the data source of Model. This greatly improves the portability of View and Model, such as using Flash, HTML, WPF rendering for the same model switch, such as using different models for the same View. As long as the Model and ViewModel are mapped well, View can be changed very little or not.


From the snake source code, we can see that the data attribute of Presenter (stores) is directly used to render in View (components). The data attribute comes from the attribute of Model(models), and there is no mapping between Model and ViewModel. So it must not be MVVM architecture.



So the snake above belongs to **MVP**! It's just an evolutionary version of MVP, because the `map` changes in M will be more customized than View, and the loop from M - > P - > V is automated, and there is no logic in the code. Simply declare dependency:

```js
define('my-game', ['map'] ...
```

This also avoids the biggest problem of MVVM: the overhead of M-to-VM mapping.

You can also change data in the store and it will automatically update views:

```js
  pauseOrPlay = () => {
    if (game.paused) {
      game.play()
      //auto update view
      this.data.paused = false
    } else {
      game.pause()
      //auto update view
      this.data.paused = true
    }
  }
```

Because of:

```js
define('my-index', ['paused'], ...
```

### Evolutionary MVP Advantages

1. Reusability

Decoupling between Model and View, change of one side of Model or View, unchanged Presenter interface, and change of the other side is unnecessary, so the business logic of Model layer has good flexibility and reusability.

2. Flexibility

Presenter's data changes are automatically mapped to views, making Presenter thin and thin, and View is a passive view. And Presenter-based data can be rendered using any platform, any framework, any technology.

3. Testability

If there is tight coupling between View and Model, it is impossible to test one of them before the simultaneous development of Model and View is completed. For the same reason, unit testing of View or Model is difficult. Now, the MVP model solves all the problems. In MVP mode, there is no direct dependency between View and Model, and developers can test either of them by injecting simulated objects.

### CSS rpx unit

Rpx (responsive pixel) is a unit invented by wxss in wechat mini programe: it can be adapted according to the width of the screen. Set the screen width to 750 rpx. For example, on the iPhone 6, the screen width is 375 px, with 750 physical pixels, 750 rpx = 375 PX = 750 physical pixels, and 1 rpx = 0.5 PX = 1 Physical pixel.

| **Device**                         | **rpx to px (screenwidth/750)**        | 	px to rpx (750/screenwidth) |
| ------------------------------- | ----------------------------------- | ---------------------|
| iPhone5 | 	1rpx = 0.42px | 1px = 2.34rpx|
| iPhone6 | 	1rpx = 0.5px | 1px = 2rpx|	
| iPhone6 Plus | 	1rpx = 0.552px | 1px = 1.81rpx |

Rpx unit is very conducive to the overall workflow of front-end development, because the designer's design draft is designed according to the width of 750, so the front-end page can directly use sketch export ruler for rpx layout.

Rpx can also be used for web development.

### rpx principle    

Because the device width can only be known at runtime, the mapping of rpx to PX needs to be calculated dynamically at runtime.

```js
export function rpx(css) {
  return css.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, (a, b) => {
    return (window.innerWidth * Number(b)) / 750 + 'px'
  })
}
```
### HTML structure screenshot

<img src="../assets/omi-snake-html.png" width="340px" />

### Compatibility

The last 2 versions of all modern browsers are supported, including Chrome, Safari, Opera, Firefox, Edge. In addition, Internet Explorer 11 is also supported.

Edge and Internet Explorer 11 require the web components polyfills.

If you want to be compatible with **IE8+**, Change one line in the package.json:

```json
  "alias": {
    "omi": "omio"
  }
```

> Omio - Omi for old browsers with same api of omi(IE8+)

HTML structure screenshot by omio:

<img src="../assets/omi-snake-html-omio.png" width="450px" />

### Links

* [Game Source Code](https://github.com/Tencent/omi/tree/master/packages/omi-snake)
* [Omi Github](https://github.com/Tencent/omi)
* [Omi Store System](https://tencent.github.io/omi/site/docs/index.html#/store?index=1&subIndex=8)
