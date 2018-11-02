import { tag, WeElement } from 'omi'
import style from '../style/_radio.scss'

@tag('el-radio', true)
class ElRadio extends WeElement {
  css() {
    return style
  }

  install() {
    this.data.checked = this.props.checked
    this._initData()
  }

  beforeUpdate() {
    this._initData()
  }

  _initData() {
    this.data.disabled = this.props.disabled
    this.data.value = this.props.value

    if (this.parentNode.nodeName === 'EL-RADIO-GROUP') {
      if (this.parentNode.data.value === this.data.value) {
        this.data.checked = true
      } else {
        this.data.checked = false
      }
      this._inInGroup = true
    }
  }

  render(props) {
    let classStr = 'el-radio'
    let inner = ''
    if (this.data.checked) {
      inner += 'is-checked'
      classStr += ' is-checked'
    }
    if (props.disabled) {
      inner += ' is-disabled'
      classStr += ' is-disabled'
    }

    return (
      <label role="radio" aria-checked="true" tabindex="0" class={classStr}>
        <span class={`el-radio__input ${inner}`} onClick={this.onClick}>
          <span class="el-radio__inner" />
          <input
            type="radio"
            aria-hidden="true"
            tabindex="-1"
            class="el-radio__original"
            value={props.value}
          />
        </span>
        <span class="el-radio__label">
          <slot />
        </span>
      </label>
    )
  }

  onClick = () => {
    if (this._inInGroup) {
      if (this.parentNode.data.value !== this.data.value) {
        this.parentNode.data.value = this.data.value
        this.parentNode.childNodes.forEach(node => {
          node.update()
        })
        this.parentNode.fire('change', { value: this.data.value })
      }
    } else if (!this.data.disabled) {
      this.data.checked = true
      this.update()
    }
  }
}
