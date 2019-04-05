import Group from '../render/display/group'
import { rect } from './rect'
import { circle } from './circle'
import { ellipse } from './ellipse'
import { line } from './line'
import { polyline } from './polyline'

class SVG extends Group {
  constructor(vdom) {
    super()
    this.vdom = vdom

    const root = new Group()
    const options = Object.assign({
      x: 0,
      y: 0
    }, vdom.props)

    this.vdom.children.forEach(vdomChild=>{
      this.generate(root, vdomChild)
    })

    root.x = Number(options.x)
    root.y = Number(options.y)

    this.add(root)

  }

  generate(parent, vdomChild){
    switch (vdomChild.type){
      case 'rect':

      parent.add(rect(vdomChild.props))

      break;

      case 'circle':
      parent.add(circle(vdomChild.props))

      break;

      case 'ellipse':
    
      parent.add(ellipse(vdomChild.props))

      break;
      case 'line':
    
      parent.add(line(vdomChild.props))

      break;
      case 'polyline':
      parent.add(polyline(vdomChild.props))

      break;
    }


  }

}

export default SVG
