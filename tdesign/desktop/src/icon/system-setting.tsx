import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-system-setting')
export default class SystemSetting extends WeElement<IconProps> {
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
        <path d="M1 2H23V10.25H21V4H3V16H11.5V18H1V2ZM3 20H11.5V22H3V20Z" fill="currentColor" />
        <path
          d="M19.4999 12V13.376C20.2149 13.56 20.8525 13.9367 21.354 14.4475L22.5466 13.759L23.5466 15.491L22.355 16.179C22.4494 16.5199 22.4999 16.879 22.4999 17.25C22.4999 17.621 22.4494 17.9801 22.355 18.321L23.5466 19.009L22.5466 20.741L21.354 20.0525C20.8525 20.5633 20.2149 20.94 19.4999 21.124V22.5H17.4999V21.124C16.785 20.94 16.1474 20.5633 15.6458 20.0525L14.4533 20.741L13.4533 19.009L14.6449 18.321C14.5504 17.9801 14.4999 17.621 14.4999 17.25C14.4999 16.879 14.5504 16.5199 14.6449 16.179L13.4533 15.491L14.4533 13.759L15.6458 14.4475C16.1474 13.9367 16.785 13.56 17.4999 13.376V12H19.4999ZM16.7487 16.2833C16.5902 16.5698 16.4999 16.8994 16.4999 17.25C16.4999 17.6006 16.5902 17.9302 16.7487 18.2167L16.7852 18.28C17.1351 18.8612 17.7721 19.25 18.4999 19.25C19.2278 19.25 19.8648 18.8612 20.2147 18.28L20.2512 18.2168C20.4097 17.9302 20.4999 17.6007 20.4999 17.25C20.4999 16.8993 20.4097 16.5698 20.2512 16.2832L20.2147 16.22C19.8648 15.6388 19.2278 15.25 18.4999 15.25C17.7721 15.25 17.1351 15.6388 16.7852 16.22L16.7487 16.2833Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
