## Store 是什么？

Store 是 Omi 内置的中心化数据仓库，他解决和提供了下面问题和能力：

* 组件树数据共享
* 数据变更按需更新依赖的组件

![](https://github.com/Tencent/omi/raw/master/assets/store.cn.jpg)


## 快速概览

整个组件树共享数据，并且数据变更自动更新视图。

```jsx
import { define, render } from 'omi'

class Store {
  data = {
    count: 1
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
}

define('my-counter', _ => (
  <div>
    <button onClick={_.store.sub}>-</button>
    <span>{_.store.data.count}</span>
    <button onClick={_.store.add}>+</button>
  </div>
), {
    use: ['count'], 
    //或者使用 useSelf, useSelf 只会更新自身，不更新子组件
    //useSelf: ['count'], 
    css: `span { color: red; }`,
    installed() {
      console.log('installed')
    }
  })

render(<my-counter />, 'body', new Store)
```

* `<my-counter></my-counter>` 可以用于任意框架或者无框架，比如 `document.createElement('my-counter')`


你也可以使用 `useSelf`, `useSelf` 只会更新自身，不更新子组件。使用 `useSelf` 的时候在 JSX 里通过 `usingSelf` 访问对应属性。

你也可以通过 `compute` 去实现 `computed` 计算属性，比如:

```jsx
define('my-counter', _ => (
  <div>
    <button onClick={_.store.sub}>-</button>
    <span>{_.store.data.count}</span>
    <button onClick={_.store.add}>+</button>
    <div>Double: {_.computed.doubleCount}</div>
  </div>
), {
    use: ['count'],
    compute: {
      doubleCount() {
        return this.count * 2
      }
    }
  })
```

路径也是支持的，比如下面的例子:

```js
class Store {
  data = {
    list: [
      { name: { first: 'dnt', last: 'zhang' } }
    ]
  }
}

...
...

define('my-counter', _ => (
  ...
  ...
), {
    use: [
      'list[0].name', //可以通过 this.using[0] 访问
    ],
    compute: {
      fullName() {
        return this.list[0].name.first + this.list[0].name.last
      }
    }
  })
```

![](https://tencent.github.io/omi/assets/store.cn.jpg)

### 多个 store 注入

```jsx
import { define, render } from 'omi'

define('my-app', _ => {
  const store = _.store.storeA
  const { data, add, sub } = store
  return (
    <p>
      Clicked: {data.count} times
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>

      <div>
        {_.store.storeB.data.msg}
        <button  onClick={_.store.storeB.changeMsg}>
          change storeB's msg
        </button>
      </div>
    </p>
  )
}, {
  useSelf: {
    storeA: ['count', 'adding'],
    storeB: ['msg']
  }
})

const storeA = new class Store {
  data = {
    count: 0,
    adding: false
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
}

const storeB = new class Store {
  data = {
    msg: 'abc'
  }
  changeMsg = () => {
    this.data.msg = 'bcd'
  }
}

render( <my-app /> , 'body', {
  storeA,
  storeB
})
```

怎么在注入多 store 的时候使用 `compute` and `computed`? 非常简单：

```jsx
define('my-app', _ => {
  const store = _.store.storeA
  const { data, add, sub } = store
  return (
    <p>
      Clicked: {data.count} times
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>

      <div>
        {_.store.storeB.data.msg}
        <button onClick={_.store.storeB.changeMsg}>
          change storeB's msg
        </button>
      </div>

      <div>{_.computed.dobuleCount}</div>
      <div>{_.computed.reverseMsg}</div>
    </p>
  )
}, {
    useSelf: {
      storeA: ['count', 'adding'],
      storeB: ['msg']
    },
    compute: {
      dobuleCount() {
        return this.storeA.data.count * 2
      },
      reverseMsg() {
        return this.storeB.data.msg.split('').reverse().join('')
      }
    }
  })
```

### API 和 钩子

```jsx
define('my-component', _ => (
  ...
  ...
), {
    use: ['path', 'path.a', 'path[1].b'],
    useSelf: ['path.c', 'path[1].d'],
    css: 'h1 { color: red; }',
    propTypes: { },
    defaultProps: { },
    isLightDOM: true, //default is false

    //生命周期
    install() { }, 
    installed() { }, 
    uninstall() { }, 
    receiveProps() { },
    beforeUpdate() { }, 
    updated() { }, 
    beforeRender() { }, 
    rendered() { },
    
    //自定义方法
    myMethodA() { },
    myMethodB() { }

  })
```

### 通过 prop 注入 use 或 useSelf

```jsx
<my-counter use={['count']} ></my-counter>
```

## 一段代码完全上手 Store

```jsx
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
  use = ['count', 'adding']

  addIfOdd = () => {
    if (this.store.data.count % 2 !== 0) {
      this.store.add()
    }
  }

  addAsync = () => {
    this.store.data.adding = true
    setTimeout(() => {
      this.store.data.adding = false
      this.store.add()
    }, 1000)
  }

  render() {
    const store = this.store
    const { data, add, sub } = store
    return (
      <p>
        Clicked: {data.count} times
        {' '}
        <button onClick={add}>+</button>
        {' '}
        <button onClick={sub}>-</button>
        {' '}
        <button disabled={data.count % 2 === 0} onClick={this.addIfOdd}>
          Add if odd
        </button>
        {' '}
        <button disabled={data.adding} onClick={this.addAsync}>
          Add async
        </button>
      </p>
    )
  }
})

render(<my-counter />, 'body', new class Store {
  data = {
    count: 0,
    adding: false
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
})
```

* 通过 `use` 声明依赖的 path，当然也可以使用 `useSelf`，`useSelf`触发的更新只会更新自己，不会更新子组件。
* `store` 通过 render 的第三个参数从根节点注入到所有组件。

下面举一个复杂的 `use` 例子。

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

Use 和 Compute 语法如下:

```jsx
use = [
  'count', //直接字符串，可通过 this.using[0] 访问
  'arr[0]', //也支持 path，可通过 this.using[1] 访问
  'motto',
  'userInfo',
  { name: 'arr[1]' } //{ alias: path }，可通过 this.using.name 访问
]

compute = {
  reverseMotto() {
    return this.motto.split('').reverse().join('')
  },
  fullName() {
    return this.userInfo.firstName + this.userInfo.lastName
  }
}
```

下面看看 JSX 中使用:

```jsx
...
...
render() {
  return (
    <div>
      <button onClick={this.sub}>-</button>
      <span>{this.using[0]}</span>
      <button onClick={this.add}>+</button>
      <div>
        <span>{this.using[1]}</span>
        <button onClick={this.rename}>rename</button>
      </div>
      <div>{this.computed.reverseMotto}</div><button onClick={this.changeMotto}>change motto</button>
      <div>{this.using.name}</div>
      <div>{this.using[3]}</div>
      <div>
        {this.computed.fullName}
        <button onClick={this.changeFirstName}>change first name</button>
      </div>
    </div>
  )
}
...
...
```

如果不带有 alias ，你也可以直接通过 `this.store.data.xxx` 访问。


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

### 解构赋值

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
    const [menus, sideBarShow, lan] = this.using

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

这里举了个例子使用 ES2015+ 语法  `const [xx, xxx] = xxxx` 的语法快速赋值。

## 动态 use

如果你不希望同样的组件拥有同样的依赖，可以使用动态的 use：


```js
use() {
  return [
    'a.b',
    'c[1].d',
    `e.f.${xxx}.d[${index}]`
  ]
}
```

## 函数式风格 

```jsx
import { define, render } from 'omi'

class Store {
  data = {
    count: 1
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
}

define('my-counter', ['count'], _ => (
  <div>
    <button onClick={_.store.sub}>-</button>
    <span>{_.store.data.count}</span>
    <button onClick={_.store.add}>+</button>
  </div>
))

render(<my-counter />, 'body', new Store)
```

非常灵活！
