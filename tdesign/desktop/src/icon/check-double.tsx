import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-check-double')
export default class CheckDouble extends WeElement<IconProps> {
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
          d="M17.6571 7.17142L12.3538 12.4747L10.9396 11.0605L16.2429 5.7572L17.6571 7.17142ZM23.3143 7.17142L12.7077 17.778L6.34375 11.4141L7.75796 9.99984L12.7077 14.9496L21.9001 5.7572L23.3143 7.17142ZM2.10074 9.99984L7.05048 14.9496L7.40404 14.596L8.81825 16.0103L7.05048 17.778L0.686523 11.4141L2.10074 9.99984Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
