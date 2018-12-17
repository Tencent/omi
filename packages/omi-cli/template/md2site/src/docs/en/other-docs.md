# Other Docs

## Markdown Extensions

You can highlight some lines in the code block through the following syntax.

Input:

![Line Highlighting ](https://act.weixin.qq.com/static/images/201812/2a6077789545f695b3f5758f32b5070e.png)

Output:

```js {4,20-24}
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
    static observe = true
    
    data = {
      count: 1
    }

    sub = () => {
      this.data.count--
    }

    add = () => {
      this.data.count++
    }

    render() {
      return (
        <div>
          <button onClick={this.sub}>-</button>
          <span>{this.data.count}</span>
          <button onClick={this.add}>+</button>
        </div>
      )
    }
  })

render(<my-counter />, 'body')
```