## Lifecycle

| Lifecycle method | When it gets called                          |
| ---------------- | -------------------------------------------- |
| `install`        | before the component gets mounted to the DOM |
| `installed`      | after the component gets mounted to the DOM  |
| `uninstall`      | prior to removal from the DOM                |
| `beforeUpdate`   | before update                           |
| `updated`    | after update                             |
| `beforeRender`   | before `render()`                           |
| `receiveProps`   | parent element re-render will trigger it, `return false` will prevent update action    |

For example:

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
