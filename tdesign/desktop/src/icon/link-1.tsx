import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-link-1')
export default class Link1 extends WeElement<IconProps> {
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
          d="M19.7778 4.92892C18.4109 3.56212 16.1948 3.56209 14.828 4.92892L12.7067 7.05024L11.2925 5.63603L13.4138 3.51471C15.5617 1.36682 19.0441 1.36687 21.192 3.51471C23.3398 5.66255 23.3399 9.14499 21.192 11.2929L18.01 14.4749C15.8621 16.6228 12.3797 16.6227 10.2318 14.4749L8.69926 12.9423L10.1135 11.5281L11.646 13.0606C13.0128 14.4275 15.2289 14.4275 16.5958 13.0606L19.7778 9.87867C21.1446 8.51184 21.1446 6.29573 19.7778 4.92892ZM12.3531 10.9393C10.9863 9.57252 8.77021 9.5725 7.40338 10.9393L4.2214 14.1213C2.85457 15.4881 2.8546 17.7043 4.2214 19.0711C5.58821 20.4379 7.80432 20.4379 9.17115 19.0711L11.2925 16.9497L12.7067 18.364L10.5854 20.4853C8.43747 22.6332 4.95503 22.6331 2.80719 20.4853C0.659347 18.3374 0.659298 14.855 2.80719 12.7071L5.98917 9.52512C8.13706 7.37722 11.6195 7.37727 13.7673 9.52512L15.0632 10.821L13.649 12.2352L12.3531 10.9393Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
