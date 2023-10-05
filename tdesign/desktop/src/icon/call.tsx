import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-call')
export default class Call extends WeElement<IconProps> {
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
          d="M1 2H9.57995L11.0668 8.69061L9.2078 10.5496C10.2994 12.2508 11.7492 13.7006 13.4504 14.7922L15.3094 12.9332L22 14.4201V23H21C17.0022 23 13.2755 21.826 10.1497 19.8036C7.76894 18.2633 5.73668 16.2311 4.1964 13.8503C2.17402 10.7245 1 6.99781 1 3V2ZM3.02729 4C3.20351 7.22077 4.22584 10.214 5.87561 12.7639C7.26238 14.9074 9.09261 16.7376 11.2361 18.1244C13.786 19.7742 16.7792 20.7965 20 20.9727V16.0244L15.9473 15.1238L13.7725 17.2985L13.1102 16.9225C10.5952 15.4943 8.50568 13.4048 7.07755 10.8898L6.70146 10.2275L8.87621 8.05272L7.97561 4H3.02729Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
