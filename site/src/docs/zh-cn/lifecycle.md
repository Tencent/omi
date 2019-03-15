
### 生命周期

| Lifecycle method | When it gets called                          |
| ---------------- | -------------------------------------------- |
| `install`        | 准备插入到文档 |
| `installed`      | 插入到文档之后 |
| `uninstall`      | 从文档中移除                 |
| `beforeUpdate`   |  update 之前                          |
| `updated`        |  update 之后                       |
| `beforeRender`   |  `render()` 之前                         |
| `receiveProps`   | 父元素重新渲染触发       |

举个例子:

```js
import { render, WeElement, define } from 'omi'

define('my-timer', class extends WeElement {
  data = {
    seconds: 0
  }

  tick() {
    this.data.seconds++
    this.update()
  }

  install() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  uninstall() {
    clearInterval(this.interval)
  }

  render() {
    return <div>Seconds: {this.data.seconds}</div>
  }
})

render(<my-timer />, 'body')
```