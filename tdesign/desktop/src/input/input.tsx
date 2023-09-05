import { h, OmiProps, tag, WeElement, render, classNames ,createRef} from 'omi'
import { InputProps } from './type'
import inputSyle from './style'
import { TdClassNamePrefix } from '../../src/utils'

const InputClassNamePrefix = (name: string) => TdClassNamePrefix('input') + name

@tag('t-input')
export default class Input extends WeElement<InputProps> {
  static css = inputSyle

  input = createRef()

  isKeyUpEvent = false

  onblur = (event: Event) => {
    if (this.isKeyUpEvent) {
      this.isKeyUpEvent = false; // 重置标志为 false
    } else {
      var inputValue = event.currentTarget.value;
      this.fire('blur', { event: event, value: inputValue })
    }
  }

  onenter = (event: Event) => {
    this.isKeyUpEvent = true
    if (event.key === 'Enter') {
      const inputValue = event.target.value;
      this.fire('enter', { event: event, value: inputValue })
    }
  }

  render(props: InputProps, store: any) {
    const { autofocus, disabled, readonly, showClearIconOnEmpty, align, size, status, type, autoWidth } = props
    const { placeholder, value, tips, autocomplete } = props
    const { onChange } = props

    const curStatus = status || 'default'

    return (
      <>
        <div>
          <div
            class={classNames(InputClassNamePrefix('__wrap'), {
              [InputClassNamePrefix('--auto-width')]: autoWidth,
            })}
          >
            <div
              class={classNames('t-input', TdClassNamePrefix(`is-${curStatus}`), TdClassNamePrefix(`align-${align}`), {
                [TdClassNamePrefix(`is-readonly`)]: readonly,
                [TdClassNamePrefix(`is-disabled`)]: disabled,
              })}
            >
              <input
                autocomplete={autocomplete}
                autofocus={autofocus}
                disabled={disabled}
                readonly={readonly}
                placeholder={placeholder || '请输入'}
                type={type || 'text'}
                class={InputClassNamePrefix('__inner')}
                onchange={(evt: any) => {
                  const target = evt.target
                  ;(onChange as any)?.(target.value)
                }}
                value={value}
                onKeyUp={(e) => {this.onenter(e)}}
                onBlur={(e) => {this.onblur(e)}}
                ref = {this.input}
              />
            </div>
            <div class={classNames('t-input__tips', InputClassNamePrefix(`__tips--${curStatus}`))}>{tips}</div>
          </div>
        </div>
      </>
    )
  }
}
