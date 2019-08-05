## Extend

通过 Extend 可以扩展 attr 用来扩展 DOM 的能力。


## 举个例子

比如你可以通过 extend 轻松实现双向绑定的功能：

```jsx
import { define, WeElement, render, extend, get, set } from 'omi'

extend('model', (el, path, scope) => {
  el.value = get(scope, path)
  el.addEventListener('input', () => {
    set(scope, path, el.value)
    scope.update()
  })
})

define('my-component', class extends WeElement {
  msg = 'two-way binding'

  render(props) {
    return (
      <div>
        <input o-model="msg"></input>
        <div>{this.msg}</div>
      </div>
    )
  }
})

render(<my-component />, 'body')
```

[→ 在线演示](https://codepen.io/omijs/pen/aeLYjx)