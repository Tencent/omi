import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-shimen')
export default class Shimen extends WeElement<IconProps> {
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
          d="M11.999 1.99561L22.999 3.09561V7.90558L20.0672 8.19876L21.0747 22.0006H13.9132L15.0087 8.71261C14.8053 8.73225 14.5982 8.75216 14.3876 8.77242L14.267 8.78402C13.5827 8.84983 12.8601 8.91947 12.0985 8.99563L11.999 9.00558L9.08491 8.71417L10.0764 22.0006H2.92337L3.9308 8.19876L0.999023 7.90558V3.09561L11.999 1.99561ZM5.92159 8.39784L5.07468 20.0006H7.92162L7.06427 8.5121L5.92159 8.39784ZM17.0322 8.51068L16.0849 20.0006H18.9234L18.0767 8.4007C17.9308 8.41602 17.7863 8.43127 17.6421 8.4465L17.6276 8.44803C17.4298 8.46891 17.2323 8.48976 17.0322 8.51068ZM2.99902 4.90558V6.09561L11.9991 6.99561C12.7283 6.92291 13.421 6.85615 14.0755 6.7932L14.195 6.78171C14.8353 6.72014 15.4378 6.6622 16.0043 6.60556C16.497 6.55628 16.9548 6.50795 17.42 6.45883L17.4321 6.45755C17.9008 6.40806 18.3771 6.35779 18.8995 6.30556L20.999 6.09561V4.90558L11.999 4.00558L2.99902 4.90558Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
