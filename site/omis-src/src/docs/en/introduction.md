## What's Omis ？

Omis (pronounced /ˈomɪs/) is Functional Style, Easy Store and Hyperscript Component Framework.

* Functional style but non-functional programming
* Structure-Style-Behavior Separation
* Hyperscript is visually more friendly
* Each component can have a store and be de-centralized
* Stores of each component can rely on global stores and be centralized
* Each component store has an update method that executes the method to customize local refresh components

## Add Omi in One Minute

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

You can also use hyperscript **with no build tooling**:

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

You're already getting started! Congratulations!
