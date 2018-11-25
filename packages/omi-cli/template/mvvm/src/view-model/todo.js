import mapper from './mapper'
import shared from './shared'
import todo from '../model/todo'
import ovd from './other'

class TodoViewData {
  constructor() {
    this.data = {
      items: []
    }
  }

  update(todo) {
    todo &&
      todo.items.forEach((item, index) => {
        this.data.items[index] = mapper({
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
    todo.add(text)
    this.update(todo)
    ovd.update()
    this.update()
  }

  getAll() {
    todo.getAll(() => {
      this.update(todo)
      ovd.update()
      this.update()
    })
  }

  changeSharedData() {
    shared.projName = 'I love omi-mvvm.'
    ovd.update()
    this.update()
  }
}

const vd = new TodoViewData()

export default vd
