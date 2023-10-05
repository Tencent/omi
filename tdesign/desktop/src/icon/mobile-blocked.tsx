import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-mobile-blocked')
export default class MobileBlocked extends WeElement<IconProps> {
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
          d="M4 1H20V5H18V3H6V21H18V19H20V23H4V1ZM18 8.5C16.067 8.5 14.5 10.067 14.5 12C14.5 12.6031 14.652 13.17 14.9205 13.6652L19.6654 8.92057C19.1701 8.65208 18.6032 8.5 18 8.5ZM21.0795 10.3348L16.3346 15.0794C16.8299 15.3479 17.3968 15.5 18 15.5C19.933 15.5 21.5 13.933 21.5 12C21.5 11.3969 21.348 10.83 21.0795 10.3348ZM12.5 12C12.5 8.96243 14.9624 6.5 18 6.5C19.5186 6.5 20.895 7.11675 21.8892 8.11103C22.8833 9.10523 23.5 10.4816 23.5 12C23.5 15.0376 21.0376 17.5 18 17.5C16.4814 17.5 15.105 16.8832 14.1108 15.889C13.1167 14.8948 12.5 13.5184 12.5 12ZM11 17H13.0039V19.0039H11V17Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
