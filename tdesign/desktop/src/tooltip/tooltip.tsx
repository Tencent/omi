import { h, tag, WeElement, OmiProps, createRef, classNames } from 'omi'
import { TdTooltipProps } from './type'
import css from './style/index'
import { StyledProps } from '../common'
import { TdClassNamePrefix } from '../utils'
import { PopupVisibleChangeContext } from '../popup'

export interface TooltipProps extends TdTooltipProps, StyledProps {}

@tag('t-tooltip')
export default class Tooltip extends WeElement<TooltipProps> {
  static css = css as string
  static defaultProps = { destroyOnClose: true, placement: 'top', showArrow: true, theme: 'default', duration: 0 }
  static propTypes = {
    delay: Number,
    destroyOnClose: Boolean,
    duration: Number,
    placement: String,
    showArrow: Boolean,
    theme: String,
    //popup props
    attach: Object,
    content: Object,
    disabled: Boolean,
    hideEmptyPopup: Boolean,
    overlayClassName: [String, Array],
    overlayInnerClassName: [String, Array],
    overlayInnerStyle: [Object, Function],
    overlayStyle: [Object, Function],
    popperOptions: Object,
    trigger: String,
    triggerElement: Object,
    visible: Boolean,
    defaultVisible: Boolean,
    zIndex: Number,
    onScroll: Function,
    onScrollToBottom: Function,
    onVisibleChange: Function,
    expandAnimation: Boolean,
    updateScrollTop: Function,
  }

  componentName = TdClassNamePrefix('tooltip')
  timeUp = false
  popupRef = createRef()
  ref = createRef()
  timerRef = createRef<number>()
  popupVisible = false

  updateDuration = () => {
    const { duration } = this.props
    const { timeUp } = this
    if (duration !== 0 && !timeUp && this.timerRef.current === undefined) {
      this.popupRef.current?.setVisible?.(true)
      this.timerRef.current = window.setTimeout(() => {
        this.popupRef.current?.setVisible?.(false)
        this.timeUp = true
        window.clearTimeout(this.timerRef.current)
        this.timerRef.current = undefined
      }, duration) as number
    }
  }

  handleVisibleChange(visible: boolean, { e, trigger }: PopupVisibleChangeContext) {
    this.timeUp = false
    this.props.onVisibleChange?.(visible, { e, trigger })
  }

  beforeUpdate(): void {
    this.updateDuration()
  }

  installed() {
    this.updateDuration()
  }

  setVisible = (visible: boolean) => {
    this.popupRef.current?.setVisible?.(visible)
  }

  render(props: OmiProps<TooltipProps>) {
    const { componentName, handleVisibleChange, popupVisible } = this
    const {
      theme,
      showArrow,
      destroyOnClose,
      overlayClassName,
      children,
      duration,
      placement,
      onVisibleChange,
      ref: parentRef,
      ...restProps
    } = props

    const toolTipClass = classNames(
      `${componentName}`,
      {
        [`${componentName}--${theme}`]: theme,
      },
      overlayClassName,
    )

    return (
      <t-popup
        css={css}
        ref={this.popupRef}
        // visible={popupVisible}
        destroyOnClose={destroyOnClose}
        showArrow={showArrow}
        overlayClassName={toolTipClass}
        onVisibleChange={(visible: boolean, context: PopupVisibleChangeContext) => {
          handleVisibleChange.bind(this)(visible, context)
        }}
        placement={placement}
        {...restProps}
      >
        {children}
      </t-popup>
    )
  }
}
