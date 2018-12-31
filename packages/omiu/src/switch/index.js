import { define, WeElement, extractClass } from 'omi'
import style from './_index.css'

define('o-switch', class extends WeElement {
  css() {
    return style
  }

  onChange = () => {
    this.fire('change', this._ele.checked)
  }
  render(props) {
    if (props.checked) {
      return (
        <label for={`x_${this.elementId}`} {...extractClass(props, 'weui-switch-cp')}>
          <input
            id={`x_${this.elementId}`}
            ref={e => {
              this._ele = e
            }}
            class="weui-switch-cp__input"
            type="checkbox"
            onChange={this.onChange}
            checked="checked"
          />
          <div class="weui-switch-cp__box" />
        </label>
      )
    }

    return (
      <input
        {...extractClass(props, 'weui-switch')}
        type="checkbox"
        ref={e => {
          this._ele = e
        }}
        onChange={this.onChange}
      />
    )
  }
})
