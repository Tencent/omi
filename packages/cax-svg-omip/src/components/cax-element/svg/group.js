import Group from '../render/display/group'
import { transform } from './parse-transform'
import { parseEvent } from './parse-event'

export function group(props) {

  const options = Object.assign({
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }, props)

  const obj = new Group()
  obj.x = Number(options.x)
  obj.y = Number(options.y)

  transform(props, obj)
  parseEvent(props, obj)
  
  return obj

}