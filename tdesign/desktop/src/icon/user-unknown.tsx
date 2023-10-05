import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-user-unknown')
export default class UserUnknown extends WeElement<IconProps> {
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
          d="M11.5 4C9.567 4 8 5.567 8 7.5C8 9.433 9.567 11 11.5 11C13.433 11 15 9.433 15 7.5C15 5.567 13.433 4 11.5 4ZM6 7.5C6 4.46243 8.46243 2 11.5 2C14.5376 2 17 4.46243 17 7.5C17 10.5376 14.5376 13 11.5 13C8.46243 13 6 10.5376 6 7.5ZM18 14C17.0694 14 16.5 14.6561 16.5 15.2489V16.2489H14.5V15.2489C14.5 13.3576 16.1692 12 18 12C19.8308 12 21.5 13.3576 21.5 15.2489C21.5 16.1644 21.0933 16.9746 20.4733 17.549L19 18.9388V19.6223H17V18.0759L19.1123 16.0834C19.3677 15.8476 19.5 15.5523 19.5 15.2489C19.5 14.6561 18.9306 14 18 14ZM8 16C5.79086 16 4 17.7909 4 20H12.8008V22H2V20C2 16.6863 4.68629 14 8 14H12.75V16H8ZM16.9991 20.9961H19.003V23H16.9991V20.9961Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
