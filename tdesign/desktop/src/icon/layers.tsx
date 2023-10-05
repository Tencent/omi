import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-layers')
export default class Layers extends WeElement<IconProps> {
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
          d="M12.0004 1.9165L22.1004 6.12484L12.0004 10.3332L1.90039 6.12484L12.0004 1.9165ZM7.10039 6.12484L12.0004 8.1665L16.9004 6.12484L12.0004 4.08317L7.10039 6.12484ZM2.00039 9.9802L12.0004 14.2881L22.0004 9.9802V12.1611L12.396 16.2954L12.0004 16.4657L11.605 16.2955L2.00039 12.1611L2.00039 9.9802ZM2.00039 15.9802L12.0004 20.2881L22.0004 15.9802V18.1611L12.3967 22.2951L12.0004 22.4657L11.605 22.2955L2.00039 18.1611L2.00039 15.9802Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
