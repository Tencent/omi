import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-video-camera-off')
export default class VideoCameraOff extends WeElement<IconProps> {
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
          d="M3 1.58594L22.4142 21.0002L21 22.4144L17 18.4144V20.0002H0V4.00015H2.58579L1.58579 3.00015L3 1.58594ZM4.58579 6.00015H2V18.0002H15V16.4144L4.58579 6.00015ZM7.58171 3.99869L17 4.00085L17 8.43397L24 4.23397V16.0002L24.0035 19.4162L22 17.4146V7.76634L17.0007 10.7659L17.0039 13.4209L15 11.415L15 6.00141L9.58704 6.00211L7.58171 3.99869Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
