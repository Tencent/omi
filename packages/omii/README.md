# omix

Omi 小程序组件框架。

## my-counter

index.js

```js
import { render, WeElement, define } from 'omix'

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

  buttonStyle = {
    color: 'red'
  }

  testStyle = {
    backgroundColor: 'red'
  }

  render() {
    return (
      <div>
        <button style={this.buttonStyle} onClick={this.sub}>-</button>
        <span style={this.testStyle}>{this.count}</span>
        <button style={this.buttonStyle} onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')
```
