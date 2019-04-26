import mapping from './mapping-omio'
import todo from '../model/todo'

class TodoViewModel {
  constructor() {
    this.data = {
      items: []
    }
  }

  update() {
    //will automatically update the view!!!
    mapping(todo, this.data)
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

  remove(id) {
    todo.remove(id)
    this.update()
  }

  getAll() {
    todo.getAll(() => {
      this.update()
    })
  }
}

const vm = new TodoViewModel()

export default vm
