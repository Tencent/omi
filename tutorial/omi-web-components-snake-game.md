## Snake-Eating Game Making with Web Components of Omi and MVP Architecture 

![](../assets/omi-snake.png)



### Domain Model Design

* Extract the main entities, such as (snakes, games)
* Summarize the specific business attribute methods from entity nouns.
  * Snake
    * Contains the direction of motion, body attributes
    * Including moving and steering methods
  * Game
    * Includes end pause status, maps, scores, frame rates, game protagonists, food
    * Include start game, pause game, end game, produce food, reset game, etc.
* Establishing links between entity attribute methods
  * The only protagonist in the game is the snake.
  * Snakes eat food, and game scores increase
  * Food disappears. Game is responsible for producing food again.
  * The snake hits the wall or hits itself, and the game is over.
* Core Loop Logic
  * Judge whether there is food or not and produce one without it (low frame rate)
  * Collision detection between snake and itself
  * Collision detection between snakes and obstacles
  * Collision detection between snake and food
  * Snake movement

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

The snake's turn has a logic that it can't retreat in the opposite direction. For example, it is moving upward and can't turn directly downward. Therefore, there are corresponding conditional judgments in `turnUp', `turnRight`, `turnDown`, `turnLeft`.

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

You can see that the above image uses a 16*16 two-dimensional array to store snakes, food, and map information. Snakes and food occupy 1 lattice and the rest 0.

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

So it represents a snake of five lengths and a food. Can you find it in the gird above?

### Game Panel Rendering

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

带有 class 为 s 的格式是黑色的，比如食物、蛇的身体，其余的会灰色底色。`Game.use` 的作用后面细讲，`map` 代表依赖 store.data.map，map更新会自动更新视图。

### Ctrl and Game Panel Rendering

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

会发现， store 很薄，只负责中转 View 的 action，到 Model，以及隐藏式自动映射 Model 上的数据到 View。

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

由于小程序 JSCore 里不支持 `requestAnimationFrame`，所以这里使用 setInterval。当然也可以使用 [raf-interval](https://github.com/dntzhang/raf-interval) 循环执行 tick:

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

用法和 setInterval 一致，只是内部使用 setTimeout 且如果支持 `requestAnimationFrame` 会优先使用 `requestAnimationFrame`。

[→ 贪吃蛇源码](https://github.com/Tencent/omi/tree/master/packages/omi-kbone)


### 贪吃蛇目录说明

```
├─ build
│  ├─ mp     //微信开发者工具指向的目录，用于生产环境
│  ├─ web    //web 编译出的文件，用于生产环境
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
Game.use = ['map']
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

### Compatibility

The last 2 versions of all modern browsers are supported, including Chrome, Safari, Opera, Firefox, Edge. In addition, Internet Explorer 11 is also supported.

Edge and Internet Explorer 11 require the web components polyfills.

If you want to be compatible with **IE8+**, Change on line in the package.json:

```json
  "alias": {
    "omi": "omio"
  }
```

### Reference

Reference and use of the partial [react-tetris] (https://chvin.github.io/react-tetris/) style.

### Links

* [Game Source Code](https://github.com/Tencent/omi/tree/master/packages/omi-snake)
* [Omi Github](https://github.com/Tencent/omi)