import { h, OmiProps, tag, WeElement, render, classNames } from 'omi'
import { InputProps } from './type'
import styles from './sytle'
import { TdClassNamePrefix } from '../../src/utils'

const InputClassNamePrefix = (name: string) => TdClassNamePrefix('input') + name

@tag('t-input')
export default class Input extends WeElement<InputProps> {
  static css = styles

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
              />
            </div>
            <div class={classNames('t-input__tips', InputClassNamePrefix(`__tips--${curStatus}`))}>{tips}</div>
          </div>
        </div>
      </>
    )
  }
}
