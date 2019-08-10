import { h } from 'omis'
import './index.css'

const TodoFooter = ({ left, type, done }, { showAll, showActive, showDone, clearDone }) => {
  return <view class="footer">
    <view class="todo-count"><text class="strong">{left + ' '}items left</text> </view>
    <view class="filters">
      <view class='ib' onClick={showAll}>
        <text class={type === 'all' ? 'selected' : ''} >All</text>
      </view>
      <view class='ib' onClick={showActive}>
        <text class={type === 'active' ? 'selected' : ''} >Active</text>
      </view>
      <view class='ib' onClick={showDone}>
        <text class={type === 'done' ? 'selected' : ''} >Done</text>
      </view>
    </view>
    {done > 0 && <button class="clear-completed" onClick={clearDone}>Clear done</button>}
  </view>
}

TodoFooter.store = ({props})=> {
  return {
    showAll() {
      props.onFilter('all')
    },

    showActive() {
      props.onFilter('active')
    },

    showDone() {
      props.onFilter('done')
    },

    clearDone() {
      props.onClear()
    }
  }
}

export default TodoFooter
