import Polyline from '../render/display/shape/polyline'
import { parseStyle } from './parse-style'

export function polyline(props) {
  const points = props.points.split(/\s+|,/).map(item => Number(item))
  return new Polyline(points, parseStyle(props.style))
}