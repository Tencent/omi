import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCSwitch, MDCSwitchFoundation } from '@material/switch';

// @ts-ignore
import { extract } from '../util.ts'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  label?: string,
  disabled?: boolean,
  checked?: boolean,
  value: string
}

interface Data {

}

@tag('m-switch')
export default class Switch extends WeElement<Props, Data>{
  static css = theme() + css

  static propTypes = {
    label: String,
    disabled: Boolean,
    checked: Boolean,
    value: String
  }

  static defaultProps = {

  }

  switchControl: MDCSwitch
  switchFoundation: MDCSwitchFoundation

  updated() {
    if(this.props.disabled) {
      this.switchFoundation.setChecked(false)
    }
    this.switchFoundation.setDisabled(this.props.disabled)
  }

  installed() {
    this.switchControl = new MDCSwitch(this.shadowRoot.querySelector('.mdc-switch'))
    this.switchFoundation = this.switchControl.getDefaultFoundation()

    if(this.props.disabled) {
      this.switchFoundation.setChecked(false)
    } else {
      this.switchFoundation.setChecked(this.props.checked)
    }
    this.switchFoundation.setDisabled(this.props.disabled)
  }

  onInput = (evt) => {
    this.fire('change', {
      value: this.props.value,
      checked: this.switchControl.checked,
      disabled: this.switchControl.disabled,
      label: this.props.label
    })
  }

  render(props) {
    return [
      <div {...extractClass(props, 'mdc-switch', {
        'mdc-switch--disabled': props.disabled,
        'mdc-switch--checked': props.checked
      })}>
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          <div class="mdc-switch__thumb">
            <input
              {...extract(props, ['value'])}
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              onClick={this.onInput}
            />
          </div>
        </div>
      </div>,
      <label for="basic-switch"> {props.label}</label>
    ]
  }
}
