import Shape from './shape'

class Polyline extends Shape {
  constructor(points, option) {
    super()
    this.option = option || {}
    this.points = points
  }

  draw() {
    this.moveTo(this.points[0], this.points[1])

    for (let i = 2, len = this.points.length; i < len; i += 2) {
      this.lineTo(this.points[i], this.points[i + 1])
    }

    this.fill()
  }
}

export default Polyline
