import Path from '../render/display/shape/path'
import { parseStyle } from './parse-style'
import { transform } from './parse-transform'

export function path(props) {
  const obj = new Path(props.d, parseStyle(props))
  transform(props, obj)
  return obj
}