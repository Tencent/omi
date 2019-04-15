import Circle from '../render/display/shape/circle'
import { parseStyle } from './parse-style'
import { transform } from './parse-transform'
import { parseEvent } from './parse-event'

export function circle(props) {
  const options = Object.assign(
    {
      r: 0,
      cx: 0,
      cy: 0
    },
    props
  )

  const circle = new Circle(Number(options.r), parseStyle(props))
  circle.x = Number(options.cx)
  circle.y = Number(options.cy)

  transform(props, circle)
  parseEvent(props, circle)
  return circle
}
