import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gps')
export default class Gps extends WeElement<IconProps> {
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
          d="M11.9995 3.00098C7.03945 3.00098 3.01855 7.02187 3.01855 11.9819C3.01855 14.3317 3.91969 16.4688 5.39704 18.0701L6.07514 18.805L4.6052 20.1612L3.9271 19.4263C2.12238 17.4702 1.01855 14.8538 1.01855 11.9819C1.01855 5.9173 5.93488 1.00098 11.9995 1.00098C18.0641 1.00098 22.9804 5.9173 22.9804 11.9819C22.9804 14.8538 21.8766 17.4702 20.0718 19.4263L19.3937 20.1612L17.9238 18.805L18.6019 18.0701C20.0793 16.4688 20.9804 14.3317 20.9804 11.9819C20.9804 7.02187 16.9595 3.00098 11.9995 3.00098ZM11.9999 7.50007C9.51464 7.50007 7.49992 9.51479 7.49992 12.0001C7.49992 13.1777 7.951 14.2478 8.6916 15.0505L9.3697 15.7855L7.89976 17.1417L7.22166 16.4067C6.15368 15.2492 5.49992 13.6998 5.49992 12.0001C5.49992 8.41022 8.41007 5.50007 11.9999 5.50007C15.5898 5.50007 18.4999 8.41022 18.4999 12.0001C18.4999 13.6998 17.8462 15.2492 16.7782 16.4067L16.1001 17.1417L14.6301 15.7855L15.3082 15.0505C16.0488 14.2478 16.4999 13.1777 16.4999 12.0001C16.4999 9.51479 14.4852 7.50007 11.9999 7.50007ZM9.99992 12.0001C9.99992 10.8955 10.8953 10.0001 11.9999 10.0001C13.1045 10.0001 13.9999 10.8955 13.9999 12.0001C13.9999 13.1047 13.1045 14.0001 11.9999 14.0001C10.8953 14.0001 9.99992 13.1047 9.99992 12.0001ZM11.947 15.9671L16.936 22.9989H6.95909L11.947 15.9671ZM11.9471 19.4237L10.8298 20.9989H13.0647L11.9471 19.4237Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
