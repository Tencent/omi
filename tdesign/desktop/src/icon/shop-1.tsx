import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-shop-1')
export default class Shop1 extends WeElement<IconProps> {
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
          d="M2 2H22V6C22 5.99995 22 6.00005 22 6V22H2V2ZM4 9.46487V20H8V13H16V20H20V9.46487C19.4117 9.80521 18.7286 10 18 10C16.8053 10 15.7329 9.47624 15 8.64582C14.2671 9.47624 13.1947 10 12 10C10.8053 10 9.73295 9.47624 9 8.64582C8.26706 9.47624 7.19469 10 6 10C5.27143 10 4.58835 9.80521 4 9.46487ZM10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6V4H10V6ZM8 4H4V6C4 7.10457 4.89543 8 6 8C7.10457 8 8 7.10457 8 6V4ZM16 4V6C16 7.10457 16.8954 8 18 8C19.1046 8 20 7.10457 20 6V4H16ZM14 20V15H10V20H14Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
