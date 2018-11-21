# omi-html

Using [htm](https://github.com/developit/htm) in omi.

[→ online demo](https://tencent.github.io/omi/packages/omi-html/examples/counter/)

## Usage

```js
import { define, render, WeElement, html }  from 'omi-html'

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
    return html`
      <div>
        <button onClick=${this.sub}>-</button>
        <span>${this.data.count}</span>
        <button onClick=${this.add}>+</button>
      </div>`
  }
})

render(html`<my-counter />`, 'body')
```

## License

MIT © dntzhang
