import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-subway-line')
export default class SubwayLine extends WeElement<IconProps> {
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
          d="M7 2V5H16.1707C16.472 4.14759 17.1476 3.47199 18 3.17071V2H20V3.17071C21.1652 3.58254 22 4.69378 22 6C22 7.30622 21.1652 8.41746 20 8.82929V19H8.82929C8.52801 19.8524 7.85241 20.528 7 20.8293V22H5V20.8293C4.14759 20.528 3.47199 19.8524 3.17071 19H2V17H3.17071C3.47199 16.1476 4.14759 15.472 5 15.1707L5 7H2V5H5V2H7ZM7 7V15.1707C7.85241 15.472 8.52801 16.1476 8.82929 17H18V8.82929C17.1476 8.52801 16.472 7.85241 16.1707 7H7ZM19 5C18.4477 5 18 5.44772 18 6C18 6.55228 18.4477 7 19 7C19.5523 7 20 6.55228 20 6C20 5.44772 19.5523 5 19 5ZM6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
