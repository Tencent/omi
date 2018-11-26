import tvd from './todo'
import shared from './shared'

class OtherViewModel {
  constructor() {
    this.data = {
      num: 0,
      length: 0
    }
  }

  update() {
    this.data.num = Math.random()
    this.data.projName = shared.projName
    this.data.length = tvd.data.items.length
  }

  random() {
    this.update()
  }
}

const vd = new OtherViewModel()

export default vd
