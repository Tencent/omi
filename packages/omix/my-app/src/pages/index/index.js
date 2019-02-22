
import { WeElement, define } from 'omi'



define('my-counter', class extends WeElement {
  count = 1

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
      <view>
        <button onClick={this.sub}>-</button>
        <text>{this.count}</text>
        <button onClick={this.add}>+</button>
      </view>
    )
  }
})