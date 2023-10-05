import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-sensors-1')
export default class Sensors1 extends WeElement<IconProps> {
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
          d="M5.63604 4.22256L4.92893 4.92967C3.11819 6.74041 2 9.23904 2 12.0007C2 14.7624 3.11819 17.2611 4.92893 19.0718L5.63604 19.7789L4.22183 21.1931L3.51472 20.486C1.34424 18.3155 0 15.3142 0 12.0007C0 8.6873 1.34424 5.68593 3.51472 3.51546L4.22183 2.80835L5.63604 4.22256ZM19.7773 2.80835L20.4845 3.51546C22.6549 5.68593 23.9992 8.68731 23.9992 12.0007C23.9992 15.3142 22.6549 18.3155 20.4845 20.486L19.7773 21.1931L18.3631 19.7789L19.0702 19.0718C20.881 17.2611 21.9992 14.7624 21.9992 12.0007C21.9992 9.23904 20.881 6.74041 19.0702 4.92967L18.3631 4.22256L19.7773 2.80835ZM8.46447 7.05069L7.75736 7.75779C6.67048 8.84468 6 10.3433 6 12.0004C6 13.6576 6.67048 15.1562 7.75736 16.2431L8.46447 16.9502L7.05025 18.3644L6.34315 17.6573C4.89653 16.2107 4 14.2093 4 12.0004C4 9.79157 4.89653 7.7902 6.34315 6.34358L7.05025 5.63647L8.46447 7.05069ZM16.9492 5.63647L17.6563 6.34358C19.1029 7.7902 19.9995 9.79157 19.9995 12.0004C19.9995 14.2093 19.1029 16.2107 17.6563 17.6573L16.9492 18.3644L15.535 16.9502L16.2421 16.2431C17.329 15.1562 17.9995 13.6576 17.9995 12.0004C17.9995 10.3433 17.329 8.84468 16.2421 7.75779L15.535 7.05069L16.9492 5.63647ZM12 9.99991C10.8954 9.99991 10 10.8953 10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8953 13.1046 9.99991 12 9.99991ZM8 11.9999C8 9.79077 9.79086 7.99991 12 7.99991C14.2091 7.99991 16 9.79077 16 11.9999C16 13.8637 14.7252 15.4298 13 15.8739V20.7789H11V15.8739C9.27477 15.4298 8 13.8637 8 11.9999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
