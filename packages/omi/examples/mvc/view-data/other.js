import tvd from './todo'

class OtherViewData {
  constructor() {
    this.data = {
			num: 0,
			length: tvd.data.items.length
    }
  }

  update() {
		this.data.num = Math.random()
		this.data.length = tvd.data.items.length
  }
}

const vd = new OtherViewData()

export default vd
