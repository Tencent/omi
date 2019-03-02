
import { WeElement, define } from 'omi'
import '../my-element'

import './index.css'

interface IData {
  count: number
}

define('my-counter', class extends WeElement {
  data: IData = {
    count: 1
  }

  sub = () => {
    this.data.count--
    this.fire('change', this.data.count)
    this.update()
  }

  add = () => {
    this.data.count++
    this.fire('change', this.data.count)
    this.update()
  }

  render() {
    return (
      <view>
        <button onClick={this.sub}>-</button>
        <text>{this.data.count}</text>
        <button onClick={this.add}>+</button>
        <my-element msg='omi'></my-element>
      </view>
    )
  }
})
