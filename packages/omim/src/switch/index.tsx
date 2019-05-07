import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCSwitch } from '@material/switch';

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


@tag('m-switch')
export default class Switch extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    label: String,
    disabled: Boolean,
    checked: Boolean,
    value: String
  }

  installed() {
    const switchControl = new MDCSwitch(this.shadowRoot.querySelector('.mdc-switch'));
  }

  render(props) {
    return [
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          <div class="mdc-switch__thumb">
            <input type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch" />
          </div>
        </div>
      </div>,
      <label for="basic-switch">{props.label}</label>
    ]

  }
}
