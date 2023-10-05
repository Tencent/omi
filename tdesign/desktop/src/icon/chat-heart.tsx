import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chat-heart')
export default class ChatHeart extends WeElement<IconProps> {
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
          d="M1.5 2H22.5V18H6.87574L1.5 22.7038V2ZM3.5 4V18.2962L6.12426 16H20.5V4H3.5ZM12.0005 5.77202C10.741 4.95406 9.03922 5.09735 7.93466 6.2019C6.66546 7.47111 6.66546 9.52889 7.93466 10.7981L12.0005 14.864L16.0664 10.7981C17.3356 9.52889 17.3356 7.47111 16.0664 6.2019C14.9618 5.09735 13.26 4.95406 12.0005 5.77202ZM11.1166 7.61612L12.0005 8.5L12.8844 7.61612C13.3726 7.12796 14.164 7.12796 14.6522 7.61612C15.1403 8.10427 15.1403 8.89573 14.6522 9.38388L12.0005 12.0355L9.34888 9.38388C8.86072 8.89573 8.86072 8.10427 9.34888 7.61612C9.83703 7.12796 10.6285 7.12796 11.1166 7.61612Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
