import TodoItem from './todo-item'
import { getAll, add } from './todo-server'

export default class Todo {
  constructor() {
    this.items = []

    this.author = {
      firstName: 'dnt',
      lastName: 'zhang'
    }
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
      return true
    })
  }

  complete(id) {
    this.items.every(item => {
      if (id === item.id) {
        item.completed = true
        return false
      }
      return true
    })
  }

  uncomplete(id) {
    this.items.every(item => {
      if (id === item.id) {
        item.completed = false
        return false
      }
      return true
    })
  }

  toogleComplete(id) {
    this.items.every(item => {
      if (id === item.id) {
        item.completed = !item.completed
        return false
      }
      return true
    })
  }

  remove(id) {
    this.items.every((item, index) => {
      if (id === item.id) {
        this.items.splice(index, 1)
        return false
      }
      return true
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
