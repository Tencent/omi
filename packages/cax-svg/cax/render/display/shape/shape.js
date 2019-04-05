import Graphics from '../graphics'

class Shape extends Graphics {
  // constructor() {
  //     super()
  // }

  draw () {

  }

  render (ctx) {
    this.clear()
    this.beginPath()
    this.draw()

    if (this.option.fillStyle || this.option.fill) {
      this.fillStyle(this.option.fillStyle || this.option.fill)
      this.fill()
    }

    if (this.option.strokeStyle||  this.option.stroke) {
      this.strokeStyle(this.option.strokeStyle ||  this.option.stroke)
      if(typeof this.option.lineWidth === 'number'){
        this.lineWidth(this.option.lineWidth)
      }
      this.stroke()
    }

    super.render(ctx)
  }
}

export default Shape
