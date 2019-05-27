import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
}

interface Data {

}

@tag('m-breadcrumb')
export default class Breadcrumb extends WeElement<Props, Data>{
  static css = theme() + css

  static resetTheme() {
    this.css = theme() + css
  }

  static defaultProps = {

  }

  static propTypes = {

  }
  render(props) {
    return (
      <div {...extractClass(props, 'm-breadcrumb', {

      })}>
      </div>
    )
  }
}
