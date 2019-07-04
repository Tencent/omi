import { Matrix4 } from './matrix4'
import { Vector3 } from './vector3'
import { Object3d } from './object3d'

class Circle extends Object3d {
  constructor(r, options) {
    super()
    this.r = r

    this.width = r * 2
    this.height = r * 2


    const w = this.width
    const h = this.height
    const k = 0.5522848
    const ox = (w / 2) * k
    const oy = (h / 2) * k
    const xe = w
    const ye = h
    const xm = w / 2
    const ym = h / 2

    this.paths = [
      [new Vector3(0, ym, 0)],
      [new Vector3(0, ym - oy, 0), new Vector3(xm - ox, 0, 0), new Vector3(xm, 0, 0)],
      [new Vector3(xm + ox, 0, 0), new Vector3(xe, ym - oy, 0), new Vector3(xe, ym, 0)],
      [new Vector3(xe, ym + oy, 0), new Vector3(xm + ox, ye, 0), new Vector3(xm, ye, 0)],
      [new Vector3(xm - ox, ye, 0), new Vector3(0, ym + oy, 0), new Vector3(0, ym, 0)]
    ]

    this.renderPaths = []
    this.paths.forEach((path, index) => {
      this.renderPaths[index] = []
      path.forEach((point, subIndex) => {
        this.renderPaths[index][subIndex] = point.clone()
      })
    })
  }


  update(xx,xxx,xxxx,pv, groupMatrix) {

    this._matrix.identity().appendTransform(this.x, this.y, this.z, this.scaleX, this.scaleY, this.scaleZ, this.rotateX, this.rotateY, this.rotateZ, this.skewX, this.skewY, this.skewZ, this.originX, this.originY, this.originZ)

    if (groupMatrix) {
      this._groupMatrix.multiplyMatrices(this._matrix, groupMatrix)
    } else {
      this._groupMatrix = this._matrix
    }


    this.paths.forEach((path, index) => {
      path.forEach((point, subIndex) => {
        point.applyMatrix4Out(this._groupMatrix, this.renderPaths[index][subIndex])

        this.renderPaths[index][subIndex].applyMatrix4(pv)
      })
    })

    console.log(this.renderPaths)
    return this.renderPaths
  }

  draw(ctx) {
    const w = this.width
    const h = this.height
    const k = 0.5522848
    const ox = (w / 2) * k
    const oy = (h / 2) * k
    const xe = w
    const ye = h
    const xm = w / 2
    const ym = h / 2

    ctx.moveTo(0, ym)
    ctx.bezierCurveTo(0, ym - oy, xm - ox, 0, xm, 0)
    ctx.bezierCurveTo(xm + ox, 0, xe, ym - oy, xe, ym)
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye)
    ctx.bezierCurveTo(xm - ox, ye, 0, ym + oy, 0, ym)

    ctx.stroke()
  }

}

export { Circle }
