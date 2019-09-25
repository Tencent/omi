import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import '../theme.ts'

interface Props {
  z: number
}


@tag('m-elevation')
export default class Elevation extends WeElement<Props> {
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
