import parse from '../../base/path-parser.js'
import Shape from './shape'
import arcToBezier from '../../base/arc-to-bezier'

class Path extends Shape {
  constructor (d, option) {
    super()
    this.d = d

    option = Object.assign({
      lineWidth: 1
    }, option)
    this.option = option
  }

  draw () {
    const cmds = parse(this.d)

    this.beginPath()
    // https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths
    // M = moveto
    // L = lineto
    // H = horizontal lineto
    // V = vertical lineto
    // C = curveto
    // S = smooth curveto
    // Q = quadratic Belzier curve
    // T = smooth quadratic Belzier curveto
    // A = elliptical Arc  暂时未实现，用贝塞尔拟合椭圆
    // Z = closepath
    // 以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位(从上一个点开始)。
    let preX,
      preY,
      curves,
      lastCurve

    // 参考我的 pasition https://github.com/AlloyTeam/pasition/blob/master/src/index.js
    for (let j = 0, cmdLen = cmds.length; j < cmdLen; j++) {
      let item = cmds[j]
      let action = item[0]
      let preItem = cmds[j - 1]

      switch (action) {
        case 'M':
          preX = item[1]
          preY = item[2]
          this.moveTo(preX, preY)
          break
        case 'L':
          preX = item[1]
          preY = item[2]
          this.lineTo(preX, preY)
          break
        case 'H':
          preX = item[1]
          this.lineTo(preX, preY)
          break
        case 'V':
          preY = item[1]
          this.lineTo(preX, preY)
          break
        case 'C':
          preX = item[5]
          preY = item[6]
          this.bezierCurveTo(item[1], item[2], item[3], item[4], preX, preY)
          break
        case 'S':
      
          if (preItem[0] === 'C' || preItem[0] === 'c') {
            this.bezierCurveTo( preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], item[1], item[2], item[3], item[4])
          } else if (preItem[0] === 'S' || preItem[0] === 's') {
            this.bezierCurveTo( preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], item[1], item[2], item[3], item[4])
          }
          preX = item[3]
          preY = item[4]
          break

        case 'Q':
          preX = item[3]
          preY = item[4]
          this.quadraticCurveTo(item[1], item[2], preX, preY)
          break

        case 'm':
          preX += item[1]
          preY += item[2]
          this.moveTo(preX, preY)
          break
        case 'l':
          preX += item[1]
          preY += item[2]
          this.lineTo(preX, preY)
          break
        case 'h':
          preX += item[1]
          this.lineTo(preX, preY)
          break
        case 'v':
          preY += item[1]
          this.lineTo(preX, preY)
          break
        case 'c':
          this.bezierCurveTo(preX + item[1], preY + item[2], preX + item[3], preY + item[4], preX + item[5], preY + item[6])
          preX = preX + item[5]
          preY = preY + item[6]
          break
        case 's':
          if (preItem[0] === 'C' || preItem[0] === 'c') {   
            this.bezierCurveTo( preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], preX + item[1], preY + item[2], preX + item[3], preY + item[4])
          } else if (preItem[0] === 'S' || preItem[0] === 's') {
            this.bezierCurveTo( preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], preX + item[1], preY + item[2], preX + item[3], preY + item[4])
          }

          preX += item[3]
          preY += item[4]
          break
        case 'q':

          this.quadraticCurveTo(preX + item[1], preY + item[2], item[3] + preX, item[4] + preY)
          preX += item[3]
          preY += item[4]
          break
        case 'Z':
          this.closePath()
          break
        case 'z':
          this.closePath()
          break

        case 'a':
          curves = arcToBezier({
            rx: item[1],
            ry: item[2],
            px: preX,
            py: preY,
            xAxisRotation: item[3],
            largeArcFlag: item[4],
            sweepFlag: item[5],
            cx: preX + item[6],
            cy: preX + item[7]
          })
          lastCurve = curves[curves.length - 1]

          curves.forEach((curve, index) => {
            if (index === 0) {
              this.moveTo(preX, preY)
              this.bezierCurveTo( curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y)
            } else {
              //curves[index - 1].x, curves[index - 1].y, 
              this.bezierCurveTo(curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y)
            }
          })

          preX = lastCurve.x
          preY = lastCurve.y

          break

        case 'A':

          curves = arcToBezier({
            rx: item[1],
            ry: item[2],
            px: preX,
            py: preY,
            xAxisRotation: item[3],
            largeArcFlag: item[4],
            sweepFlag: item[5],
            cx: item[6],
            cy: item[7]
          })
          lastCurve = curves[curves.length - 1]

          curves.forEach((curve, index) => {
            if (index === 0) {
              this.moveTo(preX, preY)
              this.bezierCurveTo( curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y)
            } else {
              //curves[index - 1].x, curves[index - 1].y
              this.bezierCurveTo( curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y)
            }
          })

          preX = lastCurve.x
          preY = lastCurve.y

          break

        case 'T':

          if (preItem[0] === 'Q' || preItem[0] === 'q') {
            preCX = preX + preItem[3] - preItem[1]
            preCY = preY + preItem[4] - preItem[2]
            this.quadraticCurveTo(preX, preY, preCX, preCY, item[1], item[2])
          } else if (preItem[0] === 'T' || preItem[0] === 't') {
            this.quadraticCurveTo(preX, preY, preX + preX - preCX, preY + preY - preCY, item[1], item[2])
            preCX = preX + preX - preCX
            preCY = preY + preY - preCY
          }

          preX = item[1]
          preY = item[2]
          break

        case 't':
          if (preItem[0] === 'Q' || preItem[0] === 'q') {
            preCX = preX + preItem[3] - preItem[1]
            preCY = preY + preItem[4] - preItem[2]
            this.quadraticCurveTo(preX, preY, preCX, preCY, preX + item[1], preY + item[2])
          } else if (preItem[0] === 'T' || preItem[0] === 't') {
            this.quadraticCurveTo(preX, preY, preX + preX - preCX, preY + preY - preCY, preX + item[1], preY + item[2])
            preCX = preX + preX - preCX
            preCY = preY + preY - preCY
          }

          preX += item[1]
          preY += item[2]
          break
      }
    }
    if (this.option.fillStyle) {
      this.fillStyle(this.option.fillStyle)
      this.fill()
    }

    if (this.option.strokeStyle) {
      this.lineWidth(this.option.lineWidth)
      this.strokeStyle(this.option.strokeStyle)
      this.stroke()
    }
  }

  clone(){
    return new Path(this.d,{
      lineWidth:this.option.lineWidth,
      strokeStyle:this.option.strokeStyle,
      fillStyle:this.option.fillStyle
    })
  }
}

export default Path
