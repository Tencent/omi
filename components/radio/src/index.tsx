import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'

interface Props {
  label?: string,
  disabled?: boolean,
  checked?: boolean,
  value: string,
  name?: string
}


@tag('o-radio')
export default class Radio extends WeElement<Props>{
  static css = css

  static propTypes = {
    label: String,
    disabled: Boolean,
    checked: Boolean,
    value: String,
    name: String
  }

  group: Radio[]
  installed() {

    this.group = this.getScopeRoot(this.shadowRoot.host).querySelectorAll(`o-radio[name='${this.props.name}']`)
    //fix group 不一致
    this.group.forEach(ele => {
      ele.group = this.group
    })

  }

  isChecked: boolean

  clickHandler = () => {
    if (this.props.disabled) return
    if (!this.props.checked) {
      this.group.forEach(item => {
        item.updateProps({
          checked: false
        })
      })

      this.updateProps({
        checked: true
      })
      this.fire('change', { value: this.props.value })
    }
  }

  render(props) {

    return <label role="radio" tabindex="0" onClick={this.clickHandler} {...extractClass(props, 'o-radio', {
      'is-disabled': props.disabled,
      'is-checked': props.checked
    })} aria-checked={props.checked}>
      <span {...extractClass(props, 'o-radio__input', {
        'is-disabled': props.disabled,
        'is-checked': props.checked
      })}>
        <span class="o-radio__inner"></span>
        <input type="radio" aria-hidden="true" {...extract(props, ['checked', 'value', 'disabled'])} tabindex="-1" class="o-radio__original" />
      </span>

      <span class="o-radio__label">{props.label}<slot></slot></span>
    </label>
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


function extract(props, prop) {
  if (typeof prop === 'string') {
    if (props.hasOwnProperty(prop)) {
      return { [prop]: props[prop] }
    }
  } else {
    const res = {}
    prop.forEach(key => {
      if (props.hasOwnProperty(key)) {
        res[key] = props[key]
      }
    })
    return res
  }
}
