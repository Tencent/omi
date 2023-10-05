import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-camera-1')
export default class Camera1 extends WeElement<IconProps> {
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
          d="M12 3C8.13401 3 5 6.13401 5 10C5 12.9361 6.80802 15.4524 9.37522 16.4915C10.1845 16.8191 11.0699 17 12 17C12.9301 17 13.8155 16.8191 14.6248 16.4915C17.192 15.4524 19 12.9361 19 10C19 6.13401 15.866 3 12 3ZM3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10C21 13.4759 19.0298 16.4897 16.1481 17.9889L16.8053 21H19V23H5V21H7.19473L7.85195 17.9889C4.97025 16.4897 3 13.4759 3 10ZM9.74081 18.7138L9.24181 21H14.7582L14.2592 18.7138C13.5366 18.9007 12.7794 19 12 19C11.2206 19 10.4634 18.9007 9.74081 18.7138ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8ZM8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
