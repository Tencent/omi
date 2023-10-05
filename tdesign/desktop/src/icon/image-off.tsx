import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-image-off')
export default class ImageOff extends WeElement<IconProps> {
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
          d="M22.0002 0.585693L0.585938 21.9999L2.00015 23.4141L3.41427 22H22.0003V21.9998H22.0004V19.9998H22.0003V3.41397L23.4144 1.99991L22.0002 0.585693ZM11.5003 13.914L17.5863 20H5.41427L11.5003 13.914ZM20.0003 19.5855L12.9145 12.4998L13.9759 11.4383C14.4918 11.7922 15.1168 12 15.7903 12C17.5634 12 19.0009 10.5626 19.0009 8.78942C19.0009 8.11591 18.7931 7.49089 18.4392 6.97507L20.0003 5.41397V19.5855ZM15.5305 9.97216L16.973 8.52966C16.9913 8.61336 17.0009 8.70027 17.0009 8.78943C17.0009 9.45801 16.4589 10 15.7903 10C15.7011 10 15.6142 9.99041 15.5305 9.97216ZM2.00303 1.99974L1.99835 17.658L4.00302 15.962L4.00303 4.00028L15.3649 4.0018L17.7348 1.99766L2.00303 1.99974Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
