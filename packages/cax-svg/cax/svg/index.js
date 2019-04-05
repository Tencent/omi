import Group from '../render/display/group'
import { rect } from './rect'
import { circle } from './circle'
import { ellipse } from './ellipse'

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

      this.add(rect(vdomChild.props))

      break;

      case 'circle':
      this.add(circle(vdomChild.props))

      break;

      case 'ellipse':
      console.log(1)
      this.add(ellipse(vdomChild.props))
console.log(this)
      break;
    }


  }

}

export default SVG
