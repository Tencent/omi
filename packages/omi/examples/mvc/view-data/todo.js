class TodoViewData {
  constructor() {
    this.data = {
      items: []
    }
  }

  sync(todo) {
    //To be optimized, deep copy
    this.data.items = JSON.parse(JSON.stringify(todo.items))
  }
}

const vd = new TodoViewData()

export default vd
