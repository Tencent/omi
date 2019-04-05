import Shape from './shape'

class Polygon extends Shape {
  constructor (vertex, options) {
    super()

    this.vertex = vertex || []
    this.options = options || {}
    this.strokeColor = this.options.strokeColor
    this.fillColor = this.options.fillColor
  }

  draw () {
  
    this.strokeStyle(this.strokeColor)
    this.moveTo(this.vertex[0][0], this.vertex[0][1])

    for (let i = 1, len = this.vertex.length; i < len; i++) {
      this.lineTo(this.vertex[i][0], this.vertex[i][1])
    }
    this.closePath()
    // 路径闭合
    //  if (this.options.strokeStyle) {
    //    this.strokeStyle = strokeStyle;
    // this.lineWidth(this.options.width);
    // this.lineJoin('round');
    // this.stroke();
    //  }

  }
}

export default Polygon
