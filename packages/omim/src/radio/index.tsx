import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCFormField } from '@material/form-field'
import { MDCRadio } from '@material/radio'
// @ts-ignore
import { extract } from '../util.ts'

interface Props {
  label?: string,
  disabled?: boolean,
  checked?: boolean,
  value: string
}

interface Data {

}


@tag('m-radio')
export default class Radio extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    label: String,
    disabled: Boolean,
    checked: Boolean,
    value: String
  }

  installed() {
    const checkbox = new MDCRadio(this.shadowRoot.querySelector('.mdc-radio'))
    const formField = new MDCFormField(this.shadowRoot.querySelector('.mdc-form-field'))
    formField.input = checkbox
  }

  render(props) {
    return (
      <div {...extractClass(props, 'mdc-form-field', {
        'mdc-checkbox--disabled': props.disabled
      })}>
        <div class={classNames('mdc-radio', {
          'mdc-radio--disabled': props.disabled
        })}>
          <input type="radio" {...extract(props, ['checked', 'value', 'disabled'])}
            class="mdc-radio__native-control"
            id="radio" />
          <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
          </div>
        </div>
        <label for="radio">{props.label}</label>
      </div>
    )
  }
}
