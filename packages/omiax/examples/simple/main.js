import { define, WeElement, render } from '../../src/index'

define('my-counter', class extends WeElement {
  count = 1

  sub = () => {
    this.count--
    this.update()
  }

  add = () => {
    this.count++
    this.update()
  }

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span style={{
          color: 'red'
        }}>{this.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')