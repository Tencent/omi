import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { TdSwitchProps } from './type'
import css from './style/index'
import { StyledProps, commonClass } from '../common'
import { TdClassNamePrefix, parseTNode } from '../utils'
import '../loading'

export type SwitchChangeEventHandler = (value: boolean, event: MouseEvent) => void
export type SwitchClickEventHandler = SwitchChangeEventHandler
export interface SwitchProps extends TdSwitchProps, StyledProps {}

@tag('t-switch')
export default class Switch extends WeElement<SwitchProps> {
  static css = css as string
  static defaultProps = { label: [] as any, loading: false, size: 'medium' }
  static propTypes = {
    customValue: Array,
    disabled: Boolean,
    label: [Array, Object],
    loading: Boolean,
    size: String,
    value: [String, Number, Boolean],
    defaultValue: [String, Number, Boolean],
    onChange: Function,
  }

  componentName = TdClassNamePrefix('switch')
  activeValue: string | number | boolean
  inactiveValue: string | number | boolean
  isControlled: boolean
  innerChecked: boolean
  SIZE = commonClass['SIZE']
  STATUS = commonClass['STATUS']

  install() {
    const { customValue, defaultValue, value } = this.props
    if (customValue) {
      this.activeValue = customValue[0]
      this.inactiveValue = customValue[1]
    } else {
      this.activeValue = true
      this.inactiveValue = false
    }
    this.isControlled = typeof value !== 'undefined'
    const initChecked = defaultValue === this.activeValue || value === this.activeValue
    this.innerChecked = initChecked
  }

  onInternalClick(e: MouseEvent) {
    const { isControlled, activeValue, inactiveValue } = this
    const { disabled, onChange } = this.props
    if (disabled) return

    if (!isControlled) {
      this.innerChecked = !this.innerChecked
    }
    const changedValue = !this.innerChecked ? activeValue : inactiveValue
    onChange?.(changedValue, { e })
    this.update()
  }

  beforeUpdate() {
    const { isControlled, activeValue, inactiveValue } = this
    const { value, customValue } = this.props
    if (Array.isArray(customValue) && !customValue.includes(value)) {
      console.error('Switch', `value is not in customValue: ${JSON.stringify(customValue)}`)
    }
    if (isControlled) {
      this.innerChecked = value === activeValue
    }
  }

  render(props: OmiProps<SwitchProps>) {
    const { componentName, STATUS, SIZE, innerChecked, onInternalClick } = this
    const {
      class: className,
      value,
      defaultValue,
      disabled,
      loading,
      size,
      label,
      customValue,
      onChange,
      ...restProps
    } = props
    const switchClassName = classNames(
      componentName,
      className,
      {
        [STATUS.checked]: innerChecked,
        [STATUS.disabled]: disabled,
        [STATUS.loading]: loading,
      },
      SIZE[size],
    )
    const renderContent = (checked: boolean) => {
      if (Array.isArray(label)) {
        const [activeContent = '', inactiveContent = ''] = label
        const content = checked ? activeContent : inactiveContent
        return parseTNode(content, { value })
      }

      return parseTNode(label, { value })
    }

    return (
      <button
        {...restProps}
        type="button"
        role="switch"
        disabled={disabled || loading}
        class={switchClassName}
        onClick={(e) => {
          onInternalClick.bind(this)(e)
        }}
      >
        <span class={`${componentName}__handle`}>{loading && <t-loading loading={true} size="small" />}</span>
        <div class={`${componentName}__content`}>{renderContent(innerChecked)}</div>
      </button>
    )
  }
}
