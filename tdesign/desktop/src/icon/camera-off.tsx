import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-camera-off')
export default class CameraOff extends WeElement<IconProps> {
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
          d="M2.00015 0.585693L22.4144 20.9999L21.0002 22.4141L19.5859 20.9999H1.00015V4.99991H3.58594L0.585938 1.99991L2.00015 0.585693ZM5.58594 6.99991H3.00015V18.9999H17.5859L15.049 16.463C14.2056 17.1126 13.1478 17.4999 12.0002 17.4999C9.23873 17.4999 7.00015 15.2613 7.00015 12.4999C7.00015 11.3522 7.3875 10.2945 8.03709 9.45106L5.58594 6.99991ZM9.47115 10.8851C9.17259 11.3515 9.00015 11.9054 9.00015 12.4999C9.00015 14.1568 10.3433 15.4999 12.0002 15.4999C12.5947 15.4999 13.1485 15.3275 13.6149 15.0289L9.47115 10.8851ZM7.88212 1.99991H16.1182L17.6182 4.99991H23.0002V18.9999H21.0002V6.99991H16.3821L14.8821 3.99991H9.11819L8.47861 5.27905L6.68976 4.38462L7.88212 1.99991Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
