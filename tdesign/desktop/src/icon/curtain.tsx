import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-curtain')
export default class Curtain extends WeElement<IconProps> {
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
          d="M2 2H22V22H2V2ZM4 9.46487V20H6.91447L6.09273 9.99894C6.0619 9.99965 6.03099 10 6 10C5.27143 10 4.58835 9.80521 4 9.46487ZM8.053 9.43337L8.92121 20H15.0788L15.947 9.43337C15.592 9.22065 15.2726 8.95441 15.0001 8.64573C14.2671 9.4762 13.1947 10 12 10C10.8053 10 9.73286 9.4762 8.99992 8.64573C8.7274 8.95441 8.40802 9.22065 8.053 9.43337ZM8 6H10C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6H16C16 6.86925 16.5551 7.61142 17.3332 7.88646C17.5405 7.9597 17.7645 8 18 8C19.1046 8 20 7.10457 20 6V4H4V6C4 7.10457 4.89543 8 6 8C6.23555 8 6.45952 7.9597 6.66675 7.88646C7.4449 7.61142 8 6.86925 8 6ZM20 9.46487C19.4117 9.80521 18.7286 10 18 10C17.969 10 17.9381 9.99965 17.9073 9.99894L17.0855 20H20V9.46487Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
