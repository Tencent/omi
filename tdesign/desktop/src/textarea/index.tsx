import { OmiProps, WeElement, h, tag, classNames } from 'omi'
import style from './style'
import { TextareaProps } from './types'
import { TdClassNamePrefix } from '../utils/clsx'
import calcTextareaHeight from '../_common/js/utils/calcTextareaHeight'
import { valueToNode } from '@babel/types'
const TextareaClassNamePrefix = (className: string) => TdClassNamePrefix('textarea__') + className

@tag('t-textarea')
export default class Textarea extends WeElement<TextareaProps> {
  static css = style

  static defaultProps = {
    allowInputOverMax: false,
    autofocus: false,
    autosize: false,
    disabled: false,
    readonly: false,
  }

  static propTypes = {
    allowInputOverMax: Boolean,
    autofocus: Boolean,
    autosize: Boolean,
    disabled: Boolean,
    readonly: Boolean,

    style: String,
    label: String,
    tips: String,
    status: String,

    maxcharacter: Number,
    maxlength: Number,

    name: String,
    placeholder: String,

    value: String,
    defaultValue: String,

    onBlur: Function,
    onChange: Function,
    onFocus: Function,
    onKeydown: Function,
    onKeypress: Function,
    onKeyup: Function,
  }

  getTextareaStatus(status: string) {
    return TdClassNamePrefix(`is-${status || ''}`)
  }

  getTipsStyle(status: string) {
    return TextareaClassNamePrefix(`tips--${status}`)
  }

  getTextareaIsDisabled(disabled: boolean) {
    return TdClassNamePrefix(`is-${disabled ? 'disabled' : ''}`)
  }

  onBlur = (event: any) => {
    // console.log(event)
  }

  handleTextChange = (event: any) => {
    // console.log(event)
    console.log(event)
    console.log(this.textarea.value)
  }

  onFocus = (event: any) => {
    console.log(this.props.autosize)
  }

  onKeypress = (event: any) => {
    // console.log(event);
  }
  onKeydown = (event: any) => {
    // console.log(event);
  }
  onKeyup = (event: any) => {
    // console.log(event);
  }

  render(props: OmiProps<TextareaProps, any>, store: any) {
    const { autofocus, autosize, placeholder, readonly, value, status, disabled, tips } = props

    return (
      <>
        <div class={classNames(TdClassNamePrefix('textarea'))}>
          <textarea
            class={classNames(
              TextareaClassNamePrefix('inner'),
              this.getTextareaStatus(status),
              this.getTextareaIsDisabled(disabled),
            )}
            placeholder={placeholder}
            readonly={readonly}
            disabled={disabled}
            autofocus={autofocus}
            onChange={this.handleTextChange}
            onFocus={this.onFocus}
            onKeypress={this.onKeypress}
            value={value}
            ref={(e) => {
              this.textarea = e
            }}
          ></textarea>
          {tips && <div class={classNames(TextareaClassNamePrefix('tips'), this.getTipsStyle(status))}>{tips}</div>}
        </div>
      </>
    )
  }
}
