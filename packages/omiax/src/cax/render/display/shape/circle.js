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

    if (this.option.strokeStyle) {
      if (this.option.lineWidth !== undefined) {
        this.lineWidth(this.option.lineWidth)
      }
      this.strokeStyle(this.option.strokeStyle)
      this.stroke()
    }

    if (this.option.fillStyle) {
      this.fillStyle(this.option.fillStyle)
      this.fill()
    }
  }
}

export default Circle
