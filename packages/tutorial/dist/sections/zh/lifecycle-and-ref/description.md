
### 生命周期

| Lifecycle method | When it gets called                          |
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

## Ref

```jsx
define('my-element', class extends WeElement {
  onClick = (evt) => {
    console.log(this.h1)
  }

  render(props) {
    return (
      <div>
        <h1 ref={e => { this.h1 = e }} onClick={this.onClick}>Hello, world!</h1>
      </div>
    )
  }
})
```

在元素上添加 `ref={e => { this.anyNameYouWant = e }}` ，然后你就可以 JS 代码里使用 `this.anyNameYouWant` 访问该元素。你可以使用两种方式来提高 update 的性能：

* 提前赋值
* createRef

### 提前赋值

```jsx
define('my-element', class extends WeElement {
  onClick = (evt) => {
    console.log(this.h1)
  }

  myRef = e => { this.h1 = e }

  render(props) {
    return (
      <div>
        <h1 ref={this.myRef} onClick={this.onClick}>Hello, world!</h1>
      </div>
    )
  }
})
```

### createRef

你也可以使用 `createRef` 来得到更高的性能:

```jsx
define('my-element', class extends WeElement {
  onClick = (evt) => {
    console.log(this.myRef.current)  //h1
  }

  myRef = createRef()

  render(props) {
    return (
      <div>
        <h1 ref={this.myRef} onClick={this.onClick}>Hello, world!</h1>
      </div>
    )
  }
})
```