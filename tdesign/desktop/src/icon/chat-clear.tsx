import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chat-clear')
export default class ChatClear extends WeElement<IconProps> {
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
          d="M1.5 2L22.5 2V18H6.87574L1.5 22.7038L1.5 2ZM3.5 4V18.2962L6.12427 16H20.5V4L3.5 4ZM9.17109 5.75736L11.9995 8.58579L14.8279 5.75736L16.2422 7.17157L13.4137 10L16.2422 12.8284L14.8279 14.2426L11.9995 11.4142L9.17108 14.2426L7.75687 12.8284L10.5853 10L7.75687 7.17157L9.17109 5.75736Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
