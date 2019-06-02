import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import { MDCFormField } from '@material/form-field'
import { MDCCheckbox } from '@material/checkbox'
// @ts-ignore
import { extract } from '../util.ts'
//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  label?: string,
  disabled?: boolean,
  indeterminate?: boolean,
  checked?: boolean,
  value: string
}

interface Data {

}


@tag('m-checkbox')
export default class Checkbox extends WeElement<Props, Data>{
  static css = theme() + css

  static resetTheme() {
    this.css = theme() + css
  }

  static propTypes = {
    label: String,
    disabled: Boolean,
    indeterminate: Boolean,
    checked: Boolean,
    value: String
  }

	changeHandler = (e)=>{
		this.fire('change', e.currentTarget.checked)
	}

  installed() {
    const checkbox = new MDCCheckbox(this.shadowRoot.querySelector('.mdc-checkbox'))
    const formField = new MDCFormField(this.shadowRoot.querySelector('.mdc-form-field'))
		formField.input = checkbox
  }

  render(props) {
    return (
      <div {...extractClass(props, 'mdc-form-field', {
        'mdc-checkbox--disabled': props.disabled
      })}>
        <div class="mdc-checkbox">
          <input type="checkbox" onChange={this.changeHandler} {...extract(props, ['checked', 'value', 'indeterminate'])}
            class="mdc-checkbox__native-control"
            id="checkbox" />
          <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
              <path class="mdc-checkbox__checkmark-path"
                fill="none"
                d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>
            <div class="mdc-checkbox__mixedmark"></div>
          </div>
        </div>
        <label for="checkbox">{props.label}</label>
      </div>
    )
  }
}
