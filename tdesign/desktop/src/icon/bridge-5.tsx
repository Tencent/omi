import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bridge-5')
export default class Bridge5 extends WeElement<IconProps> {
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
          d="M0 3C8 3 16 3.00084 24 3.00084V21.0013H18V13.3982C17.9589 13.358 17.9125 13.3138 17.8608 13.2661C17.593 13.0188 17.1877 12.6829 16.6535 12.3455C15.5862 11.6714 14.0191 11 12 11C9.98093 11 8.41375 11.6714 7.34649 12.3455C6.81232 12.6829 6.40703 13.0188 6.13922 13.2661C6.08754 13.3138 6.04112 13.358 6 13.3982V21.0004H0V3ZM6 10.8364C6.08952 10.776 6.18236 10.7152 6.27851 10.6545C7.58625 9.82857 9.51907 9 12 9C14.4809 9 16.4137 9.82857 17.7215 10.6545C17.8176 10.7152 17.9105 10.776 18 10.8364V5.00057L17.3748 5.00042C16.2499 5.00021 14.4999 5 12 5H6V10.8364ZM20 5.00084V19.0013H22V5.00084H20ZM4 5H2V19.0004H4V5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
