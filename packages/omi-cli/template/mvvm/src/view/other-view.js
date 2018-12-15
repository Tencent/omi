import { ModelView, define } from 'omi'
import vm from '../view-model/other'

define('other-view', class extends ModelView {
  vm = vm

  onClick = () => {
    vm.random()
  }

  render(props, data) {
    return (
      <div>
        <h3>Other View2</h3>
        <div>{data.num} </div>
        <button onClick={this.onClick}>random</button>
        <div>Todo List Length: {data.length}</div>
        <div>{data.projName}</div>
      </div>
    )
  }
})
