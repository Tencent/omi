import { tag, WeElement } from 'omi'
import '../style/global/index.css'
import style from '../style/_switch.scss'

@tag('el-switch', true)
class ElSwitch extends WeElement {
  static observe = true
  data = {
    value: null,
    checked: true
  }
  css() {
    return style
  }

  switchValue = () => {
    !this.props.disabled && this.handleChange()
  }

  handleChange = () => {
    this.data.checked = !this.data.checked
    const trueValue = this.props.hasOwnProperty('trueValue') ? this.props.trueValue : true  // eslint-disable-line
    const falseValue = this.props.hasOwnProperty('falseValue') ? this.props.falseValue : true  // eslint-disable-line
    this.fire('input', this.data.checked ? trueValue : falseValue)
    this.fire('change', this.data.checked ? trueValue : falseValue)
    this.domInput.checked = this.data.checked
  }

  installed() {
    if (!this.mo) {
      this.mo = new MutationObserver(() => {
        if (this.domInput.checked !== this.data.checked) {
          this.domInput.checked = this.data.checked
        }
      })
      this.mo.observe(this.domInput, { attributes: true })
    }
  }

  handleKeyUp = e => {
    if (e.keyCode === 32) {
      this.switchValue()
    }
  }

  render(props, data) {
    const {
      inactiveText,
      activeText,
      disabled,
      activeValue = true,
      inactiveValue = false,
      width = 40,
      activeColor,
      inactiveColor,
      id,
      name
    } = props
    const { checked, switchDisabled } = data
    const leftLabelClass = ['el-switch__label', 'el-switch__label--left']
    const rightLabelClass = ['el-switch__label', 'el-switch__label--right']
    if (data.checked) {
      rightLabelClass.push('is-active')
    } else {
      leftLabelClass.push('is-active')
    }
    const wrapperClass = ['el-switch']
    if (disabled) {
      wrapperClass.push('is-disabled')
    }
    if (checked) {
      wrapperClass.push('is-checked')
    }
    let coreColor = checked ? activeColor : inactiveColor
    return (
      <div
        class={wrapperClass.join(' ')}
        role="switch"
        aria-checked={checked}
        aria-disabled={switchDisabled}
        onClick={this.switchValue}
      >
        <input
          type="checkbox"
          class="el-switch__input"
          id={id}
          name={name}
          onChange={this.handleChange}
          ref={e => {
            this.domInput = e
          }}
          true-value={activeValue}
          false-value={inactiveValue}
          disabled={switchDisabled}
          onKeyUp={this.handleKeyUp}
        />
        {inactiveText && (
          <span class={leftLabelClass.join(' ')}>
            {<span aria-hidden={checked}>{inactiveText}</span>}
          </span>
        )}
        <span
          class="el-switch__core"
          ref={e => {
            this.domCore = e
          }}
          style={{
            width: width + 'px',
            borderColor: coreColor,
            backgroundColor: coreColor
          }}
        />
        {activeText && (
          <span class={rightLabelClass.join(' ')}>
            {<span aria-hidden={!checked}>{activeText}</span>}
          </span>
        )}
      </div>
    )
  }
}
