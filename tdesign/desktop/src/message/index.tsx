import { OmiProps, WeElement, h, tag, classNames } from 'omi'
import style from './style'
import { MessageProps, MessageThemeList } from './types'
import { TdClassNamePrefix } from '../utils/clsx'

const MessageClassNamePrefix = (className: string) => TdClassNamePrefix('message__') + className

@tag('t-message')
export default class Message extends WeElement<MessageProps> {
  static css = style

  static defaultProps = {
    closeBtn: true,
    duration: 3000,
    content: 'my message',
    icon: true,
    theme: 'info',
  }

  static propTypes = {
    className: String,
    style: String,
    closeBtn: Boolean,
    content: String,
    duration: Number,
    icon: Boolean,
    theme: String,
    onClose: Function,
    onCloseBtnClick: Function,
    onDurationEnd: Function,
  }

  getMessageTheme(theme: MessageThemeList) {
    return TdClassNamePrefix(`is-${theme || 'success'}`)
  }

  onCloseBtnClick = () => {
    this.parentElement.removeChild(this)
  }

  render(props: OmiProps<MessageProps, any>, store: any) {
    const { theme, className, style, icon, content, closeBtn } = props

    const t = theme || 'success'
    return (
      <>
        <div
          style={style}
          class={classNames(
            TdClassNamePrefix('reset'),
            TdClassNamePrefix('message'),
            TdClassNamePrefix('is-closable'),
            this.getMessageTheme(theme),
            className,
          )}
        >
          {/*图标  */}
          <svg
            fill="none"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            class={classNames(TdClassNamePrefix('icon'), TdClassNamePrefix('icon-check-circle-filled'))}
          >
            <path
              fill="currentColor"
              d="M12 23a11 11 0 100-22 11 11 0 000 22zM11 8.5v-2h2v2h-2zm2 1.5v7.5h-2V10h2z"
            ></path>
          </svg>

          {/* 文字内容 */}
          {content && <div class={MessageClassNamePrefix('content')}>{content}</div>}

          {/* 关闭按钮 */}
          {closeBtn && (
            <svg
              onClick={this.onCloseBtnClick}
              fill="none"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              class={classNames(
                TdClassNamePrefix('icon'),
                TdClassNamePrefix('icon-close'),
                TdClassNamePrefix('message__close'),
              )}
            >
              <path
                fill="currentColor"
                d="M7.05 5.64L12 10.59l4.95-4.95 1.41 1.41L13.41 12l4.95 4.95-1.41 1.41L12 13.41l-4.95 4.95-1.41-1.41L10.59 12 5.64 7.05l1.41-1.41z"
              ></path>
            </svg>
          )}
        </div>
      </>
    )
  }
}
