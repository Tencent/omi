import mapper from './mapper'
import shared from './shared'

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
}

const vd = new TodoViewData()

export default vd
