import { OmiProps, WeElement, h, tag, classNames } from 'omi'
import style from './style'
import { AlertProps } from './types'
import { TdClassNamePrefix } from '../utils/clsx'
import { isArray } from 'lodash'
import { TNode } from '@src/common'

const AlertClassNamePrefix = (className: string) => TdClassNamePrefix('alert__') + className

@tag('t-alert')
export default class Alert extends WeElement {
  static propTypes = {
    className: String,
    style: String,
    close: WeElement,
    icon: WeElement,
    // maxLine: Number,
    // message: WeElement,
    // 这里填写后不能获取props 怎么办？
    // operation: WeElement,
    theme: String,
    title: String,
    // onClose: Function,
    // onClosed: Function
  }

  static css = style

  collapse = false

  renderMessage(message: string | string[] | TNode) {
    return (maxLine: number) => {
      if (!isArray(message)) return message
      const len = message.length - 1
      return message.filter((_v, idx) => (!this.collapse ? idx < maxLine : idx <= len)).map((msg) => <div>{msg}</div>)
    }
  }

  handleCollapse = () => {
    this.collapse = !this.collapse
    this.update()
  }

  handleClose() {
    const { onClose, onClosed } = this.props as AlertProps
    this.remove()
    onClose()

    setTimeout(() => {
      onClosed()
    }, 10)
  }

  render(props: OmiProps<AlertProps, any>, store: any) {
    const { theme, message, className, style, operation, icon, close, title, maxLine } = props

    const t = theme || 'info'

    return (
      <>
        <div style={style} class={classNames(TdClassNamePrefix('alert'), TdClassNamePrefix(`alert--${t}`), className)}>
          <div class={TdClassNamePrefix('alert__icon')}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              class={classNames(TdClassNamePrefix('icon'), TdClassNamePrefix('icon-check-circle-filled'))}
            >
              <path
                fill="currentColor"
                d="M12 23a11 11 0 100-22 11 11 0 000 22zM7.5 10.59l3 3 6-6L17.91 9l-7.41 7.41L6.09 12l1.41-1.41z"
              ></path>
            </svg>
          </div>

          <div class={AlertClassNamePrefix('content')}>
            {title && <div class={AlertClassNamePrefix('title')}>{title}</div>}
            <div class={AlertClassNamePrefix('message')}>
              <div class={AlertClassNamePrefix('description')}>
                {this.renderMessage(message)(maxLine as number)}

                {message instanceof Array && maxLine && (
                  <div class={AlertClassNamePrefix('collapse')} onClick={this.handleCollapse}>
                    {this.collapse ? '展开' : '收起'}
                  </div>
                )}
              </div>

              {operation && <div class={AlertClassNamePrefix('operation')}>{operation}</div>}
            </div>
          </div>

          {close && (
            <div onClick={this.handleClose.bind(this)} class={AlertClassNamePrefix('close')}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                class={classNames(TdClassNamePrefix('icon'), TdClassNamePrefix('icon-close'))}
              >
                <path
                  fill="currentColor"
                  d="M7.05 5.64L12 10.59l4.95-4.95 1.41 1.41L13.41 12l4.95 4.95-1.41 1.41L12 13.41l-4.95 4.95-1.41-1.41L10.59 12 5.64 7.05l1.41-1.41z"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </>
    )
  }
}
