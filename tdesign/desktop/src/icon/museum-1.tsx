import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-museum-1')
export default class Museum1 extends WeElement<IconProps> {
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
          d="M9 4.76547V20H11V15H13V20H15L15 4.76556C14.1101 4.27753 13.0885 4 11.9999 4C10.9114 4 9.88989 4.27749 9 4.76547ZM17 6.38122V10.101C18.2705 8.80447 20.0413 8 22 8H23V22H1V8H2C3.95869 8 5.72948 8.80447 7 10.101V6.38054L6.96714 6.41182L5.58817 4.96322L6.31247 4.27374C6.66284 3.94021 7.04261 3.63712 7.44758 3.36874C8.75277 2.50375 10.319 2 11.9999 2C13.6809 2 15.2472 2.5038 16.5524 3.36887C16.9582 3.63781 17.3387 3.94161 17.6897 4.27596L18.4137 4.96572L17.0342 6.41379L17 6.38122ZM7 15C7 12.581 5.28224 10.5633 3 10.1V20H7V15ZM17 20H21V10.1C18.7178 10.5633 17 12.581 17 15V20ZM11 6.99805H13.0039V9.00195H11V6.99805Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
