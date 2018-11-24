import { WeElement, define } from '../../../src/omi'
import { add, getAll } from '../controller/todo'
import vd from '../view-data/todo'
import './todo-list'

define('todo-app', class extends WeElement {
  static observe = true

  data = vd.data

  install() {
    getAll()
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <todo-list items={this.data.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.data.text}
          />
          <button>Add #{this.data.items.length + 1}</button>
        </form>
      </div>
    )
  }

  handleChange = e => {
    this.data.text = e.target.value
  }

  handleSubmit = e => {
    e.preventDefault()
    add(this.data.text)
    this.data.text = ''
  }
})
