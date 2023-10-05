import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-earth')
export default class Earth extends WeElement<IconProps> {
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
          d="M1.04484 11.0032L0.96875 11.7805L1.00221 11.7919C1.00093 11.8611 1.00028 11.9305 1.00028 12C1.00028 18.0751 5.92515 23 12.0003 23C18.0754 23 23.0003 18.0751 23.0003 12C23.0003 5.92487 18.0754 1 12.0003 1C8.00707 1 4.51082 3.12779 2.5835 6.31142L2.54577 6.29718L2.16489 7.06869C1.56097 8.27084 1.17097 9.59899 1.04484 11.0032ZM3.14507 10.4074C3.24447 9.86063 3.39044 9.33128 3.57943 8.82512L7.21857 10.1989L9.24077 8.14779L10.9755 8.7343V12.8014L14.2695 13.9151L16.2574 17.9477L20.6429 12.8642L20.9757 12.6708C20.6325 17.3281 16.7452 21 12.0003 21C9.78126 21 7.7498 20.1969 6.1807 18.8656L9.37616 12.5236L3.14507 10.4074ZM20.8626 10.4232L19.3478 11.3037L16.7159 14.3544L15.6964 12.2863L12.9755 11.3664V7.29926L8.69545 5.85221L6.70775 7.86827L4.49408 7.03264C6.10559 4.60237 8.86581 3 12.0003 3C16.4329 3 20.1171 6.20447 20.8626 10.4232ZM4.72819 17.3036C3.72885 15.9356 3.10613 14.2751 3.01258 12.4746L6.55511 13.6777L4.72819 17.3036Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
