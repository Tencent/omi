import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'

import '../icon'
import '../icon-button'


//@ts-ignore
import '../theme.ts'

interface Props {
}

interface Data {

}

@tag('m-drawer')
export default class Drawer extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
  }

  static defaultProps = {

  }


  install() {
  }

  installed() {
    
  }

  render(props) {
    return <div>
      <div class="MuiBackdrop-root" aria-hidden="true" style="opacity: 1;"></div>
      <slot></slot>
    </div>
  }
}
