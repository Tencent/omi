import mapper from './mapper'

class TodoViewData {
  constructor() {
    this.data = {
      items: []
    }
  }

  update(todo) {
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
  }
}

const vd = new TodoViewData()

export default vd
