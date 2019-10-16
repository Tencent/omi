import { h, Component } from 'preact'
import './index.css'

class Counter extends Component {
  state = { count: 1 }

  sub = () => {
    this.setState(prevState => {
      return { count: --prevState.count }
    });
  }

  add = () => {
    this.setState(prevState => {
      return { count: ++prevState.count }
    });
  }

  clickHandle = () => {
    if ("undefined" != typeof wx && wx.getSystemInfoSync) {
      wx.navigateTo({
        url: '../log/index?id=1'
      })
    } else {
      location.href = 'log.html'
    }
  }

  render({ }, { count }) {
    return (
      <div>
        <button onclick={this.sub}>-</button>
        <span>{count}</span>
        <button onclick={this.add}>+</button>
        <div onclick={this.clickHandle}>跳转</div>
      </div>
    )
  }
}

export default Counter
