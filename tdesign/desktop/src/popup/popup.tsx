import { h, tag, createRef, WeElement, OmiProps, classNames } from 'omi'
import { PopupProps, PopupVisibleChangeContext } from './type'
import isFunction from 'lodash/isFunction'
import setStyle from '../_common/js/utils/set-style'
import debounce from 'lodash/debounce'
import css from './style/index'
import { createPopper, Placement } from '@popperjs/core'
import { TNode } from '@src/common'
import { attachListeners, getPopperPlacement, triggers } from './utils'
import { getIEVersion } from '../utils/helper'
import '@omiu/transition'

const injectionKey = '__T_POPUP'
// 默认动画时长
const DEFAULT_TRANSITION_TIMEOUT = 180

@tag('t-trigger')
export class Trigger extends WeElement {
  render(props) {
    return props.children
  }
}

@tag('t-overlay')
export class Overlay extends WeElement {
  render(props) {
    return <div>{props.children}</div>
  }
}
/**
 * TODO: destroyOnClose
 */

@tag('t-popup')
export default class Popup extends WeElement<
  PopupProps & {
    expandAnimation?: boolean
    updateScrollTop?: (content: HTMLElement) => void
  }
> {
  static css = css as string

  static defaultProps = {
    attach: 'body',
    destroyOnClose: false,
    hideEmptyPopup: false,
    placement: 'top',
    showArrow: true,
    trigger: 'hover',
  }

  static propTypes = {
    attach: Object,
    content: Object,
    delay: [Number, Array],
    destroyOnClose: Boolean,
    disabled: Boolean,
    hideEmptyPopup: Boolean,
    overlayClassName: [String, Array],
    overlayInnerClassName: [String, Array],
    overlayInnerStyle: [Object, Function],
    overlayStyle: [Object, Function],
    placement: String,
    popperOptions: Object,
    showArrow: Boolean,
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

  triggerRef = createRef()
  popperRef = createRef()
  popper = null
  timeout = null
  /** if a trusted action (opening or closing) is prevented, increase this flag */
  visibleState = 0
  contentClicked = false
  hasDocumentEvent = false
  visible = false
  //   watch visible TODO:

  hasTrigger = () => {
    return triggers.reduce(
      (map, trigger) => ({
        ...map,
        [trigger]: this.props.trigger.includes(trigger),
      }),
      {} as any,
    )
  }
  normalizedDelay = () => {
    const delay = [].concat(this.props.delay ?? [250, 150])
    return {
      open: delay[0],
      close: delay[1] ?? delay[0],
    }
  }

  emitPopVisible = (visible: boolean, context: PopupVisibleChangeContext) => {
    if (this.props.disabled || visible === !!this.visible) return
    if (!visible && this.visibleState > 1) return
    this.visible = visible
    this.fire('visible-change', { visible, context })
    if (typeof this.props.onVisibleChange === 'function') {
      this.props.onVisibleChange(visible, context)
    }
  }

  handleOpen = (context: Pick<PopupVisibleChangeContext, 'trigger'>) => {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(
      () => {
        this.emitPopVisible(true, context)
      },
      this.hasTrigger().click ? 0 : this.normalizedDelay().open,
    )
    if (!this.props.destroyOnClose && this.popperRef.current) {
      const el = this.popperRef.current as HTMLElement
      el.style.display = 'block'
    }
    this.update()
    this.updateVisible(true)
    this.updatePopper()
  }

  handleClose = (context: Pick<PopupVisibleChangeContext, 'trigger'>) => {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(
      () => {
        this.emitPopVisible(false, context)
      },
      this.hasTrigger().click ? 0 : this.normalizedDelay().close,
    )
    if (!this.props.destroyOnClose && this.popperRef.current) {
      const el = this.popperRef.current as HTMLElement
      el.style.display = 'none'
    }
    this.update()
    this.updateVisible(false)
    // this.updatePopper()
  }

  handleDocumentClick = (ev?: MouseEvent) => {
    setTimeout(() => {
      if (this.contentClicked) {
        setTimeout(() => {
          this.contentClicked = false
        })
        return
      }
      const triggerEl = this.triggerRef.current as HTMLElement
      if (triggerEl.contains(ev.target as Node)) return
      const popperEl = this.popperRef.current as HTMLElement
      if (popperEl?.contains(ev.target as Node)) return
      this.visibleState = 0
      this.emitPopVisible(false, { trigger: 'document', e: ev })
      if (!this.props.destroyOnClose && this.popperRef.current) {
        const el = this.popperRef.current as HTMLElement
        el.style.display = 'none'
      }
      this.update()
      this.updateVisible(false)
    })
  }

  //when visible is changed
  updateVisible = (visible: boolean) => {
    if (visible) {
      if (!this.hasDocumentEvent) {
        document.addEventListener('mousedown', this.handleDocumentClick, true)
        this.hasDocumentEvent = true
      }
      //focus trigger esc
      if (this.triggerRef.current && this.hasTrigger().focus) {
        // once keydown
      }
    } else {
      document.removeEventListener('mousedown', this.handleDocumentClick, true)
      this.hasDocumentEvent = false
    }
  }

  updateTrigger = () => {
    const trigger = attachListeners(this.rootNode)
    trigger.clean()
    const hasTrigger = this.hasTrigger()
    if (hasTrigger.hover) {
      trigger.add('mouseenter', () => {
        this.handleOpen({ trigger: 'trigger-element-hover' })
      })
      trigger.add('mouseleave', () => {
        this.handleClose({ trigger: 'trigger-element-hover' })
      })
    } else if (hasTrigger.focus) {
      trigger.add('focusin', () => this.handleOpen({ trigger: 'trigger-element-focus' }))
      trigger.add('focusout', () => this.handleClose({ trigger: 'trigger-element-blur' }))
    } else if (hasTrigger.click) {
      trigger.add('click', (e: MouseEvent) => {
        this.handleOpen({ trigger: 'trigger-element-click' })
        if (getIEVersion() < 11) {
          this.handleDocumentClick(e)
        }
      })
    } else if (hasTrigger['context-menu']) {
      trigger.add('contextmenu', (e: MouseEvent) => {
        e.preventDefault()
        e.button === 2 && this.handleToggle({ trigger: 'context-menu' })
      })
    }
  }

  installed() {
    this.updatePopper()
    this.updateTrigger()
    this.visible = this.props.visible
    // TODO: watch trigger
  }

  //   update() {
  //     // this.updateTrigger()
  //     this.updatePopper()
  //   }
  handleToggle = (context: PopupVisibleChangeContext) => {
    const visible = !this.visible
    this.updateVisible(visible)
    if (!visible) return
    this.emitPopVisible(visible, context)
    if (visible) {
      if (!this.props.destroyOnClose && this.popperRef.current) {
        const el = this.popperRef.current as HTMLElement
        el.style.display = 'block'
      }
      this.updatePopper()
    }
    this.update()
  }
  getOverlayStyle(overlayStyle: PopupProps['overlayStyle']) {
    if (this.triggerRef.current && this.popperRef.current && typeof overlayStyle === 'function') {
      return { ...overlayStyle(this.triggerRef.current as HTMLElement, this.popperRef.current as HTMLElement) }
    }
    return { ...overlayStyle }
  }

  updatePopper = () => {
    this.popper = createPopper(this.triggerRef.current as HTMLElement, this.popperRef.current as HTMLElement, {
      placement: getPopperPlacement(this.props.placement as PopupProps['placement']),
      //   onFirstUpdate: () => {
      //     // setTimeout(() => {
      //     //   this.updatePopper()
      //     // }, 1000)
      //     //
      //     //   console.log('updatePopper')
      //   },
      ...this.props.popperOptions,
    })
  }

  render(
    props: OmiProps<
      PopupProps & {
        expandAnimation?: boolean
        updateScrollTop?: (content: HTMLDivElement) => void
      }
    >,
  ) {
    const componentName = 't-popup'
    const popperClasses = classNames(componentName, props.overlayClassName)
    const overlayClasses = classNames(
      `${componentName}__content`,
      {
        [`${componentName}__content--arrow`]: props.showArrow,
        ['t-is-disabled']: props.disabled,
      },
      props.overlayInnerClassName,
    )

    // const overlay = h('div', { class: overlayClasses }, [props.content])
    // const showOverlay = () => {
    //   if (this.props.hideEmptyPopup && !this.props.content) return false
    //   return this.visible || this.popperRef.current
    // }
    return (
      <t-container>
        <t-trigger ref={this.triggerRef}>{props.children}</t-trigger>
        <o-transition
          appear="true"
          delay={DEFAULT_TRANSITION_TIMEOUT}
          autoRemove={props.destroyOnClose}
          name={props.expandAnimation ? `${componentName}--animation-expand` : `${componentName}--animation`}
        >
          <div
            class={popperClasses}
            style={{ zIndex: props.zIndex, ...this.getOverlayStyle(props.overlayStyle) }}
            ref={this.popperRef}
            onMouseDown={() => (this.contentClicked = true)}
          >
            {/*  || this.popperRef.current */}
            {(this.visible || this.popperRef.current) && (
              <div class={overlayClasses} style={{ ...this.getOverlayStyle(props.overlayInnerStyle) }}>
                {props.content}
                {props.showArrow ? <div class={`${componentName}__arrow`} /> : null}
              </div>
            )}
          </div>
        </o-transition>
      </t-container>
    )
  }
}
