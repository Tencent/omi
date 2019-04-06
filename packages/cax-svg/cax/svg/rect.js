import Rect from '../render/display/shape/rect'
import { parseStyle } from './parse-style'

export function rect(props) {

  const options = Object.assign({
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }, props)

  const rect = new Rect(Number(options.width), Number(options.height), parseStyle(props))
  rect.x = Number(options.x)
  rect.y = Number(options.y)

  return rect

}