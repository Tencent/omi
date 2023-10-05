import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-location')
export default class MapLocation extends WeElement<IconProps> {
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
          d="M9 1.84229L15.0744 5.38567L22 2.49999V11H20V5.49999L16 7.16666V11H14V7.07436L10 4.74103V16.9256L11.8677 18.0151L10.8599 19.7426L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM8 16.8333V4.74103L4 7.07436V18.5L8 16.8333ZM18 14C16.4812 14 15.25 15.2312 15.25 16.75C15.25 18.0023 15.9847 19.2045 16.8648 20.1722C17.2723 20.6202 17.6824 20.9864 18 21.2466C18.3176 20.9864 18.7277 20.6202 19.1352 20.1722C20.0153 19.2045 20.75 18.0023 20.75 16.75C20.75 15.2312 19.5188 14 18 14ZM18 23.7013L17.4453 23.332L17.4432 23.3306L17.4392 23.3279L17.4271 23.3198L17.3874 23.2924C17.3542 23.2694 17.308 23.2368 17.2505 23.1949C17.1356 23.1113 16.9752 22.9906 16.7845 22.836C16.4045 22.5281 15.8963 22.0799 15.3852 21.5179C14.3903 20.4239 13.25 18.7512 13.25 16.75C13.25 14.1266 15.3766 12 18 12C20.6234 12 22.75 14.1266 22.75 16.75C22.75 18.7512 21.6097 20.4239 20.6148 21.5179C20.1037 22.0799 19.5955 22.5281 19.2155 22.836C19.0248 22.9906 18.8644 23.1113 18.7495 23.1949C18.692 23.2368 18.6458 23.2694 18.6126 23.2924L18.5729 23.3198L18.5608 23.3279L18.5568 23.3306L18.5553 23.3316L18 23.7013ZM16.75 16H19.25V18H16.75V16Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
