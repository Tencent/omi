import { render, WeElement, define, rpx } from '../../src/omi'

define('my-counter',
class extends WeElement {
	static observe = true

	css() {
		return rpx(`div{font-size:375rpx}`)
	}

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
