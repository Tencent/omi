import Shape from './shape'

class Circle extends Shape {
  constructor (r, option) {
    super()
    this.option = option || {}
    this.r = r

    this._dp = Math.PI * 2
  }

  draw () {
    this.beginPath()
    this.arc(0, 0, this.r, 0, this._dp, false)

    if (this.option.fillStyle || this.option.fill) {
      this.fillStyle(this.option.fillStyle || this.option.fill)
      this.fill()
    }

    if (this.option.strokeStyle || this.option.stroke) {
      if (this.option.lineWidth !== undefined) {
        this.lineWidth(this.option.lineWidth)
      }
      this.strokeStyle(this.option.strokeStyle || this.option.stroke)
      this.stroke()
    }
  }
}

export default Circle
