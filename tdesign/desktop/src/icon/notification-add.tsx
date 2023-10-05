import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-notification-add')
export default class NotificationAdd extends WeElement<IconProps> {
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
          d="M4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8V12.6972L22 15.6972V20H16.3885C15.9338 22.004 14.1416 23.5 12 23.5C9.85841 23.5 8.06624 22.004 7.61151 20H2V15.6972L4 12.6972V8ZM9.70802 20C10.0938 20.883 10.9748 21.5 12 21.5C13.0252 21.5 13.9062 20.883 14.292 20H9.70802ZM12 2C8.68629 2 6 4.68629 6 8V13.3028L4 16.3028V18H20V16.3028L18 13.3028V8C18 4.68629 15.3137 2 12 2ZM13 6L13 9H16V11H13V14H11V11L8 11L8 9L11 9L11 6L13 6Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
