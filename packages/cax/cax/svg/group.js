import Group from '../render/display/group'
import { transform } from './parse-transform'
import { parseEvent } from './parse-event'

export function group(props, scope) {
  const options = Object.assign(
    {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    },
    props
  )

  const obj = new Group()
  // obj.x = Number(options.x)
  // obj.y = Number(options.y)

  transform(props, obj, Number(options.x), Number(options.y))
  parseEvent(props, obj, scope)

  return obj
}
