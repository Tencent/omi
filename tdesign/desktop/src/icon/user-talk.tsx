import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-user-talk')
export default class UserTalk extends WeElement<IconProps> {
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
          d="M11.5 4C9.567 4 8 5.567 8 7.5C8 9.433 9.567 11 11.5 11C13.433 11 15 9.433 15 7.5C15 5.567 13.433 4 11.5 4ZM6 7.5C6 4.46243 8.46243 2 11.5 2C14.5376 2 17 4.46243 17 7.5C17 10.5376 14.5376 13 11.5 13C8.46243 13 6 10.5376 6 7.5ZM18.9833 12.9818L19.5859 13.7798C20.504 14.9954 21.0004 16.4774 20.9999 18.0008C20.9994 19.5241 20.5019 21.0058 19.583 22.2208L18.9798 23.0184L17.3846 21.812L17.9878 21.0144C18.6442 20.1465 18.9995 19.0882 18.9999 18.0001C19.0003 16.912 18.6457 15.8534 17.9899 14.9851L17.3873 14.1871L18.9833 12.9818ZM8 16C5.79086 16 4 17.7909 4 20H13.0508V22H2V20C2 16.6863 4.68629 14 8 14H13V16H8ZM16.1905 15.0909L16.7932 15.8889C17.2522 16.4967 17.5004 17.2377 17.5002 17.9994C17.4999 18.7611 17.2512 19.5019 16.7917 20.1094L16.1885 20.907L14.5933 19.7006L15.1966 18.903C15.3935 18.6426 15.5001 18.3251 15.5002 17.9987C15.5003 17.6723 15.3939 17.3547 15.1972 17.0942L14.5945 16.2962L16.1905 15.0909Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
