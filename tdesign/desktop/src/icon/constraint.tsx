import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-constraint')
export default class Constraint extends WeElement<IconProps> {
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
          d="M10.0001 8L6.20065 8.00036C3.8305 8.02562 2 9.85117 2 12.0001C2 14.149 3.83048 15.9745 6.20061 15.9998H10V17.9998H6.18584C2.80939 17.9671 -1.19209e-07 15.338 0 12.0001C5.96047e-08 8.66217 2.80939 6.03309 6.18584 6.0004L6.19543 6.00031L9.99991 6L10.0001 8ZM14 6.00008L17.75 6.00009C21.1552 6.00009 24 8.64097 24 12.0001C24 15.3592 21.1552 18.0001 17.75 18.0001L14 18.0001L14 16.0001L17.75 16.0001C20.1437 16.0001 22 14.1638 22 12.0001C22 9.83637 20.1437 8.00009 17.75 8.00009L14 8.00008L14 6.00008ZM7 11.0001H17V13.0001H7V11.0001Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
