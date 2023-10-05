import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-user-circle')
export default class UserCircle extends WeElement<IconProps> {
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
          d="M12 3C7.02944 3 3 7.02944 3 12C3 14.0106 3.65863 15.8668 4.77331 17.3654C5.45057 15.4067 7.31101 14 9.5 14H14.5C16.689 14 18.5494 15.4067 19.2267 17.3654C20.3414 15.8668 21 14.0106 21 12C21 7.02944 16.9706 3 12 3ZM17.5 19.1245V19C17.5 17.3431 16.1569 16 14.5 16H9.5C7.84315 16 6.5 17.3431 6.5 19V19.1245C8.0212 20.3008 9.92785 21 12 21C14.0721 21 15.9788 20.3008 17.5 19.1245ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 15.3457 21.5051 18.3433 19.1503 20.3592C17.228 22.005 14.7289 23 12 23C9.27108 23 6.77201 22.005 4.84966 20.3592C2.49488 18.3433 1 15.3457 1 12ZM12 6C10.6193 6 9.5 7.11929 9.5 8.5C9.5 9.88071 10.6193 11 12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6ZM7.5 8.5C7.5 6.01472 9.51472 4 12 4C14.4853 4 16.5 6.01472 16.5 8.5C16.5 10.9853 14.4853 13 12 13C9.51472 13 7.5 10.9853 7.5 8.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
