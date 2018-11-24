class TodoViewData {
  constructor() {
    this.data = {
      items: []
    }
  }

  sync(todo) {
    //待优化，深拷贝
    console.log(11)
    this.data.items = JSON.parse(JSON.stringify(todo.items))
    console.log(this.data.items)
  }
}

const vd = new TodoViewData()

export default vd
