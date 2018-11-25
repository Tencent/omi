import { WeElement, define } from '../../../src/omi'
import { add, getAll } from '../controller/todo'
import vd from '../view-data/todo'
import './todo-list'
import './other-view'

define('todo-app', class extends WeElement {
  static observe = true

  data = vd

  install() {
    getAll()
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <todo-list items={vd.data.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={vd.data.text} />
          <button>Add #{vd.data.items.length + 1}</button>
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
    add(this.data.text)
    this.data.text = ''
  }
})
