import { render, signalObject, computed, tag, Component, h } from '@/index'

const app = signalObject({
  todos: [
    { text: 'Learn OMI', completed: true },
    { text: 'Learn Web Components', completed: false },
    { text: 'Learn JSX', completed: false },
    { text: 'Learn Signal', completed: false },
  ],
  newItem: '',
})

const { todos, newItem } = app

const completedCount = computed(() => {
  return todos.value.filter((todo) => todo.completed).length
})

function addTodo() {
  todos.value.push({ text: newItem.value, completed: false })
  todos.update()
  newItem.value = '' // Reset input value on add
}

function removeTodo(index: number) {
  todos.value.splice(index, 1)
  todos.update()
}

@tag('todo-list')
class TodoList extends Component {
  onInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    newItem.value = target.value
  }

  render() {
    return (
      <>
        <input type="text" value={newItem.value} onInput={this.onInput} />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.value.map((todo, index) => {
            return (
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onInput={() => {
                      todo.completed = !todo.completed
                      todos.update()
                    }}
                  />
                  {todo.completed ? <s>{todo.text}</s> : todo.text}
                </label>{' '}
                <button onClick={() => removeTodo(index)}>❌</button>
              </li>
            )
          })}
        </ul>
        <p>Completed count: {completedCount.value}</p>
      </>
    )
  }
}

render(<todo-list />, document.body)
