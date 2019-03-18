import { WeElement, define } from 'omi'
import './index.css'

define('todo-footer', class extends WeElement {


  render() {
    return (
      <view class="footer">
        <view class="todo-count"><strong>{this.props.left}</strong> items left</view>
        <view class="filters">
          <view class='ib'>
            <text class={this.props.type === 'all' ? 'selected' : ''} >All</text>
          </view>
          <view class='ib'>
            <text class={this.props.type === 'active' ? 'selected' : ''} >Active</text>
          </view>
          <view class='ib'>
            <text class={this.props.type === 'done' ? 'selected' : ''} >Done</text>
          </view>
        </view>
        <button class="clear-completed">Clear done</button>
      </view>
    )
  }
})
