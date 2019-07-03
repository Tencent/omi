class Object3d {
  constructor() {
    this.alpha = 1
    this.scaleX = 1
    this.scaleY = 1
    this.scaleZ = 1
    this.visible = true
  }

  isVisible() {
    return (
      this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0 && this.scaleZ !== 0
    )
  }

  updateContext(){
    
  }


}

export { Object3d }
