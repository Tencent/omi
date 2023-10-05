import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-system-2')
export default class System2 extends WeElement<IconProps> {
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
          d="M10 4.36994V13H8V4.05181L8.04193 3.91161C8.16532 3.49904 8.49182 2.79747 9.10487 2.18351C9.74103 1.5464 10.6942 1 12 1C13.3058 1 14.259 1.5464 14.8951 2.18351C15.5082 2.79747 15.8347 3.49904 15.9581 3.91161L16 4.05181V6.43653H14V4.36994C13.9224 4.18303 13.7561 3.87331 13.4799 3.59668C13.1577 3.27403 12.6942 3 12 3C11.3058 3 10.8423 3.27403 10.5201 3.59668C10.2439 3.87331 10.0776 4.18303 10 4.36994ZM4.05181 8H6.43653V10H4.36994C4.18303 10.0776 3.87331 10.2439 3.59668 10.5201C3.27403 10.8423 3 11.3058 3 12C3 12.6942 3.27403 13.1577 3.59668 13.4799C3.87331 13.7561 4.18302 13.9224 4.36994 14H13V16H4.05181L3.91161 15.9581C3.49904 15.8347 2.79747 15.5082 2.18351 14.8951C1.5464 14.259 1 13.3058 1 12C1 10.6942 1.5464 9.74103 2.18351 9.10487C2.79747 8.49182 3.49904 8.16532 3.91161 8.04193L4.05181 8ZM11 8L19.9482 8L20.0884 8.04193C20.501 8.16532 21.2025 8.49182 21.8165 9.10487C22.4536 9.74103 23 10.6942 23 12C23 13.3058 22.4536 14.259 21.8165 14.8951C21.2025 15.5082 20.501 15.8347 20.0884 15.9581L19.9482 16H17.5635V14H19.6301C19.817 13.9224 20.1267 13.7561 20.4033 13.4799C20.726 13.1577 21 12.6942 21 12C21 11.3058 20.726 10.8423 20.4033 10.5201C20.1267 10.2439 19.817 10.0776 19.6301 10H11V8ZM16 11V19.9482L15.9581 20.0884C15.8347 20.501 15.5082 21.2025 14.8951 21.8165C14.259 22.4536 13.3058 23 12 23C10.6942 23 9.74103 22.4536 9.10487 21.8165C8.49182 21.2025 8.16532 20.501 8.04193 20.0884L8 19.9482V17.5635H10V19.6301C10.0776 19.817 10.2439 20.1267 10.5201 20.4033C10.8423 20.726 11.3058 21 12 21C12.6942 21 13.1577 20.726 13.4799 20.4033C13.7561 20.1267 13.9224 19.817 14 19.6301V11H16Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
