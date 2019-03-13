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
    <ul>
      {todos.map(todo =>
        <todo-item
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </ul>

  }
})


define('todo-item', class extends WeElement {

  render() {

    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>

  }
})



define('todo-app', class extends WeElement {

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
    todos: []
  },
  sub() {
    this.data.count--
  },
  add() {
    this.data.count++
  },
})