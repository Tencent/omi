import Path from '../render/display/shape/path'
import { parseStyle } from './parse-style'

export function path(props) {
  return new Path(props.d, parseStyle(props))
}