
## Lifecycle

| Lifecycle method | When it gets called                          |
| ---------------- | -------------------------------------------- |
| `install`        | before the component gets mounted to the DOM |
| `installed`      | after the component gets mounted to the DOM  |
| `uninstall`      | prior to removal from the DOM                |
| `beforeUpdate`   | before update                           |
| `updated`    | after update                             |
| `beforeRender`   | before `render()`                           |
| `receiveProps`   | parent element re-render will trigger it, `return false` will prevent update action |

For example:

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

Add `ref = {e => {this. anyNameYouWant = e} ` to the element, and then you can access the element using `this. anyNameYouWant` in the JS code. You can improve the performance of update in two ways:

* Assignment ahead of time
* createRef

### Assignment ahead of time

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