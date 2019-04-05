import Shape from './shape'

class Polygon extends Shape {
  constructor (vertex, option) {
    super()

    this.vertex = vertex || []
    this.option = option || {}
    this.strokeColor = this.option.strokeColor
    this.fillColor = this.option.fillColor
  }

  draw () {
  
    this.strokeStyle(this.strokeColor)
    this.moveTo(this.vertex[0][0], this.vertex[0][1])

    for (let i = 1, len = this.vertex.length; i < len; i++) {
      this.lineTo(this.vertex[i][0], this.vertex[i][1])
    }
    this.closePath()
    // 路径闭合
    //  if (this.option.strokeStyle) {
    //    this.strokeStyle = strokeStyle;
    // this.lineWidth(this.option.width);
    // this.lineJoin('round');
    // this.stroke();
    //  }

  }
}

export default Polygon
