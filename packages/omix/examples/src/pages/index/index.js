import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
  count = 1

  //You can also pass strings directly
  css = `span{
        color: red;
      }`

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
        <span>{this.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')