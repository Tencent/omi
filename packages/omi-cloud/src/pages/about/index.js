
import { WeElement, define } from 'omi'
import './index.css'


define('page-about', class extends WeElement {
  config = {
    navigationBarBackgroundColor: '#24292e',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: ' ',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light'
  }
  
  render() {
    return (
      <view class="container">
        <image class="github" src={require('./omijs-org.png')}></image>
      </view>
    )
  }
})
