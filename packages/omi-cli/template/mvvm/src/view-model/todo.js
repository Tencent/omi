import mapping from 'mappingjs'
import shared from './shared'
import todoModel from '../model/todo'
import ovm from './other'

class TodoViewModel {
  constructor() {
    this.data = {
      items: []
    }
  }

  update(todo) {
    todo &&
      todo.items.forEach((item, index) => {
        this.data.items[index] = mapping({
          from: item,
          to: this.data.items[index],
          rule: {
            fullName: function() {
              return this.author.firstName + this.author.lastName
            }
          }
        })
      })

    this.data.projName = shared.projName
  }

  add(text) {
    todoModel.add(text)
    this.update(todoModel)
    ovm.update()
    this.update()
  }

  getAll() {
    todoModel.getAll(() => {
      this.update(todoModel)
      ovm.update()
      this.update()
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
