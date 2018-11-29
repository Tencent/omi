import { define, WeElement } from 'omi'
import css from './_index.css'

define('o-adjustment', class extends WeElement {
  css() {
    return css
  }

  install() {
    this.data.value = this.props.value
  }

  minus = () => {
    if(this.data.mDisabled) return
    this.data.value -= this.props.step
    this.data.mDisabled = this.data.value <= this.props.min
    if (this.data.mDisabled) {
      this.data.value = this.props.min
    }

    this.data.pDisabled = this.data.value >= this.props.max
    this.update()
    this.fire('change', {value:this.data.value})
  }

  plus = () => {
    if(this.data.pDisabled) return
    this.data.value += this.props.step
    this.data.pDisabled = this.data.value >= this.props.max

    if (this.data.pDisabled) {
      this.data.value = this.props.max
    }
    this.data.mDisabled = this.data.value <= this.props.min
    
    this.update()
    this.fire('change', {value:this.data.value})
  }

  render(props, data) {
    return (
      <div class="ctn">
        <span
          role="button"
          class={
            'decrease' + (data.mDisabled ? ' is-disabled' : '')
          }
          onClick={this.minus}
        >-</span>
        <span
          role="button"
          class={
            'increase' + (data.pDisabled ? ' is-disabled' : '')
          }
          onClick={this.plus}
        >+</span>
        <div class="input">
          <input
            type="text"
            autocomplete="off"
            aria-label="描述文字"
            max="10"
            min="1"
            class="o-input__inner"
            role="spinbutton"
            aria-valuemax="10"
            aria-valuemin="1"
            aria-valuenow="1"
            value={data.value}
            aria-disabled="undefined"
          />
        </div>
      </div>
    )
  }
})
