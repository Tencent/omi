
import { WeElement, define } from 'omi'
import './index.css'


define('page-about', class extends WeElement {
  render() {
    return (
      <view class="container">
        <image class="github" src={require('./omijs-org.png')}></image>
      </view>
    )
  }
})
