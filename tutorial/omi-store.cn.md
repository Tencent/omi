# Omi 6.0 - Store 的设计哲学

## 写在前面

Store 是 Omi 内置的中心化数据仓库，他解决了下面两个问题:

* 组件树数据共享
* 数据变更按需更新依赖的组件

![](https://github.com/Tencent/omi/raw/master/assets/store.cn.jpg)

而这一切都是在运行时搞定。

## 一段代码完全上手 Store

```jsx
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
  use = [
    { count: 'count' }
  ]

  add = () => this.store.add()
  sub = () => this.store.sub()

  addIfOdd = () => {
    if (this.use.count % 2 !== 0) {
      this.store.add()
    }
  }

  addAsync = () => {
    setTimeout(() => this.store.add(), 1000)
  }

  render() {
    return (
      <p>
        Clicked: {this.use.count} times
        {' '}
        <button onClick={this.add}>+</button>
        {' '}
        <button onClick={this.sub}>-</button>
        {' '}
        <button onClick={this.addIfOdd}>
          Add if odd
        </button>
        {' '}
        <button onClick={this.addAsync}>
          Add async
        </button>
      </p>
    )
  }
})

render(<my-counter />, 'body', {
  data: {
    count: 0
  },
  sub() {
    this.data.count--
  },
  add() {
    this.data.count++
  },
})
```

这是一个简单的例子，说明了 store 体系的基本用法：

* 通过 `use` 声明依赖的 path
* `store` 通过 render 的第三个参数从根节点注入到所有组件。
* 调用组件的方法或者直接改变组件的 data 进行视图更新

这里在书写过程中会出现两种方式，一种是将所有数据和逻辑放在 store 里，一种是将部分共享数据放在 store 里，这里没有强制要求使用哪种方式，omi 这两种能力都有，开发者偏爱哪种方式就使用哪种方式。

## 复杂的例子

Store 里的 data:

```json
{
  count: 0,
  arr: ['china', 'tencent'],
  motto: 'I love omi.',
  userInfo: {
    firstName: 'dnt',
    lastName: 'zhang',
    age: 18
  }
}
```

Static use:

```jsx
use = [
  'count', //直接字符串，可通过 this.use[0] 访问
  'arr[0]', //也支持 path，可通过 this.use[1] 访问
  //支持 json
  {
    //alias，可通过 this.use.reverseMotto 访问
    reverseMotto: [
      'motto', //path
      target => target.split('').reverse().join('')  //computed
    ]
  },
  { name: 'arr[1]' }, //{ alias: path }，可通过 this.use.name 访问
  {
    //alias，可通过 this.use.fullName 访问
    fullName: [
      ['userInfo.firstName', 'userInfo.lastName'], //path array
      (firstName, lastName) => firstName + lastName //computed
    ]
  },
]
```

下面看看 JSX 中使用:

```jsx
...
...
render() {
  return (
    <div>
      <button onClick={this.sub}>-</button>
      <span>{this.use[0]}</span>
      <button onClick={this.add}>+</button>
      <div>
        <span>{this.use[1]}</span>
        <button onClick={this.rename}>rename</button>
      </div>
      <div>{this.use.reverseMotto}</div><button onClick={this.changeMotto}>change motto</button>
      <div>{this.use.name}</div>
      <div>{this.use[3]}</div>
      <div>
        {this.use.fullName}
        <button onClick={this.changeFirstName}>change first name</button>
      </div>
    </div>
  )
}
...
...
```

如果不带有 alias ，你也可以直接通过 `this.store.data.xxx` 访问。

## Path 命中规则

当 `store.data` 发生变化，依赖变更数据的组件会进行更新，举例说明 Path 命中规则:

| Proxy Path(由数据更改产生) |  use 中的 path | 是否更新 |
| ---------- | ---------- | -------- |
| abc        | abc        | 更新     |
| abc[1]     | abc        | 更新     |
| abc.a      | abc        | 更新     |
| abc        | abc.a      | 不更新   |
| abc        | abc[1]     | 不更新   |
| abc        | abc[1].c   | 不更新   |
| abc.b      | abc.b      | 更新     |

以上只要命中一个条件就可以进行更新！

总结： 只要注入组件的 path 等于 use 里声明 或者在 use 里声明的其中 path 子节点下就会进行更新！

## 解构赋值

```jsx
import { define, WeElement } from 'omi'
import '../my-list'

define('my-sidebar', class extends WeElement {
  static css = require('./_index.css')

  use = [
    'menus',
    'sideBarShow',
    'lan'
  ]

  render() {
    const [menus, sideBarShow, lan] = this.use

    return (
      <div class={`list${sideBarShow ? ' show' : ''}`}>
        {menus[lan].map((menu, index) => (
          <my-list menu={menu} index={index} />
        ))}
      </div>
    )
  }
})
```

这里举了个例子使用 ES2015+ 语法  `const [xx, xxx] = xxxx` 的语法快速赋值。上面是从 [omi docs](https://tencent.github.io/omi/site/docs/index.html) 的源码里截取的部分。感兴趣的可以[看看源码](https://github.com/Tencent/omi/tree/master/site)。omi 官网已经使用 omi 6.0 重写了。

## 设计哲学

回顾 Omi 从 1.0 到 6.0:

* Omi 1.0 运行时动态模板引擎
* Omi 2.0 拥抱虚拟 DOM 和运行时 scoped style
* Omi 3.0 提供 native 模块调用 bridge
* Omi 4.0 拥抱 Web Components
* Omi 5.0 纠正社区对 MVVM 误解
* Omi 6.0 拥抱多端统一，迎来全新 path updating 的 store 体系 


 1.0 使用的动态模板引擎，是图灵完备的，可以表达一切你想表达的结构。由于是运行时，没法转虚拟 DOM，一定要转也可以，开销大，所以缺点很明显，视图更新开销大，依赖真实 DOM 之间的的 diff，另外一个缺点就是动态模板引擎（指令、模板语法都可以动态拼接）需要在脑海里二次转换，书写起来不够直观、智能提示也没有，不如 JSX 直接干净和智能。而为什么要这么设计，从整个发展历程来看离不开三个字： **运行时**。

 Omi 的设计 1.0 败也败在运行时，成也成在运行时。从 2.0 开始，除了 JSX 的部分(当然可以直接 hyperscript)，其余全部 **运行时** 搞定:

 * 运行时的 scoped style
 * 运行时的 path updating 局部刷新
 
 而到了 9210 年，JSX 也出现了运行时的替代方案：[htm](https://github.com/developit/htm) 。

 为何如此偏爱运行时？而不交给编译器去做？这个仁者见仁，智者见智，而且有个权衡在里面。

 > 当运行时的开销对于用户体验可以忽略不计，那么就选择运行时去做

 运行时的好处非常明显，**不需要任何构建工具、编译工具，就可以在浏览器、node、javascript core 或者任何 javascript 环境直接运行**。凭什么让我学那么多构建工具、凭什么和一堆工具耦合在一起，我就是纯粹的 js，想在哪里跑都可以轻松复制粘贴或者直接  import/require 过去，而不强制带上任何工具。当然这里不是反对编译工具对前端带来的价值，omi-cli、omip、omi-mp 都大量使用了编译工具，只是没有编译工具，omi 也能运行良好，简单移植，比如 es module，比如 deno，直接 import 直接使用。

## 开始使用

* [omijs.org](https://tencent.github.io/omi/)
* [https://github.com/Tencent/omi](https://github.com/Tencent/omi)
