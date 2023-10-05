import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-delete-1')
export default class Delete1 extends WeElement<IconProps> {
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
          d="M7.5 1H16.5V4H22V6H19.971L19.471 23H4.52898L4.02898 6H2V4H7.5V1ZM9.5 4H14.5V3H9.5V4ZM6.02984 6L6.47102 21H17.529L17.9702 6H6.02984ZM9.17158 9.25736L12 12.0858L14.8284 9.25736L16.2426 10.6716L13.4142 13.5L16.2426 16.3284L14.8284 17.7426L12 14.9142L9.17158 17.7426L7.75737 16.3284L10.5858 13.5L7.75737 10.6716L9.17158 9.25736Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
