import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-calendar-1')
export default class Calendar1 extends WeElement<IconProps> {
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
          d="M8 1V4L16 4V1L18 1V4L22 4L22 22L2 22L2 4L6 4L6 1L8 1ZM4 6L4 9L20 9V6L4 6ZM20 11L4 11L4 20L20 20L20 11ZM7 13L9.00391 13L9.00391 15.0039L7 15.0039L7 13ZM11 13H13.0039V15.0039H11V13ZM15 13H17.0039V15.0039H15V13ZM7 16L9.00391 16V18.0039H7V16ZM11 16H13.0039L13.0039 18.0039H11L11 16ZM15 16H17.0039L17.0039 18.0039H15L15 16Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
