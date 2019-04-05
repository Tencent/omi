import Ellipse from '../render/display/shape/ellipse'
import { parseStyle } from './parse-style'

export function ellipse(props) {

  const options = Object.assign({
    rx: 0,
    ry: 0,
    cx: 0,
    cy: 0
  }, props)

  const ellipse = new Ellipse(Number(options.rx)*2, Number(options.ry)*2, parseStyle(props.style))
  ellipse.x = Number(options.cx)
  ellipse.y = Number(options.cy)

  return ellipse

}