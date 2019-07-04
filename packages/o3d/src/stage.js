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
    this.camera.stage = this
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
      return a.o3d.order(a) - b.o3d.order(b)
    })

    this.draw(this.ctx, this.scale)
  }

  draw(ctx, scale) {
    this.renderList.forEach((obj) => {
      obj.o3d.draw(ctx, scale, obj)
    })
  }
}

export { Stage }
