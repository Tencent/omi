import Shape from './shape'

class Line extends Shape {
  constructor(x1, y1, x2, y2, option) {
    super()
    this.option = option || {}
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
  }

  draw() {
    this.moveTo(this.x1, this.y1)
    this.lineTo(this.x2, this.y2)
  }
}

export default Line
