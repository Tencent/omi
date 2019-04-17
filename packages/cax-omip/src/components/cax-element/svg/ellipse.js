import Ellipse from '../render/display/shape/ellipse'
import { parseStyle } from './parse-style'
import { transform } from './parse-transform'
import { parseEvent } from './parse-event'

export function ellipse(props, scope) {
  const options = Object.assign(
    {
      rx: 0,
      ry: 0,
      cx: 0,
      cy: 0
    },
    props
  )

  const ellipse = new Ellipse(
    Number(options.rx) * 2,
    Number(options.ry) * 2,
    parseStyle(props)
  )
  // ellipse.x = Number(options.cx)
  // ellipse.y = Number(options.cy)
  transform(props, ellipse, Number(options.cx), Number(options.cy))
  parseEvent(props, ellipse, scope)
  return ellipse
}
