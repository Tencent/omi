import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-user-unlocked')
export default class UserUnlocked extends WeElement<IconProps> {
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
          d="M11.5 4C9.567 4 8 5.567 8 7.5C8 9.433 9.567 11 11.5 11C13.433 11 15 9.433 15 7.5C15 5.567 13.433 4 11.5 4ZM6 7.5C6 4.46243 8.46243 2 11.5 2C14.5376 2 17 4.46243 17 7.5C17 10.5376 14.5376 13 11.5 13C8.46243 13 6 10.5376 6 7.5ZM18 14C17.3096 14 16.75 14.5596 16.75 15.25V16H22.4985V22.5H13.4985V16H14.75V15.25C14.75 13.4551 16.2051 12 18 12C18.8936 12 19.7045 12.3619 20.291 12.9448L21.0003 13.6498L19.5904 15.0683L18.8811 14.3634C18.6541 14.1377 18.3441 14 18 14ZM15.4985 18V20.5H20.4985V18H15.4985ZM8 16C5.79086 16 4 17.7909 4 20H11.5508V22H2V20C2 16.6863 4.68629 14 8 14H11.5V16H8Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
