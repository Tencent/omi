import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-wealth')
export default class Wealth extends WeElement<IconProps> {
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
          d="M6.75 2.5H17.25V5.25C17.25 6.82062 16.5603 8.23016 15.4672 9.19226C17.3447 9.97683 18.8992 11.379 19.8768 13.1431L20.3615 14.0178L18.6122 14.9872L18.1275 14.1126C16.9324 11.9561 14.6356 10.5 12 10.5C8.13401 10.5 5 13.634 5 17.5V18C5 19.1046 5.89543 20 7 20H14V22H7C4.79086 22 3 20.2091 3 18V17.5C3 13.7583 5.28335 10.5499 8.53267 9.19218C7.43966 8.23008 6.75 6.82058 6.75 5.25V2.5ZM12 8.5C13.7949 8.5 15.25 7.04493 15.25 5.25V4.5H8.75V5.25C8.75 7.04493 10.2051 8.5 12 8.5ZM16 16H23V18H16V16ZM16 20H23V22H16V20Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
