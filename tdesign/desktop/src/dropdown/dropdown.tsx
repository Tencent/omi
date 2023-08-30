import { h, tag, WeElement, OmiProps, classNames, getHost } from 'omi'
import { TdDropdownProps, DropdownOption } from './type'
import css from './style/index'
import { toArray, omit } from 'lodash'
import { TdClassNamePrefix } from '../utils'
import { PopupVisibleChangeContext } from '../popup'
import '../popup'
import './dropdownMenu'
import './dropdownItem'

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

    if (children.nodeName === 't-dropdown-menu') {
      const groupChildren = children.children as WeElement
      if (Array.isArray(groupChildren)) {
        return this.getOptionsFromChildren(groupChildren)
      }
    }

    return toArray(children)
      .map((item: WeElement) => {
        const groupChildren = item.children
        delete item.attributes.ignoreAttrs
        const contextRes = item.attributes.content

        if (Array.isArray(groupChildren)) {
          const contentCtx = groupChildren?.filter?.(
            (v) => !['t-dropdown-item', 't-dropdown-menu'].includes(v.nodeName),
          )
          const childrenCtx = groupChildren?.filter?.((v) =>
            ['t-dropdown-item', 't-dropdown-menu'].includes(v.nodeName),
          )

          return {
            ...item.attributes,
            content: contentCtx || groupChildren,
            children: childrenCtx.length > 0 ? this.getOptionsFromChildren(groupChildren[1]) : null,
          }
        }
        return { ...item.attributes, content: groupChildren || contextRes, children: null }
      })
      .filter((v) => !!v.content)
  }

  generateDropdownOptions = (children: WeElement[], options: DropdownOption[]): DropdownOption[] => {
    if (options && options.length > 0) return options
    let dropdownMenuChild: any
    children.forEach((child: WeElement) => {
      if (!child) return
      if (child.nodeName === 't-dropdown-menu' && child.children) {
        dropdownMenuChild = child.children
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
    const renderContent = (
      <t-dropdown-menu css={props.css} {...props} options={this.options} onClick={this.handleMenuClick} />
    )
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
        destroyOnClose={true}
        visible={this.isPopupVisible}
        onVisibleChange={this.handleVisibleChange}
        {...popupParams}
      >
        {props.children?.[0]}
      </t-popup>
    )
  }
}
