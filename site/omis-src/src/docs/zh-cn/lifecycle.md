
### 生命周期

| 方法名 | 执行时机                      |
| ---------------- | -------------------------------------------- |
| `install`        | 准备插入到文档 |
| `installed`      | 插入到文档之后 |
| `uninstall`      | 从文档中移除                 |
| `beforeUpdate`   |  update 之前                          |
| `updated`        |  update 之后                       |
| `beforeRender`   |  `render()` 之前                         |
| `receiveProps`   | 父元素重新渲染触发，返回 false 可阻止更新       |

举个例子:

```js
const Timer = (props, store) => <div>Seconds: {store.seconds}</div>

Timer.store = _ => ({
  seconds: 0,

  tick() {
    this.seconds++
    this.update()
  },

  install() {
    this.interval = setInterval(() => this.tick(), 1000)
  },

  uninstall() {
    clearInterval(this.interval)
  }

})

render(<Timer />, 'body')
```