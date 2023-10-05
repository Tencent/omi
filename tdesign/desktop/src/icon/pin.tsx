import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-pin')
export default class Pin extends WeElement<IconProps> {
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
          d="M17.7874 0.693359L23.3095 6.21545L16.9447 13.9886L19.1329 16.1768L13.474 21.8358L8.52427 16.8861L2.16031 23.25L0.746094 21.8358L7.11005 15.4719L2.16024 10.5221L7.8192 4.86311L10.0081 7.05199L17.7874 0.693359ZM13.474 19.0073L16.3045 16.1768L14.2502 14.1225L20.6149 6.34933L17.6524 3.3868L9.87309 9.74543L7.8192 7.69154L4.98867 10.5221L13.474 19.0073Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
