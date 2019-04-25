import { render, WeElement, define, observe } from '../../src/omi'

define('my-counter', @observe
class extends WeElement {
  data = {
    count: 1
  }
  
  css = `span{
    color: red;
  }`

  sub = () => {
    this.data.count--
  }

  add = () => {
    this.data.count++
  }

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.data.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')
