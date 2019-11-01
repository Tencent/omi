import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  //commented out for ie8
  //static observe = true

  data = {
    count: 1
  }

  sub = () => {
    this.data.count--
    //no observe, so call this.update for ie8
    this.update()
  }

  add = () => {
    this.data.count++
    //no observe, so call this.update for ie8
    this.update()
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
