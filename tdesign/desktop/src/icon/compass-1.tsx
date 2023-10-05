import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-compass-1')
export default class Compass1 extends WeElement<IconProps> {
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
          d="M5.891 12L10.2322 13.1545C10.0151 12.8227 9.88889 12.4261 9.88889 12C9.88889 11.5739 10.0151 11.1773 10.2322 10.8455L5.891 12ZM10.8455 10.2322C11.1773 10.0151 11.5739 9.88889 12 9.88889C12.4261 9.88889 12.8227 10.0151 13.1545 10.2322L12 5.891L10.8455 10.2322ZM13.3265 3.09707L14.9181 9.08191L20.9029 10.6735C20.3255 6.76477 17.2352 3.67447 13.3265 3.09707ZM18.109 12L13.7678 10.8455C13.9849 11.1773 14.1111 11.5739 14.1111 12C14.1111 12.4261 13.9849 12.8227 13.7678 13.1545L18.109 12ZM13.1545 13.7678C12.8227 13.9849 12.4261 14.1111 12 14.1111C11.5739 14.1111 11.1773 13.9849 10.8455 13.7678L12 18.109L13.1545 13.7678ZM10.6735 20.9029L9.08191 14.9181L3.09707 13.3265C3.67447 17.2352 6.76477 20.3255 10.6735 20.9029ZM3.09707 10.6735L9.08191 9.08191L10.6735 3.09707C6.76477 3.67447 3.67447 6.76477 3.09707 10.6735ZM13.3265 20.9029C17.2352 20.3255 20.3255 17.2352 20.9029 13.3265L14.9181 14.9181L13.3265 20.9029ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 11.8889C11.9386 11.8889 11.8889 11.9386 11.8889 12C11.8889 12.0614 11.9386 12.1111 12 12.1111C12.0614 12.1111 12.1111 12.0614 12.1111 12C12.1111 11.9386 12.0614 11.8889 12 11.8889Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
