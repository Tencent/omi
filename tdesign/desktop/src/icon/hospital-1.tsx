import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-hospital-1')
export default class Hospital1 extends WeElement<IconProps> {
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
          d="M11.9985 1.66064L22.4117 10.9169L21.083 12.4117L19.9999 11.449V21.9999H3.99995V11.4537L2.90588 12.411L1.58887 10.9058L4.33767 8.50064L11.9985 1.66064ZM5.99995 9.69765V19.9999H8.99995V14.9999H14.9999V19.9999H17.9999V9.6712L12.0014 4.33919L5.99995 9.69765ZM12.9999 19.9999V16.9999H10.9999V19.9999H12.9999ZM12.9999 6.99992V8.99992H14.9999V10.9999H12.9999V12.9999H10.9999V10.9999H8.99995V8.99992H10.9999V6.99992H12.9999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
