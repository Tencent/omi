import Text from '../render/display/text'
import { parseStyle } from './parse-style'
import { transform } from './parse-transform'
import { parseEvent } from './parse-event'

export function text(text, props, scope) {
  const options = Object.assign(
    {
      x: 0,
      y: 0
    },
    props
  )

  const style = parseStyle(props)
  const font = (style.fontSize ? (style.fontSize.indexOf('px') === -1 ? style.fontSize + 'px' : style.fontSize) : '10px') + (style.fontFamily ? (' ' + style.fontFamily) : '')
  style.font = font
  style.fontSize = parseInt(style.fontSize)

  const obj = new Text(text, style)
  transform(props, obj, Number(options.x), Number(options.y))
  parseEvent(props, obj, scope)
  return obj
}
