import Graphics from '../graphics'

class Shape extends Graphics {
  // constructor() {
  //     super()
  // }

  draw () {

  }

  render (ctx) {
    this.clear()
    this.draw()
    super.render(ctx)
  }
}

export default Shape
