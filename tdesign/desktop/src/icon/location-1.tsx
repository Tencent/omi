import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-location-1')
export default class Location1 extends WeElement<IconProps> {
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
          d="M12.0001 3C10.3432 3 9.00008 4.34315 9.00008 6C9.00008 7.65685 10.3432 9 12.0001 9C13.6569 9 15.0001 7.65685 15.0001 6C15.0001 4.34315 13.6569 3 12.0001 3ZM7.00008 6C7.00008 3.23858 9.23865 1 12.0001 1C14.7615 1 17.0001 3.23858 17.0001 6C17.0001 8.41896 15.2823 10.4367 13.0001 10.9V17H11.0001V10.9C8.71784 10.4367 7.00008 8.41896 7.00008 6ZM3.10503 11H8.00008V13H4.89512L4.11734 20H19.8828L19.105 13H16.0001V11H20.8951L22.1173 22H1.88281L3.10503 11Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
