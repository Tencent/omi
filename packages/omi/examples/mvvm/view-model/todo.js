import mapping from 'mappingjs'
import todo from '../model/todo'

class TodoViewData {
  constructor() {
    this.data = {
      items: []
    }
  }

  update() {
    mapping.auto(todo, this.data)
  }

  complete(id) {
    todo.complete(id)
    this.update()
  }

  uncomplete(id) {
    todo.uncomplete(id)
    this.update()
  }

  add(text) {
    todo.add(text)
    this.update()
  }

  getAll() {
    todo.getAll(() => {
      this.update()
    })
  }
}

const vd = new TodoViewData()

export default vd
