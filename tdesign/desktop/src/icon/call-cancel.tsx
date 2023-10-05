import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-call-cancel')
export default class CallCancel extends WeElement<IconProps> {
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
          d="M16.3799 1.96582L18.5012 4.08714L20.6225 1.96582L22.0367 3.38003L19.9154 5.50135L22.0367 7.62267L20.6225 9.03689L18.5012 6.91557L16.3799 9.03689L14.9657 7.62267L17.087 5.50135L14.9657 3.38003L16.3799 1.96582ZM1 2.00003H9.57995L11.0668 8.69064L9.2078 10.5496C10.2994 12.2508 11.7492 13.7007 13.4504 14.7922L15.3094 12.9333L22 14.4201V23H21C17.0022 23 13.2755 21.826 10.1497 19.8036C7.76894 18.2634 5.73668 16.2311 4.1964 13.8504C2.17402 10.7245 1 6.99784 1 3.00003V2.00003ZM3.02729 4.00003C3.20351 7.2208 4.22584 10.214 5.87561 12.764C7.26238 14.9074 9.09261 16.7377 11.2361 18.1244C13.786 19.7742 16.7792 20.7965 20 20.9727V16.0244L15.9473 15.1238L13.7725 17.2986L13.1102 16.9225C10.5952 15.4944 8.50568 13.4049 7.07755 10.8898L6.70146 10.2275L8.87621 8.05276L7.97561 4.00003H3.02729Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
