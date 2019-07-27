import layout from './layout/layout-node'
import { render, h } from './omis/omis'

export function draw(node) {
  const dom = render(h(node))
  console.log(dom)
  console.log(node())
  console.log(layout(node()))
}


function convert(dom) {
  var obj = {}
  obj.nodeName = dom.nodeName
  obj.frame = {
    "x": 0,
    "y": 0,
    "width": 0,
    "height": 0
  }

  //obj.children = 
}
