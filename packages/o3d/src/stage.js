import { Group } from './group'
import { Matrix4 } from './matrix4'

class Stage extends Group {
  constructor(option) {
    super()
    this.renderTo =
      typeof option.renderTo === 'string'
        ? document.querySelector(option.renderTo)
        : option.renderTo
    this.canvas = document.createElement('canvas')
    this.canvas.width = option.width
    this.canvas.height = option.height
    this.ctx = this.canvas.getContext('2d')

    this.width = option.width
    this.height = option.height
    this.renderTo.appendChild(this.canvas)
    this.camera = option.camera

    this.ctx.translate(this.width / 2, this.height / 2)
    this.ctx.scale(1, -1)

    this.scale = option.scale || 1000


    this.pv = new Matrix4()
    this.pv.multiplyMatrices(this.camera.p_matrix, this.camera.v_matrix)
  }

  update() {
    this.ctx.clearRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    )
    this.renderList.length = 0
    this.children.forEach(child => {
      this.renderList = this.renderList.concat(child.update(this.pv))
    })

    this.renderList.sort((a, b) => {
      return this._zOrder(a) - this._zOrder(b)
    })

    this.fill(this.ctx, this.scale)
  }

  _zOrder(face) {
    return face[0].w + face[1].w + face[2].w + face[3].w
  }

  _rect(ctx, p1, p2, p3, p4, scale, color) {
    ctx.beginPath()
    ctx.moveTo(p1.x * scale, p1.y * scale)
    ctx.fillStyle = color
    ctx.lineTo(p2.x * scale, p2.y * scale)
    ctx.lineTo(p3.x * scale, p3.y * scale)
    ctx.lineTo(p4.x * scale, p4.y * scale)
    ctx.closePath()
    ctx.fill()
  }

  fill(ctx, scale) {
    

    this.renderList.forEach((face) => {
      this._rect(ctx, face[0], face[1], face[2], face[3], scale, face[4])
    })
  }

}

export { Stage }
