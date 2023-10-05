import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-user-avatar')
export default class UserAvatar extends WeElement<IconProps> {
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
          d="M2 2L22 2L22 22L2 22L2 2ZM19.5 20H20L20 4L4 4L4 20H4.5C4.5 17.2386 6.73858 15 9.5 15H14.5C17.2614 15 19.5 17.2386 19.5 20ZM12 7C10.6193 7 9.5 8.11929 9.5 9.5C9.5 10.8807 10.6193 12 12 12C13.3807 12 14.5 10.8807 14.5 9.5C14.5 8.11929 13.3807 7 12 7ZM7.5 9.5C7.5 7.01472 9.51472 5 12 5C14.4853 5 16.5 7.01472 16.5 9.5C16.5 11.9853 14.4853 14 12 14C9.51472 14 7.5 11.9853 7.5 9.5ZM9.5 17C7.84315 17 6.5 18.3431 6.5 20L17.5 20C17.5 18.3431 16.1569 17 14.5 17H9.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
