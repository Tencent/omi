import util from '../../utils/util'
import { WeElement, define } from 'omi'
//兼容 omi 下划线？
import './index.css'

define('page-logs', class extends WeElement {
  data = {
    logs: []
  }

  install() {
    this.data.logs = (wx.getStorageSync('logs') || []).map(log => {
      return util.formatTime(new Date(log))
    })

    this.update()

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