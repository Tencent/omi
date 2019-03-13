import { render, WeElement, define } from '../../src/omi'

define('add-todo', class extends WeElement {

  render() {
    let input

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.store.addTodo(input.value)
          input.value = ''
        }}>
          <input ref={node => input = node} />
          <button type="submit">
            Add Todo
        </button>
        </form>
      </div>
    )
  }
})

define('todo-list', class extends WeElement {

  render() {
    return (
      <ul>
        {this.store.data.todos.map(todo => this.renderItem(todo))}
      </ul>
    )
  }

  onClick = (id) => {
    this.store.toggleTodo(id)
  }

  renderItem(todo) {
    return <li
      key={todo.id}
      onClick={() => this.onClick(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
    >
      {todo.text}
    </li>
  }
})



define('todo-app', class extends WeElement {
  static use = [
    'todos'
  ]

  render() {
    return (
      <div>
        <add-todo />
        <todo-list />
        <todo-footer />
      </div>
    )
  }
})

render(<todo-app />, 'body', {
  data: {
    todos: [{
      id: 0,
      text: 'item1'
    }]
  },
  toggleTodo(id) {
    this.data.todos.every(item => {
      if (id === item.id) {
        item.completed = !item.completed
        return false
      }
      return true
    })
  },
  addTodo(text) {
    this.data.todos.unshift({
      id: ++this.id,
      text: text
    })
  },
  id: 0
})