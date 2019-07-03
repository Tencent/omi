import { Object3d } from './object3d'

class Group extends Object3d {
  constructor() {
    super()
    this.children = []
  }

  add(child) {
    this.children.push(child)
  }

  update(ctx, camera, scale) {
    let list = this.children.slice()
    for (let i = 0, l = list.length; i < l; i++) {
      let child = list[i] 
      if (!child.isVisible()) {
        continue
      }

      // draw the child:
      ctx.save()
      child.updateContext(ctx)
      child.update(ctx, camera, scale)
      ctx.restore()
    }
    return true
  }
}

export { Group }
