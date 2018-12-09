import { ModelView, define } from 'omi'
import vm from '../view-model/todo'
import './todo-list'
import './other-view'

define('todo-app', class extends ModelView {
  vm = vm

  css() {
    return `
    span{
       color: #888;
       font-size: 11px;
     }
    `
  }

  onClick = () => {
    vm.changeSharedData()
  }

  install() {
    vm.getAll()
  }

  render(props, data) {
    return (
      <div>
        <h3>TODO <span>by {data.fullName}</span></h3>
        <todo-list items={data.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.text} />
          <button>Add #{data.items.length + 1}</button>
        </form>
        <div>{data.projName}</div>
        <button onClick={this.onClick}>Change Shared Data</button>
        <other-view />

        <a href="https://github.com/Tencent/omi" target="_blank" style="position: fixed; right: 0; top: 0; z-index: 3;">
          <img src="//alloyteam.github.io/github.png" alt="" />
        </a>
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
