import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chart-3d')
export default class Chart3d extends WeElement<IconProps> {
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
          d="M12.0001 0.845215L21.6604 6.42257V17.5773L12.0001 23.1546L2.33984 17.5773V6.42257L12.0001 0.845215ZM12.0001 3.15462L5.33984 6.99992L12.0001 10.8452L18.6604 6.99992L12.0001 3.15462ZM19.6604 8.73197L13.0001 12.5773V20.2679L19.6604 16.4226V8.73197ZM11.0001 20.2679V12.5773L4.33984 8.73197V16.4226L11.0001 20.2679ZM13.0001 4.99992V8.99992H11.0001V4.99992H13.0001ZM9.90191 14.3659L6.43781 16.3659L5.43781 14.6339L8.90191 12.6339L9.90191 14.3659ZM15.0981 12.6339L18.5622 14.6339L17.5622 16.3659L14.0981 14.3659L15.0981 12.6339Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
