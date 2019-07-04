import { Object3d } from './object3d'

class Group extends Object3d {
  constructor() {
    super()
    this.children = []
  }

  add(child) {
    for (let i = 0, len = arguments.length; i < len; i++) {
      this.children.push(arguments[i])
    }

  }

  update(pv, groupMatrix) {
    let list = this.children.slice()
    this.renderList.length = 0
    for (let i = 0, l = list.length; i < l; i++) {
      let child = list[i]
      if (!child.isVisible()) {
        continue
      }

      this._matrix.identity().appendTransform(this.x, this.y, this.z, this.scaleX, this.scaleY, this.scaleZ, this.rotateX, this.rotateY, this.rotateZ, this.skewX, this.skewY, this.skewZ, this.originX, this.originY, this.originZ)


      if (groupMatrix) {
        this._groupMatrix.multiplyMatrices(this._matrix, groupMatrix)
      } else {
        this._groupMatrix = this._matrix
      }

      // draw the child:
      // ctx.save()
      // child.updateContext(ctx)
      this.renderList = this.renderList.concat(child.update(pv, this._groupMatrix))
      //ctx.restore()
    }
    return this.renderList
  }
}

export { Group }
