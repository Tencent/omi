import Shape from './shape'

class Sector extends Shape {
  constructor(r, from, to, option) {
    super()

    this.option = option || {}
    this.r = r
    this.from = from
    this.to = to
  }

  draw() {
    this.moveTo(0, 0)
      .arc(0, 0, this.r, this.from, this.to)
      .closePath()
  }
}

export default Sector
