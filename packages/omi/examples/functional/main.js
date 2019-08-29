import { render, define } from '../../src/omi'

class Store {
  data = {
    count: 1
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
}

define('my-counter', ['count'], _ => (
  <div>
    <button onClick={_.store.sub}>-</button>
    <span>{_.store.data.count}</span>
    <button onClick={_.store.add}>+</button>
  </div>
), {
    css: `span { color: red; }`,
    installed() {
      console.log('installed')
    }
  })

render(<my-counter />, 'body', new Store)
