import Line from '../render/display/shape/line'
import { parseStyle } from './parse-style'
import { transform } from './parse-transform'
import { parseEvent } from './parse-event'

export function line(props) {
  const obj = new Line(
    Number(props.x1),
    Number(props.y1),
    Number(props.x2),
    Number(props.y2),
    parseStyle(props)
  )
  transform(props, obj)
  parseEvent(props, obj)
  return obj
}
