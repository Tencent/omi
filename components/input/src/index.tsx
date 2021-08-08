import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'

interface Props {
  value?: string
  disabled?: boolean
  type?: string
  placeholder?: string
  clearable?: boolean
  size?: 'medium' | 'small' | 'mini'
  suffixIcon?: string
  prefixIcon?: string
  maxLength?: number
  autoComplete?: string
  block?: boolean
}



@tag('o-input')
export default class Input extends WeElement<Props>{
  static css = css

  static defaultProps = {
    value: '',
    type: 'text',
    autosize: false,
    rows: 2,
    trim: false,
    autoComplete: 'off',
    block: false
  }

  static propTypes = {
    disabled: Boolean,
    type: String,
    placeholder: String,
    clearable: Boolean,
    suffixIcon: String,
    size: String,
    prefixIcon: String,
    maxLength: Number,
    autoComplete: String,
    block: Boolean,
    value: String
  }

  __$value: string

  install() {

    this.__$value = this.props.value
    Object.defineProperty(this, 'value', {
      get: this._onGetValue,
      set: this._onSetValue
    })
  }

  _onGetValue = () => {
    return this.__$value
  }

  _onSetValue = (value) => {
    this.__$value = value
    this.props.value = value
    this.setAttribute('value', value)
  }

  _tempTagName: string

  valueLength = 0

  handleBlur = (evt) => {

    if (this.props.onBlur) {
      this.props.onBlur(evt)
    } else {
      this.fire('blur', this.props.value)
    }
  }

  handleFocus = (evt) => {
    if (this.props.onFocus) {
      this.props.onFocus(evt)
    } else {
      this.fire('focus', this.props.value)
    }
  }

  handleChange = (evt) => {
    this.__$value = evt.target.value
    this.props.value = evt.target.value

    if (this.props.onChange) {
      this.props.onChange(evt)
    } else {
      this.fire('change', this.props.value)
    }
  }

  handleInput = (evt) => {
    evt.stopPropagation()
    this.__$value = evt.target.value
    this.props.value = evt.target.value

    if (this.props.onInput) {
      this.props.onInput(evt)
    } else {
      this.fire('input', this.props.value)
    }

    if (this.props.maxLength) {
      this.valueLength = evt.target.value.length
      this.update()
    }
  }

  focus() {
    this.shadowRoot.querySelector('input').focus()
  }

  blur() {
    this.shadowRoot.querySelector('input').blur()
  }

  clearInput = () => {
    this.updateProps({
      value: ''
    })
    this.__$value = ''
  }

  _tempInputTagName: string

  render(props) {
    const { type, size, suffixIcon, prefixIcon, autoComplete, validating, onMouseEnter, onMouseLeave, trim,
      ...otherProps
    } = props;

    this._tempTagName = 'o-icon-' + (suffixIcon || prefixIcon)

    this._tempInputTagName = type === 'textarea' ? 'textarea' : 'input'
    return (
      <div {
        ...extractClass(props, 'o-input',
          {
            [`o-input--${size}`]: props.size,
            'is-disabled': this.props.disabled,
            'o-input-suffix': suffixIcon,
            'o-input-prefix': prefixIcon,
            'is-block': props.block
          }
        )
      } onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>


        {(prefixIcon || suffixIcon) && <this._tempTagName
          css={`svg{
            width: 1em;
          }`}
          {
          ...extractClass(props, 'o-input__icon',
            {
              'is-prefix': prefixIcon,
              'is-suffix': suffixIcon
            }
          )
          }
        // onClick={this.handleIconClick.bind(this)}
        />}

        <this._tempInputTagName  {...otherProps}
          // ref="input"
          type={type}
          class={`o-${this._tempInputTagName}__inner`}
          autocomplete={autoComplete}
          maxLength={props.maxLength}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onInput={this.handleInput}
        />
        {props.clearable && <svg onClick={this.clearInput} class="o-icon-clear" fill="currentColor" width="1em" height="1em" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>}

        {props.maxLength && <span class="o-input__count"><span class="o-input__count-inner">
          {this.valueLength}/{props.maxLength}
        </span></span>}


      </div>
    )
  }
}
