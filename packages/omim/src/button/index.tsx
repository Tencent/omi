import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCRipple } from '@material/ripple'
import '../icon'

interface Props {
  ripple: boolean,
  raised: boolean,
  dense: boolean,
  unelevated: boolean,
  outlined: boolean,
  icon: object
}

interface Data {

}

@tag('m-button')
export default class Button extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    ripple: Boolean,
    raised: Boolean,
    dense: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    icon: Object
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
        {(props.icon) && <m-icon class='m-icon' {...props.icon}></m-icon>}
        <span class="mdc-button__label"><slot></slot></span>
      </button>
    )
  }
}
