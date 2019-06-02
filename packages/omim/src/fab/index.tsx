import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import { MDCRipple } from '@material/ripple'
import '../icon'
import { domReady } from '../util/dom-ready'

//@ts-ignore
import '../theme.ts'

interface Props {
  ripple: boolean,
  mini: boolean,
  iconRight: boolean,
  icon: string
}

interface Data {

}

@tag('m-fab')
export default class Fab extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    ripple: Boolean,
    mini: Boolean,
    iconRight: Boolean,
    icon: String
  }

  installed() {
    domReady(()=>{
      this.update()
    })

    if (this.props.ripple) {
      new MDCRipple(this.shadowRoot.querySelector('.mdc-fab'))
    }
  }

  render(props) {
    const lb = this.normalizedNodeName ? props.children[0] : this.innerHTML
    const i = props.icon && <i class="mdc-fab__icon material-icons">{props.icon}</i>
    return (
      <button {...extractClass(props, 'mdc-fab', {
        'mdc-fab--mini': props.mini,
        'mdc-fab--extended': lb
      })} aria-label={props.icon ? props.icon.split('_')[0] : lb}>

        {!props.iconRight && i}
        {lb && <span class="mdc-fab__label">{lb}</span>}
        {props.iconRight && i}
      </button>
    )
  }
}
