
import * as css from './index.scss'
import { WeElement, tag, h } from 'omi'
import { MDCTextField } from '@material/textfield/index'
import { MDCRipple } from '@material/ripple/index'

interface Props {
  fullWidth: boolean,
  textarea: boolean,
  outlined: boolean,
  noLabel: boolean,
  helperText: string,
  characterCounter:number[],

  //Multi-line Text Field (Textarea) with Character Counter  (textarea+characterCounter)

  placeholder: '',

  required: boolean,
  pattern: RegExp,
  minLength: number,
  maxLength: number,
  min: number,
  max: number,
  step: number,

  value: string,
  disabled: boolean, //also add style class 
  useNativeValidation: boolean,
  valid: boolean,
  helperTextContent: string,
  ripple: MDCRipple,
  leadingIconAriaLabel: string,
  trailingIconAriaLabel: string,
  leadingIconContent: string,
  trailingIconContent: string
}

interface Data {

}


@tag('m-text-field')
export default class TextField extends WeElement<Props, Data>{
  static css = css

  mdc: MDCTextField
  root: HTMLElement

  installed() {
    this.mdc = new MDCTextField(this.root)

  }

  focus = () => {
    this.mdc.focus()
  }

  layout = () => {
    this.mdc.layout()
  }

  uninstall() {
    this.mdc.destroy()
  }
  
  refIt = (e) => { this.root = e }

  render(props, data) {
    return (
      <div ref={this.refIt} class="mdc-text-field">
        <input type="text" id="my-text-field" class="mdc-text-field__input" />
        <label class="mdc-floating-label" for="my-text-field">{props.placeholder}</label>
        <div class="mdc-line-ripple"></div>
      </div>
    )
  }
}



