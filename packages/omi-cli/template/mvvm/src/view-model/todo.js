import mapping from 'mappingjs'
import shared from './shared'
import todo from '../model/todo'
import ovm from './other'

class TodoViewModel {
  constructor() {
    this.data = {
      items: []
    }
  }

  update() {
    mapping.auto(todo, this.data)
    this.data.projName = shared.projName
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
    ovm.update()
  }

  getAll() {
    todo.getAll(() => {
      this.update()
      ovm.update()
    })
  }

  changeSharedData() {
    shared.projName = 'I love omi-mvvm.'
    ovm.update()
    this.update()
  }
}

const vd = new TodoViewModel()

export default vd
