
import * as css from './index.scss'
import { WeElement, tag, h } from 'omi'
import { MDCTextField } from '@material/textfield/index';

interface Props {
  placeholder: '',
  customCSS: string
}

interface Data {

}


@tag('m-text-field')
export default class TextField extends WeElement<Props, Data>{
  static css = css

  textField: MDCTextField
  root: HTMLElement

  installed() {
    this.textField = new MDCTextField(this.root)
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



