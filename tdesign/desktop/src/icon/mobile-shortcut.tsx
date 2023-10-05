import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-mobile-shortcut')
export default class MobileShortcut extends WeElement<IconProps> {
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
          d="M20 23H4V1H20V6H18V3H6V21H18V18H20V23ZM13.0039 19.0039H11V17H13.0039V19.0039ZM21.8865 16.2869L23.4553 15.506L21.8865 14.7251L21.1056 13.1563L20.3247 14.7251L18.7559 15.506L20.3247 16.2869L21.1056 17.8557L21.8865 16.2869ZM16.0572 15.3007L14.9601 13.0967L12.7561 11.9996L14.9601 10.9025L16.0572 8.69844L17.1543 10.9025L19.3583 11.9996L17.1543 13.0967L16.0572 15.3007ZM21.8865 9.27714L23.4553 8.49625L21.8865 7.71534L21.1056 6.14653L20.3247 7.71534L18.7559 8.49625L20.3247 9.27714L21.1056 10.8459L21.8865 9.27714Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
