import { Group } from './group'

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
  }

  update() {
    this.ctx.clearRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    )
    this.children.forEach(child => {
      child.update(this.ctx, this.camera)
    })
  }
}

export { Stage }
