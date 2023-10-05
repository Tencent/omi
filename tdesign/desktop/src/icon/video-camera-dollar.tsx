import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-video-camera-dollar')
export default class VideoCameraDollar extends WeElement<IconProps> {
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
          d="M6.55651e-07 3.99805L17 3.99805L17 8.43186L24 4.23186V19.7212L17 15.7212V19.998H0L6.55651e-07 3.99805ZM17 13.4177L22 16.2749V7.76423L17 10.7642V13.4177ZM2 5.99805L2 17.998L15 17.998L15 5.99805L2 5.99805ZM9.50004 7V8H11.5V10H7.50004V11L9.50004 11C10.6046 11 11.5 11.8954 11.5 13V14C11.5 15.1046 10.6046 16 9.50004 16L9.50004 17L7.50004 17L7.50004 16L5.50004 16V14H9.50004V13H7.50004C6.39548 13 5.50004 12.1046 5.50004 11V10C5.50004 8.89543 6.39547 8 7.50004 8V7H9.50004Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
