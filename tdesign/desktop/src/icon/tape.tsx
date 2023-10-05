import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-tape')
export default class Tape extends WeElement<IconProps> {
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
          d="M1 3L23 3V21H1L1 3ZM3 5L3 19H21V5H19.5352L17.5352 8H6.46482L4.46482 5L3 5ZM6.86852 5L7.53518 6H16.4648L17.1315 5H6.86852ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12ZM5 13C5 11.3431 6.34315 10 8 10C9.65685 10 11 11.3431 11 13C11 14.6569 9.65685 16 8 16C6.34315 16 5 14.6569 5 13ZM16 12C15.4477 12 15 12.4477 15 13C15 13.5523 15.4477 14 16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12ZM13 13C13 11.3431 14.3431 10 16 10C17.6569 10 19 11.3431 19 13C19 14.6569 17.6569 16 16 16C14.3431 16 13 14.6569 13 13Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
