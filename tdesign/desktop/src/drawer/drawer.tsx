import { h, createRef, tag, WeElement, OmiProps, classNames } from 'omi'
import { TdDrawerProps, DrawerEventSource } from './type'
import css from './style/index'
import { TdClassNamePrefix } from '../../src/utils'
import { isObject } from 'lodash'
import '../icon/close'
import '../button'
import '@omiu/transition'
import { StyledProps } from '../common'
export interface DrawerProps extends TdDrawerProps, StyledProps {}

export const CloseTriggerType: { [key: string]: DrawerEventSource } = {
  CLICK_OVERLAY: 'overlay',
  CLICK_CLOSE_BTN: 'close-btn',
  CLICK_CANCEL_BTN: 'cancel',
  KEYDOWN_ESC: 'esc',
}
@tag('t-drawer')
export default class Drawer extends WeElement<DrawerProps> {
  static css = css as string

  static defaultProps = {
    closeOnEscKeydown: undefined as DrawerProps['closeOnEscKeydown'],
    closeOnOverlayClick: undefined as DrawerProps['closeOnOverlayClick'],
    destroyOnClose: false,
    closeBtn: true,
    footer: true,
    header: true,
    mode: 'overlay',
    placement: 'right',
    preventScrollThrough: true,
    showInAttachedElement: false,
    showOverlay: true,
    size: undefined as DrawerProps['size'],
    sizeDraggable: false,
    visible: false,
  }

  static propTypes = {
    attach: Object,
    body: Object,
    cancelBtn: Object,
    children: Object,
    closeBtn: [Boolean, Object],
    closeOnEscKeydown: Boolean,
    closeOnOverlayClick: Boolean,
    confirmBtn: Object,
    destroyOnClose: Boolean,
    footer: [Object, Boolean],
    header: Object,
    mode: String,
    placement: String,
    preventScrollThrough: Boolean,
    showInAttachedElement: Boolean,
    showOverlay: Boolean,
    size: String,
    sizeDraggable: Boolean,
    visible: Boolean,
    zIndex: Number,
    onCancel: Function,
    onClose: Function,
    onCloseBtnClick: Function,
    onConfirm: Function,
    onEseKeydown: Function,
    onOverlayClick: Function,
  }
  //TODO: remain 国际化
  size = 'small'
  confirmText = '确认'
  cancelText = '取消'
  componentName = TdClassNamePrefix('drawer')
  sizeMap = { small: '300px', medium: '500px', large: '760px' }
  maskRef = createRef()
  containerRef = createRef()
  drawerWrapperRef = createRef()
  drawerTransRef = createRef()
  animationStartUpdateFlag = true
  footerBtnCss = `
    .t-button {
      margin-left: var(--td-comp-margin-s) !important;
    }
  `

  dragSizeValue: string
  draggableLineStyles: Object
  contentWrapperStyle: Object
  animationStart = false
  sizeValue: any

  handleMousemove = (e: MouseEvent) => {
    const { sizeDraggable, placement } = this.props
    // 鼠标移动时计算draggedSizeValue的值
    const { x, y } = e
    if (sizeDraggable) {
      if (placement === 'right') {
        this.dragSizeValue = `${document.documentElement.clientWidth - x + 8}px`
      }
      if (placement === 'left') {
        this.dragSizeValue = `${x + 8}px`
      }
      if (placement === 'top') {
        this.dragSizeValue = `${y + 8}px`
      }
      if (placement === 'bottom') {
        this.dragSizeValue = `${document.documentElement.clientHeight - y + 8}px`
      }
    }
    this.update()
  }

