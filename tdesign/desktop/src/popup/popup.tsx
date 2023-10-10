import { h, tag, createRef, WeElement, OmiProps, classNames, getHost } from 'omi'
import { TdPopupProps, PopupVisibleChangeContext } from './type'
import debounce from 'lodash/debounce'
import css from './style/index'
import { createPopper, Placement } from '@popperjs/core'
import { attachListeners, getPopperPlacement, triggers } from './utils'
import { getIEVersion } from '../utils/helper'
import '@omiu/transition'
import { StyledProps } from '../common'
export interface PopupProps extends TdPopupProps, StyledProps {}
const injectionKey = '__T_POPUP'
// 默认动画时长
const DEFAULT_TRANSITION_TIMEOUT = 180

@tag('t-trigger')
export class Trigger extends WeElement {
  render(props: any) {
    return props.children
  }
}

@tag('t-overlay')
export class Overlay extends WeElement {
  render(props: any) {
    return <div>{props.children}</div>
  }
}

@tag('t-popup')
export default class Popup extends WeElement<
  PopupProps & {
    expandAnimation?: boolean
    updateScrollTop?: (content: HTMLElement) => void
  }
> {
  static tagStyle = `
    t-trigger::part(pop-tag) {
      vertical-align: middle;
      -webkit-animation: t-fade-in .2s ease-in-out;
      animation: t-fade-in .2s ease-in-out;
      margin: 3px var(--td-comp-margin-xs) 3px 0;
    }
  `
  static css = css + Popup.tagStyle

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
  popper = null as any
  timeout = null as any
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

  getVisible = () => {
    // controlled
    if (this.props.visible != undefined) return this.props.visible
    return this.visible
  }

  handlePopVisible = (visible: boolean, context: PopupVisibleChangeContext) => {
    if (this.props.disabled || visible === !!this.visible) return
    this.visible = visible
    this.handleDocumentEvent(visible)
    if (typeof this.props.onVisibleChange === 'function') {
      this.props.onVisibleChange(visible, context)
    }
    this.update()
  }

  handleOpen = (context: Pick<PopupVisibleChangeContext, 'trigger'>) => {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(
      () => {
        this.handlePopVisible(true, context)
      },
      this.hasTrigger().click ? 0 : this.normalizedDelay().open,
    )
  }

  handleClose = (context: Pick<PopupVisibleChangeContext, 'trigger'>) => {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(
      () => {
        this.handlePopVisible(false, context)
      },
      this.hasTrigger().click ? 0 : this.normalizedDelay().close,
    )
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
      this.handlePopVisible(false, { trigger: 'document', e: ev })
    })
  }

  //when visible is changed
  handleDocumentEvent = (visible: boolean) => {
    if (visible) {
      if (!this.hasDocumentEvent) {
        document.addEventListener('mousedown', this.handleDocumentClick, true)
        this.hasDocumentEvent = true
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
  }

  handleToggle = (context: PopupVisibleChangeContext) => {
    const visible = !this.visible
    if (!visible) return
    this.handlePopVisible(visible, context)
  }

  handleScroll(e: WheelEvent) {
    this.props.onScroll?.({ e })
    const debounceOnScrollBottom = debounce((e) => this.props.onScrollToBottom?.({ e }), 100)
    const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLDivElement
    if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
      debounceOnScrollBottom(e)
    }
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
      strategy: 'fixed',
    })
  }
  setVisible = (visible: boolean) => {
    const { handlePopVisible } = this
    handlePopVisible(visible, { trigger: 'document' })
  }

  beforeUpdate() {
    //deal visible
    if (this.getVisible()) {
      if (this.popperRef.current) {
        const el = this.popperRef.current as HTMLElement
        el.style.display = 'block'
      }
      this.updatePopper()
    } else {
      if (this.popperRef.current) {
        const el = this.popperRef.current as HTMLElement
        el.style.display = 'none'
      }
    }
  }

  handleBeforeEnter = () => {
    this.updatePopper()
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

    return (
      <t-container>
        <t-trigger ref={this.triggerRef} part="trigger">
          {props.triggerElement ? props.triggerElement : props.children}
        </t-trigger>
        <o-transition
          appear
          name={props.expandAnimation ? `${componentName}--animation-expand` : `${componentName}--animation`}
          onBeforeEnter={this.handleBeforeEnter}
        >
          {this.getVisible() || !props.destroyOnClose ? (
            <div
              class={popperClasses}
              style={{ zIndex: props.zIndex, ...this.getOverlayStyle(props.overlayStyle) }}
              ref={this.popperRef}
              onMouseDown={() => (this.contentClicked = true)}
            >
              {/*  || this.popperRef.current */}
              {(this.getVisible() || this.popperRef.current) && (
                <div
                  class={overlayClasses}
                  style={{ ...this.getOverlayStyle(props.overlayInnerStyle) }}
                  onScroll={this.handleScroll}
                >
                  {props.content}
                  {props.showArrow ? <div class={`${componentName}__arrow`} /> : null}
                </div>
              )}
            </div>
          ) : null}
        </o-transition>
      </t-container>
    )
  }
}
