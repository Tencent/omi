import Group from '../render/display/group'
import { rect } from './rect'
import { circle } from './circle'
import { ellipse } from './ellipse'
import { line } from './line'
import { polyline } from './polyline'
import { polygon } from './polygon'
import { path } from './path'
import { pasition } from './pasition'
import { group } from './group'
import { animate } from './animate'

class SVG extends Group {
  constructor(vdom) {
    super()
    this.vdom = vdom

    if (Object.prototype.toString.call(this.vdom) === '[object Array]') {
      this.vdom = this.vdom.filter(item => typeof item !== 'string')[0]
    }

    const root = new Group()
    const options = Object.assign(
      {
        x: 0,
        y: 0
      },
      vdom.props
    )

    this.vdom.children && this.vdom.children.forEach(vdomChild => {
      this.generate(root, vdomChild)
    })

    root.x = Number(options.x)
    root.y = Number(options.y)

    this.add(root)
  }

  generate(parent, vdomChild) {
    switch (vdomChild.type) {
      case 'rect':
        parent.add(rect(vdomChild.props))
        break

      case 'circle':
        parent.add(circle(vdomChild.props))
        break

      case 'ellipse':
        parent.add(ellipse(vdomChild.props))
        break

      case 'line':
        parent.add(line(vdomChild.props))
        break
      case 'polyline':
        parent.add(polyline(vdomChild.props))

        break

      case 'polygon':
        parent.add(polygon(vdomChild.props))
        break

      case 'path':
        const obj = path(vdomChild.props)
        parent.add(obj)
        if (
        vdomChild.children &&
          vdomChild.children[0] &&
          vdomChild.children[0].type === 'animate'
      ) {
          animate(obj, vdomChild.children[0].props)
        }
        break

      case 'pasition':
        parent.add(pasition(vdomChild.props))
        break

      case 'g':
        const p = group(vdomChild.props)
        parent.add(p)
        vdomChild.children.forEach(child => {
          this.generate(p, child)
        })
        break
    }
  }
}

export default SVG
