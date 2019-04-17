import Path from '../render/display/shape/path'
import { parseStyle } from './parse-style'
import { transform } from './parse-transform'
import { parseEvent } from './parse-event'

export function path(props, scope) {
  const obj = new Path(props.d, parseStyle(props))
  transform(props, obj)
  parseEvent(props, obj, scope)
  return obj
}
