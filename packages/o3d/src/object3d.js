import { Matrix4 } from './matrix4'

class Object3d {
  constructor() {
    this.alpha = 1
    this.scaleX = 1
    this.scaleY = 1
    this.scaleZ = 1
    this.visible = true
    this.skewX = 0
    this.skewY = 0
    this.skewZ = 0
    this.originX = 0
    this.originY = 0
    this.originZ = 0
    this.rotateX = 0
    this.rotateY = 0
    this.rotateZ = 0
    this.x = 0
    this.y = 0
    this.z = 0

    this._matrix = new Matrix4()

    this._groupMatrix = new Matrix4()

    this.renderList = []
  }

  isVisible() {
    return (
      this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0 && this.scaleZ !== 0
    )
  }

  updateContext() {

  }


  //[-1,1]  ->  [0, width] 
  //[-1,1]  ->  [0, height]
  mapX(x, width) {
    return width * (x + 1) / 2
  }

  mapY(y, height) {
    return height * (y + 1) / 2
  }


}

export { Object3d }
