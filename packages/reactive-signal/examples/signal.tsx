import { signal, computed } from '@/index'

const todos = signal([
  { text: 'Learn OMI', completed: true },
  { text: 'Learn Web Components', completed: false },
  { text: 'Learn JSX', completed: false },
  { text: 'Learn Signal', completed: false }
])

const completedCount = computed(() => {
  return todos.value.filter(todo => todo.completed).length
})

const newItem = signal('')

function addTodo() {
  todos.value.push({ text: newItem.value, completed: false })
  todos.update()
  newItem.value = '' // Reset input value on add
}

function removeTodo(index: number) {
  todos.value.splice(index, 1)
  todos.update()
}
