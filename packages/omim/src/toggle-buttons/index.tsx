import { tag, WeElement, classNames, h, render } from 'omi'
import * as css from './index.scss'
//@ts-ignore
import '../theme.ts'

import { MDCRipple } from '@material/ripple'

interface Props {
  multipleSelection?: boolean
  items: any[] 
}

@tag('m-toggle-buttons')
export default class ToggleButtons extends WeElement<Props> {
  static defaultProps = {

  }

  static propTypes = {
    multipleSelection: Boolean,
    items: Array 
  }

  static css = css

  installed() {
    this.shadowRoot.querySelectorAll('.ripple').forEach(dom => {
      new MDCRipple(dom)
    })
  }

  clickHandler = (item)=> {
    if(item.disabled) return
    if(this.props.multipleSelection){
      item.selected = !item.selected
      this.fire('change', this.props.items)
    } else if(!item.selected){
      this.props.items.forEach(item=> item.selected = false)
      item.selected = true
      this.fire('change', item)
    }
    this.update(true)
  }

  render(props) {
    return <div class="m-root">
      {props.items.map(item => <button
        class={classNames("mb-root mtb-root", {
          'selected': item.selected,
          'disabled': item.disabled
        })}
        tabindex="0"
        disabled={item.disabled}
        onClick={_=>this.clickHandler(item)}
        type="button">
        {typeof item.icon === 'string' ? <i class='material-icons'>{item.icon}</i> : <span class="mtb-label">
          <svg class="msi-root" focusable="false"
            viewBox="0 0 24 24" aria-hidden="true" role="presentation">
            <path d={item.path}></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        </span>}
        {!item.disabled && <span class="ripple ripple-surface"></span>}
      </button>)}
    </div>
  }
}
