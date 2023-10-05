import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-palette-1')
export default class Palette1 extends WeElement<IconProps> {
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
          d="M12 4C10.4162 4 9.11111 5.30342 9.11111 6.9375C9.11111 8.57158 10.4162 9.875 12 9.875C13.5838 9.875 14.8889 8.57158 14.8889 6.9375C14.8889 5.30342 13.5838 4 12 4ZM7.11111 6.9375C7.11111 4.22234 9.28827 2 12 2C14.7117 2 16.8889 4.22234 16.8889 6.9375C16.8889 9.65266 14.7117 11.875 12 11.875C9.28827 11.875 7.11111 9.65266 7.11111 6.9375ZM5.88889 14.125C4.30508 14.125 3 15.4284 3 17.0625C3 18.6966 4.30508 20 5.88889 20C7.4727 20 8.77778 18.6966 8.77778 17.0625C8.77778 15.4284 7.4727 14.125 5.88889 14.125ZM1 17.0625C1 14.3473 3.17716 12.125 5.88889 12.125C8.60062 12.125 10.7778 14.3473 10.7778 17.0625C10.7778 19.7777 8.60062 22 5.88889 22C3.17716 22 1 19.7777 1 17.0625ZM18.1111 14.125C16.5273 14.125 15.2222 15.4284 15.2222 17.0625C15.2222 18.6966 16.5273 20 18.1111 20C19.6949 20 21 18.6966 21 17.0625C21 15.4284 19.6949 14.125 18.1111 14.125ZM13.2222 17.0625C13.2222 14.3473 15.3994 12.125 18.1111 12.125C20.8228 12.125 23 14.3473 23 17.0625C23 19.7777 20.8228 22 18.1111 22C15.3994 22 13.2222 19.7777 13.2222 17.0625Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
