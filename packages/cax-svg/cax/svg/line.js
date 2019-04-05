import Line from '../render/display/shape/line'
import { parseStyle } from './parse-style'

export function line(props) {

  return new Line(Number(props.x1), Number(props.y1), Number(props.x2), Number(props.y2), parseStyle(props.style))


}