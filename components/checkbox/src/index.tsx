import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'


interface Props {
  disabled: boolean,
  checked: boolean,
  value: string,
  label: string,
  indeterminate: boolean
}

@tag('o-checkbox')
export default class Table extends WeElement<Props> {
  static css = css.default

  static propTypes = {
    label: String,
    disabled: Boolean,
    indeterminate: Boolean,
    checked: Boolean,
    value: String
  }


  onChange = (e) => {
    if (this.props.disabled) {
      return
    }

    if (this.props.indeterminate) {
      this.props.checked = true
      this.props.indeterminate = false
      this.updateProps({
        checked: true,
        indeterminate: false
      })
    } else {
      this.updateProps({
        checked: !this.props.checked
      })
    }

    this.fire('change', e.currentTarget.checked)
  }

  render(props: Props) {

    return (
      <div {...extractClass(props, 'o-checkbox', {
        'o-checkbox__disabled': props.disabled,
        'o-checkbox__indeterminate': props.indeterminate
      })}>

        <input type="checkbox" disabled={props.disabled} onChange={this.onChange} {...extract(props, ['checked', 'value', 'indeterminate'])}
          class="o-checkbox__native-control" id="checkbox" />

        <div class="o-checkbox__background">
          <svg class="o-checkbox__checkmark"
            viewBox="0 0 24 24">
            <path class="o-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59" />
          </svg>
          <div class="o-checkbox__mixedmark"></div>
        </div>{props.label && <label class="o-checkbox__label" for="checkbox">{props.label}</label>}
      </div>
    )
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
