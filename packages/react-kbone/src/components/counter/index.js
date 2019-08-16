import React from 'react'
import './index.css'

class Counter extends React.Component {
  state = { count: 1 }

  sub = () => {
    this.setState({ count: --this.state.count })
  }

  add = () => {
    this.setState({ count: ++this.state.count })
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

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.add}>+</button>
        <div onClick={this.clickHandle}>跳转</div>
      </div>
    )
  }
}

export default Counter
