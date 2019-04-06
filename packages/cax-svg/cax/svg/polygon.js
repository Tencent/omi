import Polygon from '../render/display/shape/polygon'
import { parseStyle } from './parse-style'

export function polygon(props) {
  const points = props.points.split(/\s+|,/).filter(item => item!=='').map(item=>Number(item))
  return new Polygon(points, parseStyle(props))
}