import {  signalObject, computed } from '@/index'

const app = signalObject({
  todos: [
    { text: 'Learn OMI', completed: true },
    { text: 'Learn Web Components', completed: false },
    { text: 'Learn JSX', completed: false },
    { text: 'Learn Signal', completed: false }
  ],
  newItem: ''
})

const { todos, newItem } = app

const completedCount = computed(() => {
  return todos.value.filter(todo => todo.completed).length
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

