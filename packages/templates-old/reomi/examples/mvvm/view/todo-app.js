import { ModelView, define } from '../../../src/omi'
import vm from '../view-model/todo'
import './todo-list'

define('todo-app', class extends ModelView {
  vm = vm

  install() {
    vm.getAll()
  }

  css() {
    return `
    span{
       color: #888;
       font-size: 11px;
     }
    `
  }

  render(props, data) {
    return (
      <div>
        <h3>
          TODO by <span>by {data.author.firstName + data.author.lastName}</span>
        </h3>
        <todo-list items={data.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.text} />
          <button>Add #{data.items.length + 1}</button>
        </form>
        <other-view />
      </div>
    )
  }

  handleChange = e => {
    this.text = e.target.value
  }

  handleSubmit = e => {
    e.preventDefault()
    const text = this.text
    if (text !== '') {
      this.text = ''
      vm.add(text)
    }
  }
})
