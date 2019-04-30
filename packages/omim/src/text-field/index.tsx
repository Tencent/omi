
import * as css from './index.scss'
import { WeElement, tag, h, extractClass } from 'omi'
import { MDCTextField } from '@material/textfield/index'
import { MDCRipple } from '@material/ripple/index'

interface Props {
  fullWidth: boolean,
  textarea: boolean,
  outlined: boolean,
  noLabel: boolean,
  helperText: string,
  characterCounter: number[],

  //Multi-line Text Field (Textarea) with Character Counter  (textarea+characterCounter)

  label: '',

  required: boolean,
  pattern: RegExp,
  minLength: number,
  maxLength: number,
  min: number,
  max: number,
  step: number,

  rows: number,
  cols: number,

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

function extract(from, props) {
  const to = {}
  props.forEach(prop => {
    if (from[prop] !== undefined) {
      to[prop] = from[prop]
    }
  })
  return to
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
    const cls = extractClass(props, 'mdc-text-field', {
      'mdc-text-field--fullwidth': props.fullWidth,
      'mdc-text-field--textarea': props.textarea,
      'mdc-text-field--disabled': props.disabled
    })

    const inputProps = extract(props, ['disabled', 'required', 'pattern', 'value', 'minLength', 'maxLength', 'min', 'max', 'step'])

    const vd = [
      <div ref={this.refIt} {...cls}>
        {props.characterCounter && props.textarea && <div class="mdc-text-field-character-counter">{props.characterCounter[0]} / {props.characterCounter[1]}</div>}
        {
          props.textarea ?
            <textarea id="my-text-field" class="mdc-text-field__input" rows={props.rows} cols={props.cols} {...inputProps}></textarea> :
            <input type="text" id="my-text-field" class="mdc-text-field__input" {...inputProps} />
        }
        {
          props.outlined ?
            <div class="mdc-notched-outline">
              <div class="mdc-notched-outline__leading"></div>
              <div class="mdc-notched-outline__notch">
                {!props.noLabel && <label for="tf-outlined" class="mdc-floating-label">{props.label}</label>}
              </div>
              <div class="mdc-notched-outline__trailing"></div>
            </div> :
            (!props.noLabel && <label class="mdc-floating-label" for="my-text-field">{props.label}</label>)
        }
        {props.characterCounter && !props.textarea && <div class="mdc-text-field-helper-line">
          <div class="mdc-text-field-character-counter">{props.characterCounter[0]} / {props.characterCounter[1]}</div>
        </div>}
        <div class="mdc-line-ripple"></div>
      </div>
    ]

    if (props.helperText) {
      vd.push(
        <div class="mdc-text-field-helper-line">
          <div class="mdc-text-field-helper-text">{props.helperText}</div>
        </div>)
    }

    return vd
  }
}



