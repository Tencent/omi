import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-up')
export default class GestureUp extends WeElement<IconProps> {
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
          d="M7.25011 4.5C7.25011 2.84315 8.59326 1.5 10.2501 1.5C11.907 1.5 13.2501 2.84315 13.2501 4.5V8H14.7094C15.2406 8 15.7622 8.14103 16.221 8.40866L20.3506 10.8176C21.5771 11.5331 22.134 13.0105 21.685 14.3576L19.6546 20.4487C19.2463 21.6737 18.0999 22.5 16.8086 22.5H8.73492C7.80351 22.5 6.92493 22.0674 6.35705 21.3291L1.52051 15.0416L2.53798 13.5154C2.99614 12.8282 3.82964 12.4933 4.63594 12.6725L7.25011 13.2534V4.5ZM10.2501 3.5C9.69783 3.5 9.25011 3.94772 9.25011 4.5V15.7466L4.20208 14.6248L3.97972 14.9584L7.94229 20.1097C8.13159 20.3558 8.42445 20.5 8.73492 20.5H16.8086C17.239 20.5 17.6212 20.2246 17.7573 19.8162L19.7876 13.7251C19.9373 13.2761 19.7517 12.7836 19.3428 12.5451L15.2133 10.1362C15.0604 10.047 14.8865 10 14.7094 10H11.2501V4.5C11.2501 3.94772 10.8024 3.5 10.2501 3.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
