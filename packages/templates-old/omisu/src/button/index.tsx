import { h } from 'omis'
import * as css from './index.scss'
import { extractClass } from '../utils/class'
import { MDCRipple } from '@material/ripple'
import '../theme.ts'


const Button = (props, store) =>
  <button onClick={store.clickHandle} {...extractClass(props, 'mdc-button', {
    'mdc-button--dense': props.dense,
    'mdc-button--raised': props.raised,
    'mdc-button--unelevated': props.unelevated,
    'mdc-button--outlined': props.outlined
  })}>
    {(props.icon) && <i class="material-icons mdc-button__icon">{props.icon}</i>}
    <span class="mdc-button__label">{props.children}</span>
  </button>

Button.store = _ => ({
  installed() {
    if (_.props.ripple) {
      new MDCRipple(_.base)
    }
  },
  clickHandle(evt) {
    _.props.onClick(evt)
  }
})

Button.css = css

export default Button