  handleMouseup = () => {
    document.removeEventListener('mouseup', this.handleMouseup, true)
    document.removeEventListener('mousemove', this.handleMousemove, true)
  }
  enableDrag = () => {
    // mousedown绑定mousemove和mouseup事件
    document.addEventListener('mouseup', this.handleMouseup, true)
    document.addEventListener('mousemove', this.handleMousemove, true)
  }
  setSizeValue = () => {
    const size = this.props.size ?? this.size
    const { dragSizeValue, sizeMap } = this
    this.sizeValue = dragSizeValue || sizeMap[size] || size
  }
  setDraggableLineStyles = () => {
    const { placement } = this.props
    const isHorizontal = ['right', 'left'].includes(placement)
    const oppositeMap = {
      left: 'right',
      right: 'left',
      top: 'bottom',
      bottom: 'top',
    }
    this.draggableLineStyles = {
      zIndex: 1,
      position: 'absolute',
      background: 'transparent',
      [oppositeMap[placement]]: 0,
      width: isHorizontal ? '16px' : '100%',
      height: isHorizontal ? '100%' : '16px',
      cursor: isHorizontal ? 'col-resize' : 'row-resize',
    }
  }

  updateAnimationStart = (value: boolean) => {
    if (value === true && this.animationStartUpdateFlag === true) {
      this.animationStart = value
      this.animationStartUpdateFlag = false
      this.update()
    } else if (value === false && this.animationStartUpdateFlag === false) {
      this.animationStart = value
      this.animationStartUpdateFlag = true
      this.update()
    }
  }
  setContentWrapperStyle = () => {
    const { visible, placement } = this.props
    const { animationStart, sizeValue } = this
    this.contentWrapperStyle = {
      transform: visible && animationStart ? 'translateX(0)' : '',
      width: ['left', 'right'].includes(placement) ? sizeValue : '',
      height: ['top', 'bottom'].includes(placement) ? sizeValue : '',
    }
  }

  onMaskClick = (e: MouseEvent) => {
    const { onOverlayClick, onClose, closeOnOverlayClick } = this.props
    const flag = closeOnOverlayClick ?? true
    onOverlayClick?.({ e })
    flag && onClose?.({ e, trigger: CloseTriggerType.CLICK_OVERLAY })
  }
  onClickCloseBtn = (e: MouseEvent) => {
    const { onCloseBtnClick, onClose } = this.props
    this.updateProps({ visible: false }) // 触发onAfterLeave
    onCloseBtnClick?.({ e })
    onClose?.({ e, trigger: CloseTriggerType.CLICK_CLOSE_BTN })
  }
  onKeyDownEsc = (e: KeyboardEvent) => {
    const { onEscKeydown, closeOnEscKeydown, onClose } = this.props
    if (e.key !== 'Escape') return

    onEscKeydown?.({ e })
    closeOnEscKeydown && onClose?.({ e, trigger: CloseTriggerType.KEYDOWN_ESC })
  }
  onCancelClick = (e: MouseEvent) => {
    const { onCancel, onClose } = this.props
    onCancel?.({ e })
    onClose?.({ e, trigger: CloseTriggerType.CLICK_CANCEL_BTN })
  }
  onConfirmClick = (e: MouseEvent) => {
    const { onConfirm } = this.props
    onConfirm?.({ e })
  }

  beforeUpdate() {
    console.log('update drawer')
    this.setSizeValue()
    this.setDraggableLineStyles()
    this.setContentWrapperStyle()
  }

