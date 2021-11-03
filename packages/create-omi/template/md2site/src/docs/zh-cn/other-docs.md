## Other Docs

### Markdown 扩展

你可以通过下面的语法高亮代码块中的某些行:

![Line Highlighting ](https://act.weixin.qq.com/static/images/201812/2a6077789545f695b3f5758f32b5070e.png)

输出:

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