import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-lightbulb-circle')
export default class LightbulbCircle extends WeElement<IconProps> {
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
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C0.999999 5.92487 5.92487 1 12 1C18.0751 0.999999 23 5.92487 23 12ZM14.5 19H9.5V17H14.5V19ZM15.235 16H8.76445L8.52955 15.3315C8.09532 14.0958 7.55234 12.9344 7.04222 11.8763C6.68238 11.1317 6.5 10.3301 6.5 9.5C6.5 6.46672 8.96671 4 12 4C15.0344 4 17.5 6.46686 17.5 9.5C17.5 10.3294 17.3189 11.1313 16.9584 11.877C16.4479 12.9339 15.9056 14.0959 15.4702 15.3322L15.235 16ZM13.8304 14C14.2519 12.908 14.7284 11.8955 15.1575 11.007C15.3849 10.5368 15.5 10.0325 15.5 9.5C15.5 7.57114 13.9296 6 12 6C10.0713 6 8.5 7.57129 8.5 9.5C8.5 10.0315 8.61545 10.5355 8.84327 11.0067L8.84378 11.0077C9.2716 11.8951 9.74872 12.9077 10.1699 14H13.8304Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
