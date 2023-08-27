import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { TdDropdownProps, DropdownOption } from './type'
import css from './style/index'
import { toArray, omit } from 'lodash'
import { TdClassNamePrefix } from '../utils'
import { PopupVisibleChangeContext } from '../popup'
import '../popup'
import DropdownMenu from './dropdownMenu'
import DropdownItem from './dropdownItem'

@tag('t-dropdown')
export default class Dropdown extends WeElement<TdDropdownProps> {
  static css = css as string

  dropdownClass = TdClassNamePrefix('dropdown')
  isPopupVisible = false

  static defaultProps = {
    direction: 'right',
    hideAfterItemClick: true,
    maxColumnWidth: 100,
    maxHeight: 300,
    minColumnWidth: 10,
    placement: 'bottom-left',
    trigger: 'hover',
  }

  static propTypes = {
    direction: String,
    disabled: Boolean,
    hideAfterItemClick: Boolean,
    maxColumnWidth: [String, Number],
    maxHeight: Number,
    minColumnWidth: [String, Number],
    options: Array,
    placement: String,
    popupProps: Object,
    trigger: String,
    onClick: Function,
  }

  options: DropdownOption[] = []

  getOptionsFromChildren = (children: WeElement): DropdownOption[] => {
    if (!children) return []

    if (children.type === DropdownMenu) {
      const groupChildren = children.props.children as WeElement
      if (Array.isArray(groupChildren)) {
        return this.getOptionsFromChildren(groupChildren)
      }
    }

    return toArray(children)
      .map((item: WeElement) => {
        const groupChildren = item.props?.children
        const contextRes = item.props?.content

        if (Array.isArray(groupChildren)) {
          const contentCtx = groupChildren?.filter?.((v) => ![DropdownItem, DropdownMenu].includes(v.type))
          const childrenCtx = groupChildren?.filter?.((v) => [DropdownItem, DropdownMenu].includes(v.type))

          return {
            ...item.props,
            content: contentCtx || groupChildren,
            children: childrenCtx.length > 0 ? this.getOptionsFromChildren(groupChildren[1]) : null,
          }
        }
        return { ...item.props, content: groupChildren || contextRes, children: null }
      })
      .filter((v) => !!v.content)
  }

  generateDropdownOptions = (children: WeElement[], options: DropdownOption[]): DropdownOption[] => {
    if (options && options.length > 0) return options
    let dropdownMenuChild: any
    children.forEach((child: WeElement) => {
      if (!child) return
      //TODO
      if (child.type === DropdownMenu && (child.props as { children: WeElement }).children) {
        dropdownMenuChild = (child.props as { children: WeElement }).children
      }
    })
    return this.getOptionsFromChildren(dropdownMenuChild)
  }

  handleVisibleChange = (visible: boolean, context: PopupVisibleChangeContext) => {
    this.isPopupVisible = visible
    this.props.popupProps?.onVisibleChange?.(visible, context)
    this.update()
  }
  handleMenuClick = (data: DropdownOption, context: { e: MouseEvent }) => {
    if (this.props.hideAfterItemClick) {
      this.isPopupVisible = false
      this.props.popupProps?.onVisibleChange?.(false, context)
    }
    this.props.onClick?.(data, context)
    this.update()
  }

  beforeUpdate() {
    this.options = this.generateDropdownOptions(this.props.children, this.props.options)
  }
  render(props: OmiProps<TdDropdownProps>) {
    const renderContent = <t-dropdown-menu {...props} options={this.options} onClick={this.handleMenuClick} />
    const popupParams = {
      disabled: props.disabled,
      placement: props.placement,
      trigger: props.trigger,
      showArrow: false,
      content: renderContent,
      ...omit(props.popupProps, 'onVisibleChange'),
      overlayInnerClassName: classNames(this.dropdownClass, props.class, props.popupProps?.overlayInnerClassName),
      overlayInnerStyle: props.style,
    }

    return (
      <t-popup
        expandAnimation={true}
        // destroyOnClose={true}
        visible={this.isPopupVisible}
        onVisibleChange={this.handleVisibleChange}
        {...popupParams}
      >
        {props.children?.[0]}
      </t-popup>
    )
  }
}
