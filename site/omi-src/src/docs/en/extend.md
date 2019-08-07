## Extend

Extend can extend attr's ability to extend DOM.


## Example

For example, you can easily implement two way binding through extend:

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

[→ Codepen](https://codepen.io/omijs/pen/aeLYjx)