import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import { MDCRipple } from '@material/ripple'
import '../icon'
//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  ripple: boolean,
  raised: boolean,
  dense: boolean,
  unelevated: boolean,
  outlined: boolean,
  svgIcon: object,
  icon: string
}

interface Data {

}

@tag('m-button')
export default class Button extends WeElement<Props, Data>{
  static css = theme() + css

  static defaultProps = {
    ripple: true
  }

  static propTypes = {
    ripple: Boolean,
    raised: Boolean,
    dense: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    svgIcon: Object,
    icon: String
  }

  installed() {
    if (this.props.ripple) {
      new MDCRipple(this.shadowRoot.querySelector('.mdc-button'))
    }
  }

  render(props) {
    return (
      <button {...extractClass(props, 'mdc-button', {
        'mdc-button--dense': props.dense,
        'mdc-button--raised': props.raised,
        'mdc-button--unelevated': props.unelevated,
        'mdc-button--outlined': props.outlined
      })}>
        {(props.icon) && <i class="mdc-fab__icon material-icons">{props.icon}</i>}
        {(props.svgIcon) && <m-icon class='m-icon' {...props.svgIcon}></m-icon>}
        <span class="mdc-button__label"><slot></slot></span>
      </button>
    )
  }
}
