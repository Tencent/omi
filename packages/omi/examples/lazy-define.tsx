import {
  render,
  Signal,
  tag,
  Component,
  h,
  computed,
  registerDirective,
  define,
} from '@/index'

import autoAnimate from '@formkit/auto-animate'
registerDirective('auto-animate', autoAnimate)

type Todo = { text: string; completed: boolean; id: number }

class TodoApp extends Signal<{
  todos: Todo[]
  filter: string
  newItem: string
}> {
  completedCount: ReturnType<typeof computed>

  constructor(todos: Todo[] = []) {
    super({ todos, filter: 'all', newItem: '' })
    this.completedCount = computed(
      () => this.value.todos.filter((todo) => todo.completed).length,
    )
  }

  addTodo = () => {
    // api a
    this.value.todos.push({
      text: this.value.newItem,
      completed: false,
      id: Math.random(),
    })
    this.value.newItem = ''
    this.update()

    // api b, same as api a
    // this.update((value) => {
    //   value.todos.push({ text: value.newItem, completed: false })
    //   value.newItem = ''
    // })
  }

  toggleTodo = (index: number) => {
    const todo = this.value.todos[index]
    todo.completed = !todo.completed
    this.update()
  }

  removeTodo = (index: number) => {
    this.value.todos.splice(index, 1)
    this.update()
  }
}

const todoApp = new TodoApp([
  { text: 'Learn OMI', completed: true, id: 1 },
  { text: 'Learn Web Components', completed: false, id: 2 },
  { text: 'Learn JSX', completed: false, id: 3 },
  { text: 'Learn Signal', completed: false, id: 4 },
])

define(
  'todo-list',
  class TodoList extends Component {
    onInput = (event: Event) => {
      const target = event.target as HTMLInputElement
      todoApp.value.newItem = target.value
    }

    render() {
      const { todos } = todoApp.value
      const { completedCount, toggleTodo, addTodo, removeTodo } = todoApp
      return (
        <>
          <input
            type="text"
            value={todoApp.value.newItem}
            onInput={this.onInput}
          />
          <button onClick={addTodo}>Add</button>
          <my-el
            a="11"
            onInstalled={(el) => {
              console.log(el.detail, 'installed')
            }}
          ></my-el>
          <p>Completed count: {completedCount.value}</p>
        </>
      )
    }
  },
)

setTimeout(() => {
  define(
    'my-el',
    class TodoList extends Component {
      onInput = (event: Event) => {
        const target = event.target as HTMLInputElement
        todoApp.value.newItem = target.value
      }

      render() {
        console.log('this.props', this.props)
        return <div>b{this.props.a}b</div>
      }
    },
  )
}, 1000)

render(
  <todo-list
    onInstalled={() => {
      console.log('installed')
    }}
  />,
  document.body,
)
