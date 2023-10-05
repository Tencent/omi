import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-tower-3')
export default class Tower3 extends WeElement<IconProps> {
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
          d="M11.0002 3.12602V1H13.0002V3.12602C14.7254 3.57006 16.0002 5.13616 16.0002 7C16.0002 8.22945 15.4452 9.32849 14.5748 10.0613L16.1274 23H7.87305L9.42569 10.0613C8.55527 9.32849 8.00022 8.22945 8.00022 7C8.00022 5.13616 9.27499 3.57006 11.0002 3.12602ZM11.334 10.9446L10.1274 21H13.873L12.6664 10.9446C12.4495 10.981 12.2269 11 12.0002 11C11.7735 11 11.5509 10.981 11.334 10.9446ZM12.0002 5C10.8957 5 10.0002 5.89543 10.0002 7C10.0002 7.73599 10.3972 8.38039 10.9936 8.72876C11.2884 8.901 11.6312 9 12.0002 9C12.3692 9 12.712 8.901 13.0069 8.72876C13.6032 8.38039 14.0002 7.73599 14.0002 7C14.0002 5.89543 13.1048 5 12.0002 5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
