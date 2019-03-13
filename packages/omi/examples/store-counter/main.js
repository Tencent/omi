import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  static use = [
    { count: 'count' }
  ]

  sub = () => this.store.sub()
  add = () => this.store.add()

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.use.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body', {
  data: {
    count: 0
  },
  sub() {
    this.data.count--
  },
  add() {
    this.data.count++
  },
})