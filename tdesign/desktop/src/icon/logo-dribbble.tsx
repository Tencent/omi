import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-dribbble')
export default class LogoDribbble extends WeElement<IconProps> {
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
          d="M7.9082 3.98155C5.57442 5.17501 3.83124 7.35707 3.22914 9.97254C5.9851 9.84914 8.63223 9.31283 11.111 8.42443C10.1622 6.85629 9.09011 5.37084 7.9082 3.98155ZM3.00002 11.9831C3.00001 11.9887 3 11.9944 3 12C3 14.1464 3.7505 16.1165 5.00505 17.6637C6.9439 14.9696 9.70059 12.9022 12.9138 11.8256C12.6596 11.2721 12.3909 10.7265 12.1083 10.1894C9.25618 11.2501 6.19279 11.8748 3.00002 11.9831ZM6.45002 19.0856C7.97942 20.2855 9.90544 21 12 21C13.2513 21 14.4411 20.7452 15.5219 20.2851C15.1344 17.9951 14.518 15.7831 13.6969 13.6735C10.7243 14.6326 8.18411 16.5601 6.45002 19.0856ZM15.6559 13.1952C16.393 15.1317 16.9679 17.1481 17.3638 19.2278C19.242 17.8317 20.5561 15.7219 20.9066 13.3019C19.9696 13.1042 18.9975 13 18 13C17.2007 13 16.4176 13.0669 15.6559 13.1952ZM20.9713 11.2756C20.8267 9.45803 20.1426 7.79348 19.0781 6.44041C17.4887 7.60026 15.7767 8.60256 13.965 9.42417C14.2855 10.041 14.5887 10.6683 14.8739 11.3054C15.8856 11.105 16.931 11 18 11C19.0146 11 20.0079 11.0946 20.9713 11.2756ZM12.9902 7.66965C14.6395 6.93373 16.2018 6.03711 17.6569 4.99956C16.1107 3.74832 14.1434 3 12 3C11.2758 3 10.5724 3.08535 9.8989 3.24634C11.0351 4.63787 12.0694 6.11611 12.9902 7.66965ZM1.05427 10.9012C1.46211 6.79361 4.12675 3.35448 7.78743 1.83576C9.08624 1.29692 10.5097 1 12 1C15.1214 1 17.9406 2.30145 19.9415 4.38862C21.8349 6.36373 23 9.04686 23 12C23 12.1972 22.9948 12.3932 22.9845 12.588C22.774 16.5796 20.4368 20.0042 17.0897 21.754C15.5667 22.5502 13.8344 23 12 23C9.07893 23 6.42192 21.8601 4.45309 20.0028C2.3283 17.9984 1 15.1535 1 12C1 11.6294 1.01836 11.2628 1.05427 10.9012Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
