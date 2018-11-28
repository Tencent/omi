import { ModelView, define } from '../../../src/omi'
import vm from '../view-model/todo'
import './todo-list'

define('todo-app', class extends ModelView {
  vm = vm

  install() {
    vm.getAll()
  }

  render(props, data) {
    return (
      <div>
        <h3>TODO</h3>
        <todo-list items={data.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={data.text} />
          <button>Add #{data.items.length + 1}</button>
        </form>
        <other-view />
      </div>
    )
  }

  handleChange = e => {
    this.data.text = e.target.value
  }

  handleSubmit = e => {
    e.preventDefault()
    vm.add(this.data.text)
    this.data.text = ''
  }
})
