import Group from '../render/display/group'
import { getRect } from './rect'

class SVG extends Group {
  constructor(vdom) {
    super()
    this.vdom = vdom

    const root = new Group()

    this.vdom.children.forEach(vdomChild=>{
      this.generate(root, vdomChild)
    })

  }

  generate(parent, vdomChild){
    switch (vdomChild.type){
      case 'rect':

      this.add(getRect(vdomChild.props))

      break;

    }


  }

}

export default SVG
