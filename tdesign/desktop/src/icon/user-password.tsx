import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-user-password')
export default class UserPassword extends WeElement<IconProps> {
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
          d="M11.5 4C9.567 4 8 5.567 8 7.5C8 9.433 9.567 11 11.5 11C13.433 11 15 9.433 15 7.5C15 5.567 13.433 4 11.5 4ZM6 7.5C6 4.46243 8.46243 2 11.5 2C14.5376 2 17 4.46243 17 7.5C17 10.5376 14.5376 13 11.5 13C8.46243 13 6 10.5376 6 7.5ZM17 12H21V14H19V16.0029H20.9529L22.5 17.1395V22.5H13.5V17.1395L15.0471 16.0029H17V12ZM8 16C5.79086 16 4 17.7909 4 20H11.5508V22H2V20C2 16.6863 4.68629 14 8 14H11.5V16H8ZM15.5 18.1519V20.5H20.5V18.1519L20.2971 18.0029H15.7029L15.5 18.1519Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
