import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chat-bubble-smile')
export default class ChatBubbleSmile extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '1em',
    style: { fill: '#000' },
  }

  static propTypes = {
    size: [String, Number],
    onClick: Function,
    style: Object,
    class: String,
  }

  render(props: OmiProps<IconProps>) {
    const classPrefix = 't'
    const iconClassName = classNames(TdClassNamePrefix('icon'), props.class, {
      [`${TdClassNamePrefix('size-s')}`]: props.size === 'small',
      [`${TdClassNamePrefix('size-m')}`]: props.size === 'medium',
      [`${TdClassNamePrefix('size-l')}`]: props.size === 'large',
    })
    const flag = props.size === 'small' || props.size === 'medium' || props.size === 'large'
    const iconStyle = {
      ...props.style,
      fontSize: props.size,
    }
    return (
      <svg
        class={iconClassName}
        width={flag ? '24' : props.size}
        height={flag ? '24' : props.size}
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.33269 13.5996L7.93231 12.6832L6.09961 13.484L6.49998 14.4003C7.42493 16.5173 9.53835 18 12.0003 18C14.4622 18 16.5756 16.5173 17.5006 14.4003L17.901 13.484L16.0683 12.6832L15.6679 13.5996C15.0497 15.0144 13.639 16 12.0003 16C10.3616 16 8.95085 15.0144 8.33269 13.5996Z"
          fill="currentColor"
        />
        <path
          d="M12 1C5.92487 1 1 5.92487 1 12C1 14.6615 1.94632 17.1038 3.51936 19.006L1.30049 23H12C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21H4.69951L5.96701 18.7185L5.46305 18.1862C3.93542 16.5725 3 14.3966 3 12Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
