import { h } from 'omis'
import './index.css'

const TodoFooter = ({ left, type, done }, { showAll, showActive, showDone, clearDone }) => {
  return <div class="footer">
    <div class="todo-count"><text class="strong">{left + ' '}items left</text> </div>
    <div class="filters">
      <div class='ib' onClick={showAll}>
        <text class={type === 'all' ? 'selected' : ''} >All</text>
      </div>
      <div class='ib' onClick={showActive}>
        <text class={type === 'active' ? 'selected' : ''} >Active</text>
      </div>
      <div class='ib' onClick={showDone}>
        <text class={type === 'done' ? 'selected' : ''} >Done</text>
      </div>
    </div>
    {done > 0 && <button class="clear-completed" onClick={clearDone}>Clear done</button>}
  </div>
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
