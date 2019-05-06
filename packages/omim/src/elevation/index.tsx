import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
  z: number
}

interface Data {}

@tag('m-elevation')
export default class Elevation extends WeElement<Props, Data> {
  static css = css

  static propTypes = {
    z: Number
  }

  installed() {}

  render(props) {
    return (
      <div
        {...extractClass(props, 'mdc-elevation', `mdc-elevation--z${props.z}`)}
      >
        <slot />
      </div>
    )
  }
}
