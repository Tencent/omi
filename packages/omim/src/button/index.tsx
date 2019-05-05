import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCRipple } from '@material/ripple'
import '../icon'

interface Props {
  onClick: (...arg: any) => {},
  ripple: boolean,
  raised: boolean
}

interface Data {

}

@tag('m-button')
export default class Button extends WeElement<Props, Data>{
  static css = css

  installed(){
    if(this.props.ripple){
      
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
