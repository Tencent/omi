import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-setting')
export default class MapSetting extends WeElement<IconProps> {
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
          d="M9 1.84229L15.0744 5.38567L22 2.49999V11H20V5.49999L16 7.16666V11H14V7.07436L10 4.74103V16.9256L11.8677 18.0151L10.8599 19.7426L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM8 16.8333V4.74103L4 7.07436V18.5L8 16.8333Z"
          fill="currentColor"
        />
        <path
          d="M18.9999 12.75V14.126C19.7149 14.31 20.3525 14.6867 20.854 15.1975L22.0466 14.509L23.0466 16.241L21.855 16.929C21.9494 17.2699 21.9999 17.629 21.9999 18C21.9999 18.3709 21.9494 18.7301 21.855 19.071L23.0466 19.759L22.0466 21.491L20.854 20.8025C20.3525 21.3132 19.7149 21.69 18.9999 21.874V23.25H16.9999V21.874C16.285 21.69 15.6474 21.3132 15.1458 20.8025L13.9533 21.491L12.9533 19.759L14.1449 19.071C14.0504 18.7301 13.9999 18.3709 13.9999 18C13.9999 17.629 14.0504 17.2699 14.1449 16.929L12.9533 16.241L13.9533 14.509L15.1458 15.1975C15.6474 14.6867 16.285 14.31 16.9999 14.126V12.75H18.9999ZM16.2487 17.0332C16.0902 17.3198 15.9999 17.6493 15.9999 18C15.9999 18.3506 16.0902 18.6802 16.2487 18.9667L16.2852 19.03C16.6351 19.6112 17.2721 20 17.9999 20C18.7278 20 19.3648 19.6112 19.7147 19.0299L19.7512 18.9668C19.9097 18.6803 19.9999 18.3507 19.9999 18C19.9999 17.6493 19.9097 17.3197 19.7512 17.0332L19.7147 16.97C19.3648 16.3888 18.7278 16 17.9999 16C17.2721 16 16.6351 16.3888 16.2852 16.97L16.2487 17.0332Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
