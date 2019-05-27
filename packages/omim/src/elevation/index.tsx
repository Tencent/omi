import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  z: number
}

interface Data {}

@tag('m-elevation')
export default class Elevation extends WeElement<Props, Data> {
  static css = theme() + css

  static resetTheme() {
    this.css = theme() + css
  }
  
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
