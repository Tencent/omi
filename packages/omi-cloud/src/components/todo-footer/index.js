import { WeElement, define } from 'omi'
import './index.css'

define('todo-footer', class extends WeElement {


  render() {
    return (
      <view class="footer">
        <view class="todo-count"><strong>0</strong> items left</view>
        <view class="filters">
          <view class='ib'>
            <text class="selected" href="#/">All</text>
          </view>
          <view  class='ib'>
            <text href="#/active">Active</text>
          </view>
          <view  class='ib'>
            <text href="#/completed">Done</text>
          </view>
        </view>
        <button class="clear-completed">Clear done</button>
      </view>
    )
  }
})
