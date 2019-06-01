import { Group } from './group'

class Stage extends Group {
  constructor(option) {
    super()
    this.renderTo = typeof option.renderTo === 'string' ? document.querySelector(option.renderTo) : option.renderTo
    this.canvas = document.createElement('canvas')
    this.canvas.width = option.width
    this.canvas.height = option.height
    this.ctx = this.canvas.getContext('2d')

    this.camera = option.camera
  }


  update() {
    this.children.forEach(child => {
      child.render(this.ctx, this.camera)
    })
  }
}

export { Stage }
