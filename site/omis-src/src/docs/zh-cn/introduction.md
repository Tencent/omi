## Omis

Omis (读 /ˈomɪs/) 是函数式风格，自带 store 且 hyperscript 友好的组件框架。

* 函数式风格但非函数式编程 
* 结构-样式-行为分离
* hyperscript 视觉上更加友好
* 每个组件可以带有一个 store，去中心化
* 每个组件的 store 可以依赖全局 store，中心化
* 每个组件 store 拥有 update 方法，执行该方法自定局部刷新组件

## 一分钟入门

```jsx
import { render } from 'omi'

const Counter = (props, store) => {
  return (
    <div>
      <button onClick={store.sub}>-</button>
      <span>{store.count}</span>
      <button onClick={store.add}>+</button>
    </div>
  )
}

Counter.store = _ => {
  return {
    count: 1,
    add(e) {
      this.count++
      this.update()
    },
    sub() {
      this.count--
      this.update()
    }
  }
}

render(<Counter />, 'body')
```

也可以直接使用 hyperscript，无需任何编译直接运行:

```js
import { render, h } from 'omi'

const Counter = (props, store) => {
  return (
    h('div', {}, [
      h('button', { onClick: store.sub }, '-'),
      h('span', {}, store.count),
      h('button', { onClick: store.add }, '+')
    ])
  )
}
```

恭喜你已经入门！
