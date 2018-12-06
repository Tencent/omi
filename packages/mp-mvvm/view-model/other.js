
class OtherViewModel {
  constructor() {
    this.data = {
      name: Math.random()
    }
  }

  update() {
    this.data.name = Math.random()
  }

}

const vm = new OtherViewModel()

export default vm
