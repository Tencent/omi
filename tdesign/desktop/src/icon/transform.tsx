import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-transform')
export default class Transform extends WeElement<IconProps> {
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
          d="M4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5C4.55228 5 5 4.55228 5 4C5 3.44772 4.55228 3 4 3ZM1 4C1 2.34315 2.34315 1 4 1C5.30622 1 6.41746 1.83481 6.82929 3H17.1707C17.5825 1.83481 18.6938 1 20 1C21.6569 1 23 2.34315 23 4C23 5.30622 22.1652 6.41746 21 6.82929V17.1707C22.1652 17.5825 23 18.6938 23 20C23 21.6569 21.6569 23 20 23C18.6938 23 17.5825 22.1652 17.1707 21H6.82929C6.41746 22.1652 5.30622 23 4 23C2.34315 23 1 21.6569 1 20C1 18.6938 1.83481 17.5825 3 17.1707V6.82929C1.83481 6.41746 1 5.30622 1 4ZM5 6.82929V17.1707C5.85241 17.472 6.52801 18.1476 6.82929 19H17.1707C17.472 18.1476 18.1476 17.472 19 17.1707V6.82929C18.1476 6.52801 17.472 5.85241 17.1707 5H6.82929C6.52801 5.85241 5.85241 6.52801 5 6.82929ZM20 3C19.4477 3 19 3.44772 19 4C19 4.55228 19.4477 5 20 5C20.5523 5 21 4.55228 21 4C21 3.44772 20.5523 3 20 3ZM4 19C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21C4.55228 21 5 20.5523 5 20C5 19.4477 4.55228 19 4 19ZM20 19C19.4477 19 19 19.4477 19 20C19 20.5523 19.4477 21 20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
