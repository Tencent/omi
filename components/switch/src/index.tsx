import { tag, h, WeElement, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
  checked: boolean
}

@tag('o-switch')
export default class Switch extends WeElement<Props> {
  static css = css

  static propTypes = {
    checked: Boolean
  }

  _ele

  onChange = () => {
    this.fire('change', this._ele.checked)
  }

  render(props) {
    if (props.checked) {
      return (
        <label for={`x_${this.elementId}`} {...extractClass(props, 'o-switch-cp')}>
          <input
            id={`x_${this.elementId}`}
            ref={e => {
              this._ele = e
            }}
            class="o-switch-cp__input"
            type="checkbox"
            onChange={this.onChange}
            checked={true}
          />
          <div class="o-switch-cp__box" />
        </label>
      )
    }

    return (
      <input
        {...extractClass(props, 'o-switch')}
        type="checkbox"
        ref={e => {
          this._ele = e
        }}
        onChange={this.onChange}
      />
    )
  }
}
