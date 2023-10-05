import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-extension')
export default class Extension extends WeElement<IconProps> {
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
          d="M8 4C8 2.34315 9.34315 1 11 1C12.6569 1 14 2.34315 14 4H20V10C21.6569 10 23 11.3431 23 13C23 14.6569 21.6569 16 20 16V22H13.5974L13.4746 21.1416C13.3015 19.931 12.2586 19 11 19C9.74141 19 8.69853 19.931 8.52537 21.1416L8.40258 22H2V15.5974L2.8584 15.4746C4.069 15.3015 5 14.2586 5 13C5 11.7414 4.069 10.6985 2.8584 10.5254L2 10.4026V4H8ZM11 3C10.4477 3 10 3.44772 10 4V6H4V8.75633C5.74798 9.37425 7 11.0403 7 13C7 14.9597 5.74798 16.6257 4 17.2437V20H6.75633C7.37425 18.252 9.04027 17 11 17C12.9597 17 14.6257 18.252 15.2437 20H18V14H20C20.5523 14 21 13.5523 21 13C21 12.4477 20.5523 12 20 12H18V6H12V4C12 3.44772 11.5523 3 11 3Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
