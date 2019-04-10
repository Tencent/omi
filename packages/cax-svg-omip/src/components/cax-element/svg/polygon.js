import Polygon from '../render/display/shape/polygon'
import { parseStyle } from './parse-style'
import { transform } from './parse-transform'
import { parseEvent } from './parse-event'

export function polygon(props) {
  const points = props.points.split(/\s+|,/).filter(item => item!=='').map(item=>Number(item))
  const obj = new Polygon(points, parseStyle(props))
  transform(props, obj)
  parseEvent(props, obj)
  return obj
}