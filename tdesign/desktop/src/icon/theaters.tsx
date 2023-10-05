import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-theaters')
export default class Theaters extends WeElement<IconProps> {
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
          d="M22 22H2L2 2L22 2V22ZM20 4L17.5 4V6.5H20V4ZM20 8.5H17.5V11H20V8.5ZM20 13H17.5V15.5H20V13ZM17.5 17.5V20H20V17.5H17.5ZM15.5 15.5V13H15L15 11H15.5V8.5H15V6.5H15.5V4H8.5L8.5 6.5H9V8.5H8.5V11H9V13H8.5V15.5H9L9 17.5H8.5V20H15.5V17.5H15V15.5H15.5ZM6.5 4H4V6.5H6.5L6.5 4ZM6.5 8.5H4V11L6.5 11V8.5ZM6.5 13L4 13L4 15.5L6.5 15.5V13ZM6.5 17.5L4 17.5L4 20H6.5V17.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
