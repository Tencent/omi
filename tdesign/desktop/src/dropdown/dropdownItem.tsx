import { h, tag, WeElement, OmiProps, classNames, createRef } from 'omi'
import { TdDropdownItemProps, TdDropdownProps, DropdownOption } from './type'
import css from './style/index'
import { TdClassNamePrefix, pxCompat } from '../utils'
type DropdownItemProps = TdDropdownItemProps & {
  value: DropdownOption['value']
  maxColumnWidth: TdDropdownProps['maxColumnWidth']
  minColumnWidth: TdDropdownProps['minColumnWidth']
  isSubmenu: Boolean
  onClick: (value: DropdownOption['value'], e: any) => void
}
@tag('t-dropdown-item')
export default class DropdownItem extends WeElement<DropdownItemProps> {
  static css = css as string

  static defaultProps = {
    active: false,
    disabled: false,
    divider: false,
    theme: 'default',
    maxColumnsWidth: 100,
    minColumnsWidth: 10,
  }

  static propTypes = {
    active: Boolean,
    content: Object,
    disabled: Boolean,
    divider: Boolean,
    prefixIcon: Object,
    theme: String,
    value: [String, Number, Object],
    maxColumnsWidth: [String, Number],
    minColumnsWidth: [String, Number],
    isSubmenu: Boolean,
  }

  itemRef = createRef()
  handleItemClick = (e: MouseEvent) => {
    e.stopPropagation()
    this.props.onClick?.(this.props.value, e)
  }
  render(props: OmiProps<DropdownItemProps>) {
    const componentName = TdClassNamePrefix('dropdown__item')
    const itemClassName = classNames(props.class, componentName, `${componentName}--theme-${props.theme}`, {
      [`${componentName}--active`]: props.active,
      [`${componentName}--disabled`]: props.disabled,
    })
    return (
      <>
        <li
          class={itemClassName}
          onClick={this.handleItemClick}
          style={{ maxWidth: pxCompat(props.maxColumnWidth), minWidth: pxCompat(props.minColumnWidth), ...props.style }}
          ref={this.itemRef}
        >
          {props.prefixIcon ? <div className={`${componentName}-icon`}>{props.prefixIcon}</div> : null}
          {props.children}
        </li>
      </>
    )
  }
}
