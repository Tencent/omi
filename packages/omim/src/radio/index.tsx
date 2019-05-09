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
  value: string,
  name?: string
}

interface Data {

}


@tag('m-radio')
class Radio extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    label: String,
    disabled: Boolean,
    checked: Boolean,
    value: String,
    name: String
  }

  group: Radio[]
  radio: MDCRadio
  installed() {
    const radio = new MDCRadio(this.shadowRoot.querySelector('.mdc-radio'))
    const formField = new MDCFormField(this.shadowRoot.querySelector('.mdc-form-field'))
    formField.input = radio
    this.radio = radio
    this.group = this.getScopeRoot(this.shadowRoot.host).querySelectorAll(`m-radio[name='${this.props.name}']`)
    //fix group 不一致
    this.group.forEach(ele => {
      ele.group = this.group
    })
  }

  clickHandler = () => {
    if (this.props.disabled) return
    this.group.forEach(item => {
      item.radio.checked = false
    })
    const pre = this.radio.checked
    if (!pre) {
      this.radio.checked = true
      this.fire('selected', { value: this.props.value })
    }
  }

  render(props) {

    return (
      <div onClick={this.clickHandler} {...extractClass(props, 'mdc-form-field', {
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

  getScopeRoot(current) {
    while (true) {
      const p = current.parentNode
      if (p) {
        current = p
      } else {
        return current
      }
    }
  }
}
