import { h, tag, WeElement, OmiProps, createRef, classNames } from 'omi'
import { TdAlertProps } from './type'
import { StyledProps } from '../common'
import css from './style/index'
import '../icon/close'
import '../icon/info-circle-filled'
import '../icon/check-circle-filled'
import '../icon/error-circle-filled'
import '@omiu/transition'
import { TdClassNamePrefix, parseTNode, noop } from '../utils'
import { isObject } from 'lodash'
export interface AlertProps extends TdAlertProps, StyledProps {}
@tag('t-alert')
export default class Alert extends WeElement<AlertProps> {
  static css = css as string

  static defaultProps = { close: false, maxLine: 0, theme: 'info' }

  static propTypes = {
    close: Object,
    icon: Object,
    maxLine: Number,
    message: Object,
    operation: Object,
    theme: String,
    title: Object,
    onClose: Function,
    onClosed: Function,
    class: String,
    style: Object,
  }

  componentName = TdClassNamePrefix('alert')
  transitionTime = 200
  closed = false
  collapsed = false
  expandText = '展开更多'
  collapseText = '收起'
  iconMap = {
    success: <t-icon-check-circle-filled />,
    info: <t-icon-info-circle-filled />,
    error: <t-icon-error-circle-filled />,
    warning: <t-icon-error-circle-filled />,
  }
  nodeRef = createRef()

  handleClose = (e: MouseEvent) => {
    this.closed = true
    this.props.onClose?.({ e })
    this.update()
    setTimeout(() => {
      this.remove()
    }, this.transitionTime)
  }

  handleCollapse = () => {
    console.log('handleCollapse')
    this.collapsed = !this.collapsed
    this.update()
  }

  render(props: OmiProps<AlertProps>) {
    const { componentName, handleClose, closed, nodeRef, transitionTime } = this
    const {
      message,
      title,
      operation,
      theme,
      icon,
      close,
      maxLine,
      onClose,
      class: className,
      onClosed,
      ...alertProps
    } = props

    const renderIconNode = () => {
      const { iconMap } = this
      //TODO: if icon is we element
      if (isObject(icon)) return icon
      return iconMap[theme] || iconMap.info
    }

    const renderMessage = () => {
      const { componentName, collapsed, handleCollapse, expandText, collapseText } = this

      if (+maxLine > 0 && Array.isArray(message)) {
        return (
          <div class={`${componentName}__description`}>
            {message.map((item, index) => {
              if (!collapsed) {
                if (index < maxLine) {
                  return <div key={index}>{item}</div>
                }
              } else {
                return <div key={index}>{item}</div>
              }
              return true
            })}
            {+maxLine > 0 ? (
              <div class={`${componentName}__collapse`} onClick={handleCollapse}>
                {!collapsed ? expandText : collapseText}
              </div>
            ) : null}
          </div>
        )
      }
      return <div class={`$${componentName}__description`}>{message}</div>
    }

    const renderClose = () => {
      return (
        <div class={`${componentName}__close`} onClick={handleClose}>
          {typeof close === 'boolean' ? <t-icon-close /> : parseTNode(close)}
        </div>
      )
    }

    return (
      <o-transition
        appear={!closed}
        disappear={closed}
        // name={`${componentName}--closing`}
        ref={nodeRef}
        delay={transitionTime}
        onAfterLeave={() => {
          onClosed?.()
        }}
      >
        <div
          class={classNames(
            componentName,
            `${componentName}--${theme}`,
            props.class,
            closed ? `${componentName}--closing` : '',
          )}
          {...alertProps}
        >
          <div class={`${componentName}__icon`}>{renderIconNode()}</div>
          <div class={`${componentName}__content`}>
            {title ? <div className={`${componentName}__title`}>{title}</div> : null}
            <div class={`${componentName}__message`}>
              {renderMessage()}
              {operation ? <div className={`${componentName}__operation`}>{parseTNode(operation)}</div> : null}
            </div>
          </div>
          {close ? renderClose() : null}
        </div>
      </o-transition>
    )
  }
}
