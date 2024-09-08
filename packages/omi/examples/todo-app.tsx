import { render, signal, tag, Component, h, computed, registerDirective } from '@/index'

import autoAnimate from '@formkit/auto-animate'
registerDirective('auto-animate', autoAnimate)

const newItem = signal('')
const todos = signal([
  { text: 'Learn OMI', completed: true, id: 1 },
  { text: 'Learn Web Components', completed: false, id: 2  },
  { text: 'Learn JSX', completed: false, id: 3  },
  { text: 'Learn Signal', completed: false, id: 4  }
])

const completedCount = computed(() => todos.value.filter(todo => todo.completed).length)

const addTodo = () => {
  todos.value.push({ text: newItem.value, completed: false, id: Math.random() })
  newItem.value = ''
  todos.update()
}

const toggleTodo = (index: number) => {
  todos.value[index].completed = !todos.value[index].completed
  todos.update()
}

const removeTodo = (index: number) => {
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
        <ul o-auto-animate>
          {todos.value.map((todo, index) => {
            return (
              <li key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onInput={() => toggleTodo(index)}
                  />
                  {todo.completed ? <s>{todo.text}</s> : todo.text}
                </label>
                {' '}
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

render(<todo-list onInstalled={()=>{
  console.log('installed')  
}} />, document.body)

