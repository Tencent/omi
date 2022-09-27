import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import * as css from './layouts.scss'
interface Props { }

const tagName = 'layout-container'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target,css.default ? css.default : css]

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    )
  }
}
