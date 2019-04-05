import Polygon from '../render/display/shape/polygon'
import { parseStyle } from './parse-style'

export function polygon(props) {
  console.log(props.points.split(/\s+|,/))
  const points = props.points.split(/\s+|,/).filter(item => item!=='').map(item=>Number(item))
  console.log(points)
  return new Polygon(points, parseStyle(props.style))
}