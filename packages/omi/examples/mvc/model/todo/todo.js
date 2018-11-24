import TodoItem from './todo-item'
import { getAll, add } from './todo-server'

export default class Todo {
  constructor() {
    this.items = []
  }

  initItems(list) {
    list.forEach(item => {
      this.items.push(new TodoItem(item.text))
    })
  }

  add(content) {
    const item = new TodoItem(content)
    this.items.push(item)
    add(item)
  }

  updateContent(id, content) {
    this.items.every(item => {
      if (id === item.id) {
        item.content = content
        return false
      }
    })
  }

  complete(id) {
    this.items.every(item => {
      if (id === item.id) {
        item.completed = true
        return false
      }
    })
  }

  remove(id) {
    this.items.every((item, index) => {
      if (id === item.id) {
        this.items.splice(index, 1)
        return false
      }
    })
  }

  clear() {
    this.items.length = 0
  }

  getAll(callback) {
    getAll(list => {
      this.initItems(list)
      callback()
    })
  }
}
