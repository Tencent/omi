
import Shape from './shape'

class Ellipse extends Shape {
  constructor (width, height, option) {
    super()
    this.option = option || {}
    this.width = width
    this.height = height
  }

  draw () {
    const w = this.width
    const h = this.height
    const k = 0.5522848
    const ox = (w / 2) * k
    const oy = (h / 2) * k
    const xe = w
    const ye = h
    const xm = w / 2
    const ym = h / 2

    this.moveTo(0, ym)
    this.bezierCurveTo(0, ym - oy, xm - ox, 0, xm, 0)
    this.bezierCurveTo(xm + ox, 0, xe, ym - oy, xe, ym)
    this.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye)
    this.bezierCurveTo(xm - ox, ye, 0, ym + oy, 0, ym)

  }
}

export default Ellipse
