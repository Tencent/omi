import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCSelect } from '@material/select';
// @ts-ignore
import { extract, htmlToVdom } from '../util.ts'

interface Props {
  label?: string,
}

interface Data {

}


@tag('m-select')
export default class Select extends WeElement<Props, Data>{
  static css = css

  static defaultProps = {
    scale: 2
  }

  static propTypes = {
    label: String
  }

  installed() {

    const select = new MDCSelect(this.shadowRoot.querySelector('.mdc-select'));

    select.listen('MDCSelect:change', () => {
      this.fire('change', {
        selectedIndex: select.selectedIndex,
        value: select.value
      })
    });
  }

  install() {
    document.addEventListener('DOMContentLoaded', () => {
      this.update()
    })
  }

  render(props) {
    return (
      <div class="mdc-select">
        <i class="mdc-select__dropdown-icon"></i>
        <select class="mdc-select__native-control">
          {htmlToVdom(this.innerHTML)}
        </select>
        <label class="mdc-floating-label">{props.label}</label>
        <div class="mdc-line-ripple"></div>
      </div>
    )
  }
}
