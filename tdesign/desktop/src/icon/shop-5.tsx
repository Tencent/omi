import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-shop-5')
export default class Shop5 extends WeElement<IconProps> {
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
          d="M3.27924 2H20.7208L21.6921 4.91402C21.8731 5.45691 22.083 6.24588 21.8555 7.06828C21.6913 7.66173 21.3946 8.19867 21 8.6458V20H22V22H2V20H3V8.64575C2.37852 7.94132 2 7.01438 2 6V5.83772L3.27924 2ZM5 9.87377V20H8V13H16V20H19V9.87377C18.6802 9.95615 18.3451 10 18 10C16.8053 10 15.7329 9.47624 15 8.64582C14.2671 9.47624 13.1947 10 12 10C10.8053 10 9.73295 9.47624 9 8.64582C8.26706 9.47624 7.19469 10 6 10C5.65489 10 5.31975 9.95615 5 9.87377ZM10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6V4H10V6ZM8 4H4.72076L4.00526 6.14649C4.04369 6.67948 4.29033 7.15392 4.66691 7.49097C5.02142 7.80826 5.48712 8 6 8C7.10457 8 8 7.10457 8 6V4ZM16 4V6C16 7.10457 16.8954 8 18 8C18.5129 8 18.9786 7.80826 19.3331 7.49097C19.6157 7.23801 19.8249 6.90744 19.9279 6.53505C19.987 6.32154 19.9537 6.02326 19.7947 5.54648L19.2792 4H16ZM14 20V15H10V20H14Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
