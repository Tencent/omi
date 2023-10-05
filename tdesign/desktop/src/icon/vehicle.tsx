import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-vehicle')
export default class Vehicle extends WeElement<IconProps> {
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
          d="M0 5C0 3.89543 0.895431 3 2 3H13C14.1046 3 15 3.89543 15 5V7H13V5H2V12H8V14H2V18H8V20H5.41421L3.5 21.9142L2.08579 20.5L2.58579 20H2C0.89543 20 0 19.1046 0 18V5ZM11.323 8H21.677L24 13.8074V21.5H22V20H11V21.5H9V13.8074L11.323 8ZM11 18H22V14.1926L21.923 14H11.077L11 14.1926V18ZM11.877 12H21.123L20.323 10H12.677L11.877 12ZM3 15H5.00391V17.0039H3V15ZM12 15H14.0039V17.0039H12V15ZM19 15H21.0039V17.0039H19V15Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
