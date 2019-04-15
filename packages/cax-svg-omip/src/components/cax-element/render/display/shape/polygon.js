import Shape from './shape'

class Polygon extends Shape {
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
