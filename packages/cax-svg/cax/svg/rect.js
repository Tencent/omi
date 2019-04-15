import Rect from '../render/display/shape/rect'
import { parseStyle } from './parse-style'
import { transform } from './parse-transform'
import { parseEvent } from './parse-event'

export function rect(props) {
  const options = Object.assign(
    {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    },
    props
  )

  const rect = new Rect(
    Number(options.width),
    Number(options.height),
    parseStyle(props)
  )
  //移入transform里统一计算
  //rect.x = Number(options.x)
  //rect.y = Number(options.y)
 
 

  transform(props, rect)
  parseEvent(props, rect)

  return rect
}
