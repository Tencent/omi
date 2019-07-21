## What's Omis ？

Omis (pronounced /ˈomɪs/) is Functional Style, Easy Store and Hyperscript Component Framework.

## Add Omi in One Minute

```jsx
import { render } from 'omi'

const Counter = (props, store) => {
  return (
    <div>
      <button onClick={store.sub}>-</button>
      <text>{store.count}</text>
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

You can also use hyperscript **with no build tooling**:

```js
import { render, h } from 'omi'

const Counter = (props, store) => {
  return (
    h('div', {}, [
      h('button', { onClick: store.sub }, '-'),
      h('text', {}, store.count),
      h('button', { onClick: store.add }, '+')
    ])
  )
}
```

You're already getting started! Congratulations!
