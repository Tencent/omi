## 腾讯原生小程序框架 OMIX 2.0 发布

> 数据触手可及，状态无处遁形

<p align="center"><img src="https://tencent.github.io/omi/assets/omix2.png" alt="omix" width="720"/></p>

#### 特性

* 全局状态管理
* 无状态视图设计
* 对小程序零入侵
* 极简的 API
* 响应式视图
* 对 MVP 架构友好 
* 支持计算属性
* 轻松驾驭小项目、中项目和大型项目
* 多页单 store，多页多 store，单页多 store 拆分，统统都支持
* 也适用小游戏，是的没错，使用 **小程序开发小游戏**，本文第二个案例使用 OMIX 实现一个小游戏
* 【更新】支持有状态(data)的 Page，看文章最后的 QA
* 【更新】支持 Component 作为页面的根组件构造页面

OMIX 2.0 是 westore 的进化版，westore 使用的是数据变更前后的 diff，diff 出的 json 就是 setData 的 patch，omix 2.0 使用的是 observer 监听数据的变更得到 setData 的 patch。
和 omix 对比，westore 运行时需要更多的计算，omix 初始化时需要更多的内存和计算，但是数据变更时 omix 速度比 westore 快，编程体验方面，omix 不需要手动 update，westore 需要手动 update。


好的设计只有一种，我们认为 OMIX 2.0 的设计刚刚好。

## 快速使用

```
npx omi-cli init-x my-app
```

如果你习惯使用 TypeScript，可以使用 TypeScript 的模板：

```
npx omi-cli init-x-ts my-app
```

然后把小程序工作目录设置到 my-app 就可以开始愉快地使用 OMIX 了。

## 快速入门 

### API

* `create.Page(store, option)`         创建页面， store 从页面注入，可跨页面跨组件共享, 如果 option 定义了 data，store 的 data 会挂载在 `this.data.$` 下面
* `create.Component(option)`           创建组件
* `create.Component(store, option)`    创建[组件页面](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)
* `this.store.data`     全局 store 和 data，页面和页面所有组件可以拿到， 操作 data 会自动更新视图

> 不需要注入 store 的页面或组件用使用`Page`和`Component` 构造器,  `Component` 通过 [triggerEvent](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html) 与上层通讯或与上层的 store 交互

## 简单实战

> 实现一个简单的 log 列表的展示


<img src="https://tencent.github.io/omi/assets/logs.png"  width="400"/>

定义全局 store:

```js
export default {
  data: {
    logs: []
  }
}
```

定义页面:

```js
import create from '../../utils/create'
import util from '../../utils/util'
import store from '../../store'

create.Page(store, {
  // 声明依赖
  use: ['logs'], //也支持复杂路径依赖，比如 ['list[0].name']
  // 计算属性，可以直接绑定在 wxml 里
  computed: {
    logsLength() {
      return this.logs.length
    }
  },
  onLoad: function () {
    //响应式，自动更新视图
    this.store.data.logs = (wx.getStorageSync('logs') || []).map(log => {
      return util.formatTime(new Date(log))
    })

    setTimeout(() => {
      //响应式，自动更新视图
      this.store.data.logs[0] = 'Changed!'
    }, 1000)

    setTimeout(() => {
      //响应式，自动更新视图
      this.store.data.logs.push(Math.random(), Math.random())
    }, 2000)

    setTimeout(() => {
      //响应式，自动更新视图
      this.store.data.logs.splice(this.store.data.logs.length - 1, 1)
    }, 3000)
  }
})
```

```html
<view class="container log-list">
  <block wx:for="{{logs}}" wx:for-item="log">
    <text class="log-item">{{index + 1}}. {{log}}</text>
  </block>
</view>
```

定义 test-store 组件, 组件内也可以组件使用全局的 logs，组件源码:

```js
import create from '../../utils/create'

create.Component({
  use: ['logs'],
  //计算属性
  computed: {
    logsLength() {
      return this.logs.length
    }
  }
})
```

```html
<view class="ctn">
  <view>Log Length: {{logs.length}}</view>
  <view>Log Length by computed: {{logsLength}}</view>
</view>
```

## 其他可选配置说明

修改 store.js 的 debug 字段用来打开和关闭 log 调试:

```js
export default {
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logs: []
  },
  debug: true, //调试开关，打开可以在 console 面板查看到 store 变化的 log
  updateAll: true //当为 true 时，无脑全部更新，组件或页面不需要声明 use
}
```

全局更新开发默认是关闭的，调试开关默认打开，可以在`store.data` 的所有变动都会出现在开发者工具 log 面板，如下图所示:

