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


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


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
    const filter = this.store.data.filter
    if (filter === VisibilityFilters.SHOW_ALL ||
      filter === VisibilityFilters.SHOW_ACTIVE && !todo.completed ||
      filter === VisibilityFilters.SHOW_COMPLETED && todo.completed
    )
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


define('todo-footer', class extends WeElement {

  render() {
    return (
      <div>
        <span>Show: </span>
        <filter-link filter={VisibilityFilters.SHOW_ALL}>
          All
        </filter-link>
        <filter-link filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
        </filter-link>
        <filter-link filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </filter-link>
      </div>
    )
  }
})


define('filter-link', class extends WeElement {
  onClick = () => {
    this.store.data.filter = this.props.filter
  }

  render(props) {
    return (
      <button
        onClick={this.onClick}
        disabled={props.filter === this.store.data.filter}
        style={{
          marginLeft: '4px',
        }}
      >
        {props.children}
      </button>
    )
  }
})


define('todo-app', class extends WeElement {
  static use = [
    'todos',
    'filter'
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
      text: 'Use Omi'
    }],
    filter: VisibilityFilters.SHOW_ALL
  },
  id: 0,
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
  }
})