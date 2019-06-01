import {Group} from './group'

class Stage extends Group {
  constructor() {
    super()
  }


  update(){
    this.children.forEach(child => {
      child.render()
    })
  }
}

export {Stage}
