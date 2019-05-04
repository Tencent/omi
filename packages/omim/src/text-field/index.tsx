
import * as css from './index.scss'
import { WeElement, tag, h, extractClass } from 'omi'
import { MDCTextField } from '@material/textfield/index'
import '../icon'
//import { MDCRipple } from '@material/ripple/index'

interface Props {
  fullWidth: boolean,
  textarea: boolean,
  outlined: boolean,
  noLabel: boolean,
  showHelper: boolean,
  helperText: string,
  iconRight: boolean,
  //characterCounter: number[],
  characterCounter: boolean,
  //Multi-line Text Field (Textarea) with Character Counter  (textarea+characterCounter)

  label: string,

  required: boolean,
  pattern: string, //RegExp string such as [A-z]{3}
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
  //ripple: MDCRipple,
  leadingIconAriaLabel: string,
  trailingIconAriaLabel: string,
  leadingIconContent: string,
  trailingIconContent: string
}

interface Data {

}

function extract(from, props):any {
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
  static defaultProps = {
    showHelper: true
  }

  static propTypes = {
    fullWidth: Boolean,
    textarea: Boolean,
    outlined: Boolean,
    noLabel: Boolean,
    showHelper: Boolean,
    helperText: String,
    iconRight: Boolean,
    characterCounter: Boolean,

    //Multi-line Text Field (Textarea) with Character Counter  (textarea+characterCounter)

    label: String,

    required: Boolean,
    pattern: String, //RegExp string such as [A-z]{3}
    minLength: Number,
    maxLength: Number,
    min: Number,
    max: Number,
    step: Number,

    rows: Number,
    cols: Number,

    value: String,
    disabled: Boolean, //also add style class 
    useNativeValidation: Boolean,
    valid: Boolean,
    helperTextContent: String,
    //ripple: MDCRipple,
    leadingIconAriaLabel: String,
    trailingIconAriaLabel: String,
    leadingIconContent: String,
    trailingIconContent: String
  }

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

  render(props) {
    const cls = extractClass(props, 'mdc-text-field', {
      'mdc-text-field--outlined': props.outlined,
      'mdc-text-field--fullwidth': props.fullWidth,
      'mdc-text-field--textarea': props.textarea,
      'mdc-text-field--disabled': props.disabled,
      'mdc-text-field--with-leading-icon': (props.path || props.paths) && !props.iconRight,
      'mdc-text-field--with-trailing-icon': (props.path || props.paths) && props.iconRight
    })

    const inputProps = extract(props, ['disabled', 'required', 'pattern', 'value', 'minLength', 'maxLength', 'min', 'max', 'step'])

    if(props.fullWidth && !props.outlined){
      inputProps.placeholder = props.label
      props.label = null
    }

    const vd = [
      <div ref={this.refIt} {...cls}>
        {(props.path || props.paths) && !props.iconRight && <m-icon class='icon' {...extract(props, ['path', 'paths'])}></m-icon>}
        {props.characterCounter && props.textarea && <div class="mdc-text-field-character-counter"></div>}
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
                {props.label === undefined || !props.noLabel && <label for="tf-outlined" class="mdc-floating-label">{props.label}</label>}
              </div>
              <div class="mdc-notched-outline__trailing"></div>
            </div> :
            (props.label === undefined || !props.noLabel && <label class="mdc-floating-label" for="my-text-field">{props.label}</label>)
        }
        {(props.path || props.paths) && props.iconRight && <m-icon class='icon' {...extract(props, ['path', 'paths'])}></m-icon>}
        {!props.outlined && <div class="mdc-line-ripple"></div>}
      </div>
    ]

    if (props.helperText || (props.characterCounter && !props.textarea)) {
      vd.push(
        <div class="mdc-text-field-helper-line">
          {props.helperText && <div class={`mdc-text-field-helper-text${props.showHelper ? ' mdc-text-field-helper-text--persistent' : ''}`}>{props.helperText}</div>}
          {props.characterCounter && !props.textarea && <div class="mdc-text-field-helper-line">
            <div class="mdc-text-field-character-counter"></div>
          </div>}
        </div>)
    }

    return vd
  }
}