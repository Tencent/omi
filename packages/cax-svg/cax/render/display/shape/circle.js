import Shape from './shape'

class Circle extends Shape {
  constructor (r, option) {
    super()
    this.option = option || {}
    this.r = r

    this._dp = Math.PI * 2
  }

  draw () {
  
    this.arc(0, 0, this.r, 0, this._dp, false)

   
  }
}

export default Circle
