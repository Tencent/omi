# Wesee

Omi 小程序组件框架。

## my-counter

index.js

```js
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
  count = 1

  sub = () => {
    this.count--
    this.update()
  }

  add = () => {
    this.count++
    this.update()
  }

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span class='my-class'>{this.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')
```

index.css

```css
button{
  color: red;
}

.my-class{
  background-color: red;
}
```