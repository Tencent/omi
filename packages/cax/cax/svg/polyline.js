import Polyline from '../render/display/shape/polyline'
import { parseStyle } from './parse-style'
import { transform } from './parse-transform'
import { parseEvent } from './parse-event'

export function polyline(props, scope) {
  const points = props.points.split(/\s+|,/).map(item => Number(item))
  const obj = new Polyline(points, parseStyle(props))
  transform(props, obj)
  parseEvent(props, obj, scope)
  return obj
}
