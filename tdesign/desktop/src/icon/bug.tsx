import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bug')
export default class Bug extends WeElement<IconProps> {
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
          d="M9.17071 5H14.8293C14.4175 3.83481 13.3062 3 12 3C10.6938 3 9.58254 3.83481 9.17071 5ZM7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H7V6ZM5 4V6.58579L6.41421 8H17.5858L19 6.58579V4H21V7.41421L18 10.4142V12H21V14H18V15.5858L21 18.5858V22H19V19.4142L17.6394 18.0536C16.911 20.0533 15.1492 21.5565 13 21.917V22H12C9.40763 22 7.19925 20.3559 6.36064 18.0536L5 19.4142V22H3V18.5858L6 15.5858V14H3V12H6V10.4142L3 7.41421V4H5ZM8 10.4142V16C8 17.8638 9.27477 19.4299 11 19.874V10H8.41421L8 10.4142ZM13 10V19.874C14.7252 19.4299 16 17.8638 16 16V10.4142L15.5858 10H13Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
