import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-translate-1')
export default class Translate1 extends WeElement<IconProps> {
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
          d="M6.5 2V4.5H2V6.5H9.45971C8.93752 7.82397 8.2321 9.05625 7.37462 10.1654C6.82023 9.4482 6.32938 8.67946 5.91052 7.86765L5.452 6.97897L3.67463 7.89601L4.13316 8.78469C4.66619 9.81778 5.30191 10.7891 6.02685 11.6852C5.1225 12.5763 4.10552 13.3537 2.99916 13.9938L2.13362 14.4947L3.1353 16.2258L4.00084 15.7249C5.23108 15.013 6.36398 14.1514 7.37453 13.1648C8.38522 14.1516 9.51844 15.0134 10.7493 15.7254L11.6149 16.2261L12.6163 14.4949L11.7507 13.9942C10.6442 13.3541 9.62694 12.5767 8.72231 11.6853C9.96117 10.1542 10.9397 8.40334 11.5902 6.5H13V4.5H8.5V2H6.5ZM16.5 9.16402L10.6682 21.4757L12.4757 22.3318L13.5802 20H19.4198L20.5243 22.3318L22.3318 21.4757L16.5 9.16402ZM18.4724 18H14.5276L16.5 13.836L18.4724 18Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
