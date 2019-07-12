import { Matrix4 } from './matrix4'
import { Vector3 } from './vector3'
import { Object3d } from './object3d'

class Circle extends Object3d {
  constructor(r, options) {
    super()
    this.r = r

    this.width = r * 2
    this.height = r * 2

    this.stroke = options.stroke || 2
    this.color = options.color || 'black'
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

    this.renderPaths.o3d = this
    
  }


  update(pv, groupMatrix) {

    this._matrix.identity().appendTransform(this.x, this.y, this.z, this.scaleX, this.scaleY, this.scaleZ, this.rotateX, this.rotateY, this.rotateZ, this.skewX, this.skewY, this.skewZ, this.originX, this.originY, this.originZ)

    if (groupMatrix) {
      this._groupMatrix.multiplyMatrices(groupMatrix, this._matrix )
    } else {
      this._groupMatrix = this._matrix
    }


    this.paths.forEach((path, index) => {
      path.forEach((point, subIndex) => {
        point.applyMatrix4Out(this._groupMatrix, this.renderPaths[index][subIndex])

        this.renderPaths[index][subIndex].applyMatrix4(pv)
      })
    })

    return [this.renderPaths]
  }

  order(item) {
    let w = 0
    let count = 0
    item.forEach((path) => {
      count += path.length
      path.forEach((point) => {
        w += point.w
      })
    })
    return w / count
  }

  draw(ctx, obj, width, height) {
    ctx.save()
    ctx.beginPath()
    ctx.lineWidth = this.stroke
    ctx.strokeStyle = this.color
    ctx.moveTo(this.mapX( obj[0][0].x,width) , this.mapY(obj[0][0].y,height))
    for (let i = 1; i < 5; i++) {
      ctx.bezierCurveTo(this.mapX(obj[i][0].x ,width), this.mapY(obj[i][0].y,height) , this.mapX(obj[i][1].x,width) , this.mapY(obj[i][1].y,height) , this.mapX(obj[i][2].x,width) , this.mapY(obj[i][2].y ,height))
    }

    ctx.stroke()
    ctx.restore()
  }

}

export { Circle }
