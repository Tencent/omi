import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-adobe-photoshop')
export default class LogoAdobePhotoshop extends WeElement<IconProps> {
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
          d="M8 13.0001L8 18H6V6.00007L9.49993 6C11.433 5.99996 13 7.56702 13 9.50003C13 11.433 11.433 13.0001 9.5 13.0001H8ZM8 8.00003L8 11.0001H9.5C10.3284 11.0001 11 10.3285 11 9.50003C11 8.67157 10.3284 7.99998 9.49997 8L8 8.00003Z"
          fill="currentColor"
        />
        <path
          d="M13.5 12.4528C13.5 11.0982 14.5982 10 15.9528 10H18V12H15.9528C15.7027 12 15.5 12.2027 15.5 12.4528C15.5 12.6478 15.6247 12.8208 15.8096 12.8825L16.8228 13.2202C17.8244 13.554 18.5 14.4914 18.5 15.5472C18.5 16.9018 17.4018 18 16.0472 18H13.5V16H16.0472C16.2973 16 16.5 15.7973 16.5 15.5472C16.5 15.3522 16.3753 15.1792 16.1904 15.1175L15.1772 14.7798C14.1756 14.446 13.5 13.5086 13.5 12.4528Z"
          fill="currentColor"
        />
        <path d="M22 2H2V22H22V2ZM4 20V4H20V20H4Z" fill="currentColor" />
      </svg>
    )
  }
}
