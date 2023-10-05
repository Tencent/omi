import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-sim-card-2')
export default class SimCard2 extends WeElement<IconProps> {
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
          d="M7.58579 1H21V23H3V5.58579L7.58579 1ZM8.41421 3L5 6.41421V21H19V3H8.41421ZM12 10C11.4477 10 11 10.4477 11 11V12H9V11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 11.814 14.6745 12.5539 14.1488 13.0935L14.1211 13.1219L12.28 14.7333H15V16.7333H9V14.9463L12.739 11.6737C12.902 11.4952 13 11.26 13 11C13 10.4477 12.5523 10 12 10Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
