import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-call-off')
export default class CallOff extends WeElement<IconProps> {
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
          d="M22.4142 2.99991L11.8327 13.5814C12.3413 14.0224 12.8819 14.4273 13.4504 14.7921L15.3094 12.9332L22 14.42V22.9999H21C17.0022 22.9999 13.2755 21.8259 10.1497 19.8035C9.2404 19.2152 8.38205 18.5552 7.58256 17.8316L3 22.4141L1.58579 20.9999L21 1.58569L22.4142 2.99991ZM8.99871 16.4154C9.69759 17.0411 10.4456 17.6129 11.2361 18.1243C13.786 19.7741 16.7792 20.7964 20 20.9726V16.0243L15.9473 15.1237L13.7725 17.2985L13.1102 16.9224C12.1446 16.3741 11.2419 15.7284 10.4154 14.9987L8.99871 16.4154ZM1 1.99991H9.57995L11.0668 8.69052L9.20181 10.5555L9.49899 11.0598L7.77585 12.0751L6.69246 10.2364L8.87621 8.05263L7.97561 3.99991H3.02729C3.20351 7.22068 4.22584 10.2139 5.87561 12.7638C5.95693 12.8895 6.03977 13.0142 6.12412 13.1377L6.68806 13.9635L5.03642 15.0914L4.47248 14.2655C4.37878 14.1283 4.28675 13.9899 4.1964 13.8503C2.17402 10.7244 1 6.99771 1 2.99991V1.99991Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
