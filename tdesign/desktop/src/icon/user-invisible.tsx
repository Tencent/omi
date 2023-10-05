import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-user-invisible')
export default class UserInvisible extends WeElement<IconProps> {
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
          d="M11.5 2C8.46243 2 6 4.46243 6 7.5C6 10.5376 8.46243 13 11.5 13C14.5376 13 17 10.5376 17 7.5C17 4.46243 14.5376 2 11.5 2ZM8 7.5C8 5.567 9.567 4 11.5 4C13.433 4 15 5.567 15 7.5C15 9.433 13.433 11 11.5 11C9.567 11 8 9.433 8 7.5Z"
          fill="currentColor"
        />
        <path
          d="M4 20C4 17.7909 5.79086 16 8 16H11V14H8C4.68629 14 2 16.6863 2 20V22H11.05V20H4Z"
          fill="currentColor"
        />
        <path
          d="M23.5898 18C23.5898 18 21.9181 22.5 17.4998 22.5C16.528 22.5 15.6891 22.2823 14.9716 21.9427L14.0001 22.9142L12.5859 21.4999L13.3034 20.7824C11.9712 19.5115 11.4098 18 11.4098 18C11.4098 18 13.0834 13.5 17.4998 13.5C18.4716 13.5 19.3106 13.7179 20.0283 14.0578L21.0002 13.0859L22.4144 14.5002L21.6961 15.2184C23.0279 16.4892 23.5898 18 23.5898 18ZM20.2866 16.6279L16.5335 20.3809C16.8315 20.4565 17.1529 20.5 17.498 20.5C20.1136 20.5 21.3685 18 21.3685 18C21.3685 18 21.014 17.2908 20.2866 16.6279ZM18.4664 15.6197C18.1674 15.5437 17.8447 15.5 17.498 15.5C14.8774 15.5 13.6285 18 13.6285 18C13.6285 18 13.9845 18.7098 14.7129 19.373L18.4664 15.6197Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
