import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-coupon')
export default class Coupon extends WeElement<IconProps> {
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
          d="M4 21.0001H3V20.0001V3.00011V1.13159L4.5547 2.16806L6.94629 3.76245L8.87531 2.21924L9.5 1.71948L10.1247 2.21924L12 3.71948L13.8753 2.21924L14.5 1.71948L15.1247 2.21924L17.0537 3.76245L19.4453 2.16806L21 1.13159V3.00011V20.0001V21.0001H20H4ZM5 4.86863V19.0001H19V4.86863L17.5547 5.83216L16.9463 6.23777L16.3753 5.78098L14.5 4.28073L12.6247 5.78098L12 6.28073L11.3753 5.78098L9.5 4.28073L7.62469 5.78098L7.05371 6.23777L6.4453 5.83216L5 4.86863ZM8 16.0001H7V14.0001H8H16H17V16.0001H16H8ZM11 12.0001H12H16H17V10.0001H16H12H11V12.0001ZM8 10.0001H7V11.0001V11.004V12.004H8H8.00391H9.00391V11.004V11.0001V10.0001H8.00391H8Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
