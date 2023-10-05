import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-pen-mark')
export default class PenMark extends WeElement<IconProps> {
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
          d="M23.5548 6.87928L17.3278 0.652344L3.97906 14.0011L3.41366 16.8281L7.37901 20.7935L10.206 20.2281L23.5548 6.87928ZM20.7263 6.87928L9.21997 18.3857L8.03636 18.6224L5.58474 16.1708L5.82146 14.9871L17.3278 3.48077L20.7263 6.87928ZM1.38574 19.6129L4.59423 22.8214L6.00844 21.4072L2.79996 18.1987L1.38574 19.6129Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
