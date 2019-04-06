import Polyline from '../render/display/shape/polyline'
import { parseStyle } from './parse-style'
import { transform } from './parse-transform'

export function polyline(props) {
  const points = props.points.split(/\s+|,/).map(item => Number(item))
  const obj = new Polyline(points, parseStyle(props))
  transform(props, obj)
  return obj
}