import { h, Component } from 'preact'
import './index.css'

class Counter extends Component {
  state = { count: 1 }

  sub = () => {
    this.setState(prevState => {
      return { count: --prevState.count }
    })
  }

  add = () => {
    this.setState(prevState => {
      return { count: ++prevState.count }
    })
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
        <button onClick={this.sub}>-</button>
        <span>{count}</span>
        <button onClick={this.add}>+</button>
        <div onClick={this.clickHandle}>跳转</div>
      </div>
    )
  }
}

export default Counter
