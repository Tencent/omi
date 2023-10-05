import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-film')
export default class Film extends WeElement<IconProps> {
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
          d="M12 3C16.9706 3 21 7.02944 21 12C21 14.4533 20.0198 16.6756 18.4273 18.3C17.6236 19.1198 16.665 19.7861 15.5996 20.2516C14.4986 20.7326 13.2818 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM18.326 21C18.8751 20.6134 19.387 20.178 19.8555 19.7C21.7996 17.7169 23 14.9977 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23H24V21H18.326ZM12 6C11.4477 6 11 6.44772 11 7C11 7.55229 11.4477 8 12 8C12.5523 8 13 7.55229 13 7C13 6.44772 12.5523 6 12 6ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7C15 8.65686 13.6569 10 12 10C10.3431 10 9 8.65686 9 7ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11ZM4 12C4 10.3432 5.34315 9 7 9C8.65685 9 10 10.3432 10 12C10 13.6569 8.65685 15 7 15C5.34315 15 4 13.6569 4 12ZM17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11ZM14 12C14 10.3432 15.3431 9 17 9C18.6569 9 20 10.3432 20 12C20 13.6569 18.6569 15 17 15C15.3431 15 14 13.6569 14 12ZM12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16ZM9 17C9 15.3432 10.3431 14 12 14C13.6569 14 15 15.3431 15 17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
