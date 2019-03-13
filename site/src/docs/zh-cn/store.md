## Store 是什么？

Store 是 Omi 内置的中心化数据仓库，他解决和提供了下面问题和能力：

* 组件树数据共享
* 数据变更按需更新依赖的组件

## 一段代码完全上手 Store

```js
import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  static use = [
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

* 通过 `static use` 声明依赖的 path
* `store` 通过 render 的第三个参数从根节点注入到所有组件。

下面举一个复杂的 `use` 例子：

```js
static use = [
  'count', //直接字符串，JSX 里可通过 this.use[0] 访问
  'arr[0]', //也支持 path，JSX 里可通过 this.use[1] 访问
  //支持 json
  {
    //alias，JSX 里可通过 this.use.reverseMotto 访问
    reverseMotto: [
      'motto', //path
      target => target.split('').reverse().join('')  //computed
    ]
  },
  { name: 'arr[1]' }, //{ alias: path }，JSX 里可通过 this.use.name 访问
  {
    //alias，JSX 里可通过 this.use.fullName 访问
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