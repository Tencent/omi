import TodoItem from './todo-item'

export default class Todo {
  constructor() {
    this.items = []
  }

  initItems(list) {
    list.forEach(content => {
      this.items.push(new TodoItem(content))
    })
  }

  add(content) {
    this.items.push(new TodoItem(content))
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

  fetch(callback) {
    requestData(list => {
      this.initItems(list)
      callback()
    })
  }
}


//mock
function requestData(callback) {
  callback(['Task One', 'TaskTwo'])
}
