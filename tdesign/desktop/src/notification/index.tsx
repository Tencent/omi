import { OmiProps, WeElement, h, tag, classNames } from 'omi'
import style from './style'
import { NotificationProps, NotificationThemeList } from './types'
import { TdClassNamePrefix } from '../utils'

const NotificationClassNamePrefix = (className: string) => TdClassNamePrefix('notification__') + className

@tag('t-notification')
export default class Notification extends WeElement<NotificationProps> {
  static css = style

  static defaultProps = {
    duration: 3000,
    closeBtn: true,
    title: 'Notification',
    content: 'My Notification Component',
    icon: true,
    theme: 'info',
  }

  static propTypes = {
    className: String,
    style: String,
    children: String,
    closeBtn: Boolean,
    content: String,
    duration: Number,
    footer: String,
    icon: Boolean,
    title: String,
    theme: String,
    onCloseBtnClick: Function,
    onDurationEnd: Function,
  }

  getNotificationTheme(theme: NotificationThemeList) {
    return TdClassNamePrefix(`is-${theme || 'success'}`)
  }

  onCloseBtnClick = () => {
    this.parentElement.removeChild(this)
  }

  render(props: OmiProps<NotificationProps, any>, store: any) {
    const { theme, className, style, title, icon, content } = props

    const t = theme || 'success'
    return (
      <>
        <div
          style={style}
          class={classNames(
            TdClassNamePrefix('reset'),
            TdClassNamePrefix('notification'),
            TdClassNamePrefix(`notification-${t}`),
            className,
          )}
          onClick={this.onCloseBtnClick}
        >
          {/*图标  */}
          <div class={classNames(TdClassNamePrefix('notification__icon'))}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              class={classNames(
                TdClassNamePrefix('icon'),
                TdClassNamePrefix('icon-check-circle-filled'),
                this.getNotificationTheme(theme),
              )}
            >
              <path
                fill="currentColor"
                d="M12 23a11 11 0 100-22 11 11 0 000 22zM11 8.5v-2h2v2h-2zm2 1.5v7.5h-2V10h2z"
              ></path>
            </svg>
          </div>

          {/* 文字内容 */}
          {/* {
            content && (
              <div class={NotificationClassNamePrefix('content')}>{content}</div>
            )
          } */}
          <div class={classNames(TdClassNamePrefix('notification__main'))}>
            <div class={classNames(TdClassNamePrefix('notification__title__wrap'))}>
              {title && <span class={classNames(TdClassNamePrefix('notification__title'))}>{title}</span>}

              <div class={classNames(TdClassNamePrefix('notification-close'))}></div>
            </div>
            {content && <div class={classNames(TdClassNamePrefix('notification__content'))}>{content}</div>}
          </div>
        </div>
      </>
    )
  }
}
