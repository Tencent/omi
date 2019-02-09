
import Group from './display/group.js'
import Bitmap from './display/bitmap.js'
import Text from './display/text.js'
import {VDOM_REF, CAX_REF} from '../jsx/constants'
import options from '../jsx/options'

export function draw (tree, stage) {
  console.error(tree)
  add(tree, stage)

  // var s = new Sector(100, 100, 30, 0, Math.PI / 2)

  // stage.add(s)
}

// how to cache the obj?
// 支持自定义的nodeName 和对应的obj注入？？
export function add (item, parent, pre) {
  // console.error(item, parent, pre)
  const attr = item.attributes
  const isRepalce = arguments.length > 2
  switch (item.nodeName) {
    case 'group':

      const group = new Group()
      group[VDOM_REF] = item
      item[CAX_REF] = group
      mix(group, attr, item)
      if (isRepalce) {
        parent.replace(group, pre)
      } else {
        parent.add(group)
      }

      item.children.forEach(child => add(child, group))
      break

    case 'bitmap':
      const bitmap = new Bitmap(attr.src, () => {
        options.stage.update()
      })

      bitmap[VDOM_REF] = item
      item[CAX_REF] = bitmap
      mix(bitmap, attr, item)
      if (isRepalce) {
        parent.replace(bitmap, pre)
      } else {
        parent.add(bitmap)
      }
      break

    case 'text':
      const text = new Text(attr.text, attr.font, attr.color)
      text[VDOM_REF] = item
      item[CAX_REF] = text
      mix(text, attr, item)
      if (isRepalce) {
        parent.replace(text, pre)
      } else {
        parent.add(text)
      }
      break
  }
}

function mix (obj, attr, item) {
  ['cursor', 'alpha', 'scaleX', 'scaleY', 'x', 'y', 'rotation', 'skewX', 'skewY', 'originX', 'originY'].forEach(key => {
    const value = attr[key]
    if (value !== undefined) {
      obj[key] = value
    }
  })

  attr.onClick && obj.addEventListener('click', attr.onClick)
  attr.onMouseDown && obj.addEventListener('mousedown', attr.onMouseDown)
  attr.onMouseUp && obj.addEventListener('mouseup', attr.onMouseUp)
  attr.onMouseMove && obj.addEventListener('mousemove', attr.onMouseMove)
  attr.onMouseOver && obj.addEventListener('mouseover', attr.onMouseOver)
  attr.onMouseOut && obj.addEventListener('mouseout', attr.onMouseOut)

  if (item._component) {
    item._component.root = obj
    obj._component = item._component
    obj._componentConstructor = item._componentConstructor
  }
}
