import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-user-setting')
export default class UserSetting extends WeElement<IconProps> {
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
          d="M11.5 4C9.567 4 8 5.567 8 7.5C8 9.433 9.567 11 11.5 11C13.433 11 15 9.433 15 7.5C15 5.567 13.433 4 11.5 4ZM6 7.5C6 4.46243 8.46243 2 11.5 2C14.5376 2 17 4.46243 17 7.5C17 10.5376 14.5376 13 11.5 13C8.46243 13 6 10.5376 6 7.5ZM8 16C5.79086 16 4 17.7909 4 20H12.05V22L2 22L2 20C2 16.6863 4.68629 14 8 14H12V16H8Z"
          fill="currentColor"
        />
        <path
          d="M19.4999 12.75V14.126C20.2149 14.31 20.8525 14.6867 21.354 15.1975L22.5466 14.509L23.5466 16.241L22.355 16.929C22.4494 17.2699 22.4999 17.629 22.4999 18C22.4999 18.371 22.4494 18.7301 22.355 19.071L23.5466 19.759L22.5466 21.491L21.354 20.8025C20.8525 21.3133 20.2149 21.69 19.4999 21.874V23.25H17.4999V21.874C16.785 21.69 16.1474 21.3133 15.6458 20.8025L14.4533 21.491L13.4533 19.759L14.6449 19.071C14.5504 18.7301 14.4999 18.371 14.4999 18C14.4999 17.629 14.5504 17.2699 14.6449 16.929L13.4533 16.241L14.4533 14.509L15.6458 15.1975C16.1474 14.6867 16.785 14.31 17.4999 14.126V12.75H19.4999ZM16.7487 17.0333C16.5902 17.3198 16.4999 17.6494 16.4999 18C16.4999 18.3506 16.5902 18.6802 16.7487 18.9667L16.7852 19.03C17.1351 19.6112 17.7721 20 18.4999 20C19.2278 20 19.8648 19.6112 20.2147 19.03L20.2512 18.9668C20.4097 18.6802 20.4999 18.3507 20.4999 18C20.4999 17.6493 20.4097 17.3198 20.2512 17.0332L20.2147 16.97C19.8648 16.3888 19.2278 16 18.4999 16C17.7721 16 17.1351 16.3888 16.7852 16.97L16.7487 17.0333Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
