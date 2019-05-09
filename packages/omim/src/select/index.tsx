import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCSelect } from '@material/select';
import * as globalCss from './global.scss'

// @ts-ignore
import { extract, htmlToVdom } from '../util.ts'

interface Props {
  label?: string,
  menu?: object
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
    label: String,
    menu: Object
  }

  installed() {
    if (this.props.menu) {
      const style = document.createElement('style')
      style.textContent = globalCss
      document.querySelector('head').appendChild(style)
    }

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
    if (props.menu) {
      return (
        <div class="mdc-select">
          <input type="hidden" name="enhanced-select"></input>
          <i class="mdc-select__dropdown-icon"></i>
          <div class="mdc-select__selected-text"></div>

          <div class="mdc-select__menu mdc-menu mdc-menu-surface">
            <ul class="mdc-list">
            {props.menu.map(item=><li class="mdc-list-item" data-value={item.value}>
                {item.text}
            </li>)}
            
            </ul>
          </div>

          <label class="mdc-floating-label">{props.label}</label>
          <div class="mdc-line-ripple"></div>
        </div>
      )
    }
    return (
      <div class="mdc-select">
        <i class="mdc-select__dropdown-icon"></i>
        <select class="mdc-select__native-control">
          {this.normalizedNodeName ? props.children : htmlToVdom(this.innerHTML)}
        </select>
        <label class="mdc-floating-label">{props.label}</label>
        <div class="mdc-line-ripple"></div>
      </div>
    )
  }
}
