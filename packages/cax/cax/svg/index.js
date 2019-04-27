import Group from '../render/display/group'
import { rect } from './rect'
import { circle } from './circle'
import { ellipse } from './ellipse'
import { line } from './line'
import { polyline } from './polyline'
import { polygon } from './polygon'
import { path } from './path'
import { pasition } from './pasition'
import { text } from './text'
import { group } from './group'
import { animate } from './animate'
import { parseEvent } from './parse-event'

class SVG extends Group {
  constructor(vdom, scope) {
    super()
    this.vdom = vdom
    this.scope = scope
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
      this.generate(root, vdomChild, scope)
    })

    root.x = Number(options.x)
    root.y = Number(options.y)
    parseEvent(vdom.props, root, scope)
    this.add(root)
  }

  generate(parent, vdomChild, scope) {
    switch (vdomChild.type) {
      case 'rect':
        parent.add(rect(vdomChild.props, scope))
        break

      case 'circle':
        parent.add(circle(vdomChild.props, scope))
        break

      case 'ellipse':
        parent.add(ellipse(vdomChild.props, scope))
        break

      case 'line':
        parent.add(line(vdomChild.props, scope))
        break

      case 'polyline':
        parent.add(polyline(vdomChild.props, scope))
        break

      case 'polygon':
        parent.add(polygon(vdomChild.props, scope))
        break

      case 'text':
        parent.add(text(vdomChild.children[0], vdomChild.props, scope))
        break

      case 'path':
        const obj = path(vdomChild.props, scope)
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
        parent.add(pasition(vdomChild.props, scope))
        break

      case 'g':
        const p = group(vdomChild.props, scope)
        parent.add(p)
        vdomChild.children.forEach(child => {
          this.generate(p, child, scope)
        })
        break

      default:
        if (Object.prototype.toString.call(vdomChild) === '[object Array]' && vdomChild.length > 0) {
          vdomChild.forEach(child => {
            this.generate(parent, child, scope)
          })
        }


    }
  }
}

export default SVG
