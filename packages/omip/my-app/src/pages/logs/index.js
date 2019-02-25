import util from '../../utils/util'
import { WeElement, define } from 'omi'
//兼容 omi 下划线？
import './index.css'

define('my-logs', class extends WeElement {
  data = {
    logs: []
  }

  install() {
    this.data.logs = (wx.getStorageSync('logs') || []).map(log => {
      return util.formatTime(new Date(log))
    })

    this.data.logs.push('abc')

    this.update()
    console.log(this.data.logs.length)

  }
  render() {
    return (
      <view class="container log-list">
        {this.data.logs.map((log, index) => (
          <text class="log-item">{index + 1}. {log}</text>
        ))}
      </view>
    )
  }
})