![](https://tencent.github.io/omi/assets/omix.png)

## 其他

这里需要注意，改变数组的 length 不会触发视图更新，需要使用 size 方法:

```js
this.store.data.arr.size(2) //会触发视图更新
this.store.data.arr.length = 2 //不会触发视图更新

this.store.data.arr.push(111) //会触发视图更新
//每个数组的方法都有对应的 pure 前缀方法，比如 purePush、pureShift、purePop 等
this.store.data.arr.purePush(111) //不会触发视图更新

this.store.set(this.store.data, 'newProp', 'newPropVal')  //会触发视图更新
this.store.data.newProp = 'newPropVal' //新增属性不会触发视图更新，必须使用 store.set
```

###  计算属性

```js
  use: [
    'motto',
    'userInfo',
    'hasUserInfo',
    'canIUse'
  ],
  computed: {
    reverseMotto() {
      return this.motto.split('').reverse().join('')
    }
  }
```

计算属性定义在页面或者组件的 `computed` 里，如上面的 `reverseMotto`， 它可以直接绑定在 wxml 里，motto 更新会自动更新 reverseMotto 的值。

### store 变化监听

```js
const handler = function (evt) {
  console.log(evt)
}
//监听，允许绑定多个
store.onChange(handler)
//移除监听
store.offChange(handler) 
```

### 复杂小程序 store 管理

当小程序变得非常复杂的时候，单文件单一的 store 会变得非常臃肿，这里有两种方案：

* 拆分单一 store 到多个文件
* 拆分单一 store 到多个 store

两种方案可以视情况任选一种，或者两种混合使用，比如对于超过100个页面的小程序来说，多页面多 store 应该是很常见的。

#### 拆分单一 store 到多个文件

store-a.js:

```js
export const data = {
  name: 'omix'
}

export function changeName(){
  data.name = 'Omix'
}
```

store-b.js:

```js
export const data = {
  name: 'omix',
  age: 2
}

export function changeAge(){
  data.age++
}
```

store.js 合并所以子 store 到对应模块(a, b):

```js
import { data as dataA, changeName } from 'store-a.js'
import { data as dataB, changeAge } from 'store-b.js'

const store = {
  data:{
    a: dataA,
    b: dataB
  },
  a: { changeName },
  b: { changeAge }
}

export default store
```

数据绑定:

```html
<view>
  <text>{{a.name}}</text>
  <text>{{b.name}}-{{b.age}}</text>
</view>
```

数据使用:

```js
import create from '../../utils/create'
import store from '../../store/store'

create.Page(store, {
  //声明依赖
  use: ['a.name', 'b'],
  onLoad: function () {
    setTimeout(_ => {
      store.a.changeName()
    }, 1000)

    setTimeout(_ => {
      store.b.changeAge()
    }, 2000)
  }
})
```

多 store 注入的完整的案例可以 [点击这里](https://github.com/Tencent/omi/tree/master/packages/omix-multi-store)

#### 拆分单一 store 到多个 store

Page A:

```js
import create from '../../utils/create'
import store from '../../store/store-page-a.js'

create.Page(store, {
 
})
```

Page B:

```js
import create from '../../utils/create'
import store from '../../store/store-page-b.js'

create.Page(store, {
 
})
```

Page A 的 Page B 的 store 完全是两个不同的 store。

### Path 命中规则

当 `store.data` 发生变化，相关依赖的组件会进行更新，举例说明 Path 命中规则:

| Observer Path(由数据更改产生) |  use 中的 path | 是否更新 |
| ---------- | ---------- | -------- |
| abc        | abc        | 更新     |
| abc[1]     | abc        | 更新     |
| abc.a      | abc        | 更新     |
| abc        | abc.a      | 不更新   |
| abc        | abc[1]     | 不更新   |
| abc        | abc[1].c   | 不更新   |
| abc.b      | abc.b      | 更新     |

只要注入组件的 path 等于 use 里声明 或者在 use 里声明的其中 path 子节点下就会进行更新，以上只要命中一个条件便进行更新！

> 如果你的小程序真的很小，那么请无视上面的规则，直接把 store 的 updateAll 声明为 true 便可。如果小程序页面很多很复杂，为了更优的性能，请给每一个页面或非纯组件声明 `use`。

## 贪吃蛇游戏实战

<img src="https://act.weixin.qq.com/static/images/201910/50acb9b35f1d4b608958c9374b524ad4.jpg"  width="400"/>

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

### 使用代码描述蛇实体

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

### 使用代码描述游戏实体

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

### 定义 store 

```js
import Game from '../models/game'

const game = new Game
const { snake, map } = game

game.start()

class Store {
  data = {
    map,
    paused: false,
    highSpeed: false
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
    this.data.highSpeed = !this.data.highSpeed
  }
}

export default new Store
```

会发现， store 很薄，只负责中转 View 的 action，到 Model，以及隐藏式自动映射 Model 上的数据到 View。

### 游戏面板渲染

WXML:

```html
<view class="game">
  <view class="p" wx:for="{{map}}" wx:for-item="row" wx:for-index="index">
    <block wx:for="{{row}}" wx:for-item="col">
      <block wx:if="{{col}}">
        <view class="b s"></view>
      </block>
      <block wx:else>
        <view class="b"></view>
      </block>
    </block>
  </view>
</view>
```

带有 class 为 s 的格式是黑色的，比如食物、蛇的身体，其余的会灰色底色。

对应 js:

```js
import create from '../../utils/create'

create.Component({
  use: ['map']
})
```

`map` 代表依赖 store.data.map，map 更新会自动更新视图。

### 控制主界面面板

```html
<view>
  <game />
  <view class="ctrl">
    <view class="btn cm-btn cm-btn-dir up" bindtap="turnUp"><i></i><em></em><span>上</span></view>
    <view class="btn cm-btn cm-btn-dir down" bindtap="turnDown"><i></i><em></em><span>下</span></view>
    <view class="btn cm-btn cm-btn-dir left" bindtap="turnLeft"><i></i><em></em><span >左</span></view>
    <view class="btn cm-btn cm-btn-dir right" bindtap="turnRight"><i></i><em></em><span >右</span></view>
    <view class="btn cm-btn space" bindtap="toggleSpeed"><i></i><span >{{highSpeed? '减速': '加速'}}</span></view>
    <view class="btn reset small" bindtap="reset"><i ></i><span >重置</span></view>
    <view class="btn pp small" bindtap="pauseOrPlay"><i></i><span >{{paused ? '继续' : '暂停'}}</span></view>
  </view>
</view>
```

主界面使用 page，引用 component:

```json
{
  "usingComponents": {
    "game": "/components/game/index"
  }
}
```

对应 JS:

```JS
import create from '../../utils/create'
import store from '../../store/index'

create.Page(store, {
  use: ['paused', 'highSpeed'],
  turnUp() {
    store.turnUp()
  },
  turnDown() {
    store.turnDown()
  },
  turnLeft() {
    store.turnLeft()
  },
  turnRight() {
    store.turnRight()
  },
  toggleSpeed() {
    store.toggleSpeed()
  },
  reset() {
    store.reset()
  },
  pauseOrPlay() {
    store.pauseOrPlay()
  }
})
```

### 帧率控制

怎么控制主帧率和局部帧率。一般情况下，我们认为 60 FPS 是流畅的，所以我们定时器间隔是有 16ms，核心循环里的计算量越小，就越接近 60 FPS：

```js
this.loop = setInterval(() => {
  //
}, 16)
```

但是有些计算没有必要 16ms 计算一次，这样会降低帧率，所以可以记录上一次执行的时间用来控制帧率:

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

[→ 贪吃蛇源码](https://github.com/Tencent/omi/tree/master/packages/omix-snake)


### 贪吃蛇架构

那么是整个项目是 MVC、MVP 还是 MVVM?

从贪吃蛇源码可以看出：视图(components，pages)和模型(models)是分离的，没有相互依赖关系，但是在 MVC 中，视图依赖模型，耦合度太高，导致视图的可移植性大大降低，所以一定不是 MVC 架构。


![](https://tencent.github.io/omi/assets/mvc-mvp-mvvm.png)

在 MVP 模式中，视图不直接依赖模型，由 Presenter 负责完成 Model 和 View 的交互。MVVM 和 MVP 的模式比较接近。ViewModel 担任这 Presenter 的角色，并且提供 UI 视图所需要的数据源，而不是直接让 View 使用 Model 的数据源，这样大大提高了 View 和 Model 的可移植性，比如同样的 Model 切换使用 Flash、HTML、WPF 渲染，比如同样 View 使用不同的 Model，只要 Model 和 ViewModel 映射好，View 可以改动很小甚至不用改变。

从贪吃蛇源码可以看出，View(components) 里直接使用了 Presenter(stores) 的 data 属性进行渲染，data 属性来自于 Model(models) 的属性，并没有出现 Model 到 ViewModel 的映射。所以一定不是 MVVM 架构。

所以上面的贪吃蛇属于 **MVP** !只不过是进化版的 MVP，因为 M 里的 map 的变更会自定更是 View，从 M->P->V的回路是自动化的，代码里看不到任何逻辑。仅仅需要声明依赖:

```js
use: ['map']
```

这样也规避了 MVVM 最大的问题： M 到 VM 映射的开销。

### 进化版 MVP 优势

1、复用性

Model 和 View 之间解耦，Model 或 View 中的一方发生变化，Presenter 接口不变，另一方就没必要对上述变化做出改变，那么 Model 层的业务逻辑具有很好的灵活性和可重用性。

2、灵活性

Presenter 的 data 变更自动映射到视图，使得 Presenter 很薄很薄，View 属于被动视图。而且基于 Presenter 的 data 可以使用任何平台、任何框架、任何技术进行渲染。

3、测试性

假如 View 和 Model 之间的紧耦合，在 Model 和 View 同时开发完成之前对其中一方进行测试是不可能的。出于同样的原因，对 View 或 Model 进行单元测试很困难。现在，MVP模式解决了所有的问题。MVP 模式中，View 和 Model 之间没有直接依赖，开发者能够借助模拟对象注入测试两者中的任一方。


举个逻辑复用的例子，比如 OMI 团队发起的 snake-mvp 项目，下面的几个项目的 model 和 presenter 几乎一模一样，完全复用，只是渲染视图层根据不同的框架做了不同的适配。

![](https://tencent.github.io/omi/assets/snake-mvp.png)

比如 react 的视图层 :

```jsx
import React from 'react'
import Game from '../game'

import store from '../../stores/index'
import { $ } from 'omis'
require('../../utils/css').add(require('./_index.css'))

export default $({
  render() {
    const { store } = $
    const { paused } = store.data
    return <div className="container">
      <h1>[P]REACT + OMIS SNAKE</h1>

      <Game></Game>

      <div className="ctrl">
        <div className="btn cm-btn cm-btn-dir up" onClick={store.turnUp}><i></i><em></em><span>Up</span></div>
        <div className="btn cm-btn cm-btn-dir down" onClick={store.turnDown}><i></i><em></em><span>Down</span></div>
        <div className="btn cm-btn cm-btn-dir left" onClick={store.turnLeft}><i></i><em></em><span >Left</span></div>
        <div className="btn cm-btn cm-btn-dir right" onClick={store.turnRight}><i></i><em></em><span >Right</span></div>
        <div className="btn cm-btn space" onClick={store.toggleSpeed}><i></i><span >Gear</span></div>
        <div className="btn reset small" onClick={store.reset}><i ></i><span >Reset</span></div>
        <div className="btn pp small" onClick={store.pauseOrPlay}><i></i><span >{paused ? 'Play' : 'Pause'}</span></div>
      </div>
    </div>
  },
  useSelf: ['paused'],
  store
})
```


## Q & A

* 比如我一个弹窗组件，可能在很多页面使用，也可能在同一个页面使用多次；如果使用store来作为组件间通信的话，怎么应用可以实现组件是纯组件而不跟业务相关呢?

纯组件不用不用 create 创建，且该组件内使用 [triggerEvent](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html) 通知父组件改变 store.data 或者调用 store 的方法与外界通讯。

* TypeScript 版本有吗？

TypeScript 版本的例子可以点击这里 [omix-ts](https://github.com/Tencent/omi/tree/master/packages/omix-ts)

* 关于 omix 不支持定义私有 data 的疑惑

项目一开始的时候没有使用 omix 做状态管理，后来由于业务需求引用了 omix，但是使用过程中发现 omix v2 不允许定义私有 data。

如果不支持定义私有 data 的话，那么在项目上使用 omix 的时候，是否就需要把所有页面原有的 data 都合并到 store 中？

在页面数量过多的时候，我想这是一件比较痛苦的事。

对比了一下 omix、omix-v1、westore、dd-store，发现后三者都支持定义私有 data。

想请教一下，是什么原因，导致 omix 舍弃了 omix-v1 支持定义私有 data 的特性呢？

这是否违背了 omix 对小程序零入侵的特性？

### 答：支持页面拥有私有 data:

举个例子：

```js
create(store, {
  use: [
    'motto',
    'userInfo',
    'hasUserInfo',
    'canIUse'
  ],
  computed: {
    reverseMotto() {
      return this.motto.split('').reverse().join('')
    }
  },
  data: {
    name: 'omix'
  },
```

这个时候全局 store 的 data 会挂在在 `data.$` 下，所以绑定 wxml 的时候需要加上前缀，比如:

```html
<!--index.wxml-->
<view class="container">
  <view class="userinfo">
    <button wx:if="{{!$.hasUserInfo && $.canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
    <block wx:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" src="{{$.userInfo.avatarUrl}}" mode="cover"></image>
      <text class="userinfo-nickname">{{$.userInfo.nickName}}</text>
    </block>
  </view>
  <view class="usermotto">
    <text class="user-motto">{{$.motto}}-{{reverseMotto}}-{{name}}</text>
  </view>
  <test-store />
</view>
```

注意，data 和 computed 的属性不需要 $ 前缀。

计算属性访问 data:

```js
create(store, {
  use: [
    'motto',
    'userInfo',
    'hasUserInfo',
    'canIUse'
  ],
  computed: {
    reverseMotto(scope) {
      //看这里，通过 scope
      console.log(scope.data)
      return this.motto.split('').reverse().join('')
    }
  },
  data: {
    name: 'omix'
  },
```

## License

MIT © Tencent
