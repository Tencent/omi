import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-user-safety')
export default class UserSafety extends WeElement<IconProps> {
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
          d="M11.5 4C9.567 4 8 5.567 8 7.5C8 9.433 9.567 11 11.5 11C13.433 11 15 9.433 15 7.5C15 5.567 13.433 4 11.5 4ZM6 7.5C6 4.46243 8.46243 2 11.5 2C14.5376 2 17 4.46243 17 7.5C17 10.5376 14.5376 13 11.5 13C8.46243 13 6 10.5376 6 7.5ZM16.5 15.5V19.1336C16.5 19.4713 16.6704 19.7861 16.9531 19.9708L19 21.308L21.0469 19.9708C21.3296 19.7861 21.5 19.4713 21.5 19.1336V15.5H16.5ZM14.5 13.5H23.5V19.1336C23.5 20.1466 22.9888 21.0912 22.1407 21.6452L19 23.6969L15.8593 21.6452C15.0112 21.0912 14.5 20.1466 14.5 19.1336V13.5ZM8 16C5.79086 16 4 17.7909 4 20H12.5508V22H2V20C2 16.6863 4.68629 14 8 14H12.5V16H8Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
