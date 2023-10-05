import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-user-business')
export default class UserBusiness extends WeElement<IconProps> {
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
          d="M12 4C10.067 4 8.5 5.567 8.5 7.5C8.5 9.433 10.067 11 12 11C13.933 11 15.5 9.433 15.5 7.5C15.5 5.567 13.933 4 12 4ZM6.5 7.5C6.5 4.46243 8.96243 2 12 2C15.0376 2 17.5 4.46243 17.5 7.5C17.5 10.5376 15.0376 13 12 13C8.96243 13 6.5 10.5376 6.5 7.5ZM3 19C3 16.2386 5.23858 14 8 14H16C18.7614 14 21 16.2386 21 19V22H3V19ZM8 16C6.34315 16 5 17.3431 5 19V20H10.6126L9.27924 16H8ZM11.3874 16L12 17.8377L12.6126 16H11.3874ZM14.7208 16L13.3874 20H19V19C19 17.3431 17.6569 16 16 16H14.7208Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
