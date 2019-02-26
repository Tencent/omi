import util from '../../utils/util'
import { WeElement, define } from 'omi'
import '../../components/my-counter'

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

  counterChange = (evt)=> {
    console.log(evt.detail)
  }

  render() {
    return (
      <view>
        <my-counter onChange={this.counterChange}></my-counter>
        <view class="container log-list">
          {this.data.logs.map((log, index) => (
            <text class="log-item">{index + 1}. {log}</text>
          ))}
        </view>
      </view>
    )
  }
})