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

    if (this.option.fillStyle&&this.option.fillStyle!=='none') {
      this.fillStyle(this.option.fillStyle)
      this.fill()
    }

    if (this.option.strokeStyle) {
      this.strokeStyle(this.option.strokeStyle )
      if(this.option.lineWidth !== undefined){
        this.lineWidth(this.option.lineWidth)
      }
      this.stroke()
    }

    super.render(ctx)
  }
}

export default Shape