  installed() {
    this.setSizeValue()
    this.setDraggableLineStyles()
    this.setContentWrapperStyle()
  }
  render(props: OmiProps<DrawerProps>) {
    const {
      closeBtn,
      footer,
      body,
      children,
      cancelBtn,
      confirmBtn,
      placement,
      showOverlay,
      visible,
      header,
      attach,
      destroyOnClose,
      sizeDraggable,
      showInAttachedElement,
      zIndex,
    } = props
    const {
      componentName,
      cancelText,
      confirmText,
      contentWrapperStyle,
      draggableLineStyles,
      enableDrag,
      onConfirmClick,
      onCancelClick,
      onClickCloseBtn,
      onMaskClick,
      updateAnimationStart,
      onKeyDownEsc,
      drawerWrapperRef,
      containerRef,
      maskRef,
    } = this
    const closeIcon = isObject(closeBtn) ? closeBtn : <t-icon-close></t-icon-close>

    const getFooter = () => {
      if (footer !== true) return footer

      const defaultCancelBtn = (
        <t-button theme="default" onClick={onCancelClick} class={`${componentName}__cancel`} css={this.footerBtnCss}>
          {cancelBtn && typeof cancelBtn === 'string' ? cancelBtn : cancelText}
        </t-button>
      )

      const defaultConfirmBtn = (
        <t-button theme="primary" onClick={onConfirmClick} class={`${componentName}__confirm`} css={this.footerBtnCss}>
          {confirmBtn && typeof confirmBtn === 'string' ? confirmBtn : confirmText}
        </t-button>
      )

      const renderCancelBtn = cancelBtn && isObject(cancelBtn) ? cancelBtn : defaultCancelBtn
      const renderConfirmBtn = confirmBtn && isObject(confirmBtn) ? confirmBtn : defaultConfirmBtn

      const footerStyle = {
        display: 'flex',
        justifyContent: placement === 'right' ? 'flex-start' : 'flex-end',
      }

      return (
        <div style={footerStyle}>
          {placement === 'right' && renderConfirmBtn}
          {renderCancelBtn}
          {placement !== 'right' && renderConfirmBtn}
        </div>
      )
    }

    const renderOverlay = showOverlay && (
      <o-transition
        appear={visible}
        disappear={!visible}
        delay={200}
        // name={`${componentName}-fade`} // TODO 闪现bug问题
      >
        <div
          ref={maskRef}
          class={`${componentName}__mask`}
          onClick={onMaskClick}
          style={visible ? { opacity: 1, width: '100%', height: '100%' } : null}
        />
      </o-transition>
    )
    const renderCloseBtn = closeBtn && (
      <div onClick={onClickCloseBtn} class={`${componentName}__close-btn`}>
        {closeIcon}
      </div>
    )
    const renderHeader = header && <div class={`${componentName}__header`}>{header}</div>
    const renderBody = <div class={`${componentName}__body`}>{body || children}</div>
    const renderFooter = footer && <div class={`${componentName}__footer`}>{getFooter()}</div>

    console.log('contentWrapperStyle: ', contentWrapperStyle)
    return (
      <o-transition
        ref={this.drawerTransRef}
        appear={visible}
        disappear={!visible}
        autoRemove={destroyOnClose}
        // delay={{ appear: 10, enter: 10, exit: 300 }}
        delay={!visible ? 300 : 10}
        onAfterEnter={() => {
          console.log('onAfterEnter'), updateAnimationStart(true)
        }}
        onAfterLeave={() => {
          console.log('onAfterLeave'), updateAnimationStart(false)
        }}
      >
        <div ref={drawerWrapperRef}>
          <div
            ref={containerRef}
            class={classNames(componentName, props.class, `${componentName}--${placement}`, {
              [`${componentName}--open`]: visible,
              [`${componentName}--attach`]: showInAttachedElement,
              [`${componentName}--without-mask`]: !showOverlay,
            })}
            style={{ zIndex, ...props.style }}
            tabIndex={-1} // https://stackoverflow.com/questions/43503964/onkeydown-event-not-working-on-divs-in-react
            onKeyDown={onKeyDownEsc}
          >
            {renderOverlay}
            <div
              class={classNames(`${componentName}__content-wrapper`, `${componentName}__content-wrapper--${placement}`)}
              style={contentWrapperStyle}
            >
              {renderCloseBtn}
              {renderHeader}
              {renderBody}
              {renderFooter}
              {sizeDraggable && <div style={draggableLineStyles} onMouseDown={enableDrag}></div>}
            </div>
          </div>
        </div>
      </o-transition>
    )
  }
}
