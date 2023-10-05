import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-android')
export default class LogoAndroid extends WeElement<IconProps> {
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
          d="M4.3721 3.63574L6.48792 7.33843C8.13913 6.48318 10.0142 6.00012 12 6.00012C13.9858 6.00012 15.8609 6.48318 17.5121 7.33843L19.6279 3.63574L21.3644 4.62802L19.2065 8.40426C22.1158 10.5926 24 14.076 24 18.0001V20.0001H0V18.0001C0 14.076 1.88416 10.5926 4.79347 8.40426L2.63562 4.62802L4.3721 3.63574ZM12 8.00012C10.0312 8.00012 8.1982 8.56803 6.65215 9.54858C3.85384 11.3233 2 14.4456 2 18.0001H22C22 14.4456 20.1462 11.3233 17.3479 9.54858C15.8018 8.56803 13.9688 8.00012 12 8.00012ZM6 13.0001H8.00391V15.004H6V13.0001ZM16 13.0001H18.0039V15.004H16V13.0001Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
