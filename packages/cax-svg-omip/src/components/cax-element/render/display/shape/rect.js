import Shape from './shape'

class Rect extends Shape {
  constructor(width, height, option) {
    super()

    this.width = width
    this.height = height
    this.option = option || {}
  }

  draw() {
    this.rect(0, 0, this.width, this.height)
  }
}

export default Rect
