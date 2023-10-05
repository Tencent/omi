import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chat-bubble-help')
export default class ChatBubbleHelp extends WeElement<IconProps> {
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
          d="M12 3C7.02944 3 3 7.02944 3 12C3 14.3966 3.93542 16.5725 5.46305 18.1862L5.96701 18.7185L4.69951 21H12C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23H1.30049L3.51936 19.006C1.94632 17.1038 1 14.6615 1 12ZM12.0002 7.5C11.1309 7.5 10.3888 8.0551 10.1137 8.83325L9.78049 9.77609L7.89481 9.10959L8.22806 8.16675C8.7767 6.61451 10.257 5.5 12.0002 5.5C14.2093 5.5 16.0002 7.29086 16.0002 9.5C16.0002 10.7759 15.4017 11.9125 14.4742 12.6433C14.0426 12.9834 13.6572 13.3088 13.3783 13.6519C13.1037 13.9896 13.0002 14.262 13.0002 14.5V15.75H11.0002V14.5C11.0002 13.6334 11.3904 12.9265 11.8265 12.3902C12.2582 11.8592 12.8004 11.4159 13.2364 11.0723C13.7034 10.7045 14.0002 10.1372 14.0002 9.5C14.0002 8.39543 13.1048 7.5 12.0002 7.5ZM11 16.75H13.0039V18.7539H11V16.75Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
