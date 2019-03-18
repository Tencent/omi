import { WeElement, define } from 'omi'
import './index.css'

define('todo-footer', class extends WeElement {
  showAll = () => {
    this.fire('filter', 'all')
  }

  showActive = () => {
    this.fire('filter', 'active')
  }

  showDone = () => {
    this.fire('filter', 'done')
  }

  clearDone = () => {
    this.fire('clear')
  }

  render() {
    return (
      <view class="footer">
        <view class="todo-count"><text class="strong">{this.props.left + ' '}</text> items left</view>
        <view class="filters">
          <view class='ib' bindtap={this.showAll}>
            <text class={this.props.type === 'all' ? 'selected' : ''} >All</text>
          </view>
          <view class='ib' bindtap={this.showActive}>
            <text class={this.props.type === 'active' ? 'selected' : ''} >Active</text>
          </view>
          <view class='ib' bindtap={this.showDone}>
            <text class={this.props.type === 'done' ? 'selected' : ''} >Done</text>
          </view>
        </view>
        <button class="clear-completed" bindtap={this.clearDone}>Clear done</button>
      </view>
    )
  }
})
