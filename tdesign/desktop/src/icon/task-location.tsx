import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-task-location')
export default class TaskLocation extends WeElement<IconProps> {
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
          d="M8.5 0V2H15.5V0H17.5V2H21V10.5H19V9H5V21H14V23H3V2H6.5V0H8.5ZM5 7H19V4H5V7ZM18.75 14C17.2312 14 16 15.2312 16 16.75C16 18.0023 16.7347 19.2045 17.6148 20.1722C18.0223 20.6202 18.4324 20.9864 18.75 21.2466C19.0676 20.9864 19.4777 20.6202 19.8852 20.1722C20.7653 19.2045 21.5 18.0023 21.5 16.75C21.5 15.2312 20.2688 14 18.75 14ZM18.75 23.7013C18.4993 23.534 18.2442 23.3723 18.0005 23.1949C17.8856 23.1113 17.7252 22.9906 17.5345 22.836C17.1545 22.5281 16.6463 22.0799 16.1352 21.5179C15.1403 20.4239 14 18.7512 14 16.75C14 14.1266 16.1266 12 18.75 12C21.3734 12 23.5 14.1266 23.5 16.75C23.5 18.7512 22.3597 20.4239 21.3648 21.5179C20.8537 22.0799 20.3455 22.5281 19.9655 22.836C19.7748 22.9906 19.6144 23.1113 19.4995 23.1949C19.2558 23.3723 19.0007 23.534 18.75 23.7013ZM17.5 16H20V18H17.5V16Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
