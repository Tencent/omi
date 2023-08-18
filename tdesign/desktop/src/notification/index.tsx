import { OmiProps, WeElement, h, tag, classNames } from 'omi'
import style from './style'
import { NotificationProps, NotificationThemeList } from './types';
import { TdClassNamePefix } from '../utils/clsx';

const NotificationClassNamePefix = (className: string) => TdClassNamePefix('notification__') + className;


@tag('t-notification')

export default class Notification extends WeElement<NotificationProps>{
  static css = style

  static defaultProps = {
    duration: 3000,
    closeBtn: true,
    title: 'Notification',
    content: 'My Notification Component',
    icon: true,
    theme: 'info'
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
    return TdClassNamePefix(`is-${theme || 'success'}`)
  }

  onCloseBtnClick = () => {
    this.parentElement.removeChild(this)
  }
  

  render(props: OmiProps<NotificationProps, any>, store: any)  {
    const { theme, className, style, title,  icon, content } = props;

    const t = theme || 'success'
    return (
      <>
        <div
          style={style}
          class={
            classNames(
              TdClassNamePefix('reset'),
              TdClassNamePefix('notification'),
              TdClassNamePefix(`notification-${t}`),
              className
            )
          }
          onClick={this.onCloseBtnClick}>

           {/*图标  */}
          <div class={
            classNames(
              TdClassNamePefix('notification__icon'),
            )}>
            <svg fill="none" viewBox="0 0 24 24" width="1em" height="1em" class={
            classNames(
              TdClassNamePefix('icon'),
              TdClassNamePefix('icon-check-circle-filled'),
              this.getNotificationTheme(theme),

            )}><path fill="currentColor" d="M12 23a11 11 0 100-22 11 11 0 000 22zM11 8.5v-2h2v2h-2zm2 1.5v7.5h-2V10h2z"></path></svg>
          </div>
        
        
          {/* 文字内容 */}
          {/* {
            content && (
              <div class={NotificationClassNamePefix('content')}>{content}</div>
            )
          } */}
          <div class={
            classNames(
              TdClassNamePefix('notification__main'),
            )}>
            <div class={
            classNames(
              TdClassNamePefix('notification__title__wrap'),
            )}>
              {
                title && (
                  <span class={
                    classNames(
                      TdClassNamePefix('notification__title'),
                    )}>{title}</span>
                )
              }
             
              <div class={
              classNames(
                TdClassNamePefix('notification-close'),
              )}></div>
            </div>
            {
              content && (
                <div class={
                classNames(
                  TdClassNamePefix('notification__content'),
                )}>{content}</div>
              )
            }
          </div>

        </div>
      </>
    )


  }
